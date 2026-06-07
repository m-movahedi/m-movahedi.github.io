---
title : "HBM 05: KAP vs. TPB — Description vs. Explanation"
date : "2026-06-06"
draft : false
type : "post"
---

A city planner is studying why more people do not cycle to work despite new bike lanes, a bike-share program, and a public awareness campaign. Two research approaches are available. One uses a KAP survey to assess what people know about cycling infrastructure, how they feel about cycling, and whether they cycle. The other uses a TPB questionnaire to measure attitudes, social norms, perceived behavioral control, and intention to cycle.

Both approaches will produce useful findings. But they will answer fundamentally different questions. The KAP survey will describe the current state: what do people know and do? The TPB study will explain why some people intend to cycle and others do not. This distinction — between **description** and **explanation** — is one of the most important concepts in behavior modeling.

This post applies both models to the same behavior and compares what each reveals, what each misses, and when each should be used.

## The Core Distinction

<div class="hbm-two-col">
  <div class="hbm-panel">
    <strong>Descriptive models</strong>
    <p>Answer: <em>What do people know, believe, and do?</em></p>
    <p>Goal: Document the current state. Identify gaps and patterns. Provide baseline data.</p>
    <p>Causal claims: Minimal. Associations and frequencies, not mechanisms.</p>
    <p>Representative model: KAP</p>
  </div>
  <div class="hbm-panel">
    <strong>Explanatory models</strong>
    <p>Answer: <em>Why do people intend to act, and what predicts that intention?</em></p>
    <p>Goal: Identify the mechanisms that produce behavior. Test causal hypotheses.</p>
    <p>Causal claims: Explicit. Specified paths from constructs to intention to behavior.</p>
    <p>Representative model: TPB</p>
  </div>
</div>

This is not a ranking. Descriptive models are not "worse" than explanatory models. They serve different purposes at different stages of research and practice. A transit agency conducting its first rider survey does not need structural equation modeling. A researcher testing whether social norms influence cycling intentions does not need a frequency table of awareness levels.

The mistake is using a descriptive model when an explanatory question is being asked — or expecting an explanatory model to provide the simple baselines that a descriptive model delivers efficiently.

<div class="hbm-note">
  <p><strong>Key principle:</strong> KAP tells you <em>what</em> is happening. TPB tries to tell you <em>why</em> it is happening. Neither tells you <em>how to change it</em> — that requires intervention models like COM-B (Post 20).</p>
</div>

## Side-by-Side Comparison

The following table compares KAP and TPB across the dimensions that matter for applied research and practice.

| Dimension | KAP | TPB |
|---|---|---|
| **Purpose** | Describe what people know, feel, and do | Explain why people form behavioral intentions |
| **Core constructs** | Knowledge, Attitude, Practice | Attitude, Subjective Norms, PBC, Intention, Behavior |
| **Causal logic** | K → A → P (implicit, linear, assumed) | Attitude + SN + PBC → Intention → Behavior (explicit, testable) |
| **Type of model** | Descriptive assessment | Explanatory theory |
| **Typical data** | Cross-sectional survey, factual & opinion items | Likert-scale survey, semantic differential scales |
| **Methods** | Frequencies, cross-tabs, chi-square, gap analysis | Multiple regression, SEM, path analysis, CFA |
| **Norms** | Not included | Central construct (subjective norms) |
| **Control/efficacy** | Not included | Central construct (PBC) |
| **Intention** | Not included | Central mediating variable |
| **Habit** | Not included | Not included |
| **Context/environment** | Not included | Indirectly through PBC |
| **Moral norms** | Not included | Not included (requires extensions) |
| **Best use** | Baseline assessment, needs analysis, awareness tracking | Explaining intention, identifying predictors, policy evaluation |
| **Main limitation** | Cannot explain gaps | Assumes rational deliberation |

<div class="hbm-note">
  <p><strong>Notice:</strong> both models miss habit, moral norms, and direct environmental constraints. These are addressed by later models in the series: Habit Theory (Post 18), Norm Activation Model (Post 12), Social Practice Theory (Post 14), and COM-B (Post 20).</p>
</div>

<hbm-kap-tpb-compare-widget></hbm-kap-tpb-compare-widget>

## Worked Example: Cycling to Work

