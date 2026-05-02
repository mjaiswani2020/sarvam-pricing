"use client";

import { Check, ChevronDown } from "lucide-react";
import React, { useState } from "react";

/* ─── Pricing Card ─── */
export type PlanFeature = {
  text: string;
  sub?: string;
};

export type PlanCardProps = {
  tier: string;
  price: string;
  cadence?: string;
  bonus?: string;
  cta: string;
  features: PlanFeature[];
  highlighted?: boolean;
  badge?: string;
  accentFeatures?: boolean;
};

export function PricingCard({
  tier,
  price,
  cadence,
  bonus,
  cta,
  features,
  highlighted,
  badge,
  accentFeatures,
}: PlanCardProps) {
  return (
    <div
      className={`relative flex flex-col rounded-xl border p-5 ${
        highlighted
          ? "border-[#F97316] border-[1.5px] bg-white"
          : "border-[#E8E8E8] bg-white"
      }`}
    >
      {badge && (
        <div className="flex items-center gap-1.5 mb-2">
          <Check size={14} strokeWidth={2.5} className="text-[#6BBF6B]" />
          <span className="text-[12px] font-medium text-[#F97316]">
            {badge}
          </span>
        </div>
      )}
      <div className="text-[13px] text-[#6B6B6B]">{tier}</div>
      <div className="mt-1 flex items-baseline gap-1">
        <span className="text-[24px] font-medium text-[#1A1A1A] tracking-tight">
          {price}
        </span>
        {cadence && (
          <span className="text-[14px] text-[#6B6B6B]">{cadence}</span>
        )}
      </div>
      {bonus && (
        <div className="flex items-center gap-1 mt-1">
          <Check size={12} strokeWidth={2.5} className="text-[#6BBF6B]" />
          <span className="text-[12px] text-[#6BBF6B] font-medium">
            {bonus}
          </span>
        </div>
      )}
      <button
        className={`mt-4 w-full py-2 rounded-md text-[13px] font-medium transition-colors cursor-pointer ${
          highlighted
            ? "bg-[#1A1A1A] text-white hover:bg-[#333]"
            : "bg-white border border-[#D4D4D4] text-[#1A1A1A] hover:bg-[#F5F5F5]"
        }`}
      >
        {cta}
      </button>
      <ul className="mt-5 space-y-3">
        {features.map((f, i) => (
          <li key={i} className="flex items-start gap-2">
            <Check
              size={14}
              strokeWidth={2.5}
              className={`mt-0.5 shrink-0 ${
                accentFeatures && highlighted
                  ? "text-[#6BBF6B]"
                  : "text-[#1A1A1A]"
              }`}
            />
            <div>
              <span className="text-[13px] text-[#1A1A1A] leading-snug font-medium">
                {f.text}
              </span>
              {f.sub && (
                <div className="text-[11px] text-[#999999] mt-0.5">
                  {f.sub}
                </div>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ─── Compare Table ─── */
export type CompareRow = {
  label: string;
  values: (string | boolean)[];
  isSection?: boolean;
};

export function CompareTable({
  columns,
  rows,
  rateNote,
}: {
  columns: string[];
  rows: CompareRow[];
  rateNote?: string;
}) {
  return (
    <div className="border border-[#E8E8E8] rounded-xl overflow-hidden">
      {/* Header */}
      <div
        className="grid border-b border-[#E8E8E8] bg-[#F8F8F8]"
        style={{
          gridTemplateColumns: `1.8fr repeat(${columns.length}, 1fr)`,
        }}
      >
        <div className="px-5 py-3 text-[11px] uppercase tracking-wider text-[#999999] font-medium">
          Features
        </div>
        {columns.map((c, i) => (
          <div
            key={i}
            className="px-4 py-3 text-[11px] uppercase tracking-wider text-[#999999] font-medium text-center"
          >
            {c}
          </div>
        ))}
      </div>
      {/* Rows */}
      {rows.map((r, i) => {
        if (r.isSection) {
          return (
            <div
              key={i}
              className="border-b border-[#E8E8E8] bg-[#F8F8F8]"
              style={{
                gridTemplateColumns: `1.8fr repeat(${columns.length}, 1fr)`,
              }}
            >
              <div className="px-5 py-2 text-[10px] uppercase tracking-[0.12em] text-[#999999] font-medium">
                {r.label}
              </div>
            </div>
          );
        }
        return (
          <div
            key={i}
            className="grid border-b border-[#EEEEEE] last:border-b-0"
            style={{
              gridTemplateColumns: `1.8fr repeat(${columns.length}, 1fr)`,
            }}
          >
            <div className="px-5 py-3 text-[13px] text-[#1A1A1A]">
              {r.label}
            </div>
            {r.values.map((v, j) => (
              <div
                key={j}
                className="px-4 py-3 text-[13px] text-[#1A1A1A] font-medium text-center"
              >
                {v === true ? (
                  <Check
                    size={15}
                    strokeWidth={2}
                    className="text-[#6BBF6B] mx-auto"
                  />
                ) : v === false ? (
                  <span className="text-[#ABABAB]">—</span>
                ) : (
                  v
                )}
              </div>
            ))}
          </div>
        );
      })}
      {rateNote && (
        <div className="px-5 py-2 text-right text-[11px] text-[#999999] border-t border-[#EEEEEE]">
          {rateNote}
        </div>
      )}
    </div>
  );
}

/* ─── FAQ Accordion ─── */
export function FAQ({
  title,
  questions,
}: {
  title?: string;
  questions: string[];
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div>
      {title && (
        <h2 className="text-[24px] font-medium text-[#1A1A1A] mb-6">
          {title}
        </h2>
      )}
      <div className="space-y-0">
        {questions.map((q, i) => (
          <div
            key={i}
            className="border border-[#E8E8E8] rounded-lg mb-2 overflow-hidden"
          >
            <button
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="w-full flex items-center justify-between px-5 py-4 text-left cursor-pointer"
            >
              <span className="text-[14px] text-[#1A1A1A]">{q}</span>
              <ChevronDown
                size={16}
                className={`text-[#999999] shrink-0 ml-4 transition-transform ${
                  openIndex === i ? "rotate-180" : ""
                }`}
              />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── Enterprise CTA Banner ─── */
export function EnterpriseBanner({
  title,
  subtitle,
  cta,
  dark,
}: {
  title: string;
  subtitle: string;
  cta: string;
  dark?: boolean;
}) {
  return (
    <div
      className={`rounded-xl px-8 py-6 flex items-center justify-between ${
        dark ? "bg-[#1A1A1A]" : "bg-[#F5F5F5]"
      }`}
    >
      <div>
        <h3
          className={`text-[16px] font-medium ${
            dark ? "text-white" : "text-[#1A1A1A]"
          }`}
        >
          {title}
        </h3>
        <p
          className={`text-[13px] mt-1 ${
            dark ? "text-[#ABABAB]" : "text-[#6B6B6B]"
          }`}
        >
          {subtitle}
        </p>
      </div>
      <button className="px-5 py-2 bg-[#E8604C] text-white rounded-md text-[13px] font-medium hover:bg-[#d1543f] transition-colors cursor-pointer shrink-0">
        {cta}
      </button>
    </div>
  );
}

/* ─── Trust Strip ─── */
export function TrustStrip({
  label,
  items,
}: {
  label: string;
  items: string[];
}) {
  return (
    <div className="flex items-center gap-6 text-[12px] text-[#999999] border-b border-[#EEEEEE] pb-4">
      <span className="uppercase tracking-wider text-[10px] font-medium shrink-0">
        {label}
      </span>
      {items.map((item, i) => (
        <span key={i} className="text-[13px] text-[#6B6B6B]">
          {item}
        </span>
      ))}
    </div>
  );
}

/* ─── Info Banner ─── */
export function InfoBanner({ text }: { text: string }) {
  return (
    <div className="bg-[#FFF8F0] border border-[#F97316]/20 rounded-xl px-6 py-4 flex items-start gap-3">
      <div className="w-5 h-5 rounded-full border-2 border-[#F97316] flex items-center justify-center shrink-0 mt-0.5">
        <span className="text-[#F97316] text-[10px] font-medium">!</span>
      </div>
      <p className="text-[13px] text-[#6B6B6B] leading-relaxed">{text}</p>
    </div>
  );
}
