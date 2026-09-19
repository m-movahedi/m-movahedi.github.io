---
title: "Uncovering Community Debris Disposal Behaviors During Post-Disaster Recovery"
date: "2026-09-17"
draft: false
type: "post"
description: "An exploration of staged debris-disposal behavior after Hurricane Ian and a county-level screening framework for illegal dumping tendency."
tags:
  - "Human Behavior Modeling"
  - "Infrastructure Management"
  - "Infrastructure Planning"
  - "Disaster Management"
  - "Community Behavior"
  - "Knowledge Attitudes Practices"
  - "Resilience"
  - "Disaster Debris Management"
  - "Post-disaster Recovery"
  - "Human-Centered Infrastructure"
  - "Debris"
featured_image: "/static/images/research/NHR2026_IDDTI-A.png"
journal: "Natural Hazards Review"
---

<link rel="stylesheet" href="/css/debris-behavior-research.css">

<div id="dbr-post">

<section class="dbr-hero" aria-labelledby="dbr-hero-title">
  <div class="dbr-storm" aria-hidden="true"><span></span><span></span><span></span></div>
  <p class="dbr-kicker">Research explainer</p>
  <h2 id="dbr-hero-title">Debris does not move through a community by logistics alone.</h2>
  <p class="dbr-lede">After a hurricane, every pile of debris sits at the end of a chain of human decisions: what residents know, how they prepare, what help they can find, and which disposal options they can actually reach.</p>
  <div class="dbr-stats" aria-label="Study at a glance">
    <div><strong>1,600</strong><span>Hurricane Ian respondents</span></div>
    <div><strong>13</strong><span>impacted Florida counties</span></div>
    <div><strong>3</strong><span>linked decision stages</span></div>
    <div><strong>7</strong><span>debris streams examined</span></div>
  </div>
</section>


<div style="background-color: #9ad39f; border-left: 6px solid #07ff13; padding: 15px 20px; border-radius: 4px; margin-bottom: 30px; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
  <h2 style="margin-top: 0; color: #00440b; display: flex; align-items: center;"><span style="font-size: 1.5em; margin-right: 10px;">📰</span> In press</h2>
  <p style="margin-bottom: 0; color: #001a0a;">
  Please note that the paper has been <span style="color:red"><b>accepted</b></span> and is currently <span style="color:red"><b>in press</b></span>.
</p>
</div>

Post-disaster debris management is often treated as an engineering problem: estimate the volume, locate temporary sites, schedule collection, and route trucks. Yet cleanup outcomes also depend on thousands of household-level decisions made under urgency, uncertainty, and uneven access to services.

Our research, **“Uncovering Community Debris Disposal Behaviors During Post-Disaster Recovery: A Case Study of Illegal Dumping After Hurricane Ian,”** reframes those decisions as a staged behavioral process. It combines a Knowledge–Attitudes–Practices (KAP) framework, survey evidence from communities affected by Hurricane Ian, and a county-level **Illegal Debris Disposal Tendency Index (IDDTI)** for planning and screening.

