"use client";

import { motion } from "framer-motion";
import { Target, Zap, Shield, Search } from "lucide-react";

export default function TaskSection() {
  return (
    <section className="py-24 bg-white/50 dark:bg-white/[0.02] border-y border-slate-200 dark:border-white/5 relative" id="task">
      <div className="max-w-5xl mx-auto px-6 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-[#2563EB] font-medium tracking-wide text-sm uppercase mb-3">T — Task</h2>
          <h3 className="text-3xl md:text-5xl font-medium text-[#1C1E21] dark:text-slate-50 mb-6">The Objective</h3>
          <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl leading-relaxed">
            Design and evaluate an AI-driven workflow that could accurately detect compliance violations and automatically remediate images.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
          {[
            {
              icon: Search,
              title: "Detect & Localize",
              description: "Identify exact violations in highly variable imagery"
            },
            {
              icon: Zap,
              title: "Automate",
              description: "Reduce manual review and accelerate approvals"
            },
            {
              icon: Shield,
              title: "Accuracy",
              description: "Minimize false positives and false negatives"
            },
            {
              icon: Target,
              title: "Remediate",
              description: "Output compliant-ready images automatically"
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-6 rounded-2xl bg-white dark:bg-[#242526] shadow-sm border border-slate-100 dark:border-white/5"
            >
              <item.icon className="h-6 w-6 text-slate-600 dark:text-slate-400 mb-4" />
              <h4 className="text-[#1C1E21] dark:text-slate-50 font-medium mb-2">{item.title}</h4>
              <p className="text-sm text-slate-500 dark:text-slate-500">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
