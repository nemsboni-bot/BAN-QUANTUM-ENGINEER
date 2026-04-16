"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cylinder, Info, BookOpen } from "lucide-react";
import {
  casingSizes,
  tubingSizes,
  drillPipeSizes,
  drillCollarSizes,
  gradeProperties,
  drillPipeGradeProperties,
  type CasingData,
  type TubingData,
  type DrillPipeData,
  type DrillCollarData,
} from "@/data/tubular-goods";

type Product = "casing" | "tubing" | "drillpipe" | "drillcollar";

const productTabs: { id: Product; label: string; spec: string; icon: string }[] = [
  { id: "casing",      label: "Casing",       spec: "API 5CT",       icon: "OD 4-1/2\" – 20\""   },
  { id: "tubing",      label: "Tubing",       spec: "API 5CT",       icon: "OD 1.050\" – 4-1/2\"" },
  { id: "drillpipe",   label: "Drill Pipe",   spec: "API 5DP / 7-1", icon: "OD 2-3/8\" – 6-5/8\"" },
  { id: "drillcollar", label: "Drill Collar", spec: "API 7-1",       icon: "OD 3-1/8\" – 12\""   },
];

// ---------- Size formatting helpers ----------
function formatOd(od: number): string {
  // Display common oilfield OD sizes in fractional inches (e.g. 4.500 → 4-1/2")
  const fractionMap: Record<string, string> = {
    "1.050":  '1.050"',
    "1.315":  '1.315"',
    "1.660":  '1.660"',
    "1.900":  '1.900"',
    "2.375":  '2-3/8"',
    "2.875":  '2-7/8"',
    "3.500":  '3-1/2"',
    "4.000":  '4"',
    "4.500":  '4-1/2"',
    "5.000":  '5"',
    "5.500":  '5-1/2"',
    "5.875":  '5-7/8"',
    "6.625":  '6-5/8"',
    "7.000":  '7"',
    "7.625":  '7-5/8"',
    "8.625":  '8-5/8"',
    "9.625":  '9-5/8"',
    "10.750": '10-3/4"',
    "11.750": '11-3/4"',
    "13.375": '13-3/8"',
    "16.000": '16"',
    "18.625": '18-5/8"',
    "20.000": '20"',
    // Drill collar sizes
    "3.125":  '3-1/8"',
    "4.125":  '4-1/8"',
    "4.750":  '4-3/4"',
    "6.250":  '6-1/4"',
    "6.500":  '6-1/2"',
    "6.750":  '6-3/4"',
    "7.250":  '7-1/4"',
    "8.000":  '8"',
    "9.000":  '9"',
    "9.500":  '9-1/2"',
    "10.000": '10"',
    "11.000": '11"',
    "12.000": '12"',
  };
  return fractionMap[od.toFixed(3)] ?? `${od}"`;
}

