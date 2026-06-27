---
title: "Pedestrian Crossing Analysis"
weight: 101
---
# Pedestrian Crossing Analysis

Pedestrian crossing analysis evaluates the geometric design, signal timing, and safety treatments required for pedestrians to cross roadways safely. Key principles are governed by the Manual on Uniform Traffic Control Devices (MUTCD) and the AASHTO Guide for the Planning, Design, and Presentation of Pedestrian Facilities.

---

## Pedestrian Walking Speed and Signal Timing

Signal timing at intersections must provide adequate time for pedestrians to cross the street before conflicting vehicular movements receive a green indication.

### 1. Pedestrian Walking Speed ($V_{walk}$)
- **Standard Design Walking Speed (MUTCD Section 4E.06):** **3.5 ft/s** is the default speed used to calculate crossing times.
- **Reduced Walking Speed:** **3.0 ft/s** should be used at locations where older pedestrians, school children, or individuals with mobility impairments cross frequently, or where the ramp slopes are steep.

### 2. Pedestrian Clearance Time ($PCT$)
The pedestrian clearance time represents the duration of the flashing upraised hand (DONT WALK) interval. It allows a pedestrian who entered the crosswalk at the end of the WALK interval to reach the far side of the road or a pedestrian refuge island.

$$PCT = \frac{d}{V_{walk}}$$

Where:
- $PCT$ = Pedestrian clearance time (**seconds**)
- $d$ = Crossing distance (**feet**), measured from the curb or edge of pavement to the far side of the farthest travel lane.
- $V_{walk}$ = Pedestrian walking speed (**ft/s**; typically $3.5\text{ ft/s}$).

### 3. Total Pedestrian Walking Time ($t_{total}$)
The MUTCD also requires that the total pedestrian phase (WALK interval plus flashing clearance interval) be sufficient for a pedestrian to walk from the pedestrian detector (pushbutton) or a point 2 feet behind the curb face to the far side of the road:

$$t_{total} = t_{walk\_min} + \frac{d}{V_{walk}} \ge 7.0\text{ s} + \frac{d}{3.5\text{ ft/s}}$$

Where:
- $t_{walk\_min}$ = Minimum walk interval (typically **7.0 seconds** under MUTCD, though it can be reduced to 4.0 seconds in high-density areas with low volumes).

---

## Pedestrian Refuge Islands

A pedestrian refuge island is a median or island designed to provide a safe place for pedestrians to wait when crossing a multi-lane roadway.
- **Minimum Width:** The island must be a minimum of **6.0 feet** wide (in the direction of pedestrian travel) to accommodate a wheelchair, stroller, or bicyclist.
- **Two-Stage Crossing:** If a refuge island is $\ge 6.0\text{ ft}$ wide, the crossing can be timed as two separate stages. The pedestrian clearance interval is calculated independently for each half of the roadway rather than the entire width.

---

## Curb Extensions (Bulb-Outs)

Curb extensions extend the sidewalk into the parking lane at intersections.
- **Benefits:**
  - Reduces the pedestrian crossing distance ($d$), which decreases pedestrian exposure to traffic and reduces the required clearance interval ($PCT$).
  - Prevents cars from parking too close to the crosswalk (improving sight distance).
  - Promotes traffic calming by narrowing the perceived roadway.

---

## Worked Example: Pedestrian Crossing Signal Timing

A suburban highway is being widened to six lanes ($12\text{-foot}$ lane width). 
- The total crossing distance from curb-to-curb is $72\text{ feet}$.
- The intersection is signalized and has a pedestrian pushbutton located $5\text{ feet}$ behind the curb face on one side.
- A standard walking speed of $3.5\text{ ft/s}$ is assumed.
- The minimum walk interval ($t_{walk}$) is set to $7.0\text{ seconds}$.

**1. Calculate the required Pedestrian Clearance Time ($PCT$) in seconds.**
**2. Calculate the total required pedestrian phase length ($t_{total}$) from the pushbutton to the far curb.**
**3. If a $6\text{-foot}$ wide pedestrian refuge island is installed in the median, splitting the crossing into two equal stages, calculate the revised required $PCT$ for each stage.**

### Solution:

#### Part 1: Required Pedestrian Clearance Time ($PCT$)
Using $d = 72\text{ feet}$ and $V_{walk} = 3.5\text{ ft/s}$:
$$PCT = \frac{d}{V_{walk}} = \frac{72\text{ ft}}{3.5\text{ ft/s}} \approx 20.6\text{ seconds}$$
Round up to the nearest whole second: **21.0 seconds**.

#### Part 2: Total required pedestrian phase length ($t_{total}$)
The distance from the pushbutton to the far curb is $72\text{ ft} + 5\text{ ft} = 77\text{ feet}$.
Using the MUTCD check:
$$t_{total} = t_{walk} + \frac{d_{total}}{V_{walk}} = 7.0\text{ seconds} + \frac{77\text{ ft}}{3.5\text{ ft/s}} = 7.0 + 22.0 = 29.0\text{ seconds}$$

#### Part 3: Sizing with a refuge island
With a $6\text{-foot}$ refuge island, the total width of the lanes is $72 - 6 = 66\text{ feet}$. Each stage crossing distance is:
$$d_{stage} = \frac{66\text{ ft}}{2} = 33\text{ feet}$$
Calculate the revised $PCT_{stage}$:
$$PCT_{stage} = \frac{d_{stage}}{V_{walk}} = \frac{33\text{ ft}}{3.5\text{ ft/s}} \approx 9.4\text{ seconds}$$
Round up to the nearest tenth or whole second: **9.5 seconds** (or **10.0 seconds**).
*Benefit:* Setting the crossing to a two-stage signal reduces the required clearance interval per cycle, which improves vehicular capacity at the intersection.

---

## Technical Pitfalls
- **Pedestrian Walk Speed Choice:** Do not use $4.0\text{ ft/s}$ unless the problem explicitly tells you to do so (which might happen on older practice exams). The current MUTCD standard is $3.5\text{ ft/s}$.
- **Refuge Island Width:** A median must be at least **6.0 feet** wide to be considered a refuge. If the problem mentions a 4-foot or 5-foot median, you cannot treat the crossing as two separate stages; you must time the signal for the entire crossing distance.
- **Detector Offset:** When calculating the total pedestrian phase time ($t_{total}$), add the distance from the detector pushbutton to the curb if given.
