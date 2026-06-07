---
title : "HBM 15: Discrete Choice Models"
date : "2026-06-06"
draft : false
type : "post"
---

Every day, millions of people face a deceptively simple question: how should I get there? Drive alone, carpool, take the bus, ride a bike, walk, call a ride-hailing service — each option comes with different travel times, costs, comfort levels, and reliability. A transit agency considering a new rail line, a city evaluating congestion pricing, or a planner designing a bike-share system all need to answer a deeper question: if we change the attributes of these options, how many people will switch?

Discrete choice models provide the most rigorous and widely used framework for answering that question. They are the workhorse of transportation demand analysis, and they connect individual decision-making to system-level forecasting in a way that few other behavioral models can match.

## Why Discrete Choices Matter

Transportation planning depends on predicting how people distribute themselves across alternatives. A new bus rapid transit line changes travel times. A toll changes costs. A protected bike lane changes safety perceptions. Each change shifts the relative attractiveness of options, and planners need quantitative tools to estimate those shifts before investing billions of dollars.

Discrete choice models translate the psychology of choosing into mathematics. They allow analysts to estimate how much each attribute matters, simulate demand under new scenarios, compute willingness-to-pay measures, and evaluate the welfare effects of policy changes. Without them, transportation planning would rely on trend extrapolation and expert judgment — useful, but insufficient for the complex trade-offs that modern infrastructure decisions require.

<div class="hbm-note">
  <p><strong>Core intuition:</strong> a discrete choice model assumes that people choose the option they perceive as best. The model's job is to represent "best" as a function of measurable attributes and unobservable individual variation.</p>
</div>

## The Model: Random Utility Maximization

The foundation of discrete choice modeling is **random utility maximization (RUM)**. The core idea is straightforward: each person assigns a utility to every available alternative, and then chooses the one with the highest utility. The word "random" reflects the analyst's perspective — not the decision-maker's. Because the analyst cannot observe everything that matters to a person, part of the utility is treated as random.

Formally, the utility that individual *n* assigns to alternative *i* is decomposed into two parts:

<div class="hbm-math">
  <p><strong>The utility equation:</strong></p>
  <p><code>U_in = V_in + ε_in</code></p>
  <p>V_in is the <strong>systematic utility</strong> — the part the analyst can observe and model, typically as a linear function of attributes (travel time, cost, number of transfers, etc.) and individual characteristics (income, car ownership, etc.). ε_in is the <strong>random component</strong> — everything the analyst cannot observe: mood, weather sensitivity, personal taste, measurement error, or missing variables. The distributional assumption placed on ε determines the specific model form.</p>
</div>

The person chooses alternative *i* over alternative *j* whenever U_in > U_jn for all j ≠ i. Because ε is random, the model produces choice **probabilities** rather than deterministic predictions.

## Core Constructs

<div class="hbm-construct-row">
  <span class="hbm-construct">Alternatives</span>
  <span class="hbm-construct">Attributes</span>
  <span class="hbm-construct">Systematic Utility</span>
  <span class="hbm-construct">Random Utility</span>
  <span class="hbm-construct">Choice Probabilities</span>
  <span class="hbm-construct">Heterogeneity</span>
  <span class="hbm-construct">Choice Sets</span>
</div>

<div class="hbm-grid">
  <div class="hbm-card">
    <strong>Alternatives</strong>
    <p>The discrete options available to the decision-maker. In mode choice: drive, transit, bike, walk. In route choice: highway, arterial, local streets. Alternatives must be mutually exclusive and collectively exhaustive.</p>
  </div>
  <div class="hbm-card">
    <strong>Attributes</strong>
    <p>Measurable characteristics of each alternative: travel time, monetary cost, waiting time, number of transfers, reliability, comfort, safety. Also includes characteristics of the decision-maker: income, age, car ownership, distance to transit.</p>
  </div>
  <div class="hbm-card">
    <strong>Choice Sets</strong>
    <p>The set of alternatives actually available to a specific individual. Not everyone has access to transit, owns a car, or lives within biking distance. Choice set specification is a modeling decision with real consequences.</p>
  </div>
</div>

<div class="hbm-grid">
  <div class="hbm-card">
    <strong>Systematic Utility (V)</strong>
    <p>The observable, deterministic component. Usually specified as a linear-in-parameters function: V = β₁·time + β₂·cost + β₃·transfers + ... The β coefficients are estimated from data.</p>
  </div>
  <div class="hbm-card">
    <strong>Random Component (ε)</strong>
    <p>Captures everything the analyst cannot measure. Its distributional assumption drives the model type: independent Gumbel errors give multinomial logit; correlated errors give nested or mixed logit.</p>
  </div>
  <div class="hbm-card">
    <strong>Heterogeneity</strong>
    <p>People differ in how they value attributes. Some are time-sensitive, others cost-sensitive. Advanced models capture this through random parameters (mixed logit) or latent segments (latent class models).</p>
  </div>
