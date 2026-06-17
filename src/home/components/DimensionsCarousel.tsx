import { useState, useRef, useEffect, useCallback } from "react";

const dimensions = [
  {
    id: 1,
    icon: 'grid_view',
    title: 'Project Lens',
    desc: 'Cuts through marketing to show you the actual covered area, unit mix, amenities, phase timelines, occupancy status, and actual vs promised delivery.',
  },
  {
    id: 2,
    icon: 'radar',
    title: 'Builder Radar',
    desc: 'Tracks developer track record, litigation history, financial health signals, and RERA compliance score.',
  },
  {
    id: 3,
    icon: 'timeline',
    title: 'Micro-market Pulse',
    desc: 'Always live, hyperlocal snapshot covering employment, infrastructure, similar projects, long term potential.',
  },
  {
    id: 4,
    icon: 'explore',
    title: 'Regulatory Compass',
    desc: 'RERA filings, approval status, litigation disclosures, and environmental clearances helping you point to the true north.',
  },
  {
    id: 5,
    icon: 'receipt_long',
    title: 'Registry Trace',
    desc: 'Follows the transaction trail to unveil actual transaction prices and real market clearing levels.',
  },
  {
    id: 6,
    icon: 'trending_up',
    title: 'Price Vector',
    desc: 'Real price trends, demand-adjusted pricing and monthly appreciation giving you both direction and momentum of where prices are heading.',
  },
  {
    id: 7,
    icon: 'groups',
    title: 'Demand Sector',
    desc: "Detects what's moving beneath the surface before anyone sees it. Real-time signals based on buyers' searches, buzzing micro-markets, and budget shifts.",
  },
  {
    id: 8,
    icon: 'troubleshoot',
    title: 'Risk X-Ray',
    desc: "Sees what's hidden: legal, structural, financial — before it becomes your problem.",
  },
];

const GAP = 24;

function DimCard({ dim, hovered, onHover, width }: { dim: typeof dimensions[0]; hovered: boolean; onHover: (v: boolean) => void; width: number }) {
  return (
    <div
      onMouseEnter={() => onHover(true)}
      onMouseLeave={() => onHover(false)}
      style={{
        flexShrink: 0,
        width: width,
        background: hovered ? 'rgba(255,255,255,0.06)' : 'rgba(255,255,255,0.02)',
        border: `1px solid ${hovered ? 'rgba(245,158,11,0.4)' : 'rgba(255,255,255,0.1)'}`,
        borderRadius: 12,
        padding: 24,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        minHeight: 170,
        position: 'relative',
        overflow: 'hidden',
        transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
        transition: 'all 0.3s ease',
        boxSizing: 'border-box',
      }}
    >
      <div>
        <div style={{ width: 40, height: 40, borderRadius: 8, background: hovered ? 'rgba(245,158,11,0.2)' : 'rgba(245,158,11,0.1)', color: '#F59E0B', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16, transition: 'background 0.2s' }}>
          <span className="material-symbols-outlined" style={{ fontSize: 22 }}>{dim.icon}</span>
        </div>
        <h3 style={{ fontFamily: 'Outfit, sans-serif', fontSize: 14, fontWeight: 700, color: '#ffffff', marginBottom: 8 }}>{dim.title}</h3>
        <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, color: '#cbd5e1', lineHeight: 1.6, fontWeight: 500 }}>{dim.desc}</p>
      </div>
      <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: 2, background: '#F59E0B', transform: hovered ? 'scaleX(1)' : 'scaleX(0)', transition: 'transform 0.3s ease', transformOrigin: 'left' }} />
    </div>
  );
}

export function DimensionsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);

  const updateLayout = useCallback(() => {
    const w = window.innerWidth;
    setVisibleCards(w >= 1024 ? 3 : w >= 640 ? 2 : 1);
    if (containerRef.current) {
      setContainerWidth(containerRef.current.getBoundingClientRect().width);
    }
  }, []);

  useEffect(() => {
    updateLayout();
    window.addEventListener('resize', updateLayout);
    return () => window.removeEventListener('resize', updateLayout);
  }, [updateLayout]);

  // Recalculate on each render to pick up container size changes
  useEffect(() => {
    if (containerRef.current) {
      const w = containerRef.current.getBoundingClientRect().width;
      if (w !== containerWidth) setContainerWidth(w);
    }
  });

  const cardWidth = containerWidth > 0
    ? (containerWidth - GAP * (visibleCards - 1)) / visibleCards
    : 0;

  const maxIndex = Math.max(0, dimensions.length - visibleCards);
  const clampedIndex = Math.min(currentIndex, maxIndex);
  const offset = clampedIndex * (cardWidth + GAP);

  return (
    <section
      className="p-4 md:p-12"
      style={{
        background: '#1E293B',
        border: '1px solid #1e293b',
        borderRadius: 16,
        color: '#ffffff',
        boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5)',
        position: 'relative',
        overflow: 'hidden',
        marginBottom: 48,
      }}
    >
      <div className="absolute inset-0 blueprint-grid-dark opacity-5 bg-[#281e1e00]" />
      <div style={{ position: 'relative', zIndex: 10 }}>
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-baseline gap-4" style={{ marginBottom: 32 }}>
          <div>
            <h2 style={{ fontFamily: 'Outfit, sans-serif', fontSize: 30, fontWeight: 700, color: '#ffffff', lineHeight: 1.3, marginBottom: 4 }}>8 Dimensions of Property Intelligence</h2>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 14, color: '#94a3b8' }}>Structured intelligence across eight critical dimensions — so you see the full picture, not just the listing.</p>
          </div>
          <div className="flex gap-2 flex-shrink-0">
            <button
              onClick={() => setCurrentIndex(Math.max(0, clampedIndex - 1))}
              disabled={clampedIndex === 0}
              style={{
                width: 40, height: 40, borderRadius: '50%',
                border: '1px solid rgba(255,255,255,0.1)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: clampedIndex === 0 ? 'rgba(255,255,255,0.3)' : 'rgba(255,255,255,0.6)',
                background: 'transparent', cursor: clampedIndex === 0 ? 'not-allowed' : 'pointer',
                transition: 'all 0.2s',
              }}
            >
              <span className="material-symbols-outlined" style={{ fontSize: 20 }}>chevron_left</span>
            </button>
            <button
              onClick={() => setCurrentIndex(Math.min(maxIndex, clampedIndex + 1))}
              disabled={clampedIndex >= maxIndex}
              style={{
                width: 40, height: 40, borderRadius: '50%',
                border: '1px solid rgba(255,255,255,0.1)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: clampedIndex >= maxIndex ? 'rgba(255,255,255,0.3)' : 'rgba(255,255,255,0.6)',
                background: 'transparent', cursor: clampedIndex >= maxIndex ? 'not-allowed' : 'pointer',
                transition: 'all 0.2s',
              }}
            >
              <span className="material-symbols-outlined" style={{ fontSize: 20 }}>chevron_right</span>
            </button>
          </div>
        </div>

        {/* Slider */}
        <div ref={containerRef} style={{ overflow: 'hidden', width: '100%' }}>
          <div
            style={{
              display: 'flex',
              gap: GAP,
              transform: `translateX(-${offset}px)`,
              transition: 'transform 0.5s ease',
            }}
          >
            {dimensions.map((dim) => (
              <DimCard
                key={dim.id}
                dim={dim}
                width={cardWidth}
                hovered={hoveredCard === dim.id}
                onHover={(v) => setHoveredCard(v ? dim.id : null)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
