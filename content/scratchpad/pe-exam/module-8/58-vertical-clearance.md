---
title: "Vertical Clearance"
weight: 58
date : "2026-05-04"
draft : false
type : "post"
---
# Vertical Clearance

Vertical clearance is the minimum vertical distance between the roadway surface and an overhead structure, such as an overpass bridge girder, sign truss, or pedestrian bridge. Ensuring adequate clearance is critical for preventing overhead collisions from commercial trucks, and ensuring that overhead structures do not block a driver's line of sight (underpass sight distance).

## Design Standards for Vertical Clearance

According to AASHTO and federal design standards:
*   **Minimum Clearance:** The standard minimum vertical clearance for highways and freeways is **$16.0\text{ ft}$** ($4.9\text{ m}$). On local or collector roads, a minimum clearance of **$14.0\text{ ft}$** to **$15.0\text{ ft}$** may be permitted.
*   **Overlay Allowance:** It is standard practice to design for an additional **$6\text{ inches}$** ($0.5\text{ ft}$) of clearance (making the design clearance $16.5\text{ ft}$) to accommodate future asphalt overlays without reducing the clearance below the legal limit.

---

## Profile and Clearance Geometry

Clearance is evaluated by comparing the profile elevation of the roadway with the elevation of the bottom of the overhead structure's girders. Because the roadway is often on a vertical curve (most critically a sag curve), the clearance varies across the width of the bridge.

<div style="background-color: white; padding: 20px; border-radius: 8px; margin: 20px 0; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
  <svg viewBox="0 0 800 250" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path d="M 0 0 L 10 5 L 0 10 z" fill="#333" />
      </marker>
    </defs>    
    <!-- Bridge Girder -->
    <rect x="200" y="50" width="400" height="30" fill="#94a3b8" stroke="#475569" stroke-width="2" />
    <text x="620" y="70" font-family="sans-serif" font-size="14" font-weight="bold" fill="#475569">Overpass Girder (Elev_bridge)</text>    
    <!-- Roadway Curve -->
    <path d="M 100 150 Q 400 250 700 150" fill="none" stroke="#2563eb" stroke-width="6" stroke-dasharray="12,6" />
    <text x="720" y="160" font-family="sans-serif" font-size="14" font-weight="bold" fill="#2563eb">Roadway Curve (Elev_road)</text>    
    <!-- Clearance Dimension C(x) -->
    <line x1="400" y1="80" x2="400" y2="195" stroke="#ef4444" stroke-width="2" marker-start="url(#arrow)" marker-end="url(#arrow)" />
    <text x="415" y="145" font-family="sans-serif" font-size="14" font-weight="bold" fill="#ef4444">C(x) = Clearance</text>    
    <!-- Bridge Width Dimension -->
    <line x1="200" y1="30" x2="200" y2="45" stroke="#999" stroke-width="1" />
    <line x1="600" y1="30" x2="600" y2="45" stroke="#999" stroke-width="1" />
    <line x1="200" y1="35" x2="600" y2="35" stroke="#333" stroke-width="1.5" marker-start="url(#arrow)" marker-end="url(#arrow)" />
    <text x="400" y="25" font-family="sans-serif" font-size="14" fill="#333" text-anchor="middle">Bridge Width</text>    
    <!-- PVC / PVT -->
    <circle cx="100" cy="150" r="5" fill="#2563eb" />
    <text x="100" y="130" font-family="sans-serif" font-size="14" font-weight="bold" text-anchor="middle" fill="#2563eb">PVC</text>
    <circle cx="700" cy="150" r="5" fill="#2563eb" />
    <text x="700" y="130" font-family="sans-serif" font-size="14" font-weight="bold" text-anchor="middle" fill="#2563eb">PVT</text>
  </svg>
</div>

The vertical clearance at any horizontal distance $x$ from the PVC is:

$$C(x) = \text{Elev}_{\text{bridge}}(x) - \text{Elev}_{\text{road}}(x)$$

Where:
*   $\text{Elev}_{\text{road}}(x) = y_{\text{PVC}} + g_1 x + \left(\frac{g_2 - g_1}{2L}\right) x^2$ (with $g_1, g_2$ as decimals)
*   $\text{Elev}_{\text{bridge}}(x)$ = bottom elevation of the bridge girder at distance $x$. Note that the bridge structure itself may be flat, on a constant slope, or on a vertical curve.

*Critical Point:* The minimum clearance does not always occur at the center of the bridge. Designers must check the clearance at both bridge faces (the edges of the structure) and at the low point of the roadway curve if it falls under the bridge.

---

## Underpass Sight Distance

When a sag vertical curve passes under a narrow bridge or structure, the overhead structure can block the driver's view, creating a sight distance restriction. 

