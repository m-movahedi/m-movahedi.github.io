---
title: "Safety Countermeasure Selection and Economic Evaluation"
weight: 36
---
# Safety Countermeasure Selection and Economic Evaluation

The final step in traffic safety engineering is selecting and economically evaluating safety countermeasures. The goal is to identify treatments that address diagnosed crash patterns (e.g., from collision diagrams or conflict analysis) and determine if they are economically viable.

On the NCEES PE Civil Transportation exam, this topic is tested through qualitative countermeasure matching and quantitative economic evaluations, including Benefit-Cost ($B/C$) ratios and Net Present Value (NPV) calculations.

---

## Safety Countermeasure Selection

Countermeasures should target the specific crash patterns identified at a site. General safety treatments include:

### 1. Intersection Countermeasures
* **Protected Left-Turn Phase**: Installs a dedicated left-turn green arrow to eliminate conflicts between left-turning vehicles and opposing through-traffic. Highly effective for left-turn angle crashes.
* **Retroreflective Signal Backplates**: Adds a yellow reflective border to signal heads, making them more visible to drivers, especially at night. Highly effective for rear-end crashes.
* **Clearing Sight Triangles**: Removes trees, signs, or structures in the corners of an intersection. Effective for angle crashes at stop-controlled intersections.
* **Roundabout Conversion**: Converts a stop-controlled or signalized intersection to a roundabout. Eliminates crossing conflicts, reducing injury crashes by $70 - 80\%$.

### 2. Roadway and Curve Countermeasures
* **Rumble Strips**: Raised or grooved patterns on the pavement:
  * *Centerline rumble strips* reduce head-on and crossover crashes.
  * *Shoulder rumble strips* reduce run-off-road crashes.
* **Chevron Alignment Signs (W1-8)**: Visual markers installed on curves to delineate the alignment. Effective for run-off-road crashes on horizontal curves.
* **High-Friction Surface Treatment (HFST)**: Applies a high-durability aggregate to the pavement surface to improve skid resistance. Highly effective for wet-weather crashes.

---

## Economic Evaluation of Safety Projects

A safety project is evaluated by comparing its annual safety benefit (monetary savings from crash reduction) to its annualized cost.

### 1. Annual Safety Benefit ($B$)
Using Crash Modification Factors (CMFs) and average societal crash costs:

$$B = \sum \left( N_{\text{observed, } s} \times \left(1 - \text{CMF}_s\right) \times \text{Cost}_s \right)$$

Where:
* $s$ = crash severity level (Fatal/Injury, Property Damage Only)
* $\text{Cost}_s$ = average societal cost per crash for severity level $s$ (established by USDOT or local DOTs)
* $N_{\text{observed, } s}$ = annual observed crashes of severity $s$

### 2. Annualized Project Cost ($C$)
The initial capital cost of the countermeasure ($P$) must be annualized over the project's service life ($n$, in years) using the interest rate ($i$) and the **Capital Recovery Factor ($A/P, i, n$)**:

$$A = P \times \left[ \frac{i(1+i)^n}{(1+i)^n - 1} \right] = P \times (A/P, i, n)$$

The total annual cost ($C$) is the sum of the annualized capital cost and any annual maintenance costs ($M$) minus the annualized salvage value ($S$), if any:

$$C = A + M - S \times (A/F, i, n)$$
*(where $(A/F, i, n) = \frac{i}{(1+i)^n - 1}$ is the Sinking Fund Factor).*

### 3. Benefit-Cost Ratio ($B/C$)
A countermeasure is economically viable if the $B/C$ ratio is greater than or equal to $1.0$:

$$\text{B/C Ratio} = \frac{B}{C}$$

* **$B/C \ge 1.0$**: The project is economically justified (benefits exceed costs).
* **$B/C < 1.0$**: The project is not economically justified.

---

## Critical Pitfalls and Exam Traps

1. **Confusing Capital Recovery and Crash Reduction Factors (CRFs)**:
   This is a major source of confusion:
   * **Crash Reduction Factor (CRF)** is a safety term: $\text{CRF} = 1 - \text{CMF}$.
   * **Capital Recovery Factor (CRF)** is an economics term: $(A/P, i, n) = \frac{i(1+i)^n}{(1+i)^n - 1}$.
   Make sure you know which factor the problem is referencing based on the context.

