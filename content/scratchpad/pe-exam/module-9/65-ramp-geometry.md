---
title: "Ramp Geometry"
weight: 65
---
# Ramp Geometry

Ramps are the connecting roadways that facilitate vehicle transfers between intersecting facilities at interchanges. Designing ramp geometry requires determining appropriate design speeds, horizontal curve radii, super-elevation rates, and vertical grades to ensure that vehicles can transition safely from one highway speed to another.

---

## Design Speed of Ramps

Ramp design speeds are determined as a percentage of the design speed of the intersecting freeway, according to AASHTO Green Book Table 10-1. There are three design speed ranges:
1.  **Upper Range (85%):** Used where the ramp connects two high-speed freeways.
2.  **Middle Range (70%):** The standard design range for most freeway-to-arterial ramps.
3.  **Lower Range (50%):** Used for loop ramps or in highly restricted urban environments.

AASHTO standard ramp design speeds based on freeway design speeds are:

| Freeway Design Speed (mph) | Upper Range (mph) | Middle Range (mph) | Lower Range (mph) |
| :---: | :---: | :---: | :---: |
| **50** | 45 | 35 | 25 |
| **60** | 50 | 45 | 30 |
| **70** | 60 | 50 | 35 |
| **80** | 70 | 60 | 40 |

*Loop Ramps:* Loop ramps (such as those in cloverleaf interchanges) are geometrically limited by their tight curvature. They are almost always designed using the **Lower Range** (typically $25$ to $30\text{ mph}$) to limit the required land area.

---

## Horizontal Alignment

Ramps consist of tangent sections, circular curves, and transition curves (spirals). 

### Minimum Radius ($R_{\text{min}}$)
The minimum radius of a ramp curve is determined by its design speed, maximum super-elevation rate ($e$), and the maximum side friction factor ($f$):

$$R_{\text{min}} = \frac{V^2}{15 (e + f)}$$

Where:
*   $R_{\text{min}}$ = minimum radius of curvature (ft)
*   $V$ = design speed of the ramp (mph)
*   $e$ = super-elevation rate (decimal; typically limited to a maximum of $0.06$ to $0.08$ on ramps)
*   $f$ = maximum side friction factor (varies by speed; e.g., $f = 0.16$ at $40\text{ mph}$, and $f = 0.23$ at $25\text{ mph}$)

### Super-elevation Transition
Because ramps transition from a mainline freeway cross slope (typically $-2.0\%$) to a sharp ramp curve, designers must carefully design the **super-elevation runoff** (the distance over which the pavement is rotated). This transition must occur gradually to prevent driver loss-of-control and ensure proper drainage.

---

## Vertical Alignment

Ramp vertical alignments can generally accommodate steeper grades than the mainline freeway because speeds are lower.

### Maximum Ramp Grades
According to AASHTO, maximum ramp grades are determined by the ramp design speed:

*   **Design Speed $\ge 50\text{ mph}$:** Maximum grade is typically **$3\%$ to $5\%$**.
*   **Design Speed $35$ to $45\text{ mph}$:** Maximum grade is typically **$5\%$ to $7\%$**.
*   **Design Speed $\le 30\text{ mph}$ (Loop Ramps):** Maximum grade can be up to **$7\%$ to $8\%$** (up to $8\%$ is acceptable for one-way downgrades).

### Vertical Curves
Vertical curves on ramps should be designed using the standard crest and sag formulas. Special attention must be paid to satisfying stopping sight distance ($SSD$) at all points along the ramp profile, particularly where the ramp passes under a bridge girder or sign structure.

---

## Worked Example

A right-turning ramp connects a freeway with a design speed of $70\text{ mph}$ to an arterial road. The ramp is designed using the **Middle Range** design speed. The maximum super-elevation rate ($e_{\text{max}}$) permitted for this ramp is $6.0\%$ ($0.06$). The maximum side friction factor ($f$) for the selected design speed is $0.16$.

1.  Identify the design speed ($V$) of the ramp.
2.  Calculate the minimum allowable radius ($R_{\text{min}}$) for the ramp curve.
3.  If the designer uses a radius of $650\text{ ft}$ and wants to restrict the super-elevation to $4.0\%$ ($e = 0.04$), calculate the actual side friction factor ($f_{\text{actual}}$) experienced by a vehicle traveling at the ramp design speed, and determine if it is acceptable.

### Solution

**1. Identify Ramp Design Speed ($V$):**
*   Freeway design speed = $70\text{ mph}$.
*   Using AASHTO table for "Middle Range":
    $$V = 50\text{ mph}$$

**2. Calculate Minimum Radius ($R_{\text{min}}$):**
*   $V = 50\text{ mph}$
*   $e = 0.06$
*   $f = 0.16$

$$R_{\text{min}} = \frac{V^2}{15 (e + f)}$$
$$R_{\text{min}} = \frac{50^2}{15 (0.06 + 0.16)} = \frac{2500}{15 (0.22)} = \frac{2500}{3.3} = 757.58\text{ ft} \approx 760\text{ ft}$$

**3. Calculate Actual Side Friction for $R = 650\text{ ft}$ with $e = 0.04$:**
*   First, note that since $R = 650\text{ ft} < R_{\text{min}} = 758\text{ ft}$ (calculated with $e=0.06$), we cannot use a super-elevation as low as $0.04$ at $50\text{ mph}$. Let's calculate the required side friction to verify this mathematically:

$$R = \frac{V^2}{15(e + f)} \implies e + f = \frac{V^2}{15 R}$$
$$f_{\text{actual}} = \frac{V^2}{15 R} - e$$
$$f_{\text{actual}} = \frac{50^2}{15 \times 650} - 0.04 = \frac{2500}{9750} - 0.04 = 0.2564 - 0.04 = 0.2164 \approx 0.22$$

*Evaluate:*
*   The maximum allowable side friction factor ($f$) at $50\text{ mph}$ is $0.16$.
*   Since $f_{\text{actual}} = 0.22 > 0.16$, this design is **unacceptable**. Drivers would experience excessive lateral discomfort, and vehicles would be at risk of skidding off the curve.
*   *Solution:* The designer must either increase the radius to at least $758\text{ ft}$ (at $e=0.06$), increase the super-elevation, or lower the design speed of the ramp.

## References

*   *A Policy on Geometric Design of Highways and Streets* (AASHTO Green Book), 7th Edition, 2018, Section 10.9.1 & 10.9.2.
*   *NCEES PE Civil Reference Handbook*, Section 4.3.1.
