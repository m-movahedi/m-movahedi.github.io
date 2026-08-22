---
title : "Mobile Electric Vehicle Charging Solutions for Natural Disasters"
date : "2026-06-15"
draft : false
type : "post"
tags:
  - "Resilience"
  - "Transportation planning"
  - "Electric Vehicles"
  - "Disaster Management"
  - "Multi-Criteria Decision Analysis"
  - "Infrastructure Management"
  - "Infrastructure Planning"
journal: "Journal of Transport Geography"
---

The transition to electric vehicles (EVs) introduces new paradigms for emergency management, particularly in hurricane-prone regions. During extreme weather events, the vulnerability of the power grid becomes a critical bottleneck. Structural failures within the transmission and distribution networks can disable permanently installed EV charging stations precisely when they are most necessary for mass population evacuations. 

<div style="background-color: #f4f6f9; padding: 20px; border-left: 5px solid #0056b3; border-radius: 4px; margin: 25px 0;">
  <h4 style="margin-top: 0; color: #0056b3;">The Research Problem</h4>
  <p style="margin-bottom: 0; font-size: 1.1em; color: #242424;">How can emergency managers systematically allocate limited mobile power resources to ensure EV operability when traditional grid-connected infrastructure fails?</p>
</div>

Our recent study, <em>"Robust Mobile Electric Vehicle Charging Solutions for Natural Disasters: A Multi-Criteria Resilience Analysis in Florida,"</em> formalizes a methodological framework to optimize the deployment of <strong>Mobile EV Charging Stations (MEVCS)</strong>. 

