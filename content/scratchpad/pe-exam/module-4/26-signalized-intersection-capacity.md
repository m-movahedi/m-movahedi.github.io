---
title: "Signalized Intersection Capacity"
weight: 26
---
# Signalized Intersection Capacity

Signalized intersections are critical nodes in urban street networks. Their capacity analysis is a major component of the NCEES PE Civil Transportation exam. The analysis determines the capacity of individual lane groups, their volume-to-capacity ($v/c$) ratios, and the average control delay per vehicle, which defines the Level of Service (LOS).

The methodology is governed by Chapter 19 of the Highway Capacity Manual (HCM 6th Edition) and is detailed in the NCEES PE Civil Reference Handbook.

---

## Key Definitions and Variables

* **Cycle Length ($C$)**: The time required for a complete sequence of signal phases (seconds).
* **Displayed Green ($G$)**: The actual duration of the green indication for a phase (seconds).
* **Yellow Clearance ($Y$)**: The yellow warning indication interval (seconds).
* **All-Red Clearance ($Rc$)**: The red clearance interval before opposing movements receive green (seconds).
* **Total Lost Time per Phase ($t_L$)**: The sum of start-up lost time ($l_1$, typically $2.0 \text{ s}$) and clearance lost time ($l_2$, typically $2.0 \text{ s}$). If not specified, total lost time is assumed to be $t_L = 4.0 \text{ seconds}$ per phase.
* **Effective Green ($g$)**: The actual usable green time allocated to a movement:
  $$g = G + Y + Rc - t_L$$
  *(If yellow and all-red clearance times are not specified, it is common to assume effective green equals displayed green: $g = G$).*
* **Green-to-Cycle Ratio ($g/C$)**: The proportion of the cycle length during which a lane group has the right-of-way.

---

## Saturation Flow Rate ($s$)

The saturation flow rate represents the maximum queue discharge rate that can be sustained by a lane group, assuming a continuous queue of vehicles and a constant green indication. It is calculated by adjusting a base saturation flow rate for prevailing physical and traffic conditions:

$$s = s_0 \times N \times f_w \times f_{HV} \times f_g \times f_p \times f_{bb} \times f_a \times f_{LU} \times f_{LT} \times f_{RT} \times f_{Lpb} \times f_{Rpb}$$

Where:
* $s_0$ = base saturation flow rate ($pc/h/ln$); typically assumed to be $1,900 \text{ pc/h/ln}$ if not specified.
* $N$ = number of lanes in the lane group.
* $f_w$ = lane width adjustment factor:
  $$f_w = 1 + \frac{W - 12}{30}$$
  *(where $W$ is the lane width in feet; standard is $12 \text{ ft}$).*
* $f_{HV}$ = heavy vehicle adjustment factor:
  $$f_{HV} = \frac{100}{100 + P_{HV}(E_{HV} - 1)} = \frac{1}{1 + P_{HV}(E_{HV} - 1)}$$
  *(where $P_{HV}$ is the proportion of heavy vehicles and $E_{HV} = 2.0$, simplifying to $f_{HV} = \frac{1}{1 + P_{HV}}$).*
* $f_g$ = approach grade adjustment factor:
  $$f_g = 1 - 0.005 \times \%G$$
  *(where $\%G$ is the grade percentage; positive for uphill, negative for downhill).*
* $f_p$ = parking adjustment factor (accounts for frictional loss from on-street parking maneuvers).
* $f_{bb}$ = bus blockage adjustment factor (accounts for local transit buses stopping within the intersection area).
* $f_a$ = area type adjustment factor ($0.90$ for Central Business Districts; $1.00$ for all other areas).
* $f_{LU}$ = lane utilization adjustment factor (accounts for unequal distribution of traffic across multiple lanes):
  * 1 lane: $f_{LU} = 1.00$
  * 2 lanes: $f_{LU} = 0.95$
  * 3 lanes: $f_{LU} = 0.91$
* $f_{LT}, f_{RT}$ = adjustments for left-turn and right-turn movements in the lane group.
* $f_{Lpb}, f_{Rpb}$ = adjustments for pedestrian and bicycle conflicts with turning vehicles.

---

## Lane Group Capacity ($c$) and $v/c$ Ratio ($X$)

### Capacity ($c$)
The capacity of a lane group is the product of its saturation flow rate and its green-to-cycle ratio:

$$c = s \times \frac{g}{C}$$

