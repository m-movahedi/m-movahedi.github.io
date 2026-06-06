---
title: "From Idea to First Draft: An End-to-End Walkthrough"
date: "2026-06-12"
draft: false
type: "post"
tags:
  - "AI Agents"
  - "Research workflow"
  - "Literature review"
  - "Case study"
  - "Practical research"
---

You have a research question. You have a research team (5 specialized agents). Now what?

This post walks through a complete workflow from idea to polished first draft. You will see what agents do, where humans intervene, what surprises appear, and how the team navigates them.

We will use a real research question: **How do household evacuation decisions integrate social networks and behavioral heterogeneity?**

## Phase 1: Setup (Day 0)

### Step 1: Define the scope

You sit down with a clear research question:

> How do household evacuation decisions integrate social networks and behavioral heterogeneity during hurricanes? Specifically: Do models that incorporate social network effects outperform traditional agent-based models, and what behavioral factors drive network influence?

You create a brief:

```markdown
# Research Brief: Social Networks in Evacuation

## Core question
How do social networks influence household evacuation decisions during hurricanes?

## Sub-questions
1. What social network effects matter? (advice? coordination? social pressure?)
2. Do agent-based models capture these effects?
3. What behavioral factors mediate network influence?

## Scope boundaries
- Focus: household-level decisions during hurricanes
- Geographic: primarily coastal US (but include international if available)
- Time: peer-reviewed literature 2015-2026
- Methods: empirical studies, agent-based models, surveys, real-world data

## Expected output
- Literature review: 5,000-8,000 words
- Identifies: what is known, gaps, contradictions
- Proposes: research direction for empirical study on network effects

## Timeline
- Phase 1 (Scout): 3-5 days
- Phase 2 (Analyzer): 3-5 days
- Phase 3 (Gap Finder): 2-3 days
- Phase 4 (Synthesis): 2-3 days
- Phase 5 (Critic + revision): 2-3 days
- Total: ~2-3 weeks
```

### Step 2: Initialize agents

You provide each agent their role-specific instructions:

```markdown
# Scout Instructions

## Goal
Find papers on household evacuation decisions during hurricanes, 
with focus on social network effects and behavioral heterogeneity.

## Search strategy
Systematically search 4 databases:
1. Google Scholar
2. arxiv.org
3. TRID (transportation research)
4. Semantic Scholar

## Search term combinations
Core terms: evacuation, hurricane, household, behavior, decision-making
Social network terms: social network, peer influence, social pressure, advice, coordination
Heterogeneity terms: behavioral heterogeneity, vulnerability, risk perception, family dynamics
Model terms: agent-based, simulation, empirical, survey, real-world

## Search depth
- At least 10 distinct searches per database
- At least 5 pages of results per search
- Continue until results repeat

## Output
Save to: incoming_papers.yaml
Include: title, authors, year, venue, DOI/URL, source_database, search_terms, rank

## Deduplication
Check for duplicates before adding. Use fuzzy matching on title + author names.
```

(Similar detailed instructions for Analyzer, Gap Finder, Synthesis, Critic)

### Step 3: Create knowledge base structure

```yaml
# knowledge_base/
incoming_papers/
  - papers.yaml        # Scout output
methodology/
  - papers_db.csv      # Analyzer output
  - extraction_log.md  # What was extracted, what failed
gaps/
  - gaps_analysis.md   # Gap Finder output
  - comparison_table.csv # Papers compared
synthesis/
  - draft_v1.md        # Synthesis drafts (versioned)
  - draft_v2.md
  - citations.bib      # Bibliography
review/
  - critic_notes.md    # Critic feedback
  - decisions.md       # Your decisions on feedback
metadata/
  - config.yaml        # Research question, scope, timeline
  - log.md             # Day-by-day progress
```

## Phase 2: Scout (Days 1-3)

### Run Scout

You prompt Scout with the research question:

```
Research question: How do household evacuation decisions integrate social 
networks and behavioral heterogeneity during hurricanes?

Execute a comprehensive literature search. Use the following strategy:

Search combinations:
1. "evacuation" AND "household" AND "hurricane"
2. "evacuation" AND "social network"
3. "evacuation" AND "behavioral heterogeneity"
4. "agent-based" AND "evacuation" AND "household"
5. "evacuation" AND "risk perception"
... [10-15 more]

For each search:
- Try 3+ databases
- Go at least 5 pages deep
- Extract: title, authors, year, venue, DOI/URL, database source
- Flag duplicates

Stop when: results repeat across searches and databases.

Output format: YAML with papers and statistics.
```

