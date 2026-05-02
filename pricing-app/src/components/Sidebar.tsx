"use client";

import {
  Home,
  FolderOpen,
  Mic,
  BookOpen,
  Compass,
  Glasses,
  Key,
  BarChart3,
  FileText,
  CreditCard,
  DollarSign,
  MessageSquare,
  Eye,
  MessageCircle,
  Languages,
  AudioLines,
  Type,
  Bot,
  Workflow,
  AudioWaveform,
  Database,
  Wrench,
  Phone,
  Radio,
  Link2,
  MessagesSquare,
  LineChart,
  ClipboardCheck,
  Video,
  FileDown,
  Tv,
  Palette,
  Image,
  FileSearch,
  GitBranch,
  Package,
  ListChecks,
  Webhook,
  ScrollText,
  Users,
  Globe,
  ChevronDown,
} from "lucide-react";
import React from "react";

type SidebarItem = {
  label: string;
  icon: React.ElementType;
  active?: boolean;
};

type SidebarSection = {
  title?: string;
  items: SidebarItem[];
  collapsible?: boolean;
};

type SidebarConfig = {
  product: string;
  productSub: string;
  productIcon: React.ReactNode;
  sections: SidebarSection[];
};

const sidebarConfigs: Record<string, SidebarConfig> = {
  indus: {
    product: "Indus",
    productSub: "Consumer chat app",
    productIcon: (
      <div className="w-7 h-7 rounded-lg bg-[#E8604C] flex items-center justify-center">
        <span className="text-white text-xs font-medium">I</span>
      </div>
    ),
    sections: [
      {
        title: "Indus",
        items: [
          { label: "Recents", icon: Home },
          { label: "Projects", icon: FolderOpen },
          { label: "Voice mode", icon: Mic },
          { label: "Library", icon: BookOpen },
          { label: "Discover", icon: Compass, active: true },
          { label: "Sarvam Kaze", icon: Glasses },
        ],
      },
    ],
  },
  apis: {
    product: "APIs",
    productSub: "Build with our models",
    productIcon: (
      <div className="w-7 h-7 rounded-lg bg-[#1A1A1A] flex items-center justify-center">
        <span className="text-white text-[10px] font-medium font-mono">
          {"</>"}
        </span>
      </div>
    ),
    sections: [
      {
        title: "Developers",
        items: [
          { label: "API Keys", icon: Key },
          { label: "Usage", icon: BarChart3 },
          { label: "Logs", icon: FileText },
          { label: "Rate limits", icon: LineChart },
          { label: "Billing", icon: CreditCard },
          { label: "Pricing", icon: DollarSign, active: true },
        ],
      },
      {
        title: "Playground",
        items: [
          { label: "Text to Speech", icon: AudioLines },
          { label: "Vision", icon: Eye },
          { label: "Speech to Text", icon: Mic },
          { label: "Chat", icon: MessageCircle },
          { label: "Translate", icon: Languages },
          { label: "Voice cloning", icon: AudioWaveform },
          { label: "Transliterate", icon: Type },
        ],
      },
    ],
  },
  samvaad: {
    product: "Samvaad",
    productSub: "Voice & chat agents",
    productIcon: (
      <div className="w-7 h-7 rounded-lg bg-[#6BBF6B] flex items-center justify-center">
        <span className="text-white text-xs font-medium">S</span>
      </div>
    ),
    sections: [
      {
        title: "Build",
        items: [
          { label: "Agents", icon: Bot },
          { label: "Workflows", icon: Workflow },
          { label: "Voices", icon: AudioWaveform },
          { label: "Knowledge bases", icon: Database },
          { label: "Tools", icon: Wrench },
        ],
      },
      {
        title: "Deploy",
        items: [
          { label: "Phone numbers", icon: Phone },
          { label: "Channels", icon: Radio },
          { label: "Integrations", icon: Link2 },
        ],
      },
      {
        title: "Operate",
        items: [
          { label: "Conversations", icon: MessagesSquare },
          { label: "Analytics", icon: LineChart },
          { label: "Evaluations", icon: ClipboardCheck },
        ],
      },
    ],
  },
  studio: {
    product: "Studio",
    productSub: "Dubbing & content",
    productIcon: (
      <div className="w-7 h-7 rounded-lg bg-[#6BBF6B] flex items-center justify-center">
        <span className="text-white text-xs font-medium">S</span>
      </div>
    ),
    sections: [
      {
        title: "Create",
        items: [
          { label: "Projects", icon: FolderOpen },
          { label: "Video dubbing", icon: Video },
          { label: "Doc translation", icon: FileDown },
          { label: "Dub Live", icon: Tv },
          { label: "Voices", icon: AudioWaveform },
        ],
      },
      {
        title: "Library",
        items: [
          { label: "Brand kits", icon: Palette },
          { label: "Assets", icon: Image },
        ],
      },
    ],
  },
  akshar: {
    product: "Akshar",
    productSub: "Document AI",
    productIcon: (
      <div className="w-7 h-7 rounded-lg bg-[#6BBF6B] flex items-center justify-center">
        <span className="text-white text-xs font-medium">A</span>
      </div>
    ),
    sections: [
      {
        title: "Workspace",
        items: [
          { label: "Documents", icon: FileText },
          { label: "Pipelines", icon: GitBranch },
          { label: "Extractors", icon: FileSearch },
          { label: "Industry packs", icon: Package },
          { label: "Review queue", icon: ListChecks },
        ],
      },
      {
        title: "Connect",
        items: [
          { label: "Integrations", icon: Link2 },
          { label: "Webhooks", icon: Webhook },
        ],
      },
      {
        title: "Govern",
        items: [
          { label: "Audit logs", icon: ScrollText },
          { label: "Team / Reviewers", icon: Users },
        ],
      },
    ],
  },
  enterprise: {
    product: "APIs",
    productSub: "Build with our models",
    productIcon: (
      <div className="w-7 h-7 rounded-lg bg-[#1A1A1A] flex items-center justify-center">
        <span className="text-white text-[10px] font-medium font-mono">
          {"</>"}
        </span>
      </div>
    ),
    sections: [
      {
        title: "Developers",
        items: [
          { label: "API Keys", icon: Key },
          { label: "Usage", icon: BarChart3 },
          { label: "Rate limits", icon: LineChart },
          { label: "Billing", icon: CreditCard },
          { label: "Pricing", icon: DollarSign, active: true },
        ],
      },
    ],
  },
};

