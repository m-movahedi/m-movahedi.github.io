---
title: "Trip Generation and Land Use"
weight: 17
date : "2026-05-04"
draft : false
type : "post"
---
# Trip Generation and Land Use

Trip generation is the first step in the traditional **Four-Step Transportation Planning Process** (Trip Generation, Trip Distribution, Mode Split, and Route Assignment). It estimates the number of trips beginning (productions) or ending (attractions) in a specific land use zone. On the PE Civil Transportation exam, you must know how to use trip-generation rates and regression equations, and how to adjust these totals for **pass-by trips**, **diverted trips**, and **internal capture**.

---

## The Four-Step Transportation Planning Model

Before diving into trip generation, understand its place in regional traffic planning:
1. **Trip Generation:** How many trips are produced by or attracted to a zone? (Outputs: Productions and Attractions).
2. **Trip Distribution:** Where do these trips go? (Link productions to attractions; outputs a zone-to-zone Origin-Destination matrix, often using the Gravity Model).
3. **Mode Split (Modal Split):** What travel mode is used for these trips? (Outputs trips by auto, transit, walking, etc.).
4. **Traffic Assignment (Route Assignment):** What specific routes do the trips take? (Assigns vehicle trips to the roadway network).

---

## Trip Generation Variables and Methods

Trip generation utilizes data from the Institute of Transportation Engineers (ITE) *Trip Generation Manual*. Calculations are based on an **independent variable ($X$)** representing the intensity of the land use:
- **Residential:** Number of dwelling units ($DU$).
- **Commercial/Office:** Gross Floor Area ($GFA$) or Gross Leasable Area ($GLA$), typically in units of **$1,000 \text{ sq ft}$**.
- **Special Generator (Hotel/Hospital):** Number of rooms or beds.

### Calculation Methods:
The ITE manual provides two methods for estimating trips ($T$):

#### 1. Average Rate Method
Assumes a constant linear relationship between the independent variable and trip generation.
$$T = r \times X$$
- **Use:** Recommended when the relationship is highly linear, the sample size is small, or the standard deviation of the rate is low.

#### 2. Fitted Curve (Regression) Method
Uses non-linear or linear regression equations to model the dataset.
$$T = a \times X + b \quad \text{or} \quad T = a \times X^b \quad \text{or} \quad \ln(T) = a \ln(X) + b$$
- **Use:** Recommended when a strong non-linear trend exists (e.g., economies of scale where larger developments generate fewer trips per unit area than smaller ones) and the coefficient of determination $R^2 \ge 0.75$.

---

## Worked Example: Average Rate vs. Fitted Curve

**Problem:**  
A developer proposes building a $150,000\text{ sq ft}$ shopping center. The ITE data for this land use category lists the following statistics for the PM Peak Hour:
- **Average Trip Generation Rate:** $3.80 \text{ trips per } 1,000\text{ sq ft of GFA}$
- **Fitted Curve Equation:** $T = 12.50 \times (GFA)^{0.65}$ (where $GFA$ is in $1,000\text{ sq ft}$)

1. Calculate the estimated PM peak hour trips using the Average Rate Method.
2. Calculate the estimated PM peak hour trips using the Fitted Curve Method.
3. Compare and discuss the results.

**Solution:**

**Step 1: Identify the Independent Variable ($X$)**
The independent variable is GFA in units of $1,000\text{ sq ft}$:
$$X = \frac{150,000\text{ sq ft}}{1,000} = 150 \text{ units}$$

**Step 2: Calculate Trips using the Average Rate Method**
$$T = r \times X$$
$$T = 3.80 \times 150 = 570 \text{ trips}$$

**Step 3: Calculate Trips using the Fitted Curve Method**
$$T = 12.50 \times (X)^{0.65}$$
$$T = 12.50 \times (150)^{0.65} = 12.50 \times 26.04 \approx 325.5 \text{ trips}$$
Rounding to the nearest whole vehicle:
$$T \approx 326 \text{ trips}$$

**Step 4: Comparison**  
The Fitted Curve method yields $326$ trips, which is significantly lower than the $570$ trips predicted by the Average Rate method. In large developments, the fitted curve is generally more accurate because trip generation efficiency increases with size (i.e., people make multi-purpose stops within a larger shopping center).

