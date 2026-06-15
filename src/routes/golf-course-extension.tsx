import { createFileRoute } from "@tanstack/react-router";
import { IframePage } from "@/home/components/IframePage";

export const Route = createFileRoute("/golf-course-extension")({
  head: () => ({
    meta: [
      { title: "Golf Course Extension Road | prOPIUM.ai" },
      { name: "description", content: "Corridor dossier for Golf Course Extension Road — projects, pricing, and delivery telemetry." },
    ],
  }),
  component: GCEXPage,
});

function GCEXPage() {
  return <IframePage src="/golf-course-extension.html" title="Golf Course Extension Road" />;
}
