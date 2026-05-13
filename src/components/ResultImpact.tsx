"use client";

import { motion } from "framer-motion";
import { TrendingDown, Zap, Server, ShieldCheck } from "lucide-react";

export default function ResultImpact() {
  return (
    <section className="py-32 bg-[#1C1E21] dark:bg-black relative px-4" id="results">
      <div className="max-w-6xl mx-auto w-full bg-[#F0F2F5] dark:bg-[#1C1E21] rounded-[40px] shadow-xl dark:shadow-none border border-slate-200 dark:border-white/5 p-8 md:p-16 relative overflow-hidden">
        
        {/* Soft radial glow */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-green-500/5 rounded-full blur-[100px] pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <div className="flex justify-center mb-6">
            <span className="flex items-center justify-center w-12 h-12 rounded-full bg-[#2563EB]/10 text-[#2563EB] font-medium text-lg border border-[#2563EB]/20">04</span>
          </div>
          <h2 className="text-[#2563EB] font-medium tracking-wide text-sm uppercase mb-3">R — Result</h2>
          <h3 className="text-4xl md:text-5xl font-medium text-[#1C1E21] dark:text-slate-50 mb-6">Business & Technical Impact</h3>
          <p className="text-slate-600 dark:text-slate-400 text-xl max-w-2xl mx-auto leading-relaxed">
            The workflow significantly improved operational efficiency, transforming a rigid manual bottleneck into a scalable, high-volume automated pipeline.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-8 rounded-3xl bg-white dark:bg-[#242526] shadow-sm border border-slate-100 dark:border-white/5 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 bg-green-500/10 rounded-full blur-3xl" />
            <h4 className="text-sm font-medium text-slate-500 dark:text-slate-500 uppercase tracking-wider mb-8">Business Impact</h4>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-full bg-green-500/10 flex items-center justify-center shrink-0">
                  <TrendingDown className="h-5 w-5 text-green-400" />
                </div>
                <div>
                  <div className="text-3xl font-medium text-[#1C1E21] dark:text-slate-50 mb-1">12% → 2%</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">Reduction in listing compliance failure rate</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-full bg-slate-100 dark:bg-white/5 flex items-center justify-center shrink-0">
                  <Zap className="h-5 w-5 text-slate-700 dark:text-slate-300" />
                </div>
                <div>
                  <div className="text-lg font-medium text-[#1C1E21] dark:text-slate-50 mb-1">Accelerated Approvals</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">Drastically reduced manual review dependency across US & Canada markets</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-full bg-slate-100 dark:bg-white/5 flex items-center justify-center shrink-0">
                  <ShieldCheck className="h-5 w-5 text-slate-700 dark:text-slate-300" />
                </div>
                <div>
                  <div className="text-lg font-medium text-[#1C1E21] dark:text-slate-50 mb-1">Prevented Rejections</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">Stopped entire listings from being rejected due to single-image violations</div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="p-8 rounded-3xl bg-white dark:bg-[#242526] shadow-sm border border-slate-100 dark:border-white/5 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 bg-[#2563EB]/10 rounded-full blur-3xl" />
            <h4 className="text-sm font-medium text-slate-500 dark:text-slate-500 uppercase tracking-wider mb-8">Technical Impact</h4>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-full bg-[#2563EB]/10 flex items-center justify-center shrink-0">
                  <Server className="h-5 w-5 text-blue-400" />
                </div>
                <div>
                  <div className="text-lg font-medium text-[#1C1E21] dark:text-slate-50 mb-1">Multi-Model Architecture</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">Established scalable orchestration instead of relying on a single monolithic model</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-full bg-slate-100 dark:bg-white/5 flex items-center justify-center shrink-0">
                  <Box className="h-5 w-5 text-slate-700 dark:text-slate-300" />
                </div>
                <div>
                  <div className="text-lg font-medium text-[#1C1E21] dark:text-slate-50 mb-1">Multimodal Reasoning</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">Successfully transitioned from pure segmentation pipelines to VLM-driven reasoning</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-full bg-slate-100 dark:bg-white/5 flex items-center justify-center shrink-0">
                  <SearchIcon className="h-5 w-5 text-slate-700 dark:text-slate-300" />
                </div>
                <div>
                  <div className="text-lg font-medium text-[#1C1E21] dark:text-slate-50 mb-1">Contextual Accuracy</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">Reduced false positives through incidental/non-incidental classification</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
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

function Box(props: any) {
  return (
    <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
    </svg>
  );
}
