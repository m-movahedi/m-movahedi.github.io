# Storm Sewer Hydraulics

Storm sewer hydraulics deals with the design and analysis of gravity-flow pipe systems. Because storm sewers typically flow under gravity (except when surcharged), they are analyzed as open channels using Manning's equation.

---

## Full-Flow Pipe Geometry and Manning's Equation

For a circular pipe of diameter $D$ (in feet) flowing completely full under gravity (not under pressure):

### Area ($A_{full}$):
$$A_{full} = \frac{\pi D^2}{4}$$

### Wetted Perimeter ($P_{full}$):
$$P_{full} = \pi D$$

### Hydraulic Radius ($R_{full}$):
$$R_{full} = \frac{A_{full}}{P_{full}} = \frac{D}{4}$$

### Full Flow Discharge ($Q_{full}$) in USCS Units:
$$Q_{full} = \frac{1.486}{n} A_{full} R_{full}^{2/3} S^{1/2} = \frac{0.463}{n} D^{8/3} S^{1/2}$$

### Full Flow Velocity ($V_{full}$) in USCS Units:
$$V_{full} = \frac{1.486}{n} R_{full}^{2/3} S^{1/2} = \frac{0.590}{n} D^{2/3} S^{1/2}$$

Where:
- $D$ = Pipe diameter (**feet**)
- $S$ = Pipe slope (**ft/ft**)
- $n$ = Manning's roughness coefficient (concrete = 0.012, corrugated metal = 0.024, PVC = 0.009 to 0.011)

---

## Partially Full Flow Hydraulics

Most storm sewers are designed to flow partially full. NCEES uses a standard Hydraulic Elements chart (or table) relating depth ratio ($y/D$) to hydraulic property ratios.

Let $y$ represent the actual depth of flow in the pipe:
- **Depth Ratio:** $d_{ratio} = y/D$
- **Area Ratio:** $A/A_{full}$
- **Wetted Perimeter Ratio:** $P_w/P_{full}$
- **Hydraulic Radius Ratio:** $R/R_{full}$
- **Velocity Ratio:** $V/V_{full}$
- **Discharge Ratio:** $Q/Q_{full}$

### Key Features of the Hydraulic Elements Graph:
- **Maximum Velocity:** Occurs at a depth ratio $y/D \approx 0.81$, where $V \approx 1.14 \cdot V_{full}$.
- **Maximum Discharge:** Occurs at a depth ratio $y/D \approx 0.94$, where $Q \approx 1.07 \cdot Q_{full}$ (due to the rapid decrease in hydraulic radius as the pipe fills and wetted perimeter increases faster than area).

---

## Design Velocity Constraints

To ensure storm sewers remain operational and do not deteriorate:
- **Minimum Velocity (Self-Cleansing Velocity):** A minimum velocity of **2.0 ft/s** is required during the design storm to keep sediments suspended and prevent clogging.
- **Maximum Velocity (Erosion Limit):** A maximum velocity of **15.0 ft/s** (for concrete pipes; lower for softer pipe materials) is recommended to prevent abrasive wear and erosion of the pipe wall.

---

## Worked Example: Design Capacity and Surcharge Check

A 24-inch concrete storm sewer pipe ($n = 0.012$) is laid on a $0.50\%$ slope ($S = 0.005\text{ ft/ft}$). During a design storm event, the hydrologic analysis indicates a peak flow rate of $9.5\text{ cfs}$ must be carried.

**1. Calculate the full-flow capacity ($Q_{full}$) and velocity ($V_{full}$) of the pipe.**
**2. Determine whether the pipe is surcharged (under pressure) or flowing under gravity, and find the actual depth ($y$) and velocity ($V$) of flow.**

### Solution:

#### Step 1: Convert units and calculate full-flow properties
- Diameter $D = 24\text{ inches} = 2.0\text{ feet}$
- Slope $S = 0.005\text{ ft/ft}$
- $n = 0.012$

Calculate $Q_{full}$:
$$Q_{full} = \frac{0.463}{n} D^{8/3} S^{1/2}$$
$$Q_{full} = \frac{0.463}{0.012} (2.0)^{8/3} (0.005)^{1/2}$$
- $(2.0)^{8/3} \approx 6.3496$
- $(0.005)^{1/2} \approx 0.07071$
$$Q_{full} = 38.583 \cdot 6.3496 \cdot 0.07071 \approx 17.32\text{ cfs}$$

Calculate $V_{full}$:
$$V_{full} = \frac{0.590}{n} D^{2/3} S^{1/2}$$
$$V_{full} = \frac{0.590}{0.012} (2.0)^{2/3} (0.005)^{1/2}$$
- $(2.0)^{2/3} \approx 1.5874$
$$V_{full} = 49.167 \cdot 1.5874 \cdot 0.07071 \approx 5.52\text{ ft/s}$$

#### Step 2: Determine actual flow conditions
Since the peak design flow rate ($Q = 9.5\text{ cfs}$) is less than the full capacity ($Q_{full} = 17.32\text{ cfs}$), the pipe is **flowing under gravity** and is not surcharged.

Calculate the discharge ratio:
$$\frac{Q}{Q_{full}} = \frac{9.5}{17.32} \approx 0.548$$

#### Step 3: Use Hydraulic Elements relations (or graph) to find depth and velocity
For a discharge ratio $Q/Q_{full} \approx 0.548$, we refer to standard hydraulic elements relations for circular pipes (often read from the NCEES chart):
- A discharge ratio of $0.548$ corresponds to a depth ratio:
  $$\frac{y}{D} \approx 0.53$$
- The corresponding velocity ratio at this depth ratio is:
  $$\frac{V}{V_{full}} \approx 1.02$$

Calculate depth ($y$):
$$y = 0.53 \cdot D = 0.53 \cdot 2.0\text{ ft} = 1.06\text{ feet} = 12.7\text{ inches}$$

Calculate velocity ($V$):
$$V = 1.02 \cdot V_{full} = 1.02 \cdot 5.52\text{ ft/s} = 5.63\text{ ft/s}$$

*Check:* The velocity $5.63\text{ ft/s}$ is within the safe range ($2.0\text{ ft/s} \le V \le 15.0\text{ ft/s}$).

---

## Technical Pitfalls
- **Diameter Units:** Remember to convert the diameter from inches to **feet** before using the USCS Manning's full-flow formula.
- **Slope Units:** Ensure the slope is in ft/ft (e.g., $1\% = 0.01$, $0.5\% = 0.005$).
- **Discharge vs Velocity curves:** Remember that the velocity ratio and discharge ratio curves are different on the Hydraulic Elements chart. For $y/D = 0.53$, the discharge ratio is $0.55$, but the velocity ratio is $1.02$. Don't mix up the curves.
