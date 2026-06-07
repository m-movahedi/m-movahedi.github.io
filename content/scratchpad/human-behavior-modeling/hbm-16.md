---
title : "HBM 16: Prospect Theory"
date : "2026-06-06"
draft : false
type : "post"
---

A city introduces a $5 congestion toll for driving downtown during peak hours. Drivers are furious. The same city could frame the policy differently: "Drive off-peak and save $5." The financial reality is identical, but the psychological reality is not. The first version imposes a loss; the second offers a gain. Research consistently shows that the loss frame produces stronger emotional reactions, more political opposition, and different behavioral responses — even when the monetary amount is exactly the same.

This asymmetry between losses and gains is the central insight of prospect theory, one of the most influential behavioral theories of the twentieth century. It explains why people do not evaluate outcomes the way standard economic models assume, and it has deep implications for transportation pricing, route choice under uncertainty, and safety investment decisions.

## Why Prospect Theory Matters for Transportation

Standard discrete choice models and expected utility theory assume that people evaluate outcomes on an absolute scale: $50 is $50, whether it represents a gain from baseline or a loss from a higher reference point. Prospect theory challenges this by showing that people evaluate outcomes **relative to a reference point**, and that losses and gains of equal magnitude are not psychologically symmetric.

This matters for transportation in concrete ways. Congestion pricing, toll roads, parking fees, insurance mandates, fuel taxes, and travel time reliability all involve potential gains and losses. How these outcomes are framed — and how people naturally frame them — determines public acceptance, compliance behavior, and the actual effectiveness of policies. A pricing scheme that is economically optimal may fail politically because it triggers loss aversion. A safety investment that could save lives may be rejected because its costs feel more real than its probabilistic benefits.

<div class="hbm-note">
  <p><strong>Core intuition:</strong> losses loom larger than equivalent gains. A $5 toll feels worse than a $5 time saving feels good. This asymmetry is not irrational noise — it is a systematic feature of how human beings evaluate outcomes.</p>
</div>

## The Model: Evaluating Outcomes Relative to Reference Points

Prospect theory, developed by Daniel Kahneman and Amos Tversky, describes how people make decisions under risk and uncertainty. It departs from expected utility theory in two fundamental ways: (1) outcomes are evaluated relative to a reference point rather than as final states, and (2) probabilities are not used linearly but are distorted through a probability weighting function.

The theory was originally published in 1979 for simple gambles and extended in 1992 as **cumulative prospect theory** to handle gambles with many outcomes. The core components are the value function and the probability weighting function.

## Core Constructs

<div class="hbm-construct-row">
  <span class="hbm-construct">Reference Point</span>
  <span class="hbm-construct">Value Function</span>
  <span class="hbm-construct">Loss Aversion</span>
  <span class="hbm-construct">Probability Weighting</span>
  <span class="hbm-construct">Framing Effects</span>
</div>

<div class="hbm-grid">
  <div class="hbm-card">
    <strong>Reference Point</strong>
    <p>The baseline against which outcomes are judged. It is often the status quo (current travel time, current cost), but it can also be an expectation, an aspiration, or a social comparison point. Everything above the reference point is coded as a gain; everything below is coded as a loss.</p>
  </div>
  <div class="hbm-card">
    <strong>Value Function</strong>
    <p>Describes how people subjectively experience gains and losses. It is concave for gains (diminishing sensitivity — the difference between $0 and $50 feels larger than between $500 and $550) and convex for losses (diminishing sensitivity to increasing losses). Critically, the loss side is steeper than the gain side.</p>
  </div>
  <div class="hbm-card">
    <strong>Loss Aversion</strong>
    <p>The asymmetry between losses and gains. Empirically, the loss aversion ratio is approximately 2:1 — a $1 loss is felt roughly twice as strongly as a $1 gain. This ratio has been estimated across many domains including health, money, and time.</p>
  </div>
</div>

<div class="hbm-two-col">
  <div class="hbm-panel">
    <strong>Probability Weighting Function</strong>
    <p>People do not use probabilities linearly. Small probabilities are <em>overweighted</em> — a 1% chance of a crash feels larger than 1%. Large probabilities are <em>underweighted</em> — a 99% chance of arriving on time feels less certain than 99%. This distortion explains why people simultaneously buy lottery tickets (overweighting small gains) and insurance (overweighting small losses).</p>
  </div>
  <div class="hbm-panel">
    <strong>Framing Effects</strong>
    <p>The same objective outcome can be perceived as a gain or a loss depending on how it is described or what reference point is activated. "A toll saves you 15 minutes" versus "Not paying means you lose 15 minutes." Framing changes the reference point, which changes the value function that applies, which changes the decision.</p>
  </div>