### Scout's output (Day 1)

```yaml
run_date: 2026-06-01
search_strategy: comprehensive_multi_database

databases_searched:
  - google_scholar
  - arxiv
  - trid
  - semantic_scholar

search_summary:
  total_searches: 18
  total_papers_found: 287
  new_papers: 245
  duplicates_detected: 42
  papers_flagged_unclear: 12

sample_papers:
  - id: scholar_2024_smith
    title: "Agent-Based Modeling of Household Evacuation Decisions: Incorporating Social Networks"
    authors: ["Smith, J.", "Doe, A.", "Brown, C."]
    year: 2024
    venue: "Journal of Transportation Research Part A"
    doi: "10.1016/j.tra.2024.103456"
    source_database: "Google Scholar"
    search_terms: ["evacuation", "agent-based", "social network"]
    rank_in_search: 2
    
  - id: arxiv_2024_jones
    title: "Behavioral Heterogeneity in Evacuation: A Micro-Level Analysis"
    authors: ["Jones, B.", "Lee, C."]
    year: 2024
    venue: "arxiv preprint"
    url: "https://arxiv.org/abs/2401.12345"
    source_database: "arxiv"
    search_terms: ["evacuation", "behavioral heterogeneity"]
    rank_in_search: 1

  [... 243 more papers ...]

search_notes:
  - "Found significant recent work (2023-2024) on agent-based modeling"
  - "Social network effects increasingly studied (12 recent papers)"
  - "Fewer papers on behavioral heterogeneity intersection (only 8)"
  - "Most work focused on evacuation timing; less on network coordination"
  - "Limited international perspective (mostly US-focused)"

next_steps:
  - "Recommend directed search on: behavioral factors + social networks"
  - "Only 2 papers found on multi-household coordination"
```

### Your decision (Day 1)

Scout found 245 papers. You review:
- ✅ Good breadth: 4 databases, 18 searches
- ✅ Good recency: strong 2023-2024 coverage
- ⚠️ Concern: "Only 2 papers on multi-household coordination" — this might be important for network effects

You decide:
1. Accept the 245 papers
2. Add a directed search: "evacuation AND household coordination AND decision-making"

You prompt Scout:

```
Good work. I noticed only 2 papers on multi-household coordination.
Let me do a targeted follow-up search to ensure we haven't missed papers 
on how households coordinate evacuation (not just individual decisions).

Run 5 more searches:
1. "evacuation" AND "household coordination"
2. "evacuation" AND "collective decision"
3. "evacuation" AND "family group"
4. "disaster" AND "group behavior" AND "evacuation"
5. "evacuation" AND "social group" AND "network"

Output any new papers not already found.
```

### Scout's follow-up (Day 2)

Scout runs, finds 8 additional papers, 3 are new.

Total: 245 + 3 = **248 papers in incoming_papers.yaml**

Scout also notes: "Most relevant papers are: Smith 2024, Jones 2024, [5 others]"

## Phase 3: Analyzer (Days 3-5)

### Run Analyzer

You prepare extraction schema:

```yaml
extraction_schema:
  - authors
  - year
  - venue
  - research_question
  - methodology_type: [agent-based, survey, empirical, simulation, review, other]
  - dataset_description
  - sample_size
  - population: [general, families, vulnerable, other]
  - social_network_focus: [yes, no, implicit]
  - heterogeneity_focus: [yes, no, behavioral, demographic]
  - main_findings: [1-2 sentences]
  - validation_approach: [real-world, synthetic, expert, none]
  - limitations: [1-2 sentences]
  
extraction_standards:
  - Use standardized vocabulary (vocabulary_map.yaml)
  - Mark unclear fields as "unclear"
  - Extract exactly what paper says; do not interpret
```

You prompt Analyzer:

```
Extract structured data from 248 evacuation papers using the provided schema.

Focus areas:
1. Does the paper address social networks in evacuation? (yes/no/implicit)
2. Does it address behavioral heterogeneity? (yes/no)
3. What methodology did they use?
4. Was it validated against real-world data?

Output: CSV with rows = papers, columns = schema fields

Flag papers where:
- Field is ambiguous or missing
- Validation status is unclear
- Methodology is hard to classify

Process incrementally: extract 50 papers, spot-check for consistency, 
then extract the rest.
```

