import { useState } from "react";

const tabs = [
  { id: 'home', label: 'Home', icon: 'home', href: '/' },
  { id: 'search', label: 'Search', icon: 'search' },
  { id: 'saved', label: 'Saved', icon: 'bookmark' },
  { id: 'profile', label: 'Profile', icon: 'person' },
] as { id: string; label: string; icon: string; href?: string }[];

export function MobileBottomNav({ defaultActive = 'home' }: { defaultActive?: string | null } = {}) {
  const [active, setActive] = useState<string | null>(defaultActive);

  return (
    <div
      className="md:hidden fixed left-0 right-0 z-40 pointer-events-none"
      style={{
        bottom: 0,
        padding: '0 12px 12px',
        paddingBottom: 'calc(12px + env(safe-area-inset-bottom))',
      }}
    >
      <nav
        className="pointer-events-auto mx-auto"
        style={{
          maxWidth: 460,
          background: 'rgba(255,255,255,0.92)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          border: '1px solid rgba(226,232,240,0.9)',
          borderRadius: 20,
          boxShadow: '0 16px 40px -8px rgba(15,23,42,0.18), 0 2px 6px rgba(15,23,42,0.04)',
          padding: '8px 10px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 4,
        }}
      >
        {tabs.map((tab) => {
          const isActive = active === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => {
                if (tab.href) {
                  window.location.href = tab.href;
                } else {
                  setActive(tab.id);
                }
              }}
              className="flex flex-col items-center justify-center flex-1 relative"
              style={{
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
                minHeight: 52,
                padding: '4px 0',
                gap: 2,
                transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
              }}
            >
              <span
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: isActive ? 56 : 40,
                  height: 30,
                  borderRadius: 14,
                  background: isActive ? 'rgba(245,158,11,0.14)' : 'transparent',
                  transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
                }}
              >
                <span
                  className="material-symbols-outlined"
                  style={{
                    fontSize: 22,
                    color: isActive ? '#F59E0B' : '#64748b',
                    fontVariationSettings: isActive ? "'FILL' 1, 'wght' 600, 'GRAD' 100, 'opsz' 24" : "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24",
                    transition: 'color 0.2s ease, font-variation-settings 0.2s ease',
                  }}
                >
                  {tab.icon}
                </span>
              </span>
              <span
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: 10,
                  fontWeight: isActive ? 800 : 600,
                  color: isActive ? '#0F172A' : '#94a3b8',
                  letterSpacing: '0.02em',
                  transition: 'color 0.2s ease',
                }}
              >
                {tab.label}
              </span>
            </button>
          );
        })}
      </nav>
    </div>
  );
}
