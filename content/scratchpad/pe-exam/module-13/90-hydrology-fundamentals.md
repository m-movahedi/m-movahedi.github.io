---
title: "Hydrology Fundamentals"
weight: 90
date : "2026-05-04"
draft : false
type : "post"
---
# Hydrology Fundamentals

Hydrology focuses on estimating the quantity and timing of runoff from a watershed. In PE Civil Transportation, hydrologic analysis is the precursor to hydraulic design. Before sizing a ditch, pipe, inlet, or culvert, you must determine the design flow rate ($Q$).

---

## Key Parameters of Hydrologic Analysis

Understanding how these core parameters interact is crucial for solving NCEES-style questions.

### 1. Drainage Area ($A$)
The drainage area (or watershed) is the contributing planimetric area from which runoff drains to a specific point of interest.
- **Units:** Typically measured in **acres (ac)** for the Rational Method, or **square miles ($mi^2$)** for larger watershed methods.
- **Conversions:** $1\text{ acre} = 43,560\text{ ft}^2$. $1\text{ square mile} = 640\text{ acres}$.

### 2. Rainfall Intensity ($i$), Duration ($d$), and Frequency ($f$)
Rainfall characteristics are represented by Intensity-Duration-Frequency (IDF) curves or tables.
- **Rainfall Intensity ($i$):** The rate of rainfall accumulation, typically expressed in **inches per hour (in/hr)**.
- **Duration ($d$):** The length of time over which rainfall occurs. In hydrologic design, the design rainfall duration is set equal to the **time of concentration ($t_c$)** of the watershed to find the peak runoff rate.
- **Frequency ($f$) / Return Period ($T$):** The average recurrence interval of a storm. A "10-year storm" has a $10\%$ probability of occurring or being exceeded in any given year ($P = 1/T$). Highway design standards prescribe return periods based on facility type (e.g., interstate highways typically require 50-year or 100-year storms; local streets may use 10-year storms).

### 3. Time of Concentration ($t_c$)
The time required for water to travel from the hydraulically most remote point of the watershed to the point of interest. It is the sum of travel times for different flow segments:
1. **Sheet Flow:** Shallow flow over plane surfaces (usually limited to the first 100 to 300 feet).
2. **Shallow Concentrated Flow:** Flow in rills, shallow gullies, or gutter flow.
3. **Channel Flow:** Flow in open channels, streams, or closed conduits.

### 4. Runoff Coefficient ($C$) and Curve Number ($CN$)
These represent the watershed's cover and soil characteristics, representing the fraction of rainfall that becomes runoff.
- **Rational Runoff Coefficient ($C$):** Ranges from 0.0 (fully pervious, no runoff) to 1.0 (fully impervious, 100% runoff). Heavy commercial areas typically have $C$ values from 0.70 to 0.95, while rural forested areas may have $C$ values from 0.10 to 0.30.
- **NRCS Curve Number ($CN$):** Ranges from 0 (all rainfall is absorbed) to 100 (all rainfall runs off). It depends on Hydrologic Soil Groups (A, B, C, D) and land use.

---

## Hydrologic Soil Groups (HSG)

The NRCS classifies soils into four Hydrologic Soil Groups based on infiltration rates when thoroughly wet:

| Soil Group | Infiltration Rate | Soil Texture / Characteristics | Runoff Potential |
|---|---|---|---|
| **Group A** | High | Deep, well-drained sands or gravelly sands | Low |
| **Group B** | Moderate | Moderately deep to deep, moderately well-drained soils | Moderate |
| **Group C** | Slow | Soils with a layer that impedes downward water movement | Moderately High |
| **Group D** | Very Slow | Clay soils, clay pan, or shallow soils over nearly impervious material | High |

---

## Worked Example: Weighted Runoff Coefficient & Composite Soil Analysis

A proposed roadway reconstruction project features a new highway corridor draining to a single outfall. The project watershed consists of three distinct land cover zones:
1. **Paved Asphalt Roadway & Shoulders:** Area = 2.5 acres, $C = 0.90$
2. **Grass Roadway Right-of-Way (Hydrologic Soil Group B, flat slope):** Area = 4.2 acres, $C = 0.20$
3. **Adjacent Commercial Development (mainly roofs and parking lots):** Area = 6.8 acres, $C = 0.85$

For a design storm event with a duration equal to the watershed's time of concentration, the rainfall intensity is $4.5\text{ in/hr}$.

**Find the composite runoff coefficient ($C_{comp}$) and the peak runoff ($Q$) using the Rational Method.**

### Solution:
1. **Calculate the Total Watershed Area ($A_{total}$):**
   $$A_{total} = A_1 + A_2 + A_3 = 2.5 + 4.2 + 6.8 = 13.5\text{ acres}$$

2. **Calculate the Weighted Runoff Coefficient ($C_{comp}$):**
   $$C_{comp} = \frac{\sum (C_i \cdot A_i)}{A_{total}}$$
   $$C_{comp} = \frac{(0.90 \cdot 2.5) + (0.20 \cdot 4.2) + (0.85 \cdot 6.8)}{13.5}$$
   $$C_{comp} = \frac{2.25 + 0.84 + 5.78}{13.5} = \frac{8.87}{13.5} \approx 0.657$$

3. **Calculate the Peak Runoff ($Q$):**
   Using $Q = C i A$:
   $$Q = 0.657 \cdot 4.5\text{ in/hr} \cdot 13.5\text{ acres} \approx 39.9\text{ cfs}$$

---

## Important Hydrologic Design Concepts

### Design Storm Selection
Selecting the design storm involves balancing construction costs against flood risks. State DOTs prescribe:
- **Interstates/Freeways:** 50-year or 100-year storms for main lanes and bridge openings; 10-year to 50-year for storm sewers.
- **Collector and Local Streets:** 5-year to 10-year storms for gutter spread and minor culverts.
- **Detention Basin Design:** Frequently evaluated for multiple return periods (e.g., 2-year, 10-year, and 100-year storms) to ensure downstream flows do not exceed pre-development rates.

---

## Technical Pitfalls
- **Composite Calculations:** Always weight by area, never just average the coefficients ($C$ or $CN$) directly without area weights.
- **Intensity Units:** Make sure rainfall intensity is in inches per hour (in/hr) and area is in acres (ac) when using the standard USCS form of the Rational Method ($Q = CiA$).
