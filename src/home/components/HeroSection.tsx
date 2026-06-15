import { useState } from "react";
import buildingImg from "@/assets/hero-building.png";

const metrics = [
  { value: '3L+', label: 'Units Mapped' },
  { value: '619', label: 'Projects Covered' },
  { value: '155', label: 'Developers Profiled' },
  { value: '9', label: 'Micro-Markets Mapped' },
];

const categories = [
  { id: 'projects', label: 'Projects' },
  { id: 'micro-markets', label: 'Micro Markets' },
  { id: 'developers', label: 'Developers' },
];

export function HeroSection() {
  const [category, setCategory] = useState('projects');

  return (
    <>
      {/* ===================== MOBILE HERO ===================== */}
      <section className="md:hidden w-full relative overflow-hidden" style={{ background: '#0B1120', paddingTop: 104, paddingBottom: 36 }}>
        <div className="absolute inset-0 z-0" style={{ pointerEvents: 'none' }}>
          <img
            src={buildingImg}
            alt=""
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center top',
            }}
          />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(11,15,25,0.82) 0%, rgba(11,15,25,0.75) 50%, rgba(11,15,25,0.90) 100%)' }} />
        </div>
        <div className="relative z-10 px-4">
          <h1
            className="text-center"
            style={{ fontFamily: 'Outfit, sans-serif', fontSize: 'clamp(24px, 6.5vw, 32px)', lineHeight: 1.15, letterSpacing: '-0.02em', fontWeight: 800, color: '#ffffff', marginBottom: 28 }}
          >
            Real Estate, Audited. <span style={{ color: '#F59E0B' }}>No Sales Pitches.</span>
          </h1>
          <div style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 16, padding: '16px 16px 20px', backdropFilter: 'blur(12px)' }}>
  <div
    className="flex items-center w-full min-w-0"
    style={{
      background: '#ffffff',
      border: '2px solid #F59E0B',
      borderRadius: 999,
      padding: '4px 4px 4px 16px',
      boxShadow: '0 4px 24px rgba(245,158,11,0.15)',
    }}
  >
    <span className="material-symbols-outlined flex-shrink-0" style={{ color: '#F59E0B', fontSize: 18, marginRight: 8 }}>auto_awesome</span>
    <input
      type="text"
      placeholder="AI Search"
      className="bg-transparent border-none focus:outline-none min-w-0 flex-1"
      style={{ fontFamily: 'Inter, sans-serif', fontSize: 14, color: '#0F172A', minHeight: 40, width: '100%' }}
    />
    <button
      aria-label="Search"
      style={{ background: '#F59E0B', color: '#0F172A', width: 44, height: 44, borderRadius: '50%', border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', flexShrink: 0 }}
    >
      <span className="material-symbols-outlined" style={{ fontSize: 22 }}>search</span>
    </button>
  </div>
</div>
        </div>
      </section>

      {/* ===================== DESKTOP HERO ===================== */}
      <section
        className="hidden md:flex relative items-center overflow-hidden w-full"
        style={{ background: '#0B0F19', minHeight: '92vh', paddingTop: 96, paddingBottom: 80 }}
      >
        {/* Background image */}
        <div className="absolute inset-0 z-0" style={{ pointerEvents: 'none' }}>
          <img
            src={buildingImg}
            alt=""
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: '70% 15%', /* focus on right side skyline, upper portion */
            }}
          />
          {/* Strong dark fade on left for text — clears to show city on right */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to right, #0B0F19 0%, #0B0F19 20%, rgba(11,15,25,0.92) 35%, rgba(11,15,25,0.6) 55%, rgba(11,15,25,0.25) 75%, rgba(11,15,25,0.15) 100%)',
            }}
          />
          {/* Top vignette so sky blends into navbar */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to bottom, rgba(11,15,25,0.7) 0%, transparent 20%, transparent 80%, rgba(11,15,25,0.5) 100%)',
            }}
          />
        </div>

        <div className="relative z-10 w-full mx-auto px-8 lg:px-10 xl:px-16" style={{ maxWidth: 1280 }}>
          <div className="grid grid-cols-12 gap-8 items-center">
            {/* Left Column */}
            <div className="col-span-7 space-y-6 text-white">
              <h1 style={{ fontFamily: 'Outfit, sans-serif', fontSize: 'clamp(32px, 4vw, 48px)', lineHeight: 1.1, letterSpacing: '-0.03em', fontWeight: 800, color: '#ffffff', maxWidth: 640 }}>
                Real Estate, Audited. <br />
                <span style={{ color: '#F59E0B' }}>No Sales Pitches.</span>
              </h1>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 'clamp(15px, 1.4vw, 18px)', lineHeight: 1.6, color: '#cbd5e1', maxWidth: 520 }}>
                Search independent builder ratings, construction timelines, and carpet area margins across Gurgaon's premium developments.
              </p>

              {/* Search Console */}