</div>

## The Value Function Shape

The value function is the signature contribution of prospect theory. Its shape encodes three key psychological properties:

<div class="hbm-code">
Value Function Properties:

1. REFERENCE DEPENDENCE
   Outcomes are coded as gains (+) or losses (-)
   relative to a reference point, not as final states.

2. DIMINISHING SENSITIVITY
   Gains region: concave (each additional dollar of gain
   adds less subjective value).
   Loss region: convex (each additional dollar of loss
   adds less subjective pain).

3. LOSS AVERSION
   The loss curve is steeper than the gain curve.
   |v(-x)| > |v(x)| for all x > 0.
   Empirical estimate: λ ≈ 2.0 to 2.5
   (losses hurt about twice as much as gains feel good).
</div>

<div class="hbm-math">
  <p><strong>Value function (Tversky & Kahneman, 1992):</strong></p>
  <p><code>v(x) = x^α           if x ≥ 0 (gains)</code></p>
  <p><code>v(x) = -λ·(-x)^β     if x < 0 (losses)</code></p>
  <p>Where α ≈ 0.88, β ≈ 0.88, and λ ≈ 2.25 in the original calibration. The parameter λ captures loss aversion: the multiplicative penalty applied to losses relative to gains.</p>
</div>

This shape has direct implications. Consider a commuter whose current drive takes 30 minutes. A new toll road offers a reliable 20-minute trip for $5. Standard utility theory weights the 10-minute gain and the $5 cost symmetrically (after converting to common units). Prospect theory predicts that the $5 feels like a **loss** from the reference point of "free driving," while the 10-minute improvement feels like a **gain** — but the loss is psychologically amplified by a factor of roughly two. The commuter may reject the toll road even when the objective trade-off is favorable.

## Causal Logic

<div class="hbm-flow" role="img" aria-label="Prospect theory causal chain">
  <div class="hbm-card">
    <strong>Situation</strong>
    <p>A choice involving uncertain or risky outcomes.</p>
  </div>
  <div class="hbm-card">
    <strong>Reference Point</strong>
    <p>The status quo or expectation that anchors evaluation.</p>
  </div>
  <div class="hbm-card">
    <strong>Coding</strong>
    <p>Outcomes are classified as gains or losses relative to the reference.</p>
  </div>
  <div class="hbm-card">
    <strong>Valuation</strong>
    <p>Gains and losses are weighted asymmetrically via the value function.</p>
  </div>
  <div class="hbm-card">
    <strong>Decision</strong>
    <p>Choices reflect risk aversion for gains but risk seeking for losses.</p>
  </div>
</div>

A critical implication: people are **risk-averse in the domain of gains** but **risk-seeking in the domain of losses**. A commuter who is already running late (in the loss domain) may take a risky shortcut — an aggressive lane change, a poorly-known back road — because the certain loss (being late) feels worse than the gamble of a risky route that might save time or might make things even worse. This risk-seeking for losses helps explain aggressive driving, reckless overtaking, and willingness to speed when already behind schedule.

## Data Needed

<div class="hbm-grid">
  <div class="hbm-card">
    <strong>Experimental Choice Tasks</strong>
    <p>Controlled experiments presenting pairs of risky gambles or choice scenarios. Can be lab-based or web-based. Essential for estimating value function parameters (α, β, λ) and probability weighting.</p>
  </div>
  <div class="hbm-card">
    <strong>Stated Preference with Framing</strong>
    <p>SP experiments where the same objective scenario is presented under different frames (gain vs. loss, certain vs. probabilistic). Allows direct measurement of framing effects on choice probabilities.</p>
  </div>
  <div class="hbm-card">
    <strong>Revealed Preference with Reference Points</strong>
    <p>GPS traces, toll transaction data, or route choice data where the reference point (e.g., usual travel time, expected cost) can be identified. Requires longitudinal data to establish individual baselines.</p>
  </div>
</div>

Identifying the reference point is often the hardest empirical challenge. Is it the usual travel time? The scheduled arrival time? The travel time of a competitor mode? The reference point can be endogenous to the situation, vary across individuals, and shift over time — all of which complicate estimation.