// ---------- Pipe cross-section drawing ----------
function PipeSection({
  od,
  id,
  wall,
  label,
}: {
  od: number;
  id: number;
  wall: number;
  label: string;
}) {
  // Scale so the pipe OD fills ~70% of the 320px viewbox
  const maxR = 110;
  const scale = maxR / (od / 2);
  const rOd = (od / 2) * scale;
  const rId = (id / 2) * scale;
  const cx = 170;
  const cy = 150;

  return (
    <svg viewBox="0 0 340 300" className="w-full max-w-[340px]">
      <defs>
        <pattern
          id="hatch-steel"
          patternUnits="userSpaceOnUse"
          width="6"
          height="6"
          patternTransform="rotate(45)"
        >
          <line x1="0" y1="0" x2="0" y2="6" stroke="var(--accent)" strokeWidth="0.8" strokeOpacity="0.4" />
        </pattern>
      </defs>

      {/* Title block */}
      <text x="170" y="16" textAnchor="middle" fontSize="10" fontWeight="bold" fill="var(--foreground)" fontFamily="monospace">
        {label} — SECTION A-A
      </text>

      {/* Pipe wall: filled annulus */}
      <path
        d={`M ${cx - rOd} ${cy} a ${rOd} ${rOd} 0 1 0 ${rOd * 2} 0 a ${rOd} ${rOd} 0 1 0 ${-rOd * 2} 0 z
            M ${cx - rId} ${cy} a ${rId} ${rId} 0 1 1 ${rId * 2} 0 a ${rId} ${rId} 0 1 1 ${-rId * 2} 0 z`}
        fillRule="evenodd"
        fill="url(#hatch-steel)"
        stroke="var(--accent)"
        strokeWidth="1.5"
      />
      {/* Inner circle (ID) */}
      <circle cx={cx} cy={cy} r={rId} fill="var(--background)" stroke="var(--steel-light)" strokeWidth="1" strokeOpacity="0.6" />

      {/* Centerlines */}
      <line x1={cx - rOd - 20} y1={cy} x2={cx + rOd + 20} y2={cy} stroke="var(--steel-light)" strokeWidth="0.5" strokeDasharray="6 2 1 2" strokeOpacity="0.6" />
      <line x1={cx} y1={cy - rOd - 20} x2={cx} y2={cy + rOd + 20} stroke="var(--steel-light)" strokeWidth="0.5" strokeDasharray="6 2 1 2" strokeOpacity="0.6" />

      {/* OD dimension (top) */}
      <line x1={cx - rOd} y1={40} x2={cx + rOd} y2={40} stroke="var(--accent)" strokeWidth="0.8" />
      <line x1={cx - rOd} y1={35} x2={cx - rOd} y2={45} stroke="var(--accent)" strokeWidth="0.8" />
      <line x1={cx + rOd} y1={35} x2={cx + rOd} y2={45} stroke="var(--accent)" strokeWidth="0.8" />
      <line x1={cx - rOd} y1={cy - rOd} x2={cx - rOd} y2={40} stroke="var(--accent)" strokeWidth="0.4" strokeDasharray="2 2" />
      <line x1={cx + rOd} y1={cy - rOd} x2={cx + rOd} y2={40} stroke="var(--accent)" strokeWidth="0.4" strokeDasharray="2 2" />
      <text x={cx} y={33} textAnchor="middle" fontSize="10" fontWeight="bold" fill="var(--accent)" fontFamily="monospace">
        OD {od.toFixed(3)}&quot;
      </text>

      {/* ID dimension (inside) */}
      <line x1={cx - rId} y1={cy + 4} x2={cx + rId} y2={cy + 4} stroke="var(--primary-light)" strokeWidth="0.8" />
      <text x={cx} y={cy + 16} textAnchor="middle" fontSize="9" fontWeight="bold" fill="var(--primary-light)" fontFamily="monospace">
        ID {id.toFixed(3)}&quot;
      </text>

      {/* Wall thickness callout */}
      <line
        x1={cx + rId}
        y1={cy - rId / 1.5}
        x2={cx + rOd + 30}
        y2={cy - rId / 1.5 - 20}
        stroke="var(--accent)"
        strokeWidth="0.6"
      />
      <line
        x1={cx + rOd + 30}
        y1={cy - rId / 1.5 - 20}
        x2={cx + rOd + 60}
        y2={cy - rId / 1.5 - 20}
        stroke="var(--accent)"
        strokeWidth="0.6"
      />
      <text x={cx + rOd + 32} y={cy - rId / 1.5 - 24} fontSize="9" fontWeight="bold" fill="var(--accent)" fontFamily="monospace">
        t = {wall.toFixed(3)}&quot;
      </text>

      {/* Bottom scale / label */}
      <text x={170} y={286} textAnchor="middle" fontSize="8" fill="var(--steel)" fontFamily="monospace">
        Scale: schematic (not to scale)
      </text>
    </svg>
  );
}

