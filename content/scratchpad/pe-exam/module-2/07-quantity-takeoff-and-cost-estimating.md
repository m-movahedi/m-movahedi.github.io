---
title: "Quantity Takeoff and Cost Estimating"
weight: 7
date : "2026-05-04"
draft : false
type : "post"
---
# Quantity Takeoff and Cost Estimating

This lesson covers the fundamentals of estimating material quantities and associated costs for civil engineering projects, a core topic on the NCEES PE Civil Transportation exam. In the exam, quantity takeoff problems test your attention to detail, unit conversions, and application of swell/shrinkage factors rather than complex mathematical theory.

---

## Earthwork Quantities

Earthwork estimating involves calculating the volumes of material to be excavated (cut) or deposited (fill) to achieve the design grade.

### 1. Volume Calculation: Average End Area Method
For linear projects (highways, railways, runways), cross-sections are taken at regular intervals (stations). The volume between two consecutive cross-sections is calculated using the Average End Area formula:

$$V = \frac{A_1 + A_2}{2} \times L$$

Where:
- $V$ = volume (cubic feet, $\text{ft}^3$)
- $A_1, A_2$ = cross-sectional areas of cut or fill at stations 1 and 2 ($\text{ft}^2$)
- $L$ = horizontal distance between the stations ($\text{ft}$)

**Unit Conversion Trap:** The PE exam almost always requests earthwork volumes in **cubic yards ($\text{yd}^3$ or CY)**. Since $1\text{ yd}^3 = 27\text{ ft}^3$, you must divide the result by 27:

$$V_{\text{CY}} = \frac{A_1 + A_2}{2 \times 27} \times L = \frac{A_1 + A_2}{54} \times L$$

### 2. Material States and Swell/Shrinkage Factors
Soil exists in three distinct states, and each state has a different density and volume:
1. **Bank (In-Situ / Natural State):** Soil in its natural, undisturbed state. Measured in **Bank Cubic Yards (BCY)**.
2. **Loose:** Soil after it is excavated and disturbed. The soil grains separate, introducing air pockets and increasing volume (swelling). Measured in **Loose Cubic Yards (LCY)**.
3. **Compacted:** Soil after it is placed and compacted in the fill area. The air is forced out, making it denser than the bank state (shrinking). Measured in **Compacted Cubic Yards (CCY)**.

```
   [ Bank State (BCY) ]  --(Excavation)-->  [ Loose State (LCY) ]
           |
      (Compaction)
           v
 [ Compacted State (CCY) ]
```

#### Formulas for Transitions:
- **Swell Factor ($S_w$ or Swell %):**
  $$LCY = BCY \times (1 + S_w)$$
  $$S_w = \left(\frac{\text{Bank Density}}{\text{Loose Density}} - 1\right) \times 100\%$$

- **Shrinkage Factor ($S_h$ or Shrinkage %):**
  $$CCY = BCY \times (1 - S_h)$$
  $$S_h = \left(1 - \frac{\text{Bank Density}}{\text{Compacted Density}}\right) \times 100\%$$

- **Load Factor ($L_f$):** Converts loose volume back to bank volume.
  $$BCY = LCY \times L_f$$
  $$L_f = \frac{1}{1 + S_w} = \frac{\text{Loose Density}}{\text{Bank Density}}$$

- **Shrinkage Limit / Compaction Factor ($C_f$):** Converts compacted volume back to bank volume.
  $$BCY = \frac{CCY}{1 - S_h}$$

---

## Worked Example: Earthwork and Soil States

**Problem:**  
A roadway construction project requires a compacted fill volume of $18,500\text{ CCY}$. The borrow pit soil has a swell factor of $20\%$ and a shrinkage factor of $15\%$. 
1. Determine the volume of soil that must be excavated from the borrow pit in Bank Cubic Yards (BCY).
2. If the haul trucks have a capacity of $12\text{ LCY}$ each, calculate the number of truckloads required to transport the material.

**Solution:**

**Step 1: Calculate Bank Volume (BCY) from Compacted Volume (CCY)**  
The borrow pit material is in the natural bank state. We must find the BCY needed to yield $18,500\text{ CCY}$ after compaction.
$$BCY = \frac{CCY}{1 - S_h}$$
$$BCY = \frac{18,500}{1 - 0.15} = \frac{18,500}{0.85} \approx 21,764.7\text{ BCY}$$

**Step 2: Calculate Loose Volume (LCY) for Hauling**  
Truck capacity is given in Loose Cubic Yards (LCY). We must find the loose volume of the excavated soil.
$$LCY = BCY \times (1 + S_w)$$
$$LCY = 21,764.7 \times (1 + 0.20) = 26,117.6\text{ LCY}$$

**Step 3: Calculate the Number of Truckloads**  
$$\text{Truckloads} = \frac{\text{Total Loose Volume}}{\text{Truck Capacity}}$$
$$\text{Truckloads} = \frac{26,117.6\text{ LCY}}{12\text{ LCY/truck}} \approx 2176.47 \text{ loads}$$

