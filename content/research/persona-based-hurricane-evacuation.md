---
title : "Persona-Based Hurricane Evacuation Travel Demand Analysis"
date : "2026-05-15"
draft : false
type : "post"
tags:
  - "Artificial Intelligence"
  - "Resilience"
  - "Disaster Management"
  - "Agent-Based Modeling"
  - "Large Language Models"
  - "Hurricane Evacuation"
  - "Transportation Planning"
journal: "Research Proposal"
---

<div style="background-color: #e8f4f8; border-left: 6px solid #3498db; padding: 15px 20px; border-radius: 4px; margin-bottom: 30px; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
  <h4 style="margin-top: 0; color: #2980b9; display: flex; align-items: center;"><span style="font-size: 1.5em; margin-right: 10px;">🌀</span> The Challenge of Rural Evacuation Planning</h4>
  <p style="margin-bottom: 0; color: #154360;">Florida continues to be the most hurricane-prone state in the United States. While evacuation orders play a significant role in reducing casualties, their effectiveness relies heavily on household decision-making. In rural communities, such as the Florida Panhandle, this is complicated by limited infrastructure, longer travel distances, and resource constraints. Current evacuation demand models often rely on oversimplified assumptions of rational decision-making, failing to capture the stress, urgency, and irrationality inherent in disaster scenarios.</p>
</div>

This research project, titled **"Persona-Based Hurricane Evacuation Travel Demand Analysis to Support Transportation Planning in Rural Communities,"** addresses this gap by investigating the behavioral mechanisms underlying evacuation-related travel decisions and developing a novel, AI-driven modeling framework.

### Project Objectives

The primary goal is to improve the effectiveness of existing evacuation-related travel demand models, particularly in rural scenarios, by enhancing the accuracy of evacuation behavior prediction and its adaptability through Large Language Model (LLM)–based persona analysis. 

1. **Identify Key Factors:** Examine factors influencing evacuation travel behaviors and how they are represented in existing models.
2. **Quantify Influences:** Measure the impact of socio-demographic, behavioral, and contextual factors on decisions in Florida Panhandle rural communities.
3. **Develop Persona Model:** Create an LLM-based persona model capable of replicating the dynamic evacuation decision-making process.
4. **Evaluate Performance:** Validate the model against real-world survey responses and historical data.

### Methodology: A Multi-Step Framework

Our approach combines behavioral science, artificial intelligence, and transportation planning into a cohesive 4-step workflow.