<div style={{ maxWidth: 640 }}>
  <div
    className="flex items-center w-full"
    style={{
      background: '#ffffff',
      border: '2px solid #F59E0B',
      borderRadius: 999,
      padding: '4px 4px 4px 16px',
      boxShadow: '0 4px 24px rgba(245,158,11,0.15)',
    }}
  >
    <span className="material-symbols-outlined flex-shrink-0" style={{ color: '#F59E0B', fontSize: 20, marginRight: 8 }}>auto_awesome</span>
    <input
      type="text"
      placeholder="AI Search"
      className="bg-transparent border-none focus:outline-none flex-1 min-w-0"
      style={{ fontFamily: 'Inter, sans-serif', fontSize: 15, color: '#0F172A', minHeight: 44 }}
    />
    <button
      aria-label="Search"
      style={{ background: '#F59E0B', color: '#0F172A', width: 48, height: 48, borderRadius: '50%', border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', flexShrink: 0 }}
      onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = '#d97706'; }}
      onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = '#F59E0B'; }}
    >
      <span className="material-symbols-outlined" style={{ fontSize: 22 }}>search</span>
    </button>
  </div>
</div>

              {/* Scale Metrics */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16, background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', backdropFilter: 'blur(12px)', borderRadius: 12, padding: 16, maxWidth: 640, marginTop: 48 }}>
                {metrics.map((m, i) => (
                  <div key={m.label} className="text-center" style={{ borderRight: i < 3 ? '1px solid rgba(255,255,255,0.1)' : 'none', paddingRight: i < 3 ? 8 : 0, paddingLeft: i > 0 ? 8 : 0 }}>
                    <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 24, fontWeight: 800, color: '#F59E0B', display: 'block' }}>{m.value}</span>
                    <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 8, fontWeight: 700, color: 'rgba(255,255,255,0.6)', textTransform: 'uppercase', letterSpacing: '0.15em', display: 'block' }}>{m.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Featured Card */}
            <div className="col-span-5">
              <div style={{ background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(20px)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: 12, padding: 32, boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5)', color: '#ffffff' }}>
                <div className="flex justify-between items-center" style={{ marginBottom: 24 }}>
                  <span style={{ background: 'rgba(245,158,11,0.2)', color: '#F59E0B', fontSize: 10, fontWeight: 700, padding: '4px 12px', borderRadius: 4, textTransform: 'uppercase', letterSpacing: '0.1em', fontFamily: 'Inter, sans-serif' }}>
                    Under Construction
                  </span>
                  <div className="flex items-center gap-2.5" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', padding: '6px 12px', borderRadius: 8 }}>
                    <div className="relative flex items-center justify-center flex-shrink-0" style={{ width: 32, height: 32 }}>
                      <svg width="32" height="32" viewBox="0 0 36 36" style={{ transform: 'rotate(-90deg)' }}>
                        <circle cx="18" cy="18" r="16" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="3" />
                        <circle cx="18" cy="18" r="16" fill="none" stroke="#F59E0B" strokeWidth="3" strokeDasharray="54 100" strokeLinecap="round" />
                      </svg>
                      <span style={{ position: 'absolute', fontSize: 11, fontWeight: 700, fontFamily: 'Inter, sans-serif', color: '#ffffff' }}>54</span>
                    </div>
                    <div>
                      <span style={{ fontSize: 9, color: '#cbd5e1', display: 'block', textTransform: 'uppercase', fontWeight: 700, letterSpacing: '0.15em', lineHeight: 1, marginBottom: 2, fontFamily: 'Inter, sans-serif' }}>Trust Score</span>
                      <span style={{ fontSize: 12, fontWeight: 700, color: '#ffffff', lineHeight: 1, fontFamily: 'Inter, sans-serif' }}>Fair</span>
                    </div>
                  </div>
                </div>

                <div style={{ marginBottom: 24 }}>
                  <h3 style={{ fontFamily: 'Outfit, sans-serif', fontSize: 24, fontWeight: 700, color: '#ffffff', lineHeight: 1.4 }}>DLF Privana North</h3>
                  <p className="flex items-center gap-1.5" style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, color: '#cbd5e1', marginTop: 4 }}>
                    <span className="material-symbols-outlined" style={{ fontSize: 16, color: '#F59E0B' }}>location_on</span>
                    Sector 76, Gurgaon
                  </p>
                </div>
                <hr style={{ borderColor: 'rgba(255,255,255,0.1)', marginBottom: 24 }} />

                <div className="grid grid-cols-12 gap-6 items-center">
                  <div className="col-span-6 flex justify-center py-2">
                    <div style={{ width: '100%', maxWidth: 260, userSelect: 'none' }}>
                      <svg viewBox="-50 -9 185 116" style={{ width: '100%', height: 'auto' }}>
                        <circle cx="50" cy="50" r="48" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.15)" strokeWidth="0.5" />
                        <circle cx="50" cy="50" r="36" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
                        <circle cx="50" cy="50" r="24" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
                        <circle cx="50" cy="50" r="12" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
                        <line x1="50" y1="2" x2="50" y2="98" stroke="rgba(255,255,255,0.15)" strokeWidth="0.5" />
                        <line x1="2" y1="50" x2="98" y2="50" stroke="rgba(255,255,255,0.15)" strokeWidth="0.5" />
                        <polygon fill="rgba(255,255,255,0.15)" points="50,23.1 84.6,50 50,92.2 17.4,50" stroke="#F59E0B" strokeWidth="1.5" />
                        <circle cx="50" cy="23.1" r="2.5" fill="#F59E0B" />
                        <circle cx="84.6" cy="50" r="2.5" fill="#F59E0B" />
                        <circle cx="50" cy="92.2" r="2.5" fill="#F59E0B" />
                        <circle cx="17.4" cy="50" r="2.5" fill="#F59E0B" />
                        <text style={{ fontSize: 6.5, fill: 'rgba(255,255,255,0.8)', fontWeight: 'bold', textTransform: 'uppercase' }} textAnchor="middle" x="50" y="-1">PRODUCT</text>
                        <text style={{ fontSize: 6.5, fill: 'rgba(255,255,255,0.8)', fontWeight: 'bold', textTransform: 'uppercase' }} textAnchor="start" x="101" y="52">LOCATION</text>
                        <text style={{ fontSize: 6.5, fill: 'rgba(255,255,255,0.8)', fontWeight: 'bold', textTransform: 'uppercase' }} textAnchor="middle" x="50" y="103">BUILDER</text>
                        <text style={{ fontSize: 6.5, fill: 'rgba(255,255,255,0.8)', fontWeight: 'bold', textTransform: 'uppercase' }} textAnchor="end" x="-1" y="52">INVESTMENT</text>
                      </svg>
                    </div>
                  </div>
                  <div className="col-span-6 space-y-2.5" style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, whiteSpace: 'nowrap' }}>
                    {[
                      { label: 'Price', value: '₹6.2Cr – ₹9.5Cr' },
                      { label: 'Market', value: 'Super Luxury' },
                      { label: 'Units', value: '1,164 Units' },
                      { label: 'Builder', value: 'DLF Limited' },
                      { label: 'Unit mix', value: '4 BHK/Penthouse' },
                      { label: 'Site area', value: '17.7 Acres' },
                    ].map((row, i, arr) => (
                      <div key={row.label} className="flex justify-between py-1.5" style={{ borderBottom: i < arr.length - 1 ? '1px solid rgba(255,255,255,0.05)' : 'none' }}>
                        <span style={{ color: '#cbd5e1' }}>{row.label}</span>
                        <span style={{ fontWeight: 700, color: '#ffffff' }}>{row.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <hr style={{ borderColor: 'rgba(255,255,255,0.1)', margin: '24px 0' }} />
                <div className="flex justify-center items-center">
                  <div className="flex items-center gap-2">
                    <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'rgba(255,255,255,0.3)', display: 'inline-block' }} />
                    <span style={{ width: 24, height: 6, borderRadius: 3, background: '#F59E0B', display: 'inline-block' }} />
                    <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'rgba(255,255,255,0.3)', display: 'inline-block' }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}