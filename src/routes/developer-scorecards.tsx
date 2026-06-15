import { createFileRoute } from "@tanstack/react-router";
import { MobileBottomNav } from "@/home/components/MobileBottomNav";

export const Route = createFileRoute("/developer-scorecards")({
  head: () => ({
    meta: [
      { title: "Developer Scorecards Directory | prOPIUM.ai" },
      { name: "description", content: "Compare Gurgaon's top builders. Review baseline financial metrics, past delivery timelines, construction quality audits, and litigation parameters." },
    ],
  }),
  component: DeveloperScorecardsPage,
});

function DeveloperScorecardsPage() {
  return (
    <>
      <iframe
        src="/developer-scorecards.html"
        style={{ position: "fixed", top: 0, left: 0, width: "100vw", height: "100vh", border: "none" }}
        title="Developer Scorecards Directory"
      />
      <MobileBottomNav defaultActive={null} />
    </>
  );
}
