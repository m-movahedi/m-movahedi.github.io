---
title: "Engineering Economics"
weight: 11
date : "2026-05-04"
draft : false
type : "post"
---
# Engineering Economics

Engineering economics evaluates the systematic worth of projects and alternatives. On the PE Civil Transportation exam, this topic is highly predictable and relies heavily on the economic tables and formulas in the NCEES PE Civil Reference Handbook. 

---

## Cash Flow Variables and Conventions

Every engineering economics problem can be represented as a cash flow diagram. We define the following variables:
- $P$ (or $PW$): Present equivalent value or worth (at time $t = 0$).
- $F$ (or $FW$): Future equivalent value or worth (at time $t = n$ interest periods).
- $A$ (or $AW$): Annual equivalent value or worth (occurring at the end of each interest period for $n$ periods).
- $G$: Uniform arithmetic gradient (a constant increase or decrease in cash flows starting at the end of period 2).
- $i$: Interest rate per period (expressed as a decimal in calculations, or as a percentage when using tables).
- $n$: Number of interest periods (typically years).

---

## Economic Interest Factors and Formulas

The NCEES Reference Handbook provides both algebraic formulas and tables for standard interest factors. The factors are written in the bracket notation: **(To Find / Given, Interest Rate, Periods)**.

```
       ( P / A,  i,  n )
         |    |  |   |
         |    |  |   +-- Number of periods (n)
         |    |  +------ Interest rate per period (i)
         |    +--------- Given value type (A)
         +-------------- Value to find (P)
```

| Factor Notation | Name | Algebraic Formula |
| :--- | :--- | :--- |
| **(F/P, i, n)** | Single Payment Compound Amount | $(1 + i)^n$ |
| **(P/F, i, n)** | Single Payment Present Worth | $(1 + i)^{-n}$ |
| **(F/A, i, n)** | Uniform Series Compound Amount | $\frac{(1 + i)^n - 1}{i}$ |
| **(A/F, i, n)** | Sinking Fund | $\frac{i}{(1 + i)^n - 1}$ |
| **(P/A, i, n)** | Uniform Series Present Worth | $\frac{(1 + i)^n - 1}{i(1 + i)^n}$ |
| **(A/P, i, n)** | Capital Recovery | $\frac{i(1 + i)^n}{(1 + i)^n - 1}$ |
| **(P/G, i, n)** | Arithmetic Gradient Present Worth | $\frac{(1 + i)^n - i n - 1}{i^2 (1 + i)^n}$ |
| **(A/G, i, n)** | Arithmetic Gradient Uniform Series | $\frac{1}{i} - \frac{n}{(1+i)^n - 1}$ |

---

## Worked Example: Mixed Cash Flow to Present Worth

**Problem:**  
An agency plans to upgrade a local intersection. The project has the following projected cash flows:
- Year 0 (Initial Cost): \$450,000
- Year 1 through 5 (Annual maintenance): \$12,000 per year
- Year 3 (Major repaving): \$45,000 (one-time)
- Year 5 (Salvage value / revenue): \$80,000 (one-time inflow)

Calculate the Net Present Value (NPV) of this project at an annual interest rate of $6\%$.

**Solution:**

**Step 1: Write down the Net Present Value equation**  
We will treat costs as negative values and benefits/inflows as positive values.
$$NPV = -P_{\text{initial}} - PW_{\text{maintenance}} - PW_{\text{repaving}} + PW_{\text{salvage}}$$

**Step 2: Identify and calculate interest factors for $i = 6\%$ and appropriate $n$**
- For annual maintenance: $n = 5$ years. Use $(P/A, 6\%, 5)$.
  $$(P/A, 6\%, 5) = \frac{(1 + 0.06)^5 - 1}{0.06(1 + 0.06)^5} = 4.2124$$
- For Year 3 repaving: $n = 3$ years. Use $(P/F, 6\%, 3)$.
  $$(P/F, 6\%, 3) = (1 + 0.06)^{-3} = 0.8396$$
- For Year 5 salvage: $n = 5$ years. Use $(P/F, 6\%, 5)$.
  $$(P/F, 6\%, 5) = (1 + 0.06)^{-5} = 0.7473$$

**Step 3: Compute Present Worths**
- $PW_{\text{maintenance}} = \$12,000 \times 4.2124 = \$50,548.80$
- $PW_{\text{repaving}} = \$45,000 \times 0.8396 = \$37,782.00$
- $PW_{\text{salvage}} = \$80,000 \times 0.7473 = \$59,784.00$

**Step 4: Calculate Net Present Value**
$$NPV = -\$450,000 - \$50,548.80 - \$37,782.00 + \$59,784.00 = -\$478,546.80$$

---

## Arithmetic Gradient Cash Flows

Arithmetic gradients increase or decrease by a constant amount ($G$) each period. 
**Important Convention:** The gradient $G$ begins at the end of **Period 2**, not Period 1. At Period 1, the cash flow is simply the base annuity amount ($A_1$).

