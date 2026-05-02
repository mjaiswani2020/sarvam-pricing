# Sarvam AI Pricing Structure

*The full rate card across every Sarvam offering, May 2026 remodel.*

---

## 1. The Sarvam Credit and the two-pool architecture

The entire pricing surface uses a single unit of value:

**1 Sarvam Credit = ₹1 of list-price consumption.**

Credits flow through **two pools** at the account level, with deliberate isolation between them:

**Pool A — the API consumption pool.** Funded by API plan credits (Free, Builder, Scale, Enterprise) and by Indus consumer plan credits. Spendable on raw API consumption: LLM tokens, Saaras seconds, Bulbul characters, Mayura and Sarvam-Translate characters, Sarvam Vision pages, transliteration, language ID, embeddings, and fine-tuning.

**Pool B — the productized SaaS pools.** Each productized SaaS (Studio, Samvaad, Akshar) carries its own monthly credit allowance scoped to that product's workspace. Studio credits are spendable inside Studio. Samvaad credits inside Samvaad. Akshar credits inside Akshar. They do not cross over.

**The overflow rule:** Pool A credits can flow into any product workspace when that product's allowance is exhausted (with explicit customer consent — overflow is opt-in per request, not silent). Productized SaaS credits cannot flow back to Pool A. This means Pool A is the universal platform credit, while productized SaaS credits are workspace-bound consumption budgets. Full mechanics in Section 5.4.

**Why two pools, not one.** A unified-pool design creates an arbitrage path where productized SaaS plan credits can be redirected to raw API workloads, eroding the value of seats and workspace and obscuring the SaaS pricing logic. Two pools let each productized SaaS be priced as a SaaS product (workspace + seats + included usage) while keeping the platform-wide credit currency intact for API workloads.

A team-level account allows multiple users to share Pool A credits. Productized SaaS credits are shared among the seats provisioned for that product.

When underlying rates change, already-purchased credits hold their face value at the new rates (1 credit = ₹1 of list-price consumption at current rates). Customers pre-purchasing large balances should note that purchasing-power against a specific SKU may shift if that SKU is repriced — the rupee value is preserved, the unit value against any one product is not.

---

## 2. The credit conversion table (rate card)

### 2.1 Foundation LLMs

| Action | Credits |
|---|---|
| 1M Sarvam-30B input tokens | 2.5 |
| 1M Sarvam-30B cached input tokens | 0.25 |
| 1M Sarvam-30B output tokens | 10 |
| 1M Sarvam-105B input tokens | 4 |
| 1M Sarvam-105B cached input tokens | 0.4 |
| 1M Sarvam-105B output tokens | 16 |

Cached input is 10% of full input (90% discount), matching the global norm set by Anthropic, OpenAI GPT-5.x, and DeepSeek. This is the single highest-leverage pricing change versus the previous structure (37.5% discount).

### 2.2 Speech

| Action | Credits |
|---|---|
| 1 hour Saaras V3 transcription | 30 |
| 1 hour Saaras V3 with diarization | 45 |
| 1 hour Saaras V3 with translation | 30 |
| 1 hour Saaras V3 with translation + diarization | 45 |
| 10K characters Bulbul V3 TTS | 30 |
| 10K characters Bulbul V2 TTS (legacy) | 15 |

### 2.3 Vision and document

| Action | Credits |
|---|---|
| 1 page Sarvam Vision | 1.5 |

### 2.4 Translation and language

| Action | Credits |
|---|---|
| 10K characters Mayura V1 | 20 |
| 10K characters Sarvam-Translate V1 | 20 |
| 10K characters transliterate | 20 |
| 10K characters language identification | 3.5 |

### 2.5 Voice cloning (premium)

| Action | Credits |
|---|---|
| Custom voice training (one-time, API customers) | 5,000 per voice |
| Voice synthesis using custom voice | Same as Bulbul V3 base rate |

Voice cloning is monetised as a separate one-time training fee for API customers, in line with Cartesia, Google Instant Custom Voice, and ElevenLabs PVC. **Indus Pro subscribers receive 3 custom voices included as a tier feature (not credit-deducted from their monthly allowance).** Synthesis using those voices still consumes Bulbul V3 credits at standard rates.

---

## 3. Service-tier multipliers

Every API call carries a service-tier multiplier on the base credit cost. Customers choose the tier per request.