To make the comparison concrete, consider a study of cycling behavior among employees at a large corporate campus. The campus is located in a mid-sized city with a new protected bike lane network, a bike-share program, end-of-trip facilities (showers and lockers), and a corporate wellness program that encourages active transportation.

Despite these investments, cycling mode share is only 6%. The organization wants to understand why.

### What KAP Reveals

A KAP survey is administered to 500 employees. The results:

<div class="hbm-panel">
  <strong>KAP survey results: Cycling to work</strong>
</div>

<div class="hbm-code">KNOWLEDGE
K1. "Are you aware of the protected bike lanes near the campus?"
    Yes: 72%  |  No: 21%  |  Not sure: 7%

K2. "Do you know the campus has showers and lockers for cyclists?"
    Yes: 44%  |  No: 48%  |  Not sure: 8%

K3. "Are you aware of the city's bike-share program?"
    Yes: 81%  |  No: 15%  |  Not sure: 4%

K4. "Do you know the typical cycling time from the nearest transit hub to campus?"
    Correct (within 5 min): 23%  |  Incorrect or don't know: 77%

KNOWLEDGE SCORE: Average 55% correct</div>

<div class="hbm-panel">
  <strong>Attitude results</strong>
  <div class="hbm-mini-chart">
    <div class="hbm-bar-row"><span>Health benefit</span><div class="hbm-bar"><span style="width: 82%;"></span></div><span>82%</span></div>
    <div class="hbm-bar-row"><span>Environ. benefit</span><div class="hbm-bar"><span style="width: 78%;"></span></div><span>78%</span></div>
    <div class="hbm-bar-row"><span>Enjoyable</span><div class="hbm-bar"><span style="width: 45%;"></span></div><span>45%</span></div>
    <div class="hbm-bar-row"><span>Convenient</span><div class="hbm-bar"><span style="width: 28%;"></span></div><span>28%</span></div>
    <div class="hbm-bar-row"><span>Safe</span><div class="hbm-bar"><span style="width: 34%;"></span></div><span>34%</span></div>
  </div>
  <p class="hbm-small">Percent agreeing or strongly agreeing with each statement.</p>
</div>

<div class="hbm-code">PRACTICE
P1. "How often do you cycle to work?"
    Never: 71%  |  Rarely (< 1/month): 14%  |  Sometimes (1-3/month): 9%  |  Regularly (1+/week): 6%

P2. "Have you used the bike-share program?"
    Yes: 11%  |  No: 89%

P3. "Have you used the campus showers/lockers for cycling?"
    Yes: 5%  |  No: 95%</div>

**KAP gap analysis:**

<div class="hbm-grid">
  <div class="hbm-card">
    <strong>K–P gap</strong>
    <p>Knowledge is moderate (55%) but practice is very low (6% regular). Even among those with high knowledge scores, most do not cycle.</p>
  </div>
  <div class="hbm-card">
    <strong>A–P gap</strong>
    <p>Most employees believe cycling is healthy (82%) and environmentally beneficial (78%), but only 6% cycle regularly. The gap between positive attitudes and practice is enormous.</p>
  </div>
  <div class="hbm-card">
    <strong>Information gap</strong>
    <p>Only 44% know about showers and lockers. Only 23% know the cycling time. These gaps suggest a communication opportunity.</p>
  </div>
</div>

**What KAP tells the organization:**

- Knowledge about some facilities is low — better communication may help.
- Attitudes are positive on health and environment but negative on convenience and safety.
- The massive A–P gap suggests that positive attitudes are not enough to produce cycling behavior.

**What KAP cannot tell the organization:**

- Why the attitude–practice gap exists.
- Whether social norms, perceived difficulty, or other factors are preventing cycling.
- Which employees are most likely to change and what would move them.
- Whether intention to cycle exists but fails to translate into action.

### What TPB Reveals

A TPB questionnaire is administered to the same 500 employees. The analysis uses structural equation modeling.

