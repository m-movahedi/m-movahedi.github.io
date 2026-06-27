# Crash Data Fundamentals

Traffic safety analysis begins with the collection and quantitative assessment of crash data. The NCEES PE Civil Transportation exam frequently tests safety calculations, specifically focusing on exposure measures, crash rates for segments and intersections, crash frequency, and crash severity classification.

---

## Crash Frequency vs. Crash Rate

Traffic safety analysis utilizes two primary metrics to evaluate the safety performance of a location:
* **Crash Frequency ($F$)**: The raw count of crashes occurring at a specific location over a designated time period (typically expressed as crashes per year). While simple to calculate, frequency does not account for differences in traffic volume.
* **Crash Rate ($R$)**: A normalized metric that relates the number of crashes to traffic exposure (the volume of vehicles using the facility). This allows for a fair comparison of safety performance between locations with different traffic volumes.

---

## Traffic Exposure and Crash Rate Equations

To compute crash rates, we use different exposure metrics depending on whether the study area is a roadway segment or an intersection. These equations are found in the NCEES PE Civil Reference Handbook.

### 1. Roadway Segments (Crashes per 100 Million Vehicle-Miles of Travel, $R_{seg}$)
For roadway segments, exposure is measured in Million Vehicle-Miles of Travel (MVM) or 100 Million Vehicle-Miles (100 MVM):

$$R_{seg} = \frac{C \times 10^8}{\text{ADT} \times 365 \times L \times Y}$$

Where:
* $R_{seg}$ = segment crash rate (crashes per $100 \text{ million vehicle-miles}$)
* $C$ = number of crashes observed during the study period
* $\text{ADT}$ = Average Daily Traffic on the segment ($veh/day$)
* $L$ = length of the roadway segment ($\text{miles}$)
* $Y$ = number of years in the study period

### 2. Intersections (Crashes per Million Entering Vehicles, $R_{int}$)
For intersections, exposure is measured in Million Entering Vehicles (MEV):

$$R_{int} = \frac{C \times 10^6}{\sum \text{ADT}_{\text{app}} \times 365 \times Y}$$

Where:
* $R_{int}$ = intersection crash rate (crashes per $\text{million entering vehicles}$)
* $C$ = number of crashes observed at the intersection during the study period
* $\sum \text{ADT}_{\text{app}}$ = sum of the Average Daily Traffic on all entering approaches to the intersection ($veh/day$)
* $Y$ = number of years in the study period

---

## Crash Severity and the KABCO Scale

Crashes are categorized by their most severe outcome using the KABCO scale, a standardized classification system developed by the Federal Highway Administration (FHWA):

* **K (Fatal Injury)**: One or more deaths occurring within 30 days of the crash.
* **A (Suspected Serious Injury)**: Incapacitating injuries that prevent the victim from walking, driving, or continuing normal activities (e.g., broken bones, severe lacerations).
* **B (Suspected Minor Injury)**: Non-incapacitating evident injuries (e.g., minor cuts, abrasions, bruising).
* **C (Possible Injury)**: Non-evident complaints of pain or temporary symptoms (e.g., whiplash, dizziness).
* **O (Property Damage Only - PDO)**: No injuries; only vehicle or roadside property damage occurs.

### Equivalent Property Damage Only (EPDO)
To compare sites based on severity rather than just crash counts, engineers use the EPDO index. Different weightings are applied to fatal/injury crashes relative to PDO crashes (e.g., a fatal crash might be weighted as 542, an injury as 30, and a PDO as 1). The total EPDO crashes is:
$$\text{EPDO} = w_K \cdot C_K + w_A \cdot C_A + w_B \cdot C_B + w_C \cdot C_C + w_O \cdot C_O$$

---

## Critical Pitfalls and Exam Traps

1. **Forgetting the Study Duration ($Y$)**:
   The exam will often give crash counts over a multi-year period (e.g., "150 crashes occurred over a 3-year period"). A common trap is omitting $Y=3$ in the denominator, which will inflate the crash rate by a factor of 3.

2. **Summing Major and Minor Approach ADTs for Intersections**:
   Ensure you sum the ADT of all entering approaches. For a standard 4-leg intersection, you must add the entering ADT of all 4 legs. If a problem states "the major street ADT is 15,000 and the minor street ADT is 5,000," the total entering volume is $15,000 + 5,000 = 20,000 \text{ veh/day}$ (assuming these are two-way ADT values representing all entering legs, or read carefully to see if the values represent entering volumes directly).

3. **Mixing Up the Constants ($10^6$ vs. $10^8$)**:
   * For segments, the standard rate is per **100 MVM**, so the multiplier in the numerator is $10^8$.
   * For intersections, the standard rate is per **MEV**, so the multiplier in the numerator is $10^6$.

---

## Worked Examples

### Worked Example 1: Segment Crash Rate
A $4.5\text{-mile}$ rural multilane highway segment has an ADT of $12,500 \text{ veh/day}$. Over a $3\text{-year}$ period, the state police recorded $95$ crashes on this segment.

**Calculate the crash rate of the segment in crashes per 100 Million Vehicle-Miles (100 MVM).**

#### Solution:
Identify variables:
* $C = 95$ crashes
* $\text{ADT} = 12,500 \text{ veh/day}$
* $L = 4.5 \text{ miles}$
* $Y = 3 \text{ years}$

Apply the segment crash rate equation:
$$R_{seg} = \frac{C \times 10^8}{\text{ADT} \times 365 \times L \times Y}$$
$$R_{seg} = \frac{95 \times 10^8}{12,500 \times 365 \times 4.5 \times 3}$$
$$R_{seg} = \frac{9,500,000,000}{61,593,750} = 154.24 \text{ crashes/100 MVM}$$

---

### Worked Example 2: Intersection Crash Rate
A 4-leg urban intersection has the following Average Daily Traffic (ADT) values on its approaches:
* Eastbound entry: $6,500 \text{ veh/day}$
* Westbound entry: $5,800 \text{ veh/day}$
* Northbound entry: $3,200 \text{ veh/day}$
* Southbound entry: $2,900 \text{ veh/day}$

Over a $5\text{-year}$ period, a total of $32$ crashes were recorded at the intersection.

**Calculate the intersection crash rate in crashes per Million Entering Vehicles (MEV).**

#### Solution:
Identify variables:
* $C = 32$ crashes
* $Y = 5$ years
* Calculate $\sum \text{ADT}_{\text{app}}$:
  $$\sum \text{ADT}_{\text{app}} = 6,500 + 5,800 + 3,200 + 2,900 = 18,400 \text{ veh/day}$$

Apply the intersection crash rate equation:
$$R_{int} = \frac{C \times 10^6}{\sum \text{ADT}_{\text{app}} \times 365 \times Y}$$
$$R_{int} = \frac{32 \times 10^6}{18,400 \times 365 \times 5}$$
$$R_{int} = \frac{32,000,000}{33,580,000} = 0.953 \text{ crashes/MEV}$$

---

## References and Standards
* *NCEES PE Civil Reference Handbook*, Section 6.3 (Traffic Safety).
* *Highway Safety Manual (HSM) 1st Edition*, Chapter 3 (Fundamentals).
