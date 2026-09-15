---
title: "Circular Curve Fundamentals"
weight: 44
date : "2026-05-04"
draft : false
type : "post"
---Horizontal curves provide smooth transitions between tangent sections of a highway. A simple horizontal curve is a circular arc of constant radius connecting two tangents. For the PE Civil Transportation exam, horizontal alignment calculations are based on the equations found in the **NCEES PE Civil Reference Handbook** and design criteria in **AASHTO's Green Book (GDHS)**, Chapter 3.

---

## Circular Curve Geometry and Terms

Understanding the spatial layout and definitions of horizontal curve components is critical.

<div class="diagram-card">
  <div class="diagram-header">
    <div class="diagram-title">
      <span class="diagram-indicator"></span>
      <span>Horizontal Circular Curve Geometry and Components</span>
    </div>
    <p class="diagram-caption">
      Geometric elements of a simple horizontal circular curve connecting two tangents. Tangent distances ($T$), radius ($R$), long chord ($LC$), curve length ($L$), external distance ($E$), and middle ordinate ($M$) are all uniquely determined by the radius $R$ and intersection angle $\Delta$.
    </p>
  </div>
  <div class="diagram-svg-wrap">
    <svg viewBox="0 0 680 340" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <marker id="arrow-geo" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#94a3b8"/>
        </marker>
        <marker id="arrow-accent" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#6366f1"/>
        </marker>
      </defs>
      <!-- Background Grid Panel -->
      <rect x="20" y="15" width="640" height="310" rx="8" fill="rgba(255, 255, 255, 0.02)" stroke="rgba(255, 255, 255, 0.08)"/>
      <!-- Center O Radial lines -->
      <line x1="340" y1="290" x2="180" y2="160" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4 3"/>
      <line x1="340" y1="290" x2="500" y2="160" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4 3"/>
      <line x1="340" y1="290" x2="340" y2="45" stroke="#94a3b8" stroke-width="1" stroke-dasharray="3 3" opacity="0.6"/>
      <!-- Central Angle Delta Arc at O -->
      <path d="M 305 262 A 45 45 0 0 1 375 262" stroke="#f59e0b" stroke-width="1.8" fill="none"/>
      <text x="340" y="252" fill="#f59e0b" font-size="12" font-weight="700" font-family="system-ui, sans-serif" text-anchor="middle">Δ (Central Angle)</text>
      <!-- Tangents -->
      <line x1="60" y1="257" x2="340" y2="45" stroke="#0284c7" stroke-width="2.2"/>
      <line x1="340" y1="45" x2="620" y2="257" stroke="#0284c7" stroke-width="2.2"/>
      <!-- Tangent Deflection Extension Line -->
      <line x1="340" y1="45" x2="440" y2="-31" stroke="#94a3b8" stroke-width="1.2" stroke-dasharray="4 3"/>
      <!-- Deflection Angle Delta at PI -->
      <path d="M 385 11 A 55 55 0 0 1 405 94" stroke="#f59e0b" stroke-width="1.6" fill="none"/>
      <text x="415" y="42" fill="#f59e0b" font-size="11" font-weight="700" font-family="system-ui, sans-serif">Δ (Deflection)</text>
      <!-- Circular Arc Curve (L) -->
      <path d="M 180 160 A 206 206 0 0 1 500 160" stroke="#10b981" stroke-width="3.5" stroke-linecap="round"/>
      <!-- Long Chord (LC) -->
      <line x1="180" y1="160" x2="500" y2="160" stroke="#8b5cf6" stroke-width="2" stroke-dasharray="6 4"/>
      <!-- External Distance E and Middle Ordinate M on centerline -->
      <!-- Apex is at (340, 126.8), Chord midpoint is at (340, 160) -->
      <line x1="340" y1="45" x2="340" y2="127" stroke="#ec4899" stroke-width="2.2"/>
      <line x1="340" y1="127" x2="340" y2="160" stroke="#f97316" stroke-width="2.2"/>
      <!-- Dimension Callouts -->
      <!-- Tangent Length T labels -->
      <text x="245" y="90" fill="#0284c7" font-size="12" font-weight="700" font-family="system-ui, sans-serif" transform="rotate(-37 245 90)">Tangent Length T</text>
      <text x="435" y="90" fill="#0284c7" font-size="12" font-weight="700" font-family="system-ui, sans-serif" transform="rotate(37 435 90)">Tangent Length T</text>
      <!-- Radius R labels -->
      <text x="240" y="240" fill="#94a3b8" font-size="12" font-weight="700" font-family="system-ui, sans-serif" transform="rotate(39 240 240)">Radius R</text>
      <text x="440" y="240" fill="#94a3b8" font-size="12" font-weight="700" font-family="system-ui, sans-serif" transform="rotate(-39 440 240)">Radius R</text>
      <!-- Curve Length L Label -->
      <text x="340" y="112" fill="#10b981" font-size="13" font-weight="700" font-family="system-ui, sans-serif" text-anchor="middle">Curve Length (L)</text>
      <!-- Long Chord LC Label -->
      <text x="340" y="178" fill="#8b5cf6" font-size="11" font-weight="700" font-family="system-ui, sans-serif" text-anchor="middle">Long Chord (LC)</text>
      <!-- E and M Labels -->
      <text x="352" y="85" fill="#ec4899" font-size="11" font-weight="700" font-family="system-ui, sans-serif">E (External)</text>
      <text x="352" y="148" fill="#f97316" font-size="11" font-weight="700" font-family="system-ui, sans-serif">M (Middle Ord.)</text>
      <!-- Points (PC, PI, PT, O) -->
      <!-- Point O -->
      <circle cx="340" cy="290" r="5" fill="#f59e0b"/>
      <text x="340" y="315" fill="#f59e0b" font-size="12" font-weight="700" font-family="system-ui, sans-serif" text-anchor="middle">O (Curve Center)</text>
      <!-- Point PI -->
      <circle cx="340" cy="45" r="6" fill="#0284c7"/>
      <circle cx="340" cy="45" r="10" stroke="#0284c7" stroke-width="1.5" stroke-dasharray="3 2"/>
      <text x="340" y="30" fill="#0284c7" font-size="13" font-weight="700" font-family="system-ui, sans-serif" text-anchor="middle">PI (Point of Intersection)</text>
      <!-- Point PC -->
      <circle cx="180" cy="160" r="6" fill="#10b981"/>
      <circle cx="180" cy="160" r="10" stroke="#10b981" stroke-width="1.5" stroke-dasharray="3 2"/>
      <text x="155" y="145" fill="#10b981" font-size="13" font-weight="700" font-family="system-ui, sans-serif" text-anchor="end">PC (Point of Curvature)</text>
      <!-- Point PT -->
      <circle cx="500" cy="160" r="6" fill="#10b981"/>
      <circle cx="500" cy="160" r="10" stroke="#10b981" stroke-width="1.5" stroke-dasharray="3 2"/>
      <text x="525" y="145" fill="#10b981" font-size="13" font-weight="700" font-family="system-ui, sans-serif" text-anchor="start">PT (Point of Tangency)</text>
    </svg>
  </div>
  <div class="diagram-badges">
    <div class="diagram-badge" style="border-left: 3px solid #10b981;">
      <strong>Arc & Tangents ($L, T$)</strong>
      <p>$T = R \tan(\Delta/2)$, $L = \frac{\pi R \Delta}{180^\circ}$.</p>
    </div>
    <div class="diagram-badge" style="border-left: 3px solid #8b5cf6;">
      <strong>Long Chord ($LC$)</strong>
      <p>$LC = 2R \sin(\Delta/2)$, straight distance from PC to PT.</p>
    </div>
    <div class="diagram-badge" style="border-left: 3px solid #ec4899;">
      <strong>External Distance ($E$)</strong>
      <p>$E = R \left[\frac{1}{\cos(\Delta/2)} - 1\right] = R [\sec(\Delta/2) - 1]$.</p>
    </div>
    <div class="diagram-badge" style="border-left: 3px solid #f97316;">
      <strong>Middle Ordinate ($M$)</strong>
      <p>$M = R [1 - \cos(\Delta/2)]$, distance from chord to curve apex.</p>
    </div>
  </div>
