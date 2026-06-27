---
title: "Culvert Hydraulics"
weight: 96
date : "2026-05-04"
draft : false
type : "post"
---
# Culvert Hydraulics

Culverts are conduits used to convey water through highway embankments. Culvert hydraulics is governed by FHWA Hydraulic Design Series No. 5 (HDS-5) guidelines. Designing or analyzing a culvert requires determining whether the flow is governed by **Inlet Control** or **Outlet Control**.

---

## Control Types

### 1. Inlet Control
Inlet control occurs when the flow capacity of the culvert is limited by the entrance geometry (cross-sectional area, shape, and inlet edge configuration) and the headwater depth ($HW$). 
- **Key Factor:** The barrel slope, length, and roughness do **not** affect culvert capacity.
- **Flow Condition:** Flow passes through critical depth ($y_c$) at or near the inlet, and flow inside the barrel is supercritical.
- **Equations (from NCEES handbook):**
  - **Unsubmerged ($HW/D < 1.2$):**
    $$\frac{HW_i}{D} = \frac{H_c}{D} + K \left[\frac{Q}{A D^{0.5}}\right]^M - 0.5 S_o$$
  - **Submerged ($HW/D \ge 1.2$):**
    $$\frac{HW_i}{D} = c \left[\frac{Q}{A D^{0.5}}\right]^2 + Y - 0.5 S_o$$
    *(where $H_c$ is specific head at critical depth, $S_o$ is culvert barrel slope, and $K, M, c, Y$ are inlet constants based on shape and edge configuration).*

### 2. Outlet Control
Outlet control occurs when the flow capacity is limited by downstream conditions, barrel friction, entrance losses, and tailwater depth ($TW$).
- **Key Factors:** Barrel length ($L$), roughness ($n$), slope ($S_o$), tailwater depth ($TW$), and entrance loss coefficient ($K_e$) all influence capacity.
- **Flow Condition:** Flow in the barrel is subcritical, and the culvert is often flowing full or nearly full.
- **Energy Equation for Outlet Control:**
  $$HW = H + h_o - L \cdot S_o$$