</div>

## Causal Logic

The causal chain in discrete choice models is deceptively linear but analytically powerful:

<div class="hbm-flow" role="img" aria-label="Discrete choice causal flow">
  <div class="hbm-card">
    <strong>Attributes</strong>
    <p>Time, cost, reliability, comfort of each option.</p>
  </div>
  <div class="hbm-card">
    <strong>Utility</strong>
    <p>Each alternative receives a utility score.</p>
  </div>
  <div class="hbm-card">
    <strong>Comparison</strong>
    <p>The individual compares utilities across alternatives.</p>
  </div>
  <div class="hbm-card">
    <strong>Choice</strong>
    <p>The highest-utility alternative is selected.</p>
  </div>
  <div class="hbm-card">
    <strong>Demand</strong>
    <p>Aggregated choices produce market shares and flows.</p>
  </div>
</div>

The key assumption is **compensatory evaluation**: all attributes trade off against each other through the utility function. A longer travel time can be compensated by a lower cost. A less comfortable mode can be compensated by greater reliability. This is both a strength (it enables welfare analysis and willingness-to-pay computation) and a limitation (real people sometimes use non-compensatory rules, such as eliminating any option that requires more than two transfers).

## Model Variants

### Multinomial Logit (MNL)

The simplest and most widely used form. It assumes that the random errors ε are independently and identically distributed (IID) with a Type I extreme value (Gumbel) distribution. This yields a closed-form probability expression:

<div class="hbm-math">
  <p><strong>MNL choice probability:</strong></p>
  <p><code>P(i|n) = exp(V_in) / Σⱼ exp(V_jn)</code></p>
  <p>The probability that person n chooses alternative i equals the exponential of i's systematic utility divided by the sum of exponentials across all alternatives j in the choice set. This is the softmax function — familiar from machine learning but derived here from behavioral axioms.</p>
</div>

MNL is elegant and computationally simple, but it imposes the **independence of irrelevant alternatives (IIA)** property: the ratio of choice probabilities between any two alternatives is independent of the attributes of other alternatives. This can produce unrealistic substitution patterns.

<div class="hbm-note">
  <p><strong>The red bus / blue bus problem:</strong> if a city has two modes — car (50%) and red bus (50%) — and introduces a blue bus identical to the red bus, MNL predicts each gets 33%. The realistic answer is that the blue bus should steal mostly from the red bus (car stays near 50%). IIA prevents MNL from capturing this.</p>
</div>

### Nested Logit

Nested logit relaxes IIA by grouping similar alternatives into **nests**. Alternatives within a nest can be correlated (they share unobserved factors), while alternatives in different nests remain independent. For mode choice, one might nest bus and rail together under "transit," while car and ride-hailing form a "private vehicle" nest.

### Mixed Logit (Random Parameters Logit)

Mixed logit is the most flexible standard model. It allows coefficients to vary across individuals according to a specified distribution — for example, the coefficient on travel time might be normally distributed across the population, reflecting the fact that some people are much more time-sensitive than others. This captures **taste heterogeneity** and eliminates the IIA restriction.

<div class="hbm-two-col">
  <div class="hbm-panel">
    <strong>Mixed Logit Advantages</strong>
    <p>Flexible substitution patterns.</p>
    <p>Captures preference heterogeneity.</p>
    <p>Can approximate any random utility model.</p>
    <p>Allows correlation across alternatives.</p>
  </div>
  <div class="hbm-panel">
    <strong>Mixed Logit Costs</strong>
    <p>Requires simulation-based estimation.</p>
    <p>Distributional assumptions matter.</p>
    <p>Computationally intensive.</p>
    <p>Harder to interpret than MNL.</p>
  </div>
</div>

### Latent Class Models

Latent class models assume that the population consists of a finite number of unobserved **segments** (classes), each with its own set of preference parameters. A price-sensitive class might have a large cost coefficient and small time coefficient, while a time-sensitive class shows the reverse. The model simultaneously estimates class membership probabilities and within-class choice parameters.

## Data Needed

Discrete choice models require data on choices and the attributes of available alternatives. Two major data paradigms exist:

<div class="hbm-two-col">
  <div class="hbm-panel">
    <strong>Revealed Preference (RP)</strong>
    <p>Observes actual choices made in real markets. Travel diaries, transit smart card data, GPS traces, traffic counts.</p>
    <p><em>Strength:</em> reflects real behavior.</p>
    <p><em>Weakness:</em> limited attribute variation; alternatives not chosen are hard to characterize; confounding.</p>
  </div>
  <div class="hbm-panel">
    <strong>Stated Preference (SP)</strong>
    <p>Presents hypothetical choice scenarios designed by the analyst. Respondents choose among carefully constructed alternatives.</p>
    <p><em>Strength:</em> full experimental control; can test alternatives that do not yet exist (e.g., autonomous transit).</p>
    <p><em>Weakness:</em> hypothetical bias; respondents may not behave as they say.</p>
  </div>