<div class="hbm-panel">
  <strong>TPB model results: Cycling to work</strong>
  <div class="hbm-mini-chart">
    <div class="hbm-bar-row"><span>Attitude → Intent</span><div class="hbm-bar"><span style="width: 38%;"></span></div><span>β = 0.38</span></div>
    <div class="hbm-bar-row"><span>Norms → Intent</span><div class="hbm-bar"><span style="width: 24%;"></span></div><span>β = 0.24</span></div>
    <div class="hbm-bar-row"><span>PBC → Intent</span><div class="hbm-bar"><span style="width: 41%;"></span></div><span>β = 0.41</span></div>
    <div class="hbm-bar-row"><span>Intent → Behavior</span><div class="hbm-bar"><span style="width: 47%;"></span></div><span>β = 0.47</span></div>
    <div class="hbm-bar-row"><span>PBC → Behavior</span><div class="hbm-bar"><span style="width: 25%;"></span></div><span>β = 0.25</span></div>
  </div>
  <p class="hbm-small">All paths significant at p < 0.01. R² for intention = 0.54; R² for behavior = 0.38.</p>
</div>

**What TPB tells the organization:**

<div class="hbm-grid">
  <div class="hbm-card">
    <strong>PBC is the strongest predictor of intention</strong>
    <p>Perceived behavioral control (β = 0.41) is the most important factor. Many employees feel they <em>cannot</em> easily cycle to work — due to distance, weather, cargo needs, childcare logistics, or lack of confidence.</p>
  </div>
  <div class="hbm-card">
    <strong>Attitude matters but is not enough</strong>
    <p>Attitude (β = 0.38) is significant, confirming that positive views of cycling contribute to intention. But the KAP results already showed positive attitudes — the problem is not attitude alone.</p>
  </div>
  <div class="hbm-card">
    <strong>Social norms play a role</strong>
    <p>Subjective norms (β = 0.24) are significant. Employees are more likely to intend to cycle when they believe coworkers support or practice cycling.</p>
  </div>
  <div class="hbm-card">
    <strong>PBC also directly affects behavior</strong>
    <p>Even employees who intend to cycle may not do it if they perceive low control (β = 0.25). This suggests that practical barriers are blocking even motivated individuals.</p>
  </div>
  <div class="hbm-card">
    <strong>Intention does not fully predict behavior</strong>
    <p>The intention–behavior gap (R² = 0.38 for behavior) means that factors beyond intention matter. Habit, weather, and daily logistics may explain the gap.</p>
  </div>
  <div class="hbm-card">
    <strong>Intervention priority: reduce barriers</strong>
    <p>The results suggest that the most effective interventions would increase PBC — making cycling easier, more accessible, and more practical.</p>
  </div>
</div>

**What TPB cannot tell the organization:**

- What specific physical barriers exist (distance, hills, infrastructure gaps). PBC is perceptual, not objective.
- Whether habit and automaticity are keeping people in their car commute.
- Whether moral norms, environmental values, or identity play a role.
- How to design a concrete intervention program.

## What Each Model Misses

<div class="hbm-two-col">
  <div class="hbm-panel">
    <strong>What KAP misses</strong>
    <p><strong>Social norms.</strong> KAP does not measure whether peers cycle or approve of cycling.</p>
    <p><strong>Perceived control.</strong> KAP does not assess whether people feel they <em>can</em> cycle, only whether they <em>do</em>.</p>
    <p><strong>Intention.</strong> KAP does not distinguish between people who plan to cycle and those who have never considered it.</p>
    <p><strong>Causal structure.</strong> KAP cannot explain why knowledge and positive attitudes fail to produce behavior.</p>
  </div>
  <div class="hbm-panel">
    <strong>What TPB misses</strong>
    <p><strong>Baseline knowledge.</strong> TPB does not assess whether people know about available infrastructure, programs, or routes.</p>
    <p><strong>Habit.</strong> TPB does not account for the automatic, non-deliberative nature of established commuting routines.</p>
    <p><strong>Objective context.</strong> TPB captures perceived control but not objective barriers like distance, topography, weather, or infrastructure quality.</p>
    <p><strong>Moral norms.</strong> TPB does not include personal values, environmental concern, or moral obligation.</p>
  </div>
</div>

## Combining Both Models

The most informative approach is often to combine both. A KAP survey provides the baseline: what do people know and do? A TPB analysis provides the explanation: what predicts intention and where do the barriers lie?

