---
title: "Flexible Pavement Design Concepts"
weight: 86
date : "2026-05-04"
draft : false
type : "post"
---
# Flexible Pavement Design Concepts

Flexible pavements consist of a bituminous (asphalt) surface layer underlaid by granular base and subbase courses, resting on the prepared subgrade. They distribute traffic loads through a layered system, dispersing stresses with depth so that the stress reaching the subgrade does not exceed its bearing capacity. On the PE Civil Transportation exam, flexible pavement design is governed by the **AASHTO 1993 Guide for Design of Pavement Structures**.

---

## 1. The Structural Number (SN) Equation

The structural capacity of a flexible pavement is represented by the **Structural Number ($SN$)**, which is a index of the required thickness of the pavement layers. The structural number is calculated as:

$$SN = a_1 D_1 + a_2 D_2 m_2 + a_3 D_3 m_3$$

Where:
*   $a_1, a_2, a_3 = \text{layer coefficients}$ representing the relative structural strength of the surface, base, and subbase materials per inch of thickness.
*   $D_1, D_2, D_3 = \text{thicknesses (in inches)}$ of the surface, base, and subbase layers.
*   $m_2, m_3 = \text{drainage coefficients}$ for the base and subbase layers, accounting for the drainage quality and exposure to moisture. (Note: There is no drainage coefficient for the asphalt surface layer, i.e., $m_1 = 1.0$).

---

## 2. AASHTO 1993 Flexible Pavement Design Equation

To find the required $SN$ for a pavement structure, the AASHTO design equation relates the traffic demand, reliability, allowable serviceability loss, and subgrade strength:

$$\log_{10}(W_{18}) = Z_R S_0 + 9.36 \log_{10}(SN + 1) - 0.20 + \frac{\log_{10}\left(\frac{\Delta PSI}{4.2 - 1.5}\right)}{0.40 + \frac{1096}{(SN + 1)^{5.19}}} + 2.32 \log_{10}(M_r) - 8.07$$

Where:
*   $W_{18} = \text{design traffic demand}$ (total 18-kip Equivalent Single Axle Loads (ESALs) over the design life).
*   $Z_R = \text{standard normal deviate}$ corresponding to the design Reliability ($R$, %).
*   $S_0 = \text{overall standard deviation}$ (typically $0.44$ to $0.49$ for flexible pavements; $0.45$ is commonly assumed).
*   $\Delta PSI = \text{design Serviceability Loss} = p_i - p_t$.
    *   $p_i = \text{initial serviceability index}$ (typically $4.2$ for flexible pavements).
    *   $p_t = \text{terminal serviceability index}$ (typically $2.5$ for major highways, $2.0$ for local roads).
*   $M_r = \text{resilient modulus of the roadbed subgrade (in psi)}$.

*Note on Exam Calculations:* The NCEES PE Civil Reference Handbook provides design charts (nomographs) to solve this equation graphically, though direct calculations or lookup tables for intermediate steps may be tested.

---

## 3. Standard Normal Deviate ($Z_R$) Table
Below are the typical $Z_R$ values used on the exam corresponding to specified reliability levels:

| Reliability ($R$, %) | Standard Normal Deviate ($Z_R$) |
| :--- | :--- |
| **50** | $0.000$ |
| **80** | $-0.841$ |
| **85** | $-1.037$ |
| **90** | $-1.282$ |
| **95** | $-1.645$ |
| **99** | $-2.326$ |

---

## 4. Drainage Coefficients ($m_i$)
The drainage coefficients $m_2$ and $m_3$ adjust the structural capacity of the base and subbase layers. They are based on the **Quality of Drainage** (time required to drain the layer) and the **Exposure to Saturation** (percentage of time the pavement is exposed to moisture levels approaching saturation).

| Quality of Drainage | Water Removed Within | < 1% Exposure | 1% to 5% Exposure | 5% to 25% Exposure | > 25% Exposure |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Excellent** | 2 hours | 1.40 - 1.35 | 1.35 - 1.30 | 1.30 - 1.20 | 1.20 |
| **Good** | 1 day | 1.35 - 1.25 | 1.25 - 1.15 | 1.15 - 1.00 | 1.00 |
| **Fair** | 1 week | 1.25 - 1.15 | 1.15 - 1.05 | 1.05 - 0.80 | 0.80 |
| **Poor** | 1 month | 1.15 - 1.05 | 1.05 - 0.80 | 0.80 - 0.60 | 0.60 |
| **Very Poor** | Never drains | 1.05 - 0.95 | 0.95 - 0.75 | 0.75 - 0.40 | 0.40 |

