"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
  Check,
  TrendingUp,
  Database,
  Eye,
  X,
  ExternalLink
} from "lucide-react";
import Navigation from "@/components/Navigation";

// --- SECTIONS ---

function Hero() {
  return (
    <section className="min-h-[90vh] flex flex-col justify-center pt-20 pb-16 px-6 relative overflow-hidden bg-[white] dark:bg-[#1C1E21]">
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
              Naveen Rajendran · AI Designer, Styldod Inc · Production System for CRMLS
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-medium text-[#1C1E21] dark:text-white leading-[1.1] tracking-tight mb-8">
            AI-Powered Real Estate <span className="text-slate-600 dark:text-slate-400">Compliance Detection & Removal</span>
          </h1>
          
          <div className="flex flex-wrap gap-8 md:gap-12 pt-8 border-t border-slate-200 dark:border-white/10 mt-12">
            <div>
              <div className="text-sm text-slate-500 mb-1">Listings tested</div>
              <div className="font-medium text-[#1C1E21] dark:text-white">500+</div>
            </div>
            <div>
              <div className="text-sm text-slate-500 mb-1">Images</div>
              <div className="font-medium text-[#1C1E21] dark:text-white">~32,000</div>
            </div>
            <div>
              <div className="text-sm text-slate-500 mb-1">Iterations</div>
              <div className="font-medium text-[#1C1E21] dark:text-white">6–8 to production</div>
            </div>
            <div>
              <div className="text-sm text-slate-500 mb-1">Detection time</div>
              <div className="font-medium text-[#1C1E21] dark:text-white whitespace-nowrap">&lt; 1 min vs 2-3 days</div>
            </div>
            <div>
              <div className="text-sm text-slate-500 mb-1">Live deployment</div>
              <div className="font-medium text-[#1C1E21] dark:text-white whitespace-nowrap">CRMLS (Largest US MLS)</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

const RESEARCH_DATA = `# Executive Summary

Annual compliance issues with real-estate listings (improper images or content) affect a small but significant fraction of US and Canadian listings. Precise industry-wide counts are not published, but MLS and platform data imply tens of thousands of listings per year in the US and on the order of 10,000 in Canada require compliance review.

For example, one large US MLS (CRMLS) reported ~100 member-reported violations per day (≥36,000/year), and Arizona’s MLS logged 899 photo/media violations in 2023. Extrapolating from these and similar boards suggests roughly 1–3% of US listings trigger content violations annually (on the order of 40,000–100,000 out of ~4 million listings). In Canada (≈470,000 MLS sales in 2025), boards have only recently begun formal tracking, but news reports suggest a smaller but parallel issue.

---

## Total Listings and Estimated Violations

- US listings: There are roughly 4.0–4.5 million MLS-listed home transactions per year. If 1–3% of listings have compliance issues (a plausible range given MLS data), that yields on the order of 40,000–130,000 listings needing review per year in the US.

- Canada listings: CREA reports 470,314 MLS sales in 2025. Extrapolating a similar 0.5–2% violation rate suggests roughly 2,000–10,000 problematic Canadian listings annually.

- Images per listing: Typical MLS listings carry 15–30 photos. If 1–3% of listings have a violation, then roughly O(10^5–10^6) listing images per year might contain disallowed content.

- MLS data points:
  • CRMLS (SoCal): “100 member-reported violations every day.” ~35,000 reports/year.
  • RMLS (Portland): Mar 2024 — reviewed 22,733 listings, 460 violation notices (~2.0%).
  • ARMLS (Phoenix): 899 listings with “Text or Watermarks on Photos/Media” violations in 2023 (~1.2% of listings).

These MLS-level figures consistently point to low single-digit percentages of listings with media issues. We adopt a ~1–2% violation rate for US listings, implying roughly 40–90k affected listings per year.

---

## Compliance Categories

- Unblurred humans or pets: Many MLS boards prohibit people or animals in listing photos due to privacy and fair-housing concerns. Presence of neighbors or residents can trigger fair-housing issues.

- Visible license plates/addresses: Photos showing unblurred license plates or house numbers risk privacy breaches. Most listing guidelines require blurring or cropping such details.

- Agent branding / contact info: MLS rules universally forbid agent/broker logos, watermarks, or contact details on images. Zillow’s policy “restricts the inclusion of self-promoting information.” ARMLS data show 899 watermark/text violations in 2023.

- Personal or sensitive content: Images containing sellers’ personal items (family photos, mail with personal info, screens with open accounts) can violate privacy rules.

- Image misrepresentation (digital edits): Overly enhanced or manipulated photos that misrepresent the property are prohibited unless clearly disclosed. New laws (e.g. CA AB723) now criminalize undisclosed edits that hide material defects.

- Fair-housing cues: Explicit wording like “no kids” or imagery suggesting exclusivity can violate federal or local fair-housing laws.

---

## Enforcement & Takedown Process

MLS Boards: Local MLS organizations rely on agent reporting and staff review. CRMLS explains that staff cannot review all listings, so ~100 member-reported violations every day are submitted for investigation. Penalties escalate by offense count (warnings, fines from $100 up to $2,500+).

Online Platforms: Zillow’s help center warns agents that including “agent name, company, logo, phone, email” on listing photos violates policy. In notable enforcement, Zillow issued 1,202 violation notices and 48 listing bans through Nov. 2025.

Typical Outcomes: When a violation is identified, agents typically remove or replace the offending image immediately. MLS rules often treat a timely cure as satisfactory, reserving fines for uncooperative cases.

---

## Platform Policies

- Zillow/Trulia: Policies strictly ban any self-promotion in listing media. “Photos must not contain any branding or promotional information related to the listing broker.”

- Realtor.com: Warns sellers not to post “over-edited” or misleading photos. “Over-editing doesn’t just disappoint buyers; it can violate advertising standards.”

- Other MLS/Boards: Many publish annual “top violations” reports. Common entries: “Sign in photo,” “Text on photo,” “Photo is a prior listing.” ARMLS ranked “Text/Watermarks on Photos” third with 899 cases in 2023.

---

## Regulatory Timeline

2018: MLS rules already forbade misleading photos (NAR model rules).
2022: NY Dept. of State warns against undisclosed AI photo edits.
2023: CA passes AB723 (AI photo disclosure law, effective 2026). B.C. fines agent $6K for AI-altered images.
2024: CREA and boards require AI disclosure. Non-compliant images flagged weekly by major boards.
2026: AB723 goes into effect (CA). Similar US laws planned.
2027: Wisconsin’s photo disclosure law takes effect.

---

## Sources & Reliability

Source                          | Key Figure
------------------------------- | -------------------------------------------------
Zillow (Apr 2026)               | Active listings 1,218,540; new 365,053/month
NAR / CREA                      | Canada: 470,314 MLS sales in 2025
CRMLS blog                      | ~100 violations/day (~36K/yr)
ARMLS blog (2023)               | 899 photo/text violations
RMLS blog (Mar 2024)            | 22,733 listings reviewed; 460 violation notices
Zillow Help Center              | Agents may not include logos/numbers in photos
Mike DelPrete (Nov 2025)        | 1,202 violation notices; 48 listings banned
B.C. Provincial Regulator       | $6K fine for undisclosed AI edits (2024)
Realtor.com                     | Buyers dislike “misrepresentation” from over-editing

Note: MLS and industry blogs are credible for describing enforcement trends but represent single regions. CREA/NAR and Zillow data are authoritative for overall market size. Quantitative estimates should be viewed as order-of-magnitude figures (±50% uncertainty).`;

function ProblemStatement() {
  const [showResearch, setShowResearch] = useState(false);
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
            <h2 className="text-[#2563EB] font-medium tracking-wide text-sm uppercase">S — SITUATION</h2>
          </div>
          <h3 className="text-4xl md:text-5xl font-medium text-[#1C1E21] dark:text-slate-50 mb-6 tracking-tight flex items-center gap-3">
            The Scalability Bottleneck
            <button
              onClick={() => setShowResearch(true)}
              className="inline-flex items-center text-[#2563EB] hover:text-[#1d4ed8] transition-colors"
              title="View industry research"
            >
              <ExternalLink className="h-7 w-7" />
            </button>
          </h3>
          <p className="text-slate-600 dark:text-slate-400 text-xl max-w-3xl leading-relaxed mb-6">
            I lead AI initiatives at Styldod Inc, a virtual staging company serving real estate clients across the US and Canada. Our client base includes agents and brokers operating within CRMLS — the largest MLS in the United States, reporting approximately 100 member-reported compliance violations every day (source: CRMLS blog).
          </p>
          <p className="text-slate-600 dark:text-slate-400 text-xl max-w-3xl leading-relaxed mb-6">
            Through our CRMLS client relationships, we became acutely aware of a systemic problem: listing image compliance was entirely manual, slow, and inconsistent. Agents were waiting 2–3 days for compliance review on listings with an average of 60–65 images each. A single non-compliant image could cause an entire listing to be rejected.
          </p>

        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="p-8 rounded-3xl bg-[#2563EB]/[0.04] dark:bg-[#2563EB]/[0.05] border-l-4 border-[#2563EB] border-y border-r border-[#2563EB]/10 dark:border-white/5 h-full"
          >
            <div className="h-12 w-12 rounded-xl bg-[#2563EB]/10 flex items-center justify-center mb-6">
              <TrendingUp className="text-[#2563EB] h-6 w-6" />
            </div>
            <h4 className="text-xl font-medium text-[#1C1E21] dark:text-slate-50 mb-4">The scale of the problem (from industry data):</h4>
            <ul className="space-y-3 text-slate-600 dark:text-slate-400 text-sm">
              <li className="flex items-start">
                <span className="text-[#2563EB]/50 mr-3 mt-1">•</span>
                <span>CRMLS alone: ~100 reported violations per day (~36,000/year)</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#2563EB]/50 mr-3 mt-1">•</span>
                <span>ARMLS (Phoenix): 899 photo/text violations in 2023 alone — 1.2% of all listings</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#2563EB]/50 mr-3 mt-1">•</span>
                <span>RMLS (Portland): 460 formal violation notices from 22,733 listings reviewed in March 2024</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#2563EB]/50 mr-3 mt-1">•</span>
                <span>US-wide estimate: 40,000–130,000 listings per year requiring compliance review</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#2563EB]/50 mr-3 mt-1">•</span>
                <span>Each listing: 15–30 photos on average = millions of images requiring human inspection</span>
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
              <AlertCircle className="text-[#2563EB] h-6 w-6" />
            </div>
            <h4 className="text-xl font-medium text-[#1C1E21] dark:text-slate-50 mb-4">Violation categories we needed to detect:</h4>
            <ul className="space-y-4 text-slate-600 dark:text-slate-400 text-sm">
              <li className="flex items-start gap-3">
                <span className="text-[#2563EB]/50 mt-1">•</span>
                <span>Faces, people, and pets in listing photos (fair-housing risk)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#2563EB]/50 mt-1">•</span>
                <span>Visible license plates and home addresses (privacy)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#2563EB]/50 mt-1">•</span>
                <span>Agent/broker branding, logos, watermarks, and contact details</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#2563EB]/50 mt-1">•</span>
                <span>Political, religious, or fair-housing risk indicators</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#2563EB]/50 mt-1">•</span>
                <span>Copyrighted media and undisclosed AI-altered imagery</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>

      <AnimatePresence>
        {showResearch && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowResearch(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-3xl max-h-[85vh] bg-white dark:bg-[#1C1E21] rounded-2xl shadow-2xl overflow-hidden flex flex-col border border-slate-200 dark:border-white/10"
            >
              <div className="flex items-center justify-between p-6 border-b border-slate-100 dark:border-white/5">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-xl bg-[#2563EB]/10 flex items-center justify-center">
                    <FileText className="h-5 w-5 text-[#2563EB]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-[#1C1E21] dark:text-white">Industry Research</h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400">MLS Compliance Violation Data — US & Canada</p>
                  </div>
                </div>
                <button
                  onClick={() => setShowResearch(false)}
                  className="p-2 text-slate-400 hover:text-slate-600 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5 rounded-lg transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <div className="overflow-y-auto p-6 bg-slate-50 dark:bg-[#141518]">
                <pre className="font-mono text-[13px] text-slate-700 dark:text-slate-300 whitespace-pre-wrap leading-relaxed">
                  {RESEARCH_DATA}
                </pre>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

function TaskSection() {
  return (
    <section className="py-24 bg-[white] dark:bg-[#1C1E21] border-y border-slate-200 dark:border-white/5" id="task">
      <div className="max-w-5xl mx-auto px-6 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div>
            <h2 className="text-[#2563EB] font-medium tracking-wide text-sm uppercase mb-3">T — TASK</h2>
            <h3 className="text-3xl md:text-4xl font-medium text-[#1C1E21] dark:text-slate-50 mb-6">My Objective</h3>
            <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed mb-6">
              I identified this problem through our CRMLS client relationships and proactively took ownership of designing and building a solution. I was given a 2-month timeline to deliver a working first version. I led a cross-functional team of 8–15 people covering backend engineering, data labeling, pipeline architecture, and QA testing.
            </p>
          </div>
          <div className="grid sm:grid-cols-1 gap-4">
            <div className="p-6 rounded-2xl bg-[#F0F2F5] dark:bg-[#242526] border border-slate-200 dark:border-white/5">
              <h4 className="text-[#1C1E21] dark:text-slate-50 font-medium mb-4 text-lg">The system needed to:</h4>
              <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-400">
                <li className="flex items-start gap-2"><span className="text-[#2563EB]">•</span> Detect compliance violations across all regulated categories in real estate listing images</li>
                <li className="flex items-start gap-2"><span className="text-[#2563EB]">•</span> Reason contextually — distinguishing incidental from non-incidental violations</li>
                <li className="flex items-start gap-2"><span className="text-[#2563EB]">•</span> Generate precise remediation prompts to remove or fix violations</li>
                <li className="flex items-start gap-2"><span className="text-[#2563EB]">•</span> Operate at production scale with consistent, auditable outputs</li>
                <li className="flex items-start gap-2"><span className="text-[#2563EB]">•</span> Be fast enough to replace 2–3 day manual review cycles</li>
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
            <h2 className="text-[#2563EB] font-medium tracking-wide text-sm uppercase">A — ACTION (DEEP DIVE)</h2>
          </div>
          <h3 className="text-4xl md:text-5xl font-medium text-[#1C1E21] dark:text-slate-50 mb-6 tracking-tight">Why I Rejected the Obvious Approach First</h3>
          <p className="text-slate-600 dark:text-slate-400 text-xl max-w-3xl leading-relaxed mb-8">
            My initial instinct — and the industry-standard approach — was to use computer vision segmentation models (like <a href="https://ai.meta.com/research/sam2/" className="text-[#2563EB] hover:underline font-medium" target="_blank" rel="noopener noreferrer">SAM</a> and <a href="https://huggingface.co/docs/transformers/en/model_doc/owlvit" className="text-[#2563EB] hover:underline font-medium" target="_blank" rel="noopener noreferrer">OWL-ViT</a>). I built and tested this pipeline thoroughly before concluding it was fundamentally wrong for this problem. Here is what I observed:
          </p>
        </motion.div>

        <div className="grid md:grid-cols-1 gap-6">
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
                <span><strong>Inconsistent taxonomy:</strong> the same object returned as 'person,' 'individual,' 'human,' or 'adult' across runs — making rule-based automation impossible</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#2563EB] mt-1">•</span>
                <span><strong>No contextual reasoning:</strong> models detected objects but could not determine whether a person was incidentally in the background vs. a homeowner in a mirror reflection — two completely different compliance outcomes</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#2563EB] mt-1">•</span>
                <span><strong>Segmentation failures:</strong> bounding boxes were off, masks overlapped adjacent objects, reflections were missed entirely</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#2563EB] mt-1">•</span>
                <span><strong>No confidence or rationale:</strong> no way to audit or explain decisions — a hard requirement for a compliance system</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#2563EB] mt-1">•</span>
                <span><strong>Non-deterministic:</strong> the same image run twice produced different outputs — unacceptable for production</span>
              </li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 p-6 rounded-2xl bg-[#2563EB]/10 border border-[#2563EB]/20 text-left"
        >
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
            This analysis led me to a key architectural insight: compliance is not an object detection problem — it is a contextual reasoning problem. I pivoted to Vision Language Models (VLMs).
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function ModelEvaluation() {
  return (
    <section className="py-32 bg-[white] dark:bg-[#1C1E21]" id="evaluation">
      <div className="max-w-5xl mx-auto px-6 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-3xl md:text-4xl font-medium text-[#1C1E21] dark:text-slate-50 mb-6 tracking-tight">Building the Evaluation Dataset</h3>
          <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed mb-6">
            Before selecting any model, I directed my team to build a proper evaluation dataset using actual CRMLS listing images containing real violations. Our methodology:
          </p>
          <div className="p-8 rounded-3xl bg-[#F0F2F5] dark:bg-[#242526] border border-slate-200 dark:border-white/5 shadow-sm">
            <ul className="space-y-3 text-slate-600 dark:text-slate-400">
              <li className="flex items-start gap-2"><span className="text-[#2563EB]">•</span> Collected 500+ real listings (~32,000 images) from our CRMLS client base</li>
              <li className="flex items-start gap-2"><span className="text-[#2563EB]">•</span> Used AI to perform first-pass labeling (violation / no violation) at scale</li>
              <li className="flex items-start gap-2"><span className="text-[#2563EB]">•</span> Human reviewers established ground truth on top of AI labels — hybrid annotation</li>
              <li className="flex items-start gap-2"><span className="text-[#2563EB]">•</span> Tested GPT-4 Vision, Gemini, and Qwen against this ground truth dataset</li>
              <li className="flex items-start gap-2"><span className="text-[#2563EB]">•</span> Evaluated on: detection accuracy, false positive rate, consistency across runs, and output structure quality</li>
            </ul>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h3 className="text-3xl md:text-4xl font-medium text-[#1C1E21] dark:text-slate-50 mb-6 tracking-tight">The Critical Discovery: Why Single-Model Pipelines Failed</h3>
          <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed mb-6">
            I initially tested GPT Vision end-to-end and Gemini end-to-end as separate complete pipelines. Both failed — but for different, instructive reasons:
          </p>
        </motion.div>

        <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-white/10 mb-8">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 dark:bg-white/5">
                <th className="p-4 border-b border-slate-200 dark:border-white/10 font-medium text-[#1C1E21] dark:text-white">Model</th>
                <th className="p-4 border-b border-slate-200 dark:border-white/10 font-medium text-[#1C1E21] dark:text-white">Strength</th>
                <th className="p-4 border-b border-slate-200 dark:border-white/10 font-medium text-[#1C1E21] dark:text-white">Failure when used alone</th>
              </tr>
            </thead>
            <tbody className="text-sm text-slate-600 dark:text-slate-300">
              <tr className="border-b border-slate-200 dark:border-white/10">
                <td className="p-4 font-medium text-[#1C1E21] dark:text-white align-top">GPT-4 Vision</td>
                <td className="p-4 align-top">Best contextual reasoning. Highest accuracy at incidental vs non-incidental classification. Scene-level understanding.</td>
                <td className="p-4 align-top">Generated imprecise inpainting prompts. When passed directly to Flux, outputs were inconsistent — wrong areas inpainted, context not preserved.</td>
              </tr>
              <tr className="border-b border-slate-200 dark:border-white/10">
                <td className="p-4 font-medium text-[#1C1E21] dark:text-white align-top">Gemini</td>
                <td className="p-4 align-top">Superior structured output and spatial description. Generated inpainting prompts that Flux responded to reliably.</td>
                <td className="p-4 align-top">Occasional false negatives on subtle violations. Weaker at the incidental/non-incidental reasoning that determines whether removal is required.</td>
              </tr>
              <tr>
                <td className="p-4 font-medium text-[#1C1E21] dark:text-white align-top">Flux Context</td>
                <td className="p-4 align-top">Best-in-class inpainting. Natural, photorealistic removal with structural preservation.</td>
                <td className="p-4 align-top">Entirely prompt-dependent. Quality of inpainting directly determined by prompt quality — requires Gemini's structured spatial output to perform well.</td>
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
            The insight: GPT-4 Vision was the best detector and reasoner. Gemini was the best prompt generator for inpainting. Flux was the best executor — but only given Gemini-quality prompts. No single model could do all three well. This became the foundation of the multi-model architecture.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

const MASTER_PROMPT = `# Master Prompt — Real Estate Listing Violation Detection Engine

## Role Definition

You are a **Real Estate Listing Compliance & Moderation AI System** responsible for detecting, classifying, and explaining policy violations in real estate listing images and associated visual content.

Your task is to analyze listing images with extremely high attention to detail and determine whether any visual element violates marketplace, MLS, brokerage, fair housing, branding, copyright, privacy, or platform compliance rules.

The system must:

* Detect all visible violations
* Classify severity
* Determine whether the violation is:

  * **Incidental**
  * **Non-Incidental**
* Explain why the violation matters
* Estimate compliance risk
* Identify whether the image is likely acceptable after moderation
* Avoid false positives
* Operate conservatively on ambiguous cases

The system is NOT an aesthetic reviewer.

The system is NOT an image quality scorer unless quality directly impacts compliance.

The system ONLY evaluates policy and compliance risks.

---

# Core Objective

Analyze every image and determine:

1. Does the image contain a violation?
2. What type of violation exists?
3. Is the violation incidental or non-incidental?
4. How prominent is the violation?
5. Can the issue be auto-fixed?
6. Should the image be:

   * Approved
   * Flagged
   * Sent for manual review
   * Rejected

---

# Definition of Incidental vs Non-Incidental

## Incidental Violation

A violation is **incidental** when it appears unintentionally, passively, or as a minor background occurrence that is NOT the subject of the image.

Characteristics:

* Small in size
* Background occurrence
* Partially visible
* Not intentionally showcased
* Not the focal point
* Can usually be cropped or blurred
* Does not dominate viewer attention

Examples:

* Small reflection of photographer in mirror
* Tiny logo on appliance
* Distant face outside window
* Small license plate in driveway
* Minor street signage
* Small pet partially visible
* Small watermark reflection on TV screen

---

## Non-Incidental Violation

A violation is **non-incidental** when it is intentional, prominent, central, clearly visible, or actively used for branding, advertising, identity, or communication.

Characteristics:

* Large or highly visible
* Clearly intentional
* Central to image composition
* Draws immediate attention
* Occupies meaningful image area
* Used for marketing/branding/contact purposes
* Cannot be ignored visually

Examples:

* Large brokerage logo
* Agent phone number on image
* Promotional banner
* Visible branded watermark
* Person posing inside home
* Prominent vehicle plate
* Fair housing discriminatory text
* Large business signage
* QR codes
* Social media handles
* “Call now” overlays

---

# Compliance Evaluation Framework

The system must inspect the image across ALL categories below.

---

# Category 1 — Human Presence Violations

## Detect

* Faces
* Full people
* Partial body parts
* Reflections
* Shadows
* Silhouettes
* Mirrors
* TV reflections
* Window reflections
* Security camera reflections

## Rules

### Incidental

* Tiny reflection
* Distant person outside window
* Small mirror reflection
* Blurred background figure

### Non-Incidental

* Clearly visible person
* Agent posing
* Family in room
* Photographer prominently reflected
* Human intentionally included

## Severity

| Condition       | Severity |
| --------------- | -------- |
| Tiny reflection | Low      |
| Visible face    | Medium   |
| Human subject   | High     |

---

# Category 2 — Contact Information Violations

## Detect

* Phone numbers
* Email addresses
* Website URLs
* QR codes
* Social handles
* WhatsApp info
* Business cards
* Flyers
* Posters

## Rules

### Incidental

* Tiny unreadable flyer in background
* Small blurred card on fridge

### Non-Incidental

* Readable phone number
* Large QR code
* Website overlay
* “Contact Agent” text
* Instagram handle

## Severity

Always HIGH when readable.

---

# Category 3 — Branding & Advertising Violations

## Detect

* Brokerage logos
* Watermarks
* Company branding
* Promotional graphics
* Brand overlays
* MLS branding
* Realtor branding
* Agency signage

## Rules

### Incidental

* Small appliance logo
* Tiny distant sign
* Minimal brand visibility

### Non-Incidental

* Watermark overlays
* Brokerage logos
* Large signage
* Branded frames
* Promotional text

---

# Category 4 — License Plate & Privacy Violations

## Detect

* Vehicle plates
* House numbers
* Street addresses
* Mailbox identifiers
* Documents
* IDs
* Certificates
* Financial papers

## Rules

### Incidental

* Small blurred plate in distance

### Non-Incidental

* Readable plate
* Address showcased
* Personal documents visible

## Severity

| Visibility         | Severity |
| ------------------ | -------- |
| Unreadable         | Low      |
| Partially readable | Medium   |
| Fully readable     | High     |

---

# Category 5 — Fair Housing Violations

## Detect

Any content suggesting preference, exclusion, discrimination, or targeting based on:

* Race
* Religion
* Gender
* Family status
* Disability
* National origin
* Sexual orientation
* Age

## Examples

* “Adults only”
* “Perfect for Christians”
* “No children”
* “Ideal for Asians”
* Religious imagery used discriminatorily

## Classification

Always NON-INCIDENTAL if explicit.

Severity = CRITICAL.

Immediate rejection required.

---

# Category 6 — Pets & Animals

## Detect

* Dogs
* Cats
* Birds
* Animal cages
* Pet beds

## Rules

### Incidental

* Small pet in background
* Partially visible animal

### Non-Incidental

* Pet intentionally staged
* Animal central to image

---

# Category 7 — Offensive or Unsafe Content

## Detect

* Weapons
* Drugs
* Alcohol emphasis
* Nudity
* Explicit imagery
* Hate symbols
* Unsafe conditions

## Severity

Always HIGH or CRITICAL.

---

# Category 8 — Copyright & Intellectual Property

## Detect

* Getty Images watermarks
* Shutterstock marks
* Copyright overlays
* Unauthorized branded assets

## Rules

### Incidental

* Tiny background copyrighted artwork

### Non-Incidental

* Visible stock watermark
* Branded copyrighted image asset

---

# Category 9 — Image Manipulation Violations

## Detect

* Misleading edits
* Fake sky replacement hiding defects
* Artificial staging disclosures missing
* Extreme object removal
* Structural misrepresentation

## Severity

Depends on material deception level.

---

# Category 10 — Signage Violations

## Detect

* “For Sale” boards
* Agency signs
* Directional signs
* Commercial signs
* Storefront branding

## Rules

### Incidental

* Tiny distant sign

### Non-Incidental

* Prominent yard sign
* Large brokerage board

---

# Prominence Assessment Engine

The system must determine prominence using:

* Relative image area occupied
* Central positioning
* Focus sharpness
* Contrast visibility
* Readability
* Intentional composition
* Viewer attention probability

---

# Incidentality Decision Logic

Use this logic hierarchy:

## Non-Incidental IF:

ANY of the following are true:

* Centrally positioned
* Clearly readable
* Intentionally composed
* Dominates visual attention
* Used for promotion
* Large relative size
* Clearly intentional inclusion

---

## Incidental IF:

ALL of the following are true:

* Background only
* Small visibility
* Hard to notice
* Not intentionally framed
* Not readable
* Not focal

---

# Confidence Scoring

Return confidence score:

| Score  | Meaning             |
| ------ | ------------------- |
| 0–30   | Weak detection      |
| 31–60  | Possible violation  |
| 61–85  | Strong detection    |
| 86–100 | Extremely confident |`;

function WorkflowArchitecture() {
  const [showPromptModal, setShowPromptModal] = useState(false);

  const steps = [
    {
      icon: Search,
      title: "Stage 1 — Listing-Level Detection + Contextual Reasoning",
      model: "GPT-4 Vision",
      desc: "Analyzes the full image set for a listing to identify violations, and critically, evaluates intent: is this violation incidental (a passing stranger) or non-incidental (a homeowner in a mirror)? This determines whether remediation is triggered — directly controlling the false positive rate.\n• Public crowd outside = incidental, no action\n• Homeowner in mirror = non-incidental, trigger remediation",
      example: "\"Review this real estate listing image. Determine whether any regulated elements are incidental or non-incidental. Check for: people/faces, logos/brands, license plates, fair housing risk indicators, brokerage signage... Return: category, incidental_status, confidence, rationale, bounding_region_description, overall_risk.\"",
      hasFullPrompt: true
    },
    {
      icon: FileText,
      title: "Stage 2 — Remediation Prompt Generation",
      model: "Gemini",
      desc: "Takes the detection output from Stage 1 and the incidental/non-incidental determination, then generates a precise, spatially-aware inpainting prompt for Flux.",
      example: "\"Remove person visible in mirror reflection in upper-left quadrant of image while preserving mirror frame, surrounding wall texture, and ambient lighting. Maintain continuity with adjacent tile surface.\""
    },
    {
      icon: Sparkles,
      title: "Stage 3 — Compliance Remediation",
      model: "Flux Context",
      desc: "Executes the inpainting using Gemini's structured spatial prompt. Produces photorealistic removal with structural preservation. The agent then reviews the flagged images and decides whether to accept the automated fix or make manual corrections — keeping human judgment in the loop for the final decision.",
      example: "Photorealistic removal with structural preservation executed"
    }
  ];

  return (
    <section className="py-32 relative bg-[white] dark:bg-[#1C1E21] text-[#1C1E21] dark:text-slate-50 overflow-hidden" id="architecture">
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
          <h3 className="text-4xl md:text-5xl font-medium text-[#1C1E21] dark:text-white mb-6 tracking-tight">The Multi-Model Pipeline (Production Architecture)</h3>
        </motion.div>

        <div className="relative">
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
                  
                  <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed text-base whitespace-pre-line">
                    {step.desc}
                  </p>

                  <div className="p-4 rounded-xl bg-slate-50 dark:bg-black/50 border border-slate-200 dark:border-white/5 border-l-2 border-l-[#2563EB]">
                    <div className="flex justify-between items-center mb-2">
                      <div className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wider">{idx === 0 || idx === 1 ? 'Prompt Example' : 'Output'}</div>
                      {step.hasFullPrompt && (
                        <button 
                          onClick={() => setShowPromptModal(true)}
                          className="flex items-center gap-1.5 text-xs font-medium text-[#2563EB] hover:text-[#1d4ed8] transition-colors px-2 py-1 rounded bg-[#2563EB]/10 hover:bg-[#2563EB]/20"
                        >
                          <Eye className="w-3.5 h-3.5" />
                          View Full Prompt
                        </button>
                      )}
                    </div>
                    <div className="text-sm text-slate-700 dark:text-slate-300 font-mono italic">{step.example}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-12 p-6 rounded-2xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-left"
          >
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              The pipeline went through 6–8 full prompt iteration cycles before achieving production-level consistency. Each iteration involved re-evaluating against our ground truth dataset and identifying failure patterns.
            </p>
          </motion.div>
        </div>
      </div>

      <AnimatePresence>
        {showPromptModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowPromptModal(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-3xl max-h-[85vh] bg-white dark:bg-[#1C1E21] rounded-2xl shadow-2xl overflow-hidden flex flex-col border border-slate-200 dark:border-white/10"
            >
              <div className="flex items-center justify-between p-6 border-b border-slate-100 dark:border-white/5">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-xl bg-[#2563EB]/10 flex items-center justify-center">
                    <FileText className="h-5 w-5 text-[#2563EB]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-[#1C1E21] dark:text-white">Master Prompt</h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400">Real Estate Listing Violation Detection Engine</p>
                  </div>
                </div>
                <button 
                  onClick={() => setShowPromptModal(false)}
                  className="p-2 text-slate-400 hover:text-slate-600 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5 rounded-lg transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <div className="overflow-y-auto p-6 bg-slate-50 dark:bg-[#141518]">
                <pre className="font-mono text-[13px] text-slate-700 dark:text-slate-300 whitespace-pre-wrap leading-relaxed">
                  {MASTER_PROMPT}
                </pre>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
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
          <h2 className="text-[#2563EB] font-medium tracking-wide text-sm uppercase mb-3">R — RESULT (DELIVER RESULTS)</h2>
          <h3 className="text-4xl md:text-5xl font-medium text-[#1C1E21] dark:text-slate-50 mb-6">From Proof of Concept to Production Partnership</h3>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="p-8 rounded-3xl bg-white dark:bg-[#242526] border border-slate-200 dark:border-white/5 shadow-sm"
          >
            <h4 className="text-2xl font-medium text-[#2563EB] mb-4">Business Impact</h4>
            <ul className="space-y-3 text-slate-600 dark:text-slate-400 text-sm">
              <li className="flex items-start"><span className="text-[#2563EB] mr-2">•</span> CRMLS partnership secured — system now deployed in production for the largest MLS in the United States (600,000+ members)</li>
              <li className="flex items-start"><span className="text-[#2563EB] mr-2">•</span> Every listing image submitted through CRMLS now passes through this compliance pipeline</li>
              <li className="flex items-start"><span className="text-[#2563EB] mr-2">•</span> Compliance review time: from 2–3 days (manual) to under 1 minute (automated)</li>
              <li className="flex items-start"><span className="text-[#2563EB] mr-2">•</span> Eliminated risk of entire listing rejection due to a single-image violation</li>
              <li className="flex items-start"><span className="text-[#2563EB] mr-2">•</span> Delivered within 2-month deadline as a working proof of concept before partnership</li>
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="p-8 rounded-3xl bg-white dark:bg-[#242526] border border-slate-200 dark:border-white/5 shadow-sm"
          >
            <h4 className="text-2xl font-medium text-[#2563EB] mb-4">Technical Impact</h4>
            <ul className="space-y-3 text-slate-600 dark:text-slate-400 text-sm">
              <li className="flex items-start"><span className="text-[#2563EB] mr-2">•</span> Validated 500+ listings (~32,000 images) against a hand-labeled ground truth dataset</li>
              <li className="flex items-start"><span className="text-[#2563EB] mr-2">•</span> Solved non-determinism: consistent, auditable, JSON-structured outputs with rationale for every decision</li>
              <li className="flex items-start"><span className="text-[#2563EB] mr-2">•</span> Established incidental vs non-incidental classification as the core precision mechanism — controlling false positive rate</li>
              <li className="flex items-start"><span className="text-[#2563EB] mr-2">•</span> Demonstrated that a 3-model orchestration (GPT Vision → Gemini → Flux) outperformed any single-model approach on all evaluation metrics</li>
            </ul>
          </motion.div>
        </div>
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
            <h4 className="text-2xl font-medium text-[#1C1E21] dark:text-slate-50 mb-4">Compliance is a reasoning problem, not a detection problem</h4>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed flex-grow">
              The most important architectural decision was rejecting CV segmentation in favor of VLM-based reasoning. An object detector sees 'person.' A VLM understands 'homeowner visible in mirror reflection in private residence' — and knows that matters.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="p-8 rounded-3xl bg-[#2563EB]/[0.04] dark:bg-[#2563EB]/[0.05] border-l-4 border-[#2563EB] border-y border-r border-[#2563EB]/10 dark:border-white/5 h-full flex flex-col"
          >
            <h4 className="text-2xl font-medium text-[#1C1E21] dark:text-slate-50 mb-4">No single model wins across an end-to-end pipeline</h4>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed flex-grow">
              The specific failure that led to our architecture: GPT-4 Vision detected violations accurately but generated poor inpainting prompts. Gemini's inpainting prompts worked with Flux, but Gemini alone missed subtle violations. The multi-model approach was not a compromise — it was the correct architecture for this problem.
            </p>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="p-8 rounded-3xl bg-[#2563EB]/[0.04] dark:bg-[#2563EB]/[0.05] border-l-4 border-[#2563EB] border-y border-r border-[#2563EB]/10 dark:border-white/5 w-full"
        >
          <h4 className="text-2xl font-medium text-[#1C1E21] dark:text-slate-50 mb-4">What I would do differently</h4>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
            I would start ground truth labeling earlier in the project. We spent significant time in the first iteration without a proper benchmark, which made it difficult to objectively compare models. Building the evaluation dataset first — before any model selection — would have accelerated our 6–8 iteration cycle significantly.
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
      points: ["Did not accept 'segmentation models are standard' as sufficient. Root-cause analysis of non-determinism, inconsistent taxonomy, and lack of contextual reasoning led to the VLM pivot. Built a ground truth evaluation dataset to make model comparison objective, not subjective."]
    },
    {
      icon: Target,
      title: "Deliver Results",
      points: ["Delivered working proof of concept in 2 months. Proof of concept was strong enough to secure a live production partnership with CRMLS — the largest MLS in the US. Every listing image now passes through this pipeline."]
    },
    {
      icon: Shield,
      title: "Ownership",
      points: ["Identified the problem through client relationships and proactively built the solution without being directed to. Led a team of 8–15 across backend, labeling, and QA with full end-to-end ownership."]
    },
    {
      icon: Lightbulb,
      title: "Invent & Simplify",
      points: ["Decomposed a complex multi-category compliance problem into a modular 4-stage pipeline where each model handles the task it is best suited for. Replaced a rigid, brittle CV pipeline with a flexible VLM-driven architecture."]
    }
  ];

  return (
    <section className="py-24 bg-[white] dark:bg-[#1C1E21] border-y border-slate-200 dark:border-white/5" id="leadership">
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

export default function Home() {
  return (
    <main className="bg-[white] dark:bg-[#1C1E21] min-h-screen text-[#1C1E21] dark:text-slate-50 font-sans selection:bg-[#BFDBFE] selection:text-slate-900 dark:selection:bg-[#2563EB]/40 dark:selection:text-white transition-colors duration-300">
      <Navigation />
      <div className="pt-24">
        <Hero />
        <ProblemStatement />
        <TaskSection />
        <DeepDive />
        <ModelEvaluation />
        <WorkflowArchitecture />
        <ResultImpact />
        <KeyLearnings />
        <LeadershipPrinciples />
      </div>
      
      <footer className="py-12 border-t border-slate-200 dark:border-white/5 mt-24 text-center">
        <p className="text-slate-500 text-sm">
          Proof of concept → CRMLS production partnership · Naveen Rajendran · Styldod Inc
        </p>
      </footer>
    </main>
  );
}
