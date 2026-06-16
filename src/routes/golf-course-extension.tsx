import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import { ScrollArea } from "@/components/ui/scroll-area";
import { TopNav } from "@/home/components/TopNav";
import { Footer } from "@/home/components/Footer";
import { MobileBottomNav } from "@/home/components/MobileBottomNav";

export const Route = createFileRoute("/golf-course-extension")({
  head: () => ({
    meta: [
      { title: "Golf Course Extension Road | prOPIUM.ai" },
      {
        name: "description",
        content:
          "Corridor dossier for Golf Course Extension Road — projects, pricing, and delivery telemetry.",
      },
    ],
  }),
  component: GCEXPage,
});

// ── Corridor data (GCEX only) ────────────────────────────────────────────────

const CORRIDOR = {
  name: "Golf Course Extension Road",
  desc: "Premium, cosmopolitan growth corridor attracting luxury developers. Combines upscale high-rises with robust office clusters and top-tier educational hubs.",
  priceRange: "₹22,000 - ₹35,000 / sqft",
  avgPsft: 27500,
  avgTicket: "₹6.8 Cr",
  activeProjects: 97,
  units: 37826,
  scorecard: [
    { label: "Connectivity", score: 9.2 },
    { label: "Social Infrastructure", score: 8.8 },
    { label: "Commercial Proximity", score: 8.5 },
    { label: "Price-to-Value", score: 7.9 },
    { label: "Infrastructure Growth", score: 9.0 },
    { label: "Livability", score: 8.6 },
    { label: "Historical Appreciation", score: 9.4 },
    { label: "Inventory Clearance Speed", score: 8.7 },
  ],
  segments: [
    { name: "Luxury", value: 45, color: "#F59E0B" },
    { name: "Ultra-Luxury", value: 35, color: "#0F172A" },
    { name: "Premium", value: 20, color: "#006AFF" },
  ],
  infrastructure: {
    transit: [
      "Sector 55-56 Rapid Metro (8 mins)",
      "SPR Linkage (Immediate)",
      "NH-48 via Sohna Road (12 mins)",
    ],
    commercial: ["AIPL Business Club", "M3M Urbana", "Emaar Digital Greens"],
    education: [
      "St. Xavier's High School",
      "DPS International",
      "Heritage Experiential",
    ],
    healthcare: [
      "Marengo Asia Hospital (10 mins)",
      "Medanta The Medicity (15 mins)",
    ],
    leisure: [
      "WorldMark Gurgaon",
      "Good Earth City Centre",
      "M3M 65th Avenue",
    ],
  },
};

const EXPERT_ANALYSIS = `Golf Course Extension Road has quietly emerged as Gurgaon's most compelling luxury investment corridor over the past five years — and the data now makes the thesis undeniable.

The corridor's appreciation story is structural, not cyclical. Between 2015 and 2022, GCEX hovered in the ₹9,500–₹16,000/sqft band while Golf Course Road commanded a 3× premium. That gap has compressed decisively. As of 2026, GCEX trades at ₹27,500/sqft — a 189% appreciation over eleven years — while still offering meaningful headroom versus GCR's ₹37,500 average. This spread creates a rare entry window into luxury product at below-replacement-cost pricing in a fully-matured social infrastructure corridor.

Builder quality on this corridor is best-in-class. M3M, TARC, DLF, Mahindra Lifespaces, and Emaar have all staked flagship projects here, keeping design and construction standards high and reducing buyer risk. The RERA compliance track record across active projects is strong, with most under-construction projects maintaining quarterly progress reporting.

The inventory mix skews decidedly toward luxury and ultra-luxury (45% and 35% respectively), which is highly unusual for a corridor with 97 active projects. This reflects developer conviction that end-buyer profiles here are deep-pocketed professionals — NRIs, CXOs, and fund managers — rather than leveraged first-time buyers. Demand, accordingly, is sticky and less rate-sensitive.

Infrastructure growth scores a 9.0 out of 10 — the highest in this metric across all Gurgaon corridors. The Southern Peripheral Road integration is operational, Cyber City connectivity has shortened materially, and the proposed Sector 55-56 Rapid Metro extension is in active planning. Each of these will compress travel times and push valuations further.

Historical appreciation scores 9.4, reflecting the corridor's compounding track record. The 10-year CAGR on residential pricing here is approximately 10.2% — outperforming both fixed deposits and most equity mutual fund benchmarks over the same horizon.

One risk to flag: carpet efficiency across the corridor averages 53–57%, which is on the lower end. Buyers should benchmark price-per-carpet-sq-ft rather than headline price-per-sq-ft to avoid overpaying for inefficient layouts. Ultra-luxury projects with sub-50% efficiency should be scrutinised closely.

Our overall read: GCEX is in the late-growth phase of its value cycle — past the speculative risk, before the peak compression. For buyers with a 3–5 year horizon, it remains the highest conviction corridor in the Gurgaon matrix.`;

