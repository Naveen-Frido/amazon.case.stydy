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
  Database,
  TrendingUp,
  ExternalLink
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
          <div className="flex items-center gap-3 mb-8">
            <span className="px-4 py-1.5 rounded-full bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-300 text-sm font-medium border border-slate-200 dark:border-white/10">
              Naveen Rajendran · Key Contributor, Styldod Inc · Built on CRMLS Production Pipeline
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-medium text-[#1C1E21] dark:text-white leading-[1.1] tracking-tight mb-8">
            AI-Powered Property Intelligence <br className="hidden md:block"/>
            <span className="text-slate-600 dark:text-slate-400">& Marketing Automation System</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 leading-relaxed max-w-3xl mb-12">
            Built as the next operational layer on top of the CRMLS compliance pipeline — extending AI understanding from violation detection to full property intelligence and marketing automation.
          </p>
          <div className="flex flex-wrap gap-8 md:gap-12 pt-8 border-t border-slate-200 dark:border-white/10 mt-12">
            <div>
              <div className="text-sm text-slate-500 mb-1">MLS data fields automated</div>
              <div className="font-medium text-[#1C1E21] dark:text-white whitespace-nowrap">1,500+</div>
            </div>
            <div>
              <div className="text-sm text-slate-500 mb-1">Marketing flag accuracy</div>
              <div className="font-medium text-[#1C1E21] dark:text-white whitespace-nowrap">80%</div>
            </div>
            <div>
              <div className="text-sm text-slate-500 mb-1">Listings processed</div>
              <div className="font-medium text-[#1C1E21] dark:text-white whitespace-nowrap">500+</div>
            </div>
            <div>
              <div className="text-sm text-slate-500 mb-1">Images per batch API call</div>
              <div className="font-medium text-[#1C1E21] dark:text-white whitespace-nowrap">15x</div>
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
          <h3 className="text-4xl md:text-5xl font-medium text-[#1C1E21] dark:text-slate-50 mb-6 tracking-tight flex items-center gap-3">
            The Operational Scale Challenge
            <a href="https://go.crmls.org/matrix-listing-input-form-residential/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-[#2563EB] hover:text-[#1d4ed8] transition-colors">
              <ExternalLink className="h-7 w-7" />
            </a>
          </h3>
          <p className="text-slate-600 dark:text-slate-400 text-xl max-w-3xl leading-relaxed mb-6">
            After deploying the AI compliance detection system for CRMLS, I identified the next major operational bottleneck in the same listing pipeline: structured property data entry and marketing enhancement decisions were still entirely manual, repetitive, and inconsistent at scale.
          </p>
          <p className="text-slate-600 dark:text-slate-400 text-xl max-w-3xl leading-relaxed mb-6">
            Before a real estate listing can go live on an MLS platform, agents and reviewers must populate hundreds of structured data fields from property images — materials, fixtures, appliances, architectural features, room characteristics — in addition to deciding which images need marketing enhancements like virtual staging, lawn cleanup, or day-to-dusk transformation.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-1 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="p-8 rounded-3xl bg-[#2563EB]/[0.04] dark:bg-[#2563EB]/[0.05] border-l-4 border-[#2563EB] border-y border-r border-[#2563EB]/10 dark:border-white/5"
          >
            <div className="h-12 w-12 rounded-xl bg-[#2563EB]/10 flex items-center justify-center mb-6">
              <TrendingUp className="text-[#2563EB] h-6 w-6" />
            </div>
            <h4 className="text-xl font-medium text-[#1C1E21] dark:text-slate-50 mb-4">The scale of the manual burden:</h4>
            <ul className="space-y-3 text-slate-600 dark:text-slate-400 text-sm">
              <li className="flex items-start">
                <span className="text-[#2563EB]/50 mr-3 mt-1">•</span>
                <span>A single listing contains 40–70 images across multiple room categories</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#2563EB]/50 mr-3 mt-1">•</span>
                <span>A single MLS residential form alone contains 1,500+ structured data fields — flooring material, appliance types, basement characteristics, heating systems, architectural features, and more</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#2563EB]/50 mr-3 mt-1">•</span>
                <span>Reviewers manually inspected each image and entered data field by field — a slow, subjective, and inconsistent process</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#2563EB]/50 mr-3 mt-1">•</span>
                <span>Most reviewers only completed mandatory (*) fields and skipped optional ones — leaving valuable property data unpopulated</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#2563EB]/50 mr-3 mt-1">•</span>
                <span>Marketing decisions (whether to stage a room, enhance a lawn, apply day-to-dusk) required subjective visual judgment on every image</span>
              </li>
            </ul>
          </motion.div>
        </div>
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
            <h3 className="text-3xl md:text-4xl font-medium text-[#1C1E21] dark:text-slate-50 mb-6">My Responsibility</h3>
            <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed mb-6">
              My responsibility was to design and build an AI workflow capable of understanding listing imagery at the property level — not just image by image — and producing two types of structured output: marketing enhancement recommendations and structured property metadata.
            </p>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed border-l-4 border-[#2563EB] pl-4 py-1">
              Marketing recommendations were prioritized first — higher immediate business value and revenue impact for Styldod. Metadata extraction followed as the deeper operational layer.
            </p>
          </div>
          <div className="grid sm:grid-cols-1 gap-4">
            <div className="p-6 rounded-2xl bg-[#F0F2F5] dark:bg-[#242526] border border-slate-200 dark:border-white/5">
              <div className="flex items-center gap-3 mb-4">
                <Zap className="h-5 w-5 text-[#2563EB]" />
                <h4 className="text-[#1C1E21] dark:text-slate-50 font-medium">Pipeline 1: Marketing Recommendations</h4>
              </div>
              <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                <li className="flex items-start gap-2"><span className="text-[#2563EB]">•</span> Identify empty rooms → recommend virtual staging</li>
                <li className="flex items-start gap-2"><span className="text-[#2563EB]">•</span> Identify dull or overcast exteriors → recommend day-to-dusk</li>
                <li className="flex items-start gap-2"><span className="text-[#2563EB]">•</span> Identify lawns needing cleanup → recommend lawn enhancement</li>
                <li className="flex items-start gap-2"><span className="text-[#2563EB]">•</span> Identify interior lighting issues → recommend color/temperature correction</li>
                <li className="flex items-start gap-2"><span className="text-[#2563EB]">•</span> Identify curb appeal opportunities → recommend exterior enhancement</li>
              </ul>
            </div>
            
            <div className="p-6 rounded-2xl bg-[#F0F2F5] dark:bg-[#242526] border border-slate-200 dark:border-white/5">
              <div className="flex items-center gap-3 mb-4">
                <Database className="h-5 w-5 text-[#2563EB]" />
                <h4 className="text-[#1C1E21] dark:text-slate-50 font-medium">Pipeline 2: Metadata Extraction</h4>
              </div>
              <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                <li className="flex items-start gap-2"><span className="text-[#2563EB]">•</span> Room category classification (bedroom, kitchen, living, etc.)</li>
                <li className="flex items-start gap-2"><span className="text-[#2563EB]">•</span> Material identification: flooring, countertops, cabinetry, wall finishes</li>
                <li className="flex items-start gap-2"><span className="text-[#2563EB]">•</span> Fixture & appliance detection: oven, dishwasher, sink type, shower type</li>
                <li className="flex items-start gap-2"><span className="text-[#2563EB]">•</span> Architectural feature extraction: ceiling style, arch style, window type</li>
                <li className="flex items-start gap-2"><span className="text-[#2563EB]">•</span> Output: structured JSON mapped to MLS form fields</li>
              </ul>
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
          <h3 className="text-4xl md:text-5xl font-medium text-[#1C1E21] dark:text-slate-50 mb-6 tracking-tight">Separating the Pipelines</h3>
          <p className="text-slate-600 dark:text-slate-400 text-xl max-w-3xl leading-relaxed mb-6">
            My first architectural decision was to separate the marketing recommendation workflow from the metadata extraction workflow entirely. This was not obvious — both pipelines analyze the same images — but combining them into one prompt created competing objectives that degraded output quality on both tasks.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-1 gap-6 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-8 rounded-3xl bg-white dark:bg-[#242526] border border-slate-200 dark:border-white/5 shadow-sm"
          >
            <ul className="space-y-4 text-slate-600 dark:text-slate-400 text-base">
              <li className="flex items-start gap-3">
                <span className="text-[#2563EB] mt-1">•</span>
                <span><strong>Marketing recommendations</strong> require aesthetic and contextual judgment: 'Does this room need staging? Is this exterior worth a day-to-dusk transformation?'</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#2563EB] mt-1">•</span>
                <span><strong>Metadata extraction</strong> requires precise structured output: 'What is the exact flooring material? Is there a dishwasher present?'</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#2563EB] mt-1">•</span>
                <span>Separating them allowed independent prompt optimization, independent QA, and faster iteration on each pipeline</span>
              </li>
            </ul>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h3 className="text-4xl md:text-5xl font-medium text-[#1C1E21] dark:text-slate-50 mb-6 tracking-tight">The Critical Problem: Single-Image API Calls Killed Accuracy</h3>
          <p className="text-slate-600 dark:text-slate-400 text-xl max-w-3xl leading-relaxed mb-6">
            The first version of the marketing recommendation pipeline sent one image at a time to the model. This created a fundamental accuracy problem that I diagnosed through output analysis:
          </p>
          <div className="p-8 rounded-3xl bg-white dark:bg-[#242526] border border-slate-200 dark:border-white/5 shadow-sm mb-6">
            <ul className="space-y-4 text-slate-600 dark:text-slate-400 text-base">
              <li className="flex items-start gap-3">
                <span className="text-[#2563EB] mt-1">•</span>
                <span>A single image of a living room with furniture might look fine in isolation — but when reviewed alongside the other 12 images of the same property, it was clearly understyled relative to the rest</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#2563EB] mt-1">•</span>
                <span>A single exterior image flagged for day-to-dusk might actually be one of 5 exterior shots — and only 2 of the 5 were suitable candidates</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#2563EB] mt-1">•</span>
                <span>Color temperature inconsistencies between rooms were invisible in single-image review but obvious when images were seen together</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#2563EB] mt-1">•</span>
                <span>The model had no property context — it was making decisions about individual images without understanding the property as a whole</span>
              </li>
            </ul>
          </div>
          <div className="p-6 rounded-2xl bg-[#2563EB]/10 border border-[#2563EB]/20 text-left">
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
              The insight: Real estate image understanding is a property-level problem, not an image-level problem. A model evaluating a single image has no reference point. A model evaluating a full property set can reason comparatively, contextually, and consistently.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function WorkflowArchitecture() {
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
          <h3 className="text-4xl md:text-5xl font-medium text-[#1C1E21] dark:text-white mb-6 tracking-tight">The Solution: Batch API Calls with Property-Level Context</h3>
          <p className="text-slate-600 dark:text-slate-400 text-xl max-w-3xl leading-relaxed mb-6">
            I redesigned the pipeline to send 15 images per API call — the full set for a room category or property section — rather than processing images individually. This single architectural change drove the largest accuracy improvement in the project.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-8 rounded-3xl bg-slate-50 dark:bg-[#242526] border border-slate-200 dark:border-white/5 shadow-sm"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="h-10 w-10 rounded-xl bg-slate-200 dark:bg-white/5 flex items-center justify-center">
                <ImageIcon className="text-slate-500 h-5 w-5" />
              </div>
              <h4 className="text-xl font-medium text-[#1C1E21] dark:text-white">Before: Single-image calls</h4>
            </div>
            <ul className="space-y-3 text-slate-600 dark:text-slate-400 text-sm">
              <li className="flex items-start"><span className="text-slate-400 mr-2">•</span> Model had no comparative reference</li>
              <li className="flex items-start"><span className="text-slate-400 mr-2">•</span> High false-positive rate on image enhancement flags — almost everything got flagged</li>
              <li className="flex items-start"><span className="text-slate-400 mr-2">•</span> Low confidence on material identification — same material read differently across images</li>
              <li className="flex items-start"><span className="text-slate-400 mr-2">•</span> No property-wide consistency in output</li>
              <li className="flex items-start"><span className="text-slate-400 mr-2">•</span> Enhancement pipeline flagging most images, making recommendations useless</li>
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="p-8 rounded-3xl bg-[#2563EB]/5 dark:bg-[#2563EB]/10 border border-[#2563EB]/20 shadow-sm"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="h-10 w-10 rounded-xl bg-[#2563EB]/20 flex items-center justify-center">
                <Layers className="text-[#2563EB] h-5 w-5" />
              </div>
              <h4 className="text-xl font-medium text-[#2563EB] dark:text-white">After: 15-image batch calls</h4>
            </div>
            <ul className="space-y-3 text-slate-700 dark:text-slate-300 text-sm font-medium">
              <li className="flex items-start"><span className="text-[#2563EB] mr-2">•</span> Model reasons across the full property context</li>
              <li className="flex items-start"><span className="text-[#2563EB] mr-2">•</span> 80% accuracy on marketing enhancement recommendations</li>
              <li className="flex items-start"><span className="text-[#2563EB] mr-2">•</span> Material confidence significantly improved — model resolves ambiguity by cross-referencing multiple room views</li>
              <li className="flex items-start"><span className="text-[#2563EB] mr-2">•</span> Consistent structured output across the full listing</li>
              <li className="flex items-start"><span className="text-[#2563EB] mr-2">•</span> Low-confidence outputs correctly routed to human review queue</li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h3 className="text-4xl md:text-5xl font-medium text-[#1C1E21] dark:text-white mb-6 tracking-tight">Confidence-Tiered Output Routing</h3>
          <p className="text-slate-600 dark:text-slate-400 text-xl max-w-3xl leading-relaxed mb-6">
            For both pipelines, I designed a three-tier confidence routing system to balance automation with accuracy — critical for a production system where errors affect live listings:
          </p>
        </motion.div>

        <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-white/10 mb-8">
          <table className="w-full text-left border-collapse bg-white dark:bg-[#242526]">
            <thead>
              <tr className="bg-slate-50 dark:bg-white/5">
                <th className="p-4 border-b border-slate-200 dark:border-white/10 font-medium text-[#1C1E21] dark:text-white">Confidence</th>
                <th className="p-4 border-b border-slate-200 dark:border-white/10 font-medium text-[#1C1E21] dark:text-white">Action</th>
                <th className="p-4 border-b border-slate-200 dark:border-white/10 font-medium text-[#1C1E21] dark:text-white">Example</th>
              </tr>
            </thead>
            <tbody className="text-sm text-slate-600 dark:text-slate-300">
              <tr className="border-b border-slate-200 dark:border-white/10">
                <td className="p-4 font-medium text-emerald-600 dark:text-emerald-400 align-top">High</td>
                <td className="p-4 align-top">Auto-populated / flagged directly to user recommendation</td>
                <td className="p-4 align-top">Empty living room → 'Recommend Virtual Staging'</td>
              </tr>
              <tr className="border-b border-slate-200 dark:border-white/10">
                <td className="p-4 font-medium text-amber-600 dark:text-amber-400 align-top">Moderate</td>
                <td className="p-4 align-top">Flagged for human review with AI suggestion pre-filled</td>
                <td className="p-4 align-top">Flooring may be laminate or hardwood — reviewer confirms</td>
              </tr>
              <tr>
                <td className="p-4 font-medium text-rose-600 dark:text-rose-400 align-top">Low</td>
                <td className="p-4 align-top">Routed entirely to human review queue, no AI output shown</td>
                <td className="p-4 align-top">Obscured or partial image — cannot determine material</td>
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
            This tiered approach was critical: it meant the system improved reviewer efficiency on every listing — even when it couldn't fully automate — by pre-filling high-confidence fields and routing uncertain ones for faster human confirmation rather than from scratch.
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
          <h3 className="text-4xl md:text-5xl font-medium text-[#1C1E21] dark:text-slate-50 mb-6">Operational Impact on the CRMLS Pipeline</h3>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="p-8 rounded-3xl bg-white dark:bg-[#242526] border border-slate-200 dark:border-white/5 shadow-sm"
          >
            <h4 className="text-2xl font-medium text-[#2563EB] mb-4">Marketing Pipeline Results</h4>
            <ul className="space-y-3 text-slate-600 dark:text-slate-400 text-sm">
              <li className="flex items-start"><span className="text-[#2563EB] mr-2">•</span> 80% accuracy on marketing enhancement recommendations across 500+ listings</li>
              <li className="flex items-start"><span className="text-[#2563EB] mr-2">•</span> Eliminated false-positive flood from single-image processing — recommendations became actionable rather than noise</li>
              <li className="flex items-start"><span className="text-[#2563EB] mr-2">•</span> Day-to-dusk, virtual staging, and lawn enhancement flags now routed at property level with context-aware precision</li>
              <li className="flex items-start"><span className="text-[#2563EB] mr-2">•</span> Agent retains final decision — system acts as intelligent recommendation layer, not override</li>
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="p-8 rounded-3xl bg-white dark:bg-[#242526] border border-slate-200 dark:border-white/5 shadow-sm"
          >
            <h4 className="text-2xl font-medium text-[#2563EB] mb-4">Metadata Pipeline Results</h4>
            <ul className="space-y-3 text-slate-600 dark:text-slate-400 text-sm">
              <li className="flex items-start"><span className="text-[#2563EB] mr-2">•</span> Automated extraction across 1,500+ structured MLS data fields from listing images</li>
              <li className="flex items-start"><span className="text-[#2563EB] mr-2">•</span> High-confidence fields auto-populated; moderate/low fields pre-filled for faster human confirmation</li>
              <li className="flex items-start"><span className="text-[#2563EB] mr-2">•</span> Significantly increased optional field completion rate — previously skipped by reviewers under time pressure</li>
              <li className="flex items-start"><span className="text-[#2563EB] mr-2">•</span> Structured JSON output mapped directly to MLS form schema — zero manual reformatting required</li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="p-8 rounded-2xl bg-[#2563EB]/10 border border-[#2563EB]/20 text-left"
        >
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
            The broader pipeline impact: This system extended the CRMLS compliance pipeline from a single-function compliance checker into a full listing intelligence layer — covering compliance detection (CS1), marketing recommendations, and property metadata extraction within the same workflow. Together, these systems transformed listing preparation from a manual, reviewer-dependent process into an AI-assisted, scalable operation.
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
            <h4 className="text-2xl font-medium text-[#1C1E21] dark:text-slate-50 mb-4">Property context beats image context</h4>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed flex-grow">
              The single highest-impact technical decision in this project was moving from single-image API calls to 15-image batch calls. The model's ability to reason comparatively across a property — not just evaluate an image in isolation — was the difference between a noisy recommendation engine and an 80% accurate one. This principle applies directly to any AI content generation workflow: context scope determines output quality.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="p-8 rounded-3xl bg-[#2563EB]/[0.04] dark:bg-[#2563EB]/[0.05] border-l-4 border-[#2563EB] border-y border-r border-[#2563EB]/10 dark:border-white/5 h-full flex flex-col"
          >
            <h4 className="text-2xl font-medium text-[#1C1E21] dark:text-slate-50 mb-4">Confidence routing is a product decision, not just a technical one</h4>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed flex-grow">
              Designing the three-tier confidence system required understanding how reviewers actually work under time pressure. A system that only outputs high-confidence results would miss too many fields. A system that outputs everything regardless of confidence adds noise. The moderate tier — pre-filling uncertain fields for faster human confirmation — was the most valuable layer and came from understanding the reviewer's actual workflow, not just the model's capabilities.
            </p>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="p-8 rounded-3xl bg-[#2563EB]/[0.04] dark:bg-[#2563EB]/[0.05] border-l-4 border-[#2563EB] border-y border-r border-[#2563EB]/10 dark:border-white/5"
        >
          <h4 className="text-2xl font-medium text-[#1C1E21] dark:text-slate-50 mb-4">What I would do differently</h4>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
            I would involve reviewers earlier in defining confidence thresholds. We set initial thresholds based on model evaluation against our dataset — but reviewers had different tolerances for error depending on the field type. A flooring material error is low-stakes; a bedroom count error is high-stakes. Field-level confidence thresholds calibrated by business impact would have improved the system faster.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function LeadershipPrinciples() {
  const principles = [
    {
      icon: Search,
      title: "Deep Dive",
      points: ["Did not accept high false-positive rates as inevitable. Diagnosed the root cause — single-image context — through output analysis, and redesigned the pipeline architecture around batch processing. The solution was not a prompt tweak; it was a fundamental rethink of how the model receives information."]
    },
    {
      icon: Target,
      title: "Deliver Results",
      points: ["80% marketing recommendation accuracy across 500+ real listings. 1,500+ MLS data fields automated. Delivered on leadership's operational automation target. Built on the production CRMLS pipeline — real output for real listings."]
    },
    {
      icon: Users,
      title: "Customer Obsession",
      points: ["Kept the agent in control throughout — all recommendations are suggestions, not overrides. Designed confidence routing around how reviewers actually work under time pressure, not just what the model could output. The goal was to make reviewers faster and more accurate, not to replace their judgment."]
    },
    {
      icon: Lightbulb,
      title: "Invent & Simplify",
      points: ["Separated two fundamentally different reasoning tasks — aesthetic judgment and structured extraction — into independent pipelines. Solved a complex 1,500-field data entry problem through contextual batch inference rather than building 1,500 individual classifiers."]
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

export default function CaseStudyThree() {
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
          Built on CRMLS production pipeline · Naveen Rajendran · Styldod Inc
        </p>
      </footer>
    </div>
  );
}
