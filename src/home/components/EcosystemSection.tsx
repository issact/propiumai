import { useState } from "react";

const audiences = [
  {
    id: 1,
    icon: 'handshake',
    tag: 'For Channel Partners & Wealth Managers',
    title: 'Pitch with Audited Authority.',
    desc: 'Deliver institutional-grade diligence reports to clients. Eliminate speculation, build trust, and close high-value transactions faster.',
    features: ['Cross-client portfolio overview', 'Side-by-side project comparison', 'White-labeled audit reports'],
  },
  {
    id: 2,
    icon: 'person',
    tag: 'For Buyers & Investors',
    title: 'Buy with Complete Control.',
    desc: 'Cut through broker noise and unverified listings. Rely on checked carpet areas, builder track records, and independent ratings.',
    features: ['Real price search, not BSP', 'RERA and physical audit checks', 'Hidden risk signals detection'],
  },
  {
    id: 3,
    icon: 'corporate_fare',
    tag: 'For Developers & Institutional',
    title: 'Market Intel at Speed.',
    desc: 'Monitor micro-market demand signals, benchmark pricing against competitors, and optimize project positioning using real-time data.',
    features: ['Supply-demand dynamics tracking', 'Competitor pricing benchmarks', 'Custom intelligence feeds'],
  },
];

function AudienceCard({ aud }: { aud: typeof audiences[0] }) {
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
      }}
    >
      <div>
        <div className="flex items-center gap-2" style={{ marginBottom: 16 }}>
          <span className="material-symbols-outlined" style={{ color: '#F59E0B', fontSize: 22 }}>{aud.icon}</span>
          <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 10, color: '#94a3b8', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>{aud.tag}</span>
        </div>
        <h3 style={{ fontFamily: 'Outfit, sans-serif', fontSize: 15, fontWeight: 800, color: '#0F172A', marginBottom: 12 }}>{aud.title}</h3>
        <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, color: '#64748b', lineHeight: 1.6, marginBottom: 24 }}>{aud.desc}</p>
        <ul style={{ display: 'flex', flexDirection: 'column', gap: 12, fontFamily: 'Inter, sans-serif' }}>
          {aud.features.map((f) => (
            <li key={f} className="flex items-start gap-2.5" style={{ fontSize: 12, color: '#334155', fontWeight: 500 }}>
              <span className="material-symbols-outlined" style={{ color: '#10b981', fontSize: 16, marginTop: 1 }}>check_circle</span>
              <span>{f}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export function EcosystemSection() {
  return (
    <section className="px-4 py-5 md:p-12" style={{ background: '#f8fafc', border: '1px solid rgba(226,232,240,0.8)', borderRadius: 16, marginBottom: 48 }}>
      <div style={{ marginBottom: 32 }}>
        <h2 style={{ fontFamily: 'Outfit, sans-serif', fontSize: 'clamp(22px, 4.5vw, 30px)', fontWeight: 700, color: '#0F172A', lineHeight: 1.3, marginBottom: 4 }}>Built for the Entire Real Estate Ecosystem</h2>
        <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 14, color: '#64748b' }}>Different roles. Different needs. One platform with distinct, powerful intelligence for each.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
        {audiences.map((a) => (
          <AudienceCard key={a.id} aud={a} />
        ))}
      </div>
    </section>
  );
}