AASHTO standard design parameters for underpass sight distance assume:
*   **Driver Eye Height ($h_1$):** $8.00\text{ ft}$ ($2.40\text{ m}$) — represents a truck driver, who has a higher line of sight and is therefore more easily blocked by the overhead girder.
*   **Object Height ($h_2$):** $2.00\text{ ft}$ ($0.60\text{ m}$) — represents vehicle taillights.

<div style="background-color: white; padding: 20px; border-radius: 8px; margin: 20px 0; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
  <svg viewBox="0 0 800 300" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path d="M 0 0 L 10 5 L 0 10 z" fill="#333" />
      </marker>
    </defs>    
    <!-- Roadway Sag Curve -->
    <path d="M 100 150 Q 400 350 700 150" fill="none" stroke="#2563eb" stroke-width="6" />    
    <!-- Bridge Structure -->
    <rect x="350" y="50" width="100" height="30" fill="#94a3b8" stroke="#475569" stroke-width="2" />
    <path d="M 350 80 L 370 140 L 430 140 L 450 80 Z" fill="#cbd5e1" stroke="#475569" stroke-width="2" />
    <text x="400" y="40" font-family="sans-serif" font-size="14" font-weight="bold" fill="#475569" text-anchor="middle">Bridge Structure (Sight Blockage)</text>
    <!-- Vehicles -->
    <rect x="120" y="125" width="40" height="30" rx="4" fill="#0284c7" />
    <circle cx="130" cy="155" r="6" fill="#333" />
    <circle cx="150" cy="155" r="6" fill="#333" />
    <circle cx="140" cy="135" r="3" fill="#fca5a5" />
    <text x="100" y="115" font-family="sans-serif" font-size="12" fill="#0284c7" text-anchor="end">Driver (h₁ = 8.0')</text>    
    <rect x="640" y="145" width="40" height="20" rx="4" fill="#ef4444" />
    <circle cx="650" cy="165" r="5" fill="#333" />
    <circle cx="670" cy="165" r="5" fill="#333" />
    <circle cx="645" cy="155" r="3" fill="#fca5a5" />
    <text x="700" y="140" font-family="sans-serif" font-size="12" fill="#ef4444">Taillights (h₂ = 2.0')</text>    
    <!-- Sight Line -->
    <line x1="140" y1="135" x2="645" y2="155" stroke="#f59e0b" stroke-width="2" stroke-dasharray="4,4" />
    <text x="250" y="130" font-family="sans-serif" font-size="14" font-weight="bold" fill="#f59e0b">Sight Line</text>    
    <!-- Interference marker -->
    <circle cx="370" cy="140" r="4" fill="#ef4444" />    
    <!-- PVC / PVT -->
    <circle cx="100" cy="150" r="5" fill="#2563eb" />
    <text x="100" y="180" font-family="sans-serif" font-size="14" font-weight="bold" text-anchor="middle" fill="#2563eb">PVC</text>
    <circle cx="700" cy="150" r="5" fill="#2563eb" />
    <text x="700" y="180" font-family="sans-serif" font-size="14" font-weight="bold" text-anchor="middle" fill="#2563eb">PVT</text>
  </svg>
</div>

Using these height parameters, the minimum curve length ($L$) equations for underpass sight distance are:

### 1. USCS (English) Units
With $h_1 = 8.00\text{ ft}$ and $h_2 = 2.00\text{ ft}$, the average height term is $\frac{h_1 + h_2}{2} = 5.0\text{ ft}$.

*   **Case 1: Sight Distance $\le$ Curve Length ($S \le L$)**
    $$L = \frac{A S^2}{800 \left( C - \frac{h_1 + h_2}{2} \right)} = \frac{A S^2}{800(C - 5)}$$

*   **Case 2: Sight Distance $>$ Curve Length ($S > L$)**
    $$L = 2S - \frac{800(C - 5)}{A}$$

Where:
*   $L$ = length of vertical curve (ft)
*   $S$ = stopping sight distance (ft)
*   $A$ = algebraic grade difference (%)
*   $C$ = vertical clearance (ft)

### 2. Metric (SI) Units
With $h_1 = 2.40\text{ m}$ and $h_2 = 0.60\text{ m}$, the average height term is $\frac{h_1 + h_2}{2} = 1.5\text{ m}$.

*   **Case 1: Sight Distance $\le$ Curve Length ($S \le L$)**
    $$L = \frac{A S^2}{800(C - 1.5)}$$

*   **Case 2: Sight Distance $>$ Curve Length ($S > L$)**
    $$L = 2S - \frac{800(C - 1.5)}{A}$$

Where $L, S,$ and $C$ are in meters, and $A$ is in percent.

---

## Worked Example

An overpass bridge is $80\text{ ft}$ wide, spanning from Station $45+20$ to Station $46+00$. The bottom elevation of the bridge girder is constant at $152.00\text{ ft}$. The roadway below the bridge is on a sag vertical curve with $L = 600\text{ ft}$, $g_1 = -4.0\%$, $g_2 = +2.0\%$. The PVC is located at Station $42+00$ at an elevation of $146.00\text{ ft}$. The highway has a design speed of $45\text{ mph}$ (design SSD = $360\text{ ft}$).

Determine:
1. The elevation of the roadway at the bridge entry face (Station $45+20$) and exit face (Station $46+00$).
2. The vertical clearance at the entry and exit faces of the bridge.
3. The minimum vertical clearance under the bridge.
4. The minimum curve length required to satisfy AASHTO underpass sight distance.

### Solution

**1. Calculate Roadway Elevations:**
*   $y_{\text{PVC}} = 146.00\text{ ft}$
*   $g_1 = -0.04$
*   $g_2 = +0.02$
*   $L = 600\text{ ft}$
*   $\text{Station}_{\text{PVC}} = 42+00 \implies 4,200\text{ ft}$

*At Station $45+20$ (Entry Face):*
*   $x_1 = 4,520 - 4,200 = 320\text{ ft}$
    $$y(320) = 146.00 + (-0.04)(320) + \left(\frac{0.02 - (-0.04)}{2 \times 600}\right) (320)^2$$
    $$y(320) = 146.00 - 12.80 + \left(\frac{0.06}{1200}\right)(102,400) = 133.20 + 0.00005(102,400) = 133.20 + 5.12 = 138.32\text{ ft}$$

*At Station $46+00$ (Exit Face):*
*   $x_2 = 4,600 - 4,200 = 400\text{ ft}$
    $$y(400) = 146.00 + (-0.04)(400) + \left(\frac{0.06}{1200}\right) (400)^2$$
    $$y(400) = 146.00 - 16.00 + 0.00005(160,000) = 130.00 + 8.00 = 138.00\text{ ft}$$

**2. Calculate Clearance at Bridge Faces:**
*   $C_{\text{entry}} = 152.00 - 138.32 = 13.68\text{ ft}$
*   $C_{\text{exit}} = 152.00 - 138.00 = 14.00\text{ ft}$

**3. Determine Minimum Clearance:**
Since the roadway is on a sag curve, the low point of the curve represents the maximum dip in the road.
*   $K = L/A = 600 / 6.0 = 100\text{ ft/\%}$
*   Distance from PVC to low point: $x_{\text{lp}} = g_1 K = 4.0 \times 100 = 400\text{ ft}$.
*   The low point occurs at Station $42+00 + 400\text{ ft} = 46+00$.
*   Since Station $46+00$ is exactly at the exit face of the bridge, the minimum clearance under the bridge occurs at this face and is equal to **$14.00\text{ ft}$**.
*   *Note: This clearance ($14.00\text{ ft}$) is less than the standard highway requirement of $16.0\text{ ft}$. The roadway profile would need to be lowered or the bridge raised.*

**4. Underpass Sight Distance Check:**
*   Design SSD ($S$) = $360\text{ ft}$
*   Algebraic grade difference ($A$) = $6.0\%$
*   Clearance ($C$) = $14.00\text{ ft}$ (at the critical point)
*   *Assumption:* Assume $S \le L$.
    $$L = \frac{A S^2}{800(C - 5)} = \frac{6.0 \times (360)^2}{800(14.00 - 5)} = \frac{6.0 \times 129,600}{800(9.0)} = \frac{777,600}{7200} = 108.0\text{ ft}$$
*   *Verify assumption:* Is $S \le L$? Since $360\text{ ft} > 108.0\text{ ft}$, the assumption is **false**.
*   *Recalculate using Case 2 ($S > L$):*
    $$L = 2S - \frac{800(C-5)}{A} = 2(360) - \frac{800(14.00 - 5)}{6.0} = 720 - \frac{800(9.0)}{6.0} = 720 - 1200 = -480\text{ ft}$$
*   *Interpretation:* A negative value indicates that no vertical curve is geometrically required to maintain underpass sight distance at this clearance (meaning the straight tangents would provide enough sight line). However, because the roadway is a major facility, the minimum length would be governed by passenger comfort ($L_{\text{comfort}} = 6 \times 45^2 / 46.5 = 261\text{ ft}$) or aesthetics ($L = 3V = 135\text{ ft}$).

## References

*   *A Policy on Geometric Design of Highways and Streets* (AASHTO Green Book), 7th Edition, 2018, Section 3.4.6.4.
*   *NCEES PE Civil Reference Handbook*, Section 4.3.1.
