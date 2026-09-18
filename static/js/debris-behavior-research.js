(() => {
  const root = document.querySelector("#dbr-post");
  if (!root) return;

  const stages = [
    { kicker: "Stage A · Pre-disaster", title: "Prepare before debris exists", body: "Hazard awareness, household context, and proactive preparation shape the starting conditions before impact.", constructs: [["K", "Hazard awareness"], ["A", "Household context"], ["P", "Preparedness"]], question: "What do I know, and what can I do before impact?" },
    { kicker: "Stage B · Immediate aftermath", title: "Handle debris on the property", body: "Residents identify, sort, pile, delay, or seek help while services and guidance may still be disrupted.", constructs: [["K", "Debris present"], ["A", "Concern & support"], ["P", "Correct preparation"]], question: "How should I manage this material before collection?" },
    { kicker: "Stage C · Final placement", title: "Choose where and how to dispose", body: "Material-specific knowledge meets travel time, waiting time, facility access, and local emergency rules.", constructs: [["K", "Handling knowledge"], ["A", "Access & convenience"], ["P", "Final behavior"]], question: "Which legal option is available and reachable now?" }
  ];

  const setStage = (index) => {
    const stage = stages[index];
    root.querySelector("[data-dbr-stage-kicker]").textContent = stage.kicker;
    root.querySelector("[data-dbr-stage-title]").textContent = stage.title;
    root.querySelector("[data-dbr-stage-body]").textContent = stage.body;
    root.querySelector("[data-dbr-stage-question]").textContent = stage.question;
    root.querySelector("[data-dbr-stage-constructs]").innerHTML = stage.constructs.map(([key, label]) => `<span><b>${key}</b>${label}</span>`).join("");
    root.querySelectorAll("[data-dbr-stage]").forEach((button, i) => button.setAttribute("aria-pressed", i === index));
    root.querySelectorAll("[data-dbr-stage-node]").forEach((node, i) => node.classList.toggle("is-active", i === index));
    root.querySelector(".dbr-pathway").dataset.activeStage = index;
  };
  root.querySelectorAll("[data-dbr-stage]").forEach((button) => button.addEventListener("click", () => setStage(Number(button.dataset.dbrStage))));

  const outcomes = {
    legal: { badge: "More legal behavior", title: "Knowledge carries the strongest signal", body: "Knowledge acts directly and through a smaller pathway involving access. Access also retains its own positive association.", direct: "+0.242", indirect: "+0.051", values: { knowledge: .293, access: .145, preparation: .021 } },
    illegal: { badge: "Fewer illegal instances", title: "Knowledge helps—but cannot remove every barrier", body: "Knowledge and access mirror the legal model in direction, but their negative associations are smaller in magnitude.", direct: "−0.178", indirect: "−0.035", values: { knowledge: -.213, access: -.099, preparation: -.003 } }
  };

  const setOutcome = (key) => {
    const item = outcomes[key];
    root.querySelector("[data-dbr-outcome-badge]").textContent = item.badge;
    root.querySelector("[data-dbr-effect-title]").textContent = item.title;
    root.querySelector("[data-dbr-effect-body]").textContent = item.body;
    root.querySelector("[data-dbr-direct]").textContent = item.direct;
    root.querySelector("[data-dbr-indirect]").textContent = item.indirect;
    root.querySelectorAll("[data-dbr-outcome]").forEach(button => button.setAttribute("aria-pressed", button.dataset.dbrOutcome === key));
    Object.entries(item.values).forEach(([name, value]) => {
      const row = root.querySelector(`[data-dbr-effect="${name}"]`);
      row.querySelector("i").style.setProperty("--value", `${Math.abs(value) / .32 * 50}%`);
      row.querySelector("i").dataset.sign = value < 0 ? "negative" : "positive";
      row.querySelector("strong").textContent = `${value > 0 ? "+" : "−"}${Math.abs(value).toFixed(3)}`;
    });
  };
  root.querySelectorAll("[data-dbr-outcome]").forEach(button => button.addEventListener("click", () => setOutcome(button.dataset.dbrOutcome)));

  const evidence = {
    counts: { kicker: "Poisson count models · IRR", title: "Knowledge shifts the legal–illegal balance", note: "FDR-adjusted associations with the reported number of behaviors.", items: [["Legal · Stage-B concern", 1.43], ["Legal · Stage-C knowledge", 1.24], ["Legal · Stage-A attitude/context", 1.18], ["Illegal · Stage-C knowledge", .89]] },
    placement: { kicker: "Logistic models · OR", title: "Concern is linked to improvised placement", note: "Stage-B concern and help-seeking was associated with a wider range of off-site locations.", items: [["Different city", 2.01], ["Bike lane", 1.87], ["Park / public space", 1.79], ["Highway / interstate", 1.68], ["Designated site", .66]] },
    materials: { kicker: "Logistic models · OR", title: "Knowledge matters most for demanding debris", note: "Stage-C knowledge was associated with correct material-specific handling.", items: [["White goods", 3.67], ["Wrecked vehicles", 3.34], ["Hazardous debris", 3.24], ["C&D waste", 2.58], ["Soil", 1.99], ["Vegetative debris", 1.61]] }
  };

  const setEvidence = (key) => {
    const item = evidence[key];
    root.querySelector("[data-dbr-evidence-kicker]").textContent = item.kicker;
    root.querySelector("[data-dbr-evidence-title]").textContent = item.title;
    root.querySelector("[data-dbr-evidence-note]").textContent = item.note;
    const max = Math.max(...item.items.map(([, value]) => Math.abs(Math.log(value))), .35);
    root.querySelector("[data-dbr-evidence-chart]").innerHTML = item.items.map(([label, value]) => {
      const direction = value >= 1 ? "positive" : "negative";
      const width = Math.max(4, Math.abs(Math.log(value)) / max * 48);
      return `<div class="dbr-or-row"><span>${label}</span><div><i data-sign="${direction}" style="--value:${width}%"></i></div><strong>${value.toFixed(2)}</strong></div>`;
    }).join("");
    root.querySelectorAll("[data-dbr-evidence]").forEach(button => button.setAttribute("aria-selected", button.dataset.dbrEvidence === key));
  };
  root.querySelectorAll("[data-dbr-evidence]").forEach(button => button.addEventListener("click", () => setEvidence(button.dataset.dbrEvidence)));

  const targets = {
    survey: { headline: "Hazard exposure improves reconstruction of the survey ranking.", copy: "IDDTI-B leads on global rank agreement and pairwise ordering, while both versions have the same NDCG.", metrics: [["NDCG", .905, .905], ["Pairwise accuracy", .538, .603], ["Spearman", .148, .264], ["Kendall τ", .077, .205]] },
    observed: { headline: "The advantage is not universal.", copy: "Against the observed illegal-disposal ratio, IDDTI-A leads on all four metrics. The value of adding hazard exposure is target-dependent.", metrics: [["NDCG", .895, .882], ["Pairwise accuracy", .590, .551], ["Spearman", .220, .203], ["Kendall τ", .179, .103]] }
  };

  const setTarget = (key) => {
    const item = targets[key];
    root.querySelector("[data-dbr-index-headline]").textContent = item.headline;
    root.querySelector("[data-dbr-index-copy]").textContent = item.copy;
    root.querySelector("[data-dbr-metrics]").innerHTML = item.metrics.map(([label, a, b]) => `<div class="dbr-metric"><h4>${label}</h4><div><span>A</span><i><b style="width:${a * 100}%"></b></i><strong>${a.toFixed(3)}</strong></div><div><span>B</span><i><b style="width:${b * 100}%"></b></i><strong>${b.toFixed(3)}</strong></div></div>`).join("");
    root.querySelectorAll("[data-dbr-target]").forEach(button => button.setAttribute("aria-pressed", button.dataset.dbrTarget === key));
  };
  root.querySelectorAll("[data-dbr-target]").forEach(button => button.addEventListener("click", () => setTarget(button.dataset.dbrTarget)));

  const policies = {
    awareness: ["Stage A · Before impact", "Low risk and preparedness awareness", "Pre-landfall, multilingual risk and debris messaging", "Message reach and preparedness survey"],
    handling: ["Stage B · First weeks", "Concern-driven improvised handling", "Curbside sorting guidance and contractor coordination", "Sorting-compliance audits"],
    access: ["Stage C · Post-event", "Access and convenience gaps", "Closer TDMS, mobile hazardous-waste drop-off, and live wait times", "Travel time and site utilization"],
    deterrence: ["Stage C · Ongoing", "Weak perceived deterrence", "Pair enforcement messaging with accessible legal options", "Illegal-dumping reports"]
  };
  const setPolicy = (key) => {
    const [stage, barrier, action, metric] = policies[key];
    root.querySelector("[data-dbr-policy-stage]").textContent = stage;
    root.querySelector("[data-dbr-policy-barrier]").textContent = barrier;
    root.querySelector("[data-dbr-policy-action]").textContent = action;
    root.querySelector("[data-dbr-policy-metric]").textContent = metric;
    root.querySelectorAll("[data-dbr-policy]").forEach(button => button.setAttribute("aria-pressed", button.dataset.dbrPolicy === key));
  };
  root.querySelectorAll("[data-dbr-policy]").forEach(button => button.addEventListener("click", () => setPolicy(button.dataset.dbrPolicy)));

  const gamePeople = root.querySelector("[data-dbr-game-people]");
  const homePoints = [[104,205],[122,215],[142,205],[160,215],[181,226],[201,236],[111,225],[131,235],[151,225],[171,235],[191,246],[211,256],[118,245],[138,255],[158,245],[178,255],[198,266],[218,276]];
  const destinations = {
    legal: [[515,122],[538,134],[562,146],[588,158],[615,144],[642,130],[664,116],[538,110],[565,123],[594,136],[622,122],[648,108]],
    curb: [[250,300],[274,313],[300,326],[326,312],[352,298],[378,284],[292,296],[320,282],[348,269],[376,257]],
    offsite: [[520,314],[546,327],[574,341],[603,327],[631,313],[660,298],[557,311],[585,297],[614,283]]
  };
  const seeds = [.03,.09,.14,.19,.25,.31,.36,.42,.47,.53,.58,.64,.69,.75,.81,.86,.92,.97];
  gamePeople.innerHTML = homePoints.map((point, index) => `<g class="dbr-game-person" data-dbr-person="${index}" transform="translate(${point[0]} ${point[1]})"><ellipse class="shadow" cy="14" rx="7" ry="3"></ellipse><circle class="head" cy="-8" r="4"></circle><path class="body" d="M0,-3 V8 M-6,2 L0,0 L6,2 M-4,15 L0,8 L4,15"></path></g>`).join("");

  const updateGame = () => {
    const knowledge = Number(root.querySelector('[data-dbr-game-control="knowledge"]').value);
    const access = Number(root.querySelector('[data-dbr-game-control="access"]').value);
    const delay = Number(root.querySelector('[data-dbr-game-control="delay"]').value);
    const k = knowledge / 100, a = access / 100, d = delay / 21;
    const raw = {
      legal: .28 + .38 * k + .32 * a - .12 * d,
      curb: .22 + .12 * k + .15 * (1 - a) + .16 * d,
      offsite: .12 + .30 * (1 - a) + .22 * d - .08 * k
    };
    const total = raw.legal + raw.curb + raw.offsite;
    const cutLegal = raw.legal / total;
    const cutCurb = cutLegal + raw.curb / total;
    const counts = { legal: 0, curb: 0, offsite: 0 };

    seeds.forEach((seed, index) => {
      const outcome = seed < cutLegal ? "legal" : seed < cutCurb ? "curb" : "offsite";
      const point = destinations[outcome][counts[outcome] % destinations[outcome].length];
      counts[outcome] += 1;
      const person = root.querySelector(`[data-dbr-person="${index}"]`);
      person.dataset.outcome = outcome;
      person.setAttribute("transform", `translate(${point[0]} ${point[1]})`);
    });

    Object.entries({ knowledge, access, delay }).forEach(([name, value]) => root.querySelector(`[data-dbr-game-value="${name}"]`).textContent = value);
    Object.entries(counts).forEach(([name, value]) => root.querySelector(`[data-dbr-game-count="${name}"]`).textContent = `${value} resident${value === 1 ? "" : "s"}`);
    const pressure = access < 35 || delay > 14 ? "Access friction and delay push more residents toward improvised placement." : knowledge > 70 && access > 60 ? "Knowledge and reachable services reinforce authorized disposal." : "Residents split across available options as knowledge and access compete with delay.";
    root.querySelector("[data-dbr-game-status]").textContent = pressure;
  };
  root.querySelectorAll("[data-dbr-game-control]").forEach(control => control.addEventListener("input", updateGame));

  setStage(0); setOutcome("legal"); setEvidence("counts"); setTarget("survey"); setPolicy("awareness"); updateGame();
})();
