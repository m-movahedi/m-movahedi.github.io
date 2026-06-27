---
title : "Crowdsourcing Safety: Detecting Accident Bottlenecks with Open Data"
date : "2020-03-18"
draft : false
type : "post"
tags:
  - "Traffic Engineering"
  - "Open Data"
  - "Probe Data"
  - "Incident Detection"
  - "ITS"
journal: "2nd International Congress on Civil, Architecture and Urbanism"
---

<div style="background-color: #f9f2f4; border-left: 6px solid #c0392b; padding: 15px 20px; border-radius: 4px; margin-bottom: 30px; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
  <h4 style="margin-top: 0; color: #900C3F; display: flex; align-items: center;"><span style="font-size: 1.5em; margin-right: 10px;">🚨</span> Every Second Counts in an Emergency</h4>
  <p style="margin-bottom: 0; color: #555;">Traffic accidents account for approximately 5% of all traffic congestion, creating what engineers call "non-recurring bottlenecks." In developing nations, the most pressing issue isn't just the delay—it's the pre-hospital time for trauma patients. Identifying the exact location of an accident immediately is the first critical step in dispatching rescue teams and saving lives.</p>
</div>

Our research, presented at the *2nd International Congress on Civil, Architecture and Urbanism (Bangkok, 2020)*, tackles the challenge of incident detection using a resource that is already in millions of pockets: open smartphone data.

### The Limitations of Traditional Detection

Traditionally, identifying traffic bottlenecks relied on expensive, fixed infrastructure like induction loops and roadside cameras. However, these systems have limited coverage, especially in developing nations. Furthermore, without advanced modeling, it is difficult to differentiate between a recurring bottleneck (like a daily rush hour slowdown) and a sudden non-recurring bottleneck (an accident).

### The Power of Waze and the California Method

By tapping into crowdsourced probe data from the Waze application, we extracted and analyzed real-time average speed variations along the Sayyad Shirazi Highway in Tehran. Our automated detection methodology involved:
1. **Data Smoothing:** Applying a Savitzky–Golay digital filter to reduce noise and increase precision in the raw GPS speed data.
2. **Spatiotemporal Matrix:** Mapping vehicle speeds across both time and distance to visualize flow disruptions over short intervals.
3. **The California Method:** Using the Federal Highway Administration's (FHWA) delay criterion to calculate the exact vehicle delay and rank the severity of the bottleneck based on demand volume.

### Interactive Dashboard: Detecting the Speed Drop

<style>
.waze-dash {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background: #2f3640;
  border-radius: 12px;
  padding: 30px;
  color: #f5f6fa;
  margin: 30px 0;
  box-shadow: 0 10px 25px rgba(0,0,0,0.3);
}
.waze-title {
  color: #fbc531;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 600;
  margin-bottom: 20px;
  text-align: center;
}
.waze-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-bottom: 25px;
}
.waze-card {
  background: #353b48;
  border-radius: 8px;
  padding: 20px;
  border: 1px solid #718093;
}
/* Graph Styles */
.waze-chart-bg {
  height: 250px;
  background: #1e272e;
  border-radius: 8px;
  position: relative;
  border: 1px solid #718093;
  margin-bottom: 20px;
  /* Grid background */
  background-image: 
    linear-gradient(rgba(113, 128, 147, 0.2) 1px, transparent 1px),
    linear-gradient(90deg, rgba(113, 128, 147, 0.2) 1px, transparent 1px);
  background-size: 20px 20px;
  background-position: 40px 10px; /* Offset to align with axis */
}
.waze-line {
  stroke-dasharray: 300;
  stroke-dashoffset: 300;
  animation: drawLine 6s ease-in-out infinite;
}
@keyframes drawLine {
  0% { stroke-dashoffset: 300; }
  60% { stroke-dashoffset: 0; }
  100% { stroke-dashoffset: 0; }
}
.waze-pin {
  position: absolute;
  left: 36%;
  top: 70%;
  font-size: 1.5em;
  opacity: 0;
  animation: dropPin 6s ease-in-out infinite;
  z-index: 5;
}
@keyframes dropPin {
  0%, 25% { opacity: 0; transform: translateY(-20px) scale(1.5); }
  35%, 100% { opacity: 1; transform: translateY(0) scale(1); }
}
/* Axis and Labels */
.axis-label {
  position: absolute;
  color: #7f8fa6;
  font-size: 0.75em;
  text-transform: uppercase;
  letter-spacing: 1px;
}
.y-axis {
  position: absolute;
  left: 10px;
  top: 10px;
  bottom: 30px;
  width: 25px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  color: #7f8fa6;
  font-size: 0.7em;
}
.x-axis {
  position: absolute;
  left: 40px;
  right: 10px;
  bottom: 5px;
  height: 20px;
  display: flex;
  justify-content: space-between;
  color: #7f8fa6;
  font-size: 0.7em;
}
.axis-lines {
  position: absolute;
  left: 40px;
  bottom: 30px;
  top: 10px;
  right: 10px;
  border-left: 2px solid #718093;
  border-bottom: 2px solid #718093;
}

