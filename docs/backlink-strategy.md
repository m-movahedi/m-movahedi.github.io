# Academic & Technical Backlink Strategy for m-movahedi.com

This document outlines a high-authority backlink, entity-building, and indexing acceleration strategy tailored specifically for **Mohammad Movahedi** as a Ph.D. researcher in Civil Engineering, Intelligent Transportation Systems, and Infrastructure Resilience.

Search engines like Google rank academic and personal portfolio websites primarily through **domain authority**, **entity co-occurrence**, and **reputable academic citations**.

---

## 1. High-Authority Institutional Anchors (.edu / .gov)

Institutional backlinks carry immense authority in Google’s Knowledge Graph:

1. **FAMU-FSU College of Engineering Department Directory**:
   - Ensure your departmental profile (Civil & Environmental Engineering) lists `https://m-movahedi.com/` as your primary personal homepage.
   - Anchor text: `Mohammad Movahedi Personal Website` or `Research Portfolio`.
2. **RIDER Center (Resilient Infrastructure & Disaster Response Center)**:
   - Add your website link to your researcher/lab bio under RIDER Center graduate research assistants.
   - Link project summaries to your site’s dedicated research pages (e.g. `/research/robust-mobile-ev-charging-natural-disasters/`).
3. **Florida State University Graduate School / Scholar Spotlight**:
   - When featured in university news, student highlights, or grant announcements, request that the communications officer link directly to your canonical site rather than an unmaintained landing page.

---

## 2. Academic Identity & Verified Scholar Profiles

Google's search algorithms treat scholarly identity platforms as foundational entity-verification nodes:

| Platform | Location of Link | Impact |
|---|---|---|
| **Google Scholar** | "Homepage" field in profile settings | Direct internal signal to Google Search & Scholar |
| **ORCID** (`orcid.org`) | "Websites & Social Links" | Global persistent identifier linked to all journal DOIs |
| **ResearchGate** | Bio / Info section | Discovered by academic web crawlers |
| **IEEE Xplore** | Author profile linked via IEEE T-ITS papers | High-authority domain signal |
| **Semantic Scholar** | Author profile claim & external link | AI-driven scholarly search crawler |
| **Web of Science / Publons** | Researcher profile | Citation and peer-review authority |
| **Scopus Author ID** | Author profile external links | Elsevier indexing graph |

---

## 3. Open Access Repositories & Paper Citations

Every preprint and publication represents a permanent, crawlable backlink:

1. **arXiv / TechRxiv / SSRN**:
   - In author contact metadata and footnotes of preprints, include `https://m-movahedi.com/`.
   - In preprint comments: `"Code and interactive simulations available at https://m-movahedi.com/research/inspect-xr/"`.
2. **Zenodo / Dryad Data Archiving**:
   - When open-sourcing code, datasets, or simulation parameters, archive them on Zenodo to receive a citable DOI.
   - In the Zenodo metadata "Related Identifiers", include `IsSupplementTo: https://m-movahedi.com/research/[project-slug]/`.

---

## 4. Open-Source Code, GitHub, and Package Repositories

Technical recruiters, researchers, and engineers discover work through software repositories:

1. **GitHub Profile (`github.com/m-movahedi`)**:
   - Primary website field in GitHub user settings: `https://m-movahedi.com/`.
   - In your GitHub profile `README.md`, link to key interactive articles (e.g., Monte Carlo simulations, Local LLM toolchains).
2. **Repository READMEs**:
   - In the README of major repositories (`InspectXR`, traffic signal optimization tools), include:
     ```markdown
     For project background, methodology, and publications, visit [m-movahedi.com/research](https://m-movahedi.com/research/).
     ```
3. **PyPI / Conda / Hugging Face**:
   - In `pyproject.toml` or package metadata, set `homepage = "https://m-movahedi.com/"` and `documentation = "https://m-movahedi.com/scratchpad/"`.

---

## 5. Academic Presentations, Conferences & Webinars

1. **NHERI Graduate Student Council (NHERI GSC)**:
   - In YouTube descriptions for hosted sessions on the **NHERI ECO channel**, include links to the full meeting summaries:
     `"Recap and speaker details: https://m-movahedi.com/webinars/nheri-rsr-spring-2025/"`.
2. **Conference Proceedings & Slides**:
   - When presenting at TRB, CIB World Building Congress, or ASCE, include your website URL on the title and conclusion slides.
   - Upload slides to SlideShare or SpeakerDeck with link attribution.

---

## 6. Content Syndication with Canonical Tags

Publishing high-value interactive guides (such as your Monte Carlo series and Local LLM guides) on developer platforms drives organic backlink accumulation:

1. **Medium / Towards Data Science**:
   - Cross-publish selected articles.
   - **Crucial**: Set the canonical link in Medium settings to the original URL on `https://m-movahedi.com/scratchpad/...` to avoid duplicate content penalties and pass link equity.
2. **LinkedIn Articles**:
   - Publish research release summaries (e.g., when a paper is published in IEEE T-ITS).
   - Link directly to the research breakdown on your site.

---

## 7. Immediate Google Search Console Actions

To immediately trigger Google to crawl and index your website:

1. **Add Verification Token**:
   - Obtain your HTML tag verification token from Google Search Console (e.g., `google-site-verification=abcdef...`).
   - In `hugo.toml`, insert the token:
     ```toml
     [params]
       googleSiteVerification = "your_token_here"
     ```
   - Deploy the site and click **Verify** in Search Console.
2. **Submit Sitemap**:
   - Navigate to **Sitemaps** in Search Console.
   - Enter `https://m-movahedi.com/sitemap.xml` and click **Submit**.
3. **Inspect Priority URLs**:
   - Use the **URL Inspection** bar at the top of Search Console for:
     - `https://m-movahedi.com/`
     - `https://m-movahedi.com/background/`
     - `https://m-movahedi.com/research/`
     - `https://m-movahedi.com/about/`
   - Click **Request Indexing** on each of these core pages.
