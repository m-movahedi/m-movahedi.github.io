---
title: "Bicycle Facility Design"
weight: 42
date : "2026-05-04"
draft : false
type : "post"
---
# Bicycle Facility Design

Bicycle facility design focuses on providing safe, accessible, and comfortable infrastructure for cyclists. In the United States, geometric design of bicycle facilities is guided by the **AASHTO Guide for the Development of Bicycle Facilities (GBF-4)**. On the PE Civil Transportation exam, you will need to understand the classifications of bike facilities, spatial dimensions, design speeds, stopping sight distances, and curve geometry.

---

## Classifications of Bicycle Facilities

Bicycle facilities are classified into four main categories based on the level of separation from motorized traffic:

1.  **Shared-Use Paths (Class I):** Physically separated from motorized vehicular traffic by an open space or barrier. They are located within an independent right-of-way or easement and are shared with pedestrians, runners, and skaters.
2.  **Bike Lanes (Class II):** A portion of the roadway designated by striping, signing, and pavement markings for the preferential or exclusive use of bicyclists.
3.  **Shared Lanes (Class III):** Streets where bicyclists and motorists share the same travel lane. Often marked with "sharrows" (shared lane markings) and signs, but without designated lane lines.
4.  **Separated Bikeways / Cycle Tracks (Class IV):** On-street bicycle facilities that are physically separated from motor vehicle traffic by a vertical element such as a raised median, plastic delineators, bollards, or on-street parking.

---

## Design Dimensions and Clearances

### Shared-Use Paths (Multi-Use Paths)
*   **Standard Width:** **10.0 ft (3.0 m)** is the standard design width for a two-way shared-use path.
*   **Minimum Width:** **8.0 ft (2.4 m)** is acceptable only under low-volume conditions or where physical constraints exist.
*   **Preferred Width:** **12.0 ft to 14.0 ft (3.6 m to 4.3 m)** is recommended on paths with high pedestrian and bicycle volumes.
*   **Lateral Clearance:** A minimum **2.0-ft (0.6-m)** graded shoulder (horizontal clearance) must be maintained on both sides of the path, free of fixed hazards like trees, utility poles, and fences.
*   **Vertical Clearance:** A minimum of **8.0 ft (2.4 m)** (10.0 ft preferred) of vertical clearance to overhanging branches or structures.

### On-Street Bike Lanes
*   **Against a Curb:** Minimum width is **5.0 ft (1.5 m)** from the curb face to the lane stripe (with a minimum of 3.0 ft of smooth asphalt surface if a concrete gutter pan is present).
*   **Adjacent to a Shoulder:** Minimum width is **4.0 ft (1.2 m)**.
*   **Adjacent to On-Street Parking:** Minimum width is **5.0 ft (1.5 m)**. The bike lane must be placed on the left side of the parking lane to prevent cyclists from being hit by opening car doors (the "door zone").
*   **Buffered Bike Lanes:** Feature a painted buffer zone, typically **2.0 ft to 3.0 ft** wide, separating the bike lane from traffic or parking.

---

## Design Parameters for Shared-Use Paths

### Design Speed
*   Paved shared-use paths are typically designed for a bicyclist speed of **18 mph (30 km/h)**.
*   On downgrades steeper than $4\%$ or in areas with high-performance cyclists, the design speed should be increased to **30 mph (50 km/h)**.

### Maximum Grade
*   To comply with ADA guidelines (since paths are shared with pedestrians), the maximum grade of a shared-use path is **5.0%**.
*   Grades up to **8.33% (1:12)** are permitted for short distances (up to $500\text{ ft}$) if appropriate warning signs are provided.

---

## Stopping Sight Distance (SSD) for Bicyclists

Bicyclists require adequate sight distance to see and stop for hazards. The SSD formula for bicyclists is identical in structure to the vehicle SSD formula:

$$S = \frac{V^2}{30(f \pm G)} + 1.47 V t$$

