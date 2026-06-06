---
title: "The Synthesis Agent: From Data to Narrative"
date: "2026-06-10"
draft: false
type: "post"
tags:
  - "AI Agents"
  - "Literature synthesis"
  - "Narrative generation"
  - "Research writing"
  - "Knowledge synthesis"
---

You now have a methodology database with 200 papers. Structured. Deduplicated. Consistent. You know who studied what, using what methods, and found what.

But you still do not have a story. You do not have sentences that connect findings. You do not have a narrative that says: "Here is what we know. Here is what we do not know. Here is why your research matters."

This is where the Synthesis Agent works. It is not a writer (narrative is not its strength). It is a *storyteller*: taking structured data and proposing connections, identifying themes, drafting sections, building the backbone of a literature review.

## The Synthesis Agent's challenge

A researcher reads 200 papers and internalizes patterns: "Three papers use agent-based models. They all found that social networks matter. But only one validated against real data."

An agent cannot read 200 papers. But an agent can query the methodology database and spot the same pattern if you ask the right questions.

The challenge is: how do you get an agent to propose narrative structure from data?

## Three types of synthesis tasks

### Type 1: Thematic organization

Group papers by theme and draft sections.

```
Question to agent:
"The methodology database shows papers grouped by:
- Methodology: agent-based (40), survey (35), flow-based (25), hybrid (30)
- Validation: real-world (20), simulated (120), hybrid (30)
- Population: general (60), families (40), elderly (20), disabled (15)

Organize these papers into a literature review outline. 
For each section, identify the core papers and common themes."

Agent response:
"
## Methodology Approaches (80 papers)

### Agent-Based Models (40 papers)
Agent-based models dominate evacuation research. Common themes:
- Social network effects (8 papers)
- Behavioral heterogeneity (12 papers)
- Real-world validation challenges (6 papers)

Key papers:
- Smith et al. 2024: Social networks in evacuation
- Jones et al. 2023: ABM calibration methods
...

### Survey-Based Research (35 papers)
Survey research provides empirical foundations. Common findings:
- Risk perception thresholds vary by population (5 papers)
- Family composition affects decision-making (7 papers)
...
"
```

### Type 2: Gap identification and questioning

Use data to spot what is missing, then propose research directions.

```
Question to agent:
"Papers in methodology_db show:
- 40 agent-based evacuation papers
- Of these, 40 study general populations
- 0 study neurodivergent populations
- 2 study elderly with mobility limitations
- 0 combine agent-based models with real-time decision data

For each gap, generate a research question."

Agent response:
"
### Gap 1: Neurodivergent populations
Current state: 0 papers study how autistic or ADHD individuals evacuate
Research question: How do evacuation decisions differ for neurodivergent populations?

### Gap 2: Real-time decision integration
Current state: Agent-based models use pre-calibrated decision rules, not real-time streaming data
Research question: Can we integrate real-time mobile phone data to update evacuation decisions dynamically?

### Gap 3: Multi-hazard cascades
Current state: 200 papers assume single-event evacuation
Research question: How do consecutive natural disasters (hurricane → flooding) affect household evacuation decisions?
"
```

### Type 3: Conflict identification and synthesis

Spot papers with contradictory findings and propose explanations.

```
Question to agent:
"Papers show contradictory findings:
- Paper A: Social network effects increase evacuation compliance by 23%
- Paper B: Social networks have no significant effect on evacuation decisions
- Paper C: Social network effects are strong for families, weak for individuals

Why might these differ? What explanation unifies them?"

Agent response:
"
The contradiction likely stems from differences in:

1. **Population studied**
   - Paper A: families in coastal Florida
   - Paper B: general population in urban centers
   - Paper C: stratified by household composition
   
   Explanation: Social networks matter more for families than individuals

2. **How social networks were measured**
   - Paper A: actual social ties (survey)
   - Paper B: geographic proximity (assumed)
   - Paper C: survey + network analysis
   
   Explanation: Real social networks show effects; assumed networks do not

3. **Evacuation context**
   - Paper A: mandatory evacuation order
   - Paper B: voluntary evacuation
   - Paper C: recommendation (non-binding)
   
   Explanation: Social networks influence discretionary decisions more than mandatory ones

Unified explanation: Social networks influence evacuation decisions when (a) actual social ties are measured, (b) evacuation is discretionary, and (c) populations are family-oriented. These conditions hold in papers A and C but not B.
"
```