export default function Sidebar({ activeTab }: { activeTab: string }) {
  const config = sidebarConfigs[activeTab] || sidebarConfigs.apis;

  return (
    <aside className="w-[200px] min-w-[200px] h-full bg-[#FAFAFA] border-r border-[#E8E8E8] flex flex-col">
      {/* Product header */}
      <div className="px-3 pt-4 pb-3 flex items-center gap-2 cursor-pointer">
        {config.productIcon}
        <div className="flex-1 min-w-0">
          <div className="text-[13px] font-medium text-[#1A1A1A] truncate">
            {config.product}
          </div>
          <div className="text-[11px] text-[#999999] truncate">
            {config.productSub}
          </div>
        </div>
        <ChevronDown size={14} className="text-[#999999] shrink-0" />
      </div>

      {/* Navigation sections */}
      <nav className="flex-1 overflow-y-auto px-2 pb-4">
        {config.sections.map((section, si) => (
          <div key={si} className={si > 0 ? "mt-4" : "mt-1"}>
            {section.title && (
              <div className="px-2 py-1.5 text-[11px] font-medium text-[#999999] tracking-wide">
                {section.title}
              </div>
            )}
            <div className="space-y-0.5">
              {section.items.map((item, ii) => {
                const Icon = item.icon;
                return (
                  <div
                    key={ii}
                    className={`flex items-center gap-2.5 px-2 py-[6px] rounded-md text-[13px] cursor-pointer transition-colors ${
                      item.active
                        ? "bg-[#F0F0F0] text-[#1A1A1A] font-medium"
                        : "text-[#6B6B6B] hover:bg-[#F5F5F5]"
                    }`}
                  >
                    <Icon size={15} strokeWidth={1.8} className="shrink-0" />
                    <span className="truncate">{item.label}</span>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </nav>

      {/* Bottom items */}
      <div className="px-2 pb-3 border-t border-[#EEEEEE] pt-2 space-y-0.5">
        <div className="flex items-center gap-2.5 px-2 py-[6px] rounded-md text-[13px] text-[#6B6B6B] cursor-pointer hover:bg-[#F5F5F5]">
          <Globe size={15} strokeWidth={1.8} />
          <span>Documentation</span>
        </div>
        <div className="flex items-center gap-2.5 px-2 py-[6px] rounded-md text-[13px] text-[#6B6B6B] cursor-pointer hover:bg-[#F5F5F5]">
          <div className="w-[18px] h-[18px] rounded-full bg-[#F97316] flex items-center justify-center text-[9px] text-white font-medium shrink-0">
            MO
          </div>
          <span>Mohit</span>
        </div>
      </div>
    </aside>
  );
}
