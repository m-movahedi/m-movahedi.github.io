# Pedestrian Facility Design

Pedestrian facilities must accommodate users of all ages and abilities. In public rights-of-way, design is heavily governed by the **Americans with Disabilities Act (ADA)** standards and the **AASHTO Guide for the Planning, Design, and Operation of Pedestrian Facilities (GPF-2)**. For the PE Civil Transportation exam, understanding ADA geometry, sidewalk widths, curb ramp configurations, and pedestrian routing is critical.

---

## ADA and PROWAG Design Standards

The Proposed Guidelines for Pedestrian Facilities in the Public Right-of-Way (PROWAG) and ADA Accessibility Guidelines (ADAAG) establish strict geometric limits for pedestrian routes:

### Sidewalks (Pedestrian Access Routes - PAR)
*   **Minimum Width:** **5.0 ft (1.5 m)** continuous clear width, excluding the curb. 
    *   *Passing Space Exception:* If a sidewalk has a clear width of less than 5.0 ft (with an absolute minimum of **4.0 ft**), passing spaces of at least **$5.0\text{ ft} \times 5.0\text{ ft}$** must be provided at intervals of no more than **200 ft**.
*   **Maximum Cross Slope:** **2.0% (1:50)**. This limit prevents wheelchairs from veering sideways. On the PE exam, any cross slope exceeding 2.0% on a sidewalk is an ADA violation.
*   **Grade (Longitudinal Slope):** The grade of a sidewalk within the public right-of-way is generally allowed to match the grade of the adjacent roadway. However, if the sidewalk is independent of a roadway, the maximum longitudinal grade is **5.0% (1:20)** unless designed as a ramp.

---

## Curb Ramps

Curb ramps are required at any point where an accessible route crosses a curb. They must be designed to prevent water accumulation and ensure stable transit.

```
       Sidewalk
-----------------------
  |   | Landing |   |
  | F |---------| F |
  | l |  Ramp   | l |
  | a |  Run    | a |
  | r | (<=8.33%| r |
  | e |  Slope) | e |
======================= Curb Line
       Street
```

### Key Geometry of Curb Ramps:
1.  **Ramp Run:** The sloped portion that leads down to the street level.
    *   **Maximum Running Slope:** **8.33% (1:12)**.
    *   **Minimum Width:** **4.0 ft (1.2 m)** (PROWAG) or **3.0 ft (0.91 m)** (ADAAG). GPF-2 prefers 4.0 ft to match sidewalk requirements.
2.  **Flared Sides (Flares):** Sloped transitions between the ramp run and the adjacent sidewalk.
    *   **Maximum Flare Slope:** **10.0% (1:10)**. Flares are only required if pedestrians walk across the ramp from the side. If the ramp is protected by grass or barriers, flares can be omitted (returned curbs).
3.  **Landing:** The flat area at the top of the ramp run.
    *   **Purpose:** Allows wheelchair users to turn or queue before descending or exiting the ramp.
    *   **Minimum Dimensions:** **$4.0\text{ ft} \times 4.0\text{ ft}$** (or $5.0\text{ ft} \times 5.0\text{ ft}$ preferred).
    *   **Maximum Slope:** **2.0%** in any direction (for drainage).
4.  **Detectable Warnings:** Truncated dome surfaces that provide a tactile warning for visually impaired pedestrians.
    *   **Dimensions:** Must extend **24 inches (2.0 ft)** in the direction of travel and span the **full width** of the ramp.
    *   **Color:** Must contrast visually with the adjacent walk surface (usually safety yellow).

---

## Types of Curb Ramps

1.  **Perpendicular Curb Ramps:** The ramp run is perpendicular to the curb line. 
    *   *Design Requirement:* Must have a landing at the top to allow users to turn $90^\circ$ onto the sidewalk.
2.  **Parallel Curb Ramps:** The ramp runs parallel to the curb, lowering the entire sidewalk to a landing at street level.
    *   *Design Requirement:* Excellent for narrow sidewalks where a top landing cannot be constructed.
3.  **Diagonal (Apex) Ramps:** A single ramp placed at the corner apex, serving two crosswalks.
    *   *Design Constraint:* Strongly discouraged for new construction because they force wheelchair users into the center of the intersection rather than directly into the crosswalk.

---

## Pedestrian Crossings and Refuge Islands

