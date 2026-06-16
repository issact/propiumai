import { useState } from "react";
import { Link } from "@tanstack/react-router";

const markets = [
  {
    id: 1,
    category: 'High-Growth Investor Havens',
    tier: 'Hot',
    tierColor: '#dc2626',
    tierTextColor: '#ffffff',
    name: 'Dwarka Expressway',
    subLocation: 'NCR West Corridor',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDBFgj-36JXJ6SuZNVSR8pfjDtt8mstk_sXAyennh3yYoIEHnqGPINu75kmk20Lsw2ZY9N_XGNSs8w_a1-dAYvOPCP-xHi8qy70m5ckFnMcwQ8Aqf-zk55BEq33QzLOk3aY2Hr9IkX8m7wijI6IBatMHwJBJB-GBH4nNWHpOO3MPhq2tz5MdRCWrZwn4_OgqRWUOD9V6PzmjJMt9NAdmHqpyBmXqTjYhymspJtuG3XyF4MJ0e7t-tZXdlwHxiYJuFaL9u5cInrGiHM',
    priceRange: 'Up to ₹35.6 Cr',
    trend: '+18.4%',
    trendDir: 'up' as const,
    sparkline: 'M0,15 L20,13 L40,14 L60,8 L80,10 L100,2',
    ready: 68, construction: 88, newLaunch: 2,
    href: '/micro-market' as const,
  },
  {
    id: 2,
    category: 'Established Family Corridors',
    tier: 'Stable',
    tierColor: '#3b82f6',
    tierTextColor: '#ffffff',
    name: 'Golf Course Ext Road',
    subLocation: 'South Gurgaon',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCJJYt2r8z4Di1J551sTQjooDDcq_YxZg3tj5Taryq9_Bac-ifLxmGj5ejDMqePw8W4Gsf7QIS-YGPGZ2FjbTvgWOniFlEvCZPqSH66KsuK9ICHbCTaLcKhqyCnfrPhHKOm6SzFDjauXWk7yCEodWy5bu0q__-dmUwMwRfaJpBtYoc5Q4rZTgkk00XYmL53ZV3-Jwhl2Xja8PusyQXkipZH0-1L0_CM5pwng4N9zstSKLzQtJV7F8kPWgDBCfQiB7yStvraM_G9C7M',
    priceRange: '₹58L – ₹47.5 Cr',
    trend: '+9.2%',
    trendDir: 'up' as const,
    sparkline: 'M0,18 L20,15 L40,16 L60,11 L80,9 L100,3',
    ready: 67, construction: 25, newLaunch: 2,
    href: '/golf-course-extension' as const,
  },
  {
    id: 3,
    category: 'Ultra-Luxury Enclaves',
    tier: 'Premium',
    tierColor: '#0F172A',
    tierTextColor: '#F59E0B',
    name: 'Golf Course Road',
    subLocation: 'Central Gurgaon',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDWiQMYWH6fTjFHirMA7o0iHwr2uRssMkCbft-VOqDYnb072_he4tnLMMrzGoMYyItcXvYQ20XaY4MJlUnHL-UA-5oIwFmC-ky8T4mL9tgL48QyuXeQpQ8ftYvnjyd2EjlD6gmvOGe2S96A7hJU9fcZ7Fm9FNew4KymTZFcAEWjLLjZapiCk5_OjmPxWhgPIU0fUNhpoDiQ-t_vJMI5M-j7C5kD-sEAe9F6dXmnMsKKL6VbpISPNPeqSgCJmlUnw_2yEORSqoKIDnI',
    priceRange: '₹83L – ₹158.8 Cr',
    trend: '+22.7%',
    trendDir: 'up' as const,
    sparkline: 'M0,12 L20,10 L40,11 L60,6 L80,5 L100,1',
    ready: 38, construction: 9, newLaunch: 0,
    href: '/micro-market' as const,
  },
  {
    id: 4,
    category: 'Emerging Value Hubs',
    tier: 'Emerging',
    tierColor: '#10b981',
    tierTextColor: '#ffffff',
    name: 'Sohna Road',
    subLocation: 'South-East Corridor',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBqKOg_Spmw6gHmXNwbIXrIizo4USO3jiaKyh9sk4sdNnV8jFYkKPSo0m9g-K_yd5JnAQOqQwqgoofemjR3zEsN-DaghwHlhpzoRrN68mI5GhvhIDbb_o3l1BOLqlDlutw7izR32Bx11purcU6g4GToJeR39Fns7LMM1iKaB-yj7-yE24SZXdIdQ6gUdTrqttw1OaHDv3dt8U5Bz7r15LSiFis6wCc8towgkbpXSTI5jpBJsrpHtCu3_RxLilmGaJFvbU9jGwUPUx8',
    priceRange: '₹73L – ₹28.8 Cr',
    trend: '+14.1%',
    trendDir: 'up' as const,
    sparkline: 'M0,15 L20,14 L40,11 L60,9 L80,10 L100,5',
    ready: 35, construction: 5, newLaunch: 0,
    href: '/micro-market' as const,
  },
];

