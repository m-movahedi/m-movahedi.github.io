---
title : "Local LLMs 201: What Runs on Your Machine"
date : "2026-05-28"
draft : false
type : "post"
tags:
  - "Local LLMs"
  - "Generative AI"
  - "AI Tools"
---

Local large language models are exciting because they move part of the AI stack onto your own computer. Instead of sending every prompt to a remote service, you download a model, run it through a local runtime, and talk to it from an app, terminal, editor, or API.

The beginner mistake is to ask, "What is the best local model?" The better first question is: **what can this machine actually run well enough to be useful?**

## Mental model: model, runtime, hardware

Think of a local LLM setup as three separate things:

| Layer | What it means | Beginner question |
| --- | --- | --- |
| Model | The trained weights, such as a Llama, Qwen, Gemma, Mistral, DeepSeek, Phi, or gpt-oss variant | What is this model good at? |
| Runtime | The program that loads and serves the model, such as Ollama, llama.cpp, LM Studio, vLLM, or MLX-based tools | Can this runtime load this file format on my computer? |
| Hardware | Your CPU, RAM, GPU, VRAM, disk, and operating system | Will it be fast enough and stable enough? |

The model is not the app. The model is closer to a large mathematical object. The runtime is the engine that loads it. Your hardware decides how large the engine can be before it starts crawling.

## Local vs hosted models

Hosted models run on someone else's infrastructure. You usually get stronger models, large context windows, easier APIs, and less setup. You also depend on an account, network connection, pricing, rate limits, provider policy, and provider logging behavior.

Local models run on your own machine. You get more control over data boundaries, offline use, experimentation, and cost per use after setup. You also inherit the boring parts: downloads, drivers, memory limits, heat, disk space, model compatibility, and model quality tradeoffs.

Neither path is morally superior. They solve different problems.

## The hardware bottleneck

For local LLMs, memory matters more than almost anything else. A model has to fit somewhere while it runs. If you have a GPU, the best experience usually comes when the model fits mostly or fully in VRAM. If it spills into system RAM or CPU inference, it may still work, but responses can become much slower.

The rough beginner map looks like this:

| Machine | Practical starting point |
| --- | --- |
| 8 GB RAM laptop | Small models, light chat, patience required |
| 16 GB RAM laptop | 3B to 8B class quantized models are a reasonable starting range |
| 32 GB RAM laptop or desktop | More comfortable 7B to 14B experimentation |
| Consumer GPU with 8 to 12 GB VRAM | Good local coding/chat experiments with quantized models |
| Larger GPU or Apple Silicon with high unified memory | Bigger models, larger contexts, better speed |

This is not a benchmark. It is a sanity check. Model architecture, quantization, runtime, context length, and your exact workload can change the result.

## Tokens and context windows

LLMs do not read text exactly like people do. They read tokens, which are chunks of text. A context window is the amount of input and generated output the model can hold in one conversation. For local use, large context is useful, but it is not free. More context usually means more memory use and slower generation.

A practical way to think about context:

| Context use | What it is good for |
| --- | --- |
| Small | Quick questions, snippets, short chats |
| Medium | Notes, small files, focused coding help |
| Large | Multi-file work, long documents, agent workflows |

Long context does not automatically mean better reasoning. A smaller model with the right retrieved context can beat a larger model drowning in irrelevant text.

## Quantization

Quantization compresses model weights so they use less memory. The tradeoff is usually speed and accessibility against some loss in quality. You will see labels such as Q4, Q5, Q6, Q8, or file formats such as GGUF. In beginner terms:

| Choice | Practical meaning |
| --- | --- |
| Lower-bit quantization | Smaller, easier to run, sometimes less accurate |
| Higher-bit quantization | Larger, usually closer to original quality |
| Full precision | Best fidelity, often impractical on consumer hardware |

If you are starting, a widely used quantized version of a popular instruct model is often better than chasing the largest file your disk can hold.

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
  <strong>Key papers on quantization and efficient inference for local LLMs</strong>
  <ul>
    <li><a href="https://arxiv.org/abs/2308.06335">Dettmers & Zettlemoyer (2023), "The case for 8-bit activations in transformers for efficient inference"</a>: practical guidance on quantization levels and their tradeoffs for inference memory and speed.</li>
    <li><a href="https://arxiv.org/abs/2306.00978">Frantar et al. (2023), "GPTQ: Accurate Post-Training Quantization for Generative Pre-trained Transformers"</a>: widely used technique for quantizing LLMs to run on consumer hardware.</li>
    <li><a href="https://arxiv.org/abs/2210.06423">Hidey & Asai (2022), "Quantization-aware training for speech recognition via noise regularized knowledge distillation"</a>: foundational work on maintaining model quality during quantization.</li>
  </ul>
</div>

## Practical workflow

1. Write down your hardware: RAM, GPU, VRAM, operating system, free disk.
2. Pick a beginner runtime, usually Ollama or LM Studio.
3. Start with a small instruct model, not the largest model you can find.
4. Test three prompts you actually care about: one writing task, one reasoning task, one coding or technical task.
5. Watch speed, memory, and answer quality.
6. Move up or down in model size only after you have a baseline.

## What to verify because tools change

Before publishing or following any exact recommendation, verify the current model list, runtime support, license, context length, and hardware notes from the tool or model provider. Local LLM advice ages quickly because model releases, quantizations, and runtimes improve every month.

Useful official starting points:

- [Ollama documentation](https://docs.ollama.com/)
- [Ollama model library](https://ollama.com/models)
- [OpenRouter model metadata](https://openrouter.ai/docs/guides/overview/models)

The first win is not finding the mythical best model. The first win is getting one useful model running reliably on your own machine.
