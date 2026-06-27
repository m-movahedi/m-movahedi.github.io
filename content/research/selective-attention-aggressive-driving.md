---
title : "Mind on the Road: How Selective Attention Predicts Aggressive Driving"
date : "2019-05-15"
draft : false
type : "post"
tags:
  - "Traffic Safety"
  - "Aggressive Driving"
  - "Selective Attention"
  - "Stroop Test"
  - "Driving Simulation"
  - "Human Factors"
journal: "International Conference on Civil Engineering, Architecture and Urban Development Management"
---

<div style="background-color: #fdf5e6; border-left: 6px solid #e67e22; padding: 15px 20px; border-radius: 4px; margin-bottom: 30px; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
  <h4 style="margin-top: 0; color: #d35400; display: flex; align-items: center;"><span style="font-size: 1.5em; margin-right: 10px;">🧠</span> The Cognitive Cost of Distracted Driving</h4>
  <p style="margin-bottom: 0; color: #555;">With motor vehicle crashes remaining a leading cause of fatalities worldwide, understanding the human factors behind the wheel is more critical than ever. Inattention and aggressive driving are major culprits. But what if we could predict a driver's likelihood to make aggressive errors based on a simple cognitive test? This study bridges cognitive psychology and transportation engineering to explore exactly that.</p>
</div>

Our research investigates the hidden link between a driver's inherent **selective attention** and their tendency to engage in **aggressive driving** behaviors when distracted. By observing young drivers in a controlled simulator environment, we sought to determine if psychological tests could reliably predict on-road mistakes.

### The Methodology: Simulators and Psychology

To capture an accurate picture of cognitive load and driving performance, we designed a multi-step experiment:
1. **The Stroop Test:** A classic psychological tool used to measure selective attention—the brain's ability to focus on a specific stimulus while ignoring distracting information.
2. **The Driving Simulator:** Using *City Car Driving* software, volunteers navigated a rural road environment under varying levels of distraction.
3. **The Distraction Layers:** Drivers were tested under a baseline (no distraction), while listening to radio news and answering comprehension questions, and during a simulated passenger conversation.

### Interactive Dashboard: Cognitive Profiles & Driving Errors

<style>
.sa-dash {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background: #2c3e50;
  border-radius: 12px;
  padding: 30px;
  color: #ecf0f1;
  margin: 30px 0;
  box-shadow: 0 10px 25px rgba(0,0,0,0.2);
}
.sa-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}
.sa-card {
  background: #34495e;
  border-radius: 8px;
  padding: 20px;
  border: 1px solid #455a64;
  position: relative;
}
.sa-title {
  font-size: 1.1em;
  font-weight: 600;
  margin-bottom: 20px;
  text-transform: uppercase;
  letter-spacing: 1px;
}
.sa-metrics {
  display: flex;
  flex-direction: column;
  gap: 15px;
}
.sa-label {
  font-size: 0.85em;
  color: #bdc3c7;
  margin-bottom: 5px;
  font-weight: bold;
}
.sa-bar {
  background: #1e272e;
  border-radius: 20px;
  height: 12px;
  overflow: hidden;
  position: relative;
}
.sa-fill {
  height: 100%;
  border-radius: 20px;
  transition: width 1s ease-in-out;
}
.sa-good { background: #2ecc71; }
.sa-bad { background: #e74c3c; }

@keyframes pulse-error {
  0% { opacity: 0.8; box-shadow: 0 0 5px #e74c3c; }
  50% { opacity: 1; box-shadow: 0 0 15px #e74c3c; }
  100% { opacity: 0.8; box-shadow: 0 0 5px #e74c3c; }
}

@media (max-width: 768px) {
  .sa-grid { grid-template-columns: 1fr; }
}
</style>

<div class="sa-dash">
  <div class="sa-grid">
    <div class="sa-card" style="border-top: 4px solid #2ecc71;">
      <div class="sa-title" style="color: #2ecc71;">High Selective Attention<br><span style="font-size: 0.7em; color: #95a5a6;">(High Stroop Score)</span></div>
      <div class="sa-metrics">
        <div>
          <div class="sa-label">Ability to Ignore Distractions</div>
          <div class="sa-bar"><div class="sa-fill sa-good" style="width: 85%;"></div></div>
        </div>
        <div>
          <div class="sa-label">Aggressive Overtaking / Shoulder Use</div>
          <div class="sa-bar"><div class="sa-fill sa-good" style="width: 15%;"></div></div>
        </div>
      </div>
    </div>
    <div class="sa-card" style="border-top: 4px solid #e74c3c;">
      <div class="sa-title" style="color: #e74c3c;">Low Selective Attention<br><span style="font-size: 0.7em; color: #95a5a6;">(Low Stroop Score)</span></div>
      <div class="sa-metrics">
        <div>
          <div class="sa-label">Ability to Ignore Distractions</div>
          <div class="sa-bar"><div class="sa-fill sa-bad" style="width: 35%;"></div></div>
        </div>
        <div>
          <div class="sa-label">Aggressive Overtaking / Shoulder Use</div>
          <div class="sa-bar"><div class="sa-fill sa-bad" style="width: 78%; animation: pulse-error 2s infinite;"></div></div>
        </div>
      </div>
    </div>
  </div>
  <div class="sa-card" style="margin-top: 20px; text-align: center; border: 2px dashed #f1c40f;">
    <div class="sa-title" style="color: #f1c40f; margin-bottom: 10px;">The Predictive Power of Psychology</div>
    <div style="font-size: 3.5em; font-weight: bold; color: #f1c40f; line-height: 1;">42%</div>
    <div style="font-size: 1em; color: #bdc3c7; margin-top: 10px;">Regression analysis reveals that the Stroop test score alone can predict up to 42% of aggressive driving errors.</div>
  </div>
</div>
<p style="text-align: center; font-size: 0.85em; color: #666; font-style: italic; margin-top: -15px;">Interactive Comparison: How cognitive attention levels correlate with driving behavior under distraction.</p>


### Key Findings

Through careful observation of the simulated driving sessions and Analysis of Variance (ANOVA), several striking patterns emerged:
- **Speed Reduction:** Across the board, as distraction levels increased, drivers naturally decreased their speed as a compensatory mechanism.
- **Aggressive Tendencies:** Drivers who scored lower on the Stroop test (indicating poorer selective attention) were significantly more likely to resort to aggressive behaviors when overwhelmed. This included dangerous maneuvers like driving on the road shoulder and reckless right-side overtaking.
- **The Threshold of Frustration:** A driver's attitude toward aggressive overtaking remained relatively stable until the distraction reached a specific cognitive threshold, at which point the error rate spiked dramatically.

### Conclusion

Driving is an intensely demanding cognitive task. This research proves that aggressive driving isn't always just a behavioral choice—it can be a byproduct of cognitive overload. By utilizing cognitive profiling tools like the Stroop test, we can identify drivers who are more susceptible to distraction-induced aggression, paving the way for better driver education and more intelligent, personalized vehicle safety systems.

*For full details, refer to the original [paper](https://www.researchgate.net/publication/350515985_Young_Drivers'_Attitude_toward_Aggressive_Driving_Distracted_by_Passengers):*

    @article{Behbahani2018,
    author = {Behbahani, Hamid and Movahedi, Mohammad and Movahedi, Mina and Mohammadian Amiri, Amir and Yavari, Afsaneh},
    title = {Investigating the Relationship between Selective Attention and Aggressive Driving in Young Drivers},
    year = {2018}
    }
