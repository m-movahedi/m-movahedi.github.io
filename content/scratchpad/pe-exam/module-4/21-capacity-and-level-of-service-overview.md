---
title: "Capacity and Level of Service Overview"
weight: 21
date : "2026-05-04"
draft : false
type : "post"
---
# Capacity and Level of Service Overview

The Highway Capacity Manual (HCM) defines capacity and Level of Service (LOS) as the core performance metrics used to analyze and design transportation facilities. In the NCEES PE Civil Transportation exam, understanding these foundational concepts, knowing how they differ across facility types, and mastering the basic traffic flow relationships is essential. This lesson covers the fundamentals of capacity, demand, volume-to-capacity ($v/c$) ratios, service flow rates, density, delay, and how these performance measures translate into LOS.

## Fundamentals of Capacity and demand

### Capacity ($c$)
Capacity is the maximum sustainable hourly flow rate at which persons or vehicles can reasonably be expected to traverse a point or a uniform segment of a lane or roadway during a specified time period under prevailing roadway, traffic, and control conditions. 
* Capacity is not a fixed physical constant; it varies based on geometry, lane widths, lateral clearances, heavy vehicle percentages, and traffic control configurations.
* Capacity is typically expressed in passenger cars per hour ($pc/h$) or passenger cars per hour per lane ($pc/h/ln$).

### Demand ($V$ or $D$)
Demand is the actual number of vehicles or users attempting to traverse the facility. On the exam, demand is usually given as an hourly volume (vehicles per hour, $veh/h$), which must be adjusted to represent the peak 15-minute flow rate before capacity or LOS analysis can begin.

### Volume-to-Capacity Ratio ($v/c$)
The $v/c$ ratio (also known as the degree of saturation) represents the proportion of a facility's capacity utilized by traffic demand:
$$v/c = \frac{\text{Demand Flow Rate } (v)}{\text{Capacity } (c)}$$
* A $v/c \le 1.0$ indicates that demand is less than or equal to capacity.
* A $v/c > 1.0$ indicates that demand exceeds capacity, resulting in oversaturated conditions, queue formation, and system breakdown (LOS F).

---

## Uninterrupted vs. Interrupted Flow Facilities

Traffic facilities are divided into two main operational categories based on the presence of traffic control devices:

### Uninterrupted Flow
Facilities that have no fixed elements (such as traffic signals, stop signs, or yield signs) external to the traffic stream that cause interruptions. Traffic flow is governed by the interaction between vehicles and the physical characteristics of the roadway.
* **Examples**: Freeways (basic, weaving, ramp segments), multilane highways, and two-lane highways.
* **Primary Performance Measure**: Density ($D$), which measures proximity to other vehicles and freedom to maneuver.

### Interrupted Flow
Facilities that contain fixed elements that cause periodic interruptions to the traffic stream, regardless of the level of traffic. These interruptions are typically due to traffic control devices.
* **Examples**: Signalized intersections, roundabouts, two-way stop-controlled (TWSC) intersections, and all-way stop-controlled (AWSC) intersections.
* **Primary Performance Measure**: Control delay ($d$), which measures the average travel time lost due to deceleration, queue wait times, and acceleration.

---

## Service Measures and Level of Service (LOS)

Level of Service (LOS) is a qualitative categorization of a facility's operational performance, designated by letters A through F:
* **LOS A**: Represents free-flow conditions, where drivers have complete freedom to choose their speed and maneuver within the traffic stream.
* **LOS E**: Represents operations at or near capacity. Minor disruptions can cause severe queuing.
* **LOS F**: Represents breakdown or oversaturated conditions where demand exceeds capacity.

Each facility type uses a specific **service measure** to define its LOS:

| Facility Type | Primary Service Measure | Key Operational Indicator | Typical Units |
| --- | --- | --- | --- |
| **Basic Freeway Segments** | Density ($D$) | Freedom to maneuver | $pc/mi/ln$ |
| **Multilane Highways** | Density ($D$) | Freedom to maneuver | $pc/mi/ln$ |
| **Two-Lane Highways** | PTSF, ATS, or $v/c$ | Percent Time-Spent-Following, Average Travel Speed | $\%$, $mph$ |
| **Weaving Segments** | Density ($D$) | Turbulence due to lane changes | $pc/mi/ln$ |
| **Ramp Merge & Diverge** | Density ($D_{R}$) | Turbulence in the influence area | $pc/mi/ln$ |
| **Signalized Intersections** | Control Delay ($d$) | Signal cycle delay and queue time | $sec/veh$ |
| **Unsignalized Intersections** | Control Delay ($d$) | Wait time for gaps in major stream | $sec/veh$ |
| **Roundabout Operations** | Control Delay ($d$) | Wait time for gaps in circulating flow | $sec/veh$ |
| **Urban Street Segments** | Average Travel Speed ($S_D$) | Travel time relative to free-flow speed | $mph$ (or $\%$ of FFS) |

---

## The Fundamental Relationship of Traffic Flow

For uninterrupted flow, speed ($S$, in $mph$), density ($k$ or $D$, in $veh/mi$ or $pc/mi$), and flow rate ($v$, in $veh/h$ or $pc/h$) are linked by the fundamental identity:
$$v = S \times k$$
For a multi-lane facility, we analyze performance on a per-lane basis:
$$v_p = \frac{v}{N}$$
$$D = \frac{v_p}{S}$$
Where:
* $v_p$ = equivalent peak passenger-car flow rate ($pc/h/ln$)
* $S$ = average passenger-car speed ($mph$)
* $D$ = density ($pc/mi/ln$)
* $N$ = number of lanes in one direction

