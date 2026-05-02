import React, { useState } from "react";
import {
  Plus,
  Check,
  ChevronDown,
  ChevronsUpDown,
  Sparkles,
  PhoneCall,
  Film,
  FileText,
  Code2,
  Home,
  Folder,
  KeyRound,
  Activity,
  Receipt,
  Settings,
  BookOpen,
  FlaskConical,
  BarChart3,
  ArrowRight,
  ArrowDownRight,
  Mic,
  Volume2,
  Languages,
  Eye,
  Cpu,
  Wand2,
  Info,
  Layers,
  Shield,
  Lock,
  Globe,
} from "lucide-react";

// --- Design tokens (fonts via <style>) ---
const FONT_STYLE = `
  @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap');
  .font-display { font-family: 'DM Sans', system-ui, sans-serif; letter-spacing: -0.02em; }
  .font-body { font-family: 'DM Sans', system-ui, sans-serif; }
  .font-mono { font-family: 'JetBrains Mono', ui-monospace, monospace; }
`;

// --- Workspace registry (sidebar dropdown) ---
const WORKSPACES = [
  {
    id: "indus",
    label: "Indus",
    icon: Sparkles,
    description: "Consumer chat app",
    accent: "bg-amber-100 text-amber-700",
  },
  {
    id: "samvaad",
    label: "Samvaad",
    icon: PhoneCall,
    description: "Voice & chat agents",
    accent: "bg-rose-100 text-rose-700",
  },
  {
    id: "studio",
    label: "Studio",
    icon: Film,
    description: "Dubbing & content",
    accent: "bg-violet-100 text-violet-700",
  },
  {
    id: "akshar",
    label: "Akshar",
    icon: FileText,
    description: "Document AI",
    accent: "bg-emerald-100 text-emerald-700",
  },
  {
    id: "apis",
    label: "APIs",
    icon: Code2,
    description: "Build with our models",
    accent: "bg-stone-200 text-stone-700",
  },
];

// Per-workspace nav (stubbed) — communicates "real app" feel
const WORKSPACE_NAV = {
  indus: [
    { label: "Home", icon: Home },
    { label: "Chats", icon: BookOpen },
    { label: "Voice", icon: Mic },
    { label: "Voices", icon: Volume2 },
    { label: "Settings", icon: Settings },
  ],
  samvaad: [
    { label: "Agents", icon: PhoneCall },
    { label: "Flows", icon: Layers },
    { label: "Knowledge base", icon: BookOpen },
    { label: "Analytics", icon: BarChart3 },
    { label: "Settings", icon: Settings },
  ],
  studio: [
    { label: "Projects", icon: Folder },
    { label: "Voices", icon: Volume2 },
    { label: "Library", icon: BookOpen },
    { label: "Settings", icon: Settings },
  ],
  akshar: [
    { label: "Templates", icon: FileText },
    { label: "Documents", icon: Folder },
    { label: "Review queue", icon: Eye },
    { label: "Settings", icon: Settings },
  ],
  apis: [
    { label: "Playground", icon: FlaskConical },
    { label: "API keys", icon: KeyRound },
    { label: "Usage", icon: Activity },
    { label: "Limits", icon: BarChart3 },
    { label: "Billing", icon: Receipt },
    { label: "Documentation", icon: BookOpen },
  ],
};

const API_CREDITS_BALANCE = 2847;

// =============================================================
// SIDEBAR — ElevenLabs-style dropdown workspace switcher
// (decoupled from pricing tabs)
// =============================================================
function Sidebar({ workspace, setWorkspace }) {
  const [open, setOpen] = useState(false);
  const current = WORKSPACES.find((w) => w.id === workspace);
  const subnav = WORKSPACE_NAV[workspace] || [];
  const CurrentIcon = current.icon;

  return (
    <aside className="w-64 shrink-0 border-r border-stone-200 bg-stone-50 flex flex-col relative">
      {/* Brand */}
      <div className="px-5 py-4 border-b border-stone-200">
        <div className="font-display text-base font-semibold tracking-tight text-stone-900">
          ‖sarvam
        </div>
      </div>

      {/* Workspace dropdown trigger */}
      <div className="px-3 pt-3 pb-2 relative">
        <button
          onClick={() => setOpen(!open)}
          className="w-full flex items-center gap-2.5 px-2.5 py-2 rounded-lg border border-stone-200 bg-white hover:border-stone-300 transition-colors"
        >
          <span
            className={`w-7 h-7 rounded-md flex items-center justify-center shrink-0 ${current.accent}`}
          >
            <CurrentIcon size={14} strokeWidth={1.75} />
          </span>
          <span className="flex-1 text-left">
            <span className="block text-[13px] font-medium text-stone-900 leading-tight">
              {current.label}
            </span>
            <span className="block text-[11px] text-stone-500 leading-tight mt-0.5">
              {current.description}
            </span>
          </span>
          <ChevronsUpDown size={13} className="text-stone-400 shrink-0" />
        </button>

        {/* Dropdown panel */}
        {open && (
          <>
            {/* Click-outside catcher */}
            <div
              className="fixed inset-0 z-10"
              onClick={() => setOpen(false)}
            />
            <div className="absolute left-3 right-3 top-[calc(100%-2px)] mt-1 z-20 bg-white border border-stone-200 rounded-lg shadow-lg overflow-hidden">
              {WORKSPACES.map((w, i) => {
                const Icon = w.icon;
                const selected = w.id === workspace;
                return (
                  <button
                    key={w.id}
                    onClick={() => {
                      setWorkspace(w.id);
                      setOpen(false);
                    }}
                    className={`w-full flex items-center gap-2.5 px-3 py-2.5 text-left hover:bg-stone-50 transition-colors ${
                      i !== WORKSPACES.length - 1 ? "border-b border-stone-100" : ""
                    }`}
                  >
                    <span
                      className={`w-7 h-7 rounded-md flex items-center justify-center shrink-0 ${w.accent}`}
                    >
                      <Icon size={14} strokeWidth={1.75} />
                    </span>
                    <span className="flex-1">
                      <span className="block text-[13px] font-medium text-stone-900 leading-tight">
                        {w.label}
                      </span>
                      <span className="block text-[11px] text-stone-500 leading-tight mt-0.5">
                        {w.description}
                      </span>
                    </span>
                    {selected && (
                      <Check size={13} strokeWidth={2.25} className="text-stone-900 shrink-0" />
                    )}
                  </button>
                );
              })}
            </div>
          </>
        )}
      </div>

      {/* Per-workspace nav (changes with workspace selection) */}
      <div className="px-3 pt-3 mt-1 border-t border-stone-200">
        <div className="space-y-0.5">
          {subnav.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.label}
                className="w-full flex items-center gap-2.5 px-2.5 py-1.5 rounded-md text-sm text-stone-500 hover:bg-stone-100 cursor-default"
              >
                <Icon size={14} strokeWidth={1.5} />
                <span>{item.label}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Pricing nav — current page indicator */}
      <div className="px-3 mt-auto pb-4 pt-4 border-t border-stone-200">
        <div className="w-full flex items-center justify-between gap-2 px-2.5 py-1.5 rounded-md text-sm bg-amber-50 text-amber-900 border border-amber-200/60">
          <span className="flex items-center gap-2.5">
            <Receipt size={14} strokeWidth={1.75} />
            <span className="font-medium">Pricing</span>
          </span>
          <span className="text-[10px] uppercase tracking-wider">current</span>
        </div>
      </div>
    </aside>
  );
}

// =============================================================
// HEADER (page title + simplified credits pill)
// =============================================================
function Header() {
  return (
    <div className="px-10 py-5 border-b border-stone-200 bg-stone-50/60 backdrop-blur-sm">
     <div className="max-w-5xl mx-auto flex items-start justify-between gap-6">
      <div>
        <div className="font-display text-[22px] font-semibold tracking-tight text-stone-900 leading-tight">
          Plans &amp; Pricing
        </div>
        <div className="text-sm text-stone-500 mt-0.5">
          Top up once. Use credits across the API and any product workspace. Credits never expire.
        </div>
      </div>

      <div className="flex items-center gap-2">
        {/* API credits pill — single, simple */}
        <div className="flex items-center gap-1 px-1 py-1 rounded-full border border-stone-200 bg-white shadow-[0_1px_0_rgba(0,0,0,0.02)]">
          <div className="px-3 py-1 flex items-center gap-2">
            <span className="text-[10px] uppercase tracking-[0.14em] text-stone-400 font-medium">
              API credits
            </span>
            <span className="font-mono text-sm font-medium text-stone-900">
              ₹{API_CREDITS_BALANCE.toLocaleString("en-IN")}
            </span>
          </div>
          <button className="ml-1 px-3 py-1.5 rounded-full bg-stone-900 text-stone-50 text-xs font-medium flex items-center gap-1 hover:bg-stone-800 transition-colors">
            <Plus size={12} strokeWidth={2.5} />
            Add credits
          </button>
        </div>

        <div className="flex items-center gap-1 px-3 py-2 rounded-full border border-stone-200 bg-white text-xs text-stone-600">
          <span className="font-medium">INR</span>
          <ChevronDown size={12} />
        </div>
      </div>
     </div>
    </div>
  );
}

