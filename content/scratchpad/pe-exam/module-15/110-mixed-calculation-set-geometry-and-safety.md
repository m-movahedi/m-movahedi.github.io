---
title: "Mixed Calculation Set: Geometry and Safety"
weight: 110
date : "2026-05-04"
draft : false
type : "post"
---
# Mixed Calculation Set: Geometry and Safety

This calculation set covers geometric alignment design and roadside safety calculations typical of the PE Civil Transportation exam.

---

## Problem 1: Horizontal Curve Stationing

A simple horizontal curve is being designed for a two-lane highway. 
- The intersection angle (deflection angle) $\Delta = 38^{\circ} 30' = 38.5^{\circ}$.
- The degree of curve (arc definition) is $D_a = 4.0^{\circ}$ (measured over a 100-foot arc length).
- The station of the Point of Intersection (PI) is $244 + 50.00$.

**Calculate the following:**
1. **The radius ($R$) of the curve.**
2. **The tangent length ($T$) and curve length ($L$).**
3. **The stations of the Point of Curvature (PC) and Point of Tangency (PT).**

### Solution:

#### Step 1: Calculate Radius ($R$)
Using the standard relationship for degree of curve (arc definition) in feet:
$$R = \frac{5729.58}{D_a} = \frac{5729.58}{4.0} = 1,432.40\text{ feet}$$

#### Step 2: Calculate Tangent ($T$) and Curve Length ($L$)
- **Tangent Length ($T$):**
  $$T = R \cdot \tan\left(\frac{\Delta}{2}\right) = 1,432.40 \cdot \tan\left(\frac{38.5^{\circ}}{2}\right) = 1,432.40 \cdot \tan(19.25^{\circ})$$
  $$T = 1,432.40 \cdot 0.3492 \approx 500.22\text{ feet}$$
- **Curve Length ($L$):**
  $$L = \frac{100 \cdot \Delta}{D_a} = \frac{100 \cdot 38.5^{\circ}}{4.0^{\circ}} = 962.50\text{ feet}$$
  *(Alternatively, using arc length formula: $L = R \cdot \Delta \cdot \frac{\pi}{180} = 1,432.40 \cdot 38.5 \cdot 0.017453 \approx 962.88\text{ ft}$; on the PE exam, the NCEES handbook specifies the degree of curve relation, so $L = 100 \Delta/D$ is standard).*

#### Step 3: Determine Stationing of PC and PT
- **Station of PC:**
  $$\text{PC Station} = \text{PI Station} - T = (244 + 50.00) - 500.22\text{ ft}$$
  $$(244 \cdot 100 + 50.00) - 500.22 = 24,450.00 - 500.22 = 23,949.78\text{ ft} \implies 239 + 49.78$$
- **Station of PT:**
  $$\text{PT Station} = \text{PC Station} + L = (239 + 49.78) + 962.50\text{ ft}$$
  $$(23,949.78) + 962.50 = 24,912.28\text{ ft} \implies 249 + 12.28$$
  *Trap Check:* Remember to calculate the PT station by adding the curve length ($L$) to the PC station. Never add the tangent length ($T$) to the PI station to find the PT station.

---

## Problem 2: Vertical Curve High Point and Elevation

An equal-tangent crest vertical curve has a length $L = 600\text{ feet}$.
- The entering grade is $g_1 = +3.0\% = +0.03\text{ ft/ft}$.
- The exiting grade is $g_2 = -2.0\% = -0.02\text{ ft/ft}$.
- The Point of Vertical Curvature (PVC) is at station $120 + 00.00$ and elevation $540.50\text{ feet}$.

**1. Determine the station and elevation of the Point of Vertical Intersection (PVI).**
**2. Calculate the station and elevation of the highest point on the curve.**

### Solution:

#### Step 1: Determine PVI Station and Elevation
An equal-tangent vertical curve has the PVI exactly at the midpoint of the curve ($L/2$ from PVC):
- **PVI Station:**
  $$\text{PVI Station} = \text{PVC Station} + \frac{L}{2} = (120 + 00.00) + 300\text{ ft} = 123 + 00.00$$
