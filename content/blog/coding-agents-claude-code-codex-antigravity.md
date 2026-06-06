---
title : "Coding Agents: Claude Code, Codex, and Antigravity"
date : "2026-06-02"
draft : false
type : "post"
tags:
  - "Coding Agents"
  - "Claude Code"
  - "Codex"
  - "Antigravity"
  - "Local LLMs"
---

A chat model answers questions. A coding agent works inside a software environment. That difference matters when the agent starts reading files, editing code, running tests, opening browsers, creating commits, and explaining what changed.

Prefer the guided version first? Start with [Local LLMs: A Scrollytelling Guide](/blog/local-llms-scrollytelling/).

## Mental model: model plus tools plus workspace

| Part | Role |
| --- | --- |
| Model | Reasons, plans, writes, reviews, explains |
| Workspace | Files, repository history, project conventions |
| Tools | Search, read, edit, shell, browser, GitHub, MCP connectors |
| Instructions | User prompt, project rules, skills, style guidance |
| Permissions | What the agent can read, write, run, or access |
| Verification | Tests, builds, screenshots, logs, reviews |

<div class="llm-visual">
  <h3>Agent anatomy</h3>
  <div class="llm-flow">
    <div class="llm-step"><strong>Read</strong><span>Search files, inspect history, understand project rules.</span></div>
    <div class="llm-step"><strong>Act</strong><span>Edit files, call tools, run commands, use browser or connectors.</span></div>
    <div class="llm-step"><strong>Observe</strong><span>Read errors, test output, screenshots, diffs, or review comments.</span></div>
    <div class="llm-step"><strong>Revise</strong><span>Patch the work until the evidence matches the task.</span></div>
  </div>
  <details><summary>Why this is different from chat</summary><p>A chat model can suggest a fix. A coding agent can inspect the repository, apply the fix, run the test, read the failure, and try again inside permission boundaries.</p></details>
</div>

Claude Code is Anthropic's agentic coding tool for terminal-based software work. Its official docs describe codebase navigation, file edits, command execution, commits, and MCP-connected workflows. Verify current details in [Claude Code overview](https://docs.anthropic.com/en/docs/claude-code/overview), [getting started](https://docs.anthropic.com/en/docs/claude-code/getting-started), and [CLI usage](https://docs.anthropic.com/en/docs/claude-code/cli-usage).

OpenAI positions Codex as a coding agent for building, reviewing, debugging, and automating software work. Verify current surfaces and behavior through [OpenAI developer resources](https://developers.openai.com/), [Codex use cases](https://developers.openai.com/codex/explore/), and current Codex model documentation.

Google Antigravity is an agentic development platform with an AI-powered IDE, Agent Manager, browser control, artifacts, and asynchronous agents. Verify current details in [Antigravity overview](https://antigravity.google/docs/home?authuser=0), [settings](https://antigravity.google/docs/ide-settings), and [Agent Manager](https://antigravity.google/docs/agent-manager).

## Where local LLMs fit

Most polished coding agents currently rely on hosted frontier or coding-specialized models. Local LLMs can still help with private first drafts, offline code explanation, local prompt evaluation, and hybrid workflows where routine work stays local while difficult edits go to an agent.

## Practical workflow

Use a local model to explore ideas, summarize files, or draft tests. Use a coding agent when you need repository edits, terminal runs, or browser verification. Keep permissions narrow, read the diff, and ask for evidence from tests or logs.

## What to verify because tools change

Verify installation methods, supported operating systems, model defaults, MCP support, permission modes, and data-use policies from official docs before publishing exact setup instructions.
