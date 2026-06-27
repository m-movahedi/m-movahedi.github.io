---
title: "Full Mini-Exam 1"
weight: 112
date : "2026-05-04"
draft : false
type : "post"
---
# Full Mini-Exam 1

This exam is designed to simulate the PE Civil Transportation morning and afternoon sessions. It contains five representative multiple-choice questions spanning hydrology/drainage, nonmotorized design, and corridor integration.

---

## Exam Questions

### Question 1 (Hydrology)
A design engineer is calculating the peak runoff flow rate ($Q$) for a 35-acre industrial park watershed to size a stormwater channel. The site has a design return period of 50 years.
- Paved parking and roofs ($C = 0.90$): 20 acres
- Gravel storage lot ($C = 0.60$): 5 acres
- Grass lawns ($C = 0.25$): 10 acres
- The 50-year rainfall intensity for a duration equal to the time of concentration is $i = 4.2\text{ in/hr}$.
- Use the standard NCEES frequency adjustment factor ($C_f$) for a 50-year storm.

Which of the following is closest to the 50-year peak runoff flow rate ($Q$)?
- (A) 99 cfs
- (B) 118 cfs
- (C) 136 cfs
- (D) 154 cfs

---

### Question 2 (Horizontal Alignment)
A rural roadway horizontal curve is being designed for a design speed of $60\text{ mph}$. 
- The maximum allowable superelevation rate is $e_{max} = 6.0\% = 0.06\text{ ft/ft}$.
- The side friction factor for a $60\text{ mph}$ design speed is $f_s = 0.12$.

According to AASHTO Green Book criteria, which of the following is closest to the minimum horizontal curve radius ($R_{min}$) required?
- (A) 1,200 feet
- (B) 1,333 feet
- (C) 1,500 feet
- (D) 1,667 feet

---

### Question 3 (Pedestrian Crossing)
An intersection crosswalk spans a width of $48\text{ feet}$ across a local street.
- A standard pedestrian walking speed of $3.5\text{ ft/s}$ is specified.
- The pedestrian detector pushbutton is located $4\text{ feet}$ behind the curb face.
- The minimum walk interval is $7.0\text{ seconds}$.

Under MUTCD criteria, what is the minimum required total pedestrian phase time ($t_{total}$), including walk and clearance times?
- (A) 13.7 seconds
- (B) 14.9 seconds
- (C) 20.7 seconds
- (D) 21.9 seconds

---

### Question 4 (ADA Accessibility)
A pedestrian curb ramp must connect a sidewalk at elevation $112.50\text{ ft}$ to a gutter pan at elevation $111.25\text{ ft}$. The ramp is to have a running slope of $1:12.5$ ($8.0\%$).

What is the minimum horizontal length ($L$) of the ramp run required, excluding any landings?
- (A) 10.0 feet
- (B) 12.5 feet
- (C) 15.0 feet
- (D) 15.6 feet

---

### Question 5 (Pavement Design)
A pavement section has a required design Structural Number ($SN_{req}$) of $3.50$.
- The asphalt concrete surface layer has a thickness of $D_1 = 4.0\text{ inches}$ and a coefficient $a_1 = 0.44$.
- The crushed stone base layer has a layer coefficient $a_2 = 0.14$ and a thickness of $D_2 = 6.0\text{ inches}$.
- The subbase layer has a layer coefficient $a_3 = 0.11$.
- The drainage coefficients for the base and subbase layers are $m_2 = 1.0$ and $m_3 = 0.8$, respectively.

What is the minimum thickness ($D_3$) of the subbase layer required to satisfy the design Structural Number?
- (A) 6.0 inches
- (B) 7.5 inches
- (C) 9.0 inches
- (D) 10.5 inches

---

## Detailed Solutions

### Solution 1: Peak Runoff Flow Rate
1. **Calculate the composite runoff coefficient ($C_{comp}$):**
   $$A_{total} = 20 + 5 + 10 = 35\text{ acres}$$
   $$C_{comp} = \frac{(0.90 \cdot 20) + (0.60 \cdot 5) + (0.25 \cdot 10)}{35}$$
   $$C_{comp} = \frac{18.0 + 3.0 + 2.5}{35} = \frac{23.5}{35} \approx 0.6714$$
   
2. **Apply the frequency adjustment factor ($C_f$):**
   For a 50-year storm, the NCEES handbook specifies $C_f = 1.20$.
   $$C_{adj} = C_f \cdot C_{comp} = 1.20 \cdot 0.6714 \approx 0.8057$$
   Verify limit: $0.8057 \le 1.0$, which is valid.
   
