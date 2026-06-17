import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

// TODO: Replace placeholder content with real FAQ copy
const faqItems = [
  {
    question: "What is prOPIUM?",
    answer:
      "prOPIUM is a property intelligence platform for Gurugram. It consolidates project specs, builder credibility, live pricing, RERA status, and risk signals across micro-markets — so you can search, compare, and decide on proof, not persuasion.",
  },
  {
    question: "How is the data sourced and updated?",
    answer:
      "Data is drawn from RERA filings, registry records, admin-verified project inputs, and live catalog updates. Project counts, pricing, delivery status, and intelligence scores refresh as the underlying data changes.",
  },
  {
    question: "Is prOPIUM free to use?",
    answer:
      "Yes. You can search projects, explore micro-markets, compare listings, and review intelligence scores at no cost. Some flows may ask you to sign in to save preferences or access personalized recommendations.",
  },
  {
    question: "What is a micro-market?",
    answer:
      "A micro-market is one of Gurugram’s major corridors — such as Golf Course Road or Dwarka Expressway — mapped with live project inventory, average pricing, unit counts, and delivery-stage breakdowns for that corridor.",
  },
  {
    question: "How does project scoring work?",
    answer:
      "Each project is evaluated across eight intelligence dimensions — including builder track record, pricing, location, legal status, construction progress, and risk signals — using a structured scoring model so you see strengths and gaps at a glance.",
  },
  {
    question: "Can I compare multiple projects side by side?",
    answer:
      "Yes. Open any project and use Compare, or browse the project explorer to evaluate pricing, specifications, and intelligence scores across multiple projects in one view.",
  },
  {
    question: "Who is prOPIUM for?",
    answer:
      "Home buyers, investors, channel partners, wealth managers, developers, and institutional teams who need verified, structured data — not broker pitches or brochure marketing.",
  },
  {
    question: "How is this different from typical property portals?",
    answer:
      "Most portals list inventory. We layer structured intelligence on top — actual prices, RERA compliance, litigation and delay signals, micro-market dynamics, and builder credibility — so you understand what you are buying before you commit.",
  },
];

export function FAQSection() {
  return (
    <section style={{ marginBottom: 56 }}>
      <div style={{ marginBottom: 32 }}>
        <h2
          style={{
            fontFamily: "Outfit, sans-serif",
            fontSize: "clamp(22px, 4.5vw, 30px)",
            fontWeight: 700,
            color: "#0F172A",
            lineHeight: 1.3,
            marginBottom: 8,
          }}
        >
          Frequently Asked Questions
        </h2>
        <p
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: 14,
            color: "#64748b",
          }}
        >
          Quick answers on how prOPIUM works, what the data means, and who it is
          built for.
        </p>
      </div>

      <Accordion
        type="single"
        collapsible
        className="grid grid-cols-1 md:grid-cols-2 gap-3 items-start"
      >
        {faqItems.map((item, i) => (
          <AccordionItem
            key={i}
            value={`item-${i}`}
            style={{
              background: "#ffffff",
              border: "1px solid rgba(226,232,240,0.8)",
              borderRadius: 8,
              overflow: "hidden",
              boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
              padding: "0 4px",
            }}
            className="border-b-0 [&[data-state=open]]:border-amber-200 [&[data-state=open]]:shadow-md"
          >
            <AccordionTrigger
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: 14,
                fontWeight: 600,
                color: "#0F172A",
                padding: "16px",
                textDecoration: "none",
              }}
              className="hover:no-underline hover:text-amber-600 px-4"
            >
              {item.question}
            </AccordionTrigger>
            <AccordionContent
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: 13,
                color: "#475569",
                lineHeight: 1.7,
              }}
              className="px-4 pb-4 pt-0"
            >
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}