const PROJECTS = [
  {
    id: "tarc-ishva",
    name: "Tarc Ishva",
    developer: "TARC Limited",
    sector: "Sector 63A",
    bhk: ["3 BHK", "4 BHK", "Penthouse"],
    units: 518,
    status: "Under Construction",
    priceMin: 8.5,
    priceMax: 10.5,
    score: 84,
    carpetEff: 50,
    builtupEff: 67,
    targetSegment: "Luxury",
    image:
      "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: "trump-tower-gurgaon",
    name: "Trump Tower (Gurgaon)",
    developer: "M3M India Pvt Ltd",
    sector: "Sector 65",
    bhk: ["2 BHK", "3 BHK", "4 BHK"],
    units: 252,
    status: "Ready to Move In",
    priceMin: 11.5,
    priceMax: 22.08,
    score: 76,
    carpetEff: 64,
    builtupEff: 85,
    targetSegment: "Ultra Luxury",
    image:
      "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: "dlf-the-arbour",
    name: "DLF The Arbour",
    developer: "DLF Limited",
    sector: "Sector 63",
    bhk: ["4 BHK"],
    units: 1137,
    status: "Under Construction",
    priceMin: 7.5,
    priceMax: 8.5,
    score: 72,
    carpetEff: 57,
    builtupEff: 74,
    targetSegment: "Ultra Luxury",
    image:
      "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: "m3m-altitude",
    name: "M3M Altitude",
    developer: "M3M India Pvt Ltd",
    sector: "Sector 65",
    bhk: ["3 BHK", "4 BHK", "Penthouse"],
    units: 342,
    status: "Under Construction",
    priceMin: 9.46,
    priceMax: 11.31,
    score: 27,
    carpetEff: 57,
    builtupEff: 73,
    targetSegment: "Ultra Luxury",
    image:
      "https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: "m3m-golfestate",
    name: "M3M Golfestate — Fairway East",
    developer: "M3M India Pvt Ltd",
    sector: "Sector 65",
    bhk: ["3 BHK", "4 BHK", "Penthouse"],
    units: 160,
    status: "Ready to Move In",
    priceMin: 4.1,
    priceMax: 7.6,
    score: 37,
    carpetEff: 53,
    builtupEff: 70,
    targetSegment: "Luxury",
    image:
      "https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: "mahindra-luminare",
    name: "Mahindra Luminare",
    developer: "Mahindra Lifespaces",
    sector: "Sector 59",
    bhk: ["3 BHK", "4 BHK", "Penthouse"],
    units: 380,
    status: "Ready to Move In",
    priceMin: 6.5,
    priceMax: 9.0,
    score: 68,
    carpetEff: 56,
    builtupEff: 76,
    targetSegment: "Luxury",
    image:
      "https://images.pexels.com/photos/1370704/pexels-photo-1370704.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: "emaar-digihomes",
    name: "Emaar DigiHomes",
    developer: "Emaar India",
    sector: "Sector 62",
    bhk: ["2 BHK", "3 BHK"],
    units: 370,
    status: "Ready to Move In",
    priceMin: 2.1,
    priceMax: 3.4,
    score: 62,
    carpetEff: 55,
    builtupEff: 71,
    targetSegment: "Luxury",
    image:
      "https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
];

// ── Sub-components ────────────────────────────────────────────────────────────

function TelemetryCard({
  label,
  value,
  sub,
}: {
  label: string;
  value: string;
  sub: string;
}) {
  return (
    <div
      style={{
        background: "#ffffff",
        border: "1px solid rgba(226,232,240,0.8)",
        borderRadius: 16,
        padding: 20,
        boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        gap: 8,
      }}
    >
      <span
        style={{
          fontFamily: "Inter, sans-serif",
          fontSize: 9,
          color: "#94a3b8",
          fontWeight: 700,
          textTransform: "uppercase",
          letterSpacing: "0.1em",
        }}
      >
        {label}
      </span>
      <div>
        <span
          style={{
            fontFamily: "Outfit, sans-serif",
            fontSize: 24,
            fontWeight: 800,
            color: "#0F172A",
            display: "block",
            lineHeight: 1,
          }}
        >
          {value}
        </span>
        <span
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: 10,
            color: "#94a3b8",
            display: "block",
            marginTop: 4,
          }}
        >
          {sub}
        </span>
      </div>
    </div>
  );
}