<section class="dbr-section" aria-labelledby="dbr-journey-title">
  <div class="dbr-heading">
    <p class="dbr-kicker">The behavioral journey</p>
    <h3 id="dbr-journey-title">One outcome, three decision environments</h3>
    <p>Select a stage to see how behavior develops before debris reaches its final destination.</p>
  </div>
  <div class="dbr-figure dbr-journey">
    <div class="dbr-stage-tabs" role="group" aria-label="Debris decision stages">
      <button type="button" data-dbr-stage="0" aria-pressed="true"><span>A</span>Before impact</button>
      <button type="button" data-dbr-stage="1" aria-pressed="false"><span>B</span>On the property</button>
      <button type="button" data-dbr-stage="2" aria-pressed="false"><span>C</span>Final disposal</button>
    </div>
    <div class="dbr-journey-grid">
      <div class="dbr-stage-copy" aria-live="polite">
        <p class="dbr-kicker" data-dbr-stage-kicker></p>
        <h2 data-dbr-stage-title></h2>
        <p data-dbr-stage-body></p>
        <div class="dbr-constructs" data-dbr-stage-constructs></div>
        <div class="dbr-question"><span>Decision question</span><strong data-dbr-stage-question></strong></div>
      </div>
      <div class="dbr-pathway" aria-hidden="true">
        <svg viewBox="0 0 620 310">
          <defs>
            <linearGradient id="dbr-flow-gradient" x1="0" x2="1"><stop stop-color="#31d6c4"/><stop offset="1" stop-color="#ffb45e"/></linearGradient>
            <marker id="dbr-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L10,5 L0,10 Z"></path></marker>
          </defs>
          <path class="dbr-main-flow" d="M120 130 H280 M340 130 H500"></path>
          <g class="dbr-node" data-dbr-stage-node="0"><circle cx="90" cy="130" r="57"></circle><text x="90" y="122">A</text><text class="label" x="90" y="148">Prepare</text></g>
          <g class="dbr-node" data-dbr-stage-node="1"><circle cx="310" cy="130" r="57"></circle><text x="310" y="122">B</text><text class="label" x="310" y="148">Handle</text></g>
          <g class="dbr-node" data-dbr-stage-node="2"><circle cx="530" cy="130" r="57"></circle><text x="530" y="122">C</text><text class="label" x="530" y="148">Dispose</text></g>
          <path class="dbr-branch legal" d="M530 188 C530 225 440 228 420 258"></path>
          <path class="dbr-branch ambiguous" d="M530 188 V258"></path>
          <path class="dbr-branch illegal" d="M530 188 C530 225 590 228 600 258"></path>
          <text class="dbr-outcome legal" x="395" y="282">LEGAL</text>
          <text class="dbr-outcome ambiguous" x="530" y="282">CONTEXTUAL</text>
          <text class="dbr-outcome illegal" x="600" y="282">ILLEGAL</text>
        </svg>
      </div>
    </div>
  </div>
  <p class="dbr-caption">Figure 1. Preparedness, on-property handling, and final disposal are analytically distinct but behaviorally connected. Some roadside or curbside placements remain context-dependent because emergency authorization can vary locally.</p>
</section>

### From survey response to behavioral evidence

The survey mapped nine constructs across the three stages: knowledge, attitudes or constraints, and practices. Outcome-specific models were then matched to the data: Poisson models for counts and logistic models for binary legality, placement, and material-handling outcomes. False-discovery-rate correction was applied within each outcome family.

This design matters because “illegal dumping” is not one undifferentiated act. The study distinguishes designated sites and authorized collection, locally contingent roadside placements, and clearly unauthorized locations such as highways, parks, and other cities.

<section class="dbr-section" aria-labelledby="dbr-path-title">
  <div class="dbr-heading">
    <p class="dbr-kicker">The central result</p>
    <h3 id="dbr-path-title">Knowledge changes compliance. Access still shapes possibility.</h3>
    <p>Switch the outcome to compare standardized total associations at the final disposal stage.</p>
  </div>
  <div class="dbr-figure dbr-effect-lab">
    <div class="dbr-toggle" role="group" aria-label="Select disposal outcome">
      <button type="button" data-dbr-outcome="legal" aria-pressed="true">Legal behavior</button>
      <button type="button" data-dbr-outcome="illegal" aria-pressed="false">Illegal behavior</button>
    </div>
    <div class="dbr-effect-grid">
      <div class="dbr-effect-story" aria-live="polite">
        <span class="dbr-outcome-badge" data-dbr-outcome-badge></span>
        <h2 data-dbr-effect-title></h2>
        <p data-dbr-effect-body></p>
        <div class="dbr-decomposition">
          <div><span>Knowledge · direct</span><strong data-dbr-direct></strong></div>
          <div><span>Knowledge · via access</span><strong data-dbr-indirect></strong></div>
        </div>
      </div>
      <div class="dbr-effect-bars" role="img" aria-label="Standardized total effect comparison">
        <div class="dbr-zero"></div>
        <div class="dbr-effect-row" data-dbr-effect="knowledge"><span>Disposal knowledge</span><div><i></i></div><strong></strong></div>
        <div class="dbr-effect-row" data-dbr-effect="access"><span>Access</span><div><i></i></div><strong></strong></div>
        <div class="dbr-effect-row" data-dbr-effect="preparation"><span>Prior preparation</span><div><i></i></div><strong></strong></div>
        <p>← fewer reported instances <span></span> more reported instances →</p>
      </div>
    </div>
  </div>
  <p class="dbr-caption">Figure 2. Standardized total associations from the staged path models. Bootstrap 95% intervals excluded zero for Stage-C knowledge and access, but not for Stage-B preparation. These cross-sectional relationships are associations, not causal effects.</p>
