---
title: "Multi-Agent Workflows: Coordination and Conflict Resolution"
date: "2026-06-11"
draft: false
type: "post"
tags:
  - "AI Agents"
  - "Multi-agent systems"
  - "Coordination patterns"
  - "Research workflows"
  - "Conflict resolution"
---

Five agents now exist: Scout, Analyzer, Gap Finder, Synthesis, Critic. They do not work in isolation. They coordinate through a shared knowledge base, observe each other's findings, discover contradictions, and learn from feedback.

This post is about how agents work together when they disagree, when they discover something surprising, and when the human researcher needs to intervene.

## Coordination patterns revisited

Recall three coordination patterns from earlier:

1. **Sequential pipeline** - Scout → Analyzer → Gap Finder → Synthesis → Critic
2. **Parallel exploration** - Multiple Scouts search in parallel, results merge
3. **Continuous loop** - Agents direct each other; workflow runs indefinitely

Each pattern handles coordination differently.

## Pattern 1: Sequential pipeline (simple but brittle)

```
Scout (find papers)
  ↓ incoming_papers.yaml
Analyzer (extract structure)
  ↓ methodology_db.csv
Gap Finder (compare across)
  ↓ gaps.md
Synthesis (draft narrative)
  ↓ draft_review.md
Critic (question assumptions)
  ↓ review_notes.md
Human (decide and refine)
```

**How coordination works:**

Each agent reads the previous agent's output as input.

```python
# Scout outputs
scout_output = {
  "incoming_papers": [
    {"id": "2024_smith", "title": "...", "url": "...", "source": "Scholar"}
  ],
  "search_stats": {"total_found": 50, "new_papers": 35, "duplicates": 15}
}

# Analyzer reads incoming_papers, extracts, outputs methodology_db
analyzer_input = scout_output["incoming_papers"]
analyzer_output = {
  "methodology_db": [
    {"paper_id": "2024_smith", "methodology": "agent-based", "dataset": "..."}
  ],
  "extraction_stats": {"total_extracted": 35, "unclear": 2, "failed": 0}
}

# Gap Finder reads methodology_db, queries it
gap_finder_input = analyzer_output["methodology_db"]
gap_finder_output = {
  "gaps": [
    {"gap": "No papers on neurodivergent populations", "papers_related": 0}
  ],
  "comparison_stats": {"unique_methodologies": 3, "unique_datasets": 12}
}

# And so on...
```

**Advantages:**
- Simple to understand and debug
- Each agent focuses on one job
- Clear input/output contracts

**Disadvantages:**
- Errors cascade (Scout misses paper → Analyzer never sees it → Gap Finder misses the gap)
- Slow (waits for each agent to finish)
- Agents cannot redirect each other (if Gap Finder finds a gap, cannot ask Scout to search for it)
- Brittle to changes (if Analyzer extracts differently, downstream agents confused)

**When to use:** First pass on a new research question. One-shot literature review.

## Pattern 2: Parallel exploration (faster, more robust)

```
Scout A (Scholar) ┐
Scout B (arxiv)   ├→ Deduplicator → Analyzer → Gap Finder → Synthesis → Critic
Scout C (TRID)    │
Scout D (Methods) ┘
```

**How coordination works:**

Multiple Scouts search independently. Results are merged and deduplicated before downstream agents process.

```python
# All Scouts output to incoming_papers/ directory
scout_results = [
  scout_a_output,  # Scholar search results
  scout_b_output,  # arxiv results
  scout_c_output,  # TRID results
  scout_d_output   # Methods search results
]

# Deduplicator merges and deduplicates
merged = deduplicator.merge(scout_results)
# merged.yaml contains combined papers, with duplicates flagged

# Analyzer processes merged, deduplicated list
analyzer_output = analyzer.run(merged)

# Rest of pipeline same as sequential
```

**Advantages:**
- Faster (4 Scouts search in parallel vs. 1 Scout sequentially)
- More robust (if Scout A misses papers, Scouts B-D might find them)
- Reduced blind spots
- Parallel execution reduces wall-clock time

**Disadvantages:**
- More complex (requires deduplication logic)
- More duplicates to handle initially
- More coordination overhead
- Still cannot redirect Scouts mid-run

**When to use:** Large-scale literature review. You want comprehensive coverage across many sources.

## Pattern 3: Continuous loop (adaptive but complex)

```
                    Synthesis → Critic
                    ↓ (feedback)      ↓
Scout (directed) ← Gap Finder (analyze)
  ↓                 ↑ (new gaps)
Analyzer
```

**How coordination works:**

Agents form feedback loops. Gap Finder discovers what is missing, directs Scout to search for it. Scout finds new papers. Analyzer extracts. Gaps might change. Loop continues.

