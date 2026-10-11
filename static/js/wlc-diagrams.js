/**
 * ==========================================================================
 * Whole Life Carbon (WLC) Interactive Flowcharts & Mermaid Engine
 * Handles interactive inspection, stage boundary filtering, 60-year timeline,
 * scenario toggling, and theme-aware Mermaid rendering.
 * ==========================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  initMermaidAutoRenderer();
  initBoundaryMatrix();
  initUpfrontStreams();
  initTimelineAccumulator();
  initCircularScenarios();
  initPipelineSteps();
  initGenericNodeInspectors();
});

/**
 * --------------------------------------------------------------------------
 * 1. Theme-Aware Mermaid Auto-Renderer
 * --------------------------------------------------------------------------
 */
function initMermaidAutoRenderer() {
  const mermaidBlocks = document.querySelectorAll('code.language-mermaid, .mermaid');
  if (mermaidBlocks.length === 0) return;

  // Determine current theme
  const isDarkMode = () => {
    const darkCss = document.getElementById('dark-theme');
    if (darkCss && !darkCss.disabled) return true;
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  };

  // Convert <pre><code class="language-mermaid"> to <div class="mermaid">
  mermaidBlocks.forEach((block, idx) => {
    if (block.tagName.toLowerCase() === 'code' && block.parentElement.tagName.toLowerCase() === 'pre') {
      const code = block.textContent;
      const pre = block.parentElement;
      const div = document.createElement('div');
      div.className = 'mermaid';
      div.id = `mermaid-svg-${idx}`;
      div.textContent = code;
      pre.parentNode.replaceChild(div, pre);
    }
  });

  const loadAndRunMermaid = () => {
    const dark = isDarkMode();
    if (window.mermaid) {
      window.mermaid.initialize({
        startOnLoad: false,
        theme: dark ? 'dark' : 'base',
        themeVariables: {
          darkMode: dark,
          background: dark ? '#2c3134' : '#fdfbf7',
          primaryColor: dark ? '#3a4143' : '#ffffff',
          primaryTextColor: dark ? '#f3f0e8' : '#2c3134',
          primaryBorderColor: dark ? '#ef7b66' : '#de634d',
          lineColor: dark ? '#adb1a3' : '#696e70',
          secondaryColor: dark ? '#383e40' : '#f5f2eb',
          tertiaryColor: dark ? '#254341' : '#e6e2d8',
          fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
        },
        flowchart: {
          curve: 'basis',
          padding: 16
        }
      });
      window.mermaid.run({
        querySelector: '.mermaid'
      });
    } else {
      const script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/npm/mermaid@11/dist/mermaid.min.js';
      script.onload = () => {
        loadAndRunMermaid();
      };
      document.head.appendChild(script);
    }
  };

  loadAndRunMermaid();

  // Watch for Gokarna theme switch toggle clicks
  document.querySelectorAll('.dark-theme-toggle').forEach(btn => {
    btn.addEventListener('click', () => {
      setTimeout(() => {
        loadAndRunMermaid();
      }, 150);
    });
  });
}

/**
 * --------------------------------------------------------------------------
 * 2. Generic Node Inspector Logic
 * --------------------------------------------------------------------------
 */
function initGenericNodeInspectors() {
  document.querySelectorAll('.wlc-diagram-box').forEach(box => {
    const nodes = box.querySelectorAll('.wlc-node[data-title]');
    const inspector = box.querySelector('.wlc-inspector');
    if (!inspector || nodes.length === 0) return;

    nodes.forEach(node => {
      node.addEventListener('click', () => {
        nodes.forEach(n => n.classList.remove('active'));
        node.classList.add('active');

        const title = node.getAttribute('data-title');
        const code = node.getAttribute('data-code') || '';
        const desc = node.getAttribute('data-desc') || '';
        const formula = node.getAttribute('data-formula') || '';
        const standard = node.getAttribute('data-standard') || '';
        const benchmark = node.getAttribute('data-benchmark') || '';

        const titleEl = inspector.querySelector('.wlc-ins-title');
        const descEl = inspector.querySelector('.wlc-ins-desc');
        const formulaEl = inspector.querySelector('.wlc-ins-formula');
        const standardEl = inspector.querySelector('.wlc-ins-standard');
        const benchEl = inspector.querySelector('.wlc-ins-bench');

        if (titleEl) titleEl.innerHTML = `${code ? `<strong>[${code}]</strong> ` : ''}${title}`;
        if (descEl) descEl.textContent = desc;
        if (formulaEl) {
          formulaEl.style.display = formula ? 'inline' : 'none';
          const span = formulaEl.querySelector('span');
          if (span) span.textContent = formula;
        }
        if (standardEl) {
          standardEl.style.display = standard ? 'inline' : 'none';
          const span = standardEl.querySelector('span');
          if (span) span.textContent = standard;
        }
        if (benchEl) {
          benchEl.style.display = benchmark ? 'inline' : 'none';
          const span = benchEl.querySelector('span');
          if (span) span.textContent = benchmark;
        }

        // Retrigger subtle animation
        inspector.style.animation = 'none';
        inspector.offsetHeight; /* trigger reflow */
        inspector.style.animation = 'wlcFadeIn 0.25s ease';
      });
    });
  });
}