<div class="hbm-flow">
  <div class="hbm-card">
    <strong>Step 1: KAP</strong>
    <p>Assess baseline knowledge, attitudes, and current practice.</p>
  </div>
  <div class="hbm-card">
    <strong>Step 2: Gap analysis</strong>
    <p>Identify where discrepancies exist between K, A, and P.</p>
  </div>
  <div class="hbm-card">
    <strong>Step 3: TPB</strong>
    <p>Explain why gaps persist using norms, PBC, and intention.</p>
  </div>
  <div class="hbm-card">
    <strong>Step 4: Targets</strong>
    <p>Identify the strongest predictors of intention as intervention targets.</p>
  </div>
  <div class="hbm-card">
    <strong>Step 5: Design</strong>
    <p>Use intervention models (COM-B, BCW) to design specific strategies.</p>
  </div>
</div>

In the cycling example, KAP revealed that knowledge about end-of-trip facilities was low and that attitudes were favorable. TPB revealed that PBC was the strongest predictor and that social norms mattered. Together, the two analyses suggest:

1. **Improve communication** about showers, lockers, and cycling times (addressing the knowledge gap identified by KAP).
2. **Reduce practical barriers** — provide secure parking, flexible scheduling, and route planning tools (addressing the PBC finding from TPB).
3. **Make cycling visible** — cycling buddy programs, team challenges, visible role models (addressing the subjective norms finding from TPB).

Neither model alone would have produced this complete picture.

## The Descriptive–Explanatory Lens

The distinction between descriptive and explanatory models is not unique to KAP and TPB. It is a lens that applies across the entire series.

<div class="hbm-three-col">
  <div class="hbm-panel">
    <strong>Descriptive</strong>
    <p>What do people know, believe, and do?</p>
    <p>Models: KAP</p>
    <p>Methods: surveys, frequencies, cross-tabs</p>
    <p>Use: baselines, needs assessment</p>
  </div>
  <div class="hbm-panel">
    <strong>Explanatory</strong>
    <p>Why do people intend, avoid, or act?</p>
    <p>Models: TPB, HBM, PMT, SCT, SDT, NAM, VBN</p>
    <p>Methods: SEM, regression, path analysis</p>
    <p>Use: understanding mechanisms, identifying predictors</p>
  </div>
  <div class="hbm-panel">
    <strong>Predictive</strong>
    <p>Which option will people choose?</p>
    <p>Models: DCM, Prospect Theory, ML</p>
    <p>Methods: choice modeling, machine learning</p>
    <p>Use: forecasting, demand modeling</p>
  </div>
</div>

As the series progresses, additional types will appear: **diagnostic models** that identify what must change (COM-B, TDF), and **simulation models** that scale individual behaviors to system outcomes (ABM, system dynamics). Each type answers a different question.

The skill of behavior modeling is not just knowing the models. It is knowing which type of question is being asked — and choosing the model that matches.

## When to Use Each Model

<div class="hbm-two-col">
  <div class="hbm-panel">
    <strong>Use KAP when:</strong>
    <p>• Starting a new project and need baseline data</p>
    <p>• Conducting a needs assessment for a campaign or program</p>
    <p>• Evaluating awareness before and after an information campaign</p>
    <p>• Resources are limited and a rapid assessment is needed</p>
    <p>• The behavior is new and knowledge gaps may be the primary barrier</p>
  </div>
  <div class="hbm-panel">
    <strong>Use TPB when:</strong>
    <p>• The behavior is intentional and planned</p>
    <p>• The research question is about <em>why</em> intention forms</p>
    <p>• Social influence and perceived difficulty may matter</p>
    <p>• The goal is to identify which constructs to target for behavior change</p>
    <p>• A survey with established measurement scales is feasible</p>
  </div>
</div>

<div class="hbm-note">
  <p><strong>Neither model is sufficient alone for intervention design.</strong> KAP identifies gaps but not mechanisms. TPB identifies mechanisms but not intervention strategies. For intervention design, diagnostic models like COM-B and the Behaviour Change Wheel (Posts 20–21) are needed.</p>
</div>

## Looking Ahead: Beyond KAP and TPB

Both KAP and TPB share important blind spots. Neither includes:

- **Habit and automaticity** — the role of past behavior and contextual cues in triggering behavior without deliberation.
- **Moral norms and values** — the sense of personal obligation, environmental concern, or ethical commitment.
- **Emotion and affect** — fear, anxiety, pride, guilt, and their role in behavior.
- **Objective environmental constraints** — infrastructure quality, land use, service availability, cost structures.
- **Social practice** — the bundles of materials, competences, and meanings that make behaviors feel normal or abnormal.
- **System dynamics** — feedback loops, delays, and emergent outcomes at the system level.

