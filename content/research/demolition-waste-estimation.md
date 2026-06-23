---
title : "Advanced Estimation Models for Demolition Waste"
date : "2024-03-20"
draft : false
type : "post"
tags:
  - "Construction Waste"
  - "Machine Learning"
  - "Sustainability"
  - "Artificial Neural Networks"
  - "Circular Economy"
---

<div style="background-color: #fff3cd; border-left: 6px solid #ffc107; padding: 15px 20px; border-radius: 4px; margin-bottom: 30px; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
  <h4 style="margin-top: 0; color: #856404; display: flex; align-items: center;"><span style="font-size: 1.5em; margin-right: 10px;">🏗️</span> The Demolition Data Gap</h4>
  <p style="margin-bottom: 0; color: #533f03;">In the United States, construction and demolition waste (CDW) accounts for roughly 67% of the total solid waste stream, with a staggering <strong>90% originating directly from demolition sites</strong>. For a transition toward a circular economy, accurately estimating the <em>recoverable</em> portion of this waste is crucial. Yet, traditional estimation models remain heavily focused on total volume rather than recyclable potential.</p>
</div>

Our latest research, *"Assessment of Estimation Methods for Demolition Waste Volume and Cost"*, bridges this critical gap. By analyzing a database of 52 highly detailed demolition projects in Tallahassee, Florida, we evaluated the feasibility and accuracy of four distinct estimation approaches. The goal? To predict both the **demolition cost** and the **volume of recoverable materials** (like concrete) before the wrecking ball even swings.

### The Contenders: Traditional vs. Advanced Models

We put four predictive models to the test:
1. **Multiple Regression Analysis (MRA):** The traditional statistical workhorse that assumes linear relationships between building traits and waste outcomes.
2. **Artificial Neural Network (ANN):** A flexible machine learning approach capable of mapping complex, non-linear relationships, though often criticized as a "black box."
3. **Advanced Case-based Reasoning (ACBR - Averaging):** A problem-solving paradigm that retrieves historically similar demolition cases and averages their outcomes.
4. **Advanced Case-based Reasoning (ACBR - Trained):** A sophisticated hybrid that uses historical cases to train MRA and ANN algorithms, utilizing a Genetic Algorithm to minimize prediction errors.