| Tier | Multiplier | SLA | Use case |
|---|---|---|---|
| Batch | 0.5× | 24-hour completion | Offline pipelines, evaluations, large document jobs |
| Flex | 0.5× | Best-effort, may be deprioritised under load | Background workloads tolerant of variance |
| Standard | 1.0× | <2s p95 typical | Default |
| Priority | 1.8× | Guaranteed capacity, lowest p99 | Real-time voice agents, customer-facing |

All four tiers are accessible to all paid plans and to the Free tier. Rate limits are the gate, not service-tier access.

---

## 4. Volume discount ladder

Above the published Scale plan, customers committing annually get an automatic, published volume discount applied to credit purchases.

| Annual commitment | Discount on credits |
|---|---|
| ₹10L–₹50L | 10% |
| ₹50L–₹2Cr | 20% |
| ₹2Cr–₹10Cr | 30% |
| ₹10Cr+ | Custom |

Negotiation at Enterprise is reserved for SLA, deployment model, custom rate limits, and dedicated capacity — not for the discount itself.

---

## 5. The three motions

The credit currency flows through three customer motions, each with its own packaging logic.

### 5.1 Motion A — Indus consumer

The consumer flywheel. Indus is Sarvam's consumer chat application running on Sarvam-105B with voice, document upload, and Indic-language coverage. India-only, phone-number signup. Indus credits flow into Pool A and are spendable on any API workload, with no special routing or rate caps — the credits are genuinely fungible because they are priced at-or-above the API plan floor.

| Tier | Price | What it includes |
|---|---|---|
| **Indus Free** | ₹0 | Sarvam-30B unlimited (rate-limited), Sarvam-105B 20 messages/day, voice chat 30 min/day, **₹100 credits/month** spendable on translation, document scan, dubbing, voice synthesis. Indus on web, iOS, Android. |
| **Indus Plus** | ₹399/month | Sarvam-105B unlimited (soft cap), voice chat unlimited, **₹350 credits/month**, early access to new models, Sarvam Vision document chat unlimited, Indus on Sarvam Kaze glasses (when shipped). |
| **Indus Pro** | ₹1,499/month | Everything in Plus, **₹1,300 credits/month** (rolling), longer context windows, priority access, Sarvam-105B Pro mode (when launched), **3 custom voices** (voice cloning included as tier feature, not credit-deducted), commercial-use license on outputs. |

**Why these credit amounts.** The cheapest API plan (Scale) sells credits at an effective rate of ₹0.87 per credit. Indus Plus and Pro are sized so that the implied per-credit rate is ₹1.14 and ₹1.15 respectively — above the API floor, eliminating the arbitrage path of subscribing to Indus to harvest cheap API credits. Indus is now genuinely a consumer subscription that includes some credits, not a discount route to the API.

**Voice cloning is a tier feature, not a credit-metered consumption.** Indus Pro subscribers get up to 3 custom voices as a Pro-tier perk; voice synthesis using those voices still consumes Bulbul V3 credits at standard rates. This matches how ChatGPT Plus handles GPT-4 access and how Adobe Creative Cloud handles font access — perks of the tier, not separately metered.

The credit allowance in each tier is the same Sarvam Credit — spendable through the Indus app on Vision OCR, Bulbul dubbing, Saaras transcription, or Mayura translation, or directly through the API. This is what differentiates Indus from ChatGPT and Gemini: a single consumer app that exposes the full Sarvam stack on one bill, with credits that travel with the user.

Per-account daily credit-burn caps and phone-number-based rate limits prevent fraud at the Free tier.

### 5.2 Motion B — Developer and SMB self-serve API

The PLG funnel. Transparent INR pricing, fully self-serve up to ₹50,000 a month, with automatic Enterprise on-ramp via committed-spend volume discounts above that. **All API plan credits flow into Pool A** and are spendable on any API workload (LLMs, Saaras, Bulbul, Vision, Mayura, Sarvam-Translate, transliteration, language ID, embeddings). Pool A credits can also overflow into productized SaaS workspaces when those allowances are exhausted (Section 5.4).

| Plan | Price | Credits per month | Bonus | Effective rate | Rate limits | Support |
|---|---|---|---|---|---|---|
| **Free** | ₹0 | ₹2,000 sign-up credits, never expire | — | List | 60 RPM | Discord |
| **Builder** | ₹10,000/month | 10,000 | +1,000 (10%) | -9% | 200 RPM | Email |
| **Scale** | ₹50,000/month | 50,000 | +7,500 (15%) | -13% | 1,000 RPM | Slack + Solutions Engineer |
| **Enterprise** | ₹10L+ committed | Custom | Up to 30% via volume ladder | Custom | Custom | Technical Account Manager + SLA |

