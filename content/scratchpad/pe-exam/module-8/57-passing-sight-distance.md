---
title: "Passing Sight Distance on Vertical Curves"
weight: 57
date : "2026-05-04"
draft : false
type : "post"
---
# Passing Sight Distance on Vertical Curves

Passing Sight Distance (PSD) is the minimum distance required for a driver on a two-lane highway to safely complete a passing maneuver around a slower vehicle without colliding with an opposing vehicle. Providing PSD on vertical curves is much more demanding than providing Stopping Sight Distance (SSD) due to the greater sight distance required.

## Design Parameters for Passing Sight Distance

Unlike SSD, where the object on the road is small ($h_2 = 2.00\text{ ft}$), the object in a passing scenario is an oncoming vehicle. AASHTO Green Book standards assume:
*   **Driver Eye Height ($h_1$):** $3.50\text{ ft}$ ($1.08\text{ m}$)
*   **Opposing Vehicle Height ($h_2$):** $3.50\text{ ft}$ ($1.08\text{ m}$)

Because the driver's eye height and the opposing vehicle height are identical, the geometric equations for crest vertical curves simplify significantly.

<div style="background-color: white; padding: 20px; border-radius: 8px; margin: 20px 0; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
  <svg viewBox="0 0 800 300" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
    <!-- Definitions for arrowheads -->
    <defs>
      <marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path d="M 0 0 L 10 5 L 0 10 z" fill="#333" />
      </marker>
    </defs>
    
    <!-- Guidelines / Tangents -->
    <line x1="100" y1="250" x2="400" y2="50" stroke="#999" stroke-width="2" stroke-dasharray="5,5" />
    <line x1="400" y1="50" x2="700" y2="250" stroke="#999" stroke-width="2" stroke-dasharray="5,5" />
    
    <!-- PVI Point -->
    <circle cx="400" cy="50" r="4" fill="#666" />
    <text x="400" y="40" font-family="sans-serif" font-size="14" text-anchor="middle" fill="#666">PVI</text>
    
    <!-- Curve -->
    <path d="M 250 150 Q 400 50 550 150" fill="none" stroke="#16a34a" stroke-width="4" />
    
    <!-- PVC and PVT -->
    <circle cx="250" cy="150" r="5" fill="#16a34a" />
    <text x="230" y="165" font-family="sans-serif" font-size="14" font-weight="bold" text-anchor="end" fill="#16a34a">PVC</text>
    <circle cx="550" cy="150" r="5" fill="#16a34a" />
    <text x="570" y="165" font-family="sans-serif" font-size="14" font-weight="bold" text-anchor="start" fill="#16a34a">PVT</text>
    
    <!-- Grades -->
    <text x="160" y="190" font-family="sans-serif" font-size="14" font-weight="bold" fill="#333">g₁ (+)</text>
    <line x1="120" y1="210" x2="190" y2="163" stroke="#333" stroke-width="1.5" marker-end="url(#arrow)" />
    
    <text x="640" y="190" font-family="sans-serif" font-size="14" font-weight="bold" fill="#333">g₂ (-)</text>
    <line x1="680" y1="210" x2="610" y2="163" stroke="#333" stroke-width="1.5" marker-end="url(#arrow)" />
    
    <!-- Driver Vehicle -->
    <rect x="180" y="170" width="40" height="20" rx="4" fill="#2563eb" />
    <circle cx="190" cy="190" r="4" fill="#333" />
    <circle cx="210" cy="190" r="4" fill="#333" />
    <circle cx="205" cy="165" r="3" fill="#fca5a5" />
    <text x="170" y="175" font-family="sans-serif" font-size="12" fill="#2563eb" text-anchor="end">Driver (h₁ = 3.5')</text>
    
    <!-- Opposing Vehicle -->
    <rect x="580" y="170" width="40" height="20" rx="4" fill="#ef4444" />
    <circle cx="590" cy="190" r="4" fill="#333" />
    <circle cx="610" cy="190" r="4" fill="#333" />
    <text x="630" y="175" font-family="sans-serif" font-size="12" fill="#ef4444" text-anchor="start">Opposing (h₂ = 3.5')</text>
    
    <!-- Sight Line -->
    <line x1="205" y1="165" x2="595" y2="165" stroke="#f59e0b" stroke-width="2" stroke-dasharray="4,4" />
    <text x="400" y="185" font-family="sans-serif" font-size="12" font-weight="bold" fill="#f59e0b" text-anchor="middle">Line of Sight</text>
    
    <!-- Length Dimensions -->
    <line x1="250" y1="210" x2="250" y2="280" stroke="#999" stroke-width="1" />
    <line x1="550" y1="210" x2="550" y2="280" stroke="#999" stroke-width="1" />
    <line x1="250" y1="230" x2="550" y2="230" stroke="#333" stroke-width="1.5" marker-start="url(#arrow)" marker-end="url(#arrow)" />
    <text x="400" y="225" font-family="sans-serif" font-size="14" font-weight="bold" fill="#333" text-anchor="middle">L (Curve Length)</text>
    
    <line x1="205" y1="200" x2="205" y2="280" stroke="#999" stroke-width="1" />
    <line x1="595" y1="200" x2="595" y2="280" stroke="#999" stroke-width="1" />
    <line x1="205" y1="260" x2="595" y2="260" stroke="#333" stroke-width="1.5" marker-start="url(#arrow)" marker-end="url(#arrow)" />
    <text x="400" y="255" font-family="sans-serif" font-size="14" font-weight="bold" fill="#333" text-anchor="middle">S (Passing Sight Distance)</text>
  </svg>
</div>

---

## Length of Curve Equations

The minimum length of a crest vertical curve ($L$) for PSD is calculated using the following formulas:

### 1. USCS (English) Units
With $h_1 = h_2 = 3.50\text{ ft}$, the term $(\sqrt{2h_1} + \sqrt{2h_2})^2$ becomes $(\sqrt{7} + \sqrt{7})^2 = (2\sqrt{7})^2 = 28$. Substituting this into the general curve equation yields:

*   **Case 1: Passing Sight Distance $\le$ Curve Length ($S \le L$)**
    $$L = \frac{A S^2}{2800}$$

*   **Case 2: Passing Sight Distance $>$ Curve Length ($S > L$)**
    $$L = 2S - \frac{2800}{A}$$

Where:
*   $L$ = length of vertical curve (ft)
*   $S$ = passing sight distance (ft)
*   $A$ = algebraic grade difference (%) = $|g_2 - g_1|$
*   $K$-value for PSD ($S \le L$): $K = \frac{S^2}{2800}$

### 2. Metric (SI) Units
With $h_1 = h_2 = 1.08\text{ m}$:

*   **Case 1: Passing Sight Distance $\le$ Curve Length ($S \le L$)**
    $$L = \frac{A S^2}{864}$$

*   **Case 2: Passing Sight Distance $>$ Curve Length ($S > L$)**
    $$L = 2S - \frac{864}{A}$$

Where $L$ and $S$ are in meters, and $A$ is in percent.

---

## Comparison of SSD and PSD Design Values

AASHTO design values for PSD are substantially larger than SSD values. The table below compares the two sight distances and their corresponding crest curve $K$-values at various design speeds:

| Design Speed (mph) | Design SSD (ft) | Crest $K_{\text{SSD}}$ (ft/%) | Design PSD (ft) | Crest $K_{\text{PSD}}$ (ft/%) |
| :---: | :---: | :---: | :---: | :---: |
| **30** | 200 | 19 | 560 | 112 |
| **40** | 305 | 44 | 760 | 206 |
| **50** | 425 | 84 | 975 | 339 |
| **60** | 570 | 151 | 1,200 | 514 |
| **70** | 730 | 247 | 1,410 | 710 |
| **80** | 910 | 384 | 1,620 | 937 |

---

## Design and Cost Implications

Because the required $K$-values for PSD are $4$ to $6$ times larger than those for SSD, designing a crest vertical curve to provide PSD is rarely practical. 
*   **Cost Barrier:** A crest curve designed for PSD would require massive quantities of earthwork (deep cuts at the crest and high fills at the approaches) to flatten the curve.
*   **Standard Practice:** Designers typically design vertical curves to meet minimum **SSD** requirements. 
*   **Operations:** Passing zones are managed operationally using pavement markings (solid and dashed yellow lines) and signage in accordance with the *Manual on Uniform Traffic Control Devices* (MUTCD). Where passing is highly desirable, adding a third auxiliary lane (passing lane or climbing lane) is often more cost-effective than flattening the vertical profile.

---

## Worked Example

A crest vertical curve on a two-lane rural highway connects an initial grade of $+2.0\%$ and a final grade of $-2.0\%$. The design speed is $50\text{ mph}$.

Calculate:
1. The minimum length of the vertical curve required to satisfy Stopping Sight Distance (SSD).
2. The minimum length of the vertical curve required to satisfy Passing Sight Distance (PSD).
3. The difference in vertical curve lengths and discuss the feasibility.

### Solution

**1. Calculate Curve Length for SSD:**
*   $A = |g_2 - g_1| = |-2.0 - 2.0| = 4.0\%$
*   For $V = 50\text{ mph}$, design SSD = $425\text{ ft}$.
*   *Assumption:* Assume $S \le L$.
    $$L_{\text{SSD}} = \frac{A S^2}{2158} = \frac{4.0 \times (425)^2}{2158} = \frac{4.0 \times 180,625}{2158} = \frac{722,500}{2158} = 334.8\text{ ft}$$
*   *Verify assumption:* Since $425\text{ ft} > 334.8\text{ ft}$, the assumption $S \le L$ is **false**.
*   *Recalculate using Case 2 ($S > L$):*
    $$L_{\text{SSD}} = 2S - \frac{2158}{A} = 2(425) - \frac{2158}{4.0} = 850 - 539.5 = 310.5\text{ ft}$$
*   Thus, the minimum required curve length for SSD is **$311\text{ ft}$**.

**2. Calculate Curve Length for PSD:**
*   For $V = 50\text{ mph}$, design PSD = $975\text{ ft}$.
*   *Assumption:* Assume $S \le L$.
    $$L_{\text{PSD}} = \frac{A S^2}{2800} = \frac{4.0 \times (975)^2}{2800} = \frac{4.0 \times 950,625}{2800} = \frac{3,802,500}{2800} = 1358.04\text{ ft}$$
*   *Verify assumption:* Since $975\text{ ft} \le 1358.04\text{ ft}$, the assumption $S \le L$ is **correct**.
*   Thus, the minimum required curve length for PSD is **$1,358\text{ ft}$**.

**3. Discussion:**
Designing the curve for PSD requires a curve length of $1,358\text{ ft}$, which is more than $4$ times longer than the $311\text{ ft}$ required for SSD. This significantly increases the required horizontal footprint of the earthwork and the project cost. The standard approach is to construct the $311\text{ ft}$ curve and mark the segment as a "No Passing Zone" with solid yellow pavement markings.

## References

*   *A Policy on Geometric Design of Highways and Streets* (AASHTO Green Book), 7th Edition, 2018, Section 3.2.4 & 3.4.6.1.
*   *NCEES PE Civil Reference Handbook*, Section 4.3.1.
