import { createFileRoute } from "@tanstack/react-router";
import { MobileBottomNav } from "@/home/components/MobileBottomNav";

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
  return (
    <>
      <iframe
        src="/micro-market.html"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          border: "none",
        }}
        title="Micro-Market Intelligence"
      />
      <MobileBottomNav defaultActive={null} />
    </>
  );
}