**Free-tier signup grant is ₹2,000.** This resolves the previous ₹100 / ₹1,000 documentation contradiction. It is more generous than OpenAI's $5 and Anthropic's small undisclosed credit, defensible because IndiaAI Mission compute subsidy carries it, and meaningful because a developer can build a working Hindi voice-agent prototype end-to-end without hitting the credit wall.

**Rate limits apply per API.** Sarvam-30B and Sarvam-105B carry lower per-minute limits (40, 60, 120, custom RPM across the tiers) than the speech and translation APIs, reflecting GPU cost. Specific per-API limits are published on the rate-limits documentation page.

**Service tiers (Section 3) and volume discounts (Section 4) apply on top of plan pricing.**

### 5.3 Motion C — Productized SaaS (Studio, Samvaad, Akshar)

The enterprise revenue engine. Each product follows a Free / Pro / Scale / Enterprise ladder. Seats unlock the workspace; the workspace's monthly credit allowance unlocks consumption inside that workspace. Same architecture, three product expressions.

**Each productized SaaS has its own isolated credit pool (Pool B).** Studio credits are spendable inside Studio. Samvaad credits inside Samvaad. Akshar credits inside Akshar. Productized SaaS credits do not cross over between products and do not flow back to Pool A. This isolation lets each product be priced as a SaaS bundle (workspace + seats + included usage) rather than as a credit-reseller front-end for the API.

**Credit allowances are deliberately sized at roughly 2× the plan price**, so most customers never overflow. A customer paying ₹4,999 for Studio Pro receives ₹10,000 worth of in-workspace consumption — generous enough that small content teams don't have to watch the meter. Customers who do exhaust the allowance can overflow from Pool A (Section 5.4) or upgrade to the next tier.

#### Sarvam Studio (multilingual content platform — video dubbing, document translation)

| Tier | Price | Seats | Studio credits/month | Best for |
|---|---|---|---|---|
| **Studio Free** | ₹0 | 1 Builder + unlimited Viewers | ₹1,000 | Try-before-buy. Watermark on outputs. |
| **Studio Pro** | ₹4,999/month | 3 Builders + unlimited Viewers | ₹10,000 | Small content teams. No watermark. Brand kit. |
| **Studio Scale** | ₹49,999/month | 15 Builders + unlimited Viewers | ₹1,00,000 | Mid-market production. Custom voices, Studio API access, SSO. |
| **Studio Enterprise** | Custom | Unlimited Builders + Viewers | Committed pool with volume discount | Large orgs. SLA, on-prem option, BYO model. |

#### Sarvam Samvaad (conversational agent platform on Sarvam-30B)

| Tier | Price | Seats | Samvaad credits/month | Best for |
|---|---|---|---|---|
| **Samvaad Free** | ₹0 | 1 Builder + unlimited Viewers | ₹1,000 | Pilot agents, dev sandbox. |
| **Samvaad Pro** | ₹9,999/month | 3 Builders + unlimited Viewers | ₹20,000 | SMB voice agents, single channel. |
| **Samvaad Scale** | ₹99,999/month | 10 Builders + unlimited Viewers | ₹2,00,000 | Production deployments, omnichannel, telephony. |
| **Samvaad Enterprise** | Custom | Unlimited | Committed pool with volume discount + outcome-based option | Large orgs. On-prem, dedicated SE, custom integrations. |

**Samvaad agent action pricing (deducted from the Samvaad workspace allowance, with Pool A overflow per Section 5.4):**

| Action class | Credits per action |
|---|---|
| Classic answer (deterministic response) | 1 |
| Generative answer (LLM-generated) | 2 |
| Tool / function call | 5 |
| Knowledge-base grounded response | 10 |
| Autonomous workflow trigger | 25 |

Telephony pass-through (PSTN, SIP, WhatsApp BSP fees) is billed separately at cost from the integrated telephony provider.

#### Sarvam Akshar (document intelligence workbench)

Akshar is the only productized SaaS with a four-role seat structure, because the Reviewer role (HITL proofreading) is genuinely a different human from the Builder.

| Tier | Price | Seats | Akshar credits/month | Best for |
|---|---|---|---|---|
| **Akshar Free** | ₹0 | 1 Builder + 1 Reviewer + unlimited Viewers | ₹1,000 | Try-before-buy on document workflows. |
| **Akshar Pro** | ₹9,999/month | 3 Builders + 5 Reviewers + unlimited Viewers | ₹20,000 | SMB document automation. |
| **Akshar Scale** | ₹49,999/month | 10 Builders + 25 Reviewers + unlimited Viewers | ₹1,00,000 | Mid-market BPOs, regional banks, insurers. |
| **Akshar Enterprise** | Custom | Unlimited by role | Committed pool with volume discount | Large enterprises. Industry templates, custom extractors, on-prem option. |

