# Sarvam AI Pricing Strategy: The Product Thinking

*A first-principles reasoning chain for the 2026 pricing remodel*

---

## Why this document exists

This is a record of the thinking that produced Sarvam's pricing remodel — not just what was decided, but the reasoning chain that forced each decision, the options that were considered and rejected, and the uncertainties that remain. It is meant to be readable two ways: forward, as the story of how we got here; and as a reference, so any later challenge to a pricing decision can be traced back to the assumption it rests on.

The companion document, *Sarvam Pricing Structure*, contains the actual rate card. This document is the rationale.

---

## The starting question

Sarvam in May 2026 has remarkable structural assets — a $1.55B valuation, ~$370M of cumulative funding, the largest single H100 allocation in India, an open-weights flywheel under Apache 2.0, and the most complete Indic-language AI stack in the country. The pricing surface, by contrast, is a mosaic: promotional zero-rates next to real per-token tables, INR list prices, gated enterprise contracts, channel-partner SKUs at 5–7× spreads, ₹100/₹1,000 free-credit contradictions across the marketing site and the docs, and three productized SaaS products (Studio, Samvaad, Akshar) with no published pricing at all. It was assembled reactively across fourteen product launches in fourteen days. It is not designed.

If we had complete freedom, how should it be designed?

The temptation is to start with patterns — borrow from OpenAI's tier ladder, ElevenLabs' character pricing, Mistral's approach to chat-plus-API. That's the wrong starting point. Pattern-matching produces a pricing page that looks like everyone else's. A first-principles thinker starts with users, archetypes, the landscape, the goal, and only then evaluates options. This document does that.

The scope is deliberately narrowed: government, defence, and the Chanakya on-prem vertical are excluded. Those remain a separate custom-quote motion. Everything here concerns the consumer surface (Indus), the developer/SMB self-serve API, and the productized enterprise SaaS layer (Studio, Samvaad, Akshar).

---

## Step 1 — Who actually shows up to Sarvam, and what for?

Before naming archetypes, the right question is: what does someone come to Sarvam for that they couldn't get elsewhere? The answer narrows the user set sharply.

If a buyer wants the best general-purpose LLM, they don't come to Sarvam — they go to Anthropic or OpenAI. If they want the cheapest English STT, they go to AssemblyAI. If they want the most expressive English TTS, they go to ElevenLabs. The people who *show up* to Sarvam are self-selecting on one of four reasons:

**One — they have an Indic-language workload that other vendors handle poorly.** Code-mixed Hinglish, Tamil telephony, Marathi document OCR, Bengali voice agents. This is the deepest moat because it draws on a decade of AI4Bharat / IndicNLP groundwork that no global player has replicated.

**Two — they have a sovereignty or data-residency requirement.** RBI, SEBI, IRDAI, healthcare, government-adjacent. Data physically cannot leave India, and US-headquartered vendors carry inherent contract risk under regulations they don't control.

**Three — they are cost-constrained and India-priced.** INR-native billing, GST invoicing, no FX exposure, prices that match Indian unit economics. A 50-person Mumbai SMB that bills its customers in rupees cannot pay vendor invoices in dollars without absorbing currency risk.

**Four — they want a full-stack single-vendor relationship for an Indic application.** They don't want to glue Deepgram + ElevenLabs + DeepL + GPT together; they want one contract, one bill, one support channel, one SLA.

Most real Sarvam customers come for *combinations* of these. An Indian fintech wants 2+3+4. A defence contractor wants 1+2. A regional content creator wants 1+3. A global BPO with India operations wants 1+4.

This is the first discipline the pricing must respect: **price for the combinations, not for the capabilities in isolation.** A pricing model that monetises each capability separately leaves the structural advantage on the floor. A pricing model that bundles natively, in a single visible currency, makes the moat legible at the moment of purchase.

---

## Step 2 — The archetypes

Six user archetypes exist in the 2026 Indic AI market. Not all matter equally to Sarvam.

