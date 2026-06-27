---
title: "Urban Street Segments"
weight: 25
date : "2026-05-04"
draft : false
type : "post"
---
# Urban Street Segments

Urban streets are characterized by interrupted flow, where traffic signals, stop signs, and turning vehicles at intersections dominate the travel time and operational quality. Unlike freeways and multilane highways where density is the primary measure of service, urban street segments are evaluated using **Average Travel Speed ($S_D$)** or its ratio to the segment's **Free-Flow Speed (FFS)**.

The operational analysis of urban street segments is governed by Chapters 16 and 18 of the Highway Capacity Manual (HCM 6th Edition).

---

## Urban Street Classification

The HCM classifies urban streets into four categories based on their design and functional characteristics:

* **Class 1 (Principal Arterial - High Speed)**: Typically high-speed roadways with widely spaced signals and few access points. Speed limits are $45 \text{ to } 55 \text{ mph}$.
* **Class 2 (Principal Arterial - Moderate Speed)**: Standard multi-lane suburban arterials. Speed limits are $35 \text{ to } 45 \text{ mph}$.
* **Class 3 (Suburban/Urban Arterial)**: Densely developed roads with closely spaced signals and high access-point density. Speed limits are $30 \text{ to } 35 \text{ mph}$.
* **Class 4 (Downtown/Collector)**: Downtown streets with heavy pedestrian activity, parking maneuvers, and frequent signals. Speed limits are $25 \text{ to } 30 \text{ mph}$.

---

## Average Travel Speed Methodology

The Average Travel Speed ($S_D$, in $mph$) for a segment is calculated from the length of the segment and the total travel time:

$$S_D = \frac{3,600 \times L}{T}$$

Where:
* $S_D$ = average travel speed ($mph$)
* $L$ = segment length ($mi$)
* $T$ = average travel time to traverse the segment ($sec$)

The total travel time ($T$) is the sum of the midblock running time ($t_R$) and the control delay ($d$) at the downstream boundary intersection:

$$T = t_R + d$$

### 1. Midblock Running Time ($t_R$)
This is the time required to traverse the physical distance of the segment at the midblock running speed ($S_R$), without any intersection delays:

$$t_R = \frac{3,600 \times L}{S_R}$$

Where:
* $S_R$ = midblock running speed ($mph$). This is estimated based on the segment's free-flow speed (FFS) and is typically slightly lower than FFS due to midblock friction (driveways, lane changes, curbside activity).

### 2. Downstream Boundary Intersection Control Delay ($d$)
The control delay is the average delay experienced by a vehicle at the downstream intersection (usually a traffic signal). It includes uniform delay ($d_1$), incremental delay ($d_2$), and initial queue delay ($d_3$):

$$d = d_1 \times \text{PF} + d_2 + d_3$$

Where:
* $d_1$ = uniform delay ($sec/veh$); assuming uniform arrivals.
* $\text{PF}$ = progression adjustment factor (accounts for coordinated signal timing).
* $d_2$ = incremental delay ($sec/veh$); accounts for random arrivals and cycle-to-cycle failures.
* $d_3$ = initial queue delay ($sec/veh$); accounts for pre-existing queues at the start of the analysis period.

*Note: Intersection delay calculations are covered in detail in Lesson 26 (Signalized Intersection Capacity).*

---

## Level of Service (LOS) Criteria

In HCM 6th Edition, the Level of Service for urban street segments is determined by the **travel speed as a percentage of the base free-flow speed** ($\% \text{ FFS}$), or directly by the average travel speed ($S_D$) according to the street class:

| LOS | Travel Speed as % of FFS | Class 1 Speed ($mph$) | Class 2 Speed ($mph$) | Class 3 Speed ($mph$) | Class 4 Speed ($mph$) |
| --- | --- | --- | --- | --- | --- |
| **A** | $> 85\%$ | $> 42$ | $> 30$ | $> 27$ | $> 21$ |
| **B** | $> 67\% - 85\%$ | $> 34 - 42$ | $> 24 - 30$ | $> 21 - 27$ | $> 16 - 21$ |
| **C** | $> 50\% - 67\%$ | $> 25 - 34$ | $> 18 - 24$ | $> 16 - 21$ | $> 12 - 16$ |
| **D** | $> 40\% - 50\%$ | $> 20 - 25$ | $> 14 - 18$ | $> 12 - 16$ | $> 10 - 12$ |
| **E** | $> 30\% - 40\%$ | $> 15 - 20$ | $> 10 - 14$ | $> 9 - 12$ | $> 7 - 10$ |
| **F** | $\le 30\%$ | $\le 15$ | $\le 10$ | $\le 9$ | $\le 7$ |

