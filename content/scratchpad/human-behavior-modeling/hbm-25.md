---
title : "HBM 25: Activity-Based Travel Models"
date : "2026-06-06"
draft : false
type : "post"
---

A commuter does not wake up and decide to "make a trip." She wakes up, checks whether it is a school day, gets her children dressed, drives them to school, continues to work, picks up groceries during lunch, returns to the office, drives to after-school pickup, and finally goes home. By the end of the day she has made six trips — but none of them was planned in isolation. Each trip was a link in a chain of activities, constrained by time windows, household obligations, vehicle availability, and the locations of schools, workplaces, and stores.

Traditional travel demand models treat each trip as an independent event: an origin, a destination, a mode, and a time of day, estimated separately. Activity-based travel models start from a fundamentally different premise: **travel is derived demand**. People do not travel for its own sake. They travel to participate in activities — work, education, shopping, caregiving, recreation — and the pattern of those activities across the day is what generates travel.

## Why Activity-Based Modeling Matters

The four-step travel demand model — trip generation, trip distribution, mode choice, and traffic assignment — served transportation planning for decades. But it has a structural limitation: by treating trips independently, it cannot represent the dependencies between them. It cannot capture that a parent who drops a child at school is now constrained in route and timing for the next trip. It cannot represent that a household with one car must coordinate its use across members. It cannot model the difference between a direct home-to-work commute and a home-school-work tour, even though those two patterns have very different implications for congestion, emissions, and policy.

<div class="hbm-note">
  <p><strong>Core insight:</strong> Activity-based models shift the unit of analysis from the trip to the activity pattern — the full sequence of activities that a person or household pursues over the course of a day. Travel arises as a consequence of that pattern, not as an independent decision.</p>
</div>

This shift matters for policy in several ways:

<div class="hbm-two-col">
  <div class="hbm-panel">
    <strong>What trip-based models miss</strong>
    <ul>
      <li>Trip chaining — linked multi-stop tours</li>
      <li>Household coordination — shared vehicles, joint activities</li>
      <li>Time-of-day constraints — school hours, work schedules</li>
      <li>Activity substitution — telecommuting replaces the work activity, not just the commute trip</li>
      <li>Induced or suppressed activities — policies that change what people do, not just how they get there</li>
    </ul>
  </div>
  <div class="hbm-panel">
    <strong>What activity-based models capture</strong>
    <ul>
      <li>Full daily schedules, not isolated trips</li>
      <li>Intra-household interactions and joint decision-making</li>
      <li>Time-space constraints (Hägerstrand prisms)</li>
      <li>Tour structure — which trips are linked</li>
      <li>Behavioral response to policies that alter activity opportunities, not just travel costs</li>
    </ul>
  </div>
</div>

## How Activity-Based Models Work

Activity-based models simulate the process by which individuals and households organize their daily activities and the travel required to connect them. The core logic proceeds through several stages, though implementations vary across model systems.

<div class="hbm-flow" role="img" aria-label="Activity-based model flow">
  <div class="hbm-card">
    <strong>Population synthesis</strong>
    <p>Create a synthetic population of individuals and households matching census demographics.</p>
  </div>
  <div class="hbm-card">
    <strong>Long-term choices</strong>
    <p>Model residential location, vehicle ownership, and work location — decisions that constrain daily patterns.</p>
  </div>
  <div class="hbm-card">
    <strong>Activity generation</strong>
    <p>Determine which activities each person needs to perform (mandatory: work, school; discretionary: shopping, leisure).</p>
  </div>
  <div class="hbm-card">
    <strong>Tour formation</strong>
    <p>Organize activities into tours — home-based chains of trips that begin and end at home.</p>
  </div>
  <div class="hbm-card">
    <strong>Scheduling</strong>
    <p>Assign activity start times, durations, and travel times within time-space constraints.</p>
  </div>
</div>

After scheduling, the model determines mode and destination choices for each trip within each tour, then feeds the resulting travel demand into a network simulation for traffic assignment.

## Core Constructs

<div class="hbm-construct-row">
  <span class="hbm-construct">Activity Patterns</span>
  <span class="hbm-construct">Time-Space Constraints</span>
  <span class="hbm-construct">Household Interactions</span>
  <span class="hbm-construct">Tour Formation</span>
  <span class="hbm-construct">Mode-Destination Choice</span>
  <span class="hbm-construct">Activity Scheduling</span>
</div>

**Activity patterns** are the sequences of activities that individuals perform over the course of a day: work, school, shopping, personal errands, childcare, recreation, eating out, and so on. The activity pattern is the fundamental unit of analysis, not the trip. A person's pattern might be: Home → School drop-off → Work → Lunch errand → Work → School pickup → Grocery → Home.