**Seat roles (Akshar only):**

- **Viewer** — read-only access. Free in all paid plans. For audit, compliance, dashboards.
- **Reviewer** — HITL proofreading and validation. Cannot create new templates.
- **Builder** — creates extraction templates, workflows, integrations. Full creative access.
- **Admin** — governance, billing, integration management. Same seat price as Builder; Admin is a *role*, not a tier.

For Studio and Samvaad, only Builder and Viewer seats exist. Roles will be expanded in those products only when the product workflow genuinely requires a separate Reviewer or Admin function.

### 5.4 Pool overflow mechanics

The two-pool design needs a clear answer to the question every productized SaaS customer eventually asks: *what happens when I run out of product credits but I still have credits sitting in my API pool?*

**Pool A → Product overflow is allowed, opt-in per request.**

When a productized SaaS customer exhausts their workspace allowance, the next consumption attempt does not silently bill from Pool A. Instead, the customer is prompted: *"Your Studio credits for this month are exhausted. Continue using ₹X from your API credits? [Yes for this request] [Yes until next allowance refresh] [Top up Studio credits] [Wait until next month]."*

The four options exist because customer intent varies: a one-off late-month rendering job is different from a sustained overflow that should trigger a tier upgrade conversation.

**Reverse flow is not permitted.** Productized SaaS credits never flow back to Pool A. A customer with unused Akshar credits at month-end cannot redirect them to LLM tokens or Bulbul TTS through the API. Unused Akshar credits roll over within the Akshar workspace only, subject to the rollover rules of that product's tier.

**Overflow consumption is tracked and billed against Pool A.** The tracking is separate so customers can see in their dashboard exactly how much Studio consumption came from the Studio allowance versus from API overflow. For invoicing, the overflow portion is itemised as API consumption — not as additional Studio spend — preserving the integrity of each pool's reporting.

**Overflow does not change the product's allowance or seat structure.** A customer who consistently overflows is signalled toward an upgrade by the dashboard ("you've overflowed for 3 consecutive months — Studio Scale at ₹49,999/mo would have been ₹X cheaper than your overflow + Studio Pro spend"), but no automatic upgrade or auto-top-up is triggered without explicit consent.

**Free-tier overflow is permitted but capped.** Studio/Samvaad/Akshar Free tier customers can overflow from API Free signup credits (₹2,000 one-time). Once those are exhausted, the customer must upgrade to a paid tier to continue. This prevents indefinite free-tier stacking.

**Service-tier multipliers (Section 3) apply to overflow consumption** at the rates of the originating Pool A plan. A Studio Pro customer overflowing from a Builder plan can choose Batch (0.5×), Standard (1×), or Priority (1.8×) on the overflow request, just as they would on direct API calls.

---

## 6. Outcome-based pricing for Samvaad enterprise

For Samvaad Enterprise contracts, outcome-based pricing is offered as an alternative to the per-action model. The customer chooses the model at deployment.

The launch SKUs (sales-led, custom-priced per customer until 5–10 reference customers exist):

- **Per resolved query** — customer-service agents
- **Per qualified lead** — outbound and lead-generation agents
- **Per completed transaction** — payment, booking, or onboarding agents

Outcome SKUs are typically priced at 5–10× the equivalent per-action cost, reflecting the value capture vs operational risk trade. Outcome definitions are negotiated per customer and codified in the contract.

This is a sales-led offering at launch. List pricing will be published once sufficient deployment data exists. Akshar (per processed-and-validated document) and Studio (per published-and-approved dub) are candidates for outcome SKUs in a later phase.

---

## 7. Channel pricing discipline

Direct list price is the floor. No channel partner can sell the same SKU below Sarvam's published list.

Channel partners (Yotta, Infosys, TCS, HCL, Tech Mahindra, mid-market SIs) sell **bundled solutions**, not arbitrage on the same SKU. Examples:

- Yotta sells "Yotta Voice Stack" — Sarvam Bulbul + Saaras + Samvaad bundled with Yotta GPU compute, integration services, and managed support — at higher than Sarvam list, with Yotta capturing integration margin.
- An SI sells "Customer-Service Agent Solution" — Samvaad + custom integration + 24×7 support — priced as a project, not a SKU.

