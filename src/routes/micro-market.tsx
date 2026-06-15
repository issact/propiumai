import { createFileRoute } from "@tanstack/react-router";
import { IframePage } from "@/home/components/IframePage";

export const Route = createFileRoute("/micro-market")({
  head: () => ({
    meta: [
      { title: "Micro-Market Intelligence | prOPIUM.ai" },
      { name: "description", content: "Corridor dossiers, price intelligence, and location scorecards for Gurgaon's micro-markets." },
    ],
  }),
  component: MicroMarketPage,
});

function MicroMarketPage() {
  return <IframePage src="/micro-market.html" title="Micro-Market Intelligence" />;
}
