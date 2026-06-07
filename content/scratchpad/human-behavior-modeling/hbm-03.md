---
title : "HBM 03: The KAP Framework"
date : "2026-06-06"
draft : false
type : "post"
---

A transit agency launches a new bus rapid transit (BRT) line with dedicated lanes, high-frequency service, and modern stations. Ridership projections are optimistic. After six months, actual ridership is well below target. The agency needs answers: Do people know about the new line? Do they have a favorable view of it? Are they actually using it? And if not — where is the breakdown?

This is the kind of question that the KAP framework was designed to answer.

## Why This Matters

Before explaining why people do or do not use transit, adopt cycling, comply with safety regulations, or evacuate during emergencies, it helps to know the basic facts: what do people actually know, how do they feel, and what are they doing? Without this baseline, more complex models are built on assumptions instead of evidence.

KAP — Knowledge, Attitude, Practice — is the simplest structured approach to gathering this information. It originated in public health in the 1960s as a rapid assessment tool for family planning programs and has since been used in hundreds of domains, from disease prevention to food safety to environmental behavior. In transportation, KAP surveys have been applied to cycling safety, transit perceptions, road safety awareness, electric vehicle knowledge, and pedestrian behavior.

KAP is not a causal theory. It does not explain why people behave the way they do. But it does something valuable: it makes the gap between knowledge, beliefs, and action visible and measurable.

## Model Explanation

The KAP framework assesses three dimensions of a population's relationship with a behavior or issue:

<div class="hbm-flow" style="grid-template-columns: repeat(3, minmax(140px, 1fr));">
  <div class="hbm-card">
    <strong>Knowledge (K)</strong>
    <p>What do people know or believe to be true about a topic? This includes factual knowledge, awareness of services or risks, and understanding of rules or procedures.</p>
  </div>
  <div class="hbm-card">
    <strong>Attitude (A)</strong>
    <p>How do people feel about the topic? This includes opinions, evaluations, perceived importance, willingness, and emotional responses.</p>
  </div>
  <div class="hbm-card">
    <strong>Practice (P)</strong>
    <p>What do people actually do? This includes self-reported behaviors, frequency of action, compliance, and behavioral patterns.</p>
  </div>
</div>

The implicit logic of KAP is linear and sequential:

<div class="hbm-math">
  <p><strong>Assumed causal chain:</strong></p>
  <p><code>Knowledge → Attitude → Practice</code></p>
  <p>People first learn about a topic (K), then form an attitude toward it (A), and then act accordingly (P). This chain is simple, intuitive, and — as the previous post showed — often incomplete.</p>
</div>

The framework does not claim that this chain always works. In practice, KAP is used primarily as a **descriptive assessment tool**: measure K, A, and P separately, then look for gaps. The most informative finding in a KAP study is usually the discrepancy — for example, when knowledge is high but practice is low.

<hbm-kap-survey-widget></hbm-kap-survey-widget>

## Core Constructs

<div class="hbm-construct-row">
  <span class="hbm-construct">Knowledge</span>
  <span class="hbm-construct">Attitude</span>
  <span class="hbm-construct">Practice</span>
</div>

Each construct is measured through survey items, typically using structured questionnaires:

<div class="hbm-three-col">
  <div class="hbm-panel">
    <strong>Knowledge items</strong>
    <p>Factual questions, true/false, multiple choice, awareness checks.</p>
    <p>Example: "Do you know the location of the nearest bus rapid transit station?"</p>
    <p>Example: "What is the maximum legal speed in a school zone?"</p>
    <p>Scored as correct/incorrect or on a knowledge scale.</p>
  </div>
  <div class="hbm-panel">
    <strong>Attitude items</strong>
    <p>Opinion statements, Likert scales, evaluative judgments.</p>
    <p>Example: "Public transit is a convenient way to commute." (Strongly disagree → Strongly agree)</p>
    <p>Example: "Cycling is safe in my neighborhood." (Strongly disagree → Strongly agree)</p>
  </div>
  <div class="hbm-panel">
    <strong>Practice items</strong>
    <p>Self-reported behavior, frequency, recency, compliance checks.</p>
    <p>Example: "How many days per week do you use public transit?"</p>
    <p>Example: "In the past month, how often did you exceed the speed limit?"</p>
  </div>
</div>

## Causal Logic

The causal logic of KAP is its greatest simplicity and its greatest vulnerability.

