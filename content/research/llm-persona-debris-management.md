---
title : "Simulating Community Behaviors with LLMs"
date : "2026-04-16"
draft : false
type : "post"
tags:
  - "Artificial Intelligence"
  - "Resilience"
  - "Disaster Management"
  - "Agent-Based Modeling"
  - "Large Language Models"
  - "Post-disaster Recovery"
  - "Infrastructure Management"
  - "Infrastructure Planning"
journal: "ASCE Construction Research Congress 2026"
---

<div style="background-color: #fff3cd; border-left: 6px solid #ffc107; padding: 15px 20px; border-radius: 4px; margin-bottom: 30px; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
  <h4 style="margin-top: 0; color: #856404; display: flex; align-items: center;"><span style="font-size: 1.5em; margin-right: 10px;">🚧</span> The Challenge of Debris Management</h4>
  <p style="margin-bottom: 0; color: #533f03;">Following catastrophic events like Hurricane Ian, post-disaster debris management becomes a critical, time-sensitive logistical challenge. Traditional planning relies heavily on volume estimation and routing, treating communities as passive entities. However, emergent human behaviors—such as <strong>illegal debris dumping</strong>—introduce highly stochastic burdens that derail recovery efficiency, amplify health risks, and drastically increase municipal costs.</p>
</div>

Our latest research introduces a pioneering approach: **a Large Language Model (LLM)-based persona framework** designed to simulate complex, heterogeneous community behaviors. By utilizing generative AI to role-play specific community personas, we can test policy interventions in a simulated environment before deploying them in the real world.

### Moving Beyond Traditional Agent-Based Models

Historically, predicting household behavior relied on static demographic assumptions or traditional Agent-Based Modeling (ABM). While ABMs represent diverse decisions, their accuracy is constrained by rigid rulesets, and scaling them requires massive computational resources. 

Our framework bridges this gap by deploying LLMs as context-aware, role-playing surrogate agents. By grounding these AI models in empirical survey data, they internalize the social, economic, and psychological nuances of real residents. 

### The 4-Phase LLM Persona Framework

To systematically integrate behavioral heterogeneity into disaster management decision support, we developed an iterative four-step workflow.

<style>
  .llm-framework-container {
    display: flex;
    justify-content: space-between;
    align-items: stretch;
    gap: 15px;
    background: #f8f9fa;
    padding: 25px;
    border-radius: 12px;
    border: 1px solid #dee2e6;
    margin: 30px 0;
    font-family: Arial, sans-serif;
  }
  .llm-phase-box {
    flex: 1;
    background: #fff;
    border: 2px solid #a5b1c2;
    border-radius: 8px;
    padding: 15px;
    box-shadow: 0 4px 6px rgba(0,0,0,0.05);
    display: flex;
    flex-direction: column;
    position: relative;
    min-width: 0;
  }
  .llm-phase-title {
    font-weight: bold;
    text-align: center;
    border-bottom: 2px solid #ecf0f1;
    padding-bottom: 10px;
    margin-bottom: 15px;
    font-size: 0.95em;
  }
  .llm-phase-content {
    font-size: 0.85em;
    color: #4b6584;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  .llm-tag {
    background: #f1f2f6;
    padding: 5px 8px;
    border-radius: 4px;
    text-align: center;
    font-weight: bold;
    color: #2f3640;
    border: 1px solid #dcdde1;
  }
  .llm-arrow {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #a5b1c2;
    font-size: 24px;
    font-weight: bold;
  }
  @media (max-width: 768px) {
    .llm-framework-container { flex-direction: column; }
    .llm-arrow { transform: rotate(90deg); margin: 10px 0; }
  }
