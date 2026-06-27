---
title: "Earthwork and Mass Balance"
weight: 85
date : "2026-05-04"
draft : false
type : "post"
---
# Earthwork and Mass Balance

Earthwork operations are a major component of highway construction projects. Designers must balance the volume of soil excavated from cut sections with the volume of soil required for fill (embankment) sections. Because soil volume changes when it is excavated, hauled, and compacted, engineers must apply volumetric conversion factors to calculate hauling costs and borrow-pit requirements. These concepts are frequently tested on the PE Civil Transportation exam.

---

## 1. Volumetric States of Soil

Soil exists in one of three states during earthwork operations, each with a different unit weight and volume:
1.  **Bank State (Natural):** Soil in its natural, undisturbed state before excavation. Measured in **Bank Cubic Yards (BCY)** or bank cubic meters ($V_B$).
2.  **Loose State (Hauled):** Soil after it has been excavated. The soil swells because air voids are introduced during excavation. Measured in **Loose Cubic Yards (LCY)** or loose cubic meters ($V_L$).
3.  **Compacted State (Placed):** Soil after it has been placed and compacted in the field. The soil shrinks because air voids are compressed and expelled. Measured in **Compacted Cubic Yards (CCY)** or compacted cubic meters ($V_C$).

<div style="display: flex; justify-content: space-between; align-items: center; width: 100%; max-width: 650px; margin: 2rem auto; font-family: sans-serif; text-align: center;">
  <!-- Bank State -->
  <div style="width: 25%;">
    <div style="font-weight: bold; margin-bottom: 5px;">BANK STATE<br><span style="font-size: 0.8em; font-weight: normal;">(Undisturbed)</span></div>
    <div style="border: 2px solid currentColor; border-radius: 4px; overflow: hidden; margin: 0 auto; width: 100px;">
      <div style="height: 60px; background-color: rgba(200,200,200,0.2); border-bottom: 1px solid currentColor; display: flex; align-items: center; justify-content: center;">Voids</div>
      <div style="height: 50px; background-color: rgba(139, 69, 19, 0.4); display: flex; align-items: center; justify-content: center; font-weight: bold;">Solids</div>
    </div>
    <div style="margin-top: 5px; font-size: 0.9em;">Volume V<sub>B</sub></div>
  </div>
  <!-- Arrow 1 -->
  <div style="width: 12.5%; display: flex; flex-direction: column; align-items: center;">
    <div style="font-weight: bold; font-size: 0.9em;">Swell</div>
    <div style="font-size: 1.5em; line-height: 1;">&rarr;</div>
    <div style="font-size: 0.7em;">(Vol Increases)</div>
  </div>
  <!-- Loose State -->
  <div style="width: 25%;">
    <div style="font-weight: bold; margin-bottom: 5px;">LOOSE STATE<br><span style="font-size: 0.8em; font-weight: normal;">(Excavated)</span></div>
    <div style="border: 2px solid currentColor; border-radius: 4px; overflow: hidden; margin: 0 auto; width: 100px;">
      <div style="height: 80px; background-color: rgba(200,200,200,0.2); border-bottom: 1px solid currentColor; display: flex; align-items: center; justify-content: center;">Air Voids</div>
      <div style="height: 50px; background-color: rgba(139, 69, 19, 0.4); display: flex; align-items: center; justify-content: center; font-weight: bold;">Solids</div>
    </div>
    <div style="margin-top: 5px; font-size: 0.9em;">Volume V<sub>L</sub></div>
  </div>
  <!-- Arrow 2 -->
  <div style="width: 12.5%; display: flex; flex-direction: column; align-items: center;">
    <div style="font-weight: bold; font-size: 0.9em;">Shrink</div>
    <div style="font-size: 1.5em; line-height: 1;">&rarr;</div>
    <div style="font-size: 0.7em;">(Vol Decreases)</div>
  </div>
  <!-- Compacted State -->
  <div style="width: 25%;">
    <div style="font-weight: bold; margin-bottom: 5px;">COMPACTED<br><span style="font-size: 0.8em; font-weight: normal;">(Placed)</span></div>
    <div style="border: 2px solid currentColor; border-radius: 4px; overflow: hidden; margin: 0 auto; width: 100px;">
      <div style="height: 40px; background-color: rgba(200,200,200,0.2); border-bottom: 1px solid currentColor; display: flex; align-items: center; justify-content: center;">Voids</div>
      <div style="height: 50px; background-color: rgba(139, 69, 19, 0.4); display: flex; align-items: center; justify-content: center; font-weight: bold;">Solids</div>
    </div>
    <div style="margin-top: 5px; font-size: 0.9em;">Volume V<sub>C</sub></div>
  </div>
