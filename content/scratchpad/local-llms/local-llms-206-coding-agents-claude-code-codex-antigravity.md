---
title : "Local LLMs 206: Coding Agents"
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

A chat model answers questions. A coding agent works inside a software environment. That difference sounds small until the agent starts reading files, editing code, running tests, opening browsers, creating commits, and explaining what changed.

Claude Code, Codex, and Google Antigravity are examples of agentic coding tools. They do not replace local LLM runtimes, but they show what happens when a model is wrapped in tools, permissions, project context, and verification loops.

## Mental model: model plus tools plus workspace

A coding agent is not just a model. It is a system:

| Part | Role |
| --- | --- |
| Model | Reasons, plans, writes, reviews, explains |
| Workspace | Files, repository history, project conventions |
| Tools | Search, read, edit, shell, browser, GitHub, MCP connectors |
| Instructions | User prompt, project rules, skills, style guidance |
| Permissions | What the agent can read, write, run, or access |
| Verification | Tests, builds, screenshots, logs, reviews |

<div class="llm-diagram-container" id="diagram-206">
  <div class="llm-diagram-header">
    <h4>The Agentic Loop</h4>
    <p><button id="btn-206-play" style="padding:4px 8px; cursor:pointer;">Play Agent Loop</button></p>
  </div>
  <div class="llm-loop-layout">
    <div class="llm-node llm-node-circle" id="node-206-observe">Observe<br><small>Read context</small></div>
    <div class="llm-edge">→</div>
    <div class="llm-node llm-node-circle" id="node-206-decide">Decide<br><small>Plan action</small></div>
    <div class="llm-edge">→</div>
    <div class="llm-node llm-node-circle" id="node-206-act">Act<br><small>Call tool</small></div>
    <div class="llm-edge">→</div>
    <div class="llm-node llm-node-circle" id="node-206-verify">Verify<br><small>Check result</small></div>
  </div>
  <div class="llm-detail-panel" id="detail-206">
    <div id="panel-node-206-observe" class="llm-panel-content" style="display:none;">
      <h5>1. Observe</h5>
      <p>The agent reads the initial prompt, inspects the workspace, and gathers necessary context from files or tool outputs.</p>
    </div>
    <div id="panel-node-206-decide" class="llm-panel-content" style="display:none;">
      <h5>2. Decide</h5>
      <p>The model reasons about what to do next based on the rules, skills, and current state. It decides which tool to call.</p>
    </div>
    <div id="panel-node-206-act" class="llm-panel-content" style="display:none;">
      <h5>3. Act</h5>
      <p>The agent executes a tool call. For example, it writes code to a file, runs a bash command, or searches the web.</p>
    </div>
    <div id="panel-node-206-verify" class="llm-panel-content" style="display:none;">
      <h5>4. Verify</h5>
      <p>The agent observes the result of the action (e.g., test passed or failed). If failed, it loops back to decide how to fix it.</p>
    </div>
  </div>
</div>
This is why an agent can be more useful than a raw local chat model for coding. It can act, observe, and revise.

## Claude Code

Anthropic describes Claude Code as an agentic coding tool that lives in the terminal. Its official docs describe capabilities such as navigating a codebase, editing files, running commands, creating commits, and using MCP for external data or custom tooling.

Beginner framing:

| Good for | Watch out for |
| --- | --- |
| Terminal-first coding help | It uses hosted Claude models by default |
| Explaining and modifying existing projects | Command permissions matter |
| Scriptable workflows | Requires account/auth setup |
| MCP-connected tools | MCP servers expand access and risk |

Official docs to verify:

- [Claude Code overview](https://docs.anthropic.com/en/docs/claude-code/overview)
- [Claude Code setup](https://docs.anthropic.com/en/docs/claude-code/getting-started)
- [Claude Code CLI reference](https://docs.anthropic.com/en/docs/claude-code/cli-usage)

## Codex

OpenAI positions Codex as a coding agent for building, reviewing, debugging, and automating software work. The OpenAI developer site includes Codex use cases such as code review, frontend work, app deployment, documentation updates, creating CLIs for Codex to use, and saving repeatable workflows as skills.

Beginner framing:

| Good for | Watch out for |
| --- | --- |
| Repository-aware coding and review | Product surfaces and available features change |
| Long-running or structured coding tasks | Permissions and sandbox settings shape behavior |
| Repeatable workflows through skills | Skills need testing, not just nice wording |
| Tool and connector use | Connectors can expose sensitive data |

Official docs to verify:

- [OpenAI developer site](https://developers.openai.com/)
- [Codex use cases](https://developers.openai.com/codex/explore/)
- [OpenAI model docs for Codex models](https://developers.openai.com/api/docs/models/gpt-5.3-codex)

## Google Antigravity

Google Antigravity is described as an agentic development platform with an AI-powered IDE, Agent Manager, browser control, artifacts, and asynchronous agents. Its docs emphasize workspaces or projects, task-level artifacts, terminal/browser/editor surfaces, and configurable security settings.

Beginner framing:

| Good for | Watch out for |
| --- | --- |
| Agent-first software work | It is its own product environment |
| Multi-surface work across editor, terminal, and browser | Browser and terminal permissions matter |
| Artifacts and task-level review | Generated artifacts still need human review |
| Parallel or asynchronous agents | Concurrent agents can conflict without isolation |

Official docs to verify:

- [Antigravity overview](https://antigravity.google/docs/home?authuser=0)
- [Antigravity settings](https://antigravity.google/docs/ide-settings)
- [Antigravity Agent Manager](https://antigravity.google/docs/agent-manager)

## Where local LLMs fit

Most polished coding agents currently rely on hosted frontier or coding-specialized models. Local LLMs can still fit into the workflow:

| Local use | Why it helps |
| --- | --- |
| Private first pass | Summarize or draft before sending selected context to a hosted agent |
| Offline code explanation | Ask questions about snippets locally |
| Local evaluation | Test prompts, tools, and structured outputs cheaply |
| OpenAI-compatible endpoint | Some tools can point to local runtimes if they support custom base URLs |
| Hybrid fallback | Local for routine work, hosted agent for difficult edits |

The limiting factor is not only model intelligence. Coding agents need reliable tool use, long context management, strong instruction following, and good recovery from errors.

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
  <strong>Key papers on tool use, agentic systems, and code generation</strong>
  <ul>
    <li><a href="https://arxiv.org/abs/2305.15334">Schlag et al. (2023), "Toolformer: Language Models Can Teach Themselves to Use Tools"</a>: foundational work on how LLMs learn to call tools and APIs without extensive fine-tuning.</li>
    <li><a href="https://arxiv.org/abs/2402.01030">Ruan et al. (2024), "Towards General Computer Assistants That Can See, Understand, and Act"</a>: explores how agents combine vision, tool use, and planning for code and repository work.</li>
    <li><a href="https://arxiv.org/abs/2403.13033">Liang et al. (2024), "Language Models as Zero-Shot Planners: Extracting Actionable Knowledge for Embodied Agents"</a>: relevant to agent planning and error recovery in coding tasks.</li>
  </ul>
</div>

## Practical workflow

1. Use a local model to explore ideas, summarize files, or draft tests.
2. Use a coding agent when you need repository edits, terminal runs, or browser verification.
3. Keep permissions narrow at first.
4. Read the diff before trusting the result.
5. Ask the agent to explain tests and evidence, not just claim success.
6. Turn repeated workflows into skills, rules, or project instructions.

## What to verify because tools change

Verify current installation methods, supported operating systems, model defaults, MCP support, permission modes, and data-use policies from official docs before publishing exact setup instructions. Coding-agent products evolve quickly.

The practical lesson: local LLMs are engines. Coding agents are work environments. The best workflow often combines local experimentation with agentic tools that can actually inspect, edit, and verify a project.
