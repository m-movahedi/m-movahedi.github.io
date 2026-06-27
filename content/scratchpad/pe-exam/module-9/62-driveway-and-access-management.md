# Driveway and Access Management

Access management is the systematic control of the location, spacing, design, and operations of driveways, median openings, interchanges, and street connections to a roadway. The primary objective is to balance the competing needs of roadway mobility (moving through traffic safely and efficiently) and land access (providing entry to roadside properties).

---

## Core Principles of Access Management

AASHTO and the Federal Highway Administration (FHWA) identify several foundational principles of access management:

1.  **Limit Conflict Points:** Conflicts occur where vehicle paths cross, merge, or diverge. Access management aims to reduce the number of conflict points. For example, replacing a full-access driveway with a right-in/right-out (RIRO) driveway reduces the conflict points from 11 to 2.
2.  **Separate Conflict Points:** Spacing driveways and intersections far enough apart allows drivers to address one potential conflict at a time, reducing cognitive load and crash rates.
3.  **Reduce Speed Differentials:** Turning vehicles slow down significantly before entering driveways. Large speed differences between through vehicles and turning vehicles increase the risk of rear-end crashes. Access design uses deceleration lanes or appropriate driveway turning radii to minimize this differential.
4.  **Establish a Roadway Hierarchy:** Roadways should be classified and designed according to their intended function. Arterials prioritize mobility and should have highly restricted access. Local streets prioritize access and can accommodate frequent driveways.
5.  **Use Non-Traversable Medians:** Raised or grassed medians are the most effective tool for managing access on high-volume arterials because they physically prevent left turns across opposing traffic, forcing drivers to make turns at designated, signalized U-turn or median openings.

---

## Driveway Spacing and Corner Clearance

### Corner Clearance
Corner clearance is the distance between an intersection and the nearest driveway. 
*   **Significance:** Inadequate corner clearance causes severe operational issues. For example, if a driveway is too close to an intersection, vehicles queuing at a red light will block access to the driveway, or a vehicle attempting to turn into the driveway will back up traffic into the active intersection area.
*   **Design Goal:** The corner clearance should ideally exceed the maximum queue length expected at the intersection during peak hours.

```
       <============== Direction of travel
       ===================+             +===============
                          |             |
                          |             |
                          |             |    Driveway
                          |             |=====[      ]======
                          |             |
                          |<--- C --->| |<- Driveway Width ->|
                          |  Corner
                          |  Clearance
       ===================+             +===============
```

### Spacing Criteria
Driveway spacing is typically based on the design speed of the roadway. Higher speeds require larger spacing to match the distance traveled during perception-reaction and braking. Standard guidelines recommend:

| Design Speed (mph) | Minimum Recommended Spacing (ft) |
| :---: | :---: |
| **30** | 200 |
| **35** | 250 |
| **40** | 300 |
| **45** | 350 |
| **50** | 425 |
| **55** | 500 |

---

## Driveway Vertical Alignment (Profile)

The vertical profile of a driveway must be designed to prevent vehicles from scraping their bumpers or bottoming out. This is governed by the **algebraic grade change ($\Delta g$)** at the grade breaks.

*   **Grade Break Limits:**
    *   **Low-Volume (Residential) Driveways:** Maximum grade change $\Delta g \le 10\%$.
    *   **High-Volume (Commercial/Industrial) Driveways:** Maximum grade change $\Delta g \le 8\%$ (ideally $\le 5-6\%$).
*   **Transitions:** For steep driveways, a transition segment (usually $10$ to $20\text{ ft}$ long) must be placed between the roadway cross slope and the main driveway grade to soften the grade break.

---

## Worked Example

A developer is designing a new commercial driveway connecting to a minor arterial street. 
*   The arterial has a cross slope of $-2.0\%$ (sloping downward toward the curb).
*   The sidewalk is $8\text{ ft}$ wide and has a cross slope of $-1.5\%$ (sloping toward the curb).
*   The driveway must climb to meet the parking lot elevation.
*   The local jurisdiction restricts the maximum grade change ($\Delta g$) at any unsorted grade break to $6.0\%$ for commercial driveways.

1.  Calculate the maximum permissible positive grade ($g_d$) for the driveway segment immediately following the sidewalk.
2.  If the design speed of the arterial is $40\text{ mph}$, and the nearest signalized intersection is downstream, determine the minimum corner clearance required based on speed spacing guidelines.

### Solution

**1. Calculate Maximum Driveway Grade ($g_d$):**
The grade break occurs at the boundary where the sidewalk pavement meets the driveway pavement.
*   Sidewalk grade ($g_{\text{sw}}$) = $-1.5\%$ (downward)
*   Driveway grade = $g_d$ (upward, positive)
*   Maximum allowed grade change ($\Delta g$) = $6.0\%$

The algebraic grade difference is:

$$\Delta g = |g_d - g_{\text{sw}}|$$
$$6.0\% = |g_d - (-1.5\%)|$$
$$6.0\% = g_d + 1.5\%$$
$$g_d = 6.0\% - 1.5\% = +4.5\%$$

The driveway segment immediately following the sidewalk cannot exceed a slope of **$+4.5\%$** without violating the grade break limit.

**2. Determine Minimum Corner Clearance:**
*   Design speed = $40\text{ mph}$.
*   According to the driveway spacing table, the minimum spacing required to prevent conflict overlap and manage speed differentials at $40\text{ mph}$ is **$300\text{ ft}$**.
*   Therefore, the driveway must be located at least $300\text{ ft}$ away from the intersection curb line.

## References

*   *A Policy on Geometric Design of Highways and Streets* (AASHTO Green Book), 7th Edition, 2018, Section 9.10.
*   *TRB Access Management Manual*, 2nd Edition, 2014.