</div>

Many modern studies combine RP and SP data to leverage the strengths of both — real-world validity from RP and experimental variation from SP. Travel diaries, household surveys, GPS-based travel logs, and transit smart card records are all common data sources.

<div class="hbm-code">
Example SP choice scenario:

Option A: Bus
  Travel time: 35 minutes
  Cost: $2.50
  Frequency: every 15 minutes

Option B: Drive
  Travel time: 20 minutes
  Cost: $8.00 (parking + fuel)
  Frequency: leave anytime

Option C: Bike
  Travel time: 25 minutes
  Cost: $0.00
  Frequency: leave anytime

Which option would you choose for your daily commute?
</div>

## Methods

<div class="hbm-grid">
  <div class="hbm-card">
    <strong>Maximum Likelihood</strong>
    <p>The standard estimation method for MNL and nested logit. Finds the parameter values that make the observed choices most probable under the model.</p>
  </div>
  <div class="hbm-card">
    <strong>Simulation-Based Estimation</strong>
    <p>Required for mixed logit. Uses draws from the mixing distribution to approximate the choice probability integral. Maximum simulated likelihood is the most common approach.</p>
  </div>
  <div class="hbm-card">
    <strong>Bayesian Estimation</strong>
    <p>Provides full posterior distributions for parameters. Useful when priors are available, sample sizes are small, or individual-level estimates are needed.</p>
  </div>
</div>

Software tools include Biogeme (Python), Apollo (R), mlogit (R), PandasBiogeme, and Stata. For large-scale applications, custom code in Python or Julia is increasingly common.

<hbm-dcm-widget></hbm-dcm-widget>

## Transportation Example: Urban Mode Choice

Consider a mid-size city evaluating three policy interventions: (1) a new light rail line, (2) a congestion toll on downtown driving, and (3) a bike-share expansion. The city needs to forecast how each intervention — and their combinations — would shift mode shares.

A research team collects RP data from a household travel survey (N = 4,000 households, recording all trips over two days) and SP data from a web survey presenting hypothetical scenarios with the proposed rail line, toll levels, and bike-share stations.

<div class="hbm-code">
Utility specification (simplified):

V_car    = ASC_car + β_time·time_car + β_cost·(cost_car / income) + β_park·parking_time
V_transit = β_time·time_transit + β_cost·(cost_transit / income) + β_wait·wait_time + β_transfer·transfers
V_bike   = ASC_bike + β_time·time_bike + β_weather·rain + β_infra·bike_lane
V_walk   = ASC_walk + β_time·time_walk + β_weather·rain
</div>

A mixed logit model with random coefficients on time and cost reveals substantial heterogeneity: high-income commuters are far less cost-sensitive but highly time-sensitive, while lower-income commuters show strong cost sensitivity. The model predicts that the congestion toll shifts about 8% of car commuters to transit, but the light rail line alone — without feeder bus improvements — shifts only 3%, because last-mile access time dominates total transit time for most travelers.

<div class="hbm-bar-row"><span>Car (baseline)</span><div class="hbm-bar"><span style="width: 62%;"></span></div><span>62%</span></div>
<div class="hbm-bar-row"><span>Car (with toll + rail)</span><div class="hbm-bar"><span style="width: 49%;"></span></div><span>49%</span></div>
<div class="hbm-bar-row"><span>Transit (baseline)</span><div class="hbm-bar"><span style="width: 24%;"></span></div><span>24%</span></div>
<div class="hbm-bar-row"><span>Transit (with toll + rail)</span><div class="hbm-bar"><span style="width: 35%;"></span></div><span>35%</span></div>
<div class="hbm-bar-row"><span>Bike (baseline)</span><div class="hbm-bar"><span style="width: 8%;"></span></div><span>8%</span></div>
<div class="hbm-bar-row"><span>Bike (with toll + rail + bike-share)</span><div class="hbm-bar"><span style="width: 11%;"></span></div><span>11%</span></div>

<div class="hbm-small">Illustrative mode share predictions from a mixed logit model.</div>

The model also produces **value of travel time savings (VTTS)** estimates — a critical input for benefit-cost analysis. If the average commuter values time at $18/hour, a rail line that saves 10 minutes per trip generates $3.00 of benefit per trip per rider. Multiplied across riders and years, these numbers justify or reject billion-dollar investments.

## Strengths

