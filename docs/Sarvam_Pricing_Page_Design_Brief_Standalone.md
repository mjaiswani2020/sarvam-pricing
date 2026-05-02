# Sarvam Pricing Page — Design Brief (Standalone)

*A handover document for the UX designer. Companion to the* Pricing Strategy *and* Pricing Structure *documents and the Mistral / ElevenLabs reference screenshots.*

---

## 1. Context in one paragraph

Sarvam is India's sovereign AI platform — a $1.55B-valued company with the most complete Indic-language AI stack in the country. The current pricing surface (sarvam.ai/api-pricing and the dashboard pricing page) is a single flat list of rates. The pricing has been remodelled top-down, and now needs a designed surface that matches the new architecture: a unified credit currency, three customer motions (consumer / API / productized SaaS), and a fourth surface for sovereign and on-prem deployments. This brief tells you what to design and what we've already decided. The strategy doc tells you why.

---

## 2. What you have

**Documents:**
- *Sarvam AI Pricing Strategy: A CPO Briefing* — deep context on the Indian AI market, Sarvam's positioning, and competitor pricing. Skim for context.
- *Sarvam Pricing Strategy: The Product Thinking* — the reasoning chain behind the remodel. Read this first to understand the priority order (developers first → SMB/enterprise conversion → consumer flywheel) and the ten implications that force the architecture.
- *Sarvam Pricing Structure* — the full rate card. Source of truth for every plan, every credit amount, every feature, every seat.

