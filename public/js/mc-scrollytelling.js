/**
 * Monte Carlo Simulation Scratchpad Series
 * Scrollytelling & Interactive Mathematical Visualizers Engine
 * File: static/js/mc-scrollytelling.js
 * (Enhanced with Phone-Friendly & Touch-Responsive Architecture)
 */

(function () {
  'use strict';

  // Registry for active visualizers
  const visualizers = {};

  function initAll() {
    initThemeSync();
    initScrollytelling();
    initInteractiveWidgets();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAll);
  } else {
    // If DOM is already interactive or complete, initialize immediately
    setTimeout(initAll, 0);
  }

  // =========================================================================
  // 0. Dark / Light Theme Sync
  // Ensures data-theme="dark" is ALWAYS in sync with Gokarna theme toggle
  // =========================================================================
  function isDarkTheme() {
    const darkThemeLink = document.getElementById('dark-theme');
    if (darkThemeLink) {
      return !darkThemeLink.disabled;
    }
    return (
      localStorage.getItem('theme-preference') === 'dark' ||
      window.matchMedia('(prefers-color-scheme: dark)').matches
    );
  }

  function syncTheme() {
    const dark = isDarkTheme();
    document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light');
    document.body.classList.toggle('dark-theme', dark);

    // Redraw all active visualizers with theme-adapted colors
    Object.values(visualizers).forEach((vis) => {
      if (typeof vis.draw === 'function') vis.draw();
    });
  }

  function initThemeSync() {
    syncTheme();

    // Listen to clicks on dark theme toggles
    document.querySelectorAll('.dark-theme-toggle').forEach((el) => {
      el.addEventListener('click', () => {
        setTimeout(syncTheme, 50);
      });
    });

    // Observe changes to the disabled attribute on #dark-theme
    const darkThemeLink = document.getElementById('dark-theme');
    if (darkThemeLink) {
      const observer = new MutationObserver(() => syncTheme());
      observer.observe(darkThemeLink, { attributes: true, attributeFilter: ['disabled'] });
    }
  }

  // =========================================================================
  // 1. Scrollytelling Setup (IntersectionObserver + Mobile Stepper)
  // =========================================================================
  function initScrollytelling() {
    const containers = document.querySelectorAll('.mc-scrolly-container');
    if (!containers.length) return;

    containers.forEach((container, idx) => {
      const visualizerType = container.getAttribute('data-visualizer') || 'dartboard-pi';
      const containerId = container.id || `mc-scrolly-${idx}`;
      container.id = containerId;

      if (visualizerType === 'dartboard-pi') {
        visualizers[containerId] = new DartboardPiVisualizer(container);
      } else if (visualizerType === 'marsaglia-lattice') {
        visualizers[containerId] = new MarsagliaLatticeVisualizer(container);
      } else if (visualizerType === 'cdf-raytracer') {
        visualizers[containerId] = new CDFRayTracerVisualizer(container);
      } else if (visualizerType === 'rejection-sampler') {
        visualizers[containerId] = new RejectionSamplerVisualizer(container);
      } else if (visualizerType === 'copula-morph') {
        visualizers[containerId] = new CopulaMorphVisualizer(container);
      } else if (visualizerType === 'lln-clt-trajectory') {
        visualizers[containerId] = new LLNCLTTrajectoryVisualizer(container);
      }

      setupStepObserver(container, containerId);
      setupMobileStepper(container, containerId);

      const steps = container.querySelectorAll('.mc-scrolly-step');
      steps.forEach((step) => {
        step.addEventListener('click', () => {
          const stepNum = parseInt(step.getAttribute('data-step'), 10);
          activateStep(container, step, stepNum, containerId);
          step.scrollIntoView({ behavior: 'smooth', block: 'center' });
        });
      });
    });
  }

  function setupStepObserver(container, containerId) {
    const steps = container.querySelectorAll('.mc-scrolly-step');
    if (!steps.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.3) {
            const step = entry.target;
            const stepNum = parseInt(step.getAttribute('data-step'), 10);
            activateStep(container, step, stepNum, containerId);
          }
        });
      },
      { root: null, rootMargin: '-15% 0px -30% 0px', threshold: [0.1, 0.35, 0.75] }
    );

    steps.forEach((step) => observer.observe(step));
  }

  function setupMobileStepper(container, containerId) {
    const stageHeader = container.querySelector('.mc-stage-header');
    const steps = container.querySelectorAll('.mc-scrolly-step');
    if (!stageHeader || steps.length < 2) return;

    let stepper = stageHeader.querySelector('.mc-mobile-stepper');
    if (!stepper) {
      stepper = document.createElement('div');
      stepper.className = 'mc-mobile-stepper';
      stepper.innerHTML = `
        <button class="mc-step-nav-btn mc-step-prev" aria-label="Previous step" title="Previous step">◀</button>
        <span class="mc-step-counter">1/${steps.length}</span>
        <button class="mc-step-nav-btn mc-step-next" aria-label="Next step" title="Next step">▶</button>
      `;
      stageHeader.appendChild(stepper);

      const prevBtn = stepper.querySelector('.mc-step-prev');
      const nextBtn = stepper.querySelector('.mc-step-next');

      prevBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        const currentActive = container.querySelector('.mc-scrolly-step.active');
        let currentStep = currentActive ? parseInt(currentActive.getAttribute('data-step'), 10) : 1;
        let targetStep = currentStep > 1 ? currentStep - 1 : steps.length;
        const targetEl = container.querySelector(`.mc-scrolly-step[data-step="${targetStep}"]`);
        if (targetEl) {
          activateStep(container, targetEl, targetStep, containerId);
          targetEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      });

      nextBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        const currentActive = container.querySelector('.mc-scrolly-step.active');
        let currentStep = currentActive ? parseInt(currentActive.getAttribute('data-step'), 10) : 1;
        let targetStep = currentStep < steps.length ? currentStep + 1 : 1;
        const targetEl = container.querySelector(`.mc-scrolly-step[data-step="${targetStep}"]`);
        if (targetEl) {
          activateStep(container, targetEl, targetStep, containerId);
          targetEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      });
    }
  }

  function activateStep(container, activeStep, stepNum, containerId) {
    const allSteps = container.querySelectorAll('.mc-scrolly-step');
    allSteps.forEach((s) => s.classList.remove('active'));
    activeStep.classList.add('active');

    // Update mobile step counter
    const counter = container.querySelector('.mc-step-counter');
    if (counter) {
      counter.textContent = `${stepNum}/${allSteps.length}`;
    }

    if (visualizers[containerId] && typeof visualizers[containerId].setStep === 'function') {
      visualizers[containerId].setStep(stepNum);
    }
  }

  // =========================================================================
  // 2. Visualizer: Dartboard Pi (MC 01)
  // =========================================================================
  class DartboardPiVisualizer {
    constructor(container) {
      this.container = container;
      this.canvas = container.querySelector('canvas');
      if (!this.canvas) return;
      this.ctx = this.canvas.getContext('2d');

      this.hudSamples = container.querySelector('#hud-samples');
      this.hudEstimate = container.querySelector('#hud-estimate');
      this.hudError = container.querySelector('#hud-error');

      this.btnPlay = container.querySelector('#btn-play');
      this.btnReset = container.querySelector('#btn-reset');
      this.sliderN = container.querySelector('#slider-n');

      this.points = [];
      this.hits = 0;
      this.maxPoints = 1500;
      this.currentStep = 1;
      this.animating = false;
      this.animationId = null;
      this.showConvergencePlot = false;
      this.convergenceHistory = [];

      this.setupCanvas();
      this.bindEvents();
      this.setStep(1);
    }

    setupCanvas() {
      const dpr = window.devicePixelRatio || 1;
      const rect = this.canvas.parentElement.getBoundingClientRect();
      const width = rect.width || 440;
      const height = rect.height || 330;

      this.canvas.width = width * dpr;
      this.canvas.height = height * dpr;
      this.ctx.scale(dpr, dpr);
      this.width = width;
      this.height = height;

      window.addEventListener('resize', () => {
        const r = this.canvas.parentElement.getBoundingClientRect();
        this.canvas.width = (r.width || 440) * dpr;
        this.canvas.height = (r.height || 330) * dpr;
        this.ctx.scale(dpr, dpr);
        this.width = r.width || 440;
        this.height = r.height || 330;
        this.draw();
      });
    }

    bindEvents() {
      if (this.btnPlay) {
        this.btnPlay.addEventListener('click', () => {
          if (this.animating) this.pause();
          else this.play();
        });
      }

      if (this.btnReset) {
        this.btnReset.addEventListener('click', () => this.reset());
      }

      if (this.sliderN) {
        this.sliderN.addEventListener('input', (e) => {
          this.maxPoints = parseInt(e.target.value, 10);
          if (this.points.length > this.maxPoints) {
            this.points = this.points.slice(0, this.maxPoints);
            this.hits = this.points.filter((p) => p.inside).length;
            this.updateConvergenceHistory();
            this.updateHud();
            this.draw();
          } else if (!this.animating) {
            this.play();
          }
        });
      }
    }

    setStep(stepNum) {
      this.currentStep = stepNum;

      if (stepNum === 1) {
        this.pause();
        this.points = [];
        this.hits = 0;
        this.convergenceHistory = [];
        this.showConvergencePlot = false;
        this.updateHud();
        this.draw();
      } else if (stepNum === 2) {
        this.pause();
        this.showConvergencePlot = false;
        this.generatePoints(50);
      } else if (stepNum === 3) {
        this.showConvergencePlot = false;
        this.maxPoints = 1500;
        if (this.sliderN) this.sliderN.value = 1500;
        this.play();
      } else if (stepNum === 4) {
        this.showConvergencePlot = true;
        if (this.points.length < 500) {
          this.generatePoints(800);
        }
        this.draw();
      }
    }

    generatePoints(count) {
      for (let i = 0; i < count; i++) {
        const x = Math.random();
        const y = Math.random();
        const inside = x * x + y * y <= 1.0;
        if (inside) this.hits++;
        this.points.push({ x, y, inside });

        const N = this.points.length;
        const piHat = (4 * this.hits) / N;
        this.convergenceHistory.push({ N, piHat });
      }
      this.updateHud();
      this.draw();
    }

    updateConvergenceHistory() {
      this.convergenceHistory = [];
      let runningHits = 0;
      for (let i = 0; i < this.points.length; i++) {
        if (this.points[i].inside) runningHits++;
        const N = i + 1;
        const piHat = (4 * runningHits) / N;
        this.convergenceHistory.push({ N, piHat });
      }
    }

    play() {
      this.animating = true;
      if (this.btnPlay) {
        this.btnPlay.innerHTML = '❚❚ Pause';
        this.btnPlay.classList.add('playing');
      }
      const batchSize = this.width < 420 ? 8 : 14;

      const loop = () => {
        if (!this.animating) return;

        if (this.points.length < this.maxPoints) {
          const toAdd = Math.min(batchSize, this.maxPoints - this.points.length);
          this.generatePoints(toAdd);
          this.animationId = requestAnimationFrame(loop);
        } else {
          this.pause();
        }
      };

      this.animationId = requestAnimationFrame(loop);
    }

    pause() {
      this.animating = false;
      if (this.animationId) cancelAnimationFrame(this.animationId);
      if (this.btnPlay) {
        this.btnPlay.innerHTML = '▶ Run';
        this.btnPlay.classList.remove('playing');
      }
    }

    reset() {
      this.pause();
      this.points = [];
      this.hits = 0;
      this.convergenceHistory = [];
      this.updateHud();
      this.draw();
    }

    updateHud() {
      const N = this.points.length;
      if (this.hudSamples) {
        this.hudSamples.innerHTML = `N: <strong>${N.toLocaleString()}</strong>`;
      }

      if (N === 0) {
        if (this.hudEstimate) this.hudEstimate.innerHTML = `π̂: <strong>--</strong>`;
        if (this.hudError) this.hudError.innerHTML = `SE: <strong>--</strong>`;
        return;
      }

      const piHat = (4 * this.hits) / N;
      const pHat = this.hits / N;
      const standardError = 4 * Math.sqrt((pHat * (1 - pHat)) / N);

      if (this.hudEstimate) {
        this.hudEstimate.innerHTML = `π̂: <strong>${piHat.toFixed(4)}</strong>`;
      }
      if (this.hudError) {
        this.hudError.innerHTML = `SE: <strong>±${standardError.toFixed(4)}</strong>`;
      }
    }

    draw() {
      const ctx = this.ctx;
      const w = this.width;
      const h = this.height;
      const dark = isDarkTheme();
      const isPhone = w < 420;

      ctx.clearRect(0, 0, w, h);

      if (this.showConvergencePlot) {
        this.drawConvergencePlot();
        return;
      }

      const padding = isPhone ? 14 : 28;
      const boxSize = Math.min(w - padding * 2, h - padding * 2);
      const originX = padding + (w - padding * 2 - boxSize) / 2;
      const originY = h - padding - (h - padding * 2 - boxSize) / 2;

      // Bounding box [0, 1] x [0, 1]
      ctx.strokeStyle = dark ? 'rgba(99, 102, 241, 0.6)' : 'rgba(99, 102, 241, 0.4)';
      ctx.lineWidth = 1.5;
      ctx.fillStyle = dark ? 'rgba(15, 23, 42, 0.6)' : 'rgba(241, 245, 249, 0.7)';
      ctx.fillRect(originX, originY - boxSize, boxSize, boxSize);
      ctx.strokeRect(originX, originY - boxSize, boxSize, boxSize);

      // Quarter circle filled sector
      ctx.beginPath();
      ctx.moveTo(originX, originY);
      ctx.arc(originX, originY, boxSize, -Math.PI / 2, 0, false);
      ctx.closePath();
      ctx.fillStyle = 'rgba(6, 182, 212, 0.16)';
      ctx.fill();

      // Arc boundary line
      ctx.beginPath();
      ctx.arc(originX, originY, boxSize, -Math.PI / 2, 0, false);
      ctx.strokeStyle = '#06b6d4';
      ctx.lineWidth = 2.5;
      ctx.shadowColor = 'rgba(6, 182, 212, 0.7)';
      ctx.shadowBlur = isPhone ? 6 : 10;
      ctx.stroke();
      ctx.shadowBlur = 0;

      // Coordinate Labels
      ctx.fillStyle = dark ? '#e2e8f0' : '#475569';
      ctx.font = isPhone ? '10px ui-monospace, monospace' : '12px ui-monospace, monospace';
      ctx.fillText('(0,0)', originX - 6, originY + (isPhone ? 12 : 18));
      ctx.fillText('(1,0)', originX + boxSize - (isPhone ? 14 : 16), originY + (isPhone ? 12 : 18));
      ctx.fillText('(0,1)', originX - (isPhone ? 20 : 26), originY - boxSize + 10);
      if (!isPhone || boxSize > 160) {
        ctx.fillText('x² + y² ≤ 1', originX + boxSize * 0.28, originY - boxSize * 0.35);
      }

      // Points
      const ptRadius = this.points.length > 500 ? (isPhone ? 1.2 : 1.6) : isPhone ? 2.0 : 2.6;
      for (let i = 0; i < this.points.length; i++) {
        const pt = this.points[i];
        const px = originX + pt.x * boxSize;
        const py = originY - pt.y * boxSize;

        ctx.beginPath();
        ctx.arc(px, py, ptRadius, 0, Math.PI * 2);
        ctx.fillStyle = pt.inside ? '#10b981' : '#f43f5e';
        ctx.fill();
      }

      // Hit tally overlay
      if (this.points.length > 0) {
        ctx.fillStyle = dark ? '#ffffff' : '#0f172a';
        ctx.font = isPhone ? 'bold 11px sans-serif' : 'bold 13px sans-serif';
        ctx.fillText(`Hits: ${this.hits} / ${this.points.length}`, originX + 8, originY - boxSize + (isPhone ? 16 : 22));
      }
    }

    drawConvergencePlot() {
      const ctx = this.ctx;
      const w = this.width;
      const h = this.height;
      const dark = isDarkTheme();
      const isPhone = w < 420;

      const padL = isPhone ? 36 : 50;
      const padR = isPhone ? 14 : 24;
      const padT = isPhone ? 18 : 24;
      const padB = isPhone ? 28 : 36;
      const plotW = w - padL - padR;
      const plotH = h - padT - padB;

      const yMin = 2.5;
      const yMax = 3.8;
      const toY = (val) => padT + (1 - (val - yMin) / (yMax - yMin)) * plotH;
      const piY = toY(Math.PI);

      ctx.fillStyle = dark ? 'rgba(15, 23, 42, 0.7)' : 'rgba(248, 250, 252, 0.9)';
      ctx.fillRect(padL, padT, plotW, plotH);
      ctx.strokeStyle = dark ? 'rgba(255, 255, 255, 0.12)' : 'rgba(0, 0, 0, 0.08)';
      ctx.lineWidth = 1;

      // Guides
      const guides = isPhone ? [2.6, 3.0, Math.PI, 3.6] : [2.6, 2.8, 3.0, Math.PI, 3.4, 3.6];
      guides.forEach((val) => {
        const y = toY(val);
        ctx.beginPath();
        ctx.moveTo(padL, y);
        ctx.lineTo(padL + plotW, y);
        ctx.stroke();

        ctx.fillStyle = val === Math.PI ? '#f59e0b' : dark ? '#94a3b8' : '#64748b';
        ctx.font = isPhone ? '9px ui-monospace, monospace' : '11px ui-monospace, monospace';
        ctx.fillText(val === Math.PI ? 'π' : val.toFixed(1), 4, y + 3);
      });

      // True Pi line
      ctx.strokeStyle = '#f59e0b';
      ctx.lineWidth = 1.8;
      ctx.setLineDash([4, 4]);
      ctx.beginPath();
      ctx.moveTo(padL, piY);
      ctx.lineTo(padL + plotW, piY);
      ctx.stroke();
      ctx.setLineDash([]);

      const N = this.convergenceHistory.length;
      if (N < 2) {
        ctx.fillStyle = dark ? '#e2e8f0' : '#475569';
        ctx.font = '12px sans-serif';
        ctx.fillText('Accumulating samples...', padL + 15, padT + plotH / 2);
        return;
      }

      // Confidence Envelope
      ctx.beginPath();
      for (let i = 0; i < N; i++) {
        const nVal = i + 1;
        const x = padL + (i / (N - 1)) * plotW;
        const p = Math.PI / 4;
        const se = (4 * Math.sqrt(p * (1 - p))) / Math.sqrt(nVal);
        const yUpper = Math.max(padT, toY(Math.PI + 1.96 * se));
        if (i === 0) ctx.moveTo(x, yUpper);
        else ctx.lineTo(x, yUpper);
      }
      for (let i = N - 1; i >= 0; i--) {
        const nVal = i + 1;
        const x = padL + (i / (N - 1)) * plotW;
        const p = Math.PI / 4;
        const se = (4 * Math.sqrt(p * (1 - p))) / Math.sqrt(nVal);
        const yLower = Math.min(padT + plotH, toY(Math.PI - 1.96 * se));
        ctx.lineTo(x, yLower);
      }
      ctx.closePath();
      ctx.fillStyle = 'rgba(99, 102, 241, 0.18)';
      ctx.fill();

      // Estimate path
      ctx.beginPath();
      ctx.strokeStyle = '#06b6d4';
      ctx.lineWidth = 2.0;
      for (let i = 0; i < N; i++) {
        const x = padL + (i / (N - 1)) * plotW;
        const y = toY(Math.min(yMax, Math.max(yMin, this.convergenceHistory[i].piHat)));
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();

      ctx.fillStyle = dark ? '#e2e8f0' : '#475569';
      ctx.font = isPhone ? '9px sans-serif' : '11px sans-serif';
      ctx.fillText('N=1', padL, padT + plotH + (isPhone ? 14 : 20));
      ctx.fillText(`N=${N.toLocaleString()}`, padL + plotW - (isPhone ? 40 : 55), padT + plotH + (isPhone ? 14 : 20));
      ctx.fillText(isPhone ? '95% CI' : '95% Error Envelope (±1.96·SE)', padL + 6, padT + (isPhone ? 12 : 18));
    }
  }

  // =========================================================================
  // 3. Interactive Widget 1: Integral-to-Expectation Visualizer
  // =========================================================================
  class MonteCarloIntegralVisualizer {
    constructor(container) {
      this.container = container;
      this.canvas = container.querySelector('canvas');
      if (!this.canvas) return;
      this.ctx = this.canvas.getContext('2d');

      this.selectFunc = container.querySelector('#func-select');
      this.sliderN = container.querySelector('#int-slider-n');
      this.btnSample = container.querySelector('#int-btn-sample');

      this.hudTrue = container.querySelector('#int-hud-true');
      this.hudEstimate = container.querySelector('#int-hud-estimate');
      this.hudError = container.querySelector('#int-hud-error');

      this.samples = [];
      this.meanY = 0;

      this.functions = {
        sin2: {
          name: 'g(x) = sin²(x) + 0.3',
          fn: (x) => Math.sin(x) * Math.sin(x) + 0.3,
          trueVal: Math.PI / 2 + 0.3 * Math.PI,
          a: 0,
          b: Math.PI,
          yMax: 1.6
        },
        decay: {
          name: 'g(x) = 2·exp(-x) + 0.2·x',
          fn: (x) => 2 * Math.exp(-x) + 0.2 * x,
          trueVal: 2 * (1 - Math.exp(-3)) + 0.2 * (9 / 2),
          a: 0,
          b: 3,
          yMax: 2.5
        },
        parabola: {
          name: 'g(x) = 4 - (x - 2)²',
          fn: (x) => 4 - (x - 2) * (x - 2),
          trueVal: 32 / 3,
          a: 0,
          b: 4,
          yMax: 4.5
        }
      };

      this.currentFuncKey = 'sin2';
      this.setupCanvas();
      this.bindEvents();
      this.runSimulation(500);
    }

    setupCanvas() {
      const dpr = window.devicePixelRatio || 1;
      const rect = this.canvas.parentElement.getBoundingClientRect();
      const width = rect.width || 600;
      const height = rect.height || 280;

      this.canvas.width = width * dpr;
      this.canvas.height = height * dpr;
      this.ctx.scale(dpr, dpr);
      this.width = width;
      this.height = height;

      window.addEventListener('resize', () => {
        const r = this.canvas.parentElement.getBoundingClientRect();
        this.canvas.width = (r.width || 600) * dpr;
        this.canvas.height = (r.height || 280) * dpr;
        this.ctx.scale(dpr, dpr);
        this.width = r.width || 600;
        this.height = r.height || 280;
        this.draw();
      });
    }

    bindEvents() {
      if (this.selectFunc) {
        this.selectFunc.addEventListener('change', (e) => {
          this.currentFuncKey = e.target.value;
          const N = parseInt(this.sliderN.value, 10) || 500;
          this.runSimulation(N);
        });
      }

      if (this.btnSample) {
        this.btnSample.addEventListener('click', () => {
          const N = parseInt(this.sliderN.value, 10) || 500;
          this.runSimulation(N);
        });
      }

      if (this.sliderN) {
        this.sliderN.addEventListener('input', (e) => {
          this.runSimulation(parseInt(e.target.value, 10));
        });
      }
    }

    runSimulation(N) {
      const fDef = this.functions[this.currentFuncKey];
      this.samples = [];
      let sumY = 0;

      for (let i = 0; i < N; i++) {
        const x = fDef.a + Math.random() * (fDef.b - fDef.a);
        const y = fDef.fn(x);
        this.samples.push({ x, y });
        sumY += y;
      }

      this.meanY = sumY / N;
      const estArea = (fDef.b - fDef.a) * this.meanY;
      const trueArea = fDef.trueVal;
      const absErr = Math.abs(estArea - trueArea);

      if (this.hudTrue) this.hudTrue.innerHTML = `True $I$: <strong>${trueArea.toFixed(3)}</strong>`;
      if (this.hudEstimate) this.hudEstimate.innerHTML = `MC $\\hat{I}$: <strong>${estArea.toFixed(3)}</strong>`;
      if (this.hudError) this.hudError.innerHTML = `Err: <strong>${absErr.toFixed(3)}</strong>`;

      this.draw();
    }

    draw() {
      const ctx = this.ctx;
      const w = this.width;
      const h = this.height;
      const dark = isDarkTheme();
      const isPhone = w < 420;
      const fDef = this.functions[this.currentFuncKey];

      ctx.clearRect(0, 0, w, h);

      const padL = isPhone ? 32 : 45;
      const padR = isPhone ? 15 : 25;
      const padT = isPhone ? 18 : 25;
      const padB = isPhone ? 30 : 40;
      const plotW = w - padL - padR;
      const plotH = h - padT - padB;

      const toX = (x) => padL + ((x - fDef.a) / (fDef.b - fDef.a)) * plotW;
      const toY = (y) => padT + (1 - y / fDef.yMax) * plotH;

      // Shaded area
      ctx.beginPath();
      ctx.moveTo(toX(fDef.a), toY(0));
      const steps = 100;
      for (let i = 0; i <= steps; i++) {
        const xVal = fDef.a + (i / steps) * (fDef.b - fDef.a);
        ctx.lineTo(toX(xVal), toY(fDef.fn(xVal)));
      }
      ctx.lineTo(toX(fDef.b), toY(0));
      ctx.closePath();
      ctx.fillStyle = 'rgba(6, 182, 212, 0.18)';
      ctx.fill();

      // Mean Rectangle
      const rectY = toY(this.meanY);
      ctx.fillStyle = 'rgba(99, 102, 241, 0.16)';
      ctx.fillRect(padL, rectY, plotW, toY(0) - rectY);
      ctx.strokeStyle = '#6366f1';
      ctx.lineWidth = 1.8;
      ctx.setLineDash([4, 4]);
      ctx.beginPath();
      ctx.moveTo(padL, rectY);
      ctx.lineTo(padL + plotW, rectY);
      ctx.stroke();
      ctx.setLineDash([]);

      // Function Curve
      ctx.beginPath();
      for (let i = 0; i <= steps; i++) {
        const xVal = fDef.a + (i / steps) * (fDef.b - fDef.a);
        const yVal = fDef.fn(xVal);
        if (i === 0) ctx.moveTo(toX(xVal), toY(yVal));
        else ctx.lineTo(toX(xVal), toY(yVal));
      }
      ctx.strokeStyle = '#06b6d4';
      ctx.lineWidth = 2.2;
      ctx.stroke();

      // Samples
      const showCount = Math.min(this.samples.length, isPhone ? 150 : 300);
      for (let i = 0; i < showCount; i++) {
        const s = this.samples[i];
        ctx.beginPath();
        ctx.arc(toX(s.x), toY(s.y), isPhone ? 1.8 : 2.4, 0, Math.PI * 2);
        ctx.fillStyle = '#f59e0b';
        ctx.fill();
      }

      // Axes
      ctx.strokeStyle = dark ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.2)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(padL, padT);
      ctx.lineTo(padL, padT + plotH);
      ctx.lineTo(padL + plotW, padT + plotH);
      ctx.stroke();

      ctx.fillStyle = dark ? '#e2e8f0' : '#334155';
      ctx.font = isPhone ? '10px sans-serif' : '11px sans-serif';
      ctx.fillText(`a=${fDef.a}`, padL - 4, padT + plotH + (isPhone ? 14 : 18));
      ctx.fillText(`b=${fDef.b.toFixed(1)}`, padL + plotW - (isPhone ? 25 : 35), padT + plotH + (isPhone ? 14 : 18));
      ctx.fillText(isPhone ? `E[g]=${this.meanY.toFixed(2)}` : `Avg Height E[g(X)] = ${this.meanY.toFixed(3)}`, padL + 8, rectY - 5);
    }
  }

  // =========================================================================
  // 4. Interactive Widget 2: Central Limit Theorem & Error Distribution Lab
  // =========================================================================
  class CLTPlaygroundVisualizer {
    constructor(container) {
      this.container = container;
      this.canvas = container.querySelector('canvas');
      if (!this.canvas) return;
      this.ctx = this.canvas.getContext('2d');

      this.sliderN = container.querySelector('#clt-slider-n');
      this.labelN = container.querySelector('#clt-label-n');
      this.btnRun = container.querySelector('#clt-btn-run');

      this.hudMean = container.querySelector('#clt-hud-mean');
      this.hudStd = container.querySelector('#clt-hud-std');
      this.hudTheory = container.querySelector('#clt-hud-theory');

      this.numTrials = 400;
      this.trueMean = 0.5;
      this.trueVar = 1 / 12;
      this.estimates = [];

      this.setupCanvas();
      this.bindEvents();
      this.simulate(100);
    }

    setupCanvas() {
      const dpr = window.devicePixelRatio || 1;
      const rect = this.canvas.parentElement.getBoundingClientRect();
      const width = rect.width || 600;
      const height = rect.height || 280;

      this.canvas.width = width * dpr;
      this.canvas.height = height * dpr;
      this.ctx.scale(dpr, dpr);
      this.width = width;
      this.height = height;

      window.addEventListener('resize', () => {
        const r = this.canvas.parentElement.getBoundingClientRect();
        this.canvas.width = (r.width || 600) * dpr;
        this.canvas.height = (r.height || 280) * dpr;
        this.ctx.scale(dpr, dpr);
        this.width = r.width || 600;
        this.height = r.height || 280;
        this.draw();
      });
    }

    bindEvents() {
      if (this.sliderN) {
        this.sliderN.addEventListener('input', (e) => {
          const N = parseInt(e.target.value, 10);
          if (this.labelN) this.labelN.textContent = N.toLocaleString();
          this.simulate(N);
        });
      }

      if (this.btnRun) {
        this.btnRun.addEventListener('click', () => {
          const N = parseInt(this.sliderN.value, 10) || 100;
          this.simulate(N);
        });
      }
    }

    simulate(N) {
      this.estimates = [];
      let sumEst = 0;

      for (let t = 0; t < this.numTrials; t++) {
        let sampleSum = 0;
        for (let i = 0; i < N; i++) sampleSum += Math.random();
        const mean = sampleSum / N;
        this.estimates.push(mean);
        sumEst += mean;
      }

      const meanOfMeans = sumEst / this.numTrials;
      let varSum = 0;
      for (let i = 0; i < this.numTrials; i++) {
        varSum += (this.estimates[i] - meanOfMeans) * (this.estimates[i] - meanOfMeans);
      }
      const empiricalStd = Math.sqrt(varSum / (this.numTrials - 1));
      const theoreticalStd = Math.sqrt(this.trueVar / N);

      if (this.hudMean) this.hudMean.innerHTML = `Mean: <strong>${meanOfMeans.toFixed(3)}</strong>`;
      if (this.hudStd) this.hudStd.innerHTML = `Emp SE: <strong>${empiricalStd.toFixed(3)}</strong>`;
      if (this.hudTheory) this.hudTheory.innerHTML = `Th SE: <strong>${theoreticalStd.toFixed(3)}</strong>`;

      this.currentN = N;
      this.theoreticalStd = theoreticalStd;
      this.draw();
    }

    draw() {
      const ctx = this.ctx;
      const w = this.width;
      const h = this.height;
      const dark = isDarkTheme();
      const isPhone = w < 420;

      ctx.clearRect(0, 0, w, h);

      const padL = isPhone ? 30 : 40;
      const padR = isPhone ? 15 : 25;
      const padT = isPhone ? 18 : 25;
      const padB = isPhone ? 30 : 40;
      const plotW = w - padL - padR;
      const plotH = h - padT - padB;

      const numBins = isPhone ? 24 : 32;
      const spanMin = 0.25;
      const spanMax = 0.75;
      const binWidth = (spanMax - spanMin) / numBins;
      const counts = new Array(numBins).fill(0);

      this.estimates.forEach((val) => {
        if (val >= spanMin && val < spanMax) {
          const idx = Math.floor((val - spanMin) / binWidth);
          counts[idx]++;
        }
      });

      const maxCount = Math.max(...counts, 10);
      const toX = (val) => padL + ((val - spanMin) / (spanMax - spanMin)) * plotW;
      const toH = (cnt) => (cnt / maxCount) * (plotH - (isPhone ? 12 : 20));

      for (let i = 0; i < numBins; i++) {
        const x1 = toX(spanMin + i * binWidth);
        const x2 = toX(spanMin + (i + 1) * binWidth);
        const barW = Math.max(1, x2 - x1 - 1.5);
        const barH = toH(counts[i]);
        const barY = padT + plotH - barH;

        ctx.fillStyle = 'rgba(99, 102, 241, 0.45)';
        ctx.fillRect(x1, barY, barW, barH);
        ctx.strokeStyle = '#6366f1';
        ctx.lineWidth = 1;
        ctx.strokeRect(x1, barY, barW, barH);
      }

      // Theoretical Gaussian Bell Curve
      const sigma = this.theoreticalStd;
      const mu = this.trueMean;
      const normFactor = (this.numTrials * binWidth) / (sigma * Math.sqrt(2 * Math.PI));

      ctx.beginPath();
      for (let i = 0; i <= 80; i++) {
        const val = spanMin + (i / 80) * (spanMax - spanMin);
        const z = (val - mu) / sigma;
        const pdf = Math.exp(-0.5 * z * z);
        const countEquivalent = pdf * normFactor;
        const x = toX(val);
        const y = padT + plotH - toH(countEquivalent);

        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.strokeStyle = '#10b981';
      ctx.lineWidth = 2.2;
      ctx.stroke();

      // Mean line
      const muX = toX(mu);
      ctx.strokeStyle = '#f59e0b';
      ctx.lineWidth = 1.8;
      ctx.setLineDash([3, 3]);
      ctx.beginPath();
      ctx.moveTo(muX, padT);
      ctx.lineTo(muX, padT + plotH);
      ctx.stroke();
      ctx.setLineDash([]);

      ctx.fillStyle = dark ? '#e2e8f0' : '#334155';
      ctx.font = isPhone ? '9px sans-serif' : '11px sans-serif';
      ctx.fillText('0.3', toX(0.3) - 6, padT + plotH + (isPhone ? 12 : 18));
      ctx.fillText(isPhone ? 'μ=0.5' : '0.5 (True Mean)', muX - (isPhone ? 14 : 35), padT + plotH + (isPhone ? 12 : 18));
      ctx.fillText('0.7', toX(0.7) - 6, padT + plotH + (isPhone ? 12 : 18));
      ctx.fillText(`CLT Bell (N=${this.currentN})`, padL + 8, padT + (isPhone ? 10 : 16));
    }
  }

  // =========================================================================
  // 5. Interactive Widget 3: Evacuation Corridor Reliability Simulator
  // =========================================================================
  class EvacuationReliabilityVisualizer {
    constructor(container) {
      this.container = container;
      this.canvas = container.querySelector('canvas');
      if (!this.canvas) return;
      this.ctx = this.canvas.getContext('2d');

      this.selectSurge = container.querySelector('#evac-surge');
      this.selectDemand = container.querySelector('#evac-demand');
      this.btnRun = container.querySelector('#evac-btn-run');

      this.hudMedian = container.querySelector('#evac-hud-median');
      this.hudP95 = container.querySelector('#evac-hud-p95');
      this.hudBuffer = container.querySelector('#evac-hud-buffer');

      this.travelTimes = [];
      this.setupCanvas();
      this.bindEvents();
      this.simulate();
    }

    setupCanvas() {
      const dpr = window.devicePixelRatio || 1;
      const rect = this.canvas.parentElement.getBoundingClientRect();
      const width = rect.width || 600;
      const height = rect.height || 280;

      this.canvas.width = width * dpr;
      this.canvas.height = height * dpr;
      this.ctx.scale(dpr, dpr);
      this.width = width;
      this.height = height;

      window.addEventListener('resize', () => {
        const r = this.canvas.parentElement.getBoundingClientRect();
        this.canvas.width = (r.width || 600) * dpr;
        this.canvas.height = (r.height || 280) * dpr;
        this.ctx.scale(dpr, dpr);
        this.width = r.width || 600;
        this.height = r.height || 280;
        this.draw();
      });
    }

    bindEvents() {
      if (this.selectSurge) this.selectSurge.addEventListener('change', () => this.simulate());
      if (this.selectDemand) this.selectDemand.addEventListener('change', () => this.simulate());
      if (this.btnRun) this.btnRun.addEventListener('click', () => this.simulate());
    }

    simulate() {
      const surgeLevel = this.selectSurge ? this.selectSurge.value : 'cat2';
      const demandLevel = this.selectDemand ? this.selectDemand.value : 'high';

      let capMean = 4000;
      let capStd = 400;
      if (surgeLevel === 'cat2') {
        capMean = 2900;
        capStd = 500;
      } else if (surgeLevel === 'cat4') {
        capMean = 1800;
        capStd = 650;
      }

      let demMean = 2800;
      let demStd = 350;
      if (demandLevel === 'high') {
        demMean = 3600;
        demStd = 600;
      }

      const N = 2500;
      this.travelTimes = [];
      const L = 15;
      const alpha = 0.15;
      const beta = 4.0;

      for (let i = 0; i < N; i++) {
        const C = Math.max(800, capMean + randn() * capStd);
        const V = Math.max(1000, demMean + randn() * demStd);
        const S0 = Math.max(25, 55 + randn() * 6);

        const freeFlowMinutes = (L / S0) * 60;
        const voc = V / C;
        const travelTime = freeFlowMinutes * (1.0 + alpha * Math.pow(voc, beta));
        this.travelTimes.push(Math.min(travelTime, 240));
      }

      this.travelTimes.sort((a, b) => a - b);
      const median = this.travelTimes[Math.floor(N * 0.5)];
      const p95 = this.travelTimes[Math.floor(N * 0.95)];
      const bufferIndex = ((p95 - median) / median) * 100;

      if (this.hudMedian) this.hudMedian.innerHTML = `Med $t_{50}$: <strong>${median.toFixed(0)}m</strong>`;
      if (this.hudP95) this.hudP95.innerHTML = `95th% $t_{95}$: <strong>${p95.toFixed(0)}m</strong>`;
      if (this.hudBuffer) this.hudBuffer.innerHTML = `BI: <strong>${bufferIndex.toFixed(0)}%</strong>`;

      this.median = median;
      this.p95 = p95;
      this.draw();
    }

    draw() {
      const ctx = this.ctx;
      const w = this.width;
      const h = this.height;
      const dark = isDarkTheme();
      const isPhone = w < 420;

      ctx.clearRect(0, 0, w, h);

      const padL = isPhone ? 28 : 40;
      const padR = isPhone ? 15 : 25;
      const padT = isPhone ? 18 : 25;
      const padB = isPhone ? 30 : 40;
      const plotW = w - padL - padR;
      const plotH = h - padT - padB;

      const numBins = isPhone ? 25 : 35;
      const tMin = 15;
      const tMax = 180;
      const binWidth = (tMax - tMin) / numBins;
      const counts = new Array(numBins).fill(0);

      this.travelTimes.forEach((t) => {
        if (t >= tMin && t < tMax) {
          const idx = Math.floor((t - tMin) / binWidth);
          counts[idx]++;
        }
      });

      const maxCount = Math.max(...counts, 10);
      const toX = (t) => padL + ((t - tMin) / (tMax - tMin)) * plotW;
      const toH = (cnt) => (cnt / maxCount) * (plotH - (isPhone ? 15 : 25));

      for (let i = 0; i < numBins; i++) {
        const x1 = toX(tMin + i * binWidth);
        const x2 = toX(tMin + (i + 1) * binWidth);
        const barW = Math.max(1, x2 - x1 - 1.5);
        const barH = toH(counts[i]);
        const barY = padT + plotH - barH;

        ctx.fillStyle = 'rgba(6, 182, 212, 0.4)';
        ctx.fillRect(x1, barY, barW, barH);
        ctx.strokeStyle = '#06b6d4';
        ctx.lineWidth = 1;
        ctx.strokeRect(x1, barY, barW, barH);
      }

      const medX = toX(this.median);
      ctx.strokeStyle = '#10b981';
      ctx.lineWidth = 2.2;
      ctx.beginPath();
      ctx.moveTo(medX, padT);
      ctx.lineTo(medX, padT + plotH);
      ctx.stroke();

      const p95X = toX(this.p95);
      ctx.strokeStyle = '#f43f5e';
      ctx.lineWidth = 2.2;
      ctx.beginPath();
      ctx.moveTo(p95X, padT);
      ctx.lineTo(p95X, padT + plotH);
      ctx.stroke();

      ctx.fillStyle = 'rgba(244, 63, 94, 0.15)';
      ctx.fillRect(medX, padT, p95X - medX, plotH);

      ctx.fillStyle = dark ? '#e2e8f0' : '#334155';
      ctx.font = isPhone ? '9px sans-serif' : '11px sans-serif';
      ctx.fillText('20m', toX(20) - 6, padT + plotH + (isPhone ? 12 : 18));
      ctx.fillText('60m', toX(60) - 6, padT + plotH + (isPhone ? 12 : 18));
      ctx.fillText(isPhone ? '120m' : '120m (Gridlock)', toX(120) - (isPhone ? 12 : 25), padT + plotH + (isPhone ? 12 : 18));

      ctx.fillStyle = '#10b981';
      ctx.fillText(isPhone ? `Med ${this.median.toFixed(0)}m` : `Median (${this.median.toFixed(0)}m)`, medX - (isPhone ? 15 : 25), padT + (isPhone ? 10 : 12));
      ctx.fillStyle = '#f43f5e';
      ctx.fillText(isPhone ? `P95 ${this.p95.toFixed(0)}m` : `95th% (${this.p95.toFixed(0)}m)`, p95X + 4, padT + (isPhone ? 10 : 12));
    }
  }

  function randn() {
    let u = 0,
      v = 0;
    while (u === 0) u = Math.random();
    while (v === 0) v = Math.random();
    return Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v);
  }

  // =========================================================================
  // 6. Visualizer: Marsaglia 3D Lattice (MC 02 Scrollytelling Stage)
  // =========================================================================
  class MarsagliaLatticeVisualizer {
    constructor(container) {
      this.container = container;
      this.canvas = container.querySelector('canvas');
      if (!this.canvas) return;
      this.ctx = this.canvas.getContext('2d');

      this.hudGen = container.querySelector('#hud-generator');
      this.hudPlanes = container.querySelector('#hud-planes');
      this.hudPeriod = container.querySelector('#hud-period');
      this.hudDim = container.querySelector('#hud-dim');

      this.btnPlay = container.querySelector('#btn-play');
      this.btnReset = container.querySelector('#btn-reset');
      this.btnAlign = container.querySelector('#btn-align-marsaglia');
      this.sliderN = container.querySelector('#slider-n');

      this.yaw = 0.65;
      this.pitch = 0.35;
      this.targetYaw = null;
      this.targetPitch = null;
      this.autoRotate = true;
      this.isDragging = false;
      this.startX = 0;
      this.startY = 0;

      this.mode = 'uniform'; // 'uniform', 'randu', 'hyperplanes', 'pcg'
      this.currentStep = 1;
      this.sampleCount = 900;
      this.points = [];

      this.setupCanvas();
      this.bindEvents();
      this.setStep(1);
      this.startRenderLoop();
    }

    setupCanvas() {
      const dpr = window.devicePixelRatio || 1;
      const rect = this.canvas.parentElement.getBoundingClientRect();
      const width = rect.width || 440;
      const height = rect.height || 330;

      this.canvas.width = width * dpr;
      this.canvas.height = height * dpr;
      this.ctx.scale(dpr, dpr);
      this.width = width;
      this.height = height;

      window.addEventListener('resize', () => {
        const r = this.canvas.parentElement.getBoundingClientRect();
        this.canvas.width = (r.width || 440) * dpr;
        this.canvas.height = (r.height || 330) * dpr;
        this.ctx.scale(dpr, dpr);
        this.width = r.width || 440;
        this.height = r.height || 330;
        this.draw();
      });
    }

    bindEvents() {
      if (this.btnPlay) {
        this.btnPlay.addEventListener('click', () => {
          this.autoRotate = !this.autoRotate;
          this.btnPlay.textContent = this.autoRotate ? '⏸ Pause' : '▶ Orbit';
        });
      }

      if (this.btnReset) {
        this.btnReset.addEventListener('click', () => {
          this.targetYaw = 0.65;
          this.targetPitch = 0.35;
          this.autoRotate = true;
          if (this.btnPlay) this.btnPlay.textContent = '⏸ Pause';
        });
      }

      if (this.btnAlign) {
        this.btnAlign.addEventListener('click', () => {
          this.alignMarsaglia();
        });
      }

      if (this.sliderN) {
        this.sliderN.addEventListener('input', (e) => {
          this.sampleCount = parseInt(e.target.value, 10);
          this.generatePoints();
          this.draw();
        });
      }

      // Mouse Drag Rotation
      this.canvas.addEventListener('mousedown', (e) => {
        this.isDragging = true;
        this.autoRotate = false;
        this.targetYaw = null;
        this.targetPitch = null;
        this.startX = e.clientX;
        this.startY = e.clientY;
      });

      window.addEventListener('mousemove', (e) => {
        if (!this.isDragging) return;
        const dx = e.clientX - this.startX;
        const dy = e.clientY - this.startY;
        this.startX = e.clientX;
        this.startY = e.clientY;
        this.yaw += dx * 0.008;
        this.pitch += dy * 0.008;
        this.pitch = Math.max(-1.45, Math.min(1.45, this.pitch));
        this.draw();
      });

      window.addEventListener('mouseup', () => {
        this.isDragging = false;
      });

      // Touch Drag Rotation for Phones
      this.canvas.addEventListener('touchstart', (e) => {
        if (e.touches.length === 1) {
          this.isDragging = true;
          this.autoRotate = false;
          this.targetYaw = null;
          this.targetPitch = null;
          this.startX = e.touches[0].clientX;
          this.startY = e.touches[0].clientY;
        }
      }, { passive: true });

      this.canvas.addEventListener('touchmove', (e) => {
        if (!this.isDragging || e.touches.length !== 1) return;
        const dx = e.touches[0].clientX - this.startX;
        const dy = e.touches[0].clientY - this.startY;
        this.startX = e.touches[0].clientX;
        this.startY = e.touches[0].clientY;
        this.yaw += dx * 0.01;
        this.pitch += dy * 0.01;
        this.pitch = Math.max(-1.45, Math.min(1.45, this.pitch));
        this.draw();
      }, { passive: true });

      this.canvas.addEventListener('touchend', () => {
        this.isDragging = false;
      });
    }

    alignMarsaglia() {
      // Marsaglia's critical viewing angle for RANDU: yaw = 96.0 deg, pitch = -56.5 deg
      this.targetYaw = 1.676;
      this.targetPitch = -0.986;
      this.autoRotate = false;
      if (this.btnPlay) this.btnPlay.textContent = '▶ Orbit';
    }

    setStep(stepNum) {
      this.currentStep = stepNum;

      if (stepNum === 1) {
        this.mode = 'uniform';
        this.sampleCount = 600;
        if (this.sliderN) this.sliderN.value = 600;
        this.targetYaw = 0.65;
        this.targetPitch = 0.35;
        this.autoRotate = true;
        this.updateHud('PCG64 / Uniform', '> 2^30 (Uniform)', '2^128', '3D Volume');
      } else if (stepNum === 2) {
        this.mode = 'randu';
        this.sampleCount = 1200;
        if (this.sliderN) this.sliderN.value = 1200;
        this.alignMarsaglia();
        this.updateHud('RANDU (IBM 1968)', 'Exactly 15 Planes!', '2^31', '3D Lattice');
      } else if (stepNum === 3) {
        this.mode = 'hyperplanes';
        this.sampleCount = 1200;
        this.targetYaw = 1.676;
        this.targetPitch = -0.986;
        this.autoRotate = false;
        this.updateHud('Marsaglia Bound', 'k <= (3! * 2^31)^(1/3) ~ 2344', '2^31', 'Planar Slices');
      } else if (stepNum === 4) {
        this.mode = 'pcg';
        this.sampleCount = 2000;
        if (this.sliderN) this.sliderN.value = 2000;
        this.targetYaw = null;
        this.autoRotate = true;
        this.updateHud('NumPy PCG64 (Modern)', 'Zero Visible Planes', '2^128', 'Full Equidistributed');
      }

      this.generatePoints();
      this.draw();
    }

    updateHud(gen, planes, period, dim) {
      if (this.hudGen) this.hudGen.textContent = gen;
      if (this.hudPlanes) this.hudPlanes.textContent = planes;
      if (this.hudPeriod) this.hudPeriod.textContent = period;
      if (this.hudDim) this.hudDim.textContent = dim;
    }

    generatePoints() {
      this.points = [];
      const N = this.sampleCount;

      if (this.mode === 'randu' || this.mode === 'hyperplanes') {
        let x = 1234567n;
        const a = 65539n;
        const m = 2147483648n;
        for (let i = 0; i < N; i++) {
          x = (a * x) % m;
          const u1 = Number(x) / 2147483648;
          x = (a * x) % m;
          const u2 = Number(x) / 2147483648;
          x = (a * x) % m;
          const u3 = Number(x) / 2147483648;

          // Plane index from relation: 9*u1 - 6*u2 + u3
          const planeVal = 9 * u1 - 6 * u2 + u3;
          const planeIdx = Math.round(planeVal);

          this.points.push({
            x: u1 - 0.5,
            y: u2 - 0.5,
            z: u3 - 0.5,
            planeIdx: planeIdx
          });
        }
      } else {
        // High-quality pseudo-random space filling (SplitMix64)
        let s = 987654321n;
        const nextFloat = () => {
          s = (s + 0x9e3779b97f4a7c15n) & 0xffffffffffffffffn;
          let z = s;
          z = ((z ^ (z >> 30n)) * 0xbf58476d1ce4e5b9n) & 0xffffffffffffffffn;
          z = ((z ^ (z >> 27n)) * 0x94d049bb133111ebn) & 0xffffffffffffffffn;
          z = z ^ (z >> 31n);
          return Number(z & 0x1fffffffffffffn) / 9007199254740992;
        };

        for (let i = 0; i < N; i++) {
          this.points.push({
            x: nextFloat() - 0.5,
            y: nextFloat() - 0.5,
            z: nextFloat() - 0.5,
            planeIdx: 0
          });
        }
      }
    }

    startRenderLoop() {
      const loop = () => {
        let needsDraw = false;

        // Smooth camera lerping
        if (this.targetYaw !== null && this.targetPitch !== null) {
          const dyaw = this.targetYaw - this.yaw;
          const dpitch = this.targetPitch - this.pitch;
          this.yaw += dyaw * 0.08;
          this.pitch += dpitch * 0.08;
          if (Math.abs(dyaw) < 0.001 && Math.abs(dpitch) < 0.001) {
            this.yaw = this.targetYaw;
            this.pitch = this.targetPitch;
            this.targetYaw = null;
            this.targetPitch = null;
          }
          needsDraw = true;
        } else if (this.autoRotate && !this.isDragging) {
          this.yaw += 0.004;
          needsDraw = true;
        }

        if (needsDraw) this.draw();
        requestAnimationFrame(loop);
      };
      requestAnimationFrame(loop);
    }

    project(x, y, z) {
      const cy = Math.cos(this.yaw), sy = Math.sin(this.yaw);
      const cp = Math.cos(this.pitch), sp = Math.sin(this.pitch);

      // Yaw rotation (about Y)
      const x1 = x * cy + z * sy;
      const y1 = y;
      const z1 = -x * sy + z * cy;

      // Pitch rotation (about X)
      const x2 = x1;
      const y2 = y1 * cp - z1 * sp;
      const z2 = y1 * sp + z1 * cp;

      const cameraDist = 2.4;
      const d = cameraDist - z2;
      const factor = (Math.min(this.width, this.height) * 0.88) / Math.max(0.1, d);

      return {
        sx: this.width / 2 + x2 * factor,
        sy: this.height / 2 - y2 * factor,
        depth: z2
      };
    }

    draw() {
      const ctx = this.ctx;
      const w = this.width;
      const h = this.height;
      const dark = isDarkTheme();

      ctx.clearRect(0, 0, w, h);

      // Background gradient
      const bgGrad = ctx.createRadialGradient(w / 2, h / 2, 20, w / 2, h / 2, Math.max(w, h) * 0.7);
      if (dark) {
        bgGrad.addColorStop(0, '#0f172a');
        bgGrad.addColorStop(1, '#090d16');
      } else {
        bgGrad.addColorStop(0, '#ffffff');
        bgGrad.addColorStop(1, '#f8fafc');
      }
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, w, h);

      // 1. Draw 3D Cube Wireframe
      const vertices = [
        [-0.5, -0.5, -0.5], [0.5, -0.5, -0.5], [0.5, 0.5, -0.5], [-0.5, 0.5, -0.5],
        [-0.5, -0.5, 0.5],  [0.5, -0.5, 0.5],  [0.5, 0.5, 0.5],  [-0.5, 0.5, 0.5]
      ];
      const projVerts = vertices.map(v => this.project(v[0], v[1], v[2]));

      const edges = [
        [0, 1], [1, 2], [2, 3], [3, 0],
        [4, 5], [5, 6], [6, 7], [7, 4],
        [0, 4], [1, 5], [2, 6], [3, 7]
      ];

      ctx.strokeStyle = dark ? 'rgba(255, 255, 255, 0.15)' : 'rgba(0, 0, 0, 0.15)';
      ctx.lineWidth = 1.2;
      edges.forEach(([i, j]) => {
        ctx.beginPath();
        ctx.moveTo(projVerts[i].sx, projVerts[i].sy);
        ctx.lineTo(projVerts[j].sx, projVerts[j].sy);
        ctx.stroke();
      });

      // Coordinate Axes
      const origin = this.project(-0.5, -0.5, -0.5);
      const axisX = this.project(0.65, -0.5, -0.5);
      const axisY = this.project(-0.5, 0.65, -0.5);
      const axisZ = this.project(-0.5, -0.5, 0.65);

      const drawAxis = (pEnd, color, label) => {
        ctx.strokeStyle = color;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(origin.sx, origin.sy);
        ctx.lineTo(pEnd.sx, pEnd.sy);
        ctx.stroke();
        ctx.fillStyle = color;
        ctx.font = 'bold 11px system-ui, sans-serif';
        ctx.fillText(label, pEnd.sx + 4, pEnd.sy + 4);
      };

      drawAxis(axisX, '#6366f1', 'X[k]');
      drawAxis(axisY, '#10b981', 'X[k+1]');
      drawAxis(axisZ, '#f59e0b', 'X[k+2]');

      // 2. In Step 3, draw the 15 Marsaglia Hyperplanes
      if (this.mode === 'hyperplanes') {
        const planeColors = [
          'rgba(244, 63, 94, 0.15)', 'rgba(245, 158, 11, 0.15)', 'rgba(16, 185, 129, 0.15)',
          'rgba(6, 182, 212, 0.15)', 'rgba(99, 102, 241, 0.15)', 'rgba(168, 85, 247, 0.15)'
        ];

        for (let c = -4; c <= 8; c++) {
          // Normal is (9, -6, 1) in normalized coords
          // Slice plane across x in [-0.5, 0.5] and z in [-0.5, 0.5]
          const col = planeColors[(c + 12) % planeColors.length];
          ctx.strokeStyle = col.replace('0.15', '0.45');
          ctx.lineWidth = 1;

          const p1 = this.project(-0.5, ((9 * 0 - c + 0) / 6) - 0.5, -0.5);
          const p2 = this.project(0.5, ((9 * 1 - c + 0) / 6) - 0.5, -0.5);
          const p3 = this.project(0.5, ((9 * 1 - c + 1) / 6) - 0.5, 0.5);
          const p4 = this.project(-0.5, ((9 * 0 - c + 1) / 6) - 0.5, 0.5);

          ctx.fillStyle = col;
          ctx.beginPath();
          ctx.moveTo(p1.sx, p1.sy);
          ctx.lineTo(p2.sx, p2.sy);
          ctx.lineTo(p3.sx, p3.sy);
          ctx.lineTo(p4.sx, p4.sy);
          ctx.closePath();
          ctx.fill();
          ctx.stroke();
        }
      }

      // 3. Draw Points with Depth Sorting
      const projectedPoints = this.points.map(p => {
        const proj = this.project(p.x, p.y, p.z);
        return {
          sx: proj.sx,
          sy: proj.sy,
          depth: proj.depth,
          planeIdx: p.planeIdx
        };
      });

      // Sort by depth (farthest first)
      projectedPoints.sort((a, b) => a.depth - b.depth);

      const palette = [
        '#f43f5e', '#fb923c', '#f59e0b', '#10b981', '#06b6d4',
        '#38bdf8', '#6366f1', '#8b5cf6', '#d946ef'
      ];

      projectedPoints.forEach(pt => {
        const radius = Math.max(1.2, 2.4 * (1 + pt.depth * 0.45));
        let color;

        if (this.mode === 'randu' || this.mode === 'hyperplanes') {
          color = palette[Math.abs(pt.planeIdx) % palette.length];
        } else if (this.mode === 'pcg') {
          color = '#06b6d4';
        } else {
          color = '#6366f1';
        }

        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.arc(pt.sx, pt.sy, radius, 0, Math.PI * 2);
        ctx.fill();
      });

      // 4. On-canvas Legend / HUD Badge
      ctx.fillStyle = dark ? 'rgba(255, 255, 255, 0.75)' : 'rgba(15, 23, 42, 0.75)';
      ctx.font = '11px ui-monospace, monospace';
      ctx.fillText(`N = ${this.sampleCount} triplets`, 14, h - 14);

      if (this.mode === 'randu' || this.mode === 'hyperplanes') {
        ctx.fillStyle = '#f43f5e';
        ctx.fillText('15 Parallel Hyperplanes Visible', w - (w < 400 ? 190 : 210), h - 14);
      }
    }
  }

  // =========================================================================
  // 7. Lab 1: LCG Spectral & Lag-Plot Explorer (MC 02 Lab 1)
  // =========================================================================
  class LCGSpectralVisualizer {
    constructor(widget) {
      this.widget = widget;
      this.canvas = widget.querySelector('canvas');
      if (!this.canvas) return;
      this.ctx = this.canvas.getContext('2d');

      this.selGen = widget.querySelector('#spectral-gen-select');
      this.selDim = widget.querySelector('#spectral-dim-select');
      this.sliderN = widget.querySelector('#spectral-slider-n');
      this.labelN = widget.querySelector('#spectral-val-n');

      this.hudBound = widget.querySelector('#spectral-hud-bound');
      this.hudStatus = widget.querySelector('#spectral-hud-status');

      this.gen = this.selGen ? this.selGen.value : 'randu';
      this.dim = this.selDim ? this.selDim.value : '2d';
      this.sampleCount = this.sliderN ? parseInt(this.sliderN.value, 10) : 800;

      this.yaw = 1.676;
      this.pitch = -0.986;
      this.isDragging = false;
      this.startX = 0;
      this.startY = 0;
      this.data = [];

      this.setupCanvas();
      this.bindEvents();
      this.generateData();
      this.draw();
    }

    setupCanvas() {
      const dpr = window.devicePixelRatio || 1;
      const rect = this.canvas.parentElement.getBoundingClientRect();
      const width = rect.width || 440;
      const height = rect.height || 290;

      this.canvas.width = width * dpr;
      this.canvas.height = height * dpr;
      this.ctx.scale(dpr, dpr);
      this.width = width;
      this.height = height;

      window.addEventListener('resize', () => {
        const r = this.canvas.parentElement.getBoundingClientRect();
        this.canvas.width = (r.width || 440) * dpr;
        this.canvas.height = (r.height || 290) * dpr;
        this.ctx.scale(dpr, dpr);
        this.width = r.width || 440;
        this.height = r.height || 290;
        this.draw();
      });
    }

    bindEvents() {
      if (this.selGen) {
        this.selGen.addEventListener('change', (e) => {
          this.gen = e.target.value;
          this.generateData();
          this.draw();
        });
      }

      if (this.selDim) {
        this.selDim.addEventListener('change', (e) => {
          this.dim = e.target.value;
          if (this.dim === '3d' && this.gen === 'randu') {
            this.yaw = 1.676;
            this.pitch = -0.986;
          } else {
            this.yaw = 0.65;
            this.pitch = 0.35;
          }
          this.generateData();
          this.draw();
        });
      }

      if (this.sliderN) {
        this.sliderN.addEventListener('input', (e) => {
          this.sampleCount = parseInt(e.target.value, 10);
          if (this.labelN) this.labelN.textContent = this.sampleCount;
          this.generateData();
          this.draw();
        });
      }

      // Drag to rotate 3D view
      this.canvas.addEventListener('mousedown', (e) => {
        if (this.dim !== '3d') return;
        this.isDragging = true;
        this.startX = e.clientX;
        this.startY = e.clientY;
      });

      window.addEventListener('mousemove', (e) => {
        if (!this.isDragging || this.dim !== '3d') return;
        const dx = e.clientX - this.startX;
        const dy = e.clientY - this.startY;
        this.startX = e.clientX;
        this.startY = e.clientY;
        this.yaw += dx * 0.009;
        this.pitch += dy * 0.009;
        this.draw();
      });

      window.addEventListener('mouseup', () => {
        this.isDragging = false;
      });

      this.canvas.addEventListener('touchstart', (e) => {
        if (this.dim !== '3d' || e.touches.length !== 1) return;
        this.isDragging = true;
        this.startX = e.touches[0].clientX;
        this.startY = e.touches[0].clientY;
      }, { passive: true });

      this.canvas.addEventListener('touchmove', (e) => {
        if (!this.isDragging || this.dim !== '3d') return;
        const dx = e.touches[0].clientX - this.startX;
        const dy = e.touches[0].clientY - this.startY;
        this.startX = e.touches[0].clientX;
        this.startY = e.touches[0].clientY;
        this.yaw += dx * 0.01;
        this.pitch += dy * 0.01;
        this.draw();
      }, { passive: true });

      this.canvas.addEventListener('touchend', () => {
        this.isDragging = false;
      });
    }

    generateData() {
      this.data = [];
      const N = this.sampleCount;

      if (this.gen === 'toy') {
        // Toy LCG: a=5, c=1, m=64
        let x = 1;
        const pts = [];
        for (let i = 0; i < N * 3; i++) {
          x = (5 * x + 1) % 64;
          pts.push(x / 64);
        }
        this.populateTuples(pts);
        if (this.hudBound) this.hudBound.textContent = 'k2D <= 11 lines (Defective)';
        if (this.hudStatus) this.hudStatus.textContent = 'Severe Striations';
      } else if (this.gen === 'randu') {
        // RANDU: a=65539, c=0, m=2^31
        let x = 1234567n;
        const pts = [];
        for (let i = 0; i < N * 3; i++) {
          x = (65539n * x) % 2147483648n;
          pts.push(Number(x) / 2147483648);
        }
        this.populateTuples(pts);
        if (this.hudBound) this.hudBound.textContent = this.dim === '2d' ? 'k2D <= 65536' : 'k3D = 15 Planes (Catastrophic)';
        if (this.hudStatus) this.hudStatus.textContent = this.dim === '2d' ? 'Appears Uniform in 2D' : 'Collapses to 15 Planes in 3D';
      } else if (this.gen === 'park-miller') {
        // Park-Miller: a=16807, c=0, m=2^31-1
        let x = 1234567n;
        const pts = [];
        for (let i = 0; i < N * 3; i++) {
          x = (16807n * x) % 2147483647n;
          pts.push(Number(x) / 2147483647);
        }
        this.populateTuples(pts);
        if (this.hudBound) this.hudBound.textContent = 'k3D <= 2344 (Better)';
        if (this.hudStatus) this.hudStatus.textContent = 'Decent in 2D/3D; Fails in 7D';
      } else {
        // PCG64 / Uniform
        let s = 123456789n;
        const pts = [];
        for (let i = 0; i < N * 3; i++) {
          s = (s + 0x9e3779b97f4a7c15n) & 0xffffffffffffffffn;
          let z = s;
          z = ((z ^ (z >> 30n)) * 0xbf58476d1ce4e5b9n) & 0xffffffffffffffffn;
          z = z ^ (z >> 31n);
          pts.push(Number(z & 0x1fffffffffffffn) / 9007199254740992);
        }
        this.populateTuples(pts);
        if (this.hudBound) this.hudBound.textContent = 'k >= 10^18 (Maximal)';
        if (this.hudStatus) this.hudStatus.textContent = 'Uniform Space Filling';
      }
    }

    populateTuples(pts) {
      if (this.dim === '2d') {
        for (let i = 0; i < this.sampleCount; i++) {
          this.data.push({ x: pts[i], y: pts[i + 1] });
        }
      } else {
        for (let i = 0; i < this.sampleCount; i++) {
          this.data.push({ x: pts[i * 3] - 0.5, y: pts[i * 3 + 1] - 0.5, z: pts[i * 3 + 2] - 0.5 });
        }
      }
    }

    draw() {
      const ctx = this.ctx;
      const w = this.width;
      const h = this.height;
      const dark = isDarkTheme();

      ctx.clearRect(0, 0, w, h);

      if (this.dim === '2d') {
        // 2D Lag Plot: U[i] vs U[i+1]
        const pad = Math.min(45, w * 0.12);
        const plotSize = Math.min(w - pad * 2, h - pad * 2);
        const ox = (w - plotSize) / 2;
        const oy = (h - plotSize) / 2;

        // Background box
        ctx.fillStyle = dark ? 'rgba(30, 41, 59, 0.4)' : 'rgba(241, 245, 249, 0.8)';
        ctx.fillRect(ox, oy, plotSize, plotSize);
        ctx.strokeStyle = dark ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.2)';
        ctx.lineWidth = 1.2;
        ctx.strokeRect(ox, oy, plotSize, plotSize);

        // Grid lines
        ctx.strokeStyle = dark ? 'rgba(255, 255, 255, 0.06)' : 'rgba(0, 0, 0, 0.05)';
        for (let g = 0.25; g < 1; g += 0.25) {
          ctx.beginPath();
          ctx.moveTo(ox + g * plotSize, oy);
          ctx.lineTo(ox + g * plotSize, oy + plotSize);
          ctx.stroke();

          ctx.beginPath();
          ctx.moveTo(ox, oy + g * plotSize);
          ctx.lineTo(ox + plotSize, oy + g * plotSize);
          ctx.stroke();
        }

        // Plot 2D points
        ctx.fillStyle = this.gen === 'toy' ? '#f43f5e' : this.gen === 'randu' ? '#f59e0b' : '#06b6d4';
        const ptRadius = this.sampleCount > 800 ? 1.5 : 2.2;
        this.data.forEach(p => {
          const px = ox + p.x * plotSize;
          const py = oy + (1 - p.y) * plotSize;
          ctx.beginPath();
          ctx.arc(px, py, ptRadius, 0, Math.PI * 2);
          ctx.fill();
        });

        // Axis Labels
        ctx.fillStyle = dark ? '#e2e8f0' : '#334155';
        ctx.font = 'bold 11px system-ui, sans-serif';
        ctx.fillText('Lag 0: U[i]', ox + plotSize / 2 - 25, oy + plotSize + 16);
        ctx.save();
        ctx.translate(ox - 10, oy + plotSize / 2 + 25);
        ctx.rotate(-Math.PI / 2);
        ctx.fillText('Lag 1: U[i+1]', 0, 0);
        ctx.restore();
      } else {
        // 3D Lag View
        const cy = Math.cos(this.yaw), sy = Math.sin(this.yaw);
        const cp = Math.cos(this.pitch), sp = Math.sin(this.pitch);

        const project = (x, y, z) => {
          const x1 = x * cy + z * sy;
          const y1 = y;
          const z1 = -x * sy + z * cy;
          const x2 = x1;
          const y2 = y1 * cp - z1 * sp;
          const z2 = y1 * sp + z1 * cp;
          const factor = (Math.min(w, h) * 0.85) / Math.max(0.1, 2.4 - z2);
          return { sx: w / 2 + x2 * factor, sy: h / 2 - y2 * factor, depth: z2 };
        };

        // Bounding cube
        const vertices = [
          [-0.5, -0.5, -0.5], [0.5, -0.5, -0.5], [0.5, 0.5, -0.5], [-0.5, 0.5, -0.5],
          [-0.5, -0.5, 0.5],  [0.5, -0.5, 0.5],  [0.5, 0.5, 0.5],  [-0.5, 0.5, 0.5]
        ];
        const pv = vertices.map(v => project(v[0], v[1], v[2]));
        const edges = [
          [0, 1], [1, 2], [2, 3], [3, 0],
          [4, 5], [5, 6], [6, 7], [7, 4],
          [0, 4], [1, 5], [2, 6], [3, 7]
        ];

        ctx.strokeStyle = dark ? 'rgba(255, 255, 255, 0.15)' : 'rgba(0, 0, 0, 0.15)';
        ctx.lineWidth = 1;
        edges.forEach(([i, j]) => {
          ctx.beginPath();
          ctx.moveTo(pv[i].sx, pv[i].sy);
          ctx.lineTo(pv[j].sx, pv[j].sy);
          ctx.stroke();
        });

        // Points
        const ptColor = this.gen === 'randu' ? '#f43f5e' : this.gen === 'toy' ? '#fb923c' : '#10b981';
        ctx.fillStyle = ptColor;
        this.data.forEach(p => {
          const pr = project(p.x, p.y, p.z);
          ctx.beginPath();
          ctx.arc(pr.sx, pr.sy, 1.8, 0, Math.PI * 2);
          ctx.fill();
        });

        ctx.fillStyle = dark ? 'rgba(255, 255, 255, 0.7)' : 'rgba(15, 23, 42, 0.7)';
        ctx.font = '11px ui-monospace, monospace';
        ctx.fillText('Drag to orbit 3D lattice', 12, h - 12);
      }
    }
  }

  // =========================================================================
  // 8. Lab 2: State Space, Periodicity & Cycle Trap (MC 02 Lab 2)
  // =========================================================================
  class CycleDetectionVisualizer {
    constructor(widget) {
      this.widget = widget;
      this.canvas = widget.querySelector('canvas');
      if (!this.canvas) return;
      this.ctx = this.canvas.getContext('2d');

      this.selPreset = widget.querySelector('#cycle-preset-select');
      this.btnStep = widget.querySelector('#cycle-btn-step');
      this.btnRun = widget.querySelector('#cycle-btn-run');

      this.hudLength = widget.querySelector('#cycle-hud-len');
      this.hudHD1 = widget.querySelector('#cycle-hd-1');
      this.hudHD2 = widget.querySelector('#cycle-hd-2');
      this.hudHD3 = widget.querySelector('#cycle-hd-3');

      this.a = 5;
      this.c = 3;
      this.m = 16;
      this.currentState = 0;
      this.visitedPath = [0];
      this.isRunning = false;
      this.runTimer = null;

      this.setupCanvas();
      this.bindEvents();
      this.applyPreset(this.selPreset ? this.selPreset.value : 'full');
      this.draw();
    }

    setupCanvas() {
      const dpr = window.devicePixelRatio || 1;
      const rect = this.canvas.parentElement.getBoundingClientRect();
      const width = rect.width || 440;
      const height = rect.height || 290;

      this.canvas.width = width * dpr;
      this.canvas.height = height * dpr;
      this.ctx.scale(dpr, dpr);
      this.width = width;
      this.height = height;

      window.addEventListener('resize', () => {
        const r = this.canvas.parentElement.getBoundingClientRect();
        this.canvas.width = (r.width || 440) * dpr;
        this.canvas.height = (r.height || 290) * dpr;
        this.ctx.scale(dpr, dpr);
        this.width = r.width || 440;
        this.height = r.height || 290;
        this.draw();
      });
    }

    bindEvents() {
      if (this.selPreset) {
        this.selPreset.addEventListener('change', (e) => {
          this.applyPreset(e.target.value);
        });
      }

      if (this.btnStep) {
        this.btnStep.addEventListener('click', () => {
          this.step();
        });
      }

      if (this.btnRun) {
        this.btnRun.addEventListener('click', () => {
          if (this.isRunning) {
            clearInterval(this.runTimer);
            this.isRunning = false;
            this.btnRun.textContent = '▶ Auto Trace';
          } else {
            this.isRunning = true;
            this.btnRun.textContent = '⏸ Pause';
            this.runTimer = setInterval(() => this.step(), 400);
          }
        });
      }
    }

    applyPreset(preset) {
      if (preset === 'full') {
        // Hull-Dobell Satisfied: a=5, c=3, m=16
        this.a = 5;
        this.c = 3;
        this.m = 16;
      } else if (preset === 'broken-c') {
        // gcd(c, m) = 4 != 1: a=5, c=4, m=16
        this.a = 5;
        this.c = 4;
        this.m = 16;
      } else if (preset === 'broken-a') {
        // a-1 not div by 4: a=3, c=1, m=16
        this.a = 3;
        this.c = 1;
        this.m = 16;
      } else if (preset === 'multiplicative') {
        // c=0: a=5, c=0, m=16
        this.a = 5;
        this.c = 0;
        this.m = 16;
      }

      this.currentState = preset === 'multiplicative' ? 1 : 0;
      this.visitedPath = [this.currentState];
      this.updateHullDobellStatus();
      this.draw();
    }

    step() {
      const next = (this.a * this.currentState + this.c) % this.m;
      this.currentState = next;
      this.visitedPath.push(next);
      if (this.visitedPath.length > this.m * 2) {
        this.visitedPath.shift();
      }
      this.draw();
    }

    updateHullDobellStatus() {
      const gcd = (x, y) => (!y ? x : gcd(y, x % y));
      const isCoprime = gcd(this.c, this.m) === 1;

      // Prime factors of 16 is 2. 5 - 1 = 4 is div by 2.
      const primeDiv = (this.a - 1) % 2 === 0;

      // 4 divides 16 => 4 divides (a-1)
      const fourDiv = (this.a - 1) % 4 === 0;

      if (this.hudHD1) this.hudHD1.textContent = isCoprime ? '✓ Pass (Coprime)' : '✗ Fail (Shared Factors)';
      if (this.hudHD2) this.hudHD2.textContent = primeDiv ? '✓ Pass (Divisible)' : '✗ Fail (Not Divisible)';
      if (this.hudHD3) this.hudHD3.textContent = fourDiv ? '✓ Pass (Div by 4)' : '✗ Fail (Not Div by 4)';

      // Calculate actual cycle length
      let s = this.currentState;
      const seen = {};
      let len = 0;
      while (!seen[s] && len <= this.m) {
        seen[s] = true;
        s = (this.a * s + this.c) % this.m;
        len++;
      }

      if (this.hudLength) {
        this.hudLength.textContent = `${len} / ${this.m} states (${len === this.m ? '100% Full Period' : 'Defective Trap!'})`;
      }
    }

    draw() {
      const ctx = this.ctx;
      const w = this.width;
      const h = this.height;
      const dark = isDarkTheme();

      ctx.clearRect(0, 0, w, h);

      const cx = w / 2;
      const cy = h / 2;
      const radius = Math.min(w, h) * 0.36;

      // Calculate node positions around the ring
      const nodes = [];
      for (let i = 0; i < this.m; i++) {
        const theta = (i / this.m) * Math.PI * 2 - Math.PI / 2;
        nodes.push({
          val: i,
          x: cx + radius * Math.cos(theta),
          y: cy + radius * Math.sin(theta)
        });
      }

      // 1. Draw Ring Track
      ctx.strokeStyle = dark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.06)';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.arc(cx, cy, radius, 0, Math.PI * 2);
      ctx.stroke();

      // 2. Draw Transition Arcs
      for (let i = 0; i < this.m; i++) {
        const target = (this.a * i + this.c) % this.m;
        const n1 = nodes[i];
        const n2 = nodes[target];

        ctx.strokeStyle = dark ? 'rgba(99, 102, 241, 0.22)' : 'rgba(99, 102, 241, 0.18)';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(n1.x, n1.y);
        ctx.quadraticCurveTo(cx, cy, n2.x, n2.y);
        ctx.stroke();
      }

      // 3. Draw Visited Trail
      if (this.visitedPath.length > 1) {
        ctx.strokeStyle = '#10b981';
        ctx.lineWidth = 2.5;
        for (let j = 1; j < this.visitedPath.length; j++) {
          const n1 = nodes[this.visitedPath[j - 1]];
          const n2 = nodes[this.visitedPath[j]];
          ctx.beginPath();
          ctx.moveTo(n1.x, n1.y);
          ctx.quadraticCurveTo(cx, cy, n2.x, n2.y);
          ctx.stroke();
        }
      }

      // 4. Draw Nodes
      nodes.forEach(n => {
        const isCurrent = n.val === this.currentState;
        const isVisited = this.visitedPath.includes(n.val);

        ctx.fillStyle = isCurrent
          ? '#f43f5e'
          : isVisited
          ? '#10b981'
          : dark ? '#1e293b' : '#e2e8f0';

        ctx.beginPath();
        ctx.arc(n.x, n.y, isCurrent ? 13 : 9, 0, Math.PI * 2);
        ctx.fill();

        ctx.strokeStyle = isCurrent
          ? '#ffffff'
          : dark ? 'rgba(255, 255, 255, 0.3)' : 'rgba(0, 0, 0, 0.2)';
        ctx.lineWidth = 1.5;
        ctx.stroke();

        ctx.fillStyle = isCurrent ? '#ffffff' : dark ? '#f8fafc' : '#0f172a';
        ctx.font = 'bold 9px system-ui, sans-serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(n.val.toString(), n.x, n.y);
      });

      // Reset alignment
      ctx.textAlign = 'start';
      ctx.textBaseline = 'alphabetic';

      // Formula in Center
      ctx.fillStyle = dark ? '#e2e8f0' : '#1e293b';
      ctx.font = 'bold 12px ui-monospace, monospace';
      ctx.textAlign = 'center';
      ctx.fillText(`X[n+1] = (${this.a}X + ${this.c}) mod ${this.m}`, cx, cy - 6);

      ctx.font = '10px system-ui, sans-serif';
      ctx.fillStyle = '#6366f1';
      ctx.fillText(`Active State: X = ${this.currentState}`, cx, cy + 12);
      ctx.textAlign = 'start';
    }
  }

  // =========================================================================
  // 9. Lab 3: Parallel Stream Collision Calculator (MC 02 Lab 3)
  // =========================================================================
  class ParallelSeedCollisionVisualizer {
    constructor(widget) {
      this.widget = widget;
      this.canvas = widget.querySelector('canvas');
      if (!this.canvas) return;
      this.ctx = this.canvas.getContext('2d');

      this.sliderW = widget.querySelector('#stream-slider-w');
      this.sliderK = widget.querySelector('#stream-slider-k');
      this.selState = widget.querySelector('#stream-state-select');
      this.selStrat = widget.querySelector('#stream-strat-select');

      this.valW = widget.querySelector('#stream-val-w');
      this.valK = widget.querySelector('#stream-val-k');

      this.hudProb = widget.querySelector('#stream-hud-prob');
      this.hudStatus = widget.querySelector('#stream-hud-status');

      this.workers = this.sliderW ? parseInt(this.sliderW.value, 10) : 32;
      this.draws = this.sliderK ? parseFloat(this.sliderK.value) : 1000000;
      this.stateBits = this.selState ? parseInt(this.selState.value, 10) : 32;
      this.strategy = this.selStrat ? this.selStrat.value : 'random';

      this.workerTracks = [];
      this.collisionDetected = false;

      this.setupCanvas();
      this.bindEvents();
      this.computeSimulation();
      this.draw();
    }

    setupCanvas() {
      const dpr = window.devicePixelRatio || 1;
      const rect = this.canvas.parentElement.getBoundingClientRect();
      const width = rect.width || 440;
      const height = rect.height || 290;

      this.canvas.width = width * dpr;
      this.canvas.height = height * dpr;
      this.ctx.scale(dpr, dpr);
      this.width = width;
      this.height = height;

      window.addEventListener('resize', () => {
        const r = this.canvas.parentElement.getBoundingClientRect();
        this.canvas.width = (r.width || 440) * dpr;
        this.canvas.height = (r.height || 290) * dpr;
        this.ctx.scale(dpr, dpr);
        this.width = r.width || 440;
        this.height = r.height || 290;
        this.draw();
      });
    }

    bindEvents() {
      if (this.sliderW) {
        this.sliderW.addEventListener('input', (e) => {
          this.workers = parseInt(e.target.value, 10);
          if (this.valW) this.valW.textContent = this.workers;
          this.computeSimulation();
          this.draw();
        });
      }

      if (this.sliderK) {
        this.sliderK.addEventListener('input', (e) => {
          this.draws = Math.pow(10, parseFloat(e.target.value));
          if (this.valK) this.valK.textContent = this.formatNumber(this.draws);
          this.computeSimulation();
          this.draw();
        });
      }

      if (this.selState) {
        this.selState.addEventListener('change', (e) => {
          this.stateBits = parseInt(e.target.value, 10);
          this.computeSimulation();
          this.draw();
        });
      }

      if (this.selStrat) {
        this.selStrat.addEventListener('change', (e) => {
          this.strategy = e.target.value;
          this.computeSimulation();
          this.draw();
        });
      }
    }

    formatNumber(num) {
      if (num >= 1e6) return `${(num / 1e6).toFixed(1)}M`;
      if (num >= 1e3) return `${(num / 1e3).toFixed(0)}k`;
      return num.toString();
    }

    computeSimulation() {
      // Effective period P
      let period = 2147483648; // 2^31 for 32-bit
      if (this.stateBits === 64) period = 1.844e19;
      if (this.stateBits === 128) period = 3.4e38;

      // Birthday Collision formula: P(overlap) ~ 1 - exp( - W*(W-1)*K / (2*P) )
      let probOverlap = 0;
      if (this.strategy === 'spawn') {
        probOverlap = 0;
      } else {
        const exponent = (this.workers * (this.workers - 1) * this.draws) / (2 * period);
        if (exponent > 700) {
          probOverlap = 1.0;
        } else {
          probOverlap = 1.0 - Math.exp(-exponent);
        }
      }

      if (this.hudProb) {
        if (probOverlap < 1e-12) {
          this.hudProb.textContent = '< 10^-12 (Safe)';
        } else if (probOverlap > 0.999) {
          this.hudProb.textContent = '> 99.9% (Critical!)';
        } else {
          this.hudProb.textContent = `${(probOverlap * 100).toFixed(2)}%`;
        }
      }

      if (this.hudStatus) {
        if (probOverlap > 0.05) {
          this.hudStatus.textContent = 'High Collision Risk: Spurious Correlation!';
          this.hudStatus.style.color = '#f43f5e';
        } else {
          this.hudStatus.textContent = 'Sequences Statistically Independent';
          this.hudStatus.style.color = '#10b981';
        }
      }

      // Simulate worker starting seeds and intervals
      this.workerTracks = [];
      const numSimWorkers = Math.min(this.workers, 24);
      const spanNorm = Math.min(0.35, Math.max(0.04, (this.draws / period) * 1000));

      this.collisionDetected = false;

      for (let w = 0; w < numSimWorkers; w++) {
        let start = 0;
        if (this.strategy === 'spawn') {
          // Guaranteed disjoint streams
          start = (w / numSimWorkers) * 0.9 + 0.02;
        } else if (this.strategy === 'sequential') {
          // Sequential seeds: often start clustered
          start = ((w * 0.038) % 0.85) + 0.05;
        } else {
          // Uncoordinated random seed
          start = Math.random() * 0.85;
        }

        const end = Math.min(1.0, start + spanNorm);
        this.workerTracks.push({ id: w + 1, start, end, overlap: false });
      }

      // Check overlap between simulated tracks
      for (let i = 0; i < this.workerTracks.length; i++) {
        for (let j = i + 1; j < this.workerTracks.length; j++) {
          const t1 = this.workerTracks[i];
          const t2 = this.workerTracks[j];
          if (!(t1.end < t2.start || t2.end < t1.start)) {
            t1.overlap = true;
            t2.overlap = true;
            this.collisionDetected = true;
          }
        }
      }
    }

    draw() {
      const ctx = this.ctx;
      const w = this.width;
      const h = this.height;
      const dark = isDarkTheme();

      ctx.clearRect(0, 0, w, h);

      const padL = 60;
      const padR = 20;
      const padT = 30;
      const padB = 40;
      const trackW = w - padL - padR;
      const trackH = h - padT - padB;

      const numTracks = this.workerTracks.length;
      const laneH = Math.min(18, trackH / numTracks);

      // Header label
      ctx.fillStyle = dark ? '#e2e8f0' : '#334155';
      ctx.font = 'bold 11px system-ui, sans-serif';
      ctx.fillText(`Worker State Trajectories on PRNG Ring [0, P] (${this.workers} Total Workers)`, padL, 18);

      // Render worker lanes
      this.workerTracks.forEach((trk, idx) => {
        const y = padT + idx * laneH;

        // Worker Label
        ctx.fillStyle = dark ? 'rgba(255, 255, 255, 0.45)' : 'rgba(0, 0, 0, 0.45)';
        ctx.font = '9px ui-monospace, monospace';
        ctx.fillText(`W-${trk.id}`, 10, y + laneH * 0.7);

        // Lane baseline
        ctx.strokeStyle = dark ? 'rgba(255, 255, 255, 0.06)' : 'rgba(0, 0, 0, 0.05)';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(padL, y + laneH / 2);
        ctx.lineTo(padL + trackW, y + laneH / 2);
        ctx.stroke();

        // Worker segment
        const sx = padL + trk.start * trackW;
        const sw = Math.max(8, (trk.end - trk.start) * trackW);

        ctx.fillStyle = trk.overlap && this.strategy !== 'spawn' ? '#f43f5e' : '#10b981';
        ctx.fillRect(sx, y + 2, sw, laneH - 4);

        if (trk.overlap && this.strategy !== 'spawn') {
          ctx.strokeStyle = '#ffffff';
          ctx.lineWidth = 1;
          ctx.strokeRect(sx, y + 2, sw, laneH - 4);
        }
      });

      // Collision Warning Pill
      if (this.collisionDetected && this.strategy !== 'spawn') {
        ctx.fillStyle = 'rgba(244, 63, 94, 0.18)';
        ctx.fillRect(padL, h - 30, trackW, 24);
        ctx.strokeStyle = '#f43f5e';
        ctx.lineWidth = 1;
        ctx.strokeRect(padL, h - 30, trackW, 24);

        ctx.fillStyle = '#f43f5e';
        ctx.font = 'bold 10px system-ui, sans-serif';
        ctx.fillText('⚠ Overlap Collision Detected: Workers traverse shared states!', padL + 12, h - 14);
      } else {
        ctx.fillStyle = 'rgba(16, 185, 129, 0.15)';
        ctx.fillRect(padL, h - 30, trackW, 24);
        ctx.strokeStyle = '#10b981';
        ctx.lineWidth = 1;
        ctx.strokeRect(padL, h - 30, trackW, 24);

        ctx.fillStyle = '#10b981';
        ctx.font = 'bold 10px system-ui, sans-serif';
        ctx.fillText('✓ Disjoint Trajectories: Independent Parallel Variance', padL + 12, h - 14);
      }
    }
  }

  // =========================================================================
  // 10. Visualizer: Interactive CDF Ray-Tracer (MC 03 Scrollytelling Stage)
  // =========================================================================
  class CDFRayTracerVisualizer {
    constructor(container) {
      this.container = container;
      this.canvas = container.querySelector('canvas');
      if (!this.canvas) return;
      this.ctx = this.canvas.getContext('2d');

      this.hudDist = container.querySelector('#hud-dist');
      this.hudInv = container.querySelector('#hud-inversion');
      this.hudMean = container.querySelector('#hud-mean');
      this.hudKS = container.querySelector('#hud-ks');

      this.btnPlay = container.querySelector('#btn-play');
      this.btnReset = container.querySelector('#btn-reset');
      this.btnSingle = container.querySelector('#btn-single-ray');
      this.sliderN = container.querySelector('#slider-n');

      this.mode = 'uniform'; // 'uniform', 'exponential', 'weibull', 'pareto'
      this.currentStep = 1;
      this.maxSamples = 600;
      this.samples = [];
      this.activeRays = [];
      this.animating = true;
      this.animationId = null;

      this.setupCanvas();
      this.bindEvents();
      this.setStep(1);
      this.startLoop();
    }

    setupCanvas() {
      const dpr = window.devicePixelRatio || 1;
      const rect = this.canvas.parentElement.getBoundingClientRect();
      const width = rect.width || 440;
      const height = rect.height || 330;

      this.canvas.width = width * dpr;
      this.canvas.height = height * dpr;
      this.ctx.scale(dpr, dpr);
      this.width = width;
      this.height = height;

      window.addEventListener('resize', () => {
        const r = this.canvas.parentElement.getBoundingClientRect();
        this.canvas.width = (r.width || 440) * dpr;
        this.canvas.height = (r.height || 330) * dpr;
        this.ctx.scale(dpr, dpr);
        this.width = r.width || 440;
        this.height = r.height || 330;
        this.draw();
      });
    }

    bindEvents() {
      if (this.btnPlay) {
        this.btnPlay.addEventListener('click', () => {
          this.animating = !this.animating;
          this.btnPlay.textContent = this.animating ? '⏸ Pause' : '▶ Play';
        });
      }

      if (this.btnReset) {
        this.btnReset.addEventListener('click', () => {
          this.samples = [];
          this.activeRays = [];
          this.updateHud();
          this.draw();
        });
      }

      if (this.btnSingle) {
        this.btnSingle.addEventListener('click', () => {
          this.spawnRay();
        });
      }

      if (this.sliderN) {
        this.sliderN.addEventListener('input', (e) => {
          this.maxSamples = parseInt(e.target.value, 10);
          if (this.samples.length > this.maxSamples) {
            this.samples = this.samples.slice(0, this.maxSamples);
            this.updateHud();
            this.draw();
          }
        });
      }
    }

    getDistConfig() {
      if (this.mode === 'uniform') {
        return {
          name: 'Uniform U(0, 1)',
          invFormula: 'X = U',
          xMin: 0,
          xMax: 1.0,
          cdf: (x) => Math.max(0, Math.min(1, x)),
          inv: (u) => u,
          pdf: (x) => (x >= 0 && x <= 1 ? 1.0 : 0),
          theoMean: 0.5,
          pdfMax: 1.2
        };
      } else if (this.mode === 'exponential') {
        const lambda = 1.5;
        return {
          name: `Exponential (λ = ${lambda})`,
          invFormula: 'X = -ln(1 - U) / λ',
          xMin: 0,
          xMax: 3.5,
          cdf: (x) => (x <= 0 ? 0 : 1 - Math.exp(-lambda * x)),
          inv: (u) => -Math.log(Math.max(1e-7, 1 - u)) / lambda,
          pdf: (x) => (x < 0 ? 0 : lambda * Math.exp(-lambda * x)),
          theoMean: 1 / lambda,
          pdfMax: 1.6
        };
      } else if (this.mode === 'weibull') {
        const k = 2.2;
        const lambda = 1.0;
        return {
          name: `Weibull (k = ${k}, λ = ${lambda})`,
          invFormula: 'X = λ · (-ln(1 - U))^(1/k)',
          xMin: 0,
          xMax: 2.5,
          cdf: (x) => (x <= 0 ? 0 : 1 - Math.exp(-Math.pow(x / lambda, k))),
          inv: (u) => lambda * Math.pow(-Math.log(Math.max(1e-7, 1 - u)), 1 / k),
          pdf: (x) => (x <= 0 ? 0 : (k / lambda) * Math.pow(x / lambda, k - 1) * Math.exp(-Math.pow(x / lambda, k))),
          theoMean: lambda * 0.886, // Gamma(1 + 1/2.2) ~ 0.886
          pdfMax: 1.3
        };
      } else {
        // Pareto
        const xm = 0.5;
        const alpha = 1.8;
        return {
          name: `Pareto (xm = ${xm}, α = ${alpha})`,
          invFormula: 'X = xm / (1 - U)^(1/α)',
          xMin: 0,
          xMax: 4.0,
          cdf: (x) => (x < xm ? 0 : 1 - Math.pow(xm / x, alpha)),
          inv: (u) => xm / Math.pow(Math.max(1e-7, 1 - u), 1 / alpha),
          pdf: (x) => (x < xm ? 0 : (alpha * Math.pow(xm, alpha)) / Math.pow(x, alpha + 1)),
          theoMean: (alpha * xm) / (alpha - 1), // 1.125
          pdfMax: 2.2
        };
      }
    }

    setStep(stepNum) {
      this.currentStep = stepNum;
      this.samples = [];
      this.activeRays = [];

      if (stepNum === 1) {
        this.mode = 'uniform';
        this.maxSamples = 500;
      } else if (stepNum === 2) {
        this.mode = 'exponential';
        this.maxSamples = 600;
      } else if (stepNum === 3) {
        this.mode = 'weibull';
        this.maxSamples = 700;
      } else if (stepNum === 4) {
        this.mode = 'pareto';
        this.maxSamples = 800;
      }

      if (this.sliderN) this.sliderN.value = this.maxSamples;
      this.updateHud();
      this.draw();
    }

    spawnRay() {
      const u = Math.random();
      const cfg = this.getDistConfig();
      const xTarget = cfg.inv(u);

      this.activeRays.push({
        u: u,
        xTarget: Math.min(cfg.xMax * 1.05, Math.max(cfg.xMin, xTarget)),
        progress: 0, // 0 -> 1 horizontal, 1 -> 2 vertical
        speed: 0.05 + Math.random() * 0.03
      });
    }

    startLoop() {
      const loop = () => {
        if (this.animating && this.samples.length < this.maxSamples) {
          // Spawn rays
          if (Math.random() < 0.35 && this.activeRays.length < 5) {
            this.spawnRay();
          }

          // Fast batch deposit if running large count
          if (this.samples.length < this.maxSamples - 10) {
            const cfg = this.getDistConfig();
            for (let i = 0; i < 2; i++) {
              const u = Math.random();
              this.samples.push(cfg.inv(u));
            }
          }
        }

        // Update active rays
        for (let i = this.activeRays.length - 1; i >= 0; i--) {
          const r = this.activeRays[i];
          r.progress += r.speed;
          if (r.progress >= 2.0) {
            this.samples.push(r.xTarget);
            this.activeRays.splice(i, 1);
            this.updateHud();
          }
        }

        this.draw();
        this.animationId = requestAnimationFrame(loop);
      };
      this.animationId = requestAnimationFrame(loop);
    }

    updateHud() {
      const cfg = this.getDistConfig();
      if (this.hudDist) this.hudDist.textContent = cfg.name;
      if (this.hudInv) this.hudInv.textContent = cfg.invFormula;

      if (this.samples.length > 0) {
        const mean = this.samples.reduce((a, b) => a + b, 0) / this.samples.length;
        if (this.hudMean) this.hudMean.textContent = `${mean.toFixed(3)} (True: ${cfg.theoMean.toFixed(2)})`;

        // Compute Kolmogorov-Smirnov max deviation
        const sorted = [...this.samples].sort((a, b) => a - b);
        let maxD = 0;
        const n = sorted.length;
        for (let i = 0; i < n; i++) {
          const empCDF = (i + 1) / n;
          const theoCDF = cfg.cdf(sorted[i]);
          const d = Math.abs(empCDF - theoCDF);
          if (d > maxD) maxD = d;
        }
        if (this.hudKS) this.hudKS.textContent = `D = ${maxD.toFixed(3)} (N=${n})`;
      } else {
        if (this.hudMean) this.hudMean.textContent = `-- (True: ${cfg.theoMean.toFixed(2)})`;
        if (this.hudKS) this.hudKS.textContent = 'D = --';
      }
    }

    draw() {
      const ctx = this.ctx;
      const w = this.width;
      const h = this.height;
      const dark = isDarkTheme();
      const cfg = this.getDistConfig();

      ctx.clearRect(0, 0, w, h);

      const padL = 50;
      const padR = 25;
      const padT = 20;
      const padB = 30;
      const plotW = w - padL - padR;

      // Layout: Top 60% is CDF, Bottom 35% is PDF Histogram
      const cdfH = (h - padT - padB) * 0.58;
      const gap = 14;
      const pdfH = (h - padT - padB) * 0.36;
      const pdfTop = padT + cdfH + gap;

      const toScreenX = (x) => padL + ((x - cfg.xMin) / (cfg.xMax - cfg.xMin)) * plotW;
      const toScreenU = (u) => padT + (1 - u) * cdfH;
      const toScreenPDF = (y) => pdfTop + (1 - y / cfg.pdfMax) * pdfH;

      // 1. Backgrounds & Grids
      ctx.fillStyle = dark ? 'rgba(30, 41, 59, 0.4)' : 'rgba(241, 245, 249, 0.8)';
      ctx.fillRect(padL, padT, plotW, cdfH);
      ctx.fillRect(padL, pdfTop, plotW, pdfH);

      ctx.strokeStyle = dark ? 'rgba(255, 255, 255, 0.14)' : 'rgba(0, 0, 0, 0.12)';
      ctx.lineWidth = 1;
      ctx.strokeRect(padL, padT, plotW, cdfH);
      ctx.strokeRect(padL, pdfTop, plotW, pdfH);

      // CDF Grid lines
      ctx.strokeStyle = dark ? 'rgba(255, 255, 255, 0.06)' : 'rgba(0, 0, 0, 0.05)';
      for (let u = 0.25; u <= 0.75; u += 0.25) {
        const sy = toScreenU(u);
        ctx.beginPath();
        ctx.moveTo(padL, sy);
        ctx.lineTo(padL + plotW, sy);
        ctx.stroke();

        ctx.fillStyle = dark ? '#94a3b8' : '#64748b';
        ctx.font = '10px ui-monospace, monospace';
        ctx.fillText(u.toFixed(2), 16, sy + 3);
      }

      ctx.fillText('1.00', 16, padT + 4);
      ctx.fillText('0.00', 16, padT + cdfH + 3);

      // Y-axis label: Uniform Input U
      ctx.save();
      ctx.translate(12, padT + cdfH / 2);
      ctx.rotate(-Math.PI / 2);
      ctx.fillStyle = '#06b6d4';
      ctx.font = 'bold 10px system-ui, sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText('Uniform Input: U ~ U(0, 1)', 0, 0);
      ctx.restore();

      // 2. Analytical CDF Curve y = F(x)
      ctx.strokeStyle = '#6366f1';
      ctx.lineWidth = 2.5;
      ctx.beginPath();
      const steps = 120;
      for (let i = 0; i <= steps; i++) {
        const x = cfg.xMin + (i / steps) * (cfg.xMax - cfg.xMin);
        const u = cfg.cdf(x);
        const sx = toScreenX(x);
        const sy = toScreenU(u);
        if (i === 0) ctx.moveTo(sx, sy);
        else ctx.lineTo(sx, sy);
      }
      ctx.stroke();

      // Label CDF
      ctx.fillStyle = '#818cf8';
      ctx.font = 'bold 11px system-ui, sans-serif';
      ctx.fillText('CDF: y = F(x)', padL + 12, padT + 18);

      // 3. Render Active Animated Rays
      this.activeRays.forEach(r => {
        const uY = toScreenU(r.u);
        const targetX = toScreenX(r.xTarget);

        if (r.progress <= 1.0) {
          // Horizontal Phase: from padL to targetX
          const curX = padL + r.progress * (targetX - padL);
          ctx.strokeStyle = '#06b6d4';
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.moveTo(padL, uY);
          ctx.lineTo(curX, uY);
          ctx.stroke();

          // Ray head spark
          ctx.fillStyle = '#38bdf8';
          ctx.beginPath();
          ctx.arc(curX, uY, 3, 0, Math.PI * 2);
          ctx.fill();
        } else {
          // Full horizontal line
          ctx.strokeStyle = 'rgba(6, 182, 212, 0.4)';
          ctx.lineWidth = 1.5;
          ctx.beginPath();
          ctx.moveTo(padL, uY);
          ctx.lineTo(targetX, uY);
          ctx.stroke();

          // Reflection Spark at Curve (x*, u)
          ctx.fillStyle = '#f59e0b';
          ctx.beginPath();
          ctx.arc(targetX, uY, 4, 0, Math.PI * 2);
          ctx.fill();

          // Vertical Downward Phase
          const vertProgress = r.progress - 1.0;
          const curY = uY + vertProgress * (pdfTop + pdfH - uY);

          ctx.strokeStyle = '#10b981';
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.moveTo(targetX, uY);
          ctx.lineTo(targetX, curY);
          ctx.stroke();

          // Dropping spark
          ctx.fillStyle = '#34d399';
          ctx.beginPath();
          ctx.arc(targetX, curY, 3, 0, Math.PI * 2);
          ctx.fill();
        }
      });

      // 4. Bottom Histogram: Empirical Density vs Theoretical PDF
      const numBins = 24;
      const binWidth = (cfg.xMax - cfg.xMin) / numBins;
      const counts = new Array(numBins).fill(0);

      this.samples.forEach(s => {
        if (s >= cfg.xMin && s < cfg.xMax) {
          const b = Math.floor((s - cfg.xMin) / binWidth);
          if (b >= 0 && b < numBins) counts[b]++;
        }
      });

      const total = this.samples.length || 1;
      const barW = plotW / numBins;

      for (let b = 0; b < numBins; b++) {
        const density = counts[b] / (total * binWidth);
        const bx = padL + b * barW;
        const by = toScreenPDF(density);
        const bh = pdfTop + pdfH - by;

        ctx.fillStyle = dark ? 'rgba(16, 185, 129, 0.45)' : 'rgba(16, 185, 129, 0.55)';
        ctx.fillRect(bx + 1, by, barW - 2, bh);
        ctx.strokeStyle = dark ? 'rgba(16, 185, 129, 0.8)' : '#059669';
        ctx.lineWidth = 1;
        ctx.strokeRect(bx + 1, by, barW - 2, bh);
      }

      // Theoretical PDF Curve f(x)
      ctx.strokeStyle = '#f43f5e';
      ctx.lineWidth = 2;
      ctx.setLineDash([4, 3]);
      ctx.beginPath();
      for (let i = 0; i <= steps; i++) {
        const x = cfg.xMin + (i / steps) * (cfg.xMax - cfg.xMin);
        const px = toScreenX(x);
        const py = toScreenPDF(cfg.pdf(x));
        if (i === 0) ctx.moveTo(px, py);
        else ctx.lineTo(px, py);
      }
      ctx.stroke();
      ctx.setLineDash([]);

      // Histogram labels
      ctx.fillStyle = '#10b981';
      ctx.font = 'bold 10px system-ui, sans-serif';
      ctx.fillText('Generated Variate Histogram f̂(x)', padL + 12, pdfTop + 16);

      ctx.fillStyle = '#f43f5e';
      ctx.fillText('-- Analytical PDF f(x)', padL + plotW - 130, pdfTop + 16);

      // X-axis ticks
      ctx.fillStyle = dark ? '#cbd5e1' : '#475569';
      ctx.font = '10px ui-monospace, monospace';
      ctx.fillText(cfg.xMin.toFixed(1), padL - 6, pdfTop + pdfH + 16);
      ctx.fillText(((cfg.xMin + cfg.xMax) / 2).toFixed(1), padL + plotW / 2 - 10, pdfTop + pdfH + 16);
      ctx.fillText(cfg.xMax.toFixed(1), padL + plotW - 12, pdfTop + pdfH + 16);

      ctx.font = 'bold 11px system-ui, sans-serif';
      ctx.fillStyle = dark ? '#f8fafc' : '#0f172a';
      ctx.fillText('Quantile Target: X = F⁻¹(U)', padL + plotW / 2 - 65, pdfTop + pdfH + 26);
    }
  }

  // =========================================================================
  // 11. Lab 1: Multi-Distribution CDF Ray-Tracing Studio (MC 03 Lab 1)
  // =========================================================================
  class CDFRayStudioVisualizer {
    constructor(widget) {
      this.widget = widget;
      this.canvas = widget.querySelector('canvas');
      if (!this.canvas) return;
      this.ctx = this.canvas.getContext('2d');

      this.selDist = widget.querySelector('#studio-dist-select');
      this.sliderP1 = widget.querySelector('#studio-param1');
      this.sliderP2 = widget.querySelector('#studio-param2');
      this.labelP1 = widget.querySelector('#studio-val-p1');
      this.labelP2 = widget.querySelector('#studio-val-p2');
      this.btnFire = widget.querySelector('#studio-btn-fire');
      this.hudKS = widget.querySelector('#studio-hud-ks');

      this.dist = this.selDist ? this.selDist.value : 'weibull';
      this.p1 = this.sliderP1 ? parseFloat(this.sliderP1.value) : 2.0;
      this.p2 = this.sliderP2 ? parseFloat(this.sliderP2.value) : 1.0;
      this.samples = [];

      this.setupCanvas();
      this.bindEvents();
      this.generateSamples(400);
      this.draw();
    }

    setupCanvas() {
      const dpr = window.devicePixelRatio || 1;
      const rect = this.canvas.parentElement.getBoundingClientRect();
      const width = rect.width || 440;
      const height = rect.height || 290;

      this.canvas.width = width * dpr;
      this.canvas.height = height * dpr;
      this.ctx.scale(dpr, dpr);
      this.width = width;
      this.height = height;

      window.addEventListener('resize', () => {
        const r = this.canvas.parentElement.getBoundingClientRect();
        this.canvas.width = (r.width || 440) * dpr;
        this.canvas.height = (r.height || 290) * dpr;
        this.ctx.scale(dpr, dpr);
        this.width = r.width || 440;
        this.height = r.height || 290;
        this.draw();
      });
    }

    bindEvents() {
      if (this.selDist) {
        this.selDist.addEventListener('change', (e) => {
          this.dist = e.target.value;
          this.samples = [];
          this.generateSamples(400);
          this.draw();
        });
      }

      if (this.sliderP1) {
        this.sliderP1.addEventListener('input', (e) => {
          this.p1 = parseFloat(e.target.value);
          if (this.labelP1) this.labelP1.textContent = this.p1.toFixed(1);
          this.samples = [];
          this.generateSamples(400);
          this.draw();
        });
      }

      if (this.sliderP2) {
        this.sliderP2.addEventListener('input', (e) => {
          this.p2 = parseFloat(e.target.value);
          if (this.labelP2) this.labelP2.textContent = this.p2.toFixed(1);
          this.samples = [];
          this.generateSamples(400);
          this.draw();
        });
      }

      if (this.btnFire) {
        this.btnFire.addEventListener('click', () => {
          this.generateSamples(250);
          this.draw();
        });
      }
    }

    getFunctions() {
      if (this.dist === 'exponential') {
        const lambda = this.p1;
        return {
          xMin: 0,
          xMax: 4.0,
          inv: (u) => -Math.log(Math.max(1e-7, 1 - u)) / lambda,
          pdf: (x) => lambda * Math.exp(-lambda * x),
          pdfMax: lambda * 1.1
        };
      } else if (this.dist === 'weibull') {
        const k = this.p1;
        const lambda = this.p2;
        return {
          xMin: 0,
          xMax: 3.0,
          inv: (u) => lambda * Math.pow(-Math.log(Math.max(1e-7, 1 - u)), 1 / k),
          pdf: (x) => (x <= 0 ? 0 : (k / lambda) * Math.pow(x / lambda, k - 1) * Math.exp(-Math.pow(x / lambda, k))),
          pdfMax: 1.5
        };
      } else if (this.dist === 'pareto') {
        const alpha = this.p1;
        const xm = this.p2;
        return {
          xMin: 0,
          xMax: 4.5,
          inv: (u) => xm / Math.pow(Math.max(1e-7, 1 - u), 1 / alpha),
          pdf: (x) => (x < xm ? 0 : (alpha * Math.pow(xm, alpha)) / Math.pow(x, alpha + 1)),
          pdfMax: 2.2
        };
      } else {
        // Cauchy
        const x0 = 1.5;
        const gamma = this.p2;
        return {
          xMin: -1.0,
          xMax: 4.0,
          inv: (u) => x0 + gamma * Math.tan(Math.PI * (u - 0.5)),
          pdf: (x) => 1 / (Math.PI * gamma * (1 + Math.pow((x - x0) / gamma, 2))),
          pdfMax: 1 / (Math.PI * gamma) * 1.1
        };
      }
    }

    generateSamples(count) {
      const fns = this.getFunctions();
      for (let i = 0; i < count; i++) {
        const u = Math.random();
        this.samples.push(fns.inv(u));
      }

      if (this.hudKS) {
        this.hudKS.textContent = `N = ${this.samples.length} Samples Generated`;
      }
    }

    draw() {
      const ctx = this.ctx;
      const w = this.width;
      const h = this.height;
      const dark = isDarkTheme();
      const fns = this.getFunctions();

      ctx.clearRect(0, 0, w, h);

      const padL = 45;
      const padR = 20;
      const padT = 20;
      const padB = 30;
      const plotW = w - padL - padR;
      const plotH = h - padT - padB;

      const toX = (x) => padL + ((x - fns.xMin) / (fns.xMax - fns.xMin)) * plotW;
      const toY = (y) => padT + (1 - y / fns.pdfMax) * plotH;

      // Frame
      ctx.fillStyle = dark ? 'rgba(30, 41, 59, 0.4)' : 'rgba(241, 245, 249, 0.8)';
      ctx.fillRect(padL, padT, plotW, plotH);
      ctx.strokeStyle = dark ? 'rgba(255, 255, 255, 0.14)' : 'rgba(0, 0, 0, 0.12)';
      ctx.strokeRect(padL, padT, plotW, plotH);

      // Histogram
      const bins = 28;
      const binW = (fns.xMax - fns.xMin) / bins;
      const counts = new Array(bins).fill(0);

      this.samples.forEach(s => {
        if (s >= fns.xMin && s < fns.xMax) {
          const b = Math.floor((s - fns.xMin) / binW);
          if (b >= 0 && b < bins) counts[b]++;
        }
      });

      const total = this.samples.length || 1;
      const barPixelW = plotW / bins;

      for (let b = 0; b < bins; b++) {
        const density = counts[b] / (total * binW);
        const bx = padL + b * barPixelW;
        const by = toY(density);
        const bh = padT + plotH - by;

        ctx.fillStyle = dark ? 'rgba(6, 182, 212, 0.45)' : 'rgba(6, 182, 212, 0.55)';
        ctx.fillRect(bx + 1, by, barPixelW - 2, bh);
        ctx.strokeStyle = '#06b6d4';
        ctx.lineWidth = 1;
        ctx.strokeRect(bx + 1, by, barPixelW - 2, bh);
      }

      // Analytical PDF Curve
      ctx.strokeStyle = '#f43f5e';
      ctx.lineWidth = 2.5;
      ctx.beginPath();
      const steps = 100;
      for (let i = 0; i <= steps; i++) {
        const x = fns.xMin + (i / steps) * (fns.xMax - fns.xMin);
        const px = toX(x);
        const py = toY(fns.pdf(x));
        if (i === 0) ctx.moveTo(px, py);
        else ctx.lineTo(px, py);
      }
      ctx.stroke();

      // Axis ticks
      ctx.fillStyle = dark ? '#94a3b8' : '#64748b';
      ctx.font = '10px ui-monospace, monospace';
      ctx.fillText(fns.xMin.toFixed(1), padL - 4, padT + plotH + 16);
      ctx.fillText(fns.xMax.toFixed(1), padL + plotW - 12, padT + plotH + 16);
      ctx.fillText(`Target Variate (X)`, padL + plotW / 2 - 35, padT + plotH + 22);
    }
  }

  // =========================================================================
  // 12. Lab 2: Normal Quantile Approximation & Tail Error (MC 03 Lab 2)
  // =========================================================================
  class NormalQuantileVisualizer {
    constructor(widget) {
      this.widget = widget;
      this.canvas = widget.querySelector('canvas');
      if (!this.canvas) return;
      this.ctx = this.canvas.getContext('2d');

      this.sliderTail = widget.querySelector('#normal-slider-tail');
      this.labelTail = widget.querySelector('#normal-val-tail');
      this.hudError = widget.querySelector('#normal-hud-error');
      this.hudQuantile = widget.querySelector('#normal-hud-quantile');

      this.tailLog = this.sliderTail ? parseFloat(this.sliderTail.value) : -4;

      this.setupCanvas();
      this.bindEvents();
      this.draw();
    }

    setupCanvas() {
      const dpr = window.devicePixelRatio || 1;
      const rect = this.canvas.parentElement.getBoundingClientRect();
      const width = rect.width || 440;
      const height = rect.height || 290;

      this.canvas.width = width * dpr;
      this.canvas.height = height * dpr;
      this.ctx.scale(dpr, dpr);
      this.width = width;
      this.height = height;

      window.addEventListener('resize', () => {
        const r = this.canvas.parentElement.getBoundingClientRect();
        this.canvas.width = (r.width || 440) * dpr;
        this.canvas.height = (r.height || 290) * dpr;
        this.ctx.scale(dpr, dpr);
        this.width = r.width || 440;
        this.height = r.height || 290;
        this.draw();
      });
    }

    bindEvents() {
      if (this.sliderTail) {
        this.sliderTail.addEventListener('input', (e) => {
          this.tailLog = parseFloat(e.target.value);
          const p = Math.pow(10, this.tailLog);
          if (this.labelTail) this.labelTail.textContent = `p = 10^(${this.tailLog.toFixed(1)}) ≈ ${p.toExponential(2)}`;
          this.draw();
        });
      }
    }

    // Acklam Rational Approximation for Φ⁻¹(p)
    acklamInverse(p) {
      const a = [-3.969683028665376e+01, 2.209460984245205e+02, -2.759285104469687e+02, 1.383577518672690e+02, -3.066479806614716e+01, 2.506628277459239e+00];
      const b = [-5.447609879822406e+01, 1.615858368580409e+02, -1.556989798598866e+02, 6.680131188771972e+01, -1.328068155288572e+01];
      const c = [-7.784894002430293e-03, -3.223964580411365e-01, -2.400758277161838e+00, -2.549732539343734e+00, 4.374664141464968e+00, 2.938163982698783e+00];
      const d = [7.784695709041462e-03, 3.224671290700398e-01, 2.445134137142996e+00, 3.754408661907416e+00];

      const p_low = 0.02425;
      const p_high = 1 - p_low;

      if (p < p_low) {
        const q = Math.sqrt(-2 * Math.log(p));
        return (((((c[0]*q+c[1])*q+c[2])*q+c[3])*q+c[4])*q+c[5]) / ((((d[0]*q+d[1])*q+d[2])*q+d[3])*q+1);
      } else if (p <= p_high) {
        const q = p - 0.5;
        const r = q * q;
        return (((((a[0]*r+a[1])*r+a[2])*r+a[3])*r+a[4])*r+a[5])*q / (((((b[0]*r+b[1])*r+b[2])*r+b[3])*r+b[4])*r+1);
      } else {
        const q = Math.sqrt(-2 * Math.log(1 - p));
        return -(((((c[0]*q+c[1])*q+c[2])*q+c[3])*q+c[4])*q+c[5]) / ((((d[0]*q+d[1])*q+d[2])*q+d[3])*q+1);
      }
    }

    draw() {
      const ctx = this.ctx;
      const w = this.width;
      const h = this.height;
      const dark = isDarkTheme();

      ctx.clearRect(0, 0, w, h);

      const pActive = Math.pow(10, this.tailLog);
      const zApprox = this.acklamInverse(pActive);

      // Simple Newton refiner to get ground truth reference
      let zExact = zApprox;
      for (let k = 0; k < 4; k++) {
        // CDF of standard normal
        const cdf = 0.5 * (1 + this.erf(zExact / Math.SQRT2));
        const pdf = Math.exp(-0.5 * zExact * zExact) / Math.sqrt(2 * Math.PI);
        zExact = zExact - (cdf - pActive) / Math.max(1e-15, pdf);
      }

      const absError = Math.abs(zApprox - zExact);

      if (this.hudQuantile) this.hudQuantile.textContent = `z = ${zApprox.toFixed(4)}`;
      if (this.hudError) this.hudError.textContent = `Error: ${absError.toExponential(2)}`;

      const padL = 50;
      const padR = 25;
      const padT = 25;
      const padB = 35;
      const plotW = w - padL - padR;
      const plotH = h - padT - padB;

      // Plot Error Curve from log10(p) = -7 to -0.3
      ctx.fillStyle = dark ? 'rgba(30, 41, 59, 0.4)' : 'rgba(241, 245, 249, 0.8)';
      ctx.fillRect(padL, padT, plotW, plotH);
      ctx.strokeStyle = dark ? 'rgba(255, 255, 255, 0.14)' : 'rgba(0, 0, 0, 0.12)';
      ctx.strokeRect(padL, padT, plotW, plotH);

      // Grid
      ctx.strokeStyle = dark ? 'rgba(255, 255, 255, 0.06)' : 'rgba(0, 0, 0, 0.05)';
      ctx.lineWidth = 1;
      for (let lp = -6; lp <= -1; lp += 1) {
        const sx = padL + ((lp - (-7)) / 6.7) * plotW;
        ctx.beginPath();
        ctx.moveTo(sx, padT);
        ctx.lineTo(sx, padT + plotH);
        ctx.stroke();

        ctx.fillStyle = dark ? '#94a3b8' : '#64748b';
        ctx.font = '10px ui-monospace, monospace';
        ctx.fillText(`10^${lp}`, sx - 12, padT + plotH + 16);
      }

      // Plot Quantile Curve Φ⁻¹(p)
      ctx.strokeStyle = '#6366f1';
      ctx.lineWidth = 2;
      ctx.beginPath();
      const steps = 120;
      for (let i = 0; i <= steps; i++) {
        const lp = -7 + (i / steps) * 6.7;
        const p = Math.pow(10, lp);
        const z = this.acklamInverse(p); // ranges roughly from -5.2 to -0.4

        const sx = padL + ((lp - (-7)) / 6.7) * plotW;
        const sy = padT + (1 - (z - (-5.5)) / 5.2) * plotH;

        if (i === 0) ctx.moveTo(sx, sy);
        else ctx.lineTo(sx, sy);
      }
      ctx.stroke();

      // Active Inspection Point
      const activeX = padL + ((this.tailLog - (-7)) / 6.7) * plotW;
      const activeY = padT + (1 - (zApprox - (-5.5)) / 5.2) * plotH;

      ctx.fillStyle = '#f43f5e';
      ctx.beginPath();
      ctx.arc(activeX, activeY, 5, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = '#ffffff';
      ctx.stroke();

      ctx.fillStyle = dark ? '#e2e8f0' : '#1e293b';
      ctx.font = 'bold 11px system-ui, sans-serif';
      ctx.fillText(`Φ⁻¹(p) = ${zApprox.toFixed(3)}`, activeX + 8, activeY - 8);

      ctx.fillStyle = '#10b981';
      ctx.font = '10px ui-monospace, monospace';
      ctx.fillText(`Acklam Rational Accuracy: ~10⁻⁹ across entire domain`, padL + 12, padT + 18);
    }

    erf(x) {
      // Approximation of erf
      const a1 = 0.254829592, a2 = -0.284496736, a3 = 1.421413741, a4 = -1.453152027, a5 = 1.061405429, p = 0.3275911;
      const sign = x < 0 ? -1 : 1;
      x = Math.abs(x);
      const t = 1.0 / (1.0 + p * x);
      const y = 1.0 - (((((a5 * t + a4) * t) + a3) * t + a2) * t + a1) * t * Math.exp(-x * x);
      return sign * y;
    }
  }

  // =========================================================================
  // 13. Lab 3: Discrete Inversion & Binary Search (MC 03 Lab 3)
  // =========================================================================
  class DiscreteInversionVisualizer {
    constructor(widget) {
      this.widget = widget;
      this.canvas = widget.querySelector('canvas');
      if (!this.canvas) return;
      this.ctx = this.canvas.getContext('2d');

      this.btnDraw = widget.querySelector('#discrete-btn-draw');
      this.selMethod = widget.querySelector('#discrete-method-select');
      this.hudOutcome = widget.querySelector('#discrete-hud-outcome');
      this.hudComparisons = widget.querySelector('#discrete-hud-comps');

      this.probs = [0.08, 0.18, 0.32, 0.24, 0.12, 0.06]; // 6 discrete damage states
      this.cdf = [];
      let cum = 0;
      this.probs.forEach(p => {
        cum += p;
        this.cdf.push(cum);
      });

      this.currentU = 0.45;
      this.searchSteps = [];
      this.selectedState = 2;
      this.method = this.selMethod ? this.selMethod.value : 'binary';

      this.setupCanvas();
      this.bindEvents();
      this.sampleVariate();
      this.draw();
    }

    setupCanvas() {
      const dpr = window.devicePixelRatio || 1;
      const rect = this.canvas.parentElement.getBoundingClientRect();
      const width = rect.width || 440;
      const height = rect.height || 290;

      this.canvas.width = width * dpr;
      this.canvas.height = height * dpr;
      this.ctx.scale(dpr, dpr);
      this.width = width;
      this.height = height;

      window.addEventListener('resize', () => {
        const r = this.canvas.parentElement.getBoundingClientRect();
        this.canvas.width = (r.width || 440) * dpr;
        this.canvas.height = (r.height || 290) * dpr;
        this.ctx.scale(dpr, dpr);
        this.width = r.width || 440;
        this.height = r.height || 290;
        this.draw();
      });
    }

    bindEvents() {
      if (this.btnDraw) {
        this.btnDraw.addEventListener('click', () => {
          this.sampleVariate();
          this.draw();
        });
      }

      if (this.selMethod) {
        this.selMethod.addEventListener('change', (e) => {
          this.method = e.target.value;
          this.sampleVariate();
          this.draw();
        });
      }
    }

    sampleVariate() {
      this.currentU = Math.random();
      this.searchSteps = [];

      if (this.method === 'linear') {
        // Sequential scan O(K)
        let found = 0;
        for (let k = 0; k < this.cdf.length; k++) {
          this.searchSteps.push(k);
          if (this.currentU <= this.cdf[k]) {
            found = k;
            break;
          }
        }
        this.selectedState = found;
      } else {
        // Binary search O(log K)
        let low = 0;
        let high = this.cdf.length - 1;
        while (low < high) {
          const mid = Math.floor((low + high) / 2);
          this.searchSteps.push(mid);
          if (this.currentU <= this.cdf[mid]) {
            high = mid;
          } else {
            low = mid + 1;
          }
        }
        this.selectedState = low;
      }

      if (this.hudOutcome) this.hudOutcome.textContent = `State k = ${this.selectedState} (U = ${this.currentU.toFixed(3)})`;
      if (this.hudComparisons) this.hudComparisons.textContent = `${this.searchSteps.length} Comparisons`;
    }

    draw() {
      const ctx = this.ctx;
      const w = this.width;
      const h = this.height;
      const dark = isDarkTheme();

      ctx.clearRect(0, 0, w, h);

      const padL = 45;
      const padR = 25;
      const padT = 30;
      const padB = 40;
      const plotW = w - padL - padR;
      const plotH = h - padT - padB;

      // Draw Step CDF
      const toX = (k) => padL + (k / this.cdf.length) * plotW;
      const toY = (u) => padT + (1 - u) * plotH;

      ctx.fillStyle = dark ? 'rgba(30, 41, 59, 0.4)' : 'rgba(241, 245, 249, 0.8)';
      ctx.fillRect(padL, padT, plotW, plotH);
      ctx.strokeStyle = dark ? 'rgba(255, 255, 255, 0.14)' : 'rgba(0, 0, 0, 0.12)';
      ctx.strokeRect(padL, padT, plotW, plotH);

      // Steps
      for (let k = 0; k < this.cdf.length; k++) {
        const x1 = toX(k);
        const x2 = toX(k + 1);
        const y = toY(this.cdf[k]);

        const isSelected = k === this.selectedState;
        ctx.fillStyle = isSelected ? 'rgba(16, 185, 129, 0.25)' : 'transparent';
        ctx.fillRect(x1, padT, x2 - x1, plotH);

        ctx.strokeStyle = isSelected ? '#10b981' : '#6366f1';
        ctx.lineWidth = isSelected ? 3.5 : 2;
        ctx.beginPath();
        ctx.moveTo(x1, y);
        ctx.lineTo(x2, y);
        ctx.stroke();

        // State labels
        ctx.fillStyle = dark ? '#cbd5e1' : '#334155';
        ctx.font = 'bold 10px ui-monospace, monospace';
        ctx.fillText(`S${k}`, (x1 + x2) / 2 - 8, padT + plotH + 16);
      }

      // Horizontal ray for current U
      const uY = toY(this.currentU);
      ctx.strokeStyle = '#f43f5e';
      ctx.lineWidth = 1.8;
      ctx.setLineDash([4, 4]);
      ctx.beginPath();
      ctx.moveTo(padL, uY);
      const hitX = toX(this.selectedState + 0.5);
      ctx.lineTo(hitX, uY);
      ctx.stroke();
      ctx.setLineDash([]);

      ctx.fillStyle = '#f43f5e';
      ctx.beginPath();
      ctx.arc(hitX, uY, 4, 0, Math.PI * 2);
      ctx.fill();

      // Drop downward arrow
      ctx.strokeStyle = '#10b981';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(hitX, uY);
      ctx.lineTo(hitX, padT + plotH);
      ctx.stroke();

      ctx.fillStyle = '#f43f5e';
      ctx.font = 'bold 11px system-ui, sans-serif';
      ctx.fillText(`U = ${this.currentU.toFixed(3)}`, 8, uY + 4);
    }
  }

  // =========================================================================
  // 14. Visualizer: Rejection Sampler (MC 04 Scrollytelling Stage)
  // =========================================================================
  class RejectionSamplerVisualizer {
    constructor(container) {
      this.container = container;
      this.canvas = container.querySelector('canvas');
      if (!this.canvas) return;
      this.ctx = this.canvas.getContext('2d');

      this.hudTarget = container.querySelector('#hud-target');
      this.hudEnvelope = container.querySelector('#hud-envelope');
      this.hudEfficiency = container.querySelector('#hud-efficiency');
      this.hudAccepted = container.querySelector('#hud-accepted');

      this.btnPlay = container.querySelector('#btn-play');
      this.btnReset = container.querySelector('#btn-reset');
      this.btnBurst = container.querySelector('#btn-burst');
      this.sliderN = container.querySelector('#slider-n');

      this.mode = 'beta-optimal'; // 'beta-optimal', 'beta-loose', 'half-normal', 'curse-dim'
      this.currentStep = 1;
      this.maxAccepted = 500;
      this.acceptedSamples = [];
      this.totalTrials = 0;
      this.acceptedCount = 0;
      this.rejectedCount = 0;
      this.activeParticles = [];
      this.animating = true;
      this.animationId = null;

      this.setupCanvas();
      this.bindEvents();
      this.setStep(1);
      this.startLoop();
    }

    setupCanvas() {
      const dpr = window.devicePixelRatio || 1;
      const rect = this.canvas.parentElement.getBoundingClientRect();
      const width = rect.width || 440;
      const height = rect.height || 330;

      this.canvas.width = width * dpr;
      this.canvas.height = height * dpr;
      this.ctx.scale(dpr, dpr);
      this.width = width;
      this.height = height;

      window.addEventListener('resize', () => {
        const r = this.canvas.parentElement.getBoundingClientRect();
        this.canvas.width = (r.width || 440) * dpr;
        this.canvas.height = (r.height || 330) * dpr;
        this.ctx.scale(dpr, dpr);
        this.width = r.width || 440;
        this.height = r.height || 330;
        this.draw();
      });
    }

    bindEvents() {
      if (this.btnPlay) {
        this.btnPlay.addEventListener('click', () => {
          this.animating = !this.animating;
          this.btnPlay.textContent = this.animating ? '⏸ Pause' : '▶ Play';
        });
      }

      if (this.btnReset) {
        this.btnReset.addEventListener('click', () => {
          this.acceptedSamples = [];
          this.activeParticles = [];
          this.totalTrials = 0;
          this.acceptedCount = 0;
          this.rejectedCount = 0;
          this.updateHud();
          this.draw();
        });
      }

      if (this.btnBurst) {
        this.btnBurst.addEventListener('click', () => {
          for (let i = 0; i < 40; i++) this.spawnParticle();
        });
      }

      if (this.sliderN) {
        this.sliderN.addEventListener('input', (e) => {
          this.maxAccepted = parseInt(e.target.value, 10);
        });
      }
    }

    getConfig() {
      if (this.mode === 'beta-optimal') {
        // Beta(2, 5): peak at 0.2, p(0.2) = 2.4576
        // Proposal: Uniform[0, 1], c = 2.4576
        const c = 2.4576;
        return {
          name: 'Beta(2, 5)',
          propName: 'Uniform U(0, 1)',
          cVal: c,
          effTheory: 1 / c,
          xMin: 0,
          xMax: 1.0,
          yMax: 3.2,
          p: (x) => (x <= 0 || x >= 1 ? 0 : 30 * x * Math.pow(1 - x, 4)),
          sampleQ: () => Math.random(),
          q: (x) => (x >= 0 && x <= 1 ? 1.0 : 0)
        };
      } else if (this.mode === 'beta-loose') {
        // Loose envelope c = 4.8
        const c = 4.8;
        return {
          name: 'Beta(2, 5) [Loose]',
          propName: 'Uniform U(0, 1)',
          cVal: c,
          effTheory: 1 / c,
          xMin: 0,
          xMax: 1.0,
          yMax: 5.5,
          p: (x) => (x <= 0 || x >= 1 ? 0 : 30 * x * Math.pow(1 - x, 4)),
          sampleQ: () => Math.random(),
          q: (x) => (x >= 0 && x <= 1 ? 1.0 : 0)
        };
      } else if (this.mode === 'half-normal') {
        // Half-Normal p(x) = sqrt(2/pi) * exp(-x^2/2), x >= 0
        // Proposal: Exp(1), c = sqrt(2e/pi) ~ 1.3155
        const c = Math.sqrt((2 * Math.E) / Math.PI);
        return {
          name: 'Half-Normal N+(0, 1)',
          propName: 'Exp(λ = 1.0)',
          cVal: c,
          effTheory: 1 / c,
          xMin: 0,
          xMax: 3.5,
          yMax: 1.8,
          p: (x) => (x < 0 ? 0 : Math.sqrt(2 / Math.PI) * Math.exp(-0.5 * x * x)),
          sampleQ: () => -Math.log(Math.max(1e-7, Math.random())),
          q: (x) => (x < 0 ? 0 : Math.exp(-x))
        };
      } else {
        // Step 4: Curse of Dimensionality demo (tiny target volume inside hypercube)
        const c = 4.5;
        return {
          name: '10D Unit Sphere (Hypercube Envelope)',
          propName: '10D Hypercube',
          cVal: c,
          effTheory: 0.05,
          xMin: 0,
          xMax: 1.0,
          yMax: 5.2,
          p: (x) => (x <= 0 || x >= 1 ? 0 : 0.22 + 0.15 * Math.sin(Math.PI * x)),
          sampleQ: () => Math.random(),
          q: (x) => 1.0
        };
      }
    }

    setStep(stepNum) {
      this.currentStep = stepNum;
      this.acceptedSamples = [];
      this.activeParticles = [];
      this.totalTrials = 0;
      this.acceptedCount = 0;
      this.rejectedCount = 0;

      if (stepNum === 1) {
        this.mode = 'beta-optimal';
      } else if (stepNum === 2) {
        this.mode = 'beta-loose';
      } else if (stepNum === 3) {
        this.mode = 'half-normal';
      } else if (stepNum === 4) {
        this.mode = 'curse-dim';
      }

      this.updateHud();
      this.draw();
    }

    spawnParticle() {
      const cfg = this.getConfig();
      const y = cfg.sampleQ();
      if (y < cfg.xMin || y > cfg.xMax) return;

      const envelopeHeight = cfg.cVal * cfg.q(y);
      const u = Math.random();
      const v = u * envelopeHeight;
      const targetVal = cfg.p(y);
      const isAccepted = v <= targetVal;

      this.activeParticles.push({
        x: y,
        targetY: v,
        isAccepted: isAccepted,
        progress: 0,
        speed: 0.06 + Math.random() * 0.04
      });

      this.totalTrials++;
      if (isAccepted) {
        this.acceptedCount++;
      } else {
        this.rejectedCount++;
      }
    }

    startLoop() {
      const loop = () => {
        if (this.animating && this.acceptedSamples.length < this.maxAccepted) {
          if (this.activeParticles.length < 12) {
            this.spawnParticle();
          }

          // Fast background processing
          const cfg = this.getConfig();
          for (let k = 0; k < 2; k++) {
            const y = cfg.sampleQ();
            if (y >= cfg.xMin && y <= cfg.xMax) {
              const u = Math.random();
              const v = u * cfg.cVal * cfg.q(y);
              this.totalTrials++;
              if (v <= cfg.p(y)) {
                this.acceptedCount++;
                this.acceptedSamples.push(y);
              } else {
                this.rejectedCount++;
              }
            }
          }
        }

        // Update animated particles
        for (let i = this.activeParticles.length - 1; i >= 0; i--) {
          const pt = this.activeParticles[i];
          pt.progress += pt.speed;
          if (pt.progress >= 1.0) {
            if (pt.isAccepted) {
              this.acceptedSamples.push(pt.x);
            }
            this.activeParticles.splice(i, 1);
            this.updateHud();
          }
        }

        this.draw();
        this.animationId = requestAnimationFrame(loop);
      };
      this.animationId = requestAnimationFrame(loop);
    }

    updateHud() {
      const cfg = this.getConfig();
      if (this.hudTarget) this.hudTarget.textContent = cfg.name;
      if (this.hudEnvelope) this.hudEnvelope.textContent = `c = ${cfg.cVal.toFixed(2)}`;

      const empEff = this.totalTrials > 0 ? (this.acceptedCount / this.totalTrials) * 100 : cfg.effTheory * 100;
      if (this.hudEfficiency) {
        this.hudEfficiency.textContent = `${empEff.toFixed(1)}% (Theo: ${(cfg.effTheory * 100).toFixed(1)}%)`;
      }

      if (this.hudAccepted) {
        this.hudAccepted.textContent = `Acc: ${this.acceptedCount} | Rej: ${this.rejectedCount}`;
      }
    }

    draw() {
      const ctx = this.ctx;
      const w = this.width;
      const h = this.height;
      const dark = isDarkTheme();
      const cfg = this.getConfig();

      ctx.clearRect(0, 0, w, h);

      const padL = 48;
      const padR = 25;
      const padT = 20;
      const padB = 30;
      const plotW = w - padL - padR;

      const topH = (h - padT - padB) * 0.58;
      const gap = 14;
      const botH = (h - padT - padB) * 0.36;
      const botTop = padT + topH + gap;

      const toX = (x) => padL + ((x - cfg.xMin) / (cfg.xMax - cfg.xMin)) * plotW;
      const toY = (y) => padT + (1 - y / cfg.yMax) * topH;
      const toBotY = (dens) => botTop + (1 - dens / (cfg.yMax * 1.1)) * botH;

      // 1. Top Panel: Bounding Envelope c*q(x) vs Target p(x)
      ctx.fillStyle = dark ? 'rgba(30, 41, 59, 0.4)' : 'rgba(241, 245, 249, 0.8)';
      ctx.fillRect(padL, padT, plotW, topH);
      ctx.fillRect(padL, botTop, plotW, botH);

      ctx.strokeStyle = dark ? 'rgba(255, 255, 255, 0.14)' : 'rgba(0, 0, 0, 0.12)';
      ctx.lineWidth = 1;
      ctx.strokeRect(padL, padT, plotW, topH);
      ctx.strokeRect(padL, botTop, plotW, botH);

      // Shaded Rejection Gap (Area under c*q(x))
      const steps = 100;
      ctx.fillStyle = dark ? 'rgba(244, 63, 94, 0.12)' : 'rgba(244, 63, 94, 0.08)';
      ctx.beginPath();
      ctx.moveTo(padL, padT + topH);
      for (let i = 0; i <= steps; i++) {
        const x = cfg.xMin + (i / steps) * (cfg.xMax - cfg.xMin);
        const yEnv = cfg.cVal * cfg.q(x);
        ctx.lineTo(toX(x), toY(yEnv));
      }
      ctx.lineTo(padL + plotW, padT + topH);
      ctx.closePath();
      ctx.fill();

      // Shaded Target Area (Area under p(x))
      ctx.fillStyle = dark ? 'rgba(16, 185, 129, 0.22)' : 'rgba(16, 185, 129, 0.25)';
      ctx.beginPath();
      ctx.moveTo(padL, padT + topH);
      for (let i = 0; i <= steps; i++) {
        const x = cfg.xMin + (i / steps) * (cfg.xMax - cfg.xMin);
        const yP = cfg.p(x);
        ctx.lineTo(toX(x), toY(yP));
      }
      ctx.lineTo(padL + plotW, padT + topH);
      ctx.closePath();
      ctx.fill();

      // Envelope Curve c*q(x)
      ctx.strokeStyle = '#f59e0b';
      ctx.lineWidth = 2;
      ctx.setLineDash([5, 3]);
      ctx.beginPath();
      for (let i = 0; i <= steps; i++) {
        const x = cfg.xMin + (i / steps) * (cfg.xMax - cfg.xMin);
        const yEnv = cfg.cVal * cfg.q(x);
        const px = toX(x);
        const py = toY(yEnv);
        if (i === 0) ctx.moveTo(px, py);
        else ctx.lineTo(px, py);
      }
      ctx.stroke();
      ctx.setLineDash([]);

      // Target Curve p(x)
      ctx.strokeStyle = '#6366f1';
      ctx.lineWidth = 2.5;
      ctx.beginPath();
      for (let i = 0; i <= steps; i++) {
        const x = cfg.xMin + (i / steps) * (cfg.xMax - cfg.xMin);
        const yP = cfg.p(x);
        const px = toX(x);
        const py = toY(yP);
        if (i === 0) ctx.moveTo(px, py);
        else ctx.lineTo(px, py);
      }
      ctx.stroke();

      // Top Panel Legend
      ctx.fillStyle = '#f59e0b';
      ctx.font = 'bold 10px system-ui, sans-serif';
      ctx.fillText(`-- Envelope: c·q(x)`, padL + 10, padT + 16);

      ctx.fillStyle = '#6366f1';
      ctx.fillText(`— Target: p(x)`, padL + 125, padT + 16);

      // 2. Active Particle Rain
      this.activeParticles.forEach(pt => {
        const px = toX(pt.x);
        const destY = toY(pt.targetY);
        const curY = padT + pt.progress * (destY - padT);

        const color = pt.isAccepted ? '#10b981' : '#f43f5e';
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.arc(px, curY, 3.5, 0, Math.PI * 2);
        ctx.fill();

        if (pt.progress >= 0.85) {
          ctx.strokeStyle = color;
          ctx.lineWidth = 1.5;
          ctx.beginPath();
          ctx.arc(px, destY, 6 * (pt.progress - 0.85) * 6, 0, Math.PI * 2);
          ctx.stroke();
        }
      });

      // 3. Bottom Panel: Empirical Accepted Histogram vs Analytical p(x)
      ctx.save();
      ctx.beginPath();
      ctx.rect(padL, botTop, plotW, botH);
      ctx.clip();

      const numBins = 24;
      const binWidth = (cfg.xMax - cfg.xMin) / numBins;
      const counts = new Array(numBins).fill(0);

      this.acceptedSamples.forEach(s => {
        if (s >= cfg.xMin && s < cfg.xMax) {
          const b = Math.floor((s - cfg.xMin) / binWidth);
          if (b >= 0 && b < numBins) counts[b]++;
        }
      });

      const total = this.acceptedSamples.length;
      const barW = plotW / numBins;

      if (total >= 6) {
        for (let b = 0; b < numBins; b++) {
          const density = counts[b] / (total * binWidth);
          const bx = padL + b * barW;
          const rawBy = toBotY(density);
          const by = Math.max(botTop, Math.min(botTop + botH, rawBy));
          const bh = botTop + botH - by;

          ctx.fillStyle = dark ? 'rgba(16, 185, 129, 0.45)' : 'rgba(16, 185, 129, 0.55)';
          ctx.fillRect(bx + 1, by, barW - 2, bh);
          ctx.strokeStyle = dark ? 'rgba(16, 185, 129, 0.8)' : '#059669';
          ctx.lineWidth = 1;
          ctx.strokeRect(bx + 1, by, barW - 2, bh);
        }
      }

      // Analytical Target Curve on Histogram
      ctx.strokeStyle = '#6366f1';
      ctx.lineWidth = 2;
      ctx.beginPath();
      for (let i = 0; i <= steps; i++) {
        const x = cfg.xMin + (i / steps) * (cfg.xMax - cfg.xMin);
        const px = toX(x);
        const py = toBotY(cfg.p(x));
        if (i === 0) ctx.moveTo(px, py);
        else ctx.lineTo(px, py);
      }
      ctx.stroke();
      ctx.restore();

      ctx.fillStyle = '#10b981';
      ctx.font = 'bold 10px system-ui, sans-serif';
      ctx.fillText('Accepted Samples Density p̂(x)', padL + 10, botTop + 16);

      // X-axis ticks
      ctx.fillStyle = dark ? '#94a3b8' : '#64748b';
      ctx.font = '10px ui-monospace, monospace';
      ctx.fillText(cfg.xMin.toFixed(1), padL - 4, botTop + botH + 16);
      ctx.fillText(cfg.xMax.toFixed(1), padL + plotW - 14, botTop + botH + 16);
    }
  }

  // =========================================================================
  // 15. Lab 1: Bounding Envelope Optimizer (MC 04 Lab 1)
  // =========================================================================
  class BoundingEnvelopeVisualizer {
    constructor(widget) {
      this.widget = widget;
      this.canvas = widget.querySelector('canvas');
      if (!this.canvas) return;
      this.ctx = this.canvas.getContext('2d');

      this.sliderAlpha = widget.querySelector('#env-slider-alpha');
      this.sliderBeta = widget.querySelector('#env-slider-beta');
      this.sliderC = widget.querySelector('#env-slider-c');
      this.valAlpha = widget.querySelector('#env-val-alpha');
      this.valBeta = widget.querySelector('#env-val-beta');
      this.valC = widget.querySelector('#env-val-c');

      this.hudEff = widget.querySelector('#env-hud-eff');
      this.hudWaste = widget.querySelector('#env-hud-waste');

      this.alpha = this.sliderAlpha ? parseFloat(this.sliderAlpha.value) : 2.0;
      this.beta = this.sliderBeta ? parseFloat(this.sliderBeta.value) : 5.0;
      this.cMult = this.sliderC ? parseFloat(this.sliderC.value) : 1.0;

      this.setupCanvas();
      this.bindEvents();
      this.draw();
    }

    setupCanvas() {
      const dpr = window.devicePixelRatio || 1;
      const rect = this.canvas.parentElement.getBoundingClientRect();
      const width = rect.width || 440;
      const height = rect.height || 290;

      this.canvas.width = width * dpr;
      this.canvas.height = height * dpr;
      this.ctx.scale(dpr, dpr);
      this.width = width;
      this.height = height;

      window.addEventListener('resize', () => {
        const r = this.canvas.parentElement.getBoundingClientRect();
        this.canvas.width = (r.width || 440) * dpr;
        this.canvas.height = (r.height || 290) * dpr;
        this.ctx.scale(dpr, dpr);
        this.width = r.width || 440;
        this.height = r.height || 290;
        this.draw();
      });
    }

    bindEvents() {
      if (this.sliderAlpha) {
        this.sliderAlpha.addEventListener('input', (e) => {
          this.alpha = parseFloat(e.target.value);
          if (this.valAlpha) this.valAlpha.textContent = this.alpha.toFixed(1);
          this.draw();
        });
      }

      if (this.sliderBeta) {
        this.sliderBeta.addEventListener('input', (e) => {
          this.beta = parseFloat(e.target.value);
          if (this.valBeta) this.valBeta.textContent = this.beta.toFixed(1);
          this.draw();
        });
      }

      if (this.sliderC) {
        this.sliderC.addEventListener('input', (e) => {
          this.cMult = parseFloat(e.target.value);
          if (this.valC) this.valC.textContent = `${this.cMult.toFixed(2)}x`;
          this.draw();
        });
      }
    }

    // Beta PDF: p(x) = x^(a-1) * (1-x)^(b-1) / B(a, b)
    betaPDF(x) {
      if (x <= 0 || x >= 1) return 0;
      // Mode at (a-1)/(a+b-2)
      const a = this.alpha;
      const b = this.beta;
      // Log beta function via Stirling/lgamma approximation
      const lB = this.lgamma(a) + this.lgamma(b) - this.lgamma(a + b);
      return Math.exp((a - 1) * Math.log(x) + (b - 1) * Math.log(1 - x) - lB);
    }

    lgamma(x) {
      const g = 7;
      const C = [
        0.99999999999980993, 676.5203681218851, -1259.1392167224028,
        771.32342877765313, -176.61502916214059, 12.507343278686905,
        -0.13857109526572012, 9.9843695780195716e-6, 1.5056327351493116e-7
      ];
      if (x < 0.5) return Math.log(Math.PI / Math.sin(Math.PI * x)) - this.lgamma(1 - x);
      x -= 1;
      let a = C[0];
      const t = x + g + 0.5;
      for (let i = 1; i < g + 2; i++) a += C[i] / (x + i);
      return 0.5 * Math.log(2 * Math.PI) + (x + 0.5) * Math.log(t) - t + Math.log(a);
    }

    draw() {
      const ctx = this.ctx;
      const w = this.width;
      const h = this.height;
      const dark = isDarkTheme();

      ctx.clearRect(0, 0, w, h);

      // Find maximum of Beta PDF
      let mode = 0.5;
      if (this.alpha > 1 && this.beta > 1) {
        mode = (this.alpha - 1) / (this.alpha + this.beta - 2);
      }
      const pMax = Math.max(1.5, this.betaPDF(mode));
      const cOptimal = pMax;
      const cActual = cOptimal * this.cMult;
      const efficiency = 1 / cActual;
      const waste = (1 - efficiency) * 100;

      if (this.hudEff) this.hudEff.textContent = `${(efficiency * 100).toFixed(1)}%`;
      if (this.hudWaste) this.hudWaste.textContent = `${waste.toFixed(1)}%`;

      const padL = 45;
      const padR = 25;
      const padT = 25;
      const padB = 35;
      const plotW = w - padL - padR;
      const plotH = h - padT - padB;
      const yMax = cActual * 1.25;

      const toX = (x) => padL + x * plotW;
      const toY = (y) => padT + (1 - y / yMax) * plotH;

      // Background
      ctx.fillStyle = dark ? 'rgba(30, 41, 59, 0.4)' : 'rgba(241, 245, 249, 0.8)';
      ctx.fillRect(padL, padT, plotW, plotH);
      ctx.strokeStyle = dark ? 'rgba(255, 255, 255, 0.14)' : 'rgba(0, 0, 0, 0.12)';
      ctx.strokeRect(padL, padT, plotW, plotH);

      // 1. Accepted Region under p(x) (clean emerald)
      ctx.fillStyle = dark ? 'rgba(16, 185, 129, 0.35)' : 'rgba(16, 185, 129, 0.38)';
      ctx.beginPath();
      ctx.moveTo(padL, padT + plotH);
      const steps = 100;
      for (let i = 0; i <= steps; i++) {
        const x = i / steps;
        ctx.lineTo(toX(x), toY(this.betaPDF(x)));
      }
      ctx.lineTo(padL + plotW, padT + plotH);
      ctx.closePath();
      ctx.fill();

      // 2. Wasted Rejection Zone between p(x) and c (clean coral)
      ctx.fillStyle = dark ? 'rgba(244, 63, 94, 0.22)' : 'rgba(244, 63, 94, 0.18)';
      ctx.beginPath();
      ctx.moveTo(padL, toY(cActual));
      ctx.lineTo(padL + plotW, toY(cActual));
      for (let i = steps; i >= 0; i--) {
        const x = i / steps;
        ctx.lineTo(toX(x), toY(this.betaPDF(x)));
      }
      ctx.closePath();
      ctx.fill();

      // Envelope line c
      ctx.strokeStyle = '#f59e0b';
      ctx.lineWidth = 2.5;
      ctx.setLineDash([5, 4]);
      ctx.beginPath();
      ctx.moveTo(padL, toY(cActual));
      ctx.lineTo(padL + plotW, toY(cActual));
      ctx.stroke();
      ctx.setLineDash([]);

      // Target curve p(x)
      ctx.strokeStyle = '#6366f1';
      ctx.lineWidth = 2.5;
      ctx.beginPath();
      for (let i = 0; i <= steps; i++) {
        const x = i / steps;
        const px = toX(x);
        const py = toY(this.betaPDF(x));
        if (i === 0) ctx.moveTo(px, py);
        else ctx.lineTo(px, py);
      }
      ctx.stroke();

      // Labels
      ctx.fillStyle = '#f59e0b';
      ctx.font = 'bold 11px system-ui, sans-serif';
      ctx.fillText(`c = ${cActual.toFixed(2)} (Envelope)`, padL + 10, toY(cActual) - 8);

      ctx.fillStyle = '#10b981';
      ctx.fillText(`Accepted Area (1.0)`, toX(mode) - 40, toY(pMax / 2));

      ctx.fillStyle = '#f43f5e';
      ctx.fillText(`Wasted Area (${waste.toFixed(0)}%)`, padL + plotW - 130, toY(cActual) + 20);

      // X-axis
      ctx.fillStyle = dark ? '#94a3b8' : '#64748b';
      ctx.font = '10px ui-monospace, monospace';
      ctx.fillText('0.0', padL - 4, padT + plotH + 16);
      ctx.fillText('1.0', padL + plotW - 10, padT + plotH + 16);
      ctx.fillText(`Target Domain: x ∈ [0, 1]`, padL + plotW / 2 - 55, padT + plotH + 22);
    }
  }

  // =========================================================================
  // 16. Lab 2: Tail Supremum Inspector (MC 04 Lab 2)
  // =========================================================================
  class TailSupremumVisualizer {
    constructor(widget) {
      this.widget = widget;
      this.canvas = widget.querySelector('canvas');
      if (!this.canvas) return;
      this.ctx = this.canvas.getContext('2d');

      this.selPreset = widget.querySelector('#tail-preset-select');
      this.hudStatus = widget.querySelector('#tail-hud-status');
      this.hudSup = widget.querySelector('#tail-hud-sup');

      this.preset = this.selPreset ? this.selPreset.value : 'valid-halfnormal';

      this.setupCanvas();
      this.bindEvents();
      this.draw();
    }

    setupCanvas() {
      const dpr = window.devicePixelRatio || 1;
      const rect = this.canvas.parentElement.getBoundingClientRect();
      const width = rect.width || 440;
      const height = rect.height || 290;

      this.canvas.width = width * dpr;
      this.canvas.height = height * dpr;
      this.ctx.scale(dpr, dpr);
      this.width = width;
      this.height = height;

      window.addEventListener('resize', () => {
        const r = this.canvas.parentElement.getBoundingClientRect();
        this.canvas.width = (r.width || 440) * dpr;
        this.canvas.height = (r.height || 290) * dpr;
        this.ctx.scale(dpr, dpr);
        this.width = r.width || 440;
        this.height = r.height || 290;
        this.draw();
      });
    }

    bindEvents() {
      if (this.selPreset) {
        this.selPreset.addEventListener('change', (e) => {
          this.preset = e.target.value;
          this.draw();
        });
      }
    }

    draw() {
      const ctx = this.ctx;
      const w = this.width;
      const h = this.height;
      const dark = isDarkTheme();

      ctx.clearRect(0, 0, w, h);

      const padL = 50;
      const padR = 25;
      const padT = 25;
      const padB = 35;
      const plotW = w - padL - padR;
      const plotH = h - padT - padB;

      if (this.preset === 'valid-halfnormal') {
        // Target: Half-Normal, Proposal: Exp(1)
        // Ratio r(x) = sqrt(2/pi) * exp(x - x^2/2)
        // Max at x = 1, r(1) = sqrt(2e/pi) ~ 1.3155
        const xMax = 4.0;
        const yMax = 2.0;

        if (this.hudStatus) {
          this.hudStatus.textContent = '✓ Valid: Supremum is Bounded';
          this.hudStatus.style.color = '#10b981';
        }
        if (this.hudSup) this.hudSup.textContent = `c = sup r(x) = 1.316 at x* = 1.0`;

        this.renderRatioPlot(
          (x) => Math.sqrt(2 / Math.PI) * Math.exp(x - 0.5 * x * x),
          0, xMax, yMax, 1.0, 1.3155,
          'Half-Normal / Exp(1)', false
        );
      } else if (this.preset === 'invalid-cauchy') {
        // Target: Cauchy, Proposal: Normal(0, 1)
        // Ratio r(x) = (1 / (pi*(1+x^2))) / (exp(-x^2/2)/sqrt(2*pi))
        // = sqrt(2/pi) * exp(x^2/2) / (1 + x^2) -> INFINITY!
        const xMax = 3.5;
        const yMax = 12.0;

        if (this.hudStatus) {
          this.hudStatus.textContent = '✗ FATAL: Proposal Tail Lighter Than Target!';
          this.hudStatus.style.color = '#f43f5e';
        }
        if (this.hudSup) this.hudSup.textContent = 'c = ∞ (Explodes as x → ∞)';

        this.renderRatioPlot(
          (x) => Math.min(yMax, Math.sqrt(2 / Math.PI) * (Math.exp(0.5 * x * x) / (1 + x * x))),
          0, xMax, yMax, null, null,
          'Cauchy / Gaussian (Exploding Ratio)', true
        );
      } else {
        // Target: Student-t(df=3), Proposal: Cauchy
        // Valid bounded ratio
        const xMax = 4.0;
        const yMax = 1.8;

        if (this.hudStatus) {
          this.hudStatus.textContent = '✓ Valid: Cauchy Dominates Student-t';
          this.hudStatus.style.color = '#10b981';
        }
        if (this.hudSup) this.hudSup.textContent = 'c = 1.25 (Bounded)';

        this.renderRatioPlot(
          (x) => 1.25 / (1 + 0.15 * x * x),
          0, xMax, yMax, 0.0, 1.25,
          'Student-t / Cauchy', false
        );
      }
    }

    renderRatioPlot(rFn, xMin, xMax, yMax, supX, supY, label, isExploding) {
      const ctx = this.ctx;
      const w = this.width;
      const h = this.height;
      const dark = isDarkTheme();

      const padL = 50;
      const padR = 25;
      const padT = 25;
      const padB = 35;
      const plotW = w - padL - padR;
      const plotH = h - padT - padB;

      const toX = (x) => padL + ((x - xMin) / (xMax - xMin)) * plotW;
      const toY = (y) => padT + (1 - y / yMax) * plotH;

      ctx.fillStyle = dark ? 'rgba(30, 41, 59, 0.4)' : 'rgba(241, 245, 249, 0.8)';
      ctx.fillRect(padL, padT, plotW, plotH);
      ctx.strokeStyle = dark ? 'rgba(255, 255, 255, 0.14)' : 'rgba(0, 0, 0, 0.12)';
      ctx.strokeRect(padL, padT, plotW, plotH);

      // Ratio curve r(x)
      ctx.save();
      ctx.beginPath();
      ctx.rect(padL, padT, plotW, plotH);
      ctx.clip();
      ctx.strokeStyle = isExploding ? '#f43f5e' : '#06b6d4';
      ctx.lineWidth = 2.5;
      ctx.beginPath();
      const steps = 120;
      for (let i = 0; i <= steps; i++) {
        const x = xMin + (i / steps) * (xMax - xMin);
        const y = rFn(x);
        const px = toX(x);
        const py = toY(y);
        if (i === 0) ctx.moveTo(px, py);
        else ctx.lineTo(px, py);
      }
      ctx.stroke();
      ctx.restore();

      if (supX !== null && supY !== null) {
        // Supremum line
        ctx.strokeStyle = '#f59e0b';
        ctx.lineWidth = 1.8;
        ctx.setLineDash([4, 4]);
        ctx.beginPath();
        ctx.moveTo(padL, toY(supY));
        ctx.lineTo(padL + plotW, toY(supY));
        ctx.stroke();
        ctx.setLineDash([]);

        ctx.fillStyle = '#f59e0b';
        ctx.beginPath();
        ctx.arc(toX(supX), toY(supY), 5, 0, Math.PI * 2);
        ctx.fill();

        ctx.font = 'bold 11px system-ui, sans-serif';
        ctx.fillText(`c = sup r(x) = ${supY.toFixed(3)}`, toX(supX) + 8, toY(supY) - 8);
      } else if (isExploding) {
        // Warning banner across canvas
        ctx.fillStyle = 'rgba(244, 63, 94, 0.18)';
        ctx.fillRect(padL + 20, padT + 30, plotW - 40, 45);
        ctx.strokeStyle = '#f43f5e';
        ctx.lineWidth = 1.2;
        ctx.strokeRect(padL + 20, padT + 30, plotW - 40, 45);

        ctx.fillStyle = '#f43f5e';
        ctx.font = 'bold 11px system-ui, sans-serif';
        ctx.fillText('⚠ INVALID: r(x) → ∞ in tails!', padL + 35, padT + 48);
        ctx.font = '10px system-ui, sans-serif';
        ctx.fillText('Gaussian proposal cannot envelop Cauchy power-law tail.', padL + 35, padT + 64);
      }

      ctx.fillStyle = dark ? '#e2e8f0' : '#1e293b';
      ctx.font = 'bold 11px system-ui, sans-serif';
      ctx.fillText(`Ratio: r(x) = p(x) / q(x) [${label}]`, padL + 12, padT + 18);

      // X-axis
      ctx.fillStyle = dark ? '#94a3b8' : '#64748b';
      ctx.font = '10px ui-monospace, monospace';
      ctx.fillText(xMin.toFixed(1), padL - 4, padT + plotH + 16);
      ctx.fillText(xMax.toFixed(1), padL + plotW - 12, padT + plotH + 16);
      ctx.fillText('Tail Coordinate (x)', padL + plotW / 2 - 40, padT + plotH + 22);
    }
  }

  // =========================================================================
  // 17. Lab 3: Marsaglia Squeeze Accelerator (MC 04 Lab 3)
  // =========================================================================
  class MarsagliaSqueezeVisualizer {
    constructor(widget) {
      this.widget = widget;
      this.canvas = widget.querySelector('canvas');
      if (!this.canvas) return;
      this.ctx = this.canvas.getContext('2d');

      this.btnStep = widget.querySelector('#squeeze-btn-step');
      this.btnRun = widget.querySelector('#squeeze-btn-run');
      this.hudPre = widget.querySelector('#squeeze-hud-pre');
      this.hudFull = widget.querySelector('#squeeze-hud-full');
      this.hudRej = widget.querySelector('#squeeze-hud-rej');

      this.preCount = 0;
      this.fullCount = 0;
      this.rejCount = 0;
      this.particles = [];
      this.isRunning = false;
      this.timer = null;

      this.setupCanvas();
      this.bindEvents();
      this.runBatch(150);
      this.draw();
    }

    setupCanvas() {
      const dpr = window.devicePixelRatio || 1;
      const rect = this.canvas.parentElement.getBoundingClientRect();
      const width = rect.width || 440;
      const height = rect.height || 290;

      this.canvas.width = width * dpr;
      this.canvas.height = height * dpr;
      this.ctx.scale(dpr, dpr);
      this.width = width;
      this.height = height;

      window.addEventListener('resize', () => {
        const r = this.canvas.parentElement.getBoundingClientRect();
        this.canvas.width = (r.width || 440) * dpr;
        this.canvas.height = (r.height || 290) * dpr;
        this.ctx.scale(dpr, dpr);
        this.width = r.width || 440;
        this.height = r.height || 290;
        this.draw();
      });
    }

    bindEvents() {
      if (this.btnStep) {
        this.btnStep.addEventListener('click', () => {
          this.runBatch(30);
          this.draw();
        });
      }

      if (this.btnRun) {
        this.btnRun.addEventListener('click', () => {
          if (this.isRunning) {
            clearInterval(this.timer);
            this.isRunning = false;
            this.btnRun.textContent = '▶ Auto Stream';
          } else {
            this.isRunning = true;
            this.btnRun.textContent = '⏸ Pause';
            this.timer = setInterval(() => {
              this.runBatch(20);
              this.draw();
            }, 150);
          }
        });
      }
    }

    // Target: p(x) = sqrt(2/pi)*exp(-x^2/2)
    // Envelope: c*q(x) = 1.316 * exp(-x)
    // Squeeze: s(x) = parabolic lower bound s(x) = 0.8 * (1 - 0.3*x^2)
    targetP(x) {
      return Math.sqrt(2 / Math.PI) * Math.exp(-0.5 * x * x);
    }
    envelopeCQ(x) {
      return 1.3155 * Math.exp(-x);
    }
    squeezeS(x) {
      return Math.max(0, 0.7978 * (1 - 0.5 * x * x));
    }

    runBatch(n) {
      for (let i = 0; i < n; i++) {
        const y = -Math.log(Math.max(1e-7, Math.random()));
        if (y > 3.0) continue;

        const v = Math.random() * this.envelopeCQ(y);
        const sVal = this.squeezeS(y);

        let type = 'rej';
        if (v <= sVal) {
          // Pre-accepted without calculating transcendental exp(-x^2/2)
          this.preCount++;
          type = 'pre';
        } else if (v <= this.targetP(y)) {
          // Full evaluation required
          this.fullCount++;
          type = 'full';
        } else {
          // Rejected
          this.rejCount++;
        }

        if (this.particles.length >= 100) {
          this.particles.shift();
        }
        this.particles.push({ x: y, y: v, type: type });
      }

      const total = this.preCount + this.fullCount + this.rejCount || 1;
      if (this.hudPre) this.hudPre.textContent = `${((this.preCount / total) * 100).toFixed(1)}% (Pre-Accept)`;
      if (this.hudFull) this.hudFull.textContent = `${((this.fullCount / total) * 100).toFixed(1)}% (Full Eval)`;
      if (this.hudRej) this.hudRej.textContent = `${((this.rejCount / total) * 100).toFixed(1)}% (Rejected)`;
    }

    draw() {
      const ctx = this.ctx;
      const w = this.width;
      const h = this.height;
      const dark = isDarkTheme();

      ctx.clearRect(0, 0, w, h);

      const padL = 45;
      const padR = 25;
      const padT = 25;
      const padB = 35;
      const plotW = w - padL - padR;
      const plotH = h - padT - padB;

      const xMin = 0;
      const xMax = 2.8;
      const yMax = 1.5;

      const toX = (x) => padL + ((x - xMin) / (xMax - xMin)) * plotW;
      const toY = (y) => padT + (1 - y / yMax) * plotH;

      ctx.fillStyle = dark ? 'rgba(30, 41, 59, 0.4)' : 'rgba(241, 245, 249, 0.8)';
      ctx.fillRect(padL, padT, plotW, plotH);
      ctx.strokeStyle = dark ? 'rgba(255, 255, 255, 0.14)' : 'rgba(0, 0, 0, 0.12)';
      ctx.strokeRect(padL, padT, plotW, plotH);

      const steps = 100;

      // 1. Shaded Pre-Accept Zone under s(x)
      ctx.fillStyle = dark ? 'rgba(16, 185, 129, 0.35)' : 'rgba(16, 185, 129, 0.32)';
      ctx.beginPath();
      ctx.moveTo(padL, padT + plotH);
      for (let i = 0; i <= steps; i++) {
        const x = xMin + (i / steps) * (xMax - xMin);
        ctx.lineTo(toX(x), toY(this.squeezeS(x)));
      }
      ctx.lineTo(padL + plotW, padT + plotH);
      ctx.closePath();
      ctx.fill();

      // 2. Shaded Full Evaluation Zone between s(x) and p(x)
      ctx.fillStyle = dark ? 'rgba(6, 182, 212, 0.25)' : 'rgba(6, 182, 212, 0.22)';
      ctx.beginPath();
      ctx.moveTo(padL, toY(this.squeezeS(0)));
      for (let i = 0; i <= steps; i++) {
        const x = xMin + (i / steps) * (xMax - xMin);
        ctx.lineTo(toX(x), toY(this.targetP(x)));
      }
      for (let i = steps; i >= 0; i--) {
        const x = xMin + (i / steps) * (xMax - xMin);
        ctx.lineTo(toX(x), toY(this.squeezeS(x)));
      }
      ctx.closePath();
      ctx.fill();

      // Curves
      // Envelope c*q(x)
      ctx.strokeStyle = '#f59e0b';
      ctx.lineWidth = 2;
      ctx.setLineDash([4, 3]);
      ctx.beginPath();
      for (let i = 0; i <= steps; i++) {
        const x = xMin + (i / steps) * (xMax - xMin);
        const px = toX(x);
        const py = toY(this.envelopeCQ(x));
        if (i === 0) ctx.moveTo(px, py);
        else ctx.lineTo(px, py);
      }
      ctx.stroke();
      ctx.setLineDash([]);

      // Target p(x)
      ctx.strokeStyle = '#6366f1';
      ctx.lineWidth = 2.5;
      ctx.beginPath();
      for (let i = 0; i <= steps; i++) {
        const x = xMin + (i / steps) * (xMax - xMin);
        const px = toX(x);
        const py = toY(this.targetP(x));
        if (i === 0) ctx.moveTo(px, py);
        else ctx.lineTo(px, py);
      }
      ctx.stroke();

      // Squeeze s(x)
      ctx.strokeStyle = '#10b981';
      ctx.lineWidth = 2;
      ctx.beginPath();
      for (let i = 0; i <= steps; i++) {
        const x = xMin + (i / steps) * (xMax - xMin);
        const px = toX(x);
        const py = toY(this.squeezeS(x));
        if (i === 0) ctx.moveTo(px, py);
        else ctx.lineTo(px, py);
      }
      ctx.stroke();

      // Draw particle samples
      this.particles.forEach(pt => {
        const px = toX(pt.x);
        const py = toY(pt.y);
        ctx.fillStyle = pt.type === 'pre' ? '#10b981' : pt.type === 'full' ? '#06b6d4' : '#f43f5e';
        ctx.beginPath();
        ctx.arc(px, py, 2.2, 0, Math.PI * 2);
        ctx.fill();
      });

      // Legend
      ctx.fillStyle = '#10b981';
      ctx.font = 'bold 10px system-ui, sans-serif';
      ctx.fillText('— Squeeze s(x) [Pre-Accept]', padL + 8, padT + 16);

      ctx.fillStyle = '#6366f1';
      ctx.fillText('— Target p(x)', padL + 165, padT + 16);

      ctx.fillStyle = '#f59e0b';
      ctx.fillText('-- Envelope c·q(x)', padL + 250, padT + 16);
    }
  }


  // =========================================================================
  // Post 05: Mathematical Helpers for Copulas & Correlated Variates
  // =========================================================================
  function mcNormCdf(x) {
    const a1 = 0.254829592, a2 = -0.284496736, a3 = 1.421413741;
    const a4 = -1.453152027, a5 = 1.061405429, p = 0.3275911;
    const sign = x < 0 ? -1 : 1;
    const absX = Math.abs(x) / Math.SQRT2;
    const t = 1.0 / (1.0 + p * absX);
    const erf = 1.0 - (((((a5 * t + a4) * t) + a3) * t + a2) * t + a1) * t * Math.exp(-absX * absX);
    return 0.5 * (1.0 + sign * erf);
  }

  function mcNormInv(p) {
    p = Math.max(1e-7, Math.min(1 - 1e-7, p));
    const a = [-3.969683028665376e+01, 2.209460984245205e+02, -2.759285104469687e+02, 1.383577518672690e+02, -3.066479806614716e+01, 2.506628277459239e+00];
    const b = [-5.447609879822406e+01, 1.615858368580409e+02, -1.556989798598866e+02, 6.680131188771972e+01, -1.328068155288572e+01];
    const c = [-7.784894002430293e-03, -3.223964580411365e-01, -2.400758277161838e+00, -2.549732539343734e+00, 4.374664141464968e+00, 2.938163982698783e+00];
    const d = [7.784695709041462e-03, 3.224671290700398e-01, 2.445134137142996e+00, 3.754408661907416e+00];
    const p_low = 0.02425, p_high = 1 - p_low;
    let q, r;
    if (p < p_low) {
      q = Math.sqrt(-2 * Math.log(p));
      return (((((c[0]*q+c[1])*q+c[2])*q+c[3])*q+c[4])*q+c[5]) / ((((d[0]*q+d[1])*q+d[2])*q+d[3])*q+1);
    } else if (p <= p_high) {
      q = p - 0.5; r = q * q;
      return (((((a[0]*r+a[1])*r+a[2])*r+a[3])*r+a[4])*r+a[5])*q / (((((b[0]*r+b[1])*r+b[2])*r+b[3])*r+b[4])*r+1);
    } else {
      q = Math.sqrt(-2 * Math.log(1 - p));
      return -(((((c[0]*q+c[1])*q+c[2])*q+c[3])*q+c[4])*q+c[5]) / ((((d[0]*q+d[1])*q+d[2])*q+d[3])*q+1);
    }
  }

  function mcRandn() {
    let u = 0, v = 0;
    while (u === 0) u = Math.random();
    while (v === 0) v = Math.random();
    return Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v);
  }

  function sampleCopulaPair(family, param) {
    if (family === 'independent') {
      const u1 = Math.random();
      const u2 = Math.random();
      const x1 = mcNormInv(u1);
      const x2 = mcNormInv(u2);
      return { u1, u2, x1, x2 };
    } else if (family === 'gaussian') {
      const rho = Math.max(-0.98, Math.min(0.98, param));
      const z1 = mcRandn();
      const z2 = rho * z1 + Math.sqrt(Math.max(0, 1 - rho * rho)) * mcRandn();
      const u1 = mcNormCdf(z1);
      const u2 = mcNormCdf(z2);
      return { u1, u2, x1: z1, x2: z2 };
    } else if (family === 'clayton') {
      const theta = Math.max(0.1, param);
      const u1 = Math.max(1e-5, Math.min(1 - 1e-5, Math.random()));
      const v = Math.max(1e-5, Math.min(1 - 1e-5, Math.random()));
      const u2 = Math.pow(Math.pow(u1, -theta) * (Math.pow(v, -theta / (theta + 1)) - 1) + 1, -1 / theta);
      const u2Clamped = Math.max(1e-5, Math.min(1 - 1e-5, isNaN(u2) ? 0.5 : u2));
      const x1 = mcNormInv(u1);
      const x2 = mcNormInv(u2Clamped);
      return { u1, u2: u2Clamped, x1, x2 };
    } else if (family === 'gumbel') {
      const theta = Math.max(1.001, param);
      const alpha = 1.0 / theta;
      const w = -Math.log(Math.max(1e-9, Math.random()));
      const phi = (Math.random() - 0.5) * Math.PI;
      const part1 = Math.sin(alpha * (phi + Math.PI / 2)) / Math.pow(Math.cos(phi), alpha);
      const part2 = Math.pow(Math.cos(phi - alpha * (phi + Math.PI / 2)) / w, (1 - alpha) / alpha);
      const s = Math.max(1e-6, part1 * part2);
      const e1 = -Math.log(Math.max(1e-9, Math.random()));
      const e2 = -Math.log(Math.max(1e-9, Math.random()));
      const u1 = Math.exp(-Math.pow(e1 / s, alpha));
      const u2 = Math.exp(-Math.pow(e2 / s, alpha));
      const u1Clamped = Math.max(1e-5, Math.min(1 - 1e-5, isNaN(u1) ? 0.5 : u1));
      const u2Clamped = Math.max(1e-5, Math.min(1 - 1e-5, isNaN(u2) ? 0.5 : u2));
      const x1 = mcNormInv(u1Clamped);
      const x2 = mcNormInv(u2Clamped);
      return { u1: u1Clamped, u2: u2Clamped, x1, x2 };
    } else if (family === 'student-t') {
      const rho = Math.max(-0.95, Math.min(0.95, param));
      const nu = 3.0;
      const z1 = mcRandn();
      const z2 = rho * z1 + Math.sqrt(Math.max(0, 1 - rho * rho)) * mcRandn();
      const chi2 = mcRandn()**2 + mcRandn()**2 + mcRandn()**2;
      const scale = Math.sqrt(Math.max(0.1, chi2 / nu));
      const t1 = z1 / scale;
      const t2 = z2 / scale;
      const t3Cdf = (t) => 0.5 + (t / (2 * Math.PI * Math.sqrt(3))) * (1 + t*t/3)**(-1) + (1/Math.PI) * Math.atan(t / Math.sqrt(3));
      const u1 = Math.max(1e-5, Math.min(1 - 1e-5, t3Cdf(t1)));
      const u2 = Math.max(1e-5, Math.min(1 - 1e-5, t3Cdf(t2)));
      return { u1, u2, x1: t1, x2: t2 };
    } else if (family === 'frank') {
      const theta = Math.abs(param) < 0.05 ? 0.05 : param;
      const u1 = Math.random();
      const v = Math.random();
      const num = v * (1 - Math.exp(-theta));
      const den = Math.exp(-theta * u1) + v * (1 - Math.exp(-theta * u1));
      const u2 = - (1 / theta) * Math.log(Math.max(1e-9, 1 + num / Math.max(1e-9, den)));
      const u2Clamped = Math.max(1e-5, Math.min(1 - 1e-5, isNaN(u2) ? 0.5 : u2));
      return { u1, u2: u2Clamped, x1: mcNormInv(u1), x2: mcNormInv(u2Clamped) };
    }
    return { u1: Math.random(), u2: Math.random(), x1: mcRandn(), x2: mcRandn() };
  }

  // =========================================================================
  // Post 05 Hero Visualizer: CopulaMorphVisualizer
  // =========================================================================
  class CopulaMorphVisualizer {
    constructor(container) {
      this.container = container;
      this.canvas = container.querySelector('canvas');
      if (!this.canvas) return;
      this.ctx = this.canvas.getContext('2d');

      this.hudTarget = container.querySelector('#hud-target');
      this.hudParam = container.querySelector('#hud-param');
      this.hudTail = container.querySelector('#hud-tail');
      this.hudCounts = container.querySelector('#hud-counts');

      this.btnPlay = container.querySelector('#btn-play');
      this.btnReset = container.querySelector('#btn-reset');
      this.btnBurst = container.querySelector('#btn-burst');
      this.sliderN = container.querySelector('#slider-n');

      this.currentStep = 1;
      this.family = 'independent';
      this.param = 0;
      this.samples = [];
      this.maxSamples = 600;
      this.animating = true;
      this.animationId = null;

      this.setupCanvas();
      this.bindEvents();
      this.setStep(1);
      this.startLoop();
    }

    setupCanvas() {
      const dpr = window.devicePixelRatio || 1;
      const rect = this.canvas.parentElement.getBoundingClientRect();
      const width = rect.width || 440;
      const height = rect.height || 330;

      this.canvas.width = width * dpr;
      this.canvas.height = height * dpr;
      this.ctx.scale(dpr, dpr);
      this.width = width;
      this.height = height;

      window.addEventListener('resize', () => {
        const r = this.canvas.parentElement.getBoundingClientRect();
        this.canvas.width = (r.width || 440) * dpr;
        this.canvas.height = (r.height || 330) * dpr;
        this.ctx.scale(dpr, dpr);
        this.width = r.width || 440;
        this.height = r.height || 330;
        this.draw();
      });
    }

    bindEvents() {
      if (this.btnPlay) {
        this.btnPlay.addEventListener('click', () => {
          this.animating = !this.animating;
          this.btnPlay.textContent = this.animating ? '⏸ Pause' : '▶ Play';
        });
      }

      if (this.btnReset) {
        this.btnReset.addEventListener('click', () => {
          this.samples = [];
          this.updateHud();
          this.draw();
        });
      }

      if (this.btnBurst) {
        this.btnBurst.addEventListener('click', () => {
          for (let i = 0; i < 40; i++) {
            if (this.samples.length < this.maxSamples) {
              this.samples.push(sampleCopulaPair(this.family, this.param));
            }
          }
          this.updateHud();
          this.draw();
        });
      }

      if (this.sliderN) {
        this.sliderN.addEventListener('input', (e) => {
          this.maxSamples = parseInt(e.target.value, 10);
          if (this.samples.length > this.maxSamples) {
            this.samples = this.samples.slice(this.samples.length - this.maxSamples);
          }
          this.updateHud();
          this.draw();
        });
      }
    }

    setStep(stepNum) {
      this.currentStep = stepNum;
      this.samples = [];

      if (stepNum === 1) {
        this.family = 'independent';
        this.param = 0;
      } else if (stepNum === 2) {
        this.family = 'gaussian';
        this.param = 0.75;
      } else if (stepNum === 3) {
        this.family = 'clayton';
        this.param = 3.0;
      } else if (stepNum === 4) {
        this.family = 'gumbel';
        this.param = 2.5;
      }

      // Pre-seed with 120 points
      for (let i = 0; i < 120; i++) {
        this.samples.push(sampleCopulaPair(this.family, this.param));
      }

      this.updateHud();
      this.draw();
    }

    updateHud() {
      if (this.hudTarget) {
        const names = {
          independent: 'Independent (C = u₁u₂)',
          gaussian: 'Gaussian Copula',
          clayton: 'Clayton Archimedean',
          gumbel: 'Gumbel Archimedean'
        };
        this.hudTarget.textContent = names[this.family] || this.family;
      }

      if (this.hudParam) {
        if (this.family === 'independent') this.hudParam.textContent = 'ρ = 0.00';
        else if (this.family === 'gaussian') this.hudParam.textContent = `ρ = ${this.param.toFixed(2)}`;
        else if (this.family === 'clayton') this.hudParam.textContent = `θ = ${this.param.toFixed(1)} (τ=0.60)`;
        else if (this.family === 'gumbel') this.hudParam.textContent = `θ = ${this.param.toFixed(1)} (τ=0.60)`;
      }

      if (this.hudTail) {
        if (this.family === 'independent' || this.family === 'gaussian') {
          this.hudTail.textContent = 'λL = 0 | λU = 0';
        } else if (this.family === 'clayton') {
          const l = Math.pow(2, -1 / this.param).toFixed(2);
          this.hudTail.textContent = `λL = ${l} | λU = 0`;
        } else if (this.family === 'gumbel') {
          const u = (2 - Math.pow(2, 1 / this.param)).toFixed(2);
          this.hudTail.textContent = `λL = 0 | λU = ${u}`;
        }
      }

      if (this.hudCounts) {
        const total = this.samples.length;
        const extreme = this.samples.filter(pt => pt.u1 > 0.85 && pt.u2 > 0.85).length;
        this.hudCounts.textContent = `N: ${total} | Ext: ${extreme}`;
      }
    }

    startLoop() {
      const loop = () => {
        if (this.animating) {
          if (this.samples.length < this.maxSamples) {
            for (let k = 0; k < 2; k++) {
              if (this.samples.length < this.maxSamples) {
                this.samples.push(sampleCopulaPair(this.family, this.param));
              }
            }
            this.updateHud();
            this.draw();
          }
        }
        this.animationId = requestAnimationFrame(loop);
      };
      this.animationId = requestAnimationFrame(loop);
    }

    draw() {
      const ctx = this.ctx;
      const w = this.width;
      const h = this.height;
      const dark = isDarkTheme();

      ctx.clearRect(0, 0, w, h);

      // Dual-panel geometry
      const pad = 12;
      const panelW = (w - pad * 3) / 2;
      const panelH = h - pad * 2 - 20;
      const top = pad + 18;

      // Left Panel: Copula Space [0, 1]^2
      const leftX = pad;
      this.drawCopulaPanel(ctx, leftX, top, panelW, panelH, dark);

      // Right Panel: Physical / Bivariate Normal Space
      const rightX = pad * 2 + panelW;
      this.drawPhysicalPanel(ctx, rightX, top, panelW, panelH, dark);
    }

    drawCopulaPanel(ctx, x, y, w, h, dark) {
      // Panel Background & Border
      ctx.fillStyle = dark ? 'rgba(15, 23, 42, 0.7)' : 'rgba(248, 250, 252, 0.9)';
      ctx.strokeStyle = dark ? 'rgba(255, 255, 255, 0.12)' : 'rgba(0, 0, 0, 0.12)';
      ctx.lineWidth = 1;
      ctx.fillRect(x, y, w, h);
      ctx.strokeRect(x, y, w, h);

      // Panel Title
      ctx.fillStyle = '#6366f1';
      ctx.font = 'bold 11px system-ui, sans-serif';
      ctx.fillText('1. Copula Space [0, 1]²', x + 6, y - 5);

      // Gridlines inside [0, 1]^2
      ctx.strokeStyle = dark ? 'rgba(255, 255, 255, 0.06)' : 'rgba(0, 0, 0, 0.05)';
      for (let s = 0.25; s < 1.0; s += 0.25) {
        ctx.beginPath();
        ctx.moveTo(x + s * w, y);
        ctx.lineTo(x + s * w, y + h);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(x, y + h - s * h);
        ctx.lineTo(x + w, y + h - s * h);
        ctx.stroke();
      }

      // Tail Critical Corner Highlight
      if (this.currentStep === 1 || this.currentStep === 2 || this.currentStep === 4) {
        // Upper-right corner u1 > 0.85 & u2 > 0.85
        const boxX = x + 0.85 * w;
        const boxY = y;
        const boxW = 0.15 * w;
        const boxH = 0.15 * h;
        ctx.fillStyle = 'rgba(244, 63, 94, 0.12)';
        ctx.strokeStyle = '#f43f5e';
        ctx.lineWidth = 1.2;
        ctx.setLineDash([3, 2]);
        ctx.fillRect(boxX, boxY, boxW, boxH);
        ctx.strokeRect(boxX, boxY, boxW, boxH);
        ctx.setLineDash([]);
      }
      if (this.currentStep === 3) {
        // Lower-left corner u1 < 0.20 & u2 < 0.20
        const boxW = 0.20 * w;
        const boxH = 0.20 * h;
        const boxX = x;
        const boxY = y + h - boxH;
        ctx.fillStyle = 'rgba(16, 185, 129, 0.15)';
        ctx.strokeStyle = '#10b981';
        ctx.lineWidth = 1.2;
        ctx.setLineDash([3, 2]);
        ctx.fillRect(boxX, boxY, boxW, boxH);
        ctx.strokeRect(boxX, boxY, boxW, boxH);
        ctx.setLineDash([]);
      }

      // Draw Points in Copula Space
      this.samples.forEach(pt => {
        const px = x + pt.u1 * w;
        const py = y + h - pt.u2 * h;

        let col = '#06b6d4';
        if (this.currentStep === 3 && pt.u1 < 0.20 && pt.u2 < 0.20) col = '#10b981';
        else if ((this.currentStep === 4 || this.currentStep === 1 || this.currentStep === 2) && pt.u1 > 0.85 && pt.u2 > 0.85) col = '#f43f5e';

        ctx.fillStyle = col;
        ctx.beginPath();
        ctx.arc(px, py, 2.2, 0, Math.PI * 2);
        ctx.fill();
      });

      // Axis labels
      ctx.fillStyle = dark ? '#94a3b8' : '#64748b';
      ctx.font = '9px monospace';
      ctx.fillText('0', x + 2, y + h - 2);
      ctx.fillText('1', x + w - 8, y + h - 2);
      ctx.fillText('1', x + 2, y + 9);
      ctx.fillText('u₁', x + w / 2 - 5, y + h + 12);
      ctx.fillText('u₂', x - 10, y + h / 2 + 3);
    }

    drawPhysicalPanel(ctx, x, y, w, h, dark) {
      // Panel Background & Border
      ctx.fillStyle = dark ? 'rgba(15, 23, 42, 0.7)' : 'rgba(248, 250, 252, 0.9)';
      ctx.strokeStyle = dark ? 'rgba(255, 255, 255, 0.12)' : 'rgba(0, 0, 0, 0.12)';
      ctx.lineWidth = 1;
      ctx.fillRect(x, y, w, h);
      ctx.strokeRect(x, y, w, h);

      // Panel Title
      const title = (this.currentStep === 4) ? '2. Multi-Hazard (Wind vs Surge)' : '2. Bivariate Physical Space';
      ctx.fillStyle = '#06b6d4';
      ctx.font = 'bold 11px system-ui, sans-serif';
      ctx.fillText(title, x + 6, y - 5);

      const cx = x + w / 2;
      const cy = y + h / 2;

      // Axes across center
      ctx.strokeStyle = dark ? 'rgba(255, 255, 255, 0.15)' : 'rgba(0, 0, 0, 0.15)';
      ctx.beginPath();
      ctx.moveTo(x, cy);
      ctx.lineTo(x + w, cy);
      ctx.moveTo(cx, y);
      ctx.lineTo(cx, y + h);
      ctx.stroke();

      // In step 2, draw Cholesky covariance ellipses
      if (this.currentStep === 2) {
        ctx.save();
        ctx.translate(cx, cy);
        const rho = 0.75;
        const angle = Math.PI / 4;
        ctx.rotate(angle);

        // 1-sigma, 2-sigma ellipses
        const a1 = (w / 7) * Math.sqrt(1 + rho);
        const b1 = (h / 7) * Math.sqrt(1 - rho);
        ctx.strokeStyle = 'rgba(99, 102, 241, 0.5)';
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.ellipse(0, 0, a1, b1, 0, 0, Math.PI * 2);
        ctx.stroke();

        ctx.strokeStyle = 'rgba(99, 102, 241, 0.25)';
        ctx.beginPath();
        ctx.ellipse(0, 0, a1 * 2, b1 * 2, 0, 0, Math.PI * 2);
        ctx.stroke();
        ctx.restore();
      }

      // Plot Points in Physical Space
      const scaleX = w / 6.5;
      const scaleY = h / 6.5;

      this.samples.forEach(pt => {
        let px, py;
        if (this.currentStep === 4) {
          // Hurricane Wind V ~ Gumbel(32, 6.5) and Surge S ~ LogNormal(0.8, 0.45)
          const v = 32 - 6.5 * Math.log(-Math.log(Math.max(1e-5, pt.u1)));
          const s = Math.exp(0.8 + 0.45 * pt.x2);
          px = x + ((v - 20) / 45) * w;
          py = y + h - ((s - 0.5) / 5.5) * h;
        } else {
          px = cx + pt.x1 * scaleX;
          py = cy - pt.x2 * scaleY;
        }

        if (px >= x && px <= x + w && py >= y && py <= y + h) {
          let col = '#6366f1';
          if (this.currentStep === 3 && pt.u1 < 0.20 && pt.u2 < 0.20) col = '#10b981';
          else if (this.currentStep === 4 && pt.u1 > 0.85 && pt.u2 > 0.85) col = '#f43f5e';

          ctx.fillStyle = col;
          ctx.beginPath();
          ctx.arc(px, py, 2.2, 0, Math.PI * 2);
          ctx.fill();
        }
      });

      // Axis labels
      ctx.fillStyle = dark ? '#94a3b8' : '#64748b';
      ctx.font = '9px monospace';
      if (this.currentStep === 4) {
        ctx.fillText('Wind V (m/s)', x + w - 65, y + h - 5);
        ctx.fillText('Surge S (m)', x + 5, y + 14);
      } else {
        ctx.fillText('X₁', x + w - 14, cy - 4);
        ctx.fillText('X₂', cx + 4, y + 12);
      }
    }
  }

  // =========================================================================
  // Lab 1: Cholesky Matrix Decomposer & Ellipse Transformer (mc-cholesky-lab)
  // =========================================================================
  class CholeskyDecomposerVisualizer {
    constructor(container) {
      this.container = container;
      this.canvas = container.querySelector('canvas');
      if (!this.canvas) return;
      this.ctx = this.canvas.getContext('2d');

      this.sliderSigma1 = container.querySelector('#slider-cholesky-sigma1');
      this.sliderSigma2 = container.querySelector('#slider-cholesky-sigma2');
      this.sliderRho = container.querySelector('#slider-cholesky-rho');

      this.valSigma1 = container.querySelector('#val-cholesky-sigma1');
      this.valSigma2 = container.querySelector('#val-cholesky-sigma2');
      this.valRho = container.querySelector('#val-cholesky-rho');

      this.dispSigma = container.querySelector('#disp-cholesky-sigma');
      this.dispL = container.querySelector('#disp-cholesky-l');
      this.dispDet = container.querySelector('#disp-cholesky-det');
      this.dispEigen = container.querySelector('#disp-cholesky-eigen');

      this.sigma1 = 1.5;
      this.sigma2 = 2.0;
      this.rho = 0.70;

      this.samplesZ = [];
      for (let i = 0; i < 280; i++) {
        this.samplesZ.push({ z1: mcRandn(), z2: mcRandn() });
      }

      this.setupCanvas();
      this.bindEvents();
      this.updateCalculations();
      this.draw();
    }

    setupCanvas() {
      const dpr = window.devicePixelRatio || 1;
      const rect = this.canvas.parentElement.getBoundingClientRect();
      const width = rect.width || 440;
      const height = rect.height || 260;

      this.canvas.width = width * dpr;
      this.canvas.height = height * dpr;
      this.ctx.scale(dpr, dpr);
      this.width = width;
      this.height = height;

      window.addEventListener('resize', () => {
        const r = this.canvas.parentElement.getBoundingClientRect();
        this.canvas.width = (r.width || 440) * dpr;
        this.canvas.height = (r.height || 260) * dpr;
        this.ctx.scale(dpr, dpr);
        this.width = r.width || 440;
        this.height = r.height || 260;
        this.draw();
      });
    }

    bindEvents() {
      const update = () => {
        this.sigma1 = parseFloat(this.sliderSigma1.value);
        this.sigma2 = parseFloat(this.sliderSigma2.value);
        this.rho = parseFloat(this.sliderRho.value);

        if (this.valSigma1) this.valSigma1.textContent = this.sigma1.toFixed(2);
        if (this.valSigma2) this.valSigma2.textContent = this.sigma2.toFixed(2);
        if (this.valRho) this.valRho.textContent = this.rho.toFixed(2);

        this.updateCalculations();
        this.draw();
      };

      if (this.sliderSigma1) this.sliderSigma1.addEventListener('input', update);
      if (this.sliderSigma2) this.sliderSigma2.addEventListener('input', update);
      if (this.sliderRho) this.sliderRho.addEventListener('input', update);
    }

    updateCalculations() {
      const s1 = this.sigma1;
      const s2 = this.sigma2;
      const r = this.rho;

      const sig11 = s1 * s1;
      const sig22 = s2 * s2;
      const sig12 = r * s1 * s2;

      const l11 = s1;
      const l12 = 0;
      const l21 = r * s2;
      const l22 = s2 * Math.sqrt(Math.max(0, 1 - r * r));

      const det = sig11 * sig22 - sig12 * sig12;

      // Eigenvalues of 2x2
      const trace = sig11 + sig22;
      const disc = Math.sqrt(Math.max(0, (sig11 - sig22)**2 + 4 * sig12**2));
      const lambda1 = (trace + disc) / 2;
      const lambda2 = (trace - disc) / 2;

      if (this.dispSigma) {
        this.dispSigma.innerHTML = `[[${sig11.toFixed(2)}, ${sig12.toFixed(2)}], [${sig12.toFixed(2)}, ${sig22.toFixed(2)}]]`;
      }
      if (this.dispL) {
        this.dispL.innerHTML = `[[${l11.toFixed(2)}, 0.00], [${l21.toFixed(2)}, ${l22.toFixed(2)}]]`;
      }
      if (this.dispDet) {
        this.dispDet.textContent = `${det.toFixed(2)} (PSD: ${det > 0 ? '✓ Valid' : '✗ Singular'})`;
      }
      if (this.dispEigen) {
        this.dispEigen.textContent = `λ₁ = ${lambda1.toFixed(2)}, λ₂ = ${lambda2.toFixed(2)}`;
      }
    }

    draw() {
      const ctx = this.ctx;
      const w = this.width;
      const h = this.height;
      const dark = isDarkTheme();

      ctx.clearRect(0, 0, w, h);

      const pad = 10;
      const panelW = (w - pad * 3) / 2;
      const panelH = h - pad * 2 - 15;
      const top = pad + 15;

      // Left: Standard Normal Z ~ N(0, I)
      const leftX = pad;
      this.drawZPanel(ctx, leftX, top, panelW, panelH, dark);

      // Right: Transformed Correlated X = L * Z
      const rightX = pad * 2 + panelW;
      this.drawXPanel(ctx, rightX, top, panelW, panelH, dark);
    }

    drawZPanel(ctx, x, y, w, h, dark) {
      ctx.fillStyle = dark ? 'rgba(15, 23, 42, 0.7)' : 'rgba(248, 250, 252, 0.9)';
      ctx.strokeStyle = dark ? 'rgba(255, 255, 255, 0.12)' : 'rgba(0, 0, 0, 0.12)';
      ctx.fillRect(x, y, w, h);
      ctx.strokeRect(x, y, w, h);

      ctx.fillStyle = '#10b981';
      ctx.font = 'bold 11px system-ui, sans-serif';
      ctx.fillText('1. Standard Noise Z ~ N(0, I)', x + 6, y - 4);

      const cx = x + w / 2;
      const cy = y + h / 2;
      const scale = w / 6.5;

      // Axes
      ctx.strokeStyle = dark ? 'rgba(255, 255, 255, 0.15)' : 'rgba(0, 0, 0, 0.15)';
      ctx.beginPath();
      ctx.moveTo(x, cy); ctx.lineTo(x + w, cy);
      ctx.moveTo(cx, y); ctx.lineTo(cx, y + h);
      ctx.stroke();

      // Unit circle
      ctx.strokeStyle = 'rgba(16, 185, 129, 0.5)';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.arc(cx, cy, scale, 0, Math.PI * 2);
      ctx.stroke();

      // Scatter
      this.samplesZ.forEach(pt => {
        const px = cx + pt.z1 * scale;
        const py = cy - pt.z2 * scale;
        if (px >= x && px <= x + w && py >= y && py <= y + h) {
          ctx.fillStyle = '#10b981';
          ctx.beginPath();
          ctx.arc(px, py, 2.2, 0, Math.PI * 2);
          ctx.fill();
        }
      });
    }

    drawXPanel(ctx, x, y, w, h, dark) {
      ctx.fillStyle = dark ? 'rgba(15, 23, 42, 0.7)' : 'rgba(248, 250, 252, 0.9)';
      ctx.strokeStyle = dark ? 'rgba(255, 255, 255, 0.12)' : 'rgba(0, 0, 0, 0.12)';
      ctx.fillRect(x, y, w, h);
      ctx.strokeRect(x, y, w, h);

      ctx.fillStyle = '#6366f1';
      ctx.font = 'bold 11px system-ui, sans-serif';
      ctx.fillText('2. Correlated Variates X = L·Z', x + 6, y - 4);

      const cx = x + w / 2;
      const cy = y + h / 2;
      const scale = w / 11;

      // Axes
      ctx.strokeStyle = dark ? 'rgba(255, 255, 255, 0.15)' : 'rgba(0, 0, 0, 0.15)';
      ctx.beginPath();
      ctx.moveTo(x, cy); ctx.lineTo(x + w, cy);
      ctx.moveTo(cx, y); ctx.lineTo(cx, y + h);
      ctx.stroke();

      // Cholesky factors
      const l11 = this.sigma1;
      const l21 = this.rho * this.sigma2;
      const l22 = this.sigma2 * Math.sqrt(Math.max(0, 1 - this.rho * this.rho));

      // Draw transformed ellipse boundary
      ctx.strokeStyle = '#6366f1';
      ctx.lineWidth = 1.8;
      ctx.beginPath();
      for (let a = 0; a <= Math.PI * 2; a += 0.05) {
        const cosA = Math.cos(a);
        const sinA = Math.sin(a);
        const ex = l11 * cosA;
        const ey = l21 * cosA + l22 * sinA;
        const px = cx + ex * scale;
        const py = cy - ey * scale;
        if (a === 0) ctx.moveTo(px, py);
        else ctx.lineTo(px, py);
      }
      ctx.closePath();
      ctx.stroke();

      // Transformed scatter
      this.samplesZ.forEach(pt => {
        const x1 = l11 * pt.z1;
        const x2 = l21 * pt.z1 + l22 * pt.z2;
        const px = cx + x1 * scale;
        const py = cy - x2 * scale;
        if (px >= x && px <= x + w && py >= y && py <= y + h) {
          ctx.fillStyle = '#6366f1';
          ctx.beginPath();
          ctx.arc(px, py, 2.2, 0, Math.PI * 2);
          ctx.fill();
        }
      });
    }
  }

  // =========================================================================
  // Lab 2: Copula Family Morphing Studio (mc-copula-lab)
  // =========================================================================
  class CopulaMorphStudioVisualizer {
    constructor(container) {
      this.container = container;
      this.canvas = container.querySelector('canvas');
      if (!this.canvas) return;
      this.ctx = this.canvas.getContext('2d');

      this.selFamily = container.querySelector('#sel-copula-family');
      this.sliderParam = container.querySelector('#slider-copula-param');
      this.lblParam = container.querySelector('#lbl-copula-param');
      this.valParam = container.querySelector('#val-copula-param');

      this.btnViewCopula = container.querySelector('#btn-view-copula');
      this.btnViewPhysical = container.querySelector('#btn-view-physical');

      this.dispTau = container.querySelector('#disp-copula-tau');
      this.dispRhoS = container.querySelector('#disp-copula-rhos');
      this.dispTailL = container.querySelector('#disp-copula-taill');
      this.dispTailU = container.querySelector('#disp-copula-tailu');

      this.family = 'gumbel';
      this.param = 2.5;
      this.viewMode = 'copula'; // 'copula' or 'physical'

      this.samples = [];
      this.setupCanvas();
      this.bindEvents();
      this.regenerateSamples();
      this.updateReadouts();
      this.draw();
    }

    setupCanvas() {
      const dpr = window.devicePixelRatio || 1;
      const rect = this.canvas.parentElement.getBoundingClientRect();
      const width = rect.width || 440;
      const height = rect.height || 260;

      this.canvas.width = width * dpr;
      this.canvas.height = height * dpr;
      this.ctx.scale(dpr, dpr);
      this.width = width;
      this.height = height;

      window.addEventListener('resize', () => {
        const r = this.canvas.parentElement.getBoundingClientRect();
        this.canvas.width = (r.width || 440) * dpr;
        this.canvas.height = (r.height || 260) * dpr;
        this.ctx.scale(dpr, dpr);
        this.width = r.width || 440;
        this.height = r.height || 260;
        this.draw();
      });
    }

    bindEvents() {
      if (this.selFamily) {
        this.selFamily.addEventListener('change', (e) => {
          this.family = e.target.value;
          this.configureSliderForFamily();
          this.regenerateSamples();
          this.updateReadouts();
          this.draw();
        });
      }

      if (this.sliderParam) {
        this.sliderParam.addEventListener('input', (e) => {
          this.param = parseFloat(e.target.value);
          if (this.valParam) this.valParam.textContent = this.param.toFixed(2);
          this.regenerateSamples();
          this.updateReadouts();
          this.draw();
        });
      }

      if (this.btnViewCopula) {
        this.btnViewCopula.addEventListener('click', () => {
          this.viewMode = 'copula';
          this.btnViewCopula.classList.add('active');
          if (this.btnViewPhysical) this.btnViewPhysical.classList.remove('active');
          this.draw();
        });
      }

      if (this.btnViewPhysical) {
        this.btnViewPhysical.addEventListener('click', () => {
          this.viewMode = 'physical';
          this.btnViewPhysical.classList.add('active');
          if (this.btnViewCopula) this.btnViewCopula.classList.remove('active');
          this.draw();
        });
      }
    }

    configureSliderForFamily() {
      if (!this.sliderParam) return;
      if (this.family === 'gaussian' || this.family === 'student-t') {
        this.sliderParam.min = '-0.95';
        this.sliderParam.max = '0.95';
        this.sliderParam.step = '0.05';
        this.param = 0.70;
        this.sliderParam.value = '0.70';
        if (this.lblParam) this.lblParam.textContent = 'Correlation (ρ):';
      } else if (this.family === 'clayton') {
        this.sliderParam.min = '0.2';
        this.sliderParam.max = '6.0';
        this.sliderParam.step = '0.2';
        this.param = 2.5;
        this.sliderParam.value = '2.5';
        if (this.lblParam) this.lblParam.textContent = 'Parameter (θ):';
      } else if (this.family === 'gumbel') {
        this.sliderParam.min = '1.05';
        this.sliderParam.max = '5.0';
        this.sliderParam.step = '0.15';
        this.param = 2.5;
        this.sliderParam.value = '2.5';
        if (this.lblParam) this.lblParam.textContent = 'Parameter (θ):';
      } else if (this.family === 'frank') {
        this.sliderParam.min = '-6.0';
        this.sliderParam.max = '6.0';
        this.sliderParam.step = '0.5';
        this.param = 3.5;
        this.sliderParam.value = '3.5';
        if (this.lblParam) this.lblParam.textContent = 'Parameter (θ):';
      }
      if (this.valParam) this.valParam.textContent = this.param.toFixed(2);
    }

    regenerateSamples() {
      this.samples = [];
      for (let i = 0; i < 550; i++) {
        this.samples.push(sampleCopulaPair(this.family, this.param));
      }
    }

    updateReadouts() {
      let tau = 0, rhoS = 0, tailL = '0.00', tailU = '0.00';

      if (this.family === 'gaussian') {
        tau = (2 / Math.PI) * Math.asin(this.param);
        rhoS = (6 / Math.PI) * Math.asin(this.param / 2);
        tailL = '0.00';
        tailU = '0.00';
      } else if (this.family === 'clayton') {
        tau = this.param / (this.param + 2);
        rhoS = tau * 1.45; // Empirical approximation
        tailL = Math.pow(2, -1 / this.param).toFixed(2);
        tailU = '0.00';
      } else if (this.family === 'gumbel') {
        tau = 1 - 1 / this.param;
        rhoS = tau * 1.45;
        tailL = '0.00';
        tailU = (2 - Math.pow(2, 1 / this.param)).toFixed(2);
      } else if (this.family === 'student-t') {
        tau = (2 / Math.PI) * Math.asin(this.param);
        rhoS = (6 / Math.PI) * Math.asin(this.param / 2);
        tailL = '0.34';
        tailU = '0.34';
      } else if (this.family === 'frank') {
        tau = this.param > 0 ? (this.param / (this.param + 4)) : (this.param / (4 - this.param));
        rhoS = tau * 1.45;
        tailL = '0.00';
        tailU = '0.00';
      }

      if (this.dispTau) this.dispTau.textContent = tau.toFixed(2);
      if (this.dispRhoS) this.dispRhoS.textContent = Math.min(1.0, rhoS).toFixed(2);
      if (this.dispTailL) this.dispTailL.textContent = tailL;
      if (this.dispTailU) this.dispTailU.textContent = tailU;
    }

    draw() {
      const ctx = this.ctx;
      const w = this.width;
      const h = this.height;
      const dark = isDarkTheme();

      ctx.clearRect(0, 0, w, h);

      const pad = 25;
      const boxW = w - pad * 2;
      const boxH = h - pad * 2;

      // Frame
      ctx.fillStyle = dark ? 'rgba(15, 23, 42, 0.7)' : 'rgba(248, 250, 252, 0.9)';
      ctx.strokeStyle = dark ? 'rgba(255, 255, 255, 0.12)' : 'rgba(0, 0, 0, 0.12)';
      ctx.fillRect(pad, pad, boxW, boxH);
      ctx.strokeRect(pad, pad, boxW, boxH);

      if (this.viewMode === 'copula') {
        // [0, 1]^2 grid
        ctx.strokeStyle = dark ? 'rgba(255, 255, 255, 0.06)' : 'rgba(0, 0, 0, 0.05)';
        for (let s = 0.2; s < 1.0; s += 0.2) {
          ctx.beginPath();
          ctx.moveTo(pad + s * boxW, pad);
          ctx.lineTo(pad + s * boxW, pad + boxH);
          ctx.stroke();
          ctx.beginPath();
          ctx.moveTo(pad, pad + boxH - s * boxH);
          ctx.lineTo(pad + boxW, pad + boxH - s * boxH);
          ctx.stroke();
        }

        // Scatter
        this.samples.forEach(pt => {
          const px = pad + pt.u1 * boxW;
          const py = pad + boxH - pt.u2 * boxH;
          ctx.fillStyle = (this.family === 'gumbel' && pt.u1 > 0.8 && pt.u2 > 0.8) ? '#f43f5e' : (this.family === 'clayton' && pt.u1 < 0.2 && pt.u2 < 0.2) ? '#10b981' : '#06b6d4';
          ctx.beginPath();
          ctx.arc(px, py, 2.4, 0, Math.PI * 2);
          ctx.fill();
        });

        // Labels
        ctx.fillStyle = dark ? '#94a3b8' : '#64748b';
        ctx.font = '10px monospace';
        ctx.fillText('u₁ [0.0 → 1.0]', pad + boxW / 2 - 30, pad + boxH + 16);
        ctx.fillText('u₂', pad - 18, pad + boxH / 2);
      } else {
        // Physical Hurricane Space: V in [20, 65] m/s, S in [0.5, 6.0] m
        const cx = pad + boxW / 2;
        const cy = pad + boxH / 2;

        ctx.strokeStyle = dark ? 'rgba(255, 255, 255, 0.15)' : 'rgba(0, 0, 0, 0.15)';
        ctx.beginPath();
        ctx.moveTo(pad, pad + boxH); ctx.lineTo(pad + boxW, pad + boxH);
        ctx.moveTo(pad, pad); ctx.lineTo(pad, pad + boxH);
        ctx.stroke();

        this.samples.forEach(pt => {
          const v = 32 - 6.5 * Math.log(-Math.log(Math.max(1e-5, pt.u1)));
          const s = Math.exp(0.8 + 0.45 * pt.x2);
          const px = pad + ((v - 20) / 45) * boxW;
          const py = pad + boxH - ((s - 0.5) / 5.5) * boxH;
          if (px >= pad && px <= pad + boxW && py >= pad && py <= pad + boxH) {
            ctx.fillStyle = (v > 45 && s > 3.5) ? '#f43f5e' : '#6366f1';
            ctx.beginPath();
            ctx.arc(px, py, 2.4, 0, Math.PI * 2);
            ctx.fill();
          }
        });

        // Threshold boundary
        const breachX = pad + ((45 - 20) / 45) * boxW;
        const breachY = pad + boxH - ((3.5 - 0.5) / 5.5) * boxH;
        ctx.strokeStyle = '#f43f5e';
        ctx.setLineDash([4, 3]);
        ctx.beginPath();
        ctx.moveTo(breachX, pad); ctx.lineTo(breachX, pad + boxH);
        ctx.moveTo(pad, breachY); ctx.lineTo(pad + boxW, breachY);
        ctx.stroke();
        ctx.setLineDash([]);

        ctx.fillStyle = '#f43f5e';
        ctx.font = 'bold 9px system-ui, sans-serif';
        ctx.fillText('Breach Zone: V≥45, S≥3.5', breachX + 4, breachY - 6);

        ctx.fillStyle = dark ? '#94a3b8' : '#64748b';
        ctx.font = '10px monospace';
        ctx.fillText('Wind Velocity V (m/s)', pad + boxW / 2 - 40, pad + boxH + 16);
        ctx.fillText('Surge (m)', pad - 20, pad + 15);
      }
    }
  }

  // =========================================================================
  // Lab 3: Tail Dependence Stress-Tester (mc-tail-stress)
  // =========================================================================
  class TailStressTesterVisualizer {
    constructor(container) {
      this.container = container;
      this.canvas = container.querySelector('canvas');
      if (!this.canvas) return;
      this.ctx = this.canvas.getContext('2d');

      this.sliderQ = container.querySelector('#slider-stress-q');
      this.sliderTau = container.querySelector('#slider-stress-tau');

      this.valQ = container.querySelector('#val-stress-q');
      this.valTau = container.querySelector('#val-stress-tau');

      this.dispIndep = container.querySelector('#disp-stress-indep');
      this.dispGauss = container.querySelector('#disp-stress-gauss');
      this.dispGumbel = container.querySelector('#disp-stress-gumbel');
      this.dispRatio = container.querySelector('#disp-stress-ratio');

      this.q = 0.95;
      this.tau = 0.50;

      this.setupCanvas();
      this.bindEvents();
      this.updateCalculations();
      this.draw();
    }

    setupCanvas() {
      const dpr = window.devicePixelRatio || 1;
      const rect = this.canvas.parentElement.getBoundingClientRect();
      const width = rect.width || 440;
      const height = rect.height || 260;

      this.canvas.width = width * dpr;
      this.canvas.height = height * dpr;
      this.ctx.scale(dpr, dpr);
      this.width = width;
      this.height = height;

      window.addEventListener('resize', () => {
        const r = this.canvas.parentElement.getBoundingClientRect();
        this.canvas.width = (r.width || 440) * dpr;
        this.canvas.height = (r.height || 260) * dpr;
        this.ctx.scale(dpr, dpr);
        this.width = r.width || 440;
        this.height = r.height || 260;
        this.draw();
      });
    }

    bindEvents() {
      const update = () => {
        this.q = parseFloat(this.sliderQ.value);
        this.tau = parseFloat(this.sliderTau.value);

        if (this.valQ) this.valQ.textContent = `${(this.q * 100).toFixed(1)}%`;
        if (this.valTau) this.valTau.textContent = this.tau.toFixed(2);

        this.updateCalculations();
        this.draw();
      };

      if (this.sliderQ) this.sliderQ.addEventListener('input', update);
      if (this.sliderTau) this.sliderTau.addEventListener('input', update);
    }

    updateCalculations() {
      const q = this.q;
      const tau = this.tau;

      // 1. Independent: P = (1 - q)^2
      const pIndep = (1 - q) * (1 - q);

      // 2. Gumbel: theta = 1 / (1 - tau)
      const theta = Math.max(1.001, 1 / (1 - tau));
      const gumbelC = Math.exp(-Math.pow(2, 1 / theta) * (-Math.log(q)));
      const pGumbel = 1 - 2 * q + gumbelC;

      // 3. Gaussian Copula: rho = sin(pi * tau / 2)
      const rho = Math.sin((Math.PI * tau) / 2);
      const zq = mcNormInv(q);
      // Fast numerical integration for bivariate Gaussian tail:
      let gaussC = 0;
      const nSteps = 80;
      const dt = zq / nSteps;
      for (let i = 0; i < nSteps; i++) {
        const z = -4.0 + i * ((zq + 4.0) / nSteps);
        const phiZ = (1 / Math.sqrt(2 * Math.PI)) * Math.exp(-0.5 * z * z);
        const condMean = rho * z;
        const condSd = Math.sqrt(1 - rho * rho);
        const condProb = mcNormCdf((zq - condMean) / condSd);
        gaussC += phiZ * condProb * ((zq + 4.0) / nSteps);
      }
      const pGauss = Math.max(pIndep, 1 - 2 * q + gaussC);

      const ratio = pGumbel / Math.max(1e-9, pGauss);

      this.calc = { pIndep, pGauss, pGumbel, ratio, theta };

      if (this.dispIndep) this.dispIndep.textContent = pIndep.toExponential(2);
      if (this.dispGauss) this.dispGauss.textContent = pGauss.toExponential(2);
      if (this.dispGumbel) this.dispGumbel.textContent = pGumbel.toExponential(2);
      if (this.dispRatio) this.dispRatio.textContent = `${ratio.toFixed(1)}×`;
    }

    draw() {
      const ctx = this.ctx;
      const w = this.width;
      const h = this.height;
      const dark = isDarkTheme();

      ctx.clearRect(0, 0, w, h);

      const c = this.calc;
      if (!c) return;

      const pad = 20;
      const plotW = w - pad * 2;
      const plotH = h - pad * 2 - 25;
      const top = pad;

      // Background
      ctx.fillStyle = dark ? 'rgba(15, 23, 42, 0.7)' : 'rgba(248, 250, 252, 0.9)';
      ctx.strokeStyle = dark ? 'rgba(255, 255, 255, 0.12)' : 'rgba(0, 0, 0, 0.12)';
      ctx.fillRect(pad, top, plotW, plotH);
      ctx.strokeRect(pad, top, plotW, plotH);

      // Bars comparison (Log-scaled height or relative height)
      const barW = plotW / 4.2;
      const maxP = Math.max(c.pGumbel, 1e-4);

      const bars = [
        { label: 'Independent', val: c.pIndep, col: '#94a3b8' },
        { label: 'Gaussian Copula', val: c.pGauss, col: '#6366f1' },
        { label: 'Gumbel (Tail Dep)', val: c.pGumbel, col: '#f43f5e' }
      ];

      bars.forEach((b, idx) => {
        const bx = pad + 25 + idx * (barW + 28);
        const barHeight = Math.max(4, (b.val / maxP) * (plotH - 45));
        const by = top + plotH - barHeight - 15;

        // Bar fill
        ctx.fillStyle = b.col;
        ctx.fillRect(bx, by, barW, barHeight);

        // Value text
        ctx.fillStyle = dark ? '#f8fafc' : '#0f172a';
        ctx.font = 'bold 10px monospace';
        ctx.textAlign = 'center';
        ctx.fillText(b.val.toExponential(2), bx + barW / 2, by - 5);

        // Label
        ctx.fillStyle = dark ? '#94a3b8' : '#64748b';
        ctx.font = '10px system-ui, sans-serif';
        ctx.fillText(b.label, bx + barW / 2, top + plotH + 14);
      });

      // Ratio Banner Callout
      ctx.fillStyle = '#f43f5e';
      ctx.font = 'bold 12px system-ui, sans-serif';
      ctx.textAlign = 'left';
      ctx.fillText(`Danger Multiplier: Gumbel is ${c.ratio.toFixed(1)}× more likely to fail than Gaussian!`, pad + 10, top + 20);
    }
  }


  // =========================================================================
  // 19. Visualizer: LLN & CLT Running Mean Trajectory Fan (MC 06 Hero)
  // =========================================================================
  class LLNCLTTrajectoryVisualizer {
    constructor(container) {
      this.container = container;
      this.canvas = container.querySelector('canvas');
      if (!this.canvas) return;
      this.ctx = this.canvas.getContext('2d');

      this.hudSamples = container.querySelector('#hud-samples');
      this.hudMean = container.querySelector('#hud-mean');
      this.hudError = container.querySelector('#hud-error');
      this.hudBreaches = container.querySelector('#hud-breaches');

      this.btnPlay = container.querySelector('#btn-play');
      this.btnReset = container.querySelector('#btn-reset');
      this.sliderN = container.querySelector('#slider-n');

      this.currentStep = 1;
      this.animating = true;
      this.animationId = null;

      this.targetMean = 10.0;
      this.targetSd = 3.0;
      this.numPaths = 30;
      this.maxN = 400;
      this.currentN = 10;
      this.isCauchy = false;

      // Seed paths
      this.generatePaths();

      this.setupCanvas();
      this.bindEvents();
      this.setStep(1);
      this.startLoop();
    }

    generatePaths() {
      this.paths = [];
      for (let m = 0; m < this.numPaths; m++) {
        const p = [];
        let sum = 0;
        for (let i = 1; i <= this.maxN; i++) {
          let x;
          if (this.isCauchy) {
            // Standard Cauchy variate
            const u = Math.random();
            x = Math.tan(Math.PI * (u - 0.5));
          } else {
            // Standard Normal scaled to mean 10, sd 3
            const u1 = Math.max(1e-7, Math.random());
            const u2 = Math.random();
            const z = Math.sqrt(-2.0 * Math.log(u1)) * Math.cos(2.0 * Math.PI * u2);
            x = this.targetMean + this.targetSd * z;
          }
          sum += x;
          p.push(sum / i);
        }
        this.paths.push(p);
      }
    }

    setupCanvas() {
      const dpr = window.devicePixelRatio || 1;
      const rect = this.canvas.parentElement.getBoundingClientRect();
      const width = rect.width || 440;
      const height = rect.height || 330;

      this.canvas.width = width * dpr;
      this.canvas.height = height * dpr;
      this.ctx.scale(dpr, dpr);
      this.width = width;
      this.height = height;

      window.addEventListener('resize', () => {
        const r = this.canvas.parentElement.getBoundingClientRect();
        this.canvas.width = (r.width || 440) * dpr;
        this.canvas.height = (r.height || 330) * dpr;
        this.ctx.scale(dpr, dpr);
        this.width = r.width || 440;
        this.height = r.height || 330;
        this.draw();
      });
    }

    bindEvents() {
      if (this.btnPlay) {
        this.btnPlay.addEventListener('click', () => {
          this.animating = !this.animating;
          this.btnPlay.textContent = this.animating ? '⏸ Pause' : '▶ Play';
        });
      }

      if (this.btnReset) {
        this.btnReset.addEventListener('click', () => {
          this.currentN = 10;
          this.generatePaths();
          if (this.sliderN) this.sliderN.value = '10';
          this.updateHud();
          this.draw();
        });
      }

      if (this.sliderN) {
        this.sliderN.addEventListener('input', () => {
          this.currentN = parseInt(this.sliderN.value, 10);
          this.updateHud();
          this.draw();
        });
      }
    }

    setStep(stepNum) {
      this.currentStep = stepNum;
      if (stepNum === 1) {
        this.isCauchy = false;
        this.generatePaths();
      } else if (stepNum === 2) {
        this.isCauchy = false;
      } else if (stepNum === 3) {
        this.isCauchy = false;
      } else if (stepNum === 4) {
        this.isCauchy = true;
        this.generatePaths();
      }
      this.updateHud();
      this.draw();
    }

    startLoop() {
      const loop = () => {
        if (this.animating) {
          this.currentN += 2;
          if (this.currentN > this.maxN) {
            this.currentN = 10;
          }
          if (this.sliderN) this.sliderN.value = String(this.currentN);
          this.updateHud();
          this.draw();
        }
        this.animationId = requestAnimationFrame(loop);
      };
      this.animationId = requestAnimationFrame(loop);
    }

    updateHud() {
      const n = Math.min(this.currentN, this.maxN);
      if (this.hudSamples) this.hudSamples.textContent = `N = ${n}`;

      if (this.isCauchy) {
        const meanEst = this.paths[0][n - 1];
        if (this.hudMean) this.hudMean.textContent = `Mean = ${meanEst.toFixed(2)}`;
        if (this.hudError) this.hudError.textContent = `Error = Undefined (∞ Var)`;
        if (this.hudBreaches) this.hudBreaches.textContent = `Breaches = Catastrophic`;
      } else {
        const meanEst = this.paths[0][n - 1];
        const se = this.targetSd / Math.sqrt(n);
        if (this.hudMean) this.hudMean.textContent = `Mean = ${meanEst.toFixed(3)}`;
        if (this.hudError) this.hudError.textContent = `±1.96 SE = ±${(1.96 * se).toFixed(3)}`;

        // Count breaches across paths
        let breaches = 0;
        const limit = 1.96 * se;
        const activePathsCount = (this.currentStep === 1) ? 1 : this.numPaths;
        for (let m = 0; m < activePathsCount; m++) {
          const dev = Math.abs(this.paths[m][n - 1] - this.targetMean);
          if (dev > limit) breaches++;
        }
        const pct = (breaches / activePathsCount) * 100;
        if (this.hudBreaches) this.hudBreaches.textContent = `Breaches: ${breaches}/${activePathsCount} (${pct.toFixed(0)}%)`;
      }
    }

    draw() {
      const ctx = this.ctx;
      const w = this.width;
      const h = this.height;
      const dark = isDarkTheme();

      ctx.clearRect(0, 0, w, h);

      // Background
      const bgGrad = ctx.createLinearGradient(0, 0, w, h);
      if (dark) {
        bgGrad.addColorStop(0, '#0f172a');
        bgGrad.addColorStop(1, '#090d16');
      } else {
        bgGrad.addColorStop(0, '#ffffff');
        bgGrad.addColorStop(1, '#f8fafc');
      }
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, w, h);

      const pad = { top: 30, right: 35, bottom: 40, left: 55 };
      const plotW = w - pad.left - pad.right;
      const plotH = h - pad.top - pad.bottom;

      // Coordinate scales
      const minN = 1;
      const maxN = this.maxN;
      let minY, maxY;

      if (this.isCauchy) {
        minY = -15;
        maxY = 35;
      } else {
        minY = 5.0;
        maxY = 15.0;
      }

      const scaleX = (n) => pad.left + ((n - minN) / (maxN - minN)) * plotW;
      const scaleY = (y) => pad.top + plotH - ((y - minY) / (maxY - minY)) * plotH;

      // Grid lines
      ctx.strokeStyle = dark ? 'rgba(255, 255, 255, 0.07)' : 'rgba(0, 0, 0, 0.06)';
      ctx.lineWidth = 1;
      for (let yVal = Math.ceil(minY); yVal <= maxY; yVal += (this.isCauchy ? 10 : 2)) {
        const sy = scaleY(yVal);
        ctx.beginPath();
        ctx.moveTo(pad.left, sy);
        ctx.lineTo(w - pad.right, sy);
        ctx.stroke();

        ctx.fillStyle = dark ? '#64748b' : '#94a3b8';
        ctx.font = '10px monospace';
        ctx.textAlign = 'right';
        ctx.fillText(yVal.toFixed(0), pad.left - 8, sy + 3);
      }

      for (let nVal = 100; nVal <= maxN; nVal += 100) {
        const sx = scaleX(nVal);
        ctx.beginPath();
        ctx.moveTo(sx, pad.top);
        ctx.lineTo(sx, pad.top + plotH);
        ctx.stroke();

        ctx.fillStyle = dark ? '#64748b' : '#94a3b8';
        ctx.font = '10px monospace';
        ctx.textAlign = 'center';
        ctx.fillText(`N=${nVal}`, sx, h - pad.bottom + 15);
      }

      // Theoretical true mean line
      const trueY = scaleY(this.isCauchy ? 0 : this.targetMean);
      ctx.strokeStyle = '#f59e0b';
      ctx.lineWidth = 2;
      ctx.setLineDash([5, 4]);
      ctx.beginPath();
      ctx.moveTo(pad.left, trueY);
      ctx.lineTo(w - pad.right, trueY);
      ctx.stroke();
      ctx.setLineDash([]);

      ctx.fillStyle = '#f59e0b';
      ctx.font = 'bold 11px system-ui, sans-serif';
      ctx.textAlign = 'left';
      ctx.fillText(this.isCauchy ? 'Center θ = 0 (Mean Undefined)' : `True θ = ${this.targetMean.toFixed(1)}`, pad.left + 8, trueY - 6);

      // Step 3 & Step 2/3: Asymptotic Confidence Envelopes
      if (!this.isCauchy && (this.currentStep === 2 || this.currentStep === 3)) {
        // Shaded 95% Funnel
        ctx.fillStyle = dark ? 'rgba(16, 185, 129, 0.08)' : 'rgba(16, 185, 129, 0.12)';
        ctx.beginPath();
        for (let i = 2; i <= maxN; i++) {
          const se = this.targetSd / Math.sqrt(i);
          const x = scaleX(i);
          const y = scaleY(this.targetMean + 1.96 * se);
          if (i === 2) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        for (let i = maxN; i >= 2; i--) {
          const se = this.targetSd / Math.sqrt(i);
          const x = scaleX(i);
          const y = scaleY(this.targetMean - 1.96 * se);
          ctx.lineTo(x, y);
        }
        ctx.closePath();
        ctx.fill();

        // 95% Boundary lines
        ctx.strokeStyle = '#10b981';
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        for (let i = 2; i <= maxN; i++) {
          const se = this.targetSd / Math.sqrt(i);
          const x = scaleX(i);
          const y = scaleY(this.targetMean + 1.96 * se);
          if (i === 2) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();

        ctx.beginPath();
        for (let i = 2; i <= maxN; i++) {
          const se = this.targetSd / Math.sqrt(i);
          const x = scaleX(i);
          const y = scaleY(this.targetMean - 1.96 * se);
          if (i === 2) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();

        if (this.currentStep === 3) {
          // 99% dashed boundary lines
          ctx.strokeStyle = 'rgba(6, 182, 212, 0.85)';
          ctx.lineWidth = 1.2;
          ctx.setLineDash([4, 3]);

          ctx.beginPath();
          for (let i = 2; i <= maxN; i++) {
            const se = this.targetSd / Math.sqrt(i);
            const x = scaleX(i);
            const y = scaleY(this.targetMean + 2.576 * se);
            if (i === 2) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
          }
          ctx.stroke();

          ctx.beginPath();
          for (let i = 2; i <= maxN; i++) {
            const se = this.targetSd / Math.sqrt(i);
            const x = scaleX(i);
            const y = scaleY(this.targetMean - 2.576 * se);
            if (i === 2) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
          }
          ctx.stroke();
          ctx.setLineDash([]);
        }
      }

      // Draw Paths
      const nVisible = Math.min(this.currentN, this.maxN);
      const pathsToDraw = (this.currentStep === 1) ? 1 : this.numPaths;

      for (let m = 0; m < pathsToDraw; m++) {
        const path = this.paths[m];
        ctx.beginPath();
        for (let i = 1; i <= nVisible; i++) {
          const x = scaleX(i);
          const y = scaleY(path[i - 1]);
          if (i === 1) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }

        if (this.isCauchy) {
          ctx.strokeStyle = (m === 0) ? '#f43f5e' : (dark ? 'rgba(244, 63, 94, 0.35)' : 'rgba(225, 29, 72, 0.3)');
          ctx.lineWidth = (m === 0) ? 2.2 : 1.0;
        } else if (this.currentStep === 1) {
          ctx.strokeStyle = '#6366f1';
          ctx.lineWidth = 2.4;
        } else {
          ctx.strokeStyle = (m === 0) ? '#6366f1' : (dark ? 'rgba(99, 102, 241, 0.32)' : 'rgba(79, 70, 229, 0.25)');
          ctx.lineWidth = (m === 0) ? 2.2 : 1.1;
        }
        ctx.stroke();

        // Tip marker for primary path
        if (m === 0 && nVisible > 0) {
          const tipX = scaleX(nVisible);
          const tipY = scaleY(path[nVisible - 1]);
          ctx.fillStyle = this.isCauchy ? '#f43f5e' : '#6366f1';
          ctx.beginPath();
          ctx.arc(tipX, tipY, 4, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      // Vertical current N cursor
      const cursorX = scaleX(nVisible);
      ctx.strokeStyle = dark ? 'rgba(255, 255, 255, 0.25)' : 'rgba(0, 0, 0, 0.25)';
      ctx.lineWidth = 1;
      ctx.setLineDash([2, 2]);
      ctx.beginPath();
      ctx.moveTo(cursorX, pad.top);
      ctx.lineTo(cursorX, pad.top + plotH);
      ctx.stroke();
      ctx.setLineDash([]);

      // Step badges / Callout text
      ctx.fillStyle = dark ? '#f8fafc' : '#0f172a';
      ctx.font = 'bold 12px system-ui, sans-serif';
      ctx.textAlign = 'right';

      if (this.currentStep === 1) {
        ctx.fillText('Single Stochastic Sample Path', w - pad.right - 5, pad.top + 18);
      } else if (this.currentStep === 2) {
        ctx.fillText('M = 30 Independent Parallel Streams', w - pad.right - 5, pad.top + 18);
      } else if (this.currentStep === 3) {
        ctx.fillStyle = '#10b981';
        ctx.fillText('CLT Corridor: ±1.96σ/√N (95%) & ±2.58σ/√N (99%)', w - pad.right - 5, pad.top + 18);
      } else if (this.currentStep === 4) {
        ctx.fillStyle = '#f43f5e';
        ctx.fillText('⚠️ Pathological Cauchy: Infinite Variance Disruption', w - pad.right - 5, pad.top + 18);
      }
    }
  }

  // =========================================================================
  // 20. Widget: LLN Trajectory & Error Funnel Sandbox (MC 06 Lab 1)
  // =========================================================================
  class LLNTrajectoryLabVisualizer {
    constructor(container) {
      this.container = container;
      this.canvas = container.querySelector('canvas');
      if (!this.canvas) return;
      this.ctx = this.canvas.getContext('2d');

      this.distSelect = container.querySelector('#dist-select');
      this.sliderPaths = container.querySelector('#slider-paths');
      this.sliderMaxN = container.querySelector('#slider-max-n');
      this.confSelect = container.querySelector('#conf-select');
      this.btnReseed = container.querySelector('#btn-reseed');

      this.valPaths = container.querySelector('#val-paths');
      this.valMaxN = container.querySelector('#val-maxn');
      this.statCoverage = container.querySelector('#stat-coverage');
      this.statMean = container.querySelector('#stat-mean');

      this.dist = 'normal';
      this.numPaths = 20;
      this.maxN = 500;
      this.confZ = 1.96; // 95%

      this.setupCanvas();
      this.generateData();
      this.bindEvents();
      this.draw();
    }

    setupCanvas() {
      const dpr = window.devicePixelRatio || 1;
      const rect = this.canvas.parentElement.getBoundingClientRect();
      const width = rect.width || 440;
      const height = rect.height || 280;

      this.canvas.width = width * dpr;
      this.canvas.height = height * dpr;
      this.ctx.scale(dpr, dpr);
      this.width = width;
      this.height = height;

      window.addEventListener('resize', () => {
        const r = this.canvas.parentElement.getBoundingClientRect();
        this.canvas.width = (r.width || 440) * dpr;
        this.canvas.height = (r.height || 280) * dpr;
        this.ctx.scale(dpr, dpr);
        this.width = r.width || 440;
        this.height = r.height || 280;
        this.draw();
      });
    }

    bindEvents() {
      const update = () => {
        if (this.distSelect) this.dist = this.distSelect.value;
        if (this.sliderPaths) {
          this.numPaths = parseInt(this.sliderPaths.value, 10);
          if (this.valPaths) this.valPaths.textContent = String(this.numPaths);
        }
        if (this.sliderMaxN) {
          this.maxN = parseInt(this.sliderMaxN.value, 10);
          if (this.valMaxN) this.valMaxN.textContent = String(this.maxN);
        }
        if (this.confSelect) this.confZ = parseFloat(this.confSelect.value);

        this.generateData();
        this.draw();
      };

      if (this.distSelect) this.distSelect.addEventListener('change', update);
      if (this.sliderPaths) this.sliderPaths.addEventListener('input', update);
      if (this.sliderMaxN) this.sliderMaxN.addEventListener('input', update);
      if (this.confSelect) this.confSelect.addEventListener('change', update);
      if (this.btnReseed) this.btnReseed.addEventListener('click', update);
    }

    sampleVariate() {
      if (this.dist === 'uniform') {
        return Math.random();
      } else if (this.dist === 'exponential') {
        return -Math.log(Math.max(1e-9, Math.random()));
      } else if (this.dist === 'lognormal') {
        const u1 = Math.max(1e-9, Math.random());
        const u2 = Math.random();
        const z = Math.sqrt(-2 * Math.log(u1)) * Math.cos(2 * Math.PI * u2);
        return Math.exp(0.5 * z); // mu=0, sigma=0.5
      } else if (this.dist === 'cauchy') {
        return Math.tan(Math.PI * (Math.random() - 0.5));
      } else {
        // Standard normal
        const u1 = Math.max(1e-9, Math.random());
        const u2 = Math.random();
        return Math.sqrt(-2 * Math.log(u1)) * Math.cos(2 * Math.PI * u2);
      }
    }

    getTheoreticalParams() {
      if (this.dist === 'uniform') {
        return { mu: 0.5, sigma: Math.sqrt(1 / 12), name: 'Uniform(0, 1)' };
      } else if (this.dist === 'exponential') {
        return { mu: 1.0, sigma: 1.0, name: 'Exponential(λ=1)' };
      } else if (this.dist === 'lognormal') {
        const s = 0.5;
        const mu = Math.exp((s * s) / 2);
        const sigma = Math.sqrt((Math.exp(s * s) - 1) * Math.exp(s * s));
        return { mu, sigma, name: 'Lognormal(0, 0.5)' };
      } else if (this.dist === 'cauchy') {
        return { mu: 0, sigma: NaN, name: 'Cauchy(0, 1)' };
      } else {
        return { mu: 0.0, sigma: 1.0, name: 'Normal(0, 1)' };
      }
    }

    generateData() {
      const params = this.getTheoreticalParams();
      this.paths = [];
      let insideCount = 0;

      for (let m = 0; m < this.numPaths; m++) {
        const p = [];
        let sum = 0;
        for (let i = 1; i <= this.maxN; i++) {
          sum += this.sampleVariate();
          p.push(sum / i);
        }
        this.paths.push(p);

        if (!isNaN(params.sigma)) {
          const finalEst = p[this.maxN - 1];
          const halfWidth = this.confZ * (params.sigma / Math.sqrt(this.maxN));
          if (Math.abs(finalEst - params.mu) <= halfWidth) {
            insideCount++;
          }
        }
      }

      const covPct = isNaN(params.sigma) ? 0 : (insideCount / this.numPaths) * 100;
      if (this.statCoverage) {
        this.statCoverage.textContent = isNaN(params.sigma) ? 'N/A (∞ Var)' : `${covPct.toFixed(1)}%`;
      }
      if (this.statMean) {
        const grandMean = this.paths.reduce((acc, path) => acc + path[this.maxN - 1], 0) / this.numPaths;
        this.statMean.textContent = grandMean.toFixed(3);
      }
    }

    draw() {
      const ctx = this.ctx;
      const w = this.width;
      const h = this.height;
      const dark = isDarkTheme();

      ctx.clearRect(0, 0, w, h);

      // Background
      ctx.fillStyle = dark ? '#0f172a' : '#ffffff';
      ctx.fillRect(0, 0, w, h);

      const pad = { top: 25, right: 25, bottom: 35, left: 50 };
      const plotW = w - pad.left - pad.right;
      const plotH = h - pad.top - pad.bottom;

      const params = this.getTheoreticalParams();
      let minY, maxY;

      if (isNaN(params.sigma)) {
        minY = -10;
        maxY = 10;
      } else {
        const spread = 3.2 * (params.sigma / Math.sqrt(2));
        minY = params.mu - spread;
        maxY = params.mu + spread;
      }

      const scaleX = (n) => pad.left + ((n - 1) / (this.maxN - 1)) * plotW;
      const scaleY = (y) => pad.top + plotH - ((Math.max(minY, Math.min(maxY, y)) - minY) / (maxY - minY)) * plotH;

      // Grid
      ctx.strokeStyle = dark ? 'rgba(255, 255, 255, 0.07)' : 'rgba(0, 0, 0, 0.06)';
      ctx.lineWidth = 1;
      const nGridLines = 5;
      for (let i = 0; i <= nGridLines; i++) {
        const yVal = minY + i * ((maxY - minY) / nGridLines);
        const sy = scaleY(yVal);
        ctx.beginPath();
        ctx.moveTo(pad.left, sy);
        ctx.lineTo(w - pad.right, sy);
        ctx.stroke();

        ctx.fillStyle = dark ? '#64748b' : '#94a3b8';
        ctx.font = '10px monospace';
        ctx.textAlign = 'right';
        ctx.fillText(yVal.toFixed(2), pad.left - 6, sy + 3);
      }

      // X-axis ticks
      for (let nVal = 100; nVal <= this.maxN; nVal += Math.max(100, Math.floor(this.maxN / 4))) {
        const sx = scaleX(nVal);
        ctx.beginPath();
        ctx.moveTo(sx, pad.top);
        ctx.lineTo(sx, pad.top + plotH);
        ctx.stroke();

        ctx.fillStyle = dark ? '#64748b' : '#94a3b8';
        ctx.font = '10px monospace';
        ctx.textAlign = 'center';
        ctx.fillText(`N=${nVal}`, sx, h - pad.bottom + 15);
      }

      // Theoretical confidence funnel
      if (!isNaN(params.sigma)) {
        ctx.fillStyle = dark ? 'rgba(16, 185, 129, 0.12)' : 'rgba(16, 185, 129, 0.15)';
        ctx.beginPath();
        for (let i = 2; i <= this.maxN; i++) {
          const se = params.sigma / Math.sqrt(i);
          const x = scaleX(i);
          const y = scaleY(params.mu + this.confZ * se);
          if (i === 2) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        for (let i = this.maxN; i >= 2; i--) {
          const se = params.sigma / Math.sqrt(i);
          const x = scaleX(i);
          const y = scaleY(params.mu - this.confZ * se);
          ctx.lineTo(x, y);
        }
        ctx.closePath();
        ctx.fill();

        // Bounds stroke
        ctx.strokeStyle = '#10b981';
        ctx.lineWidth = 1.4;
        ctx.beginPath();
        for (let i = 2; i <= this.maxN; i++) {
          const se = params.sigma / Math.sqrt(i);
          const x = scaleX(i);
          const y = scaleY(params.mu + this.confZ * se);
          if (i === 2) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();

        ctx.beginPath();
        for (let i = 2; i <= this.maxN; i++) {
          const se = params.sigma / Math.sqrt(i);
          const x = scaleX(i);
          const y = scaleY(params.mu - this.confZ * se);
          if (i === 2) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();

        // True mean
        const trueY = scaleY(params.mu);
        ctx.strokeStyle = '#f59e0b';
        ctx.lineWidth = 2;
        ctx.setLineDash([4, 3]);
        ctx.beginPath();
        ctx.moveTo(pad.left, trueY);
        ctx.lineTo(w - pad.right, trueY);
        ctx.stroke();
        ctx.setLineDash([]);
      }

      // Draw all trajectories
      for (let m = 0; m < this.numPaths; m++) {
        const path = this.paths[m];
        ctx.beginPath();
        for (let i = 1; i <= this.maxN; i++) {
          const x = scaleX(i);
          const y = scaleY(path[i - 1]);
          if (i === 1) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.strokeStyle = isNaN(params.sigma)
          ? (dark ? 'rgba(244, 63, 94, 0.4)' : 'rgba(225, 29, 72, 0.35)')
          : (dark ? 'rgba(99, 102, 241, 0.35)' : 'rgba(79, 70, 229, 0.3)');
        ctx.lineWidth = 1.2;
        ctx.stroke();
      }

      // Title badge
      ctx.fillStyle = dark ? '#f8fafc' : '#0f172a';
      ctx.font = 'bold 11px system-ui, sans-serif';
      ctx.textAlign = 'right';
      ctx.fillText(`${params.name} • M=${this.numPaths} Paths`, w - pad.right - 5, pad.top + 14);
    }
  }

  // =========================================================================
  // 21. Widget: Berry-Esseen Skewness & CLT Morph Studio (MC 06 Lab 2)
  // =========================================================================
  class BerryEsseenLabVisualizer {
    constructor(container) {
      this.container = container;
      this.canvas = container.querySelector('canvas');
      if (!this.canvas) return;
      this.ctx = this.canvas.getContext('2d');

      this.distSelect = container.querySelector('#be-dist');
      this.sliderN = container.querySelector('#be-n');
      this.valN = container.querySelector('#be-val-n');

      this.statSkew = container.querySelector('#be-skew');
      this.statKurt = container.querySelector('#be-kurt');
      this.statKs = container.querySelector('#be-ks');
      this.statBound = container.querySelector('#be-bound');

      this.dist = 'exponential';
      this.sampleSizeN = 5;
      this.numReplications = 2500;

      this.setupCanvas();
      this.bindEvents();
      this.computeAndDraw();
    }

    setupCanvas() {
      const dpr = window.devicePixelRatio || 1;
      const rect = this.canvas.parentElement.getBoundingClientRect();
      const width = rect.width || 440;
      const height = rect.height || 280;

      this.canvas.width = width * dpr;
      this.canvas.height = height * dpr;
      this.ctx.scale(dpr, dpr);
      this.width = width;
      this.height = height;

      window.addEventListener('resize', () => {
        const r = this.canvas.parentElement.getBoundingClientRect();
        this.canvas.width = (r.width || 440) * dpr;
        this.canvas.height = (r.height || 280) * dpr;
        this.ctx.scale(dpr, dpr);
        this.width = r.width || 440;
        this.height = r.height || 280;
        this.draw();
      });
    }

    bindEvents() {
      const update = () => {
        if (this.distSelect) this.dist = this.distSelect.value;
        if (this.sliderN) {
          this.sampleSizeN = parseInt(this.sliderN.value, 10);
          if (this.valN) this.valN.textContent = `N = ${this.sampleSizeN}`;
        }
        this.computeAndDraw();
      };

      if (this.distSelect) this.distSelect.addEventListener('change', update);
      if (this.sliderN) this.sliderN.addEventListener('input', update);
    }

    computeAndDraw() {
      const N = this.sampleSizeN;
      const M = this.numReplications;

      let mu, sigma, rho3, skewTheory;

      if (this.dist === 'normal') {
        mu = 0; sigma = 1; rho3 = Math.sqrt(8 / Math.PI); skewTheory = 0;
      } else if (this.dist === 'exponential') {
        mu = 1; sigma = 1; rho3 = 2.0; skewTheory = 2.0 / Math.sqrt(N);
      } else {
        // Lognormal (mu_log=0, sigma_log=0.8)
        const s = 0.8;
        mu = Math.exp((s * s) / 2);
        sigma = Math.sqrt((Math.exp(s * s) - 1) * Math.exp(s * s));
        rho3 = 4.5;
        skewTheory = ((Math.exp(s * s) + 2) * Math.sqrt(Math.exp(s * s) - 1)) / Math.sqrt(N);
      }

      // Generate M standardized sample means: Z = (mean - mu) / (sigma / sqrt(N))
      const zScores = new Float32Array(M);
      const se = sigma / Math.sqrt(N);

      for (let m = 0; m < M; m++) {
        let sum = 0;
        for (let i = 0; i < N; i++) {
          if (this.dist === 'normal') {
            const u1 = Math.max(1e-9, Math.random());
            const u2 = Math.random();
            sum += Math.sqrt(-2 * Math.log(u1)) * Math.cos(2 * Math.PI * u2);
          } else if (this.dist === 'exponential') {
            sum += -Math.log(Math.max(1e-9, Math.random()));
          } else {
            const u1 = Math.max(1e-9, Math.random());
            const u2 = Math.random();
            const z = Math.sqrt(-2 * Math.log(u1)) * Math.cos(2 * Math.PI * u2);
            sum += Math.exp(0.8 * z);
          }
        }
        const sampleMean = sum / N;
        zScores[m] = (sampleMean - mu) / se;
      }

      // Empirical Skewness & Kurtosis
      let sumZ = 0, sumZ2 = 0, sumZ3 = 0, sumZ4 = 0;
      for (let m = 0; m < M; m++) {
        const z = zScores[m];
        sumZ += z;
        sumZ2 += z * z;
        sumZ3 += z * z * z;
        sumZ4 += z * z * z * z;
      }
      const meanZ = sumZ / M;
      const varZ = (sumZ2 / M) - meanZ * meanZ;
      const sdZ = Math.sqrt(Math.max(1e-9, varZ));
      const empSkew = ((sumZ3 / M) - 3 * meanZ * varZ - meanZ * meanZ * meanZ) / (sdZ * sdZ * sdZ);
      const empKurt = (sumZ4 / M) / (sdZ * sdZ * sdZ * sdZ) - 3;

      // Berry-Esseen Bound C * rho / (sigma^3 * sqrt(N))
      const beBound = (0.4748 * rho3) / (Math.pow(sigma, 3) * Math.sqrt(N));

      // Histogram bins
      const nBins = 32;
      const minZ = -3.8;
      const maxZ = 3.8;
      const binWidth = (maxZ - minZ) / nBins;
      const counts = new Int32Array(nBins);

      for (let m = 0; m < M; m++) {
        const z = zScores[m];
        if (z >= minZ && z < maxZ) {
          const b = Math.floor((z - minZ) / binWidth);
          counts[b]++;
        }
      }

      // Empirical KS distance vs Normal CDF
      zScores.sort();
      let maxDiff = 0;
      for (let m = 0; m < M; m += 25) {
        const empiricalCdf = (m + 1) / M;
        const theoryCdf = mcNormCdf(zScores[m]);
        const diff = Math.abs(empiricalCdf - theoryCdf);
        if (diff > maxDiff) maxDiff = diff;
      }

      if (this.statSkew) this.statSkew.textContent = empSkew.toFixed(3);
      if (this.statKurt) this.statKurt.textContent = empKurt.toFixed(3);
      if (this.statKs) this.statKs.textContent = maxDiff.toFixed(3);
      if (this.statBound) this.statBound.textContent = `≤ ${beBound.toFixed(3)}`;

      this.data = { nBins, minZ, maxZ, binWidth, counts, M, N };
      this.draw();
    }

    draw() {
      if (!this.data) return;
      const ctx = this.ctx;
      const w = this.width;
      const h = this.height;
      const dark = isDarkTheme();

      ctx.clearRect(0, 0, w, h);
      ctx.fillStyle = dark ? '#0f172a' : '#ffffff';
      ctx.fillRect(0, 0, w, h);

      const pad = { top: 25, right: 25, bottom: 35, left: 45 };
      const plotW = w - pad.left - pad.right;
      const plotH = h - pad.top - pad.bottom;

      const { nBins, minZ, maxZ, binWidth, counts, M } = this.data;
      const maxDensity = 0.48;

      const scaleX = (z) => pad.left + ((z - minZ) / (maxZ - minZ)) * plotW;
      const scaleY = (dens) => pad.top + plotH - (dens / maxDensity) * plotH;

      // Draw grid
      ctx.strokeStyle = dark ? 'rgba(255, 255, 255, 0.07)' : 'rgba(0, 0, 0, 0.06)';
      ctx.lineWidth = 1;
      for (let d = 0.1; d <= 0.4; d += 0.1) {
        const sy = scaleY(d);
        ctx.beginPath();
        ctx.moveTo(pad.left, sy);
        ctx.lineTo(w - pad.right, sy);
        ctx.stroke();

        ctx.fillStyle = dark ? '#64748b' : '#94a3b8';
        ctx.font = '10px monospace';
        ctx.textAlign = 'right';
        ctx.fillText(d.toFixed(1), pad.left - 6, sy + 3);
      }

      for (let z = -3; z <= 3; z += 1) {
        const sx = scaleX(z);
        ctx.beginPath();
        ctx.moveTo(sx, pad.top);
        ctx.lineTo(sx, pad.top + plotH);
        ctx.stroke();

        ctx.fillStyle = dark ? '#64748b' : '#94a3b8';
        ctx.font = '10px monospace';
        ctx.textAlign = 'center';
        ctx.fillText(`${z}σ`, sx, h - pad.bottom + 15);
      }

      // Draw Histogram Bars
      const barColor = dark ? 'rgba(99, 102, 241, 0.4)' : 'rgba(79, 70, 229, 0.35)';
      const barStroke = dark ? '#818cf8' : '#6366f1';
      ctx.fillStyle = barColor;
      ctx.strokeStyle = barStroke;
      ctx.lineWidth = 1;

      for (let b = 0; b < nBins; b++) {
        const zLeft = minZ + b * binWidth;
        const zRight = zLeft + binWidth;
        const dens = (counts[b] / M) / binWidth;

        const x1 = scaleX(zLeft);
        const x2 = scaleX(zRight);
        const yTop = scaleY(dens);
        const yBase = scaleY(0);

        ctx.fillRect(x1 + 1, yTop, (x2 - x1) - 2, yBase - yTop);
        ctx.strokeRect(x1 + 1, yTop, (x2 - x1) - 2, yBase - yTop);
      }

      // Draw Standard Normal Curve N(0, 1)
      ctx.strokeStyle = '#06b6d4';
      ctx.lineWidth = 2.4;
      ctx.beginPath();
      const nSteps = 120;
      for (let i = 0; i <= nSteps; i++) {
        const z = minZ + i * ((maxZ - minZ) / nSteps);
        const phi = (1 / Math.sqrt(2 * Math.PI)) * Math.exp(-0.5 * z * z);
        const x = scaleX(z);
        const y = scaleY(phi);
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();

      // Legend
      ctx.fillStyle = '#06b6d4';
      ctx.font = 'bold 11px system-ui, sans-serif';
      ctx.textAlign = 'right';
      ctx.fillText('— Theoretical N(0, 1)', w - pad.right - 5, pad.top + 14);

      ctx.fillStyle = barStroke;
      ctx.fillText(`■ Standardized Z_N (N=${this.sampleSizeN})`, w - pad.right - 5, pad.top + 28);
    }
  }

  // =========================================================================
  // 22. Widget: Urban Transit Reliability Simulator (MC 06 Lab 3)
  // =========================================================================
  class TransitReliabilityLabVisualizer {
    constructor(container) {
      this.container = container;
      this.canvas = container.querySelector('canvas');
      if (!this.canvas) return;
      this.ctx = this.canvas.getContext('2d');

      this.sliderStorm = container.querySelector('#storm-severity');
      this.sliderN = container.querySelector('#transit-n');
      this.btnRun = container.querySelector('#btn-run-transit');

      this.valStorm = container.querySelector('#val-storm');
      this.valN = container.querySelector('#val-transit-n');

      this.statMeanDelay = container.querySelector('#stat-mean-delay');
      this.statCi = container.querySelector('#stat-ci');
      this.statP95 = container.querySelector('#stat-p95');

      this.storm = 5;
      this.N = 600;

      this.setupCanvas();
      this.bindEvents();
      this.runSimulation();
    }

    setupCanvas() {
      const dpr = window.devicePixelRatio || 1;
      const rect = this.canvas.parentElement.getBoundingClientRect();
      const width = rect.width || 440;
      const height = rect.height || 280;

      this.canvas.width = width * dpr;
      this.canvas.height = height * dpr;
      this.ctx.scale(dpr, dpr);
      this.width = width;
      this.height = height;

      window.addEventListener('resize', () => {
        const r = this.canvas.parentElement.getBoundingClientRect();
        this.canvas.width = (r.width || 440) * dpr;
        this.canvas.height = (r.height || 280) * dpr;
        this.ctx.scale(dpr, dpr);
        this.width = r.width || 440;
        this.height = r.height || 280;
        this.draw();
      });
    }

    bindEvents() {
      const update = () => {
        if (this.sliderStorm) {
          this.storm = parseInt(this.sliderStorm.value, 10);
          if (this.valStorm) this.valStorm.textContent = `Severity: Level ${this.storm}`;
        }
        if (this.sliderN) {
          this.N = parseInt(this.sliderN.value, 10);
          if (this.valN) this.valN.textContent = `N = ${this.N}`;
        }
        this.runSimulation();
      };

      if (this.sliderStorm) this.sliderStorm.addEventListener('input', update);
      if (this.sliderN) this.sliderN.addEventListener('input', update);
      if (this.btnRun) this.btnRun.addEventListener('click', update);
    }

    runSimulation() {
      const N = this.N;
      const S = this.storm; // Storm Severity 1 to 10
      const delays = new Float32Array(N);
      const runningMeans = new Float32Array(N);

      let runningSum = 0;
      for (let i = 0; i < N; i++) {
        // Model 12 corridors
        let systemDelay = 0;
        for (let c = 1; c <= 12; c++) {
          // Demand in 100s of passengers
          const u1 = Math.max(1e-9, Math.random());
          const u2 = Math.random();
          const zD = Math.sqrt(-2 * Math.log(u1)) * Math.cos(2 * Math.PI * u2);
          const demand = Math.exp(2.8 + 0.3 * zD);

          // Corridor weather delay Weibull(k=2.2, scale=1.5 * S)
          const uW = Math.max(1e-9, Math.random());
          const weatherShock = (1.2 * S) * Math.pow(-Math.log(uW), 1 / 2.2);

          // BPR-inspired corridor delay: T = 15 + 8 * (1 + 0.25 * (weatherShock / 4)^3)
          const corridorDelay = 12 + 6 * (1 + 0.18 * Math.pow(weatherShock / 5.0, 3.2));
          systemDelay += (demand * corridorDelay) / 100.0;
        }

        delays[i] = systemDelay;
        runningSum += systemDelay;
        runningMeans[i] = runningSum / (i + 1);
      }

      // Welford variance of delays
      let mSum = 0, vSum = 0;
      for (let i = 0; i < N; i++) {
        const d = delays[i];
        const prevM = mSum;
        mSum += (d - prevM) / (i + 1);
        vSum += (d - prevM) * (d - mSum);
      }
      const finalMean = mSum;
      const finalVar = (N > 1) ? vSum / (N - 1) : 0;
      const finalSd = Math.sqrt(finalVar);
      const finalSe = finalSd / Math.sqrt(N);
      const ciHalf = 1.96 * finalSe;

      delays.sort();
      const p95 = delays[Math.floor(0.95 * N)];

      if (this.statMeanDelay) this.statMeanDelay.textContent = `${finalMean.toFixed(1)} hrs`;
      if (this.statCi) this.statCi.textContent = `±${ciHalf.toFixed(2)} hrs`;
      if (this.statP95) this.statP95.textContent = `${p95.toFixed(1)} hrs`;

      this.results = { N, delays, runningMeans, finalMean, finalSd, finalSe, ciHalf, p95 };
      this.draw();
    }

    draw() {
      if (!this.results) return;
      const ctx = this.ctx;
      const w = this.width;
      const h = this.height;
      const dark = isDarkTheme();

      ctx.clearRect(0, 0, w, h);
      ctx.fillStyle = dark ? '#0f172a' : '#ffffff';
      ctx.fillRect(0, 0, w, h);

      // Left panel: Running Mean Convergence (w * 0.58)
      // Right panel: Delay Distribution (w * 0.42)
      const splitW = Math.floor(w * 0.58);
      const padL = { top: 25, right: 15, bottom: 35, left: 45 };
      const padR = { top: 25, right: 20, bottom: 35, left: splitW + 25 };

      const plotWL = splitW - padL.left - padL.right;
      const plotWR = w - padR.left - padR.right;
      const plotH = h - padL.top - padL.bottom;

      const { N, delays, runningMeans, finalMean, finalSd, finalSe } = this.results;

      // -------------------------------------------------------------
      // Left Panel: Running Mean & CLT Funnel
      // -------------------------------------------------------------
      const minY = finalMean - 2.8 * (finalSd / Math.sqrt(3));
      const maxY = finalMean + 2.8 * (finalSd / Math.sqrt(3));

      const scaleX_L = (n) => padL.left + ((n - 1) / (N - 1)) * plotWL;
      const scaleY_L = (y) => padL.top + plotH - ((y - minY) / (maxY - minY)) * plotH;

      // Grid Left
      ctx.strokeStyle = dark ? 'rgba(255, 255, 255, 0.07)' : 'rgba(0, 0, 0, 0.06)';
      ctx.lineWidth = 1;
      for (let i = 0; i <= 4; i++) {
        const yVal = minY + i * ((maxY - minY) / 4);
        const sy = scaleY_L(yVal);
        ctx.beginPath();
        ctx.moveTo(padL.left, sy);
        ctx.lineTo(splitW - padL.right, sy);
        ctx.stroke();

        ctx.fillStyle = dark ? '#64748b' : '#94a3b8';
        ctx.font = '9px monospace';
        ctx.textAlign = 'right';
        ctx.fillText(yVal.toFixed(0), padL.left - 5, sy + 3);
      }

      // Funnel fill
      ctx.fillStyle = dark ? 'rgba(16, 185, 129, 0.12)' : 'rgba(16, 185, 129, 0.15)';
      ctx.beginPath();
      for (let i = 2; i <= N; i++) {
        const se = finalSd / Math.sqrt(i);
        const x = scaleX_L(i);
        const y = scaleY_L(finalMean + 1.96 * se);
        if (i === 2) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      for (let i = N; i >= 2; i--) {
        const se = finalSd / Math.sqrt(i);
        const x = scaleX_L(i);
        const y = scaleY_L(finalMean - 1.96 * se);
        ctx.lineTo(x, y);
      }
      ctx.closePath();
      ctx.fill();

      // Running mean line
      ctx.strokeStyle = '#6366f1';
      ctx.lineWidth = 2.0;
      ctx.beginPath();
      for (let i = 1; i <= N; i++) {
        const x = scaleX_L(i);
        const y = scaleY_L(runningMeans[i - 1]);
        if (i === 1) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();

      // Final true mean line
      const trueY = scaleY_L(finalMean);
      ctx.strokeStyle = '#f59e0b';
      ctx.lineWidth = 1.5;
      ctx.setLineDash([3, 3]);
      ctx.beginPath();
      ctx.moveTo(padL.left, trueY);
      ctx.lineTo(splitW - padL.right, trueY);
      ctx.stroke();
      ctx.setLineDash([]);

      ctx.fillStyle = dark ? '#f8fafc' : '#0f172a';
      ctx.font = 'bold 10px system-ui, sans-serif';
      ctx.textAlign = 'left';
      ctx.fillText(`Convergence Funnel (±1.96 SE)`, padL.left + 5, padL.top + 12);

      // Divider Line
      ctx.strokeStyle = dark ? 'rgba(255, 255, 255, 0.12)' : 'rgba(0, 0, 0, 0.12)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(splitW, padL.top);
      ctx.lineTo(splitW, padL.top + plotH);
      ctx.stroke();

      // -------------------------------------------------------------
      // Right Panel: Distribution Histogram of Delays
      // -------------------------------------------------------------
      const minD = delays[0];
      const maxD = delays[N - 1];
      const nBins = 16;
      const bW = (maxD - minD) / nBins;
      const bCounts = new Int32Array(nBins);
      let maxCount = 0;

      for (let i = 0; i < N; i++) {
        const b = Math.min(nBins - 1, Math.floor((delays[i] - minD) / bW));
        bCounts[b]++;
        if (bCounts[b] > maxCount) maxCount = bCounts[b];
      }

      const scaleX_R = (d) => padR.left + ((d - minD) / (maxD - minD)) * plotWR;
      const scaleY_R = (cnt) => padR.top + plotH - (cnt / Math.max(1, maxCount)) * plotH;

      // Draw bars
      ctx.fillStyle = dark ? 'rgba(6, 182, 212, 0.35)' : 'rgba(6, 182, 212, 0.3)';
      ctx.strokeStyle = '#06b6d4';
      ctx.lineWidth = 1;

      for (let b = 0; b < nBins; b++) {
        const d1 = minD + b * bW;
        const d2 = d1 + bW;
        const x1 = scaleX_R(d1);
        const x2 = scaleX_R(d2);
        const yTop = scaleY_R(bCounts[b]);
        const yBase = scaleY_R(0);

        ctx.fillRect(x1 + 1, yTop, (x2 - x1) - 2, yBase - yTop);
        ctx.strokeRect(x1 + 1, yTop, (x2 - x1) - 2, yBase - yTop);
      }

      // 95th Percentile line
      const p95X = scaleX_R(this.results.p95);
      ctx.strokeStyle = '#f43f5e';
      ctx.lineWidth = 1.8;
      ctx.setLineDash([3, 2]);
      ctx.beginPath();
      ctx.moveTo(p95X, padR.top);
      ctx.lineTo(p95X, padR.top + plotH);
      ctx.stroke();
      ctx.setLineDash([]);

      ctx.fillStyle = '#f43f5e';
      ctx.font = 'bold 9px system-ui, sans-serif';
      ctx.textAlign = 'right';
      ctx.fillText(`P95: ${this.results.p95.toFixed(0)}h`, padR.left + plotWR, padR.top + 12);
    }
  }

  // =========================================================================
  // 18. Interactive Widgets Auto-Discovery
  // =========================================================================
  function initInteractiveWidgets() {
    document.querySelectorAll('.mc-interactive-widget').forEach((widget, idx) => {
      const type = widget.getAttribute('data-widget');
      const widgetId = widget.id || `mc-widget-${idx}`;
      widget.id = widgetId;

      if (type === 'mc-integral') {
        visualizers[widgetId] = new MonteCarloIntegralVisualizer(widget);
      } else if (type === 'mc-clt-lab') {
        visualizers[widgetId] = new CLTPlaygroundVisualizer(widget);
      } else if (type === 'mc-evac-sim') {
        visualizers[widgetId] = new EvacuationReliabilityVisualizer(widget);
      } else if (type === 'mc-lcg-spectral') {
        visualizers[widgetId] = new LCGSpectralVisualizer(widget);
      } else if (type === 'mc-cycle-lab') {
        visualizers[widgetId] = new CycleDetectionVisualizer(widget);
      } else if (type === 'mc-stream-lab') {
        visualizers[widgetId] = new ParallelSeedCollisionVisualizer(widget);
      } else if (type === 'mc-ray-studio') {
        visualizers[widgetId] = new CDFRayStudioVisualizer(widget);
      } else if (type === 'mc-normal-quantile') {
        visualizers[widgetId] = new NormalQuantileVisualizer(widget);
      } else if (type === 'mc-discrete-inversion') {
        visualizers[widgetId] = new DiscreteInversionVisualizer(widget);
      } else if (type === 'mc-envelope-lab') {
        visualizers[widgetId] = new BoundingEnvelopeVisualizer(widget);
      } else if (type === 'mc-tail-supremum') {
        visualizers[widgetId] = new TailSupremumVisualizer(widget);
      } else if (type === 'mc-squeeze-lab') {
        visualizers[widgetId] = new MarsagliaSqueezeVisualizer(widget);
      } else if (type === 'mc-cholesky-lab') {
        visualizers[widgetId] = new CholeskyDecomposerVisualizer(widget);
      } else if (type === 'mc-copula-lab') {
        visualizers[widgetId] = new CopulaMorphStudioVisualizer(widget);
      } else if (type === 'mc-tail-stress') {
        visualizers[widgetId] = new TailStressTesterVisualizer(widget);
      } else if (type === 'mc-lln-trajectory-lab') {
        visualizers[widgetId] = new LLNTrajectoryLabVisualizer(widget);
      } else if (type === 'mc-berry-esseen-lab') {
        visualizers[widgetId] = new BerryEsseenLabVisualizer(widget);
      } else if (type === 'mc-transit-reliability-lab') {
        visualizers[widgetId] = new TransitReliabilityLabVisualizer(widget);
      }
    });
  }

  // Expose API globally
  window.MCSimulation = {
    DartboardPiVisualizer,
    MonteCarloIntegralVisualizer,
    CLTPlaygroundVisualizer,
    EvacuationReliabilityVisualizer,
    MarsagliaLatticeVisualizer,
    LCGSpectralVisualizer,
    CycleDetectionVisualizer,
    ParallelSeedCollisionVisualizer,
    CDFRayTracerVisualizer,
    CDFRayStudioVisualizer,
    NormalQuantileVisualizer,
    DiscreteInversionVisualizer,
    RejectionSamplerVisualizer,
    BoundingEnvelopeVisualizer,
    TailSupremumVisualizer,
    MarsagliaSqueezeVisualizer,
    CopulaMorphVisualizer,
    CholeskyDecomposerVisualizer,
    CopulaMorphStudioVisualizer,
    TailStressTesterVisualizer,
    LLNCLTTrajectoryVisualizer,
    LLNTrajectoryLabVisualizer,
    BerryEsseenLabVisualizer,
    TransitReliabilityLabVisualizer,
    visualizers,
    syncTheme
  };
})();



