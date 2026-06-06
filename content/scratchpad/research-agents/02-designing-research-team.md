---
title: "Designing Your Research Team: Agent Roles and Coordination"
date: "2026-06-07"
draft: true
type: "post"
tags:
  - "AI Agents"
  - "Research methodology"
  - "Multi-agent systems"
  - "Agent architecture"
  - "Research workflow"
---

Once you decide to use agents for research, the next question is immediate: what should each agent do?

The temptation is to build one big "research agent" that does everything. That is a mistake. A research team is useful precisely because it is specialized. Each agent does one thing well. They coordinate through shared knowledge.

This post is about designing that team: what roles make sense, how they specialize, how they coordinate, and when to merge or split roles.

## The mental model: specialization through instructions and tools

A research agent is not distinguished by being a different model. It is distinguished by:

1. **Instructions** - What the agent is responsible for, how to think about its job
2. **Tools** - What databases, APIs, or file systems it can access
3. **Knowledge** - What information it has access to (shared knowledge base vs. private state)
4. **Constraints** - What it is not allowed to do (e.g., a Scout searches; it does not decide what matters)

Two agents using the same underlying model but with different instructions, tools, and constraints will behave very differently.

Example:

| Aspect | Literature Scout | Methodology Analyzer |
| --- | --- | --- |
| Instructions | "Find papers matching these search terms. Extract titles, authors, URLs. Note which database each came from. Flag duplicates." | "Read papers in the knowledge base. Extract: datasets used, validation methods, metrics reported, limitations mentioned. Compare across papers." |
| Tools | Read-only access to Google Scholar, arxiv, TRID, Semantic Scholar APIs | Read access to papers in knowledge base, write access to methodology database |
| Knowledge | Sees list of searches to perform; tracks what it has already searched | Sees papers marked as "ready for extraction"; reads synthesis notes from other agents |
| Constraints | Does not judge relevance (that is the Gap Finder's job). Does not extract details (Analyzer's job). Stops and asks before adding to knowledge base if duplicate is uncertain. | Does not search for new papers. Does not write the narrative. Only extracts structured data. |

This separation is powerful. The Scout can be aggressive about breadth. The Analyzer can be meticulous about accuracy. They do not conflict because their jobs do not overlap.

## The five core roles

Start with this team:

### 1. Literature Scout

**Job:** Find papers systematically. Sweep databases. Detect new arrivals. Bring candidates to the team.

**Specialization:**
- Exhaustive search across multiple sources (not selective)
- Comfortable with false positives (a few irrelevant papers is fine; missing papers is not)
- Tracks source metadata (where each paper came from, search date)
- Detects duplicates within the incoming set

**Instructions might include:**
- Search terms to try (and variations)
- Databases and APIs to query
- How to handle results (extract metadata, store URLs, note source)
- What to do if results are ambiguous (log it; let another agent decide)

**Tools:**
- Google Scholar API or similar
- arxiv, TRID, Semantic Scholar APIs
- Any domain-specific paper repos
- Read/write access to "incoming papers" staging area

**Constraints:**
- Does not decide whether a paper is relevant
- Does not extract methods or findings (the Analyzer does)
- Does not update the main knowledge base directly

**Runs:** Continuously or on a schedule (e.g., weekly sweeps)

### 2. Methodology Analyzer

**Job:** Extract structured data from papers. Build a methodology database.

**Specialization:**
- Reads papers carefully (or their abstracts/PDFs)
- Extracts consistently: same fields from every paper
- Compares methodology across papers
- Flags missing information or ambiguities

**Instructions might include:**
- What fields to extract: datasets used, sample size, validation method, metrics, tools, limitations
- How to handle incomplete information (note what is missing; do not guess)
- How to standardize: if one paper calls it "agent-based model" and another "microsimulation," note both but use a canonical term for comparison

**Tools:**
- Read access to paper PDFs or abstracts
- Write access to methodology database
- Optional: access to a code search engine (if papers mention GitHub repos)
- Optional: access to a dataset registry (to verify dataset names)

**Constraints:**
- Does not search for new papers
- Does not write the narrative
- Only extracts structured data (does not summarize the paper in prose)

**Runs:** When new papers arrive in the incoming queue

### 3. Gap Finder

**Job:** Compare across papers. Identify what is missing. Find conflicts or inconsistencies.

**Specialization:**
- Systematic comparison (not intuition)
- Comfortable with structured data (methodology table, findings list)
- Generates queries like: "Which papers use dataset X? Who else studied outcome Y? Do these papers contradict each other?"
- Proposes research directions (e.g., "No one has combined agent-based models with real-world behavioral data. This is a gap.")