**Archetype A — the Indic content creator or individual professional.** A YouTuber dubbing English content into five Indian languages. A regional-language journalist. A teacher building Hindi or Tamil teaching aids. A product manager drafting Indic copy. Hundreds of thousands of potential users. ₹0–₹2,000 a month each. Low individual willingness to pay, but enormous top-of-funnel value.

**Archetype B — the Indic-app developer or small startup.** A team building a Hindi voice agent for delivery riders. A Bengali news app adding TTS. A regional fintech adding voice-based loan applications. They use the API directly. Thousands of accounts. ₹5,000–₹2,00,000 a month. Moderate willingness to pay, but acutely price-sensitive against the alternative of self-hosting open-source Whisper plus IndicTrans2 plus an Apache-2.0 Sarvam-30B.

**Archetype C — the Indian SMB adopting AI in operations.** A 50-person insurance broker automating claims documents. A regional clinic chain wanting Tamil voice intake. A D2C brand wanting Hindi customer-support agents. They don't write code; they need a product. Tens of thousands of potential accounts. ₹50,000–₹5,00,000 a month. High willingness to pay if there is a clear ROI story; low if they have to integrate.

**Archetype D — the Indian enterprise or regulated buyer.** Tata Capital, SBI Life, large hospitals, telecom operators, large publishers. They have sovereignty needs, multi-language workloads at scale, and procurement processes. Hundreds of named accounts. ₹50L–₹50Cr a year. Very high willingness to pay for the right deployment, but they want everything custom.

**Archetype E — the IT services or system-integrator partner reselling Sarvam.** Infosys, TCS, HCL, Tech Mahindra, plus mid-market SIs and Yotta. They embed Sarvam in client deliverables. Dozens of partner relationships. Massive multipliers via channel. Willingness to pay is determined by margin retention, not list price.

**Archetype F — the global buyer wanting Indic capability.** A US BPO with India operations. A UK content platform expanding to South Asia. A Gulf telco serving expat workers. Small in count, high in value. They will pay USD for India-quality Indic.

Six archetypes, but the question that matters is: which does Sarvam need to optimise for?

---

## Step 3 — The goal hierarchy, sharpened

Adoption and PLG are means, not ends. Sarvam has a $1.55B valuation against ₹29 crore of FY25 revenue. The investor thesis is that Sarvam captures the Indian AI market before it consolidates. The goal of pricing in 2026 is therefore not just "adoption" — it is **earning the right to be the consolidator**. From that, four sub-goals fall out, in this priority order:

**One — win Archetype B (developers) within 12–18 months.** Developers carry brand, set standards, write tutorials, get hired into enterprises and bring their tooling preferences with them. If Sarvam loses the developer mindshare to Krutrim or BharatGen Param2, or to global APIs that have become Indic-capable, no amount of enterprise sales recovers the position. This is the must-win.

**Two — convert that developer mindshare into Archetype C (SMB) and Archetype D (enterprise) revenue at high net retention.** The valuation math demands ₹500Cr+ revenue in two to three years. That comes from SMB and enterprise, not from developer credits. PLG only matters if it converts.

**Three — use Archetype A (consumer) as a brand-and-data flywheel that powers the first two.** Indus is not a profit centre. It is a free school for the next million Indian developers and a moat against ChatGPT becoming the default Indic assistant.

**Four — keep Archetype E (channels) honest** through partner pricing discipline, and treat **Archetype F (global)** as opportunistic upside priced on a separate surface, not as a design constraint on the primary INR motion.

This priority order is the most important output of the first-principles exercise. Once accepted, a great deal of the pricing architecture becomes forced rather than chosen.

---

## Step 4 — Ten implications that follow from the priority order

Working through what the priority order demands, ten implications emerge. They are not patterns from the market; they are consequences of the goal.

