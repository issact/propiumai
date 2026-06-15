const footerLinks = {
  'About prOPIUM': ['About prOPIUM', 'How we Verify', 'Why prOPIUM', 'The Team'],
  'Intelligence Hub': ['Builder Evaluation', 'Location Intelligence', 'Product Intelligence', 'Payment Plan Intelligence', 'Investment Intelligence'],
  'For developers': ['Visibility & data', 'Raise an issue', 'Platform overview', 'Contact & support'],
  'Support & legal': ['Raise an issue', 'Privacy policy', 'Terms of use', 'Cookie policy'],
};

export function Footer() {
  return (
    <footer className="pb-32 md:pb-6" style={{ background: '#f1f5f9', paddingTop: 48, borderTop: '1px solid rgba(226,232,240,0.3)' }}>
      <div className="mx-auto grid grid-cols-2 md:grid-cols-6 gap-x-6 gap-y-8 md:gap-8 px-4 md:px-8 lg:px-10 xl:px-16" style={{ maxWidth: 1280 }}>
        {/* Brand col */}
        <div className="col-span-2 md:col-span-2">
          <a href="#" className="flex items-center gap-1 hover:opacity-90" style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, fontSize: 20, letterSpacing: '-0.01em', color: '#0F172A', marginBottom: 16, textDecoration: 'none', display: 'inline-flex' }}>
            prOPIUM<span style={{ color: '#F59E0B' }}>.ai</span>
          </a>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, color: '#64748b', lineHeight: 1.6, marginBottom: 24 }}>
            Intelligence for every Real Estate decision.
          </p>
          <div className="flex gap-4" style={{ color: '#94a3b8' }}>
            <a href="#" style={{ color: '#94a3b8', transition: 'color 0.2s' }} onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = '#0F172A'; }} onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = '#94a3b8'; }}>
              <svg style={{ width: 16, height: 16 }} viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
              </svg>
            </a>
            <a href="#" style={{ color: '#94a3b8', transition: 'color 0.2s' }} onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = '#0F172A'; }} onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = '#94a3b8'; }}>
              <svg style={{ width: 16, height: 16 }} viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.7 0-1.37-.2-1.95-.54v.05c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.52 8.52 0 0 1-5.31 1.83c-.34 0-.68-.02-1.02-.06C3.3 20.42 5.66 21 8.2 21c8.26 0 12.78-6.86 12.78-12.78 0-.19 0-.39-.01-.58.88-.64 1.64-1.44 2.24-2.35l-.01-.01z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Link columns */}
        {Object.entries(footerLinks).map(([heading, links]) => (
          <div key={heading}>
            <h5 style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, fontSize: 13, color: '#0F172A', marginBottom: 16, letterSpacing: '-0.005em' }}>{heading}</h5>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {links.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, color: '#64748b', textDecoration: 'none', transition: 'color 0.2s', fontWeight: 500 }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = '#0F172A'; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = '#64748b'; }}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Disclaimer + bottom bar */}
      <div className="mx-auto px-4 md:px-8 lg:px-10 xl:px-16" style={{ maxWidth: 1280, marginTop: 48 }}>
        <div style={{ borderTop: '1px solid rgba(226,232,240,0.2)', paddingTop: 32, display: 'flex', flexDirection: 'column', gap: 24 }}>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, color: '#64748b', lineHeight: 1.7, fontWeight: 400 }}>
            <span style={{ fontWeight: 600, color: '#0F172A', marginRight: 4 }}>Disclaimer ·</span>
            prOPIUM is an independent property intelligence and analytics platform. All data, scores, and analysis are for informational purposes only and do not constitute investment or legal advice. Prices, RERA status, and project details should be independently verified before any purchase or investment decision. prOPIUM does not act as a real estate agent, broker, or developer and does not receive commissions from builders or developers.
          </p>
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-3" style={{ borderTop: '1px solid rgba(226,232,240,0.6)', paddingTop: 20, fontFamily: 'Inter, sans-serif', fontSize: 12, color: '#64748b', fontWeight: 500 }}>
            <span>© 2026 prOPIUM · All rights reserved · Built for the Indian property ecosystem</span>
            <div className="flex gap-6">
              <a href="#" style={{ color: '#64748b', textDecoration: 'none', transition: 'color 0.2s' }} onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = '#0F172A'; }} onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = '#64748b'; }}>Privacy Shield</a>
              <a href="#" style={{ color: '#64748b', textDecoration: 'none', transition: 'color 0.2s' }} onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = '#0F172A'; }} onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = '#64748b'; }}>Disclosure Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
