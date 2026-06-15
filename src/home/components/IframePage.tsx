import { useRef } from "react";
import { TopNav } from "./TopNav";
import { MobileBottomNav } from "./MobileBottomNav";

interface IframePageProps {
  src: string;
  title: string;
  bottomNavActive?: string | null;
}

export function IframePage({ src, title, bottomNavActive = null }: IframePageProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const handleLoad = () => {
    const doc = iframeRef.current?.contentDocument;
    if (!doc) return;
    if (doc.getElementById("__propium_hide_header")) return;
    const style = doc.createElement("style");
    style.id = "__propium_hide_header";
    style.textContent = `@media (min-width: 768px) { header.fixed.top-0 { display: none !important; } }`;
    doc.head.appendChild(style);
  };

  return (
    <>
      <div className="hidden md:block">
        <TopNav activeTab="Search" />
      </div>
      <iframe
        ref={iframeRef}
        src={src}
        onLoad={handleLoad}
        title={title}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          border: "none",
        }}
      />
      <MobileBottomNav defaultActive={bottomNavActive as any} />
    </>
  );
}