function MarketCard({ market }: { market: typeof markets[0] }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: '#1E2130',
        border: `1px solid ${hovered ? 'rgba(245,158,11,0.5)' : 'rgba(255,255,255,0.08)'}`,
        borderRadius: 12,
        overflow: 'hidden',
        boxShadow: hovered ? '0 10px 25px -5px rgba(0,0,0,0.4)' : '0 1px 3px rgba(0,0,0,0.3)',
        transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
        transition: 'all 0.3s ease',
        display: 'flex',
        flexDirection: 'column',
        cursor: 'pointer',
      }}
    >
      <div style={{ height: 176, position: 'relative', overflow: 'hidden' }}>
        <img
          src={market.image}
          alt={market.name}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transform: hovered ? 'scale(1.05)' : 'scale(1)',
            transition: 'transform 0.5s ease',
            filter: 'brightness(0.65) grayscale(0.25)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: 12,
            left: 12,
            background: market.tierColor,
            color: market.tierTextColor,
            padding: '4px 10px',
            fontSize: 9,
            fontWeight: 800,
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            borderRadius: 2,
            fontFamily: 'Inter, sans-serif',
          }}
        >
          {market.tier}
        </div>
        <div
          style={{
            position: 'absolute',
            top: 12,
            right: 12,
            background: 'rgba(15,17,26,0.85)',
            color: '#F1F5F9',
            padding: '4px 8px',
            fontSize: 10,
            fontWeight: 800,
            borderRadius: 2,
            fontFamily: 'Inter, sans-serif',
            display: 'flex',
            alignItems: 'center',
            gap: 3,
            border: '1px solid rgba(255,255,255,0.1)',
          }}
        >
          <span className="material-symbols-outlined" style={{ fontSize: 12, color: '#10b981' }}>trending_up</span>
          {market.trend}
        </div>
      </div>

      <div style={{ padding: 20, display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'space-between', background: '#263044' }}>
        <div>
          <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 9, color: '#475569', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', display: 'block', marginBottom: 4 }}>{market.category}</span>
          <h3 style={{ fontFamily: 'Outfit, sans-serif', fontSize: 15, fontWeight: 800, color: hovered ? '#F59E0B' : '#F1F5F9', transition: 'color 0.2s', marginBottom: 4 }}>{market.name}</h3>
          <p className="flex items-center gap-1" style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, color: '#64748b', fontWeight: 500 }}>
            <span className="material-symbols-outlined" style={{ fontSize: 14, color: '#F59E0B' }}>location_on</span>
            {market.subLocation}
          </p>
          <div className="grid grid-cols-3 gap-1.5" style={{ marginTop: 12 }}>
            {[
              { label: 'Ready', color: '#10b981', value: market.ready },
              { label: 'Const.', color: '#F59E0B', value: market.construction },
              { label: 'New', color: '#3b82f6', value: market.newLaunch },
            ].map((s) => (
              <div key={s.label} style={{ background: 'rgba(255,255,255,0.04)', borderRadius: 4, padding: '8px 6px', textAlign: 'center', border: '1px solid rgba(255,255,255,0.06)' }}>
                <div className="flex items-center justify-center gap-1" style={{ marginBottom: 2 }}>
                  <span style={{ width: 5, height: 5, borderRadius: '50%', background: s.color, display: 'inline-block' }} />
                  <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 9, color: '#64748b', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>{s.label}</span>
                </div>
                <span style={{ fontFamily: 'Outfit, sans-serif', fontSize: 15, fontWeight: 800, color: '#F1F5F9', display: 'block' }}>{s.value}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-between items-center" style={{ borderTop: '1px solid rgba(255,255,255,0.07)', marginTop: 16, paddingTop: 12 }}>
          <div>
            <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 9, color: '#475569', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', display: 'block' }}>Price Range</span>
            <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, fontWeight: 800, color: '#F1F5F9', marginTop: 2, display: 'block' }}>{market.priceRange}</span>
          </div>
          <Link
            to={market.href}
            style={{ color: hovered ? '#d97706' : '#F59E0B', fontSize: 10, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', fontFamily: 'Inter, sans-serif', transition: 'color 0.2s', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 2 }}
          >
            Report
            <span className="material-symbols-outlined" style={{ fontSize: 14 }}>arrow_forward</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export function MicroMarkets() {
  return (
    /*
      KEY STRATEGY:
      - The <section> keeps the EXACT same footprint as the original light version
        (paddingBottom: 56, marginBottom: 56) so spacing to Top Developers is identical.
      - We add paddingTop: 56 for breathing room inside the dark bg.
      - The dark background is painted by an absolutely-positioned child div
        that extends left/right to viewport edges using calc(50% - 50vw).
        This means the section's own width/alignment is UNTOUCHED — cards center
        exactly the same as the original, inheriting the page's container width.
      - Content sits above the bg via position:relative + zIndex:1.

      IMPORTANT: Make sure no ancestor has overflow:hidden, or the bg bleed won't work.
      If it still clips, wrap <MicroMarkets /> in your page with:
        <div style={{ overflow: 'visible' }}>
    */
    <section
      style={{
        position: 'relative',
        paddingTop: 56,
        paddingBottom: 56,
        marginBottom: 56,
      }}
    >
      {/* ── Full-bleed dark background ─────────────────────────────────────────
          Absolutely positioned so it doesn't affect the section's layout flow.
          left/right: calc(50% - 50vw) expands from the section's center
          outward to the viewport edges, regardless of parent container width.
      ── */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: 'calc(50% - 50vw)',
          right: 'calc(50% - 50vw)',
          background: '#1E293B',
          zIndex: 0,
        }}
      />

      {/* ── All content — identical structure to original light version ─────── */}
      <div style={{ position: 'relative', zIndex: 1 }}>

        {/* Header row — same classes/structure as original */}
        <div className="flex flex-row justify-between items-center md:items-baseline gap-4" style={{ marginBottom: 20 }}>
          <div className="flex-1 min-w-0">
            <h2 style={{ fontFamily: 'Outfit, sans-serif', fontSize: 'clamp(22px, 4.5vw, 30px)', fontWeight: 700, color: '#F1F5F9', lineHeight: 1.3, marginBottom: 4 }}>Top Micro-Markets</h2>
            <p className="hidden md:block" style={{ fontFamily: 'Inter, sans-serif', fontSize: 14, color: '#64748b' }}>Explore best micro-markets for live inventory, pricing, and delivery signals.</p>
          </div>
          <Link
            to="/micro-market"
            className="md:hidden flex items-center gap-1 flex-shrink-0"
            style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, fontWeight: 800, color: '#F59E0B', textDecoration: 'none' }}
          >
            View All
            <span className="material-symbols-outlined" style={{ fontSize: 18 }}>arrow_forward</span>
          </Link>
          <Link
            to="/micro-market"
            className="hidden md:inline-block transition-all"
            style={{
              border: '1px solid rgba(245,158,11,0.4)',
              color: '#F59E0B',
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

        {/* Cards scroll/grid — IDENTICAL classes to original light version */}
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
            {markets.map((m) => (
              <div
                key={m.id}
                style={{ width: '72vw', maxWidth: 300, flexShrink: 0 }}
                className="snap-start md:w-auto md:max-w-none"
              >
                <MarketCard market={m} />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
