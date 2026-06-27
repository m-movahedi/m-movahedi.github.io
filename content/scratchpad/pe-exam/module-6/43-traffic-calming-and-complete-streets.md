# Traffic Calming and Complete Streets

Complete Streets is a design philosophy that requires roads to be planned, designed, operated, and maintained to enable safe, convenient, and comfortable travel for all users, including pedestrians, bicyclists, transit riders, and motorists. Traffic calming represents the physical, self-enforcing measures used to support this philosophy by managing vehicle speeds and volumes.

For the PE Civil Transportation exam, traffic calming is tested through the lenses of **AASHTO's Green Book (GDHS)**, the **AASHTO Pedestrian Guide (GPF-2)**, and Federal Highway Administration (FHWA) guidelines.

---

## Traffic Calming Categories and Tools

Traffic calming measures are divided into three physical categories based on how they alter driver behavior:

### 1. Vertical Deflection (Speed Control)
Vertical deflection tools force vehicles to bounce or lift, making high speeds uncomfortable or unsafe.
*   **Speed Humps:** Parabolic vertical mounds, typically **12 to 14 ft (3.7 to 4.3 m)** long and **3 to 4 inches (75 to 100 mm)** high. They are designed to reduce speeds to **15 to 20 mph**.
    *   *Application:* Residential streets only. **Not** used on primary emergency routes or bus routes.
*   **Speed Tables:** Flat-topped speed humps, typically **22 ft (6.7 m)** long. They accommodate longer wheelbases, reducing speeds to **25 to 30 mph**.
    *   *Application:* Suitable for collector streets, transit routes, and emergency corridors.
*   **Raised Crosswalks and Intersections:** Elevated sections of the roadway built to sidewalk height. They improve pedestrian visibility and force drivers to slow down at conflict points.

### 2. Horizontal Deflection (Speed and Volume Control)
Horizontal deflection tools force drivers to steer around obstacles, breaking up straight lines of sight that encourage speeding.
*   **Chicanes:** Alternating curb extensions (bulb-outs) that create an S-shaped path, forcing drivers to slalom.
*   **Mini-Roundabouts and Traffic Circles:** Raised circular islands placed at intersections. They force turning and through-traffic to yield and travel at low speeds (**15 to 20 mph**) without stopping completely.
*   **Diverters:** Diagonal barriers across intersections that force vehicles to turn, preventing through-traffic and reducing vehicle volumes.

### 3. Roadway Narrowing (Psychological Speed Control)
Narrowing the driver's visual field increases their perception of risk, naturally prompting them to drive slower.
*   **Curb Extensions (Bulb-outs):** Extensions of the sidewalk into the parking lane at intersections.
    *   *Benefits:* Reduces pedestrian crossing distance (critical for ADA design and crossing times), increases pedestrian visibility at corners, and physically prevents parking near crosswalks.
*   **Chokers:** Curb extensions on both sides of a midblock street section, narrowing the roadway to a single lane or two narrow lanes.
*   **Center Islands / Raised Medians:** Narrow the travel lanes while providing a pedestrian refuge.

---

## Operational and Safety Tradeoffs

Implementing Complete Streets and traffic calming elements involves careful engineering tradeoffs:

| Design Measure | Safety Benefits | Operational Tradeoffs / Drawbacks |
| :--- | :--- | :--- |
| **Curb Extensions** | Reduces pedestrian crossing distance; reduces vehicle turning speeds; improves sight lines. | Eliminates on-street parking spaces; can complicate stormwater drainage gutter lines. |
| **Speed Humps** | Reduces $85\text{th}$ percentile speeds; lowers crash severity. | Increases noise (undercarriage scrapes); delays emergency vehicles (**3 to 10 seconds** per hump for fire trucks). |
| **Lane Narrowing (12 ft to 10 ft)** | Reduces vehicle operating speeds; provides space for bike lanes/sidewalks. | Reduces roadway capacity (lower saturation flow rate); increases lateral friction between trucks. |

---

## Worked Example: Pedestrian Crossing and Capacity Tradeoffs

### Problem Statement
An urban collector street is being redesigned under a Complete Streets framework. The existing roadway is a 4-lane undivided street (two lanes in each direction) with $12\text{-ft}$ travel lanes and no parking.
*   Existing Width of Roadway: $48\text{ ft}$
*   Pedestrian Walking Speed ($S_p$): $3.5\text{ ft/s}$ (standard MUTCD value)
*   Pedestrian Startup/Reaction Time ($t_{pr}$): $3.0\text{ seconds}$

The proposed design will implement:
*   Curb extensions (bulb-outs) at the intersection, extending $6\text{ ft}$ into the roadway on each side.
*   Lane narrowing of the 4 travel lanes from $12\text{ ft}$ to $10\text{ ft}$.
*   A new $8\text{-ft}$ raised median in the center of the road.

