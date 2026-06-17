import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { Footer } from "@/home/components/Footer";
import { TopNav } from "@/home/components/TopNav";
import { MobileBottomNav } from "@/home/components/MobileBottomNav";

export const Route = createFileRoute("/search")({
  head: () => ({
    meta: [{ title: "Property Audits Directory | prOPIUM.ai" }],
  }),
  component: SearchPage,
});

function SearchPage() {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [height, setHeight] = useState<number>(0);

  useEffect(() => {
    const onMsg = (e: MessageEvent) => {
      const data = e.data;
      if (data && data.type === "propium:height" && typeof data.height === "number") {
        setHeight((prev) => (Math.abs(prev - data.height) > 1 ? data.height : prev));
      }
    };
    window.addEventListener("message", onMsg);
    return () => window.removeEventListener("message", onMsg);
  }, []);

  const handleLoad = () => {
    const doc = iframeRef.current?.contentDocument;
    if (!doc) return;
    if (!doc.getElementById("__propium_hide_header")) {
      const style = doc.createElement("style");
      style.id = "__propium_hide_header";
      style.textContent = `@media (min-width: 768px) { header.fixed.top-0 { display: none !important; } }`;
      doc.head.appendChild(style);
    }
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <TopNav activeTab="Search" />
      <div style={{ height: 64 }} />
      <iframe
        ref={iframeRef}
        src="/search.html"
        title="Property Audits Directory"
        scrolling="no"
        onLoad={handleLoad}
        style={{
          border: "none",
          width: "100%",
          height: height ? `${height}px` : "100vh",
          display: "block",
          overflow: "hidden",
        }}
      />
      <Footer />
      <MobileBottomNav defaultActive="search" />
    </div>
  );
}
