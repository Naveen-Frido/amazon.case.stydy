"use client";

import { motion } from "framer-motion";
import { AlertCircle, Clock, Image as ImageIcon, CheckCircle2 } from "lucide-react";

export default function ProblemStatement() {
  return (
    <section className="py-32 relative bg-[#F0F2F5] dark:bg-[#1C1E21]" id="problem">
      <div className="max-w-5xl mx-auto px-6 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-6">
            <span className="flex items-center justify-center w-12 h-12 rounded-full bg-[#2563EB]/10 text-[#2563EB] font-medium text-lg border border-[#2563EB]/20">01</span>
            <h2 className="text-[#2563EB] font-medium tracking-wide text-sm uppercase">S — Situation</h2>
          </div>
          <h3 className="text-4xl md:text-5xl font-medium text-[#1C1E21] dark:text-slate-50 mb-6 tracking-tight">The Scalability Bottleneck</h3>
          <p className="text-slate-600 dark:text-slate-400 text-xl max-w-3xl leading-relaxed">
            Real estate marketplaces in the US and Canada follow strict compliance regulations before property listings can go live publicly. Before automation, this review process was entirely manual, creating unsustainable operational friction.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="p-8 rounded-3xl bg-[#2563EB]/[0.04] dark:bg-[#2563EB]/[0.05] border-l-4 border-[#2563EB] border-y border-r border-[#2563EB]/10 dark:border-white/5"
          >
            <div className="h-12 w-12 rounded-xl bg-[#2563EB]/10 flex items-center justify-center mb-6">
              <AlertCircle className="text-[#2563EB] h-6 w-6" />
            </div>
            <h4 className="text-xl font-medium text-[#1C1E21] dark:text-slate-50 mb-4">Strict Violation Types</h4>
            <ul className="space-y-3 text-slate-600 dark:text-slate-400">
              {[
                "Personal photos & homeowner identity exposure",
                "Faces in mirrors and reflections",
                "Vehicle license plates",
                "Broker/agent branding & contact details",
                "Pets and personal belongings",
                "Marketing materials and signage"
              ].map((item, i) => (
                <li key={i} className="flex items-start">
                  <span className="text-[#2563EB]/50 mr-3 mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="p-8 rounded-3xl bg-[#2563EB]/[0.04] dark:bg-[#2563EB]/[0.05] border-l-4 border-[#2563EB] border-y border-r border-[#2563EB]/10 dark:border-white/5 flex flex-col justify-center h-full">
              <div className="h-12 w-12 rounded-xl bg-[#2563EB]/10 flex items-center justify-center mb-6">
                <Clock className="text-[#2563EB] h-6 w-6" />
              </div>
              <h4 className="text-xl font-medium text-[#1C1E21] dark:text-slate-50 mb-4">Manual Review Friction</h4>
              <ul className="space-y-4 text-slate-600 dark:text-slate-400">
                <li className="flex items-center gap-3">
                  <ImageIcon className="h-5 w-5 text-[#2563EB]" />
                  <span>60–70 images per listing to inspect</span>
                </li>
                <li className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-[#2563EB]" />
                  <span>Review cycles often took 15–30 days</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#2563EB]" />
                  <span>~12% of listings failed compliance checks</span>
                </li>
              </ul>
              <div className="mt-8 pt-6 border-t border-[#2563EB]/10 dark:border-white/5">
                <p className="text-sm text-slate-500">
                  Entire listings were rejected even if only <strong className="text-[#1C1E21] dark:text-slate-300 font-medium">1 image</strong> violated compliance. Human review quality was highly inconsistent.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
