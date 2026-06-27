---
title: "Elevation on Vertical Curves"
weight: 53
---
# Elevation on Vertical Curves

Determining elevations along a parabolic vertical curve is a frequent task in road design and a heavily tested topic on the PE Civil Transportation exam. Geometric calculations utilize the properties of a vertical parabola, where the vertical offset from a tangent grade is proportional to the square of the horizontal distance from the tangent point.

## The Parabolic Curve Equations

To calculate the elevation of any point on a vertical curve, we define a coordinate system with its origin at the PVC:
*   $x$ = horizontal distance from the PVC (ft)
*   $y(x)$ = elevation of the curve at distance $x$ (ft)

There are two primary mathematical frameworks used to solve these problems.

### 1. The Decimal-Grade Equation (Recommended for dimensional consistency)
If grades $g_1$ and $g_2$ are converted to decimal fractions (e.g., $3\% = 0.03$):

$$y(x) = y_{\text{PVC}} + g_1 x + \left(\frac{g_2 - g_1}{2L}\right) x^2$$

Where:
*   $y_{\text{PVC}}$ = elevation of the PVC (ft)
*   $g_1$ = initial grade (decimal, e.g., $+0.03$ for $+3\%$)
*   $g_2$ = final grade (decimal, e.g., $-0.02$ for $-2\%$)
*   $L$ = length of the vertical curve (ft)
*   $x$ = horizontal distance from the PVC (ft)

### 2. The Percent-Grade and Station Equation
If grades are kept in percent (e.g., $3.0$ and $-2.0$), and distances are expressed in stations ($X = x / 100$ and $L_{\text{sta}} = L / 100$):

$$y(X) = y_{\text{PVC}} + g_1 X + a X^2$$

Where the parabolic constant $a$ is defined as:
$$a = \frac{g_2 - g_1}{2 L_{\text{sta}}}$$

---

## Tangent Offsets and the PVI Offset ($E$)

The elevation of the curve is the algebraic sum of the tangent elevation and the parabolic offset ($Y$):

$$\text{Elev}_{\text{curve}} = \text{Elev}_{\text{tangent}} + Y$$

The offset $Y$ at any distance $x$ from the PVC is:

$$Y(x) = \left(\frac{g_2 - g_1}{2L}\right) x^2 = \left(\frac{A}{200L}\right) x^2$$

Where $A = |g_2 - g_1|$ (in percent). Note that $Y$ is positive for sag curves (curve lies above the tangent) and negative for crest curves (curve lies below the tangent).

### The PVI Offset ($E$)
The maximum vertical offset between the tangent intersection (PVI) and the curve occurs at the center of the curve ($x = L/2$). This offset is designated as $E$:

$$E = \frac{AL}{800}$$

Where:
*   $E$ = vertical offset at the PVI (ft)
*   $A$ = algebraic grade difference (%)
*   $L$ = length of the vertical curve (ft)

Because of parabolic symmetry, the offset at the PVC and PVT is zero, and the offset at any other point is related to $E$ by:

$$Y(x) = E \left(\frac{x}{L/2}\right)^2 = 4E \left(\frac{x}{L}\right)^2$$

---

## Grade at Any Station

The instantaneous slope (grade) at any point along the curve changes linearly. By taking the first derivative of the elevation equation with respect to $x$:

$$g(x) = g_1 + \left(\frac{g_2 - g_1}{L}\right) x$$

If using grades in percent:
$$g(x) = g_1 + \left(\frac{g_2 - g_1}{L}\right) x = g_1 + \frac{x}{K}$$

Where $K = L / A$ is the rate of vertical curvature. This equation is highly useful for checking grade transitions and verifying clearances.

---

## High and Low Points on a Curve

The high point (on a crest curve) or low point (on a sag curve) is critical for drainage design (locating inlets) and clearance checks. The high or low point occurs where the slope of the curve is exactly zero ($g(x) = 0$).

### Location (Distance from PVC)
Solving $g(x) = 0$ for $x$ yields the horizontal distance from the PVC to the high/low point ($x_{\text{hl}}$):

$$x_{\text{hl}} = \frac{g_1 L}{g_1 - g_2} = g_1 K$$

