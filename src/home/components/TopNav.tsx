import { useState, useRef, useEffect } from "react";
import { Link } from "@tanstack/react-router";
import { MobileMenu } from "./MobileMenu";

interface TopNavProps {
  activeTab?: string;
}

export function TopNav({ activeTab = 'Home' }: TopNavProps = {}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const dropdownTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleMouseEnter = () => {
    if (dropdownTimerRef.current) clearTimeout(dropdownTimerRef.current);
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    dropdownTimerRef.current = setTimeout(() => setDropdownOpen(false), 150);
  };

  const mainLinks = [
    { label: 'Home', href: '/', beta: false },
    { label: 'AI Search', href: '/search', beta: true },
    { label: 'Compare', href: '#', beta: false },
  ];

  const searchDropdownItems = [
    { label: 'Projects', href: '/directories' },
    { label: 'Micro Markets', href: '/micro-market' },
    { label: 'Developers', href: '/developer-scorecards' },
  ];

  const isSearchActive = activeTab === 'Search';

  return (
    <>
      <header className="fixed top-0 w-full z-40 backdrop-blur-md border-b border-white/10 shadow-sm text-white" style={{ background: 'rgba(15,23,42,0.85)' }}>
        <div className="flex justify-between items-center h-16 mx-auto px-4 md:px-8 lg:px-10 xl:px-16 gap-4" style={{ maxWidth: 1280 }}>
          <div className="flex items-center gap-6 flex-shrink-0">
            <Link to="/" className="flex items-center gap-1 font-bold text-xl tracking-tight text-white hover:opacity-90" style={{ fontFamily: 'Outfit, sans-serif' }}>
              prOPIUM<span style={{ color: '#F59E0B' }}>.ai</span>
            </Link>
          </div>
          <nav className="hidden md:flex gap-8 items-center">
            {mainLinks.map((item) => {
              const active = item.label === activeTab;
              return (
                <Link
                  key={item.label}
                  to={item.href}
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
                </Link>
              );
            })}

            {/* Search Dropdown */}
            <div
              ref={dropdownRef}
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button
                className="transition-colors flex items-center gap-1 cursor-pointer bg-transparent border-none"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: 12,
                  fontWeight: 600,
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase',
                  color: isSearchActive ? '#ffffff' : '#cbd5e1',
                  borderBottom: isSearchActive ? '2px solid #F59E0B' : 'none',
                  paddingBottom: isSearchActive ? 4 : 0,
                }}
                onMouseEnter={(e) => { if (!isSearchActive) (e.currentTarget as HTMLElement).style.color = '#ffffff'; }}
                onMouseLeave={(e) => { if (!isSearchActive) (e.currentTarget as HTMLElement).style.color = '#cbd5e1'; }}
              >
                Search
                <span
                  className="material-symbols-outlined"
                  style={{
                    fontSize: 14,
                    transition: 'transform 0.2s ease',
                    transform: dropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                  }}
                >
                  expand_more
                </span>
              </button>
              {dropdownOpen && (
                <div
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-2 py-2 rounded-xl border"
                  style={{
                    background: 'rgba(15,23,42,0.95)',
                    borderColor: 'rgba(255,255,255,0.1)',
                    backdropFilter: 'blur(12px)',
                    minWidth: 180,
                    boxShadow: '0 20px 50px rgba(0,0,0,0.4)',
                  }}
                >
                  {searchDropdownItems.map((item) => (
                    <Link
                      key={item.label}
                      to={item.href}
                      className="block px-4 py-2.5 transition-colors"
                      style={{
                        fontFamily: 'Inter, sans-serif',
                        fontSize: 13,
                        fontWeight: 500,
                        color: '#e2e8f0',
                        whiteSpace: 'nowrap',
                      }}
                      onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = '#F59E0B'; (e.currentTarget as HTMLElement).style.background = 'rgba(245,158,11,0.08)'; }}
                      onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = '#e2e8f0'; (e.currentTarget as HTMLElement).style.background = 'transparent'; }}
                      onClick={() => setDropdownOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
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
