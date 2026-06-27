---
title: "Final Review and Formula Recognition"
weight: 114
---
# Final Review and Formula Recognition

Success on the PE Civil Transportation exam depends on quickly recognizing formulas in the NCEES Reference Handbook and matching them to the problem statement. This lesson serves as a final review guide, mapping critical equations across hydrology, drainage, traffic, geometry, and pavements.

---

## 1. Hydrology and Hydraulics

| Formula Name | USCS Form | SI (Metric) Form | Variables & Crucial Units |
|---|---|---|---|
| **Rational Method** | $Q = C i A$ | $Q = 0.00278 C i A$ | $Q$ [cfs or $m^3/s$], $C$ [dim], $i$ [in/hr or mm/hr], $A$ [ac or ha] |
| **SCS Runoff Depth** | $Q = \frac{(P-0.2S)^2}{P+0.8S}$ | *Same* | $Q$ [in], $P$ [in], $S$ [in] (Potential Max Retention) |
| **SCS Retention** | $S = \frac{1000}{CN} - 10$ | $S = \frac{25400}{CN} - 254$ | $S$ [in or mm], $CN$ [dim, 0-100] |
| **Manning's Velocity** | $V = \frac{1.486}{n} R^{2/3} S^{1/2}$ | $V = \frac{1}{n} R^{2/3} S^{1/2}$ | $V$ [ft/s or m/s], $n$ [dim], $R = A/P_w$ [ft or m], $S$ [ft/ft] |
| **Gutter Flow (Izzard)** | $Q = \frac{0.56}{n} S_x^{5/3} S^{1/2} T^{8/3}$ | $Q = \frac{0.376}{n} S_x^{5/3} S^{1/2} T^{8/3}$ | $Q$ [cfs or $m^3/s$], $S_x$ [cross slope, ft/ft], $S$ [long slope, ft/ft], $T$ [spread, ft or m] |
| **Broad-Crested Weir** | $Q = C_w L H^{1.5}$ | *Same* | $Q$ [cfs], $C_w$ [roadway default $\approx 2.6$ to $3.0$], $L$ [width, ft], $H$ [head, ft] |
| **Hydraulic Jump (Conjugate)** | $\frac{y_2}{y_1} = 0.5 (\sqrt{1+8Fr_1^2}-1)$ | *Same* | $y_1$ [supercritical depth, ft], $y_2$ [subcritical depth, ft], $Fr_1$ [Froude number, dim] |

---

## 2. Traffic Engineering and Signals

| Formula Name | Equation Form | Variables & Crucial Units |
|---|---|---|
| **Traffic Flow Relation** | $q = u \cdot k$ | $q$ [flow, veh/h/lane], $u$ [speed, mph], $k$ [density, veh/mi/lane] |
| **Greenshields Model** | $u = u_f (1 - k/k_j)$ | $u_f$ [free-flow speed, mph], $k_j$ [jam density, veh/mi] |
| **Greenshields Capacity** | $q_{max} = \frac{u_f \cdot k_j}{4}$ | $q_{max}$ [capacity, veh/h/lane] |
| **Yellow Change Interval** | $Y = t + \frac{V}{2a + 2gG}$ | $t$ [reaction time, 1.0 s], $V$ [speed, **ft/s**], $a$ [deceleration, 10.0 $\text{ft/s}^2$], $G$ [grade, decimal] |
| **Red Clearance Interval** | $R_c = \frac{w+L}{V}$ | $w$ [intersection width, ft], $L$ [vehicle length, 20 ft], $V$ [speed, **ft/s**] |
| **Webster's Cycle Length** | $C_{opt} = \frac{1.5L + 5}{1 - Y_{sum}}$ | $L$ [total lost time per cycle, s], $Y_{sum}$ [sum of critical flow ratios, dim] |

---

## 3. Roadway Geometry

| Formula Name | Equation Form | Variables & Crucial Units |
|---|---|---|
| **Horizontal Radius** | $R_{min} = \frac{V^2}{15(e + f)}$ | $V$ [design speed, mph], $e$ [superelevation, ft/ft], $f$ [side friction factor, dim] |
| **Curve Stationing** | $T = R \tan(\Delta/2)$ and $L = \frac{\pi R \Delta}{180}$ | $T$ [tangent length, ft], $L$ [curve length, ft], $\Delta$ [deflection angle, degrees] |
| **Vertical Curve Profile** | $y = y_{PVC} + g_1 x + \frac{r x^2}{2}$ | $y$ [elevation, ft], $g_1$ [initial grade, ft/ft], $r = \frac{g_2-g_1}{L}$ [ft/ft$^2$], $x$ [distance, ft] |
| **High/Low Point Location** | $x_{hp} = \frac{g_1 L}{g_1 - g_2}$ | $x_{hp}$ [distance from PVC, ft], $g_i$ [grades, **percent**], $L$ [curve length, ft] |

---

## 4. Pavement and Earthwork

| Formula Name | Equation Form | Variables & Crucial Units |
|---|---|---|
| **Flexible Pavement SN** | $SN = a_1 D_1 + a_2 D_2 m_2 + a_3 D_3 m_3$ | $a_i$ [layer coeff, dim], $D_i$ [thickness, inches], $m_i$ [drainage coeff, dim] |
| **Earthwork Shrinkage** | $V_C = V_B (1 - S_h)$ | $V_C$ [compacted volume], $V_B$ [bank volume], $S_h$ [shrinkage factor, decimal] |
| **Earthwork Swell** | $V_L = V_B (1 + S_w)$ | $V_L$ [loose volume], $V_B$ [bank volume], $S_w$ [swell factor, decimal] |

---

## Formula Recognition Drills
1. **Identify the Speed Units:** In geometric radius $R_{min} = \frac{V^2}{15(e+f)}$, $V$ is in **mph**. In signal clearance $Y = t + \frac{V}{2a+2gG}$, $V$ is in **ft/s**. *Double-check your units before squaring or dividing.*
2. **Identify the Grade Form:** In vertical curve high point formulas, $g_1$ and $g_2$ are entered in **percent** (e.g. $3.0$). In signal timing and hydraulic slope equations, grades are entered in **decimal** form (e.g. $0.03$).
3. **Verify the Area Units:** Rational Method $Q = CiA$ uses area in **acres**. The SCS Peak flow equation $q_p = \frac{484AQ}{t_p}$ uses area in **square miles**.
