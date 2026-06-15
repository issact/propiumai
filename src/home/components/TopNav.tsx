import { useState } from "react";
import { MobileMenu } from "./MobileMenu";

export function TopNav({ activeTab = 'Home' }: { activeTab?: string } = {}) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 w-full z-40 backdrop-blur-md border-b border-white/10 shadow-sm text-white" style={{ background: 'rgba(15,23,42,0.85)' }}>
        <div className="flex justify-between items-center h-16 mx-auto px-4 md:px-8 lg:px-10 xl:px-16 gap-4" style={{ maxWidth: 1280 }}>
          <div className="flex items-center gap-6 flex-shrink-0">
            <a href="/" className="flex items-center gap-1 font-bold text-xl tracking-tight text-white hover:opacity-90" style={{ fontFamily: 'Outfit, sans-serif' }}>
              prOPIUM<span style={{ color: '#F59E0B' }}>.ai</span>
            </a>
          </div>
          <nav className="hidden md:flex gap-8 items-center">
            {[
              { label: 'Home', href: '/', beta: false },
              { label: 'AI Search', href: '/search', beta: true },
              { label: 'Search', href: '/directories', beta: false },
              { label: 'Compare', href: '#', beta: false },
            ].map((item) => {
              const active = item.label === activeTab;
              return (
              <a
                key={item.label}
                href={item.href}
                className="transition-colors flex items-center gap-1"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: 12,
                  fontWeight: 600,
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase',
                  color: active ? '#ffffff' : '#cbd5e1',
                  borderBottom: active ? '2px solid #F59E0B' : 'none',
                  paddingBottom: active ? 4 : 0,
                }}
                onMouseEnter={(e) => { if (!active) (e.currentTarget as HTMLElement).style.color = '#ffffff'; }}
                onMouseLeave={(e) => { if (!active) (e.currentTarget as HTMLElement).style.color = '#cbd5e1'; }}
              >
                {item.label}
                {item.beta && (
                  <span style={{ fontSize: 9, background: 'rgba(245,158,11,0.2)', color: '#F59E0B', padding: '2px 8px', borderRadius: 999, fontWeight: 700 }}>BETA</span>
                )}
              </a>
              );
            })}
          </nav>
          <div className="flex items-center gap-2">
            <div className="hidden md:flex items-center gap-2 px-3.5 py-1.5 rounded-full text-white" style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.1)' }}>
              <span className="material-symbols-outlined" style={{ fontSize: 18 }}>account_circle</span>
              <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, fontWeight: 500 }}>Sahil Rajan</span>
            </div>
            {/* Mobile hamburger */}
            <button
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
              className="md:hidden flex items-center justify-center"
              style={{
                width: 40,
                height: 40,
                borderRadius: 8,
                background: 'rgba(255,255,255,0.08)',
                border: '1px solid rgba(255,255,255,0.1)',
                color: '#ffffff',
                cursor: 'pointer',
              }}
            >
              <span className="material-symbols-outlined" style={{ fontSize: 22 }}>menu</span>
            </button>
          </div>
        </div>
      </header>
      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} activeTab={activeTab} />
    </>
  );
}