### The Traffic Flow Diagram Relationships
1. **Speed vs. Density**: Speed is at its maximum (Free-Flow Speed, $S_{ff}$) when density is zero. As density increases, speed decreases. At jam density ($k_j$), speed drops to zero.
2. **Flow vs. Density**: Flow increases as density increases until it reaches capacity ($q_{max}$ or $C$), which occurs at critical density ($k_c$). Beyond critical density, flow decreases as density continues to rise toward jam density.
3. **Speed vs. Flow**: Speed remains relatively high and constant across a wide range of flow rates, but begins to drop rapidly as flow approaches capacity.

---

## Peak Hour Factor (PHF)

Traffic demand is rarely distributed evenly throughout an hour. To design for the peak periods within the hour, HCM utilizes the Peak Hour Factor (PHF) to convert an hourly volume into an equivalent peak 15-minute flow rate.

The Peak Hour Factor is calculated as:
$$\text{PHF} = \frac{V}{4 \times V_{15}}$$
Where:
* $V$ = total hourly volume ($veh/h$)
* $V_{15}$ = maximum volume counted during any single 15-minute interval within the peak hour ($veh$)

The peak 15-minute equivalent flow rate ($v$) is:
$$v = \frac{V}{\text{PHF}}$$
Where:
* $v$ = equivalent hourly flow rate for the peak 15-minute period ($veh/h$)

### Key Exam Tip
Always check whether a given volume is already adjusted or represents the raw hourly volume. If the problem states "hourly volume" or "demand volume" and provides a PHF, you must divide by the PHF to get the peak flow rate. If the problem states "peak 15-minute flow rate" or "design flow rate already adjusted for peak-hour effects," do not divide by the PHF.

---

## Critical Pitfalls and Exam Traps

1. **Confusing Units ($veh/h$ vs. $pc/h/ln$)**:
   The exam will often give demand in vehicles per hour ($veh/h$). Most HCM procedures require converting this to passenger cars per hour per lane ($pc/h/ln$) by dividing by the number of lanes ($N$), the Peak Hour Factor (PHF), and the heavy vehicle adjustment factor ($f_{HV}$). Skipping any of these divisors is a classic trap.

2. **Selecting the Wrong Service Measure**:
   Be careful not to look up LOS for a signalized intersection using a density table or vice versa. Keep the primary service measures clear: delay for intersections, density for freeways/multilane highways, and speed/PTSF for two-lane highways.

3. **Peak Hour Factor Multiplier Mistake**:
   A common algebra mistake is multiplying the hourly volume by the PHF instead of dividing. Since $\text{PHF} \le 1.0$, dividing by PHF will always result in a flow rate *greater* than or equal to the hourly volume ($v \ge V$). If your adjusted flow rate is smaller than the starting hourly volume, you multiplied by mistake.

---

## Worked Examples

### Worked Example 1: Peak Hour Factor and Peak Flow Rate
A count of vehicles on an urban arterial segment during the peak hour yields the following 15-minute counts:
* 5:00 PM – 5:15 PM: 720 vehicles
* 5:15 PM – 5:30 PM: 850 vehicles
* 5:30 PM – 5:45 PM: 920 vehicles
* 5:45 PM – 6:00 PM: 780 vehicles

**Questions:**
1. What is the Peak Hour Factor (PHF)?
2. What is the equivalent hourly flow rate ($v$) for the peak 15-minute period?

**Solution:**
1. Calculate the total hourly volume ($V$):
   $$V = 720 + 850 + 920 + 780 = 3,270 \text{ veh/h}$$
   
2. Identify the peak 15-minute volume ($V_{15}$):
   $$V_{15} = 920 \text{ vehicles (occurs between 5:30 PM and 5:45 PM)}$$
   
3. Calculate the PHF:
   $$\text{PHF} = \frac{V}{4 \times V_{15}} = \frac{3,270}{4 \times 920} = \frac{3,270}{3,680} = 0.889$$
   
4. Calculate the peak flow rate ($v$):
   $$v = \frac{V}{\text{PHF}} = \frac{3,270}{0.889} = 3,680 \text{ veh/h}$$
   *(Note: This is exactly equivalent to $4 \times V_{15} = 4 \times 920 = 3,680 \text{ veh/h}$.)*

---

### Worked Example 2: Density and Volume-to-Capacity Analysis
A 3-lane basic freeway segment (in one direction) has a capacity of $2,300 \text{ pc/h/ln}$ and is experiencing a peak 15-minute flow rate of $4,800 \text{ pc/h}$ in that direction. The average speed of the traffic stream during the peak period is measured at $58 \text{ mph}$.

**Questions:**
1. What is the volume-to-capacity ($v/c$) ratio of the freeway segment?
2. What is the density ($D$) of the traffic stream in $pc/mi/ln$?

**Solution:**
1. Convert the directional peak flow rate ($v = 4,800 \text{ pc/h}$) to a per-lane flow rate ($v_p$):
   $$v_p = \frac{v}{N} = \frac{4,800}{3} = 1,600 \text{ pc/h/ln}$$
   
2. Calculate the $v/c$ ratio:
   $$v/c = \frac{v_p}{\text{Capacity per lane}} = \frac{1,600}{2,300} = 0.696$$
   
3. Calculate the density ($D$):
   $$D = \frac{v_p}{S} = \frac{1,600 \text{ pc/h/ln}}{58 \text{ mph}} = 27.59 \text{ pc/mi/ln}$$

---

## References and Standards
* *NCEES PE Civil Reference Handbook*, Section 6.2 (Traffic Operations).
* *Highway Capacity Manual (HCM) 6th Edition*, Chapter 4 (Traffic Operations and Capacity Concepts) and Chapter 5 (Quality and Level-of-Service Concepts).