/* Waze Animation Map Simulation */
.waze-map-sim {
  height: 150px;
  background: #e8e8e8;
  border-radius: 8px;
  position: relative;
  overflow: hidden;
  border: 2px solid #bdc3c7;
}
.waze-road {
  position: absolute;
  top: 50%;
  left: -10%;
  right: -10%;
  height: 30px;
  background: #7f8c8d;
  transform: translateY(-50%) rotate(-5deg);
  border-top: 2px solid #bdc3c7;
  border-bottom: 2px solid #bdc3c7;
}
.waze-dash-line {
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  height: 2px;
  background: repeating-linear-gradient(90deg, #ecf0f1 0, #ecf0f1 10px, transparent 10px, transparent 20px);
  transform: translateY(-50%);
}
/* Cars */
.waze-car {
  width: 14px;
  height: 8px;
  background: #2980b9;
  position: absolute;
  top: 4px;
  border-radius: 2px;
  box-shadow: 1px 1px 2px rgba(0,0,0,0.3);
  animation: driveCar 6s linear infinite;
}
.waze-car:nth-child(2) { background: #c0392b; animation-delay: 0.5s; top: 16px; }
.waze-car:nth-child(3) { background: #f39c12; animation-delay: 1.2s; top: 4px; }
.waze-car:nth-child(4) { background: #27ae60; animation-delay: 1.8s; top: 16px; }

@keyframes driveCar {
  0% { left: -10%; }
  35% { left: 45%; } /* Stop at accident */
  80% { left: 45%; }
  100% { left: 110%; }
}
/* Accident Bubble */
.waze-bubble {
  position: absolute;
  top: 15px;
  left: 50%;
  background: white;
  border: 2px solid #c0392b;
  border-radius: 6px;
  padding: 8px;
  color: #2c3e50;
  font-size: 0.7em;
  transform: translateX(-50%);
  opacity: 0;
  animation: popBubble 6s ease-in-out infinite;
  box-shadow: 0 2px 5px rgba(0,0,0,0.2);
  z-index: 10;
  white-space: nowrap;
}
.waze-bubble::after {
  content: '';
  position: absolute;
  bottom: -6px;
  left: 50%;
  margin-left: -5px;
  border-width: 5px 5px 0;
  border-style: solid;
  border-color: #c0392b transparent transparent transparent;
}
@keyframes popBubble {
  0%, 35% { opacity: 0; transform: translate(-50%, 10px); }
  40%, 80% { opacity: 1; transform: translate(-50%, 0); }
  85%, 100% { opacity: 0; }
}

@media (max-width: 768px) {
  .waze-grid { grid-template-columns: 1fr; }
}
</style>

<div class="waze-dash">
  <div class="waze-grid">
    <div class="waze-card" style="border-left: 4px solid #e84118;">
      <div class="waze-title" style="color: #e84118; text-align: left; font-size: 0.9em;">The Problem</div>
      <p style="font-size: 0.9em; line-height: 1.5; color: #dcdde1; margin-bottom: 0;">Accidents create <strong>non-recurring bottlenecks</strong> that cause massive delays and prevent emergency services from reaching injured individuals in time.</p>
    </div>
    <div class="waze-card" style="border-left: 4px solid #4cd137;">
      <div class="waze-title" style="color: #4cd137; text-align: left; font-size: 0.9em;">The Open Data Solution</div>
      <p style="font-size: 0.9em; line-height: 1.5; color: #dcdde1; margin-bottom: 0;">By combining crowdsourced GPS data from <strong>Waze</strong> with the <strong>California Method</strong>, we can automatically pinpoint these incidents in real-time.</p>
    </div>
  </div>
  
  <div class="waze-card">
    <div class="waze-title">Spatiotemporal Speed Profile</div>
    <div class="waze-chart-bg">
      <div class="y-axis">
        <span>60</span>
        <span>40</span>
        <span>20</span>
        <span>0</span>
      </div>
      <div class="x-axis">
        <span>19:15</span>
        <span>19:30</span>
        <span>19:45</span>
        <span>20:00</span>
        <span>20:15</span>
      </div>
      <div class="axis-lines"></div>
      <div class="axis-label" style="top: -5px; left: 45px;">Speed (km/h)</div>
      <div class="waze-pin">📍<span style="font-size: 0.45em; display: block; color: #e84118; font-weight: bold; background: rgba(0,0,0,0.7); padding: 2px 4px; border-radius: 4px; white-space: nowrap;">Accident Detected (19:30)</span></div>
      <!-- SVG Chart Line aligned with the grid -->
      <svg viewBox="0 0 100 50" preserveAspectRatio="none" style="position: absolute; left: 40px; bottom: 30px; top: 10px; right: 10px; width: calc(100% - 50px); height: calc(100% - 40px);">
        <polyline points="0,5 10,8 20,5 25,10 30,40 40,45 50,35 60,20 75,10 90,5 100,5" fill="none" stroke="#00a8ff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="waze-line"/>
      </svg>
    </div>
    <div class="waze-title" style="margin-top: 30px; font-size: 0.9em; color: #7f8fa6;">Simulated Waze User Experience</div>
    <div class="waze-map-sim" style="height: 250px">
      <div class="waze-road">
        <div class="waze-dash-line"></div>
        <div class="waze-car"></div>
        <div class="waze-car"></div>
        <div class="waze-car"></div>
        <div class="waze-car"></div>
      </div>
      <div class="waze-bubble">
        <strong>⚠️ Major Accident</strong><br>
        <span style="color: #7f8fa6;">Reported by Anonymous</span><br>
        <span style="color: #e74c3c; font-weight: bold;">Average speed: 8 km/h</span>
      </div>
    </div>
  </div>
</div>
<p style="text-align: center; font-size: 0.85em; color: #666; font-style: italic; margin-top: -15px;">Interactive Dashboard: The speed drop graph paired with a simulated Waze incident report.</p>


### Results and Impact

Our analysis successfully pinpointed the exact location, activation time, and severity of an accident bottleneck. The smoothed data revealed a sudden, sharp drop in speed that lasted for roughly 40 minutes before traffic flow gradually recovered and the shockwave dissipated downstream. Because the incident occurred during an off-peak hour and the delay signature matched the California criterion, we could confidently classify it as a non-recurring bottleneck rather than normal congestion.

This low-cost, high-accuracy approach empowers traffic management centers to act faster. Instead of waiting for manual reports or relying on sparse physical sensors, the automated analysis of open probe data provides a scientific, highly scalable solution to manage congestion, reduce emissions, and most importantly, rescue injured individuals sooner.

*For full details, read the [paper](https://www.researchgate.net/publication/363651963_Determination_of_non-recurring_traffic_bottlenecks_caused_by_accidents_using_open_data_Case_Study_of_Sayyad_Shirazi_Highway_Tehran_Iran) in the proceedings of the 2nd International Congress on Civil, Architecture and Urbanism (2020).*

    @inproceedings{Sadeghi2020,
    author = {Sadeghi, Mohsen and Zangooei Dovom, Hossein and Movahedi, Mohammad},
    title = {Determination of non-recurring traffic bottlenecks caused by accidents using open data: Case Study of Sayyad Shirazi Highway, Tehran, Iran},
    booktitle = {2nd International Congress on Civil, Architecture and Urbanism},
    year = {2020},
    address = {Bangkok, Thailand}
    }
