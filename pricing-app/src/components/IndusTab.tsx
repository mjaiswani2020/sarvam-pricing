"use client";

import { PricingCard, CompareTable, FAQ } from "./shared";

/* ─── Data ─── */

const freePlan = {
  tier: "Free",
  price: "₹0",
  cadence: "/mo",
  cta: "Get Started",
  highlighted: false,
  accentFeatures: true,
  features: [
    { text: "Sarvam-30B", sub: "Unlimited" },
    { text: "Sarvam-105B", sub: "20 messages/day" },
    { text: "All 22 Indian languages + English" },
    { text: "Voice in 11 languages", sub: "30 min/day" },
    { text: "Document scanning", sub: "5 pages/day" },
    { text: "Web search" },
    { text: "₹100 Sarvam credits/month" },
    { text: "Web, iOS, Android" },
  ],
};

const plusPlan = {
  tier: "Plus",
  price: "₹399",
  cadence: "/mo",
  cta: "Get Plus",
  highlighted: true,
  badge: "Most Popular",
  accentFeatures: true,
  features: [
    { text: "Sarvam-105B (128K context)", sub: "Generous weekly limits" },
    { text: "Unlimited voice chat", sub: "Sub-500 ms latency" },
    { text: "Document scanning", sub: "₹1.50/page from credits" },
    { text: "Reasoning mode and web search" },
    { text: "₹350 Sarvam credits/month" },
    { text: "Sarvam Kaze glasses", sub: "Included, no extra fee" },
    { text: "Early access to new models" },
  ],
};

const proPlan = {
  tier: "Pro",
  price: "₹1,499",
  cadence: "/mo",
  cta: "Get Pro",
  highlighted: false,
  accentFeatures: true,
  features: [
    { text: "Everything in Plus" },
    { text: "₹1,300 credits/month", sub: "Rolls over" },
    { text: "Priority access during peak hours" },
    { text: "3 custom voice clones" },
    { text: "Video dubbing and doc translation via Studio" },
    { text: "Commercial-use license on all outputs" },
    { text: "Extended context and Pro reasoning" },
  ],
};

const compareColumns = ["FREE", "PLUS", "PRO"];

const compareRows = [
  { label: "CONVERSATIONS", values: [], isSection: true },
  {
    label: "Sarvam-105B (frontier)",
    values: ["20 messages/day", "Unlimited", "Unlimited + priority"],
  },
  {
    label: "Sarvam-30B (everyday)",
    values: [
      "Unlimited (rate-limited)",
      "Unlimited",
      "Unlimited",
    ],
  },
  {
    label: "Context window",
    values: ["32K", "128K", "128K + extended"],
  },
  {
    label: "Web search",
    values: ["Limited", true, true],
  },
  {
    label: "Reasoning mode",
    values: ["Limited", true, "Priority"],
  },
  { label: "VOICE", values: [], isSection: true },
  {
    label: "Voice conversations",
    values: ["30 min/day", "Unlimited", "Unlimited + priority"],
  },
  {
    label: "Voice cloning",
    values: [false, false, "3 voices included"],
  },
  { label: "DOCUMENTS", values: [], isSection: true },
  {
    label: "Scan PDFs, images, handwritten notes",
    values: [
      "5 pages/day",
      "₹1.50/page from credits",
      "₹1.50/page from credits",
    ],
  },
  { label: "CREDITS & EXTRAS", values: [], isSection: true },
  {
    label: "Monthly Sarvam credits",
    values: ["₹100", "₹350", "₹1,300 (rolls over)"],
  },
  {
    label: "Commercial-use license",
    values: [false, false, true],
  },
  {
    label: "Sarvam Kaze glasses",
    values: [false, "Included", "Included"],
  },
  {
    label: "Sarvam Studio (dubbing, translation)",
    values: [false, false, "Personal projects"],
  },
  {
    label: "Early access to new models",
    values: [false, true, true],
  },
];

const faqQuestions = [
  "Which Indic languages does Indus support?",
  "How does voice cloning work on the Plus plan?",
  "Do unused credits roll over to the next month?",
  "Can I use Indus content commercially?",
];

/* ─── Component ─── */

export default function IndusTab() {
  return (
    <div className="space-y-12">
      {/* Hero */}
      <div className="space-y-3">
        <h1 className="text-[24px] font-medium text-[#1A1A1A] leading-snug">
          The AI assistant that speaks India&apos;s languages.
        </h1>
        <p className="text-[14px] text-[#6B6B6B] leading-relaxed max-w-2xl">
          Indus runs on Sarvam-105B and Sarvam 30B — India&apos;s open-weight
          frontier model. Text in all 22 scheduled languages. Voice in 11.
          Document understanding across printed, handwritten, and historical
          scripts. Built, trained, and hosted in India.
        </p>
      </div>

      {/* Plans */}
      <div className="grid grid-cols-3 gap-4">
        <PricingCard {...freePlan} />
        <PricingCard {...plusPlan} />
        <PricingCard {...proPlan} />
      </div>

      {/* Contact Sales Banner */}
      <div className="flex items-center justify-between rounded-xl border border-[#E8E8E8] bg-[#FAFAFA] px-6 py-4">
        <span className="text-[13px] text-[#6B6B6B]">
          Need on-prem, custom, or air-gapped deployment?
        </span>
        <a
          href="#"
          className="text-[13px] font-medium text-[#F97316] hover:underline shrink-0 ml-4"
        >
          Contact Sales →
        </a>
      </div>

      {/* Compare Plans Table */}
      <div className="space-y-4">
        <div className="space-y-1">
          <h2 className="text-[24px] font-medium text-[#1A1A1A]">
            Compare plans
          </h2>
          <p className="text-[14px] text-[#6B6B6B]">
            Text works in all 22 Indian languages on every plan. Voice is in 11
            languages today, 22 on the roadmap.
          </p>
        </div>
        <CompareTable columns={compareColumns} rows={compareRows} />
      </div>

      {/* FAQ */}
      <FAQ title="Frequently asked questions" questions={faqQuestions} />
    </div>
  );
}