<style>
  .evac-framework-container {
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
  .evac-phase-box {
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
  .evac-phase-title {
    font-weight: bold;
    text-align: center;
    border-bottom: 2px solid #ecf0f1;
    padding-bottom: 10px;
    margin-bottom: 15px;
    font-size: 0.95em;
  }
  .evac-phase-content {
    font-size: 0.85em;
    color: #4b6584;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  .evac-tag {
    background: #f1f2f6;
    padding: 5px 8px;
    border-radius: 4px;
    text-align: center;
    font-weight: bold;
    color: #2f3640;
    border: 1px solid #dcdde1;
  }
  .evac-arrow {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #a5b1c2;
    font-size: 24px;
    font-weight: bold;
  }
  @media (max-width: 768px) {
    .evac-framework-container { flex-direction: column; }
    .evac-arrow { transform: rotate(90deg); margin: 10px 0; }
  }
</style>
<div class="evac-framework-container">
  <!-- Phase 1 -->
  <div class="evac-phase-box" style="border-color: #8e44ad;">
    <div class="evac-phase-title" style="color: #732d91;">1. Survey Data</div>
    <div class="evac-phase-content">
      <div style="text-align: center; font-size: 2em; margin-bottom: 5px;">📋</div>
      <div class="evac-tag" style="background: #f4ecf7; border-color: #d7bde2; color: #732d91;">KAP & TPB</div>
      <div class="evac-tag" style="background: #f4ecf7; border-color: #d7bde2; color: #732d91;">Rural Panhandle</div>
      <div class="evac-tag" style="background: #f4ecf7; border-color: #d7bde2; color: #732d91;">Intentions & Factors</div>
    </div>
  </div>
  <div class="evac-arrow">➔</div>
  <!-- Phase 2 -->
  <div class="evac-phase-box" style="border-color: #2980b9;">
    <div class="evac-phase-title" style="color: #1f618d;">2. Clustering</div>
    <div class="evac-phase-content">
      <div style="text-align: center; font-size: 2em; margin-bottom: 5px;">🧠</div>
      <div class="evac-tag" style="background: #ebf5fb; border-color: #aed6f1; color: #1f618d;">Factor Analysis</div>
      <div class="evac-tag" style="background: #ebf5fb; border-color: #aed6f1; color: #1f618d;">K-Prototypes</div>
      <div class="evac-tag" style="background: #ebf5fb; border-color: #aed6f1; color: #1f618d;">Behavioral Personas</div>
    </div>
  </div>
  <div class="evac-arrow">➔</div>
  <!-- Phase 3 -->
  <div class="evac-phase-box" style="border-color: #27ae60;">
    <div class="evac-phase-title" style="color: #1e8449;">3. LLM Agents</div>
    <div class="evac-phase-content">
      <div style="text-align: center; font-size: 2em; margin-bottom: 5px;">🤖</div>
      <div style="display: flex; justify-content: space-between; align-items: center; background: #e8f8f5; padding: 5px; border-radius: 4px; border: 1px solid #a3e4d7;">
        <div style="font-size: 0.8em; font-weight: bold; color: #1e8449; text-align: center; width: 45%;">GPT Models</div>
        <div style="display: flex; flex-direction: column; gap: 4px; width: 50%;">
           <div class="evac-tag" style="font-size: 0.75em; padding: 3px; border-color: #a3e4d7; color: #1e8449;">Persona A</div>
           <div class="evac-tag" style="font-size: 0.75em; padding: 3px; border-color: #a3e4d7; color: #1e8449;">Persona B</div>
        </div>
      </div>
      <div class="evac-tag" style="background: #e8f8f5; border-color: #a3e4d7; color: #1e8449;">Simulate Choices</div>
    </div>
  </div>
  <div class="evac-arrow">➔</div>
  <!-- Phase 4 -->
  <div class="evac-phase-box" style="border-color: #e67e22;">
    <div class="evac-phase-title" style="color: #b9770e;">4. Validation</div>
    <div class="evac-phase-content">
      <div style="text-align: center; font-size: 2em; margin-bottom: 5px;">🎯</div>
      <div class="evac-tag" style="background: #fef5e7; border-color: #f5cba7; color: #b9770e;">Structural Alignment</div>
      <div class="evac-tag" style="background: #fef5e7; border-color: #f5cba7; color: #b9770e;">Decision Analysis</div>
      <div class="evac-tag" style="background: #fef5e7; border-color: #f5cba7; color: #b9770e;">Feedback Loop</div>
    </div>
  </div>
</div>
<p style="text-align: center; font-size: 0.85em; color: #666; font-style: italic;">Figure 1: The 4-step workflow for the LLM persona modeling of hurricane evacuation travel demand.</p>

1. **Survey Design & Data Collection:** A comprehensive survey (grounded in Knowledge-Attitudes-Practices and Theory of Planned Behavior frameworks) will be administered to at least 1,500 rural households in the Florida Panhandle. This captures real-world intentions, constraints, and "what-if" scenario responses.
2. **Behavioral Analysis & Clustering:** Using statistical methods like Exploratory/Confirmatory Factor Analysis and Structural Equation Modeling (SEM), we extract latent variables (e.g., risk perception). A hybrid clustering model then categorizes these diverse households into distinct behavioral "personas".
3. **LLM-Based Persona Modeling:** We deploy state-of-the-art Large Language Models to role-play these specific personas. By fine-tuning these autonomous agents on the survey data and a behavioral context knowledge base, they can emulate realistic, human-like decision pathways under various hurricane conditions.
4. **Validation:** The simulated evacuation behaviors of the LLM agents are rigorously tested against real survey data, ensuring structural alignment and accurate representation of complex decisions.

### Delivering Practical Tools for Planners

The culmination of this research is a **web-based application** designed for transportation planners and emergency managers. 

Users will be able to interact with the LLM-based persona model using natural language—asking questions like, *"What percentage of the population in Leon County will evacuate in the case of a Category 4 hurricane within the next week?"* The tool will generate a representative sample of simulated responses and provide visual, geospatial outputs such as heatmaps of evacuee distributions.

By anticipating dynamic and sometimes irrational evacuation behaviors, this tool aims to reduce uncertainty, optimize resource allocation, and ultimately strengthen preparedness for catastrophic hurricanes in rural America.

## Funding
This project is funded by [Rural Safe Efficient Advanced Transportation Center (R-SEAT)](https://reat.eng.famu.fsu.edu/), which is a Tier 1 transportation center and is part of the University Transportation Center (UTC) program funded by the U.S. Department of Transportation.