/**
 * --------------------------------------------------------------------------
 * 3. Lesson 01: Boundary Matrix & Modular Stage Filtering
 * --------------------------------------------------------------------------
 */
function initBoundaryMatrix() {
  const matrixBox = document.getElementById('wlc-boundary-matrix-box');
  if (!matrixBox) return;

  const filterBtns = matrixBox.querySelectorAll('.wlc-filter-btn[data-boundary]');
  const lanes = matrixBox.querySelectorAll('.wlc-lane');
  const milestones = matrixBox.querySelectorAll('.wlc-milestone-marker');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const boundary = btn.getAttribute('data-boundary');

      lanes.forEach(lane => {
        const laneType = lane.getAttribute('data-lane-type');
        let isIncluded = false;

        if (boundary === 'all') {
          isIncluded = true;
        } else if (boundary === 'cradle-to-gate') {
          isIncluded = (laneType === 'a1-a3');
        } else if (boundary === 'upfront') {
          isIncluded = (laneType === 'a1-a3' || laneType === 'a4-a5');
        } else if (boundary === 'cradle-to-grave') {
          isIncluded = (laneType === 'a1-a3' || laneType === 'a4-a5' || laneType === 'b' || laneType === 'c');
        } else if (boundary === 'wlc-module-d') {
          isIncluded = true; // All plus Module D highlighted
        }

        if (isIncluded) {
          lane.classList.remove('dimmed');
          lane.classList.add('highlighted');
        } else {
          lane.classList.add('dimmed');
          lane.classList.remove('highlighted');
        }
      });

      milestones.forEach(m => {
        const after = m.getAttribute('data-milestone-after');
        let mIncluded = true;
        if (boundary === 'cradle-to-gate') {
          mIncluded = (after === 'a1-a3');
        } else if (boundary === 'upfront') {
          mIncluded = (after === 'a1-a3' || after === 'a4-a5');
        } else if (boundary === 'cradle-to-grave') {
          mIncluded = (after !== 'c');
        }
        if (mIncluded) {
          m.classList.remove('dimmed');
        } else {
          m.classList.add('dimmed');
        }
      });
    });
  });
}

/**
 * --------------------------------------------------------------------------
 * 4. Lesson 02: Upfront Industrial Streams
 * --------------------------------------------------------------------------
 */
function initUpfrontStreams() {
  const upfrontBox = document.getElementById('wlc-upfront-box');
  if (!upfrontBox) return;

  const streamBtns = upfrontBox.querySelectorAll('.wlc-filter-btn[data-stream]');
  const concreteCol = upfrontBox.querySelector('.stream-concrete');
  const steelCol = upfrontBox.querySelector('.stream-steel');
  const siteGate = upfrontBox.querySelector('.wlc-convergence-gate');

  streamBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      streamBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const stream = btn.getAttribute('data-stream');

      if (stream === 'all') {
        if (concreteCol) concreteCol.style.opacity = '1';
        if (steelCol) steelCol.style.opacity = '1';
        if (siteGate) siteGate.style.opacity = '1';
      } else if (stream === 'concrete') {
        if (concreteCol) concreteCol.style.opacity = '1';
        if (steelCol) steelCol.style.opacity = '0.25';
        if (siteGate) siteGate.style.opacity = '0.9';
      } else if (stream === 'steel') {
        if (concreteCol) concreteCol.style.opacity = '0.25';
        if (steelCol) steelCol.style.opacity = '1';
        if (siteGate) siteGate.style.opacity = '0.9';
      } else if (stream === 'site') {
        if (concreteCol) concreteCol.style.opacity = '0.35';
        if (steelCol) steelCol.style.opacity = '0.35';
        if (siteGate) {
          siteGate.style.opacity = '1';
          siteGate.style.borderColor = 'var(--wlc-stage-a)';
        }
      }
    });
  });
}

