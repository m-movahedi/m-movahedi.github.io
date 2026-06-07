---
title : "Local LLMs 203: Choosing a Model Without Guessing"
date : "2026-05-30"
draft : false
type : "post"
tags:
  - "Local LLMs"
  - "AI Models"
  - "Model Selection"
---

Local model choice can turn into name collecting very quickly. Llama, Qwen, Gemma, Mistral, DeepSeek, Phi, gpt-oss, coder models, reasoning models, small models, giant models, quantized models, preview models: it is a lot.

The goal is not to memorize every release. The goal is to choose a model with a reason.

## Mental model: model choice is task fit plus hardware fit

A useful model is the intersection of three things:

| Question | Why it matters |
| --- | --- |
| What task do I need? | Chat, coding, summarization, research, structured extraction, multilingual work, or tool use require different strengths |
| What hardware do I have? | A model that barely fits may be less useful than a smaller model that runs smoothly |
| What constraints matter? | Privacy, license, cost, speed, context length, and reliability change the decision |

<div class="llm-diagram-container" id="diagram-203">
  <div class="llm-diagram-header">
    <h4>Model Selection Matrix</h4>
    <p>Click a pillar to see what happens when it's ignored</p>
  </div>
  <div class="llm-grid-layout">
    <div class="llm-node" data-target="panel-203-task">
      <div class="llm-node-title">Task Fit</div>
      <div class="llm-node-subtitle">Coding, Chat, RAG</div>
    </div>
    <div class="llm-node" data-target="panel-203-hardware">
      <div class="llm-node-title">Hardware Fit</div>
      <div class="llm-node-subtitle">VRAM, RAM, CPU</div>
    </div>
    <div class="llm-node" data-target="panel-203-constraints">
      <div class="llm-node-title">Constraints</div>
      <div class="llm-node-subtitle">Privacy, Speed, Cost</div>
    </div>
  </div>
  <div class="llm-detail-panel" id="detail-203">
    <div id="panel-203-task" class="llm-panel-content" style="display:none;">
      <h5>If you ignore Task Fit:</h5>
      <p>You might end up using a massive reasoning model just to summarize an email, wasting time and compute. Or you use a base model instead of an instruct model, and it fails to answer.</p>
    </div>
    <div id="panel-203-hardware" class="llm-panel-content" style="display:none;">
      <h5>If you ignore Hardware Fit:</h5>
      <p>You download a 70B parameter model that spills entirely into system RAM. It generates 1 token per second, making it practically useless for interactive chat.</p>
    </div>
    <div id="panel-203-constraints" class="llm-panel-content" style="display:none;">
      <h5>If you ignore Constraints:</h5>
      <p>You build a tool around an open-weights model, but its license prohibits commercial use. Or you rely on an API that is too expensive at scale.</p>
    </div>
  </div>
</div>
The "best" model on a leaderboard may be the wrong model for your laptop.

## Common model families

As of May 2026, these are common families beginners will encounter:

| Family | Why people use it | What to check |
| --- | --- | --- |
| Llama | Strong general open model ecosystem, many variants and quantizations | License, exact generation, context length, tool support |
| Qwen | Strong multilingual and coding options, many sizes | Prompt format, reasoning behavior, quantization availability |
| Gemma | Compact Google model family with accessible sizes | License, local runtime support, task fit |
| Mistral | Efficient models and strong European open model ecosystem | Instruct format, license, model age |
| DeepSeek | Popular for reasoning and coding variants | Distilled vs original variants, runtime behavior |
| Phi | Small models that can be practical on modest hardware | Whether the small size is enough for your task |
| gpt-oss | Open-weight OpenAI model family for local or self-hosted use | Official release notes, license, recommended runtime |
| Coder models | Specialized models for code completion, refactoring, and repository tasks | Language support, tool calling, repo-context handling |

This table is a map, not a ranking. Model families evolve, and each family contains multiple checkpoints.

## Size is not intelligence

Model size matters, but it is not the only thing that matters. A larger model often knows more patterns and handles harder tasks better, but it also needs more memory and compute. A smaller model can be better if it responds quickly, fits the task, and is paired with good context.

Watch for labels such as:

| Label | Meaning |
| --- | --- |
| 3B, 7B, 8B, 14B, 32B, 70B | Approximate parameter scale |
| instruct | Tuned to follow instructions |
| base | Rawer pretrained model, usually not ideal for chat |
| coder | Tuned or optimized for programming tasks |
| reasoning | Tuned to spend more effort on complex problems |
| vision | Can accept image inputs |
| tool use | Can produce structured calls to tools |

For beginners, an instruct or chat model is usually the right starting point.

## Evaluation beats vibes

Instead of asking which model is best, create a tiny local evaluation set:

1. A short writing task you actually care about.
2. A factual explanation task where you know the answer.
3. A coding or technical task from your real work.
4. A summarization task using your own text.
5. A structured output task, such as producing JSON or a table.

Run the same tasks across two or three candidate models. Score them with simple labels: good, usable, weak, failed. Add notes on speed and memory.

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
  <strong>Key papers on model evaluation and selection</strong>
  <ul>
    <li><a href="https://arxiv.org/abs/2305.10241">Liang et al. (2023), "Holistic Evaluation of Language Models"</a>: comprehensive framework for evaluating LLMs across multiple dimensions, moving beyond single-metric leaderboards.</li>
    <li><a href="https://arxiv.org/abs/2210.14313">Wang et al. (2022), "SuperGLUE: A Stickier Benchmark for General-Purpose Language Understanding Systems"</a>: influential multi-task evaluation benchmark that highlights why no single model works best for all tasks.</li>
    <li><a href="https://arxiv.org/abs/2306.05685">Wei et al. (2023), "Emergent Abilities of Large Language Models"</a>: explains why performance varies with model size, scale, and task selection—useful for informed model choice.</li>
  </ul>
</div>

## What about `llmfit`?

Tools such as `llmfit` are meant to help answer "what can run on this machine?" by inspecting hardware and ranking candidate local models. That is a useful category of tool, but do not treat any helper as an oracle.

Before recommending or installing a newer CLI, verify:

| Check | Why |
| --- | --- |
| Official repository | Avoid package-name confusion |
| Package publisher | Confirm it matches the project |
| Release history | New projects can change quickly |
| Install method | Prefer official docs over copied commands |
| Local data behavior | Hardware scanners may collect system details |

Use fit tools to narrow the search, then test the final candidates yourself.

## A practical model selection workflow

1. Define the task: chat, coding, research, summarization, extraction, or agent use.
2. Write down hardware: RAM, VRAM, CPU/GPU, operating system.
3. Pick a size class that should comfortably fit.
4. Choose two model families, not ten.
5. Start with instruct variants.
6. Prefer popular quantizations with active runtime support.
7. Run your tiny evaluation set.
8. Keep the faster model if quality is close.

## What to verify because models change

Verify the current model list, license, context length, supported parameters, and runtime compatibility at drafting time. For hosted endpoints, check the provider's metadata, not only the model card. For local files, check the exact checkpoint and quantization.

Useful places to verify:

- [Ollama model library](https://ollama.com/models)
- [OpenRouter models API documentation](https://openrouter.ai/docs/guides/overview/models)
- Official model cards from the model publisher

The most reliable model choice is not glamorous. It is the smallest model that does your real task well enough, fast enough, and within your constraints.
