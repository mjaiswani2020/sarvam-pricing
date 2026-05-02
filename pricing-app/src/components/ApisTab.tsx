"use client";

import React, { useState } from "react";
import { PricingCard, FAQ, EnterpriseBanner } from "./shared";

/* ─── Types ─── */
type ApiRow = {
  name: string;
  nameSub?: string;
  type: string;
  description: string;
  price: string;
};

type ApiTab = {
  label: string;
  rows: ApiRow[];
};

/* ─── Data ─── */
const plans = [
  {
    tier: "Free",
    price: "Pay as you go",
    cta: "Get Started",
    features: [
      { text: "No bonus credits", sub: "Bonus Credits" },
      { text: "60 requests/min", sub: "Rate Limit" },
      { text: "Community support", sub: "Support" },
      { text: "Prototyping & testing", sub: "Best For" },
    ],
    highlighted: false,
  },
  {
    tier: "Builder",
    price: "₹10,000",
    cadence: "/mo",
    bonus: "₹1,000 bonus credits",
    cta: "Get Builder",
    features: [
      { text: "11,000 credits", sub: "Total Credits" },
      { text: "200 requests/min", sub: "Rate Limit" },
      { text: "Email support", sub: "Support" },
      { text: "Startups & POCs", sub: "Best For" },
    ],
    highlighted: false,
  },
  {
    tier: "Scale",
    price: "₹50,000",
    cadence: "/mo",
    bonus: "₹7,500 bonus credits",
    cta: "Get Scale",
    badge: "Most Popular",
    features: [
      { text: "57,500 credits", sub: "Total Credits" },
      { text: "1,000 requests/min", sub: "Rate Limit" },
      { text: "Email support", sub: "Support" },
      { text: "Production workloads", sub: "Best For" },
    ],
    highlighted: true,
    accentFeatures: true,
  },
  {
    tier: "Enterprise",
    price: "Custom",
    cta: "Contact Sales",
    features: [
      { text: "Custom credits", sub: "Total Credits" },
      { text: "Custom rate limits", sub: "Rate Limit" },
      { text: "Dedicated support", sub: "Support" },
      { text: "Scale & sovereignty", sub: "Best For" },
    ],
    highlighted: false,
  },
];

const apiTabs: ApiTab[] = [
  {
    label: "Speech to Text",
    rows: [
      {
        name: "Speech to Text",
        nameSub: "Charged per second of audio",
        type: "STT",
        description: "Real-time speech recognition, 22 Indic languages",
        price: "₹30 /hr",
      },
      {
        name: "Speech to Text with Diarization",
        nameSub: "With speaker identification",
        type: "STT",
        description: "Speaker-separated transcription",
        price: "₹45 /hr",
      },
      {
        name: "Speech to Text & Translate",
        nameSub: "Transcribes and translates",
        type: "STT",
        description: "Transcribe and translate to English",
        price: "₹30 /hr",
      },
      {
        name: "Speech to Text, Translate & Diarization",
        nameSub: "Full pipeline with speakers",
        type: "STT",
        description: "Full pipeline: transcription, translation, and diarization",
        price: "₹45 /hr",
      },
    ],
  },
  {
    label: "Text to Speech",
    rows: [
      {
        name: "Text to Speech (Bulbul v3)",
        nameSub: "Charged per character",
        type: "TTS",
        description: "Latest generation voice synthesis, high quality",
        price: "₹30 /10K chars",
      },
      {
        name: "Text to Speech (Bulbul v2)",
        nameSub: "Charged per character",
        type: "TTS",
        description: "Previous generation voice synthesis, cost-effective",
        price: "₹15 /10K chars",
      },
    ],
  },
  {
    label: "Translation & Language",
    rows: [
      {
        name: "Sarvam Translate V1",
        nameSub: "Rounded up to nearest character",
        type: "Translate",
        description: "High-quality machine translation across Indic languages",
        price: "₹20 /10K chars",
      },
      {
        name: "Translate Mayura V1",
        nameSub: "Rounded up to nearest character",
        type: "Translate",
        description: "Alternative translation model for Indic languages",
        price: "₹20 /10K chars",
      },
      {
        name: "Transliterate",
        nameSub: "Rounded up to nearest character",
        type: "Translit",
        description: "Script conversion between Latin and Indic scripts",
        price: "₹20 /10K chars",
      },
      {
        name: "Language Identification",
        nameSub: "Rounded up to nearest character",
        type: "LangID",
        description: "Detect language from text input",
        price: "₹3.5 /10K chars",
      },
    ],
  },
  {
    label: "Vision & Documents",
    rows: [
      {
        name: "Sarvam Vision",
        nameSub: "Image analysis and digitization",
        type: "Vision",
        description: "Vision API for image analysis and document digitization",
        price: "₹1.5 /page",
      },
    ],
  },
  {
    label: "Foundation LLMs",
    rows: [
      {
        name: "Sarvam-105B",
        nameSub: "Chat completion",
        type: "LLM",
        description:
          "Most capable model. Input ₹4 · Cached ₹2.5 · Output ₹16 per 1M tokens",
        price: "₹4 /1M tokens",
      },
      {
        name: "Sarvam-30B",
        nameSub: "Chat completion",
        type: "LLM",
        description:
          "Cost-efficient model. Input ₹2.5 · Cached ₹1.5 · Output ₹10 per 1M tokens",
        price: "₹2.5 /1M tokens",
      },
    ],
  },
];

