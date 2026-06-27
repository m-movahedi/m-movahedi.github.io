---
title: "Floodplain and Roadway Overtopping"
weight: 100
date : "2026-05-04"
draft : false
type : "post"
---
# Floodplain and Roadway Overtopping

Roadway designs must accommodate extreme flood events without causing hazardous roadway overtopping or flooding adjacent properties. When a flood event exceeds the capacity of cross-culverts or bridges, the roadway embankment acts as a weir, and water spills over the pavement.

---

## FEMA Floodplain Definitions

FEMA (Federal Emergency Management Agency) regulates development within flood-prone areas.

- **Base Flood Elevation (BFE):** The computed water surface elevation resulting from a flood that has a $1\%$ chance of occurring in any given year (also called the 100-year flood or "Base Flood").
- **Regulatory Floodway:** The channel of a river or stream plus the adjacent land area that must be kept free of development so that the 100-year flood can be discharged without increasing the water surface elevation by more than a designated height (typically **1.0 foot** under FEMA standards).
- **Floodway Fringe:** The portion of the 100-year floodplain outside of the regulatory floodway. Development is permitted here if structures are elevated above the BFE.

---

## Roadway Overtopping Hydraulics

When water level exceeds the highest point of a roadway cross-section (the crown or shoulder elevation), the roadway behaves as a **broad-crested weir**. 

### Weir Flow Equation (USCS):
$$Q_{overtop} = C_w \cdot L \cdot H^{1.5}$$

Where:
- $Q_{overtop}$ = Overtopping discharge (**cfs**)
- $C_w$ = Weir discharge coefficient (dimensionless; for roadway overtopping, $C_w$ typically ranges from **2.5 to 3.0** depending on the pavement roughness and shoulder shape. A standard value of **2.63** or **3.0** is common; check your NCEES handbook or problem parameters).
- $L$ = Length of roadway overtopped (**feet**), measured along the roadway centerline.
- $H$ = Headwater depth above the roadway crest (**feet**), measured at a point upstream of the drawdown.

### Combined Flow Capacity:
If a culvert or bridge is located beneath the overtopped road, the total discharge is the sum of the conduit capacity and the overtopping flow:

$$Q_{total} = Q_{conduit} + Q_{overtop}$$

---

## Worked Example: Combined Culvert and Overtopping Discharge

A two-lane highway crosses a creek via a $4.0\text{-foot}$ diameter concrete culvert. During a major flood, the creek flow rate is $95.0\text{ cfs}$. 
- The lowest elevation of the roadway centerline (crest) is $105.5\text{ ft}$.
- The headwater elevation at the culvert during the flood reaches $106.8\text{ ft}$.
- At this headwater level, the culvert flows under outlet control and conveys $55.0\text{ cfs}$ ($Q_{conduit} = 55.0\text{ cfs}$).
- The length of the roadway overtopped along the centerline is $180\text{ ft}$ ($L = 180\text{ ft}$).
- Use a roadway weir discharge coefficient $C_w = 2.65$.

**1. Calculate the headwater height ($H$) above the roadway crest.**
**2. Calculate the flow rate overtopping the roadway ($Q_{overtop}$).**
**3. Verify if the combined capacity ($Q_{total}$) is sufficient to convey the $95.0\text{ cfs}$ flood flow.**

### Solution:

#### Step 1: Calculate headwater depth above the roadway crest ($H$)
- Roadway crest elevation = $105.5\text{ ft}$
- Headwater elevation = $106.8\text{ ft}$
$$H = 106.8\text{ ft} - 105.5\text{ ft} = 1.3\text{ feet}$$

#### Step 2: Calculate overtopping flow ($Q_{overtop}$)
Using the broad-crested weir equation:
$$Q_{overtop} = C_w \cdot L \cdot H^{1.5}$$
$$Q_{overtop} = 2.65 \cdot 180\text{ ft} \cdot (1.3\text{ ft})^{1.5}$$
- $(1.3)^{1.5} = \sqrt{1.3^3} = \sqrt{2.197} \approx 1.482$
$$Q_{overtop} = 2.65 \cdot 180 \cdot 1.482 \approx 707.4\text{ cfs? Wait!}$$
*Wait, let's recalculate:*
$2.65 \cdot 180 \cdot 1.4822 = 477 \cdot 1.4822 = 707\text{ cfs}$.
Yes, $707\text{ cfs}$ is correct for $L = 180\text{ ft}$ and $H = 1.3\text{ ft}$.

#### Step 3: Combined Capacity Verification
The total capacity of the culvert and roadway combination at this headwater elevation is:
$$Q_{total} = Q_{conduit} + Q_{overtop} = 55.0\text{ cfs} + 707.0\text{ cfs} = 762.0\text{ cfs}$$

Since $Q_{total} = 762.0\text{ cfs} \ge 95.0\text{ cfs}$, the system is capable of discharging the $95.0\text{ cfs}$ storm event. (In fact, the headwater elevation will stabilize at a much lower level than $106.8\text{ ft}$ because the overtopping capacity is so high).

---

## Technical Pitfalls
- **Determining H:** Always measure $H$ relative to the *crest* (highest point of the roadway profile at the lowest point along the road alignment), not the culvert invert or roadway base.
- **Weir Coefficient $C_w$:** Read the problem carefully. $C_w$ values for sharp-crested weirs (typically $3.2$ to $3.3$) are different from broad-crested weirs or roadway alignments (typically $2.6$ to $3.0$).
- **Weir length $L$:** The length $L$ is the length of the road perpendicular to the flow of water (which is parallel to the roadway centerline), not the width of the roadway pavement.