/**
 * --------------------------------------------------------------------------
 * 5. Lesson 03: 60-Year Whole Life Carbon Stepped Timeline Accumulator
 * --------------------------------------------------------------------------
 */
function initTimelineAccumulator() {
  const timeBox = document.getElementById('wlc-timeline-box');
  if (!timeBox) return;

  const timeBtns = timeBox.querySelectorAll('.wlc-time-btn');
  const meterFill = timeBox.querySelector('.wlc-meter-fill');
  const valDisplay = timeBox.querySelector('.wlc-progress-val');
  const titleEl = timeBox.querySelector('.wlc-timeline-title');
  const noteEl = timeBox.querySelector('.wlc-timeline-desc');
  const layerEl = timeBox.querySelector('.wlc-timeline-layer');

  const timelineData = {
    'y0': {
      val: 400,
      pct: 49,
      title: 'Year 0: Practical Completion (Upfront Baseline)',
      desc: 'Day 1 spent upfront carbon before building occupancy begins. Embodied in primary frame, foundations, sub-structure, and initial shell.',
      layer: 'Primary Structure (60-yr design life) & Core Envelope'
    },
    'y10': {
      val: 435,
      pct: 53,
      title: 'Year 10: Fit-out Churn #1 (+35 kgCO2e/m²)',
      desc: 'Tenant turnover, floor finishes, partition wall reconfigurations, ceiling tiles, and tea points replaced.',
      layer: 'Space Plan / Interior Fit-out (10-yr cycle)'
    },
    'y20': {
      val: 535,
      pct: 65,
      title: 'Year 20: MEP Replacement #1 + Fit-out #2 (+100 kgCO2e/m²)',
      desc: 'Chilliers, AHUs, heat pumps, fan coil units, and ductwork renewal combined with second commercial fit-out churn.',
      layer: 'Mechanical, Electrical & Public Health Services (20-yr cycle)'
    },
    'y30': {
      val: 650,
      pct: 80,
      title: 'Year 30: Facade Replacement #1 + Fit-out #3 (+115 kgCO2e/m²)',
      desc: 'Mid-life major retrofit: replacement of double-glazed curtain wall cassettes, sealants, gaskets, and shading blinds.',
      layer: 'Building Envelope / Glazed Facade (30-yr cycle)'
    },
    'y40': {
      val: 750,
      pct: 92,
      title: 'Year 40: MEP Replacement #2 + Fit-out #4 (+100 kgCO2e/m²)',
      desc: 'Second end-of-life cycle for building services; ductwork dampers, pumps, and automation systems replaced.',
      layer: 'Building Services / Central Plant'
    },
    'y50': {
      val: 785,
      pct: 96,
      title: 'Year 50: Fit-out Churn #5 (+35 kgCO2e/m²)',
      desc: 'Late-life tenancy refurbishment cycle before the final decade of the 60-year reference study period.',
      layer: 'Interior Fit-out & Fixtures'
    },
    'y60': {
      val: 815,
      pct: 100,
      title: 'Year 60: End-of-Life Demolition & Decommissioning (+30 kgCO2e/m²)',
      desc: 'Module C1–C4 demolition, site processing, haulage of rubble, and disposal. Cumulative 60-year embodied carbon reaches 815 kgCO2e/m².',
      layer: 'Whole Building Deconstruction'
    }
  };

  timeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      timeBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const yrKey = btn.getAttribute('data-year');
      const item = timelineData[yrKey];
      if (!item) return;

      if (meterFill) meterFill.style.width = `${item.pct}%`;
      if (valDisplay) valDisplay.textContent = `${item.val} kgCO2e/m²`;
      if (titleEl) titleEl.textContent = item.title;
      if (noteEl) noteEl.textContent = item.desc;
      if (layerEl) layerEl.textContent = item.layer;
    });
  });
}