3. **Calculate peak flow rate ($Q$):**
   $$Q = C_{adj} \cdot i \cdot A = 0.8057 \cdot 4.2\text{ in/hr} \cdot 35\text{ acres} \approx 118.4\text{ cfs}$$
   *Wait, let's recalculate:*
   $0.8057 \cdot 4.2 \cdot 35 = 118.4\text{ cfs}$.
   Ah! Let's check the options: (A) 112 cfs, (B) 128 cfs, (C) 153 cfs, (D) 184 cfs.
   Wait, if $C_f$ is *not* applied:
   $$Q_{no\_Cf} = 0.6714 \cdot 4.2 \cdot 35 = 98.7\text{ cfs}$$
   Wait! Is there an option near 118? The closest is (A) 112 cfs or (B) 128 cfs.
   Let's check if the area was 40 acres or if $C_{comp}$ calculations had a typo.
   Let's re-run:
   $$Q = 1.20 \cdot \left( \frac{23.5}{35} \right) \cdot 4.2 \cdot 35 = 1.20 \cdot 23.5 \cdot 4.2 = 118.44\text{ cfs}$$
   Wait, let's adjust the question or the options so they match exactly.
   Let's set option (B) to 128, or let's update the question so that the math yields one of the choices exactly. Let's make sure the choice is (B) 118 cfs or similar. Let's rewrite the options to:
   - (A) 99 cfs
   - (B) 118 cfs
   - (C) 136 cfs
   - (D) 154 cfs
   This makes (B) exactly $118\text{ cfs}$. Let's edit the text of Question 1 to reflect these options.

*Correct Option:* **(B)**

---

### Solution 2: Minimum Horizontal Curve Radius
1. **Apply the horizontal curve minimum radius formula:**
   $$R_{min} = \frac{V^2}{15 \cdot (e_{max} + f_s)}$$
   Where:
   - $V = 60\text{ mph}$
   - $e_{max} = 0.06\text{ ft/ft}$
   - $f_s = 0.12$
   
2. **Calculate:**
   $$R_{min} = \frac{60^2}{15 \cdot (0.06 + 0.12)} = \frac{3600}{15 \cdot 0.18} = \frac{3,600}{2.7} \approx 1,333.33\text{ feet}$$

*Correct Option:* **(B)**

---

### Solution 3: Minimum Pedestrian Phase Time
1. **Calculate the distance from the detector to the far side of the road ($d_{total}$):**
   - Pushbutton offset: $4\text{ feet}$
   - Roadway width: $48\text{ feet}$
   $$d_{total} = 48\text{ ft} + 4\text{ ft} = 52\text{ feet}$$
   
2. **Apply the MUTCD total pedestrian phase time equation:**
   $$t_{total} = t_{walk} + \frac{d_{total}}{V_{walk}}$$
   $$t_{total} = 7.0\text{ seconds} + \frac{52\text{ ft}}{3.5\text{ ft/s}} = 7.0 + 14.86 = 21.86\text{ seconds}$$
   Rounding to the nearest tenth yields **21.9 seconds**.

*Correct Option:* **(D)**

---

### Solution 4: ADA Curb Ramp Length
1. **Calculate the vertical rise ($\Delta z$):**
   $$\Delta z = 112.50\text{ ft} - 111.25\text{ ft} = 1.25\text{ feet}$$
   
2. **Calculate the horizontal run ($L$):**
   Using the running slope $S = 1:12.5 = 0.08\text{ ft/ft}$:
   $$S = \frac{\text{Rise}}{\text{Run}} \implies L = \frac{\Delta z}{S}$$
   $$L = \frac{1.25\text{ ft}}{0.08\text{ ft/ft}} = 15.625\text{ feet}$$
   Rounding to the nearest tenth yields **15.6 feet**.

*Correct Option:* **(D)**

---

### Solution 5: Pavement Subbase Layer Thickness
1. **Recall the Structural Number equation:**
   $$SN = a_1 D_1 + a_2 D_2 m_2 + a_3 D_3 m_3$$
   
2. **Substitute values and solve for $D_3$:**
   $$3.50 = (0.44 \cdot 4.0) + (0.14 \cdot 6.0 \cdot 1.0) + (0.11 \cdot D_3 \cdot 0.8)$$
   $$3.50 = 1.76 + 0.84 + 0.088 \cdot D_3$$
   $$3.50 = 2.60 + 0.088 \cdot D_3$$
   $$3.50 - 2.60 = 0.088 \cdot D_3 \implies 0.90 = 0.088 \cdot D_3$$
   $$D_3 = \frac{0.90}{0.088} \approx 10.23\text{ inches}$$
   
3. **Select the nearest standard thickness that meets the requirement:**
   - Option (D) $10.5\text{ inches}$ provides $SN = 2.60 + (0.11 \cdot 10.5 \cdot 0.8) = 2.60 + 0.924 = 3.524 \ge 3.50$ (OK).
   - Option (C) $9.0\text{ inches}$ would only yield $SN = 2.60 + (0.11 \cdot 9.0 \cdot 0.8) = 2.60 + 0.792 = 3.392 < 3.50$ (deficient).
   Therefore, the minimum thickness is $10.5\text{ inches}$.

*Correct Option:* **(D)**
