---
title: "Mixed Calculation Set: Traffic and Signals"
weight: 109
---
# Mixed Calculation Set: Traffic and Signals

This calculation set covers core traffic engineering and signal design problems typical of the PE Civil Transportation exam.

---

## Problem 1: Greenshields Traffic Flow Parameters

A freeway segment's traffic stream is modeled using the Greenshields linear speed-density relationship:

$$u = 65.0 - 0.45 \cdot k$$

Where:
- $u$ = Space-mean speed (**mph**)
- $k$ = Density (**vehicles per mile, veh/mi**)

**1. Determine the free-flow speed ($u_f$) and the jam density ($k_j$).**
**2. Calculate the maximum flow rate (capacity, $q_{max}$) of the segment in vehicles per hour (veh/h).**
**3. Find the speed ($u_{cap}$) and density ($k_{cap}$) at capacity.**

### Solution:

#### Step 1: Find Free-Flow Speed ($u_f$) and Jam Density ($k_j$)
The general Greenshields equation is:
$$u = u_f \left( 1 - \frac{k}{k_j} \right) = u_f - \left( \frac{u_f}{k_j} \right) k$$

By matching coefficients with the given equation $u = 65.0 - 0.45 \cdot k$:
- **Free-flow speed ($u_f$):** Occurs when density $k = 0$.
  $$u_f = 65.0\text{ mph}$$
- **Jam density ($k_j$):** Occurs when speed $u = 0$.
  $$0 = 65.0 - 0.45 \cdot k_j \implies k_j = \frac{65.0}{0.45} \approx 144.44\text{ veh/mi}$$

#### Step 2: Calculate Maximum Flow Rate ($q_{max}$)
Under Greenshields, maximum flow (capacity) occurs when the speed is exactly half of the free-flow speed and the density is exactly half of the jam density:
- $u_{cap} = \frac{u_f}{2} = \frac{65.0}{2} = 32.5\text{ mph}$
- $k_{cap} = \frac{k_j}{2} = \frac{144.44}{2} = 72.22\text{ veh/mi}$

Calculate $q_{max}$ using $q = u \cdot k$:
$$q_{max} = u_{cap} \cdot k_{cap} = 32.5\text{ mph} \cdot 72.22\text{ veh/mi} \approx 2,347\text{ veh/h/lane}$$

Alternatively, use the shortcut capacity formula:
$$q_{max} = \frac{u_f \cdot k_j}{4} = \frac{65.0 \cdot 144.44}{4} = \frac{9,388.6}{4} \approx 2,347\text{ veh/h/lane}$$

---

## Problem 2: Yellow Change and Red Clearance Intervals

An engineer is calculating the traffic signal clearance intervals for an approach with a design speed of $45\text{ mph}$ on a $3.0\%$ downgrade ($G = -0.03\text{ ft/ft}$).
- The intersection width is $w = 60\text{ feet}$.
- The length of the design vehicle is $L = 20\text{ feet}$.
- Perception-reaction time $t = 1.0\text{ second}$.
- Deceleration rate $a = 10.0\text{ ft/s}^2$.
- Acceleration of gravity $g = 32.2\text{ ft/s}^2$.

**1. Calculate the required yellow change interval ($Y$) in seconds.**
**2. Calculate the required red clearance interval ($R_c$) in seconds.**

### Solution:

#### Step 1: Convert units
- Speed $V = 45\text{ mph} \cdot 1.467\text{ (ft/s)/mph} = 66.0\text{ ft/s}$
- Grade $G = -0.03\text{ ft/ft}$

#### Step 2: Calculate the Yellow Change Interval ($Y$)
Using the standard ITE formula (found in the NCEES handbook):
$$Y = t + \frac{V}{2a + 2gG}$$
$$Y = 1.0\text{ s} + \frac{66.0\text{ ft/s}}{2 \cdot 10.0\text{ ft/s}^2 + 2 \cdot 32.2\text{ ft/s}^2 \cdot (-0.03)}$$
$$Y = 1.0 + \frac{66.0}{20.0 - 1.932} = 1.0 + \frac{66.0}{18.068}$$
$$Y = 1.0 + 3.65 = 4.65\text{ seconds}$$
Round up to the nearest tenth of a second: **4.7 seconds**.

#### Step 3: Calculate the Red Clearance Interval ($R_c$)
Using the standard NCEES formula:
$$R_c = \frac{w + L}{V}$$
$$R_c = \frac{60\text{ ft} + 20\text{ ft}}{66.0\text{ ft/s}} = \frac{80.0}{66.0} \approx 1.21\text{ seconds}$$
Round up to the nearest tenth of a second: **1.3 seconds**.

---

## Problem 3: Webster's Optimum Cycle Length

An intersection has four phases. The critical lane group volume-to-saturation flow ratios ($y_i = v_i / s_i$) for each phase are:
- Phase 1: $y_1 = 0.22$
- Phase 2: $y_2 = 0.18$
- Phase 3: $y_3 = 0.15$
- Phase 4: $y_4 = 0.12$

The total lost time per phase is $t_L = 4.0\text{ seconds}$.

**Calculate the optimum cycle length ($C_{opt}$) using Webster's equation.**

### Solution:
1. **Calculate the sum of critical ratios ($Y_{sum}$):**
   $$Y_{sum} = y_1 + y_2 + y_3 + y_4 = 0.22 + 0.18 + 0.15 + 0.12 = 0.67$$

2. **Calculate the total lost time per cycle ($L$):**
   Since there are four phases ($N = 4$) and lost time per phase $t_L = 4.0\text{ seconds}$:
   $$L = N \cdot t_L = 4 \cdot 4.0\text{ s} = 16.0\text{ seconds}$$

3. **Apply Webster's Optimum Cycle Length Equation:**
   $$C_{opt} = \frac{1.5 \cdot L + 5}{1 - Y_{sum}}$$
   $$C_{opt} = \frac{1.5 \cdot 16.0 + 5}{1 - 0.67}$$
   $$C_{opt} = \frac{24.0 + 5}{0.33} = \frac{29.0}{0.33} \approx 87.9\text{ seconds}$$

*Result:* The optimum cycle length is **88 seconds** (or rounded to 90 seconds for standard timing plans).

---

## Technical Pitfalls
- **Speed Units in ITE Yellow Formula:** Always convert speed to **ft/s** before entering it into the yellow/red clearance equations. The factor $1.47$ is sometimes integrated, but doing the conversion first prevents errors.
- **Grade Sign in Yellow Interval:** Ensure you subtract the grade factor for a downgrade ($2gG$, where $G = -0.03$), which increases the yellow time.
- **Lost Time Definition:** Pay close attention to whether the problem gives the *total lost time per cycle* ($L$) directly or the *lost time per phase* ($t_L$). If it is per phase, you must multiply by the number of phases to get $L$.