Since we cannot run a fraction of a truckload, round up to the nearest whole integer:
$$\text{Truckloads Required} = 2,177 \text{ loads}$$

---

## Pavement Material Quantities

Pavement takeoffs generally involve estimating structural asphalt layers (Hot Mix Asphalt - HMA), aggregate bases, and subbases.

### 1. Volume Calculations
Volume is simply the surface area multiplied by the design thickness.
$$V = \text{Length} \times \text{Width} \times \text{Thickness}$$

Ensure all units are consistent (convert thickness in inches and width in feet to yards before computing cubic yards):
$$V_{\text{CY}} = \frac{\text{Length (ft)} \times \text{Width (ft)} \times \text{Thickness (in)}}{12 \text{ in/ft} \times 27 \text{ ft}^3/\text{yd}^3} = \frac{L \times W \times t}{324}$$

### 2. Tonnage of Asphalt (HMA)
Hot Mix Asphalt is purchased and paid for by weight (tons).
- Standard HMA compacted unit weight is typically assumed to be **$140 \text{ lb/ft}^3$ to $150 \text{ lb/ft}^3$**, or a rule of thumb of **$110 \text{ lb/yd}^2$ per inch of thickness**.
- Always use the specific unit weight or density provided in the problem.

$$\text{Weight (Tons)} = \frac{V_{\text{ft}^3} \times \text{Density (lb/ft}^3)}{2,000 \text{ lb/ton}}$$

Alternatively, using the area-based rule:
$$\text{Weight (Tons)} = \frac{\text{Area (yd}^2) \times \text{Thickness (in)} \times 110\text{ lb/yd}^2\text{/in}}{2,000 \text{ lb/ton}}$$

---

## Worked Example: Asphalt Pavement Tonnage

**Problem:**  
A new highway section is $2.5\text{ miles}$ long and has four lanes, each $12\text{ feet}$ wide. The structural design specifies a Hot Mix Asphalt (HMA) surface course of $2.5\text{ inches}$ thick. The compacted density of the asphalt mix is $145 \text{ lb/ft}^3$. Calculate the total weight of HMA required for this project in tons. Include a $5\%$ waste factor.

**Solution:**

**Step 1: Calculate Total Pavement Surface Area**
- $\text{Total Width} = 4 \text{ lanes} \times 12 \text{ ft/lane} = 48\text{ ft}$
- $\text{Total Length} = 2.5 \text{ miles} \times 5,280 \text{ ft/mile} = 13,200\text{ ft}$
$$\text{Area} = 13,200\text{ ft} \times 48\text{ ft} = 633,600\text{ ft}^2$$

**Step 2: Calculate Volume in Cubic Feet**
- $\text{Thickness} = 2.5\text{ inches} = \frac{2.5}{12}\text{ ft} \approx 0.2083\text{ ft}$
$$\text{Volume} = 633,600\text{ ft}^2 \times 0.2083\text{ ft} = 132,000\text{ ft}^3$$

**Step 3: Calculate Weight in Tons**
$$\text{Theoretical Weight (Tons)} = \frac{132,000\text{ ft}^3 \times 145 \text{ lb/ft}^3}{2,000 \text{ lb/ton}} = 9,570 \text{ tons}$$

**Step 4: Apply Waste Factor**
$$\text{Total Weight Required} = 9,570\text{ tons} \times (1 + 0.05) = 10,048.5\text{ tons}$$

---

## Concrete Structural Elements

Concrete quantity takeoff is generally a pure geometric exercise. The output is usually requested in **Cubic Yards (CY)**.

### Common Structures:
- **Slabs and Footings:** $V = L \times W \times t$
- **Retaining Walls (constant cross-section):** $V = \text{Cross-sectional Area} \times \text{Length}$
- **Columns (circular):** $V = \frac{\pi D^2}{4} \times H$

### Crucial Waste Factor Rule:
Unlike earthwork, concrete does not have "swell" or "shrinkage" factors in the soil sense, but it does have **spillage and waste** during placement.
$$\text{Concrete Ordered} = \text{Theoretical Volume} \times (1 + \text{Waste Factor})$$
Typical waste factors range from $2\%$ to $10\%$.

---

## Worked Example: Retaining Wall Concrete

**Problem:**  
A concrete cantilever retaining wall has a uniform cross-section shown below. The stem is $12\text{ inches}$ wide at the top, $18\text{ inches}$ wide at the bottom, and $15\text{ feet}$ high above the footing. The footing is $10\text{ feet}$ wide, $2\text{ feet}$ thick, and runs the entire length of the wall. The wall is $250\text{ feet}$ long. Calculate the total concrete volume required in Cubic Yards, assuming a $4\%$ waste factor.

