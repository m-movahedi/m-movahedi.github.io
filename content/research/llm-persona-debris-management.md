---
title: "Simulating Community Behaviors with LLM Personas"
date: "2026-04-16"
draft: false
type: "post"
description: "An interactive explanation of an empirically grounded LLM-persona framework for exploring community debris-management policies after disasters."
tags:
  - "Large Language Models"
  - "Persona Agents"
  - "Disaster Debris Management"
  - "Community Behavior"
  - "Policy Evaluation"
  - "Human-Centered Infrastructure"
  - "Post-disaster Recovery"
journal: "ASCE Construction Research Congress 2026"
---

<link rel="stylesheet" href="/css/llm-persona-policy.css">

<div id="llmp-post">

<section class="llmp-hero" aria-labelledby="llmp-hero-title">
  <p class="llmp-eyebrow">Interactive research explainer</p>
  <h2 id="llmp-hero-title">What if a policy could meet the community before it reaches the street?</h2>
  <p class="llmp-lede">Debris planning is usually framed as a logistics problem: estimate volume, select sites, and optimize routes. Our work adds the missing human layer by grounding LLM persona agents in observed community behavior, then using them to explore how different residents may respond to an intervention.</p>
  <div class="llmp-hero-stats" aria-label="Proof-of-concept at a glance">
    <div class="llmp-stat"><strong>6</strong><span>behavioral persona clusters</span></div>
    <div class="llmp-stat"><strong>80 / 20</strong><span>conditioning and evaluation split</span></div>
    <div class="llmp-stat"><strong>~75%</strong><span>persona-agent decision alignment</span></div>
    <div class="llmp-stat"><strong>Ian</strong><span>Hurricane case context</span></div>
  </div>
</section>

After a disaster, residents make debris-disposal decisions under pressure. A legal disposal site may be too far away. Municipal pickup may be delayed. Families may weigh safety, time, cost, convenience, trust, and social expectations differently. Those choices can create illegal dumping that slows recovery, raises municipal costs, and adds environmental and health risks.

Traditional behavioral models commonly rely on static rules or aggregated demographics. They can represent an “average household,” but struggle with the heterogeneous motivations and thresholds that shape actual decisions. Our paper, **“Large Language Model-Based Framework for Simulating Community Behaviors in Policy Evaluation: Application to Community Debris Management,”** proposes a different approach: use survey-grounded LLM personas as transparent, testable surrogates for exploring possible community responses before a policy is deployed.