</section>

At the count level, a one-unit increase in standardized Stage-C knowledge was associated with a **24% increase in expected reported legal behaviors** (IRR = 1.24) and an **11% decrease in expected reported illegal behaviors** (IRR = 0.89). Knowledge was more strongly associated with expanding legal practice than eliminating illegal placement—a signal that information alone cannot remove physical and institutional barriers.

<section class="dbr-section" aria-labelledby="dbr-evidence-title">
  <div class="dbr-heading">
    <p class="dbr-kicker">Evidence explorer</p>
    <h3 id="dbr-evidence-title">The answer changes with the question</h3>
    <p>Explore the reported associations for behavior counts, placement locations, and correct material handling.</p>
  </div>
  <div class="dbr-figure dbr-evidence-lab">
    <div class="dbr-evidence-tabs" role="tablist" aria-label="Evidence family">
      <button type="button" role="tab" data-dbr-evidence="counts" aria-selected="true">Behavior counts</button>
      <button type="button" role="tab" data-dbr-evidence="placement" aria-selected="false">Placement</button>
      <button type="button" role="tab" data-dbr-evidence="materials" aria-selected="false">Debris type</button>
    </div>
    <div class="dbr-evidence-intro" aria-live="polite"><div><p class="dbr-kicker" data-dbr-evidence-kicker></p><h2 data-dbr-evidence-title></h2></div><p data-dbr-evidence-note></p></div>
    <div class="dbr-or-chart" data-dbr-evidence-chart></div>
    <div class="dbr-scale"><span>Lower association</span><i></i><b>1.0 · no difference</b><i></i><span>Higher association</span></div>
  </div>
  <p class="dbr-caption">Figure 3. IRRs are shown for count models and odds ratios for binary outcomes. Values above 1 indicate a positive association and values below 1 a negative association, holding other modeled constructs constant.</p>
</section>

The material-specific results make the knowledge signal especially visible. Higher Stage-C knowledge was associated with correct handling of white goods (OR = 3.67), wrecked vehicles (3.34), hazardous debris (3.24), construction and demolition waste (2.58), soil (1.99), and vegetative debris (1.61).

Placement tells a different story. Concern and help-seeking were positively associated with both ambiguous and illegal off-site locations, while correct Stage-B preparation was associated with designated-site use. More knowledgeable respondents were not consistently less likely to place debris off-site. The practical interpretation is not that knowledge fails, but that **knowing the right action and being able to take it are different problems**.

