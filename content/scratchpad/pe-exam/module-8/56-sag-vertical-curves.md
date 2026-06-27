# Sag Vertical Curves

Sag vertical curves connect a downgrade to an upgrade (or a steep downgrade to a flatter downgrade, etc.), where the algebraic difference in grade is positive ($g_1 < g_2$). Unlike crest curves, where sight distance is restricted by the roadway surface itself, sight distance on sag curves during the day is generally unrestricted. 

Consequently, the design of sag vertical curves is governed by four criteria:
1.  **Headlight Sight Distance** (the primary safety control for nighttime driving)
2.  **Passenger Comfort** (limiting vertical acceleration)
3.  **Drainage Control** (preventing water accumulation in the low point)
4.  **General Appearance** (preventing an abrupt or sagging look)

---

## Headlight Sight Distance Criteria

During nighttime, the distance the driver can see is limited by the reach and angle of the vehicle's headlights. AASHTO design standards assume:
*   **Headlight Height ($h_3$):** $2.00\text{ ft}$ ($0.60\text{ m}$)
*   **Headlight Upward Divergence Angle ($\beta$):** $1.0^\circ$ (yielding $\tan \beta = \tan 1.0^\circ \approx 0.0175$)

```
                                                     PVT
                                                    /
             PVC                                   /   g2 (+)
                \                                 /
    g1 (-)       \                               /------------->
  ----------->    \    ____________________     /
                   \--/      light beam    \---O  Headlight (h3)
                      \____________________/  /
                                           \/
                                           PVI
                       |<------- L ------->|
                       |<--------- S --------->|
```

The minimum curve length ($L$) equations based on headlight sight distance are categorized by two cases.

### 1. USCS (English) Units
With $h_3 = 2.00\text{ ft}$ and $\beta = 1.0^\circ$:

*   **Case 1: Sight Distance $\le$ Curve Length ($S \le L$)**
    $$L = \frac{A S^2}{200(h_3 + S \tan \beta)} = \frac{A S^2}{400 + 3.5 S}$$

*   **Case 2: Sight Distance $>$ Curve Length ($S > L$)**
    $$L = 2S - \frac{400 + 3.5 S}{A}$$

Where:
*   $L$ = length of vertical curve (ft)
*   $S$ = stopping sight distance (ft)
*   $A$ = algebraic grade difference (%) = $|g_2 - g_1|$

### 2. Metric (SI) Units
With $h_3 = 0.60\text{ m}$ and $\beta = 1.0^\circ$:

*   **Case 1: Sight Distance $\le$ Curve Length ($S \le L$)**
    $$L = \frac{A S^2}{120 + 3.5 S}$$

*   **Case 2: Sight Distance $>$ Curve Length ($S > L$)**
    $$L = 2S - \frac{120 + 3.5 S}{A}$$

Where $L$ and $S$ are in meters, and $A$ is in percent.

---

## Passenger Comfort Criterion

When a vehicle travels through a sag curve, centrifugal force acts downward, adding to the force of gravity. To ensure passenger comfort, the vertical acceleration should be limited to less than $1.0\text{ ft/s}^2$ ($0.3\text{ m/s}^2$). The required curve length for comfort is:

### USCS Units
$$L_{\text{comfort}} = \frac{A V^2}{46.5}$$

### Metric Units
$$L_{\text{comfort}} = \frac{A V^2}{395}$$

Where $V$ is the design speed (mph in USCS, km/h in metric) and $A$ is in percent.

---

## Drainage Control (Maximum $K$)

In sag curves, water drains toward the low point of the curve. If the curve is too flat, water will pond, causing hydroplaning hazards. This is particularly critical when the road is built with curbs.

*   **Drainage Limit:** The rate of vertical curvature $K = L/A$ should not exceed **$167\text{ ft/\%}$** ($51\text{ m/\%}$ for metric).
*   If $K > 167$, special design is required to ensure a minimum $0.3\%$ grade slope is maintained within $50\text{ ft}$ of the low point.

---

## General Appearance Criterion

To prevent the curve from looking like a sagged dip or an abrupt kink, AASHTO recommends a minimum curve length based on design speed:

$$L_{\text{min}} \ge 3 V$$

Where $V$ is the design speed in mph.

---

## Worked Example

A sag vertical curve is to connect an initial grade $g_1 = -3.5\%$ and a final grade $g_2 = +2.5\%$. The design speed of the highway is $55\text{ mph}$. 

Determine:
1. The minimum required length of the vertical curve based on headlight sight distance (verifying the $S \le L$ assumption).
2. The minimum required length based on passenger comfort.
3. The minimum required length based on general appearance.
4. The governing design length.
5. Whether the governing design length complies with the drainage criteria.

### Solution

**1. Calculate Length for Headlight Sight Distance ($S$):**
*   From AASHTO design tables, the design SSD for $55\text{ mph}$ is $495\text{ ft}$.
*   Calculate algebraic grade difference:
    $$A = |g_2 - g_1| = |+2.5 - (-3.5)| = 6.0\%$$
*   *Assumption:* Assume $S \le L$.
    $$L = \frac{A S^2}{400 + 3.5 S} = \frac{6.0 \times (495)^2}{400 + 3.5(495)}$$
    $$L = \frac{6.0 \times 245,025}{400 + 1732.5} = \frac{1,470,150}{2132.5} = 689.40\text{ ft}$$
*   *Verify assumption:* Is $S \le L$? Since $495\text{ ft} \le 689.40\text{ ft}$, the assumption is correct.
*   Thus, the minimum length for headlight sight distance is $689.4\text{ ft}$ (AASHTO tables round this to $690\text{ ft}$ using the rounded $K = 115\text{ ft/\%}$, i.e., $L = 115 \times 6.0 = 690\text{ ft}$).

**2. Calculate Length for Passenger Comfort:**
$$L_{\text{comfort}} = \frac{A V^2}{46.5} = \frac{6.0 \times (55)^2}{46.5} = \frac{6.0 \times 3025}{46.5} = \frac{18,150}{46.5} = 390.32\text{ ft}$$

**3. Calculate Length for General Appearance:**
$$L_{\text{appearance}} = 3V = 3(55) = 165\text{ ft}$$

**4. Determine governing design length:**
Comparing the three criteria:
*   Headlight Sight Distance: $690\text{ ft}$ (governs)
*   Passenger Comfort: $390.3\text{ ft}$
*   Appearance: $165\text{ ft}$

The governing minimum design length is **$690\text{ ft}$**.

**5. Verify Drainage Criteria:**
*   $K = L / A = 690 / 6.0 = 115\text{ ft/\%}$
*   The AASHTO maximum drainage limit is $167\text{ ft/\%}$.
*   Since $115 < 167$, the curve is steep enough to avoid drainage ponding and is acceptable.

## References

*   *A Policy on Geometric Design of Highways and Streets* (AASHTO Green Book), 7th Edition, 2018, Section 3.4.6.2.
*   *NCEES PE Civil Reference Handbook*, Section 4.3.1.