function ScorecardRow({ label, score }: { label: string; score: number }) {
  const color =
    score >= 9.0
      ? "#10b981"
      : score >= 8.0
        ? "#F59E0B"
        : score >= 7.0
          ? "#006AFF"
          : "#94a3b8";
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <span
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: 10,
            fontWeight: 700,
            color: "#475569",
          }}
        >
          {label}
        </span>
        <span
          style={{
            fontFamily: "Outfit, sans-serif",
            fontSize: 12,
            fontWeight: 800,
            color: "#0F172A",
          }}
        >
          {score.toFixed(1)}/10
        </span>
      </div>
      <div
        style={{
          height: 8,
          background: "#f1f5f9",
          borderRadius: 99,
          overflow: "hidden",
        }}
      >
        <div
          style={{
            width: `${score * 10}%`,
            height: "100%",
            background: color,
            borderRadius: 99,
          }}
        />
      </div>
    </div>
  );
}

function InventoryPieChart() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const CustomTooltip = ({
    active,
    payload,
  }: {
    active?: boolean;
    payload?: { name: string; value: number; payload: { color: string } }[];
  }) => {
    if (!active || !payload?.length) return null;
    return (
      <div
        style={{
          background: "#0F172A",
          border: "1px solid rgba(255,255,255,0.1)",
          borderRadius: 8,
          padding: "8px 12px",
          fontFamily: "Inter, sans-serif",
        }}
      >
        <span style={{ color: "#F1F5F9", fontSize: 12, fontWeight: 700 }}>
          {payload[0].name}
        </span>
        <span
          style={{
            color: "#F59E0B",
            fontSize: 13,
            fontWeight: 800,
            marginLeft: 8,
          }}
        >
          {payload[0].value}%
        </span>
      </div>
    );
  };

  return (
    <div
      style={{
        borderTop: "1px solid #f1f5f9",
        paddingTop: 16,
        marginTop: 16,
        display: "flex",
        flexDirection: "column",
        gap: 12,
      }}
    >
      <span
        style={{
          fontFamily: "Inter, sans-serif",
          fontSize: 9,
          color: "#94a3b8",
          fontWeight: 700,
          textTransform: "uppercase",
          letterSpacing: "0.1em",
        }}
      >
        Inventory Class Split
      </span>
      <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
        <div style={{ width: 120, height: 120, flexShrink: 0 }}>
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={CORRIDOR.segments}
                cx="50%"
                cy="50%"
                innerRadius={32}
                outerRadius={54}
                paddingAngle={2}
                dataKey="value"
                onMouseEnter={(_, index) => setActiveIndex(index)}
                onMouseLeave={() => setActiveIndex(null)}
                stroke="none"
              >
                {CORRIDOR.segments.map((seg, i) => (
                  <Cell
                    key={seg.name}
                    fill={seg.color}
                    opacity={
                      activeIndex === null || activeIndex === i ? 1 : 0.45
                    }
                    style={{ cursor: "pointer", outline: "none" }}
                  />
                ))}
              </Pie>
              <Tooltip content={<CustomTooltip />} />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div
          style={{ display: "flex", flexDirection: "column", gap: 8, flex: 1 }}
        >
          {CORRIDOR.segments.map((seg, i) => (
            <div
              key={seg.name}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 8,
                padding: "6px 10px",
                background:
                  activeIndex === i ? "rgba(245,158,11,0.06)" : "#f8fafc",
                borderRadius: 6,
                border: `1px solid ${activeIndex === i ? "rgba(245,158,11,0.25)" : "#f1f5f9"}`,
                transition: "all 0.15s",
                cursor: "default",
              }}
              onMouseEnter={() => setActiveIndex(i)}
              onMouseLeave={() => setActiveIndex(null)}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                <span
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    background: seg.color,
                    display: "inline-block",
                    flexShrink: 0,
                  }}
                />
                <span
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: 10,
                    fontWeight: 700,
                    color: "#475569",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                  }}
                >
                  {seg.name}
                </span>
              </div>
              <span
                style={{
                  fontFamily: "Outfit, sans-serif",
                  fontSize: 13,
                  fontWeight: 800,
                  color: "#0F172A",
                }}
              >
                {seg.value}%
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ExpertAnalysisCard() {
  const paragraphs = EXPERT_ANALYSIS.trim().split("\n\n");
  return (
    <div
      style={{
        background: "#ffffff",
        border: "1px solid rgba(226,232,240,0.8)",
        borderRadius: 16,
        padding: 20,
        boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
        display: "flex",
        flexDirection: "column",
        height: "100%",
      }}
    >
      <div style={{ marginBottom: 16 }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            marginBottom: 4,
          }}
        >
          <span
            className="material-symbols-outlined"
            style={{ fontSize: 16, color: "#F59E0B" }}
          >
            analytics
          </span>
          <h3
            style={{
              fontFamily: "Outfit, sans-serif",
              fontSize: 12,
              fontWeight: 700,
              color: "#0F172A",
              textTransform: "uppercase",
              letterSpacing: "0.08em",
            }}
          >
            Corridor Expert Analysis
          </h3>
        </div>
        <p
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: 10,
            color: "#94a3b8",
          }}
        >
          prOPIUM editorial intelligence — updated Q2 2026
        </p>
      </div>

      <ScrollArea style={{ flex: 1, height: 320 }}>
        <div
          style={{ display: "flex", flexDirection: "column", gap: 14, paddingRight: 8 }}
        >
          {paragraphs.map((para, i) => (
            <p
              key={i}
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: 12,
                color: "#334155",
                lineHeight: 1.75,
                margin: 0,
              }}
            >
              {para}
            </p>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}

