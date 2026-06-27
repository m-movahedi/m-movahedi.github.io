---
title: "Passing Sight Distance on Vertical Curves"
weight: 57
date : "2026-05-04"
draft : false
type : "post"
---
# Passing Sight Distance on Vertical Curves

Passing Sight Distance (PSD) is the minimum distance required for a driver on a two-lane highway to safely complete a passing maneuver around a slower vehicle without colliding with an opposing vehicle. Providing PSD on vertical curves is much more demanding than providing Stopping Sight Distance (SSD) due to the greater sight distance required.

## Design Parameters for Passing Sight Distance

Unlike SSD, where the object on the road is small ($h_2 = 2.00\text{ ft}$), the object in a passing scenario is an oncoming vehicle. AASHTO Green Book standards assume:
*   **Driver Eye Height ($h_1$):** $3.50\text{ ft}$ ($1.08\text{ m}$)
*   **Opposing Vehicle Height ($h_2$):** $3.50\text{ ft}$ ($1.08\text{ m}$)

Because the driver's eye height and the opposing vehicle height are identical, the geometric equations for crest vertical curves simplify significantly.

```
                  PVI
                  /\                                    
   g1 (+)        /  \        g2 (-)                      
  ------------->/    \------------->                    
               /  __  \                                 
  Driver   ---O--/  \-O--- Opposing Vehicle             
   (h1)      /          \   (h2)                        
            /            \                              
  =========*==============*==========                   
          PVC            PVT                            
           |<---- L ---->|                              
  |<---------- S ----------->|                          
```

---

## Length of Curve Equations

The minimum length of a crest vertical curve ($L$) for PSD is calculated using the following formulas:

### 1. USCS (English) Units
With $h_1 = h_2 = 3.50\text{ ft}$, the term $(\sqrt{2h_1} + \sqrt{2h_2})^2$ becomes $(\sqrt{7} + \sqrt{7})^2 = (2\sqrt{7})^2 = 28$. Substituting this into the general curve equation yields:

*   **Case 1: Passing Sight Distance $\le$ Curve Length ($S \le L$)**
    $$L = \frac{A S^2}{2800}$$

*   **Case 2: Passing Sight Distance $>$ Curve Length ($S > L$)**
    $$L = 2S - \frac{2800}{A}$$

Where:
*   $L$ = length of vertical curve (ft)
*   $S$ = passing sight distance (ft)
*   $A$ = algebraic grade difference (%) = $|g_2 - g_1|$
*   $K$-value for PSD ($S \le L$): $K = \frac{S^2}{2800}$

### 2. Metric (SI) Units
With $h_1 = h_2 = 1.08\text{ m}$:

*   **Case 1: Passing Sight Distance $\le$ Curve Length ($S \le L$)**
    $$L = \frac{A S^2}{864}$$

*   **Case 2: Passing Sight Distance $>$ Curve Length ($S > L$)**
    $$L = 2S - \frac{864}{A}$$

Where $L$ and $S$ are in meters, and $A$ is in percent.

---

## Comparison of SSD and PSD Design Values

AASHTO design values for PSD are substantially larger than SSD values. The table below compares the two sight distances and their corresponding crest curve $K$-values at various design speeds:

| Design Speed (mph) | Design SSD (ft) | Crest $K_{\text{SSD}}$ (ft/%) | Design PSD (ft) | Crest $K_{\text{PSD}}$ (ft/%) |
| :---: | :---: | :---: | :---: | :---: |
| **30** | 200 | 19 | 560 | 112 |
| **40** | 305 | 44 | 760 | 206 |
| **50** | 425 | 84 | 975 | 339 |
| **60** | 570 | 151 | 1,200 | 514 |
| **70** | 730 | 247 | 1,410 | 710 |
| **80** | 910 | 384 | 1,620 | 937 |

---

## Design and Cost Implications

Because the required $K$-values for PSD are $4$ to $6$ times larger than those for SSD, designing a crest vertical curve to provide PSD is rarely practical. 
*   **Cost Barrier:** A crest curve designed for PSD would require massive quantities of earthwork (deep cuts at the crest and high fills at the approaches) to flatten the curve.
*   **Standard Practice:** Designers typically design vertical curves to meet minimum **SSD** requirements. 
*   **Operations:** Passing zones are managed operationally using pavement markings (solid and dashed yellow lines) and signage in accordance with the *Manual on Uniform Traffic Control Devices* (MUTCD). Where passing is highly desirable, adding a third auxiliary lane (passing lane or climbing lane) is often more cost-effective than flattening the vertical profile.

---

## Worked Example

A crest vertical curve on a two-lane rural highway connects an initial grade of $+2.0\%$ and a final grade of $-2.0\%$. The design speed is $50\text{ mph}$.

Calculate:
1. The minimum length of the vertical curve required to satisfy Stopping Sight Distance (SSD).
2. The minimum length of the vertical curve required to satisfy Passing Sight Distance (PSD).
3. The difference in vertical curve lengths and discuss the feasibility.

### Solution

**1. Calculate Curve Length for SSD:**
*   $A = |g_2 - g_1| = |-2.0 - 2.0| = 4.0\%$
*   For $V = 50\text{ mph}$, design SSD = $425\text{ ft}$.
*   *Assumption:* Assume $S \le L$.
    $$L_{\text{SSD}} = \frac{A S^2}{2158} = \frac{4.0 \times (425)^2}{2158} = \frac{4.0 \times 180,625}{2158} = \frac{722,500}{2158} = 334.8\text{ ft}$$
*   *Verify assumption:* Since $425\text{ ft} > 334.8\text{ ft}$, the assumption $S \le L$ is **false**.
*   *Recalculate using Case 2 ($S > L$):*
    $$L_{\text{SSD}} = 2S - \frac{2158}{A} = 2(425) - \frac{2158}{4.0} = 850 - 539.5 = 310.5\text{ ft}$$
*   Thus, the minimum required curve length for SSD is **$311\text{ ft}$**.

**2. Calculate Curve Length for PSD:**
*   For $V = 50\text{ mph}$, design PSD = $975\text{ ft}$.
*   *Assumption:* Assume $S \le L$.
    $$L_{\text{PSD}} = \frac{A S^2}{2800} = \frac{4.0 \times (975)^2}{2800} = \frac{4.0 \times 950,625}{2800} = \frac{3,802,500}{2800} = 1358.04\text{ ft}$$
*   *Verify assumption:* Since $975\text{ ft} \le 1358.04\text{ ft}$, the assumption $S \le L$ is **correct**.
*   Thus, the minimum required curve length for PSD is **$1,358\text{ ft}$**.

**3. Discussion:**
Designing the curve for PSD requires a curve length of $1,358\text{ ft}$, which is more than $4$ times longer than the $311\text{ ft}$ required for SSD. This significantly increases the required horizontal footprint of the earthwork and the project cost. The standard approach is to construct the $311\text{ ft}$ curve and mark the segment as a "No Passing Zone" with solid yellow pavement markings.

## References

*   *A Policy on Geometric Design of Highways and Streets* (AASHTO Green Book), 7th Edition, 2018, Section 3.2.4 & 3.4.6.1.
*   *NCEES PE Civil Reference Handbook*, Section 4.3.1.
