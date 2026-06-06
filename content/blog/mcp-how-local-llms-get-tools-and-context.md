---
title : "MCP: How Local LLMs Get Tools and Context"
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

Prefer the guided version first? Start with [Local LLMs: A Scrollytelling Guide](/blog/local-llms-scrollytelling/).

MCP, the Model Context Protocol, is one way to standardize that connection.

## Mental model: MCP is a tool plug

| Piece | Meaning |
| --- | --- |
| MCP client | The app or agent that wants tools and context |
| MCP server | A process that exposes tools, resources, or prompts |
| Tool | An action the model can request, such as search, fetch, create, or update |
| Resource | Readable context, such as a file, document, issue, or database entry |
| Permission layer | Rules about what the model is allowed to access or change |

<div class="llm-visual">
  <h3>MCP request loop</h3>
  <div class="llm-flow">
    <div class="llm-step"><strong>User</strong><span>Asks for work that needs outside context.</span></div>
    <div class="llm-step"><strong>Client</strong><span>Offers selected tools and resources to the model.</span></div>
    <div class="llm-step"><strong>MCP server</strong><span>Reads data or performs the approved action.</span></div>
    <div class="llm-step"><strong>Model</strong><span>Uses the result to answer or choose the next step.</span></div>
  </div>
  <details><summary>Permission checkpoint</summary><p>The safest setup starts with read-only servers, narrow project scopes, and confirmation before writes, shell commands, or external actions.</p></details>
</div>

Anthropic's MCP documentation describes MCP as an open protocol that standardizes how applications provide context to LLMs. Verify the current source in [Anthropic MCP docs](https://docs.anthropic.com/en/docs/agents-and-tools/mcp).

MCP matters for local LLMs because local chat is private but limited. MCP can connect controlled context sources such as filesystem folders, GitHub issues, browser/search tools, databases, notes, or a local evaluation harness.

Tools and resources are different. Resources provide context, such as "here is the README." Tools perform actions, such as "run the test command." Tools usually need more caution because they can change state or access external systems.

Some local runtimes expose OpenAI-compatible APIs. Ollama documents OpenAI-compatible chat completions, streaming, JSON mode, tools, and tool choice. Verify exact support in [Ollama OpenAI compatibility](https://docs.ollama.com/openai).

## Safety checklist

Start read-only when possible. Use project-scoped filesystem access. Require confirmation for writes, deletes, shell commands, and network actions. Keep API keys outside prompts and logs. Prefer narrow tools over broad shell access.

## What to verify because tools change

Verify MCP support in the specific client you use. Claude Code, Codex, desktop apps, IDEs, and local agent frameworks may expose MCP differently.
