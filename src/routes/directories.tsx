import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { TopNav } from "@/home/components/TopNav";
import { Footer } from "@/home/components/Footer";
import { MobileBottomNav } from "@/home/components/MobileBottomNav";

export const Route = createFileRoute("/directories")({
  head: () => ({
    meta: [{ title: "M3M Altitude Gurugram | prOPIUM.ai Audit Dossier" }],
  }),
  component: Directories,
});

function Directories() {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [iframeHeight, setIframeHeight] = useState<number>(0);

  useEffect(() => {
    const onMsg = (e: MessageEvent) => {
      const data = e.data;
      if (!data) return;
      if (data.type === "propium:navigate" && typeof data.to === "string") {
        window.location.assign(data.to);
        return;
      }
      if (data.type === "propium:height" && typeof data.height === "number") {
        setIframeHeight((prev) => (Math.abs(prev - data.height) > 1 ? data.height : prev));
      }
      if (data.type === "propium:modal") {
        document.body.style.overflow = data.open ? "hidden" : "";
      }
    };
    window.addEventListener("message", onMsg);
    return () => window.removeEventListener("message", onMsg);
  }, []);

  return (
    <div style={{ minHeight: "100vh", background: "#0F172A" }}>
      <TopNav activeTab="Search" />
      <iframe
        ref={iframeRef}
        src="/design.html"
        title="M3M Altitude Gurugram"
        scrolling="no"
        onLoad={() => {
          const doc = iframeRef.current?.contentDocument;
          if (doc) {
            const h = Math.max(
              doc.body?.scrollHeight ?? 0,
              doc.documentElement?.scrollHeight ?? 0,
            );
            if (h > 0) setIframeHeight(h);
          }
        }}
        style={{
          border: "none",
          width: "100%",
          height: iframeHeight ? `${iframeHeight}px` : "calc(100vh - 64px)",
          display: "block",
          marginTop: 64,
          overflow: "hidden",
        }}
      />
      <Footer />
      <MobileBottomNav defaultActive={null} />
    </div>
  );
}