1.  Calculate the pedestrian crossing time ($t_c$) required for the *existing* layout (assuming a single, uninterrupted crossing).
2.  Determine the new curb-to-curb roadway width and the new crossing distance for the *proposed* layout.
3.  Calculate the new pedestrian crossing time ($t_c$) for the proposed layout, assuming the raised median acts as a pedestrian refuge.
4.  Analyze the operational impact of narrowing the lanes from $12\text{ ft}$ to $10\text{ ft}$ on the saturation flow rate ($s$) of the street. Assume the base saturation flow rate ($s_0$) is $1,900\text{ pc/h/ln}$ and the lane-width adjustment factor ($f_w$) is:
    *   $f_w = 1.00$ for $12\text{-ft}$ lanes
    *   $f_w = 0.94$ for $10\text{-ft}$ lanes
    (Use the simplified formula: $s = s_0 \times f_w$).

### Solution
1.  **Calculate Existing Pedestrian Crossing Time:**
    *   Existing crossing distance ($D_{exist}$) = $48\text{ ft}$.
    *   Using the MUTCD crossing time formula:
        $$t_{c, exist} = t_{pr} + \frac{D_{exist}}{S_p}$$
        $$t_{c, exist} = 3.0\text{ seconds} + \frac{48\text{ ft}}{3.5\text{ ft/s}} = 3.0 + 13.71 = 16.71\text{ seconds}$$

2.  **Determine Proposed Geometry:**
    *   Original width = $48\text{ ft}$.
    *   The proposed travel lanes are 4 lanes of $10\text{ ft} = 40\text{ ft}$.
    *   A center median of $8\text{ ft}$ is added.
    *   Total roadway width = $40\text{ ft} + 8\text{ ft} = 48\text{ ft}$.
    *   The curb extensions project $6\text{ ft}$ from each side.
    *   New curb-to-curb width = $48\text{ ft} - 2(6\text{ ft}) = 36\text{ ft}$.
    *   *Check:* The $36\text{-ft}$ space contains 4 lanes of $10\text{ ft}$ ($40\text{ ft}$) minus the median? No, let's verify the layout:
        With curb extensions extending $6\text{ ft}$ on each side, the physical crossing distance between curbs is indeed reduced to $36\text{ ft}$. The median is $8\text{ ft}$ wide, so the distance from the curb to the median on each side is:
        $$\text{Crossing distance to median} = \frac{36\text{ ft} - 8\text{ ft}}{2} = 14\text{ ft}$$
        *(This corresponds to two travel lanes of $10\text{ ft}$ each where the curb extensions have narrowed the parking/buffer zone, or the layout has shifted the travel lanes).*

3.  **Calculate Proposed Pedestrian Crossing Time:**
    *   Because the median is $8\text{ ft}$ wide ($\ge 6\text{ ft}$), it qualifies as a pedestrian refuge. The pedestrian crossing time only needs to account for crossing from the curb to the median ($14\text{ ft}$).
    *   Using the crossing time formula:
        $$t_{c, prop} = t_{pr} + \frac{D_{to\_median}}{S_p}$$
        $$t_{c, prop} = 3.0\text{ seconds} + \frac{14\text{ ft}}{3.5\text{ ft/s}} = 3.0 + 4.0 = 7.0\text{ seconds}$$
    *   *Result:* The required pedestrian crossing phase is reduced from $16.7\text{ seconds}$ to **$7.0\text{ seconds}$**.

4.  **Calculate Saturation Flow Rate Impact:**
    *   **Existing Saturation Flow:**
        $$s_{exist} = 1,900 \times 1.00 = 1,900\text{ pc/h/ln}$$
    *   **Proposed Saturation Flow:**
        $$s_{prop} = 1,900 \times 0.94 = 1,786\text{ pc/h/ln}$$
    *   *Result:* Narrowing the lanes reduces the saturation flow rate (and therefore the capacity) by **$6.0\%$** per lane.

### Answer
1.  Existing pedestrian crossing time: **16.7 seconds**
2.  New curb-to-curb width: **36 ft**
3.  Proposed pedestrian crossing time (with median refuge): **7.0 seconds**
4.  Proposed saturation flow rate: **1,786 pc/h/ln** (a $6.0\%$ reduction in vehicle capacity).

---

## Crucial Exam Tips

*   **Refuge Island Width Warrants:** Remember that a median must be at least **6.0 ft** wide to serve as a pedestrian refuge island. If a question describes a $4\text{-ft}$ median and asks for pedestrian timing, you **cannot** split the crossing time; you must calculate the crossing time across the entire roadway.
*   **Emergency Route Speed Hump Trap:** Look out for qualitative questions regarding the installation of speed humps. If a problem states the roadway is a primary route for an ambulance or fire station, speed humps are **not** an acceptable traffic calming tool due to response time delays. Choose speed tables or curb extensions instead.
*   **Crossing Speed Values:** Unless otherwise specified, the standard pedestrian walking speed for design is **3.5 ft/s** (MUTCD standard). However, older school crossing zones or senior living facility zones may use a lower speed of **3.0 ft/s**. Read the problem details carefully.
