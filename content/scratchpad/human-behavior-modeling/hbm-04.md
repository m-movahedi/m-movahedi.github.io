---
title : "HBM 04: Theory of Planned Behavior"
date : "2026-06-06"
draft : false
type : "post"
---

A city government introduces a congestion pricing scheme and a subsidized transit pass to encourage commuters to switch from driving to public transit. Awareness is high. The transit system is well-rated. Surveys show that many commuters have a positive view of transit. Yet after a year, mode shift is modest. Some people switched. Most did not. Why?

The KAP framework from the previous post could document this gap: knowledge is high, attitudes are favorable, but practice has barely changed. But KAP cannot explain *why* the gap persists. It has no mechanism for social pressure, no construct for perceived difficulty, and no concept of behavioral intention.

The Theory of Planned Behavior (TPB) was designed to fill that explanatory gap. It is one of the most widely used and empirically tested models in the social and behavioral sciences, and it has been applied extensively to transportation behaviors including mode choice, speeding, seat belt use, cycling, electric vehicle adoption, and distracted driving.

## Why This Matters

Transportation behaviors are not random. People have reasons for what they do — even when those reasons are incomplete, biased, or constrained. Understanding those reasons is essential for designing policies and interventions that work.

TPB matters because it offers a structured, testable explanation of *why* people intend to do something and whether that intention translates into action. It moves beyond awareness and attitudes to include **social influence** (what do other people think?) and **perceived control** (can I actually do this?). These additions make TPB significantly more powerful than simple attitude-behavior models.

In transportation research, TPB has been used to study:

- Why some commuters intend to switch to transit and others do not
- Why safety knowledge does not always produce safe driving behavior
- Why attitudes toward cycling do not always translate into cycling behavior
- Why EV purchase intentions differ from actual purchases
- Why evacuation intentions diverge from evacuation behavior

<div class="hbm-note">
  <p><strong>Core contribution:</strong> TPB adds two critical constructs to the attitude-behavior relationship: <em>subjective norms</em> (social pressure) and <em>perceived behavioral control</em> (perceived difficulty or ease). Together with attitude, these three factors determine intention — which is the immediate precursor to behavior.</p>
</div>

## Model Explanation

The Theory of Planned Behavior, proposed by Icek Ajzen in 1985 and formalized in 1991, states that behavior is primarily determined by **behavioral intention**, which is in turn determined by three factors:

1. **Attitude toward the behavior** — the person's positive or negative evaluation of performing the behavior.
2. **Subjective norms** — the person's perception of social pressure to perform or not perform the behavior.
3. **Perceived behavioral control (PBC)** — the person's perception of how easy or difficult it is to perform the behavior.

Intention captures the motivational factors that influence behavior: how hard a person is willing to try, and how much effort they plan to exert. The stronger the intention, the more likely the behavior — but only if the person has sufficient actual control over the behavior.

PBC also has a direct path to behavior, bypassing intention. This reflects the reality that even with strong motivation, some behaviors cannot be performed without adequate resources, opportunities, or skills. A commuter may strongly intend to take the bus but cannot do so if no bus route serves their origin-destination pair.

## Core Constructs

<div class="hbm-construct-row">
  <span class="hbm-construct">Attitude</span>
  <span class="hbm-construct">Subjective Norms</span>
  <span class="hbm-construct">Perceived Behavioral Control</span>
  <span class="hbm-construct">Intention</span>
  <span class="hbm-construct">Behavior</span>
</div>

<div class="hbm-grid">
  <div class="hbm-card">
    <strong>Attitude toward the behavior</strong>
    <p>The overall evaluation of performing the behavior. Includes both <em>instrumental</em> attitude (Is it useful? Efficient? Beneficial?) and <em>affective</em> attitude (Is it pleasant? Enjoyable? Stressful?).</p>
  </div>
  <div class="hbm-card">
    <strong>Subjective norms</strong>
    <p>The perceived social pressure to perform or not perform the behavior. Includes <em>injunctive norms</em> (what do important others think I should do?) and <em>descriptive norms</em> (what do important others actually do?).</p>
  </div>
  <div class="hbm-card">
    <strong>Perceived behavioral control</strong>
    <p>The perceived ease or difficulty of performing the behavior. Reflects past experience, anticipated obstacles, resources, and self-efficacy. Closely related to Bandura's concept of self-efficacy.</p>
  </div>
