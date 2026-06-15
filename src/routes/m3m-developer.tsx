import { createFileRoute } from "@tanstack/react-router";
import { MobileBottomNav } from "@/home/components/MobileBottomNav";

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
  return (
    <>
      <iframe
        src="/m3m-developer.html"
        style={{ position: "fixed", top: 0, left: 0, width: "100vw", height: "100vh", border: "none" }}
        title="M3M India Developer Audit"
      />
      <MobileBottomNav defaultActive={null} />
    </>
  );
}
