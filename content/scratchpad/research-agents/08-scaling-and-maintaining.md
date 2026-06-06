---
title: "Scaling and Maintaining: Sustaining Your Research Team"
date: "2026-06-13"
draft: false
type: "post"
tags:
  - "AI Agents"
  - "Infrastructure"
  - "Research operations"
  - "Knowledge management"
  - "Institutional memory"
---

You built a research team. It produced a literature review in 2 weeks. Now what?

Research does not stop. New papers arrive every week. New questions emerge. Maybe you want to run a second research project while the first one continues. Maybe you want to share the workflow with collaborators. Maybe you realize your Scout is expensive because it's calling hosted APIs every search.

This post is about the infrastructure and practices that let your research team scale from "one project" to "long-running research operations."

## Three scaling challenges

### Challenge 1: Cost management

Your first research project used Scout + Analyzer + Synthesis on hosted Claude Opus.

```
Scout: 18 searches × 3 databases × $0.015/search call ≈ $810
Analyzer: 246 papers × $0.10/paper ≈ $24.60
Gap Finder: 1 analysis run × $0.50 ≈ $0.50
Synthesis: 3 draft iterations × $5/iteration ≈ $15
Critic: 1 review × $5 ≈ $5

Total: ~$855 for a 2-week project

Manageable for one project. If you run 5 projects simultaneously, that is $4,275/month.
If each researcher runs 2-3 projects, that adds up quickly.
```

**How to manage cost:**

1. **Local models for routine work**
```
High-cost tasks (Hosted Claude Opus):
  - Synthesis (needs strong writing)
  - Critic (needs reasoning)
  
Low-cost tasks (Local Ollama):
  - Scout (needs tool use, not creativity)
  - Analyzer (needs consistency, not creativity)
  - Gap Finder (pattern matching, not creativity)

Estimated cost reduction: 60-70% (local handles 70% of workload)
```

2. **Caching and reuse**
```
Scout runs weekly.
- Week 1: Search for "evacuation" AND "social network"
- Week 2: Same search (cached)
- Week 3: Same search (cached)

APIs support caching. Same search should not cost full price twice.
Use prompt caching (Anthropic) or similar.

Cost reduction: 50% for repetitive searches
```

3. **Batch processing**
```
Analyzer processes papers one-by-one (expensive).
Option: Batch 10 papers per call (30 papers in 3 calls instead of 30).

Requires structured batching and deduplication.
Cost reduction: 70% for Analyzer
```

4. **Scheduled runs**
```
Scout runs continuously (expensive).
Option: Scout runs on schedule (weekly, not daily).

Benefits: predictable costs, fewer redundant searches
Trade-off: slower to catch emerging work (but still weekly is fast)
```

### Challenge 2: Knowledge persistence

After 2 weeks, you have a knowledge base:

```
knowledge_base/
  incoming_papers/
  methodology/
  gaps/
  synthesis/
  review/
  metadata/
```

Six months later, what happens?

**Problem 1: Where is the knowledge?**
- Stored in local CSV files?
- In a Git repo?
- Lost when your laptop crashes?

**Problem 2: How do you version?**
- You run Scout again, find 50 new papers
- Analyzer re-extracts everything
- Gap Finder re-runs
- Which is the "current" state? Which is version 1? Version 2?

**Solution: Structured knowledge base with versioning**

```yaml
# knowledge_base/config.yaml
project: "evacuation-social-networks"
created: 2026-06-01
updated: 2026-06-13

versions:
  v1:
    created: 2026-06-01
    papers_count: 248
    last_synthetic_update: 2026-06-10
    status: "initial-literature-review"
    
  v1.1:
    created: 2026-06-20
    papers_count: 251  # Scout found 3 new papers
    change: "weekly-scout-run"
    
  v2:
    created: 2026-07-01
    papers_count: 280
    change: "directed-search-multi-hazard"
    status: "expanded-scope"

current_version: v2
```

**Recommended structure:**