</div>

### The Fundamental Conservation Rule
Throughout all three states, the weight of the solid soil particles ($W_s$) remains constant. Only the volume of voids changes:
$$W_s = \gamma_{d,\text{bank}} \cdot V_B = \gamma_{d,\text{loose}} \cdot V_L = \gamma_{d,\text{compacted}} \cdot V_C$$

---

## 2. Swell, Shrinkage, and Conversion Factors

### Swell ($S_w$)
Swell is the increase in volume of a soil when it is excavated from its natural bank state into a loose state. It is expressed as a percentage of the bank volume:
$$S_w (\%) = \left(\frac{V_L}{V_B} - 1\right) \cdot 100\% = \left(\frac{\gamma_{d,\text{bank}}}{\gamma_{d,\text{loose}}} - 1\right) \cdot 100\%$$

To convert between volumes:
$$V_L = V_B \cdot (1 + S_w)$$

#### Load Factor ($L_f$):
The load factor is the ratio of bank volume to loose volume:
$$L_f = \frac{V_B}{V_L} = \frac{\gamma_{d,\text{loose}}}{\gamma_{d,\text{bank}}} = \frac{1}{1 + S_w}$$
$$V_B = V_L \cdot L_f$$

### Shrinkage ($S_h$)
Shrinkage is the decrease in volume of a soil when it is compacted from its natural bank state into a compacted state. It is expressed as a percentage of the bank volume:
$$S_h (\%) = \left(1 - \frac{V_C}{V_B}\right) \cdot 100\% = \left(1 - \frac{\gamma_{d,\text{bank}}}{\gamma_{d,\text{compacted}}}\right) \cdot 100\%$$

To convert between volumes:
$$V_C = V_B \cdot (1 - S_h)$$

#### Shrinkage Factor ($S_f$):
The shrinkage factor is the ratio of compacted volume to bank volume:
$$S_f = \frac{V_C}{V_B} = \frac{\gamma_{d,\text{bank}}}{\gamma_{d,\text{compacted}}} = 1 - S_h$$
$$V_B = \frac{V_C}{S_f} = \frac{V_C}{1 - S_h}$$

---

## 3. The Mass Diagram

A **mass diagram** is a cumulative plot of the net earthwork volume along the centerline of a roadway. The horizontal axis represents the stationing ($x$), and the vertical axis represents the cumulative net volume ($y$), where:
*   Excavation (Cut) is a positive volume addition ($+$).
*   Embankment (Fill) is a negative volume deduction ($-$).

*Note: Before adding volumes to the mass diagram, all fill volumes must be adjusted to their equivalent bank volumes by dividing the compacted fill volume by the shrinkage factor ($1 - S_h$).*

