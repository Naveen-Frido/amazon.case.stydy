const {
  Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell,
  AlignmentType, HeadingLevel, BorderStyle, WidthType, ShadingType,
  LevelFormat, PageBreak
} = require('docx');
const fs = require('fs');

const border = { style: BorderStyle.SINGLE, size: 1, color: "CCCCCC" };
const borders = { top: border, bottom: border, left: border, right: border };
const noBorders = {
  top: { style: BorderStyle.NONE, size: 0, color: "FFFFFF" },
  bottom: { style: BorderStyle.NONE, size: 0, color: "FFFFFF" },
  left: { style: BorderStyle.NONE, size: 0, color: "FFFFFF" },
  right: { style: BorderStyle.NONE, size: 0, color: "FFFFFF" },
};

function h2(text, color = "1A3A5C") {
  return new Paragraph({
    heading: HeadingLevel.HEADING_2,
    spacing: { before: 320, after: 100 },
    children: [new TextRun({ text, bold: true, size: 28, font: "Arial", color })]
  });
}

function h3(text) {
  return new Paragraph({
    spacing: { before: 200, after: 80 },
    children: [new TextRun({ text, bold: true, size: 24, font: "Arial", color: "444444" })]
  });
}

function body(text) {
  return new Paragraph({
    spacing: { before: 60, after: 80 },
    children: [new TextRun({ text, size: 22, font: "Arial", color: "333333" })]
  });
}

function bullet(text) {
  return new Paragraph({
    numbering: { reference: "bullets", level: 0 },
    spacing: { before: 40, after: 40 },
    children: [new TextRun({ text, size: 22, font: "Arial", color: "333333" })]
  });
}

function divider() {
  return new Paragraph({
    spacing: { before: 200, after: 200 },
    border: { bottom: { style: BorderStyle.SINGLE, size: 4, color: "DDDDDD" } },
    children: [new TextRun("")]
  });
}

function spacer(before = 100, after = 100) {
  return new Paragraph({ spacing: { before, after }, children: [new TextRun("")] });
}

function starLabel(text) {
  return new Paragraph({
    spacing: { before: 120, after: 60 },
    children: [new TextRun({ text, bold: true, size: 20, font: "Arial", color: "1A3A5C", allCaps: true })]
  });
}

function highlightCell(value, label, fill = "EEF4FF") {
  return new TableCell({
    borders,
    width: { size: 2100, type: WidthType.DXA },
    shading: { fill, type: ShadingType.CLEAR },
    margins: { top: 120, bottom: 120, left: 140, right: 140 },
    children: [
      new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: value, bold: true, size: 34, font: "Arial", color: "1A3A5C" })] }),
      new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: label, size: 18, font: "Arial", color: "666666" })] }),
    ]
  });
}

