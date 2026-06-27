---
title: "Clear Zone Concepts"
weight: 38
---
# Clear Zone Concepts

A clear zone is the unobstructed, traversable area provided beyond the edge of the traveled way for the recovery of errant vehicles. The design of the clear zone is a primary safety concept in roadway design, focusing on forgiving roadsides. The primary reference for clear zone design is the **AASHTO Roadside Design Guide (RDG)**, Chapter 3.

---

## Clear Zone Determinants

The width of the clear zone is not a single fixed number. It is determined dynamically based on three main parameters:
1.  **Design Speed:** Higher design speeds require wider clear zones because vehicles traveling faster will run off the road further.
2.  **Traffic Volume (ADT):** Roadways with higher Average Daily Traffic (ADT) have a higher probability of run-off-road events, justifying wider clear zones.
3.  **Roadside Slopes:** The slope of the roadside (foreslopes and backslopes) affects how easily a driver can regain control of a vehicle or how far the vehicle will travel down a slope.

### Clear Zone Table Lookup (RDG Table 3.1)
On the PE exam, you will typically locate the baseline clear zone width using a table. You must match the:
- Design speed range (e.g., $\le 40\text{ mph}$, $45\text{-}50\text{ mph}$, $55\text{ mph}$, etc.)
- ADT range (e.g., $< 750$, $750\text{-}1500$, $1500\text{-}6000$, $> 6000$)
- Roadside slope ratio (e.g., 1:6 or flatter, 1:5 to 1:4, 1:3)

---

## Classification of Roadside Slopes

Roadside slopes are categorized based on their traversability and the likelihood of a vehicle overturning:

| Slope Ratio | Type | Driver Control & Recovery | Safety Implications |
| :--- | :--- | :--- | :--- |
| **1:4 or flatter** | **Recoverable** | Drivers can generally retrieve control of their vehicles and steer back onto the roadway. | Clear zone is measured continuously across these slopes. |
| **1:3 to 1:4** | **Non-Recoverable** | Drivers cannot easily retrieve control or stop, and the vehicle will continue to the bottom of the slope. | Vehicles will slide or roll to the toe. The slope itself is included in the clear zone width, but a runout area at the toe is required. |
| **Steeper than 1:3** | **Critical** | An errant vehicle will likely overturn. | Critical slopes cannot be counted toward the clear zone. They must be shielded by a barrier if they lie within the clear zone distance. |

---

## Horizontal Curve Correction ($K_{cz}$)

When a horizontal curve is present, the probability of a vehicle running off the road on the outside of the curve increases. The clear zone on the outside of a horizontal curve must be increased by applying a correction factor, $K_{cz}$.

$$\text{Clear Zone on Curve } (CZ_c) = CZ_t \times K_{cz}$$

Where:
*   $CZ_t$ = Tangent clear zone width (ft), obtained from the standard clear zone table (RDG Table 3.1).
*   $K_{cz}$ = Horizontal curve correction factor, obtained from RDG Table 3.2.
*   $K_{cz}$ depends on:
    *   **Design Speed**
    *   **Radius of the horizontal curve ($R$)**

*Note: Curve corrections are applied only to the outside of horizontal curves. On the inside of the curve, the standard tangent clear zone width is used.*

---

## Roadside Hazard Decisions

When a fixed object or hazard (e.g., utility pole, bridge pier, steep critical slope) is identified within the clear zone, designers must follow the AASHTO Roadside Design Guide's hazard mitigation hierarchy:
1.  **Remove** the obstacle (ideal solution).
2.  **Redesign** the obstacle so it can be safely traversed (e.g., flattening a steep slope).
3.  **Relocate** the obstacle to a point where it is less likely to be struck (e.g., moving a utility pole outside the clear zone).
4.  **Reduce** impact severity by using an appropriate breakaway device (e.g., breakaway sign posts).
5.  **Shield** the obstacle with a traffic barrier or crash cushion (if the barrier is less hazardous than the obstacle).
6.  **Delineate** the obstacle if no other alternative is practical (least preferred, for low-speed/low-volume areas).

---

## Worked Example: Clear Zone with Curve Correction

### Problem Statement
A two-lane rural collector has a design speed of $60\text{ mph}$ and a design ADT of $4,500\text{ vehicles/day}$. The roadway cross-section has a $1:6$ foreslope. A section of this collector features a horizontal curve with a radius of $1,200\text{ ft}$. 
1.  Find the minimum required clear zone width on a tangent section of this roadway.
2.  Calculate the minimum required clear zone width on the outside of the horizontal curve.
3.  A large, unshielded concrete bridge abutment is located $28\text{ ft}$ from the edge of the traveled way on the outside of the curve. Determine whether this hazard must be mitigated (relocated, shielded, etc.).

### Reference Tables (AASHTO RDG)
*   **RDG Table 3.1 (Excerpt for 60 mph, ADT 1500–6000, 1:6 Foreslope):**
    *   Tangent Clear Zone ($CZ_t$) = $22\text{ ft}$ to $24\text{ ft}$. Use **$24\text{ ft}$** for conservative design.
*   **RDG Table 3.2 (Excerpt for Curve Correction Factor $K_{cz}$ at 60 mph):**
    *   For $R = 1,200\text{ ft}$ and Design Speed = $60\text{ mph}$: $K_{cz} = 1.3$

### Solution
1.  **Find the Tangent Clear Zone ($CZ_t$):**
    From the RDG table lookup, using the design speed ($60\text{ mph}$), ADT ($4,500$), and slope ($1:6$ foreslope), the baseline clear zone is:
    $$CZ_t = 24\text{ ft}$$

2.  **Calculate the Curved Clear Zone ($CZ_c$):**
    Multiply the tangent clear zone by the horizontal curve correction factor $K_{cz}$ from the table:
    $$CZ_c = CZ_t \times K_{cz}$$
    $$CZ_c = 24\text{ ft} \times 1.3 = 31.2\text{ ft}$$

3.  **Evaluate the Hazard:**
    *   The bridge abutment is located $28\text{ ft}$ from the edge of the traveled way.
    *   The required clear zone on the outside of this curve is $31.2\text{ ft}$.
    *   Since the bridge abutment ($28\text{ ft}$) is located within the required clear zone ($31.2\text{ ft}$), **it represents a hazard that must be mitigated.** Because a bridge abutment cannot be removed or relocated easily, it must be shielded using a crashworthy barrier (such as a W-beam guardrail or concrete barrier).

### Answer
1.  Tangent clear zone: **24 ft**
2.  Outside curve clear zone: **31.2 ft**
3.  The hazard lies within the clear zone ($28\text{ ft} < 31.2\text{ ft}$), so **shielding or mitigation is required**.

---

## Crucial Exam Tips

*   **Continuous vs. Discontinuous Slopes:** If a slope changes from recoverable ($1:6$) to non-recoverable ($1:3.5$) within the clear zone, the non-recoverable portion is traversable but not recovering. You must add the width of the non-recoverable slope to the clear zone calculation to find the total distance to a safe recovery area.
*   **Curve Correction Applicability:** Ensure you only apply the curve correction factor $K_{cz}$ if the hazard is on the **outside** of the curve. If the hazard is on the **inside** of the curve, the correction factor is $1.0$ (i.e., use the standard tangent clear zone width).
*   **Edge of Traveled Way:** Always measure the clear zone from the **edge of the travel lane** (traveled way), not from the edge of the shoulder. The shoulder width is included as part of the clear zone.
