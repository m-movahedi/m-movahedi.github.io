---
title : "Choosing a Model Without Guessing"
date : "2026-05-30"
draft : false
type : "post"
tags:
  - "Local LLMs"
  - "AI Models"
  - "Model Selection"
---

Local model choice can turn into name collecting very quickly. Llama, Qwen, Gemma, Mistral, DeepSeek, Phi, gpt-oss, coder models, reasoning models, small models, giant models, quantized models: it is a lot.

Prefer the guided version first? Start with [Local LLMs: A Scrollytelling Guide](/blog/local-llms-scrollytelling/).

The goal is not to memorize every release. The goal is to choose a model with a reason.

## Mental model: model choice is task fit plus hardware fit

| Question | Why it matters |
| --- | --- |
| What task do I need? | Chat, coding, summarization, research, structured extraction, multilingual work, or tool use require different strengths |
| What hardware do I have? | A model that barely fits may be less useful than a smaller model that runs smoothly |
| What constraints matter? | Privacy, license, cost, speed, context length, and reliability change the decision |

<div class="llm-visual">
  <h3>Model choice triangle</h3>
  <div class="llm-grid">
    <div class="llm-card"><strong>Task fit</strong><span>Does it solve your writing, coding, research, extraction, or agent task?</span></div>
    <div class="llm-card"><strong>Hardware fit</strong><span>Does it run fast enough without exhausting memory?</span></div>
    <div class="llm-card"><strong>Constraint fit</strong><span>Does the license, privacy boundary, and context length match your use case?</span></div>
  </div>
  <div class="llm-choice" aria-label="Model decision emphasis">
    <label><input type="radio" name="model-fit-focus" checked> Balanced</label>
    <label><input type="radio" name="model-fit-focus"> Coding</label>
    <label><input type="radio" name="model-fit-focus"> Privacy</label>
    <label><input type="radio" name="model-fit-focus"> Speed</label>
  </div>
  <p>Use the selected emphasis to decide what your small evaluation set should reward first.</p>
</div>

Common model families beginners encounter include Llama, Qwen, Gemma, Mistral, DeepSeek, Phi, gpt-oss, and coding-specialized variants. This list is a map, not a ranking. Each family contains multiple checkpoints, sizes, licenses, context lengths, and instruction formats.

## Size is not intelligence

| Label | Meaning |
| --- | --- |
| 3B, 7B, 8B, 14B, 32B, 70B | Approximate parameter scale |
| instruct | Tuned to follow instructions |
| base | Rawer pretrained model, usually not ideal for chat |
| coder | Tuned or optimized for programming tasks |
| reasoning | Tuned to spend more effort on complex problems |
| tool use | Can produce structured calls to tools |

For beginners, an instruct or chat model is usually the right starting point.

## Evaluation beats vibes

Create a tiny local evaluation set: one writing task, one factual explanation task, one coding or technical task, one summarization task, and one structured output task. Run the same tasks across two or three candidate models. Score quality, speed, memory, and failures.

Tools such as `llmfit` can help estimate which local models fit your machine, but verify the package identity, repository, publisher, release history, install method, and local data behavior before recommending or installing newer CLIs. Use fit tools to narrow the search, then test final candidates yourself.

## What to verify because models change

Verify the current model list, license, context length, supported parameters, and runtime compatibility at drafting time. Useful sources include [Ollama models](https://ollama.com/models), [OpenRouter model metadata](https://openrouter.ai/docs/guides/overview/models), and official model cards from the publisher.
