# Modal Split and Person Trips

Modal split (or mode choice) is the third step in the traditional **Four-Step Transportation Planning Process**. It determines the proportion of total person trips that will use each available travel mode (e.g., driving alone, carpooling, taking public transit, bicycling, or walking). On the PE Civil Transportation exam, you must be able to convert between person trips and vehicle trips using **vehicle occupancy factors** and calculate mode shares using **utility functions** and the **Multinomial Logit Model**.

---

## Person Trips vs. Vehicle Trips

A common point of confusion is the difference between person trips and vehicle trips.
- **Person Trip:** A trip made by a single person. If three people share a ride in a single car, they represent **three person trips**.
- **Vehicle Trip:** The physical movement of a single vehicle. That same car trip represents **one vehicle trip**.

### The Conversion Formula:
To find the number of auto vehicle trips from the number of auto person trips, we divide by the average auto occupancy:

$$\text{Vehicle Trips (VT)} = \frac{\text{Person Trips (PT)}_{\text{auto}}}{\text{Average Auto Occupancy (AO)}}$$

Where:
- $\text{Person Trips}_{\text{auto}}$ = total person trips made by automobile
- $\text{Average Auto Occupancy}$ = average number of persons per vehicle (usually ranges from $1.05$ to $1.60$)

---

## Worked Example: Person-to-Vehicle Conversions

**Problem:**  
A regional shopping mall is projected to generate $4,500\text{ person trips}$ during the Saturday peak hour. Planning surveys indicate the following travel characteristics for the site:
- **Transit Share:** $12\%$ of total person trips
- **Pedestrian/Bicycle Share:** $8\%$ of total person trips
- **Auto Share:** The remaining portion of total person trips
- **Average Auto Occupancy (AO):** $1.8\text{ persons/vehicle}$

Calculate:
1. The number of person trips made by automobile.
2. The number of vehicle trips that will enter/exit the mall parking lot.

**Solution:**

**Step 1: Calculate the Auto Mode Share**
$$\text{Auto Share} = 100\% - \text{Transit Share} - \text{Pedestrian/Bicycle Share}$$
$$\text{Auto Share} = 100\% - 12\% - 8\% = 80\% = 0.80$$

**Step 2: Calculate Auto Person Trips**
$$\text{Person Trips}_{\text{auto}} = \text{Total Person Trips} \times \text{Auto Share}$$
$$\text{Person Trips}_{\text{auto}} = 4,500 \times 0.80 = 3,600 \text{ person trips}$$

**Step 3: Convert to Auto Vehicle Trips**
$$\text{Vehicle Trips (VT)} = \frac{\text{Person Trips}_{\text{auto}}}{\text{Average Auto Occupancy}}$$
$$\text{Vehicle Trips (VT)} = \frac{3,600 \text{ person trips}}{1.8 \text{ persons/vehicle}} = 2,000 \text{ vehicle trips}$$

**Conclusion:**  
The mall generates $3,600\text{ auto person trips}$ which translates into $2,000\text{ vehicle trips}$ at the driveways.

---

## Mode Choice Modeling: The Multinomial Logit Model

The most common mathematical tool used to predict mode share is the **Multinomial Logit Model**. It assumes that travelers choose a mode that maximizes their "utility" (satisfaction).

### 1. Utility Function ($U$)
The utility of a mode is typically represented by a linear equation combining travel time, travel cost, and convenience.
$$U_x = a_0 + a_1(X_1) + a_2(X_2) + \dots$$
Where:
- $U_x$ = utility of mode $x$ (usually negative, representing the "disutility" or cost/time penalty of travel)
- $X_1, X_2$ = attributes of the mode (e.g., travel time in minutes, out-of-pocket cost in dollars)
- $a_0, a_1, a_2$ = coefficients determined from regional travel data

### 2. Logit Probability Equation
The probability ($P_m$) of a traveler choosing a specific mode $m$ from a set of available modes is:

$$P_m = \frac{e^{U_m}}{\sum_{i} e^{U_i}}$$

For a simple two-mode choice (e.g., Auto vs. Transit):
$$P_{\text{transit}} = \frac{e^{U_{\text{transit}}}}{e^{U_{\text{transit}}} + e^{U_{\text{auto}}}}$$
$$P_{\text{auto}} = \frac{e^{U_{\text{auto}}}}{e^{U_{\text{transit}}} + e^{U_{\text{auto}}}} = 1 - P_{\text{transit}}$$

---

## Worked Example: Logit Model Calculations

**Problem:**  
Commuters in a corridor choose between driving an automobile ($A$) or taking a bus rapid transit system ($T$). The utility functions for these two modes are:
- $U_A = -0.025 \times (\text{Travel Time in minutes}) - 0.15 \times (\text{Cost in dollars})$
- $U_T = -0.025 \times (\text{Travel Time in minutes}) - 0.15 \times (\text{Cost in dollars}) - 0.50$ (where the $-0.50$ is a mode-specific constant reflecting wait time/inconvenience of transit).

For a typical commuter:
- **Auto:** Travel time = $20 \text{ minutes}$, parking and toll cost = $\$6.00$.
- **Transit:** Travel time = $35 \text{ minutes}$, fare cost = $\$2.00$.

1. Calculate the utility value for each mode.
2. Determine the probability of a commuter choosing transit.
3. If $12,000$ daily commuters travel this corridor, how many transit riders are expected?

**Solution:**

**Step 1: Calculate Utilities ($U_A$ and $U_T$)**
- **Automobile Utility:**
  $$U_A = -0.025(20) - 0.15(6.00) = -0.50 - 0.90 = -1.40$$
- **Transit Utility:**
  $$U_T = -0.025(35) - 0.15(2.00) - 0.50 = -0.875 - 0.30 - 0.50 = -1.675$$

**Step 2: Calculate Probabilities**
Using the Logit equation:
- $e^{U_A} = e^{-1.40} \approx 0.2466$
- $e^{U_T} = e^{-1.675} \approx 0.1873$
$$\text{Denominator} = e^{U_A} + e^{U_T} = 0.2466 + 0.1873 = 0.4339$$

- **Transit Probability ($P_T$):**
  $$P_T = \frac{e^{U_T}}{\text{Denominator}} = \frac{0.1873}{0.4339} \approx 0.4316 \text{ or } 43.16\%$$
- **Auto Probability ($P_A$):**
  $$P_A = \frac{e^{U_A}}{\text{Denominator}} = \frac{0.2466}{0.4339} \approx 0.5684 \text{ or } 56.84\%$$

**Step 3: Calculate Expected Transit Riders**
$$\text{Transit Riders} = \text{Total Commuters} \times P_T$$
$$\text{Transit Riders} = 12,000 \times 0.4316 \approx 5,179 \text{ daily riders}$$

---

## Crucial Pitfalls and Exam Traps

- **Negative Exponents in Logit Math:** Utility values ($U$) are almost always negative because time and cost represent disutilities. When using your calculator, be careful to enter the negative sign: $e^{-1.40}$, not $e^{1.40}$. An exponent error here will ruin the calculation.
- **Conversion Sequencing:** If a question asks for *transit ridership* given total *vehicle trips* and occupancy, make sure you convert vehicle trips to person trips *first*, apply the modal split, and then evaluate the target mode.
- **Applying Occupancy to Transit:** Do not apply the auto occupancy factor to transit passenger counts. Auto occupancy only applies to the automobile mode share.
- **Calculator Efficiency:** Save intermediate $e^U$ values in your calculator's memory registers to prevent rounding propagation errors.