</div>

<div class="hbm-two-col">
  <div class="hbm-panel">
    <strong>Intention</strong>
    <p>The motivational state that precedes behavior. Intention captures how hard a person is willing to try. It is the central mediating variable in TPB: all three predictors influence behavior primarily through intention.</p>
  </div>
  <div class="hbm-panel">
    <strong>Behavior</strong>
    <p>The observable action of interest. In TPB, behavior is defined by its target, action, context, and time (TACT). For example: "using public transit (action) for commuting (target) in the next month (time) in this city (context)."</p>
  </div>
</div>

## Causal Logic

The causal structure of TPB can be represented as a path diagram:

<div class="hbm-flow">
  <div class="hbm-card">
    <strong>Attitude</strong>
    <p>Positive/negative evaluation of the behavior.</p>
  </div>
  <div class="hbm-arrow">→</div>
  <div class="hbm-card" style="grid-column: span 1;">
    <strong>Intention</strong>
    <p>Motivation and plan to perform the behavior.</p>
  </div>
  <div class="hbm-arrow">→</div>
  <div class="hbm-card">
    <strong>Behavior</strong>
    <p>The observable action.</p>
  </div>
</div>

<div class="hbm-math">
  <p><strong>TPB structural equations:</strong></p>
  <p><code>Intention = β₁(Attitude) + β₂(Subjective Norms) + β₃(PBC) + ε₁</code></p>
  <p><code>Behavior = β₄(Intention) + β₅(PBC) + ε₂</code></p>
  <p>The β coefficients represent the relative weight of each predictor. These weights vary across behaviors, populations, and contexts — which is why empirical testing is essential. The direct path from PBC to behavior reflects the constraint that some behaviors require more than good intentions.</p>
</div>

<hbm-tpb-widget></hbm-tpb-widget>

The key causal claims of TPB are:

1. Attitude, subjective norms, and PBC each independently contribute to intention.
2. Intention is the strongest predictor of behavior.
3. PBC can directly affect behavior when actual control is imperfect.
4. The relative weights of the three predictors vary by behavior and context.

<div class="hbm-note">
  <p><strong>Critical distinction:</strong> TPB is a model of <em>deliberate, intentional behavior</em>. It assumes that people think about their actions, weigh the pros and cons, consider social pressures, assess their ability, and form an intention. This assumption works well for planned decisions (choosing a commuting mode) but poorly for automatic, habitual behaviors (driving on the same route every day without thinking).</p>
</div>

## Data Needed

TPB studies require structured survey data with well-designed measurement scales for each construct.

<div class="hbm-grid">
  <div class="hbm-card">
    <strong>Likert-scale surveys</strong>
    <p>Multiple items per construct. Typically 3–7 items each for attitude, subjective norms, PBC, and intention. Behaviors are measured as self-reported frequency or binary choice.</p>
  </div>
  <div class="hbm-card">
    <strong>Semantic differential scales</strong>
    <p>For attitudes: bad/good, harmful/beneficial, unpleasant/pleasant, useless/useful.</p>
  </div>
  <div class="hbm-card">
    <strong>Stated preference data</strong>
    <p>Hypothetical scenarios to measure how people would respond under different conditions. Useful when the behavior of interest is not yet available.</p>
  </div>
</div>

<div class="hbm-code">Sample TPB survey items: Intention to use public transit

ATTITUDE
A1. Using public transit for my daily commute would be:
    Extremely bad ○ ○ ○ ○ ○ ○ ○ Extremely good
A2. Using public transit for my daily commute would be:
    Extremely unpleasant ○ ○ ○ ○ ○ ○ ○ Extremely pleasant