**Reference screenshots:**
- ElevenLabs subscription pages (ElevenCreative / ElevenAgents / ElevenAPI) — borrow the workspace dropdown sidebar, the persistent credits pill, and the API sub-tab pattern.
- Mistral pricing page (Plans / API pricing / Enterprise deployments) — borrow the plan cards, comparison table, dark Enterprise callout strip, model cards, and the contact form layout.
- Current Sarvam dashboard pricing page (for reference on what we're replacing).

---

## 3. Goal

Design a pricing surface that:

1. **Wins developer trust through radical transparency.** Every price published. Every rate limit published. Every service tier published. No "Contact sales" except on Enterprise tiers and the Enterprise Deployments tab.
2. **Converts SMB and enterprise without friction.** Published Scale tier, automatic volume discounts, productized SaaS plans visible upfront — not behind a form.
3. **Makes the full-stack moat legible.** One credit, one balance, spendable across API and any product workspace. The bundling has to feel obvious at the moment of purchase.
4. **Looks like Sarvam — not Mistral, not ElevenLabs.** We borrow patterns, not aesthetics.

---

## 4. The app shell

The pricing page lives inside the wider Sarvam dashboard. The shell has two regions: a persistent left sidebar (main app navigation) and a main content area (where the pricing page lives).

```
┌──────────────┬──────────────────────────────────────────────────┐
│              │                                                  │
│  SIDEBAR     │  MAIN CONTENT                                    │
│  (256px)     │  (centered max-w ~1024px with side gutters)     │
│              │                                                  │
│  ‖sarvam     │  ┌──────────────────────────────────────────┐  │
│              │  │ Header: title + credits pill + INR pill  │  │
│  Workspace ⇅ │  ├──────────────────────────────────────────┤  │
│              │  │ Top tabs: Indus | Platform | APIs |      │  │
│  Per-workspace│  │           Enterprise deployments         │  │
│  nav items   │  ├──────────────────────────────────────────┤  │
│              │  │                                          │  │
│              │  │ Tab content                              │  │
│              │  │                                          │  │
│  Pricing ◀── │  │ (centered, generous side gutters)        │  │
│              │  │                                          │  │
└──────────────┴──┴──────────────────────────────────────────┴──┘
```

The sidebar is the **main app navigation**, persisting across the whole product — not pricing-page-specific. The pricing page is one of many surfaces inside the dashboard.

Content in the main area should be **horizontally centred with generous side gutters**, around max-width 1024px. Plan cards should not stretch edge-to-edge of the main area.

---

## 5. Information architecture

### 5.1 Sidebar (ElevenLabs pattern)

Top-to-bottom:

1. **Brand mark** — small Sarvam wordmark.
2. **Workspace dropdown trigger** — a button-card showing the currently-selected workspace with a colored icon, name, one-line description, and an updown chevron icon. Clicking opens a panel below it.
3. **Per-workspace nav items** — these change based on which workspace is selected. (E.g., Indus shows Home / Chats / Voice / Voices / Settings; Samvaad shows Agents / Flows / Knowledge base / Analytics / Settings.)
4. **Pricing nav item** at the bottom, highlighted as the current page (we're on the pricing surface).

The five workspaces in the dropdown:

| Workspace | One-line description |
|---|---|
| Indus | Consumer chat app |
| Samvaad | Voice & chat agents |
| Studio | Dubbing & content |
| Akshar | Document AI |
| APIs | Build with our models |

**Critical decoupling:** the workspace dropdown is **independent** of the pricing page tabs. Selecting a workspace changes the sidebar's lower nav but does **not** change which pricing tab is showing. This matches ElevenLabs.

#### Sidebar — closed dropdown state

```
┌──────────────────────┐
│ ‖sarvam              │
├──────────────────────┤
│ ┌──────────────────┐ │
│ │ ◉ Indus       ⇅ │ │
│ │   Consumer chat  │ │
│ └──────────────────┘ │
├──────────────────────┤
│ ▢ Home               │
│ ▢ Chats              │
│ ▢ Voice              │
│ ▢ Voices             │
│ ▢ Settings           │
│                      │
│         ⋮            │
│                      │
│ ┌──────────────────┐ │
│ │ ⊟ Pricing CURRENT│ │
│ └──────────────────┘ │
└──────────────────────┘
```

#### Sidebar — open dropdown state

```
┌──────────────────────┐
│ ‖sarvam              │
├──────────────────────┤
│ ┌──────────────────┐ │
│ │ ◉ Indus       ⇅ │ │  ← still shows current
│ │   Consumer chat  │ │
│ └──────────────────┘ │
│ ┌──────────────────┐ │  ← dropdown panel
│ │ ◉ Indus      ✓  │ │     (selected)
│ │   Consumer chat  │ │
│ │ ─────────────── │ │
│ │ ◉ Samvaad        │ │
│ │   Voice & chat   │ │
│ │ ─────────────── │ │
│ │ ◉ Studio         │ │
│ │   Dubbing &      │ │
│ │   content        │ │
│ │ ─────────────── │ │
│ │ ◉ Akshar         │ │
│ │   Document AI    │ │
│ │ ─────────────── │ │
│ │ ◉ APIs           │ │
│ │   Build with     │ │
│ │   our models     │ │
│ └──────────────────┘ │
└──────────────────────┘
```

### 5.2 Top tabs (Mistral pattern)

Four tabs across the top of the pricing page, with an underline indicator on the active tab:

1. **Indus** — consumer plans (3 tiers)
2. **Platform** — productized SaaS (Samvaad, Studio, Akshar — sub-tabs)
3. **APIs** — model rates and developer plans
4. **Enterprise deployments** — sales contact form

INR-only. **No USD toggle.** A separate USD price page exists for international customers — not surfaced here.

---

## 6. Component inheritance

Borrow directly from these references; restyle in Sarvam's visual language.

| Component | Source | Used on |
|---|---|---|
| Workspace dropdown sidebar | ElevenLabs | Sidebar (entire app) |
| Persistent credits pill (top-right) | ElevenLabs | All pricing tabs |
| Sub-tab navigation for APIs (Speech to Text / Text to Speech / etc.) | ElevenLabs | APIs tab — Browse our APIs |
| Plan cards (Free, paid tiers, "Most popular" highlight) | Mistral | Indus, Platform sub-tabs, APIs |
| Feature comparison table | Mistral | Indus, Platform sub-tabs |
| Dark Enterprise callout strip | Mistral | Platform sub-tabs, APIs |
| Model cards (name + tag + one-liner + rates) | Mistral API pricing | APIs tab — Models section |
| Two-column contact form (left pitch, right form) | Mistral Enterprise deployments | Enterprise deployments tab |
| FAQ accordion (per-tab, not globally shared) | Both | All four tabs |

---

## 7. Component anatomy

Specs for the recurring components, in prose. All interpretations of visual treatment are yours; this section defines *structure* not *style*.

### 7.1 Header

A single horizontal strip at the top of the main content area. Contains:

- **Left:** page title (`Plans & Pricing`) + small subtitle below it (`Top up once. Use credits across the API and any product workspace.`).
- **Right:** the credits pill, then a small INR pill with a chevron (the INR pill is decorative — there's no currency to switch to).

The bg/border of the header should extend edge-to-edge of the main area, but the content inside should respect the centred max-width.

### 7.2 Credits pill

A pill-shaped container in the top-right of the header. Always shows:

```
[ API credits  ₹2,847 ]  [+ Add credits]
```

- "API credits" label is small caps, secondary text colour.
- Numerical balance is in a monospaced font for digit alignment.
- "Add credits" is a small dark button at the right of the pill.

**Always one balance, never two.** This is intentional — see Section 9.

### 7.3 Plan card

A vertical block with this structure:

1. Tier name (e.g., *Pro*) in small caps or secondary colour.
2. Price line: large display number + cadence (e.g., **₹399** /month).
3. Optional bonus pill (e.g., *+₹1,000 bonus (10%)*) — small accent-coloured pill, used on API plans where bonus credits are part of the offer.
4. CTA button — full-width. Dark fill on the highlighted ("Most popular") card; outlined on standard cards.
5. Feature list with check-icon bullets — 5 to 7 features per card.
6. Optional footnote at the bottom, separated by a thin border.

**Highlighted variant:** same structure with a "Most popular" badge floating at the top-left of the card and a coloured border or subtle accent fill. The "Most popular" badge always lands on the second tier (Plus on Indus, Pro on Platform, Builder on APIs).

### 7.4 Feature comparison table

A horizontal table with one column per plan tier (3 for Indus, 4 elsewhere). The first column lists feature names; subsequent columns show values per tier.

Value formatting:
- ✓ check icon for "yes / included"
- — em dash for "no / not included"
- Plain text for specific values (e.g., "20", "Unlimited", "₹100", "3 included")

Header row should have small caps column labels.

### 7.5 Soft callout strip (low intensity)

Used on the Indus tab when we want to acknowledge an exit ramp without aggressively selling. Dashed border, neutral background, small icon, short text, "Contact us →" link on the right.

> *Need on-prem, custom, or air-gapped?*  
> *Indus deployments for enterprise teams, schools, and government users.*  
> &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; *Contact us →*

### 7.6 Dark Enterprise callout strip (high intensity)

Used on Platform sub-tabs and on the APIs tab. Dark fill (near-black), light text, two lines of copy on the left, prominent CTA button on the right.

> **Sovereign deployments. Outcome-based pricing. Air-gapped Samvaad.**  
> *Per resolved query, per qualified lead, per completed transaction — priced on the outcome instead of the action.*  
> &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; **[Contact sales →]**

### 7.7 Model card (Mistral-style)

Used in the APIs tab Models section. Compact card with:

1. Small icon (e.g., chip / cpu glyph) + model name on the left.
2. Tag pill on the right (e.g., "Frontier", "Workhorse").
3. One-line description (40–60 words).
4. Three rate columns at the bottom: *Input · Cached input · Output*. Each shows a small label and a monospaced rate.
5. "Open model details →" link as a quiet CTA.

### 7.8 API table row (ElevenLabs-style)

Used in the APIs tab Browse-our-APIs section. Each sub-tab renders a 4-column table:

| Model / endpoint | Type | What it does | Price |
|---|---|---|---|
| Saaras V3 | Transcription | All 22 Indic + English. ~19% WER on IndicVoices. | ₹30 / hour |

The price column should be monospaced for alignment.

### 7.9 Sub-tab patterns

Two patterns, used in different places:

- **Pill switcher** (used for Platform sub-tabs Samvaad / Studio / Akshar) — a small pill-style container with selectable buttons inside, one with a contrast bg.
- **Underline tab row** (used for Browse-our-APIs sub-tabs) — flat horizontal labels with a coloured underline indicator on the active item.

The Platform sub-tabs include a one-liner descriptor next to the label (e.g., "Samvaad — Voice & chat agents"); the API sub-tabs are label-only with a small icon prefix.

### 7.10 Service tier card

A small card in a 4-up horizontal strip on the APIs tab. Each card:

1. Tier name (e.g., *Priority*) — bold.
2. Multiplier (e.g., *1.8×*) — monospaced, accent colour, top-right.
3. SLA line (e.g., *Guaranteed capacity, lowest p99*) — small text.
4. Use-case line (e.g., *Real-time voice agents, customer-facing*) — small text.

### 7.11 FAQ accordion

Standard accordion. List of question/answer pairs separated by horizontal rules. Each row: question text on the left, chevron-down icon on the right. Click expands the answer in body text below. Question text should be slightly larger than answer text.

A small section header to the left of the accordion (e.g., "FAQ") in display type — this is a layout pattern Mistral uses on its pricing pages.

### 7.12 Two-column contact form

Used on the Enterprise deployments tab. A single rounded card containing two equal columns:

- **Left column:** white or near-white bg with optional subtle grid pattern. Contains a small mark, headline, body paragraph, and a bulleted capability list.
- **Right column:** subtly tinted bg (warm). Contains the form: First name + Last name (two-up row), Email, Role, "Tell us about your project" textarea (with 0/500 counter), opt-in checkbox, legal text, Submit button.

---

## 8. Tab-by-tab specifications

Each tab gets a rough layout sketch and an annotated content list. The sketches are for IA reference only — visual treatment is yours.

### 8.1 Indus tab

**Audience:** Indic content creators, students, individual professionals (Archetype A in the strategy doc).

```
┌──────────────────────────────────────────────────────┐
│  ┌────────┐  ┌──────────┐  ┌────────┐               │
│  │  Free  │  │  Plus  ★ │  │  Pro   │               │
│  │   ₹0   │  │  ₹399    │  │ ₹1,499 │               │
│  │        │  │  POPULAR │  │        │               │
│  │ ✓ ...  │  │ ✓ ...    │  │ ✓ ...  │               │
│  └────────┘  └──────────┘  └────────┘               │
│                                                      │
│  ┌─────────────────────────────────────────────┐    │
│  │ ◌ Need on-prem, custom, or air-gapped?      │    │
│  │   (soft callout)              Contact us →  │    │
│  └─────────────────────────────────────────────┘    │
│                                                      │
│  Compare plans                                       │
│  ┌─────────────────────────────────────────────┐    │
│  │ Feature              │ Free │ Plus │ Pro    │    │
│  │ ────────────────────────────────────────── │    │
│  │ Sarvam-105B msgs/day │  20  │  ∞   │  ∞ +★ │    │
│  │ Voice chat           │30min │  ∞   │  ∞ +★ │    │
│  │ ...                                         │    │
│  └─────────────────────────────────────────────┘    │
│                                                      │
│  FAQ                                                 │
│  ▸ What are Sarvam credits?                         │
│  ▸ Do unused credits roll over?                     │
│  ▸ ...                                              │
└──────────────────────────────────────────────────────┘
```

**Layout, top to bottom:**

1. Three plan cards in a row: **Free** (₹0), **Plus** (₹399/mo, "Most popular"), **Pro** (₹1,499/mo).
2. Soft callout strip (low intensity, dashed border): *"Need on-prem, custom, or air-gapped? Indus deployments for enterprise teams, schools, and government users."*
3. **Compare plans** — feature comparison table across all three tiers.
4. **FAQ** — Indus-specific consumer questions: language coverage, voice cloning, credit rollover, commercial-use license.

**Plan card content** is in *Sarvam Pricing Structure* §5.1. Each card lists credit allowance as **"₹100 API credits/month"** — never "Pool A".

### 8.2 Platform tab

**Audience:** SMBs and enterprise teams adopting AI in operations (Archetypes C and D).

```
┌──────────────────────────────────────────────────────┐
│  ┌─────────────────────────────────────────┐        │
│  │ [Samvaad ◉] [Studio] [Akshar]           │        │
│  │   Voice & chat agents                   │        │
│  └─────────────────────────────────────────┘        │
│                                                      │
│  ┌──────┐  ┌────────┐  ┌──────┐  ┌─────────┐       │
│  │ Free │  │ Pro  ★ │  │Scale │  │Enterprise│      │
│  │  ₹0  │  │₹9,999  │  │₹1L   │  │ Custom   │      │
│  └──────┘  └────────┘  └──────┘  └─────────┘       │
│                                                      │
│  ┌─────────────────────────────────────────────┐    │
│  │ ▌ Sovereign deployments. Outcome-based.     │    │
│  │ ▌ Air-gapped Samvaad.   [Contact sales →]   │    │
│  │   (dark callout)                            │    │
│  └─────────────────────────────────────────────┘    │
│                                                      │
│  ┌─────────────────────┐  ┌──────────────────────┐ │
│  │ Agent action pricing │  │ What's included      │ │
│  │ • Classic    1 cr   │  │ Free|Pro|Scale|Ent.  │ │
│  │ • Generative 2 cr   │  │ ...                  │ │
│  │ • Tool       5 cr   │  │                      │ │
│  │ • KB        10 cr   │  │                      │ │
│  │ • Workflow  25 cr   │  │                      │ │
│  └─────────────────────┘  └──────────────────────┘ │
│                                                      │
│  ┌─────────────────────────────────────────────┐    │
│  │ ⓘ Your API credits work everywhere.         │    │
│  │   When a workspace runs out, spend API      │    │
│  │   credits inside any product — opt-in.      │    │
│  └─────────────────────────────────────────────┘    │
│                                                      │
│  FAQ                                                 │
└──────────────────────────────────────────────────────┘
```

**Layout, top to bottom:**

1. **Sub-tab pill switcher:** Samvaad | Studio | Akshar. Pill-style, in a soft background, with a one-liner descriptor next to each label (e.g., "Samvaad — Voice & chat agents"). Active sub-tab has a lifted/contrasting treatment.
2. **Per-sub-tab content** — see below.
3. **One-line credits callout** (only on Platform tab, after all three sub-tabs):
   > *Your API credits work everywhere. When a product's monthly allowance runs out, you can spend API credits inside any workspace — opt-in per request, no surprises.*
   
   Single info strip, warm-tinted background, info icon. **This is the only place we explain overflow on the entire page.** No diagrams, no architectural language.
4. **FAQ** — Platform-specific procurement questions: workspace credits, overflow behaviour, seats, outcome-based pricing.

#### Samvaad sub-tab

- **Four plan cards:** Free, Pro (₹9,999/mo, "Most popular"), Scale (₹99,999/mo), Enterprise (Custom).
- **Dark Enterprise callout:** *"Sovereign deployments. Outcome-based pricing. Air-gapped Samvaad."*
- **Two-column section:**
  - *Left:* Agent action pricing table — Classic answer / Generative answer / Tool call / KB-grounded / Workflow trigger, with credit cost per action (1 / 2 / 5 / 10 / 25 credits).
  - *Right:* "What's included" comparison table across the four tiers (Builders, Channels, Telephony integration, On-prem option, Outcome-based SKUs).

#### Studio sub-tab

- **Four plan cards:** Free, Pro (₹4,999/mo, "Most popular"), Scale (₹49,999/mo), Enterprise (Custom).
- **Dark Enterprise callout:** *"Private Studio deployments for media houses, schools, and ministries."*
- **"What's included"** comparison table (Builder seats, Viewer seats, Watermark on outputs, Brand kit, Custom voices, Studio API access, SSO, On-prem option).

#### Akshar sub-tab

- **Four plan cards:** Free, Pro (₹9,999/mo, "Most popular"), Scale (₹49,999/mo), Enterprise (Custom).
- **Dark Enterprise callout:** *"Air-gapped Akshar for regulated document workflows."*
- **Two-column section:**
  - *Left:* **Seat roles table** — Viewer / Reviewer / Builder / Admin. Each role gets a one-line description and a use-case hint. Akshar is the only product with this four-role structure because document review is genuinely a separate human from template creation.
  - *Right:* "What's included" comparison (Builders, Reviewers, Industry templates, Custom extractors, On-prem option).

### 8.3 APIs tab

**Audience:** developers and technical buyers (Archetype B, with some E).

```
┌──────────────────────────────────────────────────────┐
│  Our most powerful models                            │
│  ┌──────────────────────┐  ┌──────────────────────┐ │
│  │ ⚙ Sarvam-105B       │  │ ⚙ Sarvam-30B        │ │
│  │   FRONTIER           │  │   WORKHORSE         │ │
│  │   MoE reasoning ...  │  │   Production MoE... │ │
│  │   In  Cached  Out    │  │   In  Cached  Out   │ │
│  │   ₹4   ₹0.4  ₹16    │  │  ₹2.5  ₹0.25  ₹10  │ │
│  └──────────────────────┘  └──────────────────────┘ │
│                                                      │
│  Plans                                               │
│  ┌──────┐  ┌─────────┐  ┌───────┐  ┌─────────┐     │
│  │ Free │  │Builder ★│  │ Scale │  │Enterprise│   │
│  │  ₹0  │  │ ₹10K/mo │  │₹50K/mo│  │ Custom  │    │
│  └──────┘  └─────────┘  └───────┘  └─────────┘     │
│                                                      │
│  ┌─────────────────────────────────────────────┐    │
│  │ ▌ Enterprise APIs.                          │    │
│  │ ▌ Custom rate limits, fine-tuning, dedicated│    │
│  │   capacity, on-prem.    [Contact sales →]  │    │
│  └─────────────────────────────────────────────┘    │
│                                                      │
│  Browse our APIs                                     │
│  ┌─────────────────────────────────────────────┐    │
│  │ STT◉  TTS  Translation  Vision  LLMs       │    │
│  ├─────────────────────────────────────────────┤    │
│  │ Endpoint │ Type │ Description │ Price       │    │
│  │ Saaras V3│ ASR  │ All 22 Indic│ ₹30/hr      │    │
│  │ ...                                          │    │
│  └─────────────────────────────────────────────┘    │
│                                                      │
│  ⚡ Service tiers — choose per request               │
│  ┌──────┐ ┌──────┐ ┌──────────┐ ┌─────────┐        │
│  │Batch │ │ Flex │ │ Standard │ │Priority │        │
│  │ 0.5× │ │ 0.5× │ │   1.0×   │ │  1.8×   │        │
│  └──────┘ └──────┘ └──────────┘ └─────────┘        │
│                                                      │
│  ↘ Volume discount ladder                           │
│  ┌─────────────────────────────────────────────┐    │
│  │ ₹10L–₹50L annual    │  10% off              │    │
│  │ ₹50L–₹2Cr annual    │  20% off              │    │
│  │ ₹2Cr–₹10Cr annual   │  30% off              │    │
│  │ ₹10Cr+ annual       │  Custom               │    │
│  └─────────────────────────────────────────────┘    │
│                                                      │
│  FAQ                                                 │
└──────────────────────────────────────────────────────┘
```

**Layout, top to bottom:**

1. **Our most powerful models** — Mistral-style cards for Sarvam-105B and Sarvam-30B. Each card has:
   - Name + a small tag ("Frontier" / "Workhorse")
   - One-line description
   - Three rate columns (Input / Cached input / Output) in monospaced numerals
   - "Open model details →" link
2. **Plans** (placed *below* Models — this was a deliberate ordering decision). Four cards: Free, Builder (₹10K/mo, "Most popular"), Scale (₹50K/mo), Enterprise (Custom). Each card shows: monthly credits, RPM rate limit, support tier, and effective discount on list rate.
3. **Dark "Enterprise APIs" callout:** *"Custom rate limits, fine-tuning, dedicated capacity, on-prem licenses."*
4. **Browse our APIs** — sub-tabbed table section with five sub-tabs (ElevenLabs pattern):
   - **Speech to Text** — Saaras V3 with diarization / translate variants
   - **Text to Speech** — Bulbul V3, V2 (legacy), Voice Cloning training, Voice Cloning synthesis
   - **Translation & Language** — Mayura, Sarvam-Translate, Transliterate, Language ID
   - **Vision & Documents** — Sarvam Vision
   - **Foundation LLMs** — Sarvam-105B, Sarvam-30B, Sarvam-M (legacy)
   - Each sub-tab renders a four-column table (see §7.8).
5. **Service tiers** — four-card horizontal strip showing Batch (0.5×), Flex (0.5×), Standard (1×), Priority (1.8×). See §7.10 for card structure.
6. **Volume discount ladder** — list of four commitment bands (₹10L–₹50L → 10%, ₹50L–₹2Cr → 20%, ₹2Cr–₹10Cr → 30%, ₹10Cr+ → custom).
7. **FAQ** — developer-specific: cached input, mixing service tiers, rate limits per API, credit expiry, overflow into product workspaces.

### 8.4 Enterprise deployments tab

**Audience:** government, defence, regulated finance, large enterprises with sovereignty needs (Archetype D, with some F).

```
┌──────────────────────────────────────────────────────┐
│  ┌──────────────────────────┬─────────────────────┐ │
│  │  ▣ (logo mark)           │   First name *      │ │
│  │                          │  ┌────────────────┐ │ │
│  │  Let's build something   │  │                │ │ │
│  │  sovereign together.     │  └────────────────┘ │ │
│  │                          │   Last name *       │ │
│  │  Our solutions team      │  ┌────────────────┐ │ │
│  │  helps deploy air-gapped,│  │                │ │ │
│  │  on-prem, sovereign-grade│  └────────────────┘ │ │
│  │  AI for defence, BFSI,   │   Email *           │ │
│  │  healthcare, govt.       │  ┌────────────────┐ │ │
│  │                          │  └────────────────┘ │ │
│  │  ✓ Air-gapped Chanakya   │   Role *            │ │
│  │  ✓ On-prem Sarvam-105B   │  ┌────────────────┐ │ │
│  │  ✓ Dedicated GPU (Yotta) │  └────────────────┘ │ │
│  │  ✓ Industry templates    │   Tell us about... *│ │
│  │  ✓ Outcome-based pricing │  ┌────────────────┐ │ │
│  │                          │  │                │ │ │
│  │  (subtle grid pattern    │  │                │ │ │
│  │   on white bg)           │  │           0/500│ │ │
│  │                          │  └────────────────┘ │ │
│  │                          │   ☐ I want updates  │ │
│  │                          │   By submitting...  │ │
│  │                          │                     │ │
│  │                          │   [ Submit → ]      │ │
│  │                          │  (warm tint bg)     │ │
│  └──────────────────────────┴─────────────────────┘ │
│                                                      │
│  FAQ                                                 │
│  ▸ What deployment models do you support?           │
│  ▸ Do you support fine-tuning?                      │
│  ▸ ...                                              │
└──────────────────────────────────────────────────────┘
```

**Layout (Mistral two-column card):**

- **Left column** (white background with subtle grid pattern overlay):
  - Small Sarvam mark (could be the स glyph or a logomark treatment)
  - Headline: *"Let's build something sovereign together."*
  - Body paragraph: *"Our solutions team helps deploy air-gapped, on-prem, and sovereign-grade AI for defence, BFSI, healthcare, and government. Tell us about your project and we'll connect you with the right engineering team."*
  - Bulleted capability list:
    - Air-gapped Chanakya for defence and regulated finance
    - On-prem Sarvam-105B with custom fine-tuning
    - Dedicated GPU capacity through Yotta
    - Industry templates and custom extractors for Akshar
    - Outcome-based pricing for Samvaad
- **Right column** (subtle warm/amber tint background):
  - Form fields: First name + Last name (two-column row), Email, Role, "Tell us about your project" textarea (with 0/500 counter), opt-in checkbox, legal text, Submit button.

Below the card: Enterprise-specific FAQ — deployment models supported, fine-tuning availability, engagement model (forward-deployed engineers), typical timelines, eligibility for government and defence work.

---

## 9. The credit system — language and visual rules

This is the most opinionated part of the brief. The architecture under the hood has two pools (API consumption + workspace-bound) with one-way overflow from API → workspace. **Do not surface this complexity in the design.**

- **Top-right credits pill** — always reads `API credits · ₹X · + Add credits`. One number, always. Never contextual switching, never a second pool exposed in the pill.
- **Plan card features** — call them "API credits" or product-specific names (e.g., "Samvaad credits", "Studio credits", "Akshar credits"). **Never use "Pool A" or "Pool B" anywhere in copy.**
- **Platform tab callout** — the one-line strip is the only place we explain overflow. Keep it conversational, not architectural.
- **Currency unit** — *1 Sarvam Credit = ₹1 of list-price consumption.* Mention this in FAQ items, not in the visual hierarchy.

The two-pool architecture is real and matters for accounting, but the user-facing surface is **one balance, one currency, used everywhere.**

---

## 10. Design system constraints

Non-negotiable:

- **INR-only on this page.** No USD card. (A separate USD page exists.)
- **All prices visible.** No "Contact sales" except on Enterprise tiers within each ladder, and on the Enterprise deployments tab.
- **Credits never expire.** Should be discoverable in the Header subtitle or FAQ.
- **GST-exclusive prices.** Add a small footnote.
- **Plan card count is fixed:** 3 cards on Indus, 4 cards everywhere else (Platform sub-tabs and APIs).
- **"Most popular" badge** lands on the second tier always — Plus on Indus, Pro on Platform sub-tabs, Builder on APIs.
- **Plan card sequence** reads left-to-right as price ladder: Free → paid (popular) → higher paid → Enterprise/Custom.
- **Content is centred** with generous side gutters in the main content area. Plan cards do not stretch edge-to-edge.

---

## 11. Microcopy and labels

To save back-and-forth, here's the canonical copy for the elements you can't infer from the rate card.

### Page-level

- **Page title:** *Plans & Pricing*
- **Subtitle:** *Top up once. Use credits across the API and any product workspace.*

### Header

- **Credits label:** *API credits*
- **Add credits CTA:** *+ Add credits*

### Sidebar

- **Workspace dropdown trigger label** (when Indus selected): *Indus · Consumer chat app*
- **Pricing nav:** *Pricing* with a small `CURRENT` badge

### Top tabs

- *Indus*
- *Platform*
- *APIs*
- *Enterprise deployments*

### Indus tab

- **Plan card CTAs:**
  - Free → *Get started*
  - Plus → *Get Plus*
  - Pro → *Get Pro*
- **Soft callout:** *Need on-prem, custom, or air-gapped?* / *Indus deployments for enterprise teams, schools, and government users.*

### Platform tab

- **Sub-tab descriptors:**
  - Samvaad — *Voice & chat agents*
  - Studio — *Dubbing & content*
  - Akshar — *Document AI*
- **Credits callout (the only overflow explanation):**
  > *Your API credits work everywhere. When a product's monthly allowance runs out, you can spend API credits inside any workspace — opt-in per request, no surprises.*
- **Plan card CTAs (each sub-tab):** Free → *Get started*, Pro → *Get Pro*, Scale → *Get Scale*, Enterprise → *Contact sales*
- **Dark callout titles (per sub-tab):**
  - Samvaad: *Sovereign deployments. Outcome-based pricing. Air-gapped Samvaad.*
  - Studio: *Private Studio deployments for media houses, schools, and ministries.*
  - Akshar: *Air-gapped Akshar for regulated document workflows.*

### APIs tab

- **Models section header:** *Our most powerful models*
- **Models section subtitle:** *Apache 2.0 weights. Built in India. Trained on 22 Indian languages.*
- **Model card tags:** *Frontier* (105B), *Workhorse* (30B)
- **Plans section header:** *Plans*
- **Plans section subtitle:** *Service tiers and volume discounts apply on top.*
- **Plan card CTAs:** Free → *Sign up*, Builder → *Get Builder*, Scale → *Get Scale*, Enterprise → *Contact sales*
- **Enterprise APIs callout:** *Enterprise APIs* / *Custom rate limits, fine-tuning, dedicated capacity, on-prem licenses, and committed-spend volume discounts. Talk to us about your workload.*
- **Browse our APIs subtitle:** *Cutting-edge models across speech, vision, and language.*
- **Browse our APIs sub-tab labels:** *Speech to Text · Text to Speech · Translation & Language · Vision & Documents · Foundation LLMs*
- **Service tiers section header:** *Service tiers — choose per request*
- **Volume ladder section header:** *Volume discount ladder — applied automatically*

### Enterprise deployments tab

- **Headline (left column):** *Let's build something sovereign together.*
- **Body (left column):** *Our solutions team helps deploy air-gapped, on-prem, and sovereign-grade AI for defence, BFSI, healthcare, and government. Tell us about your project and we'll connect you with the right engineering team.*
- **Form field labels:** *First name*, *Last name*, *Email*, *Role*, *Tell us about your project*
- **Textarea placeholder:** *Please share your objectives and any specific requirements for deployment, performance or scale.*
- **Opt-in label:** *I want to receive updates about new features and products from Sarvam.*
- **Legal text:** *By submitting this form, you agree with our Terms of Service. We process your data to respond to your contact request in accordance with our Privacy Policy.*
- **Submit CTA:** *Submit →*

---

## 12. Open design decisions

Where we want your judgement:

1. **Visual identity.** Sovereign, Indian, modern, technical. Could lean saffron-warm, editorial-magazine, brutalist-technical, soft-modernist, or somewhere we haven't considered. We're open. Avoid generic AI-tool aesthetics (Inter, purple gradients, neon-on-black).
2. **Typography.** A distinctive display face would help differentiate from Mistral and ElevenLabs. A contemporary serif, a sharper grotesque, or a Devanagari-aware pairing are all on the table.
3. **Mobile.** Desktop-first; design at least one responsive frame per tab. Likely the sidebar collapses to a top hamburger, sub-tabs become horizontal scroll, plan cards stack vertically.
4. **Animation and micro-interactions.** Earn their place. Workspace dropdown open/close. Sub-tab transitions. Plan-card hover. Credits pill increment when "Add credits" is clicked.
5. **Empty / loading / error / success states.** Signed-out state on the credits pill. Zero-balance state. Validation errors on the contact form. Submit success. Plan upgrade in flight.
6. **Dark mode.** Out of scope unless you want to propose it.
7. **"Most popular" treatment.** Whatever signals "this is the recommended choice" without screaming. Soft border, top stripe, slight elevation, colour-shifted bg — open.
8. **Plan-card CTA hierarchy.** Should the Enterprise card's *Contact sales* CTA look identical to the *Get Pro* CTA, or visually quieter? Open.

---

## 13. Out of scope

Don't design:

- **Government, defence, and Chanakya pricing** — separate custom-quote sales motion. Surfaced only via the Enterprise deployments contact form.
- **Sarvam Kaze hardware** (smart glasses, May 2026) — separate product surface; hardware unit economics don't fit this remodel.
- **Fine-tuning rate cards, dedicated capacity, on-prem license rates** — listed as Enterprise add-ons in copy, but specific pricing not exposed on this page.
- **Sarvam Dub for live broadcast** — Enterprise contract item.
- **Telephony pass-through** (PSTN, SIP, WhatsApp BSP fees) — billed at cost from integrated providers; mention in Samvaad fine print.
- **USD price card** — separate page surface.
- **Dashboard surfaces** (API keys, usage, limits, billing, docs) — only the sidebar entries are shown; full surfaces not in this engagement.

---

## 14. Deliverables

Final design files should include:

1. **Header** — title, subtitle, credits pill (default state, "topping up" state, zero-balance state), INR pill.
2. **Sidebar** — workspace dropdown (closed + open states), per-workspace nav for all five workspaces, Pricing nav highlighted as current page.
3. **Top tabs** — four tabs (Indus / Platform / APIs / Enterprise deployments) in default and active states.
4. **Indus tab** — full page with all plan cards, soft callout, comparison table, FAQ.
5. **Platform tab** — full page for default sub-tab (Samvaad), plus Studio and Akshar variants. Includes the credits callout strip and Platform-level FAQ.
6. **APIs tab** — full page including all five Browse-our-APIs sub-tab states, service tiers strip, volume ladder, FAQ.
7. **Enterprise deployments tab** — full page. Empty form, mid-fill state, validation errors, success confirmation.
8. **Component library** — plan card (three variants: standard, popular, custom-priced), feature comparison table, dark Enterprise callout, soft callout, model card, API table row, FAQ item, sub-tab switcher (pill style + underline style), workspace dropdown item.
9. **Mobile breakpoints** — at least one responsive frame per tab.

---

## 15. Constraints from prior decisions

A few decisions are settled and shouldn't be revisited without good cause:

- **The workspace switcher is a dropdown**, not vertical buttons in a list. We tried the list first; it felt heavy.
- **The workspace switcher is decoupled from the pricing page tabs.** Selecting a workspace doesn't move the user to that workspace's pricing tab. They are independent navigation systems.
- **"Pool A" / "Pool B" is forbidden in user-facing copy.** Use "API credits" and "{Product} credits" only.
- **The two-pool architecture is explained in one short sentence**, on the Platform tab, in a tinted info strip. No diagrams. No architectural language.
- **Content is horizontally centred** with generous side gutters. Plan cards do not span edge-to-edge of the main content area.
- **Models section sits above the Plans section on the APIs tab.** We considered both orders; this is the right one because developers evaluating Sarvam want to understand model capability before plan economics.
- **Enterprise deployments is its own top-level tab**, not a CTA inside another tab.

---

## 16. Source-of-truth pointers

When in doubt about content:

- **Plan prices, credit amounts, seat counts, RPM limits** → *Sarvam Pricing Structure* §5
- **Service-tier multipliers** → *Sarvam Pricing Structure* §3
- **Volume discount ladder** → *Sarvam Pricing Structure* §4
- **Agent action credits (Samvaad)** → *Sarvam Pricing Structure* §5.3 Samvaad
- **Akshar seat roles** → *Sarvam Pricing Structure* §5.3 Akshar
- **Why we're doing this** → *Sarvam Pricing Strategy: The Product Thinking* §3 (priority order) and §4 (ten implications)
- **Competitive context** → *Sarvam AI Pricing Strategy: A CPO Briefing* (the long context doc)

When in doubt about visual choices: ask, or follow your instinct — the brand expression is yours to interpret.

When in doubt about copy: this brief is the source of truth for microcopy. Anything not specified here can be drafted by you and reviewed.
