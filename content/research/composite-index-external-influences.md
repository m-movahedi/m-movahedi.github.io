---
title: "A Composite Index Framework for Quantifying External Influences on Built Environment Planning and Decision Making"
date: "2026-08-21"
draft: false
type: "post"
description: "An interactive explanation of a hierarchy-aligned composite index for monitoring external pressures on infrastructure and diagnosing planning needs."
tags:
  - "Infrastructure Planning"
  - "Composite Index"
  - "Transportation Planning"
  - "Causal Inference"
  - "Dynamic Factor Analysis"
  - "Decision Support"
  - "Deep Uncertainty"
journal: "Journal of Management in Engineering"
---

<link rel="stylesheet" href="/css/composite-index-research.css">

<div id="cif-post">

<section class="cif-hero" aria-labelledby="cif-hero-title">
  <p class="cif-eyebrow">Interactive research explainer</p>
  <h2 id="cif-hero-title">Infrastructure does not change in isolation.</h2>
  <p class="cif-lede">Population, employment, economic cycles, extreme weather, technology, and policy all reshape what infrastructure must deliver. Our framework turns those scattered external signals into an updateable, traceable planning index—without hiding where the signal came from.</p>
  <div class="cif-hero-stats" aria-label="Case study at a glance">
    <div class="cif-stat"><strong>98</strong><span>candidate external factors</span></div>
    <div class="cif-stat"><strong>6</strong><span>transportation modes</span></div>
    <div class="cif-stat"><strong>4</strong><span>latent dimensions per mode</span></div>
    <div class="cif-stat"><strong>2005–21</strong><span>Florida study period</span></div>
  </div>
</section>

Traditional plans often monitor indicators one at a time or depend on static forecasts. That makes it difficult to see a slow shift forming across many datasets—or to explain why a statewide signal changed. The problem is not simply “too much data.” It is that the data arrive at different frequencies, operate with delays, interact across domains, and matter at different levels of the infrastructure hierarchy.

Our study proposes a **hierarchy-aligned composite index (CI)** for continuous monitoring and adaptive planning. It screens for influential external drivers, extracts their shared time-varying trends, and aggregates them from individual factors to dimensions, modes, systems, and the statewide level. A parallel **performance index (PI)** describes the supply side: how the system is actually performing.

