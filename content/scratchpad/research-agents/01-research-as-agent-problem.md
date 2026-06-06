---
title: "Research as an Agent Problem"
date: "2026-06-06"
draft: true
type: "post"
tags:
  - "AI Agents"
  - "Research methodology"
  - "Multi-agent systems"
  - "Literature review"
  - "Knowledge synthesis"
---

A researcher's workflow is full of repetitive work: scanning papers, summarizing findings, tracking who did what and when, spotting gaps, connecting ideas across domains, and revising your own methods based on what you find. Most of this work is done alone or in small teams. Each researcher becomes a bottleneck.

What if instead of one person reading papers, summarizing, and synthesizing, you had specialized agents exploring in parallel?

This is not about replacing researchers. It is about freeing researchers to focus on the hard thinking while agents handle the systematic, observable, and repeatable work.

## The researcher's bottleneck

A typical literature review workflow looks like this:

1. **Search** - Query databases, scan titles, judge relevance (hours to days)
2. **Read and extract** - Skim papers, extract methods/findings, track sources (weeks)
3. **Organize** - Group papers by theme, note relationships, identify gaps (days)
4. **Synthesize** - Write narrative, connect ideas, propose new questions (weeks)
5. **Iterate** - Find missing papers, revise understanding, update the narrative (ongoing)

The bottleneck is not computation. It is human attention. One person cannot simultaneously:
- Monitor ten databases for new papers
- Extract structured data from hundreds of PDFs
- Cross-reference findings to spot contradictions
- Build a coherent mental model of the landscape
- Stay current as new work arrives

The result: literature reviews become subjective snapshots, recent work is missed, methodological gaps are overlooked, and new researchers repeat the same searches others already did.

## Where agents help

An agent is a system that observes, decides, and acts. For research, agents can handle the **systematic** parts of the workflow—the parts where you can verify the work was done correctly and repeat it reliably.

| Bottleneck | Traditional approach | Agentic approach |
| --- | --- | --- |
| Search across databases | Manual queries, selective | Scheduled autonomous searches, exhaustive |
| Extract structured data | Manual reading, notes | Automated extraction with verification |
| Track relationships | Mental model or spreadsheet | Persistent knowledge graph updated continuously |
| Detect gaps | Reader intuition | Systematic comparison across papers |
| Synthesize narrative | Solo writing | Agents propose sections, humans refine |
| Monitor for new work | Manual checks | Continuous agents watching arrival feeds |

This does not replace the researcher. It replaces the tedious parts that slow thinking down.

## Four ways agents change research

### 1. Parallel exploration

Instead of one person reading papers sequentially, deploy multiple agents:
- One searches for recent conference papers
- One scans journal archives for older foundational work
- One monitors preprint servers for emerging ideas
- One checks for methods your domain borrowed from others

They work in parallel. A human researcher skimming papers linearly would take weeks for what agents accomplish in hours.

### 2. Systematic extraction

When an agent finds a paper, it can extract metadata reliably:
- Authors, publication venue, date
- Core research question
- Datasets used
- Methods and tools
- Key findings and limitations
- What the authors do not claim

A human reads the abstract and skims once. An agent can extract the same fields from every paper the same way, making comparison easy.

### 3. Persistent knowledge base

Papers discovered do not disappear into notebook chaos. Each finding updates a central knowledge base:
- New papers are compared against existing ones for novelty
- Duplicate effort is flagged
- Relationships between papers are recorded
- When you return to the research in six months, the knowledge base is still there

### 4. Bias reduction through iteration

An individual researcher has blind spots: papers they did not search the right way, databases they overlooked, methodological assumptions they did not question. When multiple agents explore independently, they catch different gaps.

A human then reviews and synthesizes what the agents found, making deliberate choices about what matters. But the agents make sure nothing important is accidentally overlooked.

## What agents cannot do

Agents are not a substitute for research judgment. They cannot:
- Decide whether a research question matters
- Judge whether a method is sound without guidance
- Choose between competing paradigms
- Determine what deserves publication
- Know which constraints are negotiable vs. fixed

These require human wisdom, experience, and taste. What agents do is expand the horizon of what a human can see before making those judgments.

## A concrete example: evacuation behavior research

Suppose you want to understand how people evacuate during disasters. Your bottleneck today:

1. You manually search Google Scholar: "evacuation behavior", "disaster evacuation", "human behavior flooding", etc.
2. You skim abstracts and decide which 20 papers to read
3. You extract methods and findings by hand
4. You write a literature review summarizing what you found
5. Three months later, new papers arrive; you manually re-search to see if anything changed

With agents:

1. An agent continuously monitors multiple databases (Google Scholar, arxiv, TRID, SSRN, domain-specific repos) for variations of your search terms.
2. Each new paper is extracted for authors, methods (survey vs. simulation vs. real-world), datasets (if any), findings, and limitations.
3. An agent compares each new paper to what you already know: "This uses the same dataset as Paper X but a different model. New finding: Y."
4. A synthesis agent builds an evolving mind-graph: "Flow-based models predict evacuation time well, but agent-based models capture behavioral heterogeneity. No one has combined both approaches for cascading failures."
5. When you query the knowledge base, you get not just papers but structured comparison.
6. Every week, the agent alerts you: "5 new papers arrived. 2 are directly relevant. Here is how they change your landscape."

The researcher is no longer overwhelmed. The agent is no longer passive.

## Tradeoffs to manage

### Speed vs. depth

Agents are fast at breadth (scan 1,000 papers). They may be shallow at depth (miss nuance in a complex paper). The workflow is: agents find candidates, humans read the important ones carefully.

### Recall vs. precision

An agent trained to find *everything* related to evacuation will include papers on crowd dynamics, ant colony behavior, building architecture, and network analysis—many with no direct relevance. One trained to find only direct matches misses creative connections.

Solution: agents with adjustable search width. Start broad, then filter.

### Autonomy vs. alignment

An agent working without feedback will optimize for what you told it to do, not what you actually needed. If you ask it to find papers on "agent-based evacuation models" and do not mention behavioral heterogeneity, it may miss papers that use agent-based models for other purposes.

Solution: agents you can interrupt, redirect, and teach as you work.

## The research team mental model

Think of agents not as individual chatbots but as a research team with specialization:

- **Literature Scout** - Finds papers systematically across sources
- **Methodology Analyzer** - Extracts methods, datasets, tools, and validation approaches
- **Gap Finder** - Compares across papers and highlights what is missing
- **Synthesis Writer** - Drafts sections and proposes narrative connections
- **Critic** - Questions assumptions, flags contradictions, suggests alternatives

These are not five separate chatbots. They are coordinated agents with shared access to a knowledge base, specialized instructions, and limited tool permissions.

You are the team lead. Your job is not to do all the work. Your job is to:
1. Set the research question
2. Review what the team finds
3. Make decisions agents cannot
4. Provide feedback that improves the team's work

## Why now?

Agentic AI is suddenly practical because:

1. **Tool use is reliable** - Models can now use tools consistently and understand when to use them
2. **Instruction following improved** - You can write detailed rules and have them followed
3. **MCP and APIs are available** - Agents can connect to databases, search engines, and knowledge bases
4. **Multi-turn reasoning works** - Agents can observe, revise, and improve their own work
5. **Cost is manageable** - Running agents on local models or selective hosted API calls is affordable

Five years ago, agents for research were too expensive and unreliable. Today they are viable.

## What comes next in this series

The next posts will cover:

1. **Designing your research team** - How to think about agent roles, specialization, and coordination
2. **The literature scout agent** - Building an agent that searches databases autonomously
3. **The methodology analyzer** - Extracting structured data from papers at scale
4. **The synthesis agent** - Turning scattered findings into coherent narrative
5. **Multi-agent workflows** - How agents discover contradictions and how you resolve them
6. **From idea to first draft** - A complete walkthrough of using a research team on a new project
7. **Scaling and maintaining** - Tools, infrastructure, and versioning for long-running research

Each post includes practical workflows, concrete prompts, and tradeoffs to consider.

## The practical lesson

Research is an information problem wrapped in a thinking problem. Agents are good at the information part. You are good at the thinking part. When you separate them cleanly, both can do their best work.

The researcher's job is not changing—it is shifting. Less time reading abstractly, more time deciding. Less time managing notes, more time building understanding. Less time re-discovering what others found, more time asking what no one has asked yet.

That is what an agentic research team enables.
