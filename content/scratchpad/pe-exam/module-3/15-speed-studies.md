---
title: "Speed Studies"
weight: 15
date : "2026-05-04"
draft : false
type : "post"
---
# Speed Studies

Speed is a fundamental parameter of traffic flow. In traffic engineering, speed studies are conducted to evaluate traffic operations, assess safety, set speed limits, and perform capacity analyses. On the PE Civil Transportation exam, the most critical speed concepts are the mathematical distinctions between **Time Mean Speed** and **Space Mean Speed**, and the interpretation of speed distribution statistics.

---

## Time Mean Speed (TMS) vs. Space Mean Speed (SMS)

Vehicles passing a point on a road have different speeds. We can average these speeds in two distinct ways: by time (at a single point) or by space (along a section of road).

### 1. Time Mean Speed ($u_t$)
Time Mean Speed is the **arithmetic average** of the speeds of all vehicles passing a specific point during a specified time interval. It is measured using spot speed devices (like radar guns or loop detectors).

$$u_t = \frac{\sum_{i=1}^n u_i}{n}$$

Where:
- $u_t$ = time mean speed ($\text{mph}$ or $\text{fps}$)
- $u_i$ = spot speed of the $i$-th vehicle
- $n$ = number of observed vehicles

### 2. Space Mean Speed ($u_s$)
Space Mean Speed is the **harmonic mean** of the speeds of all vehicles passing a point during a specified time interval. It represents the average speed of vehicles occupying a given length (space) of a road.
- **Critical Importance:** Space mean speed is the only speed metric that satisfies the fundamental traffic flow equation:
  $$q = k \times u_s$$
  *(where $q$ = flow rate and $k$ = density. Plugging $u_t$ into this formula is mathematically incorrect and represents a common PE trap).*

#### Formulas for Space Mean Speed:
If individual speeds ($u_i$) are known:
$$u_s = \frac{n}{\sum_{i=1}^n \frac{1}{u_i}}$$

If individual travel times ($t_i$) over a fixed course of length $d$ are known:
$$u_s = \frac{d \times n}{\sum_{i=1}^n t_i}$$

Where:
- $u_s$ = space mean speed ($\text{ft/sec}$)
- $d$ = length of the test section ($\text{ft}$)
- $t_i$ = travel time of the $i$-th vehicle over distance $d$ ($\text{seconds}$)
- $n$ = number of observed vehicles

### Mathematical Relationship (Wardrop's Equation):
Time mean speed is always greater than or equal to space mean speed:
$$u_t = u_s + \frac{\sigma_s^2}{u_s}$$
*(where $\sigma_s^2$ is the variance of the space mean speed distribution. $u_t = u_s$ only if all vehicles travel at the exact same speed, meaning variance is zero).*

---

## Worked Example: Calculating TMS and SMS

**Problem:**  
A spot speed study is conducted at a highway location. The travel times of four representative vehicles over a $1,000 \text{-foot}$ long course are recorded as follows:
- Vehicle 1: $15.0 \text{ seconds}$
- Vehicle 2: $18.0 \text{ seconds}$
- Vehicle 3: $12.0 \text{ seconds}$
- Vehicle 4: $16.0 \text{ seconds}$

1. Calculate the speed of each vehicle in feet per second ($\text{ft/s}$) and miles per hour ($\text{mph}$).
2. Calculate the Time Mean Speed (TMS) in $\text{mph}$.
3. Calculate the Space Mean Speed (SMS) in $\text{mph}$.

**Solution:**

**Step 1: Calculate Individual Speeds ($u_i$)**  
Recall that $1 \text{ mph} \approx 1.467 \text{ ft/s}$. The speed formula is $u_i = d / t_i$.
- **Vehicle 1:**  
  $$u_1 = \frac{1,000\text{ ft}}{15.0\text{ s}} = 66.67 \text{ ft/s}$$
  $$u_1 = 66.67 \div 1.467 = 45.45 \text{ mph}$$
- **Vehicle 2:**  
  $$u_2 = \frac{1,000\text{ ft}}{18.0\text{ s}} = 55.56 \text{ ft/s}$$
  $$u_2 = 55.56 \div 1.467 = 37.87 \text{ mph}$$
- **Vehicle 3:**  
  $$u_3 = \frac{1,000\text{ ft}}{12.0\text{ s}} = 83.33 \text{ ft/s}$$
  $$u_3 = 83.33 \div 1.467 = 56.80 \text{ mph}$$
- **Vehicle 4:**  
  $$u_4 = \frac{1,000\text{ ft}}{16.0\text{ s}} = 62.50 \text{ ft/s}$$
  $$u_4 = 62.50 \div 1.467 = 42.60 \text{ mph}$$

**Step 2: Calculate Time Mean Speed ($u_t$)**  
Find the arithmetic mean of the speeds in $\text{mph}$:
$$u_t = \frac{45.45 + 37.87 + 56.80 + 42.60}{4} = \frac{182.72}{4} = 45.68 \text{ mph}$$

