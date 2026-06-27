---
title: "Exam Day Decision Drills"
weight: 115
---
# Exam Day Decision Drills

This lesson features five qualitative "decision drills" designed to test engineering judgment, reference navigation, and qualitative reasoning. These drills simulate conceptual questions on the PE Civil Transportation exam where calculations are minimal but understanding context and standards is critical.

---

## Drill 1: Identifying Culvert Control Conditions

### Scenario:
A maintenance engineer inspects a concrete culvert under a highway embankment during a design storm event:
- The headwater is ponded well above the top of the culvert inlet ($HW/D = 1.5$).
- The tailwater level is low and does not submerge the outlet invert.
- Flow inside the barrel is flowing shallow and fast, and a hydraulic jump is observed downstream of the outlet.

**Decision:** Is the culvert operating under **Inlet Control** or **Outlet Control**? How would you proceed to increase the capacity of this culvert?

### Analysis and Solution:
1. **Identify the control condition:** 
   - Since the barrel is flowing shallow and fast (supercritical flow) and is not choked by tailwater, and a hydraulic jump occurs *downstream* of the culvert, the barrel is capable of conveying more water than can physically enter the pipe.
   - The headwater depth ($HW$) is solely determined by the entrance geometry.
   - Therefore, the culvert is operating under **Inlet Control**.
2. **Determine how to increase capacity:**
   - Under inlet control, changing the barrel roughness ($n$), slope ($S_o$), or length ($L$) will have **no** effect on capacity.
   - To increase capacity, the engineer must modify the inlet geometry (e.g., install a flared end section, bevel the square edges, or increase the inlet opening area).

---

## Drill 2: Intersection Control Treatment Selection

### Scenario:
A municipality is experiencing safety issues at an unsignalized four-leg intersection on a suburban arterial:
- Major road speed limit: $45\text{ mph}$.
- Major road volume: $12,000\text{ ADT}$.
- Minor road volume: $1,200\text{ ADT}$.
- There is a high frequency of angle collisions (left-turn/broadside) on the minor road approaches.
- The community wants to improve pedestrian safety for a nearby school crossing.

**Decision:** Which treatment is most appropriate according to MUTCD and AASHTO guidelines?
- (A) Install all-way stop control (AWSC).
- (B) Install a multi-lane roundabout.
- (C) Install a standard traffic signal.
- (D) Install a Pedestrian Hybrid Beacon (PHB) only.

### Analysis and Solution:
- **AWSC (A):** Inappropriate. All-way stops are not recommended on high-speed, high-volume arterials ($12,000\text{ ADT}$, $45\text{ mph}$) because they cause massive delays and rear-end collisions.
- **Traffic Signal (C):** A traffic signal is a potential option, but signal warrants (MUTCD Chapter 4C) must be met. With only $1,200\text{ ADT}$ on the minor road, it is unlikely to meet Peak Hour or 8-Hour volume warrants. Furthermore, signals can increase rear-end crashes.
- **Roundabout (B):** A roundabout is the **best choice** here. According to AASHTO and FHWA, roundabouts are highly effective at reducing angle collisions (converting them to minor sideswipes) and slowing speeds. They handle unbalanced flows well and provide safe pedestrian crossings in stages.
- **PHB (D):** Only addresses pedestrian crossings; it does not resolve the vehicular angle collisions on the minor road.

*Result:* **(B) Install a multi-lane roundabout.**

---

## Drill 3: Pavement Distress Diagnosis and Repair

### Scenario:
A pavement inspection team reports the following distresses on a major urban highway:
- Interconnecting cracks forming a series of polygon blocks resembling chicken wire or alligator skin in the wheel paths (alligator cracking).
- Longitudinal depressions along the wheel paths (rutting).
- The subgrade is known to be weak and wet.

**Decision:** Identify the primary cause of these distresses and select the most appropriate rehabilitation strategy.

### Analysis and Solution:
1. **Identify the distress cause:**
   - Alligator cracking is a classic **fatigue failure** of the asphalt surface layer under repeated traffic loading, typically accelerated by a weak or saturated base/subgrade support.
   - Rutting in the wheel paths indicates permanent deformation in either the asphalt layers or the underlying subgrade.
   - Combined, they point to a structural load-bearing capacity deficiency of the pavement structure.
2. **Select the rehabilitation strategy:**
   - A simple asphalt overlay or slurry seal is **inadequate** because the cracking will quickly reflect through the new pavement (reflection cracking), and the underlying subgrade remains weak.
   - The correct choice is a structural rehabilitation: either full-depth reclamation (FDR) to stabilize the base/subgrade, or subgrade drainage improvement followed by reconstruction of the base and surface courses.

---

## Drill 4: ADA Accessible Route Compliance Check

### Scenario:
An engineer is reviewing a sidewalk site plan:
- The sidewalk is designed with a continuous clear width of $4.0\text{ feet}$ ($48\text{ inches}$).
- A fire hydrant is proposed near the curb, which projects $8\text{ inches}$ into the sidewalk, reducing the clear path width to $40\text{ inches}$ at that point.
- The longitudinal slope of the sidewalk matches the street grade of $4.5\%$.
- The cross slope is specified as $1.5\%$.

**Decision:** Does this design comply with ADA/PROWAG standards? If not, what must be corrected?

### Analysis and Solution:
1. **Evaluate Sidewalk Width:**
   - PROWAG requires a minimum clear width of **48 inches** ($4.0\text{ feet}$) for accessible routes.
   - ADA standards allow a minimum clear width of **36 inches**.
   - With the fire hydrant encroachment, the clear width is reduced to **40 inches**. This is compliant under the basic 36-inch ADA clearance, but if the local standard adopts PROWAG, it is deficient. However, even under ADA, if the clear width is less than 60 inches, passing zones ($60 \times 60\text{ inches}$) must be provided every 200 feet.
2. **Evaluate Slopes:**
   - The longitudinal slope ($4.5\%$) matches the roadway grade, which is permitted for sidewalks within the public right-of-way under PROWAG.
   - The cross slope ($1.5\%$) is less than the maximum allowable **2.0%**, which is compliant.
3. **Identify Correction:**
   - The fire hydrant must be relocated or the sidewalk must be widened around the hydrant to maintain the minimum clear width of **48 inches** (PROWAG) or at least **36 inches** (ADA) of continuous unobstructed path.

---

## Drill 5: Navigating Conflicting Standards

### Scenario:
A design exception is proposed for a highway project:
- The state DOT Design Manual specifies a minimum shoulder width of $8.0\text{ feet}$ for a design speed of $60\text{ mph}$.
- The AASHTO Green Book guidelines state that a shoulder width of $6.0\text{ feet}$ is acceptable under certain rural terrain constraints.
- The project is funded by a federal-aid highway program.

**Decision:** Which shoulder width should be the baseline for seeking a design exception? How do you resolve this conflict?

### Analysis and Solution:
- On state highway projects (especially those funded by federal-aid programs), the **State DOT Design Manual** serves as the legally adopted standard for that jurisdiction.
- The AASHTO Green Book is a national policy guide and forms the basis for state manuals, but the state has the authority to adopt more restrictive standards.
- Because the state DOT manual requires 8.0 feet, any design below 8.0 feet is considered substandard by that agency.
- The engineer must use **8.0 feet** as the baseline. To construct a 6.0-foot shoulder, a formal design exception must be approved by the state DOT (and potentially FHWA), even though 6.0 feet is mentioned in the AASHTO guide.
