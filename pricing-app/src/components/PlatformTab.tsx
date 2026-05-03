"use client";

import React from "react";
import {
  PricingCard,
  CompareTable,
  FAQ,
  EnterpriseBanner,
  TrustStrip,
  InfoBanner,
} from "./shared";

/* ─────────────────────────────────────────────
   SHARED COPY
───────────────────────────────────────────── */

const INFO_BANNER_TEXT =
  "Your API credits work everywhere. When a product's monthly allowance runs out, you can spend API credits inside any workspace — opt-in per request, no surprises.";

/* ─────────────────────────────────────────────
   SAMVAAD DATA
───────────────────────────────────────────── */

const samvaadPlans = [
  {
    tier: "Free",
    price: "₹0",
    cadence: "/mo",
    cta: "Start free",
    highlighted: false,
    features: [
      { text: "500 Samvaad credits/month" },
      { text: "2 concurrent calls" },
      { text: "Web channel only" },
      { text: "11 Indian languages + code-mix" },
      { text: "Knowledge base (1 source)" },
      { text: "Community support" },
    ],
  },
  {
    tier: "Pro",
    price: "₹9,999",
    cadence: "/mo",
    cta: "Get Pro",
    highlighted: true,
    badge: "Most Popular",
    accentFeatures: true,
    features: [
      { text: "12,500 Samvaad credits/month" },
      { text: "10 concurrent calls" },
      { text: "Voice + web + WhatsApp" },
      { text: "Knowledge bases + tool calling" },
      { text: "Real-time analytics + transcripts" },
      { text: "Email support · 1 business day" },
    ],
  },
  {
    tier: "Scale",
    price: "₹49,999",
    cadence: "/mo",
    cta: "Get Scale",
    highlighted: false,
    features: [
      { text: "75,000 Samvaad credits/month" },
      { text: "50 concurrent calls" },
      { text: "Omnichannel + telephony (PSTN, SIP)" },
      { text: "CRM and core-banking integrations" },
      { text: "Call recording + custom analytics" },
      { text: "Slack + dedicated Solutions Engineer" },
    ],
  },
  {
    tier: "Enterprise",
    price: "Custom",
    cta: "Contact Sales",
    highlighted: false,
    features: [
      { text: "Custom volume + outcome-based pricing" },
      { text: "Unlimited concurrent calls" },
      { text: "Air-gapped / on-prem via Chanakya" },
      { text: "Forward-deployed engineering" },
      { text: "99.9% SLA · dedicated TAM" },
      { text: "SOC 2 Type II · ISO 27001" },
    ],
  },
];

const samvaadCompareColumns = ["FREE", "PRO", "SCALE", "ENTERPRISE"];

const samvaadCompareRows = [
  { label: "USAGE", values: [], isSection: true },
  {
    label: "Samvaad credits/month",
    values: ["500", "12,500", "75,000", "Custom"],
  },
  {
    label: "Agent minutes (at 5 cr/min)",
    values: ["~100", "~2,500", "~15,000", "Custom"],
  },
  {
    label: "Concurrent calls",
    values: ["2", "10", "50", "Unlimited"],
  },
  { label: "CHANNELS", values: [], isSection: true },
  {
    label: "Web widget",
    values: [true, true, true, true],
  },
  {
    label: "Voice + WhatsApp",
    values: [false, true, true, true],
  },
  {
    label: "Telephony (PSTN, SIP)",
    values: [false, false, true, true],
  },
  { label: "CAPABILITIES", values: [], isSection: true },
  {
    label: "Knowledge bases",
    values: ["1 source", "Unlimited", "Unlimited", "Unlimited"],
  },
  {
    label: "Tool / function calling",
    values: [false, true, true, true],
  },
  {
    label: "Real-time analytics",
    values: [false, true, true, true],
  },
  { label: "DEPLOYMENT", values: [], isSection: true },
  {
    label: "Private VPC",
    values: [false, false, true, true],
  },
  {
    label: "On-prem / Chanakya",
    values: [false, false, false, true],
  },
];

const samvaadFaqQuestions = [
  "What's included in each agent minute?",
  "How do product credits work?",
  "What happens when I run out of credits?",
  "Is outcome-based pricing available?",
];

