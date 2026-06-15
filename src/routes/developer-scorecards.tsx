import { createFileRoute } from "@tanstack/react-router";
import { IframePage } from "@/home/components/IframePage";

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
  return <IframePage src="/developer-scorecards.html" title="Developer Scorecards Directory" />;
}