*Important Conditions:*
*   The high/low point only lies within the limits of the curve ($0 < x_{\text{hl}} < L$) if $g_1$ and $g_2$ have opposite signs.
*   If both grades are positive, the lowest point is at the PVC ($x=0$) and the highest is at the PVT ($x=L$).
*   If both grades are negative, the highest point is at the PVC and the lowest is at the PVT.
*   In the formula $x_{\text{hl}} = g_1 K$, $g_1$ is entered in percent (e.g. $2.5$ for $2.5\%$), and $K$ is in ft/percent.

### Elevation of High/Low Point
Once $x_{\text{hl}}$ is determined, substitute it back into the elevation equation, which simplifies to:

$$\text{Elev}_{\text{hl}} = y_{\text{PVC}} + \frac{g_1^2 K}{200}$$

Where $g_1$ is in percent and $K$ is in ft/percent.

---

## Worked Example

A crest vertical curve has a length of $800\text{ ft}$. The initial grade is $+3.0\%$ and the final grade is $-2.0\%$. The PVC is at Station $50+00$ and has an elevation of $450.00\text{ ft}$.

Calculate:
1. The elevation of the curve at Station $53+00$.
2. The station of the high point.
3. The elevation of the high point.

### Solution

**1. Calculate Curve Elevation at Station $53+00$:**
*   $y_{\text{PVC}} = 450.00\text{ ft}$
*   $g_1 = +3.0\% = +0.03$
*   $g_2 = -2.0\% = -0.02$
*   $L = 800\text{ ft}$
*   Target Station = $53+00$
*   $x$ = distance from PVC = $(5,300 - 5,000) = 300\text{ ft}$

Use the decimal-grade curve equation:

$$y(x) = y_{\text{PVC}} + g_1 x + \left(\frac{g_2 - g_1}{2L}\right) x^2$$
$$y(300) = 450.00 + (0.03)(300) + \left(\frac{-0.02 - 0.03}{2 \times 800}\right) (300)^2$$
$$y(300) = 450.00 + 9.00 + \left(\frac{-0.05}{1600}\right) (90000)$$
$$y(300) = 459.00 - 2.8125 = 456.19\text{ ft}$$

*Alternatively, using the tangent offset method:*
*   Tangent elevation at $x = 300$: $\text{Elev}_{\text{tangent}} = 450.00 + (0.03)(300) = 459.00\text{ ft}$
*   $A = |-2.0 - 3.0| = 5.0\%$
*   Offset $Y(300) = -\frac{A x^2}{200L} = -\frac{5.0 \times (300)^2}{200 \times 800} = -\frac{450,000}{160,000} = -2.8125\text{ ft}$
*   $\text{Elev}_{\text{curve}} = 459.00 - 2.8125 = 456.19\text{ ft}$

**2. Calculate High Point Station:**
*   $K = L / A = 800 / 5.0 = 160\text{ ft/\%}$
*   $x_{\text{hl}} = g_1 K = 3.0 \times 160 = 480\text{ ft}$ from the PVC.
*   $\text{Station}_{\text{PVC}} = 50+00$ (or $5,000\text{ ft}$)
*   $\text{Station}_{\text{hl}} = 5,000 + 480 = 5,480\text{ ft} \implies 54+80$

**3. Calculate High Point Elevation:**
Using the simplified high-point elevation formula:

$$\text{Elev}_{\text{hl}} = y_{\text{PVC}} + \frac{g_1^2 K}{200}$$
$$\text{Elev}_{\text{hl}} = 450.00 + \frac{(3.0)^2 \times 160}{200} = 450.00 + \frac{9.0 \times 160}{200} = 450.00 + 7.20 = 457.20\text{ ft}$$

*Double-check using the standard curve equation at $x = 480\text{ ft}$:*
$$y(480) = 450.00 + (0.03)(480) + \left(\frac{-0.05}{1600}\right)(480)^2$$
$$y(480) = 450.00 + 14.40 - 0.00003125(230,400) = 464.40 - 7.20 = 457.20\text{ ft}$$
The calculations match perfectly.

## References

*   *A Policy on Geometric Design of Highways and Streets* (AASHTO Green Book), 7th Edition, 2018, Section 3.4.6.
*   *NCEES PE Civil Reference Handbook*, Section 4.3.1.
