---
title: "Pedestrian Signal Timing"
weight: 70
---
# Pedestrian Signal Timing

Pedestrian safety is a key constraint in traffic signal design. When pedestrians are present at an intersection, the signal timing must provide sufficient green and clearance time for a pedestrian to react, step off the curb, and completely cross the roadway before conflicting traffic is released. 

On the PE Civil Transportation exam, you will need to calculate minimum green times and pedestrian clearance intervals based on crossing distance, pedestrian walking speed, and vehicle clearance times.

---

## Pedestrian Timing Intervals

A pedestrian phase consists of three main intervals:
1.  **Walk Interval ($Walk$ or $W$):** The time during which the walking person symbol is displayed. This allows pedestrians to react to the signal and begin crossing. The MUTCD specifies a standard minimum Walk interval of **$7.0\text{ seconds}$**, which can be reduced to **$4.0\text{ seconds}$** under specific conditions (e.g., high pedestrian volume or short cycle lengths with pedestrian actuation).
2.  **Pedestrian Clearance Time ($t_{pc}$):** The time required for a pedestrian to safely walk from the curb to the opposite side of the roadway or to a pedestrian refuge median.
3.  **Pedestrian Change Interval / Flashing Don't Walk ($FDW$):** The interval during which the flashing orange upraised hand is displayed. Pedestrians should not start crossing during this interval, but those already in the crosswalk can safely finish crossing.

---

## Pedestrian Walking Speed

The pedestrian walking speed ($S_p$) determines the rate of travel across the crosswalk:
*   **MUTCD Standard Speed:** **$3.5\text{ ft/s}$** is the standard design speed used for calculating pedestrian clearance times.
*   **Reduced Speed:** **$3.0\text{ ft/s}$** is used if there is a high volume of older pedestrians, school children, or individuals with mobility impairments.
*   **Older Standard:** Older literature and some legacy exam questions may reference **$4.0\text{ ft/s}$**. 

*Exam Tip: On the PE exam, always check the problem statement for a specified walking speed. If no speed is given, use the standard $3.5\text{ ft/s}$ in accordance with the current MUTCD.*

---

## Calculations and Formulas

The NCEES PE Civil Reference Handbook provides the formula for the minimum green time ($G_{min}$) required for a vehicle phase that runs concurrently with a pedestrian phase. 

### 1. Pedestrian Clearance Time ($t_{pc}$)
The time required to walk the crossing distance ($D$) is:
$$t_{pc} = \frac{D}{S_p}$$

Where:
*   $t_{pc}$ = Pedestrian clearance time (seconds)
*   $D$ = Crossing distance (feet), measured from the near curb to the far edge of the travel lane (or to a median refuge)
*   $S_p$ = Pedestrian walking speed (feet per second, e.g., $3.5\text{ ft/s}$)

### 2. Minimum Vehicle Green Time ($G_{min}$)
The total time needed for a pedestrian to cross ($Walk + t_{pc}$) can overlap with the vehicle's yellow change ($Y$) and all-red clearance ($R_c$) intervals. Therefore, the minimum displayed green time for the vehicle phase ($G_{min}$) is:

$$G_{min} = Walk + t_{pc} - Y - R_c$$

Substituting the pedestrian clearance time equation:

$$G_{min} = Walk + \frac{D}{S_p} - Y - R_c$$

Where:
*   $G_{min}$ = Minimum vehicle green time (seconds)
*   $Walk$ = Walk interval (seconds; minimum of $7.0\text{ s}$ unless specified otherwise)
*   $Y$ = Displayed vehicle yellow change interval (seconds)
*   $R_c$ = Displayed vehicle all-red clearance interval (seconds)

---

## Medians and Pedestrian Refuges

If a median is present in the crosswalk, its width determines how the crossing is timed:
*   **Width $< 6.0\text{ feet}$:** The median cannot act as a pedestrian refuge. The crossing distance $D$ must cover the entire curb-to-curb width of the intersection.
*   **Width $\ge 6.0\text{ feet}$:** The median is classified as a pedestrian refuge. If the median contains pedestrian detectors (pushbuttons), the crossing can be timed in two stages (the pedestrian crosses one side, waits in the median during the next cycle, and crosses the second side).

---

## Worked Example: Minimum Green Time Calculation

### Problem Statement
A major-street crossing at a signalized intersection has a curb-to-curb crossing width of $56\text{ feet}$. The street has a flat grade and a $4.0\text{-foot}$ wide median without pedestrian pushbuttons. The concurrent vehicle phase has a yellow change interval of $4.5\text{ seconds}$ and an all-red clearance interval of $1.5\text{ seconds}$. 

Assuming a standard walk interval of $7.0\text{ seconds}$ and a pedestrian walking speed of $3.5\text{ ft/s}$:
1.  Determine the crossing distance ($D$) that must be used for timing calculations.
2.  Calculate the required pedestrian clearance time ($t_{pc}$).
3.  Calculate the minimum vehicle green time ($G_{min}$) that must be programmed for this phase.

### Step-by-Step Solution

#### Step 1: Determine the Crossing Distance ($D$)
The median is $4.0\text{ feet}$ wide. Because this is less than the $6.0\text{-foot}$ minimum width required for a pedestrian refuge, it cannot be used for staged crossing. The pedestrian must cross the entire width in a single phase. 
$$D = 56\text{ feet}$$

#### Step 2: Calculate Pedestrian Clearance Time ($t_{pc}$)
Using the walking speed $S_p = 3.5\text{ ft/s}$:
$$t_{pc} = \frac{D}{S_p} = \frac{56\text{ ft}}{3.5\text{ ft/s}} = 16.0\text{ seconds}$$

#### Step 3: Calculate Minimum Vehicle Green Time ($G_{min}$)
Apply the NCEES formula:
$$G_{min} = Walk + t_{pc} - Y - R_c$$
$$G_{min} = 7.0\text{ s} + 16.0\text{ s} - 4.5\text{ s} - 1.5\text{ s}$$
$$G_{min} = 23.0\text{ s} - 6.0\text{ s} = 17.0\text{ seconds}$$

Thus, the signal controller must be programmed with a minimum green time of **$17.0\text{ seconds}$** for the concurrent vehicle phase.

*Exam Tip: If the vehicle demand only requires a green of, say, $10\text{ seconds}$, but the phase has a concurrent pedestrian movement, the green must be extended to $17.0\text{ seconds}$ (or pedestrian pushbuttons must be installed to activate the $17.0\text{-second}$ green only when a pedestrian is present).*
