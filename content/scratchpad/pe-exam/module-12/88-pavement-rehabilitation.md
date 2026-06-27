# Pavement Distress and Rehabilitation

Over time, pavements deteriorate due to the combined effects of traffic loading and environmental conditions. Pavement rehabilitation involves restoring an existing pavement's structural capacity or functional performance. On the PE Civil Transportation exam, you must be able to identify types of pavement distress, select appropriate rehabilitation strategies, and calculate structural overlay thickness requirements.

---

## 1. Pavement Distress Types

Pavement distresses are categorized into structural distresses (related to load-carrying capacity) and functional distresses (related to ride quality and safety).

### Flexible (Asphalt) Pavement Distresses
*   **Fatigue (Alligator) Cracking:** Interconnected cracks resembling alligator skin, located in wheelpaths.
    *   *Cause:* Structural failure due to repeated traffic load repetitions (fatigue of HMA bottom).
    *   *Class:* Structural.
*   **Rutting:** Longitudinal surface depressions along the wheelpaths.
    *   *Cause:* Permanent deformation in the asphalt, base, or subgrade layers.
    *   *Class:* Structural.
*   **Transverse (Thermal) Cracking:** Cracks perpendicular to the roadway centerline, spaced at regular intervals.
    *   *Cause:* Low temperature contraction stresses combined with asphalt binder aging.
    *   *Class:* Environmental.
*   **Bleeding:** A shiny, black film of asphalt binder on the pavement surface.
    *   *Cause:* Excess asphalt cement in the mix or compaction during hot weather.
    *   *Class:* Material mix issue (reduces skid resistance).
*   **Raveling:** Wearing away of the pavement surface caused by the loss of aggregate particles.
    *   *Cause:* Binder hardening or poor compaction.
    *   *Class:* Functional.

### Rigid (Concrete) Pavement Distresses
*   **Faulting:** A difference in elevation across a transverse joint.
    *   *Cause:* Pumping of base or subgrade fines from beneath the leave slab to the approach slab due to poor load transfer.
    *   *Class:* Structural/Joint failure.
*   **Pumping:** Ejection of water and fine soil particles through joints and cracks under heavy wheel loads.
    *   *Cause:* Free water beneath the slab, fine-grained subgrade, and heavy loads.
    *   *Class:* Structural/Drainage.
*   **Corner Breaks:** A diagonal crack extending from a transverse joint to a longitudinal joint near the corner of a slab.
    *   *Cause:* Heavy wheel loads acting on unsupported slab corners (caused by pumping or loss of support).
    *   *Class:* Structural.
*   **Spalling:** Chipping, fracturing, or breaking of slab edges near joints.
    *   *Cause:* Infiltration of incompressible materials into joints, causing localized compressive stress during thermal expansion.
    *   *Class:* Functional/Joint failure.
*   **D-Cracking (Durability Cracking):** Fine, closely-spaced cracks parallel to joints, forming a pattern.
    *   *Cause:* Freeze-thaw expansion of water trapped inside porous coarse aggregates within the concrete mix.
    *   *Class:* Material durability.

---

## 2. Rehabilitation Strategies

Rehabilitation can be classified based on whether it restores the structural capacity of the pavement:

### Preventive Maintenance and Functional Restoration
These treatments seal the surface, restore skid resistance, and improve ride quality but do not add structural capacity:
*   **Crack Sealing:** Preventing water intrusion by filling cracks with rubberized asphalt.
*   **Chip Seals / Slurry Seals / Micro-surfacing:** Liquid asphalt emulsion sprayed on the surface and covered with aggregate. Used to seal HMA and improve friction.
*   **Diamond Grinding:** Shaving off a thin layer of a concrete slab to remove faulting and restore smoothness.

### Structural Rehabilitation
These methods restore or increase the load-carrying capacity of the pavement:
*   **Asphalt Milling and Overlay:** Milling off a portion of damaged asphalt and placing a new structural HMA layer.
*   **Rubblization:** Breaking an old concrete pavement into small fragments (like aggregate) and placing an asphalt overlay on top. This prevents **reflection cracking** (where cracks in the old PCC propagate up through the new HMA).
*   **Concrete Overlay (Whitetopping):** Placing a new concrete layer over an existing asphalt or concrete pavement.

---

## 3. Overlay Design Concepts (AASHTO 1993)

The thickness of a structural overlay is determined by comparing the structural capacity required for future traffic ($SN_{\text{req}}$ or $D_{\text{req}}$) with the effective capacity of the existing pavement ($SN_{\text{eff}}$ or $D_{\text{eff}}$).

### Flexible Pavement Overlay Design
The required structural number of the overlay ($SN_{\text{ol}}$) is:
$$SN_{\text{ol}} = SN_{\text{req}} - SN_{\text{eff}}$$

