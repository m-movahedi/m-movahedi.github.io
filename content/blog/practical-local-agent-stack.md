---
title : "A Practical Local Agent Stack"
date : "2026-06-05"
draft : false
type : "post"
tags:
  - "Local LLMs"
  - "AI Agents"
  - "MCP"
  - "Ollama"
  - "AI Tools"
---

After the tools, models, routers, agents, skills, and MCP servers, it helps to put the pieces into one practical stack.

Prefer the guided version first? Start with [Local LLMs: A Scrollytelling Guide](/blog/local-llms-scrollytelling/).

The goal is not to build the most complicated local AI system. The goal is to build a workflow you can understand, debug, and improve.

## Mental model: start local, add power only when needed

| Layer | Default choice | Why |
| --- | --- | --- |
| Runtime | Ollama or another beginner-friendly local server | Gets a model running quickly |
| Model | Small or medium instruct model | Establishes a stable baseline |
| API shape | OpenAI-compatible endpoint when possible | Works with many clients |
| Evaluation | Fixed prompt set | Prevents vibe-based model choice |
| Tools | MCP servers or app-native tools | Adds controlled access to context |
| Instructions | Rules, skills, or project notes | Makes behavior repeatable |
| Hosted fallback | OpenRouter or direct provider API | Handles tasks local models cannot |
| Coding agent | Claude Code, Codex, Antigravity, or another tool | Handles repository actions and verification |

<div class="llm-visual">
  <h3>Build your stack one layer at a time</h3>
  <div class="llm-stack">
    <details open><summary>1. Runtime and model</summary><p>Get one local model responding before adding more software.</p></details>
    <details><summary>2. Evaluation prompts</summary><p>Use the same small prompt set every time you test a model.</p></details>
    <details><summary>3. Client or editor</summary><p>Connect chat, scripts, notebooks, or editor tools only after the runtime is stable.</p></details>
    <details><summary>4. MCP and reusable instructions</summary><p>Add controlled tools, rules, and skills so the system can use context repeatedly.</p></details>
    <details><summary>5. Hosted fallback</summary><p>Escalate to OpenRouter or a provider API when local quality or context is not enough.</p></details>
  </div>
</div>

## Practical workflow

Run one local model first. Create a tiny evaluation set with explanation, summarization, coding, structured output, and judgment prompts. Add a client only after the runtime works. Add tools through MCP or app-native integrations after the model baseline is stable. Create one reusable skill or rule, such as a local model evaluator. Add hosted fallback carefully for harder tasks or larger context.

## Decision matrix

| Reader goal | Suggested stack |
| --- | --- |
| Privacy-first | Local runtime, local model, read-only local tools, no hosted fallback by default |
| Low-cost learner | Ollama, small instruct models, fixed evaluation prompts, occasional hosted comparison |
| Coding-heavy | Local model for drafts, coding agent for repo edits, tests required before trusting output |
| Research-heavy | Local summaries, RAG over notes, MCP for curated sources, hosted fallback for difficult synthesis |
| Hybrid local/cloud | Local default, OpenRouter or provider fallback, strict notes about what leaves the machine |

## What to verify because tools change

Before publishing an exact stack, verify runtime docs, model availability, licenses, API compatibility, MCP support, provider-supported parameters, permission modes, sandboxing, and data-use policies.
