---
title: "Yellow and All-Red Clearance Intervals"
weight: 69
---
# Yellow and All-Red Clearance Intervals

The yellow change and all-red clearance intervals are critical safety timings at signalized intersections. Their primary purpose is to transition the right-of-way safely between conflicting phases. On the PE Civil Transportation exam, you must be prepared to calculate these intervals using the standard kinematic formulas found in the NCEES PE Civil Reference Handbook and the MUTCD.

---

## The Dilemma Zone Concept

The clearance interval is designed to eliminate the **dilemma zone**. 

A dilemma zone is a physical region on the approach to an intersection where a driver, at the onset of the yellow signal, can neither stop safely before the stop line nor clear the intersection before the signal turns red:
*   If the driver attempts to stop, they may overshoot the stop line or be rear-ended (because the remaining distance is less than the stopping sight distance).
*   If the driver attempts to proceed, they will enter the intersection during the red indication, risking an angle collision.

If the yellow change interval is too short, a dilemma zone is created. If the yellow interval is designed correctly, the dilemma zone is eliminated, creating an **option zone** where the driver has sufficient distance to either stop safely or clear the intersection legally.

---

## Governing Equations

The NCEES Reference Handbook uses the standard Institute of Transportation Engineers (ITE) formulas for yellow change and all-red clearance times.

### 1. Yellow Change Interval ($y$)
The yellow change interval alerts drivers that the green interval is ending and they should prepare to stop if safe to do so. The formula is based on stopping kinematics:

$$y = t + \frac{v}{2a + 2gG}$$

In US Customary units, substituting gravity $g = 32.2\text{ ft/s}^2$, the formula is:

$$y = t + \frac{v}{2a + 64.4G}$$

Where:
*   $y$ = Yellow change interval (seconds)
*   $t$ = Driver perception-reaction time (standard default is $1.0\text{ second}$)
*   $v$ = Approach speed (feet per second, $\text{ft/s}$). *Note: $v = V \times 1.467$, where $V$ is speed in mph.*
*   $a$ = Deceleration rate (standard default is $10\text{ ft/s}^2$)
*   $g$ = Acceleration due to gravity ($32.2\text{ ft/s}^2$)
*   $G$ = Grade of the approach (percent grade expressed as a decimal; e.g., $-3\%$ grade is $-0.03$, uphill grades are positive, downhill grades are negative)

### 2. All-Red Clearance Interval ($r$)
The all-red clearance interval displays a red indication to all approaches, allowing vehicles that entered the intersection at the end of the yellow interval to completely clear the conflict area before cross-traffic receives a green light.

$$r = \frac{W + L}{v}$$

Where:
*   $r$ = All-red clearance interval (seconds)
*   $W$ = Intersection width (feet), measured from the near-side stop line to the far edge of the conflicting traffic lane
*   $L$ = Length of the design vehicle (standard default is $20\text{ feet}$)
*   $v$ = Approach speed (feet per second, $\text{ft/s}$)

### Total Clearance Interval
The total clearance interval ($Y + R_c$) is simply:
$$\text{Total Clearance} = y + r$$

---

## Common Traps to Avoid on the PE Exam

1.  **Speed Unit Conversion:** The speed $V$ is almost always given in miles per hour ($\text{mph}$). You must convert it to feet per second ($\text{ft/s}$) by multiplying by $1.467$ before plugging it into the yellow and all-red formulas.
2.  **Grade Sign Conviction:** A downhill approach has a negative grade. Substituting a negative grade reduces the denominator in the yellow interval formula, which mathematically increases the required yellow time. This matches physical reality (it takes longer to stop on a downhill slope).
3.  **Grade Percentage Form:** The grade $G$ must be in decimal form. For a $-4\%$ grade, $G = -0.04$, not $-4.0$.
4.  **Width Definition:** Ensure $W$ represents the full distance from the stop line to the far side of the conflicting lane. Read the question carefully; sometimes they give the width of the cross street, and sometimes they give the distance to the far-side crosswalk.

---

## Worked Example: Clearance Interval Design

### Problem Statement
A signalized intersection approach has the following characteristics:
*   Approach speed: $40\text{ mph}$
*   Approach grade: $-4\%$ (downhill)
*   Width of intersection ($W$): $75\text{ feet}$
*   Design vehicle length ($L$): $20\text{ feet}$
*   Perception-reaction time ($t$): $1.0\text{ s}$
*   Deceleration rate ($a$): $10\text{ ft/s}^2$

Calculate the required yellow change interval ($y$), the all-red clearance interval ($r$), and the total clearance interval. Round the final values to the nearest tenth of a second.

### Step-by-Step Solution

#### Step 1: Convert Approach Speed to $\text{ft/s}$
$$v = 40\text{ mph} \times 1.467\frac{\text{ft/s}}{\text{mph}} = 58.68\text{ ft/s}$$

#### Step 2: Calculate Yellow Change Interval ($y$)
Using the approach grade $G = -0.04$ (negative because it is downhill):
$$y = t + \frac{v}{2a + 64.4G}$$
$$y = 1.0 + \frac{58.68}{2(10) + 64.4(-0.04)}$$
$$y = 1.0 + \frac{58.68}{20 - 2.576}$$
$$y = 1.0 + \frac{58.68}{17.424}$$
$$y = 1.0 + 3.368\text{ s} = 4.368\text{ s}$$

Rounding to the nearest tenth of a second gives:
$$y \approx 4.4\text{ s}$$

#### Step 3: Calculate All-Red Clearance Interval ($r$)
Using the intersection width $W = 75\text{ ft}$ and vehicle length $L = 20\text{ ft}$:
$$r = \frac{W + L}{v}$$
$$r = \frac{75\text{ ft} + 20\text{ ft}}{58.68\text{ ft/s}}$$
$$r = \frac{95}{58.68} = 1.619\text{ s}$$

Rounding to the nearest tenth of a second gives:
$$r \approx 1.6\text{ s}$$

#### Step 4: Calculate Total Clearance Interval
$$\text{Total Clearance} = y + r = 4.4\text{ s} + 1.6\text{ s} = 6.0\text{ s}$$

*(Note: Adding the rounded values or rounding the exact sum $4.368 + 1.619 = 5.987\text{ s}$ both result in $6.0\text{ s}$).*
