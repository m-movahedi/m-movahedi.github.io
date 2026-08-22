(() => {
  const root = document.getElementById("cif-post");
  if (!root || root.dataset.initialized === "true") return;
  root.dataset.initialized = "true";

  const processSteps = [
    {
      kicker: "Start with the system",
      title: "1. Identify factors and outcomes",
      body: "Define external conditions that may shape planning need and performance measures that describe observable outcomes. Indicator selection remains theory-based, transparent, and tied to defensible data.",
      output: "Case-study input: 98 candidate external factors and 56 performance measures."
    },
    {
      kicker: "Make unlike data comparable",
      title: "2. Collect, clean, and align",
      body: "Document sources, handle missing coverage, align reporting frequency, and reverse-code indicators when needed so that higher values consistently mean greater planning need.",
      output: "Usable data: 78 external factors and 51 performance measures, aligned to quarterly steps for factor analysis and aggregation."
    },
    {
      kicker: "Keep the drivers that matter",
      title: "3. Screen critical factors",
      body: "Use PCMCI for higher-frequency series, Granger causality at annual frequency, and lagged cross-correlation as a supporting screen. Together, they reduce a crowded indicator set to mode-relevant candidates.",
      output: "Focused input: the top 10 external factors for each transportation mode."
    },
    {
      kicker: "Reveal shared movement",
      title: "4. Extract latent dimensions",
      body: "Dynamic factor analysis finds common time-varying trends among the selected factors. Loadings explain how strongly each observed factor contributes to each latent planning dimension.",
      output: "Case-study model: four latent dimensions adopted consistently across all six modes."
    },
    {
      kicker: "Move through the hierarchy",
      title: "5. Weight and aggregate",
      body: "Factor loadings and explained variance supply data-driven weights. Results roll from factors to dimensions, modes, systems, and the statewide index, while retaining a trace back to lower-level causes.",
      output: "Planning signal: one updateable CI paired with a parallel performance index (PI)."
    },
    {
      kicker: "Test whether the story survives",
      title: "6. Diagnose and stress-test",
      body: "Trace changes down the hierarchy, compare the direction and pace of CI and PI, and test alternative preprocessing choices. The index is a monitoring and diagnostic instrument—not a forecast.",
      output: "Robustness check: 32 preprocessing combinations preserved the same turning points and disruption pattern."
    }
  ];

  const stepButtons = [...root.querySelectorAll("[data-cif-step]")];
  const processKicker = root.querySelector("[data-cif-process-kicker]");
  const processTitle = root.querySelector("[data-cif-process-title]");
  const processBody = root.querySelector("[data-cif-process-body]");
  const processOutput = root.querySelector("[data-cif-process-output]");
  const stageNodes = [...root.querySelectorAll("[data-cif-stage]")];

  function setStep(index) {
    const step = processSteps[index];
    if (!step) return;
    stepButtons.forEach((button, i) => button.setAttribute("aria-pressed", String(i === index)));
    stageNodes.forEach((node, i) => node.classList.toggle("is-active", i === index));
    processKicker.textContent = step.kicker;
    processTitle.textContent = step.title;
    processBody.textContent = step.body;
    processOutput.textContent = step.output;
  }

  stepButtons.forEach((button) => button.addEventListener("click", () => setStep(Number(button.dataset.cifStep))));

  const modes = {
    auto: {
      name: "Auto",
      system: "Ground",
      intro: "Auto demand is shaped most strongly by macroeconomic activity, labor markets, and vehicle use.",
      dimensions: [
        ["Economic conditions", 96],
        ["State employment", 76],
        ["National employment", 56],
        ["Vehicle miles traveled", 84]
      ],
      factors: ["U.S. GDP", "Florida GDP", "CPI", "Economic condition index", "Personal income", "State employment", "State unemployment", "National employment", "Vehicle miles traveled"]
    },
    transit: {
      name: "Transit",
      system: "Ground",
      intro: "Transit is especially sensitive to socioeconomic conditions, including poverty and employment.",
      dimensions: [["Socioeconomic conditions", 94], ["Employment", 82], ["Population dynamics", 65], ["Operating context", 52]],
      factors: ["Poverty", "Employment", "Unemployment", "Population", "Income", "Economic activity"]
    },
    active: {
      name: "Pedestrian & bike",
      system: "Ground",
      intro: "Walking and bicycling respond more strongly to demographic context, housing patterns, policy, and climate variability.",
      dimensions: [["Demographics", 90], ["Housing patterns", 73], ["Policy context", 61], ["Climate variability", 86]],
      factors: ["Age structure", "Housing", "Population", "Policy conditions", "Temperature", "Precipitation"]
    },
    rail: {
      name: "Rail",
      system: "Ground",
      intro: "Rail reflects manufacturing output, employment, tourism, and weather-related external shocks.",
      dimensions: [["Industrial activity", 92], ["Labor market", 75], ["Tourism", 58], ["Weather stressors", 66]],
      factors: ["Manufacturing output", "Employment", "Tourism activity", "Extreme weather", "Economic activity"]
    },
    aviation: {
      name: "Aviation",
      system: "Air",
      intro: "Aviation is dominated by tourism activity and weather-related conditions, alongside broader economic movement.",
      dimensions: [["Tourism", 96], ["Weather", 90], ["Economic activity", 72], ["Population mobility", 61]],
      factors: ["Tourism activity", "Extreme weather", "Temperature", "Economic output", "Population", "Income"]
    },
    seaport: {
      name: "Seaport",
      system: "Water",
      intro: "Seaport performance is closely tied to income, population growth, industrial activity, and external disruptions.",
      dimensions: [["Industrial economy", 95], ["Income", 72], ["Population growth", 67], ["External shocks", 81]],
      factors: ["Industrial output", "Income", "Population growth", "Employment", "Tourism", "Extreme weather"]
    }
  };

  const modeButtons = [...root.querySelectorAll("[data-cif-mode]")];
  const systems = [...root.querySelectorAll("[data-cif-system]")];
  const detailName = root.querySelector("[data-cif-detail-name]");
  const detailPath = root.querySelector("[data-cif-detail-path]");
  const detailIntro = root.querySelector("[data-cif-detail-intro]");
  const dimensionList = root.querySelector("[data-cif-dimensions]");
  const factorList = root.querySelector("[data-cif-factors]");

  function selectMode(key) {
    const mode = modes[key];
    if (!mode) return;
    modeButtons.forEach((button) => button.setAttribute("aria-pressed", String(button.dataset.cifMode === key)));
    systems.forEach((system) => system.classList.toggle("is-active", system.dataset.cifSystem === mode.system.toLowerCase()));
    detailName.textContent = mode.name;
    detailPath.textContent = `Florida transportation → ${mode.system} system → ${mode.name}`;
    detailIntro.textContent = mode.intro;
    dimensionList.innerHTML = mode.dimensions.map(([name, value]) => `
      <div class="cif-dimension">
        <div class="cif-dimension-name">${name}</div>
        <div class="cif-dimension-track" aria-label="Relative contribution of ${name}">
          <div class="cif-dimension-bar" style="width:${value}%"></div>
        </div>
      </div>`).join("");
    factorList.innerHTML = mode.factors.map((factor) => `<span class="cif-factor">${factor}</span>`).join("");
  }

  modeButtons.forEach((button) => button.addEventListener("click", () => selectMode(button.dataset.cifMode)));

  const scenarios = {
    growth: {
      ci: [42, 46, 51, 58, 65, 73, 82, 91],
      pi: [41, 45, 49, 54, 59, 65, 70, 76],
      band: [84, 212],
      title: "Planning need rises faster",
      body: "When CI climbs more quickly than PI, external drivers historically linked to performance are accumulating faster than observed performance is improving. This is a prompt to investigate—not a numerical estimate of unmet need."
    },
    shock: {
      ci: [72, 75, 77, 78, 46, 50, 63, 75],
      pi: [70, 72, 74, 75, 49, 51, 56, 64],
      band: [278, 350],
      title: "A shared disruption, uneven recovery",
      body: "A sharp joint drop signals a system-wide disruption. If CI rebounds faster, external conditions have returned toward trend while observed performance remains slower to recover—pointing attention to operational, behavioral, or policy frictions."
    },
    aligned: {
      ci: [43, 48, 54, 60, 66, 73, 80, 87],
      pi: [42, 47, 53, 59, 65, 72, 79, 86],
      band: [84, 404],
      title: "Demand and performance co-move",
      body: "When CI and PI move together, performance is changing at roughly the pace suggested by its external drivers. The shared direction supports the framework’s intended link between planning need and observed outcomes."
    }
  };

  const scenarioButtons = [...root.querySelectorAll("[data-cif-scenario]")];
  const lineCI = root.querySelector("[data-cif-line-ci]");
  const linePI = root.querySelector("[data-cif-line-pi]");
  const eventBand = root.querySelector("[data-cif-event-band]");
  const diagnosticTitle = root.querySelector("[data-cif-diagnostic-title]");
  const diagnosticBody = root.querySelector("[data-cif-diagnostic-body]");

  function points(values) {
    const x0 = 62;
    const width = 430;
    const y0 = 222;
    const height = 160;
    return values.map((value, index) => {
      const x = x0 + (index / (values.length - 1)) * width;
      const y = y0 - (value / 100) * height;
      return `${x.toFixed(1)},${y.toFixed(1)}`;
    }).join(" ");
  }

  function selectScenario(key) {
    const scenario = scenarios[key];
    if (!scenario) return;
    scenarioButtons.forEach((button) => button.setAttribute("aria-pressed", String(button.dataset.cifScenario === key)));
    lineCI.setAttribute("points", points(scenario.ci));
    linePI.setAttribute("points", points(scenario.pi));
    eventBand.setAttribute("x", scenario.band[0]);
    eventBand.setAttribute("width", scenario.band[1] - scenario.band[0]);
    diagnosticTitle.textContent = scenario.title;
    diagnosticBody.textContent = scenario.body;
  }

  scenarioButtons.forEach((button) => button.addEventListener("click", () => selectScenario(button.dataset.cifScenario)));

  setStep(0);
  selectMode("auto");
  selectScenario("shock");
})();