---

## Trip Type Adjustments

When a new development opens, the trips entering its driveways are not all "new" trips on the surrounding roadway network. We must classify trips to avoid double-counting.

<div class="diagram-card">
  <div class="diagram-header">
    <div class="diagram-title">
      <span class="diagram-indicator"></span>
      <span>Transportation Network Trip Classifications</span>
    </div>
    <p class="diagram-caption">
      Trip classification geometry for site impact studies. Primary trips add net new vehicular load to the external highway network. Pass-by trips pull from existing background traffic, adding driveway turning movements without increasing total link volumes.
    </p>
  </div>
  <div class="diagram-svg-wrap">
    <svg viewBox="0 0 680 210" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <marker id="arrow-trip" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#6366f1"/>
        </marker>
        <marker id="arrow-amber" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#f59e0b"/>
        </marker>
        <marker id="arrow-green-trip" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#10b981"/>
        </marker>
      </defs>
      <!-- Highway Roadway Corridor -->
      <rect x="20" y="20" width="640" height="50" rx="4" fill="rgba(255, 255, 255, 0.03)" stroke="rgba(255, 255, 255, 0.12)" stroke-width="1.5"/>
      <line x1="20" y1="45" x2="660" y2="45" stroke="#94a3b8" stroke-width="1.2" stroke-dasharray="8 6" opacity="0.4"/>
      <text x="50" y="38" fill="currentColor" opacity="0.8" font-size="12" font-weight="700" font-family="system-ui, sans-serif">Main Highway (Through Traffic Stream)</text>
      <!-- Site Development Area -->
      <rect x="160" y="125" width="360" height="70" rx="8" fill="rgba(2, 132, 199, 0.08)" stroke="#0284c7" stroke-width="1.8"/>
      <text x="340" y="153" fill="#0284c7" font-size="14" font-weight="800" font-family="system-ui, sans-serif" text-anchor="middle">New Commercial / Mixed-Use Development</text>
      <text x="340" y="173" fill="currentColor" opacity="0.75" font-size="11" font-family="system-ui, sans-serif" text-anchor="middle">Shopping Center &amp; Residential Pods</text>
      <!-- Trip Trajectory 1: Primary Trip (Net New) -->
      <path d="M 90 70 L 90 145 L 160 145" stroke="#10b981" stroke-width="2.2" fill="none" marker-end="url(#arrow-green-trip)"/>
      <text x="80" y="112" fill="#10b981" font-size="11" font-weight="700" font-family="system-ui, sans-serif" text-anchor="end">Primary Trip (Net New)</text>
      <!-- Trip Trajectory 2: Pass-By Trip -->
      <path d="M 230 45 C 230 90 280 120 300 125" stroke="#f59e0b" stroke-width="2.2" fill="none" marker-end="url(#arrow-amber)"/>
      <path d="M 380 125 C 400 120 450 90 450 45" stroke="#f59e0b" stroke-width="2.2" fill="none" marker-end="url(#arrow-amber)"/>
      <text x="340" y="105" fill="#f59e0b" font-size="11" font-weight="700" font-family="system-ui, sans-serif" text-anchor="middle">Pass-By Diversion (Turn In &amp; Out)</text>
      <!-- Trip Trajectory 3: Internal Capture -->
      <path d="M 460 178 C 490 188 500 162 485 145" stroke="#ec4899" stroke-width="2" stroke-dasharray="4 2" fill="none" marker-end="url(#arrow-trip)"/>
      <text x="530" y="165" fill="#ec4899" font-size="10" font-weight="700" font-family="system-ui, sans-serif">Internal Capture</text>
    </svg>
  </div>
  <div class="diagram-badges">
    <div class="diagram-badge" style="border-left: 3px solid #10b981;">
      <strong>Primary Trips (100% Impact)</strong>
      <p>Vehicles whose sole destination is this site. Adds load to highways and driveways.</p>
    </div>
    <div class="diagram-badge" style="border-left: 3px solid #f59e0b;">
      <strong>Pass-By Trips (Driveway Only)</strong>
      <p>Intermediate stop from traffic already on the road. Impacts driveways, but not regional highway links.</p>
    </div>
    <div class="diagram-badge" style="border-left: 3px solid #ec4899;">
      <strong>Internal Capture</strong>
      <p>Multi-use site trips (e.g. resident walks to grocer) that never access public highways.</p>
    </div>
  </div>
