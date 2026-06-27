---
title: "Crash Modification Factors"
weight: 34
---
# Crash Modification Factors

A Crash Modification Factor (CMF) is a multiplicative factor used to compute the expected number of crashes after implementing a specific countermeasure at a transportation facility. A CMF represents the relative change in crash frequency compared to a baseline condition.

The NCEES PE Civil Transportation exam frequently tests CMF and Crash Reduction Factor (CRF) calculations, including multi-CMF combinations and safety benefit assessments.

---

## CMF vs. CRF

While a CMF represents the multiplier for expected crashes, the Crash Reduction Factor (CRF) represents the percentage reduction in crashes:

$$\text{CRF} = 1 - \text{CMF}$$
$$\text{CRF} (\%) = (1 - \text{CMF}) \times 100\%$$

* **CMF < 1.0**: Indicates the countermeasure is expected to **decrease** crashes. For example, a CMF of $0.80$ corresponds to a CRF of $20\%$ (crashes decrease by $20\%$).
* **CMF = 1.0**: Indicates the countermeasure has **no effect** on safety.
* **CMF > 1.0**: Indicates the countermeasure is expected to **increase** crashes. For example, a CMF of $1.15$ corresponds to a CRF of $-15\%$ (crashes increase by $15\%$).

---

## Single CMF Application

To find the expected crash frequency after implementing a safety treatment:

$$N_{\text{expected, treated}} = N_{\text{observed, untreated}} \times \text{CMF}$$

Where:
* $N_{\text{expected, treated}}$ = expected annual crash frequency after treatment
* $N_{\text{observed, untreated}}$ = baseline (observed) annual crash frequency before treatment
* $\text{CMF}$ = Crash Modification Factor for the treatment

---

## Combining Multiple CMFs

When multiple independent safety countermeasures are implemented at a single location, their cumulative effect is estimated by multiplying the individual CMFs:

$$\text{CMF}_{\text{combined}} = \text{CMF}_1 \times \text{CMF}_2 \times \dots \times \text{CMF}_n$$

The expected crash frequency after implementing all treatments is:
$$N_{\text{expected, treated}} = N_{\text{observed, untreated}} \times \text{CMF}_{\text{combined}}$$

### HSM Caveat on Combining CMFs
Multiplying CMFs assumes that the effects of the countermeasures are completely independent. In reality, implementing multiple treatments at the same site often leads to diminishing returns. Overestimating crash reduction is a common error. However, for the NCEES PE exam, direct multiplication is the standard method unless the problem specifies an adjustment factor.

---

## Safety Benefit Assessment (Monetary Value)

To evaluate the economic viability of a countermeasure, we calculate the annual monetary benefit from crash reduction:

1. **Calculate the Annual Crash Reduction ($\Delta N$)**:
   $$\Delta N = N_{\text{observed}} \times \left(1 - \text{CMF}_{\text{combined}}\right) = N_{\text{observed}} \times \text{CRF}_{\text{combined}}$$
2. **Apply Unit Crash Costs by Severity**:
   If crash data is split by severity (e.g., Fatal/Injury vs. Property Damage Only), calculate the reduction for each category separately:
   $$\Delta N_{\text{FI}} = N_{\text{FI}} \times \left(1 - \text{CMF}_{\text{FI}}\right)$$
   $$\Delta N_{\text{PDO}} = N_{\text{PDO}} \times \left(1 - \text{CMF}_{\text{PDO}}\right)$$
3. **Calculate the Annual Benefit ($B$)**:
   $$\text{Annual Benefit (B)} = \left(\Delta N_{\text{FI}} \times \text{Cost}_{\text{FI}}\right) + \left(\Delta N_{\text{PDO}} \times \text{Cost}_{\text{PDO}}\right)$$

This annual benefit can then be compared to the annualized cost of the countermeasures to perform a Benefit-Cost ($B/C$) analysis.

---

## Critical Pitfalls and Exam Traps

1. **Adding CRFs instead of Multiplying CMFs**:
   If Countermeasure A has a CRF of $30\%$ ($\text{CMF} = 0.70$) and Countermeasure B has a CRF of $20\%$ ($\text{CMF} = 0.80$), a common trap is adding the CRFs to get a $50\%$ reduction. This is mathematically incorrect. You must convert to CMFs, multiply them, and then convert back to CRF:
   $$\text{CMF}_{\text{combined}} = 0.70 \times 0.80 = 0.56$$
   $$\text{CRF}_{\text{combined}} = 1 - 0.56 = 0.44 \text{ or } 44\% \text{ (not 50%)}$$

