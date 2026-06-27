# Transit Stop and Bus Operations Basics

Integrating transit facilities into highway design requires balancing traffic flow with passenger safety and accessibility. Design criteria are governed by the AASHTO Guide for the Geometric Design of Transit Facilities on Highways and Streets and TCRP (Transit Cooperative Research Program) guidelines.

---

## Bus Stop Configurations

There are three primary on-street bus stop configurations:

### 1. Curbside Stop (In-Lane Stop)
Buses stop directly in the travel lane next to the curb.
- **Advantages:** Simple to design, requires minimal right-of-way, and permits easy re-entry for the bus.
- **Disadvantages:** Blocks the right-hand travel lane, causing delays for passenger vehicles and potential rear-end conflicts.

### 2. Bus Bay (Pullout / Turnout)
Buses pull out of the travel lane into a dedicated pavement area.
- **Advantages:** Clears the travel lane for vehicle traffic, increasing roadway capacity and safety.
- **Disadvantages:** Requires significant right-of-way. The bus faces delays when re-entering the travel lane, especially on high-volume roads.

### 3. Bus Bulb (Curb Extension Stop)
A curb extension that extends the sidewalk to the edge of the travel lane.
- **Advantages:** Passengers board directly from the bulb; the bus does not have to pull out of the travel lane, avoiding re-entry delays. It also preserves on-street parking spaces adjacent to the stop.

---

## Geometric Design of a Bus Bay (Turnout)

A standard bus bay consists of three distinct geometric components:

1. **Entrance Taper:** Allows the bus to transition out of the travel lane.
2. **Deceleration and Storage Area:** Provides space for the bus to slow down and stop. The length depends on the number of buses expected to occupy the bay simultaneously.
   - Standard bus length = **40 feet**
   - Articulated bus length = **60 feet**
3. **Exit (Departure) Taper:** Allows the bus to accelerate and transition back into the travel lane.

### Recommended Dimensions for Bus Bays (at 35-40 mph):
- **Bay Width:** Typically **12 feet** (minimum 10 feet).
- **Entrance Taper Ratio:** Typically **5:1 to 10:1** (flat).
- **Exit Taper Ratio:** Typically **10:1 to 15:1** (requires a longer taper to ease re-entry).

---

## ADA Transit Boarding Pad Requirements

To comply with the Americans with Disabilities Act (ADA), every bus stop boarding area must feature a passenger loading pad:
- **Minimum Dimensions:** **60 inches (5.0 feet)** minimum parallel to the roadway, by **96 inches (8.0 feet)** minimum perpendicular to the roadway (measured from the curb face). This provides room to deploy a wheelchair lift and allow a passenger to exit.
- **Slope Constraints:** 
  - Parallel to the roadway: Must match the grade of the roadway.
  - Perpendicular to the roadway (for drainage): Maximum **2.0% (1:50)**.

---

## Worked Example: Bus Turnout Bay Sizing

An engineer is designing a mid-block bus turnout bay on a suburban roadway with a design speed of $40\text{ mph}$.
- The bay width is to be $12\text{ feet}$.
- The design vehicle is a standard single-unit bus (length = $40\text{ feet}$).
- The turnout must accommodate a single bus at any one time.
- The entrance taper ratio is set to $10:1$ (longitudinal distance to lateral shift).
- The exit taper ratio is set to $15:1$.
- A deceleration/stopping lane length of $80\text{ feet}$ is provided before the storage area.

**Calculate the total length ($L_{total}$) of the pavement widening required for this bus turnout (including tapers, deceleration lane, and bus storage area).**

### Solution:

#### Step 1: Calculate the Entrance Taper Length ($L_{en}$)
The lateral shift ($W$) is the width of the bay, which is $12\text{ feet}$.
Using the entrance taper ratio of $10:1$:
$$L_{en} = W \cdot \text{Ratio}_{en} = 12\text{ ft} \cdot 10 = 120\text{ feet}$$

#### Step 2: Calculate the Exit Taper Length ($L_{ex}$)
Using the exit taper ratio of $15:1$:
$$L_{ex} = W \cdot \text{Ratio}_{ex} = 12\text{ ft} \cdot 15 = 180\text{ feet}$$

#### Step 3: Determine the Storage and Deceleration Lengths
- The storage area must accommodate one standard bus ($40\text{ feet}$).
- The deceleration lane length is $80\text{ feet}$.
- Combined length ($L_{mid}$):
  $$L_{mid} = \text{Deceleration Length} + \text{Storage Length} = 80\text{ ft} + 40\text{ ft} = 120\text{ feet}$$

#### Step 4: Calculate Total Length ($L_{total}$)
$$L_{total} = L_{en} + L_{mid} + L_{ex} = 120\text{ ft} + 120\text{ ft} + 180\text{ ft} = 420\text{ feet}$$

*Result:* The total length of the bus turnout facility along the roadway is **420 feet**.

---

## Technical Pitfalls
- **ADA Pad Dimensions:** Remember that the **96-inch (8-foot)** dimension is *perpendicular* to the curb, and the **60-inch (5-foot)** dimension is *parallel* to the curb. Don't swap these dimensions.
- **Taper Calculations:** Ensure you multiply the taper ratio by the *lateral width* of the bay ($10$ or $12\text{ ft}$), not the length of the bus.
- **Bus Lengths:** Know the standard design lengths for transit vehicles: **40 feet** for standard transit buses and **60 feet** for articulated buses.