<section class="cif-section" aria-labelledby="cif-method-title">
  <div class="cif-section-heading">
    <p class="cif-eyebrow">From data to decision signal</p>
    <h3 id="cif-method-title">A six-stage, traceable workflow</h3>
    <p>Select a stage to see what the framework does and what it passes forward.</p>
  </div>
  <div class="cif-figure">
    <div class="cif-figure-toolbar">
      <span class="cif-figure-label">Method explorer</span>
      <div class="cif-step-tabs" aria-label="Composite index development stages">
        <button class="cif-tab" type="button" data-cif-step="0" aria-pressed="true">1 · Define</button>
        <button class="cif-tab" type="button" data-cif-step="1" aria-pressed="false">2 · Align</button>
        <button class="cif-tab" type="button" data-cif-step="2" aria-pressed="false">3 · Screen</button>
        <button class="cif-tab" type="button" data-cif-step="3" aria-pressed="false">4 · Extract</button>
        <button class="cif-tab" type="button" data-cif-step="4" aria-pressed="false">5 · Aggregate</button>
        <button class="cif-tab" type="button" data-cif-step="5" aria-pressed="false">6 · Diagnose</button>
      </div>
    </div>
    <div class="cif-process-body">
      <div class="cif-process-copy" aria-live="polite">
        <p class="cif-eyebrow" data-cif-process-kicker></p>
        <h4 data-cif-process-title></h4>
        <p data-cif-process-body></p>
        <div class="cif-process-output" data-cif-process-output></div>
      </div>
      <div class="cif-process-map" aria-hidden="true">
        <svg viewBox="0 0 520 250">
          <defs>
            <marker id="cif-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor" opacity=".55"></path>
            </marker>
          </defs>
          <path class="cif-connector" d="M145 55 H190"></path>
          <path class="cif-connector" d="M330 55 H375"></path>
          <path class="cif-connector" d="M445 85 V126"></path>
          <path class="cif-connector" d="M375 160 H330"></path>
          <path class="cif-connector" d="M190 160 H145"></path>
          <g class="cif-stage" data-cif-stage="0"><rect x="10" y="25" width="135" height="60" rx="12"></rect><text x="77.5" y="51" text-anchor="middle">External factors</text><text x="77.5" y="68" text-anchor="middle">+ performance</text></g>
          <g class="cif-stage" data-cif-stage="1"><rect x="190" y="25" width="140" height="60" rx="12"></rect><text x="260" y="51" text-anchor="middle">Clean, align,</text><text x="260" y="68" text-anchor="middle">direction-code</text></g>
          <g class="cif-stage" data-cif-stage="2"><rect x="375" y="25" width="135" height="60" rx="12"></rect><text x="442.5" y="51" text-anchor="middle">Causal + lead–lag</text><text x="442.5" y="68" text-anchor="middle">screening</text></g>
          <g class="cif-stage" data-cif-stage="3"><rect x="375" y="130" width="135" height="60" rx="12"></rect><text x="442.5" y="156" text-anchor="middle">Dynamic factor</text><text x="442.5" y="173" text-anchor="middle">analysis</text></g>
          <g class="cif-stage" data-cif-stage="4"><rect x="190" y="130" width="140" height="60" rx="12"></rect><text x="260" y="156" text-anchor="middle">Weight + aggregate</text><text x="260" y="173" text-anchor="middle">through hierarchy</text></g>
          <g class="cif-stage" data-cif-stage="5"><rect x="10" y="130" width="135" height="60" rx="12"></rect><text x="77.5" y="156" text-anchor="middle">CI ↔ PI diagnosis</text><text x="77.5" y="173" text-anchor="middle">+ robustness</text></g>
          <text x="260" y="229" text-anchor="middle" fill="currentColor" opacity=".55" font-size="11">New observations can update the monitoring loop</text>
        </svg>
      </div>
    </div>
  </div>
  <p class="cif-caption">Interactive Figure 1. The framework reduces complexity while preserving a route back from the aggregate signal to its contributing indicators.</p>
</section>

### Why causal screening and dynamic factor analysis?

Correlation alone can mistake indirect relationships for direct ones when indicators are interdependent and autocorrelated. We therefore combine three complementary screens: **PCMCI** for higher-frequency conditional relationships, **Granger causality** for annual series, and **lagged cross-correlation** as a supporting lead–lag screen. The goal is a defensible shortlist—not a claim that every pathway is permanently causal under every future condition.

Dynamic factor analysis then asks a different question: *which selected indicators are moving together over time?* It extracts latent common trends and supplies data-driven loadings. For Florida’s auto mode, those trends were interpreted as economic conditions, state employment, national employment, and vehicle miles traveled. The same four-dimension structure was adopted across all six modes based on model fit.

