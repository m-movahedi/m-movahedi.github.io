---
title: "The Methodology Analyzer: Extracting Structured Research Data"
date: "2026-06-09"
draft: false
type: "post"
tags:
  - "AI Agents"
  - "Methodology extraction"
  - "Structured data"
  - "Paper analysis"
  - "Research synthesis"
---

The Scout brought you 200 papers. Now what? You could read them all, but that takes weeks. Instead, let the Methodology Analyzer extract the important structure: what dataset did they use? What method? How did they validate? What did they claim and what are the limitations?

This extraction enables the Gap Finder to spot what is missing, and the Synthesis Writer to build a coherent narrative.

## The Analyzer's challenge

If you read 200 papers and manually extract data, you will:
- Extract different fields from different papers (inconsistency)
- Get tired and miss details in paper 50
- Forget what paper 30 said when you reach paper 150
- Spend weeks on data entry when you should be thinking

The Analyzer's job is to extract consistently, completely, and without fatigue.

## What to extract: the core schema

Do not try to extract everything. Extract what supports your research question. For evacuation research:

| Field | Why it matters | Example |
| --- | --- | --- |
| **Paper metadata** | | |
| Authors | Track prolific researchers, institutional patterns | Smith, J.; Doe, A. |
| Year | Detect trends, separate old vs. new work | 2024 |
| Venue | Identify authoritative sources vs. emerging work | Journal of Transportation Research |
| **Research question** | | |
| Main question | Understand what each paper investigated | "How do social networks influence evacuation decisions?" |
| Hypothesis/goal | Distinguish research directions | "Test if agent-based models outperform flow models" |
| **Methodology** | | |
| Type | Categorize approach | "Agent-based simulation", "Empirical survey", "Real-world observation" |
| Dataset | What data was used | "600 survey respondents from coastal cities"; "Cellular automata on synthetic grid" |
| Sample size | Assess generalizability | n=600 (survey), 10,000 agents (simulation) |
| Population | Who was studied | "Families with children in US coastal areas" |
| Time period | Is it current? | "2022-2024" |
| **Methods and tools** | | |
| Primary tool/model | What was the main technique | "AnyLogic agent-based simulation"; "Logistic regression" |
| Supporting tools | What else was used | "GIS for spatial analysis"; "Python for post-processing" |
| Validation approach | How was it tested | "Compared to real evacuation data"; "Expert review"; "Sensitivity analysis" |
| **Findings** | | |
| Main claim | What did they conclude | "Agent-based models capture behavioral heterogeneity better than flow models" |
| Evidence strength | How confident is the claim | "Validated against real data"; "n=3 case studies"; "Expert consensus" |
| Quantitative results | Numbers, metrics, effect sizes | "RMSE 15% lower; p<0.05" |
| **Limitations** | | |
| Data limitations | What was not covered | "Only US coastal cities"; "Only families, not elderly" |
| Method limitations | What could not be tested | "Did not validate on multi-modal evacuation"; "Computationally limited to 10K agents" |
| Generalizability | How far do claims reach | "May not apply to developing countries"; "Limited to vertical evacuation" |
| **Connections** | | |
| Related papers | Other papers in the field | Cites: [paper list]; Cited by: [paper list] |
| Novelty vs. prior work | What is new | "First to combine agent-based model with real household data" |

That is a lot. Start small: extract 6-8 core fields, then expand.

**Minimal schema (start here):**
```
1. Authors, Year, Venue
2. Main research question
3. Methodology type (simulation, survey, experiment, real-world)
4. Dataset (what data was used, n)
5. Main findings (1-2 sentences)
6. Limitations (1-2 sentences)
```

Once you have these, you can compare papers. Once comparison works, add more fields.

## How to extract reliably

### Rule 1: Extract from structured parts of the paper

Papers have a predictable structure:
- Abstract: broad overview, usually mentions main question and findings
- Introduction: research question, motivation
- Methods: dataset, tools, validation
- Results: findings, numbers
- Discussion: limitations, implications

