---
title: "Intersection Sight Distance"
weight: 59
date : "2026-05-04"
draft : false
type : "post"
---
# Intersection Sight Distance

Intersection Sight Distance (ISD) is the sight distance required at an intersection to allow drivers to safely perceive and react to potential conflicts, enabling them to cross or merge with opposing traffic streams. ISD is evaluated using the concept of **sight triangles**, which define unobstructed areas along the intersection's corners.

---

## Sight Triangles

Sight triangles represent the clear zones required for drivers to see approaching vehicles. There are two types:
1.  **Approach Sight Triangles:** Used at uncontrolled or yield-controlled intersections where drivers must see approaching vehicles while still moving, allowing them to slow down or stop if necessary.
2.  **Departure Sight Triangles:** Used at stop-controlled or signal-controlled intersections where a driver is stopped at the minor road and must see approaching traffic on the major road to safely make a maneuver (left turn, right turn, or crossing).

<div style="background: #ffffff; border-radius: 8px; border: 1px solid #e2e8f0; padding: 16px; margin: 24px 0;">
  <svg viewBox="0 0 600 350" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <marker id="arrow-left" markerWidth="10" markerHeight="10" refX="0" refY="3" orient="auto-start-reverse">
        <path d="M0,3 L9,6 L9,0 z" fill="#475569" />
      </marker>
      <marker id="arrow-right" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
        <path d="M0,0 L0,6 L9,3 z" fill="#475569" />
      </marker>
    </defs>
    <!-- Roads -->
    <rect x="0" y="120" width="600" height="80" fill="#f1f5f9" />
    <rect x="120" y="200" width="80" height="150" fill="#f1f5f9" />    
    <!-- Edge Lines -->
    <line x1="0" y1="120" x2="600" y2="120" stroke="#94a3b8" stroke-width="3" />
    <line x1="0" y1="200" x2="120" y2="200" stroke="#94a3b8" stroke-width="3" />
    <line x1="200" y1="200" x2="600" y2="200" stroke="#94a3b8" stroke-width="3" />
    <line x1="120" y1="200" x2="120" y2="350" stroke="#94a3b8" stroke-width="3" />
    <line x1="200" y1="200" x2="200" y2="350" stroke="#94a3b8" stroke-width="3" />    
    <!-- Center Lines -->
    <line x1="0" y1="160" x2="600" y2="160" stroke="#cbd5e1" stroke-width="2" stroke-dasharray="12,12" />
    <line x1="160" y1="200" x2="160" y2="350" stroke="#cbd5e1" stroke-width="2" stroke-dasharray="12,12" />
    <!-- Sight Triangle -->
    <polygon points="160,280 500,160 160,160" fill="#3b82f6" fill-opacity="0.1" stroke="#3b82f6" stroke-width="2" stroke-dasharray="6,4" />    
    <!-- Vehicles / Eye -->
    <rect x="148" y="270" width="24" height="40" fill="#ef4444" rx="4" />
    <circle cx="500" cy="160" r="8" fill="#ef4444" />    
    <text x="135" y="295" font-family="sans-serif" font-size="12" fill="#0f172a" text-anchor="end" font-weight="bold">Eye</text>
    <text x="145" y="225" font-family="sans-serif" font-size="12" fill="#334155" text-anchor="end">a</text>    
    <!-- Sight Triangle Dimension Lines -->
    <line x1="160" y1="310" x2="500" y2="310" stroke="#475569" stroke-width="1.5" marker-start="url(#arrow-left)" marker-end="url(#arrow-right)" />
    <text x="330" y="330" font-family="sans-serif" font-size="14" fill="#0f172a" text-anchor="middle" font-weight="bold">ISD (b)</text>
    <!-- Direction Arrows -->
    <path d="M 400,95 L 200,95" stroke="#475569" stroke-width="2" marker-end="url(#arrow-left)" />
    <text x="300" y="85" font-family="sans-serif" font-size="13" fill="#475569" text-anchor="middle">Major Road Traffic</text>    
    <path d="M 200,225 L 400,225" stroke="#475569" stroke-width="2" marker-end="url(#arrow-right)" />
    <text x="300" y="245" font-family="sans-serif" font-size="13" fill="#475569" text-anchor="middle">Major Road Traffic</text>    
    <!-- Labels -->
    <text x="60" y="280" font-family="sans-serif" font-size="14" fill="#475569" text-anchor="middle">Minor</text>
    <text x="60" y="298" font-family="sans-serif" font-size="14" fill="#475569" text-anchor="middle">Road</text>    
    <text x="310" y="200" font-family="sans-serif" font-size="14" fill="#2563eb" font-weight="bold" transform="rotate(-15, 310, 200)">Clear Sight Triangle</text>
  </svg>
</div>


### Sight Triangle Dimensions
*   **Minor Road Leg ($a$):** The distance from the edge of the major road travel lane to the driver's eye. The standard AASHTO design value is **$14.7\text{ ft}$** ($4.5\text{ m}$), although a minimum of **$15.0\text{ ft}$** is often recommended.
*   **Major Road Leg ($b$):** The required intersection sight distance ($ISD$).

---

## Governing Equation

The major road leg of the sight triangle is calculated as:

$$ISD = 1.47 V_{\text{major}} t_g$$

