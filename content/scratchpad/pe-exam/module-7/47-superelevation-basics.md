---
title: "Superelevation Basics"
weight: 47
date : "2026-05-04"
draft : false
type : "post"
---
# Superelevation Basics

When a vehicle travels along a horizontal curve, it experiences a centrifugal force that acts to push it outward, away from the center of the curve. To counter this lateral force and ensure passenger comfort and vehicle stability, the roadway cross-section is tilted or "banked." This banking is called **superelevation ($e$)**.

For the PE Civil Transportation exam, the physics, fundamental equations, side friction relationships, and minimum radius calculations are governed by the **NCEES PE Civil Reference Handbook** and **AASHTO's Green Book (GDHS)**, Chapter 3.

---

## The Physics of Superelevation

The forces acting on a vehicle traversing a horizontal curve include gravity, lateral tire friction, and centrifugal force. Balancing these forces yields the fundamental superelevation equation:

$$e + f = \frac{V^2}{15 R}$$

Where:
*   $e$ = Superelevation rate (expressed as a decimal, e.g., $0.06$ for a $6\%$ cross slope).
*   $f$ = Side friction factor (dimensionless, representing the lateral friction coefficient between the tires and pavement).
*   $V$ = Design speed (mph).
*   $R$ = Radius of the horizontal curve (ft).
*   **15** = Conversion constant that reconciles gravity ($g = 32.2\text{ ft/s}^2$) and units (converting mph to ft/s).

---

## Maximum Superelevation Rates ($e_{max}$)

The maximum rate of superelevation ($e_{max}$) is restricted by environmental and operational factors:
1.  **Climate and Terrain:** In areas subject to ice and snow, $e_{max}$ is typically limited to **6% to 8%** to prevent slow-moving vehicles from sliding down the banked surface toward the inside of the curve. In southern climates, rates up to **10% to 12%** are acceptable.
2.  **Urban vs. Rural Context:** 
    *   **Urban Streets:** Limited to **4% to 6%** because low speeds, frequent stop-and-go traffic, intersections, and driveways make steep banking hazardous and uncomfortable.
    *   **Rural Highways and Freeways:** Typically designed with $e_{max}$ of **8% to 10%**.

---

## Side Friction Factors ($f_{max}$)

The maximum comfortable side friction factor ($f_{max}$) represents the threshold at which passengers feel a distinct outward pull and begin to feel uncomfortable. It is not the physical limit of tire-pavement adhesion.
*   **Speed Dependency:** $f_{max}$ decreases as design speed increases. This is because drivers are more sensitive to lateral acceleration at higher speeds.
*   **Typical $f_{max}$ Values (AASHTO Green Book):**
    *   $30\text{ mph}$: $f_{max} = 0.16$
    *   $40\text{ mph}$: $f_{max} = 0.15$
    *   $50\text{ mph}$: $f_{max} = 0.14$
    *   $60\text{ mph}$: $f_{max} = 0.12$
    *   $70\text{ mph}$: $f_{max} = 0.10$
    *   $80\text{ mph}$: $f_{max} = 0.08$

---

## Minimum Radius of Curve ($R_{min}$)

The minimum radius of a curve ($R_{min}$) represents the sharpest curve that can be safely traversed at a given design speed, using the maximum allowable superelevation ($e_{max}$) and the maximum side friction factor ($f_{max}$):

$$R_{min} = \frac{V^2}{15(e_{max} + f_{max})}$$

---

## Worked Example: Minimum Radius and Friction Demand

### Problem Statement
A new rural highway segment is being designed. The design parameters are as follows:
*   Design Speed ($V$): $65\text{ mph}$
*   Maximum allowable superelevation ($e_{max}$): $8.0\%$ ($0.08$)
*   Maximum side friction factor ($f_{max}$) at $65\text{ mph}$: $0.11$

1.  Calculate the minimum allowable radius ($R_{min}$) for the horizontal curve.
2.  If the designer uses a radius of $R = 2,200\text{ ft}$ for a curve on this highway, and the design superelevation rate ($e_d$) is set to $5.4\%$ ($0.054$), calculate the actual side friction demand ($f$) felt by a vehicle traveling at $65\text{ mph}$. Verify if it is within comfortable limits.

### Solution
1.  **Calculate the Minimum Radius ($R_{min}$):**
    Use the minimum radius formula:
    $$R_{min} = \frac{V^2}{15(e_{max} + f_{max})}$$
    $$R_{min} = \frac{65^2}{15(0.08 + 0.11)} = \frac{4225}{15(0.19)}$$
    $$R_{min} = \frac{4225}{2.85} = 1482.46\text{ ft}$$
    *Rounding up for design:* **$1,485\text{ ft}$** (or the exact math value of **$1,482.5\text{ ft}$** for exam selection).

2.  **Calculate the Side Friction Demand ($f$):**
    Use the fundamental superelevation equation solved for $f$:
    $$f = \frac{V^2}{15 R} - e$$
    *Substitute the given values:*
    $$f = \frac{65^2}{15(2200)} - 0.054$$
    $$f = \frac{4225}{33000} - 0.054$$
    $$f = 0.12803 - 0.054 = 0.074$$
    *Verify with Comfort Limit:* The friction demand is $0.074$. The maximum comfortable friction factor at $65\text{ mph}$ is $0.11$. Since $0.074 \le 0.11$, the lateral friction is well within the comfortable range for drivers.

### Answer
1.  Minimum curve radius ($R_{min}$): **1,482.5 ft**
2.  Actual side friction demand ($f$): **0.074** (satisfactory).

---

## Crucial Exam Tips

*   **Decimal vs. Percent Form:** Always convert superelevation percentages to decimals before calculating. For example, a superelevation of $6\%$ must be entered as $0.06$, not $6$. Entering $6$ will throw off your answer by a factor of 100.
*   **The Comfort vs. Limit Trap:** Do not assume that every curve is designed to maximize friction. In practice, designers use AASHTO Tables 3-7 to 3-12 to lookup the *design* superelevation rate ($e_d$) for a given radius, which distributes the centrifugal force such that the friction demand is much lower than $f_{max}$. Only use $f_{max}$ when calculating the limiting condition ($R_{min}$).
*   **Friction Sign Conventions:** If a vehicle is traveling *below* the design speed on a heavily banked curve, the friction force can actually act *upward* along the slope to prevent the vehicle from sliding down. The equation is self-correcting: if you calculate a negative $f$, it simply means friction is acting to prevent the vehicle from sliding down the slope.
