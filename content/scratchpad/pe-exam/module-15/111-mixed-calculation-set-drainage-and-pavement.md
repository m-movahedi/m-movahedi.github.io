# Mixed Calculation Set: Drainage and Pavement

This calculation set covers hydrology/drainage and pavement design calculations typical of the PE Civil Transportation exam.

---

## Problem 1: Flexible Pavement Structural Number (SN)

A highway agency is designing a flexible pavement cross-section. The design structural number ($SN$) required for the design ESALs and soil conditions is $SN_{req} = 4.2$.
The proposed pavement structure consists of three layers:
1. **Asphalt Concrete Surface Course:** Layer coefficient $a_1 = 0.44$, thickness $D_1$ to be determined.
2. **Granular Base Course:** Layer coefficient $a_2 = 0.14$, drainage coefficient $m_2 = 1.0$, thickness $D_2 = 8.0\text{ inches}$.
3. **Soil-Cement Subbase Course:** Layer coefficient $a_3 = 0.11$, drainage coefficient $m_3 = 0.8$, thickness $D_3 = 10.0\text{ inches}$.

**1. Write the AASHTO structural number equation.**
**2. Calculate the minimum thickness ($D_1$) of the asphalt surface course required to meet the design structural number.**
**3. Round $D_1$ to the nearest half-inch (as is standard in highway specs) and verify the final SN.**

### Solution:

#### Step 1: Write the SN equation
$$SN = a_1 D_1 + a_2 D_2 m_2 + a_3 D_3 m_3$$

#### Step 2: Solve for $D_1$
Substitute the known values into the equation:
$$4.2 = (0.44 \cdot D_1) + (0.14 \cdot 8.0 \cdot 1.0) + (0.11 \cdot 10.0 \cdot 0.8)$$
$$4.2 = (0.44 \cdot D_1) + 1.12 + 0.88$$
$$4.2 = (0.44 \cdot D_1) + 2.00$$
$$4.2 - 2.00 = 0.44 \cdot D_1 \implies 2.20 = 0.44 \cdot D_1$$
$$D_1 = \frac{2.20}{0.44} = 5.0\text{ inches}$$

#### Step 3: Round and verify
Since $D_1 = 5.0\text{ inches}$ is already a whole half-inch value, no additional rounding is required.
$$\text{Final } SN = (0.44 \cdot 5.0) + 1.12 + 0.88 = 2.20 + 2.00 = 4.20 \ge 4.2\text{ (OK)}$$

---

## Problem 2: ESAL Calculations

A four-lane divided highway (two lanes in each direction) has an initial year Average Annual Daily Traffic ($AADT$) of $15,000\text{ vehicles per day}$.
- The truck percentage is $12\%$.
- The traffic growth rate is $3.0\%$ per year.
- The design life of the pavement is $20\text{ years}$.
- The average truck factor (ESALs per truck) is $TF = 1.4$.
- The directional distribution factor is $D_d = 50\% = 0.50$.
- The lane distribution factor for a four-lane highway is $D_L = 90\% = 0.90$ (representing the percentage of one-directional trucks in the design lane).

**Calculate the total design ESALs ($W_{18}$) in the design lane over the 20-year design life.**

### Solution:

#### Step 1: Calculate the 20-year Growth Factor ($G_f$)
Using the standard traffic growth factor equation:
$$G_f = \frac{(1 + r)^n - 1}{r}$$
Where $r = 0.03$ and $n = 20$:
$$G_f = \frac{(1 + 0.03)^{20} - 1}{0.03} = \frac{(1.03)^{20} - 1}{0.03}$$
- $(1.03)^{20} \approx 1.8061$
$$G_f = \frac{1.8061 - 1}{0.03} = \frac{0.8061}{0.03} \approx 26.87\text{ years}$$

#### Step 2: Calculate the Initial Year Design Lane ESALs ($W_{18, \text{year 1}}$)
The initial year daily truck traffic in the design lane is:
$$\text{Daily Trucks}_{\text{design lane}} = AADT \cdot \%Trucks \cdot D_d \cdot D_L$$
$$\text{Daily Trucks}_{\text{design lane}} = 15,000 \cdot 0.12 \cdot 0.50 \cdot 0.90 = 810\text{ trucks/day}$$

Calculate initial year annual ESALs:
$$W_{18, \text{year 1}} = 810\text{ trucks/day} \cdot 365\text{ days/year} \cdot TF$$
$$W_{18, \text{year 1}} = 810 \cdot 365 \cdot 1.4 = 413,910\text{ ESALs/year}$$

#### Step 3: Calculate the Total Design Life ESALs ($W_{18}$)
$$W_{18} = W_{18, \text{year 1}} \cdot G_f$$
$$W_{18} = 413,910\text{ ESALs/year} \cdot 26.87\text{ years} \approx 11,121,760\text{ ESALs}$$

*Result:* The total design ESALs for the design lane is approximately **$1.11 \times 10^7$ ESALs**.

---

## Problem 3: Gutter Spread and Flow

A municipal roadway section is being designed to carry a storm gutter flow rate of $Q = 1.25\text{ cfs}$ during a design storm.
- The pavement cross slope is $S_x = 2.0\% = 0.02\text{ ft/ft}$.
- The roadway longitudinal grade is $S = 1.0\% = 0.01\text{ ft/ft}$.
- The pavement roughness is $n = 0.016$.

**Determine the resulting gutter spread ($T$) in feet.**

### Solution:
Use the Modified Manning's equation for triangular gutter flow:
$$Q = \frac{0.56}{n} S_x^{5/3} S^{1/2} T^{8/3}$$

Rearrange the equation to solve for $T$:
$$T^{8/3} = \frac{Q \cdot n}{0.56 \cdot S_x^{5/3} \cdot S^{1/2}}$$

1. **Evaluate the denominator terms:**
   - $S_x^{5/3} = (0.02)^{5/3} \approx 0.001474$
   - $S^{1/2} = (0.01)^{1/2} = 0.10$
   - $\text{Denominator} = 0.56 \cdot 0.001474 \cdot 0.10 = 0.00008254$

2. **Evaluate the numerator term:**
   - $Q \cdot n = 1.25 \cdot 0.016 = 0.020$

3. **Solve for $T^{8/3}$:**
   $$T^{8/3} = \frac{0.020}{0.00008254} \approx 242.31$$

4. **Solve for $T$ (raise both sides to the power of $3/8 = 0.375$):**
   $$T = (242.31)^{0.375} \approx 7.84\text{ feet}$$

*Result:* The water will spread **7.8 feet** from the curb face.

---

## Technical Pitfalls
- **Drainage Coefficient Location:** In the structural number equation, the drainage coefficient ($m_i$) only applies to the unbound materials (granular base and subbase, layers 2 and 3). Surface asphalt concrete (layer 1) does *not* have an $m_1$ coefficient.
- **Lane Distribution Factor ($D_L$):** For multi-lane highways, do not forget to apply $D_L$. If you design for all trucks in one direction without accounting for the fact that they distribute across lanes, your pavement will be over-designed.
- **Solving for T:** When using Modified Manning's, the math can be tricky on the exam. Remember that $T = (T^{8/3})^{3/8}$. Use your calculator's exponent function carefully.
