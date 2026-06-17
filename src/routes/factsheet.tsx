import { createFileRoute } from "@tanstack/react-router";
import { IframePage } from "@/home/components/IframePage";

export const Route = createFileRoute("/factsheet")({
  head: () => ({
    meta: [
      { title: "Property FactSheet | prOPIUM.ai" },
      { name: "description", content: "Detailed property intelligence factsheet with scores, investment metrics, and price history for Gurgaon luxury projects." },
    ],
  }),
  component: FactsheetPage,
});

function FactsheetPage() {
  return <IframePage src="/factsheet.html" title="Property FactSheet" />;
}
