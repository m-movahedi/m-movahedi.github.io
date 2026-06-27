---
title: "Soil Compaction"
weight: 82
date : "2026-05-04"
draft : false
type : "post"
---
# Soil Compaction

Compaction is the densification of soil by the application of mechanical energy, which expels air from the void spaces. Densifying the soil increases its shear strength, decreases its compressibility, and reduces its permeability, making it a critical step in constructing highway subgrades, embankments, and structural fills.

---

## 1. Laboratory Compaction Tests

To determine the maximum dry density and optimum moisture content of a soil, standard laboratory tests are performed.

### Standard vs. Modified Proctor Tests
*   **Standard Proctor Test (ASTM D698):** Uses a $5.5\text{ lb}$ hammer dropped from a height of $12\text{ inches}$. The soil is compacted in $3$ layers with $25$ blows per layer. 
*   **Modified Proctor Test (ASTM D1557):** Developed to simulate heavier compaction equipment. Uses a $10.0\text{ lb}$ hammer dropped from a height of $18\text{ inches}$. The soil is compacted in $5$ layers with $25$ blows per layer.

#### Compaction Energy Formula:
$$E = \frac{N_{\text{blows}} \cdot N_{\text{layers}} \cdot W_{\text{hammer}} \cdot h_{\text{drop}}}{V_{\text{mold}}}$$

Where:
*   $E = \text{compaction energy per unit volume}$
*   $N_{\text{blows}} = \text{number of blows per layer}$
*   $N_{\text{layers}} = \text{number of layers}$
*   $W_{\text{hammer}} = \text{weight of the hammer}$
*   $h_{\text{drop}} = \text{drop height of the hammer}$
*   $V_{\text{mold}} = \text{volume of the compaction mold (typically } 1/30\text{ ft}^3 \text{ or } 0.0333\text{ ft}^3\text{)}$

*Energy comparison:* Standard Proctor energy is approximately $12,400\text{ ft-lb/ft}^3$, while Modified Proctor energy is approximately $56,250\text{ ft-lb/ft}^3$. An increase in compaction energy shifts the compaction curve upward and to the left (increasing the maximum dry density and decreasing the optimum moisture content).

---

## 2. The Compaction Curve

Plotted as dry unit weight ($\gamma_d$) versus moisture content ($w$), the compaction curve exhibits a distinct peak.