/* ─────────────────────────────────────────────
   STUDIO DATA
───────────────────────────────────────────── */

const studioCreatorPlans = [
  {
    tier: "Free",
    price: "₹0",
    cadence: "/mo",
    cta: "Start free",
    highlighted: false,
    features: [
      { text: "250 Studio credits/month" },
      { text: "~30 dubbed minutes" },
      { text: "11 languages + English" },
      { text: "Video dubbing — watermarked" },
      { text: "1 project" },
    ],
  },
  {
    tier: "Creator",
    price: "₹1,499",
    cadence: "/mo",
    cta: "Get Creator",
    highlighted: true,
    badge: "Most Popular",
    accentFeatures: true,
    features: [
      { text: "1,600 Studio credits/month" },
      { text: "~200 dubbed minutes" },
      { text: "No watermark on outputs" },
      { text: "Commercial-use license" },
      { text: "Instant voice cloning (1 voice)" },
      { text: "10 projects" },
    ],
  },
  {
    tier: "Team",
    price: "₹4,999",
    cadence: "/mo",
    cta: "Get Team",
    highlighted: false,
    features: [
      { text: "6,000 Studio credits/month" },
      { text: "~750 dubbed minutes" },
      { text: "3 team members" },
      { text: "Instant voice cloning (3 voices)" },
      { text: "Unlimited projects" },
      { text: "Email support · 1 business day" },
    ],
  },
];

const studioOrgPlans = [
  {
    tier: "Scale",
    price: "₹49,999",
    cadence: "/mo",
    cta: "Get Scale",
    highlighted: false,
    features: [
      { text: "80,000 Studio credits/month" },
      { text: "~10,000 dubbed minutes" },
      { text: "15 team members" },
      { text: "Custom voices (consent-based, up to 10)" },
      { text: "Studio API access for pipelines" },
      { text: "SSO / SCIM" },
    ],
  },
  {
    tier: "Enterprise",
    price: "Custom",
    cta: "Contact Sales",
    highlighted: false,
    features: [
      { text: "Unlimited team members" },
      { text: "Sarvam Dub Live (broadcast)" },
      { text: "Unlimited custom voice library" },
      { text: "On-prem rendering" },
      { text: "Forward-deployed engineering" },
      { text: "99.9% SLA" },
    ],
  },
];

const studioCompareColumns = ["FREE", "CREATOR", "TEAM", "SCALE", "ENT."];

const studioCompareRows = [
  { label: "USAGE", values: [], isSection: true },
  {
    label: "Studio credits/month",
    values: ["250", "1,600", "6,000", "80,000", "Custom"],
  },
  {
    label: "Dubbed minutes",
    values: ["~30", "~200", "~750", "~10,000", "Custom"],
  },
  {
    label: "Team members",
    values: ["1", "1", "3", "15", "Unlimited"],
  },
  {
    label: "Projects",
    values: ["1", "10", "Unlimited", "Unlimited", "Unlimited"],
  },
  {
    label: "API credit overflow when exhausted",
    values: [true, true, true, true, true],
  },
  { label: "DUBBING", values: [], isSection: true },
  {
    label: "Languages",
    values: ["11 + EN", "11 + EN", "11 + EN", "11 + EN", "Custom"],
  },
  {
    label: "Video dubbing",
    values: ["Watermark", true, true, true, true],
  },
  {
    label: "Instant voice cloning",
    values: [false, "1 voice", "3 voices", "10 voices", "Unlimited"],
  },
  {
    label: "Sarvam Dub Live",
    values: [false, false, false, false, true],
  },
  { label: "PLATFORM", values: [], isSection: true },
  {
    label: "Commercial-use license",
    values: [false, true, true, true, true],
  },
  {
    label: "Studio API access",
    values: [false, false, false, true, true],
  },
  {
    label: "On-prem rendering",
    values: [false, false, false, false, true],
  },
];

const studioFaqQuestions = [
  "How are Studio credits consumed?",
  "How does voice cloning work?",
  "Is Sarvam Dub Live available on all plans?",
  "Can I deploy Studio on-premises?",
];

