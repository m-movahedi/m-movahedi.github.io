---
title: "Multilane Highways"
weight: 23
---
# Multilane Highways

Multilane highways differ from freeways because they are not fully access-controlled. They often feature at-grade intersections, driveways, and medians (or lack thereof), which introduces additional friction to traffic flow. The operational analysis of multilane highways is governed by Chapter 12 of the Highway Capacity Manual (HCM 6th Edition) and is a frequent topic on the NCEES PE Civil Transportation exam.

---

## Operational Differences: Freeways vs. Multilane Highways

To analyze multilane highways correctly, keep these differences from freeways in mind:
* **Access Points**: Multilane highways have driveways and unsignalized intersections. Each access point introduces turning vehicles that disrupt flow, which reduces the Free-Flow Speed (FFS).
* **Medians**: Freeways are always divided. Multilane highways may be divided, undivided, or have a Two-Way Left-Turn Lane (TWLTL). Undivided highways experience head-on friction, which reduces FFS.
* **Lateral Clearance**: For multilane highways, we adjust for **Total Lateral Clearance (TLC)**, which combines the clearances on both the right and left sides.
* **Breakpoint**: The flow rate breakpoint (above which speed starts to drop below FFS) is a constant **1,400 pc/h/ln** for all multilane highway free-flow speeds.

---

## Step 1: Determine Free-Flow Speed (FFS)

If FFS is not measured directly in the field, estimate it using:

$$\text{FFS} = \text{BFFS} - f_{LW} - f_{LC} - f_{M} - f_{A}$$

Where:
* $\text{FFS}$ = estimated free-flow speed ($mph$)
* $\text{BFFS}$ = base free-flow speed ($mph$); typically assumed to be $60 \text{ mph}$ if not specified, or estimated based on the posted speed limit (e.g., speed limit plus $5 \text{ mph}$ for speed limits $\ge 50 \text{ mph}$, and speed limit plus $7 \text{ mph}$ for speed limits $< 50 \text{ mph}$).
* $f_{LW}$ = adjustment for lane width ($mph$)
* $f_{LC}$ = adjustment for total lateral clearance ($mph$)
* $f_{M}$ = adjustment for median type ($mph$)
* $f_{A}$ = adjustment for access-point density ($mph$)

### 1. Lane Width Adjustment ($f_{LW}$)
Standard lane width is $12 \text{ ft}$. The reductions for narrower lanes match those for freeways:

| Average Lane Width (ft) | FFS Reduction, $f_{LW}$ (mph) |
| --- | --- |
| $\ge 12$ | 0.0 |
| $11$ | 1.9 |
| $10$ | 6.6 |

### 2. Total Lateral Clearance Adjustment ($f_{LC}$)
Total Lateral Clearance (TLC) is the sum of the lateral clearances from the edge of the travel lanes to obstructions on both the right and left (median) sides:
$$\text{TLC} = L_R + L_L$$
Where:
* $L_R$ = right-shoulder lateral clearance (measured from the right edge of the travel lanes; capped at $6 \text{ ft}$ for calculation).
* $L_L$ = left (median) lateral clearance (measured from the left edge of the travel lanes; capped at $6 \text{ ft}$ for divided highways). For undivided highways, $L_L$ is automatically assumed to be $\ge 6 \text{ ft}$ (meaning $L_L = 6.0 \text{ ft}$), so only the right shoulder clearance ($L_R$) can reduce FFS.

Once TLC is calculated, look up the FFS reduction ($f_{LC}$):

| Total Lateral Clearance, TLC (ft) | 4-Lane Highways | 6-Lane Highways |
| --- | --- | --- |
| $\ge 12$ | 0.0 | 0.0 |
| $10$ | 0.4 | 0.4 |
| $8$ | 0.9 | 0.9 |
| $6$ | 1.3 | 1.3 |
| $4$ | 1.8 | 1.8 |
| $2$ | 2.8 | 2.8 |
| $0$ | 3.9 | 3.9 |

### 3. Median Type Adjustment ($f_{M}$)
Medians provide physical separation that increases safety and comfort, which increases FFS:

