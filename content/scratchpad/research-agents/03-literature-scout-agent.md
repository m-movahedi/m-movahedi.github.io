---
title: "The Literature Scout Agent: Systematic Paper Search"
date: "2026-06-08"
draft: false
type: "post"
tags:
  - "AI Agents"
  - "Literature search"
  - "Paper discovery"
  - "Research workflow"
  - "Database APIs"
---

The Literature Scout's job sounds simple: find papers. In practice, it is the most consequential agent on your team. If the Scout misses papers, the rest of the team never sees them. Everything downstream is incomplete.

This post is about building a Scout that is exhaustive, systematic, and reliable.

## The Scout's challenge

A typical researcher manually searches:

```
Google Scholar: "evacuation behavior"
Google Scholar: "disaster evacuation"
Google Scholar: "agent-based evacuation"
```

Then stops, satisfied they have found "the papers." But they have missed:
- Recent preprints not yet indexed on Scholar
- Papers on arxiv that never got published
- Conference papers from domain-specific venues
- Related work from adjacent fields (crowd modeling, robotics, traffic flow)
- International research not written in English (or in English but less visible)

The Scout's job is to systematically search multiple sources with variations that a human would get tired of trying.

## Search strategy: three dimensions

Build Scout searches along three independent dimensions:

### Dimension 1: Core terms

The main concepts in your research area. For evacuation research:

```
evacuation, disaster, emergency, hazard, wildfire, flooding, earthquake, tsunami
evacuation behavior, human behavior, decision-making, risk perception
agent-based model, simulation, microsimulation, behavioral model
crowd dynamics, pedestrian flow
```

Not every combination makes sense. But start with a list.

### Dimension 2: Methodological terms

How researchers study the topic:

```
agent-based, simulation, survey, interview, real-world, empirical
machine learning, deep learning, reinforcement learning
optimization, routing, planning
dynamics, cellular automata, network analysis
```

These help you find papers doing similar work with different vocabulary.

### Dimension 3: Population/context terms

Who and where:

```
children, families, elderly, disabled, vulnerable
urban, rural, developing
public transport, vehicle, pedestrian, mixed-mode
```

## Covering multiple databases

Do not rely on one search engine. Different databases index different work:

| Database | Strength | Lag time | Coverage |
| --- | --- | --- | --- |
| Google Scholar | Comprehensive, indexed quickly | Days to weeks | Broad (journal, conference, preprint, thesis) |
| arxiv | Preprints, current work | Real-time | Physics, CS, math, econ (domain-specific) |
| TRID | Transportation research | Weeks | Transportation focus (TRB, ASCE, academic) |
| Semantic Scholar | API-friendly, linked papers | Days | Academic (with "cited by" relationships) |
| ResearchGate | Researcher profiles, gray literature | Slow | Broad but incomplete; useful for finding authors |
| OpenDOAR repos | Domain-specific institutional repos | Varies | Discipline-specific (e.g., disaster management) |

**Practical approach:**

1. Start with 3-4 core databases (Google Scholar + arxiv + TRID + Semantic Scholar)
2. Add domain-specific sources (ResearchGate for your field, IEEE for engineering)
3. If your field is narrow, add specialized venues (conference proceedings from TRB, ICTD, etc.)

## Deduplication: the hidden complexity

Here is a problem: different databases return different metadata for the same paper.

```
Database A: "Agent-based modeling of evacuation dynamics in multi-exit buildings"
Database B: "Agent-based evacuation: buildings with multiple exits"
arXiv:     "arXiv:2401.12345 Agent-based evacuation modeling"
```

Same paper, three different metadata records. Your Scout must recognize them as duplicates or you end up with the same paper in your knowledge base three times.

**Deduplication strategy:**

```
Step 1: Normalize metadata
  - Title to lowercase, remove common articles/conjunctions
  - Authors to last-name-first format
  - Remove punctuation

Step 2: Compute similarity
  - Title similarity (Levenshtein or fuzzy match at ~90% threshold)
  - Author set similarity (Jaccard similarity of last names)
  - Year must match exactly (or within 1 year if preprint vs. published)

Step 3: Decision rule
  - If title similarity > 85% AND author overlap > 70% → Same paper (duplicate)
  - If title similarity 70-85% AND author overlap > 80% → Ask human (unclear)
  - Otherwise → New paper
```

**In practice:** Use a fuzzy matching library (fuzzywuzzy in Python, or similar) and set thresholds based on testing with your first 50 papers.

## Example: Scout instructions for evacuation research

Here is what you would give the Scout agent:

