---
title: "Open Channel Flow"
weight: 97
date : "2026-05-04"
draft : false
type : "post"
---
# Open Channel Flow

Open channel flow is flow with a free water surface exposed to atmospheric pressure. Roadside ditches, natural streams, and gravity storm sewers are analyzed using open channel flow principles.

---

## Governing Equation: Manning's Equation

The velocity and capacity of open channels are determined using Manning's equation.

### USCS Units:
$$V = \frac{1.486}{n} R^{2/3} S^{1/2}$$
$$Q = V \cdot A = \frac{1.486}{n} A R^{2/3} S^{1/2}$$

### SI (Metric) Units:
$$V = \frac{1}{n} R^{2/3} S^{1/2}$$
$$Q = V \cdot A = \frac{1}{n} A R^{2/3} S^{1/2}$$

Where:
- $V$ = Mean velocity (**ft/s** or **m/s**)
- $Q$ = Flow rate (**cfs** or **$m^3/s$**)
- $n$ = Manning's roughness coefficient (e.g., concrete = 0.013, clean earth ditch = 0.022, grass-lined ditch = 0.035 to 0.050)
- $A$ = Cross-sectional area of flow (**$\text{ft}^2$** or **$m^2$**)
- $R$ = Hydraulic Radius = $A/P_w$ (**feet** or **meters**)
- $P_w$ = Wetted perimeter (**feet** or **meters**)
- $S$ = Channel slope (**ft/ft** or **m/m**)

---

## Channel Geometry Formulas

| Channel Shape | Flow Area ($A$) | Wetted Perimeter ($P_w$) | Top Width ($T$) | Hydraulic Depth ($D$) |
|---|---|---|---|---|
| **Rectangular** | $b \cdot y$ | $b + 2y$ | $b$ | $y$ |
| **Trapezoidal** (side slope $z$:1 H:V) | $(b + z \cdot y)y$ | $b + 2y\sqrt{1+z^2}$ | $b + 2z \cdot y$ | $A/T$ |
| **Triangular** (side slope $z$:1 H:V) | $z \cdot y^2$ | $2y\sqrt{1+z^2}$ | $2z \cdot y$ | $y/2$ |

---

## Critical Flow and Froude Number

The Froude number ($Fr$) defines the state of flow relative to gravity wave velocity:

$$Fr = \frac{V}{\sqrt{g \cdot D}}$$

Where:
- $V$ = Velocity (**ft/s** or **m/s**)
- $g$ = Acceleration of gravity ($32.2\text{ ft/s}^2$ or $9.81\text{ m/s}^2$)
- $D$ = Hydraulic depth = $A / T$ (**feet** or **meters**)

### States of Flow:
- **$Fr < 1.0$ (Subcritical Flow):** Tranquil, low velocity, deep flow. Downstream conditions control the flow depth.
- **$Fr = 1.0$ (Critical Flow):** Minimum specific energy for a given discharge.
- **$Fr > 1.0$ (Supercritical Flow):** Rapid, high velocity, shallow flow. Upstream conditions control the flow depth.

---

## Specific Energy ($E$)

Specific energy is the energy head relative to the channel bottom:

$$E = y + \frac{V^2}{2g}$$

For a rectangular channel of bottom width $b$:
- **Flow per unit width:** $q = Q/b$
- **Critical Depth ($y_c$):**
  $$y_c = \sqrt[3]{\frac{q^2}{g}}$$
- **Minimum Specific Energy ($E_{min}$):**
  $$E_{min} = 1.5 \cdot y_c$$

---

## Worked Example 1: Trapezoidal Channel Manning's Capacity

A roadside trapezoidal channel has a bottom width $b = 3.0\text{ ft}$ and side slopes $z = 2$ (2H:1V). The channel is lined with turf grass ($n = 0.040$) and is laid on a longitudinal slope $S = 0.8\% = 0.008\text{ ft/ft}$.

**Calculate the flow rate ($Q$) and average velocity ($V$) when the water depth is $1.2\text{ ft}$.**

