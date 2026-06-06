---
title : "Local LLMs 208: MCP and How Local LLMs Get Tools and Context"
date : "2026-06-04"
draft : false
type : "post"
tags:
  - "MCP"
  - "AI Agents"
  - "Local LLMs"
  - "AI Tools"
---

A local model by itself only sees the prompt you give it. It cannot read your files, inspect GitHub issues, search a database, or check a calendar unless something connects it to those sources.

MCP, the Model Context Protocol, is one way to standardize that connection.

## Mental model: MCP is a tool plug

Anthropic's MCP documentation describes MCP as an open protocol that standardizes how applications provide context to LLMs. The common analogy is a standard connector between AI applications and data or tools.

In beginner terms:

| Piece | Meaning |
| --- | --- |
| MCP client | The app or agent that wants tools and context |
| MCP server | A process that exposes tools, resources, or prompts |
| Tool | An action the model can request, such as search, fetch, create, or update |
| Resource | Readable context, such as a file, document, issue, or database entry |
| Permission layer | Rules about what the model is allowed to access or change |

The model does not become all-powerful. The client decides what servers are connected and what actions require approval.

Official source to verify:

- [Anthropic MCP docs](https://docs.anthropic.com/en/docs/agents-and-tools/mcp)

## Why MCP matters for local LLMs

Local LLMs are often attractive because of privacy and control. But isolated local chat is limited. MCP can help local or hybrid tools connect to controlled context sources.

Examples:

| MCP server idea | What the model can do |
| --- | --- |
| Filesystem | Read selected project files or notes |
| GitHub | Inspect issues, pull requests, comments, and files |
| Browser/search | Fetch current pages or search documentation |
| Database | Query structured project or research data |
| Notes app | Retrieve personal knowledge |
| Local evaluation harness | Run fixed prompts and return scores |

The key word is selected. A safe MCP setup should expose only what the task needs.

## Tools vs resources

Tools and resources are easy to mix up.

| MCP concept | Beginner example |
| --- | --- |
| Resource | "Here is the content of `README.md`." |
| Tool | "Run the test command and return the output." |
| Prompt | "Use this reusable prompt template for a task." |

Resources provide context. Tools perform actions. Tools usually need more caution because they can change state or access external systems.

## Local model plus MCP

A local model can participate in an MCP workflow when the application around it supports MCP or bridges MCP calls into the model loop.

A simplified loop:

1. User asks a question.
2. Agent app sends prompt and available tool descriptions to the model.
3. Model asks to call a tool.
4. MCP client calls the MCP server.
5. Server returns data or action results.
6. App sends the result back to the model.
7. Model answers or asks for another tool call.

The model is not directly browsing your computer. The app mediates every step.

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
  <strong>Key papers on tool use, function calling, and retrieval-augmented generation</strong>
  <ul>
    <li><a href="https://arxiv.org/abs/2305.15334">Schlag et al. (2023), "Toolformer: Language Models Can Teach Themselves to Use Tools"</a>: foundational work on how LLMs learn to call external functions and tools without explicit supervision.</li>
    <li><a href="https://arxiv.org/abs/2307.06173">Nakano et al. (2023), "WebGPT: Browser-assisted question-answering with human feedback"</a>: demonstrates how agents can call tools like browsers and search to retrieve context before answering.</li>
    <li><a href="https://arxiv.org/abs/2305.06983">Lewis et al. (2020), "Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks"</a>: classic work on combining external retrieval (tools, resources, context) with language models.</li>
  </ul>
</div>

## OpenAI-compatible local endpoints

Some local runtimes expose OpenAI-compatible APIs. Ollama documents support for OpenAI-compatible chat completions fields including messages, streaming, JSON mode, tools, and tool choice. This compatibility can make local runtimes easier to connect to existing apps.

But OpenAI-compatible does not automatically mean fully equivalent. Check exact support for:

| Feature | Why to verify |
| --- | --- |
| Tool calling | Some models produce tool calls more reliably than others |
| Structured outputs | Schema enforcement may differ |
| Vision | Image input depends on model and runtime |
| Streaming | Client and server must both support it |
| Context length | Runtime settings may limit effective context |

Official docs to verify:

- [Ollama OpenAI compatibility](https://docs.ollama.com/openai)

## Permissions matter

MCP can connect useful tools, but it also expands the blast radius of mistakes. A local LLM with access to a shell, browser, filesystem, and GitHub is no longer "just local chat."

Beginner safety checklist:

1. Start read-only when possible.
2. Use project-scoped filesystem access.
3. Require confirmation for writes, deletes, shell commands, and network actions.
4. Keep API keys outside prompts and logs.
5. Prefer narrow tools over broad shell access.
6. Review generated changes before applying them.

## What to verify because tools change

Verify MCP support in the specific client you use. Claude Code, Codex, desktop apps, IDEs, and local agent frameworks may expose MCP differently. Also verify whether a server is official, community-maintained, or custom.

The practical lesson: MCP is not the model. It is plumbing for context and tools. For local LLMs, that plumbing can turn a private chat model into a useful assistant, but permissions decide whether it is safe.
