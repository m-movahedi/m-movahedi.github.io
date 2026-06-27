---
title: "Construction Productivity"
weight: 8
date : "2026-05-04"
draft : false
type : "post"
---
# Construction Productivity

Construction productivity calculations on the PE Civil Transportation exam focus on determining crew sizes, estimating cycle times, optimizing equipment configurations, and predicting activity durations. Managing and calculating the output rates of labor and machinery directly impacts both cost and project schedules.

---

## Crew Productivity and Labor-Hours

Productivity is the rate at which work is completed, expressed as output per unit of time or input.

### Key Terms:
- **Production Rate:** Quantity of work completed per unit of time (e.g., $\text{CY/hour}$, $\text{LF/day}$, $\text{SY/crew-hour}$).
- **Labor-Hour (L-H or MH):** The work performed by one person in one hour.
- **Crew-Hour:** The work performed by a standard crew in one hour.

### Formulas:
$$\text{Total Labor-Hours} = \text{Crew Size} \times \text{Duration (hours)}$$
$$\text{Labor-Hours per Unit} = \frac{\text{Total Labor-Hours}}{\text{Total Quantity}}$$
$$\text{Production Rate (Units/Hour)} = \frac{\text{Crew Size}}{\text{Labor-Hours per Unit}}$$

---

## Equipment Productivity: Hauling and Excavation

Optimizing earthmoving operations requires matching the production rates of excavation equipment (excavators, loaders) with hauling equipment (dump trucks).

### 1. Cycle Time ($t_c$)
Cycle time is the time required for a piece of equipment to complete one full cycle of work. For a haul truck:
$$t_c = t_{\text{load}} + t_{\text{haul}} + t_{\text{dump}} + t_{\text{return}} + t_{\text{spot}}$$

Where:
- $t_{\text{load}}$ = Loader cycle time $\times$ number of loader passes to fill the truck
- $t_{\text{haul}}$ = distance $\div$ loaded haul speed
- $t_{\text{return}}$ = distance $\div$ empty return speed
- $t_{\text{dump}}$ = time to dump and maneuver at fill site
- $t_{\text{spot}}$ = time to position truck at loader site

### 2. Truck-to-Loader Matching (Balancing the Fleet)
To ensure that neither the loader nor the trucks sit idle, we calculate the balance point.

- **Loader Production Rate ($P_{\text{loader}}$):**
  $$P_{\text{loader}} = \frac{3600 \text{ sec/hr}}{t_{\text{loader (sec)}}} \times \text{Bucket Capacity} \times \text{Bucket Fill Factor} \times \text{Efficiency}$$

- **Truck Production Rate ($P_{\text{truck}}$):**
  $$P_{\text{truck}} = \frac{60 \text{ min/hr}}{t_c \text{ (min)}} \times \text{Truck Capacity} \times \text{Efficiency}$$

- **Number of Trucks for Balance ($N$):**
  $$N = \frac{\text{Truck Cycle Time (min)}}{\text{Loader Time to Fill One Truck (min)}}$$
  
  Where:
  $$\text{Loader Time to Fill One Truck} = \text{Loader Cycle Time (min)} \times \text{Number of Passes}$$
  $$\text{Number of Passes} = \frac{\text{Truck Capacity}}{\text{Loader Bucket Capacity}} \text{ (rounded up to nearest integer)}$$

#### Balancing Scenarios:
- If $N_{\text{actual}} < N_{\text{balance}}$: The system is **truck-limited** (excavator sits idle). Overall production is governed by the trucks:
  $$\text{System Production} = N_{\text{actual}} \times P_{\text{truck}}$$
- If $N_{\text{actual}} > N_{\text{balance}}$: The system is **loader-limited** (trucks wait in queue). Overall production is governed by the loader:
  $$\text{System Production} = P_{\text{loader}}$$

---

## Worked Example: Loader-Truck Fleet Balancing

**Problem:**  
An excavator with a $3.0 \text{ BCY}$ bucket is loading a fleet of $15 \text{ BCY}$ dump trucks. 
- Excavator cycle time: $36 \text{ seconds}$
- Excavator bucket fill factor: $90\%$
- Truck travel distance: $5.0 \text{ miles}$ (one-way)
- Average loaded truck speed: $30 \text{ mph}$
- Average empty truck speed: $45 \text{ mph}$
- Truck dump and maneuver time: $2.0 \text{ minutes}$
- Truck spotting time at excavator: $1.0 \text{ minute}$
- Operational efficiency: $50 \text{ min/hour}$ (or $83.3\%$)

Calculate:
1. The number of excavator passes required to fill one truck.
2. The cycle time of a single truck.
3. The balanced number of trucks required.
4. The system hourly production (BCY/hr) if $6$ trucks are active.

**Solution:**

**Step 1: Calculate Excavator Passes per Truck**
$$\text{Passes} = \frac{\text{Truck Capacity}}{\text{Excavator Bucket Capacity} \times \text{Fill Factor}}$$
$$\text{Passes} = \frac{15 \text{ BCY}}{3.0 \text{ BCY} \times 0.90} = 5.56 \text{ passes}$$
Since the excavator bucket operates in whole passes:
$$\text{Passes Required} = 6 \text{ passes (representing a nominal load of } 6 \times 2.7\text{ BCY} = 16.2\text{ BCY, capped by truck size of } 15\text{ BCY)}$$
We assume the excavator delivers exactly $15\text{ BCY}$ in $6$ passes.

**Step 2: Calculate Loader Time to Fill One Truck**
$$\text{Time to Fill} = 6 \text{ passes} \times 36 \text{ sec/pass} = 216 \text{ seconds} = 3.6 \text{ minutes}$$