</div>


### Definitions:
*   **PI (Point of Intersection):** The point where the back tangent and forward tangent intersect.
*   **PC (Point of Curvature):** The point where the alignment changes from a tangent to the circular curve (beginning of the curve).
*   **PT (Point of Tangency):** The point where the alignment changes from the circular curve to a tangent (end of the curve).
*   **$\Delta$ or $I$ (Deflection Angle / Central Angle):** The angle of intersection between the back and forward tangents, which is equal to the central angle subtended by the circular arc.
*   **$R$ (Radius):** The radius of the circular arc.
*   **$T$ (Tangent Length):** The distance from PC to PI, or from PI to PT.
*   **$L$ (Length of Curve):** The length of the circular arc from PC to PT.
*   **$LC$ (Long Chord):** The straight-line distance from PC to PT.
*   **$E$ (External Distance):** The distance from the PI to the midpoint of the curve along the radial line connecting the PI to the curve center.
*   **$M$ (Middle Ordinate):** The distance from the midpoint of the curve to the midpoint of the long chord.

---

## Degree of Curve ($D$)

Degree of curve is a measure of the sharpness of a curve. There are two standard definitions:

### 1. Arc Definition ($D_a$)
The degree of curve is the central angle subtended by a circular arc of exactly **$100\text{ ft}$**. This definition is used exclusively in highway engineering.
$$D_a = \frac{360^\circ \times 100\text{ ft}}{2 \pi R} \approx \frac{5729.58}{R}$$

### 2. Chord Definition ($D_c$)
The degree of curve is the central angle subtended by a straight chord of exactly **$100\text{ ft}$**. This definition is used in railway engineering.
$$R = \frac{50}{\sin\left(\frac{D_c}{2}\right)}$$

---

## Fundamental Circular Curve Formulas

The following geometric relationships are used to calculate the properties of a simple circular curve. Ensure your calculator is set to **Degree Mode** for all trigonometric functions.

