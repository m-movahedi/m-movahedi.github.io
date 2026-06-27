---
title: "Highway Safety Manual Concepts"
weight: 35
---
# Highway Safety Manual Concepts

The AASHTO Highway Safety Manual (HSM) provides a science-based, quantitative approach to traffic safety. It moves the profession away from subjective design standards and toward the prediction of crash frequency and severity.

On the NCEES PE Civil Transportation exam, you must understand the structure of the HSM, the predictive method, Safety Performance Functions (SPFs), and statistical concepts like Regression-to-the-Mean (RTM) and the Empirical Bayes (EB) method.

---

## Structure of the Highway Safety Manual (HSM)

The HSM is divided into four parts:

* **Part A: Introduction, Human Factors, and Fundamentals**: Explains the history, safety concepts, human factors in driving, and the statistical foundations of safety analysis.
* **Part B: Roadway Safety Management Process**: Guides agencies through managing safety on an existing network:
  1. Network Screening (identifying sites with potential for safety improvement).
  2. Diagnosis (analyzing crash data and site conditions).
  3. Countermeasure Selection.
  4. Economic Appraisal (benefit-cost analysis).
  5. Project Prioritization.
  6. Safety Effectiveness Evaluation (post-implementation analysis).
* **Part C: Predictive Method**: Explains how to estimate the expected average crash frequency of a site based on geometry and traffic volume.
* **Part D: Crash Modification Factors**: Contains a catalog of CMFs for various safety treatments (roadway segments, intersections, pedestrian crossings, transit).

---

## The HSM Predictive Method

Part C of the HSM utilizes a structured predictive model to estimate expected crash frequency. The general predictive equation is:

$$N_{\text{predicted}} = N_{\text{spf}} \times C_i \times \prod_{j=1}^{n} \text{CMF}_j$$

Where:
* $N_{\text{predicted}}$ = estimated annual crash frequency for the specific site
* $N_{\text{spf}}$ = predicted annual crash frequency for **base conditions** (derived from a Safety Performance Function)
* $C_i$ = local calibration factor (adjusts national base models to local state or agency conditions)
* $\text{CMF}_j$ = Crash Modification Factors that adjust for geometric or operational features that deviate from the standard base conditions (e.g., lane width, shoulder width, presence of turn lanes).

### Safety Performance Functions (SPFs)
SPFs are mathematical regression models developed from historical data of similar sites. They relate crash frequency to traffic exposure (AADT) under baseline conditions (e.g., 12-ft lanes, 6-ft shoulders, no lighting). 

A typical SPF for a two-lane rural road segment has the form:
$$N_{\text{spf}} = \text{AADT} \times L \times 365 \times 10^{-6} \times e^{a}$$
Or more generally:
$$N_{\text{spf}} = e^{a + b \cdot \ln(\text{AADT})} \times L$$
*where $a$ and $b$ are regression coefficients specific to the facility type, and $L$ is the segment length in miles.*

---

## Regression-to-the-Mean (RTM) and the Empirical Bayes (EB) Method

### Regression-to-the-Mean (RTM)
RTM is a statistical phenomenon where sites with unusually high crash counts in one period tend to experience lower (closer to the mean) crash counts in the next period, even if no safety countermeasure is applied. 
* **The Danger**: If an agency installs a countermeasure at a high-crash site and crashes decrease, the decrease may be due to RTM rather than the treatment. This makes the treatment appear more effective than it actually is.

### The Empirical Bayes (EB) Method
The EB method is used to correct for RTM bias. It calculates the expected crash frequency ($N_{\text{expected}}$) by combining a site's observed crash history with the predicted crash frequency from an SPF:

$$N_{\text{expected}} = w \times N_{\text{predicted}} + (1 - w) \times N_{\text{observed}}$$

Where:
* $N_{\text{expected}}$ = expected average crash frequency, corrected for RTM
* $N_{\text{observed}}$ = actual observed crash count at the site
* $N_{\text{predicted}}$ = predicted crash frequency from the SPF
* $w$ = weight factor ($0 \le w \le 1$):
  $$w = \frac{1}{1 + k \times N_{\text{predicted}}}$$
  *where $k$ is the overdispersion parameter of the SPF. A lower $k$ (better model fit) increases the weight $w$ placed on the model prediction.*