<section class="dbr-section" aria-labelledby="dbr-index-title">
  <div class="dbr-heading">
    <p class="dbr-kicker">From households to counties</p>
    <h3 id="dbr-index-title">What changes when hazard exposure enters the index?</h3>
    <p>Choose a validation target to compare the socioeconomic-only IDDTI-A with IDDTI-B, which adds Hurricane Ian wind exposure.</p>
  </div>
  <div class="dbr-figure dbr-index-lab">
    <div class="dbr-index-top">
      <div class="dbr-index-recipe" aria-label="Index construction">
        <div><span>Income</span><span>Age</span><span>Homeownership</span><span>Education</span><span>Employment</span><span>Establishment size</span></div>
        <b>+</b>
        <div class="dbr-hazard-pill"><span></span>Wind exposure <small>IDDTI-B only</small></div>
      </div>
      <div class="dbr-toggle" role="group" aria-label="Select validation target">
        <button type="button" data-dbr-target="survey" aria-pressed="true">Survey-derived ranking</button>
        <button type="button" data-dbr-target="observed" aria-pressed="false">Observed disposal ratio</button>
      </div>
    </div>
    <div class="dbr-index-summary" aria-live="polite"><strong data-dbr-index-headline></strong><p data-dbr-index-copy></p></div>
    <div class="dbr-metric-grid" data-dbr-metrics></div>
  </div>
  <p class="dbr-caption">Figure 4. IDDTI values rank relative screening priority; they do not predict individual behavior. Validation was internal, county samples were uneven, and performance depends on the chosen target.</p>
</section>

Against the survey-derived county ranking, adding hazard exposure improved Spearman correlation from **0.15 to 0.26** and pairwise accuracy from **0.54 to 0.60**. Against the observed illegal-disposal ratio, however, IDDTI-A and IDDTI-B were close, and the hazard-enhanced version did not lead on every metric. That target dependence is a feature worth seeing, not hiding: the indices are screening tools for prioritization, not deterministic risk scores.

### Translating evidence into action

<div class="dbr-policy" aria-label="Stage-specific policy implications">
  <div class="dbr-policy-nav" role="group" aria-label="Select a planning barrier">
    <button type="button" data-dbr-policy="awareness" aria-pressed="true">Preparedness</button>
    <button type="button" data-dbr-policy="handling" aria-pressed="false">Handling</button>
    <button type="button" data-dbr-policy="access" aria-pressed="false">Access</button>
    <button type="button" data-dbr-policy="deterrence" aria-pressed="false">Deterrence</button>
  </div>
  <div class="dbr-policy-card" aria-live="polite">
    <div><span class="dbr-policy-stage" data-dbr-policy-stage></span><p class="dbr-kicker">Barrier</p><h3 data-dbr-policy-barrier></h3></div>
    <div><p class="dbr-kicker">Intervention</p><strong data-dbr-policy-action></strong></div>
    <div><p class="dbr-kicker">Evaluate with</p><strong data-dbr-policy-metric></strong></div>
  </div>
</div>

The evidence argues for a paired strategy. Use clear, debris-specific education where correct handling is technically demanding. At the same time, reduce the friction of compliance through closer temporary debris-management sites, mobile hazardous-waste drop-offs, real-time wait information, and coordinated collection support. Enforcement messaging is most credible when residents also have a practical legal option.

<div class="dbr-caution">
  <strong>Use for outreach and planning—not enforcement targeting.</strong>
  The survey is cross-sectional, recall-based, self-reported, and geographically imbalanced. The online panel over-represents higher-income homeowners, reported illegal behavior is not measured prevalence, and the index lacks external validation against independent complaint or cleanup records. The framework and construction procedure are transferable; the Hurricane Ian coefficients and weights are not.
</div>

### The broader contribution

This research shows why post-disaster disposal should not be reduced to a single cleanup choice. Earlier preparedness and handling conditions matter, but their associations with final behavior are largely mediated. At the moment of disposal, knowledge is linked to compliance quality, while access, convenience, concern, and available support shape where debris can end up.

That distinction gives emergency managers a more useful question than “Why did residents dump debris illegally?” It asks: **At which stage did the path toward compliant disposal break down—and was the missing piece knowledge, access, support, or credible alternatives?**


