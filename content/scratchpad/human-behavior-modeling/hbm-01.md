---
title : "HBM 01: What Is Human Behavior Modeling?"
date : "2026-06-06"
draft : false
type : "post"
---

Transportation and urban systems are not only made of roads, vehicles, signals, sidewalks, buildings, and policies. They are also made of people.

People decide whether to drive or take the bus. They decide how fast to go, whether to wear a seatbelt, when to cross the street, and whether to evacuate during a hurricane. They choose where to live, how to commute, whether to buy an electric vehicle, and whether to support a new bike lane. Those choices — billions of them each day — shape congestion, emissions, crash rates, accessibility, equity, and quality of life.

Engineers and planners have always understood the physical side of these systems: capacity, signal timing, pavement design, geometric standards, structural loads. But physical infrastructure does not produce outcomes on its own. Outcomes are produced when people interact with infrastructure, with policies, with each other, and with their own habits, beliefs, and constraints.

Human behavior modeling is the study of that interaction.

## Why Behavior Modeling Matters for Planning and Engineering

Consider a few familiar puzzles:

- A city builds a new bus rapid transit line with excellent coverage, but ridership stays below projections. The infrastructure works. The schedules are good. Yet people continue to drive. Why?
- Speed limit signs are posted clearly, enforcement exists, and every licensed driver knows speeding increases crash risk. Yet speeding remains the most common traffic violation in almost every jurisdiction. Why?
- During a hurricane, mandatory evacuation orders are issued. Some households leave immediately. Others wait. Some refuse to leave at all. The warning system works. Why don't people respond uniformly?
- A workplace offers subsidized transit passes to every employee. Uptake is modest. The subsidy is generous. Why doesn't it change commuting patterns more effectively?

In each case, the physical system, the policy, or the information campaign is functioning as designed. What varies is human behavior. And behavior does not follow engineering specifications.

<div class="hbm-note">
  <p><strong>The key shift:</strong> from asking <em>"What should people do?"</em> to asking <em>"Why do people behave the way they do, and what conditions make better choices possible?"</em></p>
</div>

This shift matters because it changes how problems are diagnosed and how solutions are designed. A prescriptive approach assumes that better information, clearer rules, or more infrastructure will produce the desired outcome. An explanatory approach asks what beliefs, norms, habits, perceptions, constraints, and system features are actually shaping behavior — and then works with those factors, not against them.

## What Is Behavior Modeling?

Behavior modeling means representing how people make decisions, form intentions, respond to risk, develop habits, and interact with built and social environments — in a structured, testable way.

A behavior model is not simply a list of factors. It is a claim about relationships: what influences what, in what order, under what conditions, and with what strength. Some models describe what people know and do. Others explain why intentions form. Others predict which option people will choose. Others diagnose what must change before behavior can change. Others simulate how individual choices combine to produce system-level outcomes.

<div class="hbm-grid">
  <div class="hbm-card">
    <strong>Decisions</strong>
    <p>Mode choice, route choice, departure time, vehicle purchase, location choice.</p>
  </div>
  <div class="hbm-card">
    <strong>Intentions</strong>
    <p>Plans to switch modes, intentions to adopt safer behaviors, willingness to pay.</p>
  </div>
  <div class="hbm-card">
    <strong>Risk responses</strong>
    <p>Evacuation decisions, safety compliance, hazard avoidance, protective action.</p>
  </div>
  <div class="hbm-card">
    <strong>Habits</strong>
    <p>Car commuting routines, phone use while driving, parking patterns, route inertia.</p>
  </div>
  <div class="hbm-card">
    <strong>Social influence</strong>
    <p>Peer effects on mode choice, neighborhood norms, household negotiation, adoption cascades.</p>
  </div>
  <div class="hbm-card">
    <strong>System interaction</strong>
    <p>Responses to pricing, land use, service quality, built environment, information systems.</p>
  </div>
</div>