## How Synthesis Agent works: the flow

### Step 1: Query the methodology database

The agent asks targeted questions:

```sql
-- Query 1: How many papers per methodology type?
SELECT methodology_type, COUNT(*) as count FROM papers GROUP BY methodology_type

-- Query 2: What datasets are used most?
SELECT dataset, COUNT(*) as frequency FROM papers GROUP BY dataset ORDER BY frequency DESC

-- Query 3: Which papers validate against real-world data?
SELECT authors, year, methodology_type FROM papers WHERE validation = 'real-world'

-- Query 4: What main claims appear most frequently?
SELECT main_claim, COUNT(*) as frequency FROM papers GROUP BY main_claim ORDER BY frequency DESC

-- Query 5: What populations are underrepresented?
SELECT population, COUNT(*) as count FROM papers GROUP BY population ORDER BY count ASC
```

These queries reveal patterns a human might miss.

### Step 2: Identify themes and organize

From patterns, the agent proposes structure:

```
Observation: 40 papers use agent-based, 35 papers use surveys, 25 papers use flow models
Organization: Three methodological traditions

Observation: Agent-based papers cite each other frequently; flow model papers form a separate cluster
Organization: These traditions diverged ~10 years ago

Observation: Recent papers (2022+) combine methods
Organization: Emerging trend toward hybrid approaches

Proposed outline:
- Methodology foundations (historical evolution)
- Three traditions (ABM, survey, flow)
- Emerging hybrid methods
- Comparative validation (which validate well?)
```

### Step 3: Draft prose for each section

The agent drafts:

```
## Methodological Approaches to Evacuation Research

Evacuation research has evolved through three distinct traditions. 
The agent-based modeling tradition, emerging in the early 2000s, 
emphasizes behavioral heterogeneity and social interactions. 
The empirical survey tradition, grounded in social psychology, 
focuses on human risk perception and decision factors. 
The flow-based tradition, borrowed from traffic engineering, 
treats evacuation as flow optimization.

Recent work increasingly combines these approaches. [citations]

### Agent-Based Models
Agent-based evacuation models simulate individual decision-making 
in spatially explicit environments. Key papers: [citations]. 
Common themes include:
- Social network effects on compliance
- Behavioral heterogeneity by household type
- Bounded rationality and information asymmetry

Strengths: Captures heterogeneity, intuitive for policy makers
Limitations: Calibration challenging, computationally intensive, limited real-world validation

### Survey-Based Research
Empirical research through surveys and interviews provides 
behavioral foundations for modeling. Key papers: [citations].
Common findings:
- Risk perception is contingent on prior experience
- Family size affects evacuation timing
- Trust in authorities increases compliance

Strengths: Empirical ground truth, human-centered
Limitations: Survey bias, limited to stated preferences

### Flow-Based Models
Flow models, borrowed from traffic theory, treat evacuation 
as optimization of capacity and routing. Key papers: [citations].
...
```

This is not final prose. It is structured draft that you review, edit, and refine.

## Implementation: three approaches

### Approach 1: Prompted generation (simplest)

Give the agent a template and let it fill it:

```python
template = """
## {theme}

{description}

### Thematic breakdown

{themes}

### Key papers
{papers}

### Limitations and gaps
{gaps}

### Research questions
{questions}
"""

agent_prompt = f"""
You have a database of {len(papers)} papers on evacuation research.
The database shows:
- {stat1}
- {stat2}
- {stat3}

Using the template below, generate a literature review section on "{topic}"

Template:
{template}

Fill in each placeholder with content based on the database.
"""

synthesis_agent.run(agent_prompt)
```

**Pros:** Simple, fast, predictable output
**Cons:** Requires good template; output may be generic

### Approach 2: Iterative refinement

Give the agent a task, it generates, you review, it iterates:

```python
# Round 1: Initial draft
draft1 = agent.generate(task="Draft methodology section")

# Review
feedback = human_review(draft1)  # "Add more on validation"; "Expand gap analysis"

# Round 2: Refined draft
draft2 = agent.generate(
  task="Draft methodology section",
  previous_draft=draft1,
  feedback=feedback
)

# Review again...
```

