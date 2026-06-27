---
title: "Rigid Pavement Design Concepts"
weight: 87
date : "2026-05-04"
draft : false
type : "post"
---
# Rigid Pavement Design Concepts

Rigid pavements are constructed using Portland cement concrete (PCC) slabs resting on a subbase or directly on the subgrade. Unlike flexible pavements, which distribute loads through a layered system, rigid pavements distribute traffic wheel loads over a wide area through the bending stiffness (flexural rigidity) of the concrete slab itself. On the PE Civil Transportation exam, rigid pavement design is based on the **AASHTO 1993 rigid pavement design methodology**.

---

## 1. Concrete Slab Load Distribution

The concrete slab has a very high modulus of elasticity ($E_c \approx 3 \cdot 10^6$ to $5 \cdot 10^6\text{ psi}$), which allows it to act as a structural beam on an elastic foundation. This causes wheel load stresses to be distributed widely, resulting in very low pressures reaching the underlying base and subgrade layers.

<div style="width: 100%; max-width: 600px; margin: 2rem auto;">
<svg viewBox="0 0 600 250" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" style="font-family: sans-serif; fill: currentColor;">
  <!-- Wheel Load -->
  <line x1="300" y1="20" x2="300" y2="60" stroke="#e74c3c" stroke-width="4" marker-end="url(#arrow-red)"/>
  <text x="300" y="15" text-anchor="middle" font-weight="bold" fill="#e74c3c">Wheel Load (P)</text>
  <!-- Layers -->
  <rect x="100" y="70" width="400" height="40" fill="rgba(200,200,200,0.5)" stroke="currentColor" stroke-width="2" />
  <text x="300" y="95" text-anchor="middle" font-weight="bold">Concrete Slab (PCC)</text>  
  <rect x="100" y="110" width="400" height="30" fill="rgba(150,150,150,0.3)" stroke="currentColor" stroke-width="2" />
  <text x="300" y="130" text-anchor="middle" font-size="0.9em">Base / Subbase Course</text>
  <rect x="100" y="140" width="400" height="60" fill="rgba(139, 69, 19, 0.2)" stroke="currentColor" stroke-width="2" />
  <text x="300" y="175" text-anchor="middle" font-size="0.9em">Subgrade</text>
  <!-- Thickness D -->
  <line x1="520" y1="70" x2="540" y2="70" stroke="currentColor" stroke-width="1" />
  <line x1="520" y1="110" x2="540" y2="110" stroke="currentColor" stroke-width="1" />
  <line x1="530" y1="70" x2="530" y2="110" stroke="currentColor" stroke-width="1" marker-start="url(#arrow)" marker-end="url(#arrow)"/>
  <text x="545" y="95" font-size="0.9em">Slab Thickness (D)</text>
  <!-- Distribution Arrows -->
  <g stroke="#3498db" stroke-width="2" marker-end="url(#arrow-blue)">
    <line x1="120" y1="210" x2="120" y2="230"/>
    <line x1="170" y1="210" x2="170" y2="230"/>
    <line x1="220" y1="210" x2="220" y2="230"/>
    <line x1="270" y1="210" x2="270" y2="230"/>
    <line x1="320" y1="210" x2="320" y2="230"/>
    <line x1="370" y1="210" x2="370" y2="230"/>
    <line x1="420" y1="210" x2="420" y2="230"/>
    <line x1="470" y1="210" x2="470" y2="230"/>
  </g>
  <text x="500" y="225" font-size="0.8em" font-style="italic" fill="#3498db">&larr; Wide, low-pressure distribution</text>
  <defs>
    <marker id="arrow" markerWidth="10" markerHeight="10" refX="5" refY="5" orient="auto-start-reverse">
      <path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor" />
    </marker>
    <marker id="arrow-red" markerWidth="10" markerHeight="10" refX="5" refY="5" orient="auto-start-reverse">
      <path d="M 0 0 L 10 5 L 0 10 z" fill="#e74c3c" />
    </marker>
    <marker id="arrow-blue" markerWidth="10" markerHeight="10" refX="5" refY="5" orient="auto-start-reverse">
      <path d="M 0 0 L 10 5 L 0 10 z" fill="#3498db" />
    </marker>
  </defs>
