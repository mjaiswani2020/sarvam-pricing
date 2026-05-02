import React, { useState } from "react";
import { Check, ChevronDown, Sparkles, ArrowRight, Info } from "lucide-react";

const FONT_STYLE = `
  @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap');
  .font-display { font-family: 'DM Sans', system-ui, sans-serif; letter-spacing: -0.02em; }
  .font-body { font-family: 'DM Sans', system-ui, sans-serif; }
  .font-mono { font-family: 'JetBrains Mono', ui-monospace, monospace; }
`;

function PlanCard({ name, price, cadence, cta, features, highlighted, badge, tagline, priceNote }) {
  return (
    <div className={`relative flex flex-col rounded-xl border ${highlighted ? "border-amber-700/70 bg-white shadow-[0_2px_0_rgba(146,64,14,0.08)]" : "border-stone-200 bg-white"} p-5`}>
      {badge && <div className="absolute -top-3 left-5"><span className="text-[10px] uppercase tracking-[0.14em] font-semibold px-2 py-1 bg-amber-700 text-amber-50 rounded-full">{badge}</span></div>}
      <div className="text-sm font-medium text-stone-500">{name}</div>
      <div className="mt-3 flex items-baseline gap-1">
        <span className="font-display text-[28px] font-semibold tracking-tight text-stone-900">{price}</span>
        {cadence && <span className="text-sm text-stone-500 font-medium">{cadence}</span>}
      </div>
      {priceNote && <div className="text-[11px] text-stone-500 mt-0.5">{priceNote}</div>}
      {tagline && <div className="mt-1.5 text-[12.5px] text-stone-500 leading-snug min-h-[32px]">{tagline}</div>}
      <button className={`mt-4 w-full py-2.5 rounded-lg text-sm font-medium transition-colors ${highlighted ? "bg-stone-900 text-stone-50 hover:bg-stone-800" : "bg-white border border-stone-300 text-stone-900 hover:bg-stone-50"}`}>{cta}</button>
      <ul className="mt-5 space-y-2.5">
        {features.map((f, i) => <li key={i} className="flex items-start gap-2 text-[13px] text-stone-700 leading-snug"><Check size={14} strokeWidth={2.25} className="mt-0.5 shrink-0 text-stone-900" /><span>{f}</span></li>)}
      </ul>
    </div>
  );
}

function FeatureTable({ columns, rows }) {
  return (
    <div className="rounded-xl border border-stone-200 bg-white overflow-hidden">
      <div className="grid border-b border-stone-200 bg-stone-50/70" style={{ gridTemplateColumns: `1.6fr repeat(${columns.length}, 1fr)` }}>
        <div className="px-5 py-3 text-[11px] uppercase tracking-[0.12em] text-stone-500 font-semibold">Features</div>
        {columns.map((c, i) => <div key={i} className="px-4 py-3 text-[11px] uppercase tracking-[0.12em] text-stone-700 font-semibold">{c}</div>)}
      </div>
      {rows.map((r, i) => {
        if (r.isSection) return <div key={i} className="border-b border-stone-200 bg-stone-50/40"><div className="px-5 py-2 text-[10px] uppercase tracking-[0.14em] text-stone-500 font-semibold">{r.label}</div></div>;
        return (
          <div key={i} className="grid border-b border-stone-100 last:border-b-0 hover:bg-stone-50/50" style={{ gridTemplateColumns: `1.6fr repeat(${columns.length}, 1fr)` }}>
            <div className="px-5 py-3 text-[13px] text-stone-700">{r.label}</div>
            {r.values.map((v, j) => <div key={j} className="px-4 py-3 text-[13px] text-stone-800 font-medium">{v === true ? <Check size={15} strokeWidth={2.25} className="text-stone-900" /> : v === false ? <span className="text-stone-300">—</span> : v === "" ? null : v}</div>)}
          </div>
        );
      })}
    </div>
  );
}

function TrustStrip({ label, customers }) {
  return (
    <div className="flex items-center gap-4 px-5 py-3 rounded-lg bg-stone-50/80 border border-stone-200/60">
      <span className="text-[10px] uppercase tracking-[0.14em] text-stone-500 font-semibold shrink-0">{label}</span>
      <div className="flex flex-wrap items-center gap-x-4 gap-y-1">{customers.map((c, i) => <span key={i} className="text-[12px] font-medium text-stone-600">{c}</span>)}</div>
    </div>
  );
}

