---
title: "Collision Diagrams"
weight: 32
---
# Collision Diagrams

A collision diagram is a schematic representation of crashes that have occurred at a specific location (typically an intersection or a short roadway segment) over a designated time period. It is one of the most powerful diagnostic tools in traffic safety engineering, used to visually identify crash clusters, spatial patterns, and common conflict types.

On the NCEES PE Civil Transportation exam, you may need to interpret a collision diagram, identify a safety pattern, and link that pattern to effective safety countermeasures.

---

## Structure of a Collision Diagram

A collision diagram represents the geometry of the intersection or roadway, with individual crashes superimposed using standard symbols. Each crash is shown as a set of arrows representing the paths of the vehicles involved, with the point of collision marked.

### Standard Collision Symbols
While variations exist among agencies, standard symbols represent the following crash types:

* **Rear-End**: Two vehicles traveling in the same direction, with the front of one vehicle hitting the rear of the other. Indicated by one arrow pointing into the rear of another arrow.
* **Angle**: Two vehicles on crossing paths colliding. Indicated by two arrows meeting at a right or oblique angle.
* **Head-On**: Two vehicles traveling in opposite directions colliding front-to-front. Indicated by two opposing arrows meeting head-to-head.
* **Sideswipe (Same or Opposing)**: Two vehicles side-by-side colliding. Indicated by parallel arrows brushing past each other.
* **Fixed Object / Run-Off-Road**: A single vehicle departing the travel lane and colliding with a roadside object (guardrail, utility pole, tree). Indicated by a single arrow terminating at a symbol representing the object (often a circle, cross, or text label).
* **Pedestrian / Bicycle**: A collision involving a motorized vehicle and a non-motorized user. Indicated by a vehicle arrow colliding with a pedestrian or bicycle icon.

### Crash Metadata
Each crash entry on the diagram typically includes a label or reference to a data table containing:
1. **Severity**: Fatal (F), Injury (I), or Property Damage Only (PDO).
2. **Date and Time**: Allows identification of seasonal, daily, or day/night patterns.
3. **Environmental Conditions**: Pavement condition (dry, wet, icy/snowy) and lighting (daylight, dark-lighted, dark-unlighted).

---

## Pattern Recognition and Safety Diagnosis

The primary goal of a collision diagram is to identify **patterns** (also called crash clusters) that point to systemic safety deficiencies.

| Observed Pattern (Cluster) | Potential Diagnostic Cause | Candidate Countermeasures |
| --- | --- | --- |
| **Left-turn/Angle crashes at signalized intersection** | * Lack of protected left-turn phase<br>* Poor sight distance to opposing traffic | * Install protected left-turn phase (green arrow)<br>* Clear sight triangle obstructions |
| **Rear-end crashes on a specific signalized approach** | * Poor signal visibility<br>* Sudden braking due to short yellow interval<br>* Slippery pavement (if wet-weather) | * Install advanced warning signs ("Signal Ahead")<br>* Adjust yellow change/all-red clearance interval<br>* Apply high-friction surface treatment (HFST) |
| **Fixed-object/Run-off-road crashes on a curve** | * Inadequate curve warning or delineation<br>* High entry speeds<br>* Poor pavement friction | * Install chevron alignment signs (W1-8)<br>* Install warning signs with advisory speed plaques<br>* Apply HFST or install rumble strips |
| **Crashes clustered at night** | * Poor roadway lighting<br>* Inadequate sign/marking retroreflectivity | * Install or upgrade intersection lighting<br>* Upgrade to high-retroreflectivity signs and markings |
| **Crashes clustered during wet weather** | * Pavement polishing (loss of friction)<br>* Poor drainage leading to hydroplaning | * Apply HFST or groove the pavement<br>* Improve roadway cross-slope or clean drainage inlets |

---

## Critical Pitfalls and Exam Traps

1. **Focusing on Raw Frequency Over Patterns**:
   The exam may present an intersection with $15$ rear-end crashes and $5$ left-turn crashes. A common trap is selecting a rear-end countermeasure when the actual question asks for the most critical hazard or is evaluating a specific lane group. Look for concentrated spatial patterns (e.g., all 5 left-turn crashes occurring from a single approach).

2. **Selecting Non-Specific Countermeasures**:
   If the collision diagram shows a cluster of night-time crashes on a wet surface, a countermeasure like "install a traffic signal" is inappropriate and costly. A specific, low-cost fix like "install flashing beacons" or "upgrade pavement markings" is the correct safety response.

3. **Confusing Collision and Conflict Diagrams**:
   A collision diagram shows historical *actual* crashes. A conflict diagram shows observed *near-misses* or potential crossing points. Make sure you read the labels to understand which data type is being analyzed.

---

## Worked Example

A collision diagram for a 4-leg unsignalized intersection (minor street stop-controlled) reveals the following crash data over a 2-year period:
* Approach 1 (Northbound, stop-controlled): 6 angle crashes involving vehicles turning left onto the major street (Eastbound).
* Approach 2 (Southbound, stop-controlled): 1 rear-end crash.
* Approach 3 (Eastbound, major street): 1 animal crash.
* Approach 4 (Westbound, major street): 2 sideswipe-same-direction crashes.

Environmental notes show that 5 of the 6 angle crashes on the Northbound approach occurred during daylight hours on dry pavement. Field measurements indicate that a large commercial sign is located in the northwest quadrant of the intersection, and mature trees are located in the southwest quadrant.

**Question:** What is the most likely cause of the crash pattern on the Northbound approach, and what is the most appropriate safety countermeasure?

### Solution:
1. **Analyze the Pattern**:
   There is a clear cluster (6 crashes) of **angle crashes** on the Northbound approach (minor street) involving vehicles turning left onto the Eastbound major street.
2. **Diagnose the Cause**:
   * Angle crashes at stop-controlled intersections usually indicate that drivers cannot find a safe gap in major street traffic.
   * This is commonly caused by **restricted sight distance** (drivers cannot see oncoming vehicles in time to complete the turn).
   * The presence of mature trees in the southwest quadrant (to the driver's left, looking Eastbound/Westbound) directly blocks the sight line to the oncoming Eastbound vehicles.
3. **Select the Countermeasure**:
   * The most effective and low-cost solution is to **clear the sight triangle** by trimming or removing the mature trees in the southwest quadrant. 
   * If clearing sight lines is impossible, installing a traffic signal or converting the intersection to a roundabout could be considered, but clearing the sight triangle is the primary first step.

**Conclusion:** The cause is restricted sight distance to the left (southwest quadrant). The most appropriate countermeasure is clearing or trimming the trees in the southwest quadrant to restore the sight triangle.

---

## References and Standards
* *NCEES PE Civil Reference Handbook*, Section 6.3 (Traffic Safety).
* *Highway Safety Manual (HSM) 1st Edition*, Chapter 5 (Diagnostics).
