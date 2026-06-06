---
title : "The Local LLM Toolchain: uv, uvx, Ollama, and Model Files"
date : "2026-05-29"
draft : false
type : "post"
tags:
  - "Local LLMs"
  - "Ollama"
  - "uv"
  - "AI Tools"
---

A local LLM setup can feel messy because several tools appear at once: Python environments, command-line utilities, model downloaders, model runtimes, chat interfaces, and APIs. The trick is to separate the jobs.

Prefer the guided version first? Start with [Local LLMs: A Scrollytelling Guide](/blog/local-llms-scrollytelling/).

## Mental model: tools install things, runtimes run models

| Tool or object | Job |
| --- | --- |
| `uv` | Manage Python projects, dependencies, Python versions, and tools |
| `uvx` | Run a Python CLI tool in an isolated temporary environment |
| Ollama | Download, manage, run, and serve LLMs locally |
| Model file | The actual model weights and configuration |
| Chat UI or coding agent | The application that sends prompts to the model |

<div class="llm-visual">
  <h3>Toolchain flow</h3>
  <div class="llm-flow">
    <div class="llm-step"><strong>uv</strong><span>Keep Python projects and dependencies repeatable.</span></div>
    <div class="llm-step"><strong>uvx</strong><span>Try a standalone Python CLI without adding it to the project.</span></div>
    <div class="llm-step"><strong>Ollama</strong><span>Download and serve the model on your machine.</span></div>
    <div class="llm-step"><strong>Client</strong><span>Chat, script, notebook, editor, or agent sends prompts.</span></div>
  </div>
  <details><summary>Trace one request</summary><p>A script managed with `uv` calls an OpenAI-compatible local endpoint, Ollama routes the request to the selected model, the runtime generates tokens, and the client displays the answer.</p></details>
</div>

`uv` is a fast Python package and project manager from Astral. It can create and synchronize project environments, manage dependencies, install Python versions, and run commands inside a project environment. `uvx` is an alias for `uv tool run`; it runs a Python command-line tool in an isolated environment without permanently installing it into your project.

Official docs to verify while drafting: [uv overview](https://docs.astral.sh/uv/), [uv tools](https://docs.astral.sh/uv/guides/tools/), and [uv project commands](https://docs.astral.sh/uv/concepts/projects/run/).

Ollama is a beginner-friendly local LLM runtime. It can download models, keep a local model library, run prompts, and expose an API. Ollama's local API is served by default at `http://localhost:11434/api`, and Ollama also documents OpenAI-compatible endpoints such as `/v1/chat/completions`.

Official docs to verify while drafting: [Ollama API](https://docs.ollama.com/api) and [Ollama OpenAI compatibility](https://docs.ollama.com/openai).

## Model files are not all the same

| Form | Common use |
| --- | --- |
| GGUF | Local desktop inference and llama.cpp-style runtimes |
| safetensors | Hugging Face and PyTorch/transformers workflows |
| Ollama model name | Runtime-managed model reference |
| Provider model ID | Hosted endpoint name, such as an OpenRouter slug |

The practical lesson: use `uv` to keep Python sane, use `uvx` for disposable CLI experiments, use Ollama or another runtime to serve models, and keep model files separate from the apps that call them.

## What to verify because tools change

Do not copy install commands blindly. For newer CLIs, verify the official project page, package publisher, repository, release history, install method, and local data behavior.
