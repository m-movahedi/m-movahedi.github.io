---
title: "Crest Vertical Curves"
weight: 55
---
# Crest Vertical Curves

Crest vertical curves are designed to connect an uphill grade to a downhill grade (or a steeper uphill grade to a flatter uphill grade, etc.), where the algebraic difference in grade is negative ($g_1 > g_2$). The primary design control for a crest vertical curve is ensuring adequate sight distance—specifically Stopping Sight Distance (SSD)—so that a driver can see a hazard over the crest of the hill.

## Design Parameters for Sight Distance

The relationship between the length of the curve, the grades, and the sight distance is based on the height of the driver's eye and the height of the object. AASHTO Green Book standard values for SSD are:
*   **Driver Eye Height ($h_1$):** $3.50\text{ ft}$ ($1.08\text{ m}$)
*   **Object Height ($h_2$):** $2.00\text{ ft}$ ($0.60\text{ m}$), representing the taillight height of a passenger car or a moderate road hazard.

```
                  PVI
                  /\                                    
   g1 (+)        /  \        g2 (-)                      
  ------------->/    \------------->                    
               /      \                                 
              /   ____ \                                
  Driver   ---O--/    \-*--- Object                     
   (h1)      /          \   (h2)                        
            /            \                              
  =========*==============*==========                   
          PVC            PVT                            
           |<---- L ---->|                              
  |<---------- S ----------->|                          
```

---

## Length of Curve Equations

The minimum length of a crest vertical curve ($L$) depends on whether the required sight distance ($S$) is less than or equal to the curve length ($S \le L$) or greater than the curve length ($S > L$).

### 1. USCS (English) Units
With $h_1 = 3.50\text{ ft}$ and $h_2 = 2.00\text{ ft}$, the equations simplify as follows:

*   **Case 1: Sight Distance $\le$ Curve Length ($S \le L$)**
    $$L = \frac{A S^2}{100 \left(\sqrt{2h_1} + \sqrt{2h_2}\right)^2} = \frac{A S^2}{2158}$$

*   **Case 2: Sight Distance $>$ Curve Length ($S > L$)**
    $$L = 2S - \frac{2158}{A}$$

Where:
*   $L$ = length of vertical curve (ft)
*   $S$ = sight distance (ft)
*   $A$ = algebraic grade difference (%) = $|g_2 - g_1|$

### 2. Metric (SI) Units
With $h_1 = 1.08\text{ m}$ and $h_2 = 0.60\text{ m}$:

*   **Case 1: Sight Distance $\le$ Curve Length ($S \le L$)**
    $$L = \frac{A S^2}{658}$$

*   **Case 2: Sight Distance $>$ Curve Length ($S > L$)**
    $$L = 2S - \frac{658}{A}$$

Where $L$ and $S$ are in meters, and $A$ is in percent.

---

## The Rate of Vertical Curvature ($K$)

The design rate of vertical curvature, $K$, represents the horizontal distance in feet required to change the grade by 1%. For the case where $S \le L$:

$$K = \frac{L}{A} = \frac{S^2}{2158}$$

The required minimum $K$-value is a function of the sight distance ($S$) and is independent of the grades. AASHTO tables list minimum $K$-values for each design speed based on the standard level SSD. Once you have the design $K$-value, the minimum curve length is calculated directly as:

$$L_{\text{min}} = K \times A$$

### Minimum Length for Comfort and Aesthetics
If the grades are very close (small $A$), the equations might yield an extremely short curve length. AASHTO recommends a minimum curve length to ensure passenger comfort and visual smoothness. A common rule of thumb is:

$$L_{\text{min}} \ge 3 V$$

Where $V$ is the design speed in mph.

---

## Drainage Control (The Max $K$ Limit)

While a larger $K$-value provides a flatter, safer curve with more sight distance, it can introduce drainage issues. If a curve is too flat, water will not drain off the roadway surface, which increases the risk of hydroplaning.

*   **Drainage Criterion:** On curbed pavements, drainage problems may occur if the rate of vertical curvature $K$ exceeds **$167\text{ ft/\%}$** (or **$51\text{ m/\%}$**).
*   **The 0.3% Rule:** If $K > 167$, designers must verify that a minimum longitudinal slope of $0.3\%$ is reached within $50\text{ ft}$ of the high point of the curve.

---

## Worked Example

A crest vertical curve is to connect an initial grade $g_1 = +3.5\%$ and a final grade $g_2 = -1.5\%$ on a highway with a design speed of $60\text{ mph}$. 

Determine:
1. The minimum required length of the vertical curve using the $K$-value method.
2. The minimum required length of the vertical curve by solving the case-based equations from scratch (verifying the $S \le L$ assumption).
3. Whether this curve exceeds the AASHTO drainage criteria.

### Solution

**1. $K$-value Method:**
*   From AASHTO tables (or our SSD table), the design SSD for $60\text{ mph}$ is $570\text{ ft}$.
*   The required design $K$-value for $60\text{ mph}$ (crest curve) is:
    $$K = \frac{S^2}{2158} = \frac{570^2}{2158} = 150.56 \approx 151\text{ ft/\%}$$
*   Calculate algebraic grade difference:
    $$A = |g_2 - g_1| = |-1.5 - 3.5| = 5.0\%$$
*   Calculate minimum curve length:
    $$L_{\text{min}} = K \times A = 151 \times 5.0 = 755\text{ ft}$$

**2. Solve case-based equations from scratch:**
*   *Assumption:* Assume $S \le L$.
    $$L = \frac{A S^2}{2158} = \frac{5.0 \times 570^2}{2158} = \frac{5.0 \times 324,900}{2158} = \frac{1,624,500}{2158} = 752.78\text{ ft}$$
*   *Verify assumption:* Is $S \le L$? Since $570\text{ ft} \le 752.78\text{ ft}$, the assumption is correct.
*   Thus, the calculated minimum length is $753\text{ ft}$ (AASHTO tables round this up slightly to $755\text{ ft}$ based on the rounded $K$ of $151$).

*What if $S > L$ had occurred?*
If the calculated $L$ was less than $570\text{ ft}$ (which happens for small $A$ values), we would have to use the Case 2 formula: $L = 2S - \frac{2158}{A}$.

**3. Drainage Criteria Check:**
*   Our design $K$ is $151\text{ ft/\%}$ (or $150.56\text{ ft/\%}$).
*   AASHTO drainage limit for curbed roadways: $K_{\text{max}} = 167\text{ ft/\%}$.
*   Since $151 < 167$, the curve is steep enough to avoid drainage ponding near the high point, and special drainage design is not required.

## References

*   *A Policy on Geometric Design of Highways and Streets* (AASHTO Green Book), 7th Edition, 2018, Section 3.4.6.1.
*   *NCEES PE Civil Reference Handbook*, Section 4.3.1.
