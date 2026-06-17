import { createFileRoute } from "@tanstack/react-router";
import { IframePage } from "@/home/components/IframePage";

export const Route = createFileRoute("/compare")({
  head: () => ({
    meta: [
      { title: "Compare Projects | prOPIUM.ai" },
      { name: "description", content: "Compare up to 3 luxury residential projects side-by-side on carpet efficiency, pricing, builder credibility, and infrastructure." },
    ],
  }),
  component: ComparePage,
});

function ComparePage() {
  return <IframePage src="/compare.html" title="Compare Projects" />;
}