### Analyzer's work (Days 3-4)

Analyzer works through 248 papers. Extracts:
- First 50 papers: detailed extraction, logs decisions
- Checks: consistency looks good
- Continues: extracts remaining 198 papers
- Completion: All 248 papers extracted

```csv
paper_id,authors,year,venue,methodology_type,social_network_focus,...
smith_2024,"Smith, J., Doe, A., Brown, C.",2024,Journal Transportation,agent-based,yes,...
jones_2024,"Jones, B., Lee, C.",2024,arxiv,survey,no,...
... [246 more rows]
```

Analyzer also flags:

```
Extraction log:
- 5 papers had ambiguous sample sizes: marked as "unclear"
- 12 papers did not clearly state methodology: classified as "other-descriptive"
- 8 papers had social network focus implicit (not explicitly stated): marked "implicit"
- 2 papers could not be accessed (PDF not available): marked "not-processed"

Consistency checks:
- Re-extracted 10 random papers: 9/10 match original (90% accuracy)
- One discrepancy: methodology_type for hybrid paper (was "agent-based", should be "hybrid")
  → Corrected

Total papers processed: 246/248 (2 not accessible)
```

### Your decision (Day 4)

You review Analyzer's work:
- ✅ 246 out of 248 processed
- ✅ 90% accuracy on spot-checks (acceptable)
- ⚠️ Hybrid methodology classification was missed initially (but caught)

You make minor corrections and move forward.

## Phase 4: Gap Finder (Days 5-6)

### Run Gap Finder

You prompt Gap Finder:

```
Analyze the methodology database (246 papers, extracted data).

Task 1: Characterize the landscape
- How many papers per methodology?
- What datasets are most common?
- What populations are studied?
- What is the temporal trend (papers per year)?

Task 2: Identify what is missing
- Social network focus: yes=? no=? implicit=?
- Behavioral heterogeneity: yes=? no=?
- Real-world validation: yes=? no=?
- Papers addressing BOTH social networks AND heterogeneity: ?

Task 3: Find contradictions
- Do papers on social networks agree on effects?
- What papers have opposite findings?

Task 4: Identify research gaps
For each gap, describe:
- What is missing
- How many papers address it currently
- Why it matters for your research question
```

### Gap Finder's output (Day 5-6)

```yaml
landscape_characterization:
  methodology_types:
    agent_based: 62  # 25%
    survey: 48       # 20%
    simulation: 35   # 14%
    empirical_real_world: 28  # 11%
    review: 24       # 10%
    other: 49        # 20%
  
  social_network_focus:
    yes: 24
    implicit: 18
    no: 204
  
  behavioral_heterogeneity_focus:
    yes: 32
    implicit: 15
    no: 199
  
  both_social_AND_heterogeneity:
    yes: 8
    implicit: 2
    no: 236
  
  real_world_validation:
    yes: 31
    partial: 18
    no: 197

key_finding: "Intersection of social networks AND behavioral heterogeneity 
is understudied: only 8-10 papers directly address both."

research_gaps:
  - gap_1:
      description: "No papers combine social networks + behavioral heterogeneity with real-world validation"
      papers_addressing: 0
      papers_with_partial_coverage: 3
      importance: "CRITICAL - directly addresses your research question"
      
  - gap_2:
      description: "Multi-household coordination not modeled in agent-based frameworks"
      papers_addressing: 2
      importance: "HIGH - mechanism for network effects"
      
  - gap_3:
      description: "Behavioral factors mediating network influence (e.g., trust, homophily)"
      papers_addressing: 5
      importance: "HIGH - directly supports social network mechanism"
      
  - gap_4:
      description: "Real-time information integration in evacuation decisions"
      papers_addressing: 1
      importance: "MEDIUM - relevant for network dynamics"

contradictions:
  - contradiction_1:
      papers: [smith_2024, jones_2023, brown_2022]
      topic: "Effect of social networks on evacuation compliance"
      findings: 
        - smith: "23% improvement with network effects"
        - jones: "No significant effect"
        - brown: "Network effects vary by family structure"
      explanation: "Likely due to different populations and network measurement"
```

