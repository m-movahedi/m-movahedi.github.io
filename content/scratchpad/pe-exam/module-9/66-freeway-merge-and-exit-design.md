---
title: "Freeway Merge and Exit Design"
weight: 66
date : "2026-05-04"
draft : false
type : "post"
---
# Freeway Merge and Exit Design

Freeway merge and exit terminals are critical locations on a highway network where traffic transitions between high-speed through lanes and lower-speed ramp terminals. The design of these segments focuses on providing adequate length for vehicles to accelerate or decelerate safely, and providing clear, predictable geometric paths (gores) to minimize conflicts.

---

## Acceleration and Deceleration Lanes

Auxiliary lanes are added at ramp connections to facilitate safe merges and exits:

*   **Acceleration Lanes:** Provided at entrance terminals. They allow merging vehicles to accelerate from the design speed of the ramp curve to the operating speed of the freeway before merging.
*   **Deceleration Lanes:** Provided at exit terminals. They allow exiting vehicles to steer out of the high-speed through lanes and decelerate to the design speed of the ramp curve without impeding mainline traffic.

---

## Terminal Layout Types

There are two primary geometric designs for entrance and exit terminals:

### 1. Parallel Type
*   **Entrance:** Features an auxiliary lane parallel to the freeway lanes, ending with a short taper. Parallel terminals are preferred for entrance ramps because they provide the driver with a longer area to observe freeway traffic in their side mirrors and find an acceptable gap before merging.
*   **Exit:** Features a parallel auxiliary lane beginning with a short taper, leading into the exit ramp.

```html
<div style="background: #ffffff; border-radius: 8px; border: 1px solid #e2e8f0; padding: 24px; margin: 24px 0; overflow-x: auto;">
  <div style="font-family: sans-serif; font-size: 14px; font-weight: bold; color: #1e293b; margin-bottom: 12px; text-align: center;">Parallel Entrance Terminal</div>
  <svg viewBox="0 0 600 150" width="600" height="150" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <marker id="arrow-both-p" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
        <path d="M0,0 L0,8 L8,4 z" fill="#475569" />
      </marker>
      <marker id="arrow-left-p" markerWidth="8" markerHeight="8" refX="0" refY="4" orient="auto-start-reverse">
        <path d="M0,4 L8,8 L8,0 z" fill="#475569" />
      </marker>
    </defs>
    
    <!-- Main Road -->
    <rect x="20" y="20" width="560" height="40" fill="#f1f5f9" />
    <line x1="20" y1="20" x2="580" y2="20" stroke="#94a3b8" stroke-width="3" />
    <line x1="20" y1="60" x2="350" y2="60" stroke="#cbd5e1" stroke-width="2" stroke-dasharray="10,10" />
    <line x1="350" y1="60" x2="580" y2="60" stroke="#94a3b8" stroke-width="3" />
    
    <!-- Parallel Lane -->
    <polygon points="20,60 350,60 450,100 20,100" fill="#e2e8f0" />
    <line x1="20" y1="100" x2="350" y2="100" stroke="#94a3b8" stroke-width="3" />
    
    <!-- Taper -->
    <line x1="350" y1="100" x2="450" y2="60" stroke="#94a3b8" stroke-width="3" />
    
    <!-- Ramp connection -->
    <line x1="20" y1="60" x2="20" y2="100" stroke="#e2e8f0" stroke-width="3" />
    
    <text x="250" y="45" font-family="sans-serif" font-size="12" fill="#1e293b" text-anchor="middle">Through Lanes</text>
    <text x="185" y="85" font-family="sans-serif" font-size="12" fill="#1e293b" text-anchor="middle">Auxiliary Acceleration Lane</text>
    <text x="420" y="75" font-family="sans-serif" font-size="10" fill="#1e293b" font-weight="bold">Taper</text>
    
    <!-- Dimension -->
    <line x1="20" y1="120" x2="350" y2="120" stroke="#475569" stroke-width="1.5" marker-start="url(#arrow-left-p)" marker-end="url(#arrow-both-p)" />
    <text x="185" y="140" font-family="sans-serif" font-size="12" fill="#475569" text-anchor="middle">Parallel Lane Length</text>
  </svg>
</div>
```

