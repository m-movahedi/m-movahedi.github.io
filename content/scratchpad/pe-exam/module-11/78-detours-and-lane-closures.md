# Detours and Lane Closures

Temporary traffic control designs must accommodate various roadway geometries and multi-modal traffic needs. Managing the closure of lanes, establishing detours, utilizing flaggers, conducting night work, and ensuring ADA compliance for pedestrians and bicyclists are key responsibilities for a traffic engineer.

On the PE Civil Transportation exam, you must understand the operational differences between lane shifts and closures, the regulatory requirements for flaggers and detours, and the safety and accessibility standards for night work and pedestrians.

---

## Lane Closures vs. Lane Shifts

*   **Lane Closure:** The temporary closing of a travel lane, which reduces the number of lanes available to traffic. A lane closure requires a **merging taper** ($L$) to guide vehicles out of the closed lane.
*   **Lane Shift:** The lateral redirection of travel lanes without reducing the number of lanes. For example, moving all travel lanes $10\text{ feet}$ to the right into parking lanes or onto paved shoulders. A lane shift requires a **shifting taper** ($0.5L$), which is shorter and less disruptive than a lane closure.

---

## Detour Design and Routing

A **detour** is a temporary route that directs traffic around a closed portion of a roadway.
*   **Signing:** Detours must be clearly marked using orange signs with the word "DETOUR" and an arrow indicating the direction of the bypass. Route markers (e.g., Interstate or State Highway shields) should be accompanied by a "DETOUR" plaque.
*   **Capacity Analysis:** Before routing traffic onto a detour, the engineer must verify that the detour route (often minor streets or local roads) has the physical capacity to handle the increased traffic volume without causing gridlock.

---

## Flagger Control Procedures (MUTCD Chapter 6E)

Flaggers are used to control traffic manually, typically in one-lane, two-way operations.

### 1. Equipment and Safety Apparel
*   **STOP/SLOW Paddle:** The primary hand-signaling device. It must be octagonal, at least **$18 \times 18\text{ inches}$** in size, with letters at least **$6\text{ inches}$** high.
*   **Safety Vest:** Flaggers must wear high-visibility safety apparel that meets **ANSI Class 2** (daytime) or **ANSI Class 3** (nighttime) standards.

### 2. Flagger Positioning
*   Flaggers must stand on the shoulder or in the closed lane adjacent to the traffic they are controlling. **They must never stand in the open path of active traffic.**
*   A flagger must be positioned far enough upstream of the work space to allow vehicles to stop safely. This distance is based on stopping sight distance ($SSD$).

### 3. Traffic Control Methods
*   **Two-Flagger Operation:** Used when the work zone is long or visibility is obstructed. Flaggers communicate via two-way radios or hand signals.
*   **Pilot Cars:** Used for long, single-lane work zones (e.g., resurfacing projects). A pilot vehicle guides platoons of traffic back and forth through the work area.

---

## Night Work Considerations

Conducting work at night reduces daytime traffic delays but introduces significant safety challenges.
*   **Work Zone Lighting:** The work space must be illuminated to ensure worker visibility. The minimum illumination is **$5\text{ foot-candles}$** for general operations and up to **$10\text{ to } 20\text{ foot-candles}$** for precision tasks.
*   **Glare Control:** Lighting units must be positioned and shielded to avoid blinding drivers traveling through the work zone.
*   **Apparel:** All workers visible from the roadway at night must wear **ANSI Class 3** high-visibility clothing.

---

## Pedestrian and Bicycle Accessibility (ADA Compliance)

The Americans with Disabilities Act (ADA) requires that pedestrian access be maintained through or around work zones.
*   **Alternate Routes:** If a work zone blocks a sidewalk, an alternate accessible path must be provided.
*   **Accessibility Standards:**
    *   The path must be free of debris and have a firm, stable, slip-resistant surface.
    *   The path must be at least **$60\text{ inches}$** wide (or $36\text{ inches}$ wide with $60 \times 60\text{-inch}$ passing spaces every $200\text{ feet}$).
    *   **Continuous Detectable Barriers:** Visually impaired pedestrians tracking with a cane must be guided by a continuous, solid barrier with a flat bottom surface (no more than $2\text{ inches}$ above the ground) to prevent them from entering the work space. Hazard tape or cones are not acceptable barriers.

---

## Worked Example: Flagger Station Design

### Problem Statement
A construction crew is setting up a one-lane, two-way flagging operation on a rural two-lane highway. The posted speed limit is $50\text{ mph}$. The roadway is level.

1.  Calculate the minimum stopping sight distance ($SSD$) that a flagger must be visible from to allow an approaching vehicle to stop safely. Use standard AASHTO design parameters (perception-reaction time $t = 2.5\text{ s}$, deceleration rate $a = 11.2\text{ ft/s}^2$).
2.  Determine the equipment and safety apparel required for the flaggers if the work shifts to nighttime operations.

### Step-by-Step Solution

#### Step 1: Convert Design Speed to $\text{ft/s}$
$$v = 50\text{ mph} \times 1.467 = 73.35\text{ ft/s}$$

#### Step 2: Calculate the Stopping Sight Distance ($SSD$)
Apply the AASHTO stopping sight distance formula:
$$SSD = v \cdot t + \frac{v^2}{2a}$$
$$SSD = (73.35\text{ ft/s} \times 2.5\text{ s}) + \frac{(73.35\text{ ft/s})^2}{2(11.2\text{ ft/s}^2)}$$
$$SSD = 183.375 + \frac{5,380.22}{22.4}$$
$$SSD = 183.375 + 240.188 = 423.56\text{ feet}$$

Rounding up to the nearest standard design value:
$$SSD \approx 425\text{ feet}$$

Thus, the flagger must be stationed such that approaching drivers have an unobstructed view of them for at least **$425\text{ feet}$**.

#### Step 3: Determine Nighttime Flagger Requirements
For nighttime operations, the following must be provided:
1.  **ANSI Class 3 Safety Apparel:** This includes a retroreflective vest and retroreflective pants (or leg bands) so that the human silhouette is recognizable.
2.  **Illuminated Paddle:** The STOP/SLOW paddle must be retroreflectorized or illuminated.
3.  **Flagger Station Lighting:** The flagger station itself must be illuminated (using a light plant) to ensure the flagger is visible to motorists, with glare control to prevent blinding approaching drivers.
