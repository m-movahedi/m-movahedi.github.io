---
title: "Roundabout Geometric Design"
weight: 63
---
# Roundabout Geometric Design

A modern roundabout is an at-grade intersection where traffic circulates counterclockwise (in the United States) around a central island. Unlike older traffic circles or rotaries, modern roundabouts operate under yield control on entry, require deflection to slow entering vehicles, and utilize a compact design to limit speeds and improve safety.

---

## Key Geometric Features

A modern roundabout contains several distinct geometric elements:

*   **Inscribed Circle Diameter (ICD):** The overall outer diameter of the roundabout, measuring from the outer edge of the circulatory roadway.
    *   *Single-Lane Roundabouts:* Typically $90$ to $150\text{ ft}$ ($27$ to $45\text{ m}$).
    *   *Multi-Lane Roundabouts:* Typically $150$ to $220\text{ ft}$ ($45$ to $67\text{ m}$).
*   **Central Island:** The non-traversable circular area in the center of the roundabout.
*   **Truck Apron:** A mountable, low-profile concrete ring surrounding the central island. It is designed to accommodate the rear wheel tracking of large trucks (e.g., WB-67) while keeping the entry and circulatory lanes narrow to restrict the speeds of passenger cars.
*   **Splitter Island:** A raised or painted triangular island on each approach. It serves three purposes: deflecting and slowing entering traffic, preventing wrong-way movements, and providing a mid-crossing refuge for pedestrians.
*   **Circulatory Roadway:** The active travel lanes around the central island.

```
                            |  |
                            |  |
                        ____|  |____
                       /   _    _   \
                      /   / |  | \   \
                     |   |  |  |  |   |
                     |   |  |==|  |   |  <- Central Island with Truck Apron (==)
                     |   |  |  |  |   |
                      \   \_|  |_/   /
                       \____    ____/
                            |  |
                            |  |
```

---

## Design Principles and Speed Control

The most critical principle of roundabout design is **speed control**, achieved through physical geometry rather than speed limit signs.
*   **Deflection:** The entry alignment must be deflected (bent to the right) by the splitter island and central island. The entering path must never be a straight line through the intersection.
*   **Target Speeds:**
    *   *Single-Lane Roundabouts:* $15$ to $20\text{ mph}$ ($24$ to $32\text{ km/h}$).
    *   *Multi-Lane Roundabouts:* $20$ to $25\text{ mph}$ ($32$ to $40\text{ km/h}$).

---

## Fastest Path Analysis

The fastest path is the smoothest, flattest vehicle path through the roundabout, assuming a driver ignores lane markings (when no other traffic is present). Designers analyze five critical radii along this path:

1.  **$R_1$ (Entry Path Radius):** The minimum radius on the entry path, located near the yield line. Controls the entry speed (most critical safety check).
2.  **$R_2$ (Circulatory Path Radius):** The minimum radius around the central island.
3.  **$R_3$ (Exit Path Radius):** The minimum radius on the exit path.
4.  **$R_4$ (Left-Turn Path Radius):** The radius of the path for a left-turning vehicle.
5.  **$R_5$ (Right-Turn Path Radius):** The radius of the path for a right-turning vehicle.

```
       R1 (Entry)      R2 (Circulating)      R3 (Exit)
           \                 |                 /
        ____\________________|________________/____
             \               |               /
```

### Speed-Radius Relationship
The speed along any curve of the fastest path is governed by:

$$V = 3.86 \sqrt{R (f \pm e)}$$

Where:
*   $V$ = vehicle speed (mph)
*   $R$ = radius of the curve (ft)
*   $f$ = side friction factor (varies with speed; typically ranges from $0.20$ to $0.30$)
*   $e$ = super-elevation or cross slope (decimal). In roundabouts, the circulatory roadway usually slopes outward at $-2.0\%$ (or $-0.02$) for drainage, representing adverse super-elevation for turning vehicles.

*Safety Criteria:* To prevent high-speed collisions, the entry speed ($V_1$) should be the lowest speed in the sequence, and the speed differential between consecutive movements should not exceed $10\text{ mph}$ (e.g., $|V_1 - V_2| \le 10\text{ mph}$).

---

## Sight Distance Requirements

Two types of sight distance must be checked:
1.  **Stopping Sight Distance (SSD):** Must be provided at the entry, on the circulatory roadway, and at the pedestrian crosswalks.
2.  **Intersection Sight Distance (ISD):** The entering driver must have a clear line of sight to conflicting vehicles approaching from the left (on the circulatory roadway and the adjacent entry). The time gap ($t_g$) for roundabout entry is typically **$5.0\text{ s}$** for passenger cars.

---

## Worked Example

A designer is verifying the entry geometry of a single-lane roundabout. 
*   The entry path radius ($R_1$) is determined to be $90\text{ ft}$.
*   The circulatory roadway has an outward cross slope of $-2.0\%$ ($e = -0.02$).
*   The side friction factor ($f$) for this speed range is $0.26$.

1.  Calculate the fastest entry path speed ($V_1$).
2.  Determine if this speed complies with AASHTO speed recommendations for a single-lane roundabout.
3.  Calculate the required Intersection Sight Distance ($ISD$) along the circulatory roadway, assuming a design speed of $20\text{ mph}$ on the circulatory roadway.

### Solution

**1. Calculate Fastest Entry Path Speed ($V_1$):**
Using the speed-radius equation with adverse super-elevation ($e = -0.02$):

$$V_1 = 3.86 \sqrt{R_1 (f - e)}$$
$$V_1 = 3.86 \sqrt{90 \times (0.26 - 0.02)}$$
$$V_1 = 3.86 \sqrt{90 \times 0.24} = 3.86 \sqrt{21.6}$$
$$V_1 = 3.86 \times 4.648 = 17.94\text{ mph} \approx 18\text{ mph}$$

**2. Check Compliance:**
The calculated entry speed is $18\text{ mph}$. This falls within the recommended single-lane roundabout entry speed range of $15$ to $20\text{ mph}$, indicating that the entry deflection is geometrically sufficient.

**3. Calculate Intersection Sight Distance ($ISD$):**
*   Major road speed ($V_{\text{circ}}$) = $20\text{ mph}$ (circulating speed).
*   Time gap ($t_g$) = $5.0\text{ s}$.

$$ISD = 1.47 V_{\text{circ}} t_g$$
$$ISD = 1.47 \times 20 \times 5.0 = 147\text{ ft} \approx 150\text{ ft}$$

The entering driver must have an unobstructed line of sight to vehicles circulating on the roadway for a distance of at least $147\text{ ft}$ to the left.

## References

*   *A Policy on Geometric Design of Highways and Streets* (AASHTO Green Book), 7th Edition, 2018, Section 9.8.
*   *NCHRP Report 672: Roundabouts: An Informational Guide*, 2nd Edition, 2010.
*   *NCEES PE Civil Reference Handbook*, Section 4.3.2.