Where:
* $c$ = capacity of the lane group ($veh/h$)
* $s$ = saturation flow rate ($veh/h$)
* $g/C$ = effective green-to-cycle ratio

### Volume-to-Capacity Ratio ($X$)
The $v/c$ ratio (also called the degree of saturation, $X$) for a lane group is:

$$X = \frac{v}{c} = \frac{v}{s \times (g/C)}$$

Where:
* $v$ = adjusted peak 15-minute demand flow rate ($veh/h$), calculated as $V / \text{PHF}$.

---

## Control Delay ($d$)

The average control delay per vehicle for a lane group is calculated as the sum of three components:

$$d = d_1 \times \text{PF} + d_2 + d_3$$

### 1. Uniform Delay ($d_1$)
Assuming uniform vehicle arrivals throughout the cycle, uniform delay is calculated as:

$$d_1 = \frac{0.5 \times C \times \left(1 - g/C\right)^2}{1 - \left[\min(1, X) \times g/C\right]}$$

Where:
* $C$ = cycle length ($sec$)
* $g/C$ = green-to-cycle ratio
* $X$ = volume-to-capacity ratio

### 2. Progression Adjustment Factor ($\text{PF}$)
$\text{PF}$ adjusts the uniform delay to account for signal coordination:
* $\text{PF} < 1.0$ indicates good progression (vehicles arrive during the green phase, e.g., coordinated platoons).
* $\text{PF} = 1.0$ indicates isolated/uncoordinated signal operations (random arrivals).
* $\text{PF} > 1.0$ indicates poor progression (vehicles arrive during the red phase).

### 3. Incremental Delay ($d_2$)
Incremental delay accounts for random arrivals, cycle-to-cycle failures (where some vehicles must wait for more than one cycle), and oversaturation:

$$d_2 = 900 \times T \left[ (X - 1) + \sqrt{(X - 1)^2 + \frac{8 \times k \times I \times X}{c \times T}} \right]$$

Where:
* $T$ = duration of the analysis period (hours); typically $0.25 \text{ hours}$ (representing a 15-minute peak period).
* $k$ = incremental delay factor (depends on controller settings; $k = 0.50$ for pretimed signals).
* $I$ = upstream filtering adjustment factor (typically $1.0$ for isolated intersections).
* $c$ = capacity of the lane group ($veh/h$).

### 4. Initial Queue Delay ($d_3$)
$d_3$ accounts for delay caused by a pre-existing queue at the start of the analysis period. On the PE exam, this is typically assumed to be zero unless a pre-existing queue length is explicitly provided.

---

## Level of Service (LOS) Criteria

For signalized intersections, LOS is determined using the average control delay ($d$):

| Level of Service (LOS) | Control Delay per Vehicle ($sec/veh$) |
| --- | --- |
| **A** | $\le 10.0$ |
| **B** | $> 10.0$ to $\le 20.0$ |
| **C** | $> 20.0$ to $\le 35.0$ |
| **D** | $> 35.0$ to $\le 55.0$ |
| **E** | $> 55.0$ to $\le 80.0$ |
| **F** | $> 80.0$ OR if $X > 1.0$ |

---

## Critical Pitfalls and Exam Traps

1. **Forgetting to Adjust Saturation Flow for Area Type**:
   If the intersection is located in a downtown area or "Central Business District" (CBD), you must apply the area type factor $f_a = 0.90$. Forgetting this factor will result in an overestimated capacity.

2. **Using Displayed Green instead of Effective Green**:
   If the problem provides yellow and red clearance times along with lost time, you must calculate effective green: $g = G + Y + Rc - t_L$. Do not simply plug displayed green $G$ into the capacity formula unless no clearance/lost time data is provided.

3. **Using the Wrong Analysis Period ($T$) in $d_2$**:
   In the incremental delay ($d_2$) formula, $T$ is in **hours**. For a standard 15-minute analysis period, $T = 0.25 \text{ h}$. Plugging in $T = 15$ is a common units error.

---

## Worked Example

A lane group at a pretimed, isolated signalized intersection has the following properties:
* Number of lanes: 2 ($N = 2$)
* Base saturation flow rate ($s_0$): $1,900 \text{ pc/h/ln}$
* Lane width: $12 \text{ ft}$
* Grade: $2\%$ uphill ($\%G = +2$)
* Area type: Non-CBD ($f_a = 1.00$)
* Heavy vehicles: $4\%$ ($P_{HV} = 0.04$, $E_{HV} = 2.0$)
* Lane utilization factor ($f_{LU}$): $0.95$
* Cycle length ($C$): $90 \text{ seconds}$
* Effective green time ($g$): $45 \text{ seconds}$
* Hourly demand volume ($V$): $1,200 \text{ veh/h}$
* Peak Hour Factor (PHF): $0.90$
* Controller type: Pretimed ($k = 0.50$, $I = 1.00$, $PF = 1.00$, $d_3 = 0$)

