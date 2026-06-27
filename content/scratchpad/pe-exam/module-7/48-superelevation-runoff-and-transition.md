# Superelevation Runoff and Transition

Superelevation transition is the progressive rotation of the roadway cross-section from a normal crown (NC) to a fully superelevated section ($e_d$). Properly designing this transition is critical for driver comfort, vehicle stability, and drainage.

For the PE Civil Transportation exam, transition lengths and station-specific cross slopes are calculated using formulas from **AASHTO's Green Book (GDHS)**, Chapter 3.

---

## Components of the Transition

The superelevation transition is divided into two distinct sections along the alignment:

1.  **Tangent Runout ($L_t$):** The length of roadway required to rotate the outside lane from a normal crown cross slope (typically $-2.0\%$) to a flat ($0.0\%$) cross slope.
2.  **Superelevation Runoff ($L_r$):** The length of roadway required to rotate the pavement cross-section from a flat ($0.0\%$) cross slope to the design superelevation rate ($e_d$).

```
Normal Crown       Flat Outside       Adverse Crown      Full Superelevation
    (-2%, -2%)        (0%, -2%)          (+2%, -2%)          (+6%, -6%)
=======|------------------|------------------|------------------|=======
       <-- Tangent Runout --><----------- Superelevation Runoff ----------->
              (L_t)                                 (L_r)
                             <- (2/3) L_r on Tangent -><- (1/3) L_r on Curve ->
                                                      ^
                                                      PC Station
```

---

## Transition Length Equations

### 1. Superelevation Runoff Length ($L_r$)
The minimum length of runoff is governed by the lane width, number of lanes rotated, design speed, and the maximum relative gradient between the edge of the pavement and the axis of rotation:

$$L_r = \frac{w \cdot n_1 \cdot e_d \cdot b_w}{\Delta}$$

Where:
*   $w$ = Width of a travel lane (ft, typically $12\text{ ft}$).
*   $n_1$ = Number of lanes rotated. For a standard 2-lane road rotated about the centerline, $n_1 = 1$.
*   $e_d$ = Design superelevation rate (expressed as a percentage, e.g., $6.0$ for $6.0\%$).
*   $b_w$ = Adjustment factor for the number of lanes rotated (from AASHTO Table 3-16):
    *   $1$ lane rotated: $b_w = 1.00$
    *   $2$ lanes rotated: $b_w = 1.50$
    *   $3$ lanes rotated: $b_w = 2.00$
*   $\Delta$ = Maximum relative gradient (%) between the profile grade line and the pavement edge (from AASHTO Table 3-15):
    *   $30\text{ mph}$: $\Delta = 0.75\%$
    *   $40\text{ mph}$: $\Delta = 0.60\%$
    *   $50\text{ mph}$: $\Delta = 0.50\%$
    *   $60\text{ mph}$: $\Delta = 0.45\%$
    *   $70\text{ mph}$: $\Delta = 0.40\%$
    *   $80\text{ mph}$: $\Delta = 0.35\%$

*Note: In the formula, both $e_d$ and $\Delta$ are entered as percentages (e.g., $6.0$ and $0.50$, respectively), which cancel out mathematically.*

### 2. Tangent Runout Length ($L_t$)
The tangent runout length is proportional to the runoff length, matching the ratio of the normal crown cross slope to the design superelevation rate:

$$L_t = \frac{e_{NC}}{e_d} L_r$$

Where:
*   $e_{NC}$ = Normal crown cross slope (typically $1.5\%$ or $2.0\%$).
*   $e_d$ = Design superelevation rate (%).

---

## Placement of the Transition (Stationing)

To ensure a smooth ride, the transition must be distributed across the Point of Curvature (PC) and the Point of Tangency (PT). 
*   **Standard Practice (2/3 : 1/3 Rule):** 
    *   **$2/3$ ($67\%$)** of the superelevation runoff length ($L_r$) is placed on the tangent section prior to the PC.
    *   **$1/3$ ($33\%$)** of the superelevation runoff length ($L_r$) is placed on the horizontal curve after the PC.
*   **Tangent Runout placement:** The tangent runout ($L_t$) directly precedes the runoff on the tangent.

Using this layout, key transition stations can be identified:

| Cross Slope Condition | Location Description | Station Formula |
| :--- | :--- | :--- |
| **Normal Crown (-2%, -2%)** | Start of the transition | $$\text{Station} = \text{PC} - \frac{2}{3} L_r - L_t$$ |
| **Flat Outside (0%, -2%)** | Outside lane is flat | $$\text{Station} = \text{PC} - \frac{2}{3} L_r$$ |
| **Reverse Crown (+2%, -2%)** | Outside lane matches inside lane | $$\text{Station} = \text{PC} - \frac{2}{3} L_r + L_t$$ |
| **Full Superelevation (+e, -e)** | End of the runoff | $$\text{Station} = \text{PC} + \frac{1}{3} L_r$$ |