const serviceTiers = [
  {
    name: "Batch",
    multiplier: "0.5×",
    description: "Up to 24h turnaround. Best for offline processing.",
    badge: null,
  },
  {
    name: "Flex",
    multiplier: "0.5×",
    description: "Variable latency. Best for cost-sensitive workloads.",
    badge: null,
  },
  {
    name: "Standard",
    multiplier: "1×",
    description: "Consistent low latency. Best for production apps.",
    badge: "Default",
  },
  {
    name: "Priority",
    multiplier: "1.8×",
    description: "Guaranteed SLA. Best for real-time and enterprise.",
    badge: null,
  },
];

const volumeDiscounts = [
  { range: "₹10L – ₹50L", discount: "10% off" },
  { range: "₹50L – ₹2Cr", discount: "20% off" },
  { range: "₹2Cr – ₹10Cr", discount: "30% off" },
  { range: "₹10Cr+", discount: "Custom" },
];

const faqQuestions = [
  "How does cached input pricing work?",
  "Can I mix service tiers within the same project?",
  "What are the rate limits per API?",
  "Do credits expire?",
  "Can I use API credits inside product workspaces?",
];

/* ─── Sub-components ─── */

function ModelCard({
  name,
  badge,
  description,
  inputPrice,
  cachedInputPrice,
  outputPrice,
}: {
  name: string;
  badge?: string;
  description: string;
  inputPrice: string;
  cachedInputPrice: string;
  outputPrice: string;
}) {
  return (
    <div className="flex flex-col rounded-xl border border-[#E8E8E8] bg-white p-5">
      <div className="flex items-center gap-2 mb-3">
        <span className="text-[15px] font-medium text-[#1A1A1A]">{name}</span>
        {badge && (
          <span className="px-2 py-0.5 rounded text-[11px] font-medium bg-[#1A1A1A] text-white">
            {badge}
          </span>
        )}
      </div>
      <p className="text-[13px] text-[#6B6B6B] leading-relaxed mb-4">
        {description}
      </p>
      <div className="grid grid-cols-3 gap-4 mb-4">
        <div>
          <span className="text-[11px] text-[#999999] uppercase tracking-wider block mb-1">
            INPUT
          </span>
          <span className="text-[15px] font-medium text-[#1A1A1A] font-[family-name:var(--font-mono)]">
            {inputPrice.split(" ")[0]}
          </span>
          <span className="text-[11px] text-[#999999] block mt-0.5">
            per 1K tokens
          </span>
        </div>
        <div>
          <span className="text-[11px] text-[#999999] uppercase tracking-wider block mb-1">
            CACHED INPUT
          </span>
          <span className="text-[15px] font-medium text-[#1A1A1A] font-[family-name:var(--font-mono)]">
            {cachedInputPrice.split(" ")[0]}
          </span>
          <span className="text-[11px] text-[#999999] block mt-0.5">
            per 1K tokens
          </span>
        </div>
        <div>
          <span className="text-[11px] text-[#999999] uppercase tracking-wider block mb-1">
            OUTPUT
          </span>
          <span className="text-[15px] font-medium text-[#1A1A1A] font-[family-name:var(--font-mono)]">
            {outputPrice.split(" ")[0]}
          </span>
          <span className="text-[11px] text-[#999999] block mt-0.5">
            per 1K tokens
          </span>
        </div>
      </div>
      <a
        href="#"
        className="text-[13px] text-[#F97316] hover:underline mt-auto"
      >
        Open model details →
      </a>
    </div>
  );
}