The field draws on psychology, sociology, economics, public health, and decision science. In transportation and planning, behavior models inform demand forecasting, safety analysis, policy evaluation, intervention design, and simulation.

## The Central Distinction: Types of Models

Not all behavior models do the same thing. One of the most important skills in this field is knowing what kind of question a model can answer — and what kind it cannot.

<div class="hbm-note">
  <p><strong>Core distinction:</strong> some models <em>describe</em> behavior, some <em>explain</em> behavior, some <em>predict</em> choices, some <em>diagnose</em> barriers, and some <em>simulate</em> system outcomes. Choosing the wrong type of model for the question at hand is one of the most common mistakes in applied behavior research.</p>
</div>

A descriptive model tells you what people know, believe, and do — but not why. An explanatory model proposes a mechanism: this belief, combined with that norm and this perception of control, produces that intention. A choice model estimates which alternative a person will select given measurable attributes. An intervention model identifies what needs to change before behavior can change. A simulation model scales individual decisions up to system-level dynamics.

These are not competing approaches. They are layers. Each layer answers a different question, and they build on one another.

## Six Layers of the Series

This series is organized around six layers, moving from simple to complex. Each layer represents a different kind of question about behavior and a different set of models designed to answer it.

| Layer | Main Question | Example Models |
|---|---|---|
| **Descriptive** | What do people know, feel, and do? | KAP |
| **Psychological** | Why do people intend, avoid, or act? | TPB, HBM, PMT, SCT, SDT |
| **Social & Environmental** | How do norms, values, routines, and systems shape behavior? | Diffusion of Innovations, NAM, VBN, Social Practice Theory |
| **Choice & Decision** | Which option will people choose? | Discrete Choice Models, Prospect Theory, Bounded Rationality |
| **Intervention** | What must change for behavior to change? | COM-B, BCW, TDF, Nudge Theory |
| **Computational** | How do individual behaviors produce system outcomes? | ABM, Activity-Based Models, System Dynamics, Hybrid Choice Models |

<hbm-roadmap-widget></hbm-roadmap-widget>

Each layer builds on the ones before it. Descriptive models identify what people know and do. Psychological models explain why they intend to act. Social models reveal the broader forces that shape individual psychology. Choice models predict which options people select. Intervention models diagnose what must change. Computational models scale individual behaviors into system dynamics.

## Layer 1: Descriptive Models

The simplest entry point is to ask: what do people know about a topic, how do they feel about it, and what do they actually do?

This is the logic behind KAP (Knowledge, Attitude, Practice) surveys — one of the most widely used assessment tools in public health and increasingly in transportation research. A KAP survey can tell a transit agency what percentage of commuters know about a new bus line, what they think of it, and whether they have tried it. That information is useful for baseline assessment. But it cannot explain *why* someone who knows about the bus line and has a positive attitude still drives to work.

Descriptive models are where the series begins: Post 3 covers KAP in detail.

## Layer 2: Psychological Models

The next layer asks: what psychological mechanisms produce intention and behavior? Theories like the Theory of Planned Behavior (TPB), the Health Belief Model (HBM), Protection Motivation Theory (PMT), Social Cognitive Theory (SCT), and Self-Determination Theory (SDT) each propose a different set of constructs — attitudes, norms, perceived control, threat perception, self-efficacy, motivation — and a different causal structure linking those constructs to action.

Post 4 covers the Theory of Planned Behavior, one of the most influential models in this layer. Posts 6 through 10 continue with risk, safety, and motivation models.

## Layer 3: Social and Environmental Models

Individual psychology does not operate in a vacuum. Behavior is shaped by social norms, moral values, cultural practices, built environments, institutional structures, and the actions of others. Models like the Norm Activation Model (NAM), Value-Belief-Norm Theory (VBN), Diffusion of Innovations, and Social Practice Theory shift attention from the individual mind to the social and material context.

This layer helps explain phenomena like car dependency, neighborhood effects on walking, the social dynamics of EV adoption, and why some communities support congestion pricing while others resist it.

