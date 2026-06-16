import { useState } from "react";
import { Link } from "@tanstack/react-router";

const developers = [
  {
    id: 1,
    logo: 'https://property.p2s.ai/api/developers/1/public-logo',
    name: 'DLF Limited',
    founded: 'Est. 1946',
    projectCount: '60 Projects',
    profileHref: '/developer-scorecards' as const,
    ready: { count: 37, pct: 62 },
    construction: { count: 7, pct: 12 },
    newLaunch: { count: 0, pct: 0 },
  },
  {
    id: 2,
    logo: 'https://property.p2s.ai/api/developers/219/public-logo',
    name: 'M3M India Pvt Ltd',
    founded: 'Est. 2010',
    projectCount: '24 Projects',
    profileHref: '/m3m-developer' as const,
    ready: { count: 14, pct: 58 },
    construction: { count: 10, pct: 42 },
    newLaunch: { count: 0, pct: 0 },
  },
  {
    id: 3,
    logo: 'https://property.p2s.ai/api/developers/330/public-logo',
    name: 'Emaar India',
    founded: 'Est. 2005',
    projectCount: '22 Projects',
    profileHref: '/developer-scorecards' as const,
    ready: { count: 16, pct: 73 },
    construction: { count: 5, pct: 23 },
    newLaunch: { count: 1, pct: 4 },
  },
  {
    id: 4,
    logo: 'https://property.p2s.ai/api/developers/204/public-logo',
    name: 'Conscient Infrastructure',
    founded: 'Est. 1990',
    projectCount: '6 Projects',
    profileHref: '/developer-scorecards' as const,
    ready: { count: 3, pct: 50 },
    construction: { count: 3, pct: 50 },
    newLaunch: { count: 0, pct: 0 },
  },
];

function DeveloperCard({ dev }: { dev: typeof developers[0] }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: '#ffffff',
        border: `1px solid ${hovered ? 'rgba(245,158,11,0.4)' : 'rgba(226,232,240,0.8)'}`,
        borderRadius: 12,
        padding: 24,
        boxShadow: hovered ? '0 10px 25px -5px rgba(0,0,0,0.1)' : '0 1px 3px rgba(0,0,0,0.06)',
        transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
        transition: 'all 0.3s ease',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        cursor: 'pointer',
      }}
    >
      <div style={{ marginBottom: 16 }}>
        <div className="flex justify-between items-start gap-2" style={{ marginBottom: 16 }}>
          <div style={{ width: 48, height: 48, borderRadius: 8, background: '#f8fafc', border: '1px solid #f1f5f9', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 6, flexShrink: 0 }}>
            <img src={dev.logo} alt={`${dev.name} logo`} style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
          </div>
          <span style={{ background: '#f1f5f9', color: '#334155', fontSize: 10, padding: '4px 10px', borderRadius: 4, fontFamily: 'Inter, sans-serif', fontWeight: 700, border: '1px solid #e2e8f0', flexShrink: 0 }}>{dev.projectCount}</span>
        </div>
        <div>
          <h3 style={{ fontFamily: 'Outfit, sans-serif', fontSize: 15, fontWeight: 800, color: hovered ? '#F59E0B' : '#0F172A', transition: 'color 0.2s', marginBottom: 4 }}>{dev.name}</h3>
          <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 10, color: '#64748b', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>{dev.founded}</span>
        </div>
      </div>
      <div style={{ borderTop: '1px solid #f1f5f9', paddingTop: 16, display: 'flex', flexDirection: 'column', gap: 16 }}>
        {[
          { label: 'Ready to Move In', color: '#10b981', count: dev.ready.count, pct: dev.ready.pct },
          { label: 'Under Construction', color: '#F59E0B', count: dev.construction.count, pct: dev.construction.pct },
          { label: 'New Launch', color: '#3b82f6', count: dev.newLaunch.count, pct: dev.newLaunch.pct },
        ].map((bar) => (
          <div key={bar.label}>
            <div className="flex justify-between items-center" style={{ fontFamily: 'Inter, sans-serif', fontSize: 10, color: '#475569', marginBottom: 4, fontWeight: 700 }}>
              <span className="flex items-center gap-1.5">
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: bar.color, display: 'inline-block' }} />
                {bar.label}
              </span>
              <span style={{ fontWeight: 800, color: '#0F172A' }}>{bar.count}</span>
            </div>
            <div style={{ width: '100%', background: '#f1f5f9', height: 6, borderRadius: 99, overflow: 'hidden' }}>
              <div style={{ background: bar.color, height: '100%', width: `${bar.pct}%`, borderRadius: 99 }} />
            </div>
          </div>
        ))}
        <div style={{ borderTop: '1px solid #f1f5f9', paddingTop: 12, marginTop: 0 }}>
          <Link
            to={dev.profileHref}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 4,
              color: hovered ? '#d97706' : '#F59E0B',
              fontSize: 10,
              fontWeight: 800,
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              fontFamily: 'Inter, sans-serif',
              transition: 'color 0.2s',
              textDecoration: 'none',
            }}
          >
            Explore
            <span className="material-symbols-outlined" style={{ fontSize: 14 }}>arrow_forward</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export function TopDevelopers() {
  return (
    <section style={{ marginBottom: 48 }}>
      <div className="flex flex-row justify-between items-center md:items-baseline gap-4" style={{ marginBottom: 20 }}>
        <div className="flex-1 min-w-0">
          <h2 style={{ fontFamily: 'Outfit, sans-serif', fontSize: 'clamp(22px, 4.5vw, 30px)', fontWeight: 700, color: '#0F172A', lineHeight: 1.3, marginBottom: 4 }}>Top Developers</h2>
          <p className="hidden md:block" style={{ fontFamily: 'Inter, sans-serif', fontSize: 14, color: '#64748b' }}>Builders we surface for depth of delivery data and verified project intelligence — open their project set in one click.</p>
        </div>
        <Link
          to="/developer-scorecards"
          className="md:hidden flex items-center gap-1 flex-shrink-0"
          style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, fontWeight: 800, color: '#F59E0B', textDecoration: 'none' }}
        >
          View All
          <span className="material-symbols-outlined" style={{ fontSize: 18 }}>arrow_forward</span>
        </Link>
        <Link
          to="/developer-scorecards"
          className="hidden md:inline-block transition-all"
          style={{
            border: '1px solid #cbd5e1',
            color: '#0F172A',
            padding: '10px 24px',
            borderRadius: 2,
            fontFamily: 'Inter, sans-serif',
            fontSize: 14,
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            background: 'transparent',
            cursor: 'pointer',
            whiteSpace: 'nowrap',
            textDecoration: 'none',
          }}
        >
          View All
        </Link>
      </div>
      <div
        style={{
          overflowX: 'auto',
          overflowY: 'visible',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          WebkitOverflowScrolling: 'touch',
        }}
        className="-mx-4 md:mx-0 [&::-webkit-scrollbar]:hidden md:overflow-visible"
      >
        <div
          style={{ display: 'flex', gap: 16, width: 'max-content' }}
          className="pl-4 pr-4 md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-8 md:w-auto md:px-0"
        >
          {developers.map((d) => (
            <div
              key={d.id}
              style={{ width: '72vw', maxWidth: 300, flexShrink: 0 }}
              className="snap-start md:w-auto md:max-w-none"
            >
              <DeveloperCard dev={d} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
