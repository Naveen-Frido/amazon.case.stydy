"use client";

import { motion } from "framer-motion";
import { Compass, Users, Award, Shield, Lightbulb } from "lucide-react";

export default function LeadershipPrinciples() {
  const principles = [
    {
      icon: Compass,
      title: "Deep Dive",
      color: "text-blue-400",
      bg: "bg-[#2563EB]/10",
      points: [
        "Root-cause analysis of model failures",
        "Comparative model benchmarking",
        "Detailed false-positive investigations",
        "Contextual compliance reasoning"
      ]
    },
    {
      icon: Award,
      title: "Deliver Results",
      color: "text-green-400",
      bg: "bg-green-500/10",
      points: [
        "Reduced compliance failure rate from 12% → 2%",
        "Built scalable production-ready workflow",
        "Improved listing processing efficiency"
      ]
    },
    {
      icon: Shield,
      title: "Ownership",
      color: "text-purple-400",
      bg: "bg-purple-500/10",
      points: [
        "Investigated operational bottlenecks end-to-end",
        "Continuously refined workflow based on user feedback"
      ]
    },
    {
      icon: Lightbulb,
      title: "Invent and Simplify",
      color: "text-yellow-400",
      bg: "bg-yellow-500/10",
      points: [
        "Broke a complex workflow into modular systems",
        "Multi-model orchestration strategy"
      ]
    },
    {
      icon: Users,
      title: "Customer Obsession",
      color: "text-orange-400",
      bg: "bg-orange-500/10",
      points: [
        "Reduced agent workload",
        "Improved listing turnaround time",
        "Minimized unnecessary listing rejections"
      ]
    }
  ];

  return (
    <section className="py-24 relative" id="leadership">
      <div className="max-w-5xl mx-auto px-6 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h3 className="text-3xl md:text-5xl font-medium text-[#1C1E21] dark:text-slate-50 mb-6">Leadership Principles Demonstrated</h3>
          <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            How this project aligned with Amazon's core operating principles to drive measurable business value.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {principles.map((principle, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-8 rounded-3xl bg-white dark:bg-[#242526] shadow-sm border border-slate-100 dark:border-white/5 hover:border-slate-200 dark:border-white/10 transition-colors"
            >
              <div className={`h-12 w-12 rounded-xl flex items-center justify-center mb-6 ${principle.bg}`}>
                <principle.icon className={`h-6 w-6 ${principle.color}`} />
              </div>
              <h4 className="text-xl font-medium text-[#1C1E21] dark:text-slate-50 mb-4">{principle.title}</h4>
              <ul className="space-y-3">
                {principle.points.map((point, i) => (
                  <li key={i} className="flex items-start text-sm text-slate-600 dark:text-slate-400">
                    <span className="text-[#1C1E21] dark:text-slate-50/20 mr-3 mt-0.5 shrink-0">•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
