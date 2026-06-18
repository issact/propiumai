import { createFileRoute } from "@tanstack/react-router";
import { IframePage } from "@/home/components/IframePage";

export const Route = createFileRoute("/factsheet")({
  head: () => ({
    meta: [
      { title: "Property FactSheet | prOPIUM.ai" },
      { name: "description", content: "Detailed property intelligence factsheet with scores, investment metrics, and price history for Gurgaon luxury projects." },
    ],
  }),
  component: FactsheetPage,
});

const MOBILE_FIXES = `
/* Tablet: ease the header crowding (768px – 1023px) */
@media (min-width: 768px) and (max-width: 1023px) {
  .no-print > div.max-w-7xl {
    height: auto !important;
    padding: 10px 16px !important;
    gap: 10px !important;
  }
  .no-print > div.max-w-7xl > div:first-child { gap: 12px !important; }
  .no-print > div.max-w-7xl > div:last-child {
    gap: 10px !important;
    flex-wrap: wrap !important;
    justify-content: flex-end !important;
  }
  /* Hide the thin vertical divider so it doesn't crowd the row */
  .no-print > div.max-w-7xl > div:last-child > div.h-6.w-px { display: none !important; }
  .no-print label[for="project-select"] { font-size: 11px !important; }
  .no-print select#project-select { max-width: 170px; }
}

@media (max-width: 767px) {
  /* Native factsheet top header: allow controls to wrap instead of overflowing */
  .no-print > div.max-w-7xl {
    height: auto !important;
    padding: 10px 16px !important;
    flex-wrap: wrap !important;
    gap: 10px !important;
  }
  .no-print > div.max-w-7xl > div {
    flex-wrap: wrap !important;
    gap: 8px !important;
  }
  /* Hide thin vertical divider on mobile too */
  .no-print > div.max-w-7xl > div:last-child > div.h-6.w-px { display: none !important; }
  /* Stack "Select Project:" label above the dropdown */
  .no-print label[for="project-select"] {
    flex-basis: 100% !important;
    width: 100% !important;
    margin-bottom: -4px !important;
  }
  .no-print select#project-select {
    max-width: 100% !important;
    width: auto !important;
    flex: 1 1 auto !important;
  }

  /* Factsheet page padding tighter on mobile */
  .dashboard-mode .factsheet-page {
    padding: 1rem !important;
    border-radius: 0.75rem !important;
  }
  #factsheet-wrapper { padding-left: 12px !important; padding-right: 12px !important; }

  /* Hero "prOPIUM INTELLIGENCE REPORT" card: stack so content isn't clipped */
  .factsheet-page .bg-primary.text-white.p-6.rounded-lg.flex.justify-between {
    flex-direction: column !important;
    align-items: flex-start !important;
    gap: 14px !important;
    padding: 18px !important;
  }
  .factsheet-page .bg-primary.text-white h1.text-3xl {
    font-size: 1.5rem !important;
    line-height: 1.15 !important;
    word-break: break-word;
  }
  .factsheet-page .bg-primary.text-white .text-right.z-10 {
    align-self: flex-start !important;
    text-align: left !important;
    align-items: flex-start !important;
  }

  /* Report date / Analyst / RERA / Classification row: 2-up grid on mobile */
  .factsheet-page .grid.grid-cols-4.gap-4.py-3\\.5 {
    grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
    gap: 10px 14px !important;
    padding: 12px !important;
  }
  .factsheet-page .grid.grid-cols-4.gap-4.py-3\\.5 > div {
    text-align: left !important;
    white-space: normal !important;
    overflow: visible !important;
    text-overflow: clip !important;
    display: flex;
    flex-direction: column;
  }
  .factsheet-page .grid.grid-cols-4.gap-4.py-3\\.5 > div > span {
    margin-left: 0 !important;
  }

  /* Price trend chart: make it taller so the line is readable */
  .factsheet-page .w-full.h-64 { height: 22rem !important; }
}
`;

function FactsheetPage() {
  return (
    <IframePage
      src="/factsheet.html"
      title="Property FactSheet"
      showTopNav={false}
      injectCss={MOBILE_FIXES}
    />
  );
}
