---
title: "Traffic Signal Warrants"
weight: 71
date : "2026-05-04"
draft : false
type : "post"
---
# Traffic Signal Warrants

A traffic control signal should only be installed if an engineering study indicates that the installation is justified. The *Manual on Uniform Traffic Control Devices (MUTCD)* Chapter 4C defines nine specific traffic signal warrants. 

Meeting one or more of these warrants does not mandate the installation of a signal; rather, it indicates that a signal may be considered. Conversely, if no warrants are met, a signal should not be installed.

On the PE Civil Transportation exam, you will need to determine if a signal is justified by analyzing approach lane configurations, traffic volumes, speeds, crash history, and applying the correct MUTCD tables and adjustment factors.

---

## The Nine MUTCD Warrants

| Warrant | Name | Description |
| :--- | :--- | :--- |
| **Warrant 1** | **Eight-Hour Vehicular Volume** | Based on traffic volumes on the major and minor streets over any 8 hours of a typical day. Evaluated via Condition A (Minimum Volume) or Condition B (Interruption of Continuous Traffic), or an $80\%$ combination of both. |
| **Warrant 2** | **Four-Hour Vehicular Volume** | Evaluated using a scatter plot graph in the MUTCD. If 4 hours of volume data plot above the applicable curve, the warrant is met. |
| **Warrant 3** | **Peak Hour** | Designed for locations where traffic is highly concentrated (e.g., factories, office parks). Evaluated via peak-hour delay or peak-hour volume curves. |
| **Warrant 4** | **Pedestrian Volume** | Evaluated when pedestrian volumes crossing the major street are high enough to cause excessive delay or hazard. |
| **Warrant 5** | **School Crossing** | Specifically for locations where school children cross a major street and the number of gaps in traffic is insufficient. |
| **Warrant 6** | **Coordinated Signal System** | Applied to maintain proper vehicle platooning along a corridor when adjacent signals are too far apart. |
| **Warrant 7** | **Crash Experience** | Justified when a less restrictive control has failed to solve safety issues. Requires at least **5 correctable crashes** in a 12-month period and volume thresholds at $80\%$ of Warrant 1. |
| **Warrant 8** | **Roadway Network** | Applied to encourage concentration of traffic on major routes in a designated roadway network. |
| **Warrant 9** | **Intersection Near a Grade Crossing** | Applied when queueing from an intersection routinely backs up across a nearby railroad track. |

---

## Critical Warrant Evaluation Rules

Evaluating warrants requires strict adherence to MUTCD definitions. The most common errors on the PE exam involve mixing up major and minor street volumes or failing to apply speed and population adjustments.

### 1. Major Street vs. Minor Street Volumes
*   **Major Street Volume:** Represented as the **total volume of both approaches** (both directions combined) for the analyzed hour.
*   **Minor Street Volume:** Represented as the volume of the **single highest-volume approach** (one direction only) for the analyzed hour. *Do not sum the minor street approaches.*

### 2. The $70\%$ Speed/Population Reduction Factor
The volume thresholds in the MUTCD tables for Warrants 1, 2, and 3 can be reduced to $70\%$ of their standard values if either of the following conditions is met:
1.  The 85th-percentile speed on the major street exceeds **$40\text{ mph}$ ($70\text{ km/h}$)**.
2.  The intersection lies within a built-up area of an isolated community with a population of **less than $10,000$**.

This reduction is often referred to as the "70% columns" or "rural columns" in MUTCD tables.

### 3. Right-Turn Reductions
For the minor-street approach, engineering judgment should be used to determine whether right-turning vehicles should be included in the approach volume. 
*   If the minor street has an exclusive right-turn lane and vehicles can turn right freely (or with minimal conflict with major-street traffic), the right-turn volume is typically **subtracted** from the minor-street approach volume before evaluating warrants.
*   If the right-turning vehicles share a lane with through or left-turning traffic, they must be included in the volume.

---

## Worked Example: Warrant 1 Evaluation

### Problem Statement
A four-legged intersection is being studied for signalization. The major street has a total of 2 travel lanes (1 in each direction) and an 85th-percentile speed of $45\text{ mph}$. The minor street has a single-lane approach on both sides. 

Traffic counts indicate that for 8 hours of a typical day, the volumes exceed the following hourly rates:
*   Major Street Total Volume (both approaches combined) = $400\text{ veh/h}$
*   Minor Street High-Approach Volume (highest single approach) = $120\text{ veh/h}$

Evaluate whether **Warrant 1, Condition A (Minimum Vehicular Volume)** is met.

### MUTCD Reference Table (Simplified Standard Warrant 1, Condition A):
Below are the minimum hourly vehicular volumes required on the major street and the higher-volume minor street for 8 hours of a day.

| Number of Lanes (Major/Minor) | Major Street Total (Standard) | Minor Street High (Standard) | Major Street Total (70% Factor) | Minor Street High (70% Factor) |
| :--- | :---: | :---: | :---: | :---: |
| 1 / 1 | 500 | 150 | 350 | 105 |
| 2 or more / 1 | 600 | 150 | 420 | 105 |
| 2 or more / 2 or more | 600 | 200 | 420 | 140 |
| 1 / 2 or more | 500 | 200 | 350 | 140 |

### Step-by-Step Solution

#### Step 1: Identify the Lane Configuration Case
*   Major Street: 1 lane in each direction = **2 lanes total** (represented as "2 or more" lanes in the table).
*   Minor Street: 1 lane on each approach = **1 lane** on the high-volume approach.
*   Thus, use the **"2 or more / 1"** lane configuration row.

#### Step 2: Determine if Speed/Population Adjustments Apply
*   The 85th-percentile speed on the major street is $45\text{ mph}$, which is greater than the $40\text{ mph}$ threshold.
*   Therefore, the **70% adjustment columns** must be used.
*   Required Thresholds:
    *   Major Street: $420\text{ veh/h}$
    *   Minor Street (High Approach): $105\text{ veh/h}$

#### Step 3: Compare Actual Volumes to Thresholds
*   **Actual Major Street Volume:** $400\text{ veh/h}$
    *   *Comparison:* $400\text{ veh/h} < 420\text{ veh/h}$ (Threshold NOT met)
*   **Actual Minor Street Volume:** $120\text{ veh/h}$
    *   *Comparison:* $120\text{ veh/h} \ge 105\text{ veh/h}$ (Threshold MET)

#### Step 4: Determine Conclusion
Warrant 1, Condition A requires *both* the major street volume and the minor street volume to meet or exceed their respective thresholds for at least 8 hours. 

Because the major street volume ($400\text{ veh/h}$) is less than the required threshold ($420\text{ veh/h}$), **Warrant 1, Condition A is NOT met.**

*Exam Tip: Note that if the speed limit had been 35 mph, the standard columns would apply (Thresholds: 600 / 150), and neither threshold would have been met. Always perform the speed check first.*