| Median Type | FFS Reduction, $f_{M}$ (mph) |
| --- | --- |
| Divided Highways (physical median) | 0.0 |
| Two-Way Left-Turn Lanes (TWLTL) | 0.0 |
| Undivided Highways | 1.6 |

### 4. Access-Point Density Adjustment ($f_{A}$)
Access points (driveways and intersections on the right side of the highway in the direction of analysis) are counted and expressed as a density (access points per mile). The FFS reduction is:
$$f_{A} = 0.25 \times \text{APD}$$
Where $\text{APD}$ is the access-point density in access points per mile.

---

## Step 2: Determine Equivalent Passenger-Car Flow Rate ($v_p$)

This step is identical to the freeway analysis:

$$v_p = \frac{V}{\text{PHF} \times N \times f_{HV} \times f_p}$$

Where:
* $v_p$ = demand flow rate under equivalent passenger-car conditions ($pc/h/ln$)
* $V$ = hourly demand volume ($veh/h$)
* $\text{PHF}$ = Peak Hour Factor
* $N$ = number of lanes in one direction
* $f_{HV}$ = heavy vehicle adjustment factor
* $f_p$ = driver population adjustment factor (typically $1.00$)

The heavy vehicle adjustment factor is:
$$f_{HV} = \frac{1}{1 + P_T(E_T - 1) + P_R(E_R - 1)}$$
* **Level Terrain**: $E_T = 1.5$, $E_R = 1.2$
* **Rolling Terrain**: $E_T = 2.5$, $E_R = 2.0$

---

## Step 3: Determine Speed ($S$) and Density ($D$)

### Average Speed ($S$)
For multilane highways, the breakpoint is a constant **1,400 pc/h/ln** for all free-flow speeds.
* **For $v_p \le 1,400 \text{ pc/h/ln}$**:
  $$S = \text{FFS}$$
* **For $1,400 < v_p \le \text{Capacity}$**:
  $$S = \text{FFS} - \frac{(\text{FFS} - 45)(v_p - 1,400)^{1.31}}{(\text{Capacity} - 1,400)^{1.31}}$$

The capacity of a multilane highway depends on its FFS:

| Free-Flow Speed (FFS) | Capacity ($pc/h/ln$) |
| --- | --- |
| $60 \text{ mph}$ | $2,200$ |
| $55 \text{ mph}$ | $2,100$ |
| $50 \text{ mph}$ | $2,000$ |
| $45 \text{ mph}$ | $1,900$ |

### Density ($D$)
Calculate density using the fundamental relationship:
$$D = \frac{v_p}{S}$$

---

## Step 4: Determine Level of Service (LOS)

LOS for multilane highways is determined by density ($D$, in $pc/mi/ln$):

| Level of Service (LOS) | Density Range ($pc/mi/ln$) |
| --- | --- |
| **A** | $\le 11.0$ |
| **B** | $> 11.0$ to $\le 16.0$ |
| **C** | $> 16.0$ to $\le 26.0$ |
| **D** | $> 26.0$ to $\le 35.0$ |
| **E** | $> 35.0$ to $\le 45.0$ |
| **F** | $> 45.0$ OR if $v_p > \text{Capacity}$ ($v/c > 1.0$) |

---

## Critical Pitfalls and Exam Traps

1. **Incorrect Median Clearance on Undivided Highways**:
   On undivided highways, the left clearance ($L_L$) is not a physical shoulder. By definition, undivided highways are treated as having $L_L \ge 6.0 \text{ ft}$ (so there is no FFS reduction for left clearance, $f_{LC}$ is looked up based on $TLC = L_R + 6.0$). Do not add $0.0$ for the left side or assume undivided means $L_L = 0$. However, you must apply the $1.6 \text{ mph}$ reduction for median type ($f_M = 1.6$) because the highway is undivided.

2. **Access Point Count Location**:
   Access points are only counted on the right side of the road in the direction of analysis. Do not include driveways or intersections on the left side of the road (across the median).

3. **Confusing Multilane Highway and Freeway Breakpoints**:
   Freeway breakpoints vary from $1,000$ to $1,800 \text{ pc/h/ln}$ depending on FFS. For multilane highways, the breakpoint is always $1,400 \text{ pc/h/ln}$.

---

## Worked Example

