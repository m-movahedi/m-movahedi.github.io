# Roundabout Operations

Roundabouts are unsignalized intersections with a circular central island, where entering traffic yields to circulating traffic. Their analysis is performed on an entry-lane-by-entry-lane basis. The NCEES PE Civil Transportation exam frequently tests roundabout capacity, circulating flow calculation, control delay, and Level of Service (LOS).

The methodology is governed by Chapter 22 of the Highway Capacity Manual (HCM 6th Edition) and is outlined in the NCEES PE Civil Reference Handbook.

---

## Roundabout Geometry and Terms

* **Inscribed Circle Diameter**: The distance from the outer edge of the outer circulating lane to the outer edge of the opposite circulating lane.
* **Circulating Flow ($v_c$)**: The traffic volume moving along the circulating road immediately in front of the entry approach being analyzed ($veh/h$).
* **Entry Flow ($v_e$)**: The traffic volume attempting to enter the roundabout from a specific approach ($veh/h$).
* **Exiting Flow ($v_{ex}$)**: The traffic volume leaving the roundabout at a specific leg ($veh/h$).
* **Bypass Lane**: A dedicated lane that allows right-turning traffic to bypass the roundabout entirely.

---

## Roundabout Capacity Methodology

Roundabout capacity is determined by the entry capacity ($c_e$), which decreases exponentially as the circulating (conflicting) flow rate ($v_c$) increases. 

### 1. Single-Lane Roundabout Entry Capacity
For a single-lane entry conflicting with a single circulating lane, the capacity is:

$$c_e = 1,420 \times e^{-0.00091 \times v_c}$$

Where:
* $c_e$ = entry capacity ($pc/h$)
* $v_c$ = conflicting circulating flow rate ($pc/h$)

This formula is derived from a critical headway ($t_c$) of $4.11 \text{ seconds}$ and a follow-up headway ($t_f$) of $2.91 \text{ seconds}$.

### 2. Multi-Lane Roundabout Entry Capacity
For multi-lane roundabouts, capacity is calculated separately for the left entry lane ($c_{e,L}$) and right entry lane ($c_{e,R}$):

$$\text{Left Lane Entry Capacity: } c_{e,L} = 1,420 \times e^{-0.00085 \times v_c}$$
$$\text{Right Lane Entry Capacity: } c_{e,R} = 1,420 \times e^{-0.00085 \times v_c}$$

*(Note: These capacities are looked up or calculated based on the circulating flow across all circulating lanes).*

---

## Identifying Conflicting (Circulating) Flow ($v_c$)

A common exam challenge is calculating the circulating flow ($v_c$) in front of a specific entry from an origin-destination (O-D) matrix or approach volume diagram.

```
       North
         |
  West --+-- East
         |
       South
```

To find the circulating flow in front of the **South Entry**:
* Identify all vehicle movements that circulate in front of the South approach. These are movements that originate from other approaches and must pass the South entry to reach their destination.
* Circulating movements in front of South include:
  * East to West (through movement)
  * East to South (left turn)
  * North to South (through movement)
  * North to East (left turn)
  * West to East (u-turn)
* Be careful: movements exiting at the South leg (e.g., East to South right turn, or North to South through) do *not* circulate in front of the South entry if they exit before reaching the entry point.

---

## Control Delay ($d$) and Level of Service (LOS)

### Control Delay ($d$)
The average control delay per vehicle ($sec/veh$) for a roundabout entry lane is calculated using the standard unsignalized intersection delay formula:

$$d = \frac{3,600}{c_e} + 900 \times T \left[ (X - 1) + \sqrt{(X - 1)^2 + \frac{360 \times X}{c_e \times T}} \right] + 5$$

Where:
* $c_e$ = entry capacity ($pc/h$)
* $T$ = analysis period (hours); typically $0.25 \text{ h}$ (15 minutes).
* $X$ = volume-to-capacity ratio ($v_e / c_e$).
* The constant $+5 \text{ seconds}$ accounts for deceleration and acceleration.

### Level of Service (LOS)
Since roundabouts are unsignalized, they share the TWSC/AWSC delay thresholds:

| Level of Service (LOS) | Control Delay per Vehicle ($sec/veh$) |
| --- | --- |
| **A** | $\le 10.0$ |
| **B** | $> 10.0$ to $\le 15.0$ |
| **C** | $> 15.0$ to $\le 25.0$ |
| **D** | $> 25.0$ to $\le 35.0$ |
| **E** | $> 35.0$ to $\le 50.0$ |
| **F** | $> 50.0$ OR if $X > 1.0$ |

---

## Critical Pitfalls and Exam Traps

1. **Incorrectly Counting Right-Turning Vehicles in Circulating Flow**:
   Vehicles making a right turn at the immediate next exit do not enter the circulating road in front of the opposing approach. For example, East-to-North right turns do not circulate in front of the West entry.

2. **Exponent Math Errors**:
   In the capacity equation $c_e = 1,420 \times e^{-0.00091 \times v_c}$, ensure you apply the negative sign in the exponent. Since $e^{-x} = 1 / e^x$, capacity must always be less than $1,420$. If your calculated capacity is larger than $1,420$, you forgot the negative sign.

3. **Using the Wrong $T$ Value**:
   In the delay equation, the analysis period $T$ is in **hours**. For a standard 15-minute analysis, use $T = 0.25 \text{ hours}$.

---

## Worked Example

A single-lane roundabout entry has a circulating flow ($v_c$) of $600 \text{ veh/h}$ in front of it during the peak hour. The entry approach has an hourly demand volume of $450 \text{ veh/h}$ and a Peak Hour Factor (PHF) of $0.90$.

**Determine the entry capacity, $v/c$ ratio, average control delay, and Level of Service (LOS) for the entry.**

### Solution:

#### Step 1: Calculate Entry Capacity ($c_e$)
$$c_e = 1,420 \times e^{-0.00091 \times v_c}$$
$$c_e = 1,420 \times e^{-0.00091 \times 600} = 1,420 \times e^{-0.546}$$
$$c_e = 1,420 \times 0.5793 = 822.6 \text{ veh/h}$$

#### Step 2: Calculate Demand Flow Rate ($v_e$) and $v/c$ Ratio ($X$)
$$v_e = \frac{V}{\text{PHF}} = \frac{450}{0.90} = 500 \text{ veh/h}$$
$$X = \frac{v_e}{c_e} = \frac{500}{822.6} = 0.608$$

#### Step 3: Calculate Control Delay ($d$)
Using $T = 0.25 \text{ hours}$ (15-minute peak):
$$d = \frac{3,600}{c_e} + 900 \times T \left[ (X - 1) + \sqrt{(X - 1)^2 + \frac{360 \times X}{c_e \times T}} \right] + 5$$

1. **Calculate individual terms**:
   * $\frac{3,600}{c_e} = \frac{3,600}{822.6} = 4.38 \text{ s}$
   * $X - 1 = 0.608 - 1 = -0.392$
   * $c_e \times T = 822.6 \times 0.25 = 205.65$
   * $\frac{360 \times X}{c_e \times T} = \frac{360 \times 0.608}{205.65} = 1.0643$
   * $\sqrt{(X - 1)^2 + \frac{360 \times X}{c_e \times T}} = \sqrt{(-0.392)^2 + 1.0643} = \sqrt{0.1537 + 1.0643} = \sqrt{1.218} = 1.1036$

2. **Solve for delay**:
   $$d = 4.38 + 900 \times 0.25 \left[ -0.392 + 1.1036 \right] + 5$$
   $$d = 4.38 + 225 \left[ 0.7116 \right] + 5$$
   $$d = 4.38 + 160.11 + 5 = 169.49 \text{ sec/veh}$$

#### Step 4: Determine Level of Service (LOS)
Compare $d = 169.49 \text{ sec/veh}$ to the roundabout/unsignalized LOS criteria:
* $d > 50.0 \text{ sec/veh} \rightarrow$ **LOS F**

**Conclusion:** The roundabout entry operates at **LOS F**.

---

## References and Standards
* *NCEES PE Civil Reference Handbook*, Section 6.2 (Traffic Operations).
* *Highway Capacity Manual (HCM) 6th Edition*, Chapter 22 (Roundabouts).