**Implication 1 — pricing has to be radically transparent.** Developers are the most pricing-sceptical buyers in software. They detect gating instantly. Anything not on a public page is dead to them. This forces every price published, every rate limit published, every service tier published, no "contact sales" except for genuinely custom deployments. OpenAI and Anthropic both lost developer trust briefly when they obscured pricing; both course-corrected hard.

**Implication 2 — pricing has to be INR-first, not INR-native-with-USD-bolted-on.** Indian developers hate seeing dollar-pegged prices that move with FX. They want stable INR they can budget in. The INR rate card must be primary. A separate USD price card for global Archetype F customers can be priced *independently* — not as conversion — capturing margin uplift on USD without leaking back to INR customers.

**Implication 3 — the free tier has to be enough for a real prototype.** ₹100 isn't. ₹1,000 isn't really. The honest test: can a developer build a working Hindi voice-agent demo end-to-end (some Saaras, some 30B, some Bulbul) without hitting the credit wall? That probably costs ₹50–₹200 in actual usage. The free tier needs at least ten times that headroom — somewhere between ₹2,000 and ₹5,000. Generous by global standards, but cheap relative to the cost of *not* winning developer mindshare.

**Implication 4 — pricing has to make the full-stack the obviously cheaper choice.** If a developer can save money by gluing Whisper, Llama, and Coqui together, Sarvam loses. The full-stack must be priced such that buying one product makes buying the second product almost free, which makes buying the third nearly costless. This is the bundling logic, and a unified credit currency is the cleanest expression of it — but the bundling has to actually exist in the credit math, not only in marketing.

**Implication 5 — Indic-specific premium products can be priced at premium.** Bulbul, Saaras, Akshar — anyone who chose Sarvam for these chose it because nothing else does it as well in Indic. They will pay. This is where margin lives, and it is a separate logic from the LLM tokens.

**Implication 6 — LLM tokens are a defensive line, not a profit centre.** Sarvam-30B and Sarvam-105B are Apache 2.0. AWS Bedrock, Together, Fireworks, OpenRouter can all host them. Sarvam's pricing on its own LLM tokens has to be aggressively close to the floor — otherwise sophisticated customers self-host. This pushes toward 90% cache discounts, a Batch SKU, generous bundle inclusions on LLM tokens specifically.

**Implication 7 — enterprise needs to feel like a natural extension, not a different product.** The conversion from developer-on-Scale to SMB-on-Studio-Pro to enterprise-on-Akshar-Enterprise should feel like climbing one ladder, not switching products. This forces a single credit currency, single account, single billing, with seats and committed-spend layered on as additions, not replacements.

**Implication 8 — channel pricing must not undercut direct.** The Yotta inversion (₹15 vs ₹30 on Bulbul, ₹10 vs ₹1.50 on Vision) breaks Implication 1 directly. Either direct list is the floor and channels mark up, or channel SKUs are bundled-different-products — not arbitrage on the same SKU. The current state is unmanaged.

**Implication 9 — sovereignty / on-prem is a separate pricing logic.** A buyer needing air-gapped deployment is not price-sensitive in the way a developer is. Custom-quote is fine here, but the architecture (credit currency, seat structure, SKU shape) should be the same so deployment becomes a config, not a pricing rebuild. This is Chanakya territory and out of remodel scope, but the consumer/enterprise architecture must be designed to extend into it cleanly.

**Implication 10 — outcome-based agent pricing is a developer-mindshare *and* enterprise-conversion tool.** A developer evaluating Sarvam against Vapi or Retell on a voice-agent build is comparing per-minute costs. An enterprise buying voice agents thinks in cost-per-resolved-call. If Sarvam is the only vendor that can offer both, it wins both audiences with the same product. This is defensible because Sarvam owns the full stack and can measure outcomes credibly. Vapi and Retell can't — they don't own the speech layer.

These ten implications do most of the architectural work. Almost every design choice in the pricing structure can be traced back to one or more of them.

---

## Step 5 — The four high-level options, evaluated