---

## 5. Layered Design Procedure (Solving for Thicknesses)

To design a cost-effective layered pavement, we determine the thickness of each layer sequentially from top to bottom. This prevents placing a layer over a material that is too weak to support it.

```
       ==============================================================  ---
                   Asphalt Surface Course: Thickness D1, coeff a1       | SN1
       --------------------------------------------------------------  ---
                   Granular Base Course: Thickness D2, coeff a2, m2     | SN2
       --------------------------------------------------------------  ---
                   Granular Subbase Course: Thickness D3, coeff a3, m3  | SN3
       ==============================================================  ---
                       Roadbed Subgrade: Resilient Modulus Mr
```

1.  **Find required $SN_1$:** Use the resilient modulus of the base course ($E_{bs}$) as the input $M_r$ in the design equation.
    *   Select surface thickness: $D_1 \ge \frac{SN_1}{a_1}$
    *   Round $D_1$ up to the nearest $0.5\text{ inch}$ (or as specified).
    *   Calculate actual structural capacity provided by surface: $SN^*_1 = a_1 \cdot D_1$
2.  **Find required $SN_2$:** Use the resilient modulus of the subbase course ($E_{sb}$) as the input $M_r$ in the design equation.
    *   Select base thickness: $D_2 \ge \frac{SN_2 - SN^*_1}{a_2 \cdot m_2}$
    *   Round $D_2$ up to the nearest $0.5\text{ inch}$.
    *   Calculate actual cumulative capacity: $SN^*_1 + SN^*_2 \ge SN_2$ (where $SN^*_2 = a_2 D_2 m_2$)
3.  **Find required $SN_3$:** Use the resilient modulus of the subgrade roadbed ($M_r$) as the input in the design equation.
    *   Select subbase thickness: $D_3 \ge \frac{SN_3 - (SN^*_1 + SN^*_2)}{a_3 \cdot m_3}$
    *   Round $D_3$ up to the nearest $0.5\text{ inch}$.

### AASHTO Minimum Thicknesses
To prevent structural instability, AASHTO specifies minimum layer thicknesses:
*   **Asphalt Surface:** $2.0\text{ inches}$ (for $W_{18} > 2 \cdot 10^6$ ESALs) or $3.0\text{ inches}$.
*   **Aggregate Base:** $4.0\text{ inches}$ or $6.0\text{ inches}$.

---

## 6. Worked Examples

### Worked Example 1: Structural Number Calculation
A proposed flexible pavement section consists of:
*   $4.0\text{ inches}$ of hot-mix asphalt (HMA) surface ($a_1 = 0.44$).
*   $8.0\text{ inches}$ of crushed stone base ($a_2 = 0.14$).
*   $10.0\text{ inches}$ of sandy gravel subbase ($a_3 = 0.11$).
The drainage conditions are rated as "Good" (water removed within 1 day), and the pavement is expected to be exposed to saturation $15\%$ of the time.

**Goal:** Calculate the Structural Number ($SN$) of this pavement section.

