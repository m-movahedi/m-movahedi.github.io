---
title: "Railroad Crossings and Preemption"
weight: 79
---
# Railroad Crossings and Preemption

Highway-rail grade crossings are intersections where a roadway crosses railroad tracks at grade. Due to the massive difference in mass and braking capability between trains and motor vehicles, these crossings require specialized signs, pavement markings, and signal preemption systems.

On the PE Civil Transportation exam, you will encounter questions regarding grade crossing control devices, preemption types (simultaneous vs. advance), track clearance timing, and queue clearance calculations.

---

## Grade Crossing Control Devices (MUTCD Part 8)

The MUTCD specifies a series of signs and markings that must be placed at and in advance of highway-rail grade crossings.

### 1. The Crossbuck Sign (R15-1)
*   A regulatory, white X-shaped sign with black lettering reading "RAILROAD CROSSING".
*   It must be installed at all public grade crossings.
*   The Crossbuck functions as a **YIELD** sign. Road users must yield the right-of-way to approaching trains.
*   If there are multiple tracks, a supplemental plaque indicating the number of tracks (e.g., "3 TRACKS") must be mounted below the Crossbuck.

### 2. Pavement Markings
*   **RXR Marking:** Consists of a white X, the letters "R" and "R", and transverse boundary lines painted on the pavement.
*   It is mandatory on paved approaches to all grade crossings where diagnostic studies indicate the need, or where active warning devices (flashing lights, gates) are present.
*   **Stop Lines:** A solid white stop line must be placed on the approach, typically **$8\text{ feet}$ to $15\text{ feet}$** in advance of the nearest rail.

### 3. Advance Warning Sign (W10-1)
*   A yellow circular sign with a black border, a black X, and the letters "R" and "R".
*   It must be placed upstream of the crossing to alert drivers to the upcoming tracks.

---

## Signal Preemption Fundamentals

When a signalized roadway intersection is located close to a railroad grade crossing (typically within **$200\text{ feet}$**), the traffic signal controller must be electrically interconnected with the railroad track circuits. This interconnection activates a **preemption sequence** when a train approaches.

Preemption overrides normal traffic signal operations to prevent vehicles from being trapped on the tracks.

### Types of Preemption:
1.  **Simultaneous Preemption:** The traffic signal controller receives the preemption call and begins its track clearance phase at the exact same moment that the railroad active warning devices (flashing lights and gates) start operating.
2.  **Advance Preemption:** The traffic signal controller receives the preemption call **before** the railroad lights and gates are activated. This is used when the time needed to clear vehicles off the tracks is greater than the standard railroad warning time (which is typically a minimum of $20\text{ seconds}$).

---

## The Preemption Phasing Sequence

When preemption is triggered, the traffic signal controller executes the following phases in order:

1.  **Right-of-Way Transfer Time ($T_{\text{transfer}}$):** The controller terminates the active green phase for any movements that conflict with the track clearance phase. This includes displaying standard yellow change and all-red clearance intervals.
2.  **Track Clearance Phase (Track Green):** The controller displays a green signal to the approach crossing the tracks. This allows any vehicles currently queued on the tracks to move forward and clear the railroad crossing before the gates descend or the train arrives.
3.  **Hold Phase:** During the passage of the train, the signal controller displays green to movements that do not conflict with the crossing (typically movements parallel to the tracks) while holding all conflicting movements in red.
4.  **Exit Phase:** Once the train clears, the controller returns the signal to normal operations, prioritizing the movements that were delayed.

---

## Worked Example: Preemption and Queue Clearance Timing

### Problem Statement
A highway-rail grade crossing is located $100\text{ feet}$ upstream of a signalized intersection. The distance from the intersection's stop line to a point $6\text{ feet}$ past the railroad track clearance zone (the clear storage distance) is $135\text{ feet}$. 

An engineer is designing the preemption system with the following design parameters:
*   Right-of-way transfer time ($T_{\text{transfer}}$) to terminate conflicting phases = $7.5\text{ seconds}$
*   Start-up delay for the queued vehicles ($t_{\text{start}}$) = $2.0\text{ seconds}$
*   Average acceleration of queued vehicles ($a$) = $2.4\text{ ft/s}^2$
*   Standard railroad warning time (gate activation warning) = $20.0\text{ seconds}$

Calculate:
1.  The time required for vehicles to accelerate and travel across the tracks (Clearance Travel Time, $t_{\text{clear}}$).
2.  The total Queue Clearance Time ($t_{\text{qc}}$) required.
3.  The minimum warning time ($T_{\text{warning}}$) required for the system.
4.  Determine if advance preemption is required, and if so, calculate the required advance preemption time.

### Step-by-Step Solution

#### Step 1: Calculate the Clearance Travel Time ($t_{\text{clear}}$)
Using the basic kinematic equation for acceleration from a stop:
$$d = \frac{1}{2} \cdot a \cdot t_{\text{clear}}^2$$

Solving for $t_{\text{clear}}$:
$$t_{\text{clear}} = \sqrt{\frac{2 \cdot d}{a}}$$

Where $d = 135\text{ feet}$ and $a = 2.4\text{ ft/s}^2$:
$$t_{\text{clear}} = \sqrt{\frac{2 \times 135}{2.4}} = \sqrt{\frac{270}{2.4}} = \sqrt{112.5} = 10.61\text{ seconds}$$

#### Step 2: Calculate the Total Queue Clearance Time ($t_{\text{qc}}$)
The queue clearance time includes the startup delay and the travel time:
$$t_{\text{qc}} = t_{\text{start}} + t_{\text{clear}}$$
$$t_{\text{qc}} = 2.0\text{ s} + 10.61\text{ s} = 12.61\text{ seconds}$$

Rounding to the nearest tenth:
$$t_{\text{qc}} \approx 12.6\text{ seconds}$$

#### Step 3: Calculate the Minimum Warning Time ($T_{\text{warning}}$)
The minimum preemption warning time is the sum of the right-of-way transfer time (time to get a green light for the track approach) and the time to clear the queue:
$$T_{\text{warning}} = T_{\text{transfer}} + t_{\text{qc}}$$
$$T_{\text{warning}} = 7.5\text{ s} + 12.6\text{ s} = 20.1\text{ seconds}$$

#### Step 4: Evaluate the Need for Advance Preemption
*   The required warning time ($T_{\text{warning}}$) is $20.1\text{ seconds}$.
*   The standard railroad warning time is $20.0\text{ seconds}$.

Since the required warning time ($20.1\text{ seconds}$) exceeds the standard railroad warning time ($20.0\text{ seconds}$), **advance preemption is required**.

The required advance preemption time ($T_{\text{advance}}$) is:
$$T_{\text{advance}} = T_{\text{warning}} - \text{Standard Warning Time}$$
$$T_{\text{advance}} = 20.1\text{ s} - 20.0\text{ s} = 0.1\text{ seconds}$$

In practice, a safety factor is added, but the absolute minimum advance warning call from the railroad track circuits to the traffic signal controller must be at least **$0.1\text{ seconds}$** before the crossing gates/lights activate.