```python
# Week 1: Initial search
scout.run(task="Search for evacuation papers")

# Week 1: Analysis
analyzer.run(on_papers=scout.output)
gap_finder.run(on_data=analyzer.output)

# Week 2: Directed search based on gaps
for gap in gap_finder.output["gaps"]:
  if gap.is_searchable:
    scout.run(task=f"Search for papers addressing: {gap.description}")

# Week 2: Re-analyze with new papers
analyzer.run(on_papers=scout.output)
gap_finder.run(on_data=analyzer.output)

# Synthesis drafts based on current understanding
synthesis.run(on_data=gap_finder.output)
critic.run(on_draft=synthesis.output)

# If Critic finds issues, may direct Gap Finder to re-examine data
if critic.finds_contradiction():
  gap_finder.re_examine()
```

**Advantages:**
- Agents adapt to findings
- Catches emerging work (continuous monitoring)
- Feedback loops improve understanding iteratively
- Knowledge base stays current

**Disadvantages:**
- Complex to orchestrate (agents directing each other)
- Risk of infinite loops (Scout keeps finding papers, no stopping point)
- Requires clear stopping criteria
- Harder to debug when something goes wrong

**When to use:** Long-running research programs. Continuous literature monitoring. Iterative theory building.

## Handling discovery: when agents find something surprising

Suppose Gap Finder discovers a contradiction:

```
Gap Finder finds:
- Paper A (Smith 2024): Social networks increase evacuation by 23%
- Paper B (Jones 2023): No effect
- Paper C (Lee 2022): Opposite effect (-15%)

This is a contradiction. How does the research team respond?
```

### Response 1: Agent investigation (automatic)

Synthesis Agent investigates:

```python
synthesis.investigate(
  contradiction_description="Three papers on social networks show opposite effects",
  papers=[paper_a, paper_b, paper_c],
  methodology_db=analyzer.output
)

# Synthesis generates explanation:
explanation = {
  "hypothesis_1": "Different populations studied",
  "evidence": {
    "paper_a": "families in coastal Florida",
    "paper_b": "general urban population",
    "paper_c": "rural communities"
  },
  "hypothesis_2": "Different measures of 'social network'",
  "evidence": {...},
  "hypothesis_3": "Different evacuation contexts",
  "evidence": {...}
}

# Synthesis drafts:
draft = """
Papers show contradictory effects of social networks on evacuation...
This likely reflects differences in:
1. Population studied
2. How social networks were measured
3. Evacuation context (mandatory vs. voluntary)

Unified interpretation: [synthesis]
"""
```

### Response 2: Human review and decision

You review Synthesis's explanation:

```
Question 1: Does Synthesis's explanation make sense? (Yes/No/Partial)
  - I think hypothesis 1 (population) is most important
  - Hypothesis 2 (measurement) also matters
  - Hypothesis 3 (context) I want to investigate further

Question 2: What should the literature review say?
  Option A: "Papers disagree; no consensus yet"
  Option B: "Papers disagree due to [synthesis's hypothesis 1]"
  Option C: "Papers disagree because researchers misunderstood each other"

Question 3: What should we do next?
  - Search for papers that directly test social network effect on different populations?
  - Request original data from authors to re-analyze?
  - Mark as "unresolved contradiction" and move on?
```

You choose. Agents incorporate feedback into next synthesis draft.

### Response 3: Directed exploration

Based on your decision, direct agents:

```
Human decision: "Hypothesis 1 (population) is most likely. 
Let's search for papers that explicitly compare social network effects 
across populations."

Scout directive:
  - Search for: "social network" AND evacuation AND (family OR elderly OR vulnerable)
  - Search for: "social network" AND evacuation AND comparison
  - Goal: Find papers that study social networks across different populations

Gap Finder directive:
  - Re-examine papers A, B, C
  - For each, extract: what population? how measured social networks?
  - Create comparison table

Synthesis directive:
  - Wait for Scout and Gap Finder to complete
  - Redraft the section on social networks
  - Include population-stratified analysis
```

## Conflict resolution patterns

When agents (or agent + human) disagree, how is it resolved?

### Pattern 1: Escalation to human

```
Analyzer extracts from paper: "Dataset size: 500"
Analyzer flags: "Unclear - text says 'large dataset' but no n reported"

Synthesis assumes: "n=500 (from Analyzer)"
Critic checks: "Is this reasonable?"

Critic output: "FLAGGED: Dataset size is ambiguous. 
Analyzer reports n=500 but notes this may not be from paper.
Should verify with author or mark as 'unclear'."

Human decision: "Mark as 'unclear', do not use this paper for dataset comparison"
```

