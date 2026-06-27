# Curve Widening

On sharp horizontal curves, roadways are often widened to ensure that vehicles—especially large trucks—remain within their designated travel lanes. This widening is necessary for two primary physical reasons:
1.  **Off-Tracking:** The rear wheels of a vehicle do not follow the exact path of the front wheels when turning; they track inward, toward the center of the curve.
2.  **Front Overhang ($F_A$):** The front bumper and body overhang of a vehicle project outward, sweeping a wider path than the wheels.
3.  **Difficulty of Driving ($Z$):** Drivers experience more difficulty holding a vehicle precisely centered in a lane on a curve than on a tangent.

For the PE Civil Transportation exam, curve widening calculations and criteria are governed by **AASHTO's Green Book (GDHS)**, Chapter 3.

---

## Off-Tracking and Vehicle Swept Path

Off-tracking ($U$) is the physical offset between the paths of the front and rear axles. For a single unit vehicle or a semi-trailer with a single pivot, the maximum off-tracking is calculated using the vehicle's wheelbase ($L$):

$$\text{Off-Tracking } (U_o) = R - \sqrt{R^2 - L^2}$$

Where:
*   $R$ = Radius of the curve (ft).
*   $L$ = Wheelbase length of the design vehicle (ft) (distance from steering axle to rear axle).

---

## AASHTO Curve Widening Equation

The total widening ($w_c$) required on a horizontal curve is the difference between the required roadway width on the curve ($W_c$) and the standard roadway width on the tangent ($W_n$):

$$w_c = W_c - W_n$$

Where the required roadway width on the curve ($W_c$) for a multi-lane roadway is:

$$W_c = N(U + C) + (N - 1)F_A + Z$$

And:
*   **$N$:** Number of travel lanes.
*   **$U$:** Track width of the design vehicle on the curve (ft):
    $$U = u + R - \sqrt{R^2 - L^2}$$
    *(where $u$ is the out-to-out tire width on a tangent, typically **8.5 ft** for trucks).*
*   **$C$:** Lateral clearance per lane (ft). AASHTO recommends:
    *   $C = 2.0\text{ ft}$ (for $10\text{-ft}$ tangent lanes)
    *   $C = 2.5\text{ ft}$ (for $11\text{-ft}$ tangent lanes)
    *   $C = 3.0\text{ ft}$ (for $12\text{-ft}$ tangent lanes)
*   **$F_A$:** Width of the front overhang (ft):
    $$F_A = \sqrt{R^2 + A(2L + A)} - R$$
    *(where $A$ is the front overhang length of the vehicle, typically **3.0 ft**).*
*   **$Z$:** Extra width for difficulty of driving on the curve (ft):
    $$Z = \frac{V}{\sqrt{R}}$$
    *(where $V$ is the design speed in mph).*

---

## Warrants for Curve Widening

Widening is expensive and complex to build. Therefore, AASHTO establishes a threshold warrant:
*   **The 2.0-ft Rule:** Curve widening is only implemented if the calculated widening ($w_c$) is **$2.0\text{ ft}$ or greater**. If $w_c < 2.0\text{ ft}$, no widening is required, and the standard tangent width is maintained.
*   **Low-Speed Curves:** For low-speed facilities (such as intersections, turning roadways, and low-speed ramps), the $Z$ term (difficulty of driving) is omitted from the equation ($Z = 0$).

---

## Worked Example: Curve Widening Design

### Problem Statement
A 2-lane rural highway with a design speed of $50\text{ mph}$ features a horizontal curve with a radius of $600\text{ ft}$. The tangent lanes are $12\text{ ft}$ wide (total tangent width $W_n = 24\text{ ft}$).
The design vehicle is a WB-50 semi-trailer with the following parameters:
*   Wheelbase ($L$): $50.0\text{ ft}$
*   Tire width ($u$): $8.5\text{ ft}$
*   Front overhang ($A$): $3.0\text{ ft}$
*   Lateral clearance per lane ($C$): $3.0\text{ ft}$ (corresponding to $12\text{-ft}$ tangent lanes)

