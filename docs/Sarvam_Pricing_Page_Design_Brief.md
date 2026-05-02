# Sarvam Pricing Page — Design Brief

*A handover document for the UX designer. Companion to the* Pricing Strategy *and* Pricing Structure *documents and the React wireframe.*

---

## 1. Context in one paragraph

Sarvam is India's sovereign AI platform — a $1.55B-valued company with the most complete Indic-language AI stack in the country. The current pricing page (sarvam.ai/api-pricing and the dashboard pricing page) is a single flat list of rates. The pricing has been remodelled top-down, and now needs a designed surface that matches the new architecture: a unified credit currency, three customer motions (consumer / API / productized SaaS), and a fourth surface for sovereign and on-prem deployments. This brief tells you what to design and what we've already decided. The strategy doc tells you why.

## 2. What you have

**Documents:**
- *Sarvam AI Pricing Strategy: A CPO Briefing on India's Sovereign AI Platform* — the deep-context doc covering the Indian AI market, Sarvam's positioning, and competitor pricing. Skim for context.
- *Sarvam Pricing Strategy: The Product Thinking* — the reasoning chain behind the remodel. Read this first to understand the priority order (developers first, then SMB/enterprise, then consumer flywheel) and the ten implications that force the architecture.
- *Sarvam Pricing Structure* — the full rate card. Source of truth for every plan, every credit amount, every feature.
- *Pricing wireframe (React, single file)* — IA skeleton we've already aligned on. Treat as a structural blueprint, not a visual reference.