**Time-space constraints** are the physical and temporal limitations that bound what a person can do. Torsten Hägerstrand's time-geography framework identifies three types:

<div class="hbm-grid">
  <div class="hbm-card">
    <strong>Capability constraints</strong>
    <p>Physical limits on movement — how far a person can travel in available time, given their mode of transport. A person without a car has a smaller feasible activity space.</p>
  </div>
  <div class="hbm-card">
    <strong>Coupling constraints</strong>
    <p>Requirements to be at the same place at the same time as other people or resources. A parent must be at school at 3:15 PM for pickup. A worker must be at the office during core hours.</p>
  </div>
  <div class="hbm-card">
    <strong>Authority constraints</strong>
    <p>Institutional rules that restrict access to certain places or activities at certain times. Stores close at 9 PM. Government offices operate on weekdays only.</p>
  </div>
</div>

<div class="hbm-note">
  <p><strong>The Hägerstrand prism:</strong> These constraints define a time-space prism — the set of all locations a person can reach and return from, given their anchor points (home, work, school) and available time. The prism is a powerful visual and computational tool: only activities within the prism are feasible for that person on that day.</p>
</div>

**Household interactions** are a critical and difficult dimension. In many households, activity patterns are not set independently — they are negotiated. Who drops the children off? Who gets the car today? Can the grocery stop be combined with the school pickup? Activity-based models attempt to represent these joint decisions, though they remain one of the hardest aspects to model well.

**Tour formation** organizes activities into tours — closed loops that begin and end at home (or sometimes at work). A simple tour is Home → Work → Home. A complex tour is Home → School → Work → Gym → Home. The structure of tours determines trip chaining behavior and affects mode choice: a person making multiple stops is less likely to use transit than one making a direct commute.

**Activity scheduling** assigns timing to each activity: when does it start, how long does it last, and when does travel occur between activities? Scheduling models must respect time-window constraints (school starts at 8:00 AM), activity duration requirements (a full work day), and travel time between locations.

## Causal Logic

The causal structure of an activity-based model is hierarchical and sequential:

<div class="hbm-math">
Sociodemographics + Household structure → Activity needs → Time-space constraints → Tour structure → Mode and destination choice → Trip timing and routing → Network performance
</div>

Long-term decisions (where to live, whether to own a car) constrain medium-term decisions (which activities to pursue) which constrain short-term decisions (which mode to use for each trip). The model captures feedback: if the network is congested, travel times increase, time-space prisms shrink, and activity patterns may adjust.

<div class="hbm-two-col">
  <div class="hbm-panel">
    <strong>Top-down influence</strong>
    <p>Household structure determines activity obligations (childcare, school trips). Work schedule determines available time for discretionary activities. Car ownership determines feasible mode set. Residential location determines which activity locations are accessible.</p>
  </div>
  <div class="hbm-panel">
    <strong>Bottom-up feedback</strong>
    <p>Congested networks increase travel times, squeezing discretionary activities. Poor transit service shifts mode choices, which changes demand patterns. New land uses create new activity opportunities, altering tour structures.</p>
  </div>
</div>

## Data Requirements

Activity-based models are substantially more data-intensive than trip-based models:

<div class="hbm-grid">
  <div class="hbm-card">
    <strong>Household travel surveys</strong>
    <p>Multi-day activity-travel diaries recording all activities, locations, start/end times, travel modes, and household member interactions. These are the primary source for estimating activity patterns.</p>
  </div>
  <div class="hbm-card">
    <strong>Census and demographic data</strong>
    <p>Population, household structure, employment, income, vehicle ownership — used for population synthesis.</p>
  </div>
  <div class="hbm-card">
    <strong>Land use and POI data</strong>
    <p>Locations and operating hours of workplaces, schools, stores, parks, medical facilities — the "supply" of activity opportunities.</p>
  </div>
  <div class="hbm-card">
    <strong>Transportation network data</strong>
    <p>Road networks, transit schedules and routes, pedestrian and bicycle infrastructure, parking supply.</p>
  </div>
  <div class="hbm-card">
    <strong>GPS and mobile data</strong>
    <p>Increasingly used to supplement or replace traditional diaries, providing high-resolution travel traces, though with activity inference challenges.</p>
  </div>
  <div class="hbm-card">
    <strong>Time-use surveys</strong>
    <p>National time-use data providing information on activity durations and sequencing for different demographic groups.</p>
  </div>
</div>

