import { useRef } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { TopNav } from "@/home/components/TopNav";
import { Footer } from "@/home/components/Footer";
import { MobileBottomNav } from "@/home/components/MobileBottomNav";

export const Route = createFileRoute("/compare")({
  head: () => ({
    meta: [
      { title: "Compare Projects | prOPIUM.ai" },
      {
        name: "description",
        content:
          "Compare up to 3 luxury residential projects side-by-side on carpet efficiency, pricing, builder credibility, and infrastructure.",
      },
    ],
  }),
  component: ComparePage,
});

function ComparePage() {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const handleLoad = () => {
    const doc = iframeRef.current?.contentDocument;
    if (!doc) return;
    if (doc.getElementById("__propium_hide_chrome")) return;
    const style = doc.createElement("style");
    style.id = "__propium_hide_chrome";
    style.textContent = `
      @media (min-width: 768px) { header.fixed.top-0 { display: none !important; } }
      footer { display: none !important; }
    `;
    doc.head.appendChild(style);

    const resize = () => {
      const body = doc.body;
      const html = doc.documentElement;
      if (!body || !html || !iframeRef.current) return;
      const h = Math.max(body.scrollHeight, html.scrollHeight, html.offsetHeight);
      iframeRef.current.style.height = h + "px";
    };
    resize();
    const ro = new ResizeObserver(resize);
    if (doc.body) ro.observe(doc.body);
    window.addEventListener("resize", resize);
  };

  return (
    <div style={{ background: "#F8FAFC", minHeight: "100vh" }}>
      <TopNav activeTab="Compare" />
      <iframe
        ref={iframeRef}
        src="/compare.html"
        onLoad={handleLoad}
        title="Compare Projects"
        style={{
          display: "block",
          width: "100%",
          border: "none",
          minHeight: "100vh",
        }}
      />
      <Footer />
      <MobileBottomNav defaultActive={null as any} />
    </div>
  );
}
