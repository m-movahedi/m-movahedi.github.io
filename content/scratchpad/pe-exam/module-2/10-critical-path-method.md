---
title: "Critical Path Method (CPM) and Crashing"
weight: 10
date : "2026-05-04"
draft : false
type : "post"
---
# Critical Path Method (CPM) and Crashing

The Critical Path Method (CPM) is a step-by-step project management technique used to identify activities on the critical path, calculate floats, and manage project schedules. This is a highly tested, calculation-heavy topic on the PE Civil Transportation exam.

---

## The CPM Calculation Process

CPM relies on a **forward pass** to determine early dates, followed by a **backward pass** to determine late dates. We use the **0-based convention** ($ES_{\text{start}} = 0$) because it simplifies the math, especially when relationship lags are present.

### Node Layout (Activity-on-Node)
Each activity is represented by a box with the following structure:

<div style="text-align: center; margin: 20px 0;">
  <svg width="200" height="120" viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg">
    <style>
      .node { fill: #f9f9f9; stroke: #333; stroke-width: 2; transition: fill 0.2s; }
      .node:hover { fill: #eaeaea; }
      .line { stroke: #333; stroke-width: 1; }
      .text { font-family: monospace; font-size: 14px; fill: #333; }
      .header { font-weight: bold; }
    </style>
    <!-- Outer Box -->
    <rect x="10" y="10" width="180" height="100" class="node" />    
    <!-- Horizontal Dividers -->
    <line x1="10" y1="40" x2="190" y2="40" class="line" />
    <line x1="10" y1="80" x2="190" y2="80" class="line" />    
    <!-- Vertical Dividers (Top Row) -->
    <line x1="50" y1="10" x2="50" y2="40" class="line" />
    <line x1="150" y1="10" x2="150" y2="40" class="line" />    
    <!-- Vertical Dividers (Bottom Row) -->
    <line x1="50" y1="80" x2="50" y2="110" class="line" />
    <line x1="150" y1="80" x2="150" y2="110" class="line" />    
    <!-- Texts Top Row -->
    <text x="30" y="30" class="text" text-anchor="middle">ES</text>
    <text x="100" y="30" class="text" text-anchor="middle">Duration (d)</text>
    <text x="170" y="30" class="text" text-anchor="middle">EF</text>    
    <!-- Activity Name -->
    <text x="100" y="65" class="text header" text-anchor="middle">Activity Name</text>    
    <!-- Texts Bottom Row -->
    <text x="30" y="100" class="text" text-anchor="middle">LS</text>
    <text x="100" y="100" class="text" text-anchor="middle">Total Float</text>
    <text x="170" y="100" class="text" text-anchor="middle">LF</text>
  </svg>
</div>

### 1. Forward Pass (Calculating Early Dates)
Moves from left to right through the network to determine the earliest possible start and finish times for each activity.

- **Rule 1 (First Activity):**  
  $$ES_{\text{Start}} = 0$$
- **Rule 2 (Early Finish):**  
  $$EF = ES + d$$
- **Rule 3 (Merge Activities):** If a successor activity has multiple predecessors, its Early Start is the **maximum** of the Early Finish dates of its immediate predecessors.
  $$ES_{\text{successor}} = \max(EF_{\text{predecessor 1}}, EF_{\text{predecessor 2}}, \dots)$$

### 2. Backward Pass (Calculating Late Dates)
Moves from right to left through the network to determine the latest possible start and finish times that will not delay the project finish.

- **Rule 1 (Last Activity):** The Late Finish ($LF$) of the final activity is set equal to its Early Finish ($EF$) unless a contract deadline is specified.
  $$LF_{\text{End}} = EF_{\text{End}}$$
- **Rule 2 (Late Start):**  
  $$LS = LF - d$$
- **Rule 3 (Burst Activities):** If a predecessor activity has multiple successors, its Late Finish is the **minimum** of the Late Start dates of its immediate successors.
  $$LF_{\text{predecessor}} = \min(LS_{\text{successor 1}}, LS_{\text{successor 2}}, \dots)$$

---

## Total Float vs. Free Float

Float represents schedule flexibility.

### 1. Total Float (TF)
The maximum amount of time that an activity can be delayed from its early start without delaying the overall project completion date.
$$TF = LS - ES = LF - EF$$
- Activities on the critical path have **$TF = 0$**.
- A delay in any activity with $TF > 0$ will eat into the project's buffer but won't delay the finish date until the delay exceeds $TF$.

### 2. Free Float (FF)
The maximum amount of time an activity can be delayed without delaying the early start of **any** of its immediate successor activities.
$$FF = \min(ES_{\text{successors}}) - EF_{\text{activity}}$$
- Free float can never exceed total float ($FF \le TF$).
- An activity can have total float but zero free float if delaying it would immediately push its successors' early start dates.

---

## Worked Example: Full CPM Network

**Problem:**  
A project network has the following activities, durations, and predecessor relationships:

| Activity | Predecessors | Duration (Days) |
| :---: | :---: | :---: |
| **A** | None | 4 |
| **B** | A | 6 |
| **C** | A | 3 |
| **D** | B | 5 |
| **E** | B, C | 8 |
| **F** | D, E | 4 |

1. Draw the network and perform the forward and backward passes.
2. Identify the critical path and the total project duration.
3. Compute the Total Float ($TF$) and Free Float ($FF$) for all activities.

---

### Network Diagrams and Passes

<div style="text-align: center; margin: 20px 0; overflow-x: auto;">
  <svg width="700" height="300" viewBox="0 0 700 300" xmlns="http://www.w3.org/2000/svg">
    <style>
      .node { fill: #fff; stroke: #333; stroke-width: 2; transition: all 0.3s ease; cursor: pointer; }
      .node:hover { fill: #f0f8ff; transform: scale(1.02); }
      .critical { stroke: #d32f2f; stroke-width: 3; }
      .critical-hover:hover { fill: #ffebee; }
      .line { stroke: #333; stroke-width: 1; }
      .arrow { stroke: #333; stroke-width: 2; fill: none; marker-end: url(#arrowhead); }
      .arrow-crit { stroke: #d32f2f; stroke-width: 3; fill: none; marker-end: url(#arrowhead-crit); }
      .text { font-family: monospace; font-size: 12px; fill: #333; pointer-events: none; }
      .header { font-weight: bold; font-size: 14px; }
    </style>    
    <defs>
      <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
        <polygon points="0 0, 10 3.5, 0 7" fill="#333" />
      </marker>
      <marker id="arrowhead-crit" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
        <polygon points="0 0, 10 3.5, 0 7" fill="#d32f2f" />
      </marker>      
      <!-- Template for a Node. Use with <use> and pass x, y -->
      <g id="cpm-node">
        <rect x="0" y="0" width="120" height="75" class="node" />
        <line x1="0" y1="25" x2="120" y2="25" class="line" />
        <line x1="0" y1="50" x2="120" y2="50" class="line" />
        <line x1="35" y1="0" x2="35" y2="25" class="line" />
        <line x1="85" y1="0" x2="85" y2="25" class="line" />
        <line x1="35" y1="50" x2="35" y2="75" class="line" />
        <line x1="85" y1="50" x2="85" y2="75" class="line" />
      </g>
      <g id="cpm-node-crit">
        <rect x="0" y="0" width="120" height="75" class="node critical critical-hover" />
        <line x1="0" y1="25" x2="120" y2="25" class="line" />
        <line x1="0" y1="50" x2="120" y2="50" class="line" />
        <line x1="35" y1="0" x2="35" y2="25" class="line" />
        <line x1="85" y1="0" x2="85" y2="25" class="line" />
        <line x1="35" y1="50" x2="35" y2="75" class="line" />
        <line x1="85" y1="50" x2="85" y2="75" class="line" />
      </g>
    </defs>
    <!-- Edges -->
    <path d="M 140 150 L 160 150 L 160 50 L 195 50" class="arrow-crit" />
    <path d="M 140 150 L 160 150 L 160 250 L 195 250" class="arrow" />    
    <path d="M 320 50 L 350 50 L 350 130 L 395 130" class="arrow-crit" />
    <path d="M 320 50 L 350 50 L 350 20 L 395 20" class="arrow" />    
    <path d="M 320 250 L 350 250 L 350 170 L 395 170" class="arrow" />
    <path d="M 520 20 L 550 20 L 550 130 L 575 130" class="arrow" />
    <path d="M 520 150 L 550 150 L 550 150 L 575 150" class="arrow-crit" />
    <!-- Node A (Critical) -->
    <g transform="translate(20, 112.5)">
      <use href="#cpm-node-crit" />
      <text x="17.5" y="17.5" class="text" text-anchor="middle">0</text>
      <text x="60" y="17.5" class="text" text-anchor="middle">4</text>
      <text x="102.5" y="17.5" class="text" text-anchor="middle">4</text>
      <text x="60" y="42.5" class="text header" text-anchor="middle">A</text>
      <text x="17.5" y="67.5" class="text" text-anchor="middle">0</text>
      <text x="60" y="67.5" class="text" text-anchor="middle">0</text>
      <text x="102.5" y="67.5" class="text" text-anchor="middle">4</text>
    </g>
    <!-- Node B (Critical) -->
    <g transform="translate(200, 12.5)">
      <use href="#cpm-node-crit" />
      <text x="17.5" y="17.5" class="text" text-anchor="middle">4</text>
      <text x="60" y="17.5" class="text" text-anchor="middle">6</text>
      <text x="102.5" y="17.5" class="text" text-anchor="middle">10</text>
      <text x="60" y="42.5" class="text header" text-anchor="middle">B</text>
      <text x="17.5" y="67.5" class="text" text-anchor="middle">4</text>
      <text x="60" y="67.5" class="text" text-anchor="middle">0</text>
      <text x="102.5" y="67.5" class="text" text-anchor="middle">10</text>
    </g>
    <!-- Node C -->
    <g transform="translate(200, 212.5)">
      <use href="#cpm-node" />
      <text x="17.5" y="17.5" class="text" text-anchor="middle">4</text>
      <text x="60" y="17.5" class="text" text-anchor="middle">3</text>
      <text x="102.5" y="17.5" class="text" text-anchor="middle">7</text>
      <text x="60" y="42.5" class="text header" text-anchor="middle">C</text>
      <text x="17.5" y="67.5" class="text" text-anchor="middle">7</text>
      <text x="60" y="67.5" class="text" text-anchor="middle">3</text>
      <text x="102.5" y="67.5" class="text" text-anchor="middle">10</text>
    </g>
    <!-- Node D -->
    <g transform="translate(400, 12.5)">
      <use href="#cpm-node" />
      <text x="17.5" y="17.5" class="text" text-anchor="middle">10</text>
      <text x="60" y="17.5" class="text" text-anchor="middle">5</text>
      <text x="102.5" y="17.5" class="text" text-anchor="middle">15</text>
      <text x="60" y="42.5" class="text header" text-anchor="middle">D</text>
      <text x="17.5" y="67.5" class="text" text-anchor="middle">13</text>
      <text x="60" y="67.5" class="text" text-anchor="middle">3</text>
      <text x="102.5" y="67.5" class="text" text-anchor="middle">18</text>
    </g>
    <!-- Node E (Critical) -->
    <g transform="translate(400, 112.5)">
      <use href="#cpm-node-crit" />
      <text x="17.5" y="17.5" class="text" text-anchor="middle">10</text>
      <text x="60" y="17.5" class="text" text-anchor="middle">8</text>
      <text x="102.5" y="17.5" class="text" text-anchor="middle">18</text>
      <text x="60" y="42.5" class="text header" text-anchor="middle">E</text>
      <text x="17.5" y="67.5" class="text" text-anchor="middle">10</text>
      <text x="60" y="67.5" class="text" text-anchor="middle">0</text>
      <text x="102.5" y="67.5" class="text" text-anchor="middle">18</text>
    </g>
    <!-- Node F (Critical) -->
    <g transform="translate(580, 112.5)">
      <use href="#cpm-node-crit" />
      <text x="17.5" y="17.5" class="text" text-anchor="middle">18</text>
      <text x="60" y="17.5" class="text" text-anchor="middle">4</text>
      <text x="102.5" y="17.5" class="text" text-anchor="middle">22</text>
      <text x="60" y="42.5" class="text header" text-anchor="middle">F</text>
      <text x="17.5" y="67.5" class="text" text-anchor="middle">18</text>
      <text x="60" y="67.5" class="text" text-anchor="middle">0</text>
      <text x="102.5" y="67.5" class="text" text-anchor="middle">22</text>
    </g>
  </svg>
</div>

### Steps:

#### Forward Pass:
- **A:** $ES_A = 0$, $EF_A = 0 + 4 = 4$
- **B:** $ES_B = EF_A = 4$, $EF_B = 4 + 6 = 10$
- **C:** $ES_C = EF_A = 4$, $EF_C = 4 + 3 = 7$
- **D:** $ES_D = EF_B = 10$, $EF_D = 10 + 5 = 15$
- **E:** $ES_E = \max(EF_B, EF_C) = \max(10, 7) = 10$, $EF_E = 10 + 8 = 18$
- **F:** $ES_F = \max(EF_D, EF_E) = \max(15, 18) = 18$, $EF_F = 18 + 4 = 22$
- **Project Duration = 22 days.**

#### Backward Pass (Set $LF_F = EF_F = 22$):
- **F:** $LF_F = 22$, $LS_F = 22 - 4 = 18$
- **E:** $LF_E = LS_F = 18$, $LS_E = 18 - 8 = 10$
- **D:** $LF_D = LS_F = 18$, $LS_D = 18 - 5 = 13$
- **C:** $LF_C = LS_E = 10$, $LS_C = 10 - 3 = 7$
- **B:** $LF_B = \min(LS_D, LS_E) = \min(13, 10) = 10$, $LS_B = 10 - 6 = 4$
- **A:** $LF_A = \min(LS_B, LS_C) = \min(4, 7) = 4$, $LS_A = 4 - 4 = 0$

---

### Float Calculations Table

| Activity | ES | EF | LS | LF | Total Float ($LF-EF$) | Free Float ($\min(ES_{\text{succ}}) - EF$) | Critical? |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| **A** | 0 | 4 | 0 | 4 | 0 | $\min(4, 4) - 4 = 0$ | **Yes** |
| **B** | 4 | 10 | 4 | 10 | 0 | $\min(10, 10) - 10 = 0$ | **Yes** |
| **C** | 4 | 7 | 7 | 10 | 3 | $10 - 7 = 3$ | No |
| **D** | 10 | 15 | 13 | 18 | 3 | $18 - 15 = 3$ | No |
| **E** | 10 | 18 | 10 | 18 | 0 | $18 - 18 = 0$ | **Yes** |
| **F** | 18 | 22 | 18 | 22 | 0 | $22 - 22 = 0$ | **Yes** |

**Critical Path:** A - B - E - F (Length = 22 days)

---

## Schedule Crashing (Cost-Time Trade-off)

Crashing is the process of reducing project duration by adding resources to critical activities at the lowest possible cost.

### Key Concept: The Cost Slope
The cost slope represents the crash cost per unit of time (e.g., dollars per day).

$$\text{Cost Slope} = \frac{\text{Crash Cost} - \text{Normal Cost}}{\text{Normal Duration} - \text{Crash Duration}}$$

### Crashing Protocol:
1. Identify the current critical path(s) and project duration.
2. Determine the cost slope for all activities.
3. Select the activity **on the critical path** that has the **lowest cost slope** and can still be crashed.
4. Crash that activity by **1 day** (or the maximum allowable crash limit, or until a new path becomes critical).
5. Recalculate the critical path(s). If multiple critical paths exist, you must crash activities on both paths simultaneously to reduce the overall project duration.
6. Repeat until the target duration is reached or all critical activities are crashed to their limits.

---

## Worked Example: Schedule Crashing

**Problem:**  
Using the previous network ($A \to B \to E \to F$ is critical, duration = 22 days), we want to reduce the project duration by **2 days** (target = 20 days) at the lowest additional cost.

The crash limits and costs are:

| Activity | Normal Duration | Crash Duration | Normal Cost | Crash Cost |
| :---: | :---: | :---: | :---: | :---: |
| **A** | 4 days | 3 days | \$1,000 | \$1,500 |
| **B** | 6 days | 4 days | \$2,000 | \$3,200 |
| **C** | 3 days | 2 days | \$800 | \$1,100 |
| **D** | 5 days | 3 days | \$1,500 | \$2,100 |
| **E** | 8 days | 6 days | \$4,000 | \$5,000 |
| **F** | 4 days | 3 days | \$1,200 | \$1,800 |

**Solution:**

**Step 1: Calculate Cost Slopes**
- **A:** $\frac{1,500 - 1,000}{4 - 3} = \$500 / \text{day}$
- **B:** $\frac{3,200 - 2,000}{6 - 4} = \$600 / \text{day}$
- **C:** $\frac{1,100 - 800}{3 - 2} = \$300 / \text{day}$ (Non-critical)
- **D:** $\frac{2,100 - 1,500}{5 - 3} = \$300 / \text{day}$ (Non-critical)
- **E:** $\frac{5,000 - 4,000}{8 - 6} = \$500 / \text{day}$
- **F:** $\frac{1,800 - 1,200}{4 - 3} = \$600 / \text{day}$

**Step 2: First Crashing Step (Reduce from 22 to 21 Days)**
- Critical Path: A - B - E - F
- Candidates for crashing (must be on the critical path): A (\$500/day), B (\$600/day), E (\$500/day), F (\$600/day).
- Tie-breaker: Both A and E cost \$500/day. Let's crash **Activity A** by 1 day.
- **New Duration of A = 3 days.**
- Recalculate paths:
  - Path A-B-E-F: $3 + 6 + 8 + 4 = 21\text{ days}$
  - Path A-C-E-F: $3 + 3 + 8 + 4 = 18\text{ days}$ (Still non-critical)
  - Path A-B-D-F: $3 + 6 + 5 + 4 = 18\text{ days}$ (Still non-critical)
- **Total Project Duration = 21 days.** Additional cost = \$500.

**Step 3: Second Crashing Step (Reduce from 21 to 20 Days)**
- Critical Path remains: A - B - E - F.
- Activity A is at its crash limit (3 days).
- Remaining candidates: B (\$600/day), E (\$500/day), F (\$600/day).
- Choose **Activity E** (lowest remaining cost slope: \$500/day).
- **New Duration of E = 7 days.**
- Recalculate paths:
  - Path A-B-E-F: $3 + 6 + 7 + 4 = 20\text{ days}$
  - Path A-C-E-F: $3 + 3 + 7 + 4 = 17\text{ days}$
  - Path A-B-D-F: $3 + 6 + 5 + 4 = 18\text{ days}$
- **Total Project Duration = 20 days.** Additional cost = \$500.

**Step 4: Summary**
- Target duration met: 20 days.
- **Total additional crash cost:** $\$500 + \$500 = \$1,000$.
- Modified activity durations: $d_A = 3 \text{ days}$, $d_E = 7 \text{ days}$.

---

## Crucial Pitfalls and Exam Traps

- **Crashing Non-Critical Activities:** Do not crash an activity just because it has the lowest cost slope. If it is not on the critical path, crashing it has zero effect on the project duration.
- **Multiple Critical Paths:** When crashing creates a second critical path, you must crash both paths simultaneously. If you only crash one path, the project duration will not change because the other path remains at the original duration.
- **Free Float Calculation:** Remember that free float is relative to the *immediate next* successors. If an activity connects to two successors, you must use the minimum ES of those successors in the formula:
  $$FF = \min(ES_{\text{successor 1}}, ES_{\text{successor 2}}) - EF_{\text{predecessor}}$$
