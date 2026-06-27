---
title: "Hydrographs and Detention"
weight: 93
date : "2026-05-04"
draft : false
type : "post"
---
# Hydrographs and Detention

A hydrograph represents flow rate ($Q$) over time ($t$) at a specific point in a watershed. While peak flow methods (like the Rational Method) are sufficient for sizing pipes and channels, detention basin design requires an understanding of how flow rate changes over the entire duration of a storm.

---

## SCS Curve Number Method for Runoff Depth

To construct a runoff hydrograph, we must first determine the depth of excess rainfall (direct runoff) using the NRCS (SCS) Curve Number method.

### Governing Equations:
$$Q = \frac{(P - I_a)^2}{P - I_a + S}$$

Using the standard assumption that initial abstraction $I_a = 0.2 \cdot S$:

$$Q = \frac{(P - 0.2S)^2}{P + 0.8S}$$

Where:
- $Q$ = Depth of direct runoff (**inches**)
- $P$ = Depth of total rainfall (**inches**)
- $S$ = Potential maximum retention after runoff begins (**inches**)
- $I_a$ = Initial abstraction (**inches**), representing losses from ponding, interception, and initial infiltration.

The potential maximum retention $S$ is calculated from the Curve Number ($CN$):

$$S = \frac{1000}{CN} - 10$$

*Note:* Direct runoff only occurs when $P > 0.2S$. If $P \le 0.2S$, then $Q = 0$.

---

## Unit Hydrographs

A **Unit Hydrograph (UH)** is defined as the direct runoff hydrograph resulting from 1 inch of excess rainfall (effective rainfall) distributed uniformly over the watershed at a constant rate for a specified duration.
- **SCS Dimensionless Unit Hydrograph:** A standard synthetic hydrograph that expresses flow as a ratio of peak flow ($q/q_p$) and time as a ratio of time to peak ($t/t_p$).

### Peak Flow Equation for SCS UH (USCS):
$$q_p = \frac{484 \cdot A \cdot Q}{t_p}$$

Where:
- $q_p$ = Peak discharge (**cfs**)
- $A$ = Drainage area (**square miles, $mi^2$**)
- $Q$ = Runoff depth (**inches**; equal to 1.0 inch for a unit hydrograph)
- $t_p$ = Time to peak (**hours**)
- **484** = Standard peak factor (varies from 300 in flat coastal plains to 600 in steep mountain areas, but 484 is the NCEES standard default).

### Time to Peak ($t_p$):
$$t_p = \frac{D}{2} + t_L$$

Where:
- $D$ = Duration of excess rainfall (**hours**)
- $t_L$ = Lag time from center of mass of rainfall to peak flow (**hours**)
- SCS Lag Time relationship: $t_L \approx 0.6 \cdot t_c$, where $t_c$ is the time of concentration.

---

## Detention Basin Sizing: The Modified Rational Method

Detention basins temporarily store stormwater to reduce peak downstream runoff. The **Modified Rational Method** is a common technique to estimate the storage volume required for small developments ($A < 20$ acres).

The storage volume is determined by evaluating the difference between the inflow hydrograph (Rational Method peak flows for various storm durations) and a constant allowable outflow rate ($Q_{out}$):

$$V_{storage} = (Q_{in} - Q_{out}) \cdot t_d \cdot 60$$

Where:
- $V_{storage}$ = Required storage volume (**cubic feet, $\text{ft}^3$**)
- $Q_{in}$ = Peak inflow rate (**cfs**; calculated as $C \cdot i \cdot A$ for a storm of duration $t_d$)
- $Q_{out}$ = Allowable release rate (**cfs**; usually set to pre-development peak flow)
- $t_d$ = Storm duration (**minutes**)
- **60** = Conversion factor (minutes to seconds)

The critical detention volume is the maximum value of $V_{storage}$ found by evaluating multiple storm durations ($t_d$).

---

## Worked Example 1: SCS Curve Number Runoff Depth

A 120-acre watershed has a composite Curve Number ($CN$) of 78. During a design storm event, the total rainfall depth ($P$) is $4.5\text{ inches}$.

**Calculate the depth of runoff ($Q$) in inches and the total runoff volume in acre-feet.**

### Solution:
1. **Calculate the potential maximum retention ($S$):**
   $$S = \frac{1000}{CN} - 10 = \frac{1000}{78} - 10 = 12.82 - 10 = 2.82\text{ inches}$$

2. **Verify if runoff occurs ($P > 0.2S$):**
   $$0.2S = 0.2 \cdot 2.82 = 0.564\text{ inches}$$
   Since $P = 4.5\text{ inches} > 0.564\text{ inches}$, runoff will occur.

3. **Calculate the depth of direct runoff ($Q$):**
   $$Q = \frac{(P - 0.2S)^2}{P + 0.8S} = \frac{(4.5 - 0.564)^2}{4.5 + 0.8 \cdot 2.82}$$
   $$Q = \frac{(3.936)^2}{4.5 + 2.256} = \frac{15.492}{6.756} \approx 2.29\text{ inches}$$

4. **Calculate the total runoff volume:**
   $$\text{Runoff Volume} = \text{Area} \cdot Q = 120\text{ acres} \cdot \left(\frac{2.29\text{ inches}}{12\text{ inches/ft}}\right) = 120 \cdot 0.191\text{ ft} = 22.9\text{ acre-feet}$$

---

## Worked Example 2: Storage Sizing via Modified Rational Method

A commercial site of 6.0 acres has a post-development runoff coefficient $C = 0.85$. The allowable pre-development discharge rate ($Q_{out}$) is $8.0\text{ cfs}$. 

Using the local IDF table below, determine the required detention storage volume for a storm duration of $30\text{ minutes}$.

| Duration ($t_d$, min) | Intensity ($i$, in/hr) |
|---|---|
| 15 | 4.8 |
| 30 | 3.5 |
| 60 | 2.2 |

### Solution:
1. **Calculate the peak inflow ($Q_{in}$) for the 30-minute duration:**
   $$Q_{in} = C \cdot i \cdot A = 0.85 \cdot 3.5\text{ in/hr} \cdot 6.0\text{ acres} = 17.85\text{ cfs}$$

2. **Calculate the required storage volume for this duration:**
   $$V_{storage} = (Q_{in} - Q_{out}) \cdot t_d \cdot 60$$
   $$V_{storage} = (17.85\text{ cfs} - 8.0\text{ cfs}) \cdot 30\text{ minutes} \cdot 60\text{ s/min}$$
   $$V_{storage} = 9.85\text{ cfs} \cdot 1800\text{ seconds} = 17,730\text{ ft}^3$$

---

## Technical Pitfalls
- **Unit matching for Area in SCS Peak Discharge:** Note that $A$ in $q_p = \frac{484 AQ}{t_p}$ must be in **square miles**, not acres! If a problem gives area in acres, divide by 640 before applying the formula.
- **Initial Abstraction limit:** Runoff is 0 if rainfall $P \le 0.2S$. Always check this threshold if rainfall is light.
- **Modified Rational Method volume calculation:** Make sure you use the duration $t_d$ in seconds (multiply minutes by 60) to yield cubic feet.