<section class="llmp-section" aria-labelledby="llmp-workflow-title">
  <div class="llmp-section-heading">
    <p class="llmp-eyebrow">The framework</p>
    <h3 id="llmp-workflow-title">Four phases connect evidence to exploration</h3>
    <p>Select a phase to follow the information from community survey to evaluated persona agent.</p>
  </div>
  <div class="llmp-figure">
    <div class="llmp-toolbar">
      <span class="llmp-figure-label">Framework explorer</span>
      <div class="llmp-tabs" aria-label="Framework phases">
        <button type="button" class="llmp-tab" data-llmp-phase="0" aria-pressed="true">A · Collect</button>
        <button type="button" class="llmp-tab" data-llmp-phase="1" aria-pressed="false">B · Analyze</button>
        <button type="button" class="llmp-tab" data-llmp-phase="2" aria-pressed="false">C · Develop</button>
        <button type="button" class="llmp-tab" data-llmp-phase="3" aria-pressed="false">D · Evaluate</button>
      </div>
    </div>
    <div class="llmp-workflow-body">
      <div class="llmp-workflow-copy" aria-live="polite">
        <p class="llmp-eyebrow" data-llmp-phase-kicker></p>
        <h4 data-llmp-phase-title></h4>
        <p data-llmp-phase-body></p>
        <div class="llmp-output" data-llmp-phase-output></div>
      </div>
      <div class="llmp-workflow-map" aria-hidden="true">
        <svg viewBox="0 0 520 250">
          <defs><marker id="llmp-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0 L10 5 L0 10 Z" fill="currentColor" opacity=".55"></path></marker></defs>
          <path class="llmp-flow-line" d="M120 95 H165"></path><path class="llmp-flow-line" d="M250 95 H295"></path><path class="llmp-flow-line" d="M380 95 H425"></path><path class="llmp-feedback-line" d="M467 143 C467 214 70 214 70 143"></path>
          <g class="llmp-phase-node" data-llmp-phase-node="0"><circle cx="70" cy="95" r="50"></circle><text x="70" y="87" text-anchor="middle">Community</text><text x="70" y="104" text-anchor="middle">data</text></g>
          <g class="llmp-phase-node" data-llmp-phase-node="1"><circle cx="200" cy="95" r="50"></circle><text x="200" y="87" text-anchor="middle">Behavioral</text><text x="200" y="104" text-anchor="middle">personas</text></g>
          <g class="llmp-phase-node" data-llmp-phase-node="2"><circle cx="330" cy="95" r="50"></circle><text x="330" y="87" text-anchor="middle">Persona</text><text x="330" y="104" text-anchor="middle">agents</text></g>
          <g class="llmp-phase-node" data-llmp-phase-node="3"><circle cx="460" cy="95" r="50"></circle><text x="460" y="87" text-anchor="middle">Withheld-data</text><text x="460" y="104" text-anchor="middle">evaluation</text></g>
          <text x="265" y="232" text-anchor="middle" fill="currentColor" opacity=".58" font-size="11">Evaluation gaps feed the next refinement cycle</text>
        </svg>
      </div>
    </div>
  </div>
  <p class="llmp-caption">Interactive Figure 1. The framework is iterative: new empirical observations can refine persona definitions, agent conditioning, and subsequent evaluation.</p>
</section>

### From demographics to behavioral personas

The process begins with localized **Knowledge, Attitudes, and Practices (KAP)** survey data. For this application, the survey captured residents’ disposal practices after Hurricane Ian, knowledge of debris-handling procedures, perceptions of possible interventions, prior disaster experience, service access, responsibility beliefs, sustainability attitudes, and personality-linked features such as risk tolerance.

Principal Component Analysis reduces the high-dimensional responses into interpretable behavioral components. K-means clustering then groups residents who share decision patterns rather than merely demographic labels. In the Tampa application, this produced **six persona clusters** with different mixtures of legal, mixed, and illegal disposal behavior.

<section class="llmp-section" aria-labelledby="llmp-persona-title">
  <div class="llmp-section-heading">
    <p class="llmp-eyebrow">What makes a persona?</p>
    <h3 id="llmp-persona-title">Build the agent from behavioral evidence</h3>
    <p>Explore the four evidence layers that give a persona context beyond a demographic profile.</p>
  </div>
  <div class="llmp-figure">
    <div class="llmp-persona-layout">
      <div class="llmp-lens-list" aria-label="Persona evidence layers">
        <button type="button" class="llmp-lens" data-llmp-lens="household" aria-pressed="true"><span>01</span> Household & access</button>
        <button type="button" class="llmp-lens" data-llmp-lens="knowledge" aria-pressed="false"><span>02</span> Knowledge & practice</button>
        <button type="button" class="llmp-lens" data-llmp-lens="attitudes" aria-pressed="false"><span>03</span> Attitudes & psychology</button>
        <button type="button" class="llmp-lens" data-llmp-lens="context" aria-pressed="false"><span>04</span> Disaster context</button>
      </div>
      <div class="llmp-persona-card" aria-live="polite">
        <div class="llmp-persona-head"><div class="llmp-avatar" aria-hidden="true"><span></span><span></span><span></span></div><div><p class="llmp-eyebrow">Evidence layer</p><h4 data-llmp-lens-title></h4></div></div>
        <p data-llmp-lens-body></p>
        <div class="llmp-chip-list" data-llmp-lens-chips></div>
        <div class="llmp-translation"><span class="llmp-figure-label">Why it matters to the agent</span><p data-llmp-lens-translation></p></div>
      </div>
    </div>
  </div>
  <p class="llmp-caption">Interactive Figure 2. These layers describe categories used to ground persona development; they do not expose or recreate any individual survey respondent.</p>
