"use client";

import { motion } from "framer-motion";
import { GitMerge, Image as ImageIcon, AlertTriangle } from "lucide-react";

export default function DeepDive() {
  return (
    <section className="py-32 relative bg-[#F0F4F8] dark:bg-[#141518] border-y border-slate-200 dark:border-white/5" id="investigation">
      <div className="absolute inset-0 bg-[radial-gradient(#1C1E21_1px,transparent_1px)] dark:bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.03] dark:opacity-[0.02]" />
      <div className="max-w-5xl mx-auto px-6 w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-6">
            <span className="flex items-center justify-center w-12 h-12 rounded-full bg-[#2563EB]/10 text-[#2563EB] font-medium text-lg border border-[#2563EB]/20">02</span>
            <h2 className="text-[#2563EB] font-medium tracking-wide text-sm uppercase">Deep Dive — Action</h2>
          </div>
          <h3 className="text-4xl md:text-5xl font-medium text-[#1C1E21] dark:text-slate-50 mb-6 tracking-tight">The Architecture Shift</h3>
          <p className="text-slate-600 dark:text-slate-400 text-xl max-w-3xl leading-relaxed">
            Instead of treating compliance as one problem, the workflow was separated into two distinct systems: Detection and Remediation. This separation significantly improved experimentation speed and model evaluation.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-8 rounded-3xl bg-gradient-to-br from-blue-500/10 to-transparent border border-[#2563EB]/20"
          >
            <SearchIcon className="h-8 w-8 text-blue-400 mb-4" />
            <h4 className="text-xl font-medium text-[#1C1E21] dark:text-slate-50 mb-2">Detection System</h4>
            <p className="text-slate-600 dark:text-slate-400">Identify whether an image violates compliance rules and localize the exact violation.</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="p-8 rounded-3xl bg-gradient-to-br from-purple-500/10 to-transparent border border-purple-500/20"
          >
            <WandIcon className="h-8 w-8 text-purple-400 mb-4" />
            <h4 className="text-xl font-medium text-[#1C1E21] dark:text-slate-50 mb-2">Remediation System</h4>
            <p className="text-slate-600 dark:text-slate-400">Remove or replace the violating elements seamlessly while maintaining visual realism.</p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h4 className="text-2xl font-medium text-[#1C1E21] dark:text-slate-50 mb-8">Why Computer Vision Models Failed</h4>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Inconsistent Labeling",
                desc: "The same object could be labeled differently ('person', 'human', 'adult') creating major automation instability."
              },
              {
                title: "Poor Contextual Understanding",
                desc: "Models detected objects but couldn't determine if a person was incidental or a non-incidental private identity exposure."
              },
              {
                title: "Weak Localization Accuracy",
                desc: "Segmentation masks missed reflections, over-segmented objects, and produced inconsistent boundaries on clutter."
              }
            ].map((failure, i) => (
              <div key={i} className="p-6 rounded-2xl bg-white dark:bg-[#242526] shadow-sm border border-slate-100 dark:border-white/5 relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <AlertTriangle className="h-24 w-24 text-red-500" />
                </div>
                <h5 className="text-lg font-medium text-[#1C1E21] dark:text-slate-50 mb-3 relative z-10">{failure.title}</h5>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed relative z-10">{failure.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function SearchIcon(props: any) {
  return (
    <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
  );
}

function WandIcon(props: any) {
  return (
    <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
    </svg>
  );
}
