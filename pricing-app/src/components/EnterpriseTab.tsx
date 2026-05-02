"use client";

import React, { useState } from "react";
import { Check } from "lucide-react";
import { FAQ } from "./shared";

const FEATURES = [
  "Air-gapped Chanakya for defence and regulated finance",
  "On-prem Sarvam-105B with custom fine-tuning",
  "Dedicated GPU capacity through Yotta",
  "Industry templates and custom extractors for Akshar",
  "Outcome-based pricing for Samvaad",
];

const FAQ_QUESTIONS = [
  "What deployment models do you support?",
  "Is fine-tuning available for on-prem deployments?",
  "What does the engagement model look like?",
  "What are typical timelines for an enterprise deployment?",
  "Are you eligible for government and defence work?",
];

export default function EnterpriseTab() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    role: "",
    project: "",
    updates: false,
  });

  const projectMax = 500;

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      setForm((prev) => ({
        ...prev,
        [name]: (e.target as HTMLInputElement).checked,
      }));
    } else {
      if (name === "project" && value.length > projectMax) return;
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
  }

  return (
    <div className="space-y-8">
      {/* Main card */}
      <div className="rounded-2xl bg-[#F8F8F8] border border-[#E8E8E8] overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Left column */}
          <div className="p-8 lg:p-10 flex flex-col gap-6 border-b border-[#E8E8E8] lg:border-b-0 lg:border-r">
            {/* Logo */}
            <span
              className="font-[family-name:var(--font-season)] text-[20px] font-medium text-[#1A1A1A]"
            >
              sarvam
            </span>

            {/* Headline */}
            <h2 className="text-[32px] font-medium text-[#1A1A1A] leading-tight">
              Let&apos;s build something sovereign together.
            </h2>

            {/* Description */}
            <p className="text-[14px] text-[#6B6B6B] leading-relaxed">
              Air-gapped, on-prem, and sovereign-grade AI for defence, BFSI,
              healthcare, and government. We deploy with forward-deployed
              engineers and meet you where your data lives.
            </p>

            {/* Feature list */}
            <ul className="space-y-3">
              {FEATURES.map((feature, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Check
                    size={15}
                    strokeWidth={2.5}
                    className="text-[#F97316] mt-0.5 shrink-0"
                  />
                  <span className="text-[14px] text-[#1A1A1A] leading-snug">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right column — Contact form */}
          <div className="p-8 lg:p-10">
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              {/* First name + Last name */}
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-[13px] font-medium text-[#1A1A1A]">
                    First name<span className="text-[#F97316]">*</span>
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={form.firstName}
                    onChange={handleChange}
                    required
                    className="border border-[#E8E8E8] rounded-md px-3 py-2 text-[14px] text-[#1A1A1A] placeholder:text-[#999999] outline-none focus:border-[#1A1A1A] transition-colors bg-white"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[13px] font-medium text-[#1A1A1A]">
                    Last name<span className="text-[#F97316]">*</span>
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={form.lastName}
                    onChange={handleChange}
                    required
                    className="border border-[#E8E8E8] rounded-md px-3 py-2 text-[14px] text-[#1A1A1A] placeholder:text-[#999999] outline-none focus:border-[#1A1A1A] transition-colors bg-white"
                  />
                </div>
              </div>

              {/* Email */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[13px] font-medium text-[#1A1A1A]">
                  Email<span className="text-[#F97316]">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="border border-[#E8E8E8] rounded-md px-3 py-2 text-[14px] text-[#1A1A1A] placeholder:text-[#999999] outline-none focus:border-[#1A1A1A] transition-colors bg-white"
                />
              </div>

              {/* Role */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[13px] font-medium text-[#1A1A1A]">
                  Role
                </label>
                <input
                  type="text"
                  name="role"
                  value={form.role}
                  onChange={handleChange}
                  className="border border-[#E8E8E8] rounded-md px-3 py-2 text-[14px] text-[#1A1A1A] placeholder:text-[#999999] outline-none focus:border-[#1A1A1A] transition-colors bg-white"
                />
              </div>

              {/* Project textarea with character counter */}
              <div className="flex flex-col gap-1.5">
                <div className="flex items-center justify-between">
                  <label className="text-[13px] font-medium text-[#1A1A1A]">
                    Tell us about your project
                  </label>
                  <span className="text-[12px] text-[#999999]">
                    {form.project.length}/{projectMax}
                  </span>
                </div>
                <textarea
                  name="project"
                  value={form.project}
                  onChange={handleChange}
                  rows={4}
                  className="border border-[#E8E8E8] rounded-md px-3 py-2 text-[14px] text-[#1A1A1A] placeholder:text-[#999999] outline-none focus:border-[#1A1A1A] transition-colors bg-white resize-none"
                />
              </div>

              {/* Updates checkbox */}
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  name="updates"
                  checked={form.updates}
                  onChange={handleChange}
                  className="mt-0.5 w-4 h-4 accent-[#1A1A1A] shrink-0 cursor-pointer"
                />
                <span className="text-[13px] text-[#6B6B6B] leading-relaxed">
                  I want to receive updates about new features and products from
                  Sarvam AI.
                </span>
              </label>

              {/* Legal text */}
              <p className="text-[12px] text-[#999999] leading-relaxed">
                By submitting this form, you agree with our{" "}
                <span className="underline cursor-pointer hover:text-[#6B6B6B] transition-colors">
                  Terms of Service
                </span>
                . We process your data in accordance with our{" "}
                <span className="underline cursor-pointer hover:text-[#6B6B6B] transition-colors">
                  Privacy Policy
                </span>
                .
              </p>

              {/* Submit button */}
              <button
                type="submit"
                className="w-full py-2.5 bg-[#1A1A1A] text-white text-[14px] font-medium rounded-md hover:bg-[#333333] transition-colors cursor-pointer"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* FAQ section */}
      <FAQ
        title="Frequently asked questions"
        questions={FAQ_QUESTIONS}
      />
    </div>
  );
}
