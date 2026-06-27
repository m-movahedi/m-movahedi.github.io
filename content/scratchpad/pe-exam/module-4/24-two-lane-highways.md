# Two-Lane Highways

A two-lane highway is a undivided roadway with one lane of traffic in each direction. On these facilities, passing maneuvers must take place in the lane of opposing traffic when gaps permit. Consequently, operations are highly sensitive to opposing traffic volume and the availability of passing zones. 

The NCEES PE Civil Transportation exam frequently tests two-lane highway operations. The methodology is governed by Chapter 15 of the Highway Capacity Manual (HCM 6th Edition).

---

## Classification of Two-Lane Highways

The HCM classifies two-lane highways into three types, each with its own service measures for determining Level of Service (LOS):

### Class I Highways
Primary arterials, daily commuter routes, and major intercity links where motorists expect to travel at relatively high speeds.
* **Service Measures**: Average Travel Speed ($\text{ATS}$) **and** Percent Time-Spent-Following ($\text{PTSF}$).
* Both thresholds must be met; the worse of the two determines the overall LOS.

### Class II Highways
Scenic, recreational, or local routes where motorists do not expect to travel at high speeds due to topography or land use.
* **Service Measure**: Percent Time-Spent-Following ($\text{PTSF}$) only.

### Class III Highways
Two-lane highways passing through moderately developed areas where local traffic mixes with through traffic. Speed limits are typically $30$ to $45 \text{ mph}$.
* **Service Measure**: Percent of Free-Flow Speed ($\text{PFFS}$) only, where $\text{PFFS} = (\text{ATS} / \text{FFS}) \times 100$.

---

## Free-Flow Speed (FFS) Estimation

If FFS is not measured in the field, estimate it using:

$$\text{FFS} = \text{BFFS} - f_{LS} - f_{A}$$

Where:
* $\text{FFS}$ = estimated free-flow speed ($mph$)
* $\text{BFFS}$ = base free-flow speed ($mph$), typically assumed to be $60 \text{ mph}$ if not specified.
* $f_{LS}$ = adjustment for lane width and shoulder width ($mph$)
* $f_{A}$ = adjustment for access-point density ($mph$)

### 1. Lane and Shoulder Width Adjustment ($f_{LS}$)
Narrow lanes or narrow shoulders restrict lateral movement and reduce FFS:

| Lane Width (ft) | Shoulder Width $\ge 6 \text{ ft}$ | Shoulder Width $4 \text{ to } 6 \text{ ft}$ | Shoulder Width $2 \text{ to } 4 \text{ ft}$ | Shoulder Width $0 \text{ to } 2 \text{ ft}$ |
| --- | --- | --- | --- | --- |
| $\ge 12$ | 0.0 | 1.2 | 3.0 | 4.8 |
| $11$ | 0.8 | 2.0 | 3.8 | 5.6 |
| $10$ | 3.0 | 4.2 | 6.0 | 7.8 |
| $9$ | 4.7 | 5.9 | 7.7 | 9.5 |

### 2. Access-Point Density Adjustment ($f_{A}$)
Access points per mile (APD) are counted on both sides of the roadway. The speed reduction is:
$$f_{A} = 0.25 \times \text{APD}$$

---

## Flow Rate Adjustment for Directional Analysis

To analyze a specific direction of travel on a two-lane highway, the directional volume ($V_d$) and opposing volume ($V_o$) are adjusted to equivalent passenger-car flow rates ($v_d$ and $v_o$):

$$v_d = \frac{V_d}{\text{PHF} \times f_g \times f_{HV}}$$
$$v_o = \frac{V_o}{\text{PHF} \times f_g \times f_{HV}}$$

Where:
* $v_d$ = adjusted directional flow rate ($pc/h$)
* $v_o$ = adjusted opposing flow rate ($pc/h$)
* $V_d$ = hourly demand volume in the direction of analysis ($veh/h$)
* $V_o$ = hourly demand volume in the opposing direction ($veh/h$)
* $\text{PHF}$ = Peak Hour Factor
* $f_g$ = grade adjustment factor (ranges from $0.60$ to $1.00$; corrects for the impact of grade on speed/PTSF).
* $f_{HV}$ = heavy vehicle adjustment factor:
  $$f_{HV} = \frac{1}{1 + P_T(E_T - 1) + P_R(E_R - 1)}$$

*Note: For two-lane highways, $E_T$ (truck equivalents) and $E_R$ (RV equivalents) are looked up using tables that vary by flow rate ($v_d$), grade percentage, and terrain type.*

