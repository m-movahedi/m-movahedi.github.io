---
title: "Soil Classification for Pavements and Subgrades"
weight: 80
date : "2026-05-04"
draft : false
type : "post"
---
# Soil Classification for Pavements and Subgrades

Soil classification is a fundamental topic on the PE Civil Transportation exam. In transportation engineering, soils serve as the subgrade that supports pavement structures. Understanding the engineering behavior of these soils based on index properties—such as grain size distribution and plasticity—is critical for design, compaction control, and drainage.

---

## 1. Soil Index Properties

Before classifying a soil, we must determine its index properties through laboratory testing. The two primary laboratory tests are:
1. **Sieve Analysis (Gradation):** Measures the distribution of particle sizes.
2. **Atterberg Limits:** Measures the consistency and plasticity of the fine-grained fraction (passing the No. 200 sieve).

### Grain Size Distribution and Shape Parameters
A sieve analysis determines the percentage of soil passing various standard sieve sizes. The key boundary sieves for classification are:
*   **3-inch (75 mm):** Separates cobbles/boulders from gravel.
*   **No. 4 (4.75 mm):** Separates gravel from sand.
*   **No. 200 (0.075 mm):** Separates coarse-grained soils (gravel and sand) from fine-grained soils (silt and clay).

From the cumulative grain size distribution curve, we identify the following diameters (where $D_x$ is the particle diameter corresponding to $x\%$ passing by weight):
*   $D_{10}$: Effective size.
*   $D_{30}$: Diameter at $30\%$ passing.
*   $D_{60}$: Diameter at $60\%$ passing.

These diameters are used to calculate two shape coefficients:
$$\text{Coefficient of Uniformity } (C_u) = \frac{D_{60}}{D_{10}}$$
$$\text{Coefficient of Curvature } (C_c) = \frac{(D_{30})^2}{D_{60} \cdot D_{10}}$$

### Atterberg Limits and Plasticity
Atterberg limits define the boundaries between different states of fine-grained soil consistency as water content ($w$) changes:
*   **Liquid Limit (LL):** The water content at which soil transitions from a plastic state to a liquid state.
*   **Plastic Limit (PL):** The water content at which soil transitions from a semi-solid state to a plastic state.
*   **Plasticity Index (PI):** The range of water content over which the soil exhibits plastic behavior:
    $$PI = LL - PL$$
*   **Shrinkage Limit (SL):** The water content at which further moisture loss will not cause a decrease in soil volume.

The **Plasticity Chart** (used in USCS) plots $PI$ against $LL$. The key line on this chart is the **A-line**, which separates clays from silts:
$$\text{A-line: } PI = 0.73(LL - 20)$$
*   **Clays (C):** Generally plot above the A-line and have $PI > 7$.
*   **Silts (M):** Generally plot below the A-line or have $PI < 4$.
*   **U-line:** Represents the upper limit of valid test data for natural soils:
    $$\text{U-line: } PI = 0.9(LL - 8)$$

---

## 2. Unified Soil Classification System (USCS)

The USCS uses a two-letter system to classify soils. The first letter designates the dominant grain size or soil type, and the second letter designates the gradation or plasticity characteristics.

### Classification Prefixes and Suffixes
| Prefix (Soil Type) | Suffix (Gradation / Plasticity) |
| :--- | :--- |
| **G:** Gravel ($\ge 50\%$ coarse fraction retained on No. 4) | **W:** Well-graded ($C_u$ and $C_c$ meet criteria) |
| **S:** Sand ($> 50\%$ coarse fraction passing No. 4) | **P:** Poorly-graded (fails well-graded criteria) |
| **M:** Silt (plots below A-line or $PI < 4$) | **M:** Silty (used as a suffix for dirty sands/gravels) |
| **C:** Clay (plots on/above A-line and $PI > 7$) | **C:** Clayey (used as a suffix for dirty sands/gravels) |
| **O:** Organic | **L:** Low plasticity ($LL < 50$) |
| **Pt:** Peat / Highly organic | **H:** High plasticity ($LL \ge 50$) |

### Step-by-Step USCS Classification Flow
1.  **Coarse vs. Fine:** Determine the percentage passing the No. 200 sieve ($F_{200}$).
    *   If $F_{200} < 50\%$, the soil is **Coarse-Grained** (proceed to Step 2).
    *   If $F_{200} \ge 50\%$, the soil is **Fine-Grained** (proceed to Step 3).