Where:
*   $S$ = Stopping Sight Distance (ft)
*   $V$ = Bicyclist design speed (mph)
*   $t$ = Perception-reaction time = **2.5 seconds** (standard for design)
*   $f$ = Coefficient of friction (wet pavement condition, ranging from $0.16$ at $30\text{ mph}$ to $0.25$ at $10\text{ mph}$)
*   $G$ = Longitudinal grade (decimal form; e.g., $-0.03$ for a $3\%$ downgrade)

---

## Horizontal Curve Geometry for Bicyclists

Unlike vehicles, bicyclists lean into curves to maintain balance. The minimum horizontal curve radius ($R_{min}$) is governed by the bicycle design speed, side friction, and superelevation:

$$R_{min} = \frac{V^2}{15 \left( \frac{e}{100} + f \right)}$$

Where:
*   $V$ = Bicyclist design speed (mph)
*   $e$ = Superelevation rate (%). For shared-use paths, the maximum superelevation rate is **2.0%** to comply with pedestrian cross-slope limits.
*   $f$ = Side friction factor for bicyclists (typically ranging from **0.20 to 0.30** depending on speed).

---

## Worked Example: Bicycle Sight Distance and Horizontal Curve Design

### Problem Statement
A shared-use path is being designed along an abandoned railway corridor. A curved section of the path descends a $4.0\%$ grade ($G = -0.04$). The path design speed is $20\text{ mph}$.
*   Bicyclist perception-reaction time ($t$): $2.5\text{ seconds}$
*   Coefficient of wet friction ($f$) at $20\text{ mph}$: $0.20$
*   Maximum allowable superelevation rate ($e$): $2.0\%$
*   Side friction factor ($f_s$) at $20\text{ mph}$: $0.27$

1.  Calculate the required stopping sight distance ($S$) for a bicyclist traveling down the $4.0\%$ grade.
2.  Determine the minimum horizontal curve radius ($R_{min}$) required for this section of the path.

### Solution
1.  **Calculate the Stopping Sight Distance ($S$):**
    Use the SSD formula:
    $$S = \frac{V^2}{30(f - G)} + 1.47 V t$$
    *Note: Since it is a downgrade, we subtract the grade ($G = 0.04$):*
    $$S = \frac{20^2}{30(0.20 - 0.04)} + 1.47(20)(2.5)$$
    $$S = \frac{400}{30(0.16)} + 73.5$$
    $$S = \frac{400}{4.8} + 73.5 = 83.33 + 73.5 = 156.83\text{ ft}$$
    *Rounding up for design:* **$157\text{ ft}$**

2.  **Calculate the Minimum Horizontal Curve Radius ($R_{min}$):**
    Use the minimum radius formula:
    $$R_{min} = \frac{V^2}{15 \left( \frac{e}{100} + f_s \right)}$$
    *Substitute the given values:*
    $$R_{min} = \frac{20^2}{15 \left( \frac{2.0}{100} + 0.27 \right)}$$
    $$R_{min} = \frac{400}{15(0.02 + 0.27)} = \frac{400}{15(0.29)}$$
    $$R_{min} = \frac{400}{4.35} = 91.95\text{ ft}$$
    *Rounding up for design:* **$92\text{ ft}$**

### Answer
1.  Stopping sight distance on the downgrade: **157 ft**
2.  Minimum horizontal curve radius: **92 ft**

---

## Crucial Exam Tips

*   **The 2% Superelevation Cap:** On the PE exam, if you are asked to design a shared-use path horizontal curve, do not use the standard highway superelevation rates (e.g., $6\%$ or $8\%$). Because pedestrians share the path, the cross slope cannot exceed **2.0%** to comply with ADA.
*   **Wet Friction vs. Dry Friction:** Always verify whether the problem specifies wet or dry conditions. For standard safety design, always use the wet coefficient of friction provided in the tables.
*   **Clearance to Barriers:** Remember that fences or guardrails along a shared-use path must be placed at least **2.0 ft** from the edge of the path. A common exam question involves checking whether a path clearance layout violates this lateral clearance rule.
