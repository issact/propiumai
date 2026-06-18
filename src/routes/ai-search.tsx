import { createFileRoute } from "@tanstack/react-router";
import { IframePage } from "@/home/components/IframePage";

export const Route = createFileRoute("/ai-search")({
  head: () => ({
    meta: [
      { title: "AI Search & Property Advisor | prOPIUM.ai" },
      { name: "description", content: "Ask about Gurgaon properties, builder credentials, carpet areas, and RERA status using the prOPIUM AI Advisor." },
    ],
  }),
  component: AiSearchPage,
});

const MOBILE_FIXES = `
@media (max-width: 767px) {
  /* Match home top nav padding/spacing */
  header.fixed.top-0 > div {
    padding-left: 16px !important;
    padding-right: 16px !important;
  }

  /* Lift chat input above floating mobile bottom nav */
  .fixed.bottom-0.left-0.right-0 {
    bottom: 84px !important;
    padding-top: 8px !important;
    padding-bottom: 8px !important;
  }
  .fixed.bottom-0.left-0.right-0 > div {
    padding-left: 16px !important;
    padding-right: 16px !important;
  }

  /* Reserve space so messages aren't hidden behind the lifted input + bottom nav */
  #chat-feed { padding-bottom: 180px !important; }

  /* Prevent AI response card from overflowing horizontally */
  #messages-container > div { min-width: 0 !important; width: 100% !important; }
  #messages-container > div > div.flex.flex-col {
    min-width: 0 !important;
    max-width: calc(100vw - 76px) !important;
    flex: 1 1 auto !important;
  }
  #messages-container .max-w-xl { max-width: 100% !important; }

  /* Keep suggestion chips inside the card */
  #messages-container .flex.flex-wrap { max-width: 100% !important; }
}
`;

function AiSearchPage() {
  return (
    <IframePage
      src="/ai-search.html"
      title="AI Search & Property Advisor"
      activeTab="AI Search"
      injectCss={MOBILE_FIXES}
    />
  );
}