/* ─────────────────────────────────────────────
   AKSHAR DATA
───────────────────────────────────────────── */

const aksharPlans = [
  {
    tier: "Free",
    price: "₹0",
    cadence: "/mo",
    cta: "Start free",
    highlighted: false,
    features: [
      { text: "1,000 Akshar credits/month" },
      { text: "500 pages at 2 credits/page" },
      { text: "All 22 languages + English" },
      { text: "10 pages per upload" },
      { text: "HTML / Markdown / JSON outputs" },
      { text: "1 extraction template" },
    ],
  },
  {
    tier: "Pro",
    price: "₹9,999",
    cadence: "/mo",
    cta: "Get Pro",
    highlighted: true,
    badge: "Most Popular",
    accentFeatures: true,
    features: [
      { text: "10,000 Akshar credits/month" },
      { text: "5,000 pages at 2 credits/page" },
      { text: "3 team members + 5 reviewers" },
      { text: "Layout-preserving + bounding boxes" },
      { text: "Visual grounding (click → source)" },
      { text: "Agentic proofreading loop" },
    ],
  },
  {
    tier: "Scale",
    price: "₹49,999",
    cadence: "/mo",
    cta: "Get Scale",
    highlighted: false,
    features: [
      { text: "60,000 Akshar credits/month" },
      { text: "30,000 pages at 2 credits/page" },
      { text: "10 team members + 25 reviewers" },
      { text: "Industry templates (BFSI, healthcare, legal)" },
      { text: "Custom extractor library" },
      { text: "Akshar API + SSO + Solutions Engineer" },
    ],
  },
  {
    tier: "Enterprise",
    price: "Custom",
    cta: "Contact Sales",
    highlighted: false,
    features: [
      { text: "Custom credit pool + volume discounts" },
      { text: "Unlimited team members + reviewers" },
      { text: "Custom templates built with your team" },
      { text: "Air-gapped / on-prem via Chanakya" },
      { text: "Forward-deployed engineering" },
      { text: "99.9% SLA" },
    ],
  },
];

const aksharCompareColumns = ["FREE", "PRO", "SCALE", "ENTERPRISE"];

const aksharCompareRows = [
  { label: "USAGE", values: [], isSection: true },
  {
    label: "Akshar credits/month",
    values: ["1,000", "10,000", "60,000", "Custom"],
  },
  {
    label: "Pages at 2 credits/page",
    values: ["500", "5,000", "30,000", "Custom"],
  },
  {
    label: "Team members",
    values: ["1", "3", "10", "Unlimited"],
  },
  {
    label: "Reviewers (HITL)",
    values: ["1", "5", "25", "Unlimited"],
  },
  { label: "EXTRACTION", values: [], isSection: true },
  {
    label: "Layout preservation + bounding boxes",
    values: [false, true, true, true],
  },
  {
    label: "Visual grounding (click → source)",
    values: [false, false, true, true],
  },
  {
    label: "Agentic proofreading",
    values: [false, true, true, true],
  },
  { label: "TEMPLATES & INTEGRATIONS", values: [], isSection: true },
  {
    label: "Extraction templates",
    values: ["1", "Unlimited", "Unlimited", "Custom-built"],
  },
  {
    label: "Industry templates (BFSI, healthcare, legal)",
    values: [false, false, true, true],
  },
  { label: "DEPLOYMENT", values: [], isSection: true },
  {
    label: "SSO / SCIM",
    values: [false, false, true, true],
  },
  {
    label: "On-prem / air-gapped",
    values: [false, false, false, true],
  },
];

const aksharFaqQuestions = [
  "How are Akshar credits consumed?",
  "What document formats does Akshar support?",
  "How does the agentic proofreading loop work?",
  "Are these products available on-prem?",
];

/* ─────────────────────────────────────────────
   SUB-TAB COMPONENTS
───────────────────────────────────────────── */

