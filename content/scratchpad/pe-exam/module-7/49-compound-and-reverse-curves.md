# Compound and Reverse Curves

While simple horizontal curves are the most common horizontal alignment elements, complex alignments sometimes require combining multiple curves. Two such configurations are **compound curves** and **reverse curves**.

For the PE Civil Transportation exam, you must understand their geometric relationships, coordinate calculations, stationing workflows, and critical design limitations set by **AASHTO's Green Book (GDHS)**, Chapter 3.

---

## Compound Curves

A compound curve consists of two or more circular curves of different radii curving in the same direction, meeting at a common **Point of Compound Curvature (PCC)**.

```
       Back Tangent
==================[PC] (Radius R_1)
                     \
                      \    Curve 1 (Angle Delta_1)
                       \
                       [PCC] (Common Tangent Line)
                         \
                          \    Curve 2 (Angle Delta_2)
                           \
                           [PT] (Radius R_2)
                              ================== Forward Tangent
```

### Key Geometry:
*   **Total Deflection Angle ($\Delta$):** The total angle of deflection between the back and forward tangents is the sum of the individual curve central angles:
    $$\Delta = \Delta_1 + \Delta_2$$
*   **Stationing:** Stationing runs continuously along the curve:
    $$\text{PCC Station} = \text{PC Station} + L_1$$
    $$\text{PT Station} = \text{PCC Station} + L_2$$
    Where $L_1$ and $L_2$ are the arc lengths of Curve 1 and Curve 2, calculated using their respective radii ($R_1, R_2$) and central angles ($\Delta_1, \Delta_2$).

### AASHTO Design Criteria (Radius Ratios)
To prevent drivers from experiencing sudden shifts in lateral acceleration, the transition from a larger radius ($R_1$) to a smaller radius ($R_2$) must be gradual:
*   **High-Speed Highways:** The ratio of the larger radius to the smaller radius should not exceed **1.5**:
    $$\frac{R_{large}}{R_{small}} \le 1.5$$
*   **Low-Speed Intersections and Ramps:** The ratio of the larger radius to the smaller radius should not exceed **2.0**:
    $$\frac{R_{large}}{R_{small}} \le 2.0$$

---

## Reverse Curves

A reverse curve consists of two circular curves of equal or different radii curving in opposite directions, meeting at a common **Point of Reverse Curvature (PRC)**.

```
                    Curve 1 (Left Curve)
                   /
================[PC]
                 \
                  \
                  [PRC] (Point of Zero Curvature)
                     \
                      \
                      [PT] (Right Curve)
                          ====================
```

### The Superelevation Hazard in Reverse Curves
Reverse curves present a significant safety issue on high-speed roads because the roadway must transition from full superelevation in one direction (e.g., $+6\%$) to full superelevation in the opposite direction (e.g., $-6\%$).
*   **The Flat Spot:** At the PRC, the cross slope must pass through $0\%$. This creates a flat area of pavement with zero cross slope, leading to severe drainage problems and hydroplaning risks.
*   **Driver Control:** A driver crossing the PRC must quickly rotate the steering wheel in the opposite direction while the vehicle's lateral acceleration flips, creating instability.

### AASHTO Guidelines for Reverse Curves:
*   **High-Speed Routes:** Reverse curves are **strongly discouraged**. If they must be used, they must be separated by a **tangent section of sufficient length** to accommodate the superelevation runoff of both curves, or by spiral transition curves.
*   **Low-Speed Routes:** Acceptable at low speeds (such as temporary detours or parking lot lanes) where lateral acceleration forces are minimal.

---

## Worked Example: Compound Curve Verification and Stationing

### Problem Statement
A compound curve is proposed for an interchange exit ramp. The design speed of the ramp is $35\text{ mph}$ (low-speed facility). 
*   Curve 1: Radius ($R_1$) = $600\text{ ft}$, Central Angle ($\Delta_1$) = $24^\circ 00'$
*   Curve 2: Radius ($R_2$) = $320\text{ ft}$, Central Angle ($\Delta_2$) = $38^\circ 00'$
*   PC Station: $200+50.00$

1.  Verify whether the proposed compound curve radii meet the AASHTO design criteria for a low-speed ramp.
2.  Calculate the arc lengths of Curve 1 ($L_1$) and Curve 2 ($L_2$).
3.  Determine the stationing of the Point of Compound Curvature (PCC) and the Point of Tangency (PT).

### Solution
1.  **Verify AASHTO Radius Ratio Criterion:**
    *   Larger radius ($R_{large}$) = $600\text{ ft}$
    *   Smaller radius ($R_{small}$) = $320\text{ ft}$
    *   Calculate the ratio:
        $$\text{Ratio} = \frac{R_1}{R_2} = \frac{600\text{ ft}}{320\text{ ft}} = 1.875$$
    *   For low-speed facilities, the AASHTO limit is $2.0$.
    *   Since $1.875 \le 2.0$, the proposed compound curve **satisfies the AASHTO criterion**.

2.  **Calculate Arc Lengths ($L_1$ and $L_2$):**
    *   **Curve 1 Length ($L_1$):**
        $$L_1 = R_1 \Delta_1 \left( \frac{\pi}{180} \right) = 600\text{ ft} \times 24^\circ \times 0.0174533 = 251.33\text{ ft}$$
    *   **Curve 2 Length ($L_2$):**
        $$L_2 = R_2 \Delta_2 \left( \frac{\pi}{180} \right) = 320\text{ ft} \times 38^\circ \times 0.0174533 = 212.23\text{ ft}$$

3.  **Determine Stationing:**
    *   **PC Station:** $200+50.00$
    *   **PCC Station:**
        $$\text{PCC Station} = \text{PC} + L_1 = (200+50.00) + 251.33\text{ ft}$$
        $$\text{PCC Station} = 20050.00 + 251.33 = 20301.33 \implies \text{Station } 203+01.33$$
    *   **PT Station:**
        $$\text{PT Station} = \text{PCC} + L_2 = (203+01.33) + 212.23\text{ ft}$$
        $$\text{PT Station} = 20301.33 + 212.23 = 20513.56 \implies \text{Station } 205+13.56$$

### Answer
1.  The radius ratio is **1.875**, which meets the AASHTO limit ($\le 2.0$).
2.  Curve lengths: $L_1 = \mathbf{251.33\text{ ft}}$ and $L_2 = \mathbf{212.23\text{ ft}}$.
3.  PCC Station: **203+01.33**; PT Station: **205+13.56**.

---

## Crucial Exam Tips

*   **Identifying the Speed Limit:** On the exam, pay close attention to whether the roadway is high-speed ($\ge 50\text{ mph}$) or low-speed ($\le 45\text{ mph}$). Applying the wrong radius ratio limit (e.g., using $2.0$ instead of $1.5$ on a highway) is a common trap.
*   **No Short Cuts through the PI:** In compound curves, you cannot calculate the PT station by working through a single PI tangent length like you would for a simple curve. You must calculate the lengths of the individual curve arcs ($L_1, L_2$) and add them sequentially starting from the PC.
*   **PRC Stationing in Reverse Curves:** If a question asks for the stationing of a reverse curve, remember that:
    $$\text{PRC Station} = \text{PC Station} + L_1$$
    $$\text{PT Station} = \text{PRC Station} + L_2$$
    Just like compound curves, the stationing runs strictly along the centerline arc of the roadway.
