---
title: "Traffic Signal Coordination"
weight: 72
date : "2026-05-04"
draft : false
type : "post"
---
# Traffic Signal Coordination

Signal coordination is the technique of synchronization of multiple traffic signals along a corridor to facilitate the continuous movement of vehicle platoons. The primary goal of coordination is to reduce stops, delays, fuel consumption, and vehicle emissions. 

On the PE Civil Transportation exam, you will encounter questions regarding coordination fundamentals, cycle length determination, offset calculations, progression bandwidth, and the interpretation of time-space diagrams.

---

## Fundamentals of Coordination

To maintain a constant phase relationship over time, **all signalized intersections within a coordinated system must operate on the same cycle length** (or a sub-multiple, such as $C/2$ for minor intersections). The system cycle length is typically dictated by the "critical intersection"—the intersection in the network that requires the longest cycle length to satisfy its capacity and pedestrian timing demands.

### Key Terminology:
*   **Platoon:** A group of vehicles traveling together along a corridor, released from an upstream signal.
*   **Progression Speed ($v_p$):** The speed at which a platoon of vehicles travels through the coordinated system (typically equal to the speed limit or the 85th-percentile speed, expressed in $\text{ft/s}$ or $\text{mph}$).
*   **Bandwidth ($B$):** The window of time (in seconds) during which a vehicle starting at the first intersection can travel through the entire coordinated corridor at the progression speed without stopping. A larger bandwidth indicates better coordination.
*   **Bandwidth Efficiency ($E$):** The ratio of the green bandwidth to the cycle length, expressed as a percentage:
    $$E = \left( \frac{B}{C} \right) \times 100\%$$
*   **Offset ($O_{ij}$):** The time difference (in seconds or as a percentage of the cycle length) between the start of the green phase for the coordinated movement at a downstream intersection ($j$) relative to a reference point (usually the start of green) at an upstream intersection ($i$).

---

## Time-Space Diagrams

A time-space diagram is the primary tool for designing and visualizing signal coordination.
*   **Vertical Axis ($y$-axis):** Distance along the corridor (feet or miles). The locations of the signalized intersections are marked.
*   **Horizontal Axis ($x$-axis):** Time (seconds). The signal indications (green, yellow, red) for each intersection are plotted.
*   **Green Band:** The shaded path running diagonally through the green phases of the intersections. The slope of this band represents the progression speed:
    $$\text{Slope} = \frac{\Delta \text{Distance}}{\Delta \text{Time}} = v_p$$

```html
<div style="background: #ffffff; border-radius: 8px; border: 1px solid #e2e8f0; padding: 24px; margin: 24px 0; overflow-x: auto;">
  <svg viewBox="0 0 600 250" width="600" height="250" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <marker id="arrow-axis" markerWidth="8" markerHeight="8" refX="8" refY="4" orient="auto">
        <path d="M0,0 L0,8 L8,4 z" fill="#0f172a" />
      </marker>
    </defs>
    <!-- Axes -->
    <line x1="40" y1="200" x2="560" y2="200" stroke="#0f172a" stroke-width="2" marker-end="url(#arrow-axis)" />
    <line x1="40" y1="200" x2="40" y2="20" stroke="#0f172a" stroke-width="2" marker-end="url(#arrow-axis)" />
    <text x="540" y="220" font-family="sans-serif" font-size="12" fill="#0f172a" text-anchor="end">Time (seconds)</text>
    <text x="25" y="30" font-family="sans-serif" font-size="12" fill="#0f172a" transform="rotate(-90, 25, 30)" text-anchor="end">Distance (ft)</text>
    <!-- Intersection lines (horizontal dashed) -->
    <line x1="40" y1="160" x2="560" y2="160" stroke="#cbd5e1" stroke-width="1" stroke-dasharray="4,4" />
    <text x="570" y="165" font-family="sans-serif" font-size="11" fill="#475569">Int. 1</text>
    <line x1="40" y1="60" x2="560" y2="60" stroke="#cbd5e1" stroke-width="1" stroke-dasharray="4,4" />
    <text x="570" y="65" font-family="sans-serif" font-size="11" fill="#475569">Int. 2</text>    
    <!-- Green Band -->
    <polygon points="120,160 220,160 300,60 200,60" fill="#10b981" fill-opacity="0.2" stroke="#10b981" stroke-width="1" />
    <text x="280" y="110" font-family="sans-serif" font-size="11" fill="#047857" font-weight="bold" transform="rotate(-50, 280, 110)">Green Band (B)</text>
    <!-- Signal Timings - Intersection 1 (Bottom) -->
    <rect x="120" y="155" width="100" height="10" fill="#10b981" rx="2" />
    <text x="170" y="150" font-family="sans-serif" font-size="10" fill="#10b981" text-anchor="middle">Green</text>
    <rect x="220" y="155" width="80" height="10" fill="#ef4444" rx="2" />
    <text x="260" y="150" font-family="sans-serif" font-size="10" fill="#ef4444" text-anchor="middle">Red</text>
    <rect x="300" y="155" width="100" height="10" fill="#10b981" rx="2" />
    <text x="350" y="150" font-family="sans-serif" font-size="10" fill="#10b981" text-anchor="middle">Green</text>
    <!-- Signal Timings - Intersection 2 (Top) -->
    <rect x="120" y="55" width="80" height="10" fill="#ef4444" rx="2" />
    <text x="160" y="50" font-family="sans-serif" font-size="10" fill="#ef4444" text-anchor="middle">Red</text>
    <rect x="200" y="55" width="100" height="10" fill="#10b981" rx="2" />
    <text x="250" y="50" font-family="sans-serif" font-size="10" fill="#10b981" text-anchor="middle">Green</text>
    <rect x="300" y="55" width="80" height="10" fill="#ef4444" rx="2" />
    <text x="340" y="50" font-family="sans-serif" font-size="10" fill="#ef4444" text-anchor="middle">Red</text>
  </svg>
</div>
```