---

## Performance Measures Calculation

### 1. Average Travel Speed ($\text{ATS}$)
The average travel speed in the direction of analysis ($\text{ATS}_d$) is calculated as:

$$\text{ATS}_d = \text{FFS}_d - 0.00776(v_d + v_o) - f_{np, \text{ATS}}$$

Where:
* $\text{ATS}_d$ = average travel speed in the analysis direction ($mph$)
* $\text{FFS}_d$ = estimated free-flow speed in the analysis direction ($mph$)
* $v_d, v_o$ = adjusted directional and opposing flow rates ($pc/h$)
* $f_{np, \text{ATS}}$ = adjustment for percentage of no-passing zones in the analysis direction ($mph$). This is looked up from HCM tables based on the opposing flow rate ($v_o$) and percentage of no-passing zones.

### 2. Percent Time-Spent-Following ($\text{PTSF}$)
The percent time-spent-following in the direction of analysis ($\text{PTSF}_d$) represents the average percentage of time travelers are stuck in platoons behind slow vehicles:

$$\text{PTSF}_d = \text{BPTSF}_d + f_{np, \text{PTSF}}$$

Where:
* $\text{PTSF}_d$ = percent time-spent-following in the analysis direction ($\%$)
* $\text{BPTSF}_d$ = base percent time-spent-following:
  $$\text{BPTSF}_d = 100 \left(1 - e^{a \cdot v_d^b}\right)$$
  *(where $a$ and $b$ are coefficients determined from HCM tables based on the opposing flow rate $v_o$).*
* $f_{np, \text{PTSF}}$ = adjustment for no-passing zones in the analysis direction ($\%$) based on opposing flow rate and passing zone availability.

---

## Level of Service (LOS) Criteria

### Class I Highways
Must satisfy BOTH conditions (worse determines LOS):

| LOS | PTSF ($PTSF_d$, %) | ATS ($\text{ATS}_d$, mph) |
| --- | --- | --- |
| **A** | $\le 35$ | $> 55$ |
| **B** | $> 35$ to $50$ | $> 50$ to $55$ |
| **C** | $> 50$ to $65$ | $> 45$ to $50$ |
| **D** | $> 65$ to $80$ | $> 40$ to $45$ |
| **E** | $> 80$ | $\le 40$ |

### Class II Highways
Determined by PTSF only:

| LOS | PTSF ($PTSF_d$, %) |
| --- | --- |
| **A** | $\le 45$ |
| **B** | $> 45$ to $60$ |
| **C** | $> 60$ to $75$ |
| **D** | $> 75$ to $90$ |
| **E** | $> 90$ |

### Class III Highways
Determined by Percent of Free-Flow Speed only:

| LOS | Percent of Free-Flow Speed, PFFS (%) |
| --- | --- |
| **A** | $> 91.7$ |
| **B** | $> 83.3$ to $91.7$ |
| **C** | $> 75.0$ to $83.3$ |
| **D** | $> 66.7$ to $75.0$ |
| **E** | $\le 66.7$ |

*Note: For all classes, if the directional flow rate exceeds capacity ($1,700 \text{ pc/h}$ directional, or $3,200 \text{ pc/h}$ two-way), the segment operates at **LOS F**.*

---

## Critical Pitfalls and Exam Traps

1. **Incorrect Highway Classification**:
   Read the problem statement carefully to identify the highway Class (I, II, or III). Evaluating a Class II highway (scenic/recreational) using ATS speed criteria is a common mistake.

2. **Access Points Counted on Both Sides**:
   Unlike multilane highways where you only count access points on the right side in the direction of analysis, for two-lane highways, you must count access points on **both** sides of the road to determine access-point density ($APD$).

3. **Mixing Up Directional and Opposing Flow Rates**:
   In the ATS formula:
   $$\text{ATS}_d = \text{FFS}_d - 0.00776(v_d + v_o) - f_{np, \text{ATS}}$$
   The term $(v_d + v_o)$ represents the sum of the directional and opposing flow rates. Be careful not to use only the directional flow rate here. However, the no-passing zone adjustments ($f_{np, \text{ATS}}$ and $f_{np, \text{PTSF}}$) are looked up based on the *opposing* flow rate ($v_o$) only.

---

## Worked Example