2.  **Coarse-Grained Classification:**
    *   Determine the coarse fraction ($R = 100 - F_{200}$).
    *   Determine the percentage of the coarse fraction retained on the No. 4 sieve.
        *   If gravel fraction ($G = 100 - F_4$) is $\ge 50\%$ of the coarse fraction, it is a **Gravel (G)**.
        *   If sand fraction ($S = F_4 - F_{200}$) is $> 50\%$ of the coarse fraction, it is a **Sand (S)**.
    *   Evaluate the fines content ($F_{200}$):
        *   **Clean (< 5% passing No. 200):** Check gradation coefficients.
            *   *Gravel:* **GW** if $C_u \ge 4$ and $1 \le C_c \le 3$; otherwise **GP**.
            *   *Sand:* **SW** if $C_u \ge 6$ and $1 \le C_c \le 3$; otherwise **SP**.
        *   **Dirty (> 12% passing No. 200):** Check Atterberg limits of fines.
            *   *Gravel:* **GC** if $PI > 7$ and plots on/above A-line; **GM** if $PI < 4$ or plots below A-line. (Dual symbol GC-GM if $4 \le PI \le 7$ and plots on/above A-line).
            *   *Sand:* **SC** if $PI > 7$ and plots on/above A-line; **SM** if $PI < 4$ or plots below A-line. (Dual symbol SC-SM if $4 \le PI \le 7$ and plots on/above A-line).
        *   **Borderline (5% to 12% passing No. 200):** Requires dual symbols (e.g., GW-GM, SP-SC) representing both gradation and fines characteristics.
3.  **Fine-Grained Classification:**
    *   Identify the Liquid Limit ($LL$).
        *   If $LL < 50$, the soil is **Low Plasticity (L)**.
        *   If $LL \ge 50$, the soil is **High Plasticity (H)**.
    *   Plot $PI$ vs. $LL$ on the Plasticity Chart:
        *   If on/above the A-line and $PI > 7$, it is a **Clay (CL or CH)**.
        *   If below the A-line or $PI < 4$, it is a **Silt (ML or MH)**.
        *   If $4 \le PI \le 7$ and plots on/above the A-line, it is a borderline **CL-ML**.

---

## 3. AASHTO Soil Classification System

The AASHTO system classifies soils specifically for highway subgrade performance. It categorizes soils into seven major groups, A-1 through A-7, based on sieve analysis and Atterberg limits. 

### Group Index (GI)
The Group Index is a numerical rating appended in parentheses to the AASHTO classification (e.g., A-7-6(12)) to indicate the relative quality of the subgrade. A lower GI indicates a better subgrade material.
$$GI = (F_{200} - 35)[0.2 + 0.005(LL - 40)] + 0.01(F_{200} - 15)(PI - 10)$$
Where:
*   $F_{200} = \text{percent passing No. 200 sieve expressed as a whole number}$ (e.g., 45, not 0.45).
*   $LL = \text{Liquid Limit}$.
*   $PI = \text{Plasticity Index}$.

#### Group Index Rules:
*   If the calculated $GI < 0$, report $GI = 0$.
*   Round the calculated $GI$ to the nearest whole number (e.g., 4.5 rounds to 5, 4.4 rounds to 4).
*   For groups **A-2-6** and **A-2-7**, use only the partial group index (the second term of the equation):
    $$GI = 0.01(F_{200} - 15)(PI - 10)$$
*   The group index is always **0** for groups **A-1-a, A-1-b, A-3, A-2-4**, and **A-2-5**.

### AASHTO Classification Procedure
To classify a soil using the AASHTO system, test data is applied from left to right in the standard AASHTO table. The first group from the left that fits the data is the correct classification.

