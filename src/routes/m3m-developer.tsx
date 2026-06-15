import { createFileRoute } from "@tanstack/react-router";
import { IframePage } from "@/home/components/IframePage";

export const Route = createFileRoute("/m3m-developer")({
  head: () => ({
    meta: [
      { title: "M3M India Pvt Ltd — Developer Audit | prOPIUM.ai" },
      { name: "description", content: "M3M India developer audit dashboard: delivery track record, financial health, construction quality, and litigation parameters." },
    ],
  }),
  component: M3MDeveloperPage,
});

function M3MDeveloperPage() {
  return <IframePage src="/m3m-developer.html" title="M3M India Developer Audit" />;
}
