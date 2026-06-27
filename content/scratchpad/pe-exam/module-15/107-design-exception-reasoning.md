---
title: "Design Exception Reasoning"
weight: 107
---
# Design Exception Reasoning

When a roadway project cannot meet the minimum design standards due to physical, environmental, or economic constraints, designers must seek a formal **Design Exception**. This process requires documentation demonstrating that safety and operations will not be significantly compromised, or that suitable mitigation measures are implemented.

---

## FHWA Controlling Design Criteria

In 2016, the Federal Highway Administration (FHWA) updated the list of "controlling design criteria" that require formal design exceptions on the National Highway System (NHS).

For high-speed roadways (Design Speed $\ge 50\text{ mph}$), there are **10 Controlling Criteria**:

1. **Design Speed:** The chosen speed used to determine various geometric design features.
2. **Lane Width:** Width of travel lanes.
3. **Shoulder Width:** Width of paved/unpaved shoulders.
4. **Horizontal Curve Radius:** Minimum radius of curvature.
5. **Superelevation Rate:** Maximum rate of pavement banking ($e$).
6. **Stopping Sight Distance (SSD):** Minimum distance required for a driver to stop before a hazard. (Applies to horizontal curves, crest vertical curves, and sag vertical curves).
7. **Maximum Grade:** Maximum longitudinal slope.
8. **Cross Slope:** Roadway cross-sectional slope (for drainage).
9. **Vertical Clearance:** Clearance above the road surface to structures (bridges, signs).
10. **Design Loading Structural Capacity:** Bridge structural capacity to carry design vehicles.

*Key Change:* For low-speed roadways (Design Speed $< 50\text{ mph}$), the list of controlling criteria was reduced to only two: **Design Speed** and **Design Loading Structural Capacity**. Other design criteria are managed at the state or local DOT level.

---

## Design Exception Justification Process

To justify a design exception, engineers must perform a multi-disciplinary analysis:

1. **Safety Analysis:** Quantify the expected safety impact using the *Highway Safety Manual* (HSM) predictive methodology. This involves using **Crash Modification Factors (CMFs)** to estimate how the substandard design will affect crash frequency.
2. **Operational Analysis:** Check if vehicle delay, Level of Service (LOS), or speed profile will be degraded.
3. **Cost-Benefit Analysis:** Contrast the cost of complying with the standard (e.g., massive right-of-way purchase, bridge reconstruction) against the safety/operational cost of the substandard design.
4. **Mitigation Measures:** Propose safety countermeasures to offset the risk of the substandard feature.

### Examples of Substandard Features and Mitigation Measures:
- **Deficient Horizontal Curve Radius:** Install high-friction surface treatment (HFST), enhanced warning signs (chevrons, flashing beacons), or advisory speed plaques.
- **Substandard Shoulder Width:** Install rumble strips, add emergency pullout bays at designated intervals, or widen shoulders on the inside of horizontal curves.
- **Deficient Stopping Sight Distance:** Clear roadside vegetation to open lines of sight, reduce speed limits, or install warning signs.

---

## Worked Example: Safety Analysis of a Shoulder Width Design Exception

A reconstruction project on a rural two-lane highway (Design Speed = $55\text{ mph}$) has a physical constraint that prevents widening the shoulders to the standard $8\text{-foot}$ paved width.
- The design standard requires **8-foot** paved shoulders.
- The proposed design exception features **4-foot** paved shoulders.
- The expected baseline crash frequency for this corridor (with standard 8-foot shoulders) is $N_{base} = 3.2\text{ crashes/year}$.
- According to the HSM CMF clearinghouse, the Crash Modification Factor (CMF) for reducing paved shoulder width from 8 feet to 4 feet on a rural two-lane highway is **CMF = 1.15**.

**1. Calculate the expected crash frequency ($N_{proposed}$) under the proposed design exception.**
**2. Calculate the expected increase in crashes over a 10-year design life.**
**3. If installing rumble strips has a CMF of 0.85, evaluate the net crash frequency ($N_{net}$) if rumble strips are installed as a mitigation measure.**

### Solution:

#### Step 1: Calculate proposed crash frequency ($N_{proposed}$)
Using the CMF for the reduced shoulder width:
$$N_{proposed} = N_{base} \cdot \text{CMF}_{shoulder}$$
$$N_{proposed} = 3.2\text{ crashes/year} \cdot 1.15 = 3.68\text{ crashes/year}$$

#### Step 2: Calculate the 10-year crash increase
$$\text{Crash Increase} = (N_{proposed} - N_{base}) \cdot 10\text{ years}$$
$$\text{Crash Increase} = (3.68 - 3.20) \cdot 10 = 0.48 \cdot 10 = 4.8\text{ crashes}$$

*Result:* The design exception is expected to result in approximately **4.8 additional crashes** over 10 years.

#### Step 3: Evaluate mitigation with rumble strips
If rumble strips are added, we apply both CMFs multiplicatively (assuming their safety effects are independent):
$$\text{CMF}_{net} = \text{CMF}_{shoulder} \cdot \text{CMF}_{rumble\_strips} = 1.15 \cdot 0.85 = 0.9775$$

Calculate the net expected crash frequency:
$$N_{net} = N_{base} \cdot \text{CMF}_{net}$$
$$N_{net} = 3.2\text{ crashes/year} \cdot 0.9775 \approx 3.13\text{ crashes/year}$$

*Conclusion:* Because $N_{net} = 3.13 < N_{base} = 3.20$, the proposed design exception *with* the rumble strip mitigation is expected to be slightly safer than the baseline standard design without rumble strips. This provides a strong justification for the design exception.

---

## Technical Pitfalls
- **Multiplicative CMF Trap:** When applying multiple CMFs, always multiply them ($CMF_1 \cdot CMF_2$), never add them ($CMF_1 + CMF_2$).
- **CMF Interpretation:** A CMF $< 1.0$ indicates a safety *improvement* (reduction in crashes), while a CMF $> 1.0$ indicates a safety *degradation* (increase in crashes).
- **Controlling Criteria Speed Threshold:** Remember the **50 mph** threshold. Under 50 mph, only design speed and structural loading are controlling criteria for FHWA. Above 50 mph, all 10 criteria apply.