<div style="overflow-x: auto; margin: 2rem 0;">
  <table style="width: 100%; border-collapse: collapse; text-align: center; font-size: 0.9em;">
    <caption style="font-weight: bold; margin-bottom: 0.5rem; font-size: 1.1em;">AASHTO Classification Table</caption>
    <thead>
      <tr style="border-top: 2px solid currentColor; border-bottom: 1px solid currentColor;">
        <th style="padding: 0.5rem; text-align: left;">General Classification</th>
        <th colspan="4" style="padding: 0.5rem; border-left: 1px solid currentColor;">Granular Materials (35% or less passing No. 200)</th>
        <th colspan="4" style="padding: 0.5rem; border-left: 1px solid currentColor;">Silt-Clay Materials (More than 35% passing)</th>
      </tr>
      <tr style="border-bottom: 2px solid currentColor;">
        <th style="padding: 0.5rem; text-align: left;">Group Classification</th>
        <th style="padding: 0.5rem; border-left: 1px solid currentColor;">A-1-a</th>
        <th style="padding: 0.5rem;">A-1-b</th>
        <th style="padding: 0.5rem; border-left: 1px solid currentColor;">A-3</th>
        <th style="padding: 0.5rem; border-left: 1px solid currentColor;">A-2</th>
        <th style="padding: 0.5rem; border-left: 1px solid currentColor;">A-4</th>
        <th style="padding: 0.5rem;">A-5</th>
        <th style="padding: 0.5rem;">A-6</th>
        <th style="padding: 0.5rem;">A-7</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td colspan="9" style="text-align: left; padding: 0.5rem; font-weight: bold; font-style: italic; background-color: rgba(128,128,128,0.1);">Sieve Analysis (% passing)</td>
      </tr>
      <tr>
        <td style="text-align: left; padding: 0.5rem;">No. 10</td>
        <td style="padding: 0.5rem; border-left: 1px solid currentColor;">50 max</td>
        <td style="padding: 0.5rem;">-</td>
        <td style="padding: 0.5rem; border-left: 1px solid currentColor;">-</td>
        <td style="padding: 0.5rem; border-left: 1px solid currentColor;">-</td>
        <td style="padding: 0.5rem; border-left: 1px solid currentColor;">-</td>
        <td style="padding: 0.5rem;">-</td>
        <td style="padding: 0.5rem;">-</td>
        <td style="padding: 0.5rem;">-</td>
      </tr>
      <tr>
        <td style="text-align: left; padding: 0.5rem;">No. 40</td>
        <td style="padding: 0.5rem; border-left: 1px solid currentColor;">30 max</td>
        <td style="padding: 0.5rem;">50 max</td>
        <td style="padding: 0.5rem; border-left: 1px solid currentColor;">51 min</td>
        <td style="padding: 0.5rem; border-left: 1px solid currentColor;">-</td>
        <td style="padding: 0.5rem; border-left: 1px solid currentColor;">-</td>
        <td style="padding: 0.5rem;">-</td>
        <td style="padding: 0.5rem;">-</td>
        <td style="padding: 0.5rem;">-</td>
      </tr>
      <tr style="border-bottom: 1px solid currentColor;">
        <td style="text-align: left; padding: 0.5rem;">No. 200</td>
        <td style="padding: 0.5rem; border-left: 1px solid currentColor;">15 max</td>
        <td style="padding: 0.5rem;">25 max</td>
        <td style="padding: 0.5rem; border-left: 1px solid currentColor;">10 max</td>
        <td style="padding: 0.5rem; border-left: 1px solid currentColor;">35 max</td>
        <td style="padding: 0.5rem; border-left: 1px solid currentColor;">36 min</td>
        <td style="padding: 0.5rem;">36 min</td>
        <td style="padding: 0.5rem;">36 min</td>
        <td style="padding: 0.5rem;">36 min</td>
      </tr>
      <tr>
        <td colspan="9" style="text-align: left; padding: 0.5rem; font-weight: bold; font-style: italic; background-color: rgba(128,128,128,0.1);">Fines Characteristics</td>
      </tr>
      <tr>
        <td style="text-align: left; padding: 0.5rem;">Liquid Limit</td>
        <td style="padding: 0.5rem; border-left: 1px solid currentColor;">-</td>
        <td style="padding: 0.5rem;">-</td>
        <td style="padding: 0.5rem; border-left: 1px solid currentColor;">-</td>
        <td style="padding: 0.5rem; border-left: 1px solid currentColor;">40 max</td>
        <td style="padding: 0.5rem; border-left: 1px solid currentColor;">40 max</td>
        <td style="padding: 0.5rem;">41 min</td>
        <td style="padding: 0.5rem;">40 max</td>
        <td style="padding: 0.5rem;">41 min</td>
      </tr>
      <tr style="border-bottom: 2px solid currentColor;">
        <td style="text-align: left; padding: 0.5rem;">Plasticity Index</td>
        <td style="padding: 0.5rem; border-left: 1px solid currentColor;">6 max</td>
        <td style="padding: 0.5rem;">-</td>
        <td style="padding: 0.5rem; border-left: 1px solid currentColor;">NP</td>
        <td style="padding: 0.5rem; border-left: 1px solid currentColor;">-</td>
        <td style="padding: 0.5rem; border-left: 1px solid currentColor;">10 max</td>
        <td style="padding: 0.5rem;">10 max</td>
        <td style="padding: 0.5rem;">11 min</td>
        <td style="padding: 0.5rem;">11 min</td>
      </tr>
      <tr>
        <td style="text-align: left; padding: 0.5rem; font-weight: bold;">Subgrade Rating</td>
        <td colspan="4" style="padding: 0.5rem; border-left: 1px solid currentColor;">Excellent to Good</td>
        <td colspan="4" style="padding: 0.5rem; border-left: 1px solid currentColor;">Fair to Poor</td>
      </tr>
    </tbody>
  </table>
