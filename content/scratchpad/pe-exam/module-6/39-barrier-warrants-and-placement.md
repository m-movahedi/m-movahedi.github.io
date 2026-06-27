---
title: "Barrier Warrants and Placement"
weight: 39
---
# Barrier Warrants and Placement

Roadside barriers are protective devices designed to shield motorists from hazards that lie within the clear zone. However, barriers are themselves hazards and should only be installed when the consequences of striking the barrier are less severe than striking the shielded obstacle. The primary reference for barrier design, warrants, and placement is the **AASHTO Roadside Design Guide (RDG)**, Chapters 5 and 8.

---

## Barrier Warrants (When is a Barrier Needed?)

A barrier is warranted when a hazard exists within the clear zone and cannot be removed, relocated, or designed to be breakaway. Common hazards warranting barriers include:
*   Non-traversable slopes (critical slopes steeper than 1:3).
*   Fixed obstacles (bridge piers, sign supports, large trees, utility poles).
*   Water hazards of significant depth (typically $> 2\text{ ft}$).
*   Opposing traffic streams on high-speed, high-volume divided highways (median barriers).

---

## Barrier Types and Deflection Distance

Barriers are classified based on their lateral deflection when struck by a design vehicle. You must ensure that the distance between the barrier and the shielded hazard is greater than or equal to the barrier's design deflection.

| Barrier Category | Typical Systems | Design Deflection | Advantages | Disadvantages |
| :--- | :--- | :--- | :--- | :--- |
| **Flexible** | Cable Guardrail | **6.0 to 11.5 ft** | Low deceleration forces on occupants; low cost. | Requires large clear area behind barrier; high maintenance after crashes. |
| **Semi-Rigid** | W-Beam (Weak Post or Strong Post) | **3.0 to 5.0 ft** | Moderate deflection; standard system; good balance. | Requires maintenance; moderate occupant forces. |
| **Rigid** | Concrete Safety Shape (F-Shape, Jersey Barrier) | **0.0 to 0.5 ft** | No deflection; low maintenance; prevents crossover. | High occupant deceleration; high initial cost. |

---

## Barrier Placement Guidelines

### Lateral Offset and Shy Line
Barriers should be placed as far from the traveled way as practical.
*   **Shy Line Offset:** The distance from the edge of the traveled way beyond which a roadside object does not cause a driver to react by braking or shifting horizontally. 
*   If a barrier is placed closer to the traveled way than the shy line offset, it can cause operational issues. Standard shy line offsets range from **4.0 ft** (at $30\text{ mph}$) to **10.0 ft** (at $70\text{ mph}$).
*   **Slope Limit:** Barriers must not be placed on slopes steeper than **1:10 (10H:1V)**. Placing a barrier on a steep slope can cause a vehicle's suspension to compress or expand, leading to the vehicle vaulting over or wedging under the barrier.

### End Treatments (Terminals) and Crash Cushions
A standard W-beam guardrail end can spear a vehicle in a head-on collision. Therefore, all barrier terminals must have crashworthy end treatments:
*   **Gating Terminals:** Allow an errant vehicle to pass through the end treatment when struck head-on at an angle, decelerating the vehicle in a runout area behind the barrier.
*   **Non-Gating Terminals:** Redirection systems that stop or redirect a vehicle during head-on or angled impacts at the end.
*   **Crash Cushions (Attenuators):** Used to shield rigid, wide hazards (e.g., exit gore areas, bridge piers). They absorb kinetic energy through crushable material or redirect the vehicle.

---

## Length of Need ($L_{ON}$) Calculation

The Length of Need ($L_{ON}$) is the total length of barrier required ahead of a hazard to prevent an errant vehicle from running off the road and striking the hazard from an angle.

### Tangent Roadway Formulas
The AASHTO RDG defines two configurations for calculating $L_{ON}$:

#### Case 1: Flared Barrier Setup
If the barrier is flared away from the roadway:
$$L_{ON} = \frac{L_A - L_2}{\left(\frac{L_A}{L_R}\right) + \left(\frac{L_2}{L_3}\right)}$$

Where:
*   $L_{ON}$ = Length of need (ft)
*   $L_A$ = Advanced lateral offset of the hazard (ft) — measured from the edge of the traveled way to the back of the hazard or clear zone limit.
*   $L_2$ = Lateral distance from the edge of the traveled way to the barrier at its closest point (ft).
*   $L_3$ = Lateral distance from the edge of the traveled way to the start of the barrier flare (ft).
*   $L_R$ = Runout length (ft) — the distance a vehicle is expected to travel along the roadside before stopping, obtained from RDG Table 5.1 based on design speed and ADT.