</svg>
</div>

---

## 2. AASHTO 1993 Rigid Pavement Design Equation

The objective of rigid pavement design is to determine the required slab thickness ($D$, in inches). The AASHTO design equation is:

$$\log_{10}(W_{18}) = Z_R S_0 + 7.35 \log_{10}(D + 1) - 0.06 + \frac{\log_{10}\left(\frac{\Delta PSI}{4.5 - 1.5}\right)}{1.0 + \frac{1.624 \cdot 10^7}{(D + 1)^{8.46}}} + (4.22 - 0.32 p_t) \log_{10}\left[ \frac{S'_c C_d (D^{0.75} - 1.13)}{215.63 J \left( D^{0.75} - \frac{18.42}{(E_c / k)^{0.25}} \right)} \right]$$

Where:
*   $W_{18} = \text{design traffic demand}$ (total 18-kip Equivalent Single Axle Loads (ESALs) over the design life).
*   $Z_R = \text{standard normal deviate}$ corresponding to the design Reliability ($R$, %).
*   $S_0 = \text{overall standard deviation}$ (typically $0.30$ to $0.40$ for rigid pavements; $0.35$ is standard).
*   $D = \text{thickness of the concrete slab (in inches)}$.
*   $\Delta PSI = \text{design Serviceability Loss} = p_i - p_t$.
    *   $p_i = \text{initial serviceability index}$ (typically $4.5$ for rigid pavements).
    *   $p_t = \text{terminal serviceability index}$ (typically $2.5$ for major highways).
*   $S'_c = \text{concrete modulus of rupture}$ (flexural strength of concrete in psi).
*   $C_d = \text{drainage coefficient}$ (adjusts slab performance based on drainage quality).
*   $J = \text{load transfer coefficient}$ (accounts for the ability of joints or shoulders to transfer load).
*   $E_c = \text{modulus of elasticity of concrete (in psi)}$.
*   $k = \text{modulus of subgrade reaction (in psi/in or pci)}$.

---

## 3. Modulus of Subgrade Reaction ($k$)

The modulus of subgrade reaction ($k$) represents the stiffness of the soil foundation supporting the concrete slab. It is measured in the field using a **Plate Bearing Test** (using a $30\text{-inch}$ diameter steel plate):
$$k = \frac{p}{\delta}$$
Where:
*   $p = \text{contact pressure applied by the plate (psi)}$
*   $\delta = \text{deflection of the plate (inches)}$
*   *Units:* $\text{psi/in}$ or $\text{lb/in}^3$ (often written as **pci** - pounds per cubic inch).

The design $k$-value is adjusted to account for the presence of a subbase layer, the depth to bedrock, and seasonal moisture variations. It is also corrected for the **Loss of Support (LS)**, which is a factor ($0.0$ to $3.0$) that accounts for the potential erosion of subbase material beneath the slab.

---

## 4. Concrete Material Properties

### Modulus of Rupture ($S'_c$)
Concrete is weak in tension, and rigid pavements fail primarily through flexural fatigue cracking at the bottom of the slab. Thus, the design strength is characterized by the **flexural strength** or **modulus of rupture ($S'_c$)**, measured using a third-point beam loading test (ASTM C78).
$$S'_c \approx 8 \text{ to } 10 \sqrt{f'_c} \quad \text{(in psi)}$$
Where $f'_c$ is the compressive strength of the concrete in psi.

### Modulus of Elasticity ($E_c$)
The concrete modulus of elasticity is calculated from its compressive strength:
$$E_c = 57,000 \sqrt{f'_c} \quad \text{(in psi)}$$

---

## 5. Joint Design and Load Transfer

To control cracking caused by thermal expansion, contraction, and moisture gradients, rigid pavements are divided into individual slabs by joints.

<div style="width: 100%; max-width: 700px; margin: 2rem auto;">
<svg viewBox="0 0 700 200" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" style="font-family: sans-serif; fill: currentColor;">
  <!-- TRANSVERSE JOINT -->
  <text x="175" y="30" text-anchor="middle" font-weight="bold">TRANSVERSE JOINT</text>
  <text x="175" y="45" text-anchor="middle" font-size="0.8em">(Dowel Bars)</text>
  <!-- Slab 1 and 2 -->
  <text x="100" y="80" text-anchor="middle">Slab 1</text>
  <text x="250" y="80" text-anchor="middle">Slab 2</text>  
  <path d="M 50 100 L 160 100 L 160 160 L 50 160" fill="none" stroke="currentColor" stroke-width="2"/>
  <path d="M 300 100 L 190 100 L 190 160 L 300 160" fill="none" stroke="currentColor" stroke-width="2"/>  
  <!-- Joint Gap -->
  <line x1="175" y1="60" x2="175" y2="180" stroke="currentColor" stroke-width="1" stroke-dasharray="4,4" />
  <!-- Dowel Bar -->
  <rect x="110" y="120" width="130" height="15" fill="#bdc3c7" stroke="#7f8c8d" stroke-width="2" rx="3" />  
  <text x="175" y="190" text-anchor="middle" font-size="0.8em" font-style="italic">Dowel Bar (Smooth)</text>
  <!-- LONGITUDINAL JOINT -->
  <text x="525" y="30" text-anchor="middle" font-weight="bold">LONGITUDINAL JOINT</text>
  <text x="525" y="45" text-anchor="middle" font-size="0.8em">(Tie Bars)</text>
  <!-- Lane 1 and 2 -->
  <text x="450" y="80" text-anchor="middle">Lane 1</text>
  <text x="600" y="80" text-anchor="middle">Lane 2</text>
  <!-- Keyway geometry -->
  <path d="M 400 100 L 515 100 L 515 115 L 525 125 L 515 135 L 515 160 L 400 160" fill="none" stroke="currentColor" stroke-width="2"/>
  <path d="M 650 100 L 520 100 L 520 115 L 530 125 L 520 135 L 520 160 L 650 160" fill="none" stroke="currentColor" stroke-width="2"/>
  <!-- Tie Bar -->
  <line x1="460" y1="125" x2="590" y2="125" stroke="#e67e22" stroke-width="8" stroke-linecap="round" />
  <line x1="470" y1="120" x2="470" y2="130" stroke="#d35400" stroke-width="2" />
  <line x1="490" y1="120" x2="490" y2="130" stroke="#d35400" stroke-width="2" />
  <line x1="510" y1="120" x2="510" y2="130" stroke="#d35400" stroke-width="2" />
  <line x1="530" y1="120" x2="530" y2="130" stroke="#d35400" stroke-width="2" />
  <line x1="550" y1="120" x2="550" y2="130" stroke="#d35400" stroke-width="2" />
  <line x1="570" y1="120" x2="570" y2="130" stroke="#d35400" stroke-width="2" />  
  <text x="525" y="190" text-anchor="middle" font-size="0.8em" font-style="italic">Tie Bar (Deformed)</text>
</svg>
</div>

### Dowel Bars (Transverse Joints)
*   **Purpose:** Smooth round steel bars placed across transverse joints to transfer shear loads from one slab to the next.
*   **Mechanism:** They allow the slabs to expand and contract horizontally along the length of the bar (since one side is lubricated/capped), but prevent vertical differential movement (faulting).
*   **Impact on Design:** The use of dowel bars increases load transfer efficiency, which lowers the concrete stress and reduces the required slab thickness ($D$).

### Tie Bars (Longitudinal Joints)
*   **Purpose:** Deformed steel rebars placed across longitudinal joints to hold adjacent traffic lanes or shoulders together.
*   **Mechanism:** Unlike dowel bars, tie bars are bonded to the concrete and do not allow joint opening or horizontal movement. They prevent lane separation.

### Load Transfer Coefficient ($J$)
The $J$ parameter accounts for the presence of load transfer devices (dowel bars) and tied concrete shoulders:
*   **Lower $J$ values (2.5 - 3.2):** Indicate excellent load transfer (doweled transverse joints and/or tied concrete shoulders).
*   **Higher $J$ values (3.8 - 4.5):** Indicate poor load transfer (undoweled joints and aggregate interlock only, with asphalt shoulders).

---

## 6. Worked Examples

### Worked Example 1: Concrete Properties
A rigid pavement is specified to be constructed using concrete with a $28\text{-day}$ compressive strength ($f'_c$) of $4500\text{ psi}$.

**Goal:** Estimate the concrete's modulus of rupture ($S'_c$) using the NCEES standard relation ($S'_c = 9 \sqrt{f'_c}$) and its modulus of elasticity ($E_c$).

**Solution:**
1.  **Calculate Modulus of Rupture ($S'_c$):**
    $$S'_c = 9 \sqrt{f'_c} = 9 \sqrt{4500} = 9 \cdot 67.08 = 603.7\text{ psi}$$
2.  **Calculate Modulus of Elasticity ($E_c$):**
    $$E_c = 57,000 \sqrt{f'_c} = 57,000 \sqrt{4500} = 57,000 \cdot 67.08 = 3.82 \cdot 10^6\text{ psi}$$

*Result:* The modulus of rupture is **$604\text{ psi}$** and the modulus of elasticity is **$3.82 \cdot 10^6\text{ psi}$**.

---

### Worked Example 2: Modulus of Subgrade Reaction ($k$)
A plate bearing test is conducted on a prepared subgrade. A load of $14,130\text{ lb}$ is applied to a $30\text{-inch}$ diameter plate, resulting in a deflection of $0.05\text{ inches}$.

**Goal:** Calculate the modulus of subgrade reaction ($k$) of the subgrade in pci.

**Solution:**
1.  **Calculate Plate Area ($A$):**
    $$D = 30\text{ inches} \implies R = 15\text{ inches}$$
    $$A = \pi R^2 = \pi (15)^2 = 225\pi \approx 706.86\text{ in}^2$$
2.  **Calculate Applied Pressure ($p$):**
    $$p = \frac{\text{Load}}{A} = \frac{14,130\text{ lb}}{706.86\text{ in}^2} = 19.99\text{ psi} \approx 20.0\text{ psi}$$
3.  **Calculate Modulus of Subgrade Reaction ($k$):**
    $$k = \frac{p}{\delta} = \frac{20.0\text{ psi}}{0.05\text{ inches}} = 400.0\text{ pci}$$

*Result:* The modulus of subgrade reaction is **$400\text{ pci}$**.

---

## 7. Exam Pitfalls and Tips

*   **Dowel Bars vs. Tie Bars:** Do not confuse these two joint reinforcements:
    *   **Dowel bars** are smooth, placed at *transverse* joints, and transfer shear loads while allowing horizontal thermal expansion/contraction.
    *   **Tie bars** are deformed, placed at *longitudinal* joints, and hold the lanes together (preventing horizontal movement).
*   **Initial Serviceability ($p_i$):** In the rigid pavement design formula, the default initial serviceability is $p_i = 4.5$. Do not use the flexible pavement default value ($4.2$) unless explicitly instructed.
*   **Standard Deviation ($S_0$):** Use $S_0 = 0.35$ (or within $0.30 - 0.40$) for rigid pavement problems. Ensure you do not use the flexible pavement value ($0.45$).
*   **Units of $k$:** Remember that $k$ has units of pressure over length ($\text{psi/in}$ or $\text{pci}$). If a problem states the foundation stiffness in $\text{pci}$, it is providing the $k$-value directly.
