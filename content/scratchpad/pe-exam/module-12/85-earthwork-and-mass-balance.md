---
title: "Earthwork and Mass Balance"
weight: 85
---
# Earthwork and Mass Balance

Earthwork operations are a major component of highway construction projects. Designers must balance the volume of soil excavated from cut sections with the volume of soil required for fill (embankment) sections. Because soil volume changes when it is excavated, hauled, and compacted, engineers must apply volumetric conversion factors to calculate hauling costs and borrow-pit requirements. These concepts are frequently tested on the PE Civil Transportation exam.

---

## 1. Volumetric States of Soil

Soil exists in one of three states during earthwork operations, each with a different unit weight and volume:
1.  **Bank State (Natural):** Soil in its natural, undisturbed state before excavation. Measured in **Bank Cubic Yards (BCY)** or bank cubic meters ($V_B$).
2.  **Loose State (Hauled):** Soil after it has been excavated. The soil swells because air voids are introduced during excavation. Measured in **Loose Cubic Yards (LCY)** or loose cubic meters ($V_L$).
3.  **Compacted State (Placed):** Soil after it has been placed and compacted in the field. The soil shrinks because air voids are compressed and expelled. Measured in **Compacted Cubic Yards (CCY)** or compacted cubic meters ($V_C$).

```
        BANK STATE                  LOOSE STATE                 COMPACTED STATE
      (Undisturbed)                 (Excavated)                   (Compacted)
      +------------+               +------------+               +------------+
      |            |               |    Air     |               |            |
      |   Voids    |   Swell       |   Voids    |   Shrink      |   Voids    |
      |            |  =======>     |            |  =======>     |            |
      +------------+ (Vol Increases)+------------+ (Vol Decreases)+------------+
      |   Solids   |               |   Solids   |               |   Solids   |
      +------------+               +------------+               +------------+
         Volume VB                    Volume VL                    Volume VC
```

### The Fundamental Conservation Rule
Throughout all three states, the weight of the solid soil particles ($W_s$) remains constant. Only the volume of voids changes:
$$W_s = \gamma_{d,\text{bank}} \cdot V_B = \gamma_{d,\text{loose}} \cdot V_L = \gamma_{d,\text{compacted}} \cdot V_C$$

---

## 2. Swell, Shrinkage, and Conversion Factors

### Swell ($S_w$)
Swell is the increase in volume of a soil when it is excavated from its natural bank state into a loose state. It is expressed as a percentage of the bank volume:
$$S_w (\%) = \left(\frac{V_L}{V_B} - 1\right) \cdot 100\% = \left(\frac{\gamma_{d,\text{bank}}}{\gamma_{d,\text{loose}}} - 1\right) \cdot 100\%$$

To convert between volumes:
$$V_L = V_B \cdot (1 + S_w)$$

#### Load Factor ($L_f$):
The load factor is the ratio of bank volume to loose volume:
$$L_f = \frac{V_B}{V_L} = \frac{\gamma_{d,\text{loose}}}{\gamma_{d,\text{bank}}} = \frac{1}{1 + S_w}$$
$$V_B = V_L \cdot L_f$$

### Shrinkage ($S_h$)
Shrinkage is the decrease in volume of a soil when it is compacted from its natural bank state into a compacted state. It is expressed as a percentage of the bank volume:
$$S_h (\%) = \left(1 - \frac{V_C}{V_B}\right) \cdot 100\% = \left(1 - \frac{\gamma_{d,\text{bank}}}{\gamma_{d,\text{compacted}}}\right) \cdot 100\%$$

To convert between volumes:
$$V_C = V_B \cdot (1 - S_h)$$

#### Shrinkage Factor ($S_f$):
The shrinkage factor is the ratio of compacted volume to bank volume:
$$S_f = \frac{V_C}{V_B} = \frac{\gamma_{d,\text{bank}}}{\gamma_{d,\text{compacted}}} = 1 - S_h$$
$$V_B = \frac{V_C}{S_f} = \frac{V_C}{1 - S_h}$$

---

## 3. The Mass Diagram

A **mass diagram** is a cumulative plot of the net earthwork volume along the centerline of a roadway. The horizontal axis represents the stationing ($x$), and the vertical axis represents the cumulative net volume ($y$), where:
*   Excavation (Cut) is a positive volume addition ($+$).
*   Embankment (Fill) is a negative volume deduction ($-$).

*Note: Before adding volumes to the mass diagram, all fill volumes must be adjusted to their equivalent bank volumes by dividing the compacted fill volume by the shrinkage factor ($1 - S_h$).*

```
 Cumulative Net Volume (BCY)
       ^
       |              Peak (Transition from Cut to Fill)
       |               /\
       |              /  \      Balance Line
  -----+-------------/----\-----------------> Stationing
       |            /      \
       |           /        \/
       |          /        Valley (Transition from Fill to Cut)
       v
```

### Key Features of a Mass Diagram
*   **Rising Curve:** Indicates a cut section (net excavation).
*   **Falling Curve:** Indicates a fill section (net embankment).
*   **Peaks (Local Maxima):** Represent points where the profile transitions from cut to fill.
*   **Valleys (Local Minima):** Represent points where the profile transitions from fill to cut.
*   **Balance Points:** Points where the mass diagram curve intersects the balance line (net volume = 0). The volume of cut between these two points exactly equals the volume of fill required.
*   **Haul Direction:** 
    *   If the curve is above the balance line (a loop pointing upward), the haul direction is **forward** (from left to right / low stations to high stations).
    *   If the curve is below the balance line (a loop pointing downward), the haul direction is **backward** (from right to left / high stations to low stations).