function EnterpriseCallout({ title, body }) {
  return (
    <div className="rounded-xl bg-stone-900 text-stone-50 px-6 py-5 flex items-center justify-between gap-6">
      <div>
        <div className="text-base font-semibold tracking-tight">{title}</div>
        <div className="text-[13px] text-stone-300 mt-1 max-w-2xl">{body}</div>
      </div>
      <button className="shrink-0 inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-amber-600 hover:bg-amber-500 text-stone-900 text-sm font-semibold transition-colors">Contact sales <ArrowRight size={14} /></button>
    </div>
  );
}

function FAQ({ items }) {
  const [open, setOpen] = useState(null);
  return (
    <div className="mt-12">
      <div className="font-display text-xl font-semibold tracking-tight text-stone-900 mb-4">FAQ</div>
      <div className="border-t border-stone-200">
        {items.map((it, i) => (
          <div key={i} className="border-b border-stone-200">
            <button onClick={() => setOpen(open === i ? null : i)} className="w-full text-left py-4 flex items-center justify-between gap-4 hover:bg-stone-50/50 px-1">
              <span className="text-[14px] text-stone-900 font-medium">{it.q}</span>
              <ChevronDown size={16} className={`shrink-0 transition-transform text-stone-400 ${open === i ? "rotate-180" : ""}`} />
            </button>
            {open === i && <div className="pb-4 px-1 text-[13px] text-stone-600 leading-relaxed pr-12">{it.a}</div>}
          </div>
        ))}
      </div>
    </div>
  );
}

