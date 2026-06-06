---
title : "Local LLMs 207: Skills, Rules, Agents, and Subagents"
date : "2026-06-03"
draft : false
type : "post"
tags:
  - "AI Agents"
  - "Skills"
  - "Subagents"
  - "Local LLMs"
---

Once you use LLM tools for more than casual chat, you run into a problem: you keep repeating the same instructions. "Use this style." "Check these files." "Run this test." "Prefer this source." "Do not edit generated files."

Skills, rules, agents, and subagents are different ways of making those instructions reusable.

## Mental model: durable context for repeatable work

Think of these concepts as layers of reusable behavior:

| Concept | Beginner meaning |
| --- | --- |
| Rule | A standing instruction or constraint |
| Skill | A reusable workflow with instructions, references, scripts, or assets |
| Agent | A model-driven worker with tools and a task |
| Subagent | A specialized helper agent delegated by a main agent |
| Project instructions | Repo-specific guidance for how work should be done |
| MCP tool | A live capability exposed to a model, such as reading issues or querying a database |

Different products use different names, but the purpose is similar: reduce repeated prompting and make behavior more consistent.

## Rules

Rules are durable instructions. In Google Antigravity, official docs describe rules as Markdown files that can be global or workspace-specific, with activation modes such as manual, always on, model decision, or glob-based. The current docs say workspace rules live in `.agents/rules`, while older `.agent/rules` paths remain supported.

Rules are best for constraints:

| Good rule | Weak rule |
| --- | --- |
| "Use Hugo front matter with `title`, `date`, `draft`, and `type`." | "Write better." |
| "Do not edit generated `public/` files unless asked." | "Be careful." |
| "Run `hugo` after content changes." | "Make sure it works." |

Official docs to verify:

- [Antigravity rules](https://antigravity.google/docs/ide-rules)

## Skills

A skill is a reusable workflow. In Codex-style environments, a skill can contain instructions plus supporting files, scripts, references, or assets. The useful thing about a skill is not just the prompt. It is packaging repeatable work so the agent knows how to do the task next time.

Good skill candidates:

| Skill idea | Why it helps |
| --- | --- |
| Blog post editor | Applies front matter, style, link checks, and build verification |
| Local model evaluator | Runs the same prompts against multiple models and records results |
| PR reviewer | Uses a consistent review checklist |
| Literature search | Searches sources, stores summaries, and writes citations |

Official OpenAI Codex resources mention saving workflows as skills and testing agent skills with evaluations. Verify current Codex skill mechanics in current OpenAI docs before publishing exact file layouts.

## Agents

An agent is a model wrapped in a loop: observe, decide, act, observe again. For coding tools, actions may include reading files, searching code, editing, running tests, opening a browser, or calling MCP tools.

Agents are useful when:

1. The task has multiple steps.
2. The system can observe whether each step worked.
3. Tools are available.
4. Mistakes can be reviewed or rolled back.
5. The value of autonomy is higher than the risk.

Agents are not magic. A one-shot prompt is often better for small tasks.

## Subagents

Subagents are specialized workers delegated by a main agent. Anthropic's Claude Code SDK docs describe subagents as separate agent instances for focused subtasks, context isolation, parallel work, specialized instructions, and tool restrictions. The current SDK docs emphasize programmatic definitions, while filesystem-based `.claude/agents/` definitions are also documented as an alternative.

Subagents are useful when:

| Situation | Useful subagent |
| --- | --- |
| Large codebase search | Research subagent |
| Risky diff | Code review subagent |
| Broken tests | Debugging subagent |
| Security-sensitive change | Security audit subagent |

Official docs to verify:

- [Claude Code subagents in the SDK](https://code.claude.com/docs/en/agent-sdk/subagents)

## Local LLMs and reusable workflows

Local LLMs can use the same ideas, but usually with more manual wiring. A local model does not automatically know your rules, tools, or project conventions. Your app or agent framework has to provide them.

Typical local pattern:

1. Store instructions in Markdown.
2. Load the relevant instruction file into the prompt.
3. Expose local tools through an agent framework or MCP.
4. Keep a small evaluation set.
5. Record model, runtime, prompt, and result.

## Example: local LLM evaluator skill

A simple local evaluator workflow could say:

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

The important part is repeatability. If you test models differently every time, you are mostly testing your mood.

<style>
  .llm-papers {
    border: 1px solid rgba(128, 128, 128, 0.28);
    border-radius: 14px;
    background: rgba(128, 128, 128, 0.06);
    margin: 1.2rem 0 1.6rem;
    padding: 0.9rem 1rem;
  }

  .llm-papers strong {
    display: block;
    margin-bottom: 0.35rem;
  }

  .llm-papers ul {
    margin: 0.35rem 0 0;
    padding-left: 1.2rem;
  }

  .llm-papers li {
    margin: 0.35rem 0;
  }
</style>

<div class="llm-papers">
  <strong>Key papers on prompting, instruction following, and agent evaluation</strong>
  <ul>
    <li><a href="https://arxiv.org/abs/2203.02155">Ouyang et al. (2022), "Training Language Models to Follow Instructions with Human Feedback"</a>: foundational work on instruction tuning and RLHF that explains why trained agents follow reusable instructions better than base models.</li>
    <li><a href="https://arxiv.org/abs/2212.09561">Wei et al. (2022), "Emergent Abilities of Large Language Models"</a>: explains scaling phenomena relevant to choosing between models for reliable instruction and tool-use compliance.</li>
    <li><a href="https://arxiv.org/abs/2311.07102">Xu et al. (2023), "Agents That Can Read: Diverse Retrieval-Augmented Generation for Questionnaire-style Machine Reading Assessment"</a>: relevant to how agents and subagents manage context, instructions, and information retrieval.</li>
  </ul>
</div>

## What to verify because tools change

Verify product-specific file paths, activation rules, subagent support, and tool permissions from official docs. The concepts are stable, but the exact implementation details differ across Codex, Claude Code, Antigravity, and local agent frameworks.

The practical lesson: skills and rules are how you stop retyping your working style. Subagents are how you split large work into focused roles. Local LLMs can participate, but the surrounding tool system decides how agentic they really are.