<section class="cif-section" aria-labelledby="cif-hierarchy-title">
  <div class="cif-section-heading">
    <p class="cif-eyebrow">One signal, many resolutions</p>
    <h3 id="cif-hierarchy-title">Drill from the state to the drivers</h3>
    <p>Choose a transportation mode to see how the case study preserves mode-specific sensitivities inside a common planning hierarchy.</p>
  </div>
  <div class="cif-figure">
    <div class="cif-figure-toolbar">
      <span class="cif-figure-label">Hierarchy explorer</span>
      <div class="cif-mode-list" aria-label="Transportation modes">
        <button type="button" class="cif-mode" data-cif-mode="auto" aria-pressed="true">Auto</button>
        <button type="button" class="cif-mode" data-cif-mode="transit" aria-pressed="false">Transit</button>
        <button type="button" class="cif-mode" data-cif-mode="active" aria-pressed="false">Pedestrian & bike</button>
        <button type="button" class="cif-mode" data-cif-mode="rail" aria-pressed="false">Rail</button>
        <button type="button" class="cif-mode" data-cif-mode="aviation" aria-pressed="false">Aviation</button>
        <button type="button" class="cif-mode" data-cif-mode="seaport" aria-pressed="false">Seaport</button>
      </div>
    </div>
    <div class="cif-hierarchy-body">
      <div class="cif-hierarchy-map">
        <div class="cif-level">
          <div class="cif-level-label">State level · δ</div>
          <div class="cif-system is-active">Florida transportation</div>
        </div>
        <div class="cif-level">
          <div class="cif-level-label">System level · γ</div>
          <div class="cif-system-row">
            <div class="cif-system is-active" data-cif-system="ground">Ground</div>
            <div class="cif-system" data-cif-system="air">Air</div>
            <div class="cif-system" data-cif-system="water">Water</div>
          </div>
        </div>
        <div class="cif-level">
          <div class="cif-level-label">Mode level · β</div>
          <div class="cif-system">Six independently modeled modes</div>
        </div>
        <div class="cif-level">
          <div class="cif-level-label">Dimension + factor level · α</div>
          <div class="cif-system">Latent trends → weighted external factors</div>
        </div>
      </div>
      <div class="cif-detail" aria-live="polite">
        <p class="cif-eyebrow">Selected mode</p>
        <h4 data-cif-detail-name>Auto</h4>
        <p class="cif-breadcrumb" data-cif-detail-path></p>
        <p data-cif-detail-intro></p>
        <div class="cif-dimension-list" data-cif-dimensions></div>
        <p class="cif-figure-label">Representative influential factors</p>
        <div class="cif-factor-list" data-cif-factors></div>
      </div>
    </div>
  </div>
  <p class="cif-caption">Interactive Figure 2. Bar lengths are a visual organizing device, not reported index weights. Mode summaries reflect the study’s qualitative interpretation of the selected factors.</p>
</section>

This hierarchical design changes what a composite index can do. A statewide rise is not the end of the analysis. Planners can move down to the system and mode responsible, inspect the latent dimension that shifted, and finally identify the external indicators contributing to that movement. In other words, the index communicates **where and when** to look; the hierarchy helps explain **what and why**.

<section class="cif-section" aria-labelledby="cif-demand-title">
  <div class="cif-section-heading">
    <p class="cif-eyebrow">Demand meets performance</p>
    <h3 id="cif-demand-title">Read CI and PI together</h3>
    <p>Explore three qualitative patterns. CI represents external-factor-driven planning need; PI represents observed system performance.</p>
  </div>
  <div class="cif-figure">
    <div class="cif-figure-toolbar">
      <span class="cif-figure-label">Diagnostic pattern explorer</span>
      <div class="cif-scenario-tabs" aria-label="Index relationship scenarios">
        <button type="button" class="cif-tab" data-cif-scenario="aligned" aria-pressed="false">Co-movement</button>
        <button type="button" class="cif-tab" data-cif-scenario="growth" aria-pressed="false">Growing pace gap</button>
        <button type="button" class="cif-tab" data-cif-scenario="shock" aria-pressed="true">Shock & recovery</button>
      </div>
    </div>
    <div class="cif-chart-wrap">
      <svg viewBox="0 0 540 250" role="img" aria-labelledby="cif-chart-title cif-chart-desc">
        <title id="cif-chart-title">Illustrative comparison of composite and performance index patterns</title>
        <desc id="cif-chart-desc">Two direction-aligned lines show how planning need and performance may move together, diverge in pace, or recover differently after a disruption.</desc>
        <g class="cif-chart-grid">
          <line x1="62" y1="62" x2="492" y2="62"></line>
          <line x1="62" y1="102" x2="492" y2="102"></line>
          <line x1="62" y1="142" x2="492" y2="142"></line>
          <line x1="62" y1="182" x2="492" y2="182"></line>
        </g>
        <rect class="cif-event-band" data-cif-event-band x="278" y="42" width="72" height="180"></rect>
        <line class="cif-chart-axis" x1="62" y1="222" x2="492" y2="222"></line>
        <line class="cif-chart-axis" x1="62" y1="42" x2="62" y2="222"></line>
        <g class="cif-chart-labels">
          <text x="62" y="240">Earlier</text><text x="492" y="240" text-anchor="end">Later</text>
          <text transform="translate(18 170) rotate(-90)">Direction-aligned index</text>
        </g>
        <polyline class="cif-line-ci" data-cif-line-ci points=""></polyline>
        <polyline class="cif-line-pi" data-cif-line-pi points=""></polyline>
      </svg>
      <div class="cif-legend" aria-hidden="true"><span class="ci">CI · planning need</span><span class="pi">PI · performance</span></div>
    </div>
    <div class="cif-diagnostic" aria-live="polite">
      <div><span class="cif-figure-label">What to notice</span><strong data-cif-diagnostic-title></strong></div>
      <p data-cif-diagnostic-body></p>
    </div>
  </div>
  <p class="cif-caption">Interactive Figure 3. Schematic patterns explain the diagnostic logic and do not reproduce the paper’s numerical time series. Because CI and PI are normalized independently, a gap between the lines is a heuristic signal—not a formal measure of unmet need.</p>