## Layer 4: Choice and Decision Models

When people face concrete alternatives — drive or take the bus, Route A or Route B, this car or that one — choice models estimate which option they will select based on attributes like time, cost, reliability, comfort, and safety. Discrete choice models, Prospect Theory, bounded rationality, habit theory, and dual-process models all address different aspects of how people make decisions.

This layer connects most directly to transportation demand modeling and policy evaluation.

## Layer 5: Intervention Models

Understanding behavior is not the same as changing it. The COM-B model, the Behaviour Change Wheel, the Theoretical Domains Framework, and nudge theory are all designed to diagnose what must change before a specific behavior can change — and to map those barriers to concrete intervention strategies.

This layer is essential for practitioners: policy makers, planners, safety engineers, and public health professionals who need to design programs that work.

## Layer 6: Computational Models

Finally, individual behaviors aggregate into system outcomes. Agent-based models simulate thousands of heterogeneous individuals making decisions and interacting. Activity-based models generate travel demand from daily activity schedules. System dynamics models capture feedback loops, delays, and nonlinear change. Hybrid choice models embed psychological constructs inside econometric choice models.

This layer connects behavioral theory to the simulation and forecasting tools that planners and engineers already use.

## A Running Example: Public Transit Use

To make the series concrete, one behavior will reappear across many posts: the decision to use (or not use) public transit.

<div class="hbm-panel">
  <strong>What different models reveal about transit use</strong>
  <div class="hbm-mini-chart">
    <div class="hbm-bar-row"><span>KAP</span><div class="hbm-bar"><span style="width: 30%;"></span></div><span>Describes</span></div>
    <div class="hbm-bar-row"><span>TPB</span><div class="hbm-bar"><span style="width: 55%;"></span></div><span>Explains</span></div>
    <div class="hbm-bar-row"><span>DCM</span><div class="hbm-bar"><span style="width: 70%;"></span></div><span>Predicts</span></div>
    <div class="hbm-bar-row"><span>COM-B</span><div class="hbm-bar"><span style="width: 65%;"></span></div><span>Diagnoses</span></div>
    <div class="hbm-bar-row"><span>ABM</span><div class="hbm-bar"><span style="width: 80%;"></span></div><span>Simulates</span></div>
  </div>
  <p class="hbm-small">Each model answers a different question about the same behavior. No single model is "best." The right model depends on the research question.</p>
</div>

A KAP survey might find that 85% of commuters know about the bus rapid transit line, but only 12% use it regularly. That gap is the starting point. TPB would investigate whether attitudes toward transit, perceived social norms, and perceived behavioral control predict the intention to ride. A discrete choice model would estimate how travel time, cost, frequency, and reliability affect mode choice. COM-B would diagnose whether the gap is about capability, opportunity, or motivation. An agent-based model would simulate how changes in service frequency ripple through the commuter population.

Same behavior. Different questions. Different models.

## What This Series Is Not

This series does not attempt to crown one model as "the best." The best behavior model depends on the behavior, the mechanism of interest, the available data, and the decision context. A model that is excellent for explaining evacuation intentions may be useless for predicting route choice. A model that diagnoses barriers to cycling may not simulate system-level congestion.

This series is also not a survey of every theory ever proposed. There are hundreds of behavior models in the literature. The series focuses on those most relevant to transportation, planning, safety, sustainability, and policy — and emphasizes depth over breadth.

<div class="hbm-note">
  <p><strong>The guiding question for every post:</strong> What does this model help us understand, what does it miss, and when should we use it?</p>
</div>

## Series Structure Preview

The series is planned in six parts, roughly following the six layers above:

<div class="hbm-two-col">
  <div class="hbm-panel">
    <strong>Part 1: Foundations (Posts 1–5)</strong>
    <p>What is behavior modeling? Why does knowledge not always change behavior? KAP framework. Theory of Planned Behavior. KAP vs. TPB comparison.</p>
  </div>
  <div class="hbm-panel">
    <strong>Part 2: Risk & Safety (Posts 6–9)</strong>
    <p>Health Belief Model. Protection Motivation Theory. Transtheoretical Model. Social Cognitive Theory.</p>
  </div>
  <div class="hbm-panel">
    <strong>Part 3: Motivation & Norms (Posts 10–14)</strong>
    <p>Self-Determination Theory. Diffusion of Innovations. Norm Activation Model. Value-Belief-Norm Theory. Social Practice Theory.</p>
  </div>
  <div class="hbm-panel">
    <strong>Part 4: Choice & Decision (Posts 15–19)</strong>
    <p>Discrete Choice Models. Prospect Theory. Bounded Rationality. Habit Theory. Dual-Process Models.</p>
  </div>
  <div class="hbm-panel">
    <strong>Part 5: Intervention Design (Posts 20–23)</strong>
    <p>COM-B. Behaviour Change Wheel. Theoretical Domains Framework. Nudge Theory and Choice Architecture.</p>
  </div>
  <div class="hbm-panel">
    <strong>Part 6: System Modeling (Posts 24–30)</strong>
    <p>Agent-Based Modeling. Activity-Based Travel Models. System Dynamics. Hybrid Choice Models. Machine Learning. Integration. Final Synthesis.</p>
  </div>
</div>

## Key Takeaway

Every transportation and planning system is, at bottom, a human behavior system. The infrastructure, policies, and technologies are the stage. The behavior is the play. Understanding why people do what they do — not just what they should do — is the foundation of effective planning, design, and policy.

<div class="hbm-papers">
  <strong>Key References</strong>
  <ul>
    <li><a href="https://doi.org/10.1016/j.tra.2010.11.006">Gärling, T. & Fujii, S. (2009), "Travel Behavior Modification: Theories, Methods, and Programs"</a>: a broad overview of behavioral theories applied to travel demand management.</li>
    <li><a href="https://doi.org/10.1016/j.tra.2017.07.003">Schneider, F. et al. (2017), "What Role Does Behavior Play in Sustainability Transitions?"</a>: connects behavior modeling to sustainability transitions in transportation.</li>
    <li><a href="https://doi.org/10.4337/9781781009635">Gärling, T. & Ettema, D. (2012), "An Introduction to the Psychology of Transportation"</a>: a foundational textbook linking psychology to transportation behavior.</li>
    <li><a href="https://doi.org/10.1080/01441647.2014.946459">Bamberg, S. et al. (2015), "Applying the Stage Model of Self-Regulated Behavioral Change in a Car Use Reduction Intervention"</a>: demonstrates how stage-based behavior modeling applies to transportation.</li>
    <li><a href="https://doi.org/10.1016/j.trd.2020.102354">Javid, M. A. et al. (2020), "Role of Psychological Factors in Travel Behavior"</a>: reviews the application of psychological frameworks in transportation research.</li>
  </ul>
</div>

<div class="hbm-exercises">
  <strong>Exercises and Discussion Questions</strong>
  <ol>
    <li>Choose a specific transportation behavior (e.g., cycling to work, speeding on highways, refusing to evacuate). List three factors you believe influence that behavior. Now classify each factor: is it about knowledge, attitude, habit, perceived risk, social norms, system design, or something else? What does this tell you about which kind of model might be needed?</li>
    <li>A city has built a state-of-the-art cycling network, but cycling mode share has barely increased. Using the six-layer framework from this post, at which layer or layers would you start investigating? Why?</li>
    <li>Consider the distinction between <em>"What should people do?"</em> and <em>"Why do people behave the way they do?"</em> How does this shift change the kinds of solutions a transportation planner might consider for reducing car dependency?</li>
  </ol>
</div>

In the next post, we examine one of the most persistent puzzles in behavior research: why knowledge alone does not reliably change behavior — and what that means for how we design interventions.