2. **Applying a CMF to the Wrong Crash Type**:
   CMFs are often specific to certain crash types or severities. For example, "installing center rumble strips" might have a CMF of $0.60$ for head-on crashes, but a CMF of $1.00$ for rear-end crashes. Ensure you only apply the CMF to the crash subset it is designed for. Do not multiply the *total* crash count by a CMF that only applies to run-off-road crashes.

3. **Timeframe Mismatches**:
   Ensure crash counts and cost benefits are on the same time scale (usually annual). If a problem gives you $45$ crashes over $3$ years, the annual baseline is $N = 45 / 3 = 15 \text{ crashes/year}$. Applying CMFs directly to the 3-year total without converting to an annual rate can lead to errors in annual cost-benefit calculations.

---

## Worked Examples

### Worked Example 1: Multi-CMF Application
A high-crash roadway segment experiences an average of $24.0 \text{ run-off-road crashes/year}$. The agency plans to implement two safety treatments:
* Countermeasure 1: Install shoulder rumble strips ($\text{CMF}_1 = 0.85$ for run-off-road crashes)
* Countermeasure 2: Upgrade edge-line pavement markings ($\text{CMF}_2 = 0.90$ for run-off-road crashes)

**Questions:**
1. What is the combined Crash Modification Factor ($\text{CMF}_{\text{combined}}$)?
2. What is the expected number of run-off-road crashes per year after implementing both countermeasures?
3. What is the overall Crash Reduction Factor ($\text{CRF}_{\text{combined}}$) as a percentage?

#### Solution:
1. **Calculate the combined CMF**:
   $$\text{CMF}_{\text{combined}} = \text{CMF}_1 \times \text{CMF}_2 = 0.85 \times 0.90 = 0.765$$
   
2. **Calculate the expected crash frequency**:
   $$N_{\text{expected}} = N_{\text{observed}} \times \text{CMF}_{\text{combined}} = 24.0 \times 0.765 = 18.36 \text{ crashes/year}$$
   
3. **Calculate the combined CRF**:
   $$\text{CRF}_{\text{combined}} = 1 - \text{CMF}_{\text{combined}} = 1 - 0.765 = 0.235 \text{ or } 23.5\%$$

---

### Worked Example 2: Safety Benefit Analysis
An intersection experiences $8.0$ injury crashes/year and $15.0$ Property Damage Only (PDO) crashes/year. The agency will install retroreflective signal backplates, which has the following CMFs:
* $\text{CMF}_{\text{inj}} = 0.82$ for injury crashes
* $\text{CMF}_{\text{PDO}} = 0.88$ for PDO crashes

The average societal cost of an injury crash is $\$120,000$, and the average cost of a PDO crash is $\$10,000$.

**Calculate the expected annual monetary benefit ($B$) of this project.**

#### Solution:
1. **Calculate the annual reduction in injury crashes ($\Delta N_{\text{inj}}$)**:
   $$\Delta N_{\text{inj}} = N_{\text{observed, inj}} \times \left(1 - \text{CMF}_{\text{inj}}\right) = 8.0 \times (1 - 0.82) = 8.0 \times 0.18 = 1.44 \text{ crashes/year}$$
   
2. **Calculate the annual reduction in PDO crashes ($\Delta N_{\text{PDO}}$)**:
   $$\Delta N_{\text{PDO}} = N_{\text{observed, PDO}} \times \left(1 - \text{CMF}_{\text{PDO}}\right) = 15.0 \times (1 - 0.88) = 15.0 \times 0.12 = 1.80 \text{ crashes/year}$$
   
3. **Calculate the annual monetary benefit ($B$)**:
   $$\text{Benefit (B)} = \left(\Delta N_{\text{inj}} \times \text{Cost}_{\text{inj}}\right) + \left(\Delta N_{\text{PDO}} \times \text{Cost}_{\text{PDO}}\right)$$
   $$\text{Benefit (B)} = (1.44 \times \$120,000) + (1.80 \times \$10,000)$$
   $$\text{Benefit (B)} = \$172,800 + \$18,000 = \$190,800 \text{ per year}$$

---

## References and Standards
* *NCEES PE Civil Reference Handbook*, Section 6.3 (Traffic Safety).
* *Highway Safety Manual (HSM) 1st Edition*, Chapter 3 (Fundamentals) and Part D (Crash Modification Factors).