/**
 * --------------------------------------------------------------------------
 * 6. Lesson 04: End-of-Waste & Circular Scenario Toggles
 * --------------------------------------------------------------------------
 */
function initCircularScenarios() {
  const circBox = document.getElementById('wlc-circular-box');
  if (!circBox) return;

  const scenBtns = circBox.querySelectorAll('.wlc-filter-btn[data-circ-scen]');
  const creditDisplay = circBox.querySelector('.wlc-circ-credit-val');
  const netScrapDisplay = circBox.querySelector('.wlc-circ-net-val');
  const explDisplay = circBox.querySelector('.wlc-circ-expl');

  const scenarios = {
    'bof': {
      netScrap: '+105.75 tonnes net scrap credit',
      credit: '-195.6 tCO2e credit to Module D',
      desc: 'Standard BOF steel with only 25% virgin scrap input. High net scrap surplus is exported to secondary market, displacing carbon-intensive primary blast furnace smelting.'
    },
    'eaf': {
      netScrap: '-1.35 tonnes (essentially zero)',
      credit: '0.0 tCO2e credit to Module D',
      desc: 'High recycled content EAF steel (95% recycled input). Since scrap was already consumed in Module A1–A3, EN 15804 strictly forbids double-counting avoided burden in Module D!'
    },
    'concrete': {
      netScrap: '+800 tonnes recycled aggregate',
      credit: '-4.8 tCO2e low-grade downcycling credit',
      desc: 'Concrete crushed to sub-base aggregate (downcycling). Avoided burden displaces virgin quarrying of crushed limestone, conferring modest transport and quarrying offset.'
    }
  };

  scenBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      scenBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const scenKey = btn.getAttribute('data-circ-scen');
      const data = scenarios[scenKey];
      if (!data) return;

      if (netScrapDisplay) netScrapDisplay.textContent = data.netScrap;
      if (creditDisplay) creditDisplay.textContent = data.credit;
      if (explDisplay) explDisplay.textContent = data.desc;
    });
  });
}

/**
 * --------------------------------------------------------------------------
 * 7. Lesson 05: 4-Stage LCA Calculation Pipeline Steps
 * --------------------------------------------------------------------------
 */
function initPipelineSteps() {
  const pipeBox = document.getElementById('wlc-pipeline-box');
  if (!pipeBox) return;

  const steps = pipeBox.querySelectorAll('.wlc-pipe-step');
  const inspector = pipeBox.querySelector('.wlc-inspector');
  if (!inspector) return;

  steps.forEach(step => {
    step.addEventListener('click', () => {
      steps.forEach(s => s.classList.remove('active'));
      step.classList.add('active');

      const title = step.getAttribute('data-title');
      const stepNum = step.getAttribute('data-step-num');
      const desc = step.getAttribute('data-desc');
      const formula = step.getAttribute('data-formula') || '';
      const standards = step.getAttribute('data-standard') || '';
      const benchmark = step.getAttribute('data-benchmark') || '';

      const titleEl = inspector.querySelector('.wlc-ins-title');
      const descEl = inspector.querySelector('.wlc-ins-desc');
      const formulaEl = inspector.querySelector('.wlc-ins-formula');
      const standardEl = inspector.querySelector('.wlc-ins-standard');
      const benchEl = inspector.querySelector('.wlc-ins-bench');

      if (titleEl) titleEl.innerHTML = `<strong>[Stage ${stepNum}]</strong> ${title}`;
      if (descEl) descEl.textContent = desc;
      if (formulaEl) {
        formulaEl.style.display = formula ? 'inline' : 'none';
        const span = formulaEl.querySelector('span');
        if (span) span.textContent = formula;
      }
      if (standardEl) {
        standardEl.style.display = standards ? 'inline' : 'none';
        const span = standardEl.querySelector('span');
        if (span) span.textContent = standards;
      }
      if (benchEl) {
        benchEl.style.display = benchmark ? 'inline' : 'none';
        const span = benchEl.querySelector('span');
        if (span) span.textContent = benchmark;
      }

      inspector.style.animation = 'none';
      inspector.offsetHeight;
      inspector.style.animation = 'wlcFadeIn 0.25s ease';
    });
  });
}
