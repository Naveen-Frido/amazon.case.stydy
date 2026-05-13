"use client";

import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

export default function ModelEvaluation() {
  return (
    <section className="py-24 bg-white/50 dark:bg-white/[0.02] border-y border-slate-200 dark:border-white/5 relative" id="evaluation">
      <div className="max-w-5xl mx-auto px-6 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-3xl md:text-5xl font-medium text-[#1C1E21] dark:text-slate-50 mb-6">AI Model Evaluation</h3>
          <p className="text-slate-600 dark:text-slate-400 text-lg max-w-3xl leading-relaxed">
            Transitioning from pure segmentation toward Vision Language Models (VLMs), we evaluated multiple models across a dataset of thousands of real estate images to establish a benchmark structure.
          </p>
        </motion.div>

        <div className="space-y-6">
          {[
            {
              model: "GPT Vision",
              pros: ["High contextual understanding", "Excellent scene reasoning", "Accurate categorization"],
              cons: ["Prompt injection sensitivity", "Higher latency for simple tasks"],
              role: "Primary Listing-Level Detection"
            },
            {
              model: "Gemini",
              pros: ["Strong structured descriptive capabilities", "Fast response times", "Good at spatial reasoning"],
              cons: ["Occasional false negatives on small details"],
              role: "Contextual Prompt Generation"
            },
            {
              model: "Flux Context",
              pros: ["Natural inpainting", "Structural preservation", "Minimal artifacts"],
              cons: ["Requires precise prompting", "Computationally heavy"],
              role: "Compliance Remediation (Inpainting)"
            }
          ].map((evalItem, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-6 md:p-8 rounded-3xl bg-white dark:bg-[#242526] shadow-sm border border-slate-100 dark:border-white/5 flex flex-col md:flex-row gap-8"
            >
              <div className="md:w-1/4">
                <div className="text-sm text-slate-500 dark:text-slate-500 mb-1">Model</div>
                <h4 className="text-xl font-medium text-[#1C1E21] dark:text-slate-50 mb-2">{evalItem.model}</h4>
                <div className="inline-block px-3 py-1 rounded-full bg-[#2563EB]/10 text-blue-400 text-xs mt-2">
                  {evalItem.role}
                </div>
              </div>

              <div className="md:w-3/4 grid md:grid-cols-2 gap-6">
                <div>
                  <div className="text-sm text-slate-500 dark:text-slate-500 mb-3">Strengths</div>
                  <ul className="space-y-2">
                    {evalItem.pros.map((pro, i) => (
                      <li key={i} className="flex items-start text-sm text-slate-700 dark:text-slate-300">
                        <Check className="h-4 w-4 text-green-400 mr-2 mt-0.5 shrink-0" />
                        <span>{pro}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <div className="text-sm text-slate-500 dark:text-slate-500 mb-3">Limitations</div>
                  <ul className="space-y-2">
                    {evalItem.cons.map((con, i) => (
                      <li key={i} className="flex items-start text-sm text-slate-700 dark:text-slate-300">
                        <X className="h-4 w-4 text-red-400 mr-2 mt-0.5 shrink-0" />
                        <span>{con}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