type FilterStatus = "all" | "Ready to Move In" | "Under Construction";
type SortKey = "score" | "priceAsc" | "priceDesc" | "units";

function ProjectsSection() {
  const [filterStatus, setFilterStatus] = useState<FilterStatus>("all");
  const [sortKey, setSortKey] = useState<SortKey>("score");

  const filtered = PROJECTS.filter(
    (p) => filterStatus === "all" || p.status === filterStatus
  ).sort((a, b) => {
    if (sortKey === "score") return b.score - a.score;
    if (sortKey === "priceAsc") return a.priceMin - b.priceMin;
    if (sortKey === "priceDesc") return b.priceMax - a.priceMax;
    return b.units - a.units;
  });

  const tabs: { label: string; value: FilterStatus }[] = [
    { label: "All", value: "all" },
    { label: "Ready", value: "Ready to Move In" },
    { label: "UC", value: "Under Construction" },
  ];

  return (
    <section
      style={{
        background: "#ffffff",
        border: "1px solid rgba(226,232,240,0.8)",
        borderRadius: 16,
        padding: 24,
        boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
      }}
    >
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "flex-start",
          justifyContent: "space-between",
          gap: 16,
          marginBottom: 20,
          paddingBottom: 16,
          borderBottom: "1px solid #f1f5f9",
        }}
      >
        <div>
          <h3
            style={{
              fontFamily: "Outfit, sans-serif",
              fontSize: 12,
              fontWeight: 700,
              color: "#0F172A",
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              marginBottom: 2,
            }}
          >
            Corridor Projects
          </h3>
          <p
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: 10,
              color: "#94a3b8",
            }}
          >
            Verified RERA-audited inventory in Golf Course Extension Road
          </p>
        </div>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            gap: 8,
          }}
        >
          <div
            style={{
              display: "flex",
              background: "#f1f5f9",
              border: "1px solid rgba(226,232,240,0.6)",
              borderRadius: 10,
              padding: 4,
              gap: 2,
            }}
          >
            {tabs.map((tab) => (
              <button
                key={tab.value}
                onClick={() => setFilterStatus(tab.value)}
                style={{
                  padding: "6px 12px",
                  borderRadius: 7,
                  border: "none",
                  cursor: "pointer",
                  fontFamily: "Inter, sans-serif",
                  fontSize: 10,
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  transition: "all 0.15s",
                  background:
                    filterStatus === tab.value ? "#ffffff" : "transparent",
                  color:
                    filterStatus === tab.value ? "#0F172A" : "#64748b",
                  boxShadow:
                    filterStatus === tab.value
                      ? "0 1px 3px rgba(0,0,0,0.08)"
                      : "none",
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div style={{ position: "relative" }}>
            <select
              value={sortKey}
              onChange={(e) => setSortKey(e.target.value as SortKey)}
              style={{
                background: "#f8fafc",
                border: "1px solid #e2e8f0",
                borderRadius: 10,
                padding: "8px 32px 8px 12px",
                fontFamily: "Inter, sans-serif",
                fontSize: 10,
                fontWeight: 700,
                color: "#475569",
                cursor: "pointer",
                appearance: "none",
                WebkitAppearance: "none",
              }}
            >
              <option value="score">Sort: prOPIUM Score</option>
              <option value="priceAsc">Price: Low to High</option>
              <option value="priceDesc">Price: High to Low</option>
              <option value="units">Volume: Unit Count</option>
            </select>
            <span
              className="material-symbols-outlined"
              style={{
                position: "absolute",
                right: 8,
                top: "50%",
                transform: "translateY(-50%)",
                fontSize: 14,
                color: "#94a3b8",
                pointerEvents: "none",
              }}
            >
              keyboard_arrow_down
            </span>
          </div>
        </div>
      </div>

      {filtered.length === 0 ? (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "64px 0",
            gap: 8,
          }}
        >
          <span
            className="material-symbols-outlined"
            style={{ fontSize: 48, color: "#cbd5e1" }}
          >
            inventory_2
          </span>
          <span
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: 13,
              fontWeight: 700,
              color: "#475569",
            }}
          >
            No projects match this filter
          </span>
        </div>
      ) : (
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          style={{ gap: 16 }}
        >
          {filtered.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      )}
    </section>
  );
}