### Your decision (Day 6)

Gap Finder's key insight: The intersection of social networks + heterogeneity is understudied (8-10 papers).

Your research question sits directly in this gap. You decide:
1. This gap is worth exploring
2. Focus Synthesis on this gap specifically
3. After Synthesis, you will likely propose an empirical study to fill this gap

## Phase 5: Synthesis (Days 7-8)

### Run Synthesis

You prompt Synthesis with Gap Finder's output:

```
Draft a literature review section on household evacuation decisions during hurricanes.

Organize around 4 themes:
1. Methodological traditions (ABM vs. survey vs. simulation)
2. What we know about social networks in evacuation
3. What we know about behavioral heterogeneity
4. The gap: intersection of networks + heterogeneity

For each section:
- Synthesize 3-5 key papers
- Identify common findings
- Note contradictions and possible explanations
- Highlight what remains unknown

Then, draft a short "Research Direction" section proposing 
how to address the gap.

Output: 3,000-4,000 words of polished prose, with citations.
```

### Synthesis's draft (Days 7-8)

Synthesis produces:

```markdown
## Household Evacuation Decisions During Hurricanes: 
## Integrating Social Networks and Behavioral Heterogeneity

### Introduction
Hurricanes trigger mass evacuation decisions by millions of households 
each year. Understanding what drives evacuation choices is critical for 
emergency management and policy. Prior research has identified two 
important factors: social networks (peer influence, household coordination) 
and behavioral heterogeneity (differences in risk perception, family structure). 
Yet these factors remain largely studied in isolation. This review examines 
the current state of knowledge and identifies a critical gap at their intersection.

### Methodological Traditions
Evacuation research has evolved through three distinct traditions...

[Detailed synthesis of agent-based, survey, and simulation approaches]

### Social Networks and Evacuation
While social networks are known to influence many human decisions, 
their role in evacuation remains underexplored. Twenty-four papers 
explicitly study social network effects...

[Synthesis of Smith 2024, Jones 2024, etc.]

Common findings:
- Social networks increase compliance when they facilitate information sharing
- Network effects vary by household composition
- Coordination within networks can accelerate or delay evacuation

Contradictions:
- Some papers find 23% compliance increase (Smith 2024)
- Others find no effect (Jones 2023)
- Likely explanation: different network measurement and populations

### Behavioral Heterogeneity in Evacuation
Behavioral research shows evacuation decisions vary dramatically by household...

[Synthesis of behavioral papers]

### The Gap: Integrating Networks and Heterogeneity
Only 8-10 papers address both social networks and behavioral heterogeneity 
simultaneously. None combine this with real-world validation. This gap is 
critical because:

1. Social network effects likely vary by behavioral type
2. Some households may coordinate, others evacuate independently
3. Different population segments may show different network susceptibility

### Research Direction: Empirical Study of Network-Heterogeneity Integration
To advance this field, we propose an empirical study that:
- Surveys households on evacuation decisions and network characteristics
- Segments households by behavioral heterogeneity (risk-averse, optimistic, etc.)
- Tests whether network effects vary by behavioral segment
- Validates findings using real evacuation data (hurricanes 2023-2024)

This approach would directly address the gap and inform both theory and policy.

---

[3,500 words of detailed synthesis]

Bibliography: [52 citations]
```

### Your reaction (Day 8)

The Synthesis draft is good, but:
- ✅ Well-organized, clear transitions
- ✅ Accurately reflects the literature
- ⚠️ The "Research Direction" section feels generic
- ⚠️ Missing one important paper (you know of another)

You decide: move to Critic phase and incorporate feedback.

## Phase 6: Critic (Day 9)

### Run Critic

You prompt Critic:

```
Review this literature review draft critically.

Questions:
1. Are all claims supported by citations?
2. Are contradictions adequately explained?
3. Does the narrative logically flow to the gap identification?
4. Is the proposed research direction justified by the gap?
5. What assumptions are made that should be questioned?
6. What important work is missing?

For each issue, suggest a revision.
```

### Critic's review (Day 9)