---

## One-Way vs. Two-Way Coordination

### One-Way Coordination
For a one-way street (or a corridor where traffic is heavily directional, such as inbound during AM peak), coordinating the signal is straightforward. The ideal offset between intersection $i$ and downstream intersection $j$ is simply the travel time between them:

$$O_{ideal} = \frac{L_{ij}}{v_p}$$

Where:
*   $O_{ideal}$ = Ideal offset (seconds)
*   $L_{ij}$ = Distance between intersections $i$ and $j$ (feet)
*   $v_p$ = Progression speed (feet per second, $\text{ft/s}$)

### Two-Way Coordination
Coordinating traffic in both directions concurrently is challenging. Perfect two-way coordination (where maximum bandwidth is achieved in both directions) is only possible under specific geometric conditions.

Specifically, the travel time ($t_{\text{travel}}$) between two intersections must be a multiple of half the cycle length ($C/2$):
$$t_{\text{travel}} = n \cdot \left( \frac{C}{2} \right)$$
Where $n$ is an integer ($0, 1, 2, \dots$). 

*   If $n$ is even (e.g., $t_{\text{travel}} = C, 2C$), the ideal offset is **$0\text{ seconds}$** (simultaneous green onset).
*   If $n$ is odd (e.g., $t_{\text{travel}} = C/2, 3C/2$), the ideal offset is **$C/2\text{ seconds}$** (single-alternate green onset).

When travel times do not match these criteria, traffic engineers must compromise by unequalizing the bandwidths (e.g., giving the peak direction a wider bandwidth and the off-peak direction a narrower bandwidth).

---

## Worked Example: Progression and Offset Design

### Problem Statement
Two signalized intersections along an arterial corridor are separated by a distance of $1,760\text{ feet}$ (exactly 1/3 of a mile). The corridor operates on a coordinated system with a common cycle length of $80\text{ seconds}$. The design progression speed is $30\text{ mph}$. 

1.  Calculate the travel time between the two intersections in seconds.
2.  Determine the ideal offset for one-way progression from the first intersection to the second.
3.  Evaluate the feasibility of achieving perfect two-way coordination (equal bandwidth in both directions).

### Step-by-Step Solution

#### Step 1: Convert Progression Speed and Calculate Travel Time
First, convert the progression speed from $\text{mph}$ to $\text{ft/s}$:
$$v_p = 30\text{ mph} \times 1.467 = 44\text{ ft/s}$$

Now, calculate the travel time ($t_{\text{travel}}$) over the $1,760\text{-foot}$ distance:
$$t_{\text{travel}} = \frac{L}{v_p} = \frac{1,760\text{ ft}}{44\text{ ft/s}} = 40.0\text{ seconds}$$

#### Step 2: Determine the Ideal One-Way Offset
For one-way progression, the downstream signal's green phase should start exactly when the platoon arrives. Thus, the ideal offset is equal to the travel time:
$$\text{Offset} = 40.0\text{ seconds}$$

As a percentage of the cycle length ($C = 80\text{ s}$):
$$\text{Offset (\%)} = \left( \frac{40\text{ s}}{80\text{ s}} \right) \times 100\% = 50\%$$

#### Step 3: Evaluate Two-Way Coordination Feasibility
For perfect two-way coordination, the travel time must satisfy:
$$t_{\text{travel}} = n \cdot \left( \frac{C}{2} \right)$$

Let's test this relationship with our values ($t_{\text{travel}} = 40.0\text{ s}$ and $C = 80\text{ s}$):
$$\frac{C}{2} = \frac{80\text{ s}}{2} = 40.0\text{ seconds}$$
$$t_{\text{travel}} = 40.0\text{ s} = 1 \cdot (40.0\text{ s})$$

Here, $n = 1$, which is an integer. 

Because the travel time ($40.0\text{ seconds}$) is exactly equal to half the cycle length ($C/2 = 40.0\text{ seconds}$), **perfect two-way coordination is feasible**. By setting the offset at the second intersection to $40.0\text{ seconds}$ (or $C/2$), the green bands in both directions will be maximized and identical.

*Exam Tip: If the travel time had been 30 seconds, perfect two-way progression would not be possible without changing the cycle length. If the cycle length could be adjusted to 60 seconds ($C/2 = 30\text{ s}$), then two-way coordination would become perfect. This is why cycle length selection and coordination are iterative.*
