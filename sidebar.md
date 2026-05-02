# Sarvam Pricing Page — Sidebar Recommendations by Product Context

## Problem statement

A single dashboard template has been reused across all five product contexts on the pricing page (Indus, Samvaad, Akshar, Studio, APIs), and only the *content panel* was redesigned per product. The sidebar — which is what tells the user "you're now inside Samvaad, not Indus" — never got its own treatment.

For a CPO this matters more than it sounds, because the sidebar is the workspace's load-bearing wall: it's where the actual job-to-be-done lives. Pricing is a leaf node; Agents, Projects, Documents, Voices are the trunk.

This document provides per-product sidebar recommendations grounded in what each product's competitors converge on, plus what Sarvam's own pricing copy promises but doesn't yet surface in the workspace.

---

## 1. Indus — consumer chat

**Comparables:** ChatGPT, Claude.ai, Gemini, Perplexity, Meta AI, Mistral Le Chat

### Today's sidebar
- Home
- Chats
- Voice
- History
- Pricing

### Diagnosis
"Home," "Chats," and "History" are three different names for the same thing — none of the consumer chat apps have a separate Home tab because the chat list *is* the home. Voice as a top-level entry is right (matches ChatGPT's voice mode). There's no notion of Projects, which is now table-stakes (ChatGPT Projects, Claude Projects, Gemini Gems).

### Recommended sidebar

**Top**
- **+ New chat** (primary CTA)
- **Search**

**Main**
- **Recents** — the chronological chat list; this *is* the home view
- **Projects** — organize related chats, attach files, persistent context. Sarvam's Indic-document-grounding play sits here.
- **Voice mode** — sub-500 ms voice session, already a Sarvam differentiator
- **Library** — uploaded PDFs, scanned docs, generated artifacts. Akshar bleeds in here on the consumer side.
- **Discover** — curated Indic content / featured prompts. Leverages the Indic moat that ChatGPT can't match.
- **Sarvam Kaze** — when glasses launch in May 2026, this becomes the device-pairing entry point.

**Bottom**
- Settings
- Upgrade to Plus

### Notes
The Pricing tab inside the workspace is fine to keep, but it should be reframed as "Upgrade" or rolled into Settings. No other consumer chat app has Pricing as a primary nav item, because once you're in the product, you're past consideration.

---

## 2. Samvaad — voice & chat agents platform

**Comparables:** Vapi, Retell AI, Bland AI, ElevenLabs Conversational AI, Yellow.ai, Jio Haptik, Gnani Inya

### Today's sidebar
- Agents
- Flows
- Knowledge base
- Analytics
- Pricing

### Diagnosis
This is the most underbuilt sidebar of the five. A real voice-agent platform has at minimum *agents, phone numbers, call logs, tools, voices, channels*. Sarvam's pricing copy promises telephony (PSTN/SIP), WhatsApp, web, CRM/core-banking integrations, knowledge bases, tool calling — none of which have a home in the nav today. A buyer comparing this to Vapi or Retell would think the product is half-built.

### Recommended sidebar

**Build**
- **Agents** — list with status: Live / Draft / Paused / Archived
- **Workflows** — visual flow builder. Sarvam already calls them Flows; rename for clarity.
- **Voices** — Bulbul voice picker + cloned voices for the org
- **Knowledge bases** — vector stores attached to agents
- **Tools** — function calling, MCP servers, API connectors

**Deploy**
- **Phone numbers** — provisioned PSTN/SIP via Twilio/Plivo/Exotel pass-through
- **Channels** — Web widget, WhatsApp BSP, Voice, Telephony, App SDK
- **Integrations** — Salesforce, HubSpot, Zoho, core-banking adapters, Razorpay

**Operate**
- **Conversations** — call logs with transcripts, playback, scoring
- **Analytics** — CSAT, resolution rate, AHT, escalation, drop-off, language mix
- **Evaluations** — regression tests, replay, prompt versioning

**Bottom**
- Team
- Settings
- Pricing

### Notes
The three-zone grouping (Build / Deploy / Operate) mirrors what Vapi and Retell have converged on — it maps to how a voice-agent owner actually works through the week. A single flat list breaks down past ~6 items.

---

## 3. Akshar — document AI

**Comparables:** Docsumo, Rossum, Nanonets, Hyperscience, Mistral OCR, Mindee, Veryfi, Klippa

### Today's sidebar
- Templates
- Documents
- Review queue
- Settings
- Pricing

### Diagnosis
Reasonable bones, but it's missing the operating layer. A document-AI buyer in BFSI/healthcare/legal expects to see *pipelines* (multi-step workflows), *industry packs* (pre-built extractors), *audit logs* (compliance), and *integrations* (where do documents come from, where do they go). Without these the product reads as "an OCR API with a UI" rather than "a document-intelligence workbench."

### Recommended sidebar

**Workspace**
- **Documents** — Inbox / Processing / Completed / Failed (pipeline view)
- **Pipelines** — multi-step: scan → extract → translate → validate → push to ERP
- **Extractors** — templates / schemas (the current "Templates")
- **Industry packs** — BFSI KYC, insurance claims, legal contracts, healthcare records, GST forms. Sarvam's Indic moat shows up here.

**Review**
- **Review queue** — HITL with the agentic proofreading loop, already mentioned on the pricing page
- **Datasets** — curated examples for fine-tuning custom extractors

**Connect**
- **Integrations** — Google Drive, S3, SharePoint, Tally, SAP, Oracle ERP
- **Webhooks**

**Govern**
- **Audit logs** — who saw what, when. Required for BFSI/regulated; this is the difference between Akshar and a generic OCR.
- **Team / Reviewers**

**Bottom**
- Settings
- Pricing

### Notes
The audit-logs entry alone is worth a deal in regulated procurement. Right now the pricing page promises SSO/SCIM at Scale tier and on-prem at Enterprise — but a buyer evaluating from inside the workspace can't see where governance lives. Surface it.

---

## 4. Studio — dubbing & content

**Comparables:** ElevenLabs Studio, HeyGen, Rask AI, Synthesia, Descript, Murf, Captions

### Today's sidebar
- Projects
- Voices
- Library
- Settings
- Pricing

### Diagnosis
The closest-to-correct of the five, but it conflates two distinct workflows (video dubbing vs. document translation) under one Projects tab. ElevenLabs Studio splits dubbing from voice generation explicitly. Also missing: Sarvam Dub Live (the enterprise broadcast feature), and brand kits (which every org-tier dubbing customer asks for within week one).

### Recommended sidebar

**Create**
- **+ New project** — CTA, chooses dubbing vs. translation in modal
- **Projects** — all projects, filterable by type
- **Video dubbing** — the dubbing-specific workflow surface
- **Document translation** — the doc workflow, currently invisible despite being half the product
- **Sarvam Dub Live** — broadcast; enterprise-only. Gate it visually so it shows the upgrade path.

**Library**
- **Voices** — Bulbul voices + cloned voices
- **Brand kits** — saved presets (voice + style + glossary per org/show). Critical for series content like Mann Ki Baat.
- **Assets** — source media, scripts, glossaries

**Bottom**
- Team
- Settings
- Pricing

### Notes
The Brand kits item is the one most often missed at this stage and is the single biggest retention lever in dubbing tools — once an org has saved its presets, switching cost goes vertical.

---

## 5. APIs — developer platform

**Comparables:** OpenAI Platform, Anthropic Console, Google AI Studio, Mistral La Plateforme, Together AI, Fireworks AI, Replicate, Groq

### Today's sidebar

**Developers**
- API Keys
- Usage
- Limits
- Billing
- Pricing

**Playground**
- Text to Speech
- Vision
- Speech to Text
- Chat
- Translate

### Diagnosis
This is the closest match to a real developer console, but several standard items are missing:

- **Logs** — request-level inspection. Every developer's most-used surface after the playground.
- **Models** — catalog with versions, deprecation calendar. Important since Sarvam has 30B/105B/M with M flagged Legacy.
- **Fine-tuning** — Sarvam's pricing page promises it for Enterprise but there's no entry point.
- **Batches** — Sarvam supports batch STT, should be visible.

The Playground also misses Voice cloning and Transliterate, both of which are first-class Sarvam APIs.

### Recommended sidebar

**Developers**
- API keys
- Usage — dashboard, current Usage tab
- **Logs** — request-level inspection, replay, export
- Rate limits
- Billing
- Pricing

**Playground**
- Chat — LLMs: 105B, 30B, M
- Speech to Text — Saaras
- Text to Speech — Bulbul
- **Voice cloning** — zero-shot cloning playground
- Translate — Sarvam-Translate, Mayura
- **Transliterate**
- Vision / Documents

**Models**
- **Models catalog** — 105B / 30B / M / Edge with version, status, deprecation, benchmarks
- **Fine-tuning** — jobs list, dataset upload. Even if "Contact Sales" gated, show the path.
- **Batches** — batch STT jobs, batch chat completions
- **Files** — uploaded datasets, audio, docs

**Resources**
- Documentation
- Cookbook
- SDKs — Python, JS
- Status

**Bottom**
- Settings

### Notes

Two specific calls:

1. The **Models** group is what tells a developer "this is a serious foundation-model platform" rather than "a wrapper around a few endpoints." Given the Apache-2.0 narrative around Sarvam-30B/105B, surfacing a Models catalog with deprecation calendar is consistent with Sarvam's positioning.
2. **Logs** is the single most-loved feature on the OpenAI dashboard and its absence will be felt within a developer's first hour.

---

## Cross-cutting principles

### Consistency at the chrome
The *bottom* of every sidebar should be identical across all five products: Settings, Documentation, user avatar, and a workspace switcher at the very top. The current screens already do this, which is good — preserve it. The workspace-switcher header (e.g., "Samvaad / Voice & chat agents") is also already there and correct; that's the "you are now inside this product" signal that the rest of the sidebar should match.

### Sidebar vs. settings rule
What gets a sidebar entry vs. what gets a settings sub-page:

> If the user does it more than weekly, sidebar. If monthly or less, settings.

That's why Phone numbers and Voices belong in Samvaad's sidebar (changed often) but SSO config does not (set once). The current dashboards have this slightly inverted — Pricing is in every sidebar but Logs is in none.

### Grouping kicks in past six items
A flat list works up to ~6 entries. Past that, group. Samvaad (Build/Deploy/Operate), Akshar (Workspace/Review/Connect/Govern), and APIs (Developers/Playground/Models/Resources) all need grouping; Indus and Studio can stay flat.

### Pricing as a sidebar item
No comparable consumer or developer product surfaces "Pricing" as a primary nav item inside the workspace. Consider relabelling to "Upgrade" (Indus) or rolling into Billing/Settings (everywhere else). The current treatment reads as "we forgot to put this anywhere else."

---

## Summary table

| Product | Today's count | Recommended count | Key additions | Key reframe |
|---|---|---|---|---|
| Indus | 5 flat | 7 flat | Projects, Library, Discover, Kaze | Collapse Home/Chats/History → Recents |
| Samvaad | 5 flat | 11 grouped (Build/Deploy/Operate) | Phone numbers, Channels, Integrations, Conversations, Tools, Evals | Flows → Workflows |
| Akshar | 5 flat | 10 grouped (Workspace/Review/Connect/Govern) | Pipelines, Industry packs, Datasets, Integrations, Audit logs | Templates → Extractors |
| Studio | 5 flat | 8 flat with sub-grouping | Video dubbing, Document translation, Dub Live, Brand kits, Assets | Split Projects by workflow |
| APIs | 10 in 2 groups | 17 in 4 groups | Logs, Models catalog, Fine-tuning, Batches, Files, Voice cloning, Transliterate, Cookbook, SDKs, Status | Add Models and Resources groups |