A Class I two-lane highway operates under the following conditions:
* Directional hourly demand volume: $V_d = 450 \text{ veh/h}$
* Opposing hourly demand volume: $V_o = 300 \text{ veh/h}$
* Peak Hour Factor (PHF): $0.90$
* Base Free-Flow Speed (BFFS): $60 \text{ mph}$
* Lane width: $11 \text{ ft}$
* Shoulder width: $4 \text{ ft}$
* Access-point density: $12 \text{ access points/mi}$
* Grade adjustment factor ($f_g$): $0.95$ for ATS, $0.92$ for PTSF
* Heavy vehicle factor ($f_{HV}$): $0.88$ for ATS, $0.85$ for PTSF
* No-passing zone adjustment ($f_{np, \text{ATS}}$): $1.8 \text{ mph}$
* Base percent time-spent-following ($BPTSF_d$): $55\%$
* No-passing zone PTSF adjustment ($f_{np, \text{PTSF}}$): $12\%$

**Determine the Level of Service (LOS) of the highway segment in the analysis direction.**

### Solution:

#### Step 1: Calculate Free-Flow Speed (FFS)
$$\text{FFS} = \text{BFFS} - f_{LS} - f_{A}$$

1. **BFFS**: $60 \text{ mph}$
2. **Lane and Shoulder Width Adjustment ($f_{LS}$)**:
   From the width adjustment table, for $11 \text{ ft}$ lanes and $4 \text{ ft}$ shoulders:
   $$f_{LS} = 2.0 \text{ mph}$$
3. **Access-Point Density Adjustment ($f_{A}$)**:
   $$f_{A} = 0.25 \times 12 = 3.0 \text{ mph}$$
4. **Calculate FFS**:
   $$\text{FFS} = 60.0 - 2.0 - 3.0 = 55.0 \text{ mph}$$

#### Step 2: Calculate Equivalent Flow Rates for Speed ($v_{d, \text{ATS}}$ and $v_{o, \text{ATS}}$)
$$v_{d, \text{ATS}} = \frac{V_d}{\text{PHF} \times f_g \times f_{HV}} = \frac{450}{0.90 \times 0.95 \times 0.88} = \frac{450}{0.7524} = 598.1 \text{ pc/h}$$
$$v_{o, \text{ATS}} = \frac{V_o}{\text{PHF} \times f_g \times f_{HV}} = \frac{300}{0.90 \times 0.95 \times 0.88} = \frac{300}{0.7524} = 398.7 \text{ pc/h}$$

#### Step 3: Calculate Average Travel Speed ($\text{ATS}_d$)
$$\text{ATS}_d = \text{FFS} - 0.00776(v_{d, \text{ATS}} + v_{o, \text{ATS}}) - f_{np, \text{ATS}}$$
$$\text{ATS}_d = 55.0 - 0.00776(598.1 + 398.7) - 1.8$$
$$\text{ATS}_d = 55.0 - 0.00776(996.8) - 1.8 = 55.0 - 7.74 - 1.8 = 45.46 \text{ mph}$$

#### Step 4: Calculate Equivalent Flow Rates for PTSF ($v_{d, \text{PTSF}}$ and $v_{o, \text{PTSF}}$)
$$v_{d, \text{PTSF}} = \frac{V_d}{\text{PHF} \times f_g \times f_{HV}} = \frac{450}{0.90 \times 0.92 \times 0.85} = \frac{450}{0.7038} = 639.4 \text{ pc/h}$$

#### Step 5: Calculate Percent Time-Spent-Following ($\text{PTSF}_d$)
$$\text{PTSF}_d = \text{BPTSF}_d + f_{np, \text{PTSF}}$$
$$\text{PTSF}_d = 55\% + 12\% = 67.0\%$$

#### Step 6: Determine Level of Service (LOS)
Since this is a **Class I** highway, we compare both $\text{ATS}_d$ and $\text{PTSF}_d$ to the Class I thresholds:

1. **Based on Speed ($\text{ATS}_d = 45.46 \text{ mph}$)**:
   * $45.0 < \text{ATS}_d \le 50.0 \rightarrow$ **LOS C**
2. **Based on PTSF ($\text{PTSF}_d = 67.0\%$)**:
   * $65.0 < \text{PTSF}_d \le 80.0 \rightarrow$ **LOS D**

Taking the worse of the two conditions:
$$\text{LOS} = \max(\text{LOS C}, \text{LOS D}) = \text{LOS D}$$

**Conclusion:** The two-lane highway operates at **LOS D** in the analysis direction.

---

## References and Standards
* *NCEES PE Civil Reference Handbook*, Section 6.2 (Traffic Operations).
* *Highway Capacity Manual (HCM) 6th Edition*, Chapter 15 (Two-Lane Highways).
