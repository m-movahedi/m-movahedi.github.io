# Unsignalized Intersection Operations

Unsignalized intersections are governed by priority rules rather than traffic signals. The two most common types are Two-Way Stop-Controlled (TWSC) intersections and All-Way Stop-Controlled (AWSC) intersections. Their operational analysis is a key topic on the NCEES PE Civil Transportation exam, focusing on critical headway, potential capacity, movement capacity, control delay, and Level of Service (LOS).

The methodology is governed by Chapters 20 and 21 of the Highway Capacity Manual (HCM 6th Edition).

---

## Two-Way Stop-Controlled (TWSC) Intersections

In a TWSC intersection, the major street has absolute right-of-way. Vehicles on the minor street approaches must stop and yield to major street traffic. In addition, left-turning vehicles from the major street must yield to opposing major street through and right-turn traffic.

### Movement Hierarchy (Ranks)
Operations are analyzed based on a hierarchy of movements. Higher-ranked movements impede lower-ranked movements:

```
Rank 1 (No Impedance): 
  - Major street through movements
  - Major street right turns
Rank 2: 
  - Major street left turns
  - Minor street right turns
Rank 3: 
  - Minor street through movements (crossing)
Rank 4 (Most Impeded): 
  - Minor street left turns (crossing & turning)
```

---

## TWSC Capacity Analysis Methodology

To calculate the capacity of a minor street or major street left-turning movement, we use the conflicting flow rate, critical headway, and follow-up time.

### 1. Conflicting Flow Rate ($V_c$)
The sum of all traffic streams that have priority over the movement being analyzed. For example, a minor-street left turn must conflict with:
* Major-street through traffic in both directions.
* Major-street left-turn traffic from the opposite approach.
* Major-street right-turn traffic (in some cases).
* Minor-street through and right-turn traffic from the opposing approach.

### 2. Critical Headway ($t_c$) and Follow-Up Time ($t_f$)
* **Critical Headway ($t_c$)**: The minimum time interval in the major-street traffic stream (seconds) that a minor-street driver requires to enter the intersection. If a gap is shorter than $t_c$, the driver will wait.
* **Follow-Up Time ($t_f$)**: The time between the departure of one minor-street vehicle and the departure of the next vehicle using the same major-street gap (seconds).

### 3. Potential Capacity ($c_p$)
The potential capacity ($c_p$) of a minor-street movement represents the maximum flow rate it can achieve, assuming it is the only minor-street movement operating and has no impedance from other minor movements:

$$c_p = V_c \times \frac{e^{-V_c \cdot t_c / 3,600}}{1 - e^{-V_c \cdot t_f / 3,600}}$$

Where:
* $c_p$ = potential capacity of the movement ($veh/h$)
* $V_c$ = conflicting flow rate ($veh/h$)
* $t_c$ = critical headway ($sec$)
* $t_f$ = follow-up time ($sec$)

### 4. Movement Capacity ($c_m$)
The potential capacity is adjusted to account for impedance from higher-ranked movements. For example, if Rank 2 vehicles are queued and waiting, Rank 3 vehicles cannot utilize the gaps. The movement capacity is:
$$c_m = c_p \times \prod \text{Impedance Factors}$$

---

## All-Way Stop-Controlled (AWSC) Intersections

In an AWSC intersection, all approaches are controlled by stop signs. Right-of-way is governed by a first-come, first-served rule, with drivers cooperating to discharge in turns.
* **Capacity**: Determined by the saturation headway, which depends on the degree of conflict between approaches. The saturation headway increases (and capacity decreases) as the volume on opposing and conflicting approaches increases.
* **Service Time**: The average time a vehicle spends at the stop line waiting to depart after the previous vehicle has gone.

---

## Control Delay ($d$)

The average control delay per vehicle ($sec/veh$) for any movement at an unsignalized intersection is calculated as:

$$d = \frac{3,600}{c_m} + 900 \times T \left[ (X - 1) + \sqrt{(X - 1)^2 + \frac{360 \times X}{c_m \times T}} \right] + 5$$

Where:
* $c_m$ = movement capacity ($veh/h$)
* $T$ = analysis period (hours); typically $0.25 \text{ h}$ (15 minutes).
* $X$ = volume-to-capacity ratio for the movement ($v/c_m$).
* The constant $+5 \text{ seconds}$ accounts for deceleration and acceleration delay.

---

## Level of Service (LOS) Criteria

For unsignalized intersections (both TWSC and AWSC), LOS is determined using the average control delay ($d$) of each individual movement (or approach):

| Level of Service (LOS) | Control Delay per Vehicle ($sec/veh$) |
| --- | --- |
| **A** | $\le 10.0$ |
| **B** | $> 10.0$ to $\le 15.0$ |
| **C** | $> 15.0$ to $\le 25.0$ |
| **D** | $> 25.0$ to $\le 35.0$ |
| **E** | $> 35.0$ to $\le 50.0$ |
| **F** | $> 50.0$ OR if $X > 1.0$ |