**Step 3: Calculate Truck Cycle Time**
- $\text{Haul Time} = \frac{5.0 \text{ miles}}{30 \text{ miles/hour}} \times 60 \text{ min/hour} = 10.0 \text{ minutes}$
- $\text{Return Time} = \frac{5.0 \text{ miles}}{45 \text{ miles/hour}} \times 60 \text{ min/hour} = 6.67 \text{ minutes}$
- $\text{Total Cycle Time} (t_c) = t_{\text{load}} + t_{\text{haul}} + t_{\text{dump}} + t_{\text{return}} + t_{\text{spot}}$
  $$t_c = 3.6 + 10.0 + 2.0 + 6.67 + 1.0 = 23.27 \text{ minutes}$$

**Step 4: Calculate the Balanced Number of Trucks ($N$)**
$$N = \frac{t_c}{\text{Time to Fill}} = \frac{23.27 \text{ min}}{3.6 \text{ min}} \approx 6.46 \text{ trucks}$$

**Step 5: Determine Production for 6 Active Trucks**
Since the active fleet has $6$ trucks, which is less than the balanced number ($6.46$), the fleet is **truck-limited**. Production is governed by the trucks:
$$\text{Single Truck Production} = \frac{50 \text{ min/hr (efficiency)}}{23.27 \text{ min/cycle}} \times 15 \text{ BCY/cycle} \approx 32.23 \text{ BCY/hour}$$
$$\text{Total Fleet Production} = 6 \text{ trucks} \times 32.23 \text{ BCY/hour} = 193.4 \text{ BCY/hour}$$

---

## Equipment Productivity: Compaction and Paving

Compactors (rollers) and asphalt pavers have productivity formulas based on linear speed, width, and lift thickness.

### Compactor Production Rate Formula
The production of a roller is calculated as:

$$P = \frac{S \times W \times L \times E}{N \times 27}$$

Where:
- $P$ = production rate ($\text{CCY/hour}$)
- $S$ = roller speed ($\text{ft/hour}$). *Note: $1 \text{ mph} = 5,280 \text{ ft/hour}$*
- $W$ = effective compaction width ($\text{ft}$) (total width minus width overlap, typically $0.5 \text{ to } 1.0\text{ ft}$)
- $L$ = compacted lift thickness ($\text{ft}$). *Note: convert thickness in inches to feet by dividing by 12*
- $E$ = operational efficiency (typically $0.80 \text{ to } 0.90$, or $50\text{ min/hour} = 0.833$)
- $N$ = number of passes required to achieve density
- $27$ = conversion factor from cubic feet to cubic yards ($\text{ft}^3/\text{yd}^3$)

Combining unit conversions, the formula can be expressed as:
$$P\text{ (CCY/hr)} = \frac{S\text{ (mph)} \times 5280 \times W\text{ (ft)} \times \left(\frac{t\text{ (in)}}{12}\right) \times E}{N \times 27} = \frac{16.3 \times S \times W \times t \times E}{N}$$

---

## Worked Example: Compactor Production

**Problem:**  
A vibratory roller is compacting an aggregate base course.
- Roller width: $66 \text{ inches}$
- Required overlap between runs: $6 \text{ inches}$
- Speed of roller: $3.0 \text{ mph}$
- Compacted lift thickness: $6.0 \text{ inches}$
- Number of passes required: $4$
- Efficiency: $45 \text{ min/hour}$

Calculate the production rate of this roller in Compacted Cubic Yards per hour (CCY/hr).

**Solution:**

**Step 1: Calculate Effective Compaction Width ($W$)**
$$W = \text{Width} - \text{Overlap} = 66 \text{ in} - 6 \text{ in} = 60 \text{ inches} = 5.0 \text{ feet}$$

**Step 2: Convert Units**
- $S = 3.0 \text{ mph} \times 5,280 \text{ ft/mile} = 15,840 \text{ ft/hour}$
- $L = 6.0 \text{ inches} \div 12 \text{ in/ft} = 0.50 \text{ feet}$
- $E = 45 \text{ min/hour} \div 60 \text{ min/hour} = 0.75$

**Step 3: Calculate Production Rate**
$$P = \frac{15,840 \text{ ft/hr} \times 5.0 \text{ ft} \times 0.50 \text{ ft} \times 0.75}{4 \text{ passes} \times 27 \text{ ft}^3/\text{yd}^3}$$
$$P = \frac{29,700}{108} = 275 \text{ CCY/hour}$$

---

## Schedule Impacts of Productivity

Calculating the duration of an activity links productivity to scheduling:

$$\text{Duration (Days)} = \frac{\text{Total Work Quantity}}{\text{Daily Production Rate}}$$
$$\text{Daily Production Rate} = \text{Production Rate per Hour} \times \text{Work Hours per Day}$$

### Adjusting for Crew Size:
- Doubling the crew size typically doubles the production rate (halving the duration), provided there are no crowding inefficiencies.
- If efficiency drops due to larger crew sizes, apply the efficiency factor:
  $$\text{Adjusted Production Rate} = \text{Base Production Rate} \times \text{New Crew Size} \times \text{Efficiency Factor}$$

---

## Crucial Pitfalls and Exam Traps

- **Unit Confusion:** Verify if speed is given in $\text{mph}$ or $\text{fpm}$ (feet per minute). $1 \text{ mph} = 88 \text{ fpm}$.
- **Overlap in Width:** Remember to subtract the overlap from the physical drum/roller width when calculating compaction rates.
- **Work Hours vs. Pay Hours:** Production calculations should only use active working hours (e.g., $50 \text{ min/hr}$ efficiency), whereas cost calculations use total paid hours.
- **Swell/Shrinkage Matching:** When matching excavator and truck productivity, verify whether capacities are specified in BCY, LCY, or CCY. If the excavator bucket capacity is in LCY, but the truck is in BCY, convert them to a common unit before matching.
