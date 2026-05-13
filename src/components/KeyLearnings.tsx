"use client";

import { motion } from "framer-motion";
import { Lightbulb, RotateCw } from "lucide-react";

export default function KeyLearnings() {
  return (
    <section className="py-32 bg-[#F0F2F5] dark:bg-[#1C1E21] relative" id="learnings">
      <div className="max-w-5xl mx-auto px-6 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-6">
            <span className="flex items-center justify-center w-12 h-12 rounded-full bg-[#2563EB]/10 text-[#2563EB] font-medium text-lg border border-[#2563EB]/20">05</span>
            <h2 className="text-[#2563EB] font-medium tracking-wide text-sm uppercase">Key Takeaways</h2>
          </div>
          <h3 className="text-4xl md:text-5xl font-medium text-[#1C1E21] dark:text-slate-50 mb-6 tracking-tight">Key Learnings</h3>
          <p className="text-slate-600 dark:text-slate-400 text-xl max-w-3xl leading-relaxed">
            Building an AI system for production scale taught us that technical capability must be matched with contextual understanding and adaptability.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-8 rounded-3xl bg-[#2563EB]/[0.04] dark:bg-[#2563EB]/[0.05] border-l-4 border-[#2563EB] border-y border-r border-[#2563EB]/10 dark:border-white/5 h-full flex flex-col"
          >
            <div className="h-12 w-12 rounded-xl bg-[#2563EB]/10 flex items-center justify-center mb-6">
              <Lightbulb className="text-[#2563EB] h-6 w-6" />
            </div>
            <h4 className="text-2xl font-medium text-[#1C1E21] dark:text-slate-50 mb-4">Context &gt; Object Detection</h4>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6 flex-grow">
              Compliance is not purely an object detection problem—it is a contextual reasoning problem. A crowd outside a commercial property may be acceptable, but a homeowner visible in a mirror reflection is not.
            </p>
            <div className="p-4 rounded-xl bg-white dark:bg-[#242526] border border-slate-200 dark:border-white/5 shadow-sm">
              <span className="text-sm font-medium text-[#2563EB] dark:text-[#2563EB]">The Takeaway:</span>
              <span className="text-sm text-slate-600 dark:text-slate-400 ml-2">The system must understand intent and context, not just identify pixels.</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="p-8 rounded-3xl bg-[#2563EB]/[0.04] dark:bg-[#2563EB]/[0.05] border-l-4 border-[#2563EB] border-y border-r border-[#2563EB]/10 dark:border-white/5 h-full flex flex-col"
          >
            <div className="h-12 w-12 rounded-xl bg-[#2563EB]/10 flex items-center justify-center mb-6">
              <RotateCw className="text-[#2563EB] h-6 w-6" />
            </div>
            <h4 className="text-2xl font-medium text-[#1C1E21] dark:text-slate-50 mb-4">Adaptability is Crucial</h4>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6 flex-grow">
              Our initial architecture relied heavily on segmentation-based CV models. We learned the importance of adapting quickly to evolving AI capabilities and pivoted toward VLM-driven reasoning pipelines.
            </p>
            <div className="p-4 rounded-xl bg-white dark:bg-[#242526] border border-slate-200 dark:border-white/5 shadow-sm">
              <span className="text-sm font-medium text-[#2563EB] dark:text-[#2563EB]">The Result:</span>
              <span className="text-sm text-slate-600 dark:text-slate-400 ml-2">This pivot significantly outperformed the original approach in both scalability and real-world accuracy.</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
