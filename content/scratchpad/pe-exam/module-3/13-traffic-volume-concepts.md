---
title: "Traffic Volume Concepts"
weight: 13
---
# Traffic Volume Concepts

Traffic volume is the number of vehicles passing a given point on a roadway during a specified time interval. On the PE Civil Transportation exam, understanding the relationships between daily traffic volumes, design hourly volumes, and directional splits is fundamental to roadway planning, capacity analysis, and geometric design.

---

## Traffic Volume Metrics

Traffic volume is measured over various periods to capture daily, weekly, and seasonal variations.

### 1. Average Annual Daily Traffic (AADT)
The total number of vehicles passing a point on a highway in both directions over a full year (365 days), divided by 365.
$$AADT = \frac{\text{Total Vehicles in a Year}}{365}$$
- **Use:** Used in highway planning, determining highway systems, calculating crash rates, and performing economic evaluations.

### 2. Average Daily Traffic (ADT)
The average 24-hour volume of traffic in both directions over a period of time greater than 1 day but less than 1 year (e.g., 48-hour counts, weekly counts).
$$ADT = \frac{\text{Total Vehicles counted during } N \text{ days}}{N}$$
- **Use:** Used for local planning, minor design projects, and trend analyses. ADT is subject to seasonal variation, whereas AADT is not.

### 3. Peak Hour Volume (PHV)
The highest number of vehicles passing a point in both directions during 60 consecutive minutes of a day. This represents the peak load on the highway facility.

---

## Design Hourly Volume (DHV) and the K-Factor

Roadways are not designed for the absolute peak hour of the year because doing so would result in an over-designed, under-utilized facility for most of the year. Instead, they are designed for the **Design Hourly Volume (DHV)**.

- **Design Hourly Volume (DHV):** The 2-way volume of traffic during the design hour. Historically, this is selected as the **30th highest hourly volume of the year (30 HV)**.
- **K-Factor (K):** The ratio of the design hourly volume (DHV) to the Average Annual Daily Traffic (AADT).
  $$K = \frac{DHV}{AADT}$$
  - $K$ is typically expressed as a decimal (e.g., $0.10$ to $0.15$).
  - Urban facilities generally have lower K-factors ($0.08$ to $0.12$) because traffic is distributed more evenly throughout the day.
  - Rural and recreational routes have higher K-factors ($0.12$ to $0.18$ or more) due to high weekend and seasonal spikes.

---

## Directional Design Hourly Volume (DDHV) and the D-Factor

Traffic is rarely distributed evenly between directions during the peak hour (e.g., commuters traveling into a city in the morning and out in the evening). Roadways must be designed to accommodate the peak flow direction.

- **D-Factor (D):** The proportion of traffic moving in the peak direction of travel during the design hour.
  $$D = \frac{\text{Volume in Peak Direction}}{\text{Total Two-Way Volume}}$$
  - $D$ is expressed as a decimal and typically ranges from $0.50$ (equal split) to $0.80$ (highly directional commuter routes).
- **Directional Design Hourly Volume (DDHV):** The one-way volume in the peak direction during the design hour. This is the primary parameter used for geometric design and capacity analysis.
  $$DDHV = AADT \times K \times D$$

---

## Worked Example: Calculating Traffic Volumes

**Problem:**  
A rural arterial highway has a projected Average Annual Daily Traffic (AADT) of $24,000 \text{ vehicles/day}$. The planning department selects a design K-factor of $12\%$ and a directional distribution (D-factor) of $65\%$ in the peak direction.
1. Calculate the Design Hourly Volume (DHV) for both directions combined.
2. Calculate the Directional Design Hourly Volume (DDHV) in the peak direction.
3. Calculate the volume of traffic moving in the non-peak direction during the design hour.

**Solution:**

**Step 1: Calculate the Design Hourly Volume (DHV)**
- $AADT = 24,000 \text{ vehicles/day}$
- $K = 12\% = 0.12$
$$DHV = AADT \times K$$
$$DHV = 24,000 \times 0.12 = 2,880 \text{ vehicles/hour (both directions combined)}$$

**Step 2: Calculate the Directional Design Hourly Volume (DDHV)**
- $D = 65\% = 0.65$
$$DDHV = AADT \times K \times D = DHV \times D$$
$$DDHV = 2,880 \times 0.65 = 1,872 \text{ vehicles/hour (peak direction)}$$

**Step 3: Calculate the Non-Peak Direction Volume ($V_{\text{non-peak}}$)**
The non-peak direction carries the remaining percentage of the total two-way volume during the design hour.
- Peak direction carries $65\% \implies$ non-peak direction carries $1 - 0.65 = 35\% = 0.35$ of the traffic.
$$V_{\text{non-peak}} = DHV \times (1 - D)$$
$$V_{\text{non-peak}} = 2,880 \times 0.35 = 1,008 \text{ vehicles/hour}$$

*Check:*
$$DDHV + V_{\text{non-peak}} = 1,872 + 1,008 = 2,880 \text{ vehicles/hour (matches DHV)}$$

---

## Crucial Pitfalls and Exam Traps

- **Confusing ADT and AADT:** Remember that ADT represents counts taken over a short window (e.g., 2 or 7 days) and does not represent the full year. If the exam provides ADT and a seasonal adjustment factor, apply the factor to get AADT before calculating DDHV.
- **Directional Split (D) Basis:** Always read the D-factor carefully. If a problem states the directional split is 60/40, then $D = 0.60$.
- **One-Way vs. Two-Way Volumes:** Geometric design elements (such as the number of lanes needed) are calculated using the one-way **DDHV**, not the two-way **DHV**. Using DHV instead of DDHV will lead to an over-designed highway with double the required lanes.
- **K-Factor Representation:** Ensure $K$ is treated as a decimal in your calculations ($10\% = 0.10$).