**Solution:**
1.  **Determine Drainage Coefficients ($m_2$ and $m_3$):**
    *   Refer to the Drainage Coefficient table.
    *   Row: **Good** drainage (water removed within 1 day).
    *   Column: **$5\%$ to $25\%$ Exposure** (since $15\%$ is in this range).
    *   Value range: $1.15 - 1.00$. Use the midpoint or the standard value $1.00$ (or as specified on the exam. Let's use $m_2 = m_3 = 1.00$).
2.  **Calculate $SN$:**
    $$SN = a_1 D_1 + a_2 D_2 m_2 + a_3 D_3 m_3$$
    $$SN = (0.44 \cdot 4.0) + (0.14 \cdot 8.0 \cdot 1.00) + (0.11 \cdot 10.0 \cdot 1.00)$$
    $$SN = 1.76 + 1.12 + 1.10 = 3.98$$

*Result:* The structural number of the section is **$3.98$**.

---

### Worked Example 2: Layer Thickness Design
A flexible pavement is being designed for a major highway. Design calculations have yielded the following required structural numbers:
*   Required $SN_1$ (to protect the base) = $2.10$
*   Required $SN_2$ (to protect the subbase) = $3.20$
*   Required $SN_3$ (to protect the subgrade) = $4.40$

The layer materials and drainage properties are:
*   Asphalt surface course: $a_1 = 0.42$
*   Crushed stone base course: $a_2 = 0.14$, $m_2 = 1.00$
*   Granular subbase course: $a_3 = 0.10$, $m_3 = 0.90$

**Goal:** Determine the minimum thicknesses of the HMA surface ($D_1$), base ($D_2$), and subbase ($D_3$) to the nearest half-inch.

**Solution:**
1.  **Design Asphalt Surface Course ($D_1$):**
    $$D_1 \ge \frac{SN_1}{a_1} = \frac{2.10}{0.42} = 5.0\text{ inches}$$
    Since $5.0\text{ inches}$ is a clean value and exceeds the minimum HMA thickness ($2.0\text{ in}$), use:
    $$D_1 = 5.0\text{ inches}$$
    $$SN^*_1 = a_1 \cdot D_1 = 0.42 \cdot 5.0 = 2.10$$
2.  **Design Base Course ($D_2$):**
    $$D_2 \ge \frac{SN_2 - SN^*_1}{a_2 \cdot m_2} = \frac{3.20 - 2.10}{0.14 \cdot 1.00} = \frac{1.10}{0.14} = 7.86\text{ inches}$$
    Round up to the nearest half-inch:
    $$D_2 = 8.0\text{ inches}$$
    Calculate actual capacity provided by surface and base:
    $$SN^*_2 = a_2 D_2 m_2 = 0.14 \cdot 8.0 \cdot 1.00 = 1.12$$
    $$SN^*_1 + SN^*_2 = 2.10 + 1.12 = 3.22 \quad (\ge 3.20, \text{ Satisfied})$$
3.  **Design Subbase Course ($D_3$):**
    $$D_3 \ge \frac{SN_3 - (SN^*_1 + SN^*_2)}{a_3 \cdot m_3} = \frac{4.40 - 3.22}{0.10 \cdot 0.90} = \frac{1.18}{0.09} = 13.11\text{ inches}$$
    Round up to the nearest half-inch:
    $$D_3 = 13.5\text{ inches}$$
    Check final Structural Number:
    $$SN^*_3 = a_3 D_3 m_3 = 0.10 \cdot 13.5 \cdot 0.90 = 1.215$$
    $$SN_{\text{provided}} = 2.10 + 1.12 + 1.215 = 4.435 \quad (\ge 4.40, \text{ Satisfied})$$

*Result:* The final design layer thicknesses are:
*   Asphalt Surface ($D_1$) = **$5.0\text{ inches}$**
*   Base Course ($D_2$) = **$8.0\text{ inches}$**
*   Subbase Course ($D_3$) = **$13.5\text{ inches}$**

---

## 7. Exam Pitfalls and Tips

*   **No Drainage Coefficient for Surface:** Do not apply a drainage coefficient ($m_1$) to the surface layer calculation. The surface layer is not considered to be subject to water drainage coefficient reduction.
*   **Layer Ordering Modulus:** Make sure you use the correct resilient modulus for each structural number calculation. To find the $SN$ required to protect a layer, you must use the strength (resilient modulus) of the *layer below it*.
    *   *Example:* To find $SN_1$ (protecting the base), use the base resilient modulus $E_{bs}$. To find $SN_2$ (protecting the subbase), use the subbase resilient modulus $E_{sb}$. To find $SN_3$ (protecting the subgrade), use the subgrade resilient modulus $M_r$.
*   **Standard Deviation Difference:** Ensure you use $S_0 = 0.45$ for flexible pavement problems. A common distractor is using $S_0 = 0.35$, which is reserved for rigid pavements.
*   **Rounding Direction:** Always round thicknesses *up* to the nearest half-inch or inch in design. Rounding down would result in a pavement section that fails to meet the required Structural Number.