Before locking the architecture, four genuine options exist at the highest level. Each maps to a different archetype best:

**Option 1 — pure usage-based, à la OpenAI / Anthropic API-first.** Everything per-unit consumption. No seats, no subscriptions for products. Indus is a marketing surface. *Wins developers; weak for SMB and enterprise procurement.*

**Option 2 — pure subscription, à la ElevenLabs / ChatGPT-style.** Tiered plans with credit allowances. Simple, predictable revenue. *Wins SMB; weak for high-volume API customers who'd rather pay per-unit at scale.*

**Option 3 — hybrid, usage plus subscription bundled, à la Mistral La Plateforme + Le Chat.** Subscription tiers include a credit allowance and rate limits; overage is per-unit; productized SaaS adds seats. *Most flexible; spans developer to enterprise; matches Mistral's structure most closely.*

**Option 4 — outcome- or value-based.** Charge for results, not consumption. Per resolved call, per processed claim, per booked appointment. *Maximally aligned with customer value; operationally hard; unfamiliar to developers; requires deep instrumentation.*

Given the priority order (developers must-win first, then SMB and enterprise conversion), Option 3 with Option 4 as an enterprise-only overlay is the answer. Option 1 alone abandons the SMB/enterprise conversion that the valuation demands. Option 2 alone alienates the developer base that powers everything downstream. Option 4 alone is operationally premature. Option 3 is structurally identical to Mistral's model — chat consumer + API plus subscription tiers + enterprise — which is the closest analogue in the global market to Sarvam's actual product spread.

The choice of Option 3 with Option 4 overlay is the highest-leverage decision in the entire remodel. Everything below falls out of it.

---

## Step 6 — The architectural decisions, justified

What follows are the structural pieces of the architecture and the implications that force each.

### A two-pool credit architecture, ₹1 = 1 Sarvam Credit

Forced by Implications 4, 7, 1, and 8. The full-stack moat only matters if it is legible at the moment of purchase. A customer who has to do separate math for tokens, audio-seconds, characters, and pages will never feel the bundling — they will evaluate Sarvam product-by-product against point competitors and the structural advantage is lost. The unit must be a single rupee-pegged credit ("1 Sarvam Credit = ₹1 of list-price consumption") because Implication 1 forces transparency over Snowflake-style opaque normalisation.

But a *single fungible pool* across all credit sources creates a structural problem the original architecture missed: it lets productized SaaS plan credits be redirected to raw API workloads, eroding the value of seats and workspace and turning Studio/Samvaad/Akshar into credit-reseller front-ends rather than SaaS products. It also creates a Free-tier stacking arbitrage where a single account can harvest free credits from every product simultaneously and aggregate them into Pool A.

The architecture is therefore **one currency, two pools**:

- **Pool A — the API consumption pool.** Funded by API plan credits (Free, Builder, Scale, Enterprise) and Indus consumer plan credits. Spendable on raw API consumption.
- **Pool B — productized SaaS pools.** Each of Studio, Samvaad, and Akshar carries its own monthly allowance scoped to that product's workspace. Credits don't cross between products and don't flow back to Pool A.

Pool A → product overflow is allowed (opt-in per request, billed against Pool A). The reverse is not. This preserves the unified-currency narrative ("everything is denominated in Sarvam Credits at ₹1 = ₹1 of consumption") while letting each productized SaaS be priced as a SaaS bundle rather than as a credit reseller.

Already-purchased credits hold their face value when rates change (₹1 = ₹1 of consumption at current rates). Customers should understand this preserves rupee value, not purchasing-power against any specific SKU — a real distinction the original architecture didn't articulate clearly enough.

### Cache discount at 90%, matching the global norm

Forced by Implication 6. Sarvam's open-weight LLM tokens can be hosted by Bedrock, Together, Fireworks. Anthropic offers cache reads at 10% of full input. OpenAI GPT-5.x offers 90% off cached. DeepSeek matches. Sarvam's current 37.5% cached discount is not a tweak — it is structurally indefensible against self-hosting. Cache reads must drop to 10% of full input across both Sarvam-30B and Sarvam-105B.