// =============================================================
// TOP TABS — Indus | Platform | APIs | Enterprise deployments
// =============================================================
function TopTabs({ pricingTab, onChange }) {
  const tabs = [
    { id: "indus", label: "Indus" },
    { id: "platform", label: "Platform" },
    { id: "apis", label: "APIs" },
    { id: "enterprise", label: "Enterprise deployments" },
  ];
  return (
    <div className="px-10 pt-6 border-b border-stone-200">
      <div className="max-w-5xl mx-auto flex items-center gap-1">
        {tabs.map((t) => {
          const active = pricingTab === t.id;
          return (
            <button
              key={t.id}
              onClick={() => onChange(t.id)}
              className={`relative px-4 pb-3 pt-1.5 text-sm font-medium transition-colors ${
                active ? "text-stone-900" : "text-stone-500 hover:text-stone-800"
              }`}
            >
              {t.label}
              {active && (
                <span className="absolute -bottom-px left-2 right-2 h-[2px] bg-amber-700 rounded-full" />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}

// =============================================================
// REUSABLE — Plan card
// =============================================================
function PlanCard({
  name,
  price,
  cadence,
  bonus,
  cta,
  features,
  highlighted,
  badge,
  footnote,
  tagline,
}) {
  return (
    <div
      className={`relative flex flex-col rounded-xl border ${
        highlighted
          ? "border-amber-700/70 bg-white shadow-[0_2px_0_rgba(146,64,14,0.08)]"
          : "border-stone-200 bg-white"
      } p-5`}
    >
      {badge && (
        <div className="absolute -top-3 left-5">
          <span className="text-[10px] uppercase tracking-[0.14em] font-semibold px-2 py-1 bg-amber-700 text-amber-50 rounded-full">
            {badge}
          </span>
        </div>
      )}
      <div className="text-sm font-medium text-stone-500">{name}</div>
      <div className="mt-3 flex items-baseline gap-1">
        <span className="font-display text-[28px] font-semibold tracking-tight text-stone-900">
          {price}
        </span>
        {cadence && (
          <span className="text-sm text-stone-500 font-medium">{cadence}</span>
        )}
      </div>
      {tagline && (
        <div className="mt-1 text-[12px] text-stone-500 leading-snug">
          {tagline}
        </div>
      )}
      {bonus && (
        <div className="mt-1.5 inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-100 text-[11px] w-fit">
          <Sparkles size={10} />
          {bonus}
        </div>
      )}
      <button
        className={`mt-4 w-full py-2 rounded-lg text-sm font-medium transition-colors ${
          highlighted
            ? "bg-stone-900 text-stone-50 hover:bg-stone-800"
            : "bg-white border border-stone-300 text-stone-900 hover:bg-stone-50"
        }`}
      >
        {cta}
      </button>
      <ul className="mt-5 space-y-2.5">
        {features.map((f, i) => (
          <li key={i} className="flex items-start gap-2 text-[13px] text-stone-700 leading-snug">
            <Check size={14} strokeWidth={2.25} className="mt-0.5 shrink-0 text-stone-900" />
            <span>{f}</span>
          </li>
        ))}
      </ul>
      {footnote && (
        <div className="mt-4 pt-3 border-t border-stone-100 text-[11px] text-stone-500 leading-snug">
          {footnote}
        </div>
      )}
    </div>
  );
}

// =============================================================
// REUSABLE — Enterprise callout strip
// =============================================================
function EnterpriseCallout({ title, body, intensity = "strong" }) {
  if (intensity === "soft") {
    return (
      <div className="rounded-xl border border-dashed border-stone-300 bg-stone-50 px-5 py-4 flex items-center justify-between gap-4">
        <div>
          <div className="text-sm font-medium text-stone-900">{title}</div>
          <div className="text-[13px] text-stone-500 mt-0.5">{body}</div>
        </div>
        <button className="shrink-0 inline-flex items-center gap-1.5 text-sm font-medium text-stone-900 hover:gap-2 transition-all">
          Contact us
          <ArrowRight size={14} />
        </button>
      </div>
    );
  }
  return (
    <div className="rounded-xl bg-stone-900 text-stone-50 px-6 py-5 flex items-center justify-between gap-6">
      <div>
        <div className="text-base font-semibold tracking-tight">{title}</div>
        <div className="text-[13px] text-stone-300 mt-1 max-w-2xl">{body}</div>
      </div>
      <button className="shrink-0 inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-amber-600 hover:bg-amber-500 text-stone-900 text-sm font-semibold transition-colors">
        Contact sales
        <ArrowRight size={14} />
      </button>
    </div>
  );
}

// =============================================================
// REUSABLE — Customer trust strip (small, monochrome)
// =============================================================
function TrustStrip({ label, customers }) {
  return (
    <div className="flex items-center gap-4 px-5 py-3 rounded-lg bg-stone-50/80 border border-stone-200/60">
      <span className="text-[10px] uppercase tracking-[0.14em] text-stone-500 font-semibold shrink-0">
        {label}
      </span>
      <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
        {customers.map((c, i) => (
          <span
            key={i}
            className="text-[12px] font-medium text-stone-600"
          >
            {c}
          </span>
        ))}
      </div>
    </div>
  );
}

// =============================================================
// REUSABLE — Compliance badge row
// =============================================================
function ComplianceRow() {
  const items = [
    { icon: Shield, label: "SOC 2 Type II" },
    { icon: Lock, label: "ISO 27001" },
    { icon: Globe, label: "Hosted in India" },
    { icon: FileText, label: "DPDP-aligned" },
    { icon: Receipt, label: "GST-compliant invoicing" },
  ];
  return (
    <div className="flex flex-wrap items-center gap-x-5 gap-y-2 px-5 py-3 rounded-lg border border-stone-200 bg-white">
      {items.map((it, i) => {
        const Icon = it.icon;
        return (
          <div key={i} className="flex items-center gap-1.5 text-[12px] text-stone-600">
            <Icon size={12} strokeWidth={1.75} className="text-stone-500" />
            <span className="font-medium">{it.label}</span>
          </div>
        );
      })}
    </div>
  );
}

// =============================================================
// REUSABLE — Feature comparison table
// =============================================================
function FeatureTable({ columns, rows }) {
  return (
    <div className="rounded-xl border border-stone-200 bg-white overflow-hidden">
      <div
        className="grid border-b border-stone-200 bg-stone-50/70"
        style={{ gridTemplateColumns: `1.4fr repeat(${columns.length}, 1fr)` }}
      >
        <div className="px-5 py-3 text-[11px] uppercase tracking-[0.12em] text-stone-500 font-semibold">
          Features
        </div>
        {columns.map((c, i) => (
          <div
            key={i}
            className="px-4 py-3 text-[11px] uppercase tracking-[0.12em] text-stone-700 font-semibold"
          >
            {c}
          </div>
        ))}
      </div>
      {rows.map((r, i) => (
        <div
          key={i}
          className="grid border-b border-stone-100 last:border-b-0 hover:bg-stone-50/50"
          style={{ gridTemplateColumns: `1.4fr repeat(${columns.length}, 1fr)` }}
        >
          <div className="px-5 py-3 text-[13px] text-stone-700">{r.label}</div>
          {r.values.map((v, j) => (
            <div key={j} className="px-4 py-3 text-[13px] text-stone-800 font-medium">
              {v === true ? (
                <Check size={15} strokeWidth={2.25} className="text-stone-900" />
              ) : v === false ? (
                <span className="text-stone-300">—</span>
              ) : (
                v
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

// =============================================================
// REUSABLE — FAQ
// =============================================================
function FAQ({ items }) {
  const [open, setOpen] = useState(null);
  return (
    <div className="grid grid-cols-[200px_1fr] gap-12 mt-12">
      <div className="font-display text-2xl font-semibold tracking-tight text-stone-900">
        FAQ
      </div>
      <div className="border-t border-stone-200">
        {items.map((it, i) => (
          <div key={i} className="border-b border-stone-200">
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="w-full text-left py-4 flex items-center justify-between gap-4 hover:bg-stone-50/50"
            >
              <span className="text-[14px] text-stone-900 font-medium">{it.q}</span>
              <ChevronDown
                size={16}
                className={`shrink-0 transition-transform ${
                  open === i ? "rotate-180" : ""
                }`}
              />
            </button>
            {open === i && (
              <div className="pb-4 text-[13px] text-stone-600 leading-relaxed pr-12">
                {it.a}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

// =============================================================
// TAB 1 — INDUS
// =============================================================
function IndusTab() {
  const plans = [
    {
      name: "Free",
      price: "₹0",
      cadence: "/month",
      tagline: "For curious users exploring AI in their language.",
      cta: "Get started",
      features: [
        "Sarvam-30B chat — unlimited (rate-limited)",
        "Sarvam-105B reasoning — 20 messages/day",
        "Voice chat — 30 min/day, 11 Indian languages",
        "Document chat — 5 uploads/day via Sarvam Vision",
        "Web search and current events",
        "₹100 API credits/month",
        "Web, iOS, Android",
      ],
    },
    {
      name: "Plus",
      price: "₹399",
      cadence: "/month",
      tagline: "For students, creators, and daily users.",
      cta: "Get Plus",
      highlighted: true,
      badge: "Most popular",
      features: [
        "Sarvam-105B (128K context) — unlimited (soft cap)",
        "Voice chat — unlimited, sub-500 ms latency",
        "Document chat — unlimited via Sarvam Vision",
        "Reasoning mode and web search",
        "₹350 API credits/month — usable anywhere",
        "Indus on Sarvam Kaze (when shipped)",
        "Early access to new models",
      ],
    },
    {
      name: "Pro",
      price: "₹1,499",
      cadence: "/month",
      tagline: "For power users and Indic-language professionals.",
      cta: "Get Pro",
      features: [
        "Everything in Plus",
        "₹1,300 API credits/month — rolling balance",
        "Extended 128K context on Sarvam-105B",
        "Priority access during peak hours",
        "3 custom voices (consent-based cloning)",
        "Commercial-use license on outputs",
        "Sarvam Studio access for personal projects",
      ],
    },
  ];

  return (
    <div className="px-10 py-12 max-w-5xl mx-auto">
      {/* Lead-in copy */}
      <div className="mb-8 max-w-3xl">
        <div className="font-display text-[26px] font-semibold tracking-tight text-stone-900 leading-tight">
          The AI assistant that speaks your language.
        </div>
        <div className="mt-2 text-[14px] text-stone-600 leading-relaxed">
          Indus runs on Sarvam-105B — India&rsquo;s open-weights frontier model. All 22 scheduled
          Indian languages, native code-mix, voice in 11 languages, and document understanding
          across handwritten and historical scripts. Built, trained, and hosted in India.
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4">
        {plans.map((p) => (
          <PlanCard key={p.name} {...p} />
        ))}
      </div>

      <div className="mt-6">
        <EnterpriseCallout
          intensity="soft"
          title="Need on-prem, custom, or air-gapped?"
          body="Indus deployments for enterprise teams, schools, and government users — including air-gapped via Chanakya."
        />
      </div>

      <div className="mt-12">
        <div className="font-display text-xl font-semibold tracking-tight text-stone-900 mb-4">
          Compare plans
        </div>
        <FeatureTable
          columns={["Free", "Plus", "Pro"]}
          rows={[
            { label: "Sarvam-105B messages/day", values: ["20", "Unlimited", "Unlimited + Pro mode"] },
            { label: "Sarvam-30B messages", values: ["Unlimited (rate-limited)", "Unlimited", "Unlimited"] },
            { label: "Context window", values: ["32K", "128K", "128K + extended"] },
            { label: "Voice chat (11 languages)", values: ["30 min/day", "Unlimited", "Unlimited + priority"] },
            { label: "Document chat (Sarvam Vision)", values: ["5 uploads/day", "Unlimited", "Unlimited"] },
            { label: "Web search and reasoning mode", values: ["Limited", true, true] },
            { label: "Monthly API credits", values: ["₹100", "₹350", "₹1,300 (rolling)"] },
            { label: "Custom voices (consent-based)", values: [false, false, "3 included"] },
            { label: "Commercial-use license", values: [false, false, true] },
            { label: "Indus on Sarvam Kaze glasses", values: [false, true, true] },
            { label: "Sarvam Studio access", values: [false, false, true] },
            { label: "Early access to new models", values: [false, true, true] },
          ]}
        />
      </div>

      <FAQ
        items={[
          { q: "What are Sarvam credits?", a: "1 Sarvam Credit = ₹1 of list-price consumption. The credits in your Indus plan are universal — spend them on translation, document scanning, voice synthesis, or any other Sarvam API, through Indus or directly." },
          { q: "Do unused credits roll over?", a: "Indus Pro credits roll over within the month. Free and Plus credits reset each month. API credits purchased separately never expire." },
          { q: "Can I use Indus credits in the API?", a: "Yes. Indus credits are universal API credits — use them through Indus or via the OpenAI-compatible endpoint at https://api.sarvam.ai/v1." },
          { q: "What languages does Indus support?", a: "Text and reasoning in all 22 scheduled Indian languages plus English, with native code-mix handling. Voice chat is available in 11 languages today: Hindi, Bengali, Tamil, Telugu, Gujarati, Kannada, Malayalam, Marathi, Punjabi, Odia, and Indian English." },
          { q: "How does voice cloning work on Indus Pro?", a: "Pro users get up to 3 custom voices included as a tier feature. Voice cloning is consent-based and Enterprise-grade — submit a signed consent and ~1 hour of clean reference audio, and we deliver the custom voice in 5–7 business days. Synthesis using cloned voices consumes Bulbul V3 credits at the standard rate." },
          { q: "Is my data used to train Sarvam models?", a: "No. By default, your conversations are not used to train Sarvam models. Data residency is in India, and zero-data-retention is the default for paid plans." },
          { q: "What's the difference between Sarvam-30B and Sarvam-105B?", a: "Sarvam-30B is our production workhorse — fast, cheap, and capable across all 22 Indic languages. Sarvam-105B is our frontier reasoning model with 128K context and stronger math, coding, and multi-step reasoning. Both are Apache 2.0 open-weights." },
        ]}
      />
    </div>
  );
}

// =============================================================
// HELPER — How credits work (one-line callout)
// =============================================================
function CreditsCallout() {
  return (
    <div className="rounded-xl border border-amber-200/60 bg-amber-50/50 px-5 py-3.5 flex items-center gap-3">
      <Info size={15} className="text-amber-700 shrink-0" />
      <div className="text-[13px] text-stone-700 leading-relaxed">
        <span className="font-medium text-stone-900">Your API credits work everywhere.</span>{" "}
        When a product&rsquo;s monthly allowance runs out, you can spend API credits inside any workspace —
        opt-in per request, no surprises.
      </div>
    </div>
  );
}

// =============================================================
// TAB 2 — PLATFORM (sub-tabs: Samvaad / Studio / Akshar)
// =============================================================
function PlatformTab({ subTab, setSubTab }) {
  const subTabs = [
    { id: "samvaad", label: "Samvaad", note: "Voice & chat agents" },
    { id: "studio", label: "Studio", note: "Dubbing & content" },
    { id: "akshar", label: "Akshar", note: "Document AI" },
  ];

  return (
    <div className="px-10 py-12 max-w-5xl mx-auto">
      {/* Sub-tabs */}
      <div className="flex items-center gap-1 mb-6 border border-stone-200 rounded-lg p-1 bg-stone-50 w-fit">
        {subTabs.map((t) => {
          const active = subTab === t.id;
          return (
            <button
              key={t.id}
              onClick={() => setSubTab(t.id)}
              className={`px-3.5 py-1.5 rounded-md text-sm transition-colors ${
                active
                  ? "bg-white text-stone-900 shadow-[0_1px_0_rgba(0,0,0,0.04)] font-medium"
                  : "text-stone-600 hover:text-stone-900 font-medium"
              }`}
            >
              <span>{t.label}</span>
              <span
                className={`ml-2 text-[11px] ${
                  active ? "text-stone-500" : "text-stone-400"
                }`}
              >
                {t.note}
              </span>
            </button>
          );
        })}
      </div>

      {subTab === "samvaad" && <SamvaadContent />}
      {subTab === "studio" && <StudioContent />}
      {subTab === "akshar" && <AksharContent />}

      {/* Simple credits callout — replaces the diagram */}
      <div className="mt-12">
        <CreditsCallout />
      </div>

      <FAQ
        items={[
          { q: "What credits do I get with each plan?", a: "Each productized SaaS comes with a generous monthly credit allowance scoped to that workspace — Samvaad credits inside Samvaad, Studio credits inside Studio, Akshar credits inside Akshar." },
          { q: "What happens when I exhaust the workspace allowance?", a: "You'll be prompted to continue using your API credits — for this request, until next refresh, or to top up. No silent billing." },
          { q: "Do unused workspace credits roll over?", a: "Workspace credits roll over within the workspace; they don't flow back to API credits." },
          { q: "What seats are included in each tier?", a: "Each product has its own seat structure. Akshar has four roles (Viewer / Reviewer / Builder / Admin) because document review needs role separation. Samvaad and Studio use Builder + Viewer." },
          { q: "Do I need a separate plan for each product?", a: "Yes — each productized SaaS is its own subscription. But your API credits can flow into any workspace when needed." },
          { q: "Is outcome-based pricing available?", a: "Yes, on Samvaad Enterprise contracts. Choose between per-action and per-resolved-query, per-qualified-lead, or per-completed-transaction at deployment." },
          { q: "Are these products available on-prem?", a: "Samvaad, Studio, and Akshar are all available in private VPC, on-premises, and air-gapped (Chanakya) deployments on Enterprise. Forward-deployed Sarvam engineers handle the integration." },
        ]}
      />
    </div>
  );
}

// --- Samvaad content ---
function SamvaadContent() {
  return (
    <>
      {/* Lead-in */}
      <div className="mb-6 max-w-3xl">
        <div className="font-display text-[22px] font-semibold tracking-tight text-stone-900 leading-tight">
          Build voice agents for India in 24 hours, not 24 weeks.
        </div>
        <div className="mt-2 text-[13px] text-stone-600 leading-relaxed">
          Samvaad runs on Sarvam-30B with Saaras V3 ASR and Bulbul V3 TTS. 11 Indian languages,
          sub-500 ms voice latency, omnichannel routing across voice, web, WhatsApp, and app —
          and the same stack that powers 100M+ conversations per month for Tata Capital, SBI Life,
          and Razorpay&rsquo;s voice-commerce platform.
        </div>
      </div>

      <div className="grid grid-cols-4 gap-4">
        <PlanCard
          name="Free"
          price="₹0"
          cadence="/month"
          tagline="For pilots and dev sandboxes."
          cta="Get started"
          features={[
            "1 Builder + unlimited Viewers",
            "₹1,000 Samvaad credits/mo",
            "Web channel only",
            "Sarvam-30B + Saaras V3 + Bulbul V3 included",
            "11 Indian languages with code-mix",
            "Community Discord support",
          ]}
        />
        <PlanCard
          name="Pro"
          price="₹9,999"
          cadence="/month"
          tagline="For SMBs going to production."
          cta="Get Pro"
          highlighted
          badge="Most popular"
          features={[
            "3 Builders + unlimited Viewers",
            "₹20,000 Samvaad credits/mo",
            "Voice + Web + WhatsApp",
            "Sub-500 ms voice latency",
            "Knowledge bases and external tool calls",
            "Email support · 1 business-day response",
          ]}
        />
        <PlanCard
          name="Scale"
          price="₹99,999"
          cadence="/month"
          tagline="For production at India scale."
          cta="Get Scale"
          features={[
            "10 Builders + unlimited Viewers",
            "₹2,00,000 Samvaad credits/mo",
            "Omnichannel + telephony (PSTN, SIP, WhatsApp BSP)",
            "CRM, core-banking, and custom integrations",
            "Slack + dedicated Solutions Engineer",
            "Real-time analytics and call recording",
          ]}
        />
        <PlanCard
          name="Enterprise"
          price="Custom"
          tagline="For BFSI, government, and regulated workloads."
          cta="Contact sales"
          features={[
            "Unlimited Builders + Viewers",
            "Committed pool with volume discount",
            "Outcome-based pricing option",
            "Air-gapped / on-prem via Chanakya",
            "Forward-deployed engineering",
            "99.9% SLA · dedicated TAM",
          ]}
        />
      </div>

      <div className="mt-6">
        <TrustStrip
          label="Powering production at"
          customers={[
            "Tata Capital",
            "SBI Life Insurance",
            "Razorpay × Swiggy",
            "The Derma Co",
            "Dr. Lal PathLabs",
            "100M+ conversations/month",
          ]}
        />
      </div>

      <div className="mt-6">
        <EnterpriseCallout
          title="Sovereign deployments. Outcome-based pricing. Air-gapped Samvaad."
          body="Per resolved query, per qualified lead, per completed transaction — priced on the outcome instead of the action. Available on Enterprise, deployed via Chanakya for defence and regulated finance."
        />
      </div>

      <div className="mt-12 grid grid-cols-2 gap-4">
        <div>
          <div className="font-display text-base font-semibold tracking-tight text-stone-900 mb-3">
            Agent action pricing
          </div>
          <div className="rounded-xl border border-stone-200 bg-white overflow-hidden">
            {[
              ["Classic answer (deterministic)", "1 credit"],
              ["Generative answer (LLM)", "2 credits"],
              ["Tool / function call", "5 credits"],
              ["Knowledge-base grounded response", "10 credits"],
              ["Autonomous workflow trigger", "25 credits"],
            ].map((row, i) => (
              <div
                key={i}
                className="flex items-center justify-between px-4 py-2.5 border-b border-stone-100 last:border-b-0 text-[13px]"
              >
                <span className="text-stone-700">{row[0]}</span>
                <span className="font-mono font-medium text-stone-900">{row[1]}</span>
              </div>
            ))}
          </div>
          <div className="mt-2 text-[11px] text-stone-500 leading-snug">
            Deducted from Samvaad credits, with API-credit overflow when prompted. Telephony pass-through (PSTN, SIP, WhatsApp BSP fees) billed at cost from integrated providers — Exotel, Plivo, Twilio, Telnyx via LiveKit SIP.
          </div>
        </div>

        <div>
          <div className="font-display text-base font-semibold tracking-tight text-stone-900 mb-3">
            What&rsquo;s included
          </div>
          <FeatureTable
            columns={["Free", "Pro", "Scale", "Ent."]}
            rows={[
              { label: "Builders", values: ["1", "3", "10", "Unlimited"] },
              { label: "Languages (Indic + EN)", values: ["11", "11", "11", "Custom"] },
              { label: "Channels", values: ["Web", "Voice + Web + WA", "Omni", "Custom"] },
              { label: "Sub-500 ms voice latency", values: [true, true, true, true] },
              { label: "Telephony integration", values: [false, true, true, true] },
              { label: "CRM / core-banking integrations", values: [false, false, true, true] },
              { label: "Real-time analytics", values: [false, true, true, true] },
              { label: "On-prem / air-gapped (Chanakya)", values: [false, false, false, true] },
              { label: "Outcome-based SKUs", values: [false, false, false, true] },
            ]}
          />
        </div>
      </div>
    </>
  );
}

// --- Studio content ---
function StudioContent() {
  return (
    <>
      {/* Lead-in */}
      <div className="mb-6 max-w-3xl">
        <div className="font-display text-[22px] font-semibold tracking-tight text-stone-900 leading-tight">
          One piece of content. Eleven faithful versions of itself.
        </div>
        <div className="mt-2 text-[13px] text-stone-600 leading-relaxed">
          Studio is the multilingual workspace behind PMO Mann Ki Baat (11 languages, monthly),
          NCERT, NPTEL, and IIT Madras lectures. Document translation in PDF, Word, and Adobe
          InDesign with layouts intact. Video dubbing with zero-shot voice cloning, lip-sync
          timing, and speaker identity preserved. Powered by Sarvam-Translate V1 and Sarvam Dub.
        </div>
      </div>

      <div className="grid grid-cols-4 gap-4">
        <PlanCard
          name="Free"
          price="₹0"
          cadence="/month"
          tagline="Try Studio + Dub before you commit."
          cta="Get started"
          features={[
            "1 Builder + unlimited Viewers",
            "₹1,000 Studio credits/mo",
            "Watermark on outputs",
            "11 Indian languages + English",
            "Document translation (PDF, Word)",
          ]}
        />
        <PlanCard
          name="Pro"
          price="₹4,999"
          cadence="/month"
          tagline="For small content teams shipping daily."
          cta="Get Pro"
          highlighted
          badge="Most popular"
          features={[
            "3 Builders + unlimited Viewers",
            "₹10,000 Studio credits/mo",
            "No watermark on outputs",
            "Brand kit + glossary management",
            "PDF, Word, Adobe InDesign support",
            "4 tone modes (formal / colloquial / classic / code-mix)",
          ]}
        />
        <PlanCard
          name="Scale"
          price="₹49,999"
          cadence="/month"
          tagline="For media houses and publishers."
          cta="Get Scale"
          features={[
            "15 Builders + unlimited Viewers",
            "₹1,00,000 Studio credits/mo",
            "Custom voices (consent-based cloning)",
            "Studio API access for pipelines",
            "SSO / SCIM / RBAC",
            "Priority dubbing queue",
          ]}
        />
        <PlanCard
          name="Enterprise"
          price="Custom"
          tagline="For broadcasters, ministries, and schools."
          cta="Contact sales"
          features={[
            "Unlimited Builders + Viewers",
            "Sarvam Dub Live (broadcast)",
            "BYO model and custom voice library",
            "On-prem rendering",
            "Forward-deployed engineering",
            "99.9% SLA",
          ]}
        />
      </div>

      <div className="mt-6">
        <TrustStrip
          label="Trusted by"
          customers={[
            "PMO Mann Ki Baat",
            "NCERT",
            "NPTEL",
            "IIT Madras",
            "National Commission for Women",
            "Republic TV (Union Budget 2026 live)",
          ]}
        />
      </div>

      <div className="mt-6">
        <EnterpriseCallout
          title="Private Studio deployments for media houses, schools, and ministries."
          body="On-prem rendering, BYO model, custom voice libraries with signed consent, and dedicated content review workflows. Sarvam Dub Live for broadcast under 2 minutes end-to-end latency."
        />
      </div>

      <div className="mt-12">
        <div className="font-display text-base font-semibold tracking-tight text-stone-900 mb-3">
          What&rsquo;s included
        </div>
        <FeatureTable
          columns={["Free", "Pro", "Scale", "Ent."]}
          rows={[
            { label: "Builder seats", values: ["1", "3", "15", "Unlimited"] },
            { label: "Viewer seats", values: ["Unlimited", "Unlimited", "Unlimited", "Unlimited"] },
            { label: "Languages (Indic + EN)", values: ["11", "11", "11", "Custom"] },
            { label: "Watermark on outputs", values: [true, false, false, false] },
            { label: "Brand kit + glossary", values: [false, true, true, true] },
            { label: "Adobe InDesign support", values: [false, true, true, true] },
            { label: "Custom voices (consent-based)", values: [false, false, true, true] },
            { label: "Studio API access", values: [false, false, true, true] },
            { label: "Sarvam Dub Live (broadcast)", values: [false, false, false, true] },
            { label: "SSO / SCIM / RBAC", values: [false, false, true, true] },
            { label: "On-prem rendering", values: [false, false, false, true] },
          ]}
        />
      </div>
    </>
  );
}

// --- Akshar content ---
function AksharContent() {
  return (
    <>
      {/* Lead-in */}
      <div className="mb-6 max-w-3xl">
        <div className="font-display text-[22px] font-semibold tracking-tight text-stone-900 leading-tight">
          Indian documents, finally legible to a machine.
        </div>
        <div className="mt-2 text-[13px] text-stone-600 leading-relaxed">
          Akshar reads what global OCR can&rsquo;t — handwritten KYC, 19th-century Gujarati and
          Tamil manuscripts, multi-column newspapers, dense regulatory tables, and forms across
          all 22 scheduled Indian languages. Powered by Sarvam Vision (3B SSM VLM) — leading on
          21 of 22 Indic languages on the Sarvam OCR Bench, and the highest aggregate accuracy
          on olmOCR-Bench at 84.3%.
        </div>
      </div>

      <div className="grid grid-cols-4 gap-4">
        <PlanCard
          name="Free"
          price="₹0"
          cadence="/month"
          tagline="Try Akshar with your own documents."
          cta="Get started"
          features={[
            "1 Builder + 1 Reviewer",
            "Unlimited Viewers",
            "₹1,000 Akshar credits/mo",
            "All 22 scheduled languages + English",
            "Up to 10 pages per upload",
            "HTML / Markdown / JSON outputs",
          ]}
        />
        <PlanCard
          name="Pro"
          price="₹9,999"
          cadence="/month"
          tagline="For SMB document automation."
          cta="Get Pro"
          highlighted
          badge="Most popular"
          features={[
            "3 Builders + 5 Reviewers",
            "Unlimited Viewers",
            "₹20,000 Akshar credits/mo",
            "Layout-preserving outputs with bounding boxes",
            "Visual grounding (click element → source)",
            "Agent-driven proofreading loop",
          ]}
        />
        <PlanCard
          name="Scale"
          price="₹49,999"
          cadence="/month"
          tagline="For BPOs, banks, and insurers."
          cta="Get Scale"
          features={[
            "10 Builders + 25 Reviewers",
            "Unlimited Viewers",
            "₹1,00,000 Akshar credits/mo",
            "Industry templates (BFSI, healthcare, legal)",
            "Custom extractor library",
            "Dedicated review queues with role separation",
          ]}
        />
        <PlanCard
          name="Enterprise"
          price="Custom"
          tagline="For regulated and air-gapped workflows."
          cta="Contact sales"
          features={[
            "Unlimited by role",
            "Committed pool with volume discount",
            "Custom industry templates",
            "Custom extractors built with you",
            "Air-gapped / on-prem via Chanakya",
            "Forward-deployed engineering",
          ]}
        />
      </div>

      <div className="mt-6">
        <TrustStrip
          label="Benchmark leadership"
          customers={[
            "olmOCR-Bench: 84.3%",
            "OmniDocBench v1.5: 93.28%",
            "Sarvam Indic OCR Bench: leads 21/22 languages",
            "Hindi 95.91 · Tamil 93.42 · Bengali 92.61",
          ]}
        />
      </div>

      <div className="mt-6">
        <EnterpriseCallout
          title="Air-gapped Akshar for regulated document workflows."
          body="Industry templates for BFSI, healthcare, insurance, and legal. Custom extractors built with your team. Dedicated review queues with role separation. Deployed via Chanakya for defence and regulated finance."
        />
      </div>

      <div className="mt-12 grid grid-cols-2 gap-4">
        <div>
          <div className="font-display text-base font-semibold tracking-tight text-stone-900 mb-3">
            Seat roles (Akshar)
          </div>
          <div className="rounded-xl border border-stone-200 bg-white overflow-hidden">
            {[
              ["Viewer", "Read-only. Free in all paid plans.", "Audit, compliance, dashboards."],
              ["Reviewer", "HITL proofreading and validation.", "Cannot create new templates."],
              ["Builder", "Creates extraction templates, workflows.", "Full creative access."],
              ["Admin", "Governance, billing, integrations.", "Same price as Builder; a role, not a tier."],
            ].map((row, i) => (
              <div key={i} className="px-4 py-3 border-b border-stone-100 last:border-b-0">
                <div className="flex items-baseline justify-between">
                  <span className="text-[13px] font-semibold text-stone-900">{row[0]}</span>
                  <span className="text-[11px] text-stone-500">{row[2]}</span>
                </div>
                <div className="text-[12px] text-stone-600 mt-0.5">{row[1]}</div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="font-display text-base font-semibold tracking-tight text-stone-900 mb-3">
            What&rsquo;s included
          </div>
          <FeatureTable
            columns={["Free", "Pro", "Scale", "Ent."]}
            rows={[
              { label: "Builders", values: ["1", "3", "10", "Unlimited"] },
              { label: "Reviewers", values: ["1", "5", "25", "Unlimited"] },
              { label: "Languages (scheduled Indic)", values: ["22", "22", "22", "22"] },
              { label: "HTML / MD / JSON outputs", values: [true, true, true, true] },
              { label: "Visual grounding", values: [false, true, true, true] },
              { label: "Agent-driven proofreading", values: [false, true, true, true] },
              { label: "Industry templates", values: [false, false, true, true] },
              { label: "Custom extractors", values: [false, false, true, true] },
              { label: "On-prem / air-gapped", values: [false, false, false, true] },
            ]}
          />
        </div>
      </div>
    </>
  );
}

// =============================================================
// TAB 3 — APIs
// =============================================================
function APIsTab({ apiSubTab, setApiSubTab }) {
  return (
    <div className="px-10 py-12 max-w-5xl mx-auto">
      {/* Lead-in copy */}
      <div className="mb-8 max-w-3xl">
        <div className="font-display text-[26px] font-semibold tracking-tight text-stone-900 leading-tight">
          India&rsquo;s sovereign AI stack, in rupees.
        </div>
        <div className="mt-2 text-[14px] text-stone-600 leading-relaxed">
          Apache 2.0 frontier LLMs trained from scratch in India. Sub-250 ms streaming TTS in 11
          languages. The highest-accuracy Indic OCR. OpenAI-compatible chat completions at{" "}
          <span className="font-mono text-[13px]">https://api.sarvam.ai/v1</span>. ₹1,000 in free
          credits at signup, no card required, credits never expire.
        </div>
      </div>

      {/* Section header — Models */}
      <div className="flex items-baseline justify-between mb-4">
        <div>
          <div className="font-display text-xl font-semibold tracking-tight text-stone-900">
            Our most powerful models
          </div>
          <div className="text-[13px] text-stone-500 mt-1">
            Apache 2.0 weights · Trained from scratch in India · 22 Indian languages plus English
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <ModelCard
          name="Sarvam-105B"
          tag="Frontier"
          description="MoE reasoning · 106B total · 10.3B active · 128K context · 12T training tokens. Math500 98.6 · MMLU 90.6 · LiveCodeBench 71.7. Apache 2.0. Powers Indus."
          rates={[
            { label: "Input", value: "₹4 / 1M" },
            { label: "Cached input", value: "₹0.4 / 1M" },
            { label: "Output", value: "₹16 / 1M" },
          ]}
        />
        <ModelCard
          name="Sarvam-30B"
          tag="Workhorse"
          description="Production MoE · 32B total · 2.4B active · 32–65K context · 16T tokens. HumanEval 92.1 · MBPP 92.7. Apache 2.0. Powers Samvaad at 100M+ conversations/mo."
          rates={[
            { label: "Input", value: "₹2.5 / 1M" },
            { label: "Cached input", value: "₹0.25 / 1M" },
            { label: "Output", value: "₹10 / 1M" },
          ]}
        />
      </div>

      {/* Plans */}
      <div className="mt-10 mb-4">
        <div className="font-display text-xl font-semibold tracking-tight text-stone-900">
          Plans
        </div>
        <div className="text-[13px] text-stone-500 mt-1">
          Service tiers and volume discounts apply on top.
        </div>
      </div>
      <div className="grid grid-cols-4 gap-4">
        <PlanCard
          name="Free"
          price="₹0"
          tagline="For prototyping and evaluation."
          cta="Sign up"
          features={[
            "₹2,000 sign-up credits — never expire",
            "60 RPM default · 40 RPM on flagship LLMs",
            "All 22 Indian languages",
            "OpenAI-compatible /v1 endpoint",
            "Discord community + docs.sarvam.ai",
          ]}
        />
        <PlanCard
          name="Builder"
          price="₹10,000"
          cadence="/month"
          bonus="+₹1,000 bonus (10%)"
          tagline="For builders going to production."
          cta="Get Builder"
          highlighted
          badge="Most popular"
          features={[
            "11,000 API credits/month",
            "200 RPM default · 60 RPM on flagship LLMs",
            "Email support · 1 business-day response",
            "Usage analytics dashboard",
            "Effective rate: −9% on list",
          ]}
        />
        <PlanCard
          name="Scale"
          price="₹50,000"
          cadence="/month"
          bonus="+₹7,500 bonus (15%)"
          tagline="For mid-market production traffic."
          cta="Get Scale"
          features={[
            "57,500 API credits/month",
            "1,000 RPM default · 120 RPM on flagship LLMs",
            "Slack + dedicated Solutions Engineer",
            "Custom pronunciation dictionaries",
            "99.9% uptime SLA · effective rate −13%",
          ]}
        />
        <PlanCard
          name="Enterprise"
          price="Custom"
          tagline="For regulated, sovereign, and global workloads."
          cta="Contact sales"
          features={[
            "₹10L+ committed annual spend",
            "Up to 30% discount via volume ladder",
            "Custom rate limits and concurrency",
            "Fine-tuning · dedicated capacity · on-prem",
            "Forward-deployed engineering · 99.99% SLA",
          ]}
        />
      </div>

      <div className="mt-6">
        <EnterpriseCallout
          title="Enterprise APIs — sovereign by design"
          body="Custom rate limits, fine-tuning, dedicated H100/Blackwell capacity, on-prem licenses, and committed-spend volume discounts. SOC 2 Type II + ISO 27001. Hosted in India by default; air-gapped via Chanakya for defence and BFSI."
        />
      </div>

      {/* Browse our APIs (ElevenLabs-style sub-tabs) */}
      <div className="mt-12">
        <div className="flex items-baseline justify-between mb-4">
          <div className="font-display text-xl font-semibold tracking-tight text-stone-900">
            Browse our APIs
          </div>
          <div className="text-[13px] text-stone-500">
            Cutting-edge models across speech, vision, and language.
          </div>
        </div>

        <div className="flex items-center gap-1 mb-5 border-b border-stone-200">
          {[
            { id: "stt", label: "Speech to Text", icon: Mic },
            { id: "tts", label: "Text to Speech", icon: Volume2 },
            { id: "translate", label: "Translation & Language", icon: Languages },
            { id: "vision", label: "Vision & Documents", icon: Eye },
            { id: "llm", label: "Foundation LLMs", icon: Cpu },
          ].map((t) => {
            const active = apiSubTab === t.id;
            const Icon = t.icon;
            return (
              <button
                key={t.id}
                onClick={() => setApiSubTab(t.id)}
                className={`relative flex items-center gap-1.5 px-3 py-2.5 text-[13px] font-medium transition-colors ${
                  active ? "text-stone-900" : "text-stone-500 hover:text-stone-800"
                }`}
              >
                <Icon size={13} strokeWidth={1.75} />
                {t.label}
                {active && (
                  <span className="absolute -bottom-px left-2 right-2 h-[2px] bg-amber-700 rounded-full" />
                )}
              </button>
            );
          })}
        </div>

        {apiSubTab === "stt" && (
          <APITable
            rows={[
              ["Saaras V3", "Streaming + REST + Batch ASR", "23 languages (22 Indic + EN). Sub-250 ms TTFT. ~19% WER on IndicVoices. 5 modes: transcribe / translate / verbatim / translit / codemix. 8 kHz telephony optimized.", "₹30 / hour"],
              ["Saaras V3 + Diarization", "Multi-speaker ASR", "Up to 8 speakers, real-time and batch. Word-level timestamps. Overlapping speech handled.", "₹45 / hour"],
              ["Saaras V3 + Translate", "Speech → English", "Direct speech-to-English in one call. Same 23-language input coverage.", "₹30 / hour"],
              ["Saaras V3 + Translate + Diarization", "Full content workflow", "Maximum context for podcasts, meetings, and content pipelines.", "₹45 / hour"],
              ["Sarvam Audio", "Audio LM (preview)", "3B audio-native LM. Diarized recognition up to 60 min. Native function calling on audio. Coming soon — preview on Business+.", "Preview"],
            ]}
          />
        )}
        {apiSubTab === "tts" && (
          <APITable
            rows={[
              ["Bulbul V3", "Premium TTS", "39 voices · 11 Indic + English. Streaming sub-250 ms TTFA. Sample rates 8/16/22.05/24/48 kHz. Code-mix prosody. WAV/MP3/AAC/Opus/FLAC/μ-law output.", "₹30 / 10K chars"],
              ["Bulbul V2", "Legacy TTS (active)", "7 voices, 11 languages. Pitch / pace / loudness controls. Half the price of V3 for cost-sensitive workloads.", "₹15 / 10K chars"],
              ["Voice Cloning — training", "Custom voice training", "Consent-based, Enterprise path. ~1 hour reference audio. Delivered in 5–7 business days. Indus Pro includes 3 voices free.", "₹5,000 / voice"],
              ["Voice Cloning — synthesis", "Synthesis with custom voice", "Cross-lingual zero-shot. Same speaker identity preserved across all 11 languages.", "₹30 / 10K chars"],
            ]}
          />
        )}
        {apiSubTab === "translate" && (
          <APITable
            rows={[
              ["Mayura V1", "Code-mix translation", "Hinglish, Tamlish, Bonglish handled as-is. 11 languages bidirectional. 4 tone modes (formal / modern colloquial / classical / code-mix). Roman / native / spoken script.", "₹20 / 10K chars"],
              ["Sarvam-Translate V1", "Long-form structured translation", "All 22 scheduled Indian languages + English. Markdown / HTML / LaTeX / code-comments preserved. Open weights (GPL-3.0).", "₹20 / 10K chars"],
              ["Transliterate", "Script conversion", "Latin → Devanagari, Tamil, Bengali, Telugu, Gujarati, Kannada, Malayalam, Punjabi, Odia. Native-script preservation of dialect.", "₹20 / 10K chars"],
              ["Language Identification", "Auto-detect language", "Per request, low-latency. All 22 scheduled languages + English.", "₹3.50 / 10K chars"],
            ]}
          />
        )}
        {apiSubTab === "vision" && (
          <APITable
            rows={[
              ["Sarvam Vision (Document)", "Document Intelligence", "84.3% on olmOCR-Bench · 93.28% on OmniDocBench v1.5 · leads 21/22 Indic languages. HTML / MD / JSON outputs with bounding boxes, layout, reading order.", "₹1.50 / page"],
              ["Sarvam Vision (Real-time)", "VLM Q&A and captioning", "3B SSM VLM. Image understanding, visual reasoning, captioning across 22 Indic languages.", "₹1.50 / image"],
              ["Sarvam Akshar API", "Document workbench", "Sarvam Vision + agent-driven corrections + visual grounding + industry templates. Available via Akshar Pro and above.", "₹1.50 / page"],
            ]}
          />
        )}
        {apiSubTab === "llm" && (
          <APITable
            rows={[
              ["Sarvam-105B", "Frontier MoE (Apache 2.0)", "106B total · 10.3B active · 128K context · 12T training tokens. MMLU 90.6 · Math500 98.6 · LiveCodeBench v6 71.7. OpenAI-compatible.", "₹4 in / ₹0.4 cached / ₹16 out per 1M"],
              ["Sarvam-30B", "Production MoE (Apache 2.0)", "32B total · 2.4B active · 32–65K context · 16T tokens. HumanEval 92.1 · MBPP 92.7. 3–6× higher tokens/sec/GPU vs Qwen3 baseline.", "₹2.5 in / ₹0.25 cached / ₹10 out per 1M"],
              ["Sarvam-M (24B, legacy)", "Hybrid reasoning", "Mistral-Small-3.1-24B fine-tune. Apache 2.0. Migration to Sarvam-30B recommended for new builds.", "Free per token"],
            ]}
          />
        )}
      </div>

      {/* Service tiers strip */}
      <div className="mt-10">
        <div className="font-display text-base font-semibold tracking-tight text-stone-900 mb-3 flex items-center gap-2">
          <Wand2 size={15} className="text-amber-700" />
          Service tiers — choose per request
        </div>
        <div className="grid grid-cols-4 gap-3">
          {[
            { tier: "Batch", mult: "0.5×", sla: "24-hour completion", use: "Offline pipelines, evals, archival" },
            { tier: "Flex", mult: "0.5×", sla: "Best-effort", use: "Background workloads, queueable" },
            { tier: "Standard", mult: "1.0×", sla: "<2s p95 typical", use: "Default for most production traffic" },
            { tier: "Priority", mult: "1.8×", sla: "Guaranteed capacity", use: "Real-time voice agents, IVR, telephony" },
          ].map((t) => (
            <div key={t.tier} className="rounded-lg border border-stone-200 bg-white p-3.5">
              <div className="flex items-baseline justify-between">
                <span className="text-[13px] font-semibold text-stone-900">{t.tier}</span>
                <span className="font-mono text-[13px] font-semibold text-amber-800">
                  {t.mult}
                </span>
              </div>
              <div className="text-[11px] text-stone-500 mt-1">{t.sla}</div>
              <div className="text-[11px] text-stone-700 mt-1">{t.use}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Volume ladder */}
      <div className="mt-10">
        <div className="font-display text-base font-semibold tracking-tight text-stone-900 mb-3 flex items-center gap-2">
          <ArrowDownRight size={15} className="text-amber-700" />
          Volume discount ladder — applied automatically
        </div>
        <div className="rounded-xl border border-stone-200 bg-white overflow-hidden">
          {[
            ["₹10L – ₹50L", "10% off credit purchases"],
            ["₹50L – ₹2Cr", "20% off credit purchases"],
            ["₹2Cr – ₹10Cr", "30% off credit purchases"],
            ["₹10Cr+", "Custom — contact sales"],
          ].map((row, i) => (
            <div
              key={i}
              className="flex items-center justify-between px-5 py-3 border-b border-stone-100 last:border-b-0 text-[13px]"
            >
              <span className="font-mono text-stone-700">{row[0]} annual commit</span>
              <span className="text-stone-900 font-medium">{row[1]}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Compliance + trust strip */}
      <div className="mt-10">
        <div className="font-display text-base font-semibold tracking-tight text-stone-900 mb-3">
          Production trust signals
        </div>
        <ComplianceRow />
        <div className="mt-3">
          <TrustStrip
            label="Used by"
            customers={[
              "Tata Capital",
              "SBI Life",
              "Razorpay",
              "Swiggy",
              "PMO Mann Ki Baat",
              "NCERT",
              "IIT Madras",
              "IndiaAI Mission",
            ]}
          />
        </div>
      </div>

      <FAQ
        items={[
          { q: "What's a Sarvam Credit?", a: "1 Sarvam Credit = ₹1 of list-price consumption. The conversion table on this page is the entire pricing model — no separate currency, no contextual switching." },
          { q: "How does cached-input pricing work?", a: "Cached input is 10% of the full input price (90% discount), applied automatically to repeated prompt prefixes within a 5-minute window. No code changes required; caching is transparent to OpenAI-compatible clients. Matches the Anthropic/OpenAI/DeepSeek norm." },
          { q: "Are the LLM weights actually open?", a: "Yes. Sarvam-30B and Sarvam-105B are released under Apache 2.0 with full open weights on HuggingFace at huggingface.co/sarvamai. Sarvam-Translate V1 is GPL-3.0. Sarvam-1 (2B) is research-only." },
          { q: "Can I mix service tiers in one workload?", a: "Yes. Choose per request: Batch for nightly evaluations, Standard for default traffic, Priority for real-time voice agents." },
          { q: "Are rate limits per API or shared?", a: "Per API. Flagship LLM endpoints (Sarvam-30B/105B) carry lower limits than speech and translation, reflecting GPU cost. Vision Document Intelligence is uniform at 10 RPM across self-serve plans. See docs.sarvam.ai/rate-limits for the full table." },
          { q: "What happens when I exhaust monthly credits?", a: "You can keep using the API at list rates (no service interruption), top up credits, or wait for the next month. Plan benefits like rate limits don't change." },
          { q: "Do credits expire?", a: "Never. Unused credits roll over indefinitely." },
          { q: "Is there OpenAI compatibility?", a: "Yes. Sarvam-30B and Sarvam-105B chat completions are accessible via an OpenAI-compatible endpoint at https://api.sarvam.ai/v1. Standard OpenAI Python and Node SDKs work as drop-in clients." },
          { q: "Can my API credits be used inside Samvaad, Studio, or Akshar?", a: "Yes — when a product workspace runs out of its allowance, you'll be prompted to overflow from your API credits, opt-in per request." },
          { q: "Where is my data stored? Does anything leave India?", a: "By default, no. Sarvam's managed cloud serves all inferences from infrastructure inside India. Your inputs are not used to train Sarvam models. Cross-border transfer occurs only if an Enterprise customer explicitly elects a foreign region." },
          { q: "How efficient is the Indic tokenizer?", a: "Sarvam's custom tokenizer averages 1.4–2.1 characters per token across Indic native scripts — 2–4× more efficient than generic multilingual tokenizers from OpenAI or Llama. This makes Sarvam-30B and Sarvam-105B effectively cheaper-per-Indic-character than published rates suggest." },
        ]}
      />
    </div>
  );
}

// --- Mistral-style model card ---
function ModelCard({ name, tag, description, rates }) {
  return (
    <div className="rounded-xl border border-stone-200 bg-white p-5 hover:border-amber-700/50 transition-colors group">
      <div className="flex items-start justify-between mb-2">
        <div className="flex items-center gap-2">
          <Cpu size={16} className="text-amber-700" />
          <span className="font-display text-base font-semibold tracking-tight text-stone-900">
            {name}
          </span>
        </div>
        <span className="text-[10px] uppercase tracking-[0.12em] font-semibold px-2 py-0.5 bg-stone-900 text-stone-50 rounded-full">
          {tag}
        </span>
      </div>
      <div className="text-[13px] text-stone-600 leading-snug min-h-[42px]">
        {description}
      </div>
      <div className="mt-3 pt-3 border-t border-stone-100 grid grid-cols-3 gap-2">
        {rates.map((r) => (
          <div key={r.label}>
            <div className="text-[10px] uppercase tracking-[0.12em] text-stone-500 font-medium">
              {r.label}
            </div>
            <div className="font-mono text-[13px] font-semibold text-stone-900 mt-0.5">
              {r.value}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-3 flex items-center gap-1 text-[12px] text-stone-500 group-hover:text-amber-800 transition-colors cursor-pointer">
        Open model details
        <ArrowRight size={12} />
      </div>
    </div>
  );
}

// --- API table rows ---
function APITable({ rows }) {
  return (
    <div className="rounded-xl border border-stone-200 bg-white overflow-hidden">
      <div className="grid grid-cols-[1.4fr_1fr_2.2fr_1fr] gap-0 border-b border-stone-200 bg-stone-50/70">
        {["Model", "Capability", "Description", "Price"].map((h) => (
          <div
            key={h}
            className="px-4 py-3 text-[11px] uppercase tracking-[0.12em] text-stone-500 font-semibold"
          >
            {h}
          </div>
        ))}
      </div>
      {rows.map((row, i) => (
        <div
          key={i}
          className="grid grid-cols-[1.4fr_1fr_2.2fr_1fr] gap-0 border-b border-stone-100 last:border-b-0 hover:bg-stone-50/50"
        >
          <div className="px-4 py-3 text-[13px] font-semibold text-stone-900">
            {row[0]}
          </div>
          <div className="px-4 py-3 text-[12px] text-stone-600">{row[1]}</div>
          <div className="px-4 py-3 text-[13px] text-stone-700 leading-snug">
            {row[2]}
          </div>
          <div className="px-4 py-3 font-mono text-[13px] font-semibold text-stone-900">
            {row[3]}
          </div>
        </div>
      ))}
    </div>
  );
}

// =============================================================
// TAB 4 — ENTERPRISE DEPLOYMENTS (Mistral-style form)
// =============================================================
function EnterpriseTab() {
  const [checked, setChecked] = useState(false);
  return (
    <div className="px-10 py-12 max-w-5xl mx-auto">
      <div className="grid grid-cols-2 rounded-2xl overflow-hidden border border-stone-200">
        {/* Left side — pitch */}
        <div className="bg-white p-10 relative overflow-hidden">
          {/* Subtle grid pattern */}
          <div
            className="absolute inset-0 opacity-40 pointer-events-none"
            style={{
              backgroundImage:
                "linear-gradient(to right, #e7e5e4 1px, transparent 1px), linear-gradient(to bottom, #e7e5e4 1px, transparent 1px)",
              backgroundSize: "44px 44px",
            }}
          />
          <div className="relative">
            <div className="w-12 h-12 rounded-lg bg-amber-100 flex items-center justify-center mb-10">
              <span className="font-display text-xl font-bold text-amber-800">
                स
              </span>
            </div>
            <div className="font-display text-[28px] font-semibold tracking-tight text-stone-900 leading-[1.15] max-w-md">
              Let&rsquo;s build something sovereign together.
            </div>
            <div className="mt-6 text-stone-600 leading-relaxed max-w-md text-[14px]">
              Forward-deployed Sarvam engineers help defence, BFSI, healthcare, and government
              teams stand up air-gapped, on-prem, and sovereign-grade AI. We&rsquo;re cleared
              for sensitive workloads — Sarvam is the IndiaAI Mission&rsquo;s first sovereign-LLM
              builder, with ₹246.72 crore awarded by MeitY and 4,000+ H100 GPUs allocated through
              Yotta, Tata Comm, and E2E Networks.
            </div>

            <div className="mt-10 space-y-3">
              {[
                "Air-gapped Chanakya for defence, intelligence, and regulated finance",
                "On-prem Sarvam-105B with custom fine-tuning on your data",
                "Dedicated GPU capacity (H100, H200, Blackwell) on sovereign clouds",
                "Industry templates and custom extractors for Akshar (BFSI, healthcare, legal)",
                "Outcome-based pricing for Samvaad — per resolved query, per qualified lead",
                "SOC 2 Type II + ISO 27001 + DPDP-aligned · Data hosted in India by default",
                "Forward-deployed engineering for the duration of the engagement",
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-2.5 text-[13px] text-stone-700"
                >
                  <Check
                    size={14}
                    strokeWidth={2.25}
                    className="mt-0.5 shrink-0 text-amber-700"
                  />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-10 pt-6 border-t border-stone-200">
              <div className="text-[10px] uppercase tracking-[0.14em] text-stone-500 font-semibold mb-2">
                Trusted by India&rsquo;s most consequential institutions
              </div>
              <div className="flex flex-wrap gap-x-4 gap-y-1.5 text-[12px] text-stone-600 font-medium">
                <span>Tata Capital</span>
                <span>·</span>
                <span>SBI Life</span>
                <span>·</span>
                <span>PMO</span>
                <span>·</span>
                <span>NCERT</span>
                <span>·</span>
                <span>NPTEL</span>
                <span>·</span>
                <span>IIT Madras</span>
                <span>·</span>
                <span>IndiaAI Mission</span>
                <span>·</span>
                <span>Govt. of Tamil Nadu</span>
                <span>·</span>
                <span>Govt. of Odisha</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right side — form */}
        <div className="bg-amber-50/70 p-10">
          <div className="space-y-5">
            <div className="grid grid-cols-2 gap-3">
              <FormField label="First name" required />
              <FormField label="Last name" required />
            </div>
            <FormField label="Work email" type="email" required />
            <FormField label="Company" required />
            <FormField label="Role" required />
            <FormField
              label="Tell us about your project"
              required
              textarea
              hint="Please share your objectives and any specific requirements for deployment, performance, scale, or sovereignty."
            />

            <label className="flex items-start gap-2.5 text-[12px] text-stone-700 cursor-pointer">
              <input
                type="checkbox"
                checked={checked}
                onChange={(e) => setChecked(e.target.checked)}
                className="mt-0.5 accent-amber-700"
              />
              <span>
                I want to receive updates about new features and products from
                Sarvam.
              </span>
            </label>

            <div className="text-[11px] text-stone-500 leading-relaxed">
              By submitting this form, you agree with our{" "}
              <span className="underline">Terms of Service</span>. We process
              your data to respond to your contact request in accordance with
              our <span className="underline">Privacy Policy</span>.
            </div>

            <button className="px-6 py-2.5 rounded-lg bg-stone-900 text-stone-50 text-sm font-medium hover:bg-stone-800 transition-colors flex items-center gap-2">
              Submit
              <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </div>

      <FAQ
        items={[
          { q: "What deployment models do you support?", a: "Cloud (managed by Sarvam in India), Private VPC (in your AWS, Azure, or GCP region), Dedicated capacity (reserved H100/Blackwell on Yotta, Tata Comm, or E2E Networks), On-prem (your hardware, your data centre), and Air-gapped via Chanakya for defence, intelligence, and regulated finance. We size the deployment to your data-residency, latency, and sovereignty requirements." },
          { q: "Do you support fine-tuning?", a: "Yes — Sarvam-30B and Sarvam-105B both support custom fine-tuning on your data. Specific rate cards depend on dataset size, training compute, and deployment model. Fine-tuned models can run on shared, dedicated, or on-prem capacity." },
          { q: "What does the engagement look like?", a: "Forward-deployed engineers work alongside your team for the duration of the integration. Engagement starts with a 2–4 week discovery and security review, followed by a 4–8 week reference deployment, and production cutover with a named CSM and 24×7 priority support. Quarterly business reviews and product roadmap input included." },
          { q: "How long does a typical deployment take?", a: "Cloud deployments go live in days. Private VPC takes 2–4 weeks. On-prem takes 4–8 weeks. Air-gapped Chanakya deployments are 6–12 weeks depending on integration complexity, security review, and certification requirements." },
          { q: "Do you take government and defence work?", a: "Yes — Sarvam was selected by MeitY as the first sovereign-LLM builder under the IndiaAI Mission (₹246.72 crore award; 4,000+ H100 GPUs). Chanakya is purpose-built for defence, regulated finance, and government. We're cleared for sensitive workloads and have active deployments with state governments (Tamil Nadu, Odisha) and central PSUs." },
          { q: "What compliance certifications do you hold?", a: "SOC 2 Type II (independently audited) and ISO 27001 (information security management). DPDP Act-aligned. GST-compliant invoicing with e-invoice and GSTR-2A reconciliation. Custom MSAs, DPAs, BAAs, and cross-border transfer addenda available on Enterprise contracts." },
          { q: "Can I bring my own model?", a: "Yes — Studio, Samvaad, and Chanakya all support BYO model on Enterprise contracts. We integrate your existing model alongside Sarvam's stack with consistent observability, governance, and routing." },
        ]}
      />
    </div>
  );
}

// --- Reusable form field ---
function FormField({ label, required, type = "text", textarea, hint }) {
  return (
    <div>
      <label className="block text-[13px] font-medium text-stone-900 mb-1.5">
        {label}
        {required && <span className="text-amber-700 ml-0.5">*</span>}
      </label>
      {textarea ? (
        <>
          <textarea
            placeholder={hint || ""}
            rows={4}
            className="w-full px-3 py-2.5 rounded-lg border border-stone-300 bg-white text-[13px] text-stone-900 placeholder:text-stone-400 focus:outline-none focus:border-amber-700 resize-none"
          />
          <div className="text-right text-[11px] text-stone-500 mt-1">0/500</div>
        </>
      ) : (
        <input
          type={type}
          className="w-full px-3 py-2.5 rounded-lg border border-stone-300 bg-white text-[13px] text-stone-900 focus:outline-none focus:border-amber-700"
        />
      )}
    </div>
  );
}

// =============================================================
// APP
// =============================================================
export default function App() {
  // Sidebar workspace — independent
  const [workspace, setWorkspace] = useState("indus");
  // Pricing page tabs — independent
  const [pricingTab, setPricingTab] = useState("indus");
  const [platformSubTab, setPlatformSubTab] = useState("samvaad");
  const [apiSubTab, setApiSubTab] = useState("stt");

  return (
    <div className="font-body min-h-screen bg-stone-100/50 text-stone-900">
      <style>{FONT_STYLE}</style>

      <div className="flex min-h-screen">
        <Sidebar workspace={workspace} setWorkspace={setWorkspace} />

        <main className="flex-1 bg-white border-l border-stone-200 overflow-x-auto">
          <Header />
          <TopTabs pricingTab={pricingTab} onChange={setPricingTab} />

          {pricingTab === "indus" && <IndusTab />}
          {pricingTab === "platform" && (
            <PlatformTab
              subTab={platformSubTab}
              setSubTab={setPlatformSubTab}
            />
          )}
          {pricingTab === "apis" && (
            <APIsTab apiSubTab={apiSubTab} setApiSubTab={setApiSubTab} />
          )}
          {pricingTab === "enterprise" && <EnterpriseTab />}

          <div className="px-10 py-8 border-t border-stone-200 mt-12">
            <div className="max-w-5xl mx-auto text-[11px] text-stone-400 font-mono leading-relaxed">
              <div className="mb-2">
                wireframe • sarvam pricing remodel • may 2026
              </div>
              <div className="text-stone-500 font-body normal-case tracking-normal max-w-3xl">
                All prices listed in INR exclusive of 18% GST. Sarvam-30B and Sarvam-105B chat
                completions are currently available at zero per-token cost during the open-weights
                launch promotion; published per-token rates apply once the promotion ends. Apache
                2.0 open weights for Sarvam-30B and Sarvam-105B available at huggingface.co/sarvamai.
                The Sarvam corporate operating entity is Axonwise Private Limited, Bengaluru.
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
