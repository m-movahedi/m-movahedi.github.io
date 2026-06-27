---
title: "Turn Lane Design"
weight: 61
date : "2026-05-04"
draft : false
type : "post"
---
# Turn Lane Design

Auxiliary turn lanes (left-turn and right-turn lanes) are added to intersections to remove decelerating or stopped turning vehicles from the through-traffic stream. This increases the capacity of the intersection, reduces delays, and lowers the potential for rear-end collisions.

---

## Components of an Auxiliary Turn Lane

An auxiliary lane consists of three distinct horizontal segments:

1.  **Entering Taper ($L_{\text{taper}}$):** The transition zone where vehicles lateral into the auxiliary lane. It can be a straight-line taper or a curved transition.
2.  **Deceleration Length ($L_{\text{decel}}$):** The distance required for a vehicle to decelerate from the through-lane design speed to a stop (or to the speed of the turning maneuver) before reaching the queue of stored vehicles.
3.  **Storage Length ($L_{\text{storage}}$):** The length reserved for vehicles waiting to complete the turn.

```
                  Through Lanes
   ========================================================================
                      \   Taper   \    Deceleration     \     Storage
                       \___________\_____________________\_________________
                                    Auxiliary Turn Lane       |  Stop Line
   ========================================================================
                        |<--Lt-->| |<------ Ld ------->| |<---- Ls ---->|
```

---

## Design and Calculations

### 1. Entering Taper Length ($L_{\text{taper}}$)
For a straight-line transition, the taper length is:

$$L_{\text{taper}} = W \times R$$

Where:
*   $W$ = width of the turn lane (typically $12\text{ ft}$)
*   $R$ = taper ratio (standard ratios range from 8:1 to 15:1; e.g., $10$ indicates $10\text{ ft}$ of longitudinal length per $1\text{ ft}$ of lateral shift). A common urban standard is a $100\text{ ft}$ taper.

### 2. Deceleration Length ($L_{\text{decel}}$)
The deceleration length is based on vehicle braking capabilities. AASHTO Green Book Table 9-22 provides standard deceleration lengths to come to a full stop from the design speed:

| Design Speed (mph) | Deceleration Length to Stop (ft) |
| :---: | :---: |
| **30** | 160 |
| **35** | 215 |
| **40** | 275 |
| **45** | 345 |
| **50** | 425 |
| **55** | 510 |
| **60** | 605 |

*Note: In constrained urban settings, part of the deceleration is assumed to occur in the through lane before entering the taper, reducing the required $L_{\text{decel}}$ on the turn lane.*

### 3. Storage Length ($L_{\text{storage}}$)
The storage length must be sufficient to store the maximum queue of turning vehicles expected during a typical cycle.

#### Signalized Intersections
For signalized intersections, storage length is designed to accommodate the 95th percentile queue length to prevent lane overflow (spillback). A standard PE exam formula is:

$$L_{\text{storage}} = \left( \frac{V}{N_{\text{cycles}}} \right) \times F \times L_{\text{veh}}$$

Where:
*   $V$ = peak hour volume of turning vehicles (veh/h)
*   $N_{\text{cycles}}$ = number of signal cycles per hour = $\frac{3600}{C}$ (where $C$ is the cycle length in seconds)
*   $F$ = queue accumulation factor to account for random arrivals (typically $1.5$ to $2.0$ for $95\%$ overflow prevention; use $2.0$ if no factor is specified)
*   $L_{\text{veh}}$ = design length of a single vehicle (standard passenger car value is **$25\text{ ft}$**; for trucks, use **$40-75\text{ ft}$** depending on the truck type)

#### Unsignalized Intersections
At stop- or yield-controlled intersections, the storage length is based on the probability of arrivals during the peak hour, often estimated as 1.5 to 2.0 times the average number of arrivals during a 2-minute interval:

$$L_{\text{storage}} = 2.0 \times \left( \frac{V}{30} \right) \times 25\text{ ft}$$

---

## Worked Example

Design a left-turn lane for a signalized intersection approach under the following design conditions:
*   Roadway design speed = $45\text{ mph}$
*   Left-turn design volume ($V$) = $270\text{ veh/h}$
*   Signal cycle length ($C$) = $120\text{ seconds}$
*   Lane width ($W$) = $12\text{ ft}$
*   Taper ratio ($R$) = 10:1
*   Use a random arrival factor $F = 1.8$ and a vehicle design length $L_{\text{veh}} = 25\text{ ft}$.

Calculate:
1. The entering taper length ($L_{\text{taper}}$).
2. The required storage length ($L_{\text{storage}}$).
3. The required deceleration length ($L_{\text{decel}}$).
4. The total length of the left-turn lane.

### Solution

**1. Calculate Entering Taper Length ($L_{\text{taper}}$):**
$$L_{\text{taper}} = W \times R = 12\text{ ft} \times 10 = 120\text{ ft}$$

**2. Calculate Storage Length ($L_{\text{storage}}$):**
*   First, find the number of cycles per hour ($N_{\text{cycles}}$):
    $$N_{\text{cycles}} = \frac{3600\text{ s/h}}{120\text{ s/cycle}} = 30\text{ cycles/h}$$
*   Find the average number of left-turning vehicles arriving per cycle:
    $$\text{Average arrivals} = \frac{V}{N_{\text{cycles}}} = \frac{270\text{ veh/h}}{30\text{ cycles/h}} = 9\text{ vehicles/cycle}$$
*   Calculate storage length:
    $$L_{\text{storage}} = 9\text{ vehicles} \times 1.8 \times 25\text{ ft/vehicle} = 405\text{ ft}$$

**3. Calculate Deceleration Length ($L_{\text{decel}}$):**
*   From the AASHTO table for a design speed of $45\text{ mph}$:
    $$L_{\text{decel}} = 345\text{ ft}$$

**4. Calculate Total Turn Lane Length ($L_{\text{total}}$):**
$$L_{\text{total}} = L_{\text{taper}} + L_{\text{decel}} + L_{\text{storage}}$$
$$L_{\text{total}} = 120\text{ ft} + 345\text{ ft} + 405\text{ ft} = 870\text{ ft}$$

The designer must specify a left-turn lane with a $120\text{ ft}$ taper and a $750\text{ ft}$ full-width lane ($345\text{ ft}$ for deceleration plus $405\text{ ft}$ for storage).

## References

*   *A Policy on Geometric Design of Highways and Streets* (AASHTO Green Book), 7th Edition, 2018, Section 9.7.2.
*   *NCEES PE Civil Reference Handbook*, Section 4.3.2.