<style>
.fc-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: Arial, sans-serif;
  font-size: 0.9em;
  background: #f8f9fa;
  padding: 30px;
  border-radius: 12px;
  border: 1px solid #dee2e6;
  margin: 30px 0;
  box-shadow: inset 0 0 10px rgba(0,0,0,0.05);
}
.fc-box {
  background: #ffffff;
  border: 2px solid #aec4d6;
  border-radius: 8px;
  padding: 15px;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0,0,0,0.05);
  margin-bottom: 0px;
  position: relative;
  width: 100%;
  max-width: 650px;
}
.fc-title {
  font-weight: bold;
  color: #2c3e50;
  margin-bottom: 15px;
  font-size: 1.1em;
  border-bottom: 1px solid #eee;
  padding-bottom: 10px;
}
.fc-row {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 10px;
}
.fc-sub {
  background: #e9ecef;
  border: 1px solid #ced4da;
  border-radius: 6px;
  padding: 10px;
  flex: 1;
  min-width: 120px;
  color: #495057;
  font-size: 0.9em;
}
.fc-sub ul {
  text-align: left;
  padding-left: 20px;
  margin: 5px 0 0 0;
  font-size: 0.85em;
}
.fc-arrow {
  width: 2px;
  height: 25px;
  background: #6c757d;
  margin: 5px auto;
  position: relative;
}
.fc-arrow::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: -4px;
  border-width: 5px 5px 0;
  border-style: solid;
  border-color: #6c757d transparent transparent transparent;
}
.fc-mca { border: 2px solid #f5b041; background: #fffcf5; }
.fc-mca .fc-title { color: #d68910; }
.fc-crit {
  background: #fdebd0;
  border: 1px solid #fad7a1;
  border-radius: 4px;
  padding: 8px;
  font-size: 0.8em;
  width: 18%;
  box-sizing: border-box;
}
.fc-opt { border: 2px solid #58d68d; background: #eafaf1; }
.fc-opt .fc-title { color: #1d8348; }
.fc-opt-sub {
  background: #d5f5e3;
  border: 1px solid #abebc6;
  margin: 10px auto 0;
  width: 80%;
  padding: 8px;
  border-radius: 4px;
  color: #145a32;
  font-weight: bold;
}
</style>

<div class="fc-container">
  <!-- Phase 1 -->
  <div class="fc-box">
    <div class="fc-title">Data Collection & Preprocessing</div>
    <div class="fc-row">
      <div class="fc-sub" style="flex: 2;">
        <strong>Collect spatial & non-spatial data:</strong>
        <ul>
          <li>EV ownership by ZIP</li>
          <li>Traffic intensity</li>
          <li>Power grid fragility</li>
          <li>Accessibility to shelters</li>
          <li>Emergency route accessibility</li>
        </ul>
      </div>
      <div class="fc-sub" style="display: flex; align-items: center; justify-content: center;">
        <strong>Criteria Selection &<br>Normalization</strong>
      </div>
    </div>
  </div>
  <div class="fc-arrow"></div>
  <!-- Phase 2 & 3 -->
  <div class="fc-sub" style="background: #d0ece7; border-color: #a2d9ce; color: #0e6251; font-weight: bold; width: 100%; max-width: 650px; text-align: center;">
    Assign relative importance (based on stakeholder priorities) &rarr; Weight Assignment
  </div>
  <div class="fc-arrow"></div>
  <!-- Phase 4 -->
  <div class="fc-box fc-mca">
    <div class="fc-title">Multi-Criteria Analysis</div>
    <div class="fc-row" style="margin-bottom: 10px;">
      <div class="fc-crit" style="color: #242424;">Normalize Evac Routes</div>
      <div class="fc-crit" style="color: #242424;">Normalize Critical Facilities</div>
      <div class="fc-crit" style="color: #242424;">Normalize Grid Failure</div>
      <div class="fc-crit" style="color: #242424;">Normalize Traffic Volume</div>
      <div class="fc-crit" style="color: #242424;">Normalize EV Density</div>
    </div>
    <div style="display: flex; justify-content: center; gap: 10.5%; margin-bottom: 5px;">
       <div class="fc-arrow" style="margin: 0; height: 15px;"></div>
       <div class="fc-arrow" style="margin: 0; height: 15px;"></div>
       <div class="fc-arrow" style="margin: 0; height: 15px;"></div>
       <div class="fc-arrow" style="margin: 0; height: 15px;"></div>
       <div class="fc-arrow" style="margin: 0; height: 15px;"></div>
    </div>
    <div class="fc-sub" style="background: #fad7a1; color: #9c640c; font-weight: bold; width: 60%; margin: 0 auto 5px;">
      Weighted Overlay Analysis
    </div>
    <div class="fc-arrow" style="margin: 0 auto 5px; height: 15px;"></div> 
    <div class="fc-sub" style="background: #f8c471; color: #7e5109; font-weight: bold; width: 40%; margin: 0 auto;">
      Suitability Surface
    </div>
  </div>
  <div class="fc-arrow"></div>
  <!-- Phase 5 -->
  <div class="fc-box fc-opt">
    <div class="fc-title">Optimal Location Selection</div>
    <div class="fc-opt-sub">Extract High Suitability Areas</div>
    <div class="fc-arrow" style="margin: 5px auto 0; height: 15px;"></div>
    <div class="fc-opt-sub">Generate Candidate Points</div>
    <div class="fc-arrow" style="margin: 5px auto 0; height: 15px;"></div>
    <div class="fc-opt-sub">Select Distributed Locations</div>
  </div>
  <div class="fc-arrow"></div>
  <div class="fc-sub" style="background: #28b463; color: white; font-weight: bold; font-size: 1.1em; padding: 15px; border: none; box-shadow: 0 4px 10px rgba(40, 180, 99, 0.4); width: 100%; max-width: 650px; text-align: center;">
    Final 14 Mobile Charging Station Locations
  </div>
  <p style="font-size: 0.85em; color: #666; margin-top: 15px; font-style: italic; text-align: center;">Figure 1: Methodological framework integrating spatial analytics and probabilistic power grid resilience modeling for MEVCS deployment.</p>
</div>


### Probabilistic Modeling of Grid Fragility

A novel contribution of this research is the explicit integration of power infrastructure vulnerability into the transportation planning model. Rather than assuming uniform charging operability, we employed a graph-based network model coupled with component-specific fragility curves. 

The probability of transmission segment failure ($P_{failure}$) was calculated as a function of wind velocity ($V$) and the structural failure threshold ($d_{LS}$), followed by Monte Carlo simulations ($n=1000$) to evaluate system-wide cascading failures. Focusing on the Greater Tampa Bay area during Hurricane Ian (Category 5), our simulations under the most severe structural limit state ($d_{LS} = 0.245$) revealed that approximately <strong style="color: #dc3545;">58.26%</strong> of existing charging stations would likely fail due to localized power generation and transmission line disruptions.

<style>
/* Container */
.grid-container-v2 {
  position: relative;
  width: 100%;
  max-width: 800px;
  height: 500px;
  margin: 40px auto 10px;
  background-color: #1b263b;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0,0,0,0.25);
  border: 2px solid #2c3e50;
  cursor: crosshair;
}
/* Background */
.grid-bg-v2 {
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  background-image: radial-gradient(circle, rgba(255,255,255,0.05) 2px, transparent 2px);
  background-size: 25px 25px;
}
/* Nodes */
.n-node {
  position: absolute;
  width: 24px;
  height: 24px;
  background-color: #2ecc71; 
  border-radius: 50%;
  box-shadow: 0 0 15px 4px rgba(46, 204, 113, 0.5);
  z-index: 10;
  transform: translate(-50%, -50%);
  transition: all 0.5s ease;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 11px;
  color: #fff;
  font-weight: bold;
}
.n-plant {
  width: 32px;
  height: 32px;
  border-radius: 6px;
  background-color: #f1c40f;
  box-shadow: 0 0 18px 6px rgba(241, 196, 15, 0.6);
  font-size: 16px;
}
/* Node Positions */
.p1 { top: 100px; left: 80px; }
.p2 { top: 400px; left: 720px; }
.n1 { top: 80px; left: 250px; }
.n2 { top: 80px; left: 500px; }
.n3 { top: 280px; left: 150px; }
.n4 { top: 240px; left: 350px; }
.n5 { top: 200px; left: 600px; }
.n6 { top: 280px; left: 680px; }
.n7 { top: 420px; left: 80px; }
.n8 { top: 380px; left: 300px; }
.n9 { top: 320px; left: 480px; }
.n10 { top: 450px; left: 600px; }
.n11 { top: 180px; left: 750px; }
.n13 { top: 100px; left: 350px; } /* cascading */
.n15 { top: 480px; left: 200px; } /* cascading */
/* Edges */
.e-line {
  position: absolute;
  height: 3px;
  background-color: #3498db;
  z-index: 5;
  transform-origin: 0 50%;
  transition: all 0.5s ease;
  box-shadow: 0 0 8px rgba(52, 152, 219, 0.7);
}
.e-p1-n1 { top: 100px; left: 80px; width: 171px; transform: translateY(-50%) rotate(-6.7deg); }
.e-p1-n3 { top: 100px; left: 80px; width: 193px; transform: translateY(-50%) rotate(68.7deg); }
.e-n1-n2 { top: 80px; left: 250px; width: 250px; transform: translateY(-50%) rotate(0deg); }
.e-n1-n4 { top: 80px; left: 250px; width: 188px; transform: translateY(-50%) rotate(58.0deg); }
.e-n4-n13 { top: 240px; left: 350px; width: 140px; transform: translateY(-50%) rotate(-90deg); }
.e-n3-n4 { top: 280px; left: 150px; width: 204px; transform: translateY(-50%) rotate(-11.3deg); }
.e-n3-n7 { top: 280px; left: 150px; width: 156px; transform: translateY(-50%) rotate(116.5deg); }
.e-n3-n8 { top: 280px; left: 150px; width: 180px; transform: translateY(-50%) rotate(33.7deg); }
.e-n4-n8 { top: 240px; left: 350px; width: 148px; transform: translateY(-50%) rotate(109.6deg); }
.e-n4-n9 { top: 240px; left: 350px; width: 152px; transform: translateY(-50%) rotate(31.6deg); }
.e-n8-n9 { top: 380px; left: 300px; width: 189px; transform: translateY(-50%) rotate(-18.4deg); }
.e-n8-n15 { top: 380px; left: 300px; width: 141px; transform: translateY(-50%) rotate(135.0deg); }
.e-n9-n10 { top: 320px; left: 480px; width: 176px; transform: translateY(-50%) rotate(47.3deg); }
.e-n4-n5 { top: 240px; left: 350px; width: 253px; transform: translateY(-50%) rotate(-9.0deg); }
.e-n2-n5 { top: 80px; left: 500px; width: 156px; transform: translateY(-50%) rotate(50.1deg); }
.e-n5-n6 { top: 200px; left: 600px; width: 113px; transform: translateY(-50%) rotate(45.0deg); }
.e-n6-p2 { top: 280px; left: 680px; width: 126px; transform: translateY(-50%) rotate(71.5deg); }
.e-n6-n11 { top: 280px; left: 680px; width: 122px; transform: translateY(-50%) rotate(-55.0deg); }
.e-p2-n10 { top: 400px; left: 720px; width: 130px; transform: translateY(-50%) rotate(157.3deg); }
/* Hurricane Area */
.hurricane-zone {
  position: absolute;
  top: 130px;
  left: 240px;
  width: 300px;
  height: 370px;
  background: repeating-linear-gradient(45deg, rgba(231,76,60,0.1), rgba(231,76,60,0.1) 10px, rgba(231,76,60,0.2) 10px, rgba(231,76,60,0.2) 20px);
  border: 2px dashed rgba(231,76,60,0.6);
  border-radius: 20px;
  z-index: 2;
  opacity: 0;
  transition: opacity 0.8s ease;
  pointer-events: none;
  display: flex;
  justify-content: center;
  align-items: center;
}
.hurricane-zone::after {
  content: "🌀 HURRICANE PATH 🌀";
  color: rgba(231, 76, 60, 0.8);
  font-size: 24px;
  font-weight: bold;
  transform: rotate(-15deg);
}

/* Hover States (Hurricane Hit) */
.grid-container-v2:hover .hurricane-zone {
  opacity: 1;
}

/* Broken Lines inside/crossing Hurricane */
.grid-container-v2:hover .e-n1-n4,
.grid-container-v2:hover .e-n4-n13,
.grid-container-v2:hover .e-n3-n4,
.grid-container-v2:hover .e-n3-n8,
.grid-container-v2:hover .e-n4-n8,
.grid-container-v2:hover .e-n4-n9,
.grid-container-v2:hover .e-n8-n9,
.grid-container-v2:hover .e-n8-n15,
.grid-container-v2:hover .e-n9-n10,
.grid-container-v2:hover .e-n4-n5 {
  background-color: #e74c3c;
  box-shadow: 0 0 8px rgba(231, 76, 60, 0.8);
  opacity: 0.2;
}
/* Nodes losing power (Inside & Cascading Outside) */
.grid-container-v2:hover .n4,
.grid-container-v2:hover .n8,
.grid-container-v2:hover .n9,
.grid-container-v2:hover .n13,
.grid-container-v2:hover .n15 {
  background-color: #7f8c8d;
  box-shadow: none;
}
/* Status text */
.grid-status-v2 {
  position: absolute;
  bottom: 20px;
  left: 20px;
  color: #fff;
  background: rgba(0,0,0,0.7);
  padding: 10px 15px;
  border-radius: 20px;
  font-size: 0.9em;
  z-index: 20;
  transition: background 0.5s ease;
}
.grid-container-v2:hover .grid-status-v2 {
  background: rgba(231, 76, 60, 0.9);
}
.grid-container-v2:hover .grid-state-v2::after {
  content: "Hurricane Strike! Lines in path broken. 5 nodes lost power (including 2 outside the path).";
}
.grid-container-v2 .grid-state-v2::after {
  content: "Grid Stable. 2 Plants and 13 Stations fully powered.";
}
.grid-instruct {
  text-align: center;
  font-size: 0.85em;
  color: #888;
  margin-bottom: 40px;
  font-style: italic;
}
</style>
<div class="grid-container-v2">
  <div class="grid-bg-v2"></div>
  <div class="hurricane-zone"></div>
  <!-- Lines -->
  <div class="e-line e-p1-n1"></div>
  <div class="e-line e-p1-n3"></div>
  <div class="e-line e-n1-n2"></div>
  <div class="e-line e-n1-n4"></div>
  <div class="e-line e-n4-n13"></div>
  <div class="e-line e-n3-n4"></div>
  <div class="e-line e-n3-n7"></div>
  <div class="e-line e-n3-n8"></div>
  <div class="e-line e-n4-n8"></div>
  <div class="e-line e-n4-n9"></div>
  <div class="e-line e-n8-n9"></div>
  <div class="e-line e-n8-n15"></div>
  <div class="e-line e-n9-n10"></div>
  <div class="e-line e-n4-n5"></div>
  <div class="e-line e-n2-n5"></div>
  <div class="e-line e-n5-n6"></div>
  <div class="e-line e-n6-p2"></div>
  <div class="e-line e-n6-n11"></div>
  <div class="e-line e-p2-n10"></div>
  <!-- Nodes -->
  <div class="n-node n-plant p1" title="Power Plant 1">⚡</div>
  <div class="n-node n-plant p2" title="Power Plant 2">⚡</div>
  <div class="n-node n1"></div>
  <div class="n-node n2"></div>
  <div class="n-node n3"></div>
  <div class="n-node n4"></div>
  <div class="n-node n5"></div>
  <div class="n-node n6"></div>
  <div class="n-node n7"></div>
  <div class="n-node n8"></div>
  <div class="n-node n9"></div>
  <div class="n-node n10"></div>
  <div class="n-node n11"></div>
  <div class="n-node n13"></div>
  <div class="n-node n15"></div>
  <div class="grid-status-v2"><strong>Network Status:</strong> <span class="grid-state-v2"></span></div>
</div>
<div class="grid-instruct">👆 Hover over the complex network above to simulate a focused hurricane strike. Watch the transmission lines in its path fail and observe the cascading power outages extending to nodes outside the path.</div>
<div style="display: flex; flex-wrap: wrap; gap: 20px; margin: 30px 0;">
  <div style="flex: 1 1 100%; background: #ffffff; border: 1px solid #e1e4e8; border-radius: 8px; padding: 20px; box-shadow: 0 2px 5px rgba(0,0,0,0.05);">
    <h4 style="margin-top: 0; border-bottom: 2px solid #28a745; padding-bottom: 10px; color: #242424;">Multi-Criteria Decision Analysis (MCDA) via AHP</h4>
    <p style="margin-bottom: 10px; color: #242424;">To determine optimal MEVCS placement, we utilized the Analytical Hierarchy Process (AHP) to derive criteria weights based on consensus from a panel of 12 domain experts across emergency management, power systems resilience, and urban planning. The normalized weights ($\omega$) were established as:</p>
    <ul style="padding-left: 20px; line-height: 1.6; margin-bottom: 0; color: #242424;">
      <li><strong>EV Ownership Density ($\omega_1 = 0.30$):</strong> Quantifying local charging demand using ZIP code registration counts.</li>
      <li><strong>Grid Failure Probability ($\omega_3 = 0.25$):</strong> Prioritizing areas with the highest simulated infrastructure fragility.</li>
      <li><strong>Evacuation Routes ($\omega_4 = 0.20$):</strong> Minimizing detour distances to designated evacuation corridors.</li>
      <li><strong>Critical Facilities ($\omega_5 = 0.15$):</strong> Ensuring service availability near hospitals and emergency shelters.</li>
      <li><strong>Traffic Volume ($\omega_2 = 0.10$):</strong> Using Annual Average Daily Traffic (AADT) to capture network usage intensity.</li>
    </ul>
  </div>
</div>

### Validating Predictions with Satellite Imagery

To ensure the theoretical vulnerability model accurately reflected empirical conditions, we conducted an independent corroboration using **satellite-derived nighttime light (NTL) imagery**. By computing the normalized difference in nighttime radiance pre- and post-landfall, we observed distinct, localized decreases in brightness. These darkened zones aligned with high spatial correspondence to our Monte Carlo predicted outage clusters, validating that the framework successfully isolates the true geographic footprint of hurricane-induced disruptions.

<style>
  .ntl-container {
    position: relative;
    width: 100%;
    max-width: 600px;
    height: 300px;
    margin: 40px auto 10px;
    background-color: #1a1a2e;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 10px 30px rgba(0,0,0,0.15);
    border: 2px solid #30475e;
    cursor: crosshair;
  }
  
  .ntl-grid {
    position: absolute;
    top: 0; left: 0; right: 0; bottom: 0;
    background-image: 
      linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px);
    background-size: 30px 30px;
  }
  .ntl-sat-wrapper {
    position: absolute;
    top: 10px;
    left: -120px;
    animation: ntl-orbit 6s linear infinite;
    z-index: 10;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  @keyframes ntl-orbit {
    0% { transform: translateX(0) translateY(0); }
    50% { transform: translateX(400px) translateY(20px); }
    100% { transform: translateX(800px) translateY(0); }
  }
  .ntl-sat {
    font-size: 28px;
    z-index: 10;
  }
  .ntl-beam {
    width: 120px;
    height: 300px;
    background: linear-gradient(to bottom, rgba(0, 255, 200, 0.3), transparent);
    clip-path: polygon(50% 0, 100% 100%, 0 100%);
    z-index: 5;
    margin-top: -10px;
  }
  .ntl-light {
    position: absolute;
    width: 8px;
    height: 8px;
    background-color: #fbd46d;
    border-radius: 50%;
    box-shadow: 0 0 12px 3px rgba(251, 212, 109, 0.8);
    transition: opacity 1s ease, background-color 1s ease, box-shadow 1s ease;
  }
  .ntl-l1 { top: 120px; left: 150px; }
  .ntl-l2 { top: 140px; left: 180px; }
  .ntl-l3 { top: 180px; left: 160px; } 
  .ntl-l4 { top: 220px; left: 200px; } 
  .ntl-l5 { top: 160px; left: 300px; }
  .ntl-l6 { top: 130px; left: 350px; }
  .ntl-l7 { top: 200px; left: 320px; } 
  .ntl-l8 { top: 170px; left: 400px; }
  .ntl-l9 { top: 240px; left: 380px; } 
  .ntl-l10 { top: 100px; left: 450px; }
  .ntl-l11 { top: 150px; left: 480px; } 
  .ntl-l12 { top: 210px; left: 460px; } 
  .ntl-status {
    position: absolute;
    bottom: 20px;
    left: 20px;
    color: #fff;
    font-family: sans-serif;
    background: rgba(0,0,0,0.7);
    padding: 10px 15px;
    border-radius: 20px;
    font-size: 0.9em;
    z-index: 20;
    transition: background 0.5s ease;
  }
  .ntl-container:hover .ntl-vuln {
    opacity: 0.1;
    background-color: #333;
    box-shadow: none;
  }  
  .ntl-container:hover .ntl-status {
    background: rgba(220, 53, 69, 0.8);
  }  
  .ntl-container:hover .ntl-state::after {
    content: "Post-Landfall (Outages Detected)";
  }
  .ntl-container .ntl-state::after {
    content: "Pre-Landfall (Normal Operations)";
  }  
  .ntl-instruct {
    text-align: center;
    font-size: 0.85em;
    color: #888;
    margin-bottom: 40px;
    font-style: italic;
  }
</style>
<div class="ntl-container">
  <div class="ntl-grid"></div>
  <div class="ntl-sat-wrapper">
    <div class="ntl-sat">🛰️</div>
    <div class="ntl-beam"></div>
  </div>  
  <div class="ntl-light ntl-l1"></div>
  <div class="ntl-light ntl-l2 ntl-vuln"></div>
  <div class="ntl-light ntl-l3 ntl-vuln"></div>
  <div class="ntl-light ntl-l4"></div>
  <div class="ntl-light ntl-l5 ntl-vuln"></div>
  <div class="ntl-light ntl-l6"></div>
  <div class="ntl-light ntl-l7 ntl-vuln"></div>
  <div class="ntl-light ntl-l8"></div>
  <div class="ntl-light ntl-l9 ntl-vuln"></div>
  <div class="ntl-light ntl-l10 ntl-vuln"></div>
  <div class="ntl-light ntl-l11"></div>
  <div class="ntl-light ntl-l12 ntl-vuln"></div>  
  <div class="ntl-status"><strong>Satellite NTL View:</strong> <span class="ntl-state"></span></div>
</div>
<div class="ntl-instruct">👆 Hover over the interactive map above to simulate the hurricane landfall and observe the power outages.</div>

### Strategic Deployment via Coverage-Aware Optimization

To translate the composite suitability surface into an actionable deployment strategy, we implemented a coverage-aware greedy selection algorithm. High-suitability areas were extracted and discretized into a 500-meter candidate grid. 

To mitigate spatial clustering and maximize regional coverage, the algorithm iteratively selected the highest-ranked candidates while applying a **5-kilometer exclusion buffer**. This process yielded **14 strategically distributed MEVCS locations** that balance high empirical suitability with efficient spatial dispersion.

This methodology advances disaster operations research by explicitly coupling transportation network characteristics with power infrastructure resilience, providing decision-makers with a mathematically rigorous tool for emergency logistics planning.


## Cite this paper

This research was published in the [Transport Geography](https://www.doi.org/10.1016/j.jtrangeo.2026.104739).

    @article{KHAYAMIM2026104739,
    title = {Robust mobile electric vehicle charging solutions for natural disasters: A multi-criteria resilience analysis in Florida},
    journal = {Journal of Transport Geography},
    volume = {135},
    pages = {104739},
    year = {2026},
    issn = {0966-6923},
    doi = {https://doi.org/10.1016/j.jtrangeo.2026.104739},
    url = {https://www.sciencedirect.com/science/article/pii/S0966692326001936},
    author = {Razieh Khayamim and Mohammad Movahedi and Onur Alisan and Seçkin Özkul and Eren Erman Ozguven and Maxim A. Dulebenets},
    }