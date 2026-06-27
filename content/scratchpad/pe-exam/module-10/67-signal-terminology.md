---
title: "Traffic Signal Terminology"
weight: 67
---
# Traffic Signal Terminology

Traffic signal timing and design questions on the PE Civil Transportation exam require a precise understanding of terminology. On the exam, confusing a "phase" with an "interval" or failing to distinguish between "displayed green" and "effective green" will lead to incorrect calculations. 

This lesson establishes the fundamental vocabulary, operational structures, and mathematical relationships used in traffic signal analysis, grounding these concepts in the *Highway Capacity Manual (HCM)* and the *Manual on Uniform Traffic Control Devices (MUTCD)*.

---

## Movements vs. Phases

A critical first step is distinguishing between what happens on the pavement (movements) and what happens in the controller cabinet (phases).

*   **Movement:** The physical path that a stream of vehicles or pedestrians takes through an intersection. A standard four-leg intersection has 12 vehicular movements (left, through, and right for each of the 4 approaches) and 4 pedestrian movements.
*   **Phase ($\phi$):** A controller timing unit that controls one or more movements. A phase receives the right-of-way, timings (green, yellow, all-red), and changes state independently of other phases. 

Multiple movements can be controlled by a single phase. For example, Eastbound Through and Eastbound Right-turn movements are commonly combined into Phase 2.

---

## The NEMA Dual-Ring Controller Structure

Modern traffic signal operations are defined by the National Electrical Manufacturers Association (NEMA) standard dual-ring controller. This structure ensures that conflicting movements cannot be shown green simultaneously while allowing non-conflicting movements to run in parallel.

### Key Components:
1.  **Ring:** A sequence of phases that run in a pre-determined order. In a dual-ring controller, there are two rings (Ring 1 and Ring 2) running concurrently.
2.  **Barrier:** A conceptual separator in the controller sequence. Both Ring 1 and Ring 2 must cross the barrier at the same time. The barrier separates major-street phases (typically phases 1 through 4) from minor-street phases (typically phases 5 through 8). Conflicting movements (e.g., East-West movements vs. North-South movements) are placed on opposite sides of the barrier to guarantee safety.

```mermaid
grid-layout
| Ring 1 | Phase 1 (OLT) | Phase 2 (ET)  | B | Phase 3 (SLT) | Phase 4 (NT)  |
| Ring 2 | Phase 5 (ELT) | Phase 6 (WT)  | R | Phase 7 (NLT) | Phase 8 (ST)  |
```
*Note: OLT = Opposing Left Turn, ET = Eastbound Through, etc.*

---

## Timing Parameters

A signal cycle is governed by specific timing allocations:

*   **Cycle Length ($C$):** The total time required to complete one full sequence of all phases (expressed in seconds).
*   **Interval:** A discrete portion of a phase during which all signal indications (colors) remain constant. For example, a single phase consists of a green interval, a yellow change interval, and an all-red clearance interval.
*   **Split:** The segment of the cycle length allocated to a particular phase. It represents the sum of the green, yellow, and all-red intervals for that phase:
    $$\text{Split}_i = G_i + Y_i + R_{ci}$$
    Where:
    *   $G_i$ = Displayed green interval (seconds)
    *   $Y_i$ = Yellow change interval (seconds)
    *   $R_{ci}$ = All-red clearance interval (seconds)
*   **Offset:** The difference in time (in seconds or as a percentage of the cycle length) between the start of a green phase at one intersection and a reference point (often the start of green) at an adjacent signalized intersection. Offsets are the foundation of signal coordination and platoon progression.

---

## Saturation Flow, Lost Time, and Capacity

Analyzing capacity requires translating displayed timing into effective timing.

### Saturation Flow Rate ($s$)
The saturation flow rate ($s$) represents the maximum capacity of a lane group if the signal were green $100\%$ of the time. It is expressed in passenger cars per hour of green per lane (pc/h/g/ln) or vehicles per hour of green (veh/h/g). The default base saturation flow rate ($s_0$) in the HCM is typically $1,900 \text{ pc/h/g/ln}$, which is then adjusted for lane width, grade, heavy vehicles, turning movements, and parking.

### Lost Time ($t_L$)
Every time a signal changes phases, time is lost due to vehicle physics and driver perception:
1.  **Start-up Lost Time ($l_1$):** When the signal turns green, the first few drivers react slowly and accelerate from a stop. This typically consumes about $2.0$ seconds at the start of green.
2.  **Clearance Lost Time ($l_2$):** The portion of the yellow and all-red clearance intervals not utilized by traffic. This is typically modeled as the time at the end of the phase when the intersection is empty.

Total lost time per phase ($t_L$) is:
$$t_L = l_1 + l_2$$

If specific values are not provided on the exam, a common default is $t_L = 4.0\text{ seconds}$ per phase. The total lost time per cycle ($L$) is the sum of the lost times for the critical phases (those that dictate the cycle length):
$$L = \sum t_{L, \text{critical}}$$

### Effective Green ($g$) and Effective Red ($r$)
*   **Effective Green Time ($g$):** The actual usable green time allocated to a lane group:
    $$g = G + Y + R_c - t_L$$
*   **Effective Red Time ($r$):** The time during which the lane group is effectively blocked from flowing:
    $$r = C - g$$

### Lane Group Capacity ($c$)
Capacity is the maximum rate of flow that can pass through the intersection under prevailing conditions. It is calculated by scaling the saturation flow rate by the ratio of effective green to cycle length:
$$c = s \cdot \left( \frac{g}{C} \right)$$
Where:
*   $c$ = Capacity of the lane group (veh/h or pc/h)
*   $s$ = Saturation flow rate of the lane group (veh/h/g or pc/h/g)
*   $g$ = Effective green time (seconds)
*   $C$ = Cycle length (seconds)

---

## Worked Example: Capacity and Effective Green Calculations

### Problem Statement
An approach at a signalized intersection has a saturation flow rate of $1,800\text{ veh/h/g/ln}$ and is configured with two lanes. The signal has a cycle length of $90\text{ seconds}$. For this approach, the displayed green interval is $35\text{ seconds}$, the yellow change interval is $4.0\text{ seconds}$, and the all-red clearance interval is $2.0\text{ seconds}$. 

Assume a start-up lost time of $2.0\text{ seconds}$ and a clearance lost time of $2.0\text{ seconds}$.

Calculate:
1.  The phase lost time ($t_L$)
2.  The effective green time ($g$)
3.  The capacity of the two-lane approach ($c$)

### Step-by-Step Solution

#### Step 1: Calculate the phase lost time ($t_L$)
Using the lost time components:
$$t_L = l_1 + l_2 = 2.0\text{ s} + 2.0\text{ s} = 4.0\text{ s}$$

#### Step 2: Calculate the effective green time ($g$)
Using the effective green equation:
$$g = G + Y + R_c - t_L$$
$$g = 35\text{ s} + 4.0\text{ s} + 2.0\text{ s} - 4.0\text{ s}$$
$$g = 37\text{ s}$$

*Exam Tip: Note that when the sum of yellow and all-red ($4.0 + 2.0 = 6.0\text{ s}$) exceeds the phase lost time ($4.0\text{ s}$), the effective green time is actually longer than the displayed green time ($37\text{ s} > 35\text{ s}$).*

#### Step 3: Calculate the total capacity ($c$) for the approach
First, calculate the total saturation flow ($s$) for the two lanes:
$$s = 1,800\text{ veh/h/g/ln} \times 2\text{ lanes} = 3,600\text{ veh/h/g}$$

Now, apply the capacity formula:
$$c = s \cdot \left( \frac{g}{C} \right)$$
$$c = 3,600\text{ veh/h/g} \times \left( \frac{37\text{ s}}{90\text{ s}} \right)$$
$$c = 3,600 \times 0.4111$$
$$c = 1,480\text{ veh/h}$$

### Verification checklist
*   Are units consistent? Yes, saturation flow is in veh/h/g and capacity is in veh/h.
*   Was the lane count factored in? Yes, multiplied the lane rate by 2.
*   Were lost times subtracted correctly? Yes, $t_L = l_1 + l_2$ was subtracted from the total split ($G+Y+R_c$).