The rest of the series addresses these blind spots one by one. The Health Belief Model and Protection Motivation Theory (Posts 6–7) bring in threat perception and coping appraisal. Social Cognitive Theory (Post 9) emphasizes self-efficacy and observational learning. The Norm Activation Model and VBN Theory (Posts 12–13) incorporate moral norms and values. Habit Theory and Dual-Process Models (Posts 18–19) address automaticity. COM-B (Post 20) diagnoses capability, opportunity, and motivation. Agent-based models and system dynamics (Posts 24–26) scale individual behaviors to system outcomes.

Each model adds something that the previous models missed. The series is designed so that, by the end, readers can match the right model to the right question.

## Key Takeaway

<div class="hbm-note">
  <p>KAP tells you what people know and do. TPB tells you why they intend to act. Both are valuable. Neither is complete. The distinction between describing behavior and explaining behavior is the most fundamental choice in behavior modeling — and the first question to ask before selecting any framework.</p>
</div>

<div class="hbm-papers">
  <strong>Key References</strong>
  <ul>
    <li><a href="https://doi.org/10.1016/0749-5978(91)90020-T">Ajzen, I. (1991), "The Theory of Planned Behavior," Organizational Behavior and Human Decision Processes, 50(2), 179–211</a>: the foundational TPB paper.</li>
    <li><a href="https://doi.org/10.1111/j.1365-3156.2009.02264.x">Launiala, A. (2009), "How Much Can a KAP Survey Tell Us About People's Knowledge, Attitudes and Practices?"</a>: the key critical review of KAP methodology and limitations.</li>
    <li><a href="https://doi.org/10.1111/j.2044-8309.2001.tb00574.x">Armitage, C. J. & Conner, M. (2001), "Efficacy of the Theory of Planned Behaviour: A Meta-Analytic Review"</a>: meta-analysis showing TPB's predictive validity across 185 studies.</li>
    <li><a href="https://doi.org/10.1016/j.trd.2011.04.001">Lanzini, P. & Khan, S. A. (2017), "Shedding Light on the Psychological and Behavioral Determinants of Travel Mode Choice: A Meta-Analysis," Transportation Research Part F, 48, 13–27</a>: a meta-analysis comparing TPB and extended models in predicting travel mode choice.</li>
    <li><a href="https://doi.org/10.1016/j.trf.2015.04.013">Heinen, E., van Wee, B. & Maat, K. (2010), "Commuter Cycling: An Overview of the Literature," Transport Reviews, 30(1), 59–96</a>: a comprehensive review of factors influencing cycling behavior, showing where KAP and TPB each contribute and where they fall short.</li>
  </ul>
</div>

<div class="hbm-exercises">
  <strong>Exercises and Discussion Questions</strong>
  <ol>
    <li><strong>Apply both models to one behavior.</strong> Choose a transportation behavior (e.g., using a ride-share service, wearing a bicycle helmet, driving an electric vehicle). First, design a 6-item KAP mini-survey (2K, 2A, 2P items). Then, write 2 TPB items each for attitude, subjective norms, and PBC. Compare: what does each set of items reveal? What does each set miss?</li>
    <li><strong>Diagnose the gap.</strong> A KAP study on pedestrian safety finds that 90% of respondents know they should use crosswalks, 85% have a positive attitude toward crosswalk use, but observational data shows only 55% actually use crosswalks when one is available nearby. Using TPB constructs, propose at least two explanations for this gap that KAP cannot provide.</li>
    <li><strong>Design a two-phase study.</strong> You are advising a transit agency that wants to increase ridership among suburban commuters. Describe a two-phase research design where Phase 1 uses KAP and Phase 2 uses TPB. What would you learn from each phase? How would the Phase 1 results inform your Phase 2 questionnaire design?</li>
  </ol>
</div>

With the descriptive–explanatory distinction established, the series now moves into more specialized territory. The next set of posts (Part 2: Risk, Safety, and Protective Behavior) introduces the Health Belief Model, Protection Motivation Theory, the Transtheoretical Model, and Social Cognitive Theory — models designed for understanding how people perceive and respond to threats like crashes, disasters, and health risks.