<style>
.acbr-container {
  display: flex; justify-content: space-between; align-items: stretch; gap: 15px; margin: 40px 0; font-family: Arial, sans-serif;
}
.acbr-step {
  flex: 1; background: #fff; border: 2px solid #bdc3c7; border-radius: 8px; padding: 20px; text-align: center;
  position: relative; transition: all 0.3s ease; box-shadow: 0 4px 6px rgba(0,0,0,0.05); cursor: default;
}
.acbr-step:hover {
  border-color: #27ae60; transform: translateY(-5px); box-shadow: 0 8px 15px rgba(39, 174, 96, 0.2);
}
.acbr-step-num {
  width: 30px; height: 30px; background: #bdc3c7; color: white; border-radius: 50%;
  display: flex; justify-content: center; align-items: center; font-weight: bold;
  position: absolute; top: -15px; left: 50%; transform: translateX(-50%); transition: all 0.3s ease;
}
.acbr-step:hover .acbr-step-num { background: #27ae60; }
.acbr-title { font-weight: bold; color: #2c3e50; margin-top: 10px; margin-bottom: 10px; font-size: 1.1em; }
.acbr-desc { font-size: 0.85em; color: #7f8c8d; line-height: 1.4; }
.acbr-arrow { display: flex; align-items: center; font-size: 24px; color: #bdc3c7; font-weight: bold; }
@media (max-width: 768px) {
  .acbr-container { flex-direction: column; }
  .acbr-arrow { transform: rotate(90deg); margin: 10px auto; }
}
</style>

<div class="acbr-container">
  <div class="acbr-step">
    <div class="acbr-step-num">1</div>
    <div class="acbr-title">Retrieve</div>
    <div class="acbr-desc">Extract historically similar demolition cases from the database using Minimum Criterion for Scoring Attribute Similarity (MCAS).</div>
  </div>
  <div class="acbr-arrow">➔</div>
  <div class="acbr-step">
    <div class="acbr-step-num">2</div>
    <div class="acbr-title">Reuse</div>
    <div class="acbr-desc">Utilize MRA and ANN algorithms on the selected similar cases to derive the initial volume and cost estimations.</div>
  </div>
  <div class="acbr-arrow">➔</div>
  <div class="acbr-step">
    <div class="acbr-step-num">3</div>
    <div class="acbr-title">Revise</div>
    <div class="acbr-desc">Use Genetic Algorithms to minimize prediction error ranges, refining the relationships between variables for higher accuracy.</div>
  </div>
  <div class="acbr-arrow">➔</div>
  <div class="acbr-step">
    <div class="acbr-step-num">4</div>
    <div class="acbr-title">Retain</div>
    <div class="acbr-desc">Add the newly estimated project's data back into the knowledge base, continuously improving the model's future performance.</div>
  </div>
</div>
<p style="text-align: center; font-size: 0.85em; color: #888; font-style: italic; margin-top: -20px; margin-bottom: 30px;">Interactive Figure 1: The four-step continuous learning process of the Advanced Case-Based Reasoning (ACBR) model.</p>


### Simulation Results: Which Model Reigns Supreme?

We tested the sensitivity and accuracy of each model across three target metrics: Recoverable Concrete, Demolition Cost, and Other Recoverable Materials. 

<style>
.dw-chart-container {
  font-family: Arial, sans-serif;
  background: #fdfdfd;
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  padding: 20px;
  margin: 30px 0;
  box-shadow: 0 4px 15px rgba(0,0,0,0.05);
}
.dw-tabs {
  display: flex; gap: 10px; margin-bottom: 20px; border-bottom: 2px solid #eee; padding-bottom: 10px; flex-wrap: wrap;
}
.dw-tab {
  padding: 8px 15px; background: #eee; border-radius: 6px; cursor: pointer; font-weight: bold; color: #555;
  transition: all 0.3s ease;
}
.dw-tab:hover { background: #ddd; }
.dw-chart {
  display: flex; align-items: flex-end; justify-content: space-around; height: 250px; padding-top: 20px;
}
.dw-bar-group {
  display: flex; flex-direction: column; align-items: center; gap: 10px; width: 22%;
}
.dw-bar-bg {
  height: 200px; width: 100%; max-width: 60px; background: #f0f0f0; border-radius: 4px 4px 0 0; position: relative;
  display: flex; align-items: flex-end;
}
.dw-bar-fill {
  width: 100%; border-radius: 4px 4px 0 0; transition: height 0.5s ease;
  position: relative; cursor: crosshair;
}
.dw-bar-fill:hover::after {
  content: attr(data-val) "% Acc \A (SD: " attr(data-std) "%)";
  white-space: pre-wrap; text-align: center;
  position: absolute; top: -50px; left: 50%; transform: translateX(-50%);
  background: #333; color: #fff; padding: 5px 8px; border-radius: 4px; font-size: 0.8em; z-index: 10;
  width: 90px;
}
.dw-label { font-size: 0.8em; font-weight: bold; color: #666; text-align: center; }

/* CSS Tabs */
#dw-tab1, #dw-tab2, #dw-tab3 { display: none; }
.dw-content { display: none; }

#dw-tab1:checked ~ .dw-tabs label[for="dw-tab1"],
#dw-tab2:checked ~ .dw-tabs label[for="dw-tab2"],
#dw-tab3:checked ~ .dw-tabs label[for="dw-tab3"] {
  background: #3498db; color: white;
}

#dw-tab1:checked ~ #dw-content1,
#dw-tab2:checked ~ #dw-content2,
#dw-tab3:checked ~ #dw-content3 {
  display: block;
}

/* Colors */
.c-mra { background: #e74c3c; }
.c-ann { background: #f39c12; }
.c-acbra { background: #9b59b6; }
.c-acbrt { background: #2ecc71; }
</style>

<div class="dw-chart-container">
  <input type="radio" name="dw-tabs" id="dw-tab1" checked>
  <input type="radio" name="dw-tabs" id="dw-tab2">
  <input type="radio" name="dw-tabs" id="dw-tab3">
  
  <div class="dw-tabs">
    <label for="dw-tab1" class="dw-tab">Recoverable Concrete</label>
    <label for="dw-tab2" class="dw-tab">Demolition Cost</label>
    <label for="dw-tab3" class="dw-tab">Other Materials</label>
  </div>
  
  <!-- Content 1: Concrete -->
  <div id="dw-content1" class="dw-content">
    <h4 style="text-align:center; color:#333; margin:0;">Model Accuracy: Recoverable Concrete</h4>
    <div class="dw-chart">
      <div class="dw-bar-group">
        <div class="dw-bar-bg"><div class="dw-bar-fill c-mra" style="height: 73.09%;" data-val="73.09" data-std="31.99"></div></div>
        <div class="dw-label">MRA</div>
      </div>
      <div class="dw-bar-group">
        <div class="dw-bar-bg"><div class="dw-bar-fill c-ann" style="height: 67.84%;" data-val="67.84" data-std="30.87"></div></div>
        <div class="dw-label">ANN</div>
      </div>
      <div class="dw-bar-group">
        <div class="dw-bar-bg"><div class="dw-bar-fill c-acbra" style="height: 65.62%;" data-val="65.62" data-std="37.90"></div></div>
        <div class="dw-label">ACBR (Avg)</div>
      </div>
      <div class="dw-bar-group">
        <div class="dw-bar-bg"><div class="dw-bar-fill c-acbrt" style="height: 80.92%;" data-val="80.92" data-std="16.42"></div></div>
        <div class="dw-label">ACBR (Trained)</div>
      </div>
    </div>
  </div>

  <!-- Content 2: Cost -->
  <div id="dw-content2" class="dw-content">
    <h4 style="text-align:center; color:#333; margin:0;">Model Accuracy: Demolition Cost</h4>
    <div class="dw-chart">
      <div class="dw-bar-group">
        <div class="dw-bar-bg"><div class="dw-bar-fill c-mra" style="height: 76.12%;" data-val="76.12" data-std="30.31"></div></div>
        <div class="dw-label">MRA</div>
      </div>
      <div class="dw-bar-group">
        <div class="dw-bar-bg"><div class="dw-bar-fill c-ann" style="height: 31.37%;" data-val="31.37" data-std="32.37"></div></div>
        <div class="dw-label">ANN</div>
      </div>
      <div class="dw-bar-group">
        <div class="dw-bar-bg"><div class="dw-bar-fill c-acbra" style="height: 71.58%;" data-val="71.58" data-std="33.77"></div></div>
        <div class="dw-label">ACBR (Avg)</div>
      </div>
      <div class="dw-bar-group">
        <div class="dw-bar-bg"><div class="dw-bar-fill c-acbrt" style="height: 56.36%;" data-val="56.36" data-std="26.11"></div></div>
        <div class="dw-label">ACBR (Trained)</div>
      </div>
    </div>
  </div>

  <!-- Content 3: Other -->
  <div id="dw-content3" class="dw-content">
    <h4 style="text-align:center; color:#333; margin:0;">Model Accuracy: Other Materials</h4>
    <div class="dw-chart">
      <div class="dw-bar-group">
        <div class="dw-bar-bg"><div class="dw-bar-fill c-mra" style="height: 65.65%;" data-val="65.65" data-std="36.01"></div></div>
        <div class="dw-label">MRA</div>
      </div>
      <div class="dw-bar-group">
        <div class="dw-bar-bg"><div class="dw-bar-fill c-ann" style="height: 42.43%;" data-val="42.43" data-std="32.33"></div></div>
        <div class="dw-label">ANN</div>
      </div>
      <div class="dw-bar-group">
        <div class="dw-bar-bg"><div class="dw-bar-fill c-acbra" style="height: 57.81%;" data-val="57.81" data-std="40.10"></div></div>
        <div class="dw-label">ACBR (Avg)</div>
      </div>
      <div class="dw-bar-group">
        <div class="dw-bar-bg"><div class="dw-bar-fill c-acbrt" style="height: 66.09%;" data-val="66.09" data-std="25.26"></div></div>
        <div class="dw-label">ACBR (Trained)</div>
      </div>
    </div>
  </div>
  <p style="text-align: center; font-size: 0.85em; color: #888; font-style: italic; margin-top: 15px;">Interactive Figure 2: Click the tabs to explore how each estimation model performs across different prediction targets. Hover over bars to see the exact mean accuracy and standard deviation (which indicates volatility/reliability).</p>
</div>

The results highlight the immense potential of the **ACBR (Trained Model)** as the premier tool for DW management:
- **Recoverable Concrete:** The ACBR (Trained) model dramatically outperformed the others, achieving an **80.92% mean accuracy** with the lowest standard deviation (16.42%), proving to be highly consistent and reliable.
- **Demolition Cost:** While the traditional MRA achieved a high mean accuracy (76.12%), its predictions were volatile. The ACBR (Trained) model provided the most stable predictions with the lowest variance.

### The Hidden Impact of Maintenance History

Beyond comparing algorithms, our cross-correlation analysis unearthed a fascinating insight regarding building life cycles. **A building's maintenance history plays a pivotal role in the recoverability of its materials during demolition.** 

Variables such as the duration of the last renovation, external walls maintenance, and the time elapsed since the last roof repair significantly modulated the volume of materials that could be successfully reclaimed. This illuminates a profound interconnectedness: decisions made during the operational phase of a building directly dictate its sustainability at the end-of-life stage.

*For full details on the methodologies and dataset, read our [paper](https://www.doi.org/10.1061/9780784485286.033) presented at the Construction Research Congress 2024.*

    @inproceedings{Movahedi2024,
    address = {Reston, VA},
    author = {Movahedi, Mohammad and Choi, Juyeong and Seo, Seungwon and Koo, Choongwan},
    booktitle = {Construction Research Congress 2024},
    doi = {10.1061/9780784485286.033},
    isbn = {9780784485286},
    mendeley-groups = {0 My Own work/Conference papers},
    month = {mar},
    pages = {318--327},
    publisher = {American Society of Civil Engineers},
    title = {{Assessment of Estimation Methods for Demolition Waste Volume and Cost}},
    url = {https://ascelibrary.org/doi/10.1061/9780784485286.033},
    year = {2024}
    }