```
research_kb/
  projects/
    project_name/
      versions/
        v1/                 # Initial research
          papers.yaml
          methodology.csv
          gaps.md
          synthesis_draft.md
          
        v2/                 # After directed search
          papers.yaml
          methodology.csv
          gaps.md
          synthesis_draft_v2.md
          
        v2.1/               # Weekly update
          papers.yaml
          methodology.csv
          [gaps/synthesis unchanged]
          
      metadata/
        config.yaml         # Project info
        log.md              # Day-by-day history
        instructions/       # Agent instructions (versioned)
          scout.md
          analyzer.md
          gap_finder.md
          synthesis.md
          critic.md
          
      artifacts/
        literature_review_v1.pdf
        literature_review_v2.pdf
        citations.bib
```

**Versioning strategy:**

- **Major version (v1 → v2)** - scope change, new agent directives, significant new papers
- **Minor version (v2 → v2.1)** - routine updates (weekly Scout runs, re-extractions)
- **Tag versions** - "v2-submitted-to-journal", "v2-grant-proposal", "v2-defense"

This makes it easy to ask: "What did we know when we submitted the grant proposal? Let me look at v2-grant-proposal."

### Challenge 3: Coordinating multiple projects

Your evacuation research is progressing. But you also want to start a second project: **"AI for disaster recovery logistics"**

Both projects need agents. You could:

**Option A: Duplicate agents**
```
Project 1 (evacuation):
  Scout-1, Analyzer-1, Gap Finder-1, Synthesis-1, Critic-1

Project 2 (disaster recovery):
  Scout-2, Analyzer-2, Gap Finder-2, Synthesis-2, Critic-2

Cost: 10 agent runs
Problem: Each agent is independent, no learning across projects
```

**Option B: Shared infrastructure**
```
Shared services:
  - Scout service (configurable by project)
  - Analyzer service (configurable by project)
  - Gap Finder service
  - Synthesis service
  - Critic service

Project 1 (evacuation):
  Config: search terms, databases, scope

Project 2 (disaster recovery):
  Config: different search terms, scope

Cost: 5 agent services running 2 configurations each
Benefit: Faster iteration, learnings transfer, easier maintenance
```

**Recommended: Shared infrastructure with project-specific configurations**

```python
# infrastructure/agents/scout.py
class Scout:
  def __init__(self, config):
    self.databases = config['databases']
    self.search_terms = config['search_terms']
    self.output_path = config['output_path']
    
  def run(self):
    # Same implementation for all projects
    # Only configuration differs
    
# Configuration
evacuation_config = {
  'databases': ['google_scholar', 'arxiv', 'trid'],
  'search_terms': [...],
  'output_path': 'research_kb/projects/evacuation/...'
}

disaster_recovery_config = {
  'databases': ['google_scholar', 'arxiv', 'ssrn'],
  'search_terms': [...],
  'output_path': 'research_kb/projects/disaster_recovery/...'
}

# Run both projects with shared Scout
scout = Scout()
scout.run(evacuation_config)
scout.run(disaster_recovery_config)
```

## Infrastructure recommendations

### Tier 1: Basic (low cost, manual)

**Setup:**
- Local Ollama for Scout, Analyzer, Gap Finder
- Hosted Claude Opus for Synthesis, Critic
- Local SQLite for methodology database
- GitHub for version control

**Tools:**
```
Local:
  - Ollama (mistral-medium or llama2)
  - SQLite3
  - Git

Hosted (pay-as-you-go):
  - Claude Opus API ($25/month for light use)
  
No subscription costs
```

**Workflow:**
```bash
# Week 1: Manual run
scout_config=evacuation.yaml
ollama run mistral < scout_prompt.md > incoming_papers.yaml

analyzer_config=evacuation.yaml
for paper in $(cat incoming_papers.yaml); do
  ollama run mistral < analyzer_prompt.md >> methodology.csv
done

gap_finder_output=$(ollama run mistral < gap_finder_prompt.md)
synthesis_draft=$(claude-api < synthesis_prompt.md)  # Hosted
critic_review=$(claude-api < critic_prompt.md)       # Hosted
```

**Cost:** $0 (local) + $30-50/month (hosted fallback)

**Maintenance:** Manual, ad-hoc

