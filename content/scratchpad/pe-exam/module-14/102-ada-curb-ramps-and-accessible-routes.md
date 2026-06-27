---
title: "ADA Curb Ramps and Accessible Routes"
weight: 102
---
# ADA Curb Ramps and Accessible Routes

Accessibility in the public right-of-way is governed by the Americans with Disabilities Act (ADA) Standards for Accessible Design and the Proposed Accessibility Guidelines for Pedestrian Facilities in the Public Right-of-Way (PROWAG). Geometric engineers must design ramps and routes that comply with strict slope, width, and surface constraints.

---

## Technical Standards for Ramps and Sidewalks

The following parameters represent critical design criteria for accessible routes:

| Feature | ADA Standard | PROWAG Standard (Public Right-of-Way) |
|---|---|---|
| **Max Ramp Running Slope** | **1:12** ($8.33\%$) | **1:12** ($8.33\%$) (Ramps) / Roadway grade (Sidewalks) |
| **Max Ramp Cross Slope** | **1:50** ($2.0\%$) | **1:50** ($2.0\%$) |
| **Min Clear Width** | **36 inches** ($3.0\text{ ft}$) | **48 inches** ($4.0\text{ ft}$) |
| **Max Vertical Rise (single run)** | **30 inches** ($2.5\text{ ft}$) | **30 inches** ($2.5\text{ ft}$) |
| **Min Landing Size** | **60 in $\times$ 60 in** ($5\text{ ft} \times 5\text{ ft}$) | **60 in $\times$ 60 in** ($5\text{ ft} \times 5\text{ ft}$) |
| **Max Landing Slope (any direction)** | **1:50** ($2.0\%$) | **1:50** ($2.0\%$) |

---

## Accessible Routes and Passing Zones

- **Continuous Clear Width:** A minimum clear width of **36 inches** is required. If the accessible route is narrower than **60 inches**, passing zones of at least **60 in $\times$ 60 in** must be provided at intervals not to exceed **200 feet**.
- **Protruding Objects:** Objects projecting from walls (e.g., signs, telephone booths) must not project more than **4 inches** into the path of travel if their lower edge is between **27 inches** and **80 inches** above the ground.
- **Grates:** If grates are located on accessible routes, they must have spaces no greater than **0.5 inches** wide in the direction of flow, and the long openings must run perpendicular to the dominant direction of travel.

---

## Detectable Warnings (Truncated Domes)

Detectable warnings are raised, truncated domes that provide a tactile warning underfoot and for cane users at the transition between pedestrian walks and the roadway.
- **Dome Dimensions:** Typically $0.2\text{ inches}$ high, $0.9\text{ inches}$ base diameter, spaced $1.6$ to $2.4\text{ inches}$ apart.
- **Placement:** Must extend a minimum of **24 inches** (2.0 feet) in the direction of travel.
- **Width:** Must span the full width of the ramp or flush landing.

---

## Worked Example: ADA Ramp Length and Elevation Change

An engineer is designing a curb ramp to connect a sidewalk to a street level crosswalk.
- The vertical elevation difference between the sidewalk and the street is $\Delta z = 18.0\text{ inches}$.
- The sidewalk has a cross slope of $1.5\%$.
- The ramp is to be constructed with a running slope of $1:14$ ($7.14\%$) to provide a safety margin under the maximum $1:12$ limit.
- Due to space constraints, the ramp must be split into two runs with a flat landing in between. The landing is $5.0\text{ ft} \times 5.0\text{ ft}$ with a slope of $0.0\%$.

**1. Calculate the total horizontal length of the ramp runs (excluding the landing) required to overcome the $18.0\text{-inch}$ vertical change.**
**2. Verify if a landing is required, and explain the rise limit constraint.**

### Solution:

#### Step 1: Convert units
- Vertical rise:
  $$\Delta z = 18.0\text{ inches} = 1.5\text{ feet}$$
- Target running slope ($S$):
  $$S = \frac{1}{14} \approx 0.0714\text{ ft/ft}$$

#### Step 2: Calculate the horizontal length ($L$) of the ramp runs
Using the relation:
$$S = \frac{\text{Rise}}{\text{Run}} \implies \text{Run} = \frac{\text{Rise}}{S}$$
$$L = \frac{1.5\text{ ft}}{0.0714\text{ ft/ft}} = 21.0\text{ feet}$$

*Note:* If the ramp was built as a single continuous run, the total run length would be $21.0\text{ feet}$.

#### Step 3: Check landing requirements and rise constraints
- Under ADA standards, the maximum vertical rise for a single ramp run is **30 inches** ($2.5\text{ feet}$).
- Since our total rise is $\Delta z = 18.0\text{ inches} < 30\text{ inches}$, a landing is **not** legally required solely due to the rise limit. 
- However, if the site layout requires a change of direction, a landing is required. If a landing is placed, the landing does not add to the rise, but it does add $5.0\text{ feet}$ to the overall footprint length of the facility (total footprint = $21.0\text{ ft} + 5.0\text{ ft} = 26.0\text{ ft}$).

---

## Technical Pitfalls
- **Confusing running slope and cross slope:** A ramp can have up to $8.33\%$ running slope but only $2.0\%$ cross slope. Using the $8.33\%$ value for cross slope is a major design violation and a common exam trap.
- **Rise limit:** Always check the vertical rise limit of 30 inches. If a problem states the elevation change is 40 inches and asks for the minimum number of landings, you must divide the rise into at least two runs with at least one intermediate landing (since a single run cannot exceed 30 inches of rise).
- **Slope ratios vs. Percentages:** Make sure you can convert easily: $1:12 \approx 8.33\%$, $1:20 = 5.0\%$, $1:50 = 2.0\%$.