### Pattern 2: Voting / consensus

For questions with multiple agents' perspectives:

```
Question: "Is this paper relevant to evacuation research?"

Scout says: YES (found via search term)
Analyzer says: NO (abstract does not mention evacuation or behavior)
Gap Finder says: MAYBE (related to crowd dynamics, might inform evacuation)

Voting rule: 2 out of 3 say include → Include
Consensus: Paper is included but flagged as "peripherally relevant"
```

### Pattern 3: Fallback to conservative choice

When in doubt, agents choose the conservative option:

```
Scout finds a paper with ambiguous relevance.
Unclear if it matches search terms or just tangentially related.

Conservative choice: Include it.
Reason: False positives (extra papers) are cheaper than false negatives (missing papers).

Later, Critic or human can remove it if irrelevant.
```

## Common coordination mistakes

### Mistake 1: Agents making final decisions

Scout finds papers and decides which are "important."
Analyzer extracts and decides which fields are "relevant."

**Problem:** Agents lack context. An "unimportant" paper to Scout might be crucial to your research question.

**Fix:** Agents flag, they do not filter. Humans decide what matters.

### Mistake 2: No handoff protocol

Scout outputs papers to file X. Analyzer looks for file Y. They do not connect.

**Problem:** Coordination breaks silently. You think Analyzer processed Scout's papers, but it did not.

**Fix:** Explicit handoff: "Scout output saved to location X"; "Analyzer reads from location X"; confirmation that Analyzer successfully processed.

### Mistake 3: Agents stuck in loops

Gap Finder identifies gaps. Directs Scout to search. Scout finds papers. 
Gap Finder identifies new gaps. Directs Scout again. Infinite loop.

**Problem:** Research never ends; team never produces output.

**Fix:** Set stopping criteria. Examples:
- "Stop after 3 rounds of directed search"
- "Stop when new gaps are 10% smaller than previous round" (diminishing returns)
- "Stop after 6 months of continuous monitoring"

### Mistake 4: Lost context

Synthesis drafts based on old data. Analyzer runs again, findings change. 
But Synthesis does not know and is still referencing old data.

**Problem:** Narrative is out of sync with current knowledge base.

**Fix:** Explicit versioning and re-runs.
```
metadata:
  knowledge_base_version: 3  # which version of data is this synthesis based on?
  synthesis_version: 2
  last_updated: 2026-06-10
```

When knowledge base updates, Synthesis must re-run or explicitly acknowledge it is stale.

### Mistake 5: Unclear authority

Scout and Analyzer disagree on paper classification. Who decides?

**Problem:** Unresolved conflicts pile up.

**Fix:** Clear authority structure.
```
Scout: "This paper on ant behavior might inform evacuation modeling"
Analyzer: "It is not about evacuation. Exclude it."

Authority rule: If a paper is ambiguous, Analyzer's decision stands.
But if Scout strongly disagrees, escalate to Gap Finder.
Gap Finder: Final decision.

Record: "Paper on ant behavior: Scout wanted it (related work), 
Analyzer excluded it, Gap Finder included it (gap finder sees connection to modeling)."
```

## Building feedback loops

Feedback makes the system smarter over time.

### Feedback loop 1: Agent ← Critic

```
Synthesis drafts: "Social networks increase evacuation by 23%"

Critic: "This cites Paper A only. What about Paper B (opposite finding) 
and Paper C (no effect)? Contradiction unresolved."

Synthesis receives feedback, redrafts: "Some papers show social networks 
increase evacuation (A), while others find no effect (B) or opposite (C). 
Likely explanation: [synthesis reconciliation]"
```

### Feedback loop 2: Agent ← Human

```
Researcher reviews Analyzer output: "Dataset field is inconsistent. 
Paper 1 says 'n=500', Paper 2 says 'large sample', Paper 3 says 'n estimated ~1000'. 
Standardize to: 'sample_size' with flag 'estimated' if not exact."

Analyzer receives feedback, re-extracts with new standardization.
```

### Feedback loop 3: Agent → Agent

```
Gap Finder output: "No papers study neurodivergent populations (n=0)"

Scout receives directive: "Search for papers on evacuation + autism, 
+ ADHD, + neurodivergence, + accessible evacuation, etc."

Scout searches, finds 2 papers. Gap Finder's gap shrinks.
```

### Feedback loop 4: Agent ← Data

```
Analyzer extracts from 50 papers. You spot-check 5.
Accuracy: 4 out of 5 correct.

Feedback: "Analyzer is at 80% accuracy. Areas of concern: methodology_type 
extraction (confused 'hybrid' with 'agent-based'). Retrain on these cases."

Analyzer re-runs with refined instructions. Accuracy improves to 95%.
```