Analyzer should read in this order, not randomly.

### Rule 2: Use consistent vocabulary

Different papers use different terms. Normalize them:

| What you see | Standard term | Why it matters |
| --- | --- | --- |
| "agent-based model", "ABM", "microscopic simulation", "discrete agent system" | agent-based | Enables comparison: "How many papers used agent-based vs. flow-based?" |
| "survey", "questionnaire", "interviews" | empirical-survey | Separates empirical human data from simulation |
| "real-world", "field study", "actual evacuation" | real-world | Distinguishes validation against real data |
| "cellular automata", "flow model", "fundamental diagram" | flow-based | Alternative to agent-based |

Create a vocabulary file for your domain. Analyzer uses it to standardize data.

### Rule 3: Note ambiguity; do not guess

If a paper does not clearly state something:
- Do not guess
- Note: "unclear", "not mentioned", "inferred from context"
- Flag it for human review

Example:
```
Dataset size: unclear (paper says "large dataset" but no n reported)
Flag: "needs verification"
```

### Rule 4: Extract one paper at a time

Do not extract all papers at once. Process one paper, verify it looks right, then move to the next. This prevents systematic errors.

### Rule 5: Re-extract a sample to check consistency

After extracting 20 papers, go back and re-extract 3 of them. Did you get the same answers? If not, your extraction is drifting.

## Example: extracting an evacuation paper

Suppose the Scout found this paper abstract:

> "Agent-Based Modeling of Household Evacuation Decisions During Hurricane Threats: Incorporating Behavioral Risk Perception and Social Networks. Smith et al. (2024). Journal of Transportation Research.
>
> **Abstract:** We present an agent-based model (ABM) to simulate household evacuation decisions during hurricane threats, incorporating behavioral risk perception and social network effects. We calibrated the model using a survey of 582 households in coastal Florida (2022-2023) and validated against actual evacuation rates during Hurricane Milton (2024). Results show that accounting for social network effects improves model predictions by 23% (RMSE reduction from 28% to 21.5% error). We identify key behavioral factors: risk perception thresholds, family size effects, and evacuation mode preference. Limitations: model is specific to coastal Florida; does not account for cascading failures when multiple hurricanes occur in succession."

**Analyzer extracts:**

```yaml
paper_id: scholar_2024_smith_evacuation
authors: ["Smith, J.", "..." ]
year: 2024
venue: "Journal of Transportation Research"

research_question: "How do behavioral risk perception and social networks influence household evacuation decisions during hurricanes?"
hypothesis: "Accounting for social network effects improves evacuation behavior predictions"

methodology_type: "agent-based"
dataset: "Survey n=582 households; validation against actual Hurricane Milton evacuation data"
sample_size: "582 (survey); validated on 2024 hurricane event"
population: "Households in coastal Florida"
time_period: "2022-2024"

primary_tool: "Agent-based model (ABM)"
supporting_tools: "Survey design, GIS for spatial analysis"
validation_approach: "Calibrated with survey; validated against real evacuation rates"

main_claim: "Incorporating social network effects improves household evacuation prediction"
evidence_strength: "validated-against-real-data"
quantitative_results: "RMSE improvement from 28% to 21.5% error (23% reduction); identified key behavioral factors"

limitations:
  - "Model specific to coastal Florida; generalizability uncertain"
  - "Does not account for cascading multi-hurricane failures"
  - "Limited to household level; does not model community-level evacuation"

data_limitations: "Only coastal Florida; survey conducted 2022-2023"
method_limitations: "ABM computational constraints not discussed; single event validation"
generalizability: "Likely transferable to other hurricane-prone regions; unclear for non-coastal or developing contexts"

novelty: "First to explicitly model social network effects in ABM evacuation; combines survey + real-world validation"
```