Where:
*   $ISD$ = intersection sight distance (ft)
*   $V_{\text{major}}$ = design speed of the major road (mph)
*   $t_g$ = time gap required for the minor road vehicle to complete the maneuver (seconds)

*Metric equivalent:*
$$ISD = 0.278 V_{\text{major}} t_g$$
Where $ISD$ is in meters and $V_{\text{major}}$ is in km/h.

---

## AASHTO Time Gaps ($t_g$) and Adjustments

The required time gap ($t_g$) depends on the intersection control case and the type of vehicle. The most common cases tested on the PE exam are:

### Case B: Stop Control on Minor Road
*   **Case B1: Left Turn from Minor Road (Most Critical B Case)**
    *   Base $t_g = 7.5\text{ s}$ for passenger cars.
    *   Base $t_g = 9.5\text{ s}$ for single-unit trucks.
    *   Base $t_g = 11.5\text{ s}$ for combination trucks.
*   **Case B2: Right Turn from Minor Road**
    *   Base $t_g = 6.5\text{ s}$ for passenger cars.
*   **Case B3: Crossing the Major Road**
    *   Base $t_g = 6.5\text{ s}$ for passenger cars.

### Adjustments to the Base Time Gap ($t_g$):
For Case B1 (Left Turn) and Case B2 (Right Turn), the base time gaps must be adjusted for grades and multilane cross-sections:
1.  **Grade Adjustment:** For minor road approach grades exceeding $3\%$, add **$0.2\text{ s}$ per percent grade** for left turns (and **$0.1\text{ s}$ per percent grade** for right turns). This accounts for slower vehicle acceleration on upgrades.
2.  **Multilane Adjustment:** The base time gap assumes a two-lane major highway (one lane in each direction). For multilane major roads:
    *   For **left turns**, add **$0.5\text{ s}$** for passenger cars (and **$0.7\text{ s}$** for trucks) for each additional lane to be crossed beyond the first two lanes. (A median is ignored if it is too narrow to store a vehicle; if it is wide enough to store a passenger car, the maneuver is split into two independent steps).
    *   For **right turns**, add **$0.5\text{ s}$** for passenger cars for each additional lane that is crossed to enter the departing lane.

---

## Worked Example

A stop-controlled minor road intersects a four-lane undivided major highway (two lanes in each direction). The design speed of the major highway is $50\text{ mph}$. The minor road approach has a $+5.0\%$ upgrade. A passenger car is stopped at the minor road, waiting to make a left turn.

Calculate:
1. The adjusted time gap ($t_g$) required for the passenger car.
2. The required major road leg of the sight triangle ($ISD$).
3. The dimensions of the departure sight triangle.

### Solution

**1. Calculate Adjusted Time Gap ($t_g$):**
*   Base $t_g$ for passenger car making a left turn (Case B1) = $7.5\text{ s}$.
*   *Multilane Adjustment:* The major road has 4 lanes and no median. A left-turning vehicle must cross two lanes of traffic from the left to enter the third lane (going right-to-left).
    *   Number of lanes crossed = $2$ lanes.
    *   Number of lanes beyond the base 2-lane roadway = $2 - 2 = 0$ lanes for the crossing portion, but wait! The vehicle must cross the two oncoming lanes and turn into the first lane of traffic going the other direction. Total lanes crossed/entered to complete the turn = 3 lanes.
    *   AASHTO specifically defines the multilane adjustment based on "each additional lane to be crossed beyond the design 2-lane case." For a left turn, the vehicle crosses all lanes carrying traffic from the left (which is 2 lanes) and enters the lane carrying traffic from the right. The base value of 7.5 seconds is for crossing 1 lane and turning into the second. For a 4-lane undivided road, the driver crosses 2 lanes of traffic from the left and turns into the inner lane from the right. Total lanes crossed = 2 lanes. Therefore, there is 1 additional lane crossed beyond the base case of crossing 1 lane.
    *   Multilane adjustment = $+0.5\text{ s} \times 1\text{ lane} = +0.5\text{ s}$.
*   *Grade Adjustment:* The grade of the minor road is $+5.0\%$ upgrade, which is $>3\%$.
    *   Grade adjustment = $+0.2\text{ s} \times 5.0\% = +1.0\text{ s}$.
*   *Total Adjusted Time Gap:*
    $$t_g = 7.5\text{ s} \text{ (base)} + 0.5\text{ s} \text{ (multilane)} + 1.0\text{ s} \text{ (grade)} = 9.0\text{ s}$$

**2. Calculate Major Road Leg ($ISD$):**
*   $V_{\text{major}} = 50\text{ mph}$
*   $t_g = 9.0\text{ s}$

$$ISD = 1.47 V_{\text{major}} t_g$$
$$ISD = 1.47 \times 50 \times 9.0 = 661.5\text{ ft} \approx 665\text{ ft}$$

**3. Sight Triangle Dimensions:**
*   **Minor Road Leg ($a$):** $14.7\text{ ft}$ from the edge of the major road travel lane.
*   **Major Road Leg ($b$):** $665\text{ ft}$ along the major road, looking to the left and right.

## References

*   *A Policy on Geometric Design of Highways and Streets* (AASHTO Green Book), 7th Edition, 2018, Section 9.5.
*   *NCEES PE Civil Reference Handbook*, Section 4.3.2.