## Methods

<div class="hbm-two-col">
  <div class="hbm-panel">
    <strong>Experimental Economics</strong>
    <p>Lottery choice experiments with real payoffs. Subjects choose between pairs of gambles. Data are fitted to the value function and probability weighting function using nonlinear estimation.</p>
  </div>
  <div class="hbm-panel">
    <strong>Choice Model Integration</strong>
    <p>Prospect theory parameters can be embedded in discrete choice models by replacing the standard linear utility function with the prospect-theoretic value function. This allows estimation of loss aversion and reference dependence within mode or route choice contexts.</p>
  </div>
</div>

Recent methodological advances include reference-dependent choice models that estimate both the reference point and value function parameters simultaneously, and models that allow loss aversion to vary across individuals through random parameter specifications.

<hbm-pt-widget></hbm-pt-widget>

## Transportation Example: Congestion Pricing and Framing

Consider a metropolitan area implementing a variable congestion toll. Two equivalent pricing designs are tested:

<div class="hbm-two-col">
  <div class="hbm-panel">
    <strong>Frame A: Loss</strong>
    <p>"Peak-hour drivers pay a $7 toll."</p>
    <p>Reference point: free road access.</p>
    <p>The toll is coded as a loss.</p>
    <p><em>Predicted response:</em> strong opposition, risk-seeking behavior (exploring detours, shifting schedules erratically), political backlash.</p>
  </div>
  <div class="hbm-panel">
    <strong>Frame B: Gain</strong>
    <p>"Off-peak drivers receive a $7 credit."</p>
    <p>Reference point: toll as the default.</p>
    <p>The credit is coded as a gain.</p>
    <p><em>Predicted response:</em> moderate uptake, risk aversion (sticking with the credit rather than gambling on peak travel), less opposition.</p>
  </div>
</div>

Research by De Borger and Fosgerau (2008) and others has shown that framing tolls as gains rather than losses changes both stated acceptance and actual behavior. Loss-framed tolls produce about 1.5 to 2 times more political resistance than gain-framed alternatives with identical economic properties.

The implications extend to route choice under travel-time uncertainty. When highways offer a 30-minute average with high variance (20-50 minutes) and an alternative route offers a reliable 35 minutes, prospect theory predicts that commuters who are already running late (in the loss domain) will choose the risky highway — gambling on the 20-minute outcome — while commuters running early (in the gain domain) will choose the reliable route to lock in their gain. This asymmetry explains why the same commuter can be risk-averse on one day and risk-seeking on another, depending entirely on their reference point.

<div class="hbm-note">
  <p><strong>Policy implication:</strong> the behavioral effectiveness of pricing and incentive policies depends not just on the monetary amount but on whether the payment is experienced as a loss from a reference point or a foregone gain. Identical policies can succeed or fail based on framing.</p>
</div>

### Safety Investment Decisions

Prospect theory also illuminates decisions about safety investments. A transportation agency considering a $2 million guardrail improvement that reduces annual fatality risk from 0.003 to 0.001 faces a prospect-theoretic problem: the cost is a certain loss (felt strongly), while the benefit is a reduction in an already-small probability of a catastrophic outcome. Probability weighting predicts that the small probability of a crash is overweighted — making the risk feel larger than 0.003 — but the decision-makers evaluating the investment may still experience the certain $2 million expenditure as more psychologically painful than the probabilistic safety benefit feels reassuring.

## Strengths

<div class="hbm-grid">
  <div class="hbm-card">
    <strong>Explains Framing Effects</strong>
    <p>Predicts that objectively equivalent outcomes produce different choices depending on how they are presented — a phenomenon documented in hundreds of studies.</p>
  </div>
  <div class="hbm-card">
    <strong>Risk-Seeking for Losses</strong>
    <p>Explains behaviors that expected utility theory cannot: why people gamble on uncertain routes when running late, why drivers speed when they perceive time pressure, why people resist paying tolls but accept time costs.</p>
  </div>
  <div class="hbm-card">
    <strong>Widely Validated</strong>
    <p>Replicated across cultures, domains (financial, health, transportation, environmental), and decades. The loss aversion ratio is one of the most robust findings in behavioral science.</p>
  </div>
</div>

## Limitations