</div>

*Note on A-2 subgroups:*
*   **A-2-4 and A-2-6:** $LL \le 40$. $PI \le 10$ for A-2-4; $PI \ge 11$ for A-2-6.
*   **A-2-5 and A-2-7:** $LL \ge 41$. $PI \le 10$ for A-2-5; $PI \ge 11$ for A-2-7.

*Note on A-7 subgroups:*
*   **A-7-5:** $PI \le LL - 30$. (Behavior is moderately plastic, behaves like silt).
*   **A-7-6:** $PI > LL - 30$. (Highly plastic clay behavior).

---

## 4. Worked Examples

### Worked Example 1: Unified Soil Classification System (USCS)
A soil sample exhibits the following sieve analysis and plasticity test results:
*   Percent passing No. 4 sieve = $78\%$
*   Percent passing No. 200 sieve = $8\%$
*   $D_{10} = 0.08\text{ mm}$, $D_{30} = 0.25\text{ mm}$, $D_{60} = 0.80\text{ mm}$
*   Liquid Limit ($LL$) = $32$, Plastic Limit ($PL$) = $24$

**Goal:** Classify the soil using the USCS.

**Solution:**
1.  **Evaluate Coarse vs. Fine:**
    *   $F_{200} = 8\%$.
    *   Since $F_{200} < 50\%$, the soil is **Coarse-Grained**.
2.  **Determine Gravel vs. Sand:**
    *   Coarse fraction ($R = 100 - F_{200} = 100 - 8 = 92\%$).
    *   Gravel fraction ($G = 100 - F_4 = 100 - 78 = 22\%$).
    *   Sand fraction ($S = F_4 - F_{200} = 78 - 8 = 70\%$).
    *   Since sand ($70\%$) represents more than half of the coarse fraction ($92 / 2 = 46\%$), the soil is a **Sand (S)**.
3.  **Evaluate Fines Content:**
    *   Since $F_{200} = 8\%$, which falls between $5\%$ and $12\%$, this is a borderline soil requiring a **dual symbol** (e.g., SW-SM, SP-SC, etc.).
4.  **Calculate Gradation Parameters (Clean Suffix):**
    *   $C_u = \frac{D_{60}}{D_{10}} = \frac{0.80}{0.08} = 10.0$
    *   $C_c = \frac{(D_{30})^2}{D_{60} \cdot D_{10}} = \frac{(0.25)^2}{0.80 \cdot 0.08} = \frac{0.0625}{0.064} = 0.98$
    *   For a sand to be well-graded ($W$), it must satisfy $C_u \ge 6$ and $1 \le C_c \le 3$.
    *   $C_u = 10.0 \ge 6$ (Satisfied), but $C_c = 0.98 < 1.0$ (Not satisfied).
    *   Therefore, the gradation symbol is **SP** (poorly-graded sand).
5.  **Evaluate Plasticity of Fines (Dirty Suffix):**
    *   $PI = LL - PL = 32 - 24 = 8$.
    *   A-line: $PI_{\text{A-line}} = 0.73(LL - 20) = 0.73(32 - 20) = 8.76$.
    *   Since the soil's $PI = 8$ is less than $8.76$ and $LL < 50$, the fines plot below the A-line, indicating silt-like behavior (**M**).
    *   Therefore, the dirty suffix is **SM** (silty sand).
