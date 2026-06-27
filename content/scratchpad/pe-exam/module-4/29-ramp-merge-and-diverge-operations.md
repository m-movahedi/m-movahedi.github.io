---
title: "Ramp Merge and Diverge Operations"
weight: 29
---
# Ramp Merge and Diverge Operations

Ramp merge and diverge segments represent major points of traffic turbulence on freeways. The operational analysis focuses on the **Ramp Influence Area**, which is defined as the area extending $1,500 \text{ feet}$ along the freeway outer lanes (lanes 1 and 2) and including the acceleration or deceleration lane.

The NCEES PE Civil Transportation exam frequently tests these operations. The analysis is governed by Chapter 14 of the Highway Capacity Manual (HCM 6th Edition) and is summarized in the NCEES PE Civil Reference Handbook.

---

## The Ramp Influence Area

The ramp influence area is the zone where merging or diverging vehicles interact with through-freeway vehicles. 

* **Merge Area**: Commences at the physical gore point where the ramp lane meets the freeway and extends $1,500 \text{ ft}$ downstream.
* **Diverge Area**: Commences $1,500 \text{ ft}$ upstream of the physical gore point where the deceleration lane begins.
* **Freeway Lanes 1 and 2**: Lane 1 is the rightmost lane of the freeway (adjacent to the ramp). Lane 2 is the lane immediately to the left of Lane 1. On the exam, freeway lanes are always numbered from left to right (inside to outside), meaning Lane 1 and Lane 2 are the lanes closest to the right shoulder where ramps connect.

---

## Step 1: Calculate Demand Flow Rates in Lanes 1 and 2 ($v_{12}$)

Before calculating density, you must estimate the proportion of freeway traffic that occupies lanes 1 and 2 ($v_{12}$) immediately upstream of the merge or diverge. 

### 1. Merge Area Lanes 1 and 2 Flow ($v_{12}$)
$$v_{12} = v_F \times P_{FM}$$

Where:
* $v_{12}$ = demand flow rate in freeway lanes 1 and 2 immediately upstream of the merge ($pc/h$)
* $v_F$ = directional freeway demand flow rate immediately upstream of the merge ($pc/h$)
* $P_{FM}$ = proportion of freeway traffic remaining in lanes 1 and 2 at the merge point.

### 2. Diverge Area Lanes 1 and 2 Flow ($v_{12}$)
$$v_{12} = v_F \times P_{FD}$$

Where:
* $v_{12}$ = demand flow rate in freeway lanes 1 and 2 immediately upstream of the diverge ($pc/h$)
* $v_F$ = directional freeway demand flow rate upstream of the diverge ($pc/h$)
* $P_{FD}$ = proportion of freeway traffic remaining in lanes 1 and 2 at the diverge point.

*Note: The proportions $P_{FM}$ and $P_{FD}$ are calculated using regression equations provided in the NCEES handbook. These equations depend on the number of freeway lanes ($N$), the ramp flow ($v_R$), and the distance to adjacent upstream or downstream ramps ($L_{up}$ or $L_{dn}$). On the exam, $P_{FM}$ or $P_{FD}$ is either given, or the problem will simplify the system.*

---

## Step 2: Calculate Density in the Ramp Influence Area ($D_R$)

Once $v_{12}$ and the ramp flow ($v_R$) are determined, the density in the influence area ($D_R$, in $pc/mi/ln$) is calculated using the following empirical equations:

### 1. Merge Area Density ($D_R$)
$$D_R = 3.402 + 0.00756 \times v_{12} + 0.0115 \times v_R - 0.0048 \times L_A$$

Where:
* $v_{12}$ = adjusted flow rate in freeway lanes 1 and 2 ($pc/h$)
* $v_R$ = adjusted flow rate on the ramp ($pc/h$)
* $L_A$ = length of the acceleration lane ($\text{feet}$)

### 2. Diverge Area Density ($D_R$)
$$D_R = 2.642 + 0.0053 \times v_{12} + 0.0143 \times v_R - 0.0029 \times L_D$$

Where:
* $v_{12}$ = adjusted flow rate in freeway lanes 1 and 2 ($pc/h$)
* $v_R$ = adjusted flow rate on the ramp ($pc/h$)
* $L_D$ = length of the deceleration lane ($\text{feet}$)

---

## Step 3: Determine Level of Service (LOS)

LOS for ramp influence areas is determined by the density ($D_R$):

| Level of Service (LOS) | Density Range ($pc/mi/ln$) |
| --- | --- |
| **A** | $\le 10.0$ |
| **B** | $> 10.0$ to $\le 20.0$ |
| **C** | $> 20.0$ to $\le 28.0$ |
| **D** | $> 28.0$ to $\le 35.0$ |
| **E** | $> 35.0$ to $\le 45.0$ |
| **F** | $> 45.0$ OR if demand exceeds capacity |