```
          1.0' (Top of Stem)
         +---+
         |   |
         |   | 15.0' (Stem Height)
         |   |
         +---+
       /       \ (Stem base: 1.5' wide)
   +-----------------+
   |                 | 2.0' (Footing)
   +-----------------+
        10.0' (Footing Width)
```

**Solution:**

**Step 1: Calculate the Area of the Stem**  
The stem is a trapezoid with top width $a = 1.0\text{ ft}$, bottom width $b = 1.5\text{ ft}$, and height $h = 15.0\text{ ft}$.
$$\text{Area}_{\text{stem}} = \frac{a + b}{2} \times h = \frac{1.0 + 1.5}{2} \times 15.0 = 18.75\text{ ft}^2$$

**Step 2: Calculate the Area of the Footing**  
The footing is a rectangle with width $w = 10.0\text{ ft}$ and thickness $t = 2.0\text{ ft}$.
$$\text{Area}_{\text{footing}} = w \times t = 10.0 \times 2.0 = 20.0\text{ ft}^2$$

**Step 3: Calculate Total Cross-Sectional Area**  
$$\text{Area}_{\text{total}} = 18.75 + 20.0 = 38.75\text{ ft}^2$$

**Step 4: Calculate Total Volume in Cubic Feet and Cubic Yards**  
$$\text{Volume}_{\text{ft}^3} = \text{Area}_{\text{total}} \times \text{Length} = 38.75\text{ ft}^2 \times 250\text{ ft} = 9,687.5\text{ ft}^3$$
$$\text{Volume}_{\text{CY}} = \frac{9,687.5}{27} \approx 358.80\text{ CY}$$

**Step 5: Apply Waste Factor**  
$$\text{Total Concrete to Order} = 358.80\text{ CY} \times 1.04 = 373.15\text{ CY}$$

---

## Trench Excavation, Bedding, and Backfill

Drainage pipelines require calculating trench excavation volumes, pipe volumes, bedding material volumes, and backfill.

```
       |<-   Trench Width (W)   ->|
================= Ground Level =================
       |                          |
       |       Backfill           |
       |       Material           |
       |                          |
       |         +--+             |
       |       /      \           |
       |      |  Pipe  |          |
       |       \      /           |
       |---------+--+-------------|  <-- Springline
       |     Bedding Material     |
       +--------------------------+
```

### Key Equations:
1. **Total Excavation Volume ($V_{\text{exc}}$):**
   $$V_{\text{exc}} = W_{\text{trench}} \times H_{\text{trench}} \times L$$
2. **Bedding Volume ($V_{\text{bed}}$):**
   $$V_{\text{bed}} = W_{\text{trench}} \times d_{\text{bed}} \times L$$
3. **Pipe Displaced Volume ($V_{\text{pipe}}$):**  
   Use the **Outer Diameter (OD)** of the pipe, not the inner nominal diameter!
   $$V_{\text{pipe}} = \frac{\pi \times OD^2}{4} \times L$$
4. **Net Backfill Volume ($V_{\text{back}}$):**
   $$V_{\text{back}} = V_{\text{exc}} - V_{\text{bed}} - V_{\text{pipe}}$$

---

## Striping and Roadside Quantities

Roadside estimating covers safety and environmental components.

### 1. Pavement Striping
Striping is estimated in linear feet (LF) of line or gallons of paint.
- **Skip Lines:** Usually written as a pattern, e.g., "10-foot segment with 30-foot gap". This represents a **40-foot cycle** where only **$25\%$** of the length is painted.
- **Paint Volume:** Given a coverage rate (e.g., $320\text{ linear feet per gallon}$ for a $4\text{-inch}$ wide line), determine the total gallons.

### 2. Roadside Seeding, Sodding, and Blankets
- **Sodding/Erosion Blankets:** Typically measured in **Square Yards (SY)**.
  $$\text{Area (SY)} = \frac{\text{Area (ft}^2)}{9}$$
- **Seeding:** Typically measured in **Acres** or **Pounds of seed**.
  $$\text{Area (Acres)} = \frac{\text{Area (ft}^2)}{43,560}$$

---

## Crucial Pitfalls and Exam Traps

- **Circular Pipe Volumes:** When calculating concrete displacement or trench backfill, always use the **Outer Diameter (OD)**. The NCEES exam will often list nominal inner diameter (ID) and wall thickness. $OD = ID + 2 \times \text{wall thickness}$.
- **Converting to Cubic Yards:** Never forget to divide cubic feet calculations by 27. It is the single most common cause of incorrect answers on PE takeoffs.
- **Applying Shrinkage and Swell Factors:** Always write out the physical relationship. Soil expands from bank to loose (divide/multiply to get larger numbers). Soil shrinks from bank to compacted (compacted volume is always smaller than bank volume).
- **Matching Units in Unit Price:** Check if a cost is per CY, per Ton, or per Square Yard. Make sure your quantity takeoff matches the pay item unit before multiplying.