**Screenshots:**
- ElevenLabs subscription pages (ElevenCreative / ElevenAgents / ElevenAPI) and the workspace dropdown.
- Mistral pricing page (Plans / API pricing / Enterprise deployments) with the dark Enterprise callout, plan cards, and contact form.
- Current Sarvam dashboard pricing page (for reference on what we're replacing).

## 3. Goal

Design a pricing surface that:

1. **Wins developer trust through radical transparency.** Every price published. Every rate limit published. Every service tier published. No "Contact sales" except on Enterprise tiers and the Enterprise Deployments tab.
2. **Converts SMB and enterprise without friction.** Published Scale tier, automatic volume discounts, productized SaaS plans visible upfront — not behind a form.
3. **Makes the full-stack moat legible.** One credit, one balance, spendable across API and any product workspace. The bundling has to feel obvious at the moment of purchase.
4. **Looks like Sarvam — not Mistral, not ElevenLabs.** We borrow patterns, not aesthetics.

---

## 4. Information architecture

### 4.1 Sidebar (ElevenLabs pattern, decoupled)

The sidebar is the **main app navigation**, persisting across the entire product — not pricing-page-specific.

- **Top:** workspace dropdown trigger (closed and open states required). Five workspaces, each with an icon + name + one-line description:
  - **Indus** — Consumer chat app
  - **Samvaad** — Voice & chat agents
  - **Studio** — Dubbing & content
  - **Akshar** — Document AI
  - **APIs** — Build with our models
- **Below dropdown:** per-workspace nav items that change based on selection (e.g., Indus shows Home / Chats / Voice; Samvaad shows Agents / Flows / Knowledge base / Analytics).
- **Bottom:** "Pricing" nav item highlighted as the current page.

**Critical: the workspace dropdown is decoupled from the pricing page tabs.** Switching workspace in the sidebar changes the sidebar's lower nav, but does not change which pricing tab is showing. This matches ElevenLabs.

### 4.2 Top tabs (Mistral pattern)

Four tabs across the top of the pricing page, with an underline indicator on the active tab:

1. **Indus** — consumer plans (3 tiers)
2. **Platform** — productized SaaS (Samvaad, Studio, Akshar — sub-tabs)
3. **APIs** — model rates and developer plans
4. **Enterprise deployments** — sales contact form

INR-only. **No USD toggle.** A separate USD price page exists for international customers — not surfaced here.

### 4.3 Per-tab structure

Detailed in Section 6 below.

---

## 5. Component inheritance

Borrow directly from these references; restyle in Sarvam's visual language.

| Component | Source | Used on |
|---|---|---|
| Workspace dropdown sidebar | ElevenLabs | Sidebar (entire app, not just pricing) |
| Persistent credits pill (top-right) | ElevenLabs | All pricing tabs |
| Sub-tab navigation for APIs (STT / TTS / Translation / Vision / LLMs) | ElevenLabs | APIs tab — Browse our APIs |
| Plan cards (Free, paid tiers, "Most popular" highlight) | Mistral | Indus, Platform sub-tabs, APIs |
| Feature comparison table | Mistral | Indus, Platform sub-tabs |
| Dark Enterprise callout strip | Mistral | Platform sub-tabs, APIs |
| Model cards (name + tag + one-liner + rates) | Mistral API pricing | APIs tab — Models section |
| Two-column contact form (left pitch, right form) | Mistral Enterprise deployments | Enterprise deployments tab |
| FAQ accordion (per-tab, not globally shared) | Both | All four tabs |

---

## 6. Tab-by-tab specifications

### 6.1 Indus tab

**Audience:** Indic content creators, students, individual professionals (Archetype A in the strategy doc).

**Layout, top to bottom:**

1. **Three plan cards** in a row: Free (₹0), Plus (₹399/mo), Pro (₹1,499/mo). Plus is the "Most popular" tier with a highlighted card treatment.
2. **Soft callout strip** ("Need on-prem, custom, or air-gapped?"). This is a low-intensity dashed-border strip — not the dark Enterprise callout. Indus consumers don't usually need on-prem; this is a quiet exit ramp for the few who do.
3. **Compare plans** — full feature comparison table across all three tiers.
4. **FAQ** — Indus-specific consumer questions: language coverage, voice cloning, credit rollover, commercial-use license, etc.

**Plan card content:** see Section 5.1 of *Sarvam Pricing Structure*. Each card lists credit allowance as **"₹100 API credits/month"** (never "Pool A").

### 6.2 Platform tab

**Audience:** SMBs and enterprise teams adopting AI in operations (Archetypes C and D).

**Layout, top to bottom:**

1. **Sub-tab pill switcher:** Samvaad | Studio | Akshar. Pill-style, in a soft background, with a one-liner descriptor under each label (e.g., "Voice & chat agents").
2. **Per-sub-tab content** (described below).
3. **One-line credits callout** appearing at the bottom of every Platform sub-tab:
   > *Your API credits work everywhere. When a product's monthly allowance runs out, you can spend API credits inside any workspace — opt-in per request, no surprises.*
   Single info strip, amber-tinted background, info icon. **This is the only place we explain overflow.** No diagrams.
4. **FAQ** — Platform-specific procurement questions: workspace credits, overflow behaviour, seats, outcome-based pricing.

#### Samvaad sub-tab

1. **Four plan cards:** Free, Pro (₹9,999/mo, "Most popular"), Scale (₹99,999/mo), Enterprise (Custom).
2. **Dark Enterprise callout:** *"Sovereign deployments. Outcome-based pricing. Air-gapped Samvaad."*
3. **Two-column section:**
   - *Left:* Agent action pricing table — Classic answer / Generative answer / Tool call / KB-grounded / Workflow trigger, with credit cost per action.
   - *Right:* "What's included" comparison table across the four tiers (Builders, Channels, Telephony, On-prem, Outcome-based SKUs).

#### Studio sub-tab

1. **Four plan cards:** Free, Pro (₹4,999/mo, "Most popular"), Scale (₹49,999/mo), Enterprise (Custom).
2. **Dark Enterprise callout:** *"Private Studio deployments for media houses, schools, and ministries."*
3. **"What's included"** comparison table (Builder seats, Watermark, Brand kit, Custom voices, Studio API access, SSO, On-prem option).

#### Akshar sub-tab

1. **Four plan cards:** Free, Pro (₹9,999/mo, "Most popular"), Scale (₹49,999/mo), Enterprise (Custom).
2. **Dark Enterprise callout:** *"Air-gapped Akshar for regulated document workflows."*
3. **Two-column section:**
   - *Left:* **Seat roles table** — Viewer / Reviewer / Builder / Admin. Akshar is the only product with a four-role structure because document review is genuinely a separate human from template creation. Each role gets a one-line description and a use-case hint.
   - *Right:* "What's included" comparison (Builders, Reviewers, Industry templates, Custom extractors, On-prem option).

### 6.3 APIs tab

**Audience:** developers and technical buyers (Archetype B, with some E).

**Layout, top to bottom:**

1. **Our most powerful models** — Mistral-style cards for Sarvam-105B and Sarvam-30B. Each card has:
   - Name + a small tag ("Frontier" / "Workhorse")
   - One-line description
   - Three rate columns (Input / Cached input / Output) in monospaced numerals
   - "Open model details →" link
2. **Plans** (placed *below* Models — this was a deliberate ordering decision). Four cards: Free, Builder (₹10K/mo, "Most popular"), Scale (₹50K/mo), Enterprise (Custom). Each card shows: monthly credits, RPM rate limit, support tier, and effective discount on list rate.
3. **Dark "Enterprise APIs" callout:** *"Custom rate limits, fine-tuning, dedicated capacity, on-prem licenses."*
4. **Browse our APIs** — sub-tabbed table section with five sub-tabs (ElevenLabs pattern):
   - Speech to Text — Saaras V3 with diarization / translate variants
   - Text to Speech — Bulbul V3, V2 (legacy), Voice Cloning training, Voice Cloning synthesis
   - Translation & Language — Mayura, Sarvam-Translate, Transliterate, Language ID
   - Vision & Documents — Sarvam Vision
   - Foundation LLMs — Sarvam-105B, Sarvam-30B, Sarvam-M (legacy)
   - Each sub-tab renders a four-column table: *Model / endpoint · Type · What it does · Price.*
5. **Service tiers** — four-card horizontal strip showing Batch (0.5×), Flex (0.5×), Standard (1×), Priority (1.8×). Each card: tier name, multiplier in mono numerals, SLA, primary use case.
6. **Volume discount ladder** — list of four commitment bands (₹10L–₹50L → 10%, ₹50L–₹2Cr → 20%, ₹2Cr–₹10Cr → 30%, ₹10Cr+ → custom).
7. **FAQ** — developer-specific: cached input pricing, mixing service tiers, rate limits per API, credit expiry, overflow into product workspaces.

### 6.4 Enterprise deployments tab

**Audience:** government, defence, regulated finance, large enterprises with sovereignty needs (Archetype D, with some F).

**Layout (Mistral two-column card):**

- **Left column** — white background with subtle grid pattern overlay:
  - Small Sarvam mark (could be the स glyph or a logo treatment)
  - Headline: *"Let's build something sovereign together."*
  - Body paragraph about air-gapped, on-prem, and sovereign-grade AI for defence, BFSI, healthcare, and government
  - Bulleted capability list:
    - Air-gapped Chanakya for defence and regulated finance
    - On-prem Sarvam-105B with custom fine-tuning
    - Dedicated GPU capacity through Yotta
    - Industry templates and custom extractors for Akshar
    - Outcome-based pricing for Samvaad
- **Right column** — subtle warm/amber tint background:
  - Form fields: First name + Last name (two-column row), Email, Role, "Tell us about your project" textarea (with 0/500 counter), opt-in checkbox, legal text, Submit button.

Below the card: Enterprise-specific FAQ — deployment models supported, fine-tuning availability, engagement model (forward-deployed engineers), typical timelines, eligibility for government and defence work.

---

## 7. The credit system — language and visual rules

This is the most opinionated part of the brief. The architecture has two pools (API consumption + workspace-bound) with one-way overflow from API → workspace. **Do not surface this complexity in the design.**

- **Top-right credits pill** — always reads `API credits · ₹X · + Add credits`. One number, always. Never contextual switching, never a second pool exposed in the pill.
- **Plan card features** — call them "API credits" or product-specific names (e.g., "Samvaad credits", "Studio credits", "Akshar credits"). **Never use "Pool A" or "Pool B" anywhere in copy.**
- **Platform tab callout** — the one-line strip is the only place we explain overflow. Keep it conversational, not architectural.
- **Currency unit** — *1 Sarvam Credit = ₹1 of list-price consumption.* Mention this in FAQ items, not in the visual hierarchy.

The two-pool architecture is real and matters for accounting, but the user-facing surface is **one balance, one currency, used everywhere.**

---

## 8. Design system constraints

Non-negotiable:

- **INR-only on this page.** No USD card. (A separate USD page exists.)
- **All prices visible.** No "Contact sales" except on Enterprise tiers within each ladder, and on the Enterprise deployments tab.
- **Credits never expire.** Should be discoverable in the Header subtitle or FAQ.
- **GST-exclusive prices.** Add a small footnote.
- **Plan card count is fixed:** 3 cards on Indus, 4 cards everywhere else (Platform sub-tabs and APIs).
- **"Most popular" badge** lands on the second tier always — Plus on Indus, Pro on Platform sub-tabs, Builder on APIs.
- **Plan card sequence** reads left-to-right as price ladder: Free → paid (popular) → higher paid → Enterprise/Custom.

---

## 9. Open design decisions

Where we want your judgement:

1. **Visual identity.** The wireframe uses a warm amber accent on stone-grey neutrals with DM Sans + JetBrains Mono. Final design should reflect Sarvam's brand — sovereign, Indian, modern, technical. Could lean more saffron, more editorial-magazine, more brutalist-technical, more soft-modernist. We're open.
2. **Typography.** A distinctive display face would help differentiate from Mistral and ElevenLabs. A contemporary serif, a sharper grotesque, or even a Devanagari-aware pairing would all be on the table.
3. **Mobile.** The wireframe is desktop-only. Mobile is yours — likely the sidebar collapses to a top hamburger, sub-tabs become horizontal scroll, plan cards stack vertically. Design at least one responsive frame per tab.
4. **Animation and micro-interactions.** Earn their place. Workspace dropdown open/close. Sub-tab transitions. Hover states on plan cards. Credits pill increment when "Add credits" is clicked.
5. **Empty / loading / error / success states.** Signed-out state on the credits pill. Validation errors on the contact form. Submit success. Plan upgrade in flight.
6. **Dark mode.** Out of scope unless you want to propose it.
7. **"Most popular" treatment.** Currently a soft amber border + a small pill badge. Open to alternatives — a top stripe, a subtle elevation, a colour-shifted background.
8. **Credit-pill behaviour at zero.** What does "API credits · ₹0" look like? How urgent should the prompt to top up feel?

---

## 10. Out of scope

Don't design:

- **Government, defence, and Chanakya pricing** — separate custom-quote sales motion. Surfaced only via the Enterprise deployments contact form.
- **Sarvam Kaze hardware** (smart glasses, May 2026) — separate product surface; hardware unit economics don't fit this remodel.
- **Fine-tuning rate cards, dedicated capacity, on-prem license rates** — listed as Enterprise add-ons in copy, but specific pricing not exposed on this page.
- **Sarvam Dub for live broadcast** — Enterprise contract item.
- **Telephony pass-through** (PSTN, SIP, WhatsApp BSP fees) — billed at cost from integrated providers; mention in Samvaad fine print.
- **USD price card** — separate page surface.
- **Dashboard surfaces** (API keys, usage, limits, billing, docs) — sidebar sub-nav items shown on the wireframe are stubs, not part of this engagement.

---

## 11. Deliverables

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

## 12. Lessons from the wireframe iterations

A few things that came up in review and should not be repeated:

- The workspace switcher must be a **dropdown**, not vertical buttons in a list. (We tried the list first; it felt heavy.)
- The workspace switcher must be **decoupled** from the pricing page tabs. Selecting a workspace doesn't move the user to that workspace's pricing tab.
- "Pool A" / "Pool B" terminology is **forbidden in user-facing copy**. Use "API credits" and "{Product} credits" instead.
- The two-pool architecture should be explained in **one short sentence**, not a diagram. Keep it on the Platform tab, not everywhere.
- Content needs **horizontal centring with generous side gutters**. Don't let plan cards stretch edge-to-edge of the main area.

---

## 13. Source-of-truth pointers

When in doubt about content:

- **Plan prices, credit amounts, seat counts, RPM limits** → *Sarvam Pricing Structure* §5
- **Service-tier multipliers** → *Sarvam Pricing Structure* §3
- **Volume discount ladder** → *Sarvam Pricing Structure* §4
- **Agent action credits (Samvaad)** → *Sarvam Pricing Structure* §5.3 Samvaad
- **Akshar seat roles** → *Sarvam Pricing Structure* §5.3 Akshar
- **Why we're doing this** → *Sarvam Pricing Strategy: The Product Thinking* §3 (priority order) and §4 (ten implications)
- **Competitive context** → *Sarvam AI Pricing Strategy: A CPO Briefing* (the long context doc)

When in doubt about IA: refer to the wireframe.

When in doubt about visual choices: ask, or follow your instinct — the brand is yours to interpret.