### Solution:
1. **Calculate the geometric parameters:**
   - Depth $y = 1.2\text{ ft}$
   - Area $A = (b + z \cdot y)y = (3.0 + 2 \cdot 1.2) \cdot 1.2 = (3.0 + 2.4) \cdot 1.2 = 5.4 \cdot 1.2 = 6.48\text{ ft}^2$
   - Wetted Perimeter $P_w = b + 2y\sqrt{1+z^2} = 3.0 + 2(1.2)\sqrt{1+2^2} = 3.0 + 2.4\sqrt{5} = 3.0 + 5.367 = 8.367\text{ ft}$
   - Hydraulic Radius $R = \frac{A}{P_w} = \frac{6.48}{8.367} \approx 0.7745\text{ ft}$

2. **Apply Manning's Equation for Velocity ($V$):**
   $$V = \frac{1.486}{n} R^{2/3} S^{1/2}$$
   $$V = \frac{1.486}{0.040} \cdot (0.7745)^{2/3} \cdot (0.008)^{1/2}$$
   - $\frac{1.486}{0.040} = 37.15$
   - $(0.7745)^{2/3} \approx 0.8437$
   - $(0.008)^{1/2} \approx 0.08944$
   
   $$V = 37.15 \cdot 0.8437 \cdot 0.08944 \approx 2.80\text{ ft/s}$$

3. **Calculate flow rate ($Q$):**
   $$Q = V \cdot A = 2.80\text{ ft/s} \cdot 6.48\text{ ft}^2 \approx 18.1\text{ cfs}$$

---

## Worked Example 2: Critical Depth & Flow State in a Rectangular Channel

A rectangular concrete channel has a width of $8.0\text{ ft}$ and carries a flow rate $Q = 64.0\text{ cfs}$. The depth of flow is measured to be $y = 1.2\text{ ft}$. 

**Calculate the critical depth ($y_c$) and the Froude number ($Fr$) to determine if the flow is subcritical, critical, or supercritical.**

### Solution:
1. **Calculate flow per unit width ($q$):**
   $$q = \frac{Q}{b} = \frac{64.0\text{ cfs}}{8.0\text{ ft}} = 8.0\text{ cfs/ft}$$

2. **Calculate critical depth ($y_c$):**
   $$y_c = \sqrt[3]{\frac{q^2}{g}} = \sqrt[3]{\frac{8.0^2}{32.2}} = \sqrt[3]{\frac{64.0}{32.2}} = \sqrt[3]{1.9876} \approx 1.26\text{ feet}$$

3. **Calculate velocity ($V$):**
   $$V = \frac{Q}{A} = \frac{64.0}{8.0 \cdot 1.2} = \frac{64.0}{9.6} \approx 6.67\text{ ft/s}$$

4. **Calculate Froude number ($Fr$):**
   For a rectangular channel, hydraulic depth $D = y = 1.2\text{ ft}$.
   $$Fr = \frac{V}{\sqrt{g \cdot y}} = \frac{6.67}{\sqrt{32.2 \cdot 1.2}} = \frac{6.67}{\sqrt{38.64}} = \frac{6.67}{6.216} \approx 1.07$$

5. **Determine the state of flow:**
   Since $Fr = 1.07 > 1.0$ (and actual depth $y = 1.2\text{ ft} < y_c = 1.26\text{ ft}$), the flow is **supercritical**.

---

## Technical Pitfalls
- **Froude Number Depth Term:** Remember that the denominator in the Froude number uses hydraulic depth $D = A/T$. Do not automatically use the flow depth $y$ unless it is a rectangular channel, where $T=b \implies D = (b \cdot y)/b = y$. For trapezoidal channels, $D \ne y$.
- **Side Slope Definition:** Check if the side slope is defined as horizontal-to-vertical (H:V) or vertical-to-horizontal. The standard equations assume $z$ horizontal to 1 vertical (e.g. 3:1 means $z=3$).
- **Manning's $n$ Units:** Manning's equation coefficients ($1.486$ for USCS, $1.0$ for SI) must match the unit system used.