### Service-tier multipliers, not separate plans

Forced by Implications 1, 5, and 6. Same model, four ways to consume: Batch (0.5×, 24-hour SLA, async), Flex (0.5×, best-effort), Standard (1.0×, default), Priority (1.8×, guaranteed capacity). One mechanism delivers three things — the aggressive Batch SKU that Implication 6 demands, the Priority pricing on Indic-premium real-time that Implication 5 enables, and the developer-expected service-tier ladder that Bedrock, Vertex, and OpenAI have all converged on (Implication 1).

### Three published self-serve plans plus Enterprise

Forced by Implications 2, 3, and 7. Plans are wrappers around the credit currency. They exist because developers (Implication 1) want predictability and rate-limit headroom, and because Implication 7 says the conversion from developer to enterprise should feel like climbing one ladder.

Free → Builder → Scale → Enterprise. ₹2,000 free credits on signup (Implication 3). ₹10,000 and ₹50,000 monthly Builder and Scale plans with bonus credits and rate-limit increases. Enterprise as committed-spend (₹10L+) with automatic published volume discounts. Three public tiers is cleaner than four; the gap from Scale to Enterprise is bridged by *automatic* volume discounts, not by an additional Scale+ tier — which would be sales-friction dressed up as pricing.

A deliberate departure from OpenAI: Free-tier users get all four service tiers. Rate limits are the gate, not service-tier access. Justified by Implication 1 — every gate erodes developer trust.

### Volume tier ladder, published and automatic

Forced by Implications 1 and 7. Above the Scale plan, customers buying ₹10L+ in committed credits get an automatic, published volume discount ladder: 10%, 20%, 30%, custom. Negotiation is reserved for SLA, deployment model, custom rate limits, dedicated capacity — not for the discount itself. This is what Snowflake, Databricks, and Datadog do. It removes procurement-cycle friction at the developer-to-enterprise conversion point.

### Productized SaaS as workspace plus generous in-product credit allowance

Forced by Implications 4 and 7, refined by the two-pool architecture. Studio, Samvaad, and Akshar are workflow products with their own credit allowances scoped to each workspace (Pool B). The seat unlocks the workspace; the in-product credit allowance unlocks consumption inside that workspace. Same architecture, three product expressions. Each gets a Free / Pro / Scale / Enterprise ladder.

The credit allowances are deliberately sized at roughly **2× the plan price** — a customer paying ₹4,999 for Studio Pro receives ₹10,000 worth of in-workspace consumption. The reason is operational: pool isolation only works cleanly if most customers never overflow. Overflow is fine as a safety valve, but it should not be the modal experience. Sizing at 2× targets ~80% of customers staying inside their workspace allowance month-to-month. Customers who consistently overflow are nudged toward the next tier.

This is more generous than the previous structure (1× the plan price) and creates a real value claim: "Studio Pro gives you double the credits versus buying them directly through the API — because we want you to focus on creating, not metering." It also defends product margin by ensuring that customers buying Studio buy it for the workspace, not as a circuitous route to discounted API credits — which the two-pool architecture makes structurally impossible anyway.

### Role-based seats, but only where the product needs them

A revision from earlier thinking. The honest audit:

- **Akshar** clearly needs roles. There is a real Reviewer role (the proofreader) that is a different human from the Builder. Roles work.
- **Samvaad** weakly needs roles. There is an agent-supervisor role, but most deployments will have one ops person who is both Builder and Reviewer. Four roles are over-engineered for most customers.
- **Studio** debatably needs roles. Content review workflows exist, but smaller teams don't separate them.

The right answer is to start with two seats — **Builder** (anyone who creates) and **Viewer** (anyone who consumes or audits) — and add Reviewer / Admin as Akshar-specific roles when the product genuinely needs them. Don't force a four-role structure across three products that don't all need it.

