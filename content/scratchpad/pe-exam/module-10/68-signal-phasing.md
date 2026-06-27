# Traffic Signal Phasing

Signal phasing is the sequence of right-of-way allocations designed to prevent conflicts between vehicles and pedestrians at an intersection. In the PE Civil Transportation exam, you will encounter questions regarding standard NEMA phase numbering, ring-barrier configurations, left-turn treatment operations, and overlaps.

---

## NEMA Phase Numbering Convention

The National Electrical Manufacturers Association (NEMA) standardizes phase numbering for an 8-phase dual-ring controller. An intersection's movements are mapped to phases using a standard layout.

### Standard NEMA Phasing Rules:
*   **Even numbers (2, 4, 6, 8)** are assigned to **through movements** (and their associated right turns).
*   **Odd numbers (1, 3, 5, 7)** are assigned to **left-turn movements**.
*   **Phases 2 and 6** represent the major street through movements.
*   **Phases 4 and 8** represent the minor street through movements.
*   **Phases 1 and 5** are the left turns opposing phases 6 and 2, respectively.
*   **Phases 3 and 7** are the left turns opposing phases 8 and 4, respectively.

### Standard NEMA Phase Mapping:

| Phase | Direction / Movement | Companion Through Phase |
| :--- | :--- | :--- |
| **Phase 1** | EB Left Turn | Phase 6 (WB Through) |
| **Phase 2** | WB Through / Right | Phase 5 (EB Left Turn) |
| **Phase 3** | SB Left Turn | Phase 8 (NB Through) |
| **Phase 4** | NB Through / Right | Phase 7 (SB Left Turn) |
| **Phase 5** | EB Left Turn | Phase 2 (WB Through) |
| **Phase 6** | EB Through / Right | Phase 1 (WB Left Turn) |
| **Phase 7** | NB Left Turn | Phase 4 (SB Through) |
| **Phase 8** | SB Through / Right | Phase 3 (NB Left Turn) |

*Note: East/West is typically the major street (Phases 2 & 6), and North/South is the minor street (Phases 4 & 8).*

---

## Ring-Barrier Diagrams

A ring-barrier diagram illustrates the concurrent and sequential execution of phases. 

*   **Rings** represent sequences of phases that run independently but concurrently (Ring 1 on top, Ring 2 on bottom).
*   **Barriers** (vertical double lines) separate conflicting groups of phases. The controller cannot cross the barrier in one ring until the other ring is ready to cross. This prevents major-street movements from running concurrently with minor-street movements.

```text
       BARRIER
Ring 1:  [ Phase 1 ] [ Phase 2 ] || [ Phase 3 ] [ Phase 4 ]
Ring 2:  [ Phase 5 ] [ Phase 6 ] || [ Phase 7 ] [ Phase 8 ]
```

### Concurrent Phase Combinations:
*   Phases on the same side of the barrier and in different rings can run together:
    *   **Phase 1** can run with **Phase 5** or **Phase 6**.
    *   **Phase 2** can run with **Phase 5** or **Phase 6**.
    *   **Phase 3** can run with **Phase 7** or **Phase 8**.
    *   **Phase 4** can run with **Phase 7** or **Phase 8**.
*   Phases in the same ring (e.g., Phase 1 and Phase 2) **cannot** run together.
*   Phases on opposite sides of the barrier (e.g., Phase 2 and Phase 4) **cannot** run together.

---

## Left-Turn Phasing Treatments

Left turns are the most complex movements to phase. The choice of left-turn treatment balances capacity (delay) and safety (conflicts).

### 1. Permissive Only
*   **Operation:** Left-turning vehicles yield to opposing through traffic and pedestrians during a circular green indication.
*   **Pros/Cons:** Low delay for through traffic, but higher crash risk. Only suitable for low left-turn volumes and low speeds.

### 2. Protected Only
*   **Operation:** Left turns are made only during a green arrow display. Opposing through traffic is stopped.
*   **Pros/Cons:** Safest operation. However, it increases delay because it dedicates a separate phase in the cycle.
*   **NCEES Guideline:** Typically required if left-turn volumes exceed $250\text{ vehicles/hour}$, or if the speed limit exceeds $45\text{ mph}$, or if there are 3 opposing lanes.

### 3. Protected-Permissive (PPLT)
*   **Operation:** Provides a green arrow (protected phase) for part of the cycle, and a circular green or flashing yellow arrow (permissive phase) during the through phase.
*   **Flashing Yellow Arrow (FYA):** Standardized by the MUTCD, the FYA mitigates the "yellow trap." The yellow trap occurs when a permissive left-turning driver sees a steady yellow light (indicating their phase is ending) and mistakenly assumes the opposing through traffic also has a yellow light, causing them to turn in front of oncoming vehicles that still have a green light. The FYA displays a clear flashing arrow during the permissive interval, resolving this safety hazard.

