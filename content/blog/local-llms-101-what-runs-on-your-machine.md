---
title : "Local LLMs 101: What Runs on Your Machine"
date : "2026-05-28"
draft : false
type : "post"
tags:
  - "Local LLMs"
  - "Generative AI"
  - "AI Tools"
---

Local large language models move part of the AI stack onto your own computer. Instead of sending every prompt to a remote service, you download a model, run it through a local runtime, and talk to it from an app, terminal, editor, or API.

Prefer the guided version first? Start with [Local LLMs: A Scrollytelling Guide](/blog/local-llms-scrollytelling/).

The beginner mistake is to ask, "What is the best local model?" The better first question is: **what can this machine actually run well enough to be useful?**

## Mental model: model, runtime, hardware

| Layer | What it means | Beginner question |
| --- | --- | --- |
| Model | The trained weights, such as a Llama, Qwen, Gemma, Mistral, DeepSeek, Phi, or gpt-oss variant | What is this model good at? |
| Runtime | The program that loads and serves the model, such as Ollama, llama.cpp, LM Studio, vLLM, or MLX-based tools | Can this runtime load this file format? |
| Hardware | Your CPU, RAM, GPU, VRAM, disk, and operating system | Will it be fast enough and stable enough? |

<div class="llm-visual">
  <h3>Interactive fit map</h3>
  <div class="llm-grid">
    <details open><summary>8 GB RAM</summary><p>Use very small instruct models and short prompts. This is good for learning the workflow, not heavy agent work.</p></details>
    <details><summary>16 GB RAM</summary><p>Try small to medium quantized models. Keep context modest and compare speed before moving larger.</p></details>
    <details><summary>32 GB RAM</summary><p>You can compare more families comfortably. Still prefer the smallest model that passes your task set.</p></details>
    <details><summary>Dedicated GPU</summary><p>VRAM becomes the key constraint. A model that fits mostly in VRAM usually feels much better.</p></details>
  </div>
  <div class="llm-meter">
    <div class="llm-meter-row"><strong>Privacy control</strong><div class="llm-bar"><span style="width: 90%"></span></div></div>
    <div class="llm-meter-row"><strong>Setup effort</strong><div class="llm-bar"><span style="width: 65%"></span></div></div>
    <div class="llm-meter-row"><strong>Model strength</strong><div class="llm-bar"><span style="width: 55%"></span></div></div>
  </div>
</div>

The model is not the app. The runtime is the engine that loads it. Your hardware decides how large the engine can be before it starts crawling.

## Local vs hosted models

Hosted models run on someone else's infrastructure. You usually get stronger models, large context windows, easy APIs, and less setup. You also depend on a network connection, pricing, rate limits, provider policy, and provider logging behavior.

Local models run on your own machine. You get more control over data boundaries, offline use, experimentation, and cost per use after setup. You also inherit downloads, drivers, memory limits, heat, disk space, model compatibility, and model quality tradeoffs.

## Tokens, context, and quantization

LLMs read tokens, which are chunks of text. A context window is the amount of input and generated output the model can hold in one conversation. More context is useful, but it usually costs more memory and time.

Quantization compresses model weights so they use less memory. Lower-bit quantization is smaller and easier to run, while higher-bit quantization is usually closer to original quality. A common beginner path is to start with a popular quantized instruct model instead of chasing the largest file available.

## Practical workflow

1. Write down RAM, GPU, VRAM, operating system, and free disk.
2. Pick one beginner runtime, usually Ollama or LM Studio.
3. Start with a small instruct model.
4. Test one writing task, one reasoning task, and one coding or technical task.
5. Watch speed, memory, and answer quality.
6. Move up or down in model size after you have a baseline.

## What to verify because tools change

Verify the current model list, runtime support, license, context length, and hardware notes from the tool or model provider. Useful official starting points are [Ollama documentation](https://docs.ollama.com/), [Ollama models](https://ollama.com/models), and [OpenRouter model metadata](https://openrouter.ai/docs/guides/overview/models).
