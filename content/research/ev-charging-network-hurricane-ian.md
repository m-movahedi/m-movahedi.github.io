---
title : "Network Robustness of EV Charging Infrastructure During Extreme Weather: Insights from Hurricane Ian"
date : "2024-06-15"
draft : false
type : "post"
tags:
  - "Electric Vehicles"
  - "Resilience"
  - "Disaster Management"
  - "Infrastructure Planning"
  - "Spatial Analytics"
---

<div style="background-color: #f8f9fa; border-left: 6px solid #2980b9; padding: 15px 20px; border-radius: 4px; margin-bottom: 30px; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
  <h4 style="margin-top: 0; color: #2c3e50; display: flex; align-items: center;"><span style="font-size: 1.5em; margin-right: 10px;">🌩️</span> The Vulnerability of Electric Evacuations</h4>
  <p style="margin-bottom: 0; color: #34495e;">As Electric Vehicles (EVs) increasingly dominate the transportation landscape, ensuring their reliability during natural disasters is paramount. During events like Hurricane Ian, mass evacuations put immense stress on the EV charging infrastructure. If transmission lines fail and charging stations go dark, it can profoundly hinder evacuation efficiency and public safety, leading to widespread vehicle immobilization.</p>
</div>

Our latest research, *"Network Robustness Analysis of Electric Vehicle Charging Infrastructure during Extreme Weather Conditions: A Case Study of Hurricane Ian"*, delves into the vulnerabilities of the EV charging network during a county-wide evacuation in Florida.

By utilizing a multilayered network analysis of the electric grid—incorporating real-world data on EV ownership, hurricane paths, and transmission line fragility—we were able to quantify the resilience of the EV charging network and identify critical vulnerabilities.

### Analyzing the Grid's Fragility

The core of our methodology involves constructing an EV infrastructure graph consisting of power plants and charging stations connected by transmission lines. By overlaying the path and wind gusts of **Hurricane Ian (Category 5)**, we calculated the probability of failure for each transmission segment using established structural fragility curves.

We then ran thousands of **Monte Carlo simulations** to evaluate the network's operational status post-impact. This allowed us to observe the emergence of "subgraphs" (indicating grid fragmentation) and the percentage of EV charging stations that remained functional.

