---
title : "The Crossroads of LLMs and Traffic Control: A New Era in Urban Mobility"
date : "2024-12-16"
draft : false
type : "post"
tags:
  - "Large Language Models"
  - "Intelligent Transportation Systems"
  - "Traffic Signal Control"
  - "Adaptive Control"
  - "Reinforcement Learning"
---

<div style="background-color: #e8f4f8; border-left: 6px solid #3498db; padding: 15px 20px; border-radius: 4px; margin-bottom: 30px; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
  <h4 style="margin-top: 0; color: #2c3e50; display: flex; align-items: center;"><span style="font-size: 1.5em; margin-right: 10px;">🚦</span> The Urban Gridlock Challenge</h4>
  <p style="margin-bottom: 0; color: #34495e;">Urban traffic congestion has severe economic and environmental impacts. Traditional Adaptive Traffic Control Systems (ATCS)—which rely on fixed-time, gap-based, or delay-based logic—often struggle to adapt to dynamic, complex, and unpredictable real-world traffic flows. Designing a truly responsive traffic controller requires a system capable of human-like <strong>reasoning and planning</strong>.</p>
</div>

Our latest research, published in *IEEE Transactions on Intelligent Transportation Systems*, explores a groundbreaking application of Generative AI: utilizing **Large Language Models (LLMs)** as the core cognitive engine for Adaptive Traffic Signal Control.

### Why LLMs for Traffic Signals?

Recent advancements have demonstrated that LLMs possess vast knowledge bases and sophisticated understanding of interrelations, enabling them to act as highly capable agents. We developed a novel framework that applies these cognitive abilities to traffic management. 

Instead of hard-coded rules, the LLM-based agent perceives the real-time traffic state (e.g., queue lengths, waiting times) and logically reasons through the optimal sequence of green and red lights to alleviate congestion.

### The GCA Framework: Learning from Interaction

In our study, we introduced two types of LLM traffic controllers:
1. **Zero-Shot Chain of Thought (CoT):** The agent relies purely on logical deduction without prior interaction.
2. **Generally Capable Agent (GCA):** A more advanced approach where the agent actively integrates new knowledge from its environmental interactions, continuously enhancing its reasoning and planning capabilities.