### 2. Taper Type
*   **Entrance:** Features a direct, angled entry path (typically a 50:1 to 70:1 taper) that guides merging vehicles directly into the through lane.
*   **Exit:** Features a direct, angled exit path (typically a 15:1 to 25:1 taper) pointing toward the ramp.

```html
<div style="background: #ffffff; border-radius: 8px; border: 1px solid #e2e8f0; padding: 24px; margin: 24px 0; overflow-x: auto;">
  <div style="font-family: sans-serif; font-size: 14px; font-weight: bold; color: #1e293b; margin-bottom: 12px; text-align: center;">Taper Entrance Terminal</div>
  <svg viewBox="0 0 600 150" width="600" height="150" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <marker id="arrow-both-t" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
        <path d="M0,0 L0,8 L8,4 z" fill="#475569" />
      </marker>
      <marker id="arrow-left-t" markerWidth="8" markerHeight="8" refX="0" refY="4" orient="auto-start-reverse">
        <path d="M0,4 L8,8 L8,0 z" fill="#475569" />
      </marker>
    </defs>
    
    <!-- Main Road -->
    <rect x="20" y="20" width="560" height="40" fill="#f1f5f9" />
    <line x1="20" y1="20" x2="580" y2="20" stroke="#94a3b8" stroke-width="3" />
    <line x1="20" y1="60" x2="580" y2="60" stroke="#94a3b8" stroke-width="3" />
    
    <!-- Taper & Ramp -->
    <polygon points="20,100 200,100 450,60 20,60" fill="#e2e8f0" />
    <line x1="200" y1="100" x2="450" y2="60" stroke="#94a3b8" stroke-width="3" />
    <line x1="20" y1="100" x2="200" y2="100" stroke="#94a3b8" stroke-width="3" />
    
    <text x="250" y="45" font-family="sans-serif" font-size="12" fill="#1e293b" text-anchor="middle">Through Lanes</text>
    <text x="100" y="85" font-family="sans-serif" font-size="12" fill="#1e293b" text-anchor="middle">Ramp</text>
    <text x="325" y="70" font-family="sans-serif" font-size="10" fill="#1e293b" font-weight="bold">Merge Taper</text>
    
    <!-- Dimension -->
    <line x1="200" y1="120" x2="450" y2="120" stroke="#475569" stroke-width="1.5" marker-start="url(#arrow-left-t)" marker-end="url(#arrow-both-t)" />
    <text x="325" y="140" font-family="sans-serif" font-size="12" fill="#475569" text-anchor="middle">Taper Length</text>
  </svg>
</div>
```

---

## Design Lengths ($L_a$ and $L_d$)

AASHTO Green Book Tables 10-3 and 10-5 provide standard base lengths for acceleration ($L_a$) and deceleration ($L_d$) based on the design speed of the freeway and the design speed of the controlling ramp curve.

### Representative AASHTO Base Lengths:

*   **Acceleration Lengths ($L_a$) in feet (for flat terrain):**

| Freeway Design Speed (mph) | Ramp Speed = 0 mph (Stop) | Ramp Speed = 30 mph | Ramp Speed = 50 mph |
| :---: | :---: | :---: | :---: |
| **50** | 720 | 500 | - |
| **60** | 1200 | 990 | 490 |
| **70** | 1620 | 1440 | 970 |
| **80** | 2000 | 1820 | 1410 |

*   **Deceleration Lengths ($L_d$) in feet (for flat terrain):**

