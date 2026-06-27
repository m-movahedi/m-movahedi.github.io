---
title: "Soil Phase Relationships (Weight-Volume Relations)"
weight: 81
date : "2026-05-04"
draft : false
type : "post"
---
# Soil Phase Relationships (Weight-Volume Relations)

A soil mass is a three-phase system consisting of solid particles (soil solids), water, and air. The relative proportions of these phases govern the physical behavior, compaction characteristics, and strength of the soil. On the PE Civil Transportation exam, soil phase calculations are highly common, requiring a systematic understanding of weight-volume relationships.

---

## 1. The Soil Phase Diagram

To solve phase relationship problems, it is helpful to visualize the three phases using a block diagram (the phase diagram). Weights are typically written on the left side of the diagram, and volumes are written on the right.

<div style="width: 100%; max-width: 600px; margin: 2rem auto;">
<svg viewBox="0 0 600 300" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" style="font-family: sans-serif; fill: currentColor;">
  <!-- Headers -->
  <text x="120" y="30" text-anchor="middle" font-weight="bold">WEIGHTS</text>
  <text x="380" y="30" text-anchor="middle" font-weight="bold">VOLUMES</text>

  <!-- Left Brackets (Total Weight) -->
  <path d="M 70 50 L 50 50 L 50 250 L 70 250" fill="none" stroke="currentColor" stroke-width="2"/>
  <text x="40" y="155" text-anchor="end">W (Total Weight)</text>

  <!-- Left labels -->
  <text x="130" y="85" text-anchor="middle">W<tspan dy="5" font-size="0.8em">a</tspan><tspan dy="-5"> = 0</tspan></text>
  <text x="130" y="145" text-anchor="middle">W<tspan dy="5" font-size="0.8em">w</tspan></text>
  <text x="130" y="215" text-anchor="middle">W<tspan dy="5" font-size="0.8em">s</tspan></text>

  <!-- Central Boxes -->
  <rect x="200" y="50" width="100" height="50" fill="rgba(128,128,128,0.1)" stroke="currentColor" stroke-width="2" />
  <rect x="200" y="100" width="100" height="70" fill="rgba(54, 162, 235, 0.2)" stroke="currentColor" stroke-width="2" />
  <rect x="200" y="170" width="100" height="80" fill="rgba(139, 69, 19, 0.2)" stroke="currentColor" stroke-width="2" />
  
  <line x1="200" y1="100" x2="300" y2="100" stroke="currentColor" stroke-dasharray="4,4" stroke-width="2" />

  <text x="250" y="80" text-anchor="middle" font-weight="bold">Air</text>
  <text x="250" y="140" text-anchor="middle" font-weight="bold">Water</text>
  <text x="250" y="215" text-anchor="middle" font-weight="bold">Solids</text>

  <!-- Right labels -->
  <text x="370" y="85" text-anchor="middle">V<tspan dy="5" font-size="0.8em">a</tspan></text>
  <text x="370" y="145" text-anchor="middle">V<tspan dy="5" font-size="0.8em">w</tspan></text>
  <text x="370" y="215" text-anchor="middle">V<tspan dy="5" font-size="0.8em">s</tspan></text>

  <!-- Right Brackets (Voids and Total Volume) -->
  <path d="M 410 50 L 420 50 L 420 170 L 410 170" fill="none" stroke="currentColor" stroke-width="2"/>
  <text x="430" y="115" text-anchor="start">V<tspan dy="5" font-size="0.8em">v</tspan><tspan dy="-5"> (Voids)</tspan></text>

  <path d="M 410 50 L 510 50 L 510 250 L 410 250" fill="none" stroke="currentColor" stroke-width="2"/>
  <text x="520" y="155" text-anchor="start">V (Total Volume)</text>
</svg>
</div>

### Definitions and Key Equations

#### Volume Relations
*   **Total Volume ($V$):** $V = V_s + V_w + V_a = V_s + V_v$
*   **Volume of Voids ($V_v$):** $V_v = V_w + V_a$
*   **Void Ratio ($e$):** The ratio of the volume of voids to the volume of solids:
    $$e = \frac{V_v}{V_s}$$