### 4. Split Phasing
*   **Operation:** Opposing approaches run sequentially rather than concurrently. For example, the Eastbound approach (through and left turns) gets a green light while the Westbound approach is completely stopped. Then the Westbound approach gets a green.
*   **Use Cases:** Highly unequal traffic volumes, shared left/through lanes where left-turn volumes are high, or skewed intersection geometries.

---

## Phase Overlaps

An **overlap** is a controller output that operates concurrently with two or more phases. It is commonly used to run a right-turn movement while another non-conflicting phase is active.

### Example: Right-Turn Overlap (Overlap A)
Suppose we want to maximize right-turn capacity for the Westbound Right-turn (WBR) movement. WBR does not conflict with:
1.  **Phase 8 (Southbound Through)** - WBR runs as a free-right or protected-right turn.
2.  **Phase 7 (Northbound Left Turn)** - Vehicles turning left from Northbound to Westbound make a left turn, while WBR makes a right turn into the same street (if there are multiple receiving lanes, or if protected by a right-turn green arrow).

Therefore, **Overlap A** is programmed to output green when **Phase 8** OR **Phase 7** is green. 

---

## Worked Example: Ring-Barrier Phasing Sequence and Timing

### Problem Statement
An intersection operates under standard NEMA 8-phase dual-ring control with the following green interval timings:
*   Phase 1 = $10\text{ s}$
*   Phase 2 = $35\text{ s}$
*   Phase 5 = $15\text{ s}$
*   Phase 6 = $30\text{ s}$
*   Phase 3 = $12\text{ s}$
*   Phase 4 = $20\text{ s}$
*   Phase 7 = $8\text{ s}$
*   Phase 8 = $24\text{ s}$

Each phase has a yellow change interval of $4.0\text{ seconds}$ and an all-red clearance interval of $2.0\text{ seconds}$. 

Determine:
1.  The duration of the major-street timing block (left of the barrier).
2.  The duration of the minor-street timing block (right of the barrier).
3.  The total cycle length ($C$).

### Step-by-Step Solution

#### Step 1: Analyze the Major-Street Phases (Phases 1, 2, 5, and 6)
The controller executes Ring 1 and Ring 2 simultaneously. The total time for Ring 1 phases must equal the total time for Ring 2 phases before crossing the barrier. The phases operate as follows:
*   **Ring 1:** Phase 1 (EB Left) + Phase 2 (WB Through)
*   **Ring 2:** Phase 5 (WB Left) + Phase 6 (EB Through)

Let's calculate the total split (Green + Yellow + All-Red) for each phase.
*   $\text{Split}_1 = 10\text{ s} + 4\text{ s} + 2\text{ s} = 16\text{ s}$
*   $\text{Split}_2 = 35\text{ s} + 4\text{ s} + 2\text{ s} = 41\text{ s}$
*   $\text{Split}_5 = 15\text{ s} + 4\text{ s} + 2\text{ s} = 21\text{ s}$
*   $\text{Split}_6 = 30\text{ s} + 4\text{ s} + 2\text{ s} = 36\text{ s}$

Now, sum each ring on the left side of the barrier:
*   $\text{Ring 1 Total} = \text{Split}_1 + \text{Split}_2 = 16\text{ s} + 41\text{ s} = 57\text{ s}$
*   $\text{Ring 2 Total} = \text{Split}_5 + \text{Split}_6 = 21\text{ s} + 36\text{ s} = 57\text{ s}$

The rings are balanced. The major-street block duration is **$57\text{ seconds}$**.

*Exam Tip: In practice, if the inputs were unbalanced, the controller would hold the faster ring at the barrier until the slower ring finished. The block length is always the maximum of the two ring sums.*

#### Step 2: Analyze the Minor-Street Phases (Phases 3, 4, 7, and 8)
Calculate the splits for the minor-street phases:
*   $\text{Split}_3 = 12\text{ s} + 4\text{ s} + 2\text{ s} = 18\text{ s}$
*   $\text{Split}_4 = 20\text{ s} + 4\text{ s} + 2\text{ s} = 26\text{ s}$
*   $\text{Split}_7 = 8\text{ s} + 4\text{ s} + 2\text{ s} = 14\text{ s}$
*   $\text{Split}_8 = 24\text{ s} + 4\text{ s} + 2\text{ s} = 30\text{ s}$

Sum each ring on the right side of the barrier:
*   $\text{Ring 1 Total} = \text{Split}_3 + \text{Split}_4 = 18\text{ s} + 26\text{ s} = 44\text{ s}$
*   $\text{Ring 2 Total} = \text{Split}_7 + \text{Split}_8 = 14\text{ s} + 30\text{ s} = 44\text{ s}$

Both rings sum to $44\text{ seconds}$. The minor-street block duration is **$44\text{ seconds}$**.

#### Step 3: Calculate the Total Cycle Length ($C$)
The cycle length is the sum of the times required to cross both blocks of the barrier:
$$C = \text{Major-Street Block} + \text{Minor-Street Block}$$
$$C = 57\text{ s} + 44\text{ s} = 101\text{ s}$$

Thus, the total cycle length is **$101\text{ seconds}$**.
