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

function AiSearchPage() {
  return <IframePage src="/ai-search.html" title="AI Search & Property Advisor" />;
}