</div>


### 1. Primary Trips
Trips made for the specific, single purpose of visiting the site. These are **net new trips** added to the regional road network.

### 2. Pass-By Trips
Trips made as intermediate stops from traffic already traveling on the adjacent street. 
- *Impact:* Pass-by trips **do not** add new traffic to the surrounding network, but they **do** add traffic to the site's driveways and turning lanes.
- *Example:* A driver stopping at a gas station on their commute home.

### 3. Diverted Link Trips
Trips attracted to the site from nearby streets, requiring a route change but not adding new trips to the regional system as a whole.

### 4. Internal Capture (Mixed-Use Sites)
Trips made between different land uses within a single, multi-use site (e.g., a person walking from their residential condo to the on-site grocery store).
- *Impact:* These trips stay inside the development and never enter the external public street system.

### Net New Trips Formula:
$$\text{Net New Trips} = \text{Total Generated Trips} \times (1 - \text{Internal Capture Rate}) \times (1 - \text{Pass-by Trip Rate})$$

---

## Worked Example: Calculating Net New Trips

**Problem:**  
A mixed-use development generates $850 \text{ PM peak hour trips}$ (combined inbound and outbound) at its driveways. Traffic engineering studies estimate:
- **Internal Capture Rate:** $15\%$
- **Pass-By Trip Rate:** $30\%$ of the external trips

Calculate:
1. The number of internal trips.
2. The number of external trips entering the public road network.
3. The number of net new trips added to the surrounding highway network.

**Solution:**

**Step 1: Calculate Internal Trips**
$$\text{Internal Trips} = \text{Total Trips} \times \text{Internal Capture Rate}$$
$$\text{Internal Trips} = 850 \times 0.15 = 127.5 \approx 128 \text{ trips}$$

**Step 2: Calculate External Trips**
$$\text{External Trips} = \text{Total Trips} - \text{Internal Trips}$$
$$\text{External Trips} = 850 - 127.5 = 722.5 \approx 723 \text{ trips}$$

**Step 3: Calculate Net New Trips (Subtracting Pass-By Trips)**  
Pass-by trips are already on the highway network. They enter the site and leave, but do not represent new regional traffic.
$$\text{Net New Trips} = \text{External Trips} \times (1 - \text{Pass-by Rate})$$
$$\text{Net New Trips} = 722.5 \times (1 - 0.30) = 722.5 \times 0.70 = 505.75 \text{ trips}$$
Rounding to the nearest whole vehicle:
$$\text{Net New Trips} \approx 506 \text{ trips}$$

---

## Crucial Pitfalls and Exam Traps

- **Unit Scale Trap:** The independent variable in ITE equations is often scaled (e.g., $1,000 \text{ sq ft}$ of Gross Leasable Area). If a building is $45,000 \text{ sq ft}$, you must plug $X = 45$ into the equation, not $45,000$. Plentiful wrong answers on the PE exam will match the factor-of-1,000 error.
- **Applying Pass-by to Driveway Design:** Never subtract pass-by trips when designing the width or capacity of the site's driveways or turn lanes. The driveways must handle every single vehicle entering and exiting, regardless of whether it is a primary, pass-by, or diverted trip. Pass-by trips are only subtracted when evaluating the capacity of the *surrounding* highway intersections.
- **Logarithmic Equations:** Some fitted curves use natural logarithms (e.g., $\ln(T) = a \ln(X) + b$). When solving, remember to use the exponential function $e^x$ to solve for $T$: $T = e^{a \ln(X) + b}$.
- **Inbound vs. Outbound Split:** Check if the question asks for *total* trips, *inbound* trips, or *outbound* trips. ITE provides directional splits (e.g., $60\%$ entering, $40\%$ exiting).