| Parameter | Formula | Alternative Form |
| :--- | :--- | :--- |
| **Radius ($R$)** | $$R = \frac{5729.58}{D_a}$$ *(Arc)* | $$R = \frac{50}{\sin(D_c/2)}$$ *(Chord)* |
| **Tangent ($T$)** | $$T = R \tan\left(\frac{\Delta}{2}\right)$$ | |
| **Curve Length ($L$)** | $$L = R \Delta \left(\frac{\pi}{180}\right)$$ | $$L = \frac{100 \Delta}{D_a}$$ |
| **Long Chord ($LC$)** | $$LC = 2 R \sin\left(\frac{\Delta}{2}\right)$$ | |
| **External Distance ($E$)** | $$E = R \left( \sec\left(\frac{\Delta}{2}\right) - 1 \right)$$ | $$E = R \left( \frac{1}{\cos(\Delta/2)} - 1 \right)$$ |
| **Middle Ordinate ($M$)** | $$M = R \left( 1 - \cos\left(\frac{\Delta}{2}\right) \right)$$ | $$M = E \cos\left(\frac{\Delta}{2}\right)$$ |

---

## Worked Example: Full Curve Parameter Calculation

### Problem Statement
A simple horizontal circular curve is designed to connect two highway tangents. The deflection angle ($\Delta$) at the Point of Intersection (PI) is $42^\circ 30'$. The degree of curve ($D_a$, arc definition) is specified as $4.5^\circ$.

1.  Calculate the radius ($R$) of the curve.
2.  Find the tangent length ($T$).
3.  Calculate the length of the curve ($L$).
4.  Find the long chord length ($LC$).
5.  Determine the external distance ($E$) and middle ordinate ($M$).

### Solution
1.  **Calculate the Radius ($R$):**
    Using the arc definition:
    $$R = \frac{5729.58}{D_a} = \frac{5729.58}{4.5} = 1273.24\text{ ft}$$

2.  **Calculate the Tangent Length ($T$):**
    Convert $\Delta$ to decimal degrees: $\Delta = 42^\circ + \frac{30'}{60} = 42.5^\circ$.
    $$T = R \tan\left(\frac{\Delta}{2}\right) = 1273.24 \tan\left(\frac{42.5^\circ}{2}\right)$$
    $$T = 1273.24 \tan(21.25^\circ) = 1273.24 \times 0.38888 = 495.14\text{ ft}$$

3.  **Calculate the Curve Length ($L$):**
    Using the degree of curve formula:
    $$L = \frac{100 \Delta}{D_a} = \frac{100 \times 42.5}{4.5} = 944.44\text{ ft}$$
    *Double-check with arc length formula:*
    $$L = R \Delta \left(\frac{\pi}{180}\right) = 1273.24 \times 42.5 \times 0.0174533 = 944.44\text{ ft}$$ (Matches!)

4.  **Calculate the Long Chord ($LC$):**
    $$LC = 2 R \sin\left(\frac{\Delta}{2}\right) = 2 \times 1273.24 \sin(21.25^\circ)$$
    $$LC = 2546.48 \times 0.36244 = 922.94\text{ ft}$$

5.  **Calculate the External Distance ($E$) and Middle Ordinate ($M$):**
    *   **External Distance ($E$):**
        $$E = R \left( \frac{1}{\cos(\Delta/2)} - 1 \right) = 1273.24 \left( \frac{1}{\cos(21.25^\circ)} - 1 \right)$$
        $$E = 1273.24 \left( \frac{1}{0.93201} - 1 \right) = 1273.24 \times (1.07295 - 1) = 1273.24 \times 0.07295 = 92.88\text{ ft}$$
    *   **Middle Ordinate ($M$):**
        $$M = R \left( 1 - \cos\left(\frac{\Delta}{2}\right) \right) = 1273.24 (1 - \cos(21.25^\circ))$$
        $$M = 1273.24 (1 - 0.93201) = 1273.24 \times 0.06799 = 86.57\text{ ft}$$
        *Check relation:* $M = E \cos(\Delta/2) = 92.88 \times \cos(21.25^\circ) = 92.88 \times 0.93201 = 86.56\text{ ft}$ (Rounding agreement).

### Answer
*   Radius ($R$): **1,273.24 ft**
*   Tangent ($T$): **495.14 ft**
*   Length of curve ($L$): **944.44 ft**
*   Long Chord ($LC$): **922.94 ft**
*   External Distance ($E$): **92.88 ft**
*   Middle Ordinate ($M$): **86.57 ft**

---

## Crucial Exam Tips

*   **Calculator Angle Settings:** A common error is evaluating trigonometric functions in radians instead of degrees. Ensure your calculator displays "DEG".
*   **Arc vs. Chord Degree of Curve:** If the problem does not specify, **always** assume highway design (arc definition: $R = 5729.58/D$). Only use chord definition if the problem specifically mentions railroads or track design.
*   **Subdividing Deflection Angle:** Make sure to divide $\Delta$ by 2 in the functions for $T$, $LC$, $E$, and $M$ ($T = R \tan(\Delta/2)$, etc.). Forgetting to divide $\Delta$ by 2 is a very common distractor choice in multiple-choice questions.
