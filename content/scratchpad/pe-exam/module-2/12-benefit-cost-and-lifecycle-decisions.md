---
title: "Benefit-Cost and Life-Cycle Decisions"
weight: 12
---
# Benefit-Cost and Life-Cycle Decisions

Benefit-Cost (B/C) analysis and Life-Cycle Cost Analysis (LCCA) are decision-making tools used to evaluate public infrastructure projects, such as highway safety treatments, pavement alternatives, and transit systems. These analyses extend basic engineering economics to compare options with different lifespans and balance initial capital costs against ongoing operational benefits and user savings.

---

## Comparing Alternatives with Unequal Service Lives

When evaluating mutually exclusive alternatives (where choosing one eliminates the others) with different lifespans, comparing Net Present Value (NPV) directly over their single lifespans is invalid because it ignores what happens after the shorter project expires.

### 1. Equivalent Uniform Annual Cost (EUAC) Method
The easiest and most common way to compare projects with unequal lives is to convert all costs into an annual equivalent.
- **Rule:** Choose the alternative with the lowest EUAC (or highest positive Annual Worth).
- **No adjustment** to the analysis period is required because the EUAC represents the cost per year of service, assuming the alternative can be renewed at the same cost.

$$EUAC = P(A/P, i, n) + A_{\text{annual}} - F(A/F, i, n)$$

Where:
- $P$ = Initial cost
- $A_{\text{annual}}$ = Annual operations and maintenance (O&M) cost
- $F$ = Salvage value at the end of $n$ years

### 2. Least Common Multiple (LCM) Method
Compare NPVs over a period equal to the Least Common Multiple (LCM) of the service lives.
- *Example:* If comparing Alternative 1 ($n_1 = 6 \text{ years}$) and Alternative 2 ($n_2 = 8 \text{ years}$), evaluate both over an LCM of $24 \text{ years}$.
- Assume each alternative is replaced (reinvested) at its end-of-life at the same initial cost.

### 3. Capitalized Cost ($CC$) Method
Evaluates projects that have an infinite service life (e.g., dams, highways, bridges). Capitalized cost is the present worth of a project that lasts forever.
$$CC = P + \frac{A}{i}$$

For cyclic replacement costs (e.g., replacing pavement every $k$ years at cost $R$):
$$CC = P + \frac{R(A/F, i, k)}{i}$$

---

## Worked Example: Unequal Service Lives (EUAC vs. LCM)

**Problem:**  
A transportation department is evaluating two pavement marking alternatives.
- **Option A (Waterborne Paint):** Initial cost of \$12,000. Service life of 2 years. Annual maintenance cost of \$1,000. Salvage value of \$0.
- **Option B (Thermoplastic):** Initial cost of \$25,000. Service life of 6 years. Annual maintenance cost of \$300. Salvage value of \$2,000.
Using an interest rate of $6\%$, determine which option is the most economical.

**Solution using EUAC:**

**Step 1: Calculate EUAC for Option A ($n = 2$)**
- $P_A = \$12,000$, $A_A = \$1,000$, $F_A = \$0$, $i = 6\%$
- $(A/P, 6\%, 2) = \frac{0.06(1.06)^2}{(1.06)^2 - 1} = 0.5454$
$$EUAC_A = \$12,000(A/P, 6\%, 2) + \$1,000$$
$$EUAC_A = \$12,000(0.5454) + \$1,000 = \$6,544.80 + \$1,000 = \$7,544.80\text{/year}$$

**Step 2: Calculate EUAC for Option B ($n = 6$)**
- $P_B = \$25,000$, $A_B = \$300$, $F_B = \$2,000$, $i = 6\%$
- $(A/P, 6\%, 6) = \frac{0.06(1.06)^6}{(1.06)^6 - 1} = 0.2034$
- $(A/F, 6\%, 6) = \frac{0.06}{(1.06)^6 - 1} = 0.1434$
$$EUAC_B = \$25,000(A/P, 6\%, 6) + \$300 - \$2,000(A/F, 6\%, 6)$$
$$EUAC_B = \$25,000(0.2034) + \$300 - \$2,000(0.1434)$$
$$EUAC_B = \$5,085.00 + \$300 - \$286.80 = \$5,098.20\text{/year}$$

**Conclusion:**  
Option B is more economical because its equivalent annual cost is lower ($EUAC_B = \$5,098.20 < EUAC_A = \$7,544.80$).

---

## Benefit-Cost (B/C) Ratio Analysis

Public projects are often assessed by comparing the benefits to the public (e.g., reduced travel times, fewer accidents) against the costs to the government.

- **Benefits ($B$):** Positive outcomes for the user/public (reduced operating costs, safety improvements).
- **Disbenefits ($D$):** Negative consequences of the project to the public (increased noise, construction delay).
- **Costs ($C$):** Capital costs ($Co$) plus ongoing operations, maintenance, and rehabilitation ($O\&M$).

### 1. Conventional B/C Ratio
Calculated by placing all public benefits in the numerator and all agency costs in the denominator.
$$B/C = \frac{PW(Benefits) - PW(Disbenefits)}{PW(Initial\ Cost) + PW(O\&M)}$$