## Orchestration: coordinating agents in practice

How do you actually run this? Three approaches:

### Approach 1: Manual (spreadsheet + prompts)

```
Week 1:
- Run Scout manually (copy-paste prompt to Claude)
- Save results to papers.csv
- Run Analyzer manually on papers.csv
- Save to methodology.csv

Week 2:
- Run Gap Finder manually on methodology.csv
- Review gaps
- Manually create new Scout directives based on gaps
```

**Pros:** Simple, you understand every step
**Cons:** Manual, time-consuming, easy to make mistakes

### Approach 2: Script-based (Python + APIs)

```python
import anthropic
import csv

client = anthropic.Anthropic()

# Scout
scout_output = client.messages.create(
  model="claude-opus",
  messages=[{
    "role": "user",
    "content": scout_instructions + "\n\nSearch for papers on evacuation"
  }]
)

# Analyzer
papers = parse_scout_output(scout_output.content)
for paper in papers:
  analyzer_output = client.messages.create(...)
  save_extraction(analyzer_output)

# Gap Finder
methodology_db = load_all_extractions()
gap_finder_output = client.messages.create(...)

# Continue...
```

**Pros:** Automated, repeatable, can run on schedule
**Cons:** Requires coding, API costs add up, harder to debug

### Approach 3: Agent framework (LangChain, Claude SDK)

```python
from anthropic import Anthropic
from langchain.agents import AgentExecutor, create_react_agent

# Define agents with tools
scout = create_research_agent(
  name="scout",
  instructions=scout_instructions,
  tools=[google_scholar_search, arxiv_search, database_write]
)

analyzer = create_research_agent(
  name="analyzer",
  instructions=analyzer_instructions,
  tools=[pdf_read, database_query, database_write]
)

# Orchestrate
plan = """
1. Scout searches for papers
2. Analyzer extracts from new papers
3. Gap Finder analyzes data
4. Synthesis drafts narrative
5. Critic reviews draft
"""

executor = AgentExecutor(
  agents=[scout, analyzer, gap_finder, synthesis, critic],
  plan=plan,
  tools=[all_tools],
  callbacks=[logging, checkpoint]
)

result = executor.run(research_question="How do people evacuate?")
```

**Pros:** Professional-grade, handles tool use, logging/checkpointing built-in
**Cons:** Complex setup, steep learning curve, expensive if using hosted models

## Example: complete workflow on evacuation research

Here is what a full loop looks like:

```
Day 1: Scout runs
  Output: 120 new papers found
  Status: "Ready for Analyzer"

Day 1: Analyzer processes
  Output: 110 papers extracted (10 failed PDF reads)
  Status: "10 papers need manual review"

Day 2: Gap Finder analyzes
  Output: 5 major gaps identified
    - Gap 1: Neurodivergent populations (n=0)
    - Gap 2: Real-time decision updates (n=0)
    - Gap 3: Multi-hazard cascades (n=2)
  Status: "3 searchable gaps; 2 are foundational research"

Day 3: Synthesis drafts
  Output: Draft review (3,000 words)
  Organization: "Methodology traditions → Gaps → Emerging directions"
  Status: "Ready for Critic"

Day 3: Critic reviews
  Output: 12 review notes
    - "Contradiction on social networks unresolved"
    - "Missing: papers on psychological factors"
    - "Unsupported claim: '95% of papers use ABM' (actually 40%)"
  Status: "Flagged issues for human review"

Day 4: Human reviews
  Decision 1: Accept Gap Finder's gaps; add directed search for gap-specific papers
  Decision 2: Incorporate Critic feedback on contradictions
  Decision 3: Revise unsupported claims

Day 5: Directed search
  Scout runs with specific queries on the 3 gaps
  Output: 15 new papers on the 3 gaps
  Status: "Ready for re-analysis"

Day 5: Re-analysis
  Analyzer, Gap Finder, Synthesis run on new papers
  Output: Updated knowledge base, revised gaps, new draft

And so on...
```

## What comes next

With a functioning workflow, the next question is: how do you take this from research support tool to actually producing your first paper or research proposal?

The next post covers that: "From Idea to First Draft" — a complete walkthrough of using your research team from initial question to polished literature review or research proposal.

## The practical lesson

A research team is not a set of independent agents. It is a coordinated system where agents observe each other, discover contradictions, and learn from feedback.

The most powerful part is not individual agents. It is the loops: Scout directing feedback to Gap Finder, Gap Finder directing feedback to Scout, Critic pointing out assumptions, Human deciding and agents learning from the decision.

When coordination works, the team becomes smarter than any individual researcher or agent alone.