---

## Critical Pitfalls and Exam Traps

1. **Confusing Predicted and Expected Crashes**:
   * **Predicted crashes ($N_{\text{predicted}}$)** come strictly from the SPF model and geometric adjustments (no historical crash data is used).
   * **Expected crashes ($N_{\text{expected}}$)** are calculated using the Empirical Bayes method, combining the predicted model value with actual observed historical crash counts ($N_{\text{observed}}$).

2. **Calibration Factor Location**:
   The calibration factor $C_i$ must be multiplied by the baseline SPF value. If you forget to apply the calibration factor, your predicted crash frequency will not match local agency conditions.

3. **Units of Segment Length in SPFs**:
   Ensure you read the SPF equation carefully. Most segment SPFs require the length ($L$) to be in **miles**. If the problem gives the segment length in feet, you must convert it to miles ($L = \text{feet} / 5,280$).

---

## Worked Example

A state highway agency is evaluating a $2.0\text{-mile}$ rural two-lane road segment. The segment has an AADT of $8,000 \text{ veh/day}$. Over a 1-year period, $12$ crashes were observed on this segment ($N_{\text{observed}} = 12.0 \text{ crashes/year}$). 

The national SPF for this roadway type is:
$$N_{\text{spf}} = e^{-5.85 + 0.95 \cdot \ln(\text{AADT})} \times L$$
The segment deviates from base conditions, requiring two CMF adjustments:
* Lane width adjustment: $\text{CMF}_1 = 1.08$
* Shoulder width adjustment: $\text{CMF}_2 = 1.12$

The local calibration factor for the state is $C_i = 1.15$. The SPF overdispersion parameter is $k = 0.25$.

**Calculate the predicted crash frequency ($N_{\text{predicted}}$) and the RTM-corrected expected crash frequency ($N_{\text{expected}}$) using the Empirical Bayes method.**

### Solution:

#### Step 1: Calculate the Base SPF Crash Frequency ($N_{\text{spf}}$)
$$N_{\text{spf}} = e^{-5.85 + 0.95 \cdot \ln(8,000)} \times 2.0$$
* $\ln(8,000) = 8.9872$
* $-5.85 + 0.95(8.9872) = -5.85 + 8.5378 = 2.6878$
* $e^{2.6878} = 14.699$
$$N_{\text{spf}} = 14.699 \times 2.0 = 29.398 \text{ crashes/year}$$

#### Step 2: Calculate the Predicted Crash Frequency ($N_{\text{predicted}}$)
Multiply by the calibration factor and CMFs:
$$N_{\text{predicted}} = N_{\text{spf}} \times C_i \times \text{CMF}_1 \times \text{CMF}_2$$
$$N_{\text{predicted}} = 29.398 \times 1.15 \times 1.08 \times 1.12 = 40.91 \text{ crashes/year}$$

#### Step 3: Calculate the Empirical Bayes Weight ($w$)
$$w = \frac{1}{1 + k \times N_{\text{predicted}}} = \frac{1}{1 + 0.25 \times 40.91} = \frac{1}{1 + 10.228} = \frac{1}{11.228} = 0.0891$$

#### Step 4: Calculate the Expected Crash Frequency ($N_{\text{expected}}$)
$$N_{\text{expected}} = w \times N_{\text{predicted}} + (1 - w) \times N_{\text{observed}}$$
$$N_{\text{expected}} = 0.0891 \times 40.91 + (1 - 0.0891) \times 12.0$$
$$N_{\text{expected}} = 3.65 + (0.9109 \times 12.0) = 3.65 + 10.93 = 14.58 \text{ crashes/year}$$

**Conclusion:** The predicted crash frequency is $40.91 \text{ crashes/year}$, and the RTM-corrected expected crash frequency is $14.58 \text{ crashes/year}$.

---

## References and Standards
* *NCEES PE Civil Reference Handbook*, Section 6.3 (Traffic Safety).
* *Highway Safety Manual (HSM) 1st Edition*, Chapter 3 (Fundamentals), Chapter 10 (Urband and Suburban Arterials), and Chapter 11 (Two-Lane Rural Roads).