2. **Forgetting Annual Maintenance Costs**:
   The total annual cost ($C$) is the sum of the annualized capital cost ($A$) and the annual maintenance cost ($M$). A common mistake is omitting $M$ or applying the Capital Recovery Factor to the maintenance cost. Maintenance costs are already annual and do not need to be multiplied by $(A/P, i, n)$.

3. **Applying CMFs to Total Crashes instead of Specific Severities**:
   If the problem provides separate CMFs and costs for Fatal/Injury (FI) and Property Damage Only (PDO) crashes, you must calculate the benefits for each severity separately and then sum them. Applying a combined average cost to the total crash reduction is less accurate and will lead to an incorrect answer if separate severities are requested.

---

## Worked Example

A city plans to convert an intersection experiencing high crash rates into a modern single-lane roundabout. The intersection experiences an average of $6.0 \text{ fatal/injury (FI) crashes/year}$ and $10.0 \text{ Property Damage Only (PDO) crashes/year}$. 

Roundabout conversion has the following CMFs:
* $\text{CMF}_{\text{FI}} = 0.25$
* $\text{CMF}_{\text{PDO}} = 0.60$

Societal costs per crash:
* Fatal/Injury crash: $\$150,000$
* Property Damage Only crash: $\$8,000$

Project financial data:
* Initial capital cost ($P$): $\$450,000$
* Annual maintenance cost ($M$): $\$5,000$
* Project service life ($n$): $20 \text{ years}$
* Interest rate ($i$): $4\%$ per year ($0.04$)
* Salvage value ($S$): $\$0$

**Calculate the Benefit-Cost ($B/C$) ratio of the project.**

### Solution:

#### Step 1: Calculate the Annual Safety Benefit ($B$)
1. **Injury crash reduction**:
   $$\Delta N_{\text{FI}} = N_{\text{observed, FI}} \times (1 - \text{CMF}_{\text{FI}}) = 6.0 \times (1 - 0.25) = 4.5 \text{ crashes/year}$$
   $$\text{Benefit}_{\text{FI}} = 4.5 \times \$150,000 = \$675,000/year$$
2. **PDO crash reduction**:
   $$\Delta N_{\text{PDO}} = N_{\text{observed, PDO}} \times (1 - \text{CMF}_{\text{PDO}}) = 10.0 \times (1 - 0.60) = 4.0 \text{ crashes/year}$$
   $$\text{Benefit}_{\text{PDO}} = 4.0 \times \$8,000 = \$32,000/year$$
3. **Total Annual Benefit ($B$)**:
   $$B = \$675,000 + \$32,000 = \$707,000/year$$

#### Step 2: Calculate the Annualized Project Cost ($C$)
1. **Calculate the Capital Recovery Factor ($A/P, 4\%, 20$)**:
   $$(A/P, 4\%, 20) = \frac{i(1+i)^n}{(1+i)^n - 1} = \frac{0.04(1.04)^{20}}{(1.04)^{20} - 1}$$
   * $(1.04)^{20} = 2.1911$
   * $(A/P, 4\%, 20) = \frac{0.04 \times 2.1911}{2.1911 - 1} = \frac{0.0876}{1.1911} = 0.0736$
2. **Annualize the initial capital cost**:
   $$A = P \times (A/P, 4\%, 20) = \$450,000 \times 0.0736 = \$33,120/year$$
3. **Calculate total annual cost ($C$)**:
   $$C = A + M = \$33,120 + \$5,000 = \$38,120/year$$

#### Step 3: Calculate the Benefit-Cost ($B/C$) Ratio
$$\text{B/C Ratio} = \frac{B}{C} = \frac{\$707,000}{\$38,120} = 18.55$$

**Conclusion:** The Benefit-Cost ratio is $18.55$. Since $18.55 \ge 1.0$, the roundabout conversion is highly justified economically.

---

## References and Standards
* *NCEES PE Civil Reference Handbook*, Section 1.3 (Engineering Economics) and Section 6.3 (Traffic Safety).
* *Highway Safety Manual (HSM) 1st Edition*, Chapter 7 (Economic Appraisal).