Where:
- $HW$ = Headwater depth above inlet invert (**feet**)
- $H$ = Total head loss (**feet**) through the culvert:
  $$H = h_e + h_f + h_v = \left[ 1 + K_e + \frac{29.16 \cdot n^2 \cdot L}{R^{1.33}} \right] \frac{V^2}{2g}$$
  *(where $K_e$ is the entrance loss coefficient, $n$ is Manning's roughness, $L$ is length in feet, $R$ is hydraulic radius in feet, and $V$ is velocity in ft/s).*
- $h_o$ = Downstream tailwater height above outlet invert, calculated as:
  $$h_o = \max\left(TW, \frac{y_c + D}{2}\right)$$
  *(where $y_c$ is critical depth, and $D$ is pipe diameter).*
- $L \cdot S_o$ = Elevation drop along the culvert length (**feet**).

---

## Entrance Loss Coefficients ($K_e$)

The entrance loss coefficient ($K_e$) is a major factor in outlet control design:

| Pipe Type / Inlet Edge | $K_e$ Value |
|---|---|
| Concrete Pipe, Projecting from fill (socket end) | 0.2 |
| Concrete Pipe, Headwall with square edge | 0.5 |
| Concrete Pipe, Mitered to conform to fill | 0.7 |
| Corrugated Metal Pipe, Projecting from fill | 0.9 |
| Corrugated Metal Pipe, Mitered to conform to fill | 0.7 |

---

## Worked Example 1: Inlet Control Headwater Depth

A $36\text{-inch}$ ($3.0\text{-foot}$) concrete circular culvert drains $Q = 35\text{ cfs}$ under inlet control conditions. The culvert is unsubmerged.
Using the NCEES handbook inlet control parameters for a concrete pipe with a headwall and square edge:
- $K = 0.0098$
- $M = 2.0$
- Critical depth for this flow is $y_c = 1.95\text{ ft}$
- Specific head at critical depth is $H_c = y_c + \frac{V_c^2}{2g} = 2.65\text{ ft}$
- The culvert slope is $S_o = 1.0\% = 0.01\text{ ft/ft}$

**Calculate the required headwater depth ($HW$) in feet.**

### Solution:
1. **Calculate the Area ($A$) and Diameter ($D$):**
   - $D = 3.0\text{ feet}$
   - $A = \frac{\pi D^2}{4} = \frac{\pi (3.0)^2}{4} \approx 7.07\text{ ft}^2$

2. **Apply the Unsubmerged Inlet Control Equation:**
   $$\frac{HW_i}{D} = \frac{H_c}{D} + K \left[\frac{Q}{A D^{0.5}}\right]^M - 0.5 S_o$$
   
3. **Evaluate the terms:**
   - $\frac{H_c}{D} = \frac{2.65}{3.0} = 0.883$
   - $\frac{Q}{A D^{0.5}} = \frac{35}{7.07 \cdot 3.0^{0.5}} = \frac{35}{7.07 \cdot 1.732} = \frac{35}{12.245} \approx 2.858$
   - $K \left[\frac{Q}{A D^{0.5}}\right]^M = 0.0098 \cdot (2.858)^{2.0} = 0.0098 \cdot 8.168 \approx 0.080$
   - $- 0.5 S_o = -0.5 \cdot 0.01 = -0.005$

4. **Solve for $HW_i$:**
   $$\frac{HW_i}{D} = 0.883 + 0.080 - 0.005 = 0.958$$
   $$HW_i = 0.958 \cdot D = 0.958 \cdot 3.0\text{ ft} \approx 2.87\text{ feet}$$

---

## Worked Example 2: Outlet Control Headwater Depth

A $24\text{-inch}$ ($2.0\text{-foot}$) concrete culvert ($n = 0.012$) of length $L = 120\text{ feet}$ is laid on a slope $S_o = 0.005\text{ ft/ft}$.
- Design flow is $Q = 12.0\text{ cfs}$
- The inlet has a square-edge headwall ($K_e = 0.5$)
- Tailwater depth above the outlet invert is $TW = 2.2\text{ feet}$ (which is greater than the pipe diameter $D = 2.0\text{ feet}$, forcing outlet control full flow)
- Acceleration of gravity $g = 32.2\text{ ft/s}^2$

**Determine the headwater depth ($HW$) required above the inlet invert.**

### Solution:
1. **Verify full flow properties:**
   - $D = 2.0\text{ feet}$
   - $A = \frac{\pi (2.0)^2}{4} = 3.142\text{ ft}^2$
   - $P_w = \pi D = 6.283\text{ feet}$
   - $R = \frac{D}{4} = 0.50\text{ feet}$
   - Velocity $V = \frac{Q}{A} = \frac{12.0}{3.142} \approx 3.82\text{ ft/s}$

2. **Calculate head loss ($H$):**
   $$H = \left[ 1 + K_e + \frac{29.16 \cdot n^2 \cdot L}{R^{1.33}} \right] \frac{V^2}{2g}$$
   - $1 + K_e = 1 + 0.5 = 1.5$
   - $\frac{29.16 \cdot (0.012)^2 \cdot 120}{(0.5)^{1.33}} = \frac{29.16 \cdot 0.000144 \cdot 120}{0.3976} = \frac{0.5039}{0.3976} \approx 1.267$
   - Velocity Head $\frac{V^2}{2g} = \frac{(3.82)^2}{2 \cdot 32.2} = \frac{14.592}{64.4} \approx 0.227\text{ feet}$
   
   Total loss:
   $$H = [1.5 + 1.267] \cdot 0.227 = 2.767 \cdot 0.227 \approx 0.63\text{ feet}$$

3. **Determine $h_o$:**
   Since $TW = 2.2\text{ feet}$ (pipe is submerged downstream):
   $$h_o = TW = 2.2\text{ feet}$$

4. **Calculate Headwater ($HW$):**
   $$HW = H + h_o - L \cdot S_o$$
   $$HW = 0.63\text{ ft} + 2.2\text{ ft} - (120\text{ ft} \cdot 0.005\text{ ft/ft})$$
   $$HW = 2.83 - 0.60 = 2.23\text{ feet}$$

---

## Technical Pitfalls
- **Inlet vs. Outlet Control Choice:** In practice, you must calculate $HW$ for both inlet and outlet control. The larger of the two headwater depths governs the design. On the exam, read carefully to see if the control condition is pre-defined or if you must check both.
- **Elevation Drop ($L \cdot S_o$):** Do not forget to subtract the elevation drop ($L \cdot S_o$) in the outlet control energy equation. Leaving it out makes the required headwater appear higher than it is.
- **Entrance Losses ($K_e$):** Pay close attention to the pipe material and inlet edge condition to select the correct $K_e$ from the reference handbook.