```markdown
## Critical Review: Household Evacuation Decisions and Social Networks

### Issue 1: Unsupported generalization
**Location:** "Social networks increase compliance when they facilitate information sharing"

**Problem:** This is stated as fact, but only 3 papers directly support it. 
The other papers show mixed results.

**Suggestion:** Revise to: "Some evidence suggests social networks increase 
compliance when they facilitate information sharing (Smith 2024, Brown 2023), 
though findings are not universal (Jones 2023 finds no effect)."

### Issue 2: Missing contradictory evidence
**Location:** Entire "Social Networks" section

**Problem:** You present contradictions (Smith vs. Jones) but do not resolve them. 
The reader finishes confused. Should they believe social networks matter or not?

**Suggestion:** After presenting both findings, add: "This contradiction likely 
reflects differences in: [A] measurement of networks, [B] population studied, 
[C] evacuation context. Future research should disentangle these factors."

### Issue 3: Missing important paper
**Problem:** You do not cite Lee et al. 2022, which directly studies 
network effects in families—exactly your intersection of interest.

**Suggestion:** Add Lee et al. to the social networks section.

### Issue 4: Weak research direction
**Location:** "Research Direction" section

**Problem:** You propose an empirical study, but it is generic. 
Why is this study needed? What specific hypothesis?

**Suggestion:** Sharpen to: "We hypothesize that risk-averse households show 
stronger network effects than risk-seeking households. An empirical survey 
of 500 households would test this hypothesis by measuring: [specific variables]."

### Issue 5: Overstated gap
**Location:** "Only 8-10 papers address both networks and heterogeneity"

**Problem:** This is somewhat misleading. 24 papers study networks + 32 study 
heterogeneity. Even if few study both explicitly, implicit coverage is higher.

**Suggestion:** Revise to: "While 24 papers study social networks and 32 study 
behavioral heterogeneity, only 8-10 explicitly examine their intersection. 
This gap is significant because..."

### Summary
The review is strong but overclaims in a few places and undersells the 
research direction. With the above revisions, it will be publication-ready.
```

### Your review of Critic's feedback (Day 9)

You read the Critic's notes:
- ✅ Issue 1: Valid — need to be more careful about what is supported
- ✅ Issue 2: Valid — contradiction handling is weak
- ✅ Issue 3: Valid — you did miss Lee et al. 2022
- ⚠️ Issue 4: Valid but needs more thought — you don't have specific hypothesis yet
- ✅ Issue 5: Valid — overstated the gap

You decide:
1. Incorporate Issues 1, 2, 3, 5 immediately
2. For Issue 4: You will develop the specific hypothesis later (this is the next research phase)

## Phase 7: Revision (Day 10)

### Revise based on feedback

You prompt Synthesis:

```
Revise the draft based on this feedback:

1. Revise the social networks section to:
   - Include Lee et al. 2022 (families and networks)
   - Present Smith vs. Jones contradiction explicitly
   - Propose explanation for contradiction (measurement and population differences)

2. Add missing papers:
   - Lee et al. 2022

3. Revise gap statement:
   - Change "only 8-10 papers" to "24 study networks, 32 study heterogeneity, 
     but only 8-10 study both explicitly"
   - Strengthen the justification for why this gap matters

4. Research direction:
   - Framework: "To advance understanding, future research should address 
     three questions: [Q1] How do network effects vary by behavioral type? 
     [Q2] What mechanisms drive network influence? [Q3] Can real data validate 
     these network processes?"

Output: Revised draft (same structure, incorporated feedback).
```

### Synthesis's revised draft (Day 10)

Synthesis revises and produces a cleaner version.

### Your final review (Day 10)

You read the revised draft:
- ✅ Contradictions now explicitly addressed
- ✅ Lee et al. 2022 integrated
- ✅ Gap statement sharper and more honest
- ✅ Research questions clear

**Status: Ready to submit**

You save as: `draft_final.md`

## Phase 8: Export and use (Day 11)

### Convert to manuscript format

```bash
# Convert Markdown to PDF/Word for submission
pandoc draft_final.md -o evacuation_literature_review.pdf

# Extract bibliography
# (Synthesis already provides in BibTeX format)

# Add figures/tables
# (Gap Finder can generate comparison tables)
```

### Use the draft

You now have:
1. **Literature review** (5,000 words) — use for:
   - Paper background section
   - Grant proposal literature
   - Thesis chapter
   
2. **Bibliography** (52 papers) — use for:
   - Reference list
   - Further reading
   
