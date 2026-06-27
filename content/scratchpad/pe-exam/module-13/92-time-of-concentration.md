---
title: "Time of Concentration ($t_c$)"
weight: 92
date : "2026-05-04"
draft : false
type : "post"
---
# Time of Concentration ($t_c$)

The time of concentration ($t_c$) is the travel time required for runoff to flow from the hydraulically most remote point of the watershed to the outlet. In the Rational Method, the design storm duration is set equal to $t_c$ because this corresponds to the maximum peak runoff rate.

---

## Components of Time of Concentration

Runoff travels through a watershed in three distinct phases. The total time of concentration is the sum of the travel times for each phase:

$$t_c = t_{sheet} + t_{shallow} + t_{channel}$$

### 1. Sheet Flow (Overland Flow)
Sheet flow occurs very early in the runoff process, where water flows in a thin sheet across a plane surface. This flow is dominated by friction against the ground surface.
The NRCS (SCS) method uses the Manning's Kinematic Wave equation:

$$t_{sheet} = \frac{0.007 (n \cdot L)^{0.8}}{(P_2)^{0.5} \cdot S^{0.4}}$$

Where:
- $t_{sheet}$ = Travel time (**hours**)
- $n$ = Manning's roughness coefficient for sheet flow (values differ significantly from channel roughness; e.g., asphalt = 0.011, dense grass = 0.24, woods = 0.40)
- $L$ = Flow length (**feet**). *Limit:* The NRCS limits sheet flow length to a maximum of **100 feet** (historically up to 300 feet, but 100 feet is the modern standard to prevent sheet flow from breaking into shallow concentrated rills).
- $P_2$ = 2-year, 24-hour rainfall depth (**inches**)
- $S$ = Slope of land surface (**ft/ft**)

### 2. Shallow Concentrated Flow
After a maximum of 100 to 300 feet, sheet flow begins to accumulate in small rills, shallow gullies, or roadway gutters. 
The velocity of shallow concentrated flow is calculated as:

$$V = k \cdot S^{0.5}$$