The assumed chain — Knowledge → Attitude → Practice — implies that:

1. Increasing knowledge will improve attitudes.
2. Improving attitudes will increase desirable practices.
3. Low practice is a downstream consequence of inadequate knowledge or unfavorable attitudes.

<div class="hbm-flow-4">
  <div class="hbm-card">
    <strong>Learn</strong>
    <p>Person acquires knowledge about transit, safety, or risk.</p>
  </div>
  <div class="hbm-card">
    <strong>Evaluate</strong>
    <p>Person forms an attitude based on that knowledge.</p>
  </div>
  <div class="hbm-card">
    <strong>Intend</strong>
    <p>Attitude leads to willingness or intention.</p>
  </div>
  <div class="hbm-card">
    <strong>Act</strong>
    <p>Intention translates into observable behavior.</p>
  </div>
</div>

This chain works reasonably well for new and unfamiliar behaviors — when a person genuinely has no prior knowledge and the behavior is simple to adopt. But for established behaviors like driving, commuting, or risk-taking, the chain breaks down. People may have excellent knowledge and favorable attitudes but still not change their behavior because of habits, constraints, social norms, or system design.

The KAP framework does not include constructs for these intervening factors. It identifies that a gap exists between K, A, and P, but it cannot explain why the gap persists.

## Data Needed

KAP studies rely primarily on **cross-sectional survey data** — a questionnaire administered to a sample of the target population at one point in time.

<div class="hbm-grid">
  <div class="hbm-card">
    <strong>Survey instrument</strong>
    <p>Structured questionnaire with K, A, and P sections. Often 20–50 items.</p>
  </div>
  <div class="hbm-card">
    <strong>Sampling</strong>
    <p>Random, stratified, or convenience sampling of the target population.</p>
  </div>
  <div class="hbm-card">
    <strong>Demographics</strong>
    <p>Age, gender, income, education, household characteristics, location.</p>
  </div>
</div>

KAP surveys are typically inexpensive, fast to deploy, and easy to analyze. They can be administered in person, by phone, online, or through intercept surveys at transit stations, workplaces, or community events.

The data limitations should be noted: KAP relies on self-report, which can be affected by social desirability bias (people overreporting good behaviors and underreporting bad ones). Practice measures are especially vulnerable. A respondent may report wearing a seat belt "always" while actual observational studies show compliance rates far below self-reported levels.

## Methods

KAP analysis is typically straightforward:

<div class="hbm-code">Typical KAP Analysis Pipeline

1. Calculate knowledge scores (% correct answers)
2. Calculate attitude scores (mean Likert ratings)
3. Calculate practice frequencies (% performing behavior)
4. Cross-tabulate K, A, P by demographics
5. Identify K-A gaps, A-P gaps, and K-P gaps
6. Chi-square tests for associations between groups
7. Correlation analysis between K, A, and P scores</div>

Common statistical methods include:

- **Descriptive statistics:** frequencies, percentages, means, standard deviations for each KAP dimension.
- **Gap analysis:** comparing knowledge levels with attitude levels and practice levels to identify where breakdowns occur.
- **Cross-tabulation and chi-square tests:** examining whether KAP levels differ by demographic group.
- **Correlation and simple regression:** testing whether higher knowledge is associated with more favorable attitudes or more frequent practice.

More sophisticated KAP studies may use logistic regression (predicting practice as a function of knowledge and attitude scores) or cluster analysis (identifying population segments with distinct KAP profiles). However, the analytical power of KAP is inherently limited by its lack of a causal mechanism.

## Transportation Example: Public Transit Safety Perceptions

Consider a KAP survey on safety perceptions and use of public transit in a mid-sized city. The transit agency wants to understand whether low ridership is related to safety concerns.

<div class="hbm-panel">
  <strong>Sample KAP survey items: Public transit safety</strong>
</div>