**Pros:** Better quality, agent learns from feedback
**Cons:** Slower, requires human involvement

### Approach 3: Multi-step synthesis

Agent first plans structure, then drafts:

```python
# Step 1: Plan
plan = agent.run(task="""
  Analyze papers and create outline.
  For each section:
  - What is the theme?
  - How many papers support it?
  - What are the key papers?
  - What are the gaps?
""")

# Step 2: Draft each section from plan
sections = {}
for section in plan:
  draft = agent.run(task=f"""
    Draft a literature review section on "{section.theme}"
    Key papers: {section.key_papers}
    Common findings: {section.findings}
    Gaps: {section.gaps}
  """)
  sections[section.theme] = draft

# Step 3: Integrate sections
full_draft = agent.run(task="""
  Combine these sections into one coherent literature review.
  Make sure transitions between sections are smooth.
  Sections: {sections}
""")
```

**Pros:** Higher quality, agent reasons about structure first
**Cons:** Slower, more API calls (if hosted)

## Common Synthesis mistakes

### Mistake 1: Hallucinating papers

Agent invents a paper: "Smith et al. 2024 found that evacuees prefer trains to cars."

But Smith et al. 2024 says no such thing (or does not exist).

**Fix:** 
- Synthesis agent must cite specific papers from the database
- Every claim should be: "According to [papers], [finding]."
- Require citations to paper IDs, not paraphrased claims

### Mistake 2: Overgeneralizing from few examples

"Papers show that social networks matter" (based on 3 papers)

But database has 200 papers; most do not study social networks.

**Fix:**
- Agent must quantify: "3 of 40 agent-based papers study social networks"
- Distinguish between "universal finding" and "one group's finding"
- Flag when a finding is paper-specific vs. cross-paper consensus

### Mistake 3: Ignoring contradictions

Agent writes smoothly over conflicting papers, hiding disagreement.

"Papers show evacuation compliance ranges from 20% to 95%."

But does not explain why the range is so wide.

**Fix:**
- Synthesis agent must identify contradictions explicitly
- Propose explanations for why papers differ
- Resist the urge to smooth over real disagreement

### Mistake 4: Narrative drift

Synthesis starts as "A review of evacuation methods" but drifts into "A defense of agent-based models."

**Fix:**
- Set a clear scope before synthesis starts
- Use a Critic agent (next post) to catch bias
- Track what scope you started with vs. what you ended up writing

### Mistake 5: Missing the research question

Agent writes competent literature review but never connects it to your research.

"Here is what is known. Here is what is unknown. [Silence on why your question matters.]"

**Fix:**
- Include your research question in the synthesis prompt
- Ask agent: "How does each section relate to my question?"
- End synthesis with: "Your research fills gap X by doing Y."

## Connecting Synthesis to Critic

Synthesis produces a draft. Now Critic reviews it:

```python
critic_prompt = f"""
Review this literature review section:

{draft}

Questions to address:
1. Are all claims cited? Any unsupported statements?
2. Are contradictions handled or glossed over?
3. Does it answer the original research question?
4. Are there logical gaps in the narrative?
5. Does it favor one tradition over others?
6. What should the author revise?
"""

critique = critic_agent.run(critic_prompt)
```

Then you decide which critiques to incorporate into the next synthesis draft.

## Synthesis examples: evacuation research

### Example 1: Thematic synthesis

Agent query: "Organize papers by validation approach."

Agent response:
```
## Validation Approaches

### Real-World Validation (20 papers)
Papers comparing models to actual evacuation data during real events.
- Hurricane Harvey (2017): 4 papers
- Hurricane Florence (2018): 3 papers
- European floods (2021): 5 papers
- Wildfire evacuations (2020-2023): 8 papers

Common finding: Agent-based models capture evacuation timing 
accurately (RMSE 15-25%) but underestimate compliance variability.

### Synthetic Validation (80 papers)
Papers testing models on simulated scenarios.
- Sensitivity analysis: variation in parameters to test robustness
- Controlled scenarios: varying network structure, information delay
- Expert judgment: reviewer assessment of realism

Common limitation: No ground truth; hard to know if results are realistic.

### No Validation (100 papers)
Papers proposing methods but not validating them.

Research gap: Most evacuation models remain untested against real data.
```