Where:
- $V$ = Average velocity (**feet per second, ft/s**)
- $S$ = Longitudinal slope (**ft/ft** or percent depending on standard; in NCEES, $S$ is in **ft/ft** or percent. Let's use the explicit formulas):
  - **Paved surfaces:** $V = 20.3282 \sqrt{S}$ (where $S$ is in ft/ft)
  - **Unpaved surfaces:** $V = 16.1345 \sqrt{S}$ (where $S$ is in ft/ft)
- $k$ = Intercept coefficient (paved = 20.3, unpaved = 16.1)

Travel time for shallow concentrated flow:
$$t_{shallow} = \frac{L_{shallow}}{60 \cdot V}\text{ (minutes)} = \frac{L_{shallow}}{3600 \cdot V}\text{ (hours)}$$

### 3. Channel or Conduit Flow
Channel flow occurs when runoff is collected in a distinct ditch, stream, open channel, or storm sewer pipe.
Use Manning's Equation to determine the velocity:

$$V = \frac{1.486}{n} R^{2/3} S^{1/2}$$

Where:
- $V$ = Mean flow velocity (**ft/s**)
- $n$ = Manning's roughness coefficient for channels/conduits (e.g., concrete pipe = 0.012, ditch with grass = 0.035)
- $R$ = Hydraulic Radius = $A / P_w$ (**feet**), where $A$ is flow cross-sectional area ($\text{ft}^2$) and $P_w$ is wetted perimeter ($\text{feet}$)
- $S$ = Friction/channel slope (**ft/ft**)

Travel time for channel flow:
$$t_{channel} = \frac{L_{channel}}{60 \cdot V}\text{ (minutes)}$$

---

## Worked Example: Composite Time of Concentration Calculation

A design engineer is calculating the time of concentration ($t_c$) for a roadside drainage area. The path of the hydraulically most remote point consists of three segments:
1. **Segment 1 (Sheet Flow):** Lawn grass ($n = 0.15$), length $L = 100\text{ ft}$, slope $S = 2.0\% = 0.02\text{ ft/ft}$. The local 2-year, 24-hour rainfall depth $P_2 = 3.2\text{ inches}$.
2. **Segment 2 (Shallow Concentrated Flow):** Unpaved dirt path, length $L = 450\text{ ft}$, slope $S = 4.0\% = 0.04\text{ ft/ft}$.
3. **Segment 3 (Channel Flow):** Trapezoidal turf-lined ditch ($n = 0.035$) with bottom width $b = 4\text{ ft}$, side slopes of 3:1 (H:V), longitudinal slope $S = 1.0\% = 0.01\text{ ft/ft}$, length $L = 1200\text{ ft}$. The design depth of flow is $y = 1.5\text{ ft}$.

**Calculate the total time of concentration ($t_c$) in minutes.**

### Solution:

#### Step 1: Sheet Flow Travel Time ($t_{sheet}$)
Using the Manning's Kinematic Wave equation:
$$t_{sheet} = \frac{0.007 (n \cdot L)^{0.8}}{(P_2)^{0.5} \cdot S^{0.4}}$$
$$t_{sheet} = \frac{0.007 \cdot (0.15 \cdot 100)^{0.8}}{(3.2)^{0.5} \cdot (0.02)^{0.4}}$$
- $(0.15 \cdot 100)^{0.8} = 15^{0.8} \approx 8.725$
- $(3.2)^{0.5} \approx 1.789$
- $(0.02)^{0.4} \approx 0.209$

$$t_{sheet} = \frac{0.007 \cdot 8.725}{1.789 \cdot 0.209} = \frac{0.061075}{0.3739} \approx 0.1633\text{ hours}$$
$$t_{sheet} = 0.1633\text{ hours} \cdot 60\text{ minutes/hour} \approx 9.80\text{ minutes}$$

#### Step 2: Shallow Concentrated Flow Travel Time ($t_{shallow}$)
For unpaved surfaces, velocity is:
$$V = 16.1345 \sqrt{S} = 16.1345 \sqrt{0.04} = 16.1345 \cdot 0.2 = 3.227\text{ ft/s}$$
Calculate travel time:
$$t_{shallow} = \frac{L}{60 \cdot V} = \frac{450\text{ ft}}{60 \cdot 3.227\text{ ft/s}} = \frac{450}{193.62} \approx 2.32\text{ minutes}$$

#### Step 3: Channel Flow Travel Time ($t_{channel}$)
For the trapezoidal ditch, calculate the cross-sectional area ($A$) and wetted perimeter ($P_w$) for a depth of $y = 1.5\text{ ft}$:
- $b = 4\text{ ft}$, side slope $z = 3$
- $A = b \cdot y + z \cdot y^2 = (4 \cdot 1.5) + (3 \cdot 1.5^2) = 6.0 + 6.75 = 12.75\text{ ft}^2$
- $P_w = b + 2y\sqrt{1+z^2} = 4 + 2 \cdot 1.5 \sqrt{1+3^2} = 4 + 3\sqrt{10} \approx 4 + 9.487 = 13.487\text{ ft}$
- Hydraulic Radius: $R = \frac{A}{P_w} = \frac{12.75}{13.487} \approx 0.945\text{ ft}$

Calculate velocity using Manning's equation:
$$V = \frac{1.486}{n} R^{2/3} S^{1/2}$$
$$V = \frac{1.486}{0.035} \cdot (0.945)^{2/3} \cdot (0.01)^{1/2}$$
- $1.486 / 0.035 \approx 42.457$
- $(0.945)^{2/3} \approx 0.963$
- $(0.01)^{1/2} = 0.10$
$$V = 42.457 \cdot 0.963 \cdot 0.10 \approx 4.09\text{ ft/s}$$

Calculate travel time:
$$t_{channel} = \frac{L}{60 \cdot V} = \frac{1200\text{ ft}}{60 \cdot 4.09\text{ ft/s}} = \frac{1200}{245.4} \approx 4.89\text{ minutes}$$

#### Step 4: Total Time of Concentration ($t_c$)
$$t_c = t_{sheet} + t_{shallow} + t_{channel} = 9.80 + 2.32 + 4.89 = 17.01\text{ minutes}$$

---

## Technical Pitfalls
- **Unit mismatch in Manning's kinematic equation:** The resulting travel time is in **hours**. You must multiply by 60 to convert to minutes.
- **Underland flow length limit:** In design problems, sheet flow length should never be set beyond 100 feet unless specified otherwise.
- **Using wrong Manning's n:** Do not use a channel Manning's $n$ (like 0.012 for concrete) in the sheet flow equation for grass, as the resistance in sheet flow is much higher.
