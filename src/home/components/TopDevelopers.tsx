import { useState } from "react";
import { Link } from "@tanstack/react-router";

const developers = [
  {
    id: 1,
    logo: 'https://property.p2s.ai/api/developers/1/public-logo',
    bgImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDWiQMYWH6fTjFHirMA7o0iHwr2uRssMkCbft-VOqDYnb072_he4tnLMMrzGoMYyItcXvYQ20XaY4MJlUnHL-UA-5oIwFmC-ky8T4mL9tgL48QyuXeQpQ8ftYvnjyd2EjlD6gmvOGe2S96A7hJU9fcZ7Fm9FNew4KymTZFcAEWjLLjZapiCk5_OjmPxWhgPIU0fUNhpoDiQ-t_vJMI5M-j7C5kD-sEAe9F6dXmnMsKKL6VbpISPNPeqSgCJmlUnw_2yEORSqoKIDnI',
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
    bgImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCJJYt2r8z4Di1J551sTQjooDDcq_YxZg3tj5Taryq9_Bac-ifLxmGj5ejDMqePw8W4Gsf7QIS-YGPGZ2FjbTvgWOniFlEvCZPqSH66KsuK9ICHbCTaLcKhqyCnfrPhHKOm6SzFDjauXWk7yCEodWy5bu0q__-dmUwMwRfaJpBtYoc5Q4rZTgkk00XYmL53ZV3-Jwhl2Xja8PusyQXkipZH0-1L0_CM5pwng4N9zstSKLzQtJV7F8kPWgDBCfQiB7yStvraM_G9C7M',
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
    bgImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCJJYt2r8z4Di1J551sTQjooDDcq_YxZg3tj5Taryq9_Bac-ifLxmGj5ejDMqePw8W4Gsf7QIS-YGPGZ2FjbTvgWOniFlEvCZPqSH66KsuK9ICHbCTaLcKhqyCnfrPhHKOm6SzFDjauXWk7yCEodWy5bu0q__-dmUwMwRfaJpBtYoc5Q4rZTgkk00XYmL53ZV3-Jwhl2Xja8PusyQXkipZH0-1L0_CM5pwng4N9zstSKLzQtJV7F8kPWgDBCfQiB7yStvraM_G9C7M',
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
    bgImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB_c0rDlgxH4R1st573_bhV8KJvU93qnXiGb2zDcHCvGLQYDkr_GHlB_fAOF8mOrkxopyuJMbq82tsH0jY3yL5nKUrbjsa0akjy6HB215x4yM2z0H9-bYl0bltCUBIxBK5fWFvL7wOxGAdk7Cqsf5-P__kmFU2QhtXYCc1PihVnCxzKTWWc1-ZaMqvtAthrkmgPH2I5Oe-iTNexMG-mnVQO7plPl2rovqvV5giiYHt5nbBM7aCD-6FgTyDnJglP8ZmEBAAHrNQIhqk',
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
    <Link
      to={dev.profileHref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: '#ffffff',
        border: `1px solid ${hovered ? 'rgba(245,158,11,0.4)' : 'rgba(226,232,240,0.8)'}`,
        borderRadius: 12,
        boxShadow: hovered ? '0 10px 25px -5px rgba(0,0,0,0.1)' : '0 1px 3px rgba(0,0,0,0.06)',
        transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
        transition: 'all 0.3s ease',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        textDecoration: 'none',
        cursor: 'pointer',
        height: '100%',
      }}
    >
      {/* Top glassmorphed section with background image */}
      <div style={{ position: 'relative', padding: 24, overflow: 'hidden' }}>
        <img
          src={dev.bgImage}
          alt={`${dev.name} project`}
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transform: hovered ? 'scale(1.05)' : 'scale(1)',
            transition: 'transform 0.5s ease',
          }}
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to top, #ffffff 0%, rgba(255,255,255,0.8) 50%, rgba(255,255,255,0.1) 100%)',
            backdropFilter: 'blur(1.5px)',
            WebkitBackdropFilter: 'blur(1.5px)',
          }}
        />
        <div style={{ position: 'relative', zIndex: 1 }}>
          <div className="flex justify-between items-start gap-2" style={{ marginBottom: 16 }}>
            <div style={{ width: 48, height: 48, borderRadius: 8, background: '#ffffff', border: '1px solid rgba(226,232,240,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 6, flexShrink: 0, boxShadow: '0 1px 2px rgba(0,0,0,0.05)' }}>
              <img src={dev.logo} alt={`${dev.name} logo`} style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
            </div>
            <span style={{ background: 'rgba(255,255,255,0.8)', backdropFilter: 'blur(4px)', WebkitBackdropFilter: 'blur(4px)', color: '#334155', fontSize: 10, padding: '4px 10px', borderRadius: 4, fontFamily: 'Inter, sans-serif', fontWeight: 700, border: '1px solid rgba(226,232,240,0.5)', flexShrink: 0, boxShadow: '0 1px 2px rgba(0,0,0,0.05)' }}>{dev.projectCount}</span>
          </div>
          <div>
            <h3 style={{ fontFamily: 'Outfit, sans-serif', fontSize: 15, fontWeight: 800, color: hovered ? '#F59E0B' : '#0F172A', transition: 'color 0.2s', marginBottom: 4 }}>{dev.name}</h3>
            <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 10, color: '#334155', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em' }}>{dev.founded}</span>
          </div>
        </div>
      </div>

      {/* Bottom section */}
      <div style={{ padding: 24, background: '#ffffff', flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', borderTop: '1px solid #f1f5f9' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
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
        </div>
        <div style={{ borderTop: '1px solid #f1f5f9', paddingTop: 20, marginTop: 20, display: 'flex', justifyContent: 'center' }}>
          <span
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 4,
              color: hovered ? '#d97706' : '#F59E0B',
              fontSize: 10,
              fontWeight: 800,
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              fontFamily: 'Inter, sans-serif',
              transition: 'color 0.2s',
            }}
          >
            Explore
            <span className="material-symbols-outlined" style={{ fontSize: 14 }}>arrow_forward</span>
          </span>
        </div>
      </div>
    </Link>
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
