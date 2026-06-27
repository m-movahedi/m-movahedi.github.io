---
title: "Coordination of Horizontal and Vertical Alignment"
weight: 51
date : "2026-05-04"
draft : false
type : "post"
---
# Coordination of Horizontal and Vertical Alignment

Roadway design is a three-dimensional challenge. Although horizontal alignment (curves and tangents in plan view) and vertical alignment (grades and vertical curves in profile view) are calculated separately, they are experienced simultaneously by the driver. Poor coordination between these two dimensions can create optical illusions, hide hazards, cause headlight sight distance failures, and lead to severe crashes.

For the PE Civil Transportation exam, the coordination of horizontal and vertical alignment is evaluated qualitatively and conceptually using the guidelines set forth in **AASHTO's Green Book (GDHS)**, Chapter 3.

---

## Core Coordination Principles

AASHTO outlines several key principles to ensure that horizontal and vertical alignments work together safely and aesthetically:

### 1. Balance
Horizontal and vertical geometry should be in balance. 
*   An alignment with sharp horizontal curves and flat vertical grades, or flat horizontal curves and steep, roller-coaster vertical profiles, is undesirable.
*   The design speed of both alignments must be identical.

### 2. Coincidence of Curves (The Golden Rule)
To prevent unexpected shifts in driver perception, horizontal and vertical curves should begin and end at approximately the same stations. 
*   **The Enveloping Rule:** Ideally, the horizontal curve should be slightly longer than the vertical curve and "envelope" it. 
    *   The **PC (Point of Curvature) should precede the PVC (Point of Vertical Curvature)**.
    *   The **PT (Point of Tangency) should follow the PVT (Point of Vertical Tangency)**.
*   *Why?* If the horizontal curve is longer, the driver is already steering and aware of the turn before they experience the vertical change in grade.

---

## Alignment Coordination Pitfalls (Traps)

The PE exam frequently tests your ability to identify dangerous coordination setups on plan-profile sheets.

```
       CREST CURVE DANGER: Horizontal curve starts AFTER the crest.
       
                  Crest Profile (PVC to PVT)
                       /\
                      /  \
        =============|====|============= Plan View (PC to PT)
                    PC    PT
        (Driver cannot see the turn until they cross the crest!)
```

### 1. Crest Vertical Curves on Horizontal Curves
*   **The Trap:** Introducing a sharp horizontal curve at or near the top of a crest vertical curve.
*   **The Hazard:** As a driver ascends the crest, their line of sight is cut off by the pavement. They cannot see that the road curves ahead until they top the crest, leaving them with insufficient time to react and steer.
*   **Mitigation:** Shift the horizontal PC so that the turn begins well before the vertical curve starts ($\text{PC} < \text{PVC}$).

### 2. Sag Vertical Curves on Horizontal Curves
*   **The Trap:** Introducing a sharp horizontal curve at or near the bottom of a sag vertical curve.
*   **The Hazard:** 
    *   *Nighttime Visibility:* Vehicle headlights project straight ahead, parallel to the car's chassis. At the bottom of a sag, the headlights will shine off the roadway (into space or adjacent fields) rather than illuminating the curved path ahead.
    *   *Pavement Drainage:* The bottom of a sag curve has a flat grade ($0\%$). When combined with superelevation transition, water can pool, creating a hydroplaning hazard.
    *   *Structural Load:* Centrifugal forces from the horizontal curve combine with the downward vertical momentum from the sag curve, increasing structural load on vehicle suspensions and tires.

### 3. Hidden Dips (Roller-Coaster Profile)
*   **The Trap:** Designing a vertical profile with multiple small sag/crest dips on a continuous horizontal tangent.
*   **The Hazard:** This creates a "roller-coaster" effect. errant drivers can see the roadway far ahead but vehicles in the dips are hidden from view, leading to dangerous passing attempts.

---

## Worked Example: Plan-Profile Design Analysis

### Problem Statement
A plan-profile sheet for a new rural arterial (design speed $50\text{ mph}$) lists the following curve stations:
*   **Vertical Alignment:** A crest vertical curve connects a $+4.0\%$ grade and a $-3.0\%$ grade.
    *   PVC Station: $45+00.00$
    *   PVI Station: $47+50.00$
    *   PVT Station: $50+00.00$
*   **Horizontal Alignment:** A simple circular curve with deflection angle $\Delta = 12^\circ 00'$ and radius $R = 1,150\text{ ft}$.
    *   PC Station: $45+80.00$
    *   PT Station: $49+20.00$

1.  Analyze the proposed alignment coordination. State whether it violates AASHTO's safety and coordination guidelines, and explain why.
2.  If the alignment is hazardous, recommend specific station adjustments to the horizontal curve (assuming the vertical profile cannot be changed due to earthwork constraints) to satisfy the "enveloping rule."

### Solution
1.  **Analyze Alignment Coordination:**
    *   Let's compare the curve boundaries:
        *   Vertical Curve Limits: Station $45+00.00$ to $50+00.00$ (Length $L_v = 500\text{ ft}$)
        *   Horizontal Curve Limits: Station $45+80.00$ to $49+20.00$ (Length $L_h = 340\text{ ft}$)
    *   The horizontal PC ($45+80.00$) is located *after* the vertical PVC ($45+00.00$).
    *   The horizontal PT ($49+20.00$) is located *before* the vertical PVT ($50+00.00$).
    *   This is a classic nested curve hazard. The horizontal curve is completely enclosed within the vertical crest curve. 
    *   *Hazard:* A driver climbing the hill will enter the crest curve at Station $45+00$. Because they are on a vertical curve, their sight distance is restricted. They will not be able to see the horizontal turn (which starts at Station $45+80$) until they are already on the vertical crest, creating a severe safety trap. **The design violates AASHTO guidelines.**

2.  **Formulate Recommendation (Enveloping Rule):**
    *   To satisfy the enveloping rule, the horizontal curve must begin before the vertical curve and end after the vertical curve:
        $$\text{PC} \le \text{PVC}$$
        $$\text{PT} \ge \text{PVT}$$
    *   Since $\text{PVC} = 45+00.00$ and $\text{PVT} = 50+00.00$:
        *   The new horizontal **PC** must be set at or before **Station $45+00.00$** (e.g., Station $44+50.00$).
        *   The new horizontal **PT** must be set at or after **Station $50+00.00$** (e.g., Station $50+50.00$).
    *   This adjustment requires the horizontal curve length ($L_h$) to be increased from $340\text{ ft}$ to at least $500\text{ ft}$ (preferably $600\text{ ft}$), which requires redesigning the curve radius or deflection angle.

### Answer
1.  The proposed coordination is **unsafe**. The horizontal curve is nested inside the crest vertical curve ($\text{PC} > \text{PVC}$), hiding the turn from approaching drivers.
2.  Adjust the horizontal curve so that it envelopes the vertical curve: **$\text{PC} \le 45+00.00$** and **$\text{PT} \ge 50+00.00$**.

---

## Crucial Exam Tips

*   **PC/PVC Ordering:** Remember the safe design rule: "Horizontal leads vertical." The horizontal curve must always start first. On the exam, verify that $\text{PC} < \text{PVC}$ and $\text{PT} > \text{PVT}$.
*   **Identifying Headlight Sight Distance Issues:** If a question describes a vehicle having trouble seeing around a curve at night, look for a sag vertical curve nested inside a horizontal curve. The headlight beam drop is the physical cause.
*   **Qualitative Questions:** Many PE questions on this topic are purely conceptual and do not require calculations. Look for key phrases like "hidden dip," "nested curve," or "crest on tangent" to quickly identify the correct design answer.