3. **Gap identification** — use for:
   - Proposing your research project
   - Justifying funding
   - Positioning your work
   
4. **Synthesis** — use for:
   - Learning the landscape quickly
   - Explaining to colleagues
   - Teaching students

## Post-production: maintaining the knowledge base

Your research didn't stop. You continue:

### Week 2: New papers arrive

Scout runs weekly search and finds 5 new papers on the topic.

```
New papers found:
- Wilson et al. 2026: "Real-time network effects in evacuation"  ← directly in your gap
- Kumar et al. 2026: "Agent-based models with social networks"
- [3 more]
```

### Your decision

New paper Wilson et al. is directly in your research gap. You decide:

1. Add to methodology database
2. Re-run Gap Finder to see if gaps shift
3. Update research direction based on new findings

### New Gap Finder output

```
Updated gap analysis:
- Gap 1 (networks + heterogeneity + validation): still 0 papers [unchanged]
- Gap 2 (real-time network effects): now 1 paper (Wilson et al. 2026) [shifted]
- Gap 3 (multi-household coordination): now 3 papers [slightly addressed]

Updated research direction:
Wilson et al. 2026 moves the needle on real-time dynamics, but the core gap 
(empirical validation of network-heterogeneity interaction) remains unaddressed.
Your proposed research still fills this gap uniquely.
```

### Timeline and effort summary

| Phase | Agent | Duration | Effort | Output |
| --- | --- | --- | --- | --- |
| Setup | Human | 1 day | Low | Research brief, agent instructions |
| Scout | Scout | 2-3 days | Automated | 248 papers, metadata |
| Analyzer | Analyzer | 2-3 days | Automated | 246 extracted records |
| Gap Finder | Gap Finder | 1-2 days | Automated | Gap analysis, contradictions |
| Synthesis | Synthesis | 2-3 days | Automated | 4,000-word draft |
| Critic | Critic | 0.5 days | Automated | Review notes (10-15 issues) |
| Revision | Human + Synthesis | 2-3 days | Moderate | Final draft |
| **Total** | **Team** | **~2 weeks** | **4-5 hours human** | **Publication-ready review** |

**Key insight:** 95% of effort is automated. You spend ~4-5 hours making decisions.
Traditional approach: 80+ hours of human literature reading and synthesis.

## What worked well

1. ✅ Scout was exhaustive — found papers across multiple databases
2. ✅ Analyzer extracted consistently — easy to spot patterns
3. ✅ Gap Finder made gaps explicit — clearly identified missing intersection
4. ✅ Synthesis captured contradictions — with explanations
5. ✅ Critic caught overstated claims — improved accuracy
6. ✅ Iteration was fast — revisions took hours, not days

## What was challenging

1. ⚠️ Deciding scope boundaries — "am I searching broad enough?" was persistent
2. ⚠️ Handling ambiguity — 10-15 papers were borderline relevant (included conservatively)
3. ⚠️ Contradictions — harder to reconcile than expected; needed human judgment
4. ⚠️ Determining "doneness" — could always search deeper; required discipline to stop

## Key lessons

1. **Agent quality depends on instructions** — detailed, specific instructions produced better work
2. **Feedback loops matter** — Critic's feedback improved Synthesis version 2 dramatically
3. **Humans stay in loop** — agents handled breadth; humans handled judgment
4. **Knowledge base is persistent** — New papers later will integrate easily
5. **Time savings are real** — Saved ~75 hours of manual reading, but gained more nuance

## What comes next

With a polished literature review and gap identification, you now:

1. **Design the study** — propose an empirical project to test the gap
2. **Write the proposal** — use Gap Finder output to write research aims
3. **Monitor the field** — keep Scout running; stay current
4. **Teach others** — share the review with collaborators/students
5. **Publish** — expand review to full manuscript for journal

And when new papers arrive, the team updates the knowledge base automatically.

## The practical lesson

A research team can take you from "I have a question" to "Here is what we know and don't know" in 2 weeks, with 4-5 hours of your time.

That is the power of agents handling the mechanical parts (search, extract, compare) while you handle the thinking parts (decide scope, interpret contradictions, judge importance).

The literature is not scary anymore. It is a database your team can query and synthesize. And it stays current as new work arrives.

That is how you scale research.
