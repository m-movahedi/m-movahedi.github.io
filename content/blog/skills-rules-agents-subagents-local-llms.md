---
title : "Skills, Rules, Agents, and Subagents"
date : "2026-06-03"
draft : false
type : "post"
tags:
  - "AI Agents"
  - "Skills"
  - "Subagents"
  - "Local LLMs"
---

Once you use LLM tools for more than casual chat, you run into a problem: you keep repeating the same instructions. "Use this style." "Check these files." "Run this test." "Prefer this source." Skills, rules, agents, and subagents are ways of making those instructions reusable.

Prefer the guided version first? Start with [Local LLMs: A Scrollytelling Guide](/blog/local-llms-scrollytelling/).

## Mental model: durable context for repeatable work

| Concept | Beginner meaning |
| --- | --- |
| Rule | A standing instruction or constraint |
| Skill | A reusable workflow with instructions, references, scripts, or assets |
| Agent | A model-driven worker with tools and a task |
| Subagent | A specialized helper agent delegated by a main agent |
| Project instructions | Repo-specific guidance for how work should be done |
| MCP tool | A live capability exposed to a model, such as reading issues or querying a database |

<div class="llm-visual">
  <h3>Reusable instruction ladder</h3>
  <div class="llm-stack">
    <div class="llm-step"><strong>Rule</strong><span>A standing constraint, such as front matter shape or files to avoid.</span></div>
    <div class="llm-step"><strong>Skill</strong><span>A repeatable workflow with instructions, references, scripts, or assets.</span></div>
    <div class="llm-step"><strong>Agent</strong><span>A model-driven worker that can use tools and inspect results.</span></div>
    <div class="llm-step"><strong>Subagent</strong><span>A focused helper for research, review, debugging, or security.</span></div>
  </div>
  <details><summary>Rule of thumb</summary><p>Use a rule for a constraint, a skill for a repeated workflow, an agent for multi-step action, and a subagent when one focused role should not crowd the main context.</p></details>
</div>

Rules are durable instructions. Antigravity docs describe rules as Markdown files that can be global or workspace-specific, with activation modes such as manual, always on, model decision, or glob-based. Verify current details in [Antigravity rules](https://antigravity.google/docs/ide-rules).

A skill is a reusable workflow. In Codex-style environments, a skill can contain instructions plus supporting files, scripts, references, or assets. Good skill candidates include a blog editor, local model evaluator, PR reviewer, or literature-search workflow.

An agent is a model wrapped in a loop: observe, decide, act, observe again. A subagent is a specialized worker delegated by a main agent. Anthropic's Claude Code SDK docs describe subagents as separate agent instances for focused subtasks, context isolation, parallel work, specialized instructions, and tool restrictions. Verify current details in [Claude Code subagents](https://code.claude.com/docs/en/agent-sdk/subagents).

## Example: local LLM evaluator skill

```markdown
---
name: local-llm-evaluator
description: Compare local models on a small fixed prompt set before recommending one.
---

1. Record hardware and runtime.
2. Verify model IDs and quantization.
3. Run the fixed prompt set.
4. Score output quality, speed, and failures.
5. Recommend the smallest model that passes the target tasks.
6. Save results with date, model ID, runtime, and parameters.
```

## What to verify because tools change

Verify product-specific file paths, activation rules, subagent support, and tool permissions from official docs. The concepts are stable, but implementation details differ across Codex, Claude Code, Antigravity, and local agent frameworks.
