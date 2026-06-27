---
title: "At-Grade Intersection Layout"
weight: 60
---
# At-Grade Intersection Layout

At-grade intersection layout involves the geometric design of intersections where two or more roadways cross at the same elevation. The layout must balance the competing needs of through vehicles, turning vehicles, pedestrians, bicyclists, and transit vehicles.

---

## Horizontal and Vertical Alignment

### 1. Intersection Angle
The angle of intersection is the angle between the centerlines of the intersecting roadways.
*   **Ideal Angle:** $90^\circ$ (perpendicular).
*   **AASHTO Recommendation:** Intersections should intersect at or near $90^\circ$ whenever possible. A skew angle of up to $60^\circ$ ($30^\circ$ deviation from perpendicular) is the absolute maximum recommended skew.
*   **Consequences of High Skew (skew angle $< 60^\circ$):**
    *   **Blind Spots:** Drivers must turn their heads at extreme angles to see oncoming traffic.
    *   **Longer Crossing Distance:** The width of the intersection increases, which increases pedestrian crossing times and the time vehicles are exposed to conflicts.
    *   **Larger Sight Triangles:** Due to the skew, sight triangles must cover a larger area.
    *   **Swept Path:** Turning vehicles require wider swept paths, increasing the likelihood of lane encroachment.

```
       Perpendicular (90 deg)                     Skewed (60 deg)
            |      |                                  /      /
            |      |                                 /      / 
      ------*------*------                     -----*------*-----
            |      |                               /      /
            |      |                              /      /
```

### 2. Vertical Profile
Roadway profiles near intersections should be as flat as possible to allow drivers to stop safely and accelerate from a stop.
*   **Maximum Grades:** Grades on the approaches should ideally be $\le 3\%$.
*   **Grade Coordination:** The profile of the minor road must be adjusted to match the cross slope of the major road. This prevents a "hump" or "dip" in the middle of the intersection that could cause vehicle instability or drainage issues.

---

## Curb Radii Design

The curb radius (or corner radius) is the radius of the circular arc connecting the curb lines of two intersecting streets.

```
                  Curb line
               =============+
                            | \ 
                            |  \  Curb Radius (R)
                            |   \
                            |    |
                            |    |
```

Designing the curb radius requires balancing two conflicting objectives:
1.  **Truck Turning Requirements:** Large trucks (e.g., WB-50, WB-67 design vehicles) have wide swept paths and require a large turning radius. If the curb radius is too small, the truck's rear wheels will mount the curb (endangering pedestrians) or the cab must swing into the opposing lane of traffic.
2.  **Pedestrian Safety:** A small curb radius is highly beneficial for pedestrians because:
    *   It reduces the pedestrian crossing distance (the curb line is closer to the center of the road).
    *   It forces turning vehicles to slow down to make the sharp turn.
    *   It provides a larger sidewalk area for pedestrians to wait.

### Design Solutions
*   **Passenger Car Radii:** $10$ to $15\text{ ft}$ is typical for local urban streets where pedestrian volume is high.
*   **Truck Radii:** $30$ to $50\text{ ft}$ is used on arterial streets and truck routes.
*   **Compound Curves:** Rather than a single radius, designers can use a three-centered compound curve (e.g., $100\text{ ft} - 20\text{ ft} - 100\text{ ft}$ radii) or a taper to fit the natural wheel path of a turning truck. This minimizes the pedestrian crossing width while still accommodating the truck's swept path.

---

## Channelization

Channelization is the practice of directing traffic movements into specific paths using pavement markings, raised medians, or traffic islands.

### Purposes of Channelization:
*   **Conflict Separation:** Separates turning movements from through movements.
*   **Control of Conflict Angle:** Ensures conflicting movements cross at angles close to $90^\circ$.
*   **Pedestrian Refuge:** Provides a safe island for pedestrians to wait midway when crossing wide streets.
*   **Prohibiting Movements:** Restricts unsafe maneuvers (e.g., preventing left turns out of a driveway).

### Types of Islands:
*   **Channelizing (Corner) Islands:** Separates right-turning vehicles from through traffic. Often takes a triangular shape (sometimes called a "pork chop" island).
*   **Divisional Islands:** Placed in the centerline of a street to separate opposing traffic streams.
*   **Refuge Islands:** Located in the crosswalk area to provide pedestrian refuge. Must be ADA-compliant (minimum width of $6\text{ ft}$ to accommodate wheelchairs and strollers).

---

## Worked Example

A minor road intersects a major road at a skew angle of $65^\circ$. The minor road is $48\text{ ft}$ wide (four 12-ft lanes).

1.  Calculate the pedestrian crosswalk length across the minor road at this skewed intersection.
2.  Compare this crossing length with a perpendicular ($90^\circ$) layout.
3.  Calculate the minimum pedestrian clearance time (using the MUTCD standard walking speed of $3.5\text{ ft/s}$) for both layouts and determine the required increase in signal green time for the crossing phase.

### Solution

**1. Calculate Skewed Crosswalk Length:**
The crosswalk runs parallel to the major road centerline. The skewed width of the crossing is:

$$\text{Length}_{\text{skew}} = \frac{W}{\sin \theta}$$

Where:
*   $W$ = width of the roadway = $48\text{ ft}$
*   $\theta$ = intersection angle = $65^\circ$

$$\text{Length}_{\text{skew}} = \frac{48\text{ ft}}{\sin 65^\circ} = \frac{48}{0.9063} = 52.96\text{ ft} \approx 53\text{ ft}$$

**2. Compare with Perpendicular Crossing:**
*   $\text{Length}_{\text{perp}} = 48\text{ ft}$
*   $\Delta \text{Length} = 52.96 - 48.00 = 4.96\text{ ft}$ (an increase of $10.3\%$).

**3. Calculate Pedestrian Clearance Times:**
The MUTCD specifies a standard walking speed of $3.5\text{ ft/s}$ to determine the pedestrian clearance interval (Flashing Don't Walk phase).

*   *Perpendicular Layout Clearance Time:*
    $$t_{\text{perp}} = \frac{48\text{ ft}}{3.5\text{ ft/s}} = 13.71\text{ s} \approx 14\text{ s}$$

*   *Skewed Layout Clearance Time:*
    $$t_{\text{skew}} = \frac{52.96\text{ ft}}{3.5\text{ ft/s}} = 15.13\text{ s} \approx 15.5\text{ s}$$

*   *Required Increase in Signal Green Time:*
    $$\Delta t = 15.13 - 13.71 = 1.42\text{ s}$$

An extra $1.4\text{ s}$ of green time must be dedicated to the pedestrian crossing phase. In a busy urban network, this cumulative delay can degrade the Level of Service (LOS) of the intersection.

## References

*   *A Policy on Geometric Design of Highways and Streets* (AASHTO Green Book), 7th Edition, 2018, Section 9.6.
*   *Manual on Uniform Traffic Control Devices* (MUTCD), 2009 Edition with Revisions 1, 2, and 3, Section 4E.06.