</section>

### What Florida revealed

The statewide index rose gradually from 2005 through 2021, interrupted by two clear declines. The 2008 financial crisis produced a slower, extended recovery. The COVID-19 disruption was sharper but shorter: the CI returned to its pre-pandemic level by the end of 2021. The hierarchy showed that oscillation in the statewide signal was driven especially by aviation and pedestrian-and-bicycle modes.

For auto transportation, all four latent dimensions declined during the pandemic. Tracing the signal downward identified simultaneous changes in GDP, Florida GDP, the economic condition index, national and state employment, unemployment measures, and vehicle miles traveled. That trace is the practical value of the framework: it moves the conversation from “the index dropped” to a specific diagnosis of the conditions behind the change.

From 2012 to 2019, CI rose faster than PI. After the 2020 shock, CI also rebounded faster than PI. These are not estimates of a precise capacity shortfall. They are prompts for planners to investigate whether performance is improving at the pace suggested by its external drivers and, after disruption, what operational or policy conditions may be slowing recovery.

<div class="cif-evidence-grid" aria-label="Validation and robustness evidence">
  <div class="cif-evidence-card"><strong>500</strong><p>Monte Carlo realizations propagated uncertainty in the dynamic-factor loadings through the aggregation pipeline.</p></div>
  <div class="cif-evidence-card"><strong>~1.9%</strong><p>Median width of the state-level 95% confidence band relative to the index value.</p></div>
  <div class="cif-evidence-card"><strong>32</strong><p>Combinations of imputation, disaggregation, and normalization were used to test preprocessing robustness.</p></div>
</div>

The preprocessing variants formed different absolute levels depending on normalization, but preserved the same trajectory, turning points, 2008–2009 decline, 2020 disruption, and post-2020 recovery. In two demonstration sessions, six FDOT planners and managers across trends and mobility, seaport, and transit offices also found the hierarchy interpretable and identified uses in long-term transit planning, seaport project funding, and cross-modal budget allocation.

<div class="cif-limit">
  <strong>A monitoring instrument, not a crystal ball.</strong>
  The framework detects shifts as they emerge and supports diagnosis. It does not forecast future trajectories, quantify a formal supply–demand gap, or model every nonlinear interaction among transportation modes. Its usefulness also depends on the availability and quality of public data.
</div>

### The broader idea

Composite indices are often treated as endpoints: one number designed for a dashboard. Our framework treats the index as an **entry point into structured inquiry**. Its hierarchy matches the way infrastructure is governed; its causal screening connects external conditions to observed outcomes; its latent dimensions reveal common movement; and its parallel CI–PI view helps planners decide where a deeper investigation is warranted.

That combination makes abundant information smaller **without making it opaque**—a useful foundation for continuous monitoring and adaptive infrastructure planning under deep uncertainty.

### Citation

This research was published in the [ASCE Journal of Management in Engineering](https://doi.org/10.1061/JMENEA.MEENG-7710).

    @article{Nickdoost2026CompositeIndex,
    author  = {Nickdoost, Navid and Movahedi, Mohammad and Sun, Yanshuo and Smith, Dennis and Choi, Juyeong},
    title   = {A Composite Index Framework for Quantifying External Influences on Built Environment Planning and Decision Making},
    journal = {Journal of Management in Engineering},
    volume  = {42},
    number  = {6},
    pages   = {04026052},
    year    = {2026},
    doi     = {10.1061/JMENEA.MEENG-7710}
    }


<script defer src="/js/composite-index-research.js"></script>