*   **Porosity ($n$):** The ratio of the volume of voids to the total volume:
    $$n = \frac{V_v}{V} = \frac{e}{1+e}$$
    *Note: Void ratio ($e$) and porosity ($n$) are mathematically related:*
    $$e = \frac{n}{1-n}$$
*   **Degree of Saturation ($S$):** The ratio of the volume of water to the volume of voids, expressed as a decimal or percentage:
    $$S = \frac{V_w}{V_v}$$

#### Weight Relations
*   **Total Weight ($W$):** $W = W_s + W_w$ (since weight of air $W_a$ is negligible)
*   **Water Content ($w$):** The ratio of the weight of water to the weight of dry solids:
    $$w = \frac{W_w}{W_s}$$
*   **Specific Gravity of Soil Solids ($G_s$):** The ratio of the unit weight of soil solids to the unit weight of water:
    $$G_s = \frac{\gamma_s}{\gamma_w} = \frac{W_s}{V_s \cdot \gamma_w}$$

#### Density and Unit Weight Relations
*   **Unit Weight of Water ($\gamma_w$):**
    $$\gamma_w = 62.4 \text{ lb/ft}^3 = 9.81 \text{ kN/m}^3 = 1.0 \text{ g/cm}^3 \ (\text{or } 1000 \text{ kg/m}^3)$$
*   **Total (Moist / Bulk) Unit Weight ($\gamma$):** The total weight divided by the total volume:
    $$\gamma = \frac{W}{V} = \frac{(G_s + S \cdot e)\gamma_w}{1+e}$$
*   **Dry Unit Weight ($\gamma_d$):** The dry weight of solids divided by the total volume:
    $$\gamma_d = \frac{W_s}{V} = \frac{G_s \cdot \gamma_w}{1+e} = \frac{\gamma}{1+w}$$
*   **Saturated Unit Weight ($\gamma_{\text{sat}}$):** The unit weight when the soil is completely saturated ($S = 100\%$ or $1.0$):
    $$\gamma_{\text{sat}} = \frac{(G_s + e)\gamma_w}{1+e}$$
