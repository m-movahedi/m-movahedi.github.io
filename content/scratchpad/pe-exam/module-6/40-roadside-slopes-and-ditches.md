---
title: "Roadside Slopes and Ditches"
weight: 40
date : "2026-05-04"
draft : false
type : "post"
---
# Roadside Slopes and Ditches

Roadside slopes and drainage ditches are primary features of a roadway's edge design. They must serve two conflicting purposes: they must safely drain water away from the pavement structure (hydraulics) while remaining traversable and forgiving for errant vehicles that leave the road (roadside safety). The primary references are the **AASHTO Roadside Design Guide (RDG)**, Chapter 3, and **AASHTO's Green Book (GDHS)**, Chapter 4.

---

## Slope Notation and Conventions

On the PE exam, slopes are written in the format **Horizontal to Vertical (H:V)** (e.g., $4:1$ or $4\text{H}:1\text{V}$), which means 4 units of horizontal distance for every 1 unit of vertical rise or fall.
*   **Conversion to Percent:** A slope of $H:V$ is equivalent to a grade of:
    $$\text{Grade (\%)} = \left(\frac{V}{H}\right) \times 100$$
    *Example:* A $4:1$ slope is a $\left(\frac{1}{4}\right) \times 100 = 25\%$ slope.
*   **Foreslope (Fill Slope):** Slopes extending downward from the shoulder edge to the bottom of the ditch.
*   **Backslope (Cut Slope):** Slopes extending upward from the bottom of the ditch to intersect with the natural terrain.

---

## Traversability and Safety of Slopes

The safety of a slope depends on its steepness and whether it is a fill (foreslope) or cut (backslope) scenario.

### Foreslopes
*   **$6:1$ or flatter:** Excellent traversability. Errant vehicles can easily steer and braking is highly effective.
*   **$4:1$ to $6:1$:** Acceptable and recoverable. Most drivers can maintain control.
*   **$3:1$ to $4:1$:** Non-recoverable. The vehicle will slide to the bottom of the slope but is unlikely to roll over if the slope is smooth and clear of obstacles.
*   **Steeper than $3:1$ (e.g., $2:1$):** Critical. High risk of vehicle rollover. These require shielding (guardrails) if they are within the clear zone.

### Backslopes
Because vehicles striking a backslope are moving "upward" against gravity, backslopes are generally less critical than foreslopes of the same ratio.
*   **$3:1$ or flatter:** Safe and traversable.
*   **Steeper than $3:1$:** May require shielding, especially if they consist of jagged rock cuts.

---

## Drainage Ditches and Channels

A ditch is the channel formed by the intersection of the foreslope and backslope. The geometry of this channel is highly critical. If the change in grade at the bottom of the ditch is too abrupt, a vehicle's bumper will dig into the ground, causing the vehicle to stop abruptly or vault, leading to severe injuries.

### Ditch Shapes
1.  **V-Ditches:** Simple triangular channels. They are cheap to construct but represent the highest risk of bumper digging and vehicle instability unless the slopes are very flat (e.g., $6:1$ or flatter).
2.  **Trapezoidal/Flat-Bottom Ditches:** Feature a flat bottom of width $B$. These are much safer because they provide a transitional flat area, reducing the risk of a vehicle's nose digging into the backslope.
3.  **Rounded-Bottom (U-Shape) Ditches:** Provide a smooth, curved transition. They are safe but harder to construct.

### AASHTO Ditch Design Guidelines (RDG Figures 3.2 and 3.3)
AASHTO classifies combinations of foreslopes and backslopes into **Preferred (Traversable)** and **Non-Preferred** regions:
*   For **V-ditches**: If a foreslope is $4:1$, the backslope must be **$10:1$ or flatter** to be considered in the preferred (safe) region without rounding. If the backslope is steeper than $10:1$ (e.g., $4:1$), the ditch must be redesigned with a rounded bottom or flat bottom.
*   For **Trapezoidal/Flat-Bottom ditches**: A flat bottom width of at least **$4\text{ ft}$** (or rounded radius of $4\text{ ft}$) allows for much steeper slope combinations (e.g., a $4:1$ foreslope can be paired with a $4:1$ backslope safely).

---

## Drainage Conflicts and Erosion Control

Roadside channels must withstand the shear stress of moving stormwater.
*   **Erosion Control:** Ditches are lined with vegetative grass, erosion control blankets (ECBs), turf reinforcement mats (TRMs), riprap, or concrete.
*   **Roadside Hazard Conflict:** Large riprap (stones with $d_{50} > 4$ to $6\text{ inches}$) or steep concrete channels are considered **fixed-object hazards** if they lie within the clear zone. Designers must balance hydraulic shear requirements with vehicle traversability. If heavy riprap is required, the ditch may need to be moved further from the road, or a traversable lining (like TRM or articulated concrete blocks) should be used.

---

## Worked Example: Ditch Safety and Geometry Design

