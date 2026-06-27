# Shared Use Paths

Shared-use paths (often called multi-use paths) are physically separated from motorized vehicle traffic and designed for use by bicyclists, pedestrians, runners, and skaters. Design standards are governed by the AASHTO Guide for the Development of Bicycle Facilities.

---

## Design Width and Lateral Clearances

- **Standard Minimum Width:** **10.0 feet** under normal conditions.
- **Preferred Width (High-Volume):** **12.0 to 14.0 feet** is recommended in areas with heavy mix of pedestrians, runners, and cyclists.
- **Minimum Width (Low-Volume Exceptions):** **8.0 feet** may be used only if:
  - Bicycle traffic is low (under 100 per day).
  - Pedestrian volume is low (under 100 per day).
  - Horizontal and vertical alignment provides good sight distance.
  - Maintenance vehicles can navigate without damaging shoulders.
- **Lateral Clearance:** A minimum **2.0-foot** wide graded shoulder (with a maximum slope of $1:6$) must be maintained on both sides of the path.
- **Vertical Clearance:** A minimum clearance of **8.0 feet** is required (preferred **10.0 feet** to accommodate maintenance and emergency vehicles).

---

## Grade and Cross Slope Standards

Shared-use paths must be accessible to users with disabilities, bringing them under ADA jurisdiction.
- **Maximum Longitudinal Grade:** **5.0%** is the maximum slope allowed for independent alignments. If a path runs parallel to a roadway, its grade may match the highway grade.
- **Maximum Cross Slope:** **2.0%** (typically designed at $1.5\%$ to provide a safety margin under the $2.0\%$ ADA limit) to facilitate drainage.

---

## Stopping Sight Distance ($SSD$) for Bicycles

Stopping sight distance for a bicyclist is calculated using a formulation similar to that for motor vehicles, adjusted for bicycle speeds, reaction times, and braking characteristics.

### Governing Equation (AASHTO Bike Guide):
$$S = \frac{V^2}{30 \cdot (f \pm G)} + 1.47 \cdot V \cdot t$$

Where:
- $S$ = Stopping sight distance (**feet**)
- $V$ = Bicycle design speed (**mph**; typically $15\text{ mph}$ on flat terrain, up to $30\text{ mph}$ on downgrades $\ge 4\%$).
- $t$ = Bicyclist perception-reaction time (**2.0 seconds**).
- $f$ = Coefficient of friction (deceleration factor; standard is **0.16** for clean, wet pavement).
- $G$ = Longitudinal grade (**ft/ft**; positive for upgrades, negative for downgrades).

---

## Worked Example: Stopping Sight Distance on a Downgrade

A shared-use path is being designed on an independent alignment with a segment constructed on a continuous $4.0\%$ downgrade ($G = -0.04\text{ ft/ft}$).
- The design speed for cyclists on this segment is determined to be $20\text{ mph}$.
- Bicyclist perception-reaction time is $2.0\text{ seconds}$.
- The coefficient of friction is assumed to be $f = 0.16$.

**Calculate the required stopping sight distance ($S$) for a bicyclist traveling down the slope.**

### Solution:
1. **Identify the variables:**
   - Speed $V = 20\text{ mph}$
   - Time $t = 2.0\text{ seconds}$
   - Friction $f = 0.16$
   - Grade $G = -0.04$ (negative because it is a downgrade)

2. **Apply the AASHTO Bike SSD Equation:**
   $$S = \frac{V^2}{30 \cdot (f + G)} + 1.47 \cdot V \cdot t$$
   *Note: Since it is a downgrade, we add the negative grade ($f - G$):*
   $$S = \frac{20^2}{30 \cdot (0.16 - 0.04)} + (1.47 \cdot 20 \cdot 2.0)$$
   
3. **Evaluate the terms:**
   - **Braking Distance:**
     $$\text{Braking Distance} = \frac{400}{30 \cdot 0.12} = \frac{400}{3.6} \approx 111.1\text{ feet}$$
   - **Perception-Reaction Distance:**
     $$\text{Reaction Distance} = 1.47 \cdot 20 \cdot 2.0 = 58.8\text{ feet}$$

4. **Sum the components:**
   $$S = 111.1 + 58.8 = 169.9\text{ feet}$$

*Result:* The minimum required stopping sight distance for this downgrade segment is **170 feet**.

---

## Technical Pitfalls
- **Grade Sign (+/-):** Remember that a downgrade *increases* stopping distance (subtract $G$ from $f$ in the denominator, e.g. $0.16 - 0.04 = 0.12$), whereas an upgrade *decreases* stopping distance (add $G$, e.g. $0.16 + 0.04 = 0.20$).
- **Perception-Reaction Time Difference:** For vehicles, the default AASHTO perception-reaction time is $2.5\text{ seconds}$. For bicycles, the AASHTO default is **2.0 seconds**. Do not mix these up on the exam.
- **Minimum Width exceptions:** Do not select an 8.0-foot path width for a standard design problem unless all specific low-volume, high-visibility exception criteria are explicitly met in the problem statement. The default standard is **10.0 feet**.