<div style="width: 100%; max-width: 600px; margin: 2rem auto;">
<svg viewBox="0 0 600 300" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" style="font-family: sans-serif; fill: currentColor;">
  <!-- Axes -->
  <line x1="50" y1="150" x2="550" y2="150" stroke="currentColor" stroke-width="2" marker-end="url(#arrow)"/>
  <line x1="100" y1="280" x2="100" y2="40" stroke="currentColor" stroke-width="2" marker-start="url(#arrow-rev)" marker-end="url(#arrow)"/>  
  <!-- Labels -->
  <text x="500" y="140" text-anchor="end" font-weight="bold">Stationing</text>
  <text x="90" y="30" text-anchor="middle" font-weight="bold">Cumulative Net Volume (BCY)</text>
  <text x="540" y="170" text-anchor="end" font-size="0.9em" font-style="italic">Balance Line</text>
  <!-- Curve -->
  <path d="M 100 150 Q 150 150, 200 50 T 300 150 T 400 220 T 500 150" fill="none" stroke="#27ae60" stroke-width="3" />  
  <!-- Peak annotation -->
  <circle cx="200" cy="50" r="4" fill="#e74c3c" />
  <line x1="200" y1="50" x2="280" y2="30" stroke="currentColor" stroke-width="1" stroke-dasharray="2,2"/>
  <text x="290" y="25" font-size="0.9em" font-weight="bold">Peak</text>
  <text x="290" y="40" font-size="0.8em">(Transition from Cut to Fill)</text>
  <!-- Valley annotation -->
  <circle cx="400" cy="220" r="4" fill="#3498db" />
  <line x1="400" y1="220" x2="330" y2="250" stroke="currentColor" stroke-width="1" stroke-dasharray="2,2"/>
  <text x="320" y="260" font-size="0.9em" font-weight="bold" text-anchor="end">Valley</text>
  <text x="320" y="275" font-size="0.8em" text-anchor="end">(Transition from Fill to Cut)</text>
  <!-- Defs -->
  <defs>
    <marker id="arrow" markerWidth="10" markerHeight="10" refX="5" refY="5" orient="auto-start-reverse">
      <path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor" />
    </marker>
    <marker id="arrow-rev" markerWidth="10" markerHeight="10" refX="5" refY="5" orient="auto">
      <path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor" />
    </marker>
  </defs>
</svg>
</div>

### Key Features of a Mass Diagram
*   **Rising Curve:** Indicates a cut section (net excavation).
*   **Falling Curve:** Indicates a fill section (net embankment).
*   **Peaks (Local Maxima):** Represent points where the profile transitions from cut to fill.
*   **Valleys (Local Minima):** Represent points where the profile transitions from fill to cut.
*   **Balance Points:** Points where the mass diagram curve intersects the balance line (net volume = 0). The volume of cut between these two points exactly equals the volume of fill required.
*   **Haul Direction:** 
    *   If the curve is above the balance line (a loop pointing upward), the haul direction is **forward** (from left to right / low stations to high stations).
    *   If the curve is below the balance line (a loop pointing downward), the haul direction is **backward** (from right to left / high stations to low stations).

### Haul Terminology
*   **Haul:** The product of the volume of earth moved and the distance it is moved (measured in station-yards).
*   **Freehaul:** The distance within which the contractor moves soil without extra payment (specified in the contract, e.g., $500\text{ ft}$).
*   **Overhaul:** The movement of soil beyond the freehaul distance, which requires additional compensation.
*   **Borrow:** Soil imported from an external source when fill exceeds cut.
*   **Waste:** Soil exported and disposed of when cut exceeds fill.

---

## 4. Worked Examples

### Worked Example 1: Volumetric State Conversion
A highway embankment requires $45,000\text{ CCY}$ (Compacted Cubic Yards) of clayey sand. Soil will be excavated from a local borrow pit and hauled to the site in trucks with a capacity of $12.0\text{ LCY}$ (Loose Cubic Yards) per load. The soil properties are:
*   Bank dry unit weight ($\gamma_{d,\text{bank}}$) = $110.0\text{ lb/ft}^3$
*   Loose dry unit weight ($\gamma_{d,\text{loose}}$) = $90.0\text{ lb/ft}^3$
*   Compacted dry unit weight ($\gamma_{d,\text{comp}}$) = $125.0\text{ lb/ft}^3$

**Goal:** Determine:
1.  The volume of soil required from the borrow pit in Bank Cubic Yards (BCY).
2.  The number of truck loads required to haul the soil.

**Solution:**
1.  **Calculate Swell ($S_w$) and Shrinkage ($S_h$):**
    *   **Swell:**
        $$S_w = \frac{\gamma_{d,\text{bank}}}{\gamma_{d,\text{loose}}} - 1 = \frac{110.0}{90.0} - 1 = 1.222 - 1.0 = 0.222\text{ (or } 22.2\%)$$
    *   **Shrinkage:**
        $$S_h = 1 - \frac{\gamma_{d,\text{bank}}}{\gamma_{d,\text{comp}}} = 1 - \frac{110.0}{125.0} = 1 - 0.88 = 0.12\text{ (or } 12.0\%)$$
        *(Shrinkage factor $S_f = 1 - S_h = 0.88$)*