### Outcome-based pricing for Samvaad enterprise specifically

Forced by Implication 10. Per-action pricing is the published default for Samvaad agents. For Enterprise contracts only, outcome-based is offered as an alternative the customer can choose at deployment — ₹X per resolved query, ₹Y per qualified lead, ₹Z per completed transaction, priced at roughly 5–10× the per-action equivalent.

This is sales-led at first, not self-serve. Outcome definitions need to be negotiated per customer (what counts as "resolved"?), and 6–12 months of data are needed before publishing list prices. The path is: launch as Enterprise-only custom; publish list pricing once 5–10 reference customers per outcome SKU exist.

### Indus as the consumer flywheel, with credit pass-through priced at-or-above the API floor

Forced by Implication 3 (consumer flywheel) and Implication 4 (full-stack legibility). Indus Free / Plus / Pro at ₹0 / ₹399 / ₹1,499 a month, each with a credit allowance that flows into Pool A and is spendable through the same backend products developers use — translation, document scan, dubbing, voice cloning, transcription. The credit pass-through is the design choice that makes Indus *Sarvam's* consumer app rather than a generic chatbot. ChatGPT cannot do this; nor can Gemini.

The earlier draft of this architecture sized Indus credits at **₹500/month for Plus and ₹2,000/month for Pro**, which created a problem: the implied per-credit cash rate (₹0.80 and ₹0.75 respectively) was *cheaper* than the cheapest API plan (Scale at ₹0.87 per credit). A developer could subscribe to Indus Pro at ₹1,499 to harvest ₹2,000 of API-spendable credits — a 25% discount on credits compared to the cheapest API tier. The arbitrage was unintended but real.

Two fixes were considered. The first was a 50% rate-cap on Indus-sourced credits (only half of Indus credits could be spent on the API outside the Indus app). It worked but was operationally messy: it required tracking credit provenance through the consumption pipeline, contradicted the fungibility claim, and required a footnote on the pricing page that nobody wants to read.

The second — the one adopted — is to **simply size the Indus credit allowance below the arbitrage threshold**. Indus Plus drops to ₹350/month (implied ₹1.14/credit) and Indus Pro to ₹1,300/month (implied ₹1.15/credit). Both are now above the API plan floor. The credits are genuinely fungible because they were genuinely priced at-or-above floor when sold. No special enforcement code, no provenance tracking, no footnote.

The consumer pitch is sharpened, not weakened, by this change. The argument shifts from "Indus is a way to get cheaper API credits" (which the original sizing accidentally implied) to "Indus is the only consumer AI app that lets you dub a video, scan a document, transcribe a meeting, or clone your voice — all on one bill, no separate developer account needed." That's a better marketing claim than a credit discount.

**Voice cloning is included as a tier feature, not credit-deducted.** Indus Pro subscribers get up to 3 custom voices as a Pro perk; synthesis using those voices still consumes Bulbul V3 credits at standard rates. This matches how ChatGPT Plus handles GPT-4 access and how Adobe Creative Cloud handles font access — perks of the tier, not metered consumption.

Free-tier abuse (someone scripting credit-burn across many phone signups) is mitigated by per-account daily caps and phone-number-based rate limits. Standard fraud controls.

### Channel pricing reset

Forced by Implication 8. Direct list price is the floor — no channel can sell the same SKU below list. Channel pricing is bundled-different-products: Yotta sells "Yotta Voice Stack" or "Yotta Document Stack," bundled with Yotta GPU compute, integration services, and support, at *higher* than Sarvam list, with Yotta capturing integration margin. Published partner discount schedule (e.g., 15% off list at qualifying volumes) for the channel discipline.

### USD price card as a separate surface

Forced by Implication 2. For Archetype F (global buyers wanting Indic capability), publish a USD rate card priced *independently* — roughly 20–30% margin uplift on USD versus INR-equivalent. Defensible because they are choosing Sarvam for irreplaceable Indic capability and aren't price-comparing to Indian developers. Decoupled surfaces protect INR economics from FX volatility and capture global willingness-to-pay separately.