</style>
<div class="llm-framework-container">
  <!-- Phase A -->
  <div class="llm-phase-box" style="border-color: #e74c3c;">
    <div class="llm-phase-title" style="color: #c0392b;">A. Data Collection</div>
    <div class="llm-phase-content">
      <div style="text-align: center; font-size: 2em; margin-bottom: 5px;">📊</div>
      <div class="llm-tag">Socioeconomic Data</div>
      <div class="llm-tag">Behavioral Factors</div>
      <div class="llm-tag">KAP Surveys</div>
    </div>
  </div>
  
  <div class="llm-arrow">➔</div>

  <!-- Phase B -->
  <div class="llm-phase-box" style="border-color: #27ae60;">
    <div class="llm-phase-title" style="color: #1e8449;">B. Behavioral Analysis</div>
    <div class="llm-phase-content">
      <div style="text-align: center; font-size: 2em; margin-bottom: 5px;">🧠</div>
      <div class="llm-tag" style="background: #e8f8f5; border-color: #a3e4d7; color: #117a65;">Factor Analysis</div>
      <div class="llm-tag" style="background: #e8f8f5; border-color: #a3e4d7; color: #117a65;">KAP Modeling</div>
      <div class="llm-tag" style="background: #e8f8f5; border-color: #a3e4d7; color: #117a65;">Latent Behaviors</div>
    </div>
  </div>
  <div class="llm-arrow">➔</div>
  <!-- Phase C -->
  <div class="llm-phase-box" style="border-color: #3498db;">
    <div class="llm-phase-title" style="color: #2874a6;">C. Persona Tuning</div>
    <div class="llm-phase-content">
      <div style="text-align: center; font-size: 2em; margin-bottom: 5px;">🤖</div>
      <div style="display: flex; justify-content: space-between; align-items: center; background: #ebf5fb; padding: 5px; border-radius: 4px; border: 1px solid #aed6f1;">
        <div style="font-size: 0.8em; font-weight: bold; color: #2874a6; text-align: center; width: 45%;">Moderator Agent</div>
        <div style="display: flex; flex-direction: column; gap: 4px; width: 50%;">
           <div class="llm-tag" style="font-size: 0.75em; padding: 3px;">Persona A</div>
           <div class="llm-tag" style="font-size: 0.75em; padding: 3px;">Persona B</div>
        </div>
      </div>
      <div class="llm-tag" style="background: #ebf5fb; border-color: #aed6f1; color: #2874a6;">Bias Evaluation</div>
    </div>
  </div>
  <div class="llm-arrow">➔</div>
  <!-- Phase D -->
  <div class="llm-phase-box" style="border-color: #e67e22;">
    <div class="llm-phase-title" style="color: #b9770e;">D. Testing & Eval</div>
    <div class="llm-phase-content">
      <div style="text-align: center; font-size: 2em; margin-bottom: 5px;">🎯</div>
      <div class="llm-tag" style="background: #fef5e7; border-color: #f5cba7; color: #b9770e;">Testing Data</div>
      <div class="llm-tag" style="background: #fef5e7; border-color: #f5cba7; color: #b9770e;">Decision Analysis</div>
      <div class="llm-tag" style="background: #fef5e7; border-color: #f5cba7; color: #b9770e;">Review Feedback</div>
    </div>
  </div>
</div>
<p style="text-align: center; font-size: 0.85em; color: #666; font-style: italic;">Figure 1: Workflow for LLM persona modeling, spanning empirical data collection to agent evaluation.</p>

### Scientific Grounding & Empirical Calibration

1. **Community Data Collection**: We started with empirical Knowledge, Attitudes, and Practices (KAP) survey data collected from Tampa residents following Hurricane Ian. This provided real-world baselines on hazard sensitivity, risk tolerance, and municipal trust.
2. **Behavioral Analysis**: Using Principal Component Analysis (PCA) and K-means clustering ($k=6$), we moved beyond demographics. We identified distinct "personas" driven by behavior—segmenting the population into groups prone to legal, mixed, or illegal disposal practices based on shared socio-psychological traits.
3. **Persona Development**: We conditioned a frontier LLM (GPT-4o-mini) to role-play these specific clusters. To ensure scientific rigor, a **Moderator Agent** was deployed to monitor behavioral coherence via the Population Stability Index (PSI) and Kullback-Leibler Divergence (KLD), preventing hallucinations and ensuring the agent didn't drift from empirical data distributions.
4. **Model Evaluation**: We tested the AI agents against a 20% withheld subset of the survey data.

<div style="display: flex; gap: 20px; margin: 30px 0; flex-wrap: wrap;">
  <div style="flex: 1; min-width: 250px; background: #eafaf1; padding: 20px; border-radius: 8px; border-top: 4px solid #2ecc71; box-shadow: 0 4px 6px rgba(0,0,0,0.05);">
    <h3 style="color: #27ae60; margin-top: 0;">75% Alignment Accuracy</h3>
    <p style="color: #2c3e50; font-size: 0.95em;">The conditioned persona agents achieved a ~75% decision alignment accuracy when predicting illegal dumping tendencies, significantly outperforming conventional baselines like standard Gradient Boosting models (~60%).</p>
  </div>
  <div style="flex: 1; min-width: 250px; background: #f4f6f6; padding: 20px; border-radius: 8px; border-top: 4px solid #34495e; box-shadow: 0 4px 6px rgba(0,0,0,0.05);">
    <h3 style="color: #2c3e50; margin-top: 0;">Context-Sensitive Reasoning</h3>
    <p style="color: #4b6584; font-size: 0.95em;">The agents didn't just mimic choices; they produced human-like rationales. For example, if travel time to a disposal site exceeded <strong>30 minutes</strong>, or if municipal collection was delayed past <strong>14 days</strong>, the agent's reasoning shifted from family safety compliance to frustration, accurately triggering illegal dumping behaviors mirroring real residents.</p>
  </div>
</div>

### Implications for Resilient Infrastructure

By treating LLMs as surrogate stand-ins for affected communities, stakeholders gain a powerful, data-driven sandbox. Instead of rolling out expensive and untested awareness campaigns or enforcement strategies, municipalities can simulate how different intervention thresholds resonate with highly specific neighborhood personas. 

This framework represents a paradigm shift—moving disaster recovery from a purely logistical operation to a human-centered, socio-psychological science.


    @inproceedings{Baldwin2026,
    address = {San Antonio, TX},
    author = {Baldwin, Alex and Movahedi, Mohammad and Choi, Juyeong},
    booktitle = {ASCE Construction Research Congress 2026},
    title = {{Large-Language Model-based Framework for Simulating Community Behavior in Policy Evaluation: Application to Community Debris Management}},
    year = {2026}
    }
