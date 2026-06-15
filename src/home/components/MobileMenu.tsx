import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
  activeTab?: string;
}

const primaryLinks = [
  { label: 'Home', icon: 'home', href: '/' },
  { label: 'AI Search', icon: 'auto_awesome', href: '/search' },
  { label: 'Compare', icon: 'compare_arrows', href: '#' },
];

const searchSubLinks = [
  { label: 'Projects', href: '/directories' },
  { label: 'Micro Markets', href: '/micro-market' },
  { label: 'Developers', href: '/developer-scorecards' },
];

export function MobileMenu({ open, onClose, activeTab = 'Home' }: MobileMenuProps) {
  const [searchExpanded, setSearchExpanded] = useState(false);

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
          <Link to="/" style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, fontSize: 20, color: '#ffffff', textDecoration: 'none' }}>
            prOPIUM<span style={{ color: '#F59E0B' }}>.ai</span>
          </Link>
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
                <Link
                  key={link.label}
                  to={link.href}
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
                </Link>
              );
            })}

            {/* Search expandable section */}
            <div style={{ marginBottom: 2 }}>
              <button
                onClick={() => setSearchExpanded((v) => !v)}
                className="flex items-center gap-3 w-full"
                style={{
                  padding: '14px 12px',
                  borderRadius: 10,
                  color: activeTab === 'Search' ? '#F59E0B' : '#e2e8f0',
                  background: activeTab === 'Search' ? 'rgba(245,158,11,0.1)' : 'transparent',
                  fontFamily: 'Inter, sans-serif',
                  fontSize: 14,
                  fontWeight: activeTab === 'Search' ? 700 : 500,
                  border: 'none',
                  cursor: 'pointer',
                  minHeight: 44,
                  display: 'flex',
                  alignItems: 'center',
                  textAlign: 'left',
                }}
              >
                <span className="material-symbols-outlined" style={{ fontSize: 22, color: activeTab === 'Search' ? '#F59E0B' : '#94a3b8' }}>search</span>
                Search
                <span
                  className="material-symbols-outlined"
                  style={{
                    marginLeft: 'auto',
                    fontSize: 18,
                    transition: 'transform 0.2s ease',
                    transform: searchExpanded ? 'rotate(180deg)' : 'rotate(0deg)',
                    color: activeTab === 'Search' ? '#F59E0B' : '#94a3b8',
                  }}
                >
                  expand_more
                </span>
              </button>
              {searchExpanded && (
                <div style={{ paddingLeft: 46 }}>
                  {searchSubLinks.map((sub) => (
                    <Link
                      key={sub.label}
                      to={sub.href}
                      onClick={onClose}
                      style={{
                        display: 'block',
                        padding: '10px 12px',
                        borderRadius: 8,
                        color: '#cbd5e1',
                        fontFamily: 'Inter, sans-serif',
                        fontSize: 13,
                        fontWeight: 500,
                        textDecoration: 'none',
                      }}
                      onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = '#F59E0B'; }}
                      onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = '#cbd5e1'; }}
                    >
                      {sub.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
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