```markdown
# Literature Scout: Evacuation Research

## Goal
Systematically search for papers on human evacuation behavior during disasters.
Find papers across multiple databases, extract core metadata, and flag duplicates.

## Search strategy

### Core search terms
Try combinations of these with boolean operators:
- Primary: evacuation, disaster, emergency, hazard
- Behavior: behavior, human behavior, decision-making, risk perception
- Method: agent-based, simulation, survey, empirical
- Type: review, systematic review, meta-analysis

Example searches to try:
1. "evacuation" AND "agent-based"
2. "evacuation behavior" AND "disaster"
3. "pedestrian dynamics" AND "emergency"
4. "crowd dynamics" AND "evacuation"
5. "agent-based model*" AND "disaster"
6. "behavioral heterogeneity" AND "evacuation"

Do not stop at 10 papers. Search until you see repeated results across databases.

### Databases to search
1. Google Scholar (try 5 page depths on each search)
2. arxiv.org (search cs, physics, math sections; try multiple years)
3. TRID (transportation research database)
4. Semantic Scholar (use API if available)

For each search:
- Record: title, authors, publication year, venue, DOI/URL, database_source
- Check: does this paper already exist in incoming_papers? (deduplicate)
- If new: add to incoming_papers with status="new"

### Deduplication rules
If a paper looks similar to one already found:
- Compare title (remove punctuation, lowercase, fuzzy match)
- Compare authors (last names only)
- If title match > 85% AND authors overlap > 70%: mark as duplicate
- If unclear: add to incoming_papers with status="review_duplicate"

### What to do if results are ambiguous
- Paper title is vague? Add it anyway (let Analyzer decide)
- Not sure if it is relevant? Add it anyway (let Gap Finder decide)
- You see the same paper in multiple databases? Log all sources, but add once

### Papers to prioritize
- Recent papers (last 3 years) first
- Conference papers from major venues (TRB, ICTD, ASCE)
- Papers with "evacuation" in title
- Papers by prolific authors in the field (you can request a list)

### When to stop
- You see the same papers repeated across databases
- New searches are returning papers already in the knowledge base
- You have conducted at least 15-20 distinct searches

### Output format
After each search run, provide a summary:
- Total papers found: X
- New papers added: Y
- Duplicates detected: Z
- Unclear cases flagged for review: W
- Next suggested searches based on what you found
```

## Practical implementation: three approaches

### Approach 1: Agentic (hosted Claude/GPT)

Use Claude Code or Codex with access to:
- Web search tool (built-in or MCP)
- Paper fetching APIs (semantic scholar, arxiv)
- Spreadsheet or database write access

**Pros:** Easy to implement, no local setup, reliable tool use
**Cons:** API calls cost money, slow (one search at a time), subject to rate limits

### Approach 2: Local + APIs

Run a local agent (Ollama + agent framework) that calls APIs:

```python
# Pseudocode
scout = LocalAgent(
  model="mistral-medium",
  system_prompt=scout_instructions,
  tools=[
    SemanticScholarSearch(),
    ArxivSearch(),
    GoogleScholarScrape(),
    DatabaseWrite(knowledge_base),
  ]
)

results = scout.run(task="Search for evacuation papers")
```

**Pros:** Privacy, offline-capable, faster iteration
**Cons:** More setup, local models may be weaker at tool use, need to handle API keys

### Approach 3: Hybrid (local + hosted fallback)

Local agent with fallback to hosted model if search is difficult:

```python
scout = HybridAgent(
  primary=LocalModel("mistral-medium"),
  fallback=HostedModel("claude-opus"),  # fall back for complex searches
  tools=[all_search_tools]
)
```

**Pros:** Cheap for routine searches, better performance on hard queries
**Cons:** Complex to manage, mixed latency/privacy

## Common Scout mistakes (and how to avoid them)

### Mistake 1: Stopping too early

"I searched Google Scholar and found 40 papers. That should be enough."

**Reality:** You found papers matching your main terms. You missed:
- Methodological papers (machine learning for evacuation? Network analysis for evacuation?)
- Related work from adjacent fields
- International work
- Preprints not yet published

**Fix:** Set a minimum effort threshold: at least 20 distinct searches, at least 3 databases, iterative expansion of search terms.

### Mistake 2: Only searching exact phrases

"I searched for 'evacuation behavior' but not 'human behavior evacuation' or 'behavioral evacuation.'"

**Reality:** Different authors use different vocabulary. Papers on the same topic with different wording will never be found.

