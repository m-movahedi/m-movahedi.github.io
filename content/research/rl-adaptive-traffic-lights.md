---
title : "Mastering the Grid: Reinforcement Learning for Adaptive Traffic Control"
date : "2020-10-15"
draft : false
type : "post"
tags:
  - "Reinforcement Learning"
  - "Adaptive Traffic Control"
  - "Intelligent Transportation Systems"
  - "SUMO Simulation"
  - "Network Optimization"
journal: "8th National Conference on Civil Engineering, Architecture and Sustainable Urban Development of Iran"
---

<div style="background-color: #f4f6f7; border-left: 6px solid #8e44ad; padding: 15px 20px; border-radius: 4px; margin-bottom: 30px; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
  <h4 style="margin-top: 0; color: #2c3e50; display: flex; align-items: center;"><span style="font-size: 1.5em; margin-right: 10px;">🤖</span> Smarter Intersections, Smoother Cities</h4>
  <p style="margin-bottom: 0; color: #34495e;">In sprawling metropolises like Tehran, drivers spend nearly 24% of their travel time idling at intersections. Traditional fixed-time traffic lights simply cannot adapt to the chaotic, stochastic nature of urban traffic flow. To solve this, our research deploys <strong>Reinforcement Learning (RL)</strong>—an advanced branch of Artificial Intelligence—to create traffic signals that learn, adapt, and optimize the network in real-time.</p>
</div>

Our research, presented at the *8th National Conference on Civil Engineering, Architecture and Sustainable Urban Development of Iran*, details a novel heuristic algorithm that elevates Adaptive Traffic Signal Control (ATSC) from a local, single-intersection level to a coordinated, network-wide scale.

### The Algorithm: Sensing the Future

Unlike standard controllers that react only when vehicles reach the stop line, our RL-based algorithm looks ahead. By utilizing upstream inductive loop sensors, the system anticipates incoming traffic waves before they arrive at the intersection. 

The Reinforcement Learning agent continuously interacts with the traffic environment:
- **State:** The agent observes the current queue lengths, active phases, and the volume of incoming upstream traffic.
- **Action:** It dynamically decides whether to extend the current green phase, terminate it early, or switch to the next phase to maximize flow.
- **Reward:** The agent receives a mathematical "reward" based on its success in minimizing total delay and clearing queues.

Over time, the algorithm learns the optimal policies for vastly different traffic patterns, without requiring rigid, hard-coded rules.

### Interactive Concept: The RL Learning Loop

