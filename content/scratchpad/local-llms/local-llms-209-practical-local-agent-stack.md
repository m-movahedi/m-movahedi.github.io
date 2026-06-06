---
title : "Local LLMs 209: A Practical Local Agent Stack"
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

The goal is not to build the most complicated local AI system. The goal is to build a workflow you can understand, debug, and improve.

## Mental model: start local, add power only when needed

A practical beginner stack has layers:

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

Build the stack one layer at a time. If you cannot explain what a layer does, do not add it yet.

## Step 1: run one local model

Start with one runtime and one model. For many beginners, that means Ollama plus a small instruct model from the current Ollama library.

Your first success criteria are modest:

1. The model downloads.
2. It responds to a prompt.
3. You know the exact model name.
4. You know whether it is fast enough.
5. You know where the local API is.

Do not install five frontends before you have one stable model.

## Step 2: create a tiny evaluation set

Make a file with five prompts:

| Prompt type | Example |
| --- | --- |
| Explanation | "Explain quantization to a beginner." |
| Summarization | Paste a short article or note |
| Coding | Ask for a small function and tests |
| Structured output | Ask for JSON with a fixed schema |
| Judgment | Ask it to compare two options with tradeoffs |

Run the same prompts when you try a new model. Record model, runtime, quantization, speed, failures, and notes.

## Step 3: add a client

Once the local runtime works, connect it to a client:

| Client type | Use |
| --- | --- |
| Terminal | Quick tests and scripting |
| Desktop chat UI | Comfortable daily use |
| Notebook or Python script | Evaluation and experimentation |
| Editor integration | Coding help |
| Agent framework | Tool use and multi-step workflows |

If the client supports custom base URLs, check whether it can point to your local OpenAI-compatible endpoint.

## Step 4: add tools through MCP or app features

Add tools only after the model baseline is stable. Useful first tools are read-only:

1. Filesystem read access to a project folder.
2. Documentation fetch/search.
3. Notes retrieval.
4. GitHub issue or PR reading.

Then consider write tools:

1. Create a draft file.
2. Edit a controlled workspace.
3. Run a test command.
4. Open a pull request.

Writes should require review until you deeply trust the workflow.

## Step 5: create one reusable skill or rule

A good first reusable workflow is a local model evaluator:

```markdown
Name: Local model evaluator

Goal:
Compare candidate local models on the same task set.

Steps:
1. Record hardware, runtime, model ID, and quantization.
2. Run the fixed prompt set.
3. Score quality, speed, structured-output reliability, and failures.
4. Recommend a model for the current task.
5. Save the results with date and source links.
```

This is small enough to use, but structured enough to make model choice less random.

## Step 6: add hosted fallback carefully

A hosted fallback is useful when local models are too slow or weak. OpenRouter can provide one API for many hosted models, while direct provider APIs may give tighter provider-specific behavior.

Use hosted fallback for:

| Task | Why |
| --- | --- |
| Hard coding problems | Stronger coding models may save time |
| Large context | Local context may be limited |
| Multimodal tasks | Local model may not support vision/audio |
| Final review | A second model can catch mistakes |

Keep sensitive prompts local unless you have reviewed the provider path.

## Decision matrix

| Reader goal | Suggested stack |
| --- | --- |
| Privacy-first | Local runtime, local model, read-only local tools, no hosted fallback by default |
| Low-cost learner | Ollama, small instruct models, fixed evaluation prompts, occasional hosted comparison |
| Coding-heavy | Local model for drafts, coding agent for repo edits, tests required before trusting output |
| Research-heavy | Local summaries, RAG over notes, MCP for curated sources, hosted fallback for difficult synthesis |
| Hybrid local/cloud | Local default, OpenRouter or provider fallback, strict notes about what leaves the machine |

## What to verify because tools change

Before publishing an exact stack, verify current runtime docs, model availability, licenses, API compatibility, MCP support, and provider-supported parameters. For agentic coding tools, verify installation, permission modes, sandboxing, and data-use policies from official docs.

The practical lesson: a useful local agent stack is not one magic model. It is a small system with a model, a runtime, repeatable evaluation, controlled tools, reusable instructions, and a clear boundary between local and hosted work.