// ---------- Main Component ----------
export function TubularGoodsReference() {
  const [product, setProduct] = useState<Product>("casing");
  const [selectedOd, setSelectedOd] = useState<number>(casingSizes[0].od);
  const [selectedIdx, setSelectedIdx] = useState<number>(0);

  const { rows, uniqueOds, specTitle } = useMemo(() => {
    if (product === "casing") {
      return {
        rows: casingSizes,
        uniqueOds: Array.from(new Set(casingSizes.map((c) => c.od))),
        specTitle: "API 5CT Casing",
      };
    }
    if (product === "tubing") {
      return {
        rows: tubingSizes,
        uniqueOds: Array.from(new Set(tubingSizes.map((c) => c.od))),
        specTitle: "API 5CT Tubing",
      };
    }
    if (product === "drillpipe") {
      return {
        rows: drillPipeSizes,
        uniqueOds: Array.from(new Set(drillPipeSizes.map((c) => c.od))),
        specTitle: "API 5DP / 7-1 Drill Pipe",
      };
    }
    return {
      rows: drillCollarSizes,
      uniqueOds: Array.from(new Set(drillCollarSizes.map((c) => c.od))),
      specTitle: "API 7-1 Drill Collar",
    };
  }, [product]);

  const filteredRows = useMemo(
    () => rows.filter((r) => r.od === selectedOd),
    [rows, selectedOd]
  );

  const selectedRow = filteredRows[selectedIdx] ?? filteredRows[0];

  const handleProductChange = (p: Product) => {
    setProduct(p);
    const firstOd =
      p === "casing"
        ? casingSizes[0].od
        : p === "tubing"
        ? tubingSizes[0].od
        : p === "drillpipe"
        ? drillPipeSizes[0].od
        : drillCollarSizes[0].od;
    setSelectedOd(firstOd);
    setSelectedIdx(0);
  };

  const handleOdChange = (od: number) => {
    setSelectedOd(od);
    setSelectedIdx(0);
  };

  // Grade properties for the selected row (drill collars use material, not grades)
  const currentGrades = selectedRow && "grades" in selectedRow ? (selectedRow as CasingData | TubingData | DrillPipeData).grades : [];
  const gradeTable =
    product === "drillpipe" ? drillPipeGradeProperties : gradeProperties;
  const gradeDetails = product !== "drillcollar" ? gradeTable.filter((g) => currentGrades.includes(g.grade)) : [];

  return (
    <div className="bg-surface border border-border rounded-2xl overflow-hidden">
      {/* Header */}
      <div className="px-6 py-4 bg-gradient-to-r from-accent/10 to-primary/10 border-b border-border">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center">
            <Cylinder className="w-5 h-5 text-accent" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-foreground">API Tubular Goods Reference</h3>
            <p className="text-xs text-steel">Casing, tubing, drill pipe &amp; drill collars per API 5CT / 5DP / 7-1</p>
          </div>
        </div>
      </div>

      <div className="p-6">
        {/* Product selector tabs */}
        <div className="mb-6 flex flex-wrap gap-2 border-b border-border pb-4">
          {productTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => handleProductChange(tab.id)}
              className={`flex flex-col items-start px-4 py-2.5 text-left rounded-lg border transition-all ${
                product === tab.id
                  ? "bg-accent text-white border-accent shadow-lg shadow-accent/20"
                  : "bg-background text-steel border-border hover:border-accent hover:text-accent"
              }`}
            >
              <span className="text-sm font-bold">{tab.label}</span>
              <span className={`text-[10px] font-mono ${product === tab.id ? "text-white/80" : "text-steel-light"}`}>
                {tab.spec} · {tab.icon}
              </span>
            </button>
          ))}
        </div>

        {/* OD selector */}
        <div className="mb-6">
          <label className="block text-xs font-semibold text-steel uppercase tracking-wider mb-2">
            Nominal OD Size
          </label>
          <div className="flex gap-2 flex-wrap">
            {uniqueOds.map((od) => (
              <button
                key={od}
                onClick={() => handleOdChange(od)}
                className={`px-3 py-2 text-sm font-mono font-medium rounded-lg border transition-all ${
                  selectedOd === od
                    ? "bg-accent text-white border-accent shadow-lg shadow-accent/20"
                    : "bg-background text-steel border-border hover:border-accent hover:text-accent"
                }`}
              >
                {formatOd(od)}
              </button>
            ))}
          </div>
        </div>

        {/* Weight selector (sub-rows for chosen OD) */}
        {filteredRows.length > 1 && (
          <div className="mb-6">
            <label className="block text-xs font-semibold text-steel uppercase tracking-wider mb-2">
              Nominal Weight (lb/ft)
            </label>
            <div className="flex gap-2 flex-wrap">
              {filteredRows.map((row, i) => (
                <button
                  key={`${row.od}-${row.weight}-${i}`}
                  onClick={() => setSelectedIdx(i)}
                  className={`px-3 py-2 text-sm font-mono rounded-lg border transition-all ${
                    selectedIdx === i
                      ? "bg-accent/20 text-accent border-accent font-bold"
                      : "bg-background text-steel border-border hover:border-accent"
                  }`}
                >
                  {row.weight.toFixed(2)}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Main content: drawing + dimensions */}
        <AnimatePresence mode="wait">
          {selectedRow && (
            <motion.div
              key={`${product}-${selectedOd}-${selectedIdx}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
            >
              {/* Selected summary bar */}
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-border">
                <div>
                  <span className="text-2xl font-bold text-foreground font-mono">
                    {formatOd(selectedRow.od)}
                  </span>
                  <span className="ml-3 text-lg font-mono text-accent font-semibold">
                    {selectedRow.weight.toFixed(2)} lb/ft
                  </span>
                </div>
                <span className="px-3 py-1 bg-accent/10 text-accent text-xs font-semibold rounded-full border border-accent/20">
                  {specTitle}
                </span>
              </div>

              {/* Drawing + dimensions grid */}
              <div className="grid lg:grid-cols-2 gap-6">
                {/* Cross-section drawing */}
                <div className="bg-background rounded-xl border border-border p-4 flex items-center justify-center min-h-[320px]">
                  <PipeSection
                    od={selectedRow.od}
                    id={selectedRow.id}
                    wall={selectedRow.wall}
                    label={formatOd(selectedRow.od)}
                  />
                </div>

                {/* Dimension table */}
                <div className="space-y-2">
                  {[
                    { label: "Outside Diameter (OD)", value: `${selectedRow.od.toFixed(3)}"` },
                    { label: product === "drillcollar" ? "Bore (ID)" : "Inside Diameter (ID)", value: `${selectedRow.id.toFixed(3)}"` },
                    { label: "Wall Thickness (t)",    value: `${selectedRow.wall.toFixed(3)}"` },
                    ...("drift" in selectedRow
                      ? [{ label: "Drift Diameter", value: `${(selectedRow as CasingData | TubingData).drift.toFixed(3)}"` }]
                      : []),
                    { label: "Nominal Weight",        value: `${selectedRow.weight.toFixed(2)} lb/ft` },
                    ...(product === "drillcollar"
                      ? [
                          { label: "Connection", value: (selectedRow as DrillCollarData).connection },
                          { label: "Material",   value: (selectedRow as DrillCollarData).material },
                        ]
                      : [
                          {
                            label: "End Finish",
                            value:
                              product === "tubing"
                                ? (selectedRow as TubingData).end
                                : product === "casing"
                                ? "BTC / LTC / STC"
                                : "Tool Joint (NC/REG)",
                          },
                          { label: "Available Grades", value: currentGrades.join(", ") },
                        ]),
                  ].map((dim, i) => (
                    <motion.div
                      key={dim.label}
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.04, duration: 0.2 }}
                      className="flex items-center justify-between px-4 py-2.5 bg-background rounded-lg border border-border"
                    >
                      <span className="text-sm text-steel">{dim.label}</span>
                      <span className="text-sm font-mono font-bold text-foreground text-right ml-4">
                        {dim.value}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Grade property details */}
              {gradeDetails.length > 0 && (
                <div className="mt-6">
                  <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-3">
                    Grade Properties (per API 5CT / 5DP)
                  </h4>
                  <div className="overflow-x-auto rounded-lg border border-border">
                    <table className="w-full text-sm">
                      <thead className="bg-background/60">
                        <tr className="text-left text-xs text-steel uppercase">
                          <th className="px-3 py-2 font-semibold">Grade</th>
                          <th className="px-3 py-2 font-semibold text-right">Min Yield (psi)</th>
                          <th className="px-3 py-2 font-semibold text-right">Max Yield (psi)</th>
                          <th className="px-3 py-2 font-semibold text-right">Min Tensile (psi)</th>
                          <th className="px-3 py-2 font-semibold">Notes</th>
                        </tr>
                      </thead>
                      <tbody>
                        {gradeDetails.map((g) => (
                          <tr key={g.grade} className="border-t border-border text-foreground">
                            <td className="px-3 py-2 font-mono font-bold text-accent">{g.grade}</td>
                            <td className="px-3 py-2 font-mono text-right">{g.minYield.toLocaleString()}</td>
                            <td className="px-3 py-2 font-mono text-right">{g.maxYield.toLocaleString()}</td>
                            <td className="px-3 py-2 font-mono text-right">{g.minTensile.toLocaleString()}</td>
                            <td className="px-3 py-2 text-xs text-steel">{g.notes}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {/* Reference note */}
              <div className="mt-6 flex items-start gap-2 px-4 py-3 bg-accent/5 border border-accent/10 rounded-lg">
                <Info className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                <p className="text-xs text-steel leading-relaxed">
                  <span className="font-semibold text-foreground">Reference:</span> Dimensions
                  per API Specification 5CT (Casing &amp; Tubing), API 5DP / 7-1 (Drill Pipe
                  &amp; Drill Collars), and API 5B (Thread Gauging). Drift diameter calculated
                  per API 5CT Table C.4. Grade mechanical properties per API 5CT Table C.5.
                  Drill collar weights calculated at 489.5 lb/ft&sup3; steel density. Drill collar
                  connections per API Spec 7-2. Sour service grades (L-80, C-90, T-95, C-110)
                  comply with NACE MR0175 / ISO 15156. Values shown are typical — always verify
                  against the applicable edition and the mill certificate for the specific
                  material lot.
                </p>
              </div>

              <div className="mt-3 flex items-start gap-2 px-4 py-3 bg-surface border border-border rounded-lg">
                <BookOpen className="w-4 h-4 text-primary-light mt-0.5 shrink-0" />
                <p className="text-xs text-steel leading-relaxed">
                  <span className="font-semibold text-foreground">Applicable Standards:</span>{" "}
                  API 5CT · API 5B · API 5L · API 5DP · API Spec 7-1 · API Spec 7-2 ·
                  API RP 5C1 · API Bulletin 5C3 (formulas) · NACE MR0175 / ISO 15156
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