<style>
  .ev-grid-container {
    background-color: #1e272e;
    border-radius: 12px;
    padding: 20px;
    position: relative;
    width: 100%;
    max-width: 800px;
    height: 600px;
    margin: 40px auto 10px;
    overflow: hidden;
    box-shadow: 0 10px 30px rgba(0,0,0,0.2);
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    cursor: crosshair;
  }
  .ev-bg {
    position: absolute; top: 0; left: 0; width: 100%; height: 100%;
    background-image: radial-gradient(circle, rgba(255,255,255,0.05) 2px, transparent 2px);
    background-size: 30px 30px;
  }
  .ev-node {
    position: absolute;
    transform: translate(-50%, -50%);
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    color: white;
    z-index: 10;
    transition: all 0.5s ease;
  }
  .ev-plant-nuc {
    width: 45px; height: 45px; background-color: #f39c12; border-radius: 8px;
    box-shadow: 0 0 20px rgba(243, 156, 18, 0.6); font-size: 1.2em;
  }
  .ev-plant-ren {
    width: 40px; height: 40px; background-color: #3498db; border-radius: 8px;
    box-shadow: 0 0 15px rgba(52, 152, 219, 0.6); font-size: 1.2em;
  }
  .ev-station {
    width: 30px; height: 30px; background-color: #2ecc71; border-radius: 50%;
    box-shadow: 0 0 10px rgba(46, 204, 113, 0.5); font-size: 0.9em;
  }
  .ev-line {
    position: absolute; height: 3px; background-color: #bdc3c7; z-index: 5;
    transform-origin: 0 50%; transition: all 0.5s ease;
  }
  
  /* Positions */
  .p-nuc { top: 100px; left: 150px; }
  .p-ren { top: 350px; left: 150px; }
  
  .s1 { top: 100px; left: 350px; } /* Nuclear connected */
  .s2 { top: 220px; left: 300px; } /* Cross connected */
  .s3 { top: 100px; left: 550px; } /* Nuclear connected */
  .s4 { top: 350px; left: 350px; } /* Ren connected */
  .s5 { top: 350px; left: 550px; } /* Ren connected */
  .s6 { top: 220px; left: 650px; } /* Cross connected */

  /* Lines */
  .l-nuc-s1 { top: 100px; left: 150px; width: 200px; transform: translateY(-50%); }
  .l-nuc-s2 { top: 100px; left: 150px; width: 192px; transform: translateY(-50%) rotate(38.6deg); }
  .l-s1-s3 { top: 100px; left: 350px; width: 200px; transform: translateY(-50%); }
  .l-s3-s6 { top: 100px; left: 550px; width: 156px; transform: translateY(-50%) rotate(50.2deg); }
  
  .l-ren-s4 { top: 350px; left: 150px; width: 200px; transform: translateY(-50%); }
  .l-ren-s2 { top: 350px; left: 150px; width: 198px; transform: translateY(-50%) rotate(-40.9deg); }
  .l-s4-s5 { top: 350px; left: 350px; width: 200px; transform: translateY(-50%); }
  .l-s5-s6 { top: 350px; left: 550px; width: 164px; transform: translateY(-50%) rotate(-52.4deg); }
  
  /* Hurricane Overlay */
  .ev-hurricane {
    position: absolute; top: 150px; left: 0; width: 800px; height: 300px;
    background: repeating-linear-gradient(45deg, rgba(231,76,60,0.05), rgba(231,76,60,0.05) 10px, rgba(231,76,60,0.1) 10px, rgba(231,76,60,0.1) 20px);
    opacity: 0; pointer-events: none; transition: opacity 0.8s; z-index: 1;
    display: flex; justify-content: flex-end; align-items: flex-end; padding: 20px;
    color: rgba(231, 76, 60, 0.8); font-size: 2em; font-weight: bold;
  }
  
  /* Status */
  .ev-status {
    position: absolute; bottom: 80px; right: 20px; background: rgba(0,0,0,0.7);
    color: #fff; padding: 15px; border-radius: 8px; font-size: 0.5em; z-index: 20;
    min-width: 250px;
  }
  
  /* Interaction */
  .ev-grid-container:hover .ev-hurricane { opacity: 1; }
  
  /* Broken Lines */
  .ev-grid-container:hover .l-ren-s4,
  .ev-grid-container:hover .l-ren-s2,
  .ev-grid-container:hover .l-s4-s5,
  .ev-grid-container:hover .l-s5-s6 {
    background-color: #c0392b; opacity: 0.2; box-shadow: 0 0 8px rgba(231, 76, 60, 0.8);
  }
  
  /* Failed Nodes */
  .ev-grid-container:hover .p-ren,
  .ev-grid-container:hover .s4,
  .ev-grid-container:hover .s5 {
    background-color: #7f8c8d; box-shadow: none; color: #ccc;
  }
  
  .ev-grid-container:hover .ev-status { background: rgba(231, 76, 60, 0.9); }
  .ev-grid-container:hover .ev-state::after {
    content: "Hurricane Strike! Weather-dependent plant (Group A) forced offline. Associated EV stations lose power. Nuclear-connected stations maintain 66% network functionality.";
  }
  .ev-grid-container .ev-state::after {
    content: "Normal Conditions. 100% of EV Stations Operational.";
  }
  
  .ev-legend {
    position: absolute; bottom: 20px; left: 20px; display: flex; gap: 15px;
    background: rgba(0,0,0,0.6); padding: 10px; border-radius: 8px; color: #fff; font-size: 0.8em; z-index: 20;
  }
  .ev-leg-item { display: flex; align-items: center; gap: 5px; }
  .ev-dot { width: 12px; height: 12px; border-radius: 50%; }
</style>

