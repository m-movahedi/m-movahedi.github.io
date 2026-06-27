# Energy Losses and Dissipation

Hydraulic structures must be designed to manage energy losses and prevent erosion. High-velocity discharge from culverts or channels can cause scour at outfalls, which is prevented using energy dissipation structures (like riprap aprons or stilling basins) and by managing transitions.

---

## Minor Head Losses

Minor head losses occur due to changes in velocity, flow direction, or cross-sectional area at inlets, bends, expansions, contractions, and manholes.

### Governing Equation:
$$h_L = K \cdot \frac{V^2}{2g}$$

Where:
- $h_L$ = Head loss (**feet** or **meters**)
- $K$ = Minor loss coefficient (dimensionless)
- $V$ = Velocity of flow (**ft/s** or **m/s**)
- $g$ = Acceleration of gravity ($32.2\text{ ft/s}^2$ or $9.81\text{ m/s}^2$)

---

## Hydraulic Jumps in Rectangular Channels

A **Hydraulic Jump** occurs when supercritical flow ($Fr_1 > 1.0$) transitions abruptly to subcritical flow ($Fr_2 < 1.0$). This transition creates high turbulence and dissipates a significant amount of kinetic energy.

### Sequent Depth (Conjugate Depth) Equation:
The relationship between the depth before the jump ($y_1$) and the depth after the jump ($y_2$) in a horizontal rectangular channel is:

$$\frac{y_2}{y_1} = \frac{1}{2} \left( \sqrt{1 + 8 Fr_1^2} - 1 \right)$$

Where:
- $y_1$ = Upstream (supercritical) depth (**feet** or **meters**)
- $y_2$ = Downstream (subcritical) depth (**feet** or **meters**)
- $Fr_1$ = Upstream Froude number:
  $$Fr_1 = \frac{V_1}{\sqrt{g \cdot y_1}}$$

### Head Loss in a Jump ($\Delta E$):
The energy dissipated during a hydraulic jump is:

$$H_L = \Delta E = E_1 - E_2 = \frac{(y_2 - y_1)^3}{4 \cdot y_1 \cdot y_2}$$

---

## Energy Dissipators

Energy dissipators are structured outlets designed to reduce velocities before runoff enters natural watercourses.
- **Riprap Aprons:** A placed bed of rock riprap at the culvert outlet. The median stone size ($d_{50}$) is determined based on the outlet velocity and culvert diameter/flow rate (typically sized using FHWA HEC-14 charts or equations).
- **Stilling Basins:** Reinforced concrete structures containing chute blocks, baffle blocks, and end sills to force a hydraulic jump within the basin and stabilize the flow.

---

## Worked Example 1: Hydraulic Jump and Energy Loss

A rectangular drainage channel with a bottom width of $6.0\text{ ft}$ carries a flow of $Q = 72\text{ cfs}$. At a transition, the flow depth is measured to be $y_1 = 0.50\text{ ft}$. A hydraulic jump occurs just downstream of the transition.

**1. Calculate the conjugate depth ($y_2$) downstream of the jump.**
**2. Determine the energy head loss ($H_L$) across the jump.**

### Solution:

#### Step 1: Calculate upstream velocity ($V_1$) and Froude number ($Fr_1$)
- Width $b = 6.0\text{ ft}$, Depth $y_1 = 0.50\text{ ft}$
- Area $A_1 = b \cdot y_1 = 6.0 \cdot 0.50 = 3.0\text{ ft}^2$
- Velocity $V_1 = \frac{Q}{A_1} = \frac{72}{3.0} = 24.0\text{ ft/s}$

Calculate $Fr_1$:
$$Fr_1 = \frac{V_1}{\sqrt{g \cdot y_1}} = \frac{24.0}{\sqrt{32.2 \cdot 0.50}} = \frac{24.0}{\sqrt{16.1}} = \frac{24.0}{4.0125} \approx 5.98$$
*Note:* Since $Fr_1 \approx 5.98 > 1.0$, the flow is supercritical, validating the occurrence of a hydraulic jump.

#### Step 2: Calculate conjugate depth ($y_2$)
$$\frac{y_2}{y_1} = \frac{1}{2} \left( \sqrt{1 + 8 Fr_1^2} - 1 \right)$$
$$\frac{y_2}{0.50} = 0.5 \cdot \left( \sqrt{1 + 8 \cdot (5.98)^2} - 1 \right)$$
- $(5.98)^2 \approx 35.76$
- $8 \cdot 35.76 = 286.08$
- $\sqrt{1 + 286.08} = \sqrt{287.08} \approx 16.94$
- $\sqrt{287.08} - 1 = 15.94$

Solve for $y_2$:
$$\frac{y_2}{0.50} = 0.5 \cdot 15.94 = 7.97$$
$$y_2 = 7.97 \cdot 0.50 \approx 3.99\text{ feet}$$

#### Step 3: Calculate energy loss ($H_L$)
$$H_L = \frac{(y_2 - y_1)^3}{4 \cdot y_1 \cdot y_2}$$
$$H_L = \frac{(3.99 - 0.50)^3}{4 \cdot 0.50 \cdot 3.99} = \frac{(3.49)^3}{7.98}$$
- $(3.49)^3 \approx 42.51$
$$H_L = \frac{42.51}{7.98} \approx 5.33\text{ feet of head loss}$$

---

## Worked Example 2: Minor Losses in Pipe Junction

A $12\text{-inch}$ storm sewer pipe carries flow at $V = 6.0\text{ ft/s}$. The pipe passes through a manhole junction that causes a minor loss of $K = 0.35$ for a straight-through configuration.

**Calculate the head loss ($h_L$) at the manhole.**

### Solution:
$$h_L = K \cdot \frac{V^2}{2g}$$
$$h_L = 0.35 \cdot \frac{6.0^2}{2 \cdot 32.2} = 0.35 \cdot \frac{36.0}{64.4}$$
$$h_L = 0.35 \cdot 0.559 \approx 0.20\text{ feet}$$

---

## Technical Pitfalls
- **Sequent Depth vs Alternate Depth:** Do not confuse *sequent* (or conjugate) depths with *alternate* depths. Conjugate depths represent the depths before and after a hydraulic jump (where momentum is conserved, but energy is lost). Alternate depths are depths that share the exact same specific energy ($E_1 = E_2$), which occurs under frictionless transitions without a jump.
- **Unit of g:** Ensure you use $g = 32.2\text{ ft/s}^2$ for USCS or $g = 9.81\text{ m/s}^2$ for SI units.
- **Froude Number calculation:** Double check that $Fr_1$ is calculated using the *upstream* depth $y_1$ and upstream velocity $V_1$.