- **PVI Elevation:**
  $$\text{PVI Elev} = \text{PVC Elev} + g_1 \cdot \left(\frac{L}{2}\right) = 540.50 + 0.03 \cdot 300\text{ ft} = 540.50 + 9.0 = 549.50\text{ feet}$$

#### Step 2: Calculate High Point Station
The distance ($x_{hp}$) from the PVC to the highest point of a crest vertical curve is:
$$x_{hp} = \frac{g_1 \cdot L}{g_1 - g_2}$$
Where $g_1$ and $g_2$ are in percent:
$$x_{hp} = \frac{3.0 \cdot 600\text{ ft}}{3.0 - (-2.0)} = \frac{1800}{5.0} = 360\text{ feet}$$

Convert to station:
$$\text{High Point Station} = \text{PVC Station} + x_{hp} = (120 + 00.00) + 360\text{ ft} = 123 + 60.00$$

#### Step 3: Calculate High Point Elevation
Use the general vertical curve offset equation:
$$y = y_{PVC} + g_1 \cdot x + \frac{r \cdot x^2}{2}$$
Where:
- $y_{PVC} = 540.50\text{ feet}$
- $g_1 = +0.03\text{ ft/ft}$
- Rate of change of grade $r = \frac{g_2 - g_1}{L} = \frac{-0.02 - 0.03}{600} = \frac{-0.05}{600} \approx -0.0000833\text{ ft/ft}^2$
- $x = x_{hp} = 360\text{ feet}$

Evaluate elevation ($y_{hp}$):
$$y_{hp} = 540.50 + (0.03 \cdot 360) + \frac{-0.0000833 \cdot 360^2}{2}$$
$$y_{hp} = 540.50 + 10.80 - \frac{0.0000833 \cdot 129,600}{2}$$
$$y_{hp} = 551.30 - \frac{10.80}{2} = 551.30 - 5.40 = 545.90\text{ feet}$$

---

## Problem 3: Segment Crash Rate Calculation

A $2.4\text{-mile}$ rural roadway segment experienced a total of 18 crashes over a 3-year study period.
- The Average Daily Traffic (ADT) along the segment is $8,500\text{ vehicles per day}$.

**Calculate the crash rate ($R$) for this segment in terms of crashes per 100 Million Vehicle Miles Traveled (MVMT).**

### Solution:
Use the standard equation for segment crash rates:

$$R = \frac{N \cdot 10^8}{365 \cdot ADT \cdot L \cdot Y}$$

Where:
- $R$ = Crash rate (**crashes per 100 MVMT**)
- $N$ = Number of crashes = 18
- $ADT$ = Average Daily Traffic = 8,500
- $L$ = Length of segment = 2.4 miles
- $Y$ = Study period length (**years**) = 3

Substitute the values:
$$R = \frac{18 \cdot 10^8}{365 \cdot 8,500 \cdot 2.4 \cdot 3}$$
$$R = \frac{1,800,000,000}{365 \cdot 8,500 \cdot 7.2}$$
$$R = \frac{1,800,000,000}{22,338,000} \approx 80.58$$

*Result:* The segment crash rate is **80.6 crashes per 100 MVMT**.

---

## Technical Pitfalls
- **Incorrect PT Stationing:** Never calculate PT station as $\text{PI} + T$ or $\text{PC} + 2T$. Always calculate it as $\text{PC} + L$.
- **Vertical Curve Slope Units:** For $x_{hp} = \frac{g_1 L}{g_1 - g_2}$, the grades must be in **percent** (e.g. $3.0$ and $-2.0$), not decimals. However, in the elevation equation $y = y_{PVC} + g_1 x + \frac{r x^2}{2}$, the slope $g_1$ must be in **decimal** form ($0.03\text{ ft/ft}$), and $r$ must be in decimal form ($\text{ft/ft}^2$).
- **Crash Rate Time Period:** Do not forget the number of years ($Y$) in the denominator of the crash rate equation. Omitting it will result in a rate that is multiplied by the study length.
