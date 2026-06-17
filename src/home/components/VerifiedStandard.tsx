const tableRows = [
  { metric: 'Project Sourcing', standard: 'Commission-Driven', propium: 'Algorithm & Merit-Based' },
  { metric: 'Timeline Verification', standard: 'Unverified Builder Claims', propium: 'RERA Tracking & On-site Photos' },
  { metric: 'Area Calculation', standard: 'Super Area (Includes Voids)', propium: 'Audited Carpet (Measured)' },
  { metric: 'Legal Scrutiny', standard: 'Assumed Approvals', propium: 'Full Encumbrance Disclosure' },
];

export function VerifiedStandard() {
  return (
    <section className="px-4 py-6 md:p-16" style={{ background: '#1E293B', border: '1px solid #1e293b', borderRadius: 12, color: '#ffffff', marginBottom: 48 }}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
        <div>
          <h2 style={{ fontFamily: 'Outfit, sans-serif', fontSize: 'clamp(22px, 4.5vw, 30px)', fontWeight: 700, color: '#ffffff', lineHeight: 1.3, marginBottom: 24 }}>The Verified Sourcing Standard</h2>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 'clamp(15px, 2vw, 18px)', lineHeight: 1.6, color: '#cbd5e1', marginBottom: 32 }}>
            The real estate market is built on information asymmetry. prOPIUM.ai flips the script by introducing independent, physical audits so that buyers, investors, and professional advisors operate with clear, unvarnished facts.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            <div className="flex items-start gap-4">
              <span className="material-symbols-outlined" style={{ color: '#F59E0B', fontSize: 24, flexShrink: 0, marginTop: 2 }}>verified_user</span>
              <div>
                <h4 style={{ fontFamily: 'Inter, sans-serif', fontSize: 14, fontWeight: 600, letterSpacing: '0.05em', color: '#ffffff', marginBottom: 4 }}>Independent Audits</h4>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 14, color: '#94a3b8' }}>We do not accept builder commissions or transaction cuts, ensuring our property ratings are completely unbiased.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="material-symbols-outlined" style={{ color: '#F59E0B', fontSize: 24, flexShrink: 0, marginTop: 2 }}>architecture</span>
              <div>
                <h4 style={{ fontFamily: 'Inter, sans-serif', fontSize: 14, fontWeight: 600, letterSpacing: '0.05em', color: '#ffffff', marginBottom: 4 }}>Physical Verification</h4>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 14, color: '#94a3b8' }}>We physically measure carpet areas and verify construction milestones on-site.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop table */}
        <div className="hidden md:block" style={{ background: 'rgba(15,23,42,0.4)', border: '1px solid #1e293b', borderRadius: 8, overflow: 'hidden', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.7)' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ background: 'rgba(255,255,255,0.05)' }}>
                <th style={{ padding: 16, fontFamily: 'Inter, sans-serif', fontSize: 14, fontWeight: 600, letterSpacing: '0.05em', borderBottom: '1px solid rgba(255,255,255,0.1)', color: '#ffffff', textAlign: 'left' }}>Metric</th>
                <th style={{ padding: 16, fontFamily: 'Inter, sans-serif', fontSize: 14, fontWeight: 600, letterSpacing: '0.05em', borderBottom: '1px solid rgba(255,255,255,0.1)', color: '#ffffff', textAlign: 'left' }}>Standard Listings</th>
                <th style={{ padding: 16, fontFamily: 'Inter, sans-serif', fontSize: 14, fontWeight: 700, borderBottom: '1px solid rgba(245,158,11,0.2)', color: '#F59E0B', textAlign: 'left', background: 'rgba(245,158,11,0.08)', borderLeft: '1px solid rgba(245,158,11,0.2)', borderRight: '1px solid rgba(245,158,11,0.2)' }}>prOPIUM Audit</th>
              </tr>
            </thead>
            <tbody style={{ fontFamily: 'Inter, sans-serif', fontSize: 14, fontWeight: 500, color: '#cbd5e1' }}>
              {tableRows.map((row, i) => (
                <tr key={row.metric} style={{ background: i % 2 === 1 ? 'rgba(255,255,255,0.01)' : 'transparent' }}>
                  <td style={{ padding: 16, borderBottom: '1px solid rgba(255,255,255,0.1)', opacity: 0.7 }}>{row.metric}</td>
                  <td style={{ padding: 16, borderBottom: '1px solid rgba(255,255,255,0.1)', color: '#94a3b8' }}>{row.standard}</td>
                  <td style={{ padding: 16, borderBottom: '1px solid rgba(245,158,11,0.2)', color: '#F59E0B', fontWeight: 800, background: 'rgba(245,158,11,0.08)', borderLeft: '1px solid rgba(245,158,11,0.2)', borderRight: '1px solid rgba(245,158,11,0.2)' }}>{row.propium}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile stacked cards */}
        <div className="md:hidden flex flex-col gap-3">
          {tableRows.map((row) => (
            <div
              key={row.metric}
              style={{
                background: 'rgba(15,23,42,0.5)',
                border: '1px solid #1e293b',
                borderRadius: 12,
                padding: 16,
                boxShadow: '0 10px 25px -8px rgba(0,0,0,0.5)',
              }}
            >
              <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 10, fontWeight: 800, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: 12 }}>
                {row.metric}
              </div>
              <div className="grid grid-cols-1 gap-2">
                <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 8, padding: '10px 12px' }}>
                  <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 9, color: '#64748b', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: 4 }}>Standard</div>
                  <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, color: '#cbd5e1', fontWeight: 500 }}>{row.standard}</div>
                </div>
                <div style={{ background: 'rgba(245,158,11,0.08)', border: '1px solid rgba(245,158,11,0.25)', borderRadius: 8, padding: '10px 12px' }}>
                  <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 9, color: '#F59E0B', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: 4 }}>prOPIUM Audit</div>
                  <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, color: '#F59E0B', fontWeight: 800 }}>{row.propium}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