1.  Calculate the vehicle track width ($U$) on the curve.
2.  Calculate the front overhang width ($F_A$).
3.  Calculate the driving difficulty factor ($Z$).
4.  Determine the total required roadway width on the curve ($W_c$).
5.  Determine if curve widening is warranted, and if so, find the design value of the widening ($w_c$).

### Solution
1.  **Calculate Track Width ($U$):**
    $$U = u + R - \sqrt{R^2 - L^2}$$
    $$U = 8.5 + 600 - \sqrt{600^2 - 50^2}$$
    $$U = 608.5 - \sqrt{360000 - 2500} = 608.5 - \sqrt{357500}$$
    $$U = 608.5 - 597.91 = 10.59\text{ ft}$$

2.  **Calculate Front Overhang Width ($F_A$):**
    $$F_A = \sqrt{R^2 + A(2L + A)} - R$$
    $$F_A = \sqrt{600^2 + 3.0(2 \times 50 + 3.0)} - 600$$
    $$F_A = \sqrt{360000 + 3.0(103)} - 600 = \sqrt{360000 + 309} - 600$$
    $$F_A = \sqrt{360309} - 600 = 600.26 - 600 = 0.26\text{ ft}$$

3.  **Calculate Driving Difficulty Factor ($Z$):**
    $$Z = \frac{V}{\sqrt{R}} = \frac{50}{\sqrt{600}} = \frac{50}{24.49} = 2.04\text{ ft}$$

4.  **Calculate Total Curve Roadway Width ($W_c$):**
    The roadway has 2 lanes, so $N = 2$.
    $$W_c = N(U + C) + (N - 1)F_A + Z$$
    $$W_c = 2(10.59 + 3.0) + (2 - 1)(0.26) + 2.04$$
    $$W_c = 2(13.59) + 1(0.26) + 2.04$$
    $$W_c = 27.18 + 0.26 + 2.04 = 29.48\text{ ft}$$

5.  **Determine Widening Warranty and Value ($w_c$):**
    *   Tangent width ($W_n$) = $24\text{ ft}$.
    *   Calculated widening ($w_c$) = $W_c - W_n$:
        $$w_c = 29.48\text{ ft} - 24\text{ ft} = 5.48\text{ ft}$$
    *   *Warrant Check:* Since $5.48\text{ ft} \ge 2.0\text{ ft}$, widening **is warranted**.
    *   *Design Value:* In practice, widening values are rounded to the nearest half-foot. The design widening is **$5.5\text{ ft}$** (giving a total curve width of $29.5\text{ ft}$).

### Answer
*   Track width ($U$): **10.59 ft**
*   Front overhang ($F_A$): **0.26 ft**
*   Driving difficulty ($Z$): **2.04 ft**
*   Roadway width on curve ($W_c$): **29.48 ft**
*   Curve widening ($w_c$) is warranted; design value is **5.5 ft**.

---

## Crucial Exam Tips

*   **The 2.0-ft Threshold Trap:** If your calculated widening is $1.8\text{ ft}$, a multiple-choice question might list $1.8\text{ ft}$ as a distractor. However, the correct engineering answer is **$0\text{ ft}$** because it falls below the AASHTO $2.0\text{-ft}$ implementation threshold. Always check the warrant first!
*   **Low-Speed Ramp Trap:** If the problem is about a curve on an intersection corner or a low-speed slip ramp, remember to set $Z = 0$. Using the $Z = V/\sqrt{R}$ term on a low-speed intersection return will yield an over-designed, incorrect value.
*   **Total Width vs. Widening Value:** Read the question carefully. Does it ask for the *amount of widening* ($w_c$) or the *total width of the roadway on the curve* ($W_c$)? Selecting $5.5\text{ ft}$ when the question asks for $29.5\text{ ft}$ is a common mistake.