<style>
.rl-dash {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background: #1a1a2e;
  border-radius: 12px;
  padding: 30px;
  color: #e0e0e0;
  margin: 30px 0;
  box-shadow: 0 10px 25px rgba(0,0,0,0.3);
}
.rl-title {
  color: #00d2d3;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 600;
  margin-bottom: 20px;
  text-align: center;
}
.rl-card {
  background: #16213e;
  border-radius: 8px;
  padding: 20px;
  border: 1px solid #0f3460;
  margin-bottom: 20px;
}
.rl-stat-val {
  font-size: 2.5em;
  font-weight: 700;
}
.rl-loop-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  text-align: center;
  position: relative;
  padding: 20px 0;
}
.rl-box {
  background: #0f3460;
  padding: 25px 15px;
  border-radius: 8px;
  border: 2px solid;
  font-weight: bold;
  font-size: 1.1em;
  z-index: 2;
  box-shadow: 0 4px 10px rgba(0,0,0,0.5);
}
.rl-agent { border-color: #00d2d3; color: #00d2d3; }
.rl-env { border-color: #ff9f43; color: #ff9f43; }

/* Animations for data flow */
@keyframes slide-right {
  0% { left: 25%; opacity: 0; }
  20% { opacity: 1; }
  80% { opacity: 1; }
  100% { left: 75%; opacity: 0; }
}
@keyframes slide-left {
  0% { right: 25%; opacity: 0; }
  20% { opacity: 1; }
  80% { opacity: 1; }
  100% { right: 75%; opacity: 0; }
}

.data-action, .data-state {
  position: absolute;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  z-index: 1;
}
.data-action {
  top: 35px;
  background: #00d2d3;
  animation: slide-right 2s ease-in-out infinite;
  box-shadow: 0 0 8px #00d2d3;
}
.data-state {
  bottom: 35px;
  background: #ff9f43;
  animation: slide-left 2s ease-in-out infinite;
  box-shadow: 0 0 8px #ff9f43;
}
.flow-label {
  position: absolute;
  font-size: 0.75em;
  color: #c8d6e5;
  background: #222f3e;
  padding: 4px 10px;
  border-radius: 12px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 3;
  border: 1px solid #576574;
}
.label-top { top: 25px; }
.label-bottom { bottom: 25px; }

@media (max-width: 768px) {
  .rl-loop-container { grid-template-columns: 1fr; gap: 80px; }
  .label-top { top: 120px; }
  .label-bottom { bottom: 120px; }
  @keyframes slide-right { 0% { top: 20%; left:50%; opacity:0; } 50% {opacity:1;} 100% { top: 80%; left:50%; opacity:0; } }
  @keyframes slide-left { 0% { bottom: 20%; left:50%; opacity:0; } 50% {opacity:1;} 100% { bottom: 80%; left:50%; opacity:0; } }
  .data-action { top: auto; left: 50%; transform: translateX(-50%); animation: slide-right 2s ease-in-out infinite; }
  .data-state { bottom: auto; left: 50%; transform: translateX(-50%); animation: slide-left 2s ease-in-out infinite; }
}
</style>

<div class="rl-dash">
  <div class="rl-card" style="text-align: center;">
    <div class="rl-title">Network-Level Performance Improvements</div>
    <div style="display: flex; justify-content: space-around; flex-wrap: wrap; gap: 20px;">
      <div>
        <div class="rl-stat-val" style="color: #10ac84;">↓ 62%</div>
        <div style="font-size: 0.85em; color: #8395a7; text-transform: uppercase;">Travel Time</div>
      </div>
      <div>
        <div class="rl-stat-val" style="color: #0abde3;">↑ 3%</div>
        <div style="font-size: 0.85em; color: #8395a7; text-transform: uppercase;">Network Capacity</div>
      </div>
    </div>
  </div>
  <div class="rl-card">
    <div class="rl-title">The Reinforcement Learning Loop</div>
    <div class="rl-loop-container">
       <div class="data-action"></div>
       <div class="flow-label label-top">Action (Phase Change)</div> 
       <div class="rl-box rl-agent">
         🧠 RL Controller Agent<br>
         <span style="font-size: 0.7em; color: #c8d6e5; font-weight: normal;">Learns the optimal policy</span>
       </div> 
       <div class="rl-box rl-env">
         🛣️ Traffic Environment<br>
         <span style="font-size: 0.7em; color: #c8d6e5; font-weight: normal;">SUMO Urban Network</span>
       </div>
       <div class="flow-label label-bottom">State (Queue) & Reward (Delay ↓)</div>
       <div class="data-state"></div>
    </div>
  </div>
</div>
<p style="text-align: center; font-size: 0.85em; color: #666; font-style: italic; margin-top: -15px;">Interactive Diagram: The continuous feedback loop of a Reinforcement Learning ATSC agent.</p>

### Simulation and Network-Wide Impact

We tested the proposed algorithm on a highly accurate **SUMO (Simulation of Urban Mobility)** model encompassing a 20-square-kilometer area of Tehran. The simulation ran over seven consecutive days to capture a wide array of traffic scenarios, including severe peak-hour congestion.

The results demonstrated a massive leap in efficiency compared to conventional fixed-time systems:
- **62% Reduction in Travel Time:** Drivers experienced dramatically shorter delays, as the RL agents dynamically cleared incoming platoons of vehicles.
- **Improved Capacity:** The overall network capacity improved by up to **3%**. By preventing upstream blockages and spillback (gridlock), the network could safely absorb more vehicles.

By treating the entire urban grid as a learning environment, this RL-based heuristic algorithm proves that AI can not only manage traffic but actively learn to prevent congestion before it even begins.

*For full details, refer to the original [paper](https://www.researchgate.net/publication/363651871_A_Novel_Approach_to_the_Network-wide_Adaptive_Traffic_Signal_Control_Using_Reinforcement_Learning):*

    @inproceedings{Movahedi2020,
    author = {Movahedi, Mohammad and Kambouzia, Neda and Ziari, Hassan},
    title = {Presenting a Heuristic Algorithm Based on Reinforcement Learning for Optimal Control of Adaptive Traffic Lights at the Network Level},
    booktitle = {8th National Conference on Civil Engineering, Architecture and Sustainable Urban Development of Iran},
    year = {2020}
    }