### Key Exam Tip: Threshold Comparison
Notice that the delay thresholds for unsignalized intersections are **lower** than those for signalized intersections. For example, a delay of $60 \text{ sec/veh}$ is **LOS E** at a traffic signal, but it is **LOS F** at a stop sign. Motorists are less tolerant of delays when they must actively look for gaps than when they are waiting for a green light.

---

## Critical Pitfalls and Exam Traps

1. **Confusing Unsignalized and Signalized Delay Thresholds**:
   Do not use the signalized intersection delay table for unsignalized intersections. Memorize or look up the correct table (where LOS F starts at $50 \text{ s}$ instead of $80 \text{ s}$).

2. **Failing to Identify the Correct Conflicting Flow ($V_c$)**:
   Read the collision or intersection diagram carefully. A minor-street right-turn movement only conflicts with the major-street through traffic coming from its left. A minor-street left-turn movement conflicts with almost all major-street movements.

3. **Units and Equations for Delay**:
   In the delay equation, ensure that $c_m$ is in vehicles per hour, $T$ is in hours (typically $0.25$), and the $+5$ is added at the very end.

---

## Worked Example

A minor street right-turn movement at a TWSC intersection has the following characteristics:
* Conflicting flow rate ($V_c$): $800 \text{ veh/h}$
* Critical headway ($t_c$): $4.1 \text{ seconds}$
* Follow-up time ($t_f$): $2.2 \text{ seconds}$
* Directional hourly demand volume ($V$): $180 \text{ veh/h}$
* Peak Hour Factor (PHF): $0.90$
* Analysis period ($T$): $0.25 \text{ hours}$
* Impedance factors: None (assume movement capacity $c_m$ equals potential capacity $c_p$).

**Determine the potential capacity, volume-to-capacity ratio, control delay, and Level of Service (LOS) for this right-turn movement.**

### Solution:

#### Step 1: Calculate Potential Capacity ($c_p$)
$$c_p = V_c \times \frac{e^{-V_c \cdot t_c / 3,600}}{1 - e^{-V_c \cdot t_f / 3,600}}$$

Calculate exponents:
* $\frac{V_c \cdot t_c}{3,600} = \frac{800 \times 4.1}{3,600} = 0.9111 \rightarrow e^{-0.9111} = 0.4021$
* $\frac{V_c \cdot t_f}{3,600} = \frac{800 \times 2.2}{3,600} = 0.4889 \rightarrow e^{-0.4889} = 0.6133$

Calculate capacity:
$$c_p = 800 \times \frac{0.4021}{1 - 0.6133} = 800 \times \frac{0.4021}{0.3867} = 800 \times 1.0398 = 831.8 \text{ veh/h}$$
Since impedance is neglected, $c_m = c_p = 831.8 \text{ veh/h}$.

#### Step 2: Calculate Adjusted Demand Flow Rate ($v$) and $v/c$ Ratio ($X$)
$$v = \frac{V}{\text{PHF}} = \frac{180}{0.90} = 200 \text{ veh/h}$$
$$X = \frac{v}{c_m} = \frac{200}{831.8} = 0.240$$

#### Step 3: Calculate Control Delay ($d$)
$$d = \frac{3,600}{c_m} + 900 \times T \left[ (X - 1) + \sqrt{(X - 1)^2 + \frac{360 \times X}{c_m \times T}} \right] + 5$$
* $\frac{3,600}{c_m} = \frac{3,600}{831.8} = 4.33 \text{ s}$
* $X - 1 = 0.240 - 1 = -0.760$
* $c_m \times T = 831.8 \times 0.25 = 207.95$
* $\frac{360 \times X}{c_m \times T} = \frac{360 \times 0.240}{207.95} = 0.4155$
* $\sqrt{(X - 1)^2 + \frac{360 \times X}{c_m \times T}} = \sqrt{(-0.760)^2 + 0.4155} = \sqrt{0.5776 + 0.4155} = \sqrt{0.9931} = 0.9965$

Now solve the delay terms:
$$d = 4.33 + 900 \times 0.25 \left[ -0.760 + 0.9965 \right] + 5$$
$$d = 4.33 + 225 \left[ 0.2365 \right] + 5$$
$$d = 4.33 + 53.21 + 5 = 62.54 \text{ sec/veh}$$

#### Step 4: Determine Level of Service (LOS)
Compare $d = 62.54 \text{ sec/veh}$ to the unsignalized intersection LOS criteria:
* $d > 50.0 \text{ sec/veh} \rightarrow$ **LOS F**

**Conclusion:** The minor street right-turn movement operates at **LOS F**.

---

## References and Standards
* *NCEES PE Civil Reference Handbook*, Section 6.2 (Traffic Operations).
* *Highway Capacity Manual (HCM) 6th Edition*, Chapter 20 (Two-Way Stop-Controlled Intersections) and Chapter 21 (All-Way Stop-Controlled Intersections).
