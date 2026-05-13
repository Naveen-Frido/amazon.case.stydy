"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-100/50 via-[white] to-[white] dark:from-white/5 dark:via-black dark:to-black -z-10" />
      
      <div className="max-w-5xl mx-auto px-6 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6"
        >
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-sm text-slate-700 dark:text-slate-300">
            <span className="flex h-2 w-2 rounded-full bg-[#2563EB] animate-pulse" />
            <span>AI Systems Architecture Case Study</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-medium tracking-tight text-[#1C1E21] dark:text-slate-50 leading-tight">
            AI-Powered Real Estate <br className="hidden md:block" />
            <span className="text-slate-600 dark:text-slate-400">Compliance Detection & Removal</span>
          </h1>

          <p className="max-w-2xl text-lg md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed pt-4">
            An automated workflow for real estate platforms in the US and Canada to identify and resolve compliance violations in property images before listings go live.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-16"
        >
          {[
            { label: "Compliance Failure", value: "12% → 2%" },
            { label: "Core Tech", value: "GPT Vision & Gemini" },
            { label: "Remediation", value: "Flux Context" },
            { label: "Scale", value: "US & Canada Markets" },
          ].map((metric, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/5 backdrop-blur-sm"
            >
              <div className="text-sm text-slate-600 dark:text-slate-400 mb-2">{metric.label}</div>
              <div className="text-xl font-medium text-[#1C1E21] dark:text-slate-50">{metric.value}</div>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="pt-20 flex gap-4 flex-wrap"
        >
          {["Multi-model Orchestration", "Vision Language Models", "AI Reasoning Pipelines", "SAM", "OWL-ViT"].map((tag) => (
            <span key={tag} className="px-4 py-2 rounded-full border border-slate-200 dark:border-white/10 text-sm text-slate-600 dark:text-slate-400 bg-white/50 dark:bg-white/[0.02]">
              {tag}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
