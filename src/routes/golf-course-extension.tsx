import { createFileRoute } from "@tanstack/react-router";
import { MobileBottomNav } from "@/home/components/MobileBottomNav";

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
  return (
    <>
      <iframe
        src="/golf-course-extension.html"
        style={{ position: "fixed", top: 0, left: 0, width: "100vw", height: "100vh", border: "none" }}
        title="Golf Course Extension Road"
      />
      <MobileBottomNav defaultActive={null} />
    </>
  );
}