function ApiTable({ rows }: { rows: ApiRow[] }) {
  return (
    <div className="border border-[#E8E8E8] rounded-xl overflow-hidden">
      {/* Header */}
      <div
        className="grid bg-[#F8F8F8] border-b border-[#E8E8E8]"
        style={{ gridTemplateColumns: "2fr 100px 2fr 140px" }}
      >
        <div className="px-5 py-3 text-[11px] uppercase tracking-wider text-[#999999] font-medium">
          Model / endpoint
        </div>
        <div className="px-4 py-3 text-[11px] uppercase tracking-wider text-[#999999] font-medium">
          Type
        </div>
        <div className="px-4 py-3 text-[11px] uppercase tracking-wider text-[#999999] font-medium">
          What it does
        </div>
        <div className="px-4 py-3 text-[11px] uppercase tracking-wider text-[#999999] font-medium text-right">
          Price
        </div>
      </div>
      {/* Rows */}
      {rows.map((row, i) => (
        <div
          key={i}
          className="grid border-b border-[#EEEEEE] last:border-b-0 hover:bg-[#F8F8F8] transition-colors"
          style={{ gridTemplateColumns: "2fr 100px 2fr 140px" }}
        >
          <div className="px-5 py-3.5">
            <div className="text-[13px] text-[#1A1A1A] font-medium">
              {row.name}
            </div>
            {row.nameSub && (
              <div className="text-[11px] text-[#999999] mt-0.5">
                {row.nameSub}
              </div>
            )}
          </div>
          <div className="px-4 py-3.5 flex items-center">
            <span className="text-[13px] text-[#6B6B6B]">
              {row.type}
            </span>
          </div>
          <div className="px-4 py-3.5 text-[13px] text-[#6B6B6B] leading-relaxed flex items-center">
            {row.description}
          </div>
          <div className="px-4 py-3.5 flex items-center justify-end">
            <span className="text-[13px] font-medium text-[#1A1A1A] font-[family-name:var(--font-mono)]">
              {row.price}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

function ServiceTierCard({
  name,
  multiplier,
  description,
  badge,
}: {
  name: string;
  multiplier: string;
  description: string;
  badge: string | null;
}) {
  return (
    <div className="flex flex-col rounded-xl border border-[#E8E8E8] bg-white p-5">
      <div className="flex items-center gap-2 mb-2">
        <span className="text-[14px] font-medium text-[#1A1A1A]">{name}</span>
        {badge && (
          <span className="px-2 py-0.5 rounded text-[11px] font-medium bg-[#F0F0F0] text-[#6B6B6B] border border-[#E8E8E8]">
            {badge}
          </span>
        )}
      </div>
      <div className="text-[28px] font-medium text-[#1A1A1A] tracking-tight font-[family-name:var(--font-mono)] mb-3">
        {multiplier}
      </div>
      <p className="text-[13px] text-[#6B6B6B] leading-relaxed">
        {description}
      </p>
    </div>
  );
}

/* ─── Main Component ─── */
export default function ApisTab() {
  const [activeApiTab, setActiveApiTab] = useState(0);

  return (
    <div className="flex flex-col gap-10">
      {/* ── 1. Plans ── */}
      <section>
        <div className="mb-5">
          <h2 className="text-[20px] font-medium text-[#1A1A1A]">Plans</h2>
          <p className="text-[13px] text-[#6B6B6B] mt-1">
            Choose the plan that fits your usage. Upgrade or downgrade anytime.
          </p>
        </div>
        <div
          className="grid gap-4"
          style={{ gridTemplateColumns: "repeat(4, 1fr)" }}
        >
          {plans.map((plan, i) => (
            <PricingCard
              key={i}
              tier={plan.tier}
              price={plan.price}
              cadence={plan.cadence}
              bonus={plan.bonus}
              cta={plan.cta}
              features={plan.features}
              highlighted={plan.highlighted}
              badge={plan.badge}
              accentFeatures={plan.accentFeatures}
            />
          ))}
        </div>
      </section>

      {/* ── 2. Model Cards ── */}
      <section>
        <div className="mb-5">
          <h2 className="text-[20px] font-medium text-[#1A1A1A]">
            Our most powerful models
          </h2>
          <p className="text-[13px] text-[#6B6B6B] mt-1">
            India&apos;s leading foundation models for Indic languages
          </p>
        </div>
        <div className="grid gap-4" style={{ gridTemplateColumns: "1fr 1fr" }}>
          <ModelCard
            name="Sarvam-105B"
            badge="Frontier"
            description="Our most capable model. State-of-the-art on Indic language benchmarks with 22 language support."
            inputPrice="₹0.15 per 1K tokens"
            cachedInputPrice="₹0.075 per 1K tokens"
            outputPrice="₹0.60 per 1K tokens"
          />
          <ModelCard
            name="Sarvam-30B"
            description="Fast, cost-efficient model for production workloads. Optimised for latency-sensitive applications."
            inputPrice="₹0.05 per 1K tokens"
            cachedInputPrice="₹0.025 per 1K tokens"
            outputPrice="₹0.20 per 1K tokens"
          />
        </div>
      </section>

      {/* ── 3. Enterprise APIs Banner ── */}
      <section>
        <EnterpriseBanner
          title="Enterprise APIs"
          subtitle="Custom rate limits, fine-tuning, dedicated capacity, on-prem licenses."
          cta="Contact Sales"
          dark
        />
      </section>

      {/* ── 4. Browse our APIs ── */}
      <section>
        <div className="mb-5">
          <h2 className="text-[20px] font-medium text-[#1A1A1A]">
            Browse our APIs
          </h2>
          <p className="text-[13px] text-[#6B6B6B] mt-1">
            Detailed pricing for every model and endpoint
          </p>
        </div>
        {/* Sub-tabs */}
        <div className="flex items-center gap-1 mb-4 border-b border-[#E8E8E8]">
          {apiTabs.map((tab, i) => (
            <button
              key={i}
              onClick={() => setActiveApiTab(i)}
              className={`px-4 py-2.5 text-[13px] font-medium transition-colors cursor-pointer border-b-2 -mb-px ${
                activeApiTab === i
                  ? "border-[#1A1A1A] text-[#1A1A1A]"
                  : "border-transparent text-[#6B6B6B] hover:text-[#1A1A1A]"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
        {/* Table */}
        <ApiTable rows={apiTabs[activeApiTab].rows} />
      </section>

      {/* ── 5. Service Tiers ── */}
      <section>
        <div className="mb-5">
          <h2 className="text-[20px] font-medium text-[#1A1A1A]">
            Service tiers
          </h2>
          <p className="text-[13px] text-[#6B6B6B] mt-1">
            Choose the right balance of cost and speed for each request
          </p>
        </div>
        <div
          className="grid gap-4"
          style={{ gridTemplateColumns: "repeat(4, 1fr)" }}
        >
          {serviceTiers.map((tier, i) => (
            <ServiceTierCard
              key={i}
              name={tier.name}
              multiplier={tier.multiplier}
              description={tier.description}
              badge={tier.badge}
            />
          ))}
        </div>
      </section>

      {/* ── 6. Volume Discounts ── */}
      <section>
        <div className="mb-5">
          <h2 className="text-[20px] font-medium text-[#1A1A1A]">
            Volume discounts
          </h2>
          <p className="text-[13px] text-[#6B6B6B] mt-1">
            Commit to a monthly spend and save automatically
          </p>
        </div>
        <div className="border border-[#E8E8E8] rounded-xl overflow-hidden">
          {/* Header */}
          <div
            className="grid bg-[#F8F8F8] border-b border-[#E8E8E8]"
            style={{ gridTemplateColumns: "1fr 1fr" }}
          >
            <div className="px-5 py-3 text-[11px] uppercase tracking-wider text-[#999999] font-medium">
              Monthly commitment
            </div>
            <div className="px-5 py-3 text-[11px] uppercase tracking-wider text-[#999999] font-medium text-right">
              Discount
            </div>
          </div>
          {/* Rows */}
          {volumeDiscounts.map((row, i) => (
            <div
              key={i}
              className="grid border-b border-[#EEEEEE] last:border-b-0 hover:bg-[#F8F8F8] transition-colors"
              style={{ gridTemplateColumns: "1fr 1fr" }}
            >
              <div className="px-5 py-3.5 text-[13px] text-[#1A1A1A] font-medium font-[family-name:var(--font-mono)]">
                {row.range}
              </div>
              <div className="px-5 py-3.5 text-[13px] font-medium text-[#F97316] font-[family-name:var(--font-mono)] text-right">
                {row.discount}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── 7. FAQ ── */}
      <section>
        <FAQ title="Frequently asked questions" questions={faqQuestions} />
      </section>
    </div>
  );
}
