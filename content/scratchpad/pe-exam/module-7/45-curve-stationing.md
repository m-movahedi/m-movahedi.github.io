---
title: "Curve Stationing"
weight: 45
---
# Curve Stationing

Stationing is a standard system used in highway engineering to measure distances along the centerline of a project alignment. Stationing is written in the format **$XX+YY.ZZ$**, where each "station" represents **$100\text{ ft}$**. For example, Station $14+25.30$ represents a physical distance of $1,425.30\text{ ft}$ from the project origin.

For the PE Civil Transportation exam, you must master the horizontal curve stationing workflow, know how to handle station equations, and understand how curves are laid out in the field using deflection angles and chords.

---

## Horizontal Curve Stationing Calculations

When a highway alignment curves, the stationing must follow the physical path of the vehicle—meaning it runs along the tangents until it reaches the PC, follows the circular arc of length $L$ to the PT, and then continues along the forward tangent. 

However, during design, the location of the Point of Intersection (PI) is established first. The stationing of the PC and PT are then derived from the PI stationing:

$$\text{PC Station} = \text{PI Station} - T$$
$$\text{PT Station} = \text{PC Station} + L$$

Where:
*   $T$ = Tangent length of the curve (ft).
*   $L$ = Arc length of the curve (ft).

```
   Back Tangent (Stationing ->)
===================[PC]---------------------[PI] (Intersection of Tangents)
                     \                      /
                      \    Circular Arc    / 
                       \    (Length L)    /  Forward Tangent
                        \                /
                         \_____________[PT]=======================
```

> [!WARNING]
> **The Ultimate Stationing Trap:** A common and fatal mistake is calculating the PT station as $\text{PT} = \text{PI} + T$. This is incorrect because it measures the distance along the two tangents ($T + T$) instead of along the actual curve arc ($L$). 
> $$\text{PT Station} \neq \text{PI Station} + T$$
> The stationing along the forward tangent past the PT is calculated from the PT station, not the PI station.

---

## Station Equations

A **station equation** is a point on an alignment where the stationing is reset, creating either a overlap (gap in stations) or a duplication (overlapping stations). Station equations typically occur when:
*   An alignment is shortened or lengthened during design after the original stationing was established.
*   Two independent projects are joined together.

### Notation:
$$\text{Station } 152+40.30\text{ Back} = \text{Station } 152+00.00\text{ Ahead}$$
*   **Back (BK):** The stationing prior to the equation (incoming chain).
*   **Ahead (AH):** The stationing after the equation (outgoing chain).
*   To calculate distances across a station equation:
    *   Find the distance from the starting point to the station equation using the "Back" stationing.
    *   Find the distance from the station equation to the destination using the "Ahead" stationing.
    *   Sum the two distances.

---

## Field Layout by Deflection Angles and Chords

To stake a circular curve in the field, surveyors set up a transit at the PC and measure deflection angles ($\delta$) and chord lengths ($c$) to intermediate stations along the curve.

### 1. Deflection Angle to an Intermediate Station
The deflection angle $\delta_i$ (in degrees) from the tangent at the PC to any intermediate station $S_i$ on the curve is proportional to the distance along the curve:

$$\delta_i = \frac{d_i \times D_a}{200}\text{ degrees}$$

Where:
*   $d_i$ = Arc distance along the curve from the PC to the intermediate station $S_i$ (ft).
*   $D_a$ = Degree of curve (arc definition, degrees).
*   *Note:* The total deflection angle from the PC to the PT is exactly half of the central angle ($\Delta / 2$).

### 2. Chord Length to an Intermediate Station
The straight-line chord distance ($c_i$) from the PC to the intermediate station $S_i$ is calculated using the radius ($R$):

$$c_i = 2 R \sin(\delta_i)$$

Where $\delta_i$ is the deflection angle for that station.

---

## Worked Example: Stationing and Field Layout

### Problem Statement
A highway designer is establishing stationing for a simple circular curve.
*   PI Station: $148+50.00$
*   Deflection Angle ($\Delta$): $32^\circ 00'$
*   Degree of Curve ($D_a$, arc definition): $4.0^\circ$

