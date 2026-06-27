# Traffic Impact Studies

A Traffic Impact Study (TIS) is a specialized engineering study that evaluates the effects of a proposed land development on the surrounding transportation network. On the PE Civil Transportation exam, TIS questions test your ability to perform **Build vs. No-Build comparisons**, calculate **background traffic growth**, assign **development trips** to specific turning movements, and identify necessary **mitigation measures**.

---

## The Traffic Impact Study Process

A TIS follows a logical progression of traffic demand forecasting:

```
[ Existing Traffic ] + [ Background Growth + Approved Projects ]
                               |
                               v
                     [ No-Build Condition ]
                               |
                   + [ Site-Generated Trips ] (Assigned to network)
                               |
                               v
                      [ Build Condition ]
                               |
           Is LOS acceptable? ---> Yes ---> [ Approve Project ]
                               |
                              No
                               v
                     [ Identify Mitigations ]
```

1. **Define the Study Area and Horizon Year:** Identify which intersections and driveways are likely to be affected. The horizon year is usually the year of project completion or 5-10 years post-opening.
2. **Determine Existing Traffic Volumes:** Collect count data for peak hours (usually AM and PM commuter peaks).
3. **Project Future Background Traffic (No-Build Condition):** Project existing traffic to the horizon year by applying an annual growth rate and adding traffic from other approved (but not yet built) developments.
4. **Forecast Site-Generated Traffic:** Use ITE methods to calculate trips, adjusting for pass-by and internal capture.
5. **Distribute and Assign Site Trips:** Allocate site trips to the study area roadways and intersections based on regional travel patterns, market studies, or gravity models.
6. **Analyze Future Traffic Operations (Build Condition):** Add the assigned site trips to the No-Build volumes. Analyze the Levels of Service (LOS), delays, and queue lengths for both the Build and No-Build scenarios.
7. **Develop Mitigation Measures:** If the development causes the LOS to fall below the local agency threshold (typically LOS D in urban areas, LOS C in rural areas), design mitigations (e.g., adding turn lanes, installing signals, or re-striping).

---

## Projecting Background Traffic

Background traffic at the horizon year is modeled using either linear or compound growth models.

### 1. Linear Growth Model:
$$V_{\text{horizon}} = V_{\text{existing}} \times (1 + r \times n)$$

### 2. Compound Growth Model:
$$V_{\text{horizon}} = V_{\text{existing}} \times (1 + r)^n$$

Where:
- $V_{\text{existing}}$ = current traffic volume
- $r$ = annual growth rate (expressed as a decimal)
- $n$ = number of years between existing counts and the horizon year

---

## Worked Example: Build vs. No-Build Projection

**Problem:**  
A developer plans to build an office park that will generate $400\text{ vehicles/hour}$ during the PM peak hour (inbound and outbound combined). The study focuses on an adjacent signalized intersection.
- **Existing Eastbound Left-Turn (EBLT) Volume:** $150 \text{ vehicles/hour}$
- **Annual Background Growth Rate:** $3.0\%$ (compounded annually)
- **TIS Horizon Year:** $5\text{ years}$ from today
- **Trip Distribution:** Market analysis indicates that $35\%$ of the site-generated traffic will perform the Eastbound Left-Turn (EBLT) movement at the intersection.

Calculate:
1. The Eastbound Left-Turn (EBLT) volume under the 5-year **No-Build Condition**.
2. The Eastbound Left-Turn (EBLT) volume under the 5-year **Build Condition**.

**Solution:**

**Step 1: Calculate the 5-Year No-Build Volume**  
Apply the compound growth formula to the existing EBLT volume:
- $V_{\text{existing}} = 150 \text{ veh/hr}$
- $r = 3.0\% = 0.03$
- $n = 5 \text{ years}$
$$V_{\text{No-Build}} = V_{\text{existing}} \times (1 + r)^n$$
$$V_{\text{No-Build}} = 150 \times (1 + 0.03)^5 = 150 \times (1.03)^5 = 150 \times 1.1593 \approx 173.9 \text{ veh/hr}$$

Rounding to the nearest whole vehicle:
$$V_{\text{No-Build}} \approx 174 \text{ veh/hr}$$

**Step 2: Calculate Site-Generated Trips Performing the EBLT Movement**  
Determine how many office park trips will be added to this specific movement:
- $\text{Total Site Trips} = 400 \text{ veh/hr}$
- $\text{EBLT Split} = 35\% = 0.35$
$$V_{\text{site-EBLT}} = 400 \times 0.35 = 140 \text{ veh/hr}$$

**Step 3: Calculate the 5-Year Build Volume**  
Add the site-generated EBLT trips to the projected No-Build EBLT volume:
$$V_{\text{Build}} = V_{\text{No-Build}} + V_{\text{site-EBLT}}$$
$$V_{\text{Build}} = 173.9 \text{ veh/hr} + 140 \text{ veh/hr} = 313.9 \text{ veh/hr}$$

Rounding to the nearest whole vehicle:
$$V_{\text{Build}} \approx 314 \text{ veh/hr}$$

---

## Intersection Mitigation Decisions

A TIS is used to determine if mitigations are necessary. Standard triggers include:
- **LOS Degradation:** The Level of Service drops from an acceptable level (e.g., LOS C) in the No-Build to an unacceptable level (e.g., LOS E) in the Build.
- **Delay Increase:** The average control delay at an intersection increases by a significant margin (e.g., more than 5 or 10 seconds), even if the LOS letter grade remains the same.
- **Queue Spillover:** The projected queue length for a turn lane exceeds the physical storage length of the bay, causing it to block through traffic.

### Common Mitigations:
- **Adding Turn Lanes:** A dedicated right-turn or left-turn lane removes turning vehicles from the through-traffic stream, increasing intersection capacity.
- **Signal Optimization:** Adjusting cycle lengths, green splits, or offsets to better accommodate the new traffic pattern.
- **Adding Signal Phases:** Introducing a protected left-turn phase (green arrow) if left-turn delay and conflict rates increase.

---

## Crucial Pitfalls and Exam Traps

- **Double-Counting Site Trips:** When calculating No-Build traffic, do not include the proposed site trips. The No-Build condition represents the future *without* your project. Site trips are only added in the Build condition.
- **Growth Model Selection:** Read the problem carefully to determine if the growth rate is **linear** or **compound**. Compounded growth yields higher volumes over longer periods.
- **Applying Growth to Site-Generated Trips:** Do not grow the site-generated trips over time unless the project is built in phases over several years. Site trips are added as a static block representing full build-out.
- **Turning Movement vs. Approach Volumes:** Verify if a percentage is applied to the total approach volume or to a specific turning movement.