const doc = new Document({
  numbering: {
    config: [
      {
        reference: "bullets",
        levels: [{
          level: 0, format: LevelFormat.BULLET, text: "•", alignment: AlignmentType.LEFT,
          style: { paragraph: { indent: { left: 720, hanging: 360 } } }
        }]
      }
    ]
  },
  styles: {
    default: { document: { run: { font: "Arial", size: 22 } } },
    paragraphStyles: [
      { id: "Heading1", name: "Heading 1", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: 36, bold: true, font: "Arial", color: "1A1A2E" },
        paragraph: { spacing: { before: 400, after: 120 }, outlineLevel: 0 } },
      { id: "Heading2", name: "Heading 2", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: 28, bold: true, font: "Arial", color: "1A3A5C" },
        paragraph: { spacing: { before: 320, after: 100 }, outlineLevel: 1 } },
    ]
  },
  sections: [{
    properties: {
      page: {
        size: { width: 12240, height: 15840 },
        margin: { top: 1200, right: 1200, bottom: 1200, left: 1200 }
      }
    },
    children: [

      // ── COVER ──────────────────────────────────────────────────────────
      new Paragraph({
        spacing: { before: 400, after: 80 },
        children: [new TextRun({ text: "AMAZON INTERVIEW — CASE STUDY 3", size: 20, font: "Arial", color: "999999", allCaps: true })]
      }),
      new Paragraph({
        spacing: { before: 0, after: 60 },
        children: [new TextRun({ text: "AI-Powered Property Intelligence", bold: true, size: 48, font: "Arial", color: "1A1A2E" })]
      }),
      new Paragraph({
        spacing: { before: 0, after: 60 },
        children: [new TextRun({ text: "& Marketing Automation System", bold: true, size: 48, font: "Arial", color: "1A3A5C" })]
      }),
      new Paragraph({
        spacing: { before: 40, after: 60 },
        children: [new TextRun({ text: "Naveen Rajendran  ·  Key Contributor, Styldod Inc  ·  Built on CRMLS Production Pipeline", size: 22, font: "Arial", color: "666666", italics: true })]
      }),
      spacer(40, 60),

      // Metrics row
      new Table({
        width: { size: 9840, type: WidthType.DXA },
        columnWidths: [2100, 2100, 2100, 2100, 1440],
        rows: [new TableRow({ children: [
          highlightCell("1,500+", "MLS data fields automated"),
          highlightCell("80%", "Marketing flag accuracy"),
          highlightCell("500+", "Listings processed"),
          highlightCell("15x", "Images per batch API call"),
          new TableCell({ borders: noBorders, width: { size: 1440, type: WidthType.DXA }, children: [new Paragraph("")] })
        ]})]
      }),

      spacer(60, 40),
      new Paragraph({
        spacing: { before: 0, after: 160 },
        children: [new TextRun({ text: "Built as the next operational layer on top of the CRMLS compliance pipeline — extending AI understanding from violation detection to full property intelligence and marketing automation.", size: 21, font: "Arial", color: "555555", italics: true })]
      }),

      divider(),

      // ── SITUATION ──────────────────────────────────────────────────────
      starLabel("S — Situation"),
      h2("The Operational Scale Challenge"),
      body("After deploying the AI compliance detection system for CRMLS, I identified the next major operational bottleneck in the same listing pipeline: structured property data entry and marketing enhancement decisions were still entirely manual, repetitive, and inconsistent at scale."),
      spacer(40, 40),
      body("Before a real estate listing can go live on an MLS platform, agents and reviewers must populate hundreds of structured data fields from property images — materials, fixtures, appliances, architectural features, room characteristics — in addition to deciding which images need marketing enhancements like virtual staging, lawn cleanup, or day-to-dusk transformation."),
      spacer(40, 40),

      h3("The scale of the manual burden:"),
      bullet("A single listing contains 40–70 images across multiple room categories"),
      bullet("The NorthstarMLS residential form alone contains 1,500+ structured data fields — flooring material, appliance types, basement characteristics, heating systems, architectural features, and more"),
      bullet("Reviewers manually inspected each image and entered data field by field — a slow, subjective, and inconsistent process"),
      bullet("Most reviewers only completed mandatory (*) fields and skipped optional ones — leaving valuable property data unpopulated"),
      bullet("Marketing decisions (whether to stage a room, enhance a lawn, apply day-to-dusk) required subjective visual judgment on every image"),
      spacer(40, 40),

      body("Leadership set a target to automate this workflow. I took a key ownership role in planning and executing the solution — designing the architecture, driving technical decisions, and building the pipeline alongside the team."),

      divider(),

      // ── TASK ───────────────────────────────────────────────────────────
      starLabel("T — Task"),
      h2("My Responsibility"),
      body("My responsibility was to design and build an AI workflow capable of understanding listing imagery at the property level — not just image by image — and producing two types of structured output: marketing enhancement recommendations and structured property metadata."),
      spacer(40, 40),

      new Table({
        width: { size: 9840, type: WidthType.DXA },
        columnWidths: [4920, 4920],
        rows: [
          new TableRow({ children: [
            new TableCell({
              borders,
              shading: { fill: "EEF4FF", type: ShadingType.CLEAR },
              width: { size: 4920, type: WidthType.DXA },
              margins: { top: 120, bottom: 120, left: 160, right: 160 },
              children: [
                new Paragraph({ children: [new TextRun({ text: "Pipeline 1: Marketing Recommendations", bold: true, size: 22, font: "Arial", color: "1A3A5C" })] }),
                spacer(40, 20),
                bullet("Identify empty rooms → recommend virtual staging"),
                bullet("Identify dull or overcast exteriors → recommend day-to-dusk"),
                bullet("Identify lawns needing cleanup → recommend lawn enhancement"),
                bullet("Identify interior lighting issues → recommend color/temperature correction"),
                bullet("Identify curb appeal opportunities → recommend exterior enhancement"),
              ]
            }),
            new TableCell({
              borders,
              shading: { fill: "F0F9F4", type: ShadingType.CLEAR },
              width: { size: 4920, type: WidthType.DXA },
              margins: { top: 120, bottom: 120, left: 160, right: 160 },
              children: [
                new Paragraph({ children: [new TextRun({ text: "Pipeline 2: Metadata Extraction", bold: true, size: 22, font: "Arial", color: "1A6B3A" })] }),
                spacer(40, 20),
                bullet("Room category classification (bedroom, kitchen, living, etc.)"),
                bullet("Material identification: flooring, countertops, cabinetry, wall finishes"),
                bullet("Fixture & appliance detection: oven, dishwasher, sink type, shower type"),
                bullet("Architectural feature extraction: ceiling style, arch style, window type"),
                bullet("Output: structured JSON mapped to MLS form fields"),
              ]
            }),
          ]}),
        ]
      }),

      spacer(60, 40),
      body("Marketing recommendations were prioritized first — higher immediate business value and revenue impact for Styldod. Metadata extraction followed as the deeper operational layer."),

      divider(),

      // ── ACTION ─────────────────────────────────────────────────────────
      starLabel("A — Action (Deep Dive)"),
      h2("Separating the Pipelines"),
      body("My first architectural decision was to separate the marketing recommendation workflow from the metadata extraction workflow entirely. This was not obvious — both pipelines analyze the same images — but combining them into one prompt created competing objectives that degraded output quality on both tasks."),
      spacer(40, 40),
      bullet("Marketing recommendations require aesthetic and contextual judgment: 'Does this room need staging? Is this exterior worth a day-to-dusk transformation?'"),
      bullet("Metadata extraction requires precise structured output: 'What is the exact flooring material? Is there a dishwasher present?'"),
      bullet("Separating them allowed independent prompt optimization, independent QA, and faster iteration on each pipeline"),

      spacer(60, 60),
      h2("The Critical Problem: Single-Image API Calls Killed Accuracy"),
      body("The first version of the marketing recommendation pipeline sent one image at a time to the model. This created a fundamental accuracy problem that I diagnosed through output analysis:"),
      spacer(40, 40),
      bullet("A single image of a living room with furniture might look fine in isolation — but when reviewed alongside the other 12 images of the same property, it was clearly understyled relative to the rest"),
      bullet("A single exterior image flagged for day-to-dusk might actually be one of 5 exterior shots — and only 2 of the 5 were suitable candidates"),
      bullet("Color temperature inconsistencies between rooms were invisible in single-image review but obvious when images were seen together"),
      bullet("The model had no property context — it was making decisions about individual images without understanding the property as a whole"),
      spacer(40, 40),

      new Paragraph({
        spacing: { before: 80, after: 80 },
        shading: { fill: "FFF8E7", type: ShadingType.CLEAR },
        children: [
          new TextRun({ text: "The insight: ", bold: true, size: 22, font: "Arial", color: "8B5E00" }),
          new TextRun({ text: "Real estate image understanding is a property-level problem, not an image-level problem. A model evaluating a single image has no reference point. A model evaluating a full property set can reason comparatively, contextually, and consistently.", size: 22, font: "Arial", color: "8B5E00" })
        ]
      }),

      spacer(60, 60),
      h2("The Solution: Batch API Calls with Property-Level Context"),
      body("I redesigned the pipeline to send 15 images per API call — the full set for a room category or property section — rather than processing images individually. This single architectural change drove the largest accuracy improvement in the project."),
      spacer(40, 40),

      new Table({
        width: { size: 9840, type: WidthType.DXA },
        columnWidths: [4920, 4920],
        rows: [
          new TableRow({ children: [
            new TableCell({
              borders,
              shading: { fill: "FDECEA", type: ShadingType.CLEAR },
              width: { size: 4920, type: WidthType.DXA },
              margins: { top: 120, bottom: 120, left: 160, right: 160 },
              children: [
                new Paragraph({ children: [new TextRun({ text: "Before: Single-image calls", bold: true, size: 22, font: "Arial", color: "8B1A1A" })] }),
                spacer(30, 20),
                bullet("Model had no comparative reference"),
                bullet("High false-positive rate on image enhancement flags — almost everything got flagged"),
                bullet("Low confidence on material identification — same material read differently across images"),
                bullet("No property-wide consistency in output"),
                bullet("Enhancement pipeline flagging most images, making recommendations useless"),
              ]
            }),
            new TableCell({
              borders,
              shading: { fill: "E8F5E9", type: ShadingType.CLEAR },
              width: { size: 4920, type: WidthType.DXA },
              margins: { top: 120, bottom: 120, left: 160, right: 160 },
              children: [
                new Paragraph({ children: [new TextRun({ text: "After: 15-image batch calls", bold: true, size: 22, font: "Arial", color: "1A6B3A" })] }),
                spacer(30, 20),
                bullet("Model reasons across the full property context"),
                bullet("80% accuracy on marketing enhancement recommendations"),
                bullet("Material confidence significantly improved — model resolves ambiguity by cross-referencing multiple room views"),
                bullet("Consistent structured output across the full listing"),
                bullet("Low-confidence outputs correctly routed to human review queue"),
              ]
            }),
          ]}),
        ]
      }),

      spacer(60, 60),
      h2("Confidence-Tiered Output Routing"),
      body("For both pipelines, I designed a three-tier confidence routing system to balance automation with accuracy — critical for a production system where errors affect live listings:"),
      spacer(40, 40),

      new Table({
        width: { size: 9840, type: WidthType.DXA },
        columnWidths: [2000, 3920, 3920],
        rows: [
          new TableRow({ children: [
            new TableCell({ borders, shading: { fill: "1A3A5C", type: ShadingType.CLEAR }, width: { size: 2000, type: WidthType.DXA }, margins: { top: 80, bottom: 80, left: 120, right: 120 },
              children: [new Paragraph({ children: [new TextRun({ text: "Confidence", bold: true, size: 20, font: "Arial", color: "FFFFFF" })] })] }),
            new TableCell({ borders, shading: { fill: "1A3A5C", type: ShadingType.CLEAR }, width: { size: 3920, type: WidthType.DXA }, margins: { top: 80, bottom: 80, left: 120, right: 120 },
              children: [new Paragraph({ children: [new TextRun({ text: "Action", bold: true, size: 20, font: "Arial", color: "FFFFFF" })] })] }),
            new TableCell({ borders, shading: { fill: "1A3A5C", type: ShadingType.CLEAR }, width: { size: 3920, type: WidthType.DXA }, margins: { top: 80, bottom: 80, left: 120, right: 120 },
              children: [new Paragraph({ children: [new TextRun({ text: "Example", bold: true, size: 20, font: "Arial", color: "FFFFFF" })] })] }),
          ]}),
          new TableRow({ children: [
            new TableCell({ borders, shading: { fill: "E8F5E9", type: ShadingType.CLEAR }, width: { size: 2000, type: WidthType.DXA }, margins: { top: 80, bottom: 80, left: 120, right: 120 },
              children: [new Paragraph({ children: [new TextRun({ text: "High", bold: true, size: 20, font: "Arial", color: "1A6B3A" })] })] }),
            new TableCell({ borders, width: { size: 3920, type: WidthType.DXA }, margins: { top: 80, bottom: 80, left: 120, right: 120 },
              children: [new Paragraph({ children: [new TextRun({ text: "Auto-populated / flagged directly to user recommendation", size: 20, font: "Arial", color: "333333" })] })] }),
            new TableCell({ borders, width: { size: 3920, type: WidthType.DXA }, margins: { top: 80, bottom: 80, left: 120, right: 120 },
              children: [new Paragraph({ children: [new TextRun({ text: "Empty living room → 'Recommend Virtual Staging'", size: 20, font: "Arial", color: "333333" })] })] }),
          ]}),
          new TableRow({ children: [
            new TableCell({ borders, shading: { fill: "FFF8E7", type: ShadingType.CLEAR }, width: { size: 2000, type: WidthType.DXA }, margins: { top: 80, bottom: 80, left: 120, right: 120 },
              children: [new Paragraph({ children: [new TextRun({ text: "Moderate", bold: true, size: 20, font: "Arial", color: "8B5E00" })] })] }),
            new TableCell({ borders, width: { size: 3920, type: WidthType.DXA }, margins: { top: 80, bottom: 80, left: 120, right: 120 },
              children: [new Paragraph({ children: [new TextRun({ text: "Flagged for human review with AI suggestion pre-filled", size: 20, font: "Arial", color: "333333" })] })] }),
            new TableCell({ borders, width: { size: 3920, type: WidthType.DXA }, margins: { top: 80, bottom: 80, left: 120, right: 120 },
              children: [new Paragraph({ children: [new TextRun({ text: "Flooring may be laminate or hardwood — reviewer confirms", size: 20, font: "Arial", color: "333333" })] })] }),
          ]}),
          new TableRow({ children: [
            new TableCell({ borders, shading: { fill: "FDECEA", type: ShadingType.CLEAR }, width: { size: 2000, type: WidthType.DXA }, margins: { top: 80, bottom: 80, left: 120, right: 120 },
              children: [new Paragraph({ children: [new TextRun({ text: "Low", bold: true, size: 20, font: "Arial", color: "8B1A1A" })] })] }),
            new TableCell({ borders, width: { size: 3920, type: WidthType.DXA }, margins: { top: 80, bottom: 80, left: 120, right: 120 },
              children: [new Paragraph({ children: [new TextRun({ text: "Routed entirely to human review queue, no AI output shown", size: 20, font: "Arial", color: "333333" })] })] }),
            new TableCell({ borders, width: { size: 3920, type: WidthType.DXA }, margins: { top: 80, bottom: 80, left: 120, right: 120 },
              children: [new Paragraph({ children: [new TextRun({ text: "Obscured or partial image — cannot determine material", size: 20, font: "Arial", color: "333333" })] })] }),
          ]}),
        ]
      }),

      spacer(60, 40),
      body("This tiered approach was critical: it meant the system improved reviewer efficiency on every listing — even when it couldn't fully automate — by pre-filling high-confidence fields and routing uncertain ones for faster human confirmation rather than from scratch."),

      divider(),

      // ── RESULT ─────────────────────────────────────────────────────────
      starLabel("R — Result (Deliver Results)"),
      h2("Operational Impact on the CRMLS Pipeline"),

      new Table({
        width: { size: 9840, type: WidthType.DXA },
        columnWidths: [4920, 4920],
        rows: [
          new TableRow({ children: [
            new TableCell({
              borders,
              shading: { fill: "EEF4FF", type: ShadingType.CLEAR },
              width: { size: 4920, type: WidthType.DXA },
              margins: { top: 120, bottom: 120, left: 160, right: 160 },
              children: [
                new Paragraph({ children: [new TextRun({ text: "Marketing Pipeline Results", bold: true, size: 22, font: "Arial", color: "1A3A5C" })] }),
                spacer(40, 20),
                bullet("80% accuracy on marketing enhancement recommendations across 500+ listings"),
                bullet("Eliminated false-positive flood from single-image processing — recommendations became actionable rather than noise"),
                bullet("Day-to-dusk, virtual staging, and lawn enhancement flags now routed at property level with context-aware precision"),
                bullet("Agent retains final decision — system acts as intelligent recommendation layer, not override"),
              ]
            }),
            new TableCell({
              borders,
              shading: { fill: "F0F9F4", type: ShadingType.CLEAR },
              width: { size: 4920, type: WidthType.DXA },
              margins: { top: 120, bottom: 120, left: 160, right: 160 },
              children: [
                new Paragraph({ children: [new TextRun({ text: "Metadata Pipeline Results", bold: true, size: 22, font: "Arial", color: "1A6B3A" })] }),
                spacer(40, 20),
                bullet("Automated extraction across 1,500+ structured MLS data fields from listing images"),
                bullet("High-confidence fields auto-populated; moderate/low fields pre-filled for faster human confirmation"),
                bullet("Significantly increased optional field completion rate — previously skipped by reviewers under time pressure"),
                bullet("Structured JSON output mapped directly to MLS form schema — zero manual reformatting required"),
              ]
            }),
          ]}),
        ]
      }),

      spacer(60, 60),
      h3("The broader pipeline impact:"),
      body("This system extended the CRMLS compliance pipeline from a single-function compliance checker into a full listing intelligence layer — covering compliance detection (CS1), marketing recommendations, and property metadata extraction within the same workflow. Together, these systems transformed listing preparation from a manual, reviewer-dependent process into an AI-assisted, scalable operation."),

      divider(),

      h2("Key Learnings"),
      h3("Property context beats image context"),
      body("The single highest-impact technical decision in this project was moving from single-image API calls to 15-image batch calls. The model's ability to reason comparatively across a property — not just evaluate an image in isolation — was the difference between a noisy recommendation engine and an 80% accurate one. This principle applies directly to any AI content generation workflow: context scope determines output quality."),
      spacer(40, 40),

      h3("Confidence routing is a product decision, not just a technical one"),
      body("Designing the three-tier confidence system required understanding how reviewers actually work under time pressure. A system that only outputs high-confidence results would miss too many fields. A system that outputs everything regardless of confidence adds noise. The moderate tier — pre-filling uncertain fields for faster human confirmation — was the most valuable layer and came from understanding the reviewer's actual workflow, not just the model's capabilities."),
      spacer(40, 40),

      h3("What I would do differently"),
      body("I would involve reviewers earlier in defining confidence thresholds. We set initial thresholds based on model evaluation against our dataset — but reviewers had different tolerances for error depending on the field type. A flooring material error is low-stakes; a bedroom count error is high-stakes. Field-level confidence thresholds calibrated by business impact would have improved the system faster."),

      divider(),

      h2("Leadership Principles Demonstrated"),

      new Table({
        width: { size: 9840, type: WidthType.DXA },
        columnWidths: [1900, 7940],
        rows: [
          new TableRow({ children: [
            new TableCell({ borders, shading: { fill: "EEF4FF", type: ShadingType.CLEAR }, width: { size: 1900, type: WidthType.DXA }, margins: { top: 100, bottom: 100, left: 120, right: 120 },
              children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "Deep Dive", bold: true, size: 20, font: "Arial", color: "1A3A5C" })] })] }),
            new TableCell({ borders, width: { size: 7940, type: WidthType.DXA }, margins: { top: 100, bottom: 100, left: 160, right: 160 },
              children: [new Paragraph({ children: [new TextRun({ text: "Did not accept high false-positive rates as inevitable. Diagnosed the root cause — single-image context — through output analysis, and redesigned the pipeline architecture around batch processing. The solution was not a prompt tweak; it was a fundamental rethink of how the model receives information.", size: 20, font: "Arial", color: "333333" })] })] }),
          ]}),
          new TableRow({ children: [
            new TableCell({ borders, shading: { fill: "EEF4FF", type: ShadingType.CLEAR }, width: { size: 1900, type: WidthType.DXA }, margins: { top: 100, bottom: 100, left: 120, right: 120 },
              children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "Deliver Results", bold: true, size: 20, font: "Arial", color: "1A3A5C" })] })] }),
            new TableCell({ borders, width: { size: 7940, type: WidthType.DXA }, margins: { top: 100, bottom: 100, left: 160, right: 160 },
              children: [new Paragraph({ children: [new TextRun({ text: "80% marketing recommendation accuracy across 500+ real listings. 1,500+ MLS data fields automated. Delivered on leadership's operational automation target. Built on the production CRMLS pipeline — real output for real listings.", size: 20, font: "Arial", color: "333333" })] })] }),
          ]}),
          new TableRow({ children: [
            new TableCell({ borders, shading: { fill: "EEF4FF", type: ShadingType.CLEAR }, width: { size: 1900, type: WidthType.DXA }, margins: { top: 100, bottom: 100, left: 120, right: 120 },
              children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "Customer Obsession", bold: true, size: 20, font: "Arial", color: "1A3A5C" })] })] }),
            new TableCell({ borders, width: { size: 7940, type: WidthType.DXA }, margins: { top: 100, bottom: 100, left: 160, right: 160 },
              children: [new Paragraph({ children: [new TextRun({ text: "Kept the agent in control throughout — all recommendations are suggestions, not overrides. Designed confidence routing around how reviewers actually work under time pressure, not just what the model could output. The goal was to make reviewers faster and more accurate, not to replace their judgment.", size: 20, font: "Arial", color: "333333" })] })] }),
          ]}),
          new TableRow({ children: [
            new TableCell({ borders, shading: { fill: "EEF4FF", type: ShadingType.CLEAR }, width: { size: 1900, type: WidthType.DXA }, margins: { top: 100, bottom: 100, left: 120, right: 120 },
              children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "Invent & Simplify", bold: true, size: 20, font: "Arial", color: "1A3A5C" })] })] }),
            new TableCell({ borders, width: { size: 7940, type: WidthType.DXA }, margins: { top: 100, bottom: 100, left: 160, right: 160 },
              children: [new Paragraph({ children: [new TextRun({ text: "Separated two fundamentally different reasoning tasks — aesthetic judgment and structured extraction — into independent pipelines. Solved a complex 1,500-field data entry problem through contextual batch inference rather than building 1,500 individual classifiers.", size: 20, font: "Arial", color: "333333" })] })] }),
          ]}),
        ]
      }),

      spacer(200, 60),
      new Paragraph({
        alignment: AlignmentType.CENTER,
        children: [new TextRun({ text: "Built on CRMLS production pipeline  ·  Naveen Rajendran  ·  Styldod Inc", size: 18, font: "Arial", color: "999999", italics: true })]
      }),

    ]
  }]
});

Packer.toBuffer(doc).then(buf => {
  fs.writeFileSync('./Case_Study_3_Property_Intelligence.docx', buf);
  console.log('Done, saved to ./Case_Study_3_Property_Intelligence.docx');
});