### 2. Modified B/C Ratio
Places ongoing O&M costs in the numerator as a negative benefit, isolating the initial capital investment in the denominator.
$$B/C_{\text{modified}} = \frac{PW(Benefits) - PW(Disbenefits) - PW(O\&M)}{PW(Initial\ Cost)}$$

**Decision Rule:**  
For a single project to be acceptable, the B/C ratio must be **$\ge 1.0$** (representing $PW(Benefits) \ge PW(Costs)$). Both the conventional and modified methods will yield the same acceptability decision.

---

## Incremental Benefit-Cost Analysis

When selecting from multiple mutually exclusive projects, you **cannot** simply choose the project with the highest B/C ratio. You must perform an **Incremental B/C Analysis ($\Delta B / \Delta C$)**.

### Step-by-Step Protocol:
1. Calculate the individual B/C ratio for each alternative. Discard any alternative with a ratio $< 1.0$.
2. Rank the remaining alternatives in order of **increasing initial cost** (including the "Do-Nothing" alternative if it is an option).
3. Compute the incremental changes in benefits ($\Delta B$) and costs ($\Delta C$) between the lowest-cost option (Alternative 1) and the next cheapest (Alternative 2).
   $$\frac{\Delta B}{\Delta C} = \frac{Benefits_2 - Benefits_1}{Costs_2 - Costs_1}$$
4. Evaluate:
   - If $\frac{\Delta B}{\Delta C} \ge 1.0$: The extra investment is justified. Keep Alternative 2 and discard Alternative 1.
   - If $\frac{\Delta B}{\Delta C} < 1.0$: The extra investment is not justified. Retain Alternative 1 and discard Alternative 2.
5. Repeat the incremental comparison between your currently selected best alternative and the next higher-cost alternative on the list.
6. The last surviving alternative is the optimal economic choice.

---

## Worked Example: Incremental B/C Analysis

**Problem:**  
Four safety project designs are being evaluated for an intersection. Each design has a 10-year service life. The values below are converted to equivalent Present Worth values.

| Alternative | Initial Capital Cost | Present Worth of Benefits | B/C Ratio |
| :---: | :---: | :---: | :---: |
| **Do-Nothing** | \$0 | \$0 | - |
| **A** | \$100,000 | \$180,000 | 1.80 |
| **B** | \$350,000 | \$490,000 | 1.40 |
| **C** | \$200,000 | \$320,000 | 1.60 |
| **D** | \$500,000 | \$610,000 | 1.22 |

Determine which alternative should be selected.

**Solution:**

**Step 1: Check Individual Viability**  
All alternatives have a B/C ratio $\ge 1.0$, so all are viable.

**Step 2: Order by Increasing Capital Cost**
1. Do-Nothing (\$0)
2. Alternative A (\$100,000)
3. Alternative C (\$200,000)
4. Alternative B (\$350,000)
5. Alternative D (\$500,000)

**Step 3: Incremental Comparison: Do-Nothing vs. A**
$$\Delta C = \$100,000 - \$0 = \$100,000$$
$$\Delta B = \$180,000 - \$0 = \$180,000$$
$$\frac{\Delta B}{\Delta C} = \frac{\$180,000}{\$100,000} = 1.80 \ge 1.0 \implies \text{Select A (Discard Do-Nothing)}$$

**Step 4: Incremental Comparison: A vs. C**
$$\Delta C = \$200,000 - \$100,000 = \$100,000$$
$$\Delta B = \$320,000 - \$180,000 = \$140,000$$
$$\frac{\Delta B}{\Delta C} = \frac{\$140,000}{\$100,000} = 1.40 \ge 1.0 \implies \text{Select C (Discard A)}$$

**Step 5: Incremental Comparison: C vs. B**
$$\Delta C = \$350,000 - \$200,000 = \$150,000$$
$$\Delta B = \$490,000 - \$320,000 = \$170,000$$
$$\frac{\Delta B}{\Delta C} = \frac{\$170,000}{\$150,000} = 1.13 \ge 1.0 \implies \text{Select B (Discard C)}$$

**Step 6: Incremental Comparison: B vs. D**
$$\Delta C = \$500,000 - \$350,000 = \$150,000$$
$$\Delta B = \$610,000 - \$490,000 = \$120,000$$
$$\frac{\Delta B}{\Delta C} = \frac{\$120,000}{\$150,000} = 0.80 < 1.0 \implies \text{Keep B (Discard D)}$$

**Conclusion:**  
Select **Alternative B** as the economically optimal design. (Note: Alternative A has the highest individual B/C ratio of 1.80, but Alternative B is the correct choice because the extra investment to move from A to B is fully justified by the incremental benefits).

---

## Crucial Pitfalls and Exam Traps

- **Ratio Selection Trap:** Do not pick the project with the highest B/C ratio. The highest B/C ratio often points to cheap, low-benefit projects. You must use the incremental B/C method.
- **Benefits vs. Costs Placement:** Pay close attention to whether costs are classified as agency costs (denominator) or disbenefits (subtracted in the numerator).
- **Comparing Unequal Lives without Adjustment:** Never compare the Present Worth of two alternatives with different lifespans directly. If lives are unequal, either use the EUAC method or project their cash flows over the LCM.
