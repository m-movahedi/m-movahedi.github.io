---
title: "Stopping Sight Distance"
weight: 54
date : "2026-05-04"
draft : false
type : "post"
---
# Stopping Sight Distance

Stopping Sight Distance (SSD) is the minimum distance required for a driver traveling at a given speed to see a hazard on the roadway, react, and bring the vehicle to a complete stop before colliding with the object. SSD is a fundamental control for horizontal alignment, vertical alignment, and intersection design.

## Components of Stopping Sight Distance

SSD is composed of two distinct components:
1.  **Perception-Reaction Distance:** The distance traveled from the instant the driver sees a hazard to the instant they apply the brakes.
2.  **Braking Distance:** The distance traveled while the vehicle is decelerating to a stop under braking.

```
|<-------------------------- Stopping Sight Distance (SSD) -------------------------->|
|                                                                                     |
|<--- Perception-Reaction Distance --->|<---------------- Braking Distance ---------->|
| (Vehicle travels at design speed V)  | (Vehicle decelerates under braking)          |
*--------------------------------------*----------------------------------------------*
Driver sees hazard                 Brakes applied                                  Stop
```

---

## Governing Equations

### 1. USCS (English) Units
The general formula for SSD in USCS units is:

$$SSD = 1.47 V t + \frac{V^2}{30 \left( \frac{a}{g} \pm G \right)}$$

Where:
*   $SSD$ = stopping sight distance (ft)
*   $V$ = design speed or operating speed (mph)
*   $t$ = perception-reaction time (standard design value is $2.5\text{ s}$)
*   $a$ = deceleration rate (standard design value is $11.2\text{ ft/s}^2$)
*   $g$ = acceleration due to gravity ($32.2\text{ ft/s}^2$)
*   $G$ = roadway grade expressed as a decimal (e.g., $4\% = 0.04$). Use $+$ for upgrades (assisting braking) and $-$ for downgrades (hindering braking).

Using the standard design values ($t = 2.5\text{ s}$ and $a/g = 11.2/32.2 \approx 0.35$), the equation simplifies to:

$$SSD = 3.675 V + \frac{V^2}{30 (0.35 \pm G)}$$

For level roadways ($G = 0$):

$$SSD = 3.675 V + \frac{V^2}{10.5}$$

### 2. Metric (SI) Units
The general formula for SSD in metric units is:

$$SSD = 0.278 V t + \frac{V^2}{254 \left( \frac{a}{g} \pm G \right)}$$

Where:
*   $SSD$ = stopping sight distance (m)
*   $V$ = design speed or operating speed (km/h)
*   $t$ = perception-reaction time (standard design value is $2.5\text{ s}$)
*   $a$ = deceleration rate (standard design value is $3.4\text{ m/s}^2$)
*   $g$ = acceleration due to gravity ($9.81\text{ m/s}^2$)
*   $G$ = roadway grade (decimal)

Using standard design values ($t = 2.5\text{ s}$ and $a/g = 3.4/9.81 \approx 0.35$), the equation simplifies to:

$$SSD = 0.694 V + \frac{V^2}{254 (0.35 \pm G)}$$

For level roadways ($G = 0$):

$$SSD = 0.694 V + \frac{V^2}{88.9}$$

---

## Design Standards and AASHTO Values

The AASHTO Green Book defines standard SSD values for flat terrain based on design speed. On the PE exam, if you are given a design speed on flat terrain, you can either compute the SSD using the level equation or lookup the rounded design value from the AASHTO tables (reproduced in the NCEES Reference Handbook):

| Design Speed (mph) | Computed SSD (ft) | Rounded Design SSD (ft) |
| :---: | :---: | :---: |
| **15** | 79.7 | 80 |
| **20** | 111.9 | 115 |
| **25** | 151.9 | 155 |
| **30** | 196.7 | 200 |
| **35** | 246.2 | 250 |
| **40** | 300.6 | 305 |
| **45** | 359.8 | 360 |
| **50** | 423.8 | 425 |
| **55** | 492.5 | 495 |
| **60** | 566.0 | 570 |
| **65** | 644.4 | 645 |
| **70** | 727.6 | 730 |
| **75** | 815.6 | 820 |
| **80** | 908.4 | 910 |

*Note: For two-way undivided roads, design is controlled by the direction with the steepest downgrade, as it yields the longest (worst-case) stopping distance.*

---

## Worked Example

A highway has a design speed of $65\text{ mph}$. A critical vertical curve has a segment on a $-5.0\%$ downgrade.

Calculate:
1. The stopping sight distance required on a level segment of the highway.
2. The stopping sight distance required on the $-5.0\%$ downgrade segment.
3. The percent increase in stopping sight distance caused by the downgrade.

### Solution

**1. Calculate Level SSD ($G = 0$):**
*   $V = 65\text{ mph}$
*   $t = 2.5\text{ s}$
*   $a/g = 0.35$

$$SSD_{\text{level}} = 3.675 V + \frac{V^2}{10.5}$$
$$SSD_{\text{level}} = 3.675(65) + \frac{65^2}{10.5} = 238.875 + \frac{4225}{10.5} = 238.875 + 402.381 = 641.26\text{ ft}$$

*Note: The AASHTO design table rounds this computed value to $645\text{ ft}$. For exam problems, pay attention to whether the question asks for the "computed" value or "AASHTO design" value. We will use the exact computed value of $641.26\text{ ft}$ for comparisons.*

**2. Calculate SSD on a $-5.0\%$ Downgrade ($G = -0.05$):**
*   Because it is a downgrade, we subtract $G$:

$$SSD_{\text{grade}} = 3.675 V + \frac{V^2}{30 (0.35 - G)}$$
$$SSD_{\text{grade}} = 3.675(65) + \frac{65^2}{30 (0.35 - 0.05)}$$
$$SSD_{\text{grade}} = 238.875 + \frac{4225}{30(0.30)} = 238.875 + \frac{4225}{9} = 238.875 + 469.444 = 708.32\text{ ft}$$

**3. Calculate Percent Increase:**
$$\% \text{ Increase} = \frac{708.32 - 641.26}{641.26} \times 100\% = \frac{67.06}{641.26} \times 100\% \approx 10.46\%$$

The downgrade increases the required stopping distance by $67\text{ ft}$ (or about $10.5\%$), showing why designing alignment for the steepest downgrade is safety-critical.

## References

*   *A Policy on Geometric Design of Highways and Streets* (AASHTO Green Book), 7th Edition, 2018, Section 3.1.2.
*   *NCEES PE Civil Reference Handbook*, Section 4.3.1.
