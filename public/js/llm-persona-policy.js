(() => {
  const root = document.getElementById("llmp-post");
  if (!root || root.dataset.initialized === "true") return;
  root.dataset.initialized = "true";

  const phases = [
    { kicker: "Phase A · Listen first", title: "Collect community behavior data", body: "Use a localized KAP survey or comparable instrument to record what residents know, believe, experience, and do. The debris application combines household conditions with disposal access, prior disaster experience, service perceptions, behavioral traits, and observed practices.", output: "Output: an anonymized empirical baseline that captures behavioral heterogeneity." },
    { kicker: "Phase B · Find behavioral structure", title: "Extract representative personas", body: "Principal Component Analysis condenses correlated survey features. Clustering then groups residents by shared socioeconomic and behavioral patterns, while validation metrics can test whether those groupings remain stable and interpretable.", output: "Case-study output: six persona clusters spanning distinct legal, mixed, and illegal disposal tendencies." },
    { kicker: "Phase C · Ground and supervise", title: "Develop persona-conditioned agents", body: "Condition an LLM on the profile of a persona class, then refine it through prompt engineering or tuning. A moderator agent, ensemble checks, drift metrics, and human review help keep simulated behavior aligned with the empirical distribution.", output: "Proof-of-concept: GPT-4o-mini conditioned on Persona 1 using 80% of its cluster-specific survey data." },
    { kicker: "Phase D · Test what was withheld", title: "Evaluate decisions and rationales", body: "Give the agent the same disposal scenarios posed to residents in the reserved dataset. Compare decisions using alignment metrics and inspect whether stated constraints and trade-offs are coherent with observed behavioral drivers.", output: "Evaluation: approximately 75% decision alignment, plus qualitative review of context-sensitive rationales." }
  ];

  const phaseButtons = [...root.querySelectorAll("[data-llmp-phase]")];
  const phaseNodes = [...root.querySelectorAll("[data-llmp-phase-node]")];
  const phaseKicker = root.querySelector("[data-llmp-phase-kicker]");
  const phaseTitle = root.querySelector("[data-llmp-phase-title]");
  const phaseBody = root.querySelector("[data-llmp-phase-body]");
  const phaseOutput = root.querySelector("[data-llmp-phase-output]");

  function selectPhase(index) {
    const phase = phases[index];
    if (!phase) return;
    phaseButtons.forEach((button, i) => button.setAttribute("aria-pressed", String(i === index)));
    phaseNodes.forEach((node, i) => node.classList.toggle("is-active", i === index));
    phaseKicker.textContent = phase.kicker;
    phaseTitle.textContent = phase.title;
    phaseBody.textContent = phase.body;
    phaseOutput.textContent = phase.output;
  }
  phaseButtons.forEach((button) => button.addEventListener("click", () => selectPhase(Number(button.dataset.llmpPhase))));

  const lenses = {
    household: { title: "Household and access conditions", body: "A persona needs the practical constraints surrounding a decision, not just a demographic label.", chips: ["Household conditions", "Disposal access", "Travel burden", "Service availability"], translation: "These inputs tell the agent what options are realistically available and how costly or inconvenient each option may feel." },
    knowledge: { title: "Knowledge and prior practices", body: "KAP measures capture awareness of debris procedures and what residents report actually doing before and after a disaster.", chips: ["Procedure awareness", "Prior disposal", "Recycling practice", "Intervention knowledge"], translation: "The agent can distinguish a lack of awareness from a deliberate trade-off made despite knowing the rules." },
    attitudes: { title: "Attitudes and psychological traits", body: "Beliefs about responsibility, sustainability, municipal services, safety, and risk help explain why similar households may choose differently.", chips: ["Risk tolerance", "Safety beliefs", "Responsibility", "Institutional trust"], translation: "These features shape the motivations and trade-offs expressed in the persona’s simulated rationale." },
    context: { title: "Event and recovery context", body: "Behavior changes with the conditions of the disaster and the recovery system surrounding the household.", chips: ["Disaster experience", "Collection delay", "Debris hazard", "Recovery pressure"], translation: "Context lets the same persona adapt its choice as access, urgency, or frustration changes across scenarios." }
  };
  const lensButtons = [...root.querySelectorAll("[data-llmp-lens]")];
  const lensTitle = root.querySelector("[data-llmp-lens-title]");
  const lensBody = root.querySelector("[data-llmp-lens-body]");
  const lensChips = root.querySelector("[data-llmp-lens-chips]");
  const lensTranslation = root.querySelector("[data-llmp-lens-translation]");

  function selectLens(key) {
    const lens = lenses[key];
    if (!lens) return;
    lensButtons.forEach((button) => button.setAttribute("aria-pressed", String(button.dataset.llmpLens === key)));
    lensTitle.textContent = lens.title;
    lensBody.textContent = lens.body;
    lensChips.innerHTML = lens.chips.map((chip) => `<span class="llmp-chip">${chip}</span>`).join("");
    lensTranslation.textContent = lens.translation;
  }
  lensButtons.forEach((button) => button.addEventListener("click", () => selectLens(button.dataset.llmpLens)));

  const travel = root.querySelector("#llmp-travel");
  const delay = root.querySelector("#llmp-delay");
  const travelValue = root.querySelector("[data-llmp-travel-value]");
  const delayValue = root.querySelector("[data-llmp-delay-value]");
  const pressureTitle = root.querySelector("[data-llmp-pressure-title]");
  const pressureBadge = root.querySelector("[data-llmp-pressure-badge]");
  const pressureBar = root.querySelector("[data-llmp-pressure-bar]");
  const scenarioBody = root.querySelector("[data-llmp-scenario-body]");
  const reason = root.querySelector("[data-llmp-reason]");

  function updateScenario() {
    const travelMinutes = Number(travel.value);
    const delayDays = Number(delay.value);
    const isFar = travelMinutes > 30;
    const isDelayed = delayDays > 14;
    travelValue.textContent = travelMinutes;
    delayValue.textContent = delayDays;
    if (isFar && isDelayed) {
      pressureTitle.textContent = "Constraints stack up"; pressureBadge.textContent = "High pressure"; pressureBar.style.width = "86%";
      scenarioBody.textContent = "Both access burden and service delay cross the thresholds highlighted in the evaluation. The scenario creates stronger pressure toward an improper disposal choice.";
      reason.textContent = "Inconvenience is compounded by accumulated frustration with delayed collection.";
    } else if (isFar) {
      pressureTitle.textContent = "Access becomes the trade-off"; pressureBadge.textContent = "Elevated pressure"; pressureBar.style.width = "61%";
      scenarioBody.textContent = "The legal disposal site is beyond the 30-minute scenario threshold. Persona 1’s rationale shifts away from safety benefits and toward the inconvenience of legal disposal.";
      reason.textContent = "Travel time and convenience dominate the decision explanation.";
    } else if (isDelayed) {
      pressureTitle.textContent = "Waiting changes the calculation"; pressureBadge.textContent = "Elevated pressure"; pressureBar.style.width = "61%";
      scenarioBody.textContent = "Collection has been delayed beyond 14 days. Persona 1 remains close to legal disposal access, but prolonged waiting introduces frustration that can shift the choice.";
      reason.textContent = "Accumulated frustration with municipal service becomes more salient.";
    } else {
      pressureTitle.textContent = "Legal disposal remains plausible"; pressureBadge.textContent = "Lower pressure"; pressureBar.style.width = "28%";
      scenarioBody.textContent = "The site is within 30 minutes and collection delay remains below 14 days. This resembles the conditions under which Persona 1 favored legal disposal.";
      reason.textContent = "Safety and family welfare outweigh the remaining inconvenience.";
    }
  }
  [travel, delay].forEach((input) => input.addEventListener("input", updateScenario));
  root.querySelector("[data-llmp-reset]").addEventListener("click", () => { travel.value = "30"; delay.value = "7"; updateScenario(); });

  const meanings = {
    means: "Within this persona and dataset, the conditioned agent reproduced cluster-level choices more often than the conventional comparison model and generated rationales that could be inspected for behavioral coherence.",
    limits: "It does not establish general predictive superiority, individual-level accuracy, causal reasoning, or transfer to another community. The comparison is proof-of-concept context, not a hypothesis test."
  };
  const meaningButtons = [...root.querySelectorAll("[data-llmp-meaning]")];
  const meaningText = root.querySelector("[data-llmp-meaning-text]");
  function selectMeaning(key) {
    meaningButtons.forEach((button) => button.setAttribute("aria-pressed", String(button.dataset.llmpMeaning === key)));
    meaningText.textContent = meanings[key];
  }
  meaningButtons.forEach((button) => button.addEventListener("click", () => selectMeaning(button.dataset.llmpMeaning)));

  selectPhase(0); selectLens("household"); updateScenario(); selectMeaning("means");
})();