Where:
*   $SN_{\text{req}} = \text{structural number required for the design traffic (future ESALs)}$
*   $SN_{\text{eff}} = \text{effective structural number of the existing pavement}$
    $$SN_{\text{eff}} = a'_1 D_1 + a'_2 D_2 m'_2 + a'_3 D_3 m'_3$$
    *(where $a'_i$ are deteriorated layer coefficients representing the current damaged state of the pavement).*

The required HMA overlay thickness ($D_{\text{ol}}$) is:
$$D_{\text{ol}} = \frac{SN_{\text{ol}}}{a_{\text{ol}}}$$
*(where $a_{\text{ol}}$ is the coefficient of the new asphalt overlay, typically $0.44$).*

### Rigid Pavement (PCC) Overlay Design
The thickness of a concrete overlay ($D_{\text{ol}}$) depends on whether the overlay is bonded or unbonded to the existing PCC slab.

#### Bonded Concrete Overlay
The new slab bonds monolithically with the existing slab to act as a single, thick composite plate. Used only when the existing slab is in structurally sound condition.
$$D_{\text{ol}} = D_{\text{req}} - D_{\text{eff}}$$

#### Unbonded Concrete Overlay
An asphalt leveling/interlayer course is placed between the old PCC and the new PCC overlay to prevent bond. Used when the existing slab is highly distressed.
$$D_{\text{ol}} = \sqrt{D_{\text{req}}^2 - D_{\text{eff}}^2}$$

Where:
*   $D_{\text{req}} = \text{slab thickness required for future traffic (inches)}$
*   $D_{\text{eff}} = \text{effective thickness of the existing slab (inches)}$, adjusted for structural distresses.

---

## 4. Worked Examples

### Worked Example 1: HMA Overlay Design
An existing flexible pavement has the following profile:
*   Asphalt Surface: Original $D_1 = 4.0\text{ inches}$. Due to severe alligator cracking, its coefficient is reduced from $0.44$ to $a'_1 = 0.20$.
*   Crushed Stone Base: $D_2 = 8.0\text{ inches}$ ($a'_2 = 0.12$, $m'_2 = 1.0$).
*   Subbase: None.
Future traffic demand requires a Structural Number ($SN_{\text{req}}$) of $3.80$. The new HMA overlay has a design coefficient $a_{\text{ol}} = 0.44$.

**Goal:** Calculate the required thickness ($D_{\text{ol}}$) of the HMA overlay (round up to the nearest half-inch).

**Solution:**
1.  **Calculate Effective Structural Number ($SN_{\text{eff}}$):**
    $$SN_{\text{eff}} = a'_1 D_1 + a'_2 D_2 m'_2$$
    $$SN_{\text{eff}} = (0.20 \cdot 4.0) + (0.12 \cdot 8.0 \cdot 1.0) = 0.80 + 0.96 = 1.76$$
2.  **Calculate Required Structural Number for the Overlay ($SN_{\text{ol}}$):**
    $$SN_{\text{ol}} = SN_{\text{req}} - SN_{\text{eff}} = 3.80 - 1.76 = 2.04$$
3.  **Calculate Overlay Thickness ($D_{\text{ol}}$):**
    $$D_{\text{ol}} = \frac{SN_{\text{ol}}}{a_{\text{ol}}} = \frac{2.04}{0.44} = 4.64\text{ inches}$$
4.  **Round Up to Nearest Half-Inch:**
    $$D_{\text{ol}} = 5.0\text{ inches}$$

*Result:* The required HMA overlay thickness is **$5.0\text{ inches}$**.

---

### Worked Example 2: PCC Overlay Design
An existing rigid pavement has an effective slab thickness $D_{\text{eff}} = 6.0\text{ inches}$ after accounting for joint faulting and cracking. The future traffic loading requires a slab thickness $D_{\text{req}} = 9.0\text{ inches}$.

**Goal:** Determine the required thickness of the concrete overlay ($D_{\text{ol}}$) to the nearest half-inch if:
1.  A bonded concrete overlay is constructed.
2.  An unbonded concrete overlay is constructed.

**Solution:**
1.  **Bonded Concrete Overlay:**
    $$D_{\text{ol}} = D_{\text{req}} - D_{\text{eff}} = 9.0 - 6.0 = 3.0\text{ inches}$$
    *(Since $3.0\text{ inches}$ is a half-inch increment, no rounding is needed).*
2.  **Unbonded Concrete Overlay:**
    $$D_{\text{ol}} = \sqrt{D_{\text{req}}^2 - D_{\text{eff}}^2}$$
    $$D_{\text{ol}} = \sqrt{9.0^2 - 6.0^2} = \sqrt{81.0 - 36.0} = \sqrt{45.0} = 6.71\text{ inches}$$
    Round up to the nearest half-inch:
    $$D_{\text{ol}} = 7.0\text{ inches}$$

*Result:* A bonded overlay requires **$3.0\text{ inches}$** of concrete, whereas an unbonded overlay requires **$7.0\text{ inches}$** of concrete.

---

## 5. Exam Pitfalls and Tips

*   **Distress Identification:** Carefully read the description of cracks.
    *   *Alligator/Fatigue cracking* occurs in the wheelpaths and indicates structural inadequacy.
    *   *Transverse cracking* occurs across the full lane width and is caused by temperature, not traffic.
*   **Bonded vs. Unbonded Equations:** Do not confuse the rigid overlay equations. Bonded is linear subtraction ($D_{\text{req}} - D_{\text{eff}}$), while unbonded is square-root subtraction ($\sqrt{D_{\text{req}}^2 - D_{\text{eff}}^2}$). Unbonded overlays are thicker because the old and new slabs act independently rather than as a single composite unit.
*   **Condition Factor Application:** When estimating $SN_{\text{eff}}$ or $D_{\text{eff}}$, the problem may give a condition factor (e.g., "retains $70\%$ of its structural capacity"). Multiply the original layer coefficient by this factor (e.g., $a'_1 = 0.70 \cdot a_1$) before calculating $SN_{\text{eff}}$.
*   **Reflection Cracking Mitigation:** In conceptual questions, remember that placing HMA directly over joints in a concrete slab will lead to reflection cracking. Subgrade/PCC preparation methods like rubblization, crack and seat, or placing a geotextile/asphalt cushion layer are required to prevent this.