</section>

### A moderator around the personas

Persona agents are not left to self-validate. The conceptual framework places a **moderator agent** around development and evaluation to check behavioral coherence, compare simulated and empirical distributions, and flag drift using measures such as Population Stability Index and Kullback–Leibler divergence. Ensemble responses can reduce dependence on a single generation, while human reviewers and community stakeholders can correct behavior that departs from realistic expectations.

This oversight matters because an LLM’s explanation is a post-hoc rationale, not direct access to its internal reasoning. Rationales can support interpretation and auditing, but they remain prompt-sensitive and vulnerable to hallucination. The paper therefore treats them as evidence to inspect—not ground truth.

<section class="llmp-section" aria-labelledby="llmp-scenario-title">
  <div class="llmp-section-heading">
    <p class="llmp-eyebrow">Proof-of-concept behavior</p>
    <h3 id="llmp-scenario-title">Stress-test a disposal scenario</h3>
    <p>Adjust the two conditions highlighted in the Persona 1 evaluation. The response summarizes qualitative reasoning observed in the study.</p>
  </div>
  <div class="llmp-figure">
    <div class="llmp-scenario-grid">
      <div class="llmp-controls">
        <label for="llmp-travel">Travel time to a legal disposal site <strong><span data-llmp-travel-value>30</span> min</strong></label>
        <input id="llmp-travel" class="llmp-range" type="range" min="10" max="90" step="10" value="30">
        <div class="llmp-range-ends"><span>Nearby</span><span>Distant</span></div>
        <label for="llmp-delay">Municipal collection delay <strong><span data-llmp-delay-value>7</span> days</strong></label>
        <input id="llmp-delay" class="llmp-range" type="range" min="0" max="28" step="1" value="7">
        <div class="llmp-range-ends"><span>Prompt</span><span>Prolonged</span></div>
        <button type="button" class="llmp-reset" data-llmp-reset>Reset scenario</button>
      </div>
      <div class="llmp-scenario-result" aria-live="polite">
        <p class="llmp-eyebrow">Persona 1 response pattern</p>
        <div class="llmp-pressure-row"><h4 data-llmp-pressure-title></h4><span class="llmp-pressure-badge" data-llmp-pressure-badge></span></div>
        <div class="llmp-pressure-track" role="img" aria-label="Qualitative disposal pressure"><span data-llmp-pressure-bar></span></div>
        <p data-llmp-scenario-body></p>
        <div class="llmp-reason-box"><span class="llmp-figure-label">Reasoning emphasis</span><p data-llmp-reason></p></div>
      </div>
    </div>
  </div>
  <p class="llmp-caption">Interactive Figure 3. “Disposal pressure” is a qualitative explainer, not a predicted probability. The 30-minute and 14-day thresholds reflect scenarios discussed in the proof-of-concept evaluation.</p>
</section>

When the legal disposal site was presented as **30 minutes away or less**, Persona 1 emphasized safety and family welfare and favored legal disposal, consistent with the cluster’s hazard sensitivity. Beyond 30 minutes, the agent’s rationale shifted toward inconvenience. When collection delays exceeded **14 days**, frustration became more prominent. These context-sensitive shifts mirrored drivers observed in the cluster-level survey data.