*   **Submerged (Buoyant) Unit Weight ($\gamma'$):** The effective unit weight when the soil is below the water table:
    $$\gamma' = \gamma_{\text{sat}} - \gamma_w = \frac{(G_s - 1)\gamma_w}{1+e}$$

---

## 2. The Golden Equation of Soil Mechanics

The single most useful relationship that links weight parameters to volume parameters is:
$$S \cdot e = w \cdot G_s$$
Where:
*   $S = \text{Degree of Saturation (expressed as a decimal, e.g., 0.85 for 85\%)}$
*   $e = \text{Void Ratio}$
*   $w = \text{Water Content (expressed as a decimal, e.g., 0.15 for 15\%)}$
*   $G_s = \text{Specific Gravity of Solids}$

This equation allows direct translation between the weights ($w$, $G_s$) and the volumes ($S$, $e$).

---

## 3. The Unit Volume Assumption Method

When a problem provides only ratios (e.g., void ratio, water content, degree of saturation, specific gravity) and asks for another ratio or unit weight without giving absolute sizes:
1.  **Assume a volume or weight.** The most convenient assumption is:
    *   **Assume $V_s = 1.0$** (ideal if $e$, $n$, or $G_s$ are known).
    *   **Assume $V = 1.0$** (ideal if total unit weight is known).
    *   **Assume $W_s = 1.0$** (ideal if water content $w$ is known).
2.  Fill in the remaining boxes of the phase diagram using the definition formulas.
3.  Calculate the desired target parameter.

---

## 4. Worked Examples

### Worked Example 1: Basic Phase Relations (No Volumes Given)
A soil sample has a wet (bulk) unit weight of $122.0\text{ lb/ft}^3$, a water content of $18.5\%$, and the specific gravity of the soil solids is $2.68$. 

**Goal:** Determine:
1.  Dry unit weight ($\gamma_d$)
2.  Void ratio ($e$)
3.  Porosity ($n$)
4.  Degree of saturation ($S$)

**Solution:**
1.  **Calculate Dry Unit Weight ($\gamma_d$):**
    $$\gamma_d = \frac{\gamma}{1+w} = \frac{122.0\text{ lb/ft}^3}{1 + 0.185} = \frac{122.0}{1.185} = 102.95\text{ lb/ft}^3$$
2.  **Calculate Void Ratio ($e$):**
    Using the dry unit weight formula:
    $$\gamma_d = \frac{G_s \cdot \gamma_w}{1+e} \implies 1+e = \frac{G_s \cdot \gamma_w}{\gamma_d}$$
    Substitute the known values ($\gamma_w = 62.4\text{ lb/ft}^3$, $G_s = 2.68$):
    $$1+e = \frac{2.68 \cdot 62.4}{102.95} = \frac{167.23}{102.95} = 1.624$$
    $$e = 1.624 - 1.0 = 0.624$$
3.  **Calculate Porosity ($n$):**
    $$n = \frac{e}{1+e} = \frac{0.624}{1 + 0.624} = \frac{0.624}{1.624} = 0.384\text{ (or } 38.4\%)$$
4.  **Calculate Degree of Saturation ($S$):**
    Using the golden equation $S \cdot e = w \cdot G_s$:
    $$S = \frac{w \cdot G_s}{e} = \frac{0.185 \cdot 2.68}{0.624} = \frac{0.4958}{0.624} = 0.795\text{ (or } 79.5\%)$$

---

### Worked Example 2: Phase Diagram with Volumes
A moist soil sample has a total volume of $0.40\text{ ft}^3$ and a total weight of $48.5\text{ lb}$. After oven drying, the dry weight of the solids is $41.2\text{ lb}$. The specific gravity of the solids is $2.70$.

**Goal:** Find the void ratio ($e$) and the degree of saturation ($S$).

**Solution:**
Let's construct a phase diagram with known absolute values:
*   Total volume $V = 0.40\text{ ft}^3$
*   Total weight $W = 48.5\text{ lb}$
*   Dry weight of solids $W_s = 41.2\text{ lb}$
*   Specific gravity $G_s = 2.70$

1.  **Determine Weight of Water ($W_w$):**
    $$W_w = W - W_s = 48.5 - 41.2 = 7.3\text{ lb}$$
2.  **Determine Volume of Solids ($V_s$):**
    $$V_s = \frac{W_s}{G_s \cdot \gamma_w} = \frac{41.2\text{ lb}}{2.70 \cdot 62.4\text{ lb/ft}^3} = \frac{41.2}{168.48} = 0.245\text{ ft}^3$$
3.  **Determine Volume of Voids ($V_v$):**
    $$V_v = V - V_s = 0.40 - 0.245 = 0.155\text{ ft}^3$$
4.  **Calculate Void Ratio ($e$):**
    $$e = \frac{V_v}{V_s} = \frac{0.155}{0.245} = 0.633$$
5.  **Determine Volume of Water ($V_w$):**
    $$V_w = \frac{W_w}{\gamma_w} = \frac{7.3\text{ lb}}{62.4\text{ lb/ft}^3} = 0.117\text{ ft}^3$$
6.  **Calculate Degree of Saturation ($S$):**
    $$S = \frac{V_w}{V_v} = \frac{0.117}{0.155} = 0.755\text{ (or } 75.5\%)$$
    *(Check using $S = \frac{w \cdot G_s}{e}$ where $w = \frac{7.3}{41.2} = 0.1772$: $S = \frac{0.1772 \cdot 2.70}{0.633} = 0.756$. The values check out!)*

---

## 5. Exam Pitfalls and Tips

*   **Dry Weight vs. Total Weight in Water Content:** Water content is defined as $w = \frac{W_w}{W_s}$ (divided by *solid* weight, not *total* weight). The total weight is used in wet unit weight, not water content.
*   **Specific Gravity of Water:** In USCS units, $\gamma_w = 62.4\text{ lb/ft}^3$. In SI units, $\gamma_w = 9.81\text{ kN/m}^3$. Ensure you match the units of the given weights.
*   **Saturated Condition Assumptions:** If the problem states the soil is below the water table, assume it is completely saturated ($S = 1.0$ or $100\%$).
*   **Percent vs. Decimal Form:** Always convert percentages (e.g., $w = 15\%$, $S = 80\%$) into decimals ($w = 0.15$, $S = 0.80$) before plugging them into formulas like $S \cdot e = w \cdot G_s$.