The published partner discount schedule for direct-resale at qualifying volumes is 15% off list, structured similar to AWS partner programs. Volume thresholds and tiers are published on the partner program page.

The channel inversions in the previous structure (Bulbul V3 ₹15 vs ₹30, Vision ₹10 vs ₹1.50) are corrected: those Yotta SKUs are repositioned as bundled solutions with explicit integration scope, priced above direct list.

---

## 8. USD pricing for global buyers

A separate USD rate card is published for international customers. USD prices are not converted from INR — they are priced independently, with roughly 20–30% margin uplift versus the INR equivalent.

| Action | INR list | USD list (~) |
|---|---|---|
| 1M Sarvam-30B input | ₹2.5 (~$0.030) | $0.040 |
| 1M Sarvam-30B output | ₹10 (~$0.120) | $0.150 |
| 1M Sarvam-105B input | ₹4 (~$0.048) | $0.060 |
| 1M Sarvam-105B output | ₹16 (~$0.193) | $0.240 |
| 1 hour Saaras V3 | ₹30 (~$0.36) | $0.45 |
| 10K chars Bulbul V3 | ₹30 (~$0.36) | $0.45 |
| 1 page Sarvam Vision | ₹1.5 (~$0.018) | $0.025 |
| 10K chars Mayura | ₹20 (~$0.24) | $0.30 |

USD-billed customers receive USD invoices, USD credit balances, and are not subject to FX-driven price changes on the INR card. USD plans (USD-denominated equivalents of Builder, Scale, Enterprise) are published separately.

---

## 9. Billing and account mechanics

**Payment.** Prepaid credits via UPI, cards, wire, and standard Indian payment rails. Annual prepayment available for Builder, Scale, and Enterprise plans, with 5–10% additional discount on top of plan bonuses.

**Credits never expire.** Unused credits roll over indefinitely.

**Refunds.** Credits are non-refundable but transferable across team members on the same account.

**GST.** All INR pricing is exclusive of GST. GST is charged at applicable rates on invoices.

**Invoicing.** Automatic invoice generation on every credit purchase. GST-compliant invoices for Indian businesses.

**Multi-user accounts.** Org-level accounts (rolling out post-remodel) allow multiple users to share a single credit pool, with role-based access on the dashboard. Until org-level accounts ship, credits are tied to a single account.

**Rate-limit upgrades.** Above-Scale rate limits (>1,000 RPM) are configured per Enterprise contract.

---

## 10. What is not priced here

The following are deliberately excluded from this rate card:

- **Government, defence, and Chanakya on-prem** — separate custom-quote sales motion.
- **Sarvam Kaze hardware** (smart glasses) — hardware unit economics on a separate price card.
- **Fine-tuning specific rates** — listed as Enterprise add-on; specific rates require GPU-cost modelling.
- **Dedicated capacity / Provisioned Throughput** — Enterprise contract item.
- **Telephony pass-through** — billed at cost from integrated providers; not a Sarvam SKU.
- **Sarvam Dub for live broadcast** — Enterprise contract item.
- **Sarvam Audio (3B audio LM)** — folded into Saaras pricing for now; standalone SKU TBD.

---

## 11. Summary: the four pricing dials

A customer's effective price is determined by four orthogonal dials:

1. **Plan choice** (Free / Builder / Scale / Enterprise on the API side, or productized SaaS Free / Pro / Scale / Enterprise) — sets baseline credits, bonus credits, seats, and rate limits. Sets which credit pool you fund.
2. **Service tier** (Batch 0.5× / Flex 0.5× / Standard 1× / Priority 1.8×) — sets latency commitment.
3. **Cache hit** (90% discount on cached LLM input) — applies automatically to repeated context.
4. **Volume commitment** (10% / 20% / 30% / custom on annual commits ≥ ₹10L) — applies automatically to credit purchases.

All four dials operate on a single currency (Sarvam Credit = ₹1) flowing through two pools. **Pool A** (the API consumption pool, funded by API plans and Indus subscriptions) is the universal platform credit — the same credits buy Saaras transcription, Bulbul synthesis, Vision pages, Sarvam-30B tokens, Mayura translations, and embeddings, wherever the workload demands. **Pool B** (the productized SaaS pools — Studio, Samvaad, Akshar) is workspace-bound: each product has a generous in-workspace allowance, with Pool A available as opt-in overflow when the workspace runs short.

This is the structural moat made legible without sacrificing pricing discipline.