**Fix:** Scout generates term variations systematically. Use word lists, not manual phrases.

### Mistake 3: Forgetting preprints

"I searched Google Scholar, which covers arxiv."

**Reality:** arxiv has a lag. What is on arxiv today may not appear on Scholar for weeks. Searching arxiv directly catches emerging work faster.

**Fix:** Scout searches arxiv independently. Checks regularly (weekly).

### Mistake 4: Assuming English-only

"Most papers in my field are in English, so I only search in English."

**Reality:** Your field is probably global. Important work exists in other languages. At minimum, you miss translations or multilingual papers with English abstracts.

**Fix:** At least search for papers with English abstracts in other languages. Use Google Scholar's language options.

### Mistake 5: Not tracking where papers came from

"I have 100 papers now. I do not know which came from where or when I found them."

**Reality:** When you update your search, you cannot tell if new results are truly new or duplicates you already have.

**Fix:** Scout records source metadata: database, search_date, search_terms, rank_in_results.

## Handling edge cases

### What if a search returns zero results?

This is not failure. It is information. Log it: "Searched 'evacuation AND neuroimaging' on [date] in [database]. No results."

This tells you: "No one has published on this combination" (gap!) or "the terms are too specific."

### What if a search returns 5,000 results?

Narrow it. Too-broad searches waste time and find too much noise. Scout should:
- Add additional constraints (year, methodology, venue)
- Limit results to first N pages (usually information degrades after page 5-10)
- Subdivide the search (e.g., "evacuation" alone → filtered by methodology)

### What if a paper is behind a paywall?

Scout notes it: title, authors, DOI, "source: paywall." Do not skip it. You may have institutional access later, or you can email the author.

### What if a paper is not in English?

Scout notes the language. If there is an English abstract, extract it. Many tools (Google Scholar, semantic scholar) can provide abstracts in English even if the paper is in another language.

## Metrics for a healthy Scout

After your Scout runs, ask:

1. **Breadth:** Did you search at least 15 distinct term combinations?
2. **Depth:** Did you go at least 5 pages into results for each search?
3. **Coverage:** Did you search at least 3 independent databases?
4. **Freshness:** Did you search for papers from the last 6 months?
5. **Deduplication:** Did you deduplicate carefully? (Check: same paper should not appear twice)
6. **Uncertainty:** Did you flag ambiguous cases rather than guess?
7. **Diversity:** Are papers from different venues, methods, and populations represented?

If Scout scores poorly on any of these, adjust instructions and re-run.

## Connecting Scout to Analyzer

Scout outputs a file:

```yaml
incoming_papers:
  - id: arxiv_2401_12345
    title: "Agent-based evacuation modeling"
    authors: ["Smith, J.", "Doe, A."]
    year: 2024
    venue: "arxiv"
    url: "https://arxiv.org/abs/2401.12345"
    source_database: "arxiv"
    search_date: "2026-06-06"
    search_terms: ["evacuation", "agent-based"]
    status: "new"
    
  - id: scholar_2023_abc
    title: "Pedestrian dynamics in emergency evacuation"
    authors: ["Johnson, B.", "Lee, C."]
    year: 2023
    venue: "Journal of Transportation Research"
    url: "https://doi.org/10.1234/example"
    source_database: "Google Scholar"
    search_date: "2026-06-06"
    search_terms: ["pedestrian dynamics", "evacuation"]
    status: "new"
```

Analyzer reads this queue and begins extraction.

## Tools and services to use

| Tool | Purpose | Cost | Notes |
| --- | --- | --- | --- |
| Semantic Scholar API | Paper search, metadata | Free | API key required; clean metadata |
| arxiv API | Preprint search | Free | Good for emerging work |
| Google Scholar | Broad search | Free | Web scraping (check ToS); no official API |
| TRID API | Transportation research | Free | US DOT; good coverage of transport papers |
| Unpaywall API | Open access resolution | Free | Finds free PDFs when available |
| Zotero | Reference management | Free | Export/import, can tag papers |

## What comes next

Once Scout has populated incoming_papers, the Methodology Analyzer takes over: extracting datasets, methods, validation approaches, and structured metadata from each paper.

Then the team workflow begins: gaps emerge, directions clarify, and questions form.

## The practical lesson

A Literature Scout is not a single search. It is a systematic sweep across sources, with varied terms, careful deduplication, and honest tracking of what was searched.

The Scout's job is not to judge papers. It is to make sure the team sees all the papers worth seeing.

When Scout is thorough, everything downstream gets better. When Scout is lazy, no downstream agent can fix it.
