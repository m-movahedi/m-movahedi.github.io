---
title: "Shear Strength and Lateral Earth Pressures"
weight: 83
date : "2026-05-04"
draft : false
type : "post"
---
# Shear Strength and Lateral Earth Pressures

Soil strength and stability are core geotechnical topics on the PE Civil Transportation exam. These concepts govern the design of retaining walls, abutments, excavation support systems, and highway embankments.

---

## 1. Shear Strength of Soil

Soil is a particulate material that derives its shear strength from friction between particles and cohesion (cementation or electrostatic bonding) between clay minerals.

### Mohr-Coulomb Failure Criterion
The shear strength ($\tau$) of a soil at any point along a failure plane is modeled by the Mohr-Coulomb failure criterion:
$$\tau = c + \sigma \tan(\phi) \quad \text{(Total Stress Basis)}$$
$$\tau = c' + \sigma' \tan(\phi') \quad \text{(Effective Stress Basis)}$$

Where:
*   $\tau = \text{shear strength of the soil}$
*   $c, c' = \text{cohesion (total and effective, respectively)}$
*   $\phi, \phi' = \text{internal friction angle (total and effective, respectively)}$
*   $\sigma = \text{total normal stress on the failure plane}$
*   $\sigma' = \text{effective normal stress on the failure plane} = \sigma - u$
*   $u = \text{pore water pressure}$

### Cohesive vs. Cohesionless Soils
*   **Cohesionless (Granular) Soils (Sands, Gravels):** Have no long-term cohesion ($c' = 0$). Strength depends entirely on effective normal stress and the friction angle:
    $$\tau = \sigma' \tan(\phi')$$
*   **Cohesive (Fine-Grained) Soils (Clays, Silts):** Exhibit cohesion.
    *   *Undrained Condition (Short-Term):* Loading occurs faster than water can drain, generating excess pore pressures. Typically modeled using total stress: $\tau = s_u$ (where $s_u = c$ is the undrained shear strength, and $\phi = 0$).
    *   *Drained Condition (Long-Term):* Pore pressures dissipate. Modeled using effective stress: $\tau = c' + \sigma' \tan(\phi')$.

---

## 2. Lateral Earth Pressures

Lateral earth pressure is the horizontal stress exerted by a soil mass against a retaining structure. The magnitude of this pressure depends on the wall's movement relative to the soil.

<div style="width: 100%; max-width: 700px; margin: 2rem auto;">
<svg viewBox="0 0 700 250" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" style="font-family: sans-serif; fill: currentColor;">
  <!-- ACTIVE -->
  <text x="130" y="30" text-anchor="middle" font-weight="bold">ACTIVE</text>
  <text x="130" y="50" text-anchor="middle" font-size="0.8em">(Wall moves away)</text>  
  <rect x="70" y="90" width="20" height="100" fill="rgba(128,128,128,0.5)" stroke="currentColor" stroke-width="2" />
  <path d="M 90 190 L 150 90 L 190 90 L 190 190 Z" fill="rgba(139, 69, 19, 0.3)" stroke="currentColor" stroke-width="1" />
  <!-- Soil surface -->
  <line x1="90" y1="90" x2="190" y2="90" stroke="currentColor" stroke-width="2" />
  <!-- Failure plane -->
  <line x1="90" y1="190" x2="150" y2="90" stroke="currentColor" stroke-width="2" stroke-dasharray="4,4" />  
  <line x1="60" y1="75" x2="40" y2="75" stroke="currentColor" stroke-width="2" marker-end="url(#arrow)"/>
  <text x="30" y="80" text-anchor="end" font-size="0.8em">Wall</text>
  <!-- AT-REST -->
  <text x="350" y="30" text-anchor="middle" font-weight="bold">AT-REST</text>
  <text x="350" y="50" text-anchor="middle" font-size="0.8em">(No movement)</text>
  <rect x="310" y="90" width="20" height="100" fill="rgba(128,128,128,0.5)" stroke="currentColor" stroke-width="2" />
  <rect x="330" y="90" width="60" height="100" fill="rgba(139, 69, 19, 0.3)" stroke="currentColor" stroke-width="1" />
  <!-- Soil surface -->
  <line x1="330" y1="90" x2="390" y2="90" stroke="currentColor" stroke-width="2" />
  <line x1="320" y1="65" x2="320" y2="85" stroke="currentColor" stroke-width="2" />
  <text x="320" y="60" text-anchor="middle" font-size="0.8em">Wall</text>
  <!-- PASSIVE -->
  <text x="590" y="30" text-anchor="middle" font-weight="bold">PASSIVE</text>
  <text x="590" y="50" text-anchor="middle" font-size="0.8em">(Wall pushes soil)</text>
  <rect x="550" y="90" width="20" height="100" fill="rgba(128,128,128,0.5)" stroke="currentColor" stroke-width="2" />
  <path d="M 570 190 L 650 90 L 690 90 L 690 190 Z" fill="rgba(139, 69, 19, 0.3)" stroke="currentColor" stroke-width="1" />
  <!-- Soil surface -->
  <line x1="570" y1="90" x2="690" y2="90" stroke="currentColor" stroke-width="2" />
  <!-- Failure plane -->
  <line x1="570" y1="190" x2="650" y2="90" stroke="currentColor" stroke-width="2" stroke-dasharray="4,4" />
  <line x1="520" y1="75" x2="540" y2="75" stroke="currentColor" stroke-width="2" marker-end="url(#arrow)"/>
  <text x="510" y="80" text-anchor="end" font-size="0.8em">Wall</text>
  <!-- K relation axis -->
  <line x1="130" y1="230" x2="320" y2="230" stroke="currentColor" stroke-width="1" marker-start="url(#arrow)" />
  <line x1="380" y1="230" x2="570" y2="230" stroke="currentColor" stroke-width="1" marker-end="url(#arrow)" />  
  <text x="110" y="235" text-anchor="middle" font-weight="bold">K<tspan dy="5" font-size="0.8em">a</tspan></text>
  <text x="350" y="235" text-anchor="middle" font-weight="bold">K<tspan dy="5" font-size="0.8em">0</tspan></text>
  <text x="590" y="235" text-anchor="middle" font-weight="bold">K<tspan dy="5" font-size="0.8em">p</tspan></text>
  <!-- Defs -->
  <defs>
    <marker id="arrow" markerWidth="10" markerHeight="10" refX="5" refY="5" orient="auto-start-reverse">
      <path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor" />
    </marker>
  </defs>
</svg>
</div>

### Coefficients of Earth Pressure ($K$)
The ratio of horizontal effective stress ($\sigma'_h$) to vertical effective stress ($\sigma'_v$) is defined as the earth pressure coefficient:
$$K = \frac{\sigma'_h}{\sigma'_v}$$

1.  **At-Rest Earth Pressure ($K_0$):** Occurs when the wall is completely rigid and undergoes zero lateral displacement.
    *   For normally consolidated soils, Jaky's equation is used:
        $$K_0 = 1 - \sin(\phi')$$
2.  **Active Earth Pressure ($K_a$):** Occurs when the wall moves *away* from the backfill, allowing the soil to expand laterally and fail along a shear plane. Rankine's coefficient is:
    $$K_a = \frac{1 - \sin(\phi')}{1 + \sin(\phi')} = \tan^2\left(45^\circ - \frac{\phi'}{2}\right)$$
3.  **Passive Earth Pressure ($K_p$):** Occurs when the wall is pushed *into* the backfill, compressing the soil laterally until failure occurs. Rankine's coefficient is:
    $$K_p = \frac{1 + \sin(\phi')}{1 - \sin(\phi')} = \tan^2\left(45^\circ + \frac{\phi'}{2}\right)$$

*Note:* $K_p$ is the mathematical inverse of $K_a$ ($K_p = 1 / K_a$). The relationship is always $K_a < K_0 < K_p$. Active pressure requires very little wall rotation to mobilize, while passive pressure requires significant displacement to be fully mobilized.

---

## 3. Lateral Earth Pressure Distribution (Rankine Theory)

For a vertical wall of height $H$ with dry cohesionless backfill ($\gamma$, $\phi$, $c=0$), the active lateral pressure increases linearly with depth ($z$):
$$\sigma'_h(z) = K_a \cdot \sigma'_v(z) = K_a \cdot \gamma \cdot z$$

The total active lateral force (thrust) per unit length of the wall ($P_a$) is the area under the triangular pressure distribution:
$$P_a = \frac{1}{2} K_a \gamma H^2$$
This resultant force acts at a height of $H/3$ from the base of the wall.

### Surcharge and Water Table Effects
If a uniform surcharge ($q$) is applied to the surface, and a water table is present at depth $d$ behind the wall:
1.  **Surcharge Pressure:** Adds a uniform lateral pressure over the entire height of the wall:
    $$\sigma_{h,\text{surcharge}} = K_a \cdot q$$
    The resultant force is $P_{\text{surcharge}} = K_a q H$, acting at $H/2$ from the base.
2.  **Water Pressure:** Water pressure is hydrostatic and isotropic ($K = 1.0$). It must be calculated separately from soil pressure:
    $$u(z) = \gamma_w (z - d) \quad (\text{for } z \ge d)$$
    The resultant water force is $P_w = \frac{1}{2} \gamma_w (H - d)^2$, acting at $(H-d)/3$ from the base.
3.  **Effective Soil Stress below Water Table:** Below the water table, the vertical effective stress must use the submerged unit weight ($\gamma' = \gamma_{\text{sat}} - \gamma_w$):
    $$\sigma'_v(z) = \gamma \cdot d + \gamma' \cdot (z - d) \quad (\text{for } z \ge d)$$
    $$\sigma'_h(z) = K_a \cdot \sigma'_v(z)$$

---

## 4. Slope Stability Basics

Slope stability is measured by the Factor of Safety ($FS$), which is the ratio of resisting forces/moments to driving forces/moments:
$$FS = \frac{\tau_{\text{resisting}}}{\tau_{\text{driving}}}$$

### Infinite Slope Analysis
An infinite slope has a failure plane parallel to the slope face. For a cohesionless dry soil slope inclined at an angle $\beta$:
*   The shear stress driving failure is $\tau_{\text{driving}} = \gamma z \sin(\beta) \cos(\beta)$.
*   The normal stress on the plane is $\sigma' = \gamma z \cos^2(\beta)$.
*   The resisting shear strength is $\tau_{\text{resisting}} = \sigma' \tan(\phi') = \gamma z \cos^2(\beta) \tan(\phi')$.

$$FS = \frac{\gamma z \cos^2(\beta) \tan(\phi')}{\gamma z \sin(\beta) \cos(\beta)} = \frac{\tan(\phi')}{\tan(\beta)}$$

*Key Takeaway:* For a dry sand slope, the factor of safety is independent of depth ($z$) and unit weight. If $FS = 1.0$, the slope angle $\beta$ equals the internal friction angle $\phi'$ (angle of repose).

If seepage occurs parallel to the slope surface and is coincident with the slope face, the factor of safety is reduced by approximately half due to pore pressures:
$$FS = \frac{\gamma'}{\gamma_{\text{sat}}} \frac{\tan(\phi')}{\tan(\beta)} \approx 0.5 \frac{\tan(\phi')}{\tan(\beta)}$$

---

## 5. Worked Examples

### Worked Example 1: Active Pressure with Surcharge and Water
A retaining wall with a height of $20\text{ ft}$ has a vertical back face and supports a level sand backfill. The soil has the following properties:
*   $\gamma = 115\text{ lb/ft}^3$ (above water table)
*   $\gamma_{\text{sat}} = 125\text{ lb/ft}^3$ (below water table)
*   $\phi' = 30^\circ$, $c' = 0$
*   Water table is located at $12\text{ ft}$ below the ground surface.
*   A uniform surcharge $q = 250\text{ lb/ft}^2$ is applied on the backfill surface.

**Goal:** Calculate the total active lateral thrust (force per unit length of wall) and the height of its line of action from the base of the wall.

**Solution:**
1.  **Calculate $K_a$:**
    $$K_a = \tan^2(45^\circ - 30^\circ / 2) = \tan^2(30^\circ) = 0.333$$
2.  **Identify Pressures at Key Depths ($z = 0\text{ ft}$, $z = 12\text{ ft}$, $z = 20\text{ ft}$):**
    *   **At $z = 0\text{ ft}$:**
        *   $\sigma'_v = 0$
        *   $\sigma'_h = K_a q = 0.333(250) = 83.3\text{ lb/ft}^2$
        *   $u = 0$
    *   **At $z = 12\text{ ft}$ (just above water table):**
        *   $\sigma'_v = \gamma z = 115(12) = 1380\text{ lb/ft}^2$
        *   $\sigma'_h = K_a (\sigma'_v + q) = 0.333(1380 + 250) = 0.333(1630) = 543.3\text{ lb/ft}^2$
        *   $u = 0$
    *   **At $z = 20\text{ ft}$ (base of wall):**
        *   Submerged unit weight: $\gamma' = 125 - 62.4 = 62.6\text{ lb/ft}^3$
        *   $\sigma'_v = \gamma(12) + \gamma'(8) = 1380 + 62.6(8) = 1380 + 500.8 = 1880.8\text{ lb/ft}^2$
        *   $\sigma'_h = K_a (\sigma'_v + q) = 0.333(1880.8 + 250) = 0.333(2130.8) = 710.3\text{ lb/ft}^2$
        *   $u = \gamma_w (20 - 12) = 62.4(8) = 499.2\text{ lb/ft}^2$
3.  **Break Down Lateral Forces (Thrusts) per foot of wall:**
    *   **Force 1 (Surcharge):** Uniform rectangular pressure distribution of $K_a q = 83.3\text{ lb/ft}^2$ over height $H=20\text{ ft}$.
        $$P_1 = 83.3 \cdot 20 = 1666\text{ lb/ft}$$
        *Moment arm from base:* $y_1 = 20 / 2 = 10\text{ ft}$
    *   **Force 2 (Soil Dry Triangle):** Triangular pressure increasing from $0$ at $z=0$ to $K_a \gamma (12) = 0.333(115)(12) = 460\text{ lb/ft}^2$ at $z=12\text{ ft}$.
        $$P_2 = \frac{1}{2} \cdot 460 \cdot 12 = 2760\text{ lb/ft}$$
        *Moment arm from base:* $y_2 = (20 - 12) + \frac{12}{3} = 8 + 4 = 12\text{ ft}$
    *   **Force 3 (Soil Wet Rectangle):** Uniform pressure of $460\text{ lb/ft}^2$ acting over the lower $8\text{ ft}$ (due to soil overhead).
        $$P_3 = 460 \cdot 8 = 3680\text{ lb/ft}$$
        *Moment arm from base:* $y_3 = 8 / 2 = 4\text{ ft}$
    *   **Force 4 (Soil Wet Triangle):** Triangular pressure increasing from $0$ at $z=12$ to $K_a \gamma' (8) = 0.333(62.6)(8) = 167.0\text{ lb/ft}^2$ at $z=20\text{ ft}$.
        $$P_4 = \frac{1}{2} \cdot 167.0 \cdot 8 = 668\text{ lb/ft}$$
        *Moment arm from base:* $y_4 = 8 / 3 = 2.67\text{ ft}$
    *   **Force 5 (Water Pressure Triangle):** Hydrostatic water pressure increasing from $0$ at $z=12$ to $499.2\text{ lb/ft}^2$ at $z=20\text{ ft}$.
        $$P_5 = \frac{1}{2} \cdot 499.2 \cdot 8 = 1996.8\text{ lb/ft}$$
        *Moment arm from base:* $y_5 = 8 / 3 = 2.67\text{ ft}$
4.  **Calculate Total Thrust ($P_{\text{total}}$):**
    $$P_{\text{total}} = P_1 + P_2 + P_3 + P_4 + P_5 = 1666 + 2760 + 3680 + 668 + 1996.8 = 10,770.8\text{ lb/ft}$$
5.  **Calculate Height of Resultant Force ($\bar{y}$):**
    Use moment equilibrium about the base of the wall:
    $$\bar{y} = \frac{\sum P_i y_i}{P_{\text{total}}}$$
    $$\sum P_i y_i = (1666 \cdot 10) + (2760 \cdot 12) + (3680 \cdot 4) + (668 \cdot 2.67) + (1996.8 \cdot 2.67)$$
    $$\sum P_i y_i = 16,660 + 33,120 + 14,720 + 1783.6 + 5331.5 = 71,615.1\text{ ft-lb/ft}$$
    $$\bar{y} = \frac{71,615.1}{10,770.8} = 6.65\text{ ft}$$

*Result:* Total lateral force is **$10,771\text{ lb/ft}$** acting at **$6.65\text{ ft}$** above the base.

---

### Worked Example 2: Infinite Slope Stability
A steep highway cut slope is constructed in dry sand. The slope angle is $24^\circ$. The sand has a friction angle of $\phi' = 32^\circ$ and dry unit weight of $112\text{ lb/ft}^3$. 

**Goal:** Calculate the Factor of Safety ($FS$) against sliding. If seepage develops parallel to the slope and is coincident with the ground surface, calculate the new Factor of Safety. (Assume saturated unit weight is $122\text{ lb/ft}^3$).

**Solution:**
1.  **Calculate Dry Slope $FS$:**
    $$FS = \frac{\tan(\phi')}{\tan(\beta)} = \frac{\tan(32^\circ)}{\tan(24^\circ)} = \frac{0.6249}{0.4452} = 1.40$$
2.  **Calculate Wet Slope $FS$ (with seepage):**
    *   $\gamma' = \gamma_{\text{sat}} - \gamma_w = 122 - 62.4 = 59.6\text{ lb/ft}^3$
    *   Seepage formula:
        $$FS = \left(\frac{\gamma'}{\gamma_{\text{sat}}}\right) \frac{\tan(\phi')}{\tan(\beta)}$$
        $$FS = \left(\frac{59.6}{122}\right) \cdot 1.403 = 0.4885 \cdot 1.403 = 0.69$$

*Result:* The dry slope is stable ($FS = 1.40$), but the introduction of seepage reduces the safety factor below $1.0$ ($FS = 0.69$), triggering a landslide failure.

---

## 6. Exam Pitfalls and Tips

*   **Pore Pressure Neglect:** Always subtract pore water pressure from total vertical stress before multiplying by $K_a$ or $K_p$. Soil grain lateral pressure depends only on effective stress.
*   **Water pressure coefficient:** Water has no shear strength, so it does not have a friction angle. Therefore, water pressure is never multiplied by $K_a$ or $K_p$. It is calculated simply as $u = \gamma_w h$ (using $K=1.0$).
*   **Resultant Locations:** Rectangular surcharge forces act at $H/2$. Triangular soil/water forces act at $H/3$. If there are multiple layers, be careful with the geometry of the pressure segments. Sketching the pressure diagram will prevent errors.
*   **Cohesive Active Pressures:** If a soil has cohesion, the active pressure is $\sigma'_h = K_a \sigma'_v - 2c\sqrt{K_a}$. Cohesion reduces lateral earth pressure and can create a theoretical tension crack zone near the surface ($z_{\text{crack}} = \frac{2c}{\gamma\sqrt{K_a}}$) where pressure is assumed to be zero.
