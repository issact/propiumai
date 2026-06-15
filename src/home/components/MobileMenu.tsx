import { useEffect } from "react";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
  activeTab?: string;
}

const primaryLinks = [
  { label: 'Home', icon: 'home', href: '/' },
  { label: 'AI Search', icon: 'auto_awesome', href: '#' },
  { label: 'Search', icon: 'search', href: '/search' },
  { label: 'Compare', icon: 'compare_arrows', href: '#' },
];

export function MobileMenu({ open, onClose, activeTab = 'Home' }: MobileMenuProps) {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <>
      <div
        onClick={onClose}
        className="md:hidden fixed inset-0 z-50"
        style={{
          background: 'rgba(2,6,23,0.6)',
          backdropFilter: 'blur(4px)',
          opacity: open ? 1 : 0,
          pointerEvents: open ? 'auto' : 'none',
          transition: 'opacity 0.25s ease',
        }}
      />
      <aside
        className="md:hidden fixed top-0 right-0 bottom-0 z-50 flex flex-col"
        style={{
          width: 'min(82vw, 320px)',
          background: '#0F172A',
          borderLeft: '1px solid rgba(255,255,255,0.08)',
          transform: open ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
          boxShadow: '-20px 0 50px rgba(0,0,0,0.5)',
        }}
      >
        <div
          className="flex items-center justify-between"
          style={{ padding: '20px', borderBottom: '1px solid rgba(255,255,255,0.08)' }}
        >
          <a href="/" style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, fontSize: 20, color: '#ffffff', textDecoration: 'none' }}>
            prOPIUM<span style={{ color: '#F59E0B' }}>.ai</span>
          </a>
          <button
            onClick={onClose}
            aria-label="Close menu"
            style={{
              width: 40, height: 40, borderRadius: 8,
              background: 'rgba(255,255,255,0.06)',
              border: '1px solid rgba(255,255,255,0.08)',
              color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center',
              cursor: 'pointer',
            }}
          >
            <span className="material-symbols-outlined" style={{ fontSize: 22 }}>close</span>
          </button>
        </div>

        <nav style={{ padding: '16px 12px', flex: 1, overflowY: 'auto', display: 'flex', flexDirection: 'column' }}>
          <div style={{ flex: 1 }}>
            {primaryLinks.map((link) => {
              const active = link.label === activeTab;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={onClose}
                  className="flex items-center gap-3"
                  style={{
                    padding: '14px 12px',
                    borderRadius: 10,
                    color: active ? '#F59E0B' : '#e2e8f0',
                    background: active ? 'rgba(245,158,11,0.1)' : 'transparent',
                    fontFamily: 'Inter, sans-serif',
                    fontSize: 14,
                    fontWeight: active ? 700 : 500,
                    textDecoration: 'none',
                    minHeight: 44,
                    marginBottom: 2,
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <span className="material-symbols-outlined" style={{ fontSize: 22, color: active ? '#F59E0B' : '#94a3b8' }}>{link.icon}</span>
                  {link.label}
                  {active && <span style={{ marginLeft: 'auto', width: 6, height: 6, borderRadius: '50%', background: '#F59E0B' }} />}
                </a>
              );
            })}
          </div>

          <div style={{ paddingTop: 16, borderTop: '1px solid rgba(255,255,255,0.08)', display: 'flex', flexDirection: 'column', gap: 10, paddingBottom: 8 }}>
            <button
              style={{
                background: '#F59E0B',
                color: '#0F172A',
                border: 'none',
                borderRadius: 10,
                padding: '13px 16px',
                fontFamily: 'Inter, sans-serif',
                fontSize: 14,
                fontWeight: 700,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 8,
                minHeight: 48,
              }}
            >
              <span className="material-symbols-outlined" style={{ fontSize: 20 }}>mail</span>
              Enquiry
            </button>
            <button
              style={{
                background: 'rgba(255,255,255,0.06)',
                color: '#94a3b8',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: 10,
                padding: '13px 16px',
                fontFamily: 'Inter, sans-serif',
                fontSize: 14,
                fontWeight: 600,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 8,
                minHeight: 48,
              }}
            >
              <span className="material-symbols-outlined" style={{ fontSize: 20 }}>call</span>
              Call Us
            </button>
          </div>
        </nav>
      </aside>
    </>
  );
}
