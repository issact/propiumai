import { useEffect, useRef } from "react";
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

  const injectChrome = () => {
    const doc = iframeRef.current?.contentDocument;
    if (!doc || !doc.head) return false;
    if (!doc.getElementById("__propium_hide_chrome")) {
      const style = doc.createElement("style");
      style.id = "__propium_hide_chrome";
      style.textContent = `
        @media (min-width: 768px) { header.fixed.top-0 { display: none !important; } }
        footer { display: none !important; }
      `;
      doc.head.appendChild(style);
    }
    const body = doc.body;
    const html = doc.documentElement;
    if (body && html && iframeRef.current) {
      const h = Math.max(body.scrollHeight, html.scrollHeight, html.offsetHeight);
      iframeRef.current.style.height = h + "px";
    }
    return true;
  };

  useEffect(() => {
    let cancelled = false;
    const tick = () => {
      if (cancelled) return;
      injectChrome();
    };
    const id = window.setInterval(tick, 400);
    tick();
    window.addEventListener("resize", tick);
    return () => {
      cancelled = true;
      window.clearInterval(id);
      window.removeEventListener("resize", tick);
    };
  }, []);

  return (
    <div style={{ background: "#F8FAFC", minHeight: "100vh" }}>
      <TopNav activeTab="Compare" />
      <iframe
        ref={iframeRef}
        src="/compare.html"
        onLoad={injectChrome}
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
