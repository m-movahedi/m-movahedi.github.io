---
title: "Vertical Curve Fundamentals"
weight: 52
---
# Vertical Curve Fundamentals

Vertical curves are used in highway design to provide a smooth transition between two intersecting grade tangents. Unlike horizontal curves, which are typically circular arcs, vertical curves are designed as parabolic arcs. A parabolic profile provides a constant rate of change of grade, which minimizes vertical acceleration and passenger discomfort while maintaining consistent steering control.

## Curve Classifications

Vertical curves are classified based on the relative direction of the grade change:

*   **Crest Vertical Curves:** Occur when the algebraic change in grade is negative ($g_1 > g_2$). Graphically, these curves curve downward, resembling a hill. The intersection of the tangents (Point of Vertical Intersection, or PVI) lies above the curve.
*   **Sag Vertical Curves:** Occur when the algebraic change in grade is positive ($g_1 < g_2$). Graphically, these curves curve upward, resembling a valley. The PVI lies below the curve.

```
       Crest Curve (g1 > g2)                 Sag Curve (g1 < g2)
       
                PVI                                  
                /\                                   \        /
               /  \                                   \      / 
   g1 (+)     /    \     g2 (-)            g1 (-)      \    /      g2 (+)
  ---------->/      \---------->          ----------->  \  /  ---------->
            /  curve \                                   \/  curve
           /__________\                                 PVI
          PVC        PVT                               PVC   PVT
```

## Key Geometry and Definitions

In vertical alignment, all distances are measured along the horizontal plane. The actual curve length is the horizontal distance between the start and end of the curve, not the distance along the parabolic path.

*   **PVC (Point of Vertical Curvature):** The starting point of the vertical curve where the initial grade tangent ($g_1$) meets the parabola.
*   **PVI (Point of Vertical Intersection):** The vertex where the two grade tangents intersect.
*   **PVT (Point of Vertical Tangency):** The ending point of the vertical curve where the parabola meets the final grade tangent ($g_2$).
*   **$g_1$ (Initial Grade):** The slope of the approach tangent, expressed as a percentage (%) or a decimal (ft/ft). Upward grades are positive (+); downward grades are negative (-).
*   **$g_2$ (Final Grade):** The slope of the departure tangent, expressed as a percentage (%) or a decimal (ft/ft).
*   **$L$ (Length of Curve):** The total horizontal distance from the PVC to the PVT, typically measured in feet (or meters) or in 100-foot stations.
*   **$A$ (Algebraic Grade Difference):** The absolute value of the difference between the two grades:
    $$A = |g_2 - g_1|$$
    *Note: When using AASHTO formulas, $A$ is typically entered as a percentage (e.g., for $g_1 = +3\%$ and $g_2 = -2\%$, $A = |-2 - 3| = 5$).*
*   **$r$ (Rate of Change of Grade):** The change in grade per unit length of the curve:
    $$r = \frac{g_2 - g_1}{L}$$
*   **$K$ (Rate of Vertical Curvature):** The horizontal distance required to effect a 1% change in grade:
    $$K = \frac{L}{A}$$
    Where $L$ is in feet and $A$ is in percent. The $K$-value is a critical design metric used to determine minimum curve lengths for stopping, passing, and headlight sight distances.

## Stationing and Elevation Relationships

Because vertical parabolas are symmetric, the PVI is located exactly halfway along the horizontal length of the curve. Consequently, the horizontal distance from the PVC to the PVI is $L/2$, and from the PVI to the PVT is also $L/2$.

This symmetry establishes the following stationing equations:

$$\text{Station}_{\text{PVC}} = \text{Station}_{\text{PVI}} - \frac{L}{2}$$

$$\text{Station}_{\text{PVT}} = \text{Station}_{\text{PVI}} + \frac{L}{2} = \text{Station}_{\text{PVC}} + L$$

Similarly, the elevations of the tangent points can be calculated from the PVI elevation using the constant tangent grades:

$$\text{Elev}_{\text{PVC}} = \text{Elev}_{\text{PVI}} - g_1 \left(\frac{L}{2}\right)$$

$$\text{Elev}_{\text{PVT}} = \text{Elev}_{\text{PVI}} + g_2 \left(\frac{L}{2}\right)$$

*Caution: In these elevation equations, the grades ($g_1, g_2$) must be expressed in decimal form (e.g., $3\% = 0.03$) if the length $L$ is in feet, to ensure that the units are dimensionally consistent.*

---

## Worked Example

A vertical curve is to connect an initial grade of $+2.5\%$ and a final grade of $-1.5\%$. The PVI is located at Station $124+50$ with an elevation of $850.00\text{ ft}$. The design speed requires a minimum curve length of $600\text{ ft}$.

Calculate:
1. The algebraic grade difference ($A$) and rate of vertical curvature ($K$).
2. The stations of the PVC and PVT.
3. The elevations of the PVC and PVT.

### Solution

**1. Calculate $A$ and $K$:**
*   $g_1 = +2.5\%$
*   $g_2 = -1.5\%$
*   $L = 600\text{ ft}$

$$A = |g_2 - g_1| = |-1.5 - 2.5| = 4.0\%$$
$$K = \frac{L}{A} = \frac{600\text{ ft}}{4.0} = 150\text{ ft/\%}$$

**2. Calculate PVC and PVT Stations:**
Convert PVI Station $124+50$ to a distance: $12,450\text{ ft}$.
*   $\text{Station}_{\text{PVC}} = \text{Station}_{\text{PVI}} - \frac{L}{2} = 12,450 - \frac{600}{2} = 12,150\text{ ft} \implies 121+50$
*   $\text{Station}_{\text{PVT}} = \text{Station}_{\text{PVI}} + \frac{L}{2} = 12,450 + \frac{600}{2} = 12,750\text{ ft} \implies 127+50$

**3. Calculate PVC and PVT Elevations:**
Use grades as decimals: $g_1 = +0.025$ and $g_2 = -0.015$.
*   $\text{Elev}_{\text{PVC}} = \text{Elev}_{\text{PVI}} - g_1 \left(\frac{L}{2}\right) = 850.00 - (0.025)(300) = 850.00 - 7.50 = 842.50\text{ ft}$
*   $\text{Elev}_{\text{PVT}} = \text{Elev}_{\text{PVI}} + g_2 \left(\frac{L}{2}\right) = 850.00 + (-0.015)(300) = 850.00 - 4.50 = 845.50\text{ ft}$

## References

*   *A Policy on Geometric Design of Highways and Streets* (AASHTO Green Book), 7th Edition, 2018, Section 3.4.6.
*   *NCEES PE Civil Reference Handbook*, Section 4.3.1.
