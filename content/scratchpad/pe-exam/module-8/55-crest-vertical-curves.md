---
title: "Crest Vertical Curves"
weight: 55
date : "2026-05-04"
draft : false
type : "post"
---
# Crest Vertical Curves

Crest vertical curves are designed to connect an uphill grade to a downhill grade (or a steeper uphill grade to a flatter uphill grade, etc.), where the algebraic difference in grade is negative ($g_1 > g_2$). The primary design control for a crest vertical curve is ensuring adequate sight distance—specifically Stopping Sight Distance (SSD)—so that a driver can see a hazard over the crest of the hill.

## Design Parameters for Sight Distance

The relationship between the length of the curve, the grades, and the sight distance is based on the height of the driver's eye and the height of the object. AASHTO Green Book standard values for SSD are:
*   **Driver Eye Height ($h_1$):** $3.50\text{ ft}$ ($1.08\text{ m}$)
*   **Object Height ($h_2$):** $2.00\text{ ft}$ ($0.60\text{ m}$), representing the taillight height of a passenger car or a moderate road hazard.

<div style="text-align: center; margin: 20px 0;">
  <svg width="600" height="250" viewBox="0 0 600 250" xmlns="http://www.w3.org/2000/svg">
    <style>
      .road { stroke: #333; stroke-width: 4; fill: none; }
      .tangent { stroke: #999; stroke-width: 2; stroke-dasharray: 5,5; }
      .sightline { stroke: #d32f2f; stroke-width: 2; stroke-dasharray: 4,4; }
      .dim { stroke: #333; stroke-width: 1; }
      .dim-line { stroke: #333; stroke-width: 1; marker-end: url(#arrow); marker-start: url(#arrow); }
      .text { font-family: sans-serif; font-size: 14px; fill: #333; }
      .point { fill: #333; }
    </style>
    <defs>
      <marker id="arrow" markerWidth="8" markerHeight="6" refX="4" refY="3" orient="auto">
        <polygon points="0 0, 8 3, 0 6" fill="#333" />
      </marker>
    </defs>
    <!-- Tangents -->
    <line x1="50" y1="180" x2="300" y2="30" class="tangent" />
    <line x1="300" y1="30" x2="550" y2="180" class="tangent" />
    <text x="120" y="100" class="text">g1 (+)</text>
    <text x="440" y="100" class="text">g2 (-)</text>
    <text x="300" y="20" class="text" text-anchor="middle">PVI</text>
    <!-- Curve -->
    <path d="M 150 120 Q 300 30 450 120" class="road" />
    <circle cx="150" cy="120" r="4" class="point" />
    <text x="150" y="140" class="text" text-anchor="middle">PVC</text>
    <circle cx="450" cy="120" r="4" class="point" />
    <text x="450" y="140" class="text" text-anchor="middle">PVT</text>
    <!-- Sight Line -->
    <line x1="100" y1="90" x2="500" y2="90" class="sightline" />
    <circle cx="100" cy="90" r="4" class="point" fill="#d32f2f" />
    <text x="90" y="80" class="text" fill="#d32f2f" text-anchor="end">Driver (h1)</text>
    <circle cx="500" cy="90" r="4" class="point" fill="#d32f2f" />
    <text x="510" y="80" class="text" fill="#d32f2f">Object (h2)</text>
    <!-- Heights -->
    <line x1="100" y1="90" x2="100" y2="150" class="dim" />
    <line x1="500" y1="90" x2="500" y2="150" class="dim" />
    <!-- Dimensions -->
    <line x1="150" y1="170" x2="150" y2="200" class="dim" />
    <line x1="450" y1="170" x2="450" y2="200" class="dim" />
    <line x1="150" y1="190" x2="450" y2="190" class="dim-line" />
    <text x="300" y="185" class="text" text-anchor="middle">L (Curve Length)</text>
    <line x1="100" y1="160" x2="100" y2="230" class="dim" />
    <line x1="500" y1="160" x2="500" y2="230" class="dim" />
    <line x1="100" y1="220" x2="500" y2="220" class="dim-line" />
    <text x="300" y="215" class="text" text-anchor="middle" fill="#d32f2f">S (Sight Distance)</text>
  </svg>
</div>

---

## Length of Curve Equations

The minimum length of a crest vertical curve ($L$) depends on whether the required sight distance ($S$) is less than or equal to the curve length ($S \le L$) or greater than the curve length ($S > L$).

### 1. USCS (English) Units
With $h_1 = 3.50\text{ ft}$ and $h_2 = 2.00\text{ ft}$, the equations simplify as follows:

*   **Case 1: Sight Distance $\le$ Curve Length ($S \le L$)**
    $$L = \frac{A S^2}{100 \left(\sqrt{2h_1} + \sqrt{2h_2}\right)^2} = \frac{A S^2}{2158}$$

*   **Case 2: Sight Distance $>$ Curve Length ($S > L$)**
    $$L = 2S - \frac{2158}{A}$$

Where:
*   $L$ = length of vertical curve (ft)
*   $S$ = sight distance (ft)
*   $A$ = algebraic grade difference (%) = $|g_2 - g_1|$

### 2. Metric (SI) Units
With $h_1 = 1.08\text{ m}$ and $h_2 = 0.60\text{ m}$:

*   **Case 1: Sight Distance $\le$ Curve Length ($S \le L$)**
    $$L = \frac{A S^2}{658}$$

*   **Case 2: Sight Distance $>$ Curve Length ($S > L$)**
    $$L = 2S - \frac{658}{A}$$

Where $L$ and $S$ are in meters, and $A$ is in percent.

---

## The Rate of Vertical Curvature ($K$)

The design rate of vertical curvature, $K$, represents the horizontal distance in feet required to change the grade by 1%. For the case where $S \le L$:

$$K = \frac{L}{A} = \frac{S^2}{2158}$$

The required minimum $K$-value is a function of the sight distance ($S$) and is independent of the grades. AASHTO tables list minimum $K$-values for each design speed based on the standard level SSD. Once you have the design $K$-value, the minimum curve length is calculated directly as:

$$L_{\text{min}} = K \times A$$

### Minimum Length for Comfort and Aesthetics
If the grades are very close (small $A$), the equations might yield an extremely short curve length. AASHTO recommends a minimum curve length to ensure passenger comfort and visual smoothness. A common rule of thumb is:

$$L_{\text{min}} \ge 3 V$$

Where $V$ is the design speed in mph.

---

## Drainage Control (The Max $K$ Limit)

While a larger $K$-value provides a flatter, safer curve with more sight distance, it can introduce drainage issues. If a curve is too flat, water will not drain off the roadway surface, which increases the risk of hydroplaning.

*   **Drainage Criterion:** On curbed pavements, drainage problems may occur if the rate of vertical curvature $K$ exceeds **$167\text{ ft/\%}$** (or **$51\text{ m/\%}$**).
*   **The 0.3% Rule:** If $K > 167$, designers must verify that a minimum longitudinal slope of $0.3\%$ is reached within $50\text{ ft}$ of the high point of the curve.

---

## Worked Example

A crest vertical curve is to connect an initial grade $g_1 = +3.5\%$ and a final grade $g_2 = -1.5\%$ on a highway with a design speed of $60\text{ mph}$. 

Determine:
1. The minimum required length of the vertical curve using the $K$-value method.
2. The minimum required length of the vertical curve by solving the case-based equations from scratch (verifying the $S \le L$ assumption).
3. Whether this curve exceeds the AASHTO drainage criteria.

### Solution

**1. $K$-value Method:**
*   From AASHTO tables (or our SSD table), the design SSD for $60\text{ mph}$ is $570\text{ ft}$.
*   The required design $K$-value for $60\text{ mph}$ (crest curve) is:
    $$K = \frac{S^2}{2158} = \frac{570^2}{2158} = 150.56 \approx 151\text{ ft/\%}$$
*   Calculate algebraic grade difference:
    $$A = |g_2 - g_1| = |-1.5 - 3.5| = 5.0\%$$
*   Calculate minimum curve length:
    $$L_{\text{min}} = K \times A = 151 \times 5.0 = 755\text{ ft}$$

**2. Solve case-based equations from scratch:**
*   *Assumption:* Assume $S \le L$.
    $$L = \frac{A S^2}{2158} = \frac{5.0 \times 570^2}{2158} = \frac{5.0 \times 324,900}{2158} = \frac{1,624,500}{2158} = 752.78\text{ ft}$$
*   *Verify assumption:* Is $S \le L$? Since $570\text{ ft} \le 752.78\text{ ft}$, the assumption is correct.
*   Thus, the calculated minimum length is $753\text{ ft}$ (AASHTO tables round this up slightly to $755\text{ ft}$ based on the rounded $K$ of $151$).

*What if $S > L$ had occurred?*
If the calculated $L$ was less than $570\text{ ft}$ (which happens for small $A$ values), we would have to use the Case 2 formula: $L = 2S - \frac{2158}{A}$.

**3. Drainage Criteria Check:**
*   Our design $K$ is $151\text{ ft/\%}$ (or $150.56\text{ ft/\%}$).
*   AASHTO drainage limit for curbed roadways: $K_{\text{max}} = 167\text{ ft/\%}$.
*   Since $151 < 167$, the curve is steep enough to avoid drainage ponding near the high point, and special drainage design is not required.

## References

*   *A Policy on Geometric Design of Highways and Streets* (AASHTO Green Book), 7th Edition, 2018, Section 3.4.6.1.
*   *NCEES PE Civil Reference Handbook*, Section 4.3.1.