<div class="ev-grid-container">
  <div class="ev-bg"></div>
  <div class="ev-hurricane">🌀 Hurricane Impact Zone</div>
  
  <div class="ev-status">
    <strong>Network Status:</strong><br><br>
    <span class="ev-state"></span>
  </div>
  
  <div class="ev-legend">
    <div class="ev-leg-item"><div class="ev-dot" style="background:#f39c12; border-radius:3px;"></div> Nuclear Plant (Group B)</div>
    <div class="ev-leg-item"><div class="ev-dot" style="background:#3498db; border-radius:3px;"></div> Weather-Dependent Plant (Group A)</div>
    <div class="ev-leg-item"><div class="ev-dot" style="background:#2ecc71;"></div> EV Station</div>
  </div>

  <!-- Lines -->
  <div class="ev-line l-nuc-s1"></div>
  <div class="ev-line l-nuc-s2"></div>
  <div class="ev-line l-s1-s3"></div>
  <div class="ev-line l-s3-s6"></div>
  
  <div class="ev-line l-ren-s4"></div>
  <div class="ev-line l-ren-s2"></div>
  <div class="ev-line l-s4-s5"></div>
  <div class="ev-line l-s5-s6"></div>

  <!-- Nodes -->
  <div class="ev-node ev-plant-nuc p-nuc" title="Nuclear Power Plant">☢️</div>
  <div class="ev-node ev-plant-ren p-ren" title="Weather-Dependent Power Plant">☀️</div>
  
  <div class="ev-node ev-station s1">🔋</div>
  <div class="ev-node ev-station s2">🔋</div>
  <div class="ev-node ev-station s3">🔋</div>
  <div class="ev-node ev-station s4">🔋</div>
  <div class="ev-node ev-station s5">🔋</div>
  <div class="ev-node ev-station s6">🔋</div>
</div>
<p style="text-align: center; font-size: 0.85em; color: #666; font-style: italic; margin-bottom: 40px;">Interactive Figure 1: Hover over the network to simulate Hurricane Ian. Observe how a diversified energy mix (Nuclear vs Weather-dependent) affects grid resilience and localized EV station functionality.</p>


### The Critical Role of Energy Diversity

To account for the operational vulnerabilities of different power plant types, we evaluated the network under four distinct scenarios.

**Group A** power plants (solar, wind, and conventional generators) are highly susceptible to weather-induced interruptions. Events like hurricanes often force the shutdown of these facilities due to safety protocols or supply chain issues. Conversely, **Group B** power plants (such as nuclear facilities) adhere to stringent safety standards that allow them to withstand severe weather events and maintain operational status throughout a crisis.

When analyzing the functional subgraphs in our simulation, the discrepancy between these scenarios accentuates the pivotal role of a diversified energy mix:
- **Moderate Damage:** At a moderate damage index (0.368), the charging infrastructure demonstrated remarkable resilience, maintaining approximately **90% functionality**.
- **Extreme Scenarios:** Even when a hypothetical worst-case scenario was tested—where *all* internal power plants in the impacted area failed—power supplied externally preserved over **71% functionality** of the charging infrastructure.

### Building for the Future

The findings emphasize that the resilience of Florida's EV charging network intricately depends not only on the physical durability of transmission lines but heavily on the **functional status of the associated power plants**. 

A grid overly reliant on weather-dependent energy sources is vulnerable during a natural disaster. Bolstering the grid's robustness requires a balanced energy portfolio that includes weather-resistant power sources (like nuclear energy) to ensure uninterrupted power supply. Furthermore, these insights pave the way for exploring strategic improvements, such as the development of underground electric grids, to fortify infrastructure prior to the next major storm.


You can find the published paper [here](https://www.doi.org/10.1061/9780784485538.058). 

    @inproceedings{Movahedi2024a,
    address = {Reston, VA},
    archivePrefix = {arXiv},
    arxivId = {arXiv:1011.1669v3},
    author = {Movahedi, Mohammad and Khayamim, Razieh and Choi, Juyeong and Ozguven, Eren Erman},
    booktitle = {International Conference on Transportation and Development 2024},
    doi = {10.1061/9780784485538.058},
    eprint = {arXiv:1011.1669v3},
    isbn = {9780784485538},
    issn = {20711050},
    mendeley-groups = {0 My Own work/Conference papers},
    month = {jun},
    number = {1},
    pages = {657--669},
    pmid = {25246403},
    publisher = {American Society of Civil Engineers},
    title = {{Network Robustness Analysis of Electric Vehicle Charging Infrastructure during Extreme Weather Conditions: A Case Study of Hurricane Ian}},
    volume = {11},
    year = {2024}
    }