function CreditsCallout() {
  return (
    <div className="rounded-xl border border-amber-200/60 bg-amber-50/50 px-5 py-3.5 flex items-center gap-3">
      <Info size={15} className="text-amber-700 shrink-0" />
      <div className="text-[13px] text-stone-700 leading-relaxed">
        <span className="font-medium text-stone-900">Run out of product credits? Use your API credits.</span>{" "}
        When a product's monthly allowance is exhausted, your API credits can cover the overflow — opt-in per request, no silent billing.
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════════
   SAMVAAD
   ══════════════════════════════════════════════════════════════ */

function SamvaadContent() {
  return (
    <>
      <div className="mb-6 max-w-3xl">
        <div className="font-display text-[22px] font-semibold tracking-tight text-stone-900 leading-tight">
          Voice agents for India. 5 credits/min, full stack included.
        </div>
        <div className="mt-2 text-[13px] text-stone-600 leading-relaxed">
          Every agent minute bundles Saaras V3 (STT) + Sarvam-30B (LLM) + Bulbul V3 (TTS) into one rate.
          No separate bills for speech, language model, and synthesis. 11 Indian languages, sub-500 ms latency,
          omnichannel. 100M+ conversations for Tata Capital, SBI Life, and Razorpay.
        </div>
      </div>

      <div className="grid grid-cols-4 gap-4">
        <PlanCard name="Free" price="₹0" tagline="Build and test your first agent." cta="Start free"
          priceNote="500 credits · ~100 agent minutes"
          features={[
            "500 Samvaad credits/month",
            "2 concurrent calls",
            "Web channel only",
            "11 Indian languages + code-mix",
            "Knowledge base (1 source)",
            "Community support",
          ]}
        />
        <PlanCard name="Pro" price="₹9,999" cadence="/month" tagline="Go live with voice agents." cta="Get Pro" highlighted badge="Most popular"
          priceNote="12,500 credits · ~2,500 agent minutes"
          features={[
            "12,500 Samvaad credits/month",
            "10 concurrent calls",
            "Voice + web + WhatsApp",
            "Knowledge bases + tool calling",
            "Real-time analytics + transcripts",
            "Email support · 1 business day",
          ]}
        />
        <PlanCard name="Scale" price="₹49,999" cadence="/month" tagline="Production at India scale." cta="Get Scale"
          priceNote="75,000 credits · ~15,000 agent minutes"
          features={[
            "75,000 Samvaad credits/month",
            "50 concurrent calls",
            "Omnichannel + telephony (PSTN, SIP)",
            "CRM and core-banking integrations",
            "Call recording + custom analytics",
            "Slack + dedicated Solutions Engineer",
          ]}
        />
        <PlanCard name="Enterprise" price="Custom" tagline="BFSI, government, and regulated." cta="Contact sales"
          features={[
            "Custom volume + outcome-based pricing",
            "Unlimited concurrent calls",
            "Air-gapped / on-prem via Chanakya",
            "Forward-deployed engineering",
            "99.9% SLA · dedicated TAM",
            "SOC 2 Type II · ISO 27001",
          ]}
        />
      </div>

      <div className="mt-6">
        <TrustStrip label="Powering" customers={["Tata Capital", "SBI Life Insurance", "Razorpay × Swiggy", "The Derma Co", "100M+ conversations processed"]} />
      </div>

      <div className="mt-6">
        <EnterpriseCallout
          title="Outcome-based pricing. Pay per resolved query, not per minute."
          body="Per resolved call, per qualified lead, per completed transaction. Available on Enterprise, deployed via Chanakya for defence and regulated finance."
        />
      </div>

      <div className="mt-12">
        <div className="flex items-baseline justify-between mb-4 gap-4">
          <div className="font-display text-lg font-semibold tracking-tight text-stone-900">What's included</div>
          <div className="text-[11px] text-stone-500 font-mono text-right">Rate · 5 credits/min voice · 2 credits/msg chat · telephony at cost</div>
        </div>
        <FeatureTable
          columns={["Free", "Pro", "Scale", "Enterprise"]}
          rows={[
            { label: "USAGE", values: ["", "", "", ""], isSection: true },
            { label: "Samvaad credits/month", values: ["500", "12,500", "75,000", "Custom"] },
            { label: "Voice agent minutes (at 5 cr/min)", values: ["~100", "~2,500", "~15,000", "Custom"] },
            { label: "Concurrent calls", values: ["2", "10", "50", "Unlimited"] },
            { label: "API credit overflow when exhausted", values: [true, true, true, true] },

            { label: "CHANNELS", values: ["", "", "", ""], isSection: true },
            { label: "Web widget", values: [true, true, true, true] },
            { label: "Voice (inbound + outbound)", values: [false, true, true, true] },
            { label: "WhatsApp", values: [false, true, true, true] },
            { label: "Telephony (PSTN, SIP)", values: [false, false, true, true] },

            { label: "CAPABILITIES", values: ["", "", "", ""], isSection: true },
            { label: "Languages (Indic + EN)", values: ["11", "11", "11", "Custom"] },
            { label: "Knowledge bases", values: ["1 source", "Unlimited", "Unlimited", "Unlimited"] },
            { label: "Tool / function calling", values: [false, true, true, true] },
            { label: "Real-time analytics", values: [false, true, true, true] },
            { label: "Call recording + transcripts", values: [false, true, true, true] },
            { label: "CRM / core-banking integrations", values: [false, false, true, true] },

            { label: "DEPLOYMENT", values: ["", "", "", ""], isSection: true },
            { label: "Sarvam Cloud", values: [true, true, true, true] },
            { label: "Private VPC", values: [false, false, true, true] },
            { label: "On-prem / Chanakya", values: [false, false, false, true] },
            { label: "Outcome-based pricing", values: [false, false, false, true] },
          ]}
        />
      </div>
    </>
  );
}

/* ══════════════════════════════════════════════════════════════
   STUDIO
   ══════════════════════════════════════════════════════════════ */

function StudioContent() {
  return (
    <>
      <div className="mb-6 max-w-3xl">
        <div className="font-display text-[22px] font-semibold tracking-tight text-stone-900 leading-tight">
          Dub video content into every Indian language.
        </div>
        <div className="mt-2 text-[13px] text-stone-600 leading-relaxed">
          Studio powers PMO Mann Ki Baat (11 languages monthly), NCERT, NPTEL, and IIT Madras lectures.
          Video dubbing with consent-based voice cloning across 11 Indian languages plus English.
        </div>
      </div>

      {/* For Creators */}
      <div className="text-[10px] uppercase tracking-[0.14em] text-stone-500 font-semibold mb-3">For creators</div>
      <div className="grid grid-cols-3 gap-4">
        <PlanCard name="Free" price="₹0" tagline="Try dubbing your first video." cta="Start free"
          features={[
            "250 Studio credits/month",
            "~30 dubbed minutes",
            "11 languages + English",
            "Video dubbing — watermarked",
            "1 project",
          ]}
        />
        <PlanCard name="Creator" price="₹1,499" cadence="/month" tagline="Publish without watermarks." cta="Get Creator" highlighted badge="For individuals"
          features={[
            "1,600 Studio credits/month",
            "~200 dubbed minutes",
            "No watermark on outputs",
            "Commercial-use license",
            "Instant voice cloning (1 voice)",
            "10 projects",
          ]}
        />
        <PlanCard name="Team" price="₹4,999" cadence="/month" tagline="For content teams shipping daily." cta="Get Team"
          features={[
            "6,000 Studio credits/month",
            "~750 dubbed minutes",
            "3 team members",
            "Instant voice cloning (3 voices)",
            "Unlimited projects",
            "Email support · 1 business day",
          ]}
        />
      </div>

      {/* For Organizations */}
      <div className="text-[10px] uppercase tracking-[0.14em] text-stone-500 font-semibold mb-3 mt-8">For organizations</div>
      <div className="grid grid-cols-2 gap-4">
        <PlanCard name="Scale" price="₹49,999" cadence="/month" tagline="For media houses and publishers." cta="Get Scale"
          features={[
            "80,000 Studio credits/month",
            "~10,000 dubbed minutes",
            "15 team members",
            "Custom voices (consent-based, up to 10)",
            "Studio API access for pipelines",
            "SSO / SCIM",
          ]}
        />
        <PlanCard name="Enterprise" price="Custom" tagline="For broadcasters, ministries, and schools." cta="Contact sales"
          features={[
            "Unlimited team members",
            "Sarvam Dub Live (broadcast)",
            "Unlimited custom voice library",
            "On-prem rendering",
            "Forward-deployed engineering",
            "99.9% SLA",
          ]}
        />
      </div>

      <div className="mt-6">
        <TrustStrip label="Trusted by" customers={["PMO Mann Ki Baat", "NCERT", "NPTEL", "IIT Madras", "National Commission for Women", "Republic TV"]} />
      </div>

      <div className="mt-12">
        <div className="flex items-baseline justify-between mb-4 gap-4">
          <div className="font-display text-lg font-semibold tracking-tight text-stone-900">What's included</div>
          <div className="text-[11px] text-stone-500 font-mono text-right">Rate · 8 credits/dubbed-min (per target language)</div>
        </div>
        <FeatureTable
          columns={["Free", "Creator", "Team", "Scale", "Ent."]}
          rows={[
            { label: "USAGE", values: ["", "", "", "", ""], isSection: true },
            { label: "Studio credits/month", values: ["250", "1,600", "6,000", "80,000", "Custom"] },
            { label: "Dubbed minutes (at 8 cr/min)", values: ["~30", "~200", "~750", "~10,000", "Custom"] },
            { label: "Team members", values: ["1", "1", "3", "15", "Unlimited"] },
            { label: "Projects", values: ["1", "10", "Unlimited", "Unlimited", "Unlimited"] },
            { label: "API credit overflow when exhausted", values: [true, true, true, true, true] },

            { label: "DUBBING", values: ["", "", "", "", ""], isSection: true },
            { label: "Languages", values: ["11 + EN", "11 + EN", "11 + EN", "11 + EN", "Custom"] },
            { label: "Video dubbing (per target language)", values: ["Watermarked", true, true, true, true] },
            { label: "Instant voice cloning", values: [false, "1 voice", "3 voices", "10 voices", "Unlimited"] },
            { label: "Sarvam Dub Live (broadcast)", values: [false, false, false, false, true] },

            { label: "PLATFORM", values: ["", "", "", "", ""], isSection: true },
            { label: "Commercial-use license", values: [false, true, true, true, true] },
            { label: "Studio API access", values: [false, false, false, true, true] },
            { label: "SSO / SCIM", values: [false, false, false, true, true] },
            { label: "On-prem rendering", values: [false, false, false, false, true] },
          ]}
        />
      </div>
    </>
  );
}

/* ══════════════════════════════════════════════════════════════
   AKSHAR
   ══════════════════════════════════════════════════════════════ */

function AksharContent() {
  return (
    <>
      <div className="mb-6 max-w-3xl">
        <div className="font-display text-[22px] font-semibold tracking-tight text-stone-900 leading-tight">
          Indian documents, finally legible to a machine.
        </div>
        <div className="mt-2 text-[13px] text-stone-600 leading-relaxed">
          Akshar reads what global OCR can't — handwritten KYC, historical manuscripts, multi-column tables,
          and regulatory forms across all 22 Indian languages. Powered by Sarvam Vision (3B SSM VLM) — 84.3% on olmOCR-Bench,
          93.28% on OmniDocBench v1.5.
        </div>
      </div>

      <div className="grid grid-cols-4 gap-4">
        <PlanCard name="Free" price="₹0" tagline="Try with your own documents." cta="Start free"
          features={[
            "1,000 Akshar credits/month",
            "500 pages at 2 credits/page",
            "All 22 languages + English",
            "10 pages per upload",
            "HTML / Markdown / JSON outputs",
            "1 extraction template",
          ]}
        />
        <PlanCard name="Pro" price="₹9,999" cadence="/month" tagline="Automate document workflows." cta="Get Pro" highlighted badge="Most popular"
          features={[
            "10,000 Akshar credits/month",
            "5,000 pages at 2 credits/page",
            "3 team members + 5 reviewers",
            "Layout-preserving + bounding boxes",
            "Visual grounding (click → source)",
            "Agentic proofreading loop",
          ]}
        />
        <PlanCard name="Scale" price="₹49,999" cadence="/month" tagline="For BPOs, banks, and insurers." cta="Get Scale"
          features={[
            "60,000 Akshar credits/month",
            "30,000 pages at 2 credits/page",
            "10 team members + 25 reviewers",
            "Industry templates (BFSI, healthcare, legal)",
            "Custom extractor library",
            "Akshar API + SSO + Solutions Engineer",
          ]}
        />
        <PlanCard name="Enterprise" price="Custom" tagline="Regulated and air-gapped workflows." cta="Contact sales"
          features={[
            "Custom credit pool + volume discounts",
            "Unlimited team members + reviewers",
            "Custom templates built with your team",
            "Air-gapped / on-prem via Chanakya",
            "Forward-deployed engineering",
            "99.9% SLA",
          ]}
        />
      </div>

      <div className="mt-6">
        <TrustStrip label="Benchmark leadership" customers={["olmOCR-Bench: 84.3%", "OmniDocBench: 93.28%", "All 22 scheduled Indian languages"]} />
      </div>

      <div className="mt-6">
        <EnterpriseCallout
          title="Air-gapped Akshar for regulated document workflows."
          body="Industry templates for BFSI, healthcare, and legal. Custom extractors. Dedicated review queues. Deployed via Chanakya."
        />
      </div>

      <div className="mt-12">
        <div className="flex items-baseline justify-between mb-4 gap-4">
          <div className="font-display text-lg font-semibold tracking-tight text-stone-900">What's included</div>
          <div className="text-[11px] text-stone-500 font-mono text-right">Rate · 2 credits/page extraction · 20 credits/10K chars translation</div>
        </div>
        <FeatureTable
          columns={["Free", "Pro", "Scale", "Enterprise"]}
          rows={[
            { label: "USAGE", values: ["", "", "", ""], isSection: true },
            { label: "Akshar credits/month", values: ["1,000", "10,000", "60,000", "Custom"] },
            { label: "Pages at 2 credits/page", values: ["500", "5,000", "30,000", "Custom"] },
            { label: "Team members", values: ["1", "3", "10", "Unlimited"] },
            { label: "Reviewers (HITL proofreading)", values: ["1", "5", "25", "Unlimited"] },
            { label: "API credit overflow when exhausted", values: [true, true, true, true] },

            { label: "EXTRACTION", values: ["", "", "", ""], isSection: true },
            { label: "Languages (scheduled Indic)", values: ["22 + EN", "22 + EN", "22 + EN", "22 + EN"] },
            { label: "Output formats (HTML / MD / JSON)", values: [true, true, true, true] },
            { label: "Layout preservation + bounding boxes", values: [false, true, true, true] },
            { label: "Visual grounding (click → source)", values: [false, true, true, true] },
            { label: "Agentic proofreading", values: [false, true, true, true] },

            { label: "TEMPLATES & INTEGRATIONS", values: ["", "", "", ""], isSection: true },
            { label: "Extraction templates", values: ["1", "Unlimited", "Unlimited", "Custom-built"] },
            { label: "Custom extractor library", values: [false, false, true, true] },
            { label: "Industry templates (BFSI, healthcare, legal)", values: [false, false, true, true] },
            { label: "Akshar API access", values: [false, false, true, true] },

            { label: "DEPLOYMENT", values: ["", "", "", ""], isSection: true },
            { label: "SSO / SCIM", values: [false, false, true, true] },
            { label: "On-prem / air-gapped", values: [false, false, false, true] },
          ]}
        />
      </div>
    </>
  );
}

/* ══════════════════════════════════════════════════════════════
   PLATFORM TAB
   ══════════════════════════════════════════════════════════════ */

function PlatformTab() {
  const [subTab, setSubTab] = useState("samvaad");
  const subTabs = [
    { id: "samvaad", label: "Samvaad", note: "Voice & chat agents" },
    { id: "studio", label: "Studio", note: "Dubbing & content" },
    { id: "akshar", label: "Akshar", note: "Document AI" },
  ];

  return (
    <div className="py-10 px-6 max-w-5xl mx-auto">
      <div className="flex items-center gap-1 mb-6 border border-stone-200 rounded-lg p-1 bg-stone-50 w-fit">
        {subTabs.map((t) => (
          <button key={t.id} onClick={() => setSubTab(t.id)}
            className={`px-3.5 py-1.5 rounded-md text-sm transition-colors ${subTab === t.id ? "bg-white text-stone-900 shadow-[0_1px_0_rgba(0,0,0,0.04)] font-medium" : "text-stone-600 hover:text-stone-900 font-medium"}`}>
            <span>{t.label}</span>
            <span className={`ml-2 text-[11px] ${subTab === t.id ? "text-stone-500" : "text-stone-400"}`}>{t.note}</span>
          </button>
        ))}
      </div>

      {subTab === "samvaad" && <SamvaadContent />}
      {subTab === "studio" && <StudioContent />}
      {subTab === "akshar" && <AksharContent />}

      <div className="mt-12"><CreditsCallout /></div>

      <FAQ items={[
        { q: "What's included in each agent minute?", a: "Every Samvaad minute (5 credits) bundles Saaras V3 (speech-to-text), Sarvam-30B (language model), and Bulbul V3 (text-to-speech). No separate bills. Telephony (PSTN, SIP, WhatsApp BSP) is billed at cost from the integrated provider." },
        { q: "How do product credits work?", a: "1 credit = ₹1 of usage. Each product has its own credit pool — Samvaad credits inside Samvaad, Studio credits inside Studio, Akshar credits inside Akshar. Credits are deducted per task at the published rate (e.g., 2 credits/page in Akshar, 5 credits/min in Samvaad, 8 credits/dubbed-min in Studio)." },
        { q: "What happens when I run out of product credits?", a: "Your API credits can cover the overflow — opt-in per request, no silent billing. You can also top up product credits or upgrade to the next tier." },
        { q: "Do unused credits roll over?", a: "Product credits roll over within the workspace for one billing cycle. API credits purchased separately never expire." },
        { q: "Do I need a separate plan for each product?", a: "Yes. Samvaad, Studio, and Akshar are separate subscriptions. Your API credits can overflow into any workspace when needed." },
        { q: "Is outcome-based pricing available?", a: "Yes, on Samvaad Enterprise. Choose per-resolved-query, per-qualified-lead, or per-completed-transaction instead of per-minute." },
        { q: "Are these products available on-prem?", a: "All three are available in private VPC, on-prem, and air-gapped (Chanakya) on Enterprise contracts." },
      ]} />

      <div className="mt-10 pt-6 border-t border-stone-200">
        <div className="text-[11px] text-stone-400 leading-relaxed max-w-3xl">
          All prices INR, exclusive of GST. 1 Sarvam credit = ₹1. Samvaad per-minute includes STT + LLM + TTS; telephony at cost.
          Studio outputs on Free are watermarked. Voice cloning requires signed consent.
          Product credits don't transfer between products. API credits can overflow into any product workspace.
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div className="font-body min-h-screen bg-white text-stone-900">
      <style>{FONT_STYLE}</style>
      <PlatformTab />
    </div>
  );
}