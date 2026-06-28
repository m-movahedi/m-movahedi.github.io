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

<div style="background: #ffffff; border-radius: 8px; border: 1px solid #e2e8f0; padding: 24px; margin: 24px 0; overflow-x: auto;">
  <svg viewBox="0 0 700 200" width="700" height="200" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <marker id="arrow-start" markerWidth="8" markerHeight="8" refX="0" refY="4" orient="auto-start-reverse">
        <path d="M0,4 L8,8 L8,0 z" fill="#475569" />
      </marker>
      <marker id="arrow-end" markerWidth="8" markerHeight="8" refX="8" refY="4" orient="auto">
        <path d="M0,0 L0,8 L8,4 z" fill="#475569" />
      </marker>
    </defs>
    <!-- Main Road Surface -->
    <rect x="20" y="40" width="660" height="60" fill="#f1f5f9" />    
    <!-- Turn Lane Surface -->
    <path d="M 120,100 L 220,140 L 680,140 L 680,100 Z" fill="#e2e8f0" />    
    <!-- Lines -->
    <line x1="20" y1="40" x2="680" y2="40" stroke="#94a3b8" stroke-width="3" />
    <line x1="20" y1="100" x2="120" y2="100" stroke="#94a3b8" stroke-width="3" />    
    <!-- Taper Line -->
    <line x1="120" y1="100" x2="220" y2="140" stroke="#94a3b8" stroke-width="3" />
    <line x1="220" y1="140" x2="680" y2="140" stroke="#94a3b8" stroke-width="3" />    
    <!-- Center skip line between through and turn lane -->
    <line x1="120" y1="100" x2="680" y2="100" stroke="#cbd5e1" stroke-width="2" stroke-dasharray="10,10" />
    <line x1="20" y1="70" x2="680" y2="70" stroke="#cbd5e1" stroke-width="2" stroke-dasharray="10,10" />    
    <!-- Stop Line -->
    <line x1="660" y1="100" x2="660" y2="140" stroke="#475569" stroke-width="4" />
    <text x="660" y="155" font-family="sans-serif" font-size="11" fill="#475569" text-anchor="middle">Stop Line</text>
    <!-- Labels -->
    <text x="350" y="25" font-family="sans-serif" font-size="14" fill="#0f172a" font-weight="bold" text-anchor="middle">Through Lanes</text>
    <text x="450" y="125" font-family="sans-serif" font-size="12" fill="#0f172a" text-anchor="middle">Auxiliary Turn Lane</text>
    <!-- Dimension Lines -->
    <!-- Taper (Lt) -->
    <line x1="120" y1="170" x2="220" y2="170" stroke="#475569" stroke-width="1.5" marker-start="url(#arrow-start)" marker-end="url(#arrow-end)" />
    <text x="170" y="160" font-family="sans-serif" font-size="12" fill="#1e293b" text-anchor="middle">Taper (L_t)</text>
    <line x1="120" y1="105" x2="120" y2="175" stroke="#cbd5e1" stroke-width="1" />
    <line x1="220" y1="145" x2="220" y2="175" stroke="#cbd5e1" stroke-width="1" />    
    <!-- Deceleration (Ld) -->
    <line x1="220" y1="170" x2="440" y2="170" stroke="#475569" stroke-width="1.5" marker-start="url(#arrow-start)" marker-end="url(#arrow-end)" />
    <text x="330" y="160" font-family="sans-serif" font-size="12" fill="#1e293b" text-anchor="middle">Deceleration (L_d)</text>
    <line x1="440" y1="105" x2="440" y2="175" stroke="#cbd5e1" stroke-width="1" />    
    <!-- Storage (Ls) -->
    <line x1="440" y1="170" x2="660" y2="170" stroke="#475569" stroke-width="1.5" marker-start="url(#arrow-start)" marker-end="url(#arrow-end)" />
    <text x="550" y="160" font-family="sans-serif" font-size="12" fill="#1e293b" text-anchor="middle">Storage (L_s)</text>
    <line x1="660" y1="145" x2="660" y2="175" stroke="#cbd5e1" stroke-width="1" />
  </svg>
</div>

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