---

## The honest uncertainties

The implications did not fully force every answer. Six places where judgement filled the gap, with the confidence level honest:

**The ₹2,000 free tier might still be wrong in either direction.** Too generous and IndiaAI subsidy burns on tire-kickers. Too stingy and Sarvam loses to BharatGen Param2 (literally free). ~70% confidence ₹2,000 is right. Worth checking against actual prototype-cost data once the metering is live.

**The Scale+ tier (₹2.5L) was considered and dropped.** Argument for: Datadog, Snowflake, and Databricks all have a self-serve enterprise tier between SMB and custom. Argument against: the gap from ₹50K to ₹10L+ is bridged by automatic published volume discounts, not by a fourth tier. Three tiers is cleaner. If conversion data shows prospects falling through the gap, revisit.

**Outcome-based pricing might extend beyond Samvaad.** Akshar (per processed-and-validated document) and Studio (per published-and-approved dub) could also have outcome SKUs. If yes, outcome-based becomes the *enterprise default* across all three productized SaaS products, not a Samvaad-specific overlay. Worth piloting on Akshar before generalising.

**The 2× sizing rule for productized SaaS allowances might be too generous or too stingy.** ~70% confidence 2× is right — generous enough that most customers stay in-workspace, lean enough that overflow exists as a real signal for tier-upgrade conversations. The stress test is what fraction of customers overflow in any given month: <10% means too generous (Sarvam is leaving money on the table); >40% means too stingy (the workspace allowance is decorative and customers are effectively paying through the API anyway). The right answer depends on actual usage data once the architecture is live.

**The four-logic architecture (adoption / commodity / premium / bundled) might be over-engineered.** A simpler frame is two-logic: "credits are the cheap part, seats are the premium part." If accepted, a lot of the differentiation across products simplifies. The four-logic frame is more accurate but the two-logic frame is more communicable. Which to use externally is itself a pricing-page decision.

**The Indus credit pass-through arbitrage was the largest design error in the earlier draft, and is now resolved.** Sizing Indus credits at-or-above the API plan floor (rather than building a 50% rate-cap or a provenance-tracking system) lets the credits be genuinely fungible while removing the dollar-cost arbitrage path. The fix is operationally trivial — just lower per-tier credit amounts — and sharpens the consumer-app pitch from "discount route to API" to "the only consumer AI app that exposes the full creator stack." Confidence in the resolution: high.

---

## What is intentionally out of scope

Three things are deliberately not addressed in this remodel:

**Government, defence, and Chanakya** remain a custom-quote sales motion. The architecture above (credit currency, seat structure, productized SaaS shape) is designed to extend into them cleanly — deployment becomes a config, not a pricing rebuild — but the pricing itself is not designed here.

**Sarvam Kaze hardware** (smart glasses, May 2026 launch) is a new SKU class with hardware unit economics that don't fit this remodel. Hardware pricing follows hardware logic: BOM-plus-margin, not credit-currency.

**Fine-tuning, dedicated capacity, and on-prem licenses** are listed as Enterprise add-ons in the architecture but their specific rate cards are not designed here. They follow the same credit-currency principle but require GPU-cost modelling that is downstream of this document.

---

## Closing

The architecture above is forced by ten implications, which are forced by a goal hierarchy (developers first, then SMB/enterprise conversion, then consumer flywheel, then channels and global), which is forced by the investor thesis that Sarvam consolidates the Indian AI market before it consolidates around someone else.

If any of those upstream claims is wrong, the architecture should be revisited. If the priority order changes (e.g., enterprise becomes the must-win because IndiaAI subsidies are politicised), the implications change and the architecture moves. The reasoning chain is the durable artefact; the rate card is the perishable one.

The companion document, *Sarvam Pricing Structure*, contains the rate card.