#### Case 2: Parallel Barrier Setup (No Flare)
If the barrier is placed parallel to the roadway, the flare rate is zero, meaning $L_2 = L_3$. Substituting this into the flared formula simplifies to:
$$L_{ON} = \frac{L_A - L_2}{\left(\frac{L_A}{L_R}\right)} = L_R \left(1 - \frac{L_2}{L_A}\right)$$

---

## Worked Example: Length of Need ($L_{ON}$)

### Problem Statement
A large concrete foundation (hazard) is located adjacent to a high-speed rural highway. 
*   Design Speed: $65\text{ mph}$
*   ADT: $8,000\text{ vehicles/day}$
*   The hazard starts at Station $105+00$ and is located $22\text{ ft}$ from the edge of the traveled way ($L_A = 22\text{ ft}$).
*   A strong-post W-beam guardrail (semi-rigid, design deflection = $3.0\text{ ft}$) is to be installed parallel to the roadway at a lateral offset of $8\text{ ft}$ from the edge of the traveled way ($L_2 = 8\text{ ft}$).

1.  Determine the runout length ($L_R$) using the AASHTO RDG Table 5.1 excerpt below.
2.  Verify if the barrier lateral placement is sufficient to prevent the vehicle from striking the hazard during deflection.
3.  Calculate the required length of need ($L_{ON}$) for the guardrail.
4.  Determine the station where the guardrail must begin.

### Reference Excerpt (AASHTO RDG Table 5.1 - Runout Length $L_R$ for $\ge 6000$ ADT)
*   Design Speed $65\text{ mph}$: $L_R = 425\text{ ft}$
*   Design Speed $70\text{ mph}$: $L_R = 475\text{ ft}$

### Solution
1.  **Find the Runout Length ($L_R$):**
    For a design speed of $65\text{ mph}$ and ADT of $8,000$ ($\ge 6000$), the runout length is:
    $$L_R = 425\text{ ft}$$

2.  **Verify Barrier Placement and Deflection:**
    *   Lateral distance to barrier ($L_2$) = $8\text{ ft}$.
    *   Lateral distance to hazard ($L_A$) = $22\text{ ft}$.
    *   Available space behind barrier = $L_A - L_2 = 22\text{ ft} - 8\text{ ft} = 14\text{ ft}$.
    *   Design deflection of strong-post W-beam guardrail = $3.0\text{ ft}$.
    *   Since $14\text{ ft} \ge 3.0\text{ ft}$, the barrier will not deflect into the concrete foundation. The placement is **satisfactory**.

3.  **Calculate the Length of Need ($L_{ON}$):**
    Since the barrier is parallel to the roadway, we use the parallel formula:
    $$L_{ON} = L_R \left(1 - \frac{L_2}{L_A}\right)$$
    $$L_{ON} = 425\text{ ft} \times \left(1 - \frac{8\text{ ft}}{22\text{ ft}}\right)$$
    $$L_{ON} = 425 \times (1 - 0.3636) = 425 \times 0.6364 = 270.45\text{ ft}$$
    *Typically, we round up to standard guardrail section lengths (usually 12.5-ft increments), but for the PE exam, the theoretical value of **$270.5\text{ ft}$** is sought.*

4.  **Determine the Beginning Station of the Guardrail:**
    *   The hazard begins at Station $105+00$.
    *   The barrier must protect the hazard *before* the vehicle reaches it. Therefore, we subtract $L_{ON}$ from the hazard's start station:
        $$\text{Start Station} = (105+00) - 270.45\text{ ft}$$
        $$\text{Start Station} = \text{Station } 102+29.55$$

### Answer
1.  Runout length ($L_R$): **425 ft**
2.  The placement is safe because the available space ($14\text{ ft}$) exceeds the deflection ($3\text{ ft}$).
3.  Length of Need ($L_{ON}$): **270.5 ft**
4.  Start Station: **102+29.55**

---

## Crucial Exam Tips

*   **Parallel vs. Flared Formulas:** Always check if the guardrail is flared. If the problem states the guardrail is parallel, save time by using the simplified parallel formula: $L_{ON} = L_R (1 - L_2/L_A)$.
*   **Deciding $L_A$ (The Hazard Offset):** If the hazard extends past the clear zone, cap $L_A$ at the clear zone width ($CZ$). Do not use the full physical distance to the back of the hazard if it is outside the clear zone, as we only need to protect the portion within the recovery envelope.
*   **Terrain Slopes in Front of Barriers:** Watch out for questions that place guardrails on steep slopes (e.g., 1:4). This is a major design violation. The terrain in front of a barrier must be 1:10 or flatter.