### Tier 2: Professional (moderate cost, semi-automated)

**Setup:**
- Docker containers for each agent
- Scheduled jobs (cron or GitHub Actions)
- Cloud database (PostgreSQL)
- S3 for knowledge base versioning and backup

**Tools:**
```
Local/Container:
  - Docker (agent containers)
  - cron / systemd for scheduling
  
Cloud:
  - PostgreSQL (methodology database)
  - AWS S3 (knowledge base storage)
  - GitHub Actions (orchestration)
  
APIs:
  - Claude API (Synthesis, Critic)
  - Semantic Scholar API
  - arxiv API
```

**Workflow:**
```yaml
# .github/workflows/research_pipeline.yml
name: Research Pipeline
on:
  schedule:
    - cron: '0 0 * * MON'  # Weekly on Monday
  
jobs:
  scout:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - run: docker run scout-agent --project evacuation
      - uses: actions/upload-artifact@v3
        with:
          name: incoming_papers
          path: output/papers.yaml
          
  analyzer:
    needs: scout
    runs-on: ubuntu-latest
    steps:
      - run: docker run analyzer-agent --project evacuation
      - uses: actions/upload-artifact@v3
        with:
          name: methodology_db
          path: output/methodology.csv
          
  gap_finder:
    needs: analyzer
    runs-on: ubuntu-latest
    steps:
      - run: docker run gap_finder-agent --project evacuation
      - uses: actions/upload-artifact@v3
        with:
          name: gaps
          path: output/gaps.md
          
  synthesis:
    needs: gap_finder
    runs-on: ubuntu-latest
    steps:
      - run: docker run synthesis-agent --project evacuation
      - uses: actions/upload-artifact@v3
        with:
          name: draft
          path: output/draft.md
```

**Cost:** $50-100/month (APIs, storage, compute)

**Maintenance:** Moderate (monitor logs, update agents quarterly)

### Tier 3: Enterprise (high cost, fully automated)

**Setup:**
- Agent orchestration platform (LangChain Cloud, Anthropic Agents)
- Managed database (RDS)
- Data warehouse (Snowflake)
- Monitoring and alerting

**Tools:**
```
Orchestration:
  - Anthropic Agents or LangChain Cloud
  - Databricks for data processing
  
Storage:
  - PostgreSQL (RDS)
  - Snowflake (data warehouse)
  - S3 (backup)
  
Monitoring:
  - DataDog or Prometheus
  - PagerDuty for alerts
  
APIs:
  - Claude API (all agents, local or hosted)
```

**Workflow:**
```python
# Fully managed, event-driven
from anthropic.agents import Agent
from anthropic.agents import Orchestrator

orchestrator = Orchestrator()

# Register agents
orchestrator.register_agent(Scout, schedule='weekly')
orchestrator.register_agent(Analyzer, trigger='after:scout')
orchestrator.register_agent(GapFinder, trigger='after:analyzer')
orchestrator.register_agent(Synthesis, trigger='after:gap_finder')
orchestrator.register_agent(Critic, trigger='after:synthesis')

# Run everything automatically
orchestrator.run()

# Query results anytime
results = orchestrator.query('research_kb/projects/evacuation')
```

**Cost:** $500-2,000/month (orchestration, compute, storage)

**Maintenance:** Minimal (platform handles scaling, monitoring)

## Operational practices

### Practice 1: Weekly reviews

Every Monday, review the past week:

```markdown
# Weekly Research Report - Week of 2026-06-13

## Project: Evacuation + Social Networks

### Scout
- New papers found: 3
- Searches performed: 18
- Duplicate detection: 2 duplicates
- Status: ✅ Healthy

### Analyzer
- Papers processed: 3
- Accuracy (spot-check): 100% (3/3)
- Extraction issues: None
- Status: ✅ Healthy

### Gap Finder
- Previous gaps: 5
- Gaps updated: 2 (narrowed with new data)
- New gaps: 0
- Status: ✅ Healthy

### Synthesis
- Version: v2.1
- Last updated: 2026-06-10
- Recency: 3 days (due for update)
- Status: ⚠️ Stale (has new papers not yet synthesized)

### Action items
1. Run Synthesis on new papers (currently stale)
2. Update PDF version
3. Notify collaborators of new findings
```