---

## Critical Pitfalls and Exam Traps

1. **Incorrect Downstream Delay Allocation**:
   A segment's travel time is calculated from the start of the midblock portion to the stop line of the *downstream* intersection. A common mistake is using the delay of the *upstream* intersection (where the vehicle entered the segment) instead of the downstream intersection.

2. **Unit Conversion Errors**:
   Segment length ($L$) is typically given in feet or miles, and delay ($d$) is given in seconds. Ensure you convert segment length to miles and travel time to seconds before calculating speed in miles per hour ($mph$).
   * $1 \text{ mile} = 5,280 \text{ feet}$
   * $S_D = \frac{L \text{ (miles)}}{T \text{ (seconds)} / 3,600}$

3. **Confusing Segment LOS with Intersection LOS**:
   An urban street segment's LOS is determined by *speed* (or $\%$ of FFS). The boundary intersection itself has its own LOS based purely on *control delay*. Do not use the intersection delay LOS table to evaluate the street segment.

---

## Worked Example

An urban street segment (Class 2 Arterial) has the following characteristics:
* Segment length: $1,200 \text{ ft}$
* Segment Free-Flow Speed (FFS): $40 \text{ mph}$
* Estimated midblock running speed ($S_R$): $36 \text{ mph}$
* Control delay at the downstream signalized intersection: $22.5 \text{ sec/veh}$

**Determine the average travel speed ($S_D$), the percent of free-flow speed ($\% \text{ FFS}$), and the Level of Service (LOS) of the segment.**

### Solution:

#### Step 1: Convert Segment Length to Miles
$$L = \frac{1,200 \text{ ft}}{5,280 \text{ ft/mi}} = 0.2273 \text{ miles}$$

#### Step 2: Calculate Midblock Running Time ($t_R$)
$$t_R = \frac{3,600 \times L}{S_R} = \frac{3,600 \times 0.2273 \text{ mi}}{36 \text{ mph}} = 22.73 \text{ seconds}$$

#### Step 3: Calculate Total Travel Time ($T$)
$$T = t_R + d = 22.73 \text{ s} + 22.50 \text{ s} = 45.23 \text{ seconds}$$

#### Step 4: Calculate Average Travel Speed ($S_D$)
$$S_D = \frac{3,600 \times L}{T} = \frac{3,600 \times 0.2273 \text{ mi}}{45.23 \text{ s}} = 18.09 \text{ mph}$$

#### Step 5: Calculate Percent of Free-Flow Speed ($\% \text{ FFS}$)
$$\% \text{ FFS} = \frac{S_D}{\text{FFS}} \times 100 = \frac{18.09 \text{ mph}}{40 \text{ mph}} \times 100 = 45.2\%$$

#### Step 6: Determine Level of Service (LOS)
Compare the calculated speed ($S_D = 18.09 \text{ mph}$) or $\%$ of FFS ($45.2\%$) to the Class 2 Arterial LOS criteria:
* Under the $\% \text{ FFS}$ criteria: $40\% < 45.2\% \le 50\% \rightarrow$ **LOS D**
* Under the Class 2 Speed criteria: $14 \text{ mph} < 18.09 \text{ mph} \le 18 \text{ mph} \rightarrow$ **LOS D** (or right on the boundary between C and D, round to the worse condition or select **LOS D**).

**Conclusion:** The urban street segment operates at **LOS D**.

---

## References and Standards
* *NCEES PE Civil Reference Handbook*, Section 6.2 (Traffic Operations).
* *Highway Capacity Manual (HCM) 6th Edition*, Chapter 18 (Urban Street Segments).