function ProjectCard({ project }: { project: (typeof PROJECTS)[0] }) {
  const [hovered, setHovered] = useState(false);
  const isReady = project.status === "Ready to Move In";

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: "#ffffff",
        border: `1px solid ${hovered ? "rgba(245,158,11,0.4)" : "rgba(226,232,240,0.8)"}`,
        borderRadius: 12,
        overflow: "hidden",
        boxShadow: hovered
          ? "0 10px 25px -5px rgba(0,0,0,0.1)"
          : "0 1px 3px rgba(0,0,0,0.06)",
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
        transition: "all 0.3s ease",
        display: "flex",
        flexDirection: "column",
        cursor: "pointer",
      }}
    >
      <div
        style={{ height: 160, position: "relative", overflow: "hidden" }}
      >
        <img
          src={project.image}
          alt={project.name}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transform: hovered ? "scale(1.05)" : "scale(1)",
            transition: "transform 0.5s ease",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 10,
            left: 10,
            background: isReady ? "#059669" : "#F59E0B",
            color: isReady ? "#ffffff" : "#0f172a",
            padding: "3px 8px",
            fontSize: 9,
            fontWeight: 800,
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            borderRadius: 3,
            fontFamily: "Inter, sans-serif",
          }}
        >
          {project.status}
        </div>
        <div
          style={{
            position: "absolute",
            top: 10,
            right: 10,
            background: "rgba(15,23,42,0.85)",
            color: "#F59E0B",
            padding: "3px 8px",
            fontSize: 10,
            fontWeight: 800,
            borderRadius: 3,
            fontFamily: "Outfit, sans-serif",
          }}
        >
          {project.score}/100
        </div>
      </div>

      <div
        style={{
          padding: 16,
          display: "flex",
          flexDirection: "column",
          flexGrow: 1,
          gap: 10,
        }}
      >
        <div>
          <span
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: 9,
              color: "#94a3b8",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              display: "block",
              marginBottom: 2,
            }}
          >
            {project.developer}
          </span>
          <h4
            style={{
              fontFamily: "Outfit, sans-serif",
              fontSize: 14,
              fontWeight: 700,
              color: hovered ? "#F59E0B" : "#0F172A",
              transition: "color 0.2s",
              marginBottom: 2,
            }}
          >
            {project.name}
          </h4>
          <p
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: 11,
              color: "#64748b",
              display: "flex",
              alignItems: "center",
              gap: 3,
            }}
          >
            <span
              className="material-symbols-outlined"
              style={{ fontSize: 13, color: "#F59E0B" }}
            >
              location_on
            </span>
            {project.sector}
          </p>
        </div>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 4,
          }}
        >
          {project.bhk.map((b) => (
            <span
              key={b}
              style={{
                background: "rgba(241,245,249,0.8)",
                color: "#334155",
                fontSize: 10,
                padding: "3px 8px",
                borderRadius: 4,
                fontFamily: "Inter, sans-serif",
                fontWeight: 500,
              }}
            >
              {b}
            </span>
          ))}
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 8,
            borderTop: "1px solid #f1f5f9",
            paddingTop: 10,
          }}
        >
          <div>
            <span
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: 9,
                color: "#94a3b8",
                fontWeight: 800,
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                display: "block",
              }}
            >
              Price Range
            </span>
            <span
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: 12,
                fontWeight: 800,
                color: "#0F172A",
                display: "block",
                marginTop: 2,
              }}
            >
              ₹{project.priceMin} – {project.priceMax} Cr
            </span>
          </div>
          <div style={{ textAlign: "right" }}>
            <span
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: 9,
                color: "#94a3b8",
                fontWeight: 800,
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                display: "block",
              }}
            >
              Carpet Eff.
            </span>
            <span
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: 12,
                fontWeight: 800,
                color: "#0F172A",
                display: "block",
                marginTop: 2,
              }}
            >
              {project.carpetEff}%
            </span>
          </div>
        </div>

        <div
          style={{
            borderTop: "1px solid #f1f5f9",
            paddingTop: 10,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <span
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: 9,
              color: "#64748b",
              fontWeight: 600,
            }}
          >
            {project.units} units · {project.targetSegment}
          </span>
          <span
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: 10,
              fontWeight: 800,
              color: hovered ? "#d97706" : "#F59E0B",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              display: "flex",
              alignItems: "center",
              gap: 2,
              transition: "color 0.2s",
            }}
          >
            View Audit
            <span
              className="material-symbols-outlined"
              style={{ fontSize: 13 }}
            >
              arrow_forward
            </span>
          </span>
        </div>
      </div>
    </div>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────

