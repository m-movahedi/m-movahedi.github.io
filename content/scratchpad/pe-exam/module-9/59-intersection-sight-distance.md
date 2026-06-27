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

```
                            Major Road Traffic
                          <-------------------
     ========================\========================
                              \  Clear Sight
                               \   Triangle
      Minor                      \
      Road                        \
                                   \
        |                           \
        |         dc                 \
      [Eye]---------------------------*               
     =================================================
                            ISD (b)
                       Major Road Traffic 
                          ------------------->
```

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