| Freeway Design Speed (mph) | Ramp Speed = 0 mph (Stop) | Ramp Speed = 30 mph | Ramp Speed = 50 mph |
| :---: | :---: | :---: | :---: |
| **50** | 470 | 390 | - |
| **60** | 570 | 500 | 340 |
| **70** | 670 | 610 | 450 |
| **80** | 780 | 720 | 570 |

---

## Grade Adjustment Factors

Roadway grades equal to or exceeding $3\%$ affect a vehicle's ability to accelerate or decelerate. Designers must multiply the flat-terrain base length by the appropriate grade adjustment factor (AASHTO Tables 10-4 and 10-6):

*   **Acceleration Lanes on Upgrades:** Uphill grades make it harder to speed up. The required acceleration length **increases** (factor $> 1.0$).
*   **Acceleration Lanes on Downgrades:** Downhill grades assist acceleration. The required length **decreases** (factor $< 1.0$).
*   **Deceleration Lanes on Upgrades:** Uphill grades assist deceleration (gravity slows the vehicle). The required length **decreases** (factor $< 1.0$).
*   **Deceleration Lanes on Downgrades:** Downhill grades hinder deceleration. The required length **increases** (factor $> 1.0$).

---

## Gore Area Design

The gore is the triangular area located between the mainline roadway and the ramp.
*   **Physical Nose:** The concrete or curbed barrier that physically separates the lanes.
*   **Painted Nose:** The painted stripes leading up to the physical nose.
*   **Recovery Area:** The gore is a high-crash location because drivers often make late decisions to exit. The gore must remain free of rigid obstacles (such as signs or bridge piers) and should contain a crash cushion (impact attenuator) at the physical nose to absorb vehicle impacts.

---

## Worked Example

A parallel-type entrance ramp is being designed for a freeway with a design speed of $70\text{ mph}$. The ramp connects via a loop curve with a design speed of $30\text{ mph}$. The entrance terminal is located on an uphill segment of the freeway with a constant $+4.0\%$ upgrade.

1.  Find the required base acceleration length ($L_a$) on flat terrain.
2.  Identify the grade adjustment factor for this uphill merge (assume an AASHTO grade adjustment factor of $1.50$ for a $+3\%$ to $+4\%$ upgrade at these speeds).
3.  Calculate the adjusted required acceleration lane length.
4.  Specify the layout if the standard parallel entrance design utilizes a $300\text{ ft}$ taper.

### Solution

**1. Find Base Acceleration Length ($L_a$):**
*   Freeway design speed = $70\text{ mph}$.
*   Ramp curve design speed = $30\text{ mph}$.
*   From the AASHTO design table, the base acceleration length on flat terrain is:
    $$L_a = 1,440\text{ ft}$$

**2. Identify Grade Adjustment Factor:**
*   Freeway grade = $+4.0\%$ upgrade.
*   For a $+4\%$ upgrade, the grade adjustment factor is:
    $$\text{Factor} = 1.50$$

**3. Calculate Adjusted Acceleration Lane Length ($L_{a,\text{adj}}$):**
$$L_{a,\text{adj}} = L_a \times \text{Factor}$$
$$L_{a,\text{adj}} = 1,440\text{ ft} \times 1.50 = 2,160\text{ ft}$$

**4. Layout Specification:**
*   For a parallel-type lane, the total auxiliary lane length includes the parallel acceleration length plus the taper length.
*   Parallel segment = $2,160\text{ ft}$.
*   Taper segment = $300\text{ ft}$.
*   Total length of the auxiliary lane = $2,160 + 300 = 2,460\text{ ft}$.

The designer must provide a $2,160\text{ ft}$ long parallel lane followed by a $300\text{ ft}$ taper to allow vehicles to safely merge uphill.

## References

*   *A Policy on Geometric Design of Highways and Streets* (AASHTO Green Book), 7th Edition, 2018, Section 10.9.6.
*   *NCEES PE Civil Reference Handbook*, Section 4.3.2.