function GCEXPage() {
  return (
    <div
      className="antialiased blueprint-grid"
      style={{
        fontFamily: "Inter, sans-serif",
        background: "#F8FAFC",
        color: "#0F172A",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <TopNav />

      <main
        className="mx-auto px-4 md:px-8 lg:px-10 py-8 md:py-10"
        style={{
          maxWidth: 1280,
          width: "100%",
          display: "flex",
          flexDirection: "column",
          gap: 24,
          flex: 1,
        }}
      >
        {/* Breadcrumb */}
        <nav
          style={{
            display: "flex",
            alignItems: "center",
            gap: 6,
            fontFamily: "Inter, sans-serif",
            fontSize: 12,
            color: "#64748b",
          }}
        >
          <Link to="/" style={{ color: "#64748b", textDecoration: "none" }}>
            Home
          </Link>
          <span style={{ color: "#cbd5e1" }}>/</span>
          <Link
            to="/micro-market"
            style={{ color: "#64748b", textDecoration: "none" }}
          >
            Micro Markets
          </Link>
          <span style={{ color: "#cbd5e1" }}>/</span>
          <span style={{ color: "#0F172A", fontWeight: 600 }}>
            Golf Course Extension Road
          </span>
        </nav>

        {/* Header */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "flex-end",
            gap: 16,
            borderBottom: "1px solid rgba(226,232,240,0.6)",
            paddingBottom: 24,
          }}
        >
          <div>
            <span
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: 9,
                fontWeight: 800,
                textTransform: "uppercase",
                letterSpacing: "0.12em",
                color: "#ffffff",
                background: "#0F172A",
                padding: "4px 10px",
                borderRadius: 3,
                display: "inline-block",
                marginBottom: 10,
              }}
            >
              Corridor Dossier
            </span>
            <h1
              style={{
                fontFamily: "Outfit, sans-serif",
                fontSize: "clamp(24px, 4vw, 36px)",
                fontWeight: 800,
                color: "#0F172A",
                lineHeight: 1.2,
                marginBottom: 6,
              }}
            >
              Golf Course Extension Road
            </h1>
            <p
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: 14,
                color: "#64748b",
                maxWidth: 680,
              }}
            >
              {CORRIDOR.desc}
            </p>
          </div>
          <Link
            to="/micro-market"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 4,
              padding: "9px 16px",
              border: "1px solid #e2e8f0",
              borderRadius: 10,
              background: "#ffffff",
              fontFamily: "Inter, sans-serif",
              fontSize: 11,
              fontWeight: 700,
              color: "#475569",
              textDecoration: "none",
              textTransform: "uppercase",
              letterSpacing: "0.06em",
              whiteSpace: "nowrap",
            }}
          >
            <span
              className="material-symbols-outlined"
              style={{ fontSize: 14 }}
            >
              arrow_back
            </span>
            Back to Directory
          </Link>
        </div>

        {/* Telemetry + Scorecard */}
        <div className="grid grid-cols-1 lg:grid-cols-12" style={{ gap: 20 }}>
          <div
            className="lg:col-span-5 grid grid-cols-2"
            style={{ gap: 12 }}
          >
            <TelemetryCard
              label="Average PSFT Rate"
              value={`₹${CORRIDOR.avgPsft.toLocaleString("en-IN")}/sqft`}
              sub={`Range: ${CORRIDOR.priceRange}`}
            />
            <TelemetryCard
              label="Avg Ticket Size"
              value={CORRIDOR.avgTicket}
              sub="Typical Residential Unit"
            />
            <TelemetryCard
              label="Audited Projects"
              value={String(CORRIDOR.activeProjects)}
              sub="Verified on RERA"
            />
            <TelemetryCard
              label="Units Tracked"
              value={`${(CORRIDOR.units / 100000).toFixed(2)} Lakh`}
              sub="Total Mapped Registry"
            />
          </div>

          <div
            className="lg:col-span-7"
            style={{
              background: "#ffffff",
              border: "1px solid rgba(226,232,240,0.8)",
              borderRadius: 16,
              padding: 20,
              boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
            }}
          >
            <h3
              style={{
                fontFamily: "Outfit, sans-serif",
                fontSize: 12,
                fontWeight: 700,
                color: "#0F172A",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                marginBottom: 2,
              }}
            >
              8-Dimension Location Scorecard
            </h3>
            <p
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: 10,
                color: "#94a3b8",
                marginBottom: 16,
              }}
            >
              Location intelligence indicators rated out of 10.0
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2" style={{ gap: "10px 24px" }}>
              {CORRIDOR.scorecard.map((s) => (
                <ScorecardRow key={s.label} label={s.label} score={s.score} />
              ))}
            </div>
          </div>
        </div>

        {/* Price Growth Chart + Expert Analysis */}
        <div className="grid grid-cols-1 lg:grid-cols-12" style={{ gap: 20 }}>
          <div
            className="lg:col-span-7"
            style={{
              background: "#ffffff",
              border: "1px solid rgba(226,232,240,0.8)",
              borderRadius: 16,
              padding: 20,
              boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
            }}
          >
            <h3
              style={{
                fontFamily: "Outfit, sans-serif",
                fontSize: 12,
                fontWeight: 700,
                color: "#0F172A",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                marginBottom: 2,
              }}
            >
              Price Growth Trend (2015 – 2026)
            </h3>
            <p
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: 10,
                color: "#94a3b8",
                marginBottom: 16,
              }}
            >
              Trailing 90-day base residential pricing index
            </p>
            <PriceChart />
            <InventoryPieChart />
          </div>

          <div className="lg:col-span-5" style={{ minHeight: 400 }}>
            <ExpertAnalysisCard />
          </div>
        </div>

        {/* Infrastructure */}
        <section
          style={{
            background: "#ffffff",
            border: "1px solid rgba(226,232,240,0.8)",
            borderRadius: 16,
            padding: 24,
            boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
          }}
        >
          <h3
            style={{
              fontFamily: "Outfit, sans-serif",
              fontSize: 12,
              fontWeight: 700,
              color: "#0F172A",
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              marginBottom: 4,
            }}
          >
            Key Infrastructure Catalog
          </h3>
          <p
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: 10,
              color: "#94a3b8",
              marginBottom: 20,
            }}
          >
            Audited transit terminals, commercial hubs, hospitals, and
            educational facilities servicing the corridor
          </p>
          <div className="grid grid-cols-1 md:grid-cols-5" style={{ gap: 24 }}>
            {(
              [
                {
                  icon: "directions_subway",
                  label: "Transit",
                  items: CORRIDOR.infrastructure.transit,
                },
                {
                  icon: "corporate_fare",
                  label: "CBDs & Hubs",
                  items: CORRIDOR.infrastructure.commercial,
                },
                {
                  icon: "school",
                  label: "Schools",
                  items: CORRIDOR.infrastructure.education,
                },
                {
                  icon: "local_hospital",
                  label: "Healthcare",
                  items: CORRIDOR.infrastructure.healthcare,
                },
                {
                  icon: "shopping_bag",
                  label: "Retail & Leisure",
                  items: CORRIDOR.infrastructure.leisure,
                },
              ] as { icon: string; label: string; items: string[] }[]
            ).map((cat) => (
              <div key={cat.label} style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                    borderBottom: "1px solid #f1f5f9",
                    paddingBottom: 8,
                  }}
                >
                  <span
                    className="material-symbols-outlined"
                    style={{ fontSize: 14, color: "#F59E0B" }}
                  >
                    {cat.icon}
                  </span>
                  <h4
                    style={{
                      fontFamily: "Outfit, sans-serif",
                      fontSize: 10,
                      fontWeight: 700,
                      color: "#0F172A",
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                    }}
                  >
                    {cat.label}
                  </h4>
                </div>
                <ul style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                  {cat.items.map((item) => (
                    <li
                      key={item}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: 6,
                        fontFamily: "Inter, sans-serif",
                        fontSize: 11,
                        color: "#475569",
                        lineHeight: 1.4,
                      }}
                    >
                      <span
                        style={{
                          color: "#F59E0B",
                          fontWeight: 800,
                          flexShrink: 0,
                          marginTop: 1,
                        }}
                      >
                        •
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Projects */}
        <ProjectsSection />
      </main>

      <Footer />
      <MobileBottomNav />
    </div>
  );
}