function SamvaadSubTab() {
  return (
    <div className="space-y-10">
      {/* Hero */}
      <div className="space-y-3">
        <h1 className="text-[24px] font-medium text-[#1A1A1A] leading-snug">
          Voice agents for India. 5 credits/min, full stack included.
        </h1>
        <p className="text-[14px] text-[#6B6B6B] leading-relaxed max-w-2xl">
          Every agent minute bundles Saaras V3 (STT) + Sarvam-30B (LLM) +
          Bulbul V3 (TTS) into one rate. No separate bills for speech, language
          model, and synthesis. 11 Indian languages, sub-500 ms latency,
          omnichannel.
        </p>
      </div>

      {/* Plans */}
      <div className="grid grid-cols-4 gap-4">
        {samvaadPlans.map((plan, i) => (
          <PricingCard key={i} {...plan} />
        ))}
      </div>

      {/* Outcome-based pricing banner */}
      <EnterpriseBanner
        title="Outcome-based pricing. Pay per resolved query, not per minute."
        subtitle="Per resolved call, per qualified lead, per completed transaction. Available on Enterprise."
        cta="Contact Sales"
        dark
      />

      {/* Trust strip */}
      <TrustStrip
        label="POWERING"
        items={[
          "Tata Capital",
          "SBI Life Insurance",
          "Razorpay × Swiggy",
          "The Derma Co",
          "100M+ conversations",
        ]}
      />

      {/* Compare table */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="text-[20px] font-medium text-[#1A1A1A]">
            What&apos;s included
          </h2>
          <span className="text-[11px] text-[#999999]">
            Rate · 5 credits/min voice · 2 credits/msg chat · telephony at cost
          </span>
        </div>
        <CompareTable
          columns={samvaadCompareColumns}
          rows={samvaadCompareRows}
        />
      </div>

      {/* Info banner */}
      <InfoBanner text={INFO_BANNER_TEXT} />

      {/* FAQ */}
      <FAQ title="FAQ" questions={samvaadFaqQuestions} />
    </div>
  );
}

function StudioSubTab() {
  return (
    <div className="space-y-10">
      {/* Hero */}
      <div className="space-y-3">
        <h1 className="text-[24px] font-medium text-[#1A1A1A] leading-snug">
          Dub video content into every Indian language.
        </h1>
        <p className="text-[14px] text-[#6B6B6B] leading-relaxed max-w-2xl">
          Studio powers PMO Mann Ki Baat (11 languages monthly), NCERT, NPTEL,
          and IIT Madras lectures. Video dubbing with consent-based voice cloning
          across 11 Indian languages plus English.
        </p>
      </div>

      {/* For Creators label */}
      <div>
        <span className="text-[10px] font-medium uppercase tracking-[0.12em] text-[#999999]">
          FOR CREATORS
        </span>
      </div>

      {/* Creator Plans */}
      <div className="grid grid-cols-3 gap-4">
        {studioCreatorPlans.map((plan, i) => (
          <PricingCard key={i} {...plan} />
        ))}
      </div>

      {/* For Organizations label */}
      <div>
        <span className="text-[10px] font-medium uppercase tracking-[0.12em] text-[#999999]">
          FOR ORGANIZATIONS
        </span>
      </div>

      {/* Organization Plans */}
      <div className="grid grid-cols-2 gap-4">
        {studioOrgPlans.map((plan, i) => (
          <PricingCard key={i} {...plan} />
        ))}
      </div>

      {/* Dark banner */}
      <EnterpriseBanner
        title="Dub video content into every Indian language."
        subtitle="11 languages, consent-based voice cloning, broadcast-grade."
        cta="Contact Sales"
        dark
      />

      {/* Trust strip */}
      <TrustStrip
        label="TRUSTED BY"
        items={[
          "PMO Mann Ki Baat",
          "NCERT",
          "NPTEL",
          "IIT Madras",
          "Republic TV",
        ]}
      />

      {/* Compare table */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="text-[20px] font-medium text-[#1A1A1A]">
            What&apos;s included
          </h2>
          <span className="text-[11px] text-[#999999]">
            Rate · 8 credits/dubbed-min (per target language)
          </span>
        </div>
        <CompareTable
          columns={studioCompareColumns}
          rows={studioCompareRows}
        />
      </div>

      {/* Info banner */}
      <InfoBanner text={INFO_BANNER_TEXT} />

      {/* FAQ */}
      <FAQ title="FAQ" questions={studioFaqQuestions} />
    </div>
  );
}

function AksharSubTab() {
  return (
    <div className="space-y-10">
      {/* Hero */}
      <div className="space-y-3">
        <h1 className="text-[24px] font-medium text-[#1A1A1A] leading-snug">
          Indian documents, finally legible to a machine.
        </h1>
        <p className="text-[14px] text-[#6B6B6B] leading-relaxed max-w-2xl">
          Akshar reads what global OCR can&apos;t — handwritten KYC, historical
          manuscripts, multi-column tables, and regulatory forms across all 22
          Indian languages. Powered by Sarvam Vision (3B SSM VLM) — 84.3% on
          olmOCR-Bench, 93.28% on OmniDocBench v1.5.
        </p>
      </div>

      {/* Plans */}
      <div className="grid grid-cols-4 gap-4">
        {aksharPlans.map((plan, i) => (
          <PricingCard key={i} {...plan} />
        ))}
      </div>

      {/* Dark banner */}
      <EnterpriseBanner
        title="Air-gapped Akshar for regulated document workflows."
        subtitle="Industry templates for BFSI, healthcare, and legal. Deployed via Chanakya."
        cta="Contact Sales"
        dark
      />

      {/* Benchmark strip */}
      <TrustStrip
        label="BENCHMARK LEADERSHIP"
        items={[
          "olmOCR-Bench: 84.3%",
          "OmniDocBench: 93.28%",
          "All 22 scheduled Indian languages",
        ]}
      />

      {/* Compare table */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="text-[20px] font-medium text-[#1A1A1A]">
            What&apos;s included
          </h2>
          <span className="text-[11px] text-[#999999]">
            Rate · 2 credits/page extraction · 20 credits/10K chars translation
          </span>
        </div>
        <CompareTable
          columns={aksharCompareColumns}
          rows={aksharCompareRows}
        />
      </div>

      {/* Info banner */}
      <InfoBanner text={INFO_BANNER_TEXT} />

      {/* FAQ */}
      <FAQ title="FAQ" questions={aksharFaqQuestions} />
    </div>
  );
}

/* ─────────────────────────────────────────────
   SUB-TAB CONFIG
───────────────────────────────────────────── */

const SUB_TABS = [
  { key: "samvaad", label: "Samvaad", sub: "Voice & chat agents" },
  { key: "studio", label: "Studio", sub: "Dubbing & content" },
  { key: "akshar", label: "Akshar", sub: "Document AI" },
];

/* ─────────────────────────────────────────────
   MAIN COMPONENT
───────────────────────────────────────────── */

export default function PlatformTab({
  activeSubTab,
  onSubTabChange,
}: {
  activeSubTab: string;
  onSubTabChange: (tab: string) => void;
}) {
  return (
    <div className="flex flex-col gap-8">
      {/* Sub-tab pill selector */}
      <div className="flex justify-center">
        <div className="inline-flex items-center border border-[#E8E8E8] rounded-xl p-1 gap-1">
          {SUB_TABS.map((tab) => {
            const isActive = activeSubTab === tab.key;
            return (
              <button
                key={tab.key}
                onClick={() => onSubTabChange(tab.key)}
                className={`flex flex-col items-center px-5 py-2.5 rounded-lg transition-colors cursor-pointer ${
                  isActive
                    ? "bg-[#1A1A1A] text-white"
                    : "text-[#6B6B6B] hover:text-[#1A1A1A] hover:bg-[#F5F5F5]"
                }`}
              >
                <span
                  className={`text-[14px] font-medium leading-snug ${
                    isActive ? "text-white" : "text-[#1A1A1A]"
                  }`}
                >
                  {tab.label}
                </span>
                <span
                  className={`text-[11px] leading-snug ${
                    isActive ? "text-[#ABABAB]" : "text-[#999999]"
                  }`}
                >
                  {tab.sub}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Active sub-tab content */}
      {activeSubTab === "samvaad" && <SamvaadSubTab />}
      {activeSubTab === "studio" && <StudioSubTab />}
      {activeSubTab === "akshar" && <AksharSubTab />}
    </div>
  );
}
