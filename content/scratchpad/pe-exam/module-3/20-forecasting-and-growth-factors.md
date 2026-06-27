# Forecasting and Growth Factors

Traffic forecasting estimates future traffic volumes on road facilities, which is essential for determining design requirements (such as the number of lanes or pavement thickness). On the PE Civil Transportation exam, forecasting questions cover two primary categories: projecting traffic into the future using **linear and compound growth models**, and expanding short-term traffic counts into estimated annual averages using **seasonal, daily, and hourly adjustment factors**.

---

## Traffic Growth Models

When projecting current traffic volumes to a future design year (often 20 years in the future), traffic engineers use growth models.

### 1. Linear Growth Model
Assumes traffic increases by a constant, fixed number of vehicles each year.
$$V_f = V_p + (r \times V_{\text{base}} \times n) \quad \text{or} \quad V_f = V_p + n \times I$$

Where:
- $V_f$ = future volume at design year
- $V_p$ = present volume
- $V_{\text{base}}$ = base year volume (often equal to $V_p$)
- $r$ = annual linear growth rate (decimal)
- $n$ = number of years in the forecast period
- $I$ = constant annual volume increase ($\text{vehicles/year}$)

### 2. Compound Growth Model
Assumes traffic increases at a rate proportional to the previous year's volume, similar to compound interest. This is the most common model for fast-growing regions.
$$V_f = V_p \times (1 + r)^n$$

Where:
- $r$ = annual compound growth rate (decimal)

---

## Worked Example: Future Traffic Projections

**Problem:**  
A suburban arterial currently carries $18,500\text{ AADT}$. 
1. Project the AADT in $20\text{ years}$ assuming a linear growth rate of $2.5\%$ per year (based on the current volume).
2. Project the AADT in $20\text{ years}$ assuming a compound growth rate of $2.5\%$ per year.
3. Compare the two results.

**Solution:**

**Step 1: Calculate Linear Projection**
- $V_p = 18,500$
- $r = 0.025$
- $n = 20$
$$V_f = V_p \times (1 + r \times n)$$
$$V_f = 18,500 \times (1 + 0.025 \times 20) = 18,500 \times (1 + 0.50)$$
$$V_f = 18,500 \times 1.50 = 27,750 \text{ AADT}$$

**Step 2: Calculate Compound Projection**
$$V_f = V_p \times (1 + r)^n$$
$$V_f = 18,500 \times (1 + 0.025)^{20} = 18,500 \times (1.025)^{20}$$
$$V_f = 18,500 \times 1.6386 \approx 30,314.4 \text{ AADT}$$

Rounding to the nearest whole vehicle:
$$V_f \approx 30,314 \text{ AADT}$$

**Step 3: Comparison**  
The compound growth model predicts $30,314\text{ AADT}$, which is $2,564\text{ vehicles/day}$ ($9.2\%$) higher than the linear growth model. Over long design periods (e.g., 20+ years), compounding significantly impacts design volumes.

---

## Count Expansion and Adjustment Factors

It is too expensive to count traffic on every street for a full year. Instead, traffic agencies place portable counters for short durations (e.g., 24 or 48 hours) and expand these counts using adjustment factors derived from permanent continuous counters (Automatic Traffic Recorders - ATR).

### Expansion Equation:
$$AADT = \text{Short-Term Count} \times DF \times SF \times HEF$$

*(Note: Depending on how the agency defines the factors, they may be multipliers or divisors. Always check the units and factor definitions. If a factor is defined as $SF = AADT / ADT$, then it is a multiplier. If it is $SF = ADT / AADT$, you must divide by the factor. In the PE exam, they are typically given as multipliers).*

### 1. Hourly Expansion Factor (HEF)
Used to expand a count of less than 24 hours (e.g., a 2-hour peak count) to an equivalent 24-hour volume.
$$HEF = \frac{\text{Total 24-Hour Volume}}{\text{Volume during the counted hours}}$$
$$\text{Estimated 24-Hour Volume} = \text{Short Count} \times HEF$$

### 2. Daily Factor (DF)
Adjusts for variations by day of the week (e.g., weekend traffic is usually lower than weekday traffic on commuter routes).
$$DF = \frac{\text{Average Daily Traffic (ADT) over 7 days}}{\text{Average Traffic on specific day of week}}$$

### 3. Monthly (Seasonal) Factor (SF)
Adjusts for seasonal variations throughout the year (e.g., recreational routes peak in summer, while urban corridors are stable).
$$SF = \frac{\text{Average Annual Daily Traffic (AADT)}}{\text{Average Daily Traffic in month } m}$$

---

## Worked Example: Count Expansion to AADT

**Problem:**  
A 2-hour traffic count is conducted on a local road on a Tuesday in October. 
- **Counted Volume (2:00 PM to 4:00 PM):** $1,200 \text{ vehicles}$
- **Hourly Expansion Factor (HEF) for 2:00 PM to 4:00 PM:** $8.50$
- **Daily Factor (DF) for Tuesday:** $0.95$
- **Monthly Factor (SF) for October:** $1.10$

Calculate the estimated Average Annual Daily Traffic (AADT) for this road.

**Solution:**

**Step 1: Expand the 2-Hour Count to a 24-Hour Daily Volume ($V_{24}$)**  
Using the Hourly Expansion Factor:
$$V_{24} = \text{Count} \times HEF$$
$$V_{24} = 1,200 \text{ vehicles} \times 8.50 = 10,200 \text{ vehicles/day}$$

**Step 2: Adjust for Day-of-Week and Month to Find AADT**  
Apply the daily and monthly factors:
$$AADT = V_{24} \times DF \times SF$$
$$AADT = 10,200 \text{ vehicles/day} \times 0.95 \times 1.10$$
$$AADT = 9,690 \times 1.10 = 10,659 \text{ vehicles/day}$$

Rounding to the nearest ten vehicles (standard convention for daily estimates):
$$AADT \approx 10,660 \text{ vehicles/day}$$

---

## Crucial Pitfalls and Exam Traps

- **Factor Multiplication vs. Division:** Always verify the definition of the factors.
  - If the factor is defined as $\frac{\text{Annual Average}}{\text{Short-term Count}}$, you **multiply** by the factor.
  - If the factor is defined as $\frac{\text{Short-term Count}}{\text{Annual Average}}$, you **divide** by the factor.
- **Linear Growth Base:** In linear growth, verify if the rate $r$ is applied to the *base year* volume ($V_{\text{base}}$) or the *previous year* volume. If it is based on the base year, it is linear. If it is based on the previous year, it is compound.
- **Compounding Math Errors:** In $V_f = V_p(1+r)^n$, make sure to convert the percentage rate to a decimal ($2\% = 0.02$) and calculate the exponent before multiplying: $(1.02)^{20} \approx 1.4859$. Do not calculate $V_p \times 1.02$ and then raise the product to the power of $n$.
- **Aggregating Hourly Factors:** If you are given a table of individual hourly factors (e.g. 7:00-8:00 AM HEF = 12.0; 8:00-9:00 AM HEF = 14.0), you cannot simply add or average these factors to find a multi-hour HEF. You must calculate the multi-hour factor from the raw volumes if provided.