### Haul Terminology
*   **Haul:** The product of the volume of earth moved and the distance it is moved (measured in station-yards).
*   **Freehaul:** The distance within which the contractor moves soil without extra payment (specified in the contract, e.g., $500\text{ ft}$).
*   **Overhaul:** The movement of soil beyond the freehaul distance, which requires additional compensation.
*   **Borrow:** Soil imported from an external source when fill exceeds cut.
*   **Waste:** Soil exported and disposed of when cut exceeds fill.

---

## 4. Worked Examples

### Worked Example 1: Volumetric State Conversion
A highway embankment requires $45,000\text{ CCY}$ (Compacted Cubic Yards) of clayey sand. Soil will be excavated from a local borrow pit and hauled to the site in trucks with a capacity of $12.0\text{ LCY}$ (Loose Cubic Yards) per load. The soil properties are:
*   Bank dry unit weight ($\gamma_{d,\text{bank}}$) = $110.0\text{ lb/ft}^3$
*   Loose dry unit weight ($\gamma_{d,\text{loose}}$) = $90.0\text{ lb/ft}^3$
*   Compacted dry unit weight ($\gamma_{d,\text{comp}}$) = $125.0\text{ lb/ft}^3$

**Goal:** Determine:
1.  The volume of soil required from the borrow pit in Bank Cubic Yards (BCY).
2.  The number of truck loads required to haul the soil.

**Solution:**
1.  **Calculate Swell ($S_w$) and Shrinkage ($S_h$):**
    *   **Swell:**
        $$S_w = \frac{\gamma_{d,\text{bank}}}{\gamma_{d,\text{loose}}} - 1 = \frac{110.0}{90.0} - 1 = 1.222 - 1.0 = 0.222\text{ (or } 22.2\%)$$
    *   **Shrinkage:**
        $$S_h = 1 - \frac{\gamma_{d,\text{bank}}}{\gamma_{d,\text{comp}}} = 1 - \frac{110.0}{125.0} = 1 - 0.88 = 0.12\text{ (or } 12.0\%)$$
        *(Shrinkage factor $S_f = 1 - S_h = 0.88$)*
2.  **Calculate Bank Volume Required ($V_B$):**
    Using the compacted-to-bank conversion:
    $$V_B = \frac{V_C}{1 - S_h} = \frac{45,000\text{ CCY}}{0.88} = 51,136.4\text{ BCY}$$
3.  **Calculate Loose Volume Required ($V_L$):**
    Using the bank-to-loose conversion:
    $$V_L = V_B \cdot (1 + S_w) = 51,136.4\text{ BCY} \cdot (1 + 0.222) = 51,136.4 \cdot 1.222 = 62,499.7\text{ LCY}$$
    *(Alternatively, use dry weight conservation: $V_L = V_C \cdot \frac{\gamma_{d,\text{comp}}}{\gamma_{d,\text{loose}}} = 45,000 \cdot \frac{125}{90} = 62,500\text{ LCY}$. The values check out!)*
4.  **Calculate Number of Truck Loads:**
    $$\text{Loads} = \frac{V_L}{\text{Truck Capacity}} = \frac{62,500\text{ LCY}}{12.0\text{ LCY/load}} = 5208.33\text{ loads}$$
    Since you cannot run a fraction of a load, round up:
    $$\text{Loads} = 5209\text{ loads}$$

---

### Worked Example 2: Earthwork Balancing
A project has a cut section with a volume of $8000\text{ BCY}$. This soil is to be placed in an adjacent fill section that has a designed compacted volume of $7200\text{ CCY}$. The soil shrinkage factor is $S_f = 0.85$ (meaning $S_h = 15\%$).

**Goal:** Determine if there is a surplus or deficit of soil, and calculate the volume of borrow required or waste generated in BCY.

**Solution:**
1.  **Convert Compacted Fill Volume to Bank Cubic Yards (BCY):**
    $$V_{F,\text{bank}} = \frac{V_C}{S_f} = \frac{7200\text{ CCY}}{0.85} = 8470.6\text{ BCY}$$
    This is the amount of bank soil required to satisfy the fill.
2.  **Compare Cut Volume to Required Fill Volume:**
    *   Soil available from cut ($V_{\text{cut}}$) = $8000\text{ BCY}$
    *   Soil needed for fill ($V_{\text{fill}}$) = $8470.6\text{ BCY}$
    *   Net Balance = $V_{\text{cut}} - V_{F,\text{bank}} = 8000 - 8470.6 = -470.6\text{ BCY}$
3.  **Determine Borrow or Waste:**
    Since the balance is negative, there is a **deficit** of soil. 
    $$\text{Borrow Required} = 471\text{ BCY}$$

---

## 5. Exam Pitfalls and Tips

*   **Forgetting to Adjust Fill Volumes:** When reading a mass diagram or balancing earthwork, never compare bank cut volumes directly to compacted fill volumes. You must convert the fill volume to bank equivalent volume first:
    $$V_{\text{fill (BCY)}} = \frac{V_{\text{fill (CCY)}}}{1 - S_h}$$
*   **Multiplication vs. Division Confusions:** Remember:
    *   Loose volume ($V_L$) is the *largest* volume ($V_L > V_B > V_C$).
    *   Compacted volume ($V_C$) is the *smallest* volume.
    *   If you convert from bank to loose, you multiply by $(1+S_w)$. If you convert from loose to bank, you divide by $(1+S_w)$ or multiply by $L_f$.
*   **Dry Unit Weight vs. Wet Unit Weight:** Swell and shrinkage factors are defined based on dry unit weights, because dry weight of solids is constant. If a problem provides wet unit weights and water contents, compute the dry unit weights before determining the conversion ratios.
*   **Reading Mass Diagrams:** Remember that a rising curve represents cut (excavation) and a falling curve represents fill (embankment). The peaks and valleys are transition points, not the locations of maximum cut or fill.