A3. Using public transit for my daily commute would be:
    Extremely useless ○ ○ ○ ○ ○ ○ ○ Extremely useful

SUBJECTIVE NORMS
SN1. Most people who are important to me think I should use public transit.
     (Strongly disagree → Strongly agree)
SN2. Most of my coworkers use public transit for commuting.
     (Strongly disagree → Strongly agree)
SN3. My family expects me to use public transit when possible.
     (Strongly disagree → Strongly agree)

PERCEIVED BEHAVIORAL CONTROL
PBC1. I am confident that I could use public transit for my daily commute if I wanted to.
      (Strongly disagree → Strongly agree)
PBC2. Whether or not I use public transit for commuting is entirely up to me.
      (Strongly disagree → Strongly agree)
PBC3. There are factors outside my control that would prevent me from using public transit.
      (Strongly disagree → Strongly agree) [reverse-scored]

INTENTION
I1. I intend to use public transit for my daily commute in the next month.
    (Strongly disagree → Strongly agree)
I2. I plan to use public transit for my daily commute in the next month.
    (Strongly disagree → Strongly agree)
I3. I will make an effort to use public transit for my daily commute in the next month.
    (Strongly disagree → Strongly agree)</div>

## Methods

TPB is typically analyzed using:

- **Multiple regression:** Regress intention on attitude, subjective norms, and PBC. Then regress behavior on intention and PBC.
- **Structural equation modeling (SEM):** Test the full path model simultaneously, including measurement models for latent constructs and structural paths between them.
- **Path analysis:** A simplified form of SEM that tests the causal paths without latent variables.
- **Confirmatory factor analysis (CFA):** Validate the measurement model before testing structural relationships.

<div class="hbm-two-col">
  <div class="hbm-panel">
    <strong>Multiple regression</strong>
    <p>Simpler. Tests each path separately. Easier to interpret. Adequate for most applied research.</p>
  </div>
  <div class="hbm-panel">
    <strong>Structural equation modeling</strong>
    <p>More rigorous. Tests all paths simultaneously. Accounts for measurement error. Provides model fit statistics. Preferred for journal publications.</p>
  </div>
</div>

SEM is the gold standard for TPB analysis because it allows simultaneous estimation of the measurement model (how well items measure constructs) and the structural model (how constructs relate to each other). Model fit indices (CFI, RMSEA, SRMR) indicate whether the hypothesized structure fits the observed data.

## Transportation Example: Intention to Use Public Transit

A researcher studies commuters in a mid-sized city to understand what predicts the intention to switch from driving to public transit. Using a TPB questionnaire administered to 800 car commuters, the analysis proceeds through SEM.

<div class="hbm-panel">
  <strong>Hypothetical SEM results: TPB model for transit use intention</strong>
  <div class="hbm-mini-chart">
    <div class="hbm-bar-row"><span>Attitude → Intention</span><div class="hbm-bar"><span style="width: 42%;"></span></div><span>β = 0.42</span></div>
    <div class="hbm-bar-row"><span>Norms → Intention</span><div class="hbm-bar"><span style="width: 19%;"></span></div><span>β = 0.19</span></div>
    <div class="hbm-bar-row"><span>PBC → Intention</span><div class="hbm-bar"><span style="width: 35%;"></span></div><span>β = 0.35</span></div>
    <div class="hbm-bar-row"><span>Intention → Behavior</span><div class="hbm-bar"><span style="width: 51%;"></span></div><span>β = 0.51</span></div>
    <div class="hbm-bar-row"><span>PBC → Behavior</span><div class="hbm-bar"><span style="width: 22%;"></span></div><span>β = 0.22</span></div>
  </div>
  <p class="hbm-small">All paths significant at p < 0.01. Model fit: CFI = 0.94, RMSEA = 0.052, SRMR = 0.048. R² for intention = 0.58; R² for behavior = 0.41.</p>
</div>

The results suggest:

1. **Attitude is the strongest predictor of intention** (β = 0.42). Commuters who evaluate transit positively (useful, pleasant, beneficial) are more likely to intend to use it.
2. **PBC is the second strongest predictor** (β = 0.35). Commuters who feel that using transit is feasible — who have nearby stops, manageable schedules, and confidence in navigating the system — are more likely to intend to switch.
3. **Subjective norms are significant but weaker** (β = 0.19). Social pressure matters, but less than personal evaluation and perceived control.
4. **Intention predicts behavior but imperfectly** (β = 0.51). About half of the variance in behavior is explained by intention — but nearly half is not. This is the intention–behavior gap.
5. **PBC has a direct effect on behavior** (β = 0.22). Even controlling for intention, perceived control matters. Commuters who intended to switch but had low PBC were less likely to actually do it.

<div class="hbm-note">
  <p><strong>Policy implication:</strong> this result pattern suggests that improving attitudes toward transit (through service quality, comfort, and image) and increasing perceived behavioral control (through better access, simpler fare systems, and trip planning tools) would be more effective than social pressure campaigns alone.</p>
</div>

## Strengths

<div class="hbm-grid">
  <div class="hbm-card">
    <strong>Testable and falsifiable</strong>
    <p>TPB makes specific, measurable predictions. Each construct can be operationalized, and the hypothesized paths can be tested with standard statistical methods.</p>
  </div>
  <div class="hbm-card">
    <strong>Widely validated</strong>
    <p>TPB has been tested in hundreds of studies across diverse behaviors and populations. Meta-analyses consistently find that attitude, norms, and PBC predict intention, and that intention predicts behavior.</p>
  </div>
  <div class="hbm-card">
    <strong>Clear measurement model</strong>
    <p>Each construct has established measurement guidelines. Survey instruments are well-developed and can be adapted to many behaviors.</p>
  </div>
  <div class="hbm-card">
    <strong>Connects intention to behavior</strong>
    <p>The intention construct is valuable because it captures motivation before the behavior occurs. This allows prospective prediction rather than only retrospective explanation.</p>
  </div>
  <div class="hbm-card">
    <strong>Identifies intervention targets</strong>
    <p>By showing which constructs most strongly predict intention, TPB helps prioritize interventions. If PBC is the bottleneck, improving access matters more than changing attitudes.</p>
  </div>
  <div class="hbm-card">
    <strong>Flexible application</strong>
    <p>TPB has been applied to dozens of transportation behaviors: mode choice, speeding, distracted driving, cycling, EV adoption, parking, and evacuation.</p>
  </div>
</div>

## Limitations

<div class="hbm-grid">
  <div class="hbm-card">
    <strong>Assumes rational deliberation</strong>
    <p>TPB assumes that behavior follows from reasoned intention. It does not account for impulsive, emotional, or automatic behavior. Habitual driving, for example, is not well captured.</p>
  </div>
  <div class="hbm-card">
    <strong>Weak on habit</strong>
    <p>Past behavior is consistently found to be a strong predictor of future behavior, even after controlling for TPB constructs. TPB does not include habit or automaticity.</p>
  </div>
  <div class="hbm-card">
    <strong>Intention–behavior gap</strong>
    <p>TPB explains intention better than it explains behavior. The gap between intending to act and actually acting is large for many transportation behaviors.</p>
  </div>
  <div class="hbm-card">
    <strong>Limited role for context</strong>
    <p>Built environment, service quality, infrastructure availability, and institutional constraints are not directly modeled. They enter only through PBC, which is a perceptual measure, not an objective one.</p>
  </div>
  <div class="hbm-card">
    <strong>No moral or emotional constructs</strong>
    <p>TPB does not include moral norms, personal values, environmental concern, or emotional reactions. Extensions like the Norm Activation Model and Value-Belief-Norm Theory were developed partly to address this.</p>
  </div>
  <div class="hbm-card">
    <strong>Static model</strong>
    <p>TPB is typically applied cross-sectionally. It does not model how attitudes, norms, and PBC change over time, or how feedback from behavior changes future intentions.</p>
  </div>
</div>

## Best Use Case

