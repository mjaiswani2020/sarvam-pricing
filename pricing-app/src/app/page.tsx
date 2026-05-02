"use client";

import React, { useState } from "react";
import {
  Home as HomeIcon,
  Grid3X3,
  Code2,
  Server,
} from "lucide-react";
import Sidebar from "@/components/Sidebar";
import ApisTab from "@/components/ApisTab";
import IndusTab from "@/components/IndusTab";
import PlatformTab from "@/components/PlatformTab";
import EnterpriseTab from "@/components/EnterpriseTab";

const mainTabs = [
  { id: "indus", label: "Indus", icon: HomeIcon },
  { id: "platform", label: "Platform", icon: Grid3X3 },
  { id: "apis", label: "APIs", icon: Code2 },
  { id: "enterprise", label: "Enterprise deployments", icon: Server },
];

function getSidebarKey(tab: string, platformSubTab: string): string {
  if (tab === "platform") return platformSubTab;
  if (tab === "enterprise") return "enterprise";
  return tab;
}

export default function PricingPage() {
  const [activeTab, setActiveTab] = useState("apis");
  const [platformSubTab, setPlatformSubTab] = useState("samvaad");

  const sidebarKey = getSidebarKey(activeTab, platformSubTab);

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <Sidebar activeTab={sidebarKey} />

      {/* Main content */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Top header */}
        <header className="flex items-center justify-between px-8 py-4 border-b border-[#EEEEEE] shrink-0 bg-white">
          <div>
            <h1 className="text-[24px] font-medium text-[#1A1A1A]">Pricing</h1>
            <p className="text-[13px] text-[#6B6B6B] mt-0.5">
              Simple, transparent pricing. Credits never expire.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 bg-[#F5F5F5] rounded-full px-4 py-1.5">
              <span className="text-[12px] text-[#6B6B6B]">API credits</span>
              <span className="text-[13px] font-medium text-[#1A1A1A] font-[family-name:var(--font-mono)]">
                ₹994.49
              </span>
            </div>
            <button className="text-[13px] text-[#F97316] font-medium hover:underline cursor-pointer">
              + Add credits
            </button>
            <div className="flex items-center gap-1 text-[13px] text-[#6B6B6B]">
              <span>₹</span>
              <span>INR</span>
            </div>
          </div>
        </header>

        {/* Tab navigation */}
        <nav className="flex items-center gap-1 px-8 border-b border-[#EEEEEE] bg-white shrink-0">
          {mainTabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-3 text-[13px] font-medium border-b-2 transition-colors cursor-pointer ${
                  isActive
                    ? "border-[#1A1A1A] text-[#1A1A1A]"
                    : "border-transparent text-[#999999] hover:text-[#6B6B6B]"
                }`}
              >
                <Icon size={15} strokeWidth={1.8} />
                {tab.label}
              </button>
            );
          })}
        </nav>

        {/* Content area */}
        <main className="flex-1 overflow-y-auto bg-white">
          <div className="max-w-[960px] mx-auto px-8 py-8">
            {activeTab === "apis" && <ApisTab />}
            {activeTab === "indus" && <IndusTab />}
            {activeTab === "platform" && (
              <PlatformTab
                activeSubTab={platformSubTab}
                onSubTabChange={setPlatformSubTab}
              />
            )}
            {activeTab === "enterprise" && <EnterpriseTab />}
          </div>
          {/* Footer */}
          <div className="max-w-[960px] mx-auto px-8 pb-6">
            <p className="text-[11px] text-[#ABABAB]">
              All prices are exclusive of GST.
            </p>
          </div>
        </main>
      </div>
    </div>
  );
}