---

## Worked Example: Superelevation Transition Stationing

### Problem Statement
A simple circular curve is designed for a 2-lane rural highway rotated about the centerline.
*   Design Speed ($V$): $50\text{ mph}$
*   Design Superelevation ($e_d$): $6.0\%$
*   Normal Crown ($e_{NC}$): $2.0\%$
*   Lane Width ($w$): $12\text{ ft}$
*   PC Station: $120+00.00$

1.  Find the minimum required superelevation runoff length ($L_r$) using AASHTO guidelines ($\Delta = 0.50\%$ at $50\text{ mph}$).
2.  Calculate the required tangent runout length ($L_t$).
3.  Assuming the standard $2/3 : 1/3$ distribution rule is applied, calculate the station where:
    *   The outside lane is flat ($0\%$).
    *   The outside lane is at $+2\%$ (reverse crown).
    *   Full superelevation ($+6\%$) is achieved.

### Solution
1.  **Calculate the Superelevation Runoff Length ($L_r$):**
    *   Width of travel lane ($w$) = $12\text{ ft}$
    *   Lanes rotated ($n_1$) = $1$ (for a 2-lane highway rotated about the centerline)
    *   Adjustment factor ($b_w$) = $1.00$
    *   Design superelevation ($e_d$) = $6.0\%$
    *   Relative gradient ($\Delta$) = $0.50\%$ (at $50\text{ mph}$)
    $$L_r = \frac{w \cdot n_1 \cdot e_d \cdot b_w}{\Delta}$$
    $$L_r = \frac{12 \times 1 \times 6.0 \times 1.00}{0.50} = \frac{72}{0.50} = 144.00\text{ ft}$$

2.  **Calculate the Tangent Runout Length ($L_t$):**
    $$L_t = \frac{e_{NC}}{e_d} L_r$$
    $$L_t = \frac{2.0\%}{6.0\%} \times 144.00\text{ ft} = \frac{1}{3} \times 144.00 = 48.00\text{ ft}$$

3.  **Calculate Specific Cross Slope Stations:**
    *   The PC is located at Station $120+00.00$.
    *   **Outside Lane is Flat (0%):**
        This occurs at the start of the runoff, which is exactly $2/3$ of $L_r$ before the PC:
        $$\text{Station}_{0\%} = \text{PC} - \frac{2}{3} L_r$$
        $$\text{Station}_{0\%} = 12000.00 - \left(\frac{2}{3} \times 144.00\right) = 12000.00 - 96.00 = 11904.00 \implies \text{Station } 119+04.00$$
    *   **Reverse Crown (+2%):**
        At this point, the outside lane has been rotated from $0\%$ to $+2\%$. This transition takes a distance of $L_t$ (since $e_{NC} = 2\%$). Therefore, it occurs at a distance of $L_t$ past the flat-outside station:
        $$\text{Station}_{+2\%} = \text{Station}_{0\%} + L_t$$
        $$\text{Station}_{+2\%} = 11904.00 + 48.00 = 11952.00 \implies \text{Station } 119+52.00$$
    *   **Full Superelevation (+6%):**
        This occurs at the end of the runoff, which is $1/3$ of $L_r$ past the PC:
        $$\text{Station}_{+6\%} = \text{PC} + \frac{1}{3} L_r$$
        $$\text{Station}_{+6\%} = 12000.00 + \left(\frac{1}{3} \times 144.00\right) = 12000.00 + 48.00 = 12048.00 \implies \text{Station } 120+48.00$$

### Answer
1.  Runoff length ($L_r$): **144.0 ft**
2.  Tangent runout ($L_t$): **48.0 ft**
3.  Transition Stations:
    *   Flat outside ($0\%$): **Station 119+04.00**
    *   Reverse crown ($+2\%$): **Station 119+52.00**
    *   Full superelevation ($+6\%$): **Station 120+48.00**

---

## Crucial Exam Tips

*   **Adjustment Factor ($b_w$) Applicability:** Do not forget the adjustment factor $b_w$ if the highway has more than two lanes. If a question describes a 4-lane divided highway with two lanes rotated about the centerline, $n_1 = 2$ and $b_w = 1.50$. Forgetting $b_w$ will result in a design that is too short and hazardous.
*   **Station Alignment Math:** When calculating stations, remember that $L_r$ is split $2/3 : 1/3$ across the PC. The tangent runout ($L_t$) is located entirely before the runoff begins, meaning the *entire* transition starts at $\text{PC} - \frac{2}{3} L_r - L_t$.
*   **Divided Highway Centerline Rotation:** On divided highways with a wide median, the axis of rotation may be located along the inside or outside edge of the pavement rather than the centerline of the overall median. Read the problem details carefully to identify the axis of rotation.