**Step 3: Calculate Space Mean Speed ($u_s$)**  
Since we have the travel times ($t_i$) and the distance ($d$), we use the travel-time-based formula:
$$\sum_{i=1}^4 t_i = 15.0 + 18.0 + 12.0 + 16.0 = 61.0 \text{ seconds}$$
$$u_s = \frac{d \times n}{\sum t_i} = \frac{1,000 \text{ ft} \times 4}{61.0 \text{ s}} = 65.57 \text{ ft/s}$$
Convert to $\text{mph}$:
$$u_s = 65.57 \text{ ft/s} \div 1.467 \approx 44.70 \text{ mph}$$

*Alternative Check using speeds:*
$$u_s = \frac{4}{\frac{1}{45.45} + \frac{1}{37.87} + \frac{1}{56.80} + \frac{1}{42.60}} = \frac{4}{0.0220 + 0.0264 + 0.0176 + 0.0235} = \frac{4}{0.0895} \approx 44.69 \text{ mph}$$
*(Small discrepancy due to intermediate rounding, but both methods confirm $u_s < u_t$).*

---

## Percentile Speeds and Speed Distributions

When speed data is collected, it is organized into a frequency distribution to analyze driver behavior.

```
Cumulative %
  100% |                                      *
   85% |                                 *---|
   50% |                           *-----|   |
   15% |                     *-----|     |   |
    0% +---------------------+-----+-----+---+--
                             |     |     |   |
                            15th  50th  85th |
                                 Speeds (mph)
```

- **85th Percentile Speed:** The speed at or below which $85\%$ of the vehicles travel. This is the industry standard used to establish **regulatory speed limits**, under the assumption that $85\%$ of drivers naturally choose a safe and reasonable speed.
- **50th Percentile Speed (Median Speed):** The speed at which half the vehicles are traveling faster and half are traveling slower.
- **15th Percentile Speed:** The speed at or below which $15\%$ of the vehicles travel. Often used to set **minimum speed limits** (slow drivers present a significant collision hazard).
- **Pace:** The **$10\text{-mph}$ range** of speeds that contains the largest number of vehicles in the sample. For typical traffic distributions, $60\%$ to $80\%$ of all vehicles fall within the pace.

---

## Worked Example: Estimating Percentiles from Grouped Data

**Problem:**  
A speed study yields the following grouped cumulative speed data:

| Speed Group (mph) | Cumulative Percentage (%) |
| :---: | :---: |
| $\le 30$ | 5.0 |
| $\le 35$ | 12.0 |
| $\le 40$ | 42.0 |
| $\le 45$ | 80.0 |
| $\le 50$ | 95.0 |

Calculate the estimated 85th percentile speed using linear interpolation.

**Solution:**

**Step 1: Locate the Group Containing the 85th Percentile**  
Looking at the cumulative percentages, the 85th percentile lies between the speed limits of $45\text{ mph}$ ($80.0\%$) and $50\text{ mph}$ ($95.0\%$).

**Step 2: Apply Linear Interpolation**  
$$S_P = S_{\text{low}} + \frac{P - P_{\text{low}}}{P_{\text{high}} - P_{\text{low}}} \times (S_{\text{high}} - S_{\text{low}})$$

Where:
- $S_P$ = Speed at target percentile ($85\%$)
- $S_{\text{low}}$ = Lower speed boundary ($45\text{ mph}$)
- $S_{\text{high}}$ = Upper speed boundary ($50\text{ mph}$)
- $P$ = Target cumulative percentage ($85.0\%$)
- $P_{\text{low}}$ = Cumulative percentage at lower boundary ($80.0\%$)
- $P_{\text{high}}$ = Cumulative percentage at upper boundary ($95.0\%$)

Substitute values:
$$S_{85} = 45 + \frac{85 - 80}{95 - 80} \times (50 - 45)$$
$$S_{85} = 45 + \frac{5}{15} \times 5 = 45 + 1.67 = 46.7 \text{ mph}$$

---

## Crucial Pitfalls and Exam Traps

- **Plugging TMS into Flow Equations:** Never use Time Mean Speed ($u_t$) to calculate density or flow rates. Density ($k = q / u_s$) must always be calculated using Space Mean Speed ($u_s$). Time mean speed overrepresents faster vehicles because they pass a point more frequently, biasing the arithmetic average upward.
- **Conversion Factor Errors:** Spot speed data is often measured in feet per second ($\text{ft/s}$) over short traps. Be ready to convert to miles per hour ($\text{mph}$). Remember:
  $$1 \text{ mph} = 1.467 \text{ ft/s}$$
  $$\text{Speed in mph} = \frac{\text{Distance (ft)}}{\text{Time (s)} \times 1.467}$$
- **Interpolation Errors:** When interpolating percentiles, double-check that your lower and upper bounds are correct and that the final interpolated speed falls strictly between those boundaries.