<div style="width: 100%; max-width: 500px; margin: 2rem auto;">
<svg viewBox="0 0 500 350" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" style="font-family: sans-serif; fill: currentColor;">
  <!-- Axes -->
  <line x1="50" y1="300" x2="450" y2="300" stroke="currentColor" stroke-width="2" marker-end="url(#arrow)"/>
  <line x1="50" y1="300" x2="50" y2="50" stroke="currentColor" stroke-width="2" marker-end="url(#arrow)"/>  
  <!-- Labels -->
  <text x="250" y="340" text-anchor="middle" font-weight="bold">Moisture Content (w)</text>
  <text x="20" y="175" text-anchor="middle" transform="rotate(-90 20,175)" font-weight="bold">Dry Unit Weight (&#947;<tspan dy="2" font-size="0.8em">d</tspan>)</text>
  <!-- Compaction Curve -->
  <path d="M 80 280 C 120 150, 180 120, 220 120 C 260 120, 300 180, 320 280" fill="none" stroke="#e74c3c" stroke-width="3" />  
  <!-- ZAV Curve -->
  <path d="M 230 80 Q 280 150, 400 280" fill="none" stroke="#3498db" stroke-width="3" stroke-dasharray="6,4" />  
  <!-- Max Point -->
  <circle cx="220" cy="120" r="5" fill="#e74c3c" />
  <line x1="50" y1="120" x2="220" y2="120" stroke="currentColor" stroke-width="1" stroke-dasharray="4,4" />
  <line x1="220" y1="300" x2="220" y2="120" stroke="currentColor" stroke-width="1" stroke-dasharray="4,4" />  
  <!-- Annotations -->
  <text x="230" y="110" font-size="0.9em" fill="#e74c3c">Max &#947;<tspan dy="5" font-size="0.8em">d</tspan>, OMC</text>
  <text x="360" y="100" font-size="0.9em" fill="#3498db">Zero-Air-Voids Curve</text>
  <text x="360" y="120" font-size="0.9em" fill="#3498db">(S = 100%)</text>
  <line x1="355" y1="110" x2="295" y2="160" stroke="#3498db" stroke-width="1" marker-end="url(#arrow-blue)"/>  
  <!-- Defs -->
  <defs>
    <marker id="arrow" markerWidth="10" markerHeight="10" refX="5" refY="5" orient="auto-start-reverse">
      <path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor" />
    </marker>
    <marker id="arrow-blue" markerWidth="10" markerHeight="10" refX="5" refY="5" orient="auto-start-reverse">
      <path d="M 0 0 L 10 5 L 0 10 z" fill="#3498db" />
    </marker>
  </defs>
</svg>
</div>

*   **Optimum Moisture Content (OMC):** The water content at which the soil can be compacted to its maximum dry unit weight. At this point, water acts as a lubricant, allowing particles to slide into a denser configuration.
*   **Dry Side of Optimum:** Water content is less than OMC. Soil structure is typically *flocculated* (particles oriented edge-to-face), leading to higher shear strength, lower compressibility, higher permeability, and brittle behavior.
*   **Wet Side of Optimum:** Water content is greater than OMC. Soil structure is *dispersed* (particles oriented parallel), leading to lower shear strength, higher compressibility, lower permeability, and ductile behavior.

### Zero-Air-Voids (ZAV) Curve
The Zero-Air-Voids curve represents the theoretical maximum dry unit weight of a soil at $100\%$ saturation ($S = 1.0$). It is physically impossible for a compaction curve to plot to the right of or cross the ZAV curve, because voids can never contain less than zero air.
$$\gamma_{\text{zav}} = \frac{G_s \cdot \gamma_w}{1 + w \cdot G_s} = \frac{\gamma_w}{w + \frac{1}{G_s}}$$

Where:
*   $\gamma_w = 62.4\text{ lb/ft}^3 \text{ or } 9.81\text{ kN/m}^3$
*   $w = \text{water content (expressed as a decimal)}$
*   $G_s = \text{specific gravity of soil solids}$

---

## 3. Field Compaction and Specification

### Field Compaction Equipment
Selecting the proper compaction equipment depends on the soil classification:
*   **Sheepsfoot Roller (Tamping Roller):** Best for cohesive soils (clays, silts). It uses high contact pressure to knead the soil from the bottom up.
*   **Vibratory Roller (Vibrating Plates/Screeds):** Best for cohesionless soils (clean sands, gravels). The vibrations rearrange particles into a denser state.
*   **Pneumatic-Tired Roller:** Versatile roller that uses heavy rubber tires under pressure. Good for both cohesive and cohesionless soils, often used for subgrades and asphalt pavement layers.
*   **Smooth-Wheel Roller (Steel Drum):** Good for base courses and finishing subgrades. Provides a smooth surface but lacks kneading action.

### Relative Compaction (RC)
Specifications for highway earthwork usually require a minimum relative compaction, which is the ratio of field dry density to the laboratory maximum dry density:
$$RC = \frac{\gamma_{d,\text{field}}}{\gamma_{d,\text{max-lab}}} \cdot 100\%$$

*Note:* Standard specifications typically require $95\%$ to $100\%$ relative compaction of the Standard or Modified Proctor maximum dry unit weight.

### Field Unit Weight Measurements
To verify compliance in the field, the wet unit weight ($\gamma$) and water content ($w$) are measured, and the dry unit weight is calculated:
$$\gamma_{d,\text{field}} = \frac{\gamma_{\text{field}}}{1 + w_{\text{field}}}$$
Common field tests include:
*   **Sand Cone Test:** Measures the volume of a hand-dug hole by filling it with standard sand of a known density.
*   **Nuclear Density Gauge:** Uses gamma radiation attenuation to measure wet density and neutron thermalization to measure water content. Fast but requires calibration.

---

## 4. Worked Examples

### Worked Example 1: Field Relative Compaction
A Sand Cone test was performed to verify compaction of a clayey sand subgrade. The laboratory maximum dry unit weight is $\gamma_{d,\text{max}} = 124.0\text{ lb/ft}^3$ at an optimum moisture content of $12.5\%$. The field test data is as follows:
*   Total weight of wet soil excavated from the hole = $8.82\text{ lb}$
*   Weight of dry soil (after oven drying) = $7.84\text{ lb}$
*   Volume of the test hole = $0.064\text{ ft}^3$

**Goal:** Determine the field dry unit weight, field water content, and whether the compaction meets a specification of $95\%$ Relative Compaction.

**Solution:**
1.  **Calculate Field Water Content ($w_{\text{field}}$):**
    $$W_w = W_{\text{wet}} - W_{\text{dry}} = 8.82\text{ lb} - 7.84\text{ lb} = 0.98\text{ lb}$$
    $$w_{\text{field}} = \frac{W_w}{W_{\text{dry}}} = \frac{0.98\text{ lb}}{7.84\text{ lb}} = 0.125\text{ (or } 12.5\%)$$
2.  **Calculate Field Wet Unit Weight ($\gamma_{\text{field}}$):**
    $$\gamma_{\text{field}} = \frac{W_{\text{wet}}}{V_{\text{hole}}} = \frac{8.82\text{ lb}}{0.064\text{ ft}^3} = 137.81\text{ lb/ft}^3$$
3.  **Calculate Field Dry Unit Weight ($\gamma_{d,\text{field}}$):**
    $$\gamma_{d,\text{field}} = \frac{\gamma_{\text{field}}}{1 + w_{\text{field}}} = \frac{137.81\text{ lb/ft}^3}{1 + 0.125} = 122.5\text{ lb/ft}^3$$
    *(Alternatively: $\gamma_{d,\text{field}} = \frac{W_{\text{dry}}}{V_{\text{hole}}} = \frac{7.84}{0.064} = 122.5\text{ lb/ft}^3$. The values match.)*
4.  **Calculate Relative Compaction ($RC$):**
    $$RC = \frac{\gamma_{d,\text{field}}}{\gamma_{d,\text{max}}} \cdot 100\% = \frac{122.5\text{ lb/ft}^3}{124.0\text{ lb/ft}^3} \cdot 100\% = 98.8\%$$
5.  **Evaluate Against Specification:**
    Since $98.8\% \ge 95.0\%$, the compaction **meets** the project specification.

---

### Worked Example 2: Zero-Air-Voids Curve Calculations
A soil has a specific gravity of solids $G_s = 2.70$. 

**Goal:** Calculate the dry unit weight corresponding to the Zero-Air-Voids (ZAV) curve at moisture contents of $10\%$, $15\%$, and $20\%$.

**Solution:**
Using the Zero-Air-Voids equation:
$$\gamma_{\text{zav}} = \frac{G_s \cdot \gamma_w}{1 + w \cdot G_s}$$
Where $\gamma_w = 62.4\text{ lb/ft}^3$. Note that $G_s \cdot \gamma_w = 2.70 \cdot 62.4 = 168.48\text{ lb/ft}^3$.

1.  **For $w = 10\% = 0.10$:**
    $$\gamma_{\text{zav}} = \frac{168.48}{1 + (0.10 \cdot 2.70)} = \frac{168.48}{1 + 0.27} = \frac{168.48}{1.27} = 132.66\text{ lb/ft}^3$$
2.  **For $w = 15\% = 0.15$:**
    $$\gamma_{\text{zav}} = \frac{168.48}{1 + (0.15 \cdot 2.70)} = \frac{168.48}{1 + 0.405} = \frac{168.48}{1.405} = 119.91\text{ lb/ft}^3$$
3.  **For $w = 20\% = 0.20$:**
    $$\gamma_{\text{zav}} = \frac{168.48}{1 + (0.20 \cdot 2.70)} = \frac{168.48}{1 + 0.54} = \frac{168.48}{1.54} = 109.40\text{ lb/ft}^3$$

*Summary of ZAV values:*
*   At $w = 10\%$, $\gamma_{\text{zav}} = 132.7\text{ lb/ft}^3$
*   At $w = 15\%$, $\gamma_{\text{zav}} = 119.9\text{ lb/ft}^3$
*   At $w = 20\%$, $\gamma_{\text{zav}} = 109.4\text{ lb/ft}^3$

As the moisture content increases, the maximum allowable dry unit weight decreases along the ZAV curve.

---

## 5. Exam Pitfalls and Tips

*   **Forgetting to Convert Wet Density to Dry Density:** PE exam questions will frequently give you the wet field unit weight and the moisture content, and then ask for the relative compaction. You **must** divide the wet unit weight by $(1 + w)$ before comparing it to the lab maximum dry unit weight. Comparing wet unit weight to dry maximum unit weight is a classic distractor trap.
*   **Compaction Curve Can Never Cross the ZAV Line:** If you are asked to select a valid laboratory compaction curve or data set, look for any points that calculate to a dry unit weight higher than $\gamma_{\text{zav}}$ for that moisture content. If a point is above the ZAV curve, it is mathematically impossible and incorrect.
*   **Moisture Content Units:** Always use the decimal representation of water content when calculating the ZAV unit weight (e.g., $w = 0.12$ instead of $12$).
*   **Consolidation vs. Compaction:** Compaction is an instantaneous process of expelling air using mechanical equipment. Consolidation is a long-term process of expelling water under static loading. Do not confuse the two when conceptual questions are asked.
