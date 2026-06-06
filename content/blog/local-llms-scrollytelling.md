---
title : "Local LLMs: A Scrollytelling Guide"
date : "2026-06-05"
draft : false
type : "post"
tags:
  - "Local LLMs"
  - "AI Agents"
  - "MCP"
  - "Ollama"
  - "AI Tools"
---

<section class="scrolly-llm">
  <div class="scrolly-hero">
    <div class="scrolly-kicker">Guided series</div>
    <h2>From one local model to a practical agent stack</h2>
    <p>This scrollytelling version turns the local LLM series into one guided path. Scroll through the layers: hardware, runtime, model choice, model identity, hosted fallback, coding agents, reusable instructions, MCP, and the final stack.</p>
    <nav class="scrolly-map" aria-label="Local LLM scrollytelling chapters">
      <a href="#machine">Machine</a>
      <a href="#toolchain">Toolchain</a>
      <a href="#models">Models</a>
      <a href="#same-model">Identity</a>
      <a href="#router">Router</a>
      <a href="#agents">Agents</a>
      <a href="#skills">Skills</a>
      <a href="#mcp">MCP</a>
      <a href="#stack">Stack</a>
    </nav>
  </div>

  <section id="machine" class="scrolly-stage">
    <div class="scrolly-copy">
      <div class="scrolly-kicker">01 / Hardware reality</div>
      <h2>The first question is not which model is best. It is what your machine can run.</h2>
      <p>A local model has to fit into real hardware. RAM, VRAM, CPU, GPU, disk, context length, and quantization all shape the experience before the model writes a single token.</p>
      <p>Local LLMs give you privacy control and offline use, but they also make you responsible for memory limits and speed.</p>
      <a class="scrolly-link" href="/blog/local-llms-101-what-runs-on-your-machine/">Read the hardware chapter</a>
    </div>
    <div class="scrolly-graphic">
      <div class="scrolly-panel">
        <h3>Local fit meter</h3>
        <div class="llm-meter">
          <div class="llm-meter-row"><strong>8 GB RAM</strong><div class="llm-bar"><span style="width: 25%"></span></div></div>
          <div class="llm-meter-row"><strong>16 GB RAM</strong><div class="llm-bar"><span style="width: 50%"></span></div></div>
          <div class="llm-meter-row"><strong>32 GB RAM</strong><div class="llm-bar"><span style="width: 72%"></span></div></div>
          <div class="llm-meter-row"><strong>GPU VRAM</strong><div class="llm-bar"><span style="width: 86%"></span></div></div>
        </div>
        <div class="scrolly-chip-row">
          <span class="scrolly-chip strong">small first</span>
          <span class="scrolly-chip">quantized</span>
          <span class="scrolly-chip">short context</span>
          <span class="scrolly-chip">test speed</span>
        </div>
      </div>
    </div>
  </section>

  <section id="toolchain" class="scrolly-stage">
    <div class="scrolly-copy">
      <div class="scrolly-kicker">02 / Toolchain</div>
      <h2>Separate the tools that manage projects from the runtimes that run models.</h2>
      <p>`uv` keeps Python environments and project dependencies sane. `uvx` runs one-off Python tools. Ollama downloads and serves local models. A chat UI, script, notebook, or agent sends prompts to the runtime.</p>
      <p>The clean mental model is: tools prepare the workspace, runtimes load the model, clients ask questions.</p>
      <a class="scrolly-link" href="/blog/local-llm-toolchain-uv-uvx-ollama-model-files/">Read the toolchain chapter</a>
    </div>
    <div class="scrolly-graphic">
      <div class="scrolly-panel">
        <h3>One request path</h3>
        <div class="scrolly-lane">
          <div class="scrolly-lane-step"><b>1</b><span>`uv` runs a script in a repeatable project environment.</span></div>
          <div class="scrolly-lane-step"><b>2</b><span>The script calls `localhost:11434` or another local endpoint.</span></div>
          <div class="scrolly-lane-step"><b>3</b><span>Ollama loads the selected model and streams tokens.</span></div>
          <div class="scrolly-lane-step"><b>4</b><span>The client displays the answer or passes it to the next tool.</span></div>
        </div>
      </div>
    </div>
  </section>

  <section id="models" class="scrolly-stage">
    <div class="scrolly-copy">
      <div class="scrolly-kicker">03 / Model selection</div>
      <h2>Choose a model by fit, not by hype.</h2>
      <p>Llama, Qwen, Gemma, Mistral, DeepSeek, Phi, gpt-oss, and coder variants all point to different tradeoffs. The useful question is whether a model fits the task, hardware, and constraints.</p>
      <p>A tiny evaluation set beats vague impressions. Test writing, explanation, coding, summarization, and structured output with the same prompts every time.</p>
      <a class="scrolly-link" href="/blog/choosing-a-local-llm-without-guessing/">Read the model-choice chapter</a>
    </div>
    <div class="scrolly-graphic">
      <div class="scrolly-panel">
        <h3>Decision triangle</h3>
        <div class="scrolly-node-grid">
          <div class="scrolly-node"><strong>Task</strong><span>What must the model do well?</span></div>
          <div class="scrolly-node"><strong>Hardware</strong><span>Can it run quickly enough?</span></div>
          <div class="scrolly-node"><strong>Constraint</strong><span>Does license, privacy, and context fit?</span></div>
        </div>
        <div class="scrolly-chip-row">
          <span class="scrolly-chip">Llama</span>
          <span class="scrolly-chip">Qwen</span>
          <span class="scrolly-chip">Gemma</span>
          <span class="scrolly-chip">Mistral</span>
          <span class="scrolly-chip">DeepSeek</span>
          <span class="scrolly-chip">Phi</span>
          <span class="scrolly-chip">gpt-oss</span>
        </div>
      </div>
    </div>
  </section>

  <section id="same-model" class="scrolly-stage">
    <div class="scrolly-copy">
      <div class="scrolly-kicker">04 / Same name, different behavior</div>
      <h2>The same model name can hide a different checkpoint, format, runtime, and prompt harness.</h2>
      <p>`qwen3:8b` in Ollama, a Hugging Face checkpoint, and an OpenRouter endpoint may not behave the same. File format, quantization, template, provider route, and generation settings can all shift the answer.</p>
      <p>When behavior changes, inspect the stack before blaming the model.</p>
      <a class="scrolly-link" href="/blog/why-the-same-local-llm-is-not-the-same/">Read the model-identity chapter</a>
    </div>
    <div class="scrolly-graphic">
      <div class="scrolly-panel">
        <h3>Identity stack</h3>
        <div class="scrolly-lane">
          <div class="scrolly-lane-step"><b>1</b><span>Family name</span></div>
          <div class="scrolly-lane-step"><b>2</b><span>Exact checkpoint</span></div>
          <div class="scrolly-lane-step"><b>3</b><span>GGUF, safetensors, or runtime package</span></div>
          <div class="scrolly-lane-step"><b>4</b><span>Quantization and context settings</span></div>
          <div class="scrolly-lane-step"><b>5</b><span>Runtime, provider, prompt template, and sampling</span></div>
        </div>
      </div>
    </div>
  </section>

  <section id="router" class="scrolly-stage">
    <div class="scrolly-copy">
      <div class="scrolly-kicker">05 / Hosted fallback</div>
      <h2>OpenRouter is a bridge between local control and hosted model variety.</h2>
      <p>A hosted router can compare models, provide stronger fallback, and keep one API shape across many endpoints. It also changes the privacy, cost, provider, and moderation boundary.</p>
      <p>The practical strategy is local-first, hosted when the task justifies it.</p>
      <a class="scrolly-link" href="/blog/openrouter-byok-local-llm-world/">Read the OpenRouter chapter</a>
    </div>
    <div class="scrolly-graphic">
      <div class="scrolly-panel">
        <h3>Route choice</h3>
        <div class="scrolly-node-grid">
          <div class="scrolly-node"><strong>Local</strong><span>Private drafts, offline use, repeated low-cost work.</span></div>
          <div class="scrolly-node"><strong>Router</strong><span>Model comparison, stronger models, larger contexts.</span></div>
          <div class="scrolly-node"><strong>Hybrid</strong><span>Draft locally, escalate only selected context.</span></div>
        </div>
        <div class="llm-meter">
          <div class="llm-meter-row"><strong>Control</strong><div class="llm-bar"><span style="width: 88%"></span></div></div>
          <div class="llm-meter-row"><strong>Reach</strong><div class="llm-bar"><span style="width: 82%"></span></div></div>
        </div>
      </div>
    </div>
  </section>

  <section id="agents" class="scrolly-stage">
    <div class="scrolly-copy">
      <div class="scrolly-kicker">06 / Coding agents</div>
      <h2>Coding agents are not only chat. They are model plus workspace plus tools plus permissions.</h2>
      <p>Claude Code, Codex, and Antigravity show what happens when a model can inspect files, edit code, run commands, use browsers, and produce evidence. The model matters, but the harness matters too.</p>
      <p>Local LLMs can help with drafts and private exploration, while coding agents are useful when the task needs action and verification.</p>
      <a class="scrolly-link" href="/blog/coding-agents-claude-code-codex-antigravity/">Read the coding-agent chapter</a>
    </div>
    <div class="scrolly-graphic">
      <div class="scrolly-panel">
        <h3>Agent loop</h3>
        <div class="scrolly-lane">
          <div class="scrolly-lane-step"><b>1</b><span>Read repository context and instructions.</span></div>
          <div class="scrolly-lane-step"><b>2</b><span>Act with tools: edit, shell, browser, connector.</span></div>
          <div class="scrolly-lane-step"><b>3</b><span>Observe tests, diffs, logs, and screenshots.</span></div>
          <div class="scrolly-lane-step"><b>4</b><span>Revise until evidence matches the task.</span></div>
        </div>
      </div>
    </div>
  </section>

  <section id="skills" class="scrolly-stage">
    <div class="scrolly-copy">
      <div class="scrolly-kicker">07 / Reusable behavior</div>
      <h2>Rules, skills, agents, and subagents stop you from retyping the same instructions.</h2>
      <p>A rule is a standing constraint. A skill is a packaged workflow. An agent acts over multiple steps. A subagent handles a focused role such as review, research, or debugging.</p>
      <p>For local LLMs, this usually means loading durable instructions and exposing selected tools through the app around the model.</p>
      <a class="scrolly-link" href="/blog/skills-rules-agents-subagents-local-llms/">Read the skills chapter</a>
    </div>
    <div class="scrolly-graphic">
      <div class="scrolly-panel">
        <h3>Instruction ladder</h3>
        <div class="scrolly-lane">
          <div class="scrolly-lane-step"><b>R</b><span>Rule: persistent constraint.</span></div>
          <div class="scrolly-lane-step"><b>S</b><span>Skill: repeatable workflow.</span></div>
          <div class="scrolly-lane-step"><b>A</b><span>Agent: tool-using worker.</span></div>
          <div class="scrolly-lane-step"><b>SA</b><span>Subagent: specialized helper.</span></div>
        </div>
      </div>
    </div>
  </section>

  <section id="mcp" class="scrolly-stage">
    <div class="scrolly-copy">
      <div class="scrolly-kicker">08 / MCP</div>
      <h2>MCP is the connector between an AI app and controlled tools or context.</h2>
      <p>A local model alone only sees the prompt. MCP servers can expose files, GitHub, notes, databases, browser/search, or custom tools through a standard pattern.</p>
      <p>The safety lesson is simple: resources provide context, tools perform actions, and permissions decide the blast radius.</p>
      <a class="scrolly-link" href="/blog/mcp-how-local-llms-get-tools-and-context/">Read the MCP chapter</a>
    </div>
    <div class="scrolly-graphic">
      <div class="scrolly-panel">
        <h3>MCP loop</h3>
        <div class="scrolly-lane">
          <div class="scrolly-lane-step"><b>1</b><span>User asks for work needing outside context.</span></div>
          <div class="scrolly-lane-step"><b>2</b><span>Client offers selected tools and resources.</span></div>
          <div class="scrolly-lane-step"><b>3</b><span>MCP server reads data or performs an approved action.</span></div>
          <div class="scrolly-lane-step"><b>4</b><span>Model uses the result and continues.</span></div>
        </div>
      </div>
    </div>
  </section>

  <section id="stack" class="scrolly-stage">
    <div class="scrolly-copy">
      <div class="scrolly-kicker">09 / Final stack</div>
      <h2>The practical stack is small, inspectable, and expandable.</h2>
      <p>Start with one local runtime and one model. Add evaluation prompts. Add a client. Add MCP or app-native tools. Add reusable instructions. Add hosted fallback only when local quality or context is not enough.</p>
      <p>The win is not a magic model. It is a system you can understand and improve.</p>
      <a class="scrolly-link" href="/blog/practical-local-agent-stack/">Read the final stack chapter</a>
    </div>
    <div class="scrolly-graphic">
      <div class="scrolly-panel">
        <h3>Build order</h3>
        <div class="scrolly-lane">
          <div class="scrolly-lane-step"><b>1</b><span>Runtime and model</span></div>
          <div class="scrolly-lane-step"><b>2</b><span>Fixed evaluation prompts</span></div>
          <div class="scrolly-lane-step"><b>3</b><span>Client or editor</span></div>
          <div class="scrolly-lane-step"><b>4</b><span>MCP and reusable instructions</span></div>
          <div class="scrolly-lane-step"><b>5</b><span>Hosted fallback and coding agent</span></div>
        </div>
      </div>
    </div>
  </section>

  <div class="scrolly-final">
    <h2>Where to go next</h2>
    <p>Use this page as the guided overview. Use the nine linked chapters when you want slower explanations, checklists, official documentation links, and more detail for each layer.</p>
  </div>
</section>
