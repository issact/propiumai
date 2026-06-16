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
      "prOPIUM is an independent real estate intelligence platform that aggregates and verifies project-level data across RERA filings, builder credibility, pricing history, and delivery signals — giving buyers, investors, and advisors a single source of audited truth.",
  },
  {
    question: "How is the data sourced and updated?",
    answer:
      "We pull directly from state RERA portals, developer disclosures, and verified on-ground sources. Data is refreshed continuously — most projects update within 24–72 hours of a regulatory filing or price change.",
  },
  {
    question: "Is prOPIUM free to use?",
    answer:
      "Core market intelligence — micro-market snapshots, project listings, and RERA status — is available without a subscription. Advanced analytics, risk scoring, and portfolio tools are part of premium plans.",
  },
  {
    question: "What is a micro-market?",
    answer:
      "A micro-market is a hyper-local corridor within a city that shares common infrastructure, pricing dynamics, and buyer profiles. For example, Golf Course Road and Dwarka Expressway are distinct micro-markets within Gurgaon, each with its own supply-demand balance and investment thesis.",
  },
  {
    question: "How does project scoring work?",
    answer:
      "Each project receives a composite score based on RERA compliance history, builder delivery track record, construction progress velocity, pricing transparency, and litigation status. Scores are recalculated as new data arrives.",
  },
  {
    question: "Can I compare multiple projects side by side?",
    answer:
      "Yes. The comparison tool lets you place up to four projects side by side across price, area efficiency, builder score, RERA status, and delivery timeline — so you can make a data-driven shortlist before visiting a site.",
  },
  {
    question: "Who is prOPIUM for?",
    answer:
      "prOPIUM is built for end-buyers who want to verify before they commit, investors tracking micro-market appreciation cycles, channel partners who need audited data to pitch with authority, and developers who want market intelligence at speed.",
  },
  {
    question: "How is this different from typical property portals?",
    answer:
      "Typical portals are listing marketplaces — their incentive is to drive leads. prOPIUM is a data platform with no developer sponsorship; our incentive is accuracy. We surface risk signals and verified data, not just listings.",
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
        type="multiple"
        className="grid grid-cols-1 md:grid-cols-2 gap-3"
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
              className="px-4 pb-4 pt-0 border-t border-slate-100"
            >
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
