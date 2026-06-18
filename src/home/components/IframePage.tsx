import { useEffect, useRef } from "react";
import { TopNav } from "./TopNav";
import { MobileBottomNav } from "./MobileBottomNav";

interface IframePageProps {
  src: string;
  title: string;
  bottomNavActive?: string | null;
  activeTab?: string;
  injectCss?: string;
  showTopNav?: boolean;
}

export function IframePage({
  src,
  title,
  bottomNavActive = null,
  activeTab = "Search",
  injectCss,
  showTopNav = true,
}: IframePageProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const injectStyles = () => {
    const doc = iframeRef.current?.contentDocument;
    if (!doc || !doc.head) return;
    if (!doc.getElementById("__propium_iframe_styles")) {
      const style = doc.createElement("style");
      style.id = "__propium_iframe_styles";
      style.textContent = `
        ${showTopNav ? "@media (min-width: 768px) { header.fixed.top-0 { display: none !important; } }" : ""}
        ${injectCss || ""}
      `;
      doc.head.appendChild(style);
    }
  };

  useEffect(() => {
    let cancelled = false;
    const tick = () => {
      if (cancelled) return;
      injectStyles();
    };
    const id = window.setInterval(tick, 400);
    tick();
    return () => {
      cancelled = true;
      window.clearInterval(id);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [injectCss]);

  return (
    <>
      {showTopNav && (
        <div className="hidden md:block">
          <TopNav activeTab={activeTab} />
        </div>
      )}
      <iframe
        ref={iframeRef}
        src={src}
        onLoad={injectStyles}
        title={title}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100dvh",
          border: "none",
          zIndex: 0,
        }}
      />
      <MobileBottomNav defaultActive={bottomNavActive as any} />
    </>
  );
}
