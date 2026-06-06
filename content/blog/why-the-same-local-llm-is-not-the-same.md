---
title : "Why the Same Model Is Not Always the Same"
date : "2026-05-31"
draft : false
type : "post"
tags:
  - "Local LLMs"
  - "AI Models"
  - "Model Serving"
---

You may see the same model name in Ollama, Hugging Face, LM Studio, OpenRouter, a benchmark table, and a coding tool. Then you try it in two places and it behaves differently.

Prefer the guided version first? Start with [Local LLMs: A Scrollytelling Guide](/blog/local-llms-scrollytelling/).

This is normal. "Same model" often hides several layers of difference.

## Mental model: name, checkpoint, format, runtime, provider

| Layer | Example difference |
| --- | --- |
| Family | Qwen, Llama, Gemma, Mistral, DeepSeek, Phi |
| Checkpoint | Base, instruct, coder, reasoning, distilled, updated release |
| File format | GGUF, safetensors, runtime-specific package |
| Quantization | Q4, Q5, Q8, full precision |
| Runtime | Ollama, llama.cpp, vLLM, MLX, transformers |
| Prompt template | ChatML, model-specific instruct format, custom system prompt |
| Provider | Local machine, OpenRouter route, direct vendor API |
| Parameters | Temperature, top_p, max tokens, reasoning settings, stop sequences |

<div class="llm-visual">
  <h3>Same-name stack inspector</h3>
  <div class="llm-stack">
    <details open><summary>1. Family name</summary><p>The label people remember: Qwen, Llama, Gemma, Mistral, DeepSeek, Phi, or another family.</p></details>
    <details><summary>2. Checkpoint</summary><p>The exact base, instruct, coder, reasoning, distilled, or updated variant.</p></details>
    <details><summary>3. File and quantization</summary><p>The format and compression level, such as GGUF Q4 or a safetensors checkpoint.</p></details>
    <details><summary>4. Runtime or provider</summary><p>The serving layer that applies templates, limits, parameters, and sometimes hidden routing.</p></details>
    <details><summary>5. Prompt harness</summary><p>The system prompt, chat template, tools, and sampling settings that shape the response.</p></details>
  </div>
</div>

A base model is usually trained to continue text. It may be powerful, but it is not automatically good at following instructions. An instruct or chat model has been adapted to respond to user requests in a conversational format.

GGUF is common in local inference workflows built around llama.cpp. Safetensors is common in Hugging Face and PyTorch-style distribution. Quantization can change output quality, especially for precision, long reasoning, or structured output.

Prompt templates also matter. A hosted provider may add a wrapper. A local UI may add a system prompt. A coding agent may add repository instructions, tool schemas, and safety rules.

## Practical comparison checklist

When comparing two "same model" results, write down exact model ID, variant, file format, quantization, runtime or provider, context length, prompt template, system prompt, temperature, and tool settings.

## What to verify because tools change

Model names, aliases, and provider routes can change. Verify exact endpoint or runtime docs before claiming support for tools, structured output, image input, or a specific context window. Useful docs: [OpenRouter models](https://openrouter.ai/docs/guides/overview/models), [OpenRouter API overview](https://openrouter.ai/docs/api-reference/overview), and [Ollama OpenAI compatibility](https://docs.ollama.com/openai).