<section class="llmp-section" aria-labelledby="llmp-eval-title">
  <div class="llmp-section-heading"><p class="llmp-eyebrow">Evaluation, not prediction</p><h3 id="llmp-eval-title">How closely did the proof-of-concept align?</h3><p>The persona agent and conventional baseline were evaluated using the same cluster-specific data.</p></div>
  <div class="llmp-figure">
    <div class="llmp-eval-chart" role="img" aria-label="Persona agent approximately 75 percent decision alignment; XGBoost baseline approximately 60 percent">
      <div class="llmp-eval-row"><div><strong>Persona agent</strong><span>GPT-4o-mini, survey-conditioned</span></div><div class="llmp-eval-track"><span style="width:75%"></span></div><b>~75%</b></div>
      <div class="llmp-eval-row llmp-baseline"><div><strong>Conventional baseline</strong><span>eXtreme Gradient Boosting</span></div><div class="llmp-eval-track"><span style="width:60%"></span></div><b>~60%</b></div>
    </div>
    <div class="llmp-meaning-panel">
      <div class="llmp-tabs" aria-label="Interpretation of evaluation result"><button type="button" class="llmp-tab" data-llmp-meaning="means" aria-pressed="true">What it means</button><button type="button" class="llmp-tab" data-llmp-meaning="limits" aria-pressed="false">What it does not mean</button></div>
      <p data-llmp-meaning-text aria-live="polite"></p>
    </div>
  </div>
  <p class="llmp-caption">Interactive Figure 4. Accuracy is reported as decision alignment with observed cluster-level behavior. The baseline comparison provides context and is not a hypothesis test or claim of general model superiority.</p>
</section>

The persona agent achieved approximately **75% decision alignment accuracy**, compared with about **60%** for XGBoost on the same data. The result is promising because the LLM also produced context-sensitive rationales that could be inspected alongside its choices. But it remains a proof of concept based on one persona, one survey dataset, and one disaster context—not evidence that the agent can predict a new community without recalibration.

<div class="llmp-evidence-grid" aria-label="Study design highlights">
  <div class="llmp-evidence"><strong>6 clusters</strong><p>PCA and K-means represented heterogeneous household, access, and KAP patterns.</p></div>
  <div class="llmp-evidence"><strong>1 persona</strong><p>Persona 1 was selected for the demonstration because of its illegal-dumping tendency and sensitivity to convenience.</p></div>
  <div class="llmp-evidence"><strong>20% held out</strong><p>Cluster-specific survey responses were reserved exclusively for agent evaluation.</p></div>
</div>

### A policy sandbox—with guardrails

The value of this framework is not automated policymaking. It is the ability to ask structured “what if” questions before spending scarce recovery resources: Which communities might respond to closer disposal access? Where could a service delay undermine an outreach campaign? Which trade-offs or unintended effects deserve direct community investigation?

<div class="llmp-guardrail"><strong>Surrogate agents do not replace people.</strong>LLM personas are synthetic approximations and may inherit bias from training data, prompts, or calibration. Responsible application requires IRB approval, informed consent, removal of personally identifiable information, transparent auditing, withheld-data validation, and meaningful human and community oversight. The framework is an exploratory decision-support tool—not a substitute for engagement with affected residents.</div>

Beyond debris management, the same four-phase workflow can be adapted to recycling, demolition planning, transportation, evacuation, and other human–infrastructure systems. Each new application would require localized behavioral evidence, domain-specific constraints, and fresh evaluation; the persona is never assumed to transfer unchanged.

<p><a class="llmp-paper-link" href="https://doi.org/10.1061/9780784487006.071" target="_blank" rel="noopener">Read the published paper <span aria-hidden="true">↗</span></a></p>

### Citation

<pre class="llmp-bibtex"><code>@inproceedings{Baldwin2026LLMPersonas,
  author    = {Baldwin, Alexander J. and Movahedi, Mohammad and Choi, Juyeong},
  title     = {Large Language Model-Based Framework for Simulating Community Behaviors in Policy Evaluation: Application to Community Debris Management},
  booktitle = {Construction Research Congress 2026},
  pages     = {718--728},
  address   = {San Antonio, Texas},
  publisher = {American Society of Civil Engineers},
  year      = {2026},
  doi       = {10.1061/9780784487006.071}
}</code></pre>

</div>

<script defer src="/js/llm-persona-policy.js"></script>