2.  **Calculate Bank Volume Required ($V_B$):**
    Using the compacted-to-bank conversion:
    $$V_B = \frac{V_C}{1 - S_h} = \frac{45,000\text{ CCY}}{0.88} = 51,136.4\text{ BCY}$$
3.  **Calculate Loose Volume Required ($V_L$):**
    Using the bank-to-loose conversion:
    $$V_L = V_B \cdot (1 + S_w) = 51,136.4\text{ BCY} \cdot (1 + 0.222) = 51,136.4 \cdot 1.222 = 62,499.7\text{ LCY}$$
    *(Alternatively, use dry weight conservation: $V_L = V_C \cdot \frac{\gamma_{d,\text{comp}}}{\gamma_{d,\text{loose}}} = 45,000 \cdot \frac{125}{90} = 62,500\text{ LCY}$. The values check out!)*
4.  **Calculate Number of Truck Loads:**
    $$\text{Loads} = \frac{V_L}{\text{Truck Capacity}} = \frac{62,500\text{ LCY}}{12.0\text{ LCY/load}} = 5208.33\text{ loads}$$
    Since you cannot run a fraction of a load, round up:
    $$\text{Loads} = 5209\text{ loads}$$

---

### Worked Example 2: Earthwork Balancing
A project has a cut section with a volume of $8000\text{ BCY}$. This soil is to be placed in an adjacent fill section that has a designed compacted volume of $7200\text{ CCY}$. The soil shrinkage factor is $S_f = 0.85$ (meaning $S_h = 15\%$).

**Goal:** Determine if there is a surplus or deficit of soil, and calculate the volume of borrow required or waste generated in BCY.

**Solution:**
1.  **Convert Compacted Fill Volume to Bank Cubic Yards (BCY):**
    $$V_{F,\text{bank}} = \frac{V_C}{S_f} = \frac{7200\text{ CCY}}{0.85} = 8470.6\text{ BCY}$$
    This is the amount of bank soil required to satisfy the fill.
2.  **Compare Cut Volume to Required Fill Volume:**
    *   Soil available from cut ($V_{\text{cut}}$) = $8000\text{ BCY}$
    *   Soil needed for fill ($V_{\text{fill}}$) = $8470.6\text{ BCY}$
    *   Net Balance = $V_{\text{cut}} - V_{F,\text{bank}} = 8000 - 8470.6 = -470.6\text{ BCY}$
3.  **Determine Borrow or Waste:**
    Since the balance is negative, there is a **deficit** of soil. 
    $$\text{Borrow Required} = 471\text{ BCY}$$

---

## 5. Exam Pitfalls and Tips

*   **Forgetting to Adjust Fill Volumes:** When reading a mass diagram or balancing earthwork, never compare bank cut volumes directly to compacted fill volumes. You must convert the fill volume to bank equivalent volume first:
    $$V_{\text{fill (BCY)}} = \frac{V_{\text{fill (CCY)}}}{1 - S_h}$$
*   **Multiplication vs. Division Confusions:** Remember:
    *   Loose volume ($V_L$) is the *largest* volume ($V_L > V_B > V_C$).
    *   Compacted volume ($V_C$) is the *smallest* volume.
    *   If you convert from bank to loose, you multiply by $(1+S_w)$. If you convert from loose to bank, you divide by $(1+S_w)$ or multiply by $L_f$.
*   **Dry Unit Weight vs. Wet Unit Weight:** Swell and shrinkage factors are defined based on dry unit weights, because dry weight of solids is constant. If a problem provides wet unit weights and water contents, compute the dry unit weights before determining the conversion ratios.
*   **Reading Mass Diagrams:** Remember that a rising curve represents cut (excavation) and a falling curve represents fill (embankment). The peaks and valleys are transition points, not the locations of maximum cut or fill.
