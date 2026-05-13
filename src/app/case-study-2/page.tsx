"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Box,
  Cpu,
  FileText,
  ImageIcon,
  Lightbulb,
  RotateCw,
  AlertCircle,
  Clock,
  CheckCircle2,
  Shield,
  Zap,
  Search,
  Target,
  Users,
  Camera,
  Layers,
  Sparkles,
  CheckSquare,
  RefreshCw,
  Building2,
  Home,
  Check,
  TrendingUp,
  Database,
  Crosshair,
  Eye
} from "lucide-react";
import Navigation from "@/components/Navigation";

// --- SECTIONS ---

function Hero() {
  return (
    <section className="min-h-[90vh] flex flex-col justify-center pt-20 pb-16 px-6 relative overflow-hidden bg-white dark:bg-[#1C1E21]">
      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-[#2563EB]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="max-w-5xl mx-auto w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <div className="flex flex-wrap items-center gap-3 mb-8">
            <span className="px-4 py-1.5 rounded-full bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-300 text-sm font-medium border border-slate-200 dark:border-white/10">
              Naveen Rajendran · Prompt Engineer & Problem Solver, Styldod Inc · Live Beta, Active Users
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-medium text-[#1C1E21] dark:text-white leading-[1.1] tracking-tight mb-8">
            AI-Assisted Virtual Staging <br className="hidden md:block"/>
            <span className="text-slate-600 dark:text-slate-400">with Real Shoppable Products</span>
          </h1>
          
          <div className="p-6 mb-12 rounded-2xl bg-[#2563EB]/5 border border-[#2563EB]/20">
            <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
              Note on beta status: This project is deliberately live in beta — not because it failed to launch, but because user behavior research at this stage is more valuable than a premature full release. The decision to hold full launch was a quality call I made after the first version. The second version is now generating real usage data that is actively shaping the next iteration.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-8 md:gap-12 pt-8 border-t border-slate-200 dark:border-white/10 mt-8">
            <div>
              <div className="text-sm text-slate-500 mb-1">Rooms visualized</div>
              <div className="font-medium text-[#1C1E21] dark:text-white whitespace-nowrap">1,000+</div>
            </div>
            <div>
              <div className="text-sm text-slate-500 mb-1">Real products staged</div>
              <div className="font-medium text-[#1C1E21] dark:text-white whitespace-nowrap">550+</div>
            </div>
            <div>
              <div className="text-sm text-slate-500 mb-1">User adoption rate</div>
              <div className="font-medium text-[#1C1E21] dark:text-white whitespace-nowrap">1/3</div>
            </div>
            <div>
              <div className="text-sm text-slate-500 mb-1">Gen AI vs 3D render cost</div>
              <div className="font-medium text-[#1C1E21] dark:text-white whitespace-nowrap">$3 vs $2K</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ProblemStatement() {
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
          <h3 className="text-4xl md:text-5xl font-medium text-[#1C1E21] dark:text-slate-50 mb-6 tracking-tight">The Product Fidelity Gap in AI Staging</h3>
          <p className="text-slate-600 dark:text-slate-400 text-xl max-w-3xl leading-relaxed mb-6">
            Styldod's virtual staging product served real estate agents well — generating attractive interiors quickly. But a different and more demanding use case was emerging: homeowners and ecommerce sellers who needed to visualize real, purchasable furniture products inside actual spaces before buying.
          </p>
          <p className="text-slate-600 dark:text-slate-400 text-xl max-w-3xl leading-relaxed mb-6">
            This is a fundamentally harder problem than aesthetic staging. Aesthetic staging just needs to look good. Product staging needs to be accurate — the right product, at the right scale, with the right material, in the right spatial position. AI generation at the time was failing on all four dimensions:
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="p-8 rounded-3xl bg-[#2563EB]/[0.04] dark:bg-[#2563EB]/[0.05] border-l-4 border-[#2563EB] border-y border-r border-[#2563EB]/10 dark:border-white/5 h-full"
          >
            <div className="h-12 w-12 rounded-xl bg-[#2563EB]/10 flex items-center justify-center mb-6">
              <Crosshair className="text-[#2563EB] h-6 w-6" />
            </div>
            <h4 className="text-xl font-medium text-[#1C1E21] dark:text-slate-50 mb-4">Product Identity Drift</h4>
            <ul className="space-y-3 text-slate-600 dark:text-slate-400 text-sm">
              <li className="flex items-start">
                <span className="text-[#2563EB]/50 mr-3 mt-1">•</span>
                <span>Product geometry and proportions altered during generation</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#2563EB]/50 mr-3 mt-1">•</span>
                <span>Fabric texture and material rendered incorrectly</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#2563EB]/50 mr-3 mt-1">•</span>
                <span>Structural details hallucinated — legs, arms, cushions modified</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#2563EB]/50 mr-3 mt-1">•</span>
                <span>Loss of commercial accuracy — the sofa no longer looks like the product</span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="p-8 rounded-3xl bg-[#2563EB]/[0.04] dark:bg-[#2563EB]/[0.05] border-l-4 border-[#2563EB] border-y border-r border-[#2563EB]/10 dark:border-white/5 h-full"
          >
            <div className="h-12 w-12 rounded-xl bg-[#2563EB]/10 flex items-center justify-center mb-6">
              <Layers className="text-[#2563EB] h-6 w-6" />
            </div>
            <h4 className="text-xl font-medium text-[#1C1E21] dark:text-slate-50 mb-4">Spatial Integration Failures</h4>
            <ul className="space-y-3 text-slate-600 dark:text-slate-400 text-sm">
              <li className="flex items-start gap-3">
                <span className="text-[#2563EB]/50 mt-1">•</span>
                <span>Furniture floating unnaturally — incorrect floor grounding</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#2563EB]/50 mt-1">•</span>
                <span>Shadow direction inconsistent with room lighting</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#2563EB]/50 mt-1">•</span>
                <span>Severe perspective mismatches between product and room</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#2563EB]/50 mt-1">•</span>
                <span>Scale wildly off — a chair the size of a sofa, or vice versa</span>
              </li>
            </ul>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="p-6 rounded-2xl bg-[#2563EB]/10 border border-[#2563EB]/20 text-left"
        >
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
            Outputs looked visually impressive but were commercially useless — a customer visualizing a $3,000 sofa needed to trust that what they were seeing was accurate. The existing pipeline could not deliver that trust.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function TaskSection() {
  return (
    <section className="py-24 bg-white dark:bg-[#1C1E21] border-y border-slate-200 dark:border-white/5" id="task">
      <div className="max-w-5xl mx-auto px-6 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div>
            <h2 className="text-[#2563EB] font-medium tracking-wide text-sm uppercase mb-3">T — Task</h2>
            <h3 className="text-3xl md:text-4xl font-medium text-[#1C1E21] dark:text-slate-50 mb-6">My Role: Prompting, Problem Solving, and Quality Escalation</h3>
            <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed mb-6">
              I was a key driver on a team of 8, responsible for prompt engineering, workflow problem solving, and quality evaluation. Critically, I also held quality escalation responsibility — if a version wasn't good enough to ship, it was my call to say so.
            </p>
            <div className="p-6 rounded-2xl bg-[#F0F2F5] dark:bg-[#242526] border border-slate-200 dark:border-white/5">
              <h4 className="text-[#1C1E21] dark:text-slate-50 font-medium mb-2">The first version — and why I stopped it:</h4>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                The first version of this workflow was built under significant time pressure. When I evaluated the outputs against the product accuracy standard required for real ecommerce use, I found the results too inconsistent to put in front of real users. I made the call to halt the release.
              </p>
            </div>
          </div>
          <div className="space-y-6">
            <div className="p-6 rounded-2xl bg-[#F0F2F5] dark:bg-[#242526] border border-slate-200 dark:border-white/5 border-l-4 border-l-rose-500">
              <h4 className="text-[#1C1E21] dark:text-slate-50 font-medium mb-2 text-rose-600 dark:text-rose-400">The Call:</h4>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                The outputs were visually acceptable in isolation but failed when compared to the actual product catalog. Proportions drifted. Materials were unreliable. Putting this in front of high-intent buyers would have damaged trust. I escalated and the team agreed — we needed a second version with a fundamentally better approach.
              </p>
            </div>
            
            <div className="p-6 rounded-2xl bg-[#F0F2F5] dark:bg-[#242526] border border-slate-200 dark:border-white/5 border-l-4 border-l-emerald-500">
              <h4 className="text-[#1C1E21] dark:text-slate-50 font-medium mb-2 text-emerald-600 dark:text-emerald-400">The Second Version:</h4>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                The second version — the one now in live beta — incorporated the architectural improvements we built after that decision. The beta is deliberate: we are observing real user behavior before committing to a full release direction.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function DeepDive() {
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
            <h2 className="text-[#2563EB] font-medium tracking-wide text-sm uppercase">A — Action (Deep Dive)</h2>
          </div>
          <h3 className="text-4xl md:text-5xl font-medium text-[#1C1E21] dark:text-slate-50 mb-6 tracking-tight">Evaluating the 3D Route — and Rejecting It on Cost</h3>
          <p className="text-slate-600 dark:text-slate-400 text-xl max-w-3xl leading-relaxed mb-6">
            The technically obvious solution to spatial accuracy was 3D-assisted reconstruction: use room measurements and floor plans to build a constrained 3D environment, then map real furniture catalog dimensions into that space before generating.
          </p>
          <p className="text-slate-600 dark:text-slate-400 text-xl max-w-3xl leading-relaxed mb-8">
            We tested this approach. It worked — spatial accuracy improved significantly. But when we evaluated it for production viability, the cost analysis was decisive:
          </p>
        </motion.div>

        <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-white/10 mb-8 bg-white dark:bg-[#242526]">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 dark:bg-white/5">
                <th className="p-4 border-b border-slate-200 dark:border-white/10 font-medium text-[#1C1E21] dark:text-white">Approach</th>
                <th className="p-4 border-b border-slate-200 dark:border-white/10 font-medium text-[#1C1E21] dark:text-white">Cost per room</th>
                <th className="p-4 border-b border-slate-200 dark:border-white/10 font-medium text-[#1C1E21] dark:text-white">Verdict</th>
              </tr>
            </thead>
            <tbody className="text-sm text-slate-600 dark:text-slate-300">
              <tr className="border-b border-slate-200 dark:border-white/10">
                <td className="p-4 font-medium text-[#1C1E21] dark:text-white align-top">Gen AI hybrid pipeline</td>
                <td className="p-4 align-top text-[#2563EB] font-medium">~$3 maximum per generation</td>
                <td className="p-4 align-top text-emerald-600 dark:text-emerald-400 font-medium">✓ Scalable for consumer product</td>
              </tr>
              <tr>
                <td className="p-4 font-medium text-[#1C1E21] dark:text-white align-top">3D render pipeline</td>
                <td className="p-4 align-top text-rose-500 font-medium">$200–$2,000+ per room</td>
                <td className="p-4 align-top text-rose-500 font-medium">✗ 66–666x more expensive. Rejected.</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="p-6 rounded-2xl bg-[#2563EB]/10 border border-[#2563EB]/20 text-left"
        >
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
            The team collectively made the call: the 3D route was not viable at consumer scale. We would solve spatial accuracy within the Gen AI pipeline — through better prompting architecture, not more expensive rendering infrastructure.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function WorkflowArchitecture() {
  const steps = [
    {
      icon: Target,
      title: "Step 1 — Product isolation and cutout",
      desc: "Each real furniture product was cut out from its catalog image with the background removed — clean product silhouette against empty space. This gave the model a precise visual reference with no environmental noise interfering with product identity.",
    },
    {
      icon: Layers,
      title: "Step 2 — Serial number annotation",
      desc: "Each product cutout was annotated with a unique serial number identifier. Multiple products in a scene — sofa, coffee table, lamp — each had their own numbered reference. This let the prompt refer to specific items without ambiguity.",
    },
    {
      icon: FileText,
      title: "Step 3 — Guided placement prompt",
      desc: "The generation prompt referenced each annotated product by serial number and specified exact placement parameters: position in the room, scale relative to room dimensions, surface grounding, shadow direction, and texture preservation instructions.",
      example: "\"Place item [01] — the three-seater sofa — against the back wall, grounded on the hardwood floor, casting a soft shadow left at 30 degrees consistent with the room's window light source. Maintain exact fabric texture, leg structure, and cushion geometry as shown in reference [01]. Scale: approximately 220cm width relative to room.\""
    }
  ];

  return (
    <section className="py-32 relative bg-white dark:bg-[#1C1E21] text-[#1C1E21] dark:text-slate-50 overflow-hidden" id="architecture">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#2563EB]/10 rounded-full blur-[120px] opacity-20 dark:opacity-50 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-slate-500/10 rounded-full blur-[120px] opacity-20 dark:opacity-50 pointer-events-none" />
      
      <div className="max-w-5xl mx-auto px-6 w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-4xl md:text-5xl font-medium text-[#1C1E21] dark:text-white mb-6 tracking-tight">My Deep Dive: Sequential Prompting with Annotated Product Cutouts</h3>
          <p className="text-slate-600 dark:text-slate-400 text-xl max-w-3xl leading-relaxed mb-4">
            The core prompting problem was product identity drift — the model would take a reference product image and generate something that looked similar but wasn't accurate. Proportion changed. Texture drifted. The product became a hallucination of itself.
          </p>
          <p className="text-slate-600 dark:text-slate-400 text-xl max-w-3xl leading-relaxed mb-6">
            I developed a sequential prompting technique to solve this:
          </p>
        </motion.div>

        <div className="relative mb-16">
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
                  </div>
                  
                  <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed text-base">
                    {step.desc}
                  </p>

                  {step.example && (
                    <div className="p-4 rounded-xl bg-slate-50 dark:bg-black/50 border border-slate-200 dark:border-white/5 border-l-2 border-l-[#2563EB]">
                      <div className="text-xs text-slate-500 dark:text-slate-400 mb-1 uppercase tracking-wider">Example Structure</div>
                      <div className="text-sm text-slate-700 dark:text-slate-300 font-mono italic">{step.example}</div>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-12 p-6 rounded-2xl bg-[#2563EB]/10 border border-[#2563EB]/20 text-left"
          >
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
              Why this worked: By giving the model a clean cutout reference AND an annotated identifier AND explicit placement instructions, we separated the 'what does this product look like' problem from the 'where does it go' problem. Earlier approaches conflated both into a single generation step, which caused drift on both dimensions simultaneously.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h3 className="text-3xl md:text-4xl font-medium text-[#1C1E21] dark:text-white mb-6 tracking-tight">The Lightweight Hybrid Workflow</h3>
          <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed mb-6">
            The full pipeline combined my sequential prompting approach with a three-stage generation workflow designed to balance accuracy with usability speed:
          </p>
          <ul className="space-y-4 text-slate-600 dark:text-slate-400 text-base mb-6">
            <li className="flex items-start gap-3">
              <span className="text-[#2563EB] mt-1">•</span>
              <span><strong>Stage 1 — Initial AI staging:</strong> User uploads empty room + style preferences. System generates a base staged environment as a compositional foundation</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#2563EB] mt-1">•</span>
              <span><strong>Stage 2 — Targeted furniture swapping:</strong> The placeholder furniture is replaced via inpainting using annotated real product cutouts and sequential prompts</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#2563EB] mt-1">•</span>
              <span><strong>Stage 3 — Iterative refinement loop:</strong> Repeated prompt optimization corrects residual scaling distortions, shadow inconsistencies, and lighting harmony</span>
            </li>
          </ul>
          <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed border-l-4 border-[#2563EB] pl-4">
            Each stage is modular — users can intervene at any stage, swap specific items, or request re-generation of individual placements without restarting the full workflow.
          </p>
        </motion.div>

      </div>
    </section>
  );
}

function ResultImpact() {
  return (
    <section className="py-32 bg-[#1C1E21] dark:bg-black relative px-4" id="results">
      <div className="max-w-6xl mx-auto w-full bg-[#F0F2F5] dark:bg-[#141518] rounded-[40px] shadow-xl dark:shadow-none border border-slate-200 dark:border-white/5 p-8 md:p-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#2563EB]/5 rounded-full blur-[100px] pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <div className="flex justify-center mb-6">
            <span className="flex items-center justify-center w-12 h-12 rounded-full bg-[#2563EB]/10 text-[#2563EB] font-medium text-lg border border-[#2563EB]/20">03</span>
          </div>
          <h2 className="text-[#2563EB] font-medium tracking-wide text-sm uppercase mb-3">R — Result (Deliver Results)</h2>
          <h3 className="text-4xl md:text-5xl font-medium text-[#1C1E21] dark:text-slate-50 mb-6">Live Beta with Real Usage Data — and a Surprising Discovery</h3>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="p-8 rounded-3xl bg-white dark:bg-[#242526] border border-slate-200 dark:border-white/5 shadow-sm"
          >
            <h4 className="text-2xl font-medium text-[#2563EB] mb-4">Beta Usage (as of Feb 2026)</h4>
            <ul className="space-y-3 text-slate-600 dark:text-slate-400 text-sm">
              <li className="flex items-start"><span className="text-[#2563EB] mr-2">•</span> 1,000+ rooms visualized in beta</li>
              <li className="flex items-start"><span className="text-[#2563EB] mr-2">•</span> 550+ real purchasable products staged</li>
              <li className="flex items-start"><span className="text-[#2563EB] mr-2">•</span> 1 in 3 users of the Styldod platform tried the feature</li>
              <li className="flex items-start"><span className="text-[#2563EB] mr-2">•</span> Active users include ecommerce sellers, brands, and marketers — not just homeowners</li>
              <li className="flex items-start"><span className="text-[#2563EB] mr-2">•</span> Beta running live to observe real behavior before committing full release direction</li>
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="p-8 rounded-3xl bg-white dark:bg-[#242526] border border-slate-200 dark:border-white/5 shadow-sm"
          >
            <h4 className="text-2xl font-medium text-[#2563EB] mb-4">User Behavior Findings</h4>
            <ul className="space-y-3 text-slate-600 dark:text-slate-400 text-sm">
              <li className="flex items-start"><span className="text-[#2563EB] mr-2">•</span> Ecommerce sellers using it to generate lifestyle product shots</li>
              <li className="flex items-start"><span className="text-[#2563EB] mr-2">•</span> Brands visualizing catalog products in contextual environments</li>
              <li className="flex items-start"><span className="text-[#2563EB] mr-2">•</span> Marketers generating quick lifestyle showcases at low cost</li>
              <li className="flex items-start"><span className="text-[#2563EB] mr-2">•</span> Most surprising: users staging a single wall with a painting — not a full room</li>
              <li className="flex items-start"><span className="text-[#2563EB] mr-2">•</span> Tool adapted by users far beyond its original intended use case</li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 p-8 rounded-3xl bg-white dark:bg-[#242526] border border-slate-200 dark:border-white/5 shadow-sm"
        >
          <h4 className="text-2xl font-medium text-[#1C1E21] dark:text-slate-50 mb-4">The unexpected user behavior that changed our roadmap:</h4>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
            We built a custom user session tracking tool to observe how people actually used the product. The assumption was: homeowners would visualize full room layouts before purchasing furniture. The reality was completely different.
          </p>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
            <strong className="text-[#1C1E21] dark:text-slate-300">What we found:</strong> Users were staging a single wall with a desired painting or art piece — using product images to generate a lifestyle shot of just that element in their space. They weren't visualizing rooms; they were making micro-purchase decisions about individual pieces. This was a use case we had never designed for.
          </p>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
            This finding — discovered through deliberate beta observation — is now shaping the next product direction. It revealed that the addressable market is significantly larger than full-room staging: it includes any high-consideration product purchase where a customer wants to see the item in their specific context.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="p-8 rounded-2xl bg-[#2563EB]/10 border border-[#2563EB]/20 text-left"
        >
          <h4 className="text-xl font-medium text-[#1C1E21] dark:text-slate-50 mb-4">The Remaining Gap and What Comes Next</h4>
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed font-medium mb-4">
            The core unresolved challenge is AI hallucination under spatial constraints: even with guardrails, the model will force furniture into a room even when the proportions are physically unrealistic. The model optimizes for visual plausibility over spatial truth.
          </p>
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed font-medium mb-4">
            My recommendation to the team: maintain the beta and pursue annotation-based editing as the next architectural direction. GPT Image 2.0's capabilities on complex multi-element images show significant promise for this problem — and the broader learning is that we must stay adaptive to new model releases and quickly evaluate their potential against our specific accuracy requirements.
          </p>
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
            <strong className="text-[#2563EB]">Strategic direction:</strong> Move from generative placement to annotation-based editing — where the user marks exact placement zones and the model fills within those constraints rather than deciding placement independently. This preserves speed while addressing the hallucination problem at its root.
          </p>
        </motion.div>

      </div>
    </section>
  );
}

function KeyLearnings() {
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
          <h3 className="text-4xl md:text-5xl font-medium text-[#1C1E21] dark:text-slate-50 mb-6 tracking-tight">Key Learnings</h3>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-8 rounded-3xl bg-[#2563EB]/[0.04] dark:bg-[#2563EB]/[0.05] border-l-4 border-[#2563EB] border-y border-r border-[#2563EB]/10 dark:border-white/5 h-full flex flex-col"
          >
            <h4 className="text-2xl font-medium text-[#1C1E21] dark:text-slate-50 mb-4">Calling out a bad version is a result, not a failure</h4>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed flex-grow">
              Stopping the first version before it reached users was the right call. A poor product experience with high-intent buyers — people about to spend thousands on furniture — would have damaged trust in a way that was much harder to recover from than a delayed release. Quality escalation is a form of delivering results.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="p-8 rounded-3xl bg-[#2563EB]/[0.04] dark:bg-[#2563EB]/[0.05] border-l-4 border-[#2563EB] border-y border-r border-[#2563EB]/10 dark:border-white/5 h-full flex flex-col"
          >
            <h4 className="text-2xl font-medium text-[#1C1E21] dark:text-slate-50 mb-4">Cost constraints are architectural constraints</h4>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed flex-grow">
              The 3D route would have solved spatial accuracy. But at $200–$2,000 per room versus $3 for Gen AI, it was never a real option for a consumer product. The architectural decision wasn't technical — it was economic. Every prompt engineering decision after that was shaped by the constraint of solving accuracy within the Gen AI cost envelope.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-8 rounded-3xl bg-[#2563EB]/[0.04] dark:bg-[#2563EB]/[0.05] border-l-4 border-[#2563EB] border-y border-r border-[#2563EB]/10 dark:border-white/5 h-full flex flex-col"
          >
            <h4 className="text-2xl font-medium text-[#1C1E21] dark:text-slate-50 mb-4">Observe users before you build for them</h4>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed flex-grow">
              We assumed full-room staging. Users taught us single-wall lifestyle visualization. The session tracking tool we built to observe beta behavior generated more strategic insight than any user interview we could have planned in advance. Build the observation infrastructure early.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="p-8 rounded-3xl bg-[#2563EB]/[0.04] dark:bg-[#2563EB]/[0.05] border-l-4 border-[#2563EB] border-y border-r border-[#2563EB]/10 dark:border-white/5 h-full flex flex-col"
          >
            <h4 className="text-2xl font-medium text-[#1C1E21] dark:text-slate-50 mb-4">What I would do differently</h4>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              I would build the session tracking tool before launching the beta, not alongside it. We lost early behavior data from the first users because the observation infrastructure wasn't ready. Every user session in a beta is a signal — and the early sessions, when behavior is most exploratory, are the most valuable ones to capture.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function LeadershipPrinciples() {
  const principles = [
    {
      icon: CheckSquare,
      title: "Are Right, A Lot",
      points: ["Called out the first version before it reached users. The outputs were visually acceptable but commercially inaccurate — putting them in front of high-intent buyers would have damaged trust. Made the call despite time pressure. The team agreed and built a better second version."]
    },
    {
      icon: Search,
      title: "Deep Dive",
      points: ["Diagnosed product identity drift at its root: conflating 'what does this product look like' with 'where does it go' in a single generation step. Developed sequential prompting with annotated cutouts to separate these problems. Built session tracking to observe real user behavior rather than assuming it."]
    },
    {
      icon: Target,
      title: "Deliver Results",
      points: ["1,000+ rooms visualized, 550+ real products staged, 1 in 3 platform users adopted the beta. Rejected the 3D route that was 66–666x more expensive. Delivered a working beta generating real behavioral data that is now shaping the next product direction."]
    },
    {
      icon: Eye,
      title: "Customer Obsession",
      points: ["Built session tracking to observe how users actually behaved — not how we assumed they would. Discovered the single-wall lifestyle visualization use case entirely through user observation. The next product direction is shaped by that discovery, not by internal assumptions."]
    }
  ];

  return (
    <section className="py-24 bg-white dark:bg-[#1C1E21] border-y border-slate-200 dark:border-white/5" id="leadership">
      <div className="max-w-5xl mx-auto px-6 w-full">
        <div className="mb-12">
          <h3 className="text-3xl font-medium text-[#1C1E21] dark:text-slate-50 mb-4">Leadership Principles Demonstrated</h3>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {principles.map((lp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-6 rounded-2xl bg-[#F0F2F5] dark:bg-[#242526] border border-slate-200 dark:border-white/5"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-white dark:bg-[#1C1E21] rounded-lg shadow-sm border border-slate-200 dark:border-white/5">
                  <lp.icon className="h-5 w-5 text-[#2563EB]" />
                </div>
                <h4 className="font-medium text-[#1C1E21] dark:text-slate-50">{lp.title}</h4>
              </div>
              <ul className="space-y-2">
                {lp.points.map((point, i) => (
                  <li key={i} className="text-sm text-slate-600 dark:text-slate-400 flex items-start">
                    <span className="text-[#2563EB]/50 mr-2 mt-1">•</span>
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

// --- MAIN PAGE EXPORT ---

export default function CaseStudyTwo() {
  return (
    <div className="min-h-screen bg-[#F0F2F5] dark:bg-[#1C1E21] selection:bg-[#BFDBFE] selection:text-slate-900 dark:selection:bg-[#2563EB]/40 dark:selection:text-white transition-colors duration-300">
      <Navigation />
      <main className="pt-24">
        <Hero />
        <ProblemStatement />
        <TaskSection />
        <DeepDive />
        <WorkflowArchitecture />
        <ResultImpact />
        <KeyLearnings />
        <LeadershipPrinciples />
      </main>
      
      <footer className="py-12 border-t border-slate-200 dark:border-white/5 bg-white dark:bg-[#1C1E21] text-center">
        <p className="text-slate-500 text-sm">
          Live beta · 1,000+ rooms · 550+ products · Naveen Rajendran · Styldod Inc
        </p>
      </footer>
    </div>
  );
}