**Determine the saturation flow rate ($s$), capacity ($c$), volume-to-capacity ratio ($X$), uniform delay ($d_1$), and the Level of Service (LOS).**

### Solution:

#### Step 1: Calculate Saturation Flow Rate ($s$)
First, determine the adjustment factors:
1. **Lane Width Adjustment**:
   $$f_w = 1.00 \text{ (since lane width is 12 ft)}$$
2. **Heavy Vehicle Adjustment**:
   $$f_{HV} = \frac{1}{1 + P_{HV}(E_{HV}-1)} = \frac{1}{1 + 0.04(2-1)} = \frac{1}{1.04} = 0.962$$
3. **Grade Adjustment**:
   $$f_g = 1 - 0.005(2) = 1 - 0.01 = 0.990$$
4. **Lane Utilization**:
   $$f_{LU} = 0.95$$

Calculate adjusted saturation flow rate:
$$s = s_0 \times N \times f_w \times f_{HV} \times f_g \times f_{LU}$$
$$s = 1,900 \times 2 \times 1.00 \times 0.962 \times 0.990 \times 0.95 = 3,437.3 \text{ veh/h}$$

#### Step 2: Calculate Capacity ($c$)
$$c = s \times \frac{g}{C} = 3,437.3 \times \frac{45}{90} = 1,718.7 \text{ veh/h}$$

#### Step 3: Calculate Demand Flow Rate ($v$) and $v/c$ Ratio ($X$)
$$v = \frac{V}{\text{PHF}} = \frac{1,200}{0.90} = 1,333.3 \text{ veh/h}$$
$$X = \frac{v}{c} = \frac{1,333.3}{1,718.7} = 0.776$$

#### Step 4: Calculate Uniform Delay ($d_1$)
$$d_1 = \frac{0.5 \times C \times (1 - g/C)^2}{1 - [\min(1, X) \times g/C]}$$
* $g/C = 45 / 90 = 0.50$
* $1 - g/C = 0.50$
* $\min(1, X) = 0.776$
$$d_1 = \frac{0.5 \times 90 \times (0.50)^2}{1 - [0.776 \times 0.50]} = \frac{45 \times 0.25}{1 - 0.388} = \frac{11.25}{0.612} = 18.38 \text{ sec/veh}$$

#### Step 5: Calculate Incremental Delay ($d_2$)
* $T = 0.25 \text{ hours}$
* $k = 0.50$
* $I = 1.00$
$$d_2 = 900 \times T \left[ (X - 1) + \sqrt{(X - 1)^2 + \frac{8 \times k \times I \times X}{c \times T}} \right]$$
$$d_2 = 900 \times 0.25 \left[ (0.776 - 1) + \sqrt{(0.776 - 1)^2 + \frac{8 \times 0.50 \times 1.00 \times 0.776}{1,718.7 \times 0.25}} \right]$$
$$d_2 = 225 \left[ -0.224 + \sqrt{(-0.224)^2 + \frac{3.104}{429.68}} \right]$$
$$d_2 = 225 \left[ -0.224 + \sqrt{0.0502 + 0.00722} \right]$$
$$d_2 = 225 \left[ -0.224 + \sqrt{0.05742} \right] = 225 \left[ -0.224 + 0.2396 \right] = 225 \times 0.0156 = 3.51 \text{ sec/veh}$$

#### Step 6: Calculate Total Delay ($d$) and Determine LOS
$$d = d_1 \times \text{PF} + d_2 = 18.38 \times 1.00 + 3.51 = 21.89 \text{ sec/veh}$$

* Look up $d = 21.89 \text{ sec/veh}$ in the signalized intersection LOS table:
  * $20.0 < d \le 35.0 \rightarrow$ **LOS C**

**Conclusion:** The lane group operates at **LOS C**.

---

## References and Standards
* *NCEES PE Civil Reference Handbook*, Section 6.2 (Traffic Operations).
* *Highway Capacity Manual (HCM) 6th Edition*, Chapter 19 (Signalized Intersections).