### Practice 2: Quarterly checkups

Every quarter, assess the knowledge base and agent performance:

```markdown
# Quarterly Checkup - Q2 2026

## Knowledge base health
- Total papers: 285 (up from 248 in Q1)
- Versions: v2.1 (current)
- Size: 450 MB (reasonable)
- Backup status: Last backup 2026-06-10 ✅

## Agent performance
- Scout accuracy: ✅ High (no missed major papers)
- Analyzer accuracy: ✅ 96% (vs. target 95%)
- Gap Finder consistency: ✅ Gaps track well over time
- Synthesis quality: ✅ Well-organized, properly cited

## Cost tracking
- Q1: $850 (initial project)
- Q2 (so far): $120 (maintenance + weekly runs)
- Annualized estimate: ~$1,000/project

## Improvements to implement
1. Reduce Scout cost via caching (target: 30% reduction)
2. Add multi-project orchestration (next project launching)
3. Document edge cases (15 ambiguous papers; document decision rules)
```

### Practice 3: Collaboration protocols

When sharing work with a collaborator:

```markdown
# Sharing the Evacuation KB with Dr. Jane Smith

## What they get
- Full knowledge base (v2.1)
- Agent instructions and prompts
- Methodology database and Gap Finder analysis
- Literature review draft (PDF + Markdown)

## What they can modify
- Search terms (Scout directive)
- Gap Finder focus (narrow/broaden scope)
- Synthesis organization (different outline)

## What they should NOT modify
- Agent code (breaking changes risk)
- Methodology extraction schema (breaks consistency)
- Core papers list (unless duplicates found)

## Handoff protocol
1. Send compressed KB folder
2. Include README with version info
3. Point to instructions for running agents
4. Suggest: start with Gap Finder (fastest to understand landscape)
5. Collaborate on new directions (directed searches, scope changes)

## Sync protocol
- Weekly: Compare incoming_papers.yaml (any new papers missed?)
- Monthly: Merge separate Scout runs (avoid duplicates)
- Quarterly: Reconcile Gap Finder analyses
```

### Practice 4: Archiving and learning

At the end of a project or year, archive learnings:

```markdown
# Archiving Project: Evacuation + Social Networks

## Final statistics
- Total papers reviewed: 285
- Literature review published: Yes
- Follow-up studies proposed: 2
- Collaborators engaged: 3

## What worked well
1. Scout with multi-database approach (high coverage)
2. Iterative Synthesis + Critic loop (quality improved 40%)
3. Gap Finder explicitly identified research opportunity

## What could improve
1. Scout took longer than expected (3 days vs. 2 days planned)
   → Reason: database API rate limits
   → Fix: add caching, batch queries

2. Analyzer had 3 ambiguous papers (unclear methodology)
   → Reason: papers did not clearly describe methods
   → Fix: develop decision rules for ambiguous cases

3. Knew Scout was missing papers only in week 2
   → Reason: no early quality check
   → Fix: spot-check Scout results daily, not just at end

## Tribal knowledge to preserve
- Key databases for evacuation research: Scholar, arxiv, TRID (ResearchGate less useful)
- Tricky terminology: "behavioral heterogeneity" vs. "individual differences" (both use but inconsistent)
- Common pitfall: papers on "crowd dynamics" seem related but mostly not about evacuation
- Edge case: 5 papers are masters theses (not peer-reviewed; mark distinctly)

## Recommendations for next evacuation project
1. Use this KB as foundation (saves 2-3 weeks)
2. Directed search: "network effects in multi-hazard scenarios" (gap identified here)
3. Budget extra time for real-world data collection (literature only takes you so far)
```

## Sustaining motivation and quality

### The "staleness problem"

After 3 months, your literature review feels outdated. Scout finds 20 new papers. Do you re-run everything?

**Option A: Full update (expensive)**
```
Re-run: Scout, Analyzer, Gap Finder, Synthesis, Critic
Cost: $850
Time: 2 weeks
Benefit: Fully up-to-date, catches drift
```