<div class="hbm-code">KNOWLEDGE SECTION
K1. Is there a security presence on the city's bus rapid transit system? (Yes / No / Don't know)
K2. What number do you call to report a safety concern on public transit? (Open-ended)
K3. True or False: Transit vehicles are equipped with security cameras.
K4. Are there emergency call buttons at BRT stations? (Yes / No / Don't know)

ATTITUDE SECTION
A1. "I feel safe using public transit during the day." (Strongly disagree → Strongly agree)
A2. "I feel safe using public transit at night." (Strongly disagree → Strongly agree)
A3. "Public transit is safer than driving for my daily commute." (Strongly disagree → Strongly agree)
A4. "I would use transit more often if safety were improved." (Strongly disagree → Strongly agree)

PRACTICE SECTION
P1. How many days per week do you use public transit? (0 / 1-2 / 3-4 / 5+)
P2. Do you avoid transit at certain times due to safety concerns? (Yes / No)
P3. Have you changed your transit use in the past year due to safety perceptions? (Yes, use less / No change / Yes, use more)</div>

The results might look like this:

<div class="hbm-panel">
  <strong>Hypothetical KAP results</strong>
  <div class="hbm-mini-chart">
    <div class="hbm-bar-row"><span>Knowledge</span><div class="hbm-bar"><span style="width: 45%;"></span></div><span>45%</span></div>
    <div class="hbm-bar-row"><span>Positive attitude</span><div class="hbm-bar"><span style="width: 62%;"></span></div><span>62%</span></div>
    <div class="hbm-bar-row"><span>Regular use</span><div class="hbm-bar"><span style="width: 18%;"></span></div><span>18%</span></div>
  </div>
  <p class="hbm-small">Knowledge about safety features is low. Attitude is moderately positive. But regular use is very low. The largest gap is between attitude and practice.</p>
</div>

This result pattern is informative. It tells the agency that:

1. **Knowledge is low.** Many people do not know about existing safety features. This suggests a communication problem.
2. **Attitude is moderate.** Most people are not hostile toward transit — they just are not using it.
3. **The A–P gap is large.** Even people with positive attitudes are not riding. Something beyond attitude is blocking practice.

What KAP cannot tell the agency is *what* is blocking practice. Is it habit? Is it poor service quality? Is it social norms? Is it land use patterns that make driving easier? Is it a lack of perceived control over the commuting decision? These questions require models with more explanatory power — which is why the series moves from KAP to the Theory of Planned Behavior in the next post.

## Strengths

<div class="hbm-grid">
  <div class="hbm-card">
    <strong>Simple and fast</strong>
    <p>KAP surveys can be designed, deployed, and analyzed quickly. They do not require complex statistical models or large sample sizes.</p>
  </div>
  <div class="hbm-card">
    <strong>Baseline assessment</strong>
    <p>KAP is excellent for establishing a baseline: what does the population currently know, believe, and do? This baseline is valuable before and after interventions.</p>
  </div>
  <div class="hbm-card">
    <strong>Gap identification</strong>
    <p>The most useful finding in a KAP study is the discrepancy: high K but low P, or high A but low P. These gaps direct attention to the right problems.</p>
  </div>
  <div class="hbm-card">
    <strong>Needs assessment</strong>
    <p>For organizations planning campaigns, programs, or services, KAP provides a structured way to identify what the target population already knows and where misconceptions exist.</p>
  </div>
  <div class="hbm-card">
    <strong>Comparability</strong>
    <p>KAP surveys can be repeated over time or across populations to track changes or compare groups.</p>
  </div>
  <div class="hbm-card">
    <strong>Accessibility</strong>
    <p>KAP does not require specialized training in structural equation modeling, choice modeling, or simulation. It is accessible to practitioners, planners, and policy makers.</p>
  </div>
</div>

## Limitations

<div class="hbm-grid">
  <div class="hbm-card">
    <strong>Descriptive only</strong>
    <p>KAP describes what people know and do. It does not explain <em>why</em> gaps exist between knowledge and practice.</p>
  </div>
  <div class="hbm-card">
    <strong>Assumes linearity</strong>
    <p>The implicit K → A → P chain assumes that knowledge causes attitude change, which causes behavior change. This is often not the case.</p>
  </div>
  <div class="hbm-card">
    <strong>No causal mechanism</strong>
    <p>KAP does not include constructs for norms, perceived control, habit, self-efficacy, or context. It cannot diagnose which mechanism is responsible for a gap.</p>
  </div>
  <div class="hbm-card">
    <strong>Self-report bias</strong>
    <p>All three dimensions rely on self-report. Knowledge can be guessed. Attitudes can be socially desirable. Practice can be over- or under-reported.</p>
  </div>
  <div class="hbm-card">
    <strong>Cross-sectional design</strong>
    <p>Most KAP studies are cross-sectional, making it impossible to establish temporal or causal ordering between K, A, and P.</p>
  </div>
  <div class="hbm-card">
    <strong>Shallow constructs</strong>
    <p>"Attitude" in KAP is often a single dimension. It does not distinguish between affective attitude, cognitive evaluation, perceived risk, or moral judgment.</p>
  </div>
</div>

<div class="hbm-note">
  <p><strong>A common criticism:</strong> KAP tells you that a gap exists between what people know and what they do. It does not tell you what to do about it. For intervention design, more explanatory models are needed.</p>
</div>

## Best Use Case

KAP is best used when:

- The goal is **baseline assessment** — understanding what a population currently knows, believes, and does before designing an intervention.
- The research is **exploratory** — identifying where gaps exist before committing to a more complex theoretical model.
- The context is **needs assessment** — an agency, organization, or program needs to understand its audience before launching a campaign or service.
- **Time and resources are limited** — KAP is fast, cheap, and does not require advanced statistical skills.
- The behavior is **relatively new** — for unfamiliar behaviors (e.g., a new transit line, a new safety regulation, a new technology), knowledge gaps may genuinely be the primary barrier.

KAP should not be used when the goal is to explain *why* people behave a certain way, to design behavior change interventions, or to predict which individuals will adopt a behavior. For those purposes, models with causal mechanisms — like the Theory of Planned Behavior, the Health Belief Model, or COM-B — are more appropriate.

## Key Takeaway

<div class="hbm-note">
  <p>KAP tells you <em>what</em> people know, feel, and do — and where the gaps are. It does not tell you <em>why</em> those gaps exist or how to close them. It is a starting point, not a destination.</p>
</div>

## Key References

<div class="hbm-papers">
  <strong>Key References</strong>
  <ul>
    <li><a href="https://www.who.int/publications/m/item/a-guide-to-developing-knowledge-attitude-and-practice-surveys">World Health Organization (2008), "A Guide to Developing Knowledge, Attitude and Practice Surveys"</a>: the WHO's practical guide to designing and implementing KAP surveys, widely used across public health and increasingly in transportation.</li>
    <li><a href="https://doi.org/10.1111/j.1365-3156.2009.02264.x">Launiala, A. (2009), "How Much Can a KAP Survey Tell Us About People's Knowledge, Attitudes and Practices? Some Methodological Reflections"</a>: a critical review of KAP methodology, limitations, and the gap between KAP assessment and behavior change.</li>
    <li><a href="https://doi.org/10.1016/j.aap.2016.04.032">Azhar, M. et al. (2017), "Knowledge, Attitude and Practice of Road Safety Among Drivers"</a>: an application of KAP to traffic safety, demonstrating both the utility and limitations of the approach.</li>
    <li><a href="https://doi.org/10.1186/s12889-020-8279-0">Zhong, B. L. et al. (2020), "Knowledge, Attitudes, and Practices Towards COVID-19"</a>: a large-scale KAP study that illustrates the standard methodology and its strengths and weaknesses.</li>
    <li><a href="https://doi.org/10.1016/j.socscimed.2005.11.034">Cleland, J. (1973/2006 retrospective), "The Evolution of KAP Surveys"</a>: a retrospective on the origins and evolution of KAP methodology in population studies.</li>
  </ul>
</div>

<div class="hbm-exercises">
  <strong>Exercises and Discussion Questions</strong>
  <ol>
    <li>Design a 12-item KAP questionnaire for assessing public knowledge, attitudes, and practices regarding cycling to work in your city. Include 4 knowledge items, 4 attitude items, and 4 practice items. For each item, specify the response format (true/false, Likert scale, frequency scale, etc.).</li>
    <li>A KAP survey on electric vehicle adoption finds that 78% of respondents know about government purchase subsidies, 65% have a positive attitude toward EVs, but only 4% have purchased or leased an EV. What does this gap tell you? What does it <em>not</em> tell you? What additional information would you need to explain the gap?</li>
    <li>Compare the information that a KAP survey provides with the information needed to design an effective behavior change intervention. What is missing from KAP that a practitioner would need? Name at least three constructs or types of information that KAP does not capture.</li>
  </ol>
</div>

In the next post, we move from description to explanation. The Theory of Planned Behavior introduces subjective norms, perceived behavioral control, and the concept of behavioral intention — constructs that begin to answer *why* the KAP gap exists.
