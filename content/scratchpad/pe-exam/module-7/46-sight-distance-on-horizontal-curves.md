---
title: "Sight Distance on Horizontal Curves"
weight: 46
---
# Sight Distance on Horizontal Curves

When a vehicle travels along a horizontal curve, the driver's line of sight can be obstructed by objects on the inside of the curve, such as retaining walls, bridge abutments, building facades, rock cuts, or dense vegetation. Designers must ensure that the lateral clearance between the travel lane and any obstruction is sufficient to provide the required stopping sight distance (SSD).

For the PE Civil Transportation exam, sight distance on horizontal curves is calculated using formulas from the **NCEES PE Civil Reference Handbook** and guidelines in the **AASHTO Green Book (GDHS)**, Chapter 3.

---

## Horizontal Sight Offset (HSO) and Middle Ordinate ($M_s$)

The lateral clearance required to maintain sight distance is called the **Horizontal Sight Offset (HSO)**, often designated as $M_s$ (which acts as a middle ordinate for the line-of-sight chord). 

```
                          Line of Sight (Chord)
                 ---------------------------------------
               /                   |                     \
             /                     | HSO (M_s)             \
           /                       v                         \
======= [PC] ================= Obstruction ================= [PT] =======
     \                                                             /
       \                      Travel Lane                         /
         \                   (Radius R)                          /
           \                                                    /
```

*   **Critical Reference Point:** $R$ and $M_s$ are measured relative to the **centerline of the inside travel lane**, not the centerline of the overall highway.
    *   $R$ = Radius of the centerline of the inside lane (ft).
    *   $M_s$ = Lateral clearance distance (HSO) measured from the centerline of the inside lane to the obstruction (ft).

---

## Math Equations for HSO ($M_s$)

There are two primary cases depending on the relative lengths of the Stopping Sight Distance ($S$) and the horizontal curve length ($L$):

### Case 1: Sight Distance is Less than or Equal to Curve Length ($S \le L$)
When the required sight distance is shorter than the curve, both the driver and the hazard are on the circular curve. The exact AASHTO formula is:

$$M_s = R \left[ 1 - \cos \left( \frac{28.65 \times S}{R} \right) \right]$$

Where:
*   $R$ = Radius of the centerline of the inside lane (ft).
*   $S$ = Required Stopping Sight Distance (ft).
*   The term $\frac{28.65 \times S}{R}$ represents half the central angle of the sight distance arc (in degrees).

### Case 2: Sight Distance is Greater than Curve Length ($S > L$)
When the required sight distance is longer than the curve, the driver, the hazard, or both may be on the tangent sections leading into or out of the curve. The line of sight is a chord that cuts across the curve. The standard approximation for $M_s$ in this case is:

$$M_s = \frac{L(2S - L)}{8R}$$

Where:
*   $L$ = Length of the horizontal curve (ft).
*   $S$ = Required Stopping Sight Distance (ft).
*   $R$ = Radius of the centerline of the inside lane (ft).

---

## Calculating Stopping Sight Distance ($S$)

If the stopping sight distance ($S$) is not directly provided in the problem statement, calculate it using the standard AASHTO equation:

$$S = 1.47 V t + \frac{V^2}{30 \left( \frac{a}{32.2} \pm G \right)} = 1.47 V t + \frac{V^2}{30 (0.348 \pm G)}$$

Where:
*   $V$ = Design speed (mph).
*   $t$ = Perception-reaction time = **2.5 seconds** (AASHTO standard).
*   $a$ = Deceleration rate = **11.2 ft/s²** (AASHTO standard).
*   $G$ = Longitudinal grade (decimal form; positive for upgrades, negative for downgrades).

---

## Worked Example: Retaining Wall Sight Clearance

### Problem Statement
A 4-lane divided highway has a horizontal curve with a design speed of $60\text{ mph}$ and a level grade ($G = 0.00$). The highway features $12\text{-ft}$ wide travel lanes. The radius of the highway centerline is $1,500\text{ ft}$. The curve length ($L$) is $800\text{ ft}$.
A new concrete retaining wall is proposed on the inside of the curve, located $18\text{ ft}$ from the right-hand edge of the inside pavement shoulder. The inside shoulder is $4\text{ ft}$ wide.

1.  Calculate the required Stopping Sight Distance ($S$) for the highway.
2.  Determine the radius of the centerline of the inside lane ($R$).
3.  Calculate the required Horizontal Sight Offset ($M_s$) for the retaining wall.
4.  Determine if the proposed retaining wall placement violates the required sight distance.

### Solution
1.  **Calculate the Stopping Sight Distance ($S$):**
    Using the standard AASHTO formula:
    $$S = 1.47(60\text{ mph})(2.5\text{ s}) + \frac{60^2}{30(0.348 + 0.00)}$$
    $$S = 220.5 + \frac{3600}{10.44} = 220.5 + 344.83 = 565.33\text{ ft}$$
    *Round up to standard AASHTO value:* **$570\text{ ft}$** (or use the theoretical $565.33\text{ ft}$. We will proceed with the theoretical value of $565.33\text{ ft}$ for precision).