TPB is best used when:

- The behavior is **deliberate and planned** — choosing a commuting mode, deciding to purchase an EV, planning to cycle to work.
- The research question is about **why intention forms** — what predicts whether someone plans to perform a specific behavior.
- The study design is **survey-based** — with well-defined constructs and standardized measurement scales.
- The goal is **identifying intervention targets** — determining whether attitude, norms, or perceived control is the most important lever for behavior change.
- The researcher needs a **well-established theoretical framework** with extensive validation and published measurement instruments.

TPB is less appropriate for habitual, automatic, or emotionally driven behaviors; for understanding system-level dynamics; or for contexts where objective constraints (not perceptions) are the primary barriers.

## Key Takeaway

<div class="hbm-note">
  <p>The Theory of Planned Behavior explains intention through three forces: what you think about the behavior (attitude), what others expect (subjective norms), and whether you believe you can do it (perceived behavioral control). It is the bridge between "I know" and "I plan to" — but the bridge from "I plan to" to "I actually do" remains imperfect.</p>
</div>

<div class="hbm-papers">
  <strong>Key References</strong>
  <ul>
    <li><a href="https://doi.org/10.1016/0749-5978(91)90020-T">Ajzen, I. (1991), "The Theory of Planned Behavior," Organizational Behavior and Human Decision Processes, 50(2), 179–211</a>: the foundational paper that formalized TPB and its constructs.</li>
    <li><a href="https://doi.org/10.1111/j.2044-8309.2001.tb00574.x">Armitage, C. J. & Conner, M. (2001), "Efficacy of the Theory of Planned Behaviour: A Meta-Analytic Review," British Journal of Social Psychology, 40(4), 471–499</a>: a comprehensive meta-analysis of 185 studies showing the predictive validity of TPB constructs.</li>
    <li><a href="https://doi.org/10.1016/S0272-4944(03)00023-4">Bamberg, S. & Schmidt, P. (2003), "Incentives, Morality, Or Habit? Predicting Students' Car Use for University Routes," Environment and Behavior, 35(2), 264–282</a>: applies TPB to car use with an extension for habit and moral norms.</li>
    <li><a href="https://doi.org/10.1016/j.tra.2006.02.005">Bamberg, S., Ajzen, I. & Schmidt, P. (2003), "Choice of Travel Mode in the Theory of Planned Behavior: The Roles of Past Behavior, Habit, and Reasoned Action," Basic and Applied Social Psychology, 25(3), 175–187</a>: an important study comparing reasoned action and habitual behavior in travel mode choice.</li>
    <li><a href="https://doi.org/10.1016/j.trd.2014.10.003">Donald, I. J., Cooper, S. R., & Conchie, S. M. (2014), "An Extended Theory of Planned Behaviour Model of the Psychological Factors Affecting Commuters' Transport Mode Use," Journal of Environmental Psychology, 40, 39–48</a>: demonstrates TPB extensions for commuter behavior including moral obligation and environmental concern.</li>
  </ul>
</div>

<div class="hbm-exercises">
  <strong>Exercises and Discussion Questions</strong>
  <ol>
    <li>Design a TPB questionnaire for studying the intention to cycle to work. Write two items each for attitude, subjective norms, PBC, and intention. Specify the response scale for each item. Then identify one limitation of your measurement approach.</li>
    <li>A TPB study of speeding behavior finds that attitude and PBC strongly predict intention, but subjective norms do not. What might explain the weak effect of norms? Does this mean social influence is unimportant for speeding, or that the model is measuring the wrong kind of social influence?</li>
    <li>The intention–behavior gap is one of TPB's most discussed limitations. For the behavior of switching from car commuting to public transit, list three specific factors that might cause someone to intend to switch but fail to actually do so. Which of these factors is captured by TPB, and which requires a different model?</li>
  </ol>
</div>

In the next post, we bring KAP and TPB together for a direct comparison. By applying both models to the same behavior, the distinction between descriptive and explanatory approaches becomes clear — and we can see what each model reveals and what each model misses.