A 4-lane multilane highway (2 lanes in each direction, $N=2$) in rolling terrain has the following characteristics:
* Posted speed limit: $50 \text{ mph}$ (estimated BFFS = speed limit + $5 \text{ mph} = 55 \text{ mph}$)
* Median type: Undivided
* Lane width: $11 \text{ ft}$
* Right-shoulder lateral clearance: $3 \text{ ft}$
* Access-point density: $16 \text{ access points/mi}$ on the right side
* Directional hourly demand volume: $1,400 \text{ veh/h}$
* Peak Hour Factor (PHF): $0.85$
* Traffic composition: $10\%$ trucks, $0\%$ RVs
* Driver population: Familiar commuters ($f_p = 1.00$)

**Determine the density and Level of Service (LOS).**

### Solution:

#### Step 1: Calculate Free-Flow Speed (FFS)
$$\text{FFS} = \text{BFFS} - f_{LW} - f_{LC} - f_{M} - f_{A}$$

1. **Base Free-Flow Speed**:
   $$\text{BFFS} = 55 \text{ mph}$$
2. **Lane Width Adjustment**:
   For $11 \text{ ft}$ lanes, $f_{LW} = 1.9 \text{ mph}$.
3. **Total Lateral Clearance Adjustment**:
   * Right clearance $L_R = 3 \text{ ft}$.
   * Left (median) clearance $L_L = 6 \text{ ft}$ (default for undivided highways).
   * $\text{TLC} = L_R + L_L = 3 + 6 = 9 \text{ ft}$.
   * Interpolate $f_{LC}$ for a 4-lane highway between $\text{TLC} = 8 \text{ ft}$ ($f_{LC} = 0.9$) and $\text{TLC} = 10 \text{ ft}$ ($f_{LC} = 0.4$):
     $$f_{LC} = 0.9 - \frac{9 - 8}{10 - 8} \times (0.9 - 0.4) = 0.65 \text{ mph}$$
4. **Median Type Adjustment**:
   For an undivided highway, $f_{M} = 1.6 \text{ mph}$.
5. **Access-Point Density Adjustment**:
   $$f_{A} = 0.25 \times 16 = 4.0 \text{ mph}$$
6. **Calculate FFS**:
   $$\text{FFS} = 55 - 1.9 - 0.65 - 1.6 - 4.0 = 46.85 \text{ mph}$$

#### Step 2: Calculate Heavy Vehicle Adjustment Factor ($f_{HV}$)
* Rolling terrain: $E_T = 2.5$.
* Proportion of trucks: $P_T = 0.10$.
  $$f_{HV} = \frac{1}{1 + P_T(E_T - 1)} = \frac{1}{1 + 0.10(2.5 - 1)} = \frac{1}{1.15} = 0.870$$

#### Step 3: Calculate Equivalent Flow Rate ($v_p$)
$$v_p = \frac{V}{\text{PHF} \times N \times f_{HV} \times f_p} = \frac{1,400}{0.85 \times 2 \times 0.870 \times 1.00} = \frac{1,400}{1.479} = 946.6 \text{ pc/h/ln}$$

#### Step 4: Determine Average Speed ($S$)
* Compare $v_p$ to the breakpoint:
  $$v_p = 946.6 \text{ pc/h/ln} \le 1,400 \text{ pc/h/ln}$$
* Since the flow rate is below the breakpoint, the average speed equals FFS:
  $$S = \text{FFS} = 46.85 \text{ mph}$$

#### Step 5: Calculate Density ($D$) and Determine LOS
$$D = \frac{v_p}{S} = \frac{946.6 \text{ pc/h/ln}}{46.85 \text{ mph}} = 20.21 \text{ pc/mi/ln}$$

* Look up $D = 20.21 \text{ pc/mi/ln}$ in the LOS criteria table:
  * $16.0 < D \le 26.0 \rightarrow$ **LOS C**

**Conclusion:** The multilane highway segment operates at **LOS C**.

---

## References and Standards
* *NCEES PE Civil Reference Handbook*, Section 6.2 (Traffic Operations).
* *Highway Capacity Manual (HCM) 6th Edition*, Chapter 12 (Basic Freeway and Multilane Highway Segments).
