---
title: "Units and Dimensional Checks"
weight: 4
date : "2026-05-04"
draft : false
type : "post"
---
# Units and Dimensional Checks

If there is one absolute truth about the PE Civil Transportation exam, it is this: **Unit errors will sink your score.** 

Transportation engineering is heavily reliant on empirical formulas (formulas derived from observation rather than pure physics). Because of this, equations frequently mix units—taking a speed in miles per hour (mph) and a time in seconds (s) to produce a distance in feet (ft). 

Mastering unit conversions and using dimensional checks is the easiest way to prevent unforced errors.

---

## The "Target Unit First" Method

Before you write down a single number or look up a single formula, read the very last sentence of the problem statement and write down the **target unit**.

> *Example Problem:* "What is the required stopping sight distance for a vehicle traveling at 55 mph on a 3% downgrade, given a perception-reaction time of 2.5 seconds?"

1. **Identify the Target:** The problem asks for "distance." Unless specified otherwise, sight distance in US Customary units is measured in **feet (ft)**.
2. **Write it Down:** On your scratchpad, write `[Target: ft]` and draw a box around it.
3. **Align the Givens:** Now look at your givens: speed is in `mph`, time is in `s`. You instantly know a conversion factor will be required to get from miles and hours to feet and seconds.

## The Most Critical Transportation Conversions

You should have these conversions memorized so thoroughly that you don't even need to think about them:

- **Speed:** $1 \text{ mph} = 1.47 \text{ ft/sec}$  
  *(Technically it is $1.4667...$, but $1.47$ is standard across AASHTO and the PE exam. When you see $1.47$ in a formula, know that it is simply a unit converter turning $V$ from mph into fps).*
- **Distance:** $1 \text{ mile} = 5,280 \text{ feet}$
- **Time:** $1 \text{ hour} = 3,600 \text{ seconds}$
- **Area:** $1 \text{ acre} = 43,560 \text{ square feet}$
- **Volume:** $1 \text{ cubic yard} (CY) = 27 \text{ cubic feet} (CF)$

---

## The Trap of Empirical Formulas

In pure physics, if you have an equation like $F = ma$, the units on the left must perfectly balance the units on the right. 

In Transportation, **empirical formulas** do not follow this rule. They are built assuming you input specific units. 

### Example: AASHTO Minimum Radius Formula
$$ R = \frac{V^2}{15(0.01e + f)} $$
Where:
- $R$ = radius in **feet**
- $V$ = speed in **mph**
- $e$ = superelevation in percent
- $f$ = side friction factor

If you plug $V$ in as feet per second (fps), the equation will output garbage. The constant $15$ in the denominator actually contains the built-in conversion factors to resolve the mismatch between mph and feet. 

**How to survive empirical formulas:** Whenever you find a formula in the HCM, AASHTO, or the Reference Handbook, *read the variable definitions below it*. Do not assume $V$ is always mph. Sometimes the standard defines $v$ (lowercase) as fps and $V$ (uppercase) as mph. 

---

## Dimensional Analysis (The Built-In Checker)

If you are using a standard mathematical formula (not an empirical one), carrying your units through the calculation is a foolproof way to catch algebraic mistakes.

**Example: Flow Rate**
You are given a density ($k$) of $40 \text{ vehicles/mile}$ and a speed ($u$) of $50 \text{ mph}$. What is the flow ($q$) in $\text{vehicles/hour}$?

1. Formula: $q = u \times k$
2. Plug in with units: $q = \left( 50 \frac{\text{miles}}{\text{hour}} \right) \times \left( 40 \frac{\text{vehicles}}{\text{mile}} \right)$
3. Cancel the units: The "miles" in the numerator and denominator cancel out.
4. Result: $2000 \frac{\text{vehicles}}{\text{hour}}$. 

Because the resulting unit ($\text{veh/hr}$) matches your target unit, you can be highly confident your algebra is correct. If your dimensional check resulted in $\text{vehicles} \cdot \text{hours} / \text{miles}^2$, you immediately know you multiplied instead of dividing somewhere in your setup.

## Practice Habit
For the next 10 practice problems you solve, do not write down a single number on your scratch paper without writing its unit right next to it. It takes an extra 0.5 seconds per line and will save you from failing by a single point.