<style>
.traffic-dash {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background: #1e272e;
  border-radius: 12px;
  padding: 30px;
  color: #d2dae2;
  margin: 30px 0;
  box-shadow: 0 10px 25px rgba(0,0,0,0.2);
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 20px;
}
.td-section {
  background: #2c3e50;
  border-radius: 8px;
  padding: 20px;
  border: 1px solid #34495e;
  position: relative;
  overflow: hidden;
}
.td-title {
  font-size: 1.1em;
  font-weight: 600;
  color: #0fb9b1;
  margin-bottom: 20px;
  text-transform: uppercase;
  letter-spacing: 1px;
}
.td-stats {
  display: flex;
  justify-content: space-around;
  text-align: center;
}
.td-stat-val {
  font-size: 2.2em;
  font-weight: 700;
  color: #0be881;
}
.td-stat-label {
  font-size: 0.75em;
  color: #808e9b;
  text-transform: uppercase;
  font-weight: bold;
}
.td-intersection {
  width: 120px;
  height: 120px;
  background: #3d3d3d;
  margin: 30px auto 10px;
  position: relative;
  border-radius: 5px;
}
.road-v, .road-h {
  position: absolute;
  background: #575fcf;
}
.road-v { top: 0; bottom: 0; left: 40px; right: 40px; }
.road-h { left: 0; right: 0; top: 40px; bottom: 40px; }
.td-light {
  width: 12px; height: 12px; border-radius: 50%; position: absolute; background: #ff3f34;
  box-shadow: 0 0 10px rgba(255, 63, 52, 0.8);
  animation: pulse-light 2s infinite alternate;
}
@keyframes pulse-light {
  0% { transform: scale(1); opacity: 0.8; }
  100% { transform: scale(1.2); opacity: 1; }
}
.td-light-n { top: 22px; left: 54px; background: #0be881; box-shadow: 0 0 10px rgba(11, 232, 129, 0.8); }
.td-light-s { bottom: 22px; left: 54px; background: #0be881; box-shadow: 0 0 10px rgba(11, 232, 129, 0.8); }
.td-light-e { top: 54px; right: 22px; }
.td-light-w { top: 54px; left: 22px; }

/* Framework Diagram */
.td-flow {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.td-step {
  background: #3c6382;
  padding: 12px 15px;
  border-radius: 6px;
  font-size: 0.85em;
  display: flex;
  align-items: center;
  gap: 15px;
  transition: transform 0.3s;
  cursor: default;
}
.td-step:hover {
  transform: translateX(10px);
  background: #0fb9b1;
  color: #1e272e;
}
.td-step-num {
  background: rgba(0,0,0,0.2);
  min-width: 28px; height: 28px;
  display: flex; justify-content: center; align-items: center;
  border-radius: 50%; font-weight: bold;
  font-size: 1.1em;
}
@media (max-width: 768px) {
  .traffic-dash { grid-template-columns: 1fr; }
}
</style>

<div class="traffic-dash">
  <div class="td-section">
    <div class="td-title">GCA Controller Performance</div>
    <div class="td-stats">
      <div>
        <div class="td-stat-val">↓48%</div>
        <div class="td-stat-label">Halted Vehicles</div>
      </div>
      <div>
        <div class="td-stat-val">↑25%</div>
        <div class="td-stat-label">Average Speed</div>
      </div>
    </div>
    <div class="td-intersection">
      <div class="road-v"></div>
      <div class="road-h"></div>
      <div class="td-light td-light-n"></div>
      <div class="td-light td-light-s"></div>
      <div class="td-light td-light-e"></div>
      <div class="td-light td-light-w"></div>
    </div>
  </div>
  
  <div class="td-section">
    <div class="td-title">The GCA Reasoning Loop</div>
    <div class="td-flow">
      <div class="td-step"><div class="td-step-num">1</div> <div><strong>Environment State:</strong> LLM processes real-time traffic data (queue lengths, delays) from the SUMO simulation.</div></div>
      <div class="td-step"><div class="td-step-num">2</div> <div><strong>Reasoning & Planning:</strong> LLM analyzes current constraints and formulates a plan to maximize throughput.</div></div>
      <div class="td-step"><div class="td-step-num">3</div> <div><strong>Action Selection:</strong> Generates diverse phase patterns dynamically to adapt to sudden traffic changes.</div></div>
      <div class="td-step"><div class="td-step-num">4</div> <div><strong>Feedback Integration:</strong> The outcome updates the LLM's knowledge base, improving future decisions.</div></div>
    </div>
  </div>
</div>
<p style="text-align: center; font-size: 0.85em; color: #666; font-style: italic; margin-top: -15px;">Interactive Dashboard: Evaluating the GCA-based LLM Traffic Controller.</p>


### Simulation Results & Impact

We implemented and compared these controllers within a simulated traffic flow scenario at a single intersection using the **Simulation of Urban Mobility (SUMO)**. The LLM agents were pitted against conventional traffic control methods, including fixed-time, gap-based, and delay-based controllers.

The results were remarkable. The GCA-based controllers notably outperformed traditional systems:
- **Reduced Congestion:** Halted vehicle numbers plummeted by **48.03%**.
- **Improved Flow:** The average vehicle speed across the intersection increased by **25.29%**.

Furthermore, unlike static systems, the LLM controllers exhibited superior flexibility, generating diverse phase patterns that dynamically adapted to wildly changing traffic conditions in real-time.

### Looking Ahead

This study underscores the transformative potential of Large Language Models in traffic management. By injecting human-like reasoning and planning into urban infrastructure, we are looking at significant enhancements in efficiency, responsiveness, and versatility. Ultimately, LLM-driven ATCS has the potential to dramatically improve urban life by mitigating the economic and environmental impacts of severe traffic congestion.

*For full details, read the paper in [IEEE Transactions on Intelligent Transportation Systems](https://ieeexplore.ieee.org/document/10768207/).*

    @article{Movahedi2024,
    author = {Movahedi, Mohammad and Choi, Juyeong},
    doi = {10.1109/TITS.2024.3498735},
    file = {:C\:/Users/moham/AppData/Local/Mendeley Ltd./Mendeley Desktop/Downloaded/Movahedi, Choi - 2024 - The Crossroads of LLM and Traffic Control A Study on Large Language Models in Adaptive Traffic Signal Control(2).pdf:pdf},
    issn = {1524-9050},
    journal = {IEEE Transactions on Intelligent Transportation Systems},
    keywords = {adaptive traffic signal control,challenges for modern urban,intelligent,large language model,reasoning and planning,traffic congestion poses significant,transport systems},
    mendeley-groups = {0 My Own work/Journal papers,CRC 2026},
    pages = {1--16},
    title = {{The Crossroads of LLM and Traffic Control: A Study on Large Language Models in Adaptive Traffic Signal Control}},
    url = {https://ieeexplore.ieee.org/document/10768207/},
    year = {2024}
    }

