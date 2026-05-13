"use client";

import { motion } from "framer-motion";
import { ArrowRight, Box, Cpu, FileText, Image as ImageIcon } from "lucide-react";

export default function WorkflowArchitecture() {
  const steps = [
    {
      icon: Box,
      title: "Stage 1: Listing-Level Detection",
      model: "GPT Vision",
      desc: "Analyzes full listing image sets. Identifies which images contain violations and categorizes the violation type.",
      example: '"Image 4 contains agent branding"'
    },
    {
      icon: Cpu,
      title: "Stage 2: Contextual Reasoning",
      model: "Custom VLM Layer",
      desc: "Evaluates intent (incidental vs. non-incidental) to reduce false positives. Decides if removal is strictly necessary.",
      example: "Public crowd = incidental. Homeowner reflection = non-incidental."
    },
    {
      icon: FileText,
      title: "Stage 3: Prompt Generation",
      model: "Gemini",
      desc: "Generates highly contextual remediation prompts including desired correction and scene preservation requirements.",
      example: "Prompt: 'Remove person in reflection while preserving mirror frame'"
    },
    {
      icon: ImageIcon,
      title: "Stage 4: Compliance Removal",
      model: "Flux Context",
      desc: "Handles the final remediation. Produces natural inpainting, structural preservation, and high realism.",
      example: "Output: Clean, compliant listing image"
    }
  ];

  return (
    <section className="py-32 relative bg-white dark:bg-[#1C1E21] text-[#1C1E21] dark:text-slate-50 overflow-hidden" id="architecture">
      {/* Decorative gradient orbs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#2563EB]/10 rounded-full blur-[120px] opacity-20 dark:opacity-50 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-slate-500/10 rounded-full blur-[120px] opacity-20 dark:opacity-50 pointer-events-none" />
      
      <div className="max-w-5xl mx-auto px-6 w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="flex items-center gap-4 mb-6">
            <span className="flex items-center justify-center w-12 h-12 rounded-full bg-[#2563EB]/10 text-[#2563EB] font-medium text-lg border border-[#2563EB]/20">03</span>
            <h2 className="text-[#2563EB] font-medium tracking-wide text-sm uppercase">Systems Architecture</h2>
          </div>
          <h3 className="text-4xl md:text-5xl font-medium text-[#1C1E21] dark:text-white mb-6 tracking-tight">Multi-Model Pipeline</h3>
          <p className="text-slate-600 dark:text-slate-400 text-xl max-w-3xl leading-relaxed">
            The core insight: <strong className="text-[#1C1E21] dark:text-white font-medium">No single model performed best across the entire pipeline.</strong> The solution is a multi-model workflow where each model handles a highly specialized task.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connector Line */}
          <div className="hidden md:block absolute left-[28px] top-8 bottom-8 w-px bg-slate-200 dark:bg-white/10 z-0" />

          <div className="space-y-12">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative z-10 flex flex-col md:flex-row gap-6 md:gap-8 group"
              >
                <div className="flex-shrink-0 flex items-center md:items-start gap-4 md:gap-0">
                  <div className="h-14 w-14 rounded-2xl bg-white dark:bg-[#242526] border border-slate-200 dark:border-white/10 flex items-center justify-center group-hover:border-[#2563EB]/50 transition-colors shadow-md">
                    <step.icon className="h-6 w-6 text-slate-500 dark:text-slate-300 group-hover:text-[#2563EB] transition-colors" />
                  </div>
                  <div className="md:hidden font-medium text-[#1C1E21] dark:text-white">{step.title}</div>
                </div>

                <div className="flex-grow p-8 rounded-3xl bg-white dark:bg-[#242526] border border-slate-200 dark:border-white/5 group-hover:border-slate-300 dark:group-hover:border-white/10 transition-colors shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-none">
                  <div className="hidden md:flex items-center justify-between mb-4">
                    <h4 className="text-xl font-medium text-[#1C1E21] dark:text-white">{step.title}</h4>
                    <span className="px-3 py-1 text-xs font-medium bg-[#2563EB]/10 text-[#2563EB] rounded-full border border-[#2563EB]/20">
                      {step.model}
                    </span>
                  </div>
                  <div className="md:hidden inline-block px-3 py-1 text-xs font-medium bg-[#2563EB]/10 text-[#2563EB] rounded-full border border-[#2563EB]/20 mb-4">
                    {step.model}
                  </div>
                  
                  <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed text-lg">
                    {step.desc}
                  </p>

                  <div className="p-4 rounded-xl bg-slate-50 dark:bg-black/50 border border-slate-200 dark:border-white/5 border-l-2 border-l-[#2563EB]">
                    <div className="text-xs text-slate-500 dark:text-slate-400 mb-1 uppercase tracking-wider">Example</div>
                    <div className="text-sm text-slate-700 dark:text-slate-300 font-mono">{step.example}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
