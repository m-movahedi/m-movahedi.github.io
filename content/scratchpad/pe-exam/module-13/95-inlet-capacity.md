---
title: "Inlet Capacity"
weight: 95
---
# Inlet Capacity

Roadway drainage systems collect surface runoff through curb openings, grates, or combination inlets and convey it into the storm sewer system. The design goal is to limit the spread of water ($T$) onto the roadway travel lanes to maintain traffic safety.

---

## Gutter Flow in Triangular Channels

Roadway gutters are analyzed as triangular open channels. Because the cross-section is extremely wide and shallow, standard Manning's equation is modified (known as the Izzard method or Modified Manning's Equation):

$$Q = \frac{0.56}{n} S_x^{5/3} S^{1/2} T^{8/3}$$

Where:
- $Q$ = Gutter flow rate (**cfs**)
- $n$ = Manning's roughness coefficient for the pavement (concrete = 0.015 to 0.016, asphalt = 0.016 to 0.018)
- $S_x$ = Roadway cross slope (**ft/ft**)
- $S$ = Roadway longitudinal slope (**ft/ft**)
- $T$ = Gutter spread (**feet**), which is the width of water measured from the curb face.

### Depth of Flow at the Curb ($d$):
$$d = T \cdot S_x$$

---

## Curb Inlets on Grade

For a curb-opening inlet on a continuous grade, the inlet length required for $100\%$ interception of gutter flow ($L_T$) is given by:

$$L_T = 0.6 \cdot Q^{0.42} \cdot S^{0.3} \cdot \left(\frac{1}{n \cdot S_x}\right)^{0.6}$$

Where:
- $L_T$ = Length of curb opening required for 100% interception (**feet**)
- $Q$ = Total gutter flow rate (**cfs**)
- $S$ = Roadway longitudinal slope (**ft/ft**)
- $S_x$ = Roadway cross slope (**ft/ft**)
- $n$ = Manning's roughness coefficient

### Efficiency ($E$):
If the actual curb inlet length ($L$) is shorter than $L_T$, it will not capture all of the water. The efficiency ($E$) of the inlet is:

$$E = 1 - \left(1 - \frac{L}{L_T}\right)^{1.8}$$

### Intercepted ($Q_i$) and Bypass ($Q_b$) Flows:
- **Intercepted Flow:** $Q_i = E \cdot Q$
- **Bypass (Carryover) Flow:** $Q_b = Q - Q_i = (1 - E) \cdot Q$

---

## Worked Example 1: Roadway Gutter Spread Calculation

A two-lane highway with asphalt pavement ($n = 0.016$) has a cross slope of $S_x = 2.0\% = 0.02\text{ ft/ft}$ and a longitudinal slope of $S = 1.5\% = 0.015\text{ ft/ft}$. The allowable water spread ($T_{allow}$) during the design storm is $8.0\text{ feet}$ to keep the lane clear.

**Determine the maximum allowable gutter flow rate ($Q$) that can be carried before exceeding the allowable spread, and calculate the water depth at the curb ($d$).**

### Solution:
1. **Apply the Modified Manning's Equation:**
   $$Q = \frac{0.56}{n} S_x^{5/3} S^{1/2} T^{8/3}$$
   $$Q = \frac{0.56}{0.016} \cdot (0.02)^{5/3} \cdot (0.015)^{1/2} \cdot (8.0)^{8/3}$$
   
2. **Evaluate the terms:**
   - $\frac{0.56}{0.016} = 35.0$
   - $(0.02)^{5/3} \approx 0.00147$
   - $(0.015)^{1/2} \approx 0.12247$
   - $(8.0)^{8/3} \approx 256.0$

3. **Calculate flow rate ($Q$):**
   $$Q = 35.0 \cdot 0.00147 \cdot 0.12247 \cdot 256.0 \approx 1.61\text{ cfs}$$

4. **Calculate depth at the curb ($d$):**
   $$d = T \cdot S_x = 8.0\text{ ft} \cdot 0.02\text{ ft/ft} = 0.16\text{ ft} = 1.92\text{ inches}$$

---

## Worked Example 2: Curb Opening Inlet Efficiency

A designer has placed a $10\text{-foot}$ curb opening inlet on a roadway grade. The total gutter flow rate at this location is $3.2\text{ cfs}$. 
The road has a cross slope $S_x = 0.03\text{ ft/ft}$, longitudinal slope $S = 0.02\text{ ft/ft}$, and pavement roughness $n = 0.016$.

**Calculate the efficiency ($E$) of the curb inlet, the intercepted flow rate ($Q_i$), and the bypass flow rate ($Q_b$) that will travel to the next inlet.**

### Solution:

#### Step 1: Calculate the length required for 100% interception ($L_T$)
$$L_T = 0.6 \cdot Q^{0.42} \cdot S^{0.3} \cdot \left(\frac{1}{n \cdot S_x}\right)^{0.6}$$
$$L_T = 0.6 \cdot (3.2)^{0.42} \cdot (0.02)^{0.3} \cdot \left(\frac{1}{0.016 \cdot 0.03}\right)^{0.6}$$
- $(3.2)^{0.42} \approx 1.629$
- $(0.02)^{0.3} \approx 0.309$
- $\frac{1}{0.016 \cdot 0.03} = \frac{1}{0.00048} \approx 2083.33$
- $(2083.33)^{0.6} \approx 98.48$

Multiply terms:
$$L_T = 0.6 \cdot 1.629 \cdot 0.309 \cdot 98.48 \approx 29.8\text{ feet}$$

#### Step 2: Calculate actual efficiency ($E$) for $L = 10\text{ feet}$
$$E = 1 - \left(1 - \frac{L}{L_T}\right)^{1.8}$$
$$E = 1 - \left(1 - \frac{10}{29.8}\right)^{1.8}$$
$$E = 1 - (1 - 0.336)^{1.8} = 1 - (0.664)^{1.8}$$
- $(0.664)^{1.8} \approx 0.478$
$$E = 1 - 0.478 = 0.522\text{ (or } 52.2\%)$$

#### Step 3: Calculate intercepted ($Q_i$) and bypass ($Q_b$) flow rates
- **Intercepted Flow ($Q_i$):**
  $$Q_i = E \cdot Q = 0.522 \cdot 3.2\text{ cfs} = 1.67\text{ cfs}$$
- **Bypass Flow ($Q_b$):**
  $$Q_b = Q - Q_i = 3.2 - 1.67 = 1.53\text{ cfs}$$

---

## Technical Pitfalls
- **Incorrect exponent in Modified Manning's:** Note that the exponent for spread is $T^{8/3}$ (which is $T^{2.67}$), not $T^{2/3}$ as in standard Manning's equation.
- **Slope Units:** Roadway cross slopes and longitudinal slopes are always in ft/ft. A $2\%$ cross slope is $0.02$, not $2.0$.
- **Bypass Accumulation:** On the exam, when finding the flow at a downstream inlet, do not forget to add the bypass flow ($Q_b$) from the upstream inlet to the local runoff generated by the drainage area of the downstream inlet.