**Option B: Incremental update (cheap)**
```
Run: Scout (new papers only), Analyzer (new papers only), Gap Finder (re-run)
Don't re-run: Synthesis, Critic (update manually)
Cost: $150
Time: 3-4 days
Benefit: Faster, cheaper, but Synthesis may be stale
```

**Recommendation: Incremental by default, full updates every 6 months or after scope change**

```yaml
maintenance_schedule:
  weekly:
    - Scout (find new papers)
    - Analyzer (extract new papers)
    - Gap Finder (re-run, identify shifts)
    cost: $50/week
    
  monthly:
    - Review new gaps
    - Update research direction if needed
    cost: $0 (manual review)
    
  quarterly:
    - Full check: scout coverage, analyzer accuracy
    - Update synthesis if gaps shifted significantly
    cost: $150-300
    
  semi-annually:
    - Full update: all agents re-run
    - Update published version
    cost: $850
```

### The "decision fatigue" problem

After 6 months, you are tired of reviewing agent outputs and making decisions.

**Solution: Decision templates**

```markdown
# Decision Template: Scout Coverage

When Scout produces results, evaluate:

[ ] Breadth: At least 3 databases searched?
[ ] Depth: At least 5 pages per search?
[ ] Novelty: Any papers not in previous week?
[ ] Quality: Relevant to research question (rough check)?

If all checked: ACCEPT Scout output
If any unchecked: INVESTIGATE (why did this fail?)
```

Similar templates for Analyzer, Gap Finder, Synthesis quality checks.

Result: Reduces decision time from 30 minutes to 5 minutes.

## Lessons from operations at scale

### Lesson 1: Local-first, hosted-fallback

Run routine work locally (Scout, Analyzer). Use hosted (Synthesis, Critic) only for high-stakes work.

### Lesson 2: Versioning prevents disasters

Save every major state. Recovers from agent errors, tracks evolution of understanding.

### Lesson 3: Consistency matters more than perfection

A 90% accurate Analyzer applied consistently is better than a 95% accurate Analyzer that extracts differently each time.

### Lesson 4: Automate observation, not decision

Automate agents observing data (Scout, Analyzer). Keep humans deciding (which gap matters? what to explore next?).

### Lesson 5: Cost drops over time

- Project 1: $850 (learning + full build-out)
- Project 2: $300 (reuse agents, faster setup)
- Ongoing maintenance: $100-200/month (mostly Scout)

### Lesson 6: Knowledge base becomes more valuable over time

- Month 1: KB used for literature review
- Month 3: KB used to teach collaborators
- Month 6: KB used to spot emerging trends
- Year 1: KB is your entire research lineage

## Building toward research at scale

This started as: "How can I use agents to manage literature?"

It evolved into: "How do I build research infrastructure that scales to multiple projects, teams, and years?"

The answer is the same each step:
1. Automate the mechanical parts (search, extract, compare)
2. Keep humans in the loop for judgment
3. Version everything
4. Make it repeatable
5. Know your costs

When you do this well, research becomes less about "reading 200 papers" and more about "systematically understanding a landscape."

That is the shift from research-as-overwhelming to research-as-manageable.

## What comes next (beyond this series)

With your research team operational, your next steps:

1. **Deploy and share** - Use this infrastructure on real projects
2. **Extend agents** - Add a "Replicability Checker" agent to assess methodology rigor
3. **Connect to data** - Add agents that can access datasets mentioned in papers
4. **Build community** - Share prompts, templates, knowledge bases with collaborators
5. **Contribute back** - If using open-source tools, contribute improvements

## The practical lesson

Building a research team is not a one-time project. It is an operational system that improves over time.

First 2 weeks: Set up, run one project, learn what works.
Next 3 months: Run same project repeatedly, refine instructions, catch edge cases.
Next year: Scale to 2-3 projects, formalize infrastructure, document practices.

By year 2, research becomes: ask a question, let the team work, make decisions, get answers.

That is what scales. Not intelligence. Not agents. But a system where humans and machines each do what they do best.