### Capacity Limits (LOS F Triggers)
Regardless of the calculated density, the segment operates at **LOS F** if any of the following capacity limits are exceeded:
1. **Total Freeway Flow Downstream of Merge ($v_{fo}$)**:
   $$v_{fo} = v_F + v_R > \text{Freeway Capacity} \times N$$
2. **Maximum Flow entering the Merge Influence Area ($v_{12} + v_R$)**:
   $$v_{12} + v_R > 4,600 \text{ pc/h}$$
3. **Maximum Flow entering the Diverge Influence Area ($v_{12}$)**:
   $$v_{12} > 4,400 \text{ pc/h}$$
4. **Ramp Capacity ($v_R$)**:
   $$v_R > \text{Ramp Capacity (typically } 1,800 - 2,200 \text{ pc/h)}$$

---

## Critical Pitfalls and Exam Traps

1. **Incorrect Flow Direction Adjustment (PHF and Heavy Vehicles)**:
   Always adjust raw hourly demand volumes ($veh/h$) to passenger-car equivalents ($pc/h$) using the PHF and heavy vehicle factor ($f_{HV}$) before calculating $v_{12}$ or $v_R$.
   $$v = \frac{V}{\text{PHF} \times f_{HV}}$$

2. **Acceleration/Deceleration Lane Length ($L_A$ or $L_D$) Units**:
   The equations for density require the acceleration lane length ($L_A$) and deceleration lane length ($L_D$) to be in **feet**. Do not use miles.

3. **Confusing Lane Numbers**:
   Remember that lanes 1 and 2 in the influence area always refer to the two rightmost lanes of the freeway. On a 3-lane freeway direction, $v_{12}$ represents the flow in the center and right lanes. The leftmost lane (Lane 3) is excluded from the influence area calculation.

---

## Worked Example

A freeway merge segment has the following adjusted peak passenger-car flow rates:
* Freeway flow upstream of the merge: $v_F = 3,800 \text{ pc/h}$ (on a 3-lane directional freeway, $N=3$)
* On-ramp flow: $v_R = 750 \text{ pc/h}$
* Acceleration lane length: $L_A = 600 \text{ ft}$
* Proportion of freeway traffic remaining in lanes 1 and 2: $P_{FM} = 0.65$

**Determine the density in the ramp influence area, check capacity limits, and find the Level of Service (LOS).**

### Solution:

#### Step 1: Calculate Freeway Flow in Lanes 1 and 2 ($v_{12}$)
$$v_{12} = v_F \times P_{FM} = 3,800 \times 0.65 = 2,470 \text{ pc/h}$$

#### Step 2: Calculate Density in the Merge Influence Area ($D_R$)
$$D_R = 3.402 + 0.00756 \times v_{12} + 0.0115 \times v_R - 0.0048 \times L_A$$
$$D_R = 3.402 + 0.00756(2,470) + 0.0115(750) - 0.0048(600)$$
$$D_R = 3.402 + 18.673 + 8.625 - 2.88$$
$$D_R = 27.82 \text{ pc/mi/ln}$$

#### Step 3: Check Capacity Limits
1. **Downstream Freeway Flow**:
   $$v_{fo} = v_F + v_R = 3,800 + 750 = 4,550 \text{ pc/h}$$
   Freeway capacity for a 3-lane segment (assuming FFS = $70 \text{ mph}$, capacity is $2,400 \text{ pc/h/ln}$):
   $$\text{Capacity} = 3 \times 2,400 = 7,200 \text{ pc/h}$$
   Since $4,550 \le 7,200$, the downstream freeway is not oversaturated.
2. **Merge Influence Area Flow**:
   $$v_{12} + v_R = 2,470 + 750 = 3,220 \text{ pc/h}$$
   Since $3,220 \le 4,600 \text{ pc/h}$, the influence area is below capacity.
3. **Ramp Flow**:
   $$v_R = 750 \text{ pc/h} \le 2,000 \text{ pc/h (typical capacity)}$$
   Ramp capacity is not exceeded.

#### Step 4: Determine Level of Service (LOS)
Compare $D_R = 27.82 \text{ pc/mi/ln}$ to the ramp influence area LOS criteria:
* $20.0 < D_R \le 28.0 \rightarrow$ **LOS C**

**Conclusion:** The ramp merge segment operates at **LOS C**.

---

## References and Standards
* *NCEES PE Civil Reference Handbook*, Section 6.2 (Traffic Operations).
* *Highway Capacity Manual (HCM) 6th Edition*, Chapter 14 (Freeway Merges and Diverges).
