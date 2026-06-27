# Peak Hour Factor and Flow Rates

In traffic analysis, traffic flow is not uniform throughout an hour. A roadway segment may experience high congestion during a brief portion of the hour (e.g., a 15-minute surge) even if the total hourly volume is within the roadway's theoretical capacity. To account for this variation, the Highway Capacity Manual (HCM) uses the **Peak Hour Factor (PHF)** to convert hourly volumes into equivalent peak-period flow rates.

---

## The Peak Hour Factor (PHF)

The Peak Hour Factor represents the relationship between the hourly volume and the peak rate of flow within that hour (typically measured in 15-minute intervals).

### Formula:
$$PHF = \frac{V}{4 \times V_{15}}$$

Where:
- $V$ = total hourly volume during the peak hour ($\text{vehicles/hour}$)
- $V_{15}$ = volume during the single busiest 15-minute interval of the peak hour ($\text{vehicles/15-min}$)
- $4$ = multiplier to scale the 15-minute count to an equivalent hourly rate ($4 \text{ quarters/hour}$)

### Physical Boundaries of PHF:
- **Maximum PHF = 1.00:** Occurs when traffic is distributed perfectly evenly across all four 15-minute intervals ($V_{15} = V/4$).
- **Minimum PHF = 0.25:** Occurs when all hourly traffic arrives in a single 15-minute interval (with zero vehicles in the other three intervals).
- **Typical Ranges:**
  - Urban/congested areas: $0.85$ to $0.98$ (more stable, continuous traffic).
  - Rural/low-volume areas: $0.70$ to $0.85$ (more sporadic traffic).

---

## Peak Flow Rate ($v$)

To evaluate the operational capacity and level of service (LOS) of a facility, we use the equivalent hourly flow rate ($v$) based on the peak 15-minute interval. This represents the rate of flow if the peak 15-minute surge were to persist for a full hour.

$$v = \frac{V}{PHF}$$

Where:
- $v$ = equivalent peak hourly flow rate ($\text{vehicles/hour}$ or $\text{passenger cars/hour}$)
- $V$ = total hourly volume ($\text{vehicles/hour}$)
- $PHF$ = Peak Hour Factor

**Note:** If the problem asks for flow rate in *passenger cars per hour per lane* ($\text{pc/h/ln}$ or $\text{pcphpl}$), we must also adjust the volume for lane counts, heavy vehicles ($f_{HV}$), and driver population ($f_p$) using the standard HCM capacity adjustment formulas:

$$v_p = \frac{V}{PHF \times N \times f_{HV} \times f_p}$$

---

## Worked Example: Calculating PHF and Peak Flow Rate from 15-Minute Counts

**Problem:**  
A direction of a freeway has the following traffic counts recorded during the peak hour:

- 5:00 PM to 5:15 PM: $450 \text{ vehicles}$
- 5:15 PM to 5:30 PM: $520 \text{ vehicles}$
- 5:30 PM to 5:45 PM: $610 \text{ vehicles}$
- 5:45 PM to 6:00 PM: $480 \text{ vehicles}$

Calculate:
1. The total hourly volume ($V$).
2. The peak 15-minute volume ($V_{15}$).
3. The Peak Hour Factor (PHF).
4. The equivalent peak hourly flow rate ($v$).

**Solution:**

**Step 1: Calculate Total Hourly Volume ($V$)**  
Sum the volumes of the four 15-minute intervals:
$$V = 450 + 520 + 610 + 480 = 2,060 \text{ vehicles}$$

**Step 2: Identify Peak 15-Minute Volume ($V_{15}$)**  
The busiest 15-minute interval is between 5:30 PM and 5:45 PM:
$$V_{15} = 610 \text{ vehicles}$$

**Step 3: Calculate the Peak Hour Factor (PHF)**  
$$PHF = \frac{V}{4 \times V_{15}}$$
$$PHF = \frac{2,060}{4 \times 610} = \frac{2,060}{2,440} \approx 0.844$$

**Step 4: Calculate the Peak Flow Rate ($v$)**  
$$v = \frac{V}{PHF}$$
$$v = \frac{2,060}{0.844} \approx 2,440 \text{ vehicles/hour}$$

*Alternative Check:*  
The equivalent flow rate is simply the peak 15-minute count scaled up to an hour:
$$v = V_{15} \times 4 = 610 \times 4 = 2,440 \text{ vehicles/hour}$$
Both methods yield the same results.

---

## Worked Example: Estimating Peak 15-Minute Volume

**Problem:**  
A highway is carrying an hourly volume of $1,600 \text{ vehicles/hour}$. If the Peak Hour Factor (PHF) is $0.80$, calculate the number of vehicles that pass through the segment during the busiest 15-minute interval.

**Solution:**

**Step 1: Rearrange the PHF equation to solve for $V_{15}$**
$$PHF = \frac{V}{4 \times V_{15}} \implies V_{15} = \frac{V}{4 \times PHF}$$

**Step 2: Substitute values and solve**
- $V = 1,600 \text{ vehicles}$
- $PHF = 0.80$
$$V_{15} = \frac{1,600}{4 \times 0.80} = \frac{1,600}{3.2} = 500 \text{ vehicles}$$

*Interpretation:* During the peak hour, the busiest 15 minutes will see $500$ vehicles. If this rate persisted for the entire hour, the flow rate would be $500 \times 4 = 2,000 \text{ vehicles/hour}$, which is significantly higher than the actual hourly volume of $1,600$ vehicles.

---

## Crucial Pitfalls and Exam Traps

- **Mathematical Bounds Check:** The Peak Hour Factor must always be between $0.25$ and $1.00$. If you calculate a PHF outside this range (e.g. $1.15$), you have made an error (often putting the peak 15-minute rate in the numerator).
- **Hourly Volume vs. Peak Flow Rate in Capacity Analysis:** When using HCM methods (e.g., finding the level of service of a freeway segment or a signalized intersection), never plug the raw hourly volume ($V$) directly into capacity equations. You must divide it by the PHF to find the peak flow rate ($v$). Using the unadjusted hourly volume will underestimate congestion and overestimate level of service.
- **Data Identification:** Ensure that the 15-minute count you use is the *maximum* value of the four intervals, not the first or the last.