<div class="hbm-grid">
  <div class="hbm-card">
    <strong>Ambiguous Reference Points</strong>
    <p>The theory requires a reference point but does not fully specify how it forms. Is it the status quo? An expectation? A social comparison? The reference point is often determined post hoc, limiting predictive power.</p>
  </div>
  <div class="hbm-card">
    <strong>Hard to Embed in Large-Scale Models</strong>
    <p>Prospect theory is harder to integrate into large-scale travel demand models than standard utility theory. The nonlinear value function and reference dependence add computational complexity and identification challenges.</p>
  </div>
  <div class="hbm-card">
    <strong>Dynamic and Repeated Choices</strong>
    <p>Less clear on how reference points adapt over time. After paying a toll for six months, does the reference point shift? Does loss aversion diminish with habituation? The theory is primarily about one-shot decisions.</p>
  </div>
</div>

Additional limitations include the difficulty of separating loss aversion from other psychological factors (risk aversion, status quo bias, endowment effects), debate about the stability of the loss aversion ratio across contexts, and limited guidance on when people use the value function versus simpler heuristics.

## Best Use Case

Prospect theory is most valuable when the research question involves **how people respond to gains and losses relative to a baseline**, especially when policies involve pricing, risk, uncertainty, or framing. It is essential for understanding resistance to congestion pricing, toll road adoption, insurance decisions, safety investment priorities, and any context where the same objective change can be framed as a gain or a loss.

<div class="hbm-note">
  <p><strong>Key takeaway:</strong> people do not evaluate transportation costs and benefits on an absolute scale — they judge outcomes relative to a reference point, feel losses about twice as strongly as equivalent gains, and make different choices depending on whether they perceive themselves as gaining or losing.</p>
</div>

## Key References

<div class="hbm-papers">
  <strong>Foundational references</strong>
  <ul>
    <li><a href="https://doi.org/10.2307/1914185">Kahneman, D. & Tversky, A. (1979). "Prospect Theory: An Analysis of Decision under Risk." Econometrica, 47(2), 263–291.</a> The original paper that introduced prospect theory, demonstrating systematic violations of expected utility theory.</li>
    <li><a href="https://doi.org/10.1007/BF00122574">Tversky, A. & Kahneman, D. (1992). "Advances in Prospect Theory: Cumulative Representation of Uncertainty." Journal of Risk and Uncertainty, 5(4), 297–323.</a> Extended prospect theory to cumulative distributions, providing the standard mathematical formulation used in applied work.</li>
    <li><a href="https://doi.org/10.1016/j.tra.2007.12.002">De Borger, B. & Fosgerau, M. (2008). "The Trade-off between Money and Travel Time: A Test of the Theory of Reference-Dependent Preferences." Journal of Urban Economics, 64(1), 101–115.</a> Applied prospect theory to transportation, showing reference-dependent valuation of travel time.</li>
    <li><a href="https://doi.org/10.1016/j.trb.2009.10.002">Xu, H., Zhou, J., & Xu, W. (2011). "A Decision-Making Rule for Modeling Travelers' Route Choice Behavior Based on Cumulative Prospect Theory." Transportation Research Part C, 19(2), 218–228.</a> Demonstrates cumulative prospect theory applied to route choice under travel time uncertainty.</li>
    <li><a href="https://doi.org/10.1257/jel.47.2.315">Barberis, N. (2013). "Thirty Years of Prospect Theory in Economics: A Review and Assessment." Journal of Economic Perspectives, 27(1), 173–196.</a> An accessible review of how prospect theory has been applied across economics, including transport-related applications.</li>
  </ul>
</div>

<div class="hbm-exercises">
  <strong>Exercises and Discussion Questions</strong>
  <ol>
    <li>A city currently offers free parking downtown and is considering two policies: (A) charging $10/day for parking, or (B) offering a $10/day transit subsidy to downtown workers. Both cost the city the same amount per person shifted. Using prospect theory, explain why Policy A is likely to face more political resistance than Policy B, even if both achieve the same mode shift.</li>
    <li>A commuter's usual drive takes 25 minutes. Today, due to an incident, the expected time is 35 minutes with high uncertainty (could be 20 or 50 minutes). An alternative route takes a reliable 38 minutes. Would prospect theory predict that most commuters take the risky highway or the reliable alternative? What if the usual drive took 40 minutes and today's expected time was also 35 minutes?</li>
    <li>How would you design a stated preference experiment to estimate the loss aversion ratio for travel time among transit users? What reference point would you use, and how would you separate loss aversion from general risk aversion?</li>
  </ol>
</div>