<section class="dbr-section dbr-game-section" aria-labelledby="dbr-game-title">
  <div class="dbr-heading">
    <p class="dbr-kicker">Behavior sandbox</p>
    <h3 id="dbr-game-title">Watch a neighborhood respond</h3>
    <p>Change the conditions and watch the residents redistribute among authorized disposal, curbside or locally contingent placement, and clearly unauthorized off-site placement.</p>
  </div>
  <div class="dbr-figure dbr-game">
    <div class="dbr-game-controls">
      <label for="dbr-game-knowledge">Disposal knowledge <strong><span data-dbr-game-value="knowledge">65</span>%</strong></label>
      <input id="dbr-game-knowledge" type="range" min="0" max="100" value="65" data-dbr-game-control="knowledge">
      <label for="dbr-game-access">Access to authorized options <strong><span data-dbr-game-value="access">55</span>%</strong></label>
      <input id="dbr-game-access" type="range" min="0" max="100" value="55" data-dbr-game-control="access">
      <label for="dbr-game-delay">Collection delay <strong><span data-dbr-game-value="delay">7</span> days</strong></label>
      <input id="dbr-game-delay" type="range" min="0" max="21" value="7" data-dbr-game-control="delay">
    </div>
    <div class="dbr-game-board">
      <svg viewBox="0 0 760 430" role="img" aria-labelledby="dbr-game-map-title dbr-game-map-desc">
        <title id="dbr-game-map-title">Illustrative neighborhood debris-disposal behavior</title>
        <desc id="dbr-game-map-desc">Small resident characters move from homes to an authorized site, curbside placement, or an off-site location as conditions change.</desc>
        <defs>
          <pattern id="dbr-grid" width="36" height="19" patternUnits="userSpaceOnUse" patternTransform="skewY(28)"><path d="M36 0H0V19" fill="none"></path></pattern>
          <filter id="dbr-shadow" x="-30%" y="-30%" width="160%" height="180%"><feDropShadow dx="0" dy="5" stdDeviation="4" flood-opacity=".18"></feDropShadow></filter>
        </defs>
        <polygon class="dbr-game-ground" points="380,15 745,210 380,405 15,210"></polygon>
        <polygon class="dbr-game-grid" points="380,15 745,210 380,405 15,210"></polygon>
        <g class="dbr-game-roads">
          <polygon points="236,96 551,264 515,284 200,116"></polygon>
          <polygon points="524,96 560,116 245,284 209,264"></polygon>
        </g>
        <g class="dbr-game-homes" filter="url(#dbr-shadow)">
          <g class="house house-a">
            <polygon class="foundation" points="97,160 139,183 181,160 181,168 139,191 97,168"></polygon>
            <polygon class="wall-left" points="99,114 139,136 139,184 99,162"></polygon><polygon class="wall-right" points="179,114 139,136 139,184 179,162"></polygon>
            <polygon class="roof-left" points="94,115 139,89 139,137 94,161"></polygon><polygon class="roof-right" points="139,89 184,115 139,137"></polygon><path class="roof-edge" d="M94 115 L139 141 L184 115"></path>
            <polygon class="chimney-front" points="119,94 127,98 127,111 119,107"></polygon><polygon class="chimney-side" points="127,98 133,95 133,108 127,111"></polygon><polygon class="chimney-top" points="119,94 125,91 133,95 127,98"></polygon>
            <path class="door" d="M150 151 L166 142 V170 L150 179 Z"></path><path class="window" d="M108 137 L123 145 V158 L108 150 Z M151 141 L168 132 V144 L151 153 Z"></path>
          </g>
          <g class="house house-b">
            <polygon class="foundation" points="174,204 216,227 258,204 258,212 216,235 174,212"></polygon>
            <polygon class="wall-left" points="176,158 216,180 216,228 176,206"></polygon><polygon class="wall-right" points="256,158 216,180 216,228 256,206"></polygon>
            <polygon class="roof-left" points="171,159 216,133 216,181 171,205"></polygon><polygon class="roof-right" points="216,133 261,159 216,181"></polygon><path class="roof-edge" d="M171 159 L216 185 L261 159"></path>
            <path class="door" d="M227 195 L243 186 V214 L227 223 Z"></path><path class="window" d="M184 181 L200 190 V202 L184 194 Z M228 184 L246 174 V187 L228 197 Z"></path>
          </g>
          <text x="143" y="239">NEIGHBORHOOD</text>
          <g class="debris" transform="translate(106 188)"><polygon points="0,10 18,0 38,11 20,22"></polygon><path d="M7 9 L26 19 M17 4 L32 13"></path></g>
        </g>
        <g class="dbr-game-site dbr-game-site-legal" filter="url(#dbr-shadow)">
          <polygon class="platform" points="493,92 610,31 713,87 596,149"></polygon>
          <polygon class="building-top" points="536,79 589,51 651,84 598,112"></polygon><polygon class="building-left" points="536,79 598,112 598,145 536,112"></polygon><polygon class="building-right" points="651,84 598,112 598,145 651,117"></polygon>
          <text x="603" y="74">AUTHORIZED SITE</text><text class="count" x="610" y="190" data-dbr-game-count="legal">0 residents</text>
        </g>
        <g class="dbr-game-site dbr-game-site-curb">
          <polygon class="platform" points="221,302 342,238 440,291 319,355"></polygon>
          <g class="bins"><path d="M285 291 L307 279 L329 291 L307 303 Z M307 303 V329 M285 291 V317 L307 329 L329 317 V291"></path><path d="M344 278 L366 266 L388 278 L366 290 Z M366 290 V316 M344 278 V304 L366 316 L388 304 V278"></path></g>
          <text x="330" y="378">CURBSIDE / CONTEXTUAL</text><text class="count" x="330" y="396" data-dbr-game-count="curb">0 residents</text>
        </g>
        <g class="dbr-game-site dbr-game-site-offsite">
          <polygon class="platform" points="493,307 614,243 716,298 595,362"></polygon>
          <g class="scrap"><polygon points="549,302 577,287 607,303 579,318"></polygon><path d="M551 299 L593 316 M568 289 L606 309 M620 292 L659 313 M634 284 L675 306"></path></g>
          <text x="610" y="378">UNAUTHORIZED OFF-SITE</text><text class="count" x="610" y="396" data-dbr-game-count="offsite">0 residents</text>
        </g>
        <g data-dbr-game-people></g>
      </svg>
      <div class="dbr-game-legend" aria-hidden="true"><span class="legal">Authorized</span><span class="curb">Context-dependent</span><span class="offsite">Unauthorized off-site</span></div>
    </div>
    <p class="dbr-game-status" data-dbr-game-status aria-live="polite"></p>
  </div>
  <p class="dbr-caption">Figure 5. This is a qualitative teaching game, not a fitted agent-based model or forecast. It translates the study’s supported directional relationships into an illustrative neighborhood scene; the character counts are not estimated population shares.</p>
</section>

</div>

<script defer src="/js/debris-behavior-research.js"></script>

### Research manuscript

**Mohammad Movahedi, Navid Nickdoost, and Juyeong Choi.** “Uncovering Community Debris Disposal Behaviors During Post-Disaster Recovery: A Case Study of Illegal Dumping After Hurricane Ian.” manuscript has been accepted and is currently in press.

<pre class="llmp-bibtex"><code>@article{Movahedi2026NHR,
    author = {Movahedi, Mohammad and Nickdoost, Navid and Choi, Juyeong},
    journal = {Natural Hazards Review},
    publisher = {American Society of Civil Engineers},
    title = {{Uncovering Community Debris Disposal Behaviors During Post-Disaster Recovery: A Case Study of Illegal Dumping After Hurricane Ian}},
    year = {2026}
}</code></pre>