### Example 2: Gap synthesis

Agent query: "What research questions are unexamined?"

Agent response:
```
## Research Gaps

### Gap 1: Intersectional Populations
Most papers study "general population" or single demographic groups.
Papers on elderly: 15
Papers on children (under age supervision): 8
Papers on disabled populations: 3
Papers on families with multiple vulnerability categories: 0

Research question: How do intersecting vulnerabilities shape evacuation?
Example: A family with an elderly parent and a child with autism.

### Gap 2: Real-Time Information Integration
Models use static information (pre-disaster risk perception).
Papers studying dynamic information updates: 12
Papers integrating streaming data (social media, traffic, alerts): 0

Research question: How should evacuation models update in real-time as 
new information arrives? What is the information value of alerts?

### Gap 3: Cascading and Sequential Disasters
Evacuation research assumes isolated events.
Papers on single disasters: 190
Papers on cascading disasters (hurricane → flooding → recovery): 2

Research question: How do repeated evacuations (or failed evacuation) 
affect subsequent evacuation decisions?
```

### Example 3: Contradiction synthesis

Agent query: "Find papers with contradictory findings on social factors."

Agent response:
```
## Contradictory Findings on Social Factors

### The Contradiction
- Study A (Smith 2024): Social networks increase evacuation by 23%
- Study B (Jones 2023): No social network effect
- Study C (Lee 2022): Social networks delay evacuation by 15%

### Possible Explanations

**Explanation 1: Definition differences**
- A: "Social network" = actual communication ties (survey)
- B: "Social network" = geographic proximity (assumed)
- C: "Social network" = advice/influence from peers

Implication: Real social ties matter; geographic proximity alone does not.

**Explanation 2: Population differences**
- A: Studied families (n=500)
- B: Studied general population (n=2000)
- C: Studied rural communities (n=300)

Implication: Social networks matter for tight-knit groups; less for urban strangers.

**Explanation 3: Evacuation context**
- A: Mandatory evacuation order
- B: Voluntary evacuation recommendation
- C: Warning without order

Implication: Social networks affect discretionary decisions (B, C) more than mandatory ones (A).
But wait—A is mandatory, yet social networks helped. Why?

Sub-hypothesis: When evacuation is mandatory but compliance varies, 
social networks coordinate group compliance. Individuals face peer pressure 
to evacuate together or stay together.

### Synthesis
Social networks do not uniformly increase or decrease evacuation. 
Instead, their effect depends on:
1. How social networks are measured (actual ties vs. proximity)
2. Population structure (families vs. strangers)
3. Whether evacuation is mandatory or discretionary
4. Whether households coordinate or decide independently

Future research should control for these factors.
```

## Tools for synthesis

| Tool | Purpose | Cost |
| --- | --- | --- |
| Claude 3.5 Sonnet | High-quality reasoning for organizing/drafting | API cost |
| GPT-4 | Strong narrative generation | API cost |
| LangChain | Agent framework for multi-step synthesis | Free |
| Jinja2 | Template rendering (fill outline with content) | Free (Python) |
| SQLite | Query methodology database | Free |
| Markdown | Output format for draft sections | Free |

## What comes next

With a draft synthesis, two more agents contribute:

1. **Critic Agent** - Questions assumptions, finds gaps, suggests alternatives
2. **Gap Finder Agent** - (in previous post) identifies what is missing

Then you review and decide which feedback to incorporate.

Finally, you write. The agents built the scaffolding. You add the building.

## The practical lesson

Synthesis is not creativity (that is still your job). It is pattern recognition at scale.

The Synthesis Agent spots what is common, what is rare, what contradicts, and what is missing. It proposes structure. It drafts prose that captures those patterns.

But it cannot judge whether a pattern matters. It cannot decide whether a contradiction is interesting or trivial. It cannot make the leap from "here is what we know" to "here is what we should study next."

That is where your research judgment comes in.

A research team works when agents handle the mechanical parts (search, extract, organize) and humans handle the thinking parts (interpret, decide, judge).

The Synthesis Agent is the bridge: it does enough pattern recognition to make your thinking more efficient.
