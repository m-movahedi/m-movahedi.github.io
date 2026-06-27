# Rigid Pavement Design Concepts

Rigid pavements are constructed using Portland cement concrete (PCC) slabs resting on a subbase or directly on the subgrade. Unlike flexible pavements, which distribute loads through a layered system, rigid pavements distribute traffic wheel loads over a wide area through the bending stiffness (flexural rigidity) of the concrete slab itself. On the PE Civil Transportation exam, rigid pavement design is based on the **AASHTO 1993 rigid pavement design methodology**.

---

## 1. Concrete Slab Load Distribution

The concrete slab has a very high modulus of elasticity ($E_c \approx 3 \cdot 10^6$ to $5 \cdot 10^6\text{ psi}$), which allows it to act as a structural beam on an elastic foundation. This causes wheel load stresses to be distributed widely, resulting in very low pressures reaching the underlying base and subgrade layers.

```
                  Wheel Load (P)
                      ||
                      \/
      +------------------------------------------+  ---
      |          Concrete Slab (PCC)             |   | Slab Thickness (D)
      +------------------------------------------+  ---
      |          Base / Subbase Course           |
      +------------------------------------------+
      |                Subgrade                  |
      v v v v v v v v v v v v v v v v v v v v v v  <-- Wide, low-pressure distribution
```

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

```
        TRANSVERSE JOINT (Dowel Bars)             LONGITUDINAL JOINT (Tie Bars)
        ============================             ============================
         Slab 1      |      Slab 2                 Lane 1      ||      Lane 2
                     |                                         ||
          +----      |      ----+                   +----      ||      ----+
          |   [==============]  |                   |    \_____||_____/    |
          +----      |      ----+                   +----      ||      ----+
                     | Dowel Bar                               || Tie Bar (Deformed)
                     | (Smooth)                                ||
```

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