*   **Crosswalk Width:** Minimum width of marked crosswalks is **6 ft (1.8 m)**.
*   **Pedestrian Refuge Islands:** Medians provided in the middle of wide roadways to allow pedestrians to cross in stages.
    *   **Minimum Width:** **6.0 ft (1.8 m)** in the direction of pedestrian travel to ensure a wheelchair or stroller can fit completely within the island, protected from traffic.

---

## Worked Example: Perpendicular Curb Ramp Design

### Problem Statement
A perpendicular curb ramp is being designed at a new urban intersection. 
*   Curb Height ($h$): $6.0\text{ inches}$ ($0.50\text{ ft}$)
*   Sidewalk Elevation: $100.50\text{ ft}$
*   Gutter Elevation: $100.00\text{ ft}$
*   The adjacent sidewalk is $6.0\text{ ft}$ wide and has a $1.5\%$ cross slope sloping toward the roadway.

1.  Calculate the theoretical minimum length ($L$) of the ramp run required to meet ADA compliance for the running slope (maximum $8.33\%$). Assume the roadway and gutter are level.
2.  Determine the minimum dimensions of the landing at the top of the ramp.
3.  Calculate the maximum allowable height of the ramp flare at a distance of $3.0\text{ ft}$ from the side of the ramp, assuming a maximum $10.0\%$ flare slope.

### Solution
1.  **Calculate the Minimum Ramp Length ($L$):**
    *   The height to overcome ($h$) is $6.0\text{ inches} = 0.50\text{ ft}$.
    *   The maximum running slope ($S$) is $8.33\% = 0.0833$ (or $1:12$).
    *   The formula for ramp length based on slope and height is:
        $$L_{min} = \frac{h}{S} = \frac{0.50\text{ ft}}{0.0833} = 6.0\text{ ft}$$
    *   *Verify:* A 1:12 ramp over a 0.5 ft rise requires exactly 6.0 ft of horizontal length.

2.  **Determine Top Landing Dimensions:**
    *   Because the ramp is perpendicular, a landing is required at the top to allow users to turn onto the sidewalk.
    *   The landing must be at least **$4.0\text{ ft} \times 4.0\text{ ft}$**. Since the sidewalk is $6.0\text{ ft}$ wide, a $4.0\text{ ft}$ deep landing fits easily within the sidewalk width, leaving $2.0\text{ ft}$ of clear sidewalk behind it.

3.  **Calculate the Ramp Flare Elevation/Height:**
    *   The flare slope ($S_f$) has a maximum value of $10.0\% = 0.10$.
    *   The flare connects the sloped ramp run to the flat sidewalk.
    *   The elevation of the sidewalk at the top of the ramp is $100.50\text{ ft}$.
    *   The elevation of the bottom of the ramp (street level) is $100.00\text{ ft}$.
    *   At any point along the ramp side, the flare slope runs from the ramp surface up to the sidewalk surface.
    *   At a horizontal distance of $3.0\text{ ft}$ from the ramp run, the maximum height difference ($H_{diff}$) between the sidewalk and the flare surface is:
        $$H_{diff} = \text{Distance} \times S_f = 3.0\text{ ft} \times 0.10 = 0.30\text{ ft} = 3.6\text{ inches}$$

### Answer
1.  Theoretical minimum ramp length: **6.0 ft**
2.  Landing size: **4.0 ft by 4.0 ft** minimum.
3.  Maximum flare height difference: **0.30 ft (3.6 inches)**.

---

## Crucial Exam Tips

*   **Ramp Slope vs. Cross Slope:** Do not confuse the ramp running slope ($8.33\%$ max) with the ramp cross slope ($2.0\%$ max). Both must be verified independently in a design.
*   **The Gutter Slope Trap:** ADA guidelines state that the slope of the gutter pan or road surface immediately adjacent to the curb ramp cannot exceed **5.0%** (counter-slope limit). If the counter slope is too steep, it creates a V-shape that catches the footrests of wheelchairs, tipping the user forward.
*   **Measuring Sidewalk Width:** Ensure that any buffer strips (grass, utilities) are subtracted when determining the *clear* sidewalk width. A $6\text{ ft}$ wide concrete walk with a $2\text{ ft}$ wide row of utility poles only has $4\text{ ft}$ of clear width, requiring passing zones.