// ── SVG Price Chart (inline, no external deps) ───────────────────────────────

const priceTrend = [
  { year: 2015, price: 9500 },
  { year: 2018, price: 12000 },
  { year: 2020, price: 13500 },
  { year: 2022, price: 16000 },
  { year: 2024, price: 23000 },
  { year: 2026, price: 27500 },
];

function PriceChart() {
  const width = 600;
  const height = 180;
  const pl = 48;
  const pr = 16;
  const pt = 24;
  const pb = 28;

  const xRange = width - pl - pr;
  const yRange = height - pt - pb;
  const minX = priceTrend[0].year;
  const maxX = priceTrend[priceTrend.length - 1].year;
  const maxY = Math.ceil(Math.max(...priceTrend.map((d) => d.price)) / 5000) * 5000;

  const pts = priceTrend.map((d) => ({
    x: pl + ((d.year - minX) / (maxX - minX)) * xRange,
    y: height - pb - (d.price / maxY) * yRange,
    year: d.year,
    price: d.price,
  }));

  const pathD = pts.map((p, i) => `${i === 0 ? "M" : "L"} ${p.x} ${p.y}`).join(" ");
  const fillD = `${pathD} L ${pts[pts.length - 1].x} ${height - pb} L ${pts[0].x} ${height - pb} Z`;

  const grids = Array.from({ length: 5 }, (_, i) => {
    const val = (i / 4) * maxY;
    const y = height - pb - (i / 4) * yRange;
    return { val, y };
  });

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      style={{ width: "100%", height: "auto" }}
    >
      <defs>
        <linearGradient id="gcexGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#F59E0B" stopOpacity="0" />
        </linearGradient>
      </defs>
      {grids.map(({ val, y }) => (
        <g key={val}>
          <line
            x1={pl}
            y1={y}
            x2={width - pr}
            y2={y}
            stroke="#E2E8F0"
            strokeWidth="1"
            strokeDasharray="3,3"
          />
          <text
            x={pl - 6}
            y={y + 3}
            fill="#94A3B8"
            fontSize="9"
            fontWeight="bold"
            textAnchor="end"
          >
            ₹{(val / 1000).toFixed(0)}k
          </text>
        </g>
      ))}
      {pts.map((p) => (
        <g key={p.year}>
          <line
            x1={p.x}
            y1={height - pb}
            x2={p.x}
            y2={height - pb + 4}
            stroke="#CBD5E1"
            strokeWidth="1.5"
          />
          <text
            x={p.x}
            y={height - pb + 16}
            fill="#94A3B8"
            fontSize="9"
            fontWeight="bold"
            textAnchor="middle"
          >
            {p.year}
          </text>
        </g>
      ))}
      <path d={fillD} fill="url(#gcexGrad)" />
      <path
        d={pathD}
        fill="none"
        stroke="#F59E0B"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {pts.map((p) => (
        <g key={`dot-${p.year}`}>
          <circle
            cx={p.x}
            cy={p.y}
            r="4"
            fill="#F59E0B"
            stroke="#ffffff"
            strokeWidth="2"
          />
          <text
            x={p.x}
            y={p.y - 9}
            fill="#0F172A"
            fontSize="9"
            fontWeight="bold"
            textAnchor="middle"
          >
            ₹{p.price.toLocaleString("en-IN")}
          </text>
        </g>
      ))}
    </svg>
  );
}