```
Cash Flow at Period t:
t = 1:  A_1
t = 2:  A_1 + G
t = 3:  A_1 + 2G
...
t = n:  A_1 + (n-1)G
```

To find the Present Worth of an arithmetic gradient cash flow:
$$P_{\text{total}} = A_1(P/A, i, n) \pm G(P/G, i, n)$$

---

## Worked Example: Arithmetic Gradient

**Problem:**  
A municipal parking garage generates \$100,000 in revenue in Year 1. Due to structural aging and competitor garages, revenue is expected to decrease by \$8,000 each year starting in Year 2 and continuing through Year 10. Using an interest rate of $8\%$ per year, calculate the equivalent Present Worth of this garage's revenue over the 10-year period.

**Solution:**

**Step 1: Identify Parameters**
- Base annuity ($A_1$) = \$100,000
- Gradient ($G$) = -\$8,000 (negative because it is a decrease)
- $i = 8\% = 0.08$
- $n = 10$

**Step 2: Calculate Interest Factors (using algebraic formulas or tables)**
- $(P/A, 8\%, 10)$:
  $$(P/A, 8\%, 10) = \frac{(1 + 0.08)^{10} - 1}{0.08(1 + 0.08)^{10}} = 6.7101$$
- $(P/G, 8\%, 10)$:
  $$(P/G, 8\%, 10) = \frac{(1 + 0.08)^{10} - 0.08(10) - 1}{0.08^2(1 + 0.08)^{10}} = 25.9768$$

**Step 3: Calculate Present Worth**
$$P_{\text{total}} = A_1(P/A, 8\%, 10) - G(P/G, 8\%, 10)$$
$$P_{\text{total}} = \$100,000 \times 6.7101 - \$8,000 \times 25.9768$$
$$P_{\text{total}} = \$671,010 - \$207,814.40 = \$463,195.60$$

---

## Nominal and Effective Interest Rates

When interest compounding frequency does not match the payment frequency, you must calculate the effective interest rate.

- **Nominal Interest Rate ($r$):** The stated annual rate without compounding considerations (e.g., $12\%$ per year, compounded monthly).
- **Effective Interest Rate per Period ($i$):** The actual interest earned per period.
- **Effective Annual Interest Rate ($i_e$):**
  $$i_e = \left(1 + \frac{r}{m}\right)^m - 1$$
  
  Where:
  - $r$ = nominal annual interest rate
  - $m$ = number of compounding periods per year
  - $\frac{r}{m}$ = interest rate per compounding period ($i$)

---

## Worked Example: Nominal vs. Effective Interest

**Problem:**  
A contractor borrows \$50,000 to purchase a skid steer. The loan specifies an interest rate of $12\%$ per year, compounded quarterly. 
1. Determine the effective annual interest rate.
2. If the loan is paid off in a single lump-sum payment at the end of 3 years, calculate the required payoff amount.

**Solution:**

**Step 1: Calculate Effective Annual Interest Rate ($i_e$)**
- $r = 12\% = 0.12$
- $m = 4$ compounding periods per year (quarterly)
$$i_e = \left(1 + \frac{0.12}{4}\right)^4 - 1 = (1 + 0.03)^4 - 1 = 1.1255 - 1 = 0.1255 \text{ or } 12.55\%$$

**Step 2: Calculate Payoff Amount after 3 Years ($F$)**
We can solve this in two equivalent ways:

*Method A: Using annual interest periods*
- $P = \$50,000$
- $i = i_e = 12.55\% = 0.1255$
- $n = 3$ years
$$F = P(1 + i_e)^n = \$50,000(1 + 0.1255)^3 = \$50,000(1.4258) \approx \$71,288.04$$

*Method B: Using quarterly interest periods (simpler and safer)*
- $P = \$50,000$
- $i_{\text{quarter}} = \frac{r}{m} = \frac{12\%}{4} = 3\%$ per quarter
- $n_{\text{quarters}} = 3 \text{ years} \times 4 \text{ quarters/year} = 12$ quarters
$$F = P(1 + i_{\text{quarter}})^{n_{\text{quarters}}} = \$50,000(1 + 0.03)^{12} = \$50,000(1.4258) \approx \$71,288.04$$

---

## Crucial Pitfalls and Exam Traps

- **Gradient Start Time:** Remember that the gradient factor $G$ represents the incremental change starting at $t=2$. If a cash flow increases from Year 1 to Year 10, Year 1 is the base annuity $A$, and Year 2 is $A + G$. Do not offset the gradient by an extra year.
- **Compounding Frequency Match:** Always verify that the interest rate period matches the payment period. If you have monthly payments, you must use a monthly interest rate. Do not use an annual rate with monthly payments unless you convert the interest rate to an effective monthly rate first.
- **Salvage Value Sign:** Salvage value is an inflow (positive value when finding NPV). Do not subtract it from the NPV as if it were a disposal cost, unless it is specified as a negative cost (e.g., cleanup fee).
- **Rounding Interest Factors:** When using tables, interpolating intermediate interest rates (e.g., $6.5\%$) can lead to small discrepancies. If possible, calculate factors directly using formulas to verify exact answers.