That is what one extraction looks like. Notice:
- Consistent field names
- Standardized vocabulary (agent-based, not ABM; survey-based not questionnaire)
- Explicit about uncertainty (does not guess)
- Separates findings from limitations
- Notes novelty and validation strength

## Implementation: three approaches

### Approach 1: Hosted agent with vision

Use Claude Opus or GPT-4V with paper PDFs:

```python
# Pseudocode
analyzer = HostedAgent(
  model="claude-opus",
  system_prompt=analyzer_instructions,
  tools=[
    PDFRead(),  # read PDFs
    DatabaseWrite(methodology_db),
  ]
)

for paper in incoming_papers:
  extraction = analyzer.run(f"Extract structured data from {paper.pdf_url}")
  save_to_database(extraction)
```

**Pros:** Strong instruction following, handles images/tables well
**Cons:** Expensive (per-paper cost), slow (can only process sequentially)

### Approach 2: Local model + structured output

Use a local model with a schema to guide extraction:

```python
from pydantic import BaseModel

class MethodologyExtraction(BaseModel):
  authors: List[str]
  year: int
  methodology_type: str  # must be one of: agent-based, flow-based, survey, experiment, ...
  dataset: str
  main_findings: str
  limitations: str

analyzer = LocalAgent(
  model="mistral-large",
  output_schema=MethodologyExtraction,
  system_prompt=analyzer_instructions,
)

for paper in incoming_papers:
  extraction = analyzer.run(
    task=f"Extract methodology from {paper.title}",
    context=paper.abstract  # or paper PDF text
  )
  # extraction is now validated against schema
  save_to_database(extraction.dict())
```

**Pros:** Cheaper, runs locally, output is guaranteed valid schema
**Cons:** Local models may hallucinate or miss subtle details

### Approach 3: Hybrid with human review

Local model extracts, then samples are reviewed:

```python
analyzer = LocalAgent(...)

extraction_batch = []
for paper in incoming_papers[:100]:
  extraction = analyzer.run(...)
  extraction_batch.append(extraction)

# Sample 10% for human review
to_review = random.sample(extraction_batch, k=10)
for extraction in to_review:
  print(f"Review: {extraction}")
  # Human corrects if needed

# If corrections are consistent, keep the batch
# If many corrections, re-extract with refined instructions
```

**Pros:** Catches errors, improves instructions iteratively
**Cons:** Requires human time upfront

## Common Analyzer mistakes (and how to avoid them)

### Mistake 1: Extracting too much too fast

"I will extract 20 fields from each paper to be thorough."

**Reality:** Analyzer will be slow, errors compound, and 50% of fields will be unused.

**Fix:** Start with 6 core fields. Add more only when you use them.

### Mistake 2: Not standardizing vocabulary

"One paper says 'agent-based', another says 'microsimulation', another says 'discrete agent model.' I will leave it as-is."

**Reality:** When you later query "show me all agent-based papers," you miss half of them.

**Fix:** Create a vocabulary file. Map all variations to canonical terms before storing.

### Mistake 3: Guessing when data is unclear

"The paper does not say sample size, but it seems large, so I will guess n=1000."

**Reality:** Your guess becomes fact. When you compare papers later, you have corrupted data.

**Fix:** Mark as "unclear" or "not reported." Flag for human review if important.

### Mistake 4: Mixing extracted data with interpretation

"Paper says 'model error 28%' so I write 'poor accuracy'."

**Reality:** "Poor" is your judgment, not the paper's data. Downstream agents use your text literally.

**Fix:** Extract exactly what the paper says. Interpretation happens in the Critic agent.

### Mistake 5: Not checking for drift

"I extracted papers 1-20 with detail. Now I am on paper 150 and I am being less thorough."

**Reality:** Early papers are complete; later papers are summary. Comparison is biased.

**Fix:** Every 20 papers, spot-check 3 early extractions against your current standard.

## Building the methodology database

After Analyzer processes all papers, you have a structured database:

```
methodology_db.csv  (or JSON, or SQL)

paper_id, authors, year, venue, research_question, methodology_type, ...
smith_2024, "Smith J, Doe A", 2024, Journal of Transportation Research, "How do social networks...", agent-based, ...
jones_2023, "Jones B, Lee C", 2023, Transportation Research Record, "Do evacuation warnings...", survey, ...
```

This is the backbone for Gap Finder: when you query "show me papers on agent-based + behavioral", it returns the 15 papers that match.

## Connecting Analyzer to Gap Finder

Analyzer outputs a structured database. Gap Finder queries it:

```python
# Gap Finder queries
gap_finder.query("
  Show me papers where methodology_type = 'agent-based' 
  AND population includes 'elderly' 
  AND year >= 2022
")

gap_finder.query("
  What datasets are used most frequently?
  What datasets are used only once?
")

gap_finder.query("
  Which papers cite each other?
  What are the common citations (canonical papers)?
")
```

These queries reveal gaps: "We have 40 agent-based papers on general populations, but only 2 on elderly-specific evacuation."

## Handling edge cases

### What if the paper has no clear methodology section?

Some papers (especially older ones or book chapters) lack a standard Methods section. 

**Solution:** Read Introduction + Results. Infer methodology from what they say they did.

### What if the paper is empirically messy?

"Survey of 500, response rate 12%, analysis uses 60. Which n do I report?"

**Solution:** Extract both: "Survey n=500, response rate 12%, analysis n=60." Note the discrepancy.

### What if methodology is proprietary/secret?

"Paper says 'proprietary method' and does not describe it."

**Solution:** Mark as "proprietary-undisclosed." This is honest data for downstream analysis.

### What if the paper uses multiple methods?

"Part 1 is a survey (n=200). Part 2 is an ABM. Part 3 validates ABM against survey."

**Solution:** Can extract as multi-row entry (one row per method phase) or as a single row with "methodology_type: mixed" and detailed breakdown.

Choose consistently.

## Quality metrics for Analyzer

After Analyzer runs, ask:

1. **Completeness:** Did you extract all required fields from all papers?
2. **Consistency:** Do papers with similar methodologies have similar extracted data?
3. **Accuracy:** Spot-check 10 random extractions against the original papers. How many match?
4. **Standardization:** Are terminologies standardized? Can you query reliably?
5. **Ambiguity flagging:** Did unclear cases get marked as "unclear" rather than guessed?
6. **Traceability:** Can you link each extracted field back to the paper (quotes, page numbers)?

Target: 95%+ accuracy on spot-checks. 100% standardization. 0% guesses.

## Tools for structured extraction

| Tool | Purpose | Cost |
| --- | --- | --- |
| Pydantic | Define and validate extraction schemas | Free (Python) |
| Anthropic SDK | Structured outputs with Claude | API cost |
| LangChain | Agent framework with structured output | Free (Python) |
| Zotero + plugins | Semi-automated paper metadata extraction | Free |
| Pandas/Polars | Data validation and cleaning | Free (Python) |
| dbt | Data transformation and testing | Free (open source) |

## What comes next

With a populated methodology database, the Gap Finder can now work: comparing across papers, identifying what is missing, spotting contradictions.

Then the Synthesis Writer drafts narrative: "Here is what we know about agent-based evacuation models. Here is what remains unknown."

## The practical lesson

Extraction is not a creative task. It is a mechanical task that must be done consistently.

When Analyzer does it right, downstream agents (Gap Finder, Synthesis Writer) can do their best work. When Analyzer is sloppy, everything downstream is corrupted.

Invest in extraction quality. Make it boring. Make it standardized. Make it auditable.

The payoff is: later, you can ask "What is the most common dataset used?" and get a reliable answer. You can ask "Show me papers that combine agent-based models with real-world validation" and get exactly what you asked for, not what the Analyzer guessed you meant.

That is how a research team scales beyond one person thinking.