<div class="hbm-code">Example activity diary entry:
Person ID: 4021 | Household: 1522 | Age: 38 | Role: Primary caregiver
06:30  Wake, breakfast (Home)
07:15  Drive child to school (Travel: 12 min, auto)
07:30  School drop-off (Duration: 5 min)
07:35  Drive to work (Travel: 22 min, auto)
08:00  Work (Duration: 4h 30min)
12:30  Walk to lunch + pharmacy (Travel: 8 min, walk)
13:15  Walk back to work (Travel: 8 min, walk)
13:25  Work (Duration: 2h 50min)
16:15  Drive to school pickup (Travel: 18 min, auto)
16:35  School pickup (Duration: 10 min)
16:45  Drive to grocery store (Travel: 7 min, auto)
16:55  Grocery shopping (Duration: 25 min)
17:20  Drive home (Travel: 15 min, auto)
17:35  Home activities</div>

## Methods

Activity-based models use a combination of econometric and microsimulation methods:

- **Discrete choice models** (multinomial logit, nested logit, mixed logit) for mode choice, destination choice, and activity type selection
- **Hazard-based duration models** for activity duration and departure time
- **Ordered probit/logit models** for number of trips or stops in a tour
- **Rule-based scheduling algorithms** for assembling activities into feasible daily schedules
- **Population synthesis** (iterative proportional fitting, combinatorial optimization) for generating a representative synthetic population
- **Microsimulation** — the model simulates each individual in the synthetic population, creating a full population of daily activity-travel patterns

Leading operational systems include **CEMDAP** (Comprehensive Econometric Microsimulator for Daily Activity-Travel Patterns), **CT-RAMP** (Coordinated Travel – Regional Activity-Based Modeling Platform), **DaySim**, **TASHA** (Travel/Activity Scheduler for Household Agents), and **SimMobility**.

<hbm-activity-widget></hbm-activity-widget>

## Transportation Example: Evaluating a Congestion Pricing Policy

A regional planning agency wants to evaluate a cordon pricing policy — a $5 charge for driving into the downtown core during morning and evening peaks. A trip-based model would estimate the reduction in vehicle trips crossing the cordon and predict mode shifts based on travel cost elasticities.

An activity-based model reveals a richer set of behavioral responses:

<div class="hbm-grid">
  <div class="hbm-card">
    <strong>Trip retiming</strong>
    <p>Some commuters shift departure to before or after the charging window. The model captures how this cascades through their entire daily schedule — earlier work arrival means earlier lunch, earlier departure, changed pickup times.</p>
  </div>
  <div class="hbm-card">
    <strong>Tour restructuring</strong>
    <p>A worker who combined a downtown lunch errand with the commute may drop the errand or move it to a non-downtown location, changing tour structure.</p>
  </div>
  <div class="hbm-card">
    <strong>Mode switching</strong>
    <p>Some commuters switch to transit, but only those whose time-space prism permits transit travel given their daily activity obligations (school pickup, after-work appointments).</p>
  </div>
  <div class="hbm-card">
    <strong>Activity location change</strong>
    <p>Workers with flexible arrangements may choose to work from home one day per week, eliminating the commute entirely — an activity-level response, not a mode-level response.</p>
  </div>
  <div class="hbm-card">
    <strong>Household coordination</strong>
    <p>In a two-worker household with one car, the pricing policy may cause the couple to renegotiate who drives and who takes transit, affecting both members' schedules.</p>
  </div>
  <div class="hbm-card">
    <strong>Equity effects</strong>
    <p>Low-income workers with inflexible schedules and limited transit access bear disproportionate costs. The model reveals this distributional pattern because it simulates individuals, not averages.</p>
  </div>
</div>

<div class="hbm-note">
  <p><strong>Policy implication:</strong> The activity-based model predicts a smaller reduction in peak-period vehicle trips than the trip-based model (because many travelers cannot easily shift mode or time due to activity constraints), but it identifies specific populations — single parents, shift workers, transit-poor suburban residents — for whom targeted mitigation is needed. The policy design improves as a result.</p>
</div>

## Strengths

<div class="hbm-grid">
  <div class="hbm-card">
    <strong>Behavioral realism</strong>
    <p>Captures the fundamental truth that travel is derived from activity participation, not an end in itself. Represents trip chaining, scheduling constraints, and household coordination.</p>
  </div>
  <div class="hbm-card">
    <strong>Individual-level analysis</strong>
    <p>Microsimulation of each person allows distributional and equity analysis — who benefits, who loses, who cannot adapt.</p>
  </div>
  <div class="hbm-card">
    <strong>Policy sensitivity</strong>
    <p>Responds to a wider range of policies than trip-based models: telecommuting incentives, school schedule changes, land-use modifications, pricing, and transit improvements all affect activity patterns.</p>
  </div>
  <div class="hbm-card">
    <strong>Temporal resolution</strong>
    <p>Models travel and activity timing throughout the day, capturing peak spreading, off-peak shifts, and time-of-day sensitivity.</p>
  </div>
  <div class="hbm-card">
    <strong>Consistency</strong>
    <p>Activity patterns are internally consistent: total time sums to 24 hours, spatial sequences are feasible, household vehicle allocation is tracked.</p>
  </div>
  <div class="hbm-card">
    <strong>Integration with ABM</strong>
    <p>Activity-based models naturally pair with agent-based simulation (as in MATSim), enabling dynamic traffic assignment and emergent congestion effects.</p>
  </div>