### Problem Statement
A new rural highway with a design speed of $55\text{ mph}$ is being designed. The typical cross-section features a $4:1$ foreslope. 
1.  If a simple V-ditch is used with a $4:1$ backslope, determine if this configuration is safe and traversable according to AASHTO guidelines.
2.  If the configuration is unsafe, design a flat-bottom (trapezoidal) ditch that satisfies the safety criteria for a $4:1$ foreslope and $4:1$ backslope. Find the minimum required bottom width ($B$).
3.  Calculate the depth of the ditch ($d$) if the outside edge of the shoulder is at elevation $100.00\text{ ft}$, the shoulder is $8\text{ ft}$ wide with a $4\%$ cross slope, and the horizontal distance from the edge of the shoulder to the centerline of the ditch is $20\text{ ft}$.

### Solution
1.  **Evaluate V-Ditch Safety:**
    According to the AASHTO Roadside Design Guide (Chapter 3), a V-ditch with a $4:1$ foreslope and $4:1$ backslope has too sharp a transition. Vehicles traveling at $55\text{ mph}$ are highly likely to experience bumper impact and rollover. Therefore, a simple V-ditch with these slopes is **unsafe (non-preferred)**.

2.  **Determine Flat-Bottom Ditch Width ($B$):**
    According to RDG Figure 3.2 (Preferred Channel Section for Flatter Slopes), for a $4:1$ foreslope and $4:1$ backslope, the design transitions to the preferred region if a flat-bottom width ($B$) of at least **$4.0\text{ ft}$** is provided. 
    $$\text{Minimum Flat-Bottom Width } (B) = 4.0\text{ ft}$$

3.  **Calculate the Ditch Depth ($d$):**
    Let's sketch the profile:
    *   **Edge of Travel Lane:** Elevation = $100.00\text{ ft}$ (at the shoulder start).
    *   **Shoulder Runway:** Width = $8\text{ ft}$ at a slope of $-4\%$.
        $$\text{Elevation at Outer Shoulder Edge} = 100.00 - (8\text{ ft} \times 0.04) = 100.00 - 0.32 = 99.68\text{ ft}$$
    *   **Foreslope:** Starts at the shoulder edge ($99.68\text{ ft}$) and runs down at a $4:1$ slope ($25\%$) to the ditch bottom.
    *   Let $X$ be the horizontal distance from the shoulder edge to the start of the flat bottom.
    *   The total horizontal distance from the shoulder edge to the centerline of the ditch is:
        $$\text{Distance from shoulder edge} = 20\text{ ft} - 8\text{ ft} = 12\text{ ft}$$
    *   Because the ditch has a flat bottom of width $B = 4.0\text{ ft}$, the flat bottom extends $2.0\text{ ft}$ on either side of the centerline.
    *   Therefore, the foreslope runs horizontally from the shoulder edge to the start of the flat bottom:
        $$\text{Horizontal run of foreslope } (X) = 12\text{ ft} - \frac{B}{2} = 12\text{ ft} - 2.0\text{ ft} = 10.0\text{ ft}$$
    *   Using the $4:1$ slope, the vertical drop along the foreslope is:
        $$\text{Vertical Drop} = \frac{\text{Horizontal Run}}{4} = \frac{10.0\text{ ft}}{4} = 2.5\text{ ft}$$
    *   **Ditch Bottom Elevation:**
        $$\text{Elevation}_{\text{bottom}} = 99.68\text{ ft} - 2.5\text{ ft} = 97.18\text{ ft}$$
    *   The total depth of the ditch ($d$) measured from the shoulder edge (elevation $99.68\text{ ft}$) to the bottom (elevation $97.18\text{ ft}$) is:
        $$d = 99.68\text{ ft} - 97.18\text{ ft} = 2.5\text{ ft}$$

### Answer
1.  The V-ditch configuration is **unsafe / non-preferred**.
2.  Minimum required flat bottom width: **4.0 ft**
3.  Total ditch depth: **2.5 ft**

---

## Crucial Exam Tips

*   **Reading H:V Ratios:** Always remember that $H:V$ means Horizontal over Vertical. If a slope is described as "1 to 4," look at the context. Roadsides are almost always flatter than $1:1$ (vertical), so a roadside slope described as "1:4" actually means $4\text{H}:1\text{V}$ (a $25\%$ slope), whereas a structural slope might mean something else. Always assume $H:V$ for roadside design.
*   **Riprap Hazard Limits:** If a question describes a ditch lined with "12-inch riprap," recognize that this is a major safety hazard. Standard traversable riprap has a $d_{50}$ limit of $4$ to $6\text{ inches}$. Larger stones will catch tires and cause rollover.
*   **Ditch Centerline vs. Toe of Slope:** In geometry calculations, pay close attention to whether distances are measured to the *centerline* of the ditch, the *toe* of the slope, or the *inside edge* of the flat bottom. Draw a quick cross-section sketch to avoid off-by-one or off-by-half-width errors.
