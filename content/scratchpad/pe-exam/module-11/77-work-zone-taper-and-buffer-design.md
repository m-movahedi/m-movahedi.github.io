# Work Zone Taper and Buffer Design

Tapers and buffer spaces are the core geometric design elements of a Temporary Traffic Control (TTC) zone. A taper uses a series of channelizing devices or pavement markings to laterally transition traffic. A buffer space provides longitudinal and lateral clearance between active traffic and workers.

On the PE Civil Transportation exam, you will frequently be asked to calculate the lengths of various taper types and determine buffer space requirements using MUTCD criteria and mathematical formulas.

---

## Taper Types and Definitions

The MUTCD defines five types of tapers, each serving a distinct operational purpose. The required length of each taper is expressed as a fraction or multiple of the standard merging taper length ($L$).

1.  **Merging Taper:** Used to close a lane on a multi-lane road and force traffic to merge into an adjacent lane. 
    *   *Required Length:* **$L$** (Full taper length).
2.  **Shifting Taper:** Used to redirect traffic laterally from one lane to another (such as shifting traffic onto a shoulder or bypass) without closing a lane.
    *   *Required Length:* **$0.5L$** (or $L/2$).
3.  **Shoulder Taper:** Used to close a paved shoulder to protect workers or equipment parked on the shoulder.
    *   *Required Length:* **$0.33L$** (or $L/3$).
4.  **Downstream (Termination) Taper:** Used at the end of the activity area to guide vehicles back into their original lane.
    *   *Required Length:* **$50\text{ to } 100\text{ feet}$** per closed lane.
5.  **One-Lane, Two-Way Taper:** Used when a single lane is shared by opposing directions of traffic (regulated by flaggers or a temporary signal).
    *   *Required Length:* **$50\text{ to } 100\text{ feet}$** maximum. (A short taper is used to encourage low speeds through the transition).

---

## Taper Length ($L$) Formulas

The standard merging taper length ($L$) is calculated using two formulas, depending on the speed limit.

$$\text{For } S < 45\text{ mph:} \quad L = \frac{W \cdot S^2}{60}$$

$$\text{For } S \ge 45\text{ mph:} \quad L = W \cdot S$$

Where:
*   $L$ = Merging taper length (feet)
*   $W$ = Width of the lateral shift or lane width (feet)
*   $S$ = Posted speed limit, off-peak 85th-percentile speed, or work zone design speed (miles per hour, $\text{mph}$)

*Common Trap: On the PE exam, check the speed limit ($S$) carefully to determine which formula to use. Using the wrong formula is the most common distractor for this topic.*

---

## Longitudinal Buffer Space ($L_b$)

The longitudinal buffer space is an empty recovery zone placed upstream of the work space. It is designed to let an out-of-control vehicle stop before hitting workers. 

The MUTCD (Table 6C-2) lists recommended longitudinal buffer space lengths based on speed. These distances correspond to AASHTO stopping sight distances on level, wet concrete pavements:

| Speed ($S$, mph) | Recommended Buffer Length ($L_b$, feet) |
| :---: | :---: |
| **20** | 115 |
| **25** | 155 |
| **30** | 200 |
| **35** | 250 |
| **40** | 305 |
| **45** | 360 |
| **50** | 425 |
| **55** | 495 |
| **60** | 570 |
| **65** | 645 |
| **70** | 730 |
| **75** | 820 |

*Exam Tip: Longitudinal buffer space must remain entirely clear of materials, equipment, and worker vehicles. If a question asks where to store construction supplies, the buffer space is NEVER the correct answer.*

---

## Worked Example: Work Zone Taper and Buffer Design

### Problem Statement
A utility project requires a lane closure and shift on a four-lane divided suburban highway. The design characteristics are:
*   Standard lane width ($W$): $12\text{ feet}$
*   Speed limit ($S$): $40\text{ mph}$

Later in the project, the work moves to a rural highway with:
*   Standard lane width ($W$): $12\text{ feet}$
*   Speed limit ($S$): $55\text{ mph}$

Calculate the following for **both** the $40\text{-mph}$ and $55\text{-mph}$ scenarios:
1.  The required merging taper length ($L_m$) to close one travel lane.
2.  The required shifting taper length ($L_s$) to shift traffic onto an adjacent lane.
3.  The required shoulder taper length ($L_{\text{shoulder}}$) to close a $10\text{-foot}$ wide paved shoulder.
4.  The recommended longitudinal buffer space ($L_b$).

### Step-by-Step Solution

---

### Part A: $40\text{-mph}$ Scenario (Low-Speed, $S < 45\text{ mph}$)

#### 1. Merging Taper Length ($L_m$)
Since the speed is $40\text{ mph}$ ($S < 45\text{ mph}$), use the low-speed quadratic formula:
$$L_m = \frac{W \cdot S^2}{60} = \frac{12\text{ ft} \times (40\text{ mph})^2}{60}$$
$$L_m = \frac{12 \times 1,600}{60} = \frac{19,200}{60} = 320\text{ feet}$$

#### 2. Shifting Taper Length ($L_s$)
A shifting taper is $50\%$ of the merging taper:
$$L_s = 0.5 \cdot L_m = 0.5 \times 320\text{ ft} = 160\text{ feet}$$

#### 3. Shoulder Taper Length ($L_{\text{shoulder}}$)
A shoulder taper is $1/3$ of the merging taper, using the shoulder width ($W_{\text{shoulder}} = 10\text{ ft}$) as the shift width:
First, calculate the merging taper ($L$) for a $10\text{-foot}$ width at $40\text{ mph}$:
$$L = \frac{10\text{ ft} \times 40^2}{60} = 266.67\text{ feet}$$
Now, apply the $1/3$ factor:
$$L_{\text{shoulder}} = 0.33 \cdot L = \frac{266.67\text{ ft}}{3} = 88.89\text{ feet} \approx 89\text{ feet}$$

#### 4. Longitudinal Buffer Space ($L_b$)
Lookup the value for $40\text{ mph}$ in the MUTCD Buffer table:
$$L_b = 305\text{ feet}$$

---

### Part B: $55\text{-mph}$ Scenario (High-Speed, $S \ge 45\text{ mph}$)

#### 1. Merging Taper Length ($L_m$)
Since the speed is $55\text{ mph}$ ($S \ge 45\text{ mph}$), use the high-speed linear formula:
$$L_m = W \cdot S = 12\text{ ft} \times 55\text{ mph} = 660\text{ feet}$$

#### 2. Shifting Taper Length ($L_s$)
$$L_s = 0.5 \cdot L_m = 0.5 \times 660\text{ ft} = 330\text{ feet}$$

#### 3. Shoulder Taper Length ($L_{\text{shoulder}}$)
First, calculate the merging taper ($L$) for a $10\text{-foot}$ shoulder shift at $55\text{ mph}$:
$$L = W_{\text{shoulder}} \cdot S = 10\text{ ft} \times 55\text{ mph} = 550\text{ feet}$$
Now, apply the $1/3$ factor:
$$L_{\text{shoulder}} = 0.33 \cdot L = \frac{550\text{ ft}}{3} = 183.33\text{ feet} \approx 183\text{ feet}$$

#### 4. Longitudinal Buffer Space ($L_b$)
Lookup the value for $55\text{ mph}$ in the MUTCD Buffer table:
$$L_b = 495\text{ feet}$$