**Instructions might include:**
- How to detect gaps: missing combinations, unexplored datasets, unstudied populations
- How to detect conflicts: papers with opposite findings on the same question
- How to propose follow-up questions or research directions

**Tools:**
- Read access to methodology database
- Read access to findings summary (what each paper concluded)
- Write access to "research questions" or "gap analysis" document
- Optional: ability to query the knowledge base (e.g., "Show me all papers on evacuation + agent-based models")

**Constraints:**
- Does not search for papers to fill gaps (the Scout does)
- Does not decide whether a gap matters (the Critic or researcher does)
- Works with data the Analyzer extracted (does not re-read papers)

**Runs:** Periodically (e.g., after new papers are added) or on-demand

### 4. Synthesis Writer

**Job:** Draft narrative. Propose connections between papers. Build coherent story.

**Specialization:**
- Turns data into prose
- Identifies themes and patterns across papers
- Proposes section structure for a literature review
- Drafts background paragraphs or methodology overviews

**Instructions might include:**
- How to organize: chronologically? By methodology? By finding? By population?
- How to handle conflicting findings: note both; explain why they might differ
- How to write for the researcher's audience (journal paper? PhD proposal? grant?)
- Style preferences (formal academic vs. accessible overview?)

**Tools:**
- Read access to methodology database, gap analysis, findings
- Write access to draft sections
- Optional: ability to query "here are papers on topic X; summarize what they say"

**Constraints:**
- Does not evaluate whether the narrative is correct (the Critic does)
- Does not search for missing papers (the Scout does)
- Only works with information the Analyzer extracted

**Runs:** After enough papers have been processed, or on-demand for specific sections

### 5. Critic

**Job:** Question assumptions. Spot contradictions. Flag weak reasoning. Suggest alternatives.

**Specialization:**
- Adversarial reading (looking for problems, not confirmation)
- Catching logical gaps in the narrative
- Detecting when insufficient evidence supports a claim
- Proposing alternative interpretations

**Instructions might include:**
- What to scrutinize: big claims, causal statements, generalization from limited samples
- How to challenge: "This paper studied X, but the claim generalizes to Y. Is that justified?"
- When to flag as problematic vs. when to note as limitation

**Tools:**
- Read access to all databases and drafts
- Write access to "review notes" or "issues" document
- Optional: ability to suggest "find papers on X to test this claim"

**Constraints:**
- Does not make final decisions (the researcher does)
- Does not search for papers unless directing the Scout to
- Only raises questions; does not resolve them

**Runs:** On-demand, before finalizing drafts, or continuously as background task

## Coordination patterns

How do these five agents work together? Three main patterns:

### Pattern 1: Sequential pipeline

```
Scout → Analyzer → Gap Finder → Synthesis Writer → Critic → Researcher review
```

Best for: First pass through a new research area. Structured workflow.

**How it works:**
1. Scout finds 50 candidate papers
2. Analyzer processes all 50, extracts methodology
3. Gap Finder reviews what is common, what is rare
4. Synthesis Writer drafts a literature review based on the gaps
5. Critic reviews the draft, flags weak claims
6. You review and decide what to fix

**Tradeoff:** Slow but thorough. Errors can cascade (if Scout misses papers, Analyzer does not extract them, Gap Finder does not see them). Good for first pass; less good for iteration.

### Pattern 2: Parallel exploration with merge

```
Scout A → (conference papers)   ↘
Scout B → (journal archives)     → Analyzer → Gap Finder → Synthesis → Critic
Scout C → (preprint servers)    ↗
Scout D → (borrowed methods)   ↗
```

Best for: Comprehensive search. Reducing blind spots.

**How it works:**
1. Four Scout agents search different sources in parallel
2. Their results merge in a deduplicated incoming queue
3. Analyzer processes everything once
4. Rest of pipeline same as before

**Tradeoff:** Faster initial search, but more duplicates to handle. Requires deduplication logic.

### Pattern 3: Continuous loop

```
Scout (weekly) → Analyzer → Gap Finder ↓ → Synthesis → Critic
   ↑                                    ↓
   ← (directs attention to missing areas) ←
```

Best for: Long-running research. Monitoring for new work.

**How it works:**
1. Scout runs on a schedule (e.g., every Monday)
2. New papers flow through Analyzer, Gap Finder
3. Gap Finder identifies gaps: "No one has studied X yet"
4. Gap Finder directs Scout: "Search for papers on X"
5. Loop continues indefinitely
6. Knowledge base is always current

**Tradeoff:** Complex to manage (agents directing each other), but catches emerging work and refinements.

## When to merge or split roles

### Merge two roles when:

- One agent is idle (e.g., Scout finds papers, but Analyzer is always busy catching up). Combine them.
- The boundary between roles is blurry (e.g., does the Gap Finder find gaps or does the Critic?). Consolidate.
- The workflow is small (e.g., searching one database for a narrow topic). One Scout is enough.

### Split a role when:

- One agent becomes a bottleneck (e.g., Analyzer cannot keep up with Scout's pace). Give Analyzer help or split the incoming queue.
- A task is distinct enough (e.g., "Extract datasets" is different from "Extract methods"). Create a Dataset Extractor.
- Specialization improves quality (e.g., one Analyzer focuses on real-world studies, another on simulation-based work).

Example split:

```
Original:  Analyzer (extracts all fields from all papers)

Split:     Dataset Extractor (finds and catalogs datasets)
           Method Extractor (documents methodology)
           Findings Extractor (summarizes results)
```

This only makes sense if the Analyzer is overwhelmed or if specialization improves accuracy.

## Knowledge base design

All agents share one central resource: the knowledge base. This is where the team's work lives.

**Minimum structure:**

```
incoming_papers/
  - title, authors, url, source, search_date
  - status: (new, processing, complete)

methodology_db/
  - paper_id, dataset, sample_size, method, tools, validation, metrics, limitations
  
findings_summary/
  - paper_id, main_claim, key_result, evidence_strength, conflicting_papers
  
gap_analysis/
  - gap_description, papers_involved, research_question, scout_directive
  
draft_sections/
  - section_title, content, source_papers, review_notes
  
issues/
  - issue_id, type (logic, missing_paper, contradiction, unclear), description, resolution
```

**Why it matters:**

- Agents do not repeat work (Scout checks if paper is already in the database)
- Knowledge persists (six months later, your literature review is still there)
- Humans can audit (you can see exactly what each agent did)
- Agents can coordinate (Scout reads gap_analysis to know what to search for next)

## Example: evacuation research team

Let us put this together for your evacuation research:

| Role | Specific job | Tools | Runs |
| --- | --- | --- | --- |
| Scout | Search: "evacuation", "disaster behavior", "agent-based evacuation", "behavioral heterogeneity evacuation" across Google Scholar, arxiv, TRID, ResearchGate | Database APIs, URL fetcher | Weekly |
| Analyzer | Extract: dataset (simulation? survey? real-world?), model type (agent-based? flow? hybrid?), population (adults? children? diverse?), validation (real data? expert judgment?) | PDF reader, structured output | After each Scout run |
| Gap Finder | Compare: Who studied children? Who used real data? Did anyone combine agent-based + real behavior? | Methodology DB query | After Analyzer completes |
| Synthesis | Draft: "Prior work on evacuation has focused on adult populations in Western countries using [method]. New work on behavioral heterogeneity is emerging. Gap: cascading failures in multi-modal evacuation." | Gap analysis, findings DB | On-demand |
| Critic | Review: "Did we miss non-English papers? Are there related fields (animal evacuation, robot swarms) with insights?" | All DBs | Before finalizing review |

## Tradeoffs and gotchas

### Tool access vs. security

Agents with write access to your knowledge base can corrupt it (accidentally or if their instructions are unclear). Solution: start with read-only tools. Require human approval before agents write.

### Specialization vs. context

An agent that only extracts datasets from papers does one job well but has no context about the bigger research question. If it misses a field, it does not know to ask. Solution: include research context in agent instructions.

### Parallelization vs. order dependency

If Scout A finds papers and Scout B searches the same databases, you get duplicates. If Analyzer A processes papers and Analyzer B processes different papers, you lose consistency. Solution: explicit boundaries (Scout A searches Google Scholar, Scout B searches arxiv) or deduplication logic.

### Human in the loop timing

If you review after each agent runs, the system is slow. If you never review, errors compound. Solution: review at strategic points (after Gap Finder identifies something surprising, before Synthesis drafts final narrative).

## What comes next

The next post will dive deep into the Literature Scout agent: how to search multiple databases, handle ambiguity, avoid duplicates, and keep search exhaustive without being random.

Then we move to the Methodology Analyzer: extracting structured data at scale, comparing across papers, and building a methodology database that actually serves your research.

## The practical lesson

A research team is not one agent pretending to be a team. It is specialized agents with clear boundaries, shared knowledge, and explicit coordination.

The power is not in each individual agent. The power is in the division of labor. The Scout does not waste time extracting methods. The Analyzer does not waste time searching. The Synthesis Writer does not waste time second-guessing. And the Critic asks questions no one else has the cognitive space to ask.

When you design for specialization, you get better results faster. When you design for coordination, you get results that are auditable and improvable.

That is what good team design does—for human teams or agent teams.