1.  Calculate the PC Station and PT Station of the curve.
2.  The curve is to be staked in the field. Determine the arc distance ($d_1$), the deflection angle ($\delta_1$), and the chord length ($c_1$) from the PC to stake the **first even-hundred station** on the curve.

### Solution
1.  **Calculate PC and PT Stations:**
    *   First, find the Radius ($R$):
        $$R = \frac{5729.58}{D_a} = \frac{5729.58}{4.0} = 1432.40\text{ ft}$$
    *   Find the Tangent Length ($T$):
        $$T = R \tan\left(\frac{\Delta}{2}\right) = 1432.40 \tan\left(\frac{32^\circ}{2}\right) = 1432.40 \tan(16^\circ)$$
        $$T = 1432.40 \times 0.28675 = 410.74\text{ ft}$$
    *   Find the Curve Length ($L$):
        $$L = \frac{100 \Delta}{D_a} = \frac{100 \times 32.0}{4.0} = 800.00\text{ ft}$$
    *   **PC Station:**
        $$\text{PC Station} = \text{PI} - T = (148+50.00) - 410.74\text{ ft}$$
        $$\text{PC Station} = 14850.00 - 410.74 = 14439.26 \implies \text{Station } 144+39.26$$
    *   **PT Station:**
        $$\text{PT Station} = \text{PC} + L = (144+39.26) + 800.00\text{ ft}$$
        $$\text{PT Station} = 14439.26 + 800.00 = 15239.26 \implies \text{Station } 152+39.26$$

2.  **Calculate Layout Parameters for the First Even-Hundred Station:**
    *   The PC Station is $144+39.26$.
    *   The next consecutive even-hundred station is **Station $145+00.00$**.
    *   Calculate the arc distance ($d_1$) from the PC to Station $145+00.00$:
        $$d_1 = (145+00.00) - (144+39.26) = 14500.00 - 14439.26 = 60.74\text{ ft}$$
    *   Calculate the deflection angle ($\delta_1$) for this station:
        $$\delta_1 = \frac{d_1 \times D_a}{200} = \frac{60.74 \times 4.0}{200} = 1.2148^\circ$$
        *Convert to Degrees-Minutes-Seconds (DMS) for surveying:*
        $$\delta_1 = 1^\circ 12' 53''$$
    *   Calculate the chord length ($c_1$):
        $$c_1 = 2 R \sin(\delta_1) = 2 \times 1432.40 \sin(1.2148^\circ)$$
        $$c_1 = 2864.80 \times 0.02120 = 60.73\text{ ft}$$
        *Note:* For short arcs, the chord length is extremely close to the arc distance ($60.73\text{ ft}$ vs. $60.74\text{ ft}$).

### Answer
1.  PC Station: **144+39.26**; PT Station: **152+39.26**
2.  For Station $145+00$: Arc distance $d_1 = \mathbf{60.74\text{ ft}}$, Deflection angle $\delta_1 = \mathbf{1.2148^\circ}$ ($1^\circ 12' 53''$), Chord length $c_1 = \mathbf{60.73\text{ ft}}$.

---

## Crucial Exam Tips

*   **Tangent Overlap Check:** Remember the path of stationing! When checking a design, if you are given stationing along a tangent path that extends through a PI, you must subtract $T$ to get to the PC, and then add $L$ to get the PT. Never add $T$ directly to the PI to find the PT.
*   **Station Arithmetic:** When subtracting or adding station values, it is safest to convert the stations into absolute decimal feet (e.g., $144+39.26 \to 14439.26$), perform the standard addition/subtraction, and then convert back to station format. This prevents mistakes with the "+" sign.
*   **First and Last Subchords:** The subchord from the PC to the first even-hundred station ($c_1$) and the subchord from the last even-hundred station to the PT ($c_n$) are always shorter than a standard $100\text{-ft}$ chord. Always calculate the specific arc distance ($d$) for these segments to find their deflection angles.