</div>

## Limitations

<div class="hbm-grid">
  <div class="hbm-card">
    <strong>Data intensity</strong>
    <p>Requires detailed household activity-travel diaries, which are expensive to collect and suffer from respondent burden. GPS supplements help but introduce activity inference uncertainty.</p>
  </div>
  <div class="hbm-card">
    <strong>Model complexity</strong>
    <p>Activity-based model systems are large, multi-component software systems requiring specialized expertise to develop, maintain, and run.</p>
  </div>
  <div class="hbm-card">
    <strong>Household dynamics</strong>
    <p>Joint household decision-making — who drives, who picks up children, how activities are allocated — remains poorly represented in most operational systems.</p>
  </div>
  <div class="hbm-card">
    <strong>Computational burden</strong>
    <p>Microsimulating millions of individuals across all activities and tours is computationally intensive, especially when coupled with dynamic traffic assignment.</p>
  </div>
  <div class="hbm-card">
    <strong>Validation difficulty</strong>
    <p>Validating full activity-travel patterns is harder than validating aggregate trip tables. Does the model get the right activities for the right people at the right times?</p>
  </div>
  <div class="hbm-card">
    <strong>Behavioral assumptions</strong>
    <p>Schedule optimization assumptions may not reflect how people actually plan (or fail to plan) their days. Satisficing, habit, and improvisation are hard to represent.</p>
  </div>
</div>

## Best Use Case

Activity-based travel models are the right tool when the planning question involves **policies that affect when, where, and whether people engage in activities — not just how they travel between fixed origins and destinations**. They are essential for evaluating congestion pricing, telecommuting policies, school schedule changes, land-use scenarios, and transit investments in contexts where trip chaining and household coordination matter. They are less necessary when the question is about a single mode choice in a stable context, or when detailed activity diary data is unavailable.

<div class="hbm-note">
  <p><strong>Key takeaway:</strong> Travel is what happens between activities — activity-based models capture this truth by modeling the full daily schedule, revealing behavioral responses that trip-based models structurally cannot see.</p>
</div>

## Key References

<div class="hbm-papers">
  <strong>Foundational and applied references</strong>
  <ul>
    <li><a href="https://doi.org/10.1016/S0191-2615(99)00014-0">Bhat, C. R., & Koppelman, F. S. (1999). "Activity-based modeling of travel demand." In <em>Handbook of Transportation Science</em>.</a> — An influential overview of activity-based approaches, contrasting them with trip-based methods and laying out the theoretical foundations.</li>
    <li><a href="https://doi.org/10.1007/s11116-013-9481-y">Rasouli, S., & Timmermans, H. J. P. (2014). "Activity-based models of travel demand: promises, progress and prospects." <em>International Journal of Urban Sciences</em>.</a> — A comprehensive review of progress in activity-based modeling, covering operational systems and remaining challenges.</li>
    <li><a href="https://doi.org/10.1016/S0965-8564(00)00043-1">Bowman, J. L., & Ben-Akiva, M. E. (2001). "Activity-based disaggregate travel demand model system with activity schedules." <em>Transportation Research Part A</em>, 35(1), 1–28.</a> — Presents an integrated activity-based model system with scheduling, demonstrating the feasibility of the approach for regional planning.</li>
    <li><a href="https://doi.org/10.1080/01441647.2014.880291">Pinjari, A. R., & Bhat, C. R. (2011). "Activity-based travel demand analysis." In <em>A Handbook of Transport Economics</em>.</a> — A concise summary of the econometric and modeling components of activity-based systems.</li>
  </ul>
</div>

<div class="hbm-exercises">
  <strong>Exercises and Discussion Questions</strong>
  <ol>
    <li>Consider a two-parent household where one parent works full-time downtown and the other works part-time from home. They have two school-age children and one car. Sketch the time-space prisms for each parent on a typical weekday. Identify the coupling constraints (school drop-off/pickup) and capability constraints (car availability). How would adding a second car change the feasible activity patterns?</li>
    <li>A city is considering shifting public school start times from 8:00 AM to 9:00 AM. Explain why a trip-based model would underestimate the traffic impacts of this change. What activity-level responses would an activity-based model capture that a trip-based model would miss?</li>
    <li>A regional planning agency has a well-calibrated trip-based model and is considering investing in an activity-based model system. The upgrade would cost $2 million and take three years. Under what planning circumstances would this investment be clearly justified? When might the existing trip-based model be sufficient?</li>
  </ol>
</div>
