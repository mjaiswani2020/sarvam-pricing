"use client";

import React, { useState, useEffect } from "react";
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

const platformCredits: Record<string, { label: string; amount: string }> = {
  samvaad: { label: "Samvaad credits", amount: "₹2,450" },
  studio: { label: "Studio credits", amount: "₹1,800" },
  akshar: { label: "Akshar credits", amount: "₹3,200" },
};

export default function PricingPage() {
  // Sidebar product — only changes via the sidebar dropdown
  const [activeProduct, setActiveProduct] = useState("apis");
  // Pricing tab — only changes via the top tab bar or platform sub-tabs
  const [activeTab, setActiveTab] = useState("apis");
  const [platformSubTab, setPlatformSubTab] = useState("samvaad");
  const [showLoomModal, setShowLoomModal] = useState(false);

  useEffect(() => {
    const dismissed = localStorage.getItem("loom-modal-dismissed");
    if (!dismissed) {
      setShowLoomModal(true);
    }
  }, []);

  const dismissModal = () => {
    localStorage.setItem("loom-modal-dismissed", "true");
    setShowLoomModal(false);
  };

  const activePlatformCredit = platformCredits[activeProduct] ?? null;

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Loom intro modal */}
      {showLoomModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-2xl w-[720px] max-w-[90vw] overflow-hidden">
            <div className="px-6 pt-6 pb-4">
              <h2 className="text-[18px] font-medium text-[#1A1A1A]">
                Before you explore the prototype
              </h2>
              <p className="text-[14px] text-[#6B6B6B] mt-1">
                I recommend watching this short Loom walkthrough before you
                browse the prototype — it&apos;ll give you the full context.
              </p>
            </div>
            <div className="px-6">
              <div className="relative w-full rounded-lg overflow-hidden" style={{ paddingBottom: "64.8%" }}>
                <iframe
                  src="https://www.loom.com/embed/eeae3e30822c4cd1926614f17f5bf036"
                  frameBorder="0"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                />
              </div>
            </div>
            <div className="px-6 py-5 flex items-center justify-between">
              <p className="text-[12px] text-[#ABABAB]">
                You can always re-watch from the link later.
              </p>
              <button
                onClick={dismissModal}
                className="px-5 py-2.5 text-[13px] font-medium text-white bg-[#1A1A1A] rounded-lg hover:bg-[#333] transition-colors cursor-pointer"
              >
                Continue to prototype →
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Sidebar */}
      <Sidebar activeTab={activeProduct} onProductChange={setActiveProduct} />

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
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 rounded-full px-4 py-1.5 border border-[#E8E8E8]">
              <span className="text-[12px] text-[#999999]">API credits</span>
              <span className="text-[13px] font-medium text-[#1A1A1A]">
                ₹994.49
              </span>
            </div>
            {activePlatformCredit && (
              <div className="flex items-center gap-2 rounded-full px-4 py-1.5 border border-[#E8E8E8]">
                <span className="text-[12px] text-[#999999]">
                  {activePlatformCredit.label}
                </span>
                <span className="text-[13px] font-medium text-[#1A1A1A]">
                  {activePlatformCredit.amount}
                </span>
              </div>
            )}
            <button className="text-[13px] text-[#F97316] font-medium hover:underline cursor-pointer">
              + Add credits
            </button>
            <div className="flex items-center gap-1 rounded-full px-3 py-1 bg-[#F5F5F5] text-[12px] font-medium text-[#6B6B6B]">
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