6.  **Combine Symbols:**
    *   The complete USCS classification is **SP-SM** (poorly-graded sand with silt).

---

### Worked Example 2: AASHTO Classification and Group Index
A highway subgrade soil has the following characteristics:
*   Percent passing No. 10 sieve = $88\%$
*   Percent passing No. 40 sieve = $72\%$
*   Percent passing No. 200 sieve = $48\%$
*   Liquid Limit ($LL$) = $45$, Plastic Limit ($PL$) = $20$

**Goal:** Classify the soil using the AASHTO system and determine its Group Index.

**Solution:**
1.  **Classify Soil Group (Elimination Process):**
    *   Percent passing No. 200 sieve ($F_{200} = 48\%$).
    *   Since $F_{200} > 35\%$, the soil is a **Silt-Clay Material** (A-4, A-5, A-6, or A-7).
    *   Calculate Plasticity Index: $PI = LL - PL = 45 - 20 = 25$.
    *   Test against group criteria from left to right:
        *   **Group A-4:** Requires $LL \le 40$ and $PI \le 10$. Fails ($LL = 45$, $PI = 25$).
        *   **Group A-5:** Requires $LL \ge 41$ and $PI \le 10$. Fails ($PI = 25$).
        *   **Group A-6:** Requires $LL \le 40$ and $PI \ge 11$. Fails ($LL = 45$).
        *   **Group A-7:** Requires $LL \ge 41$ and $PI \ge 11$. Passes ($LL = 45 \ge 41$ and $PI = 25 \ge 11$).
    *   Determine subgroup (A-7-5 vs. A-7-6):
        *   Evaluate boundary: $LL - 30 = 45 - 30 = 15$.
        *   Compare $PI$ to $LL - 30$:
            *   $PI = 25$
            *   Since $PI > LL - 30$ ($25 > 15$), the subgroup is **A-7-6**.
2.  **Calculate Group Index (GI):**
    *   Formula: $GI = (F_{200} - 35)[0.2 + 0.005(LL - 40)] + 0.01(F_{200} - 15)(PI - 10)$
    *   Substitute known values:
        $$GI = (48 - 35)[0.2 + 0.005(45 - 40)] + 0.01(48 - 15)(25 - 10)$$
        $$GI = (13)[0.2 + 0.005(5)] + 0.01(33)(15)$$
        $$GI = (13)[0.225] + 0.01(495)$$
        $$GI = 2.925 + 4.95 = 7.875$$
    *   Round to the nearest whole number: $GI \approx 8$.
3.  **Final Classification:**
    *   The soil is classified as **A-7-6(8)** (representing a fair to poor subgrade material).

---

## 5. Exam Pitfalls and Tips

*   **Process of Elimination for AASHTO:** Always apply the AASHTO table from left to right. If a soil passes the criteria for A-1-b, it is A-1-b, even if it also fits the looser criteria for A-2 or A-4.
*   **Dual Symbols in USCS:** A common mistake is forgetting that soils with $5\%$ to $12\%$ passing the No. 200 sieve require dual symbols. Always check the No. 200 percent first.
*   **Gravel/Sand Split: Coarse Fraction vs. Total Soil:** The USCS determines Gravel vs. Sand based on the percentage of the *coarse fraction* (the fraction retained on the No. 200 sieve), not the *total soil*.
    *   *Example:* If a soil has $30\%$ passing the No. 200 sieve, the coarse fraction is $70\%$. The boundary between Gravel and Sand is half of this coarse fraction ($35\%$). If the gravel fraction is $40\%$ of the total soil, it is greater than $35\%$, classifying it as a Gravel.
*   **Group Index (GI) Subgroup Exceptions:** For A-2-6 and A-2-7, remember to only compute the partial Group Index (the second term in the GI equation). For A-1, A-3, A-2-4, and A-2-5, the Group Index is 0 by definition; do not calculate a value using the formula.
*   **NP (Non-Plastic) Designation:** If a soil is non-plastic, its PL cannot be determined, meaning $PI$ is reported as 0. In the AASHTO system, non-plastic soils classify under A-3 or A-1, not A-7 or A-6.