2.  **Determine the Centerline Radius of the Inside Lane ($R$):**
    *   The highway centerline radius is $1,500\text{ ft}$.
    *   The highway has 4 lanes, meaning 2 lanes in each direction.
    *   The inside lane is the lane closest to the inside edge of the curve.
    *   The highway centerline separates the two directions of travel.
    *   Therefore, the inside travel lane is shifted toward the inside of the curve by:
        $$\text{Shift} = \text{Width of the adjacent lane} + \text{Half the width of the inside lane}$$
        $$\text{Shift} = 12\text{ ft} + \frac{12\text{ ft}}{2} = 18\text{ ft}$$
        *(This assumes standard layout. Let's make it simple: the inside lane is the lane closest to the inside curve. The centerline of this inside lane is at radius:)*
        $$R = R_{centerline} - 12\text{ ft} - 6\text{ ft} = 1500 - 18 = 1482\text{ ft}$$
    *   Let's check the lane position: the highway centerline is at radius $1,500\text{ ft}$. The inside lane (the rightmost lane for traffic turning right) is shifted outward or inward. If the curve bends to the right, the rightmost lane is the inside lane. Its centerline is at:
        $$R = 1500 - 6\text{ ft} = 1494\text{ ft}$$ (if it was a 2-lane road)
        For a 4-lane divided highway with 2 lanes in each direction: the centerline separates the two directions. The inside direction is the right curve. The lanes are: Lane 1 (inside/right) and Lane 2 (outside/left, adjacent to centerline).
        Therefore, the centerline of Lane 1 (the inside lane) is at:
        $$R = 1500\text{ ft} - (\text{Lane 2 width}) - (\text{Half of Lane 1 width}) = 1500 - 12 - 6 = 1482\text{ ft}$$

3.  **Calculate the Required HSO ($M_s$):**
    *   First, compare $S$ and $L$:
        *   $S = 565.33\text{ ft}$
        *   $L = 800\text{ ft}$
        *   Since $S \le L$ ($565.33\text{ ft} \le 800\text{ ft}$), we use **Case 1**:
    $$M_s = R \left[ 1 - \cos \left( \frac{28.65 \times S}{R} \right) \right]$$
    $$M_s = 1482 \left[ 1 - \cos \left( \frac{28.65 \times 565.33}{1482} \right) \right]$$
    *Calculate the angle inside the cosine:*
    $$\text{Angle} = \frac{16196.7}{1482} = 10.929^\circ$$
    $$M_s = 1482 [1 - \cos(10.929^\circ)]$$
    $$M_s = 1482 [1 - 0.98186] = 1482 \times 0.01814 = 26.88\text{ ft}$$

4.  **Evaluate Retaining Wall Placement:**
    *   The wall is located $18\text{ ft}$ from the right edge of the pavement.
    *   The inside shoulder is $4\text{ ft}$ wide, so the wall is $18 + 4 = 22\text{ ft}$ from the edge of the travel lane.
    *   We measure $M_s$ from the *centerline* of the inside travel lane.
    *   The distance from the centerline of the inside lane to the edge of the travel lane is half the lane width: $12\text{ ft} / 2 = 6\text{ ft}$.
    *   Therefore, the actual physical distance ($M_{actual}$) from the inside lane centerline to the wall is:
        $$M_{actual} = 6\text{ ft} \text{ (half-lane)} + 4\text{ ft} \text{ (shoulder)} + 18\text{ ft} \text{ (clearance)} = 28\text{ ft}$$
    *   Compare the actual clearance with the required HSO:
        $$M_{actual} = 28\text{ ft}$$
        $$M_{required} = 26.88\text{ ft}$$
    *   Since $28\text{ ft} \ge 26.88\text{ ft}$, the wall is placed far enough back to satisfy the sight distance requirements. The design is **satisfactory**.

### Answer
1.  Stopping sight distance ($S$): **565.3 ft**
2.  Radius of the inside lane ($R$): **1,482 ft**
3.  Required HSO ($M_s$): **26.88 ft**
4.  The proposed wall is safe because the actual clearance ($28\text{ ft}$) exceeds the required clearance ($26.88\text{ ft}$).

---

## Crucial Exam Tips

*   **Highway Centerline vs. Lane Centerline Radius:** Always read carefully to see if the radius given is for the *highway centerline* or the *inside lane*. If it's the highway centerline, you must subtract half the width of the inner lanes to get the radius of the inside lane centerline.
*   **Deciding Case 1 vs. Case 2:** Always perform the $S$ vs. $L$ check first. If $S > L$ and you use the Case 1 cosine equation, your result will be mathematically incorrect because the cosine equation assumes a continuous curve that doesn't exist beyond the PT.
*   **Angle Conversion Check:** In the formula $M_s = R[1 - \cos(\theta)]$, the angle $\theta = \frac{28.65 S}{R}$ is in **degrees**. Do not use radians in your calculator unless you convert the term $\frac{28.65 S}{R}$ (which is $\frac{S}{2R}$ in radians).