<div class="hbm-grid">
  <div class="hbm-card">
    <strong>Theoretically Rigorous</strong>
    <p>Grounded in microeconomic theory with clear behavioral axioms. Each parameter has economic interpretation.</p>
  </div>
  <div class="hbm-card">
    <strong>Policy Evaluation</strong>
    <p>Directly supports scenario testing: what happens if fares drop 20%? If a new route opens? If parking costs triple? The model simulates counterfactuals.</p>
  </div>
  <div class="hbm-card">
    <strong>Welfare Analysis</strong>
    <p>Enables computation of consumer surplus, willingness-to-pay, and value of time — essential for benefit-cost analysis of infrastructure investments.</p>
  </div>
</div>

Additional strengths include statistical testability (likelihood ratio tests, information criteria), scalability to large datasets, compatibility with forecasting systems, and decades of validated applications in transportation, marketing, environmental economics, and health.

## Limitations

<div class="hbm-grid">
  <div class="hbm-card">
    <strong>Compensatory Assumption</strong>
    <p>Assumes all attributes trade off smoothly. Real people sometimes use non-compensatory rules: "I will never take a mode with more than two transfers" or "I refuse to bike in the rain."</p>
  </div>
  <div class="hbm-card">
    <strong>Weak on Habit and Emotion</strong>
    <p>The model treats each choice as a fresh optimization. It cannot capture automaticity, status quo bias, or emotional attachment to car use without additional modeling layers.</p>
  </div>
  <div class="hbm-card">
    <strong>IIA in MNL</strong>
    <p>The basic MNL form imposes unrealistic substitution patterns. More flexible models (nested, mixed) solve this but add complexity.</p>
  </div>
</div>

Other limitations include sensitivity to choice set specification, the assumption that respondents evaluate all alternatives (rather than using consideration sets), and the difficulty of capturing bounded rationality, social influence, or moral considerations within the utility framework.

## Best Use Case

Discrete choice models are the best choice when the research question involves **predicting how people distribute themselves across a finite set of alternatives** in response to measurable attribute changes. They are especially powerful for mode choice, route choice, vehicle type choice, residential location choice, and any context where planners need to forecast demand under policy scenarios that change prices, travel times, or service levels.

<div class="hbm-note">
  <p><strong>Key takeaway:</strong> discrete choice models turn "which option will people choose?" into a quantitative prediction grounded in observable attributes — making them indispensable for transportation policy evaluation, but limited when choices are driven by habit, emotion, or bounded processing rather than attribute trade-offs.</p>
</div>

## Key References

<div class="hbm-papers">
  <strong>Foundational references</strong>
  <ul>
    <li><a href="https://doi.org/10.2307/1914207">McFadden, D. (1974). "Conditional Logit Analysis of Qualitative Choice Behavior." In P. Zarembka (Ed.), Frontiers in Econometrics.</a> The foundational paper that introduced conditional logit for travel mode choice and earned McFadden the Nobel Prize in Economics.</li>
    <li><a href="https://eml.berkeley.edu/books/choice2.html">Train, K. (2009). Discrete Choice Methods with Simulation (2nd ed.). Cambridge University Press.</a> The standard graduate textbook, freely available online. Covers MNL, nested logit, mixed logit, and simulation-based estimation with exceptional clarity.</li>
    <li><a href="https://mitpress.mit.edu/9780262022170/discrete-choice-analysis/">Ben-Akiva, M. & Lerman, S. (1985). Discrete Choice Analysis: Theory and Application to Travel Demand. MIT Press.</a> A classic text that established discrete choice modeling as central to transportation demand analysis.</li>
    <li><a href="https://doi.org/10.1017/CBO9781316136232">Hensher, D., Rose, J., & Greene, W. (2015). Applied Choice Analysis (2nd ed.). Cambridge University Press.</a> A practical guide covering experimental design, data collection, estimation, and interpretation with worked examples.</li>
    <li><a href="https://doi.org/10.1016/j.trb.2004.04.006">Bhat, C. (2003). "Simulation Estimation of Mixed Discrete Choice Models Using Randomized and Scrambled Halton Sequences." Transportation Research Part B, 37(7), 837–855.</a> An influential methodological paper on efficient simulation for mixed logit estimation.</li>
  </ul>
</div>

<div class="hbm-exercises">
  <strong>Exercises and Discussion Questions</strong>
  <ol>
    <li>A city introduces a free bike-share system. Using the MNL probability formula, explain qualitatively how this would change mode shares. Which modes would lose riders, and does MNL's IIA property create any unrealistic predictions in this scenario?</li>
    <li>You are designing a stated preference experiment for a new autonomous shuttle service. What attributes would you include? How many alternatives per choice scenario? How would you ensure sufficient variation to estimate trade-offs between travel time, cost, and perceived safety?</li>
    <li>A colleague argues that discrete choice models cannot capture habitual car use because "people don't actually compare all options every morning." How would you respond? What modeling extensions might address this criticism while staying within the choice modeling framework?</li>
  </ol>
</div>
