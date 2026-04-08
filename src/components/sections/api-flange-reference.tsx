"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Ruler, CircleDot, Info } from "lucide-react";

/*
  API 6A / ASME B16.5 Flange Reference Data
  Dimensions in inches, pressures in PSI working pressure
*/

interface FlangeData {
  size: string;
  bore: number;
  pressure: number;
  od: number;
  boltCircle: number;
  numBolts: number;
  boltSize: string;
  thickness: number;
  hubOd: number;
  ringGasket: string;
}

const flangeData: FlangeData[] = [
  // 2-1/16" flanges
  { size: '2-1/16"', bore: 2.063, pressure: 2000, od: 9.625, boltCircle: 7.50, numBolts: 8, boltSize: '3/4"', thickness: 1.19, hubOd: 4.13, ringGasket: "RX-23" },
  { size: '2-1/16"', bore: 2.063, pressure: 3000, od: 9.625, boltCircle: 7.50, numBolts: 8, boltSize: '3/4"', thickness: 1.31, hubOd: 4.13, ringGasket: "RX-23" },
  { size: '2-1/16"', bore: 2.063, pressure: 5000, od: 9.625, boltCircle: 7.50, numBolts: 8, boltSize: '7/8"', thickness: 1.50, hubOd: 4.25, ringGasket: "RX-24" },
  { size: '2-1/16"', bore: 2.063, pressure: 10000, od: 11.00, boltCircle: 8.50, numBolts: 8, boltSize: '1"', thickness: 2.00, hubOd: 4.75, ringGasket: "BX-151" },
  { size: '2-1/16"', bore: 2.063, pressure: 15000, od: 11.50, boltCircle: 9.00, numBolts: 8, boltSize: '1-1/8"', thickness: 2.50, hubOd: 5.00, ringGasket: "BX-152" },
  { size: '2-1/16"', bore: 2.063, pressure: 20000, od: 12.25, boltCircle: 9.50, numBolts: 8, boltSize: '1-1/4"', thickness: 3.06, hubOd: 5.25, ringGasket: "BX-152" },

  // 2-9/16" flanges
  { size: '2-9/16"', bore: 2.563, pressure: 2000, od: 10.625, boltCircle: 8.50, numBolts: 8, boltSize: '3/4"', thickness: 1.25, hubOd: 4.88, ringGasket: "RX-26" },
  { size: '2-9/16"', bore: 2.563, pressure: 3000, od: 10.625, boltCircle: 8.50, numBolts: 8, boltSize: '7/8"', thickness: 1.38, hubOd: 4.88, ringGasket: "RX-27" },
  { size: '2-9/16"', bore: 2.563, pressure: 5000, od: 10.625, boltCircle: 8.50, numBolts: 8, boltSize: '7/8"', thickness: 1.63, hubOd: 5.00, ringGasket: "RX-27" },
  { size: '2-9/16"', bore: 2.563, pressure: 10000, od: 12.25, boltCircle: 9.50, numBolts: 8, boltSize: '1-1/8"', thickness: 2.19, hubOd: 5.50, ringGasket: "BX-153" },
  { size: '2-9/16"', bore: 2.563, pressure: 15000, od: 13.00, boltCircle: 10.25, numBolts: 8, boltSize: '1-1/4"', thickness: 2.75, hubOd: 5.75, ringGasket: "BX-154" },
  { size: '2-9/16"', bore: 2.563, pressure: 20000, od: 13.75, boltCircle: 10.75, numBolts: 8, boltSize: '1-3/8"', thickness: 3.31, hubOd: 6.00, ringGasket: "BX-154" },

  // 3-1/8" flanges
  { size: '3-1/8"', bore: 3.125, pressure: 2000, od: 11.50, boltCircle: 9.25, numBolts: 8, boltSize: '7/8"', thickness: 1.38, hubOd: 5.63, ringGasket: "RX-31" },
  { size: '3-1/8"', bore: 3.125, pressure: 3000, od: 11.50, boltCircle: 9.25, numBolts: 8, boltSize: '7/8"', thickness: 1.50, hubOd: 5.63, ringGasket: "RX-35" },
  { size: '3-1/8"', bore: 3.125, pressure: 5000, od: 11.50, boltCircle: 9.25, numBolts: 8, boltSize: '1"', thickness: 1.75, hubOd: 5.75, ringGasket: "RX-35" },
  { size: '3-1/8"', bore: 3.125, pressure: 10000, od: 13.75, boltCircle: 10.75, numBolts: 8, boltSize: '1-1/4"', thickness: 2.50, hubOd: 6.25, ringGasket: "BX-155" },
  { size: '3-1/8"', bore: 3.125, pressure: 15000, od: 14.50, boltCircle: 11.50, numBolts: 8, boltSize: '1-3/8"', thickness: 3.13, hubOd: 6.75, ringGasket: "BX-156" },
  { size: '3-1/8"', bore: 3.125, pressure: 20000, od: 15.25, boltCircle: 12.00, numBolts: 12, boltSize: '1-1/4"', thickness: 3.69, hubOd: 7.00, ringGasket: "BX-156" },

  // 4-1/16" flanges
  { size: '4-1/16"', bore: 4.063, pressure: 2000, od: 12.75, boltCircle: 10.75, numBolts: 8, boltSize: '7/8"', thickness: 1.44, hubOd: 6.63, ringGasket: "RX-37" },
  { size: '4-1/16"', bore: 4.063, pressure: 3000, od: 12.75, boltCircle: 10.75, numBolts: 8, boltSize: '7/8"', thickness: 1.63, hubOd: 6.63, ringGasket: "RX-39" },
  { size: '4-1/16"', bore: 4.063, pressure: 5000, od: 13.75, boltCircle: 11.00, numBolts: 8, boltSize: '1-1/8"', thickness: 2.00, hubOd: 7.00, ringGasket: "RX-39" },
  { size: '4-1/16"', bore: 4.063, pressure: 10000, od: 15.50, boltCircle: 12.50, numBolts: 8, boltSize: '1-3/8"', thickness: 2.88, hubOd: 7.75, ringGasket: "BX-157" },
  { size: '4-1/16"', bore: 4.063, pressure: 15000, od: 16.50, boltCircle: 13.25, numBolts: 12, boltSize: '1-1/4"', thickness: 3.50, hubOd: 8.00, ringGasket: "BX-158" },
  { size: '4-1/16"', bore: 4.063, pressure: 20000, od: 17.50, boltCircle: 14.00, numBolts: 12, boltSize: '1-3/8"', thickness: 4.13, hubOd: 8.50, ringGasket: "BX-158" },

  // 7-1/16" flanges
  { size: '7-1/16"', bore: 7.063, pressure: 2000, od: 17.50, boltCircle: 14.50, numBolts: 12, boltSize: '1"', thickness: 1.75, hubOd: 10.00, ringGasket: "RX-44" },
  { size: '7-1/16"', bore: 7.063, pressure: 3000, od: 17.50, boltCircle: 14.50, numBolts: 12, boltSize: '1-1/8"', thickness: 2.06, hubOd: 10.25, ringGasket: "RX-45" },
  { size: '7-1/16"', bore: 7.063, pressure: 5000, od: 20.00, boltCircle: 16.50, numBolts: 12, boltSize: '1-1/4"', thickness: 2.75, hubOd: 11.00, ringGasket: "RX-46" },
  { size: '7-1/16"', bore: 7.063, pressure: 10000, od: 23.00, boltCircle: 19.25, numBolts: 12, boltSize: '1-5/8"', thickness: 3.75, hubOd: 12.50, ringGasket: "BX-164" },
  { size: '7-1/16"', bore: 7.063, pressure: 15000, od: 25.25, boltCircle: 21.00, numBolts: 12, boltSize: '1-7/8"', thickness: 4.63, hubOd: 13.25, ringGasket: "BX-165" },

  // 9" flanges
  { size: '9"', bore: 9.000, pressure: 2000, od: 21.00, boltCircle: 17.75, numBolts: 12, boltSize: '1-1/8"', thickness: 2.00, hubOd: 12.50, ringGasket: "RX-49" },
  { size: '9"', bore: 9.000, pressure: 3000, od: 21.00, boltCircle: 17.75, numBolts: 12, boltSize: '1-1/4"', thickness: 2.38, hubOd: 12.75, ringGasket: "RX-50" },
  { size: '9"', bore: 9.000, pressure: 5000, od: 23.25, boltCircle: 19.50, numBolts: 12, boltSize: '1-3/8"', thickness: 3.13, hubOd: 13.50, ringGasket: "RX-50" },
  { size: '9"', bore: 9.000, pressure: 10000, od: 27.25, boltCircle: 23.00, numBolts: 16, boltSize: '1-5/8"', thickness: 4.25, hubOd: 15.00, ringGasket: "BX-168" },

  // 11" flanges
  { size: '11"', bore: 11.000, pressure: 2000, od: 22.75, boltCircle: 19.50, numBolts: 12, boltSize: '1-1/8"', thickness: 2.13, hubOd: 14.50, ringGasket: "RX-53" },
  { size: '11"', bore: 11.000, pressure: 3000, od: 24.00, boltCircle: 20.50, numBolts: 12, boltSize: '1-1/4"', thickness: 2.63, hubOd: 15.00, ringGasket: "RX-54" },
  { size: '11"', bore: 11.000, pressure: 5000, od: 26.75, boltCircle: 22.50, numBolts: 12, boltSize: '1-1/2"', thickness: 3.50, hubOd: 16.00, ringGasket: "RX-54" },
  { size: '11"', bore: 11.000, pressure: 10000, od: 31.00, boltCircle: 26.50, numBolts: 16, boltSize: '1-3/4"', thickness: 4.75, hubOd: 17.50, ringGasket: "BX-169" },

  // 13-5/8" flanges
  { size: '13-5/8"', bore: 13.625, pressure: 2000, od: 26.50, boltCircle: 22.75, numBolts: 12, boltSize: '1-1/4"', thickness: 2.38, hubOd: 17.25, ringGasket: "RX-57" },
  { size: '13-5/8"', bore: 13.625, pressure: 3000, od: 27.75, boltCircle: 24.00, numBolts: 12, boltSize: '1-3/8"', thickness: 2.88, hubOd: 17.75, ringGasket: "RX-57" },
  { size: '13-5/8"', bore: 13.625, pressure: 5000, od: 30.50, boltCircle: 26.00, numBolts: 16, boltSize: '1-3/8"', thickness: 3.88, hubOd: 19.00, ringGasket: "RX-57" },
  { size: '13-5/8"', bore: 13.625, pressure: 10000, od: 35.00, boltCircle: 30.50, numBolts: 16, boltSize: '1-7/8"', thickness: 5.25, hubOd: 20.50, ringGasket: "BX-170" },

  // 16-3/4" flanges
  { size: '16-3/4"', bore: 16.750, pressure: 2000, od: 29.50, boltCircle: 25.75, numBolts: 16, boltSize: '1-1/4"', thickness: 2.63, hubOd: 20.50, ringGasket: "RX-66" },
  { size: '16-3/4"', bore: 16.750, pressure: 3000, od: 31.00, boltCircle: 27.00, numBolts: 16, boltSize: '1-3/8"', thickness: 3.13, hubOd: 21.00, ringGasket: "RX-66" },
  { size: '16-3/4"', bore: 16.750, pressure: 5000, od: 34.00, boltCircle: 29.50, numBolts: 16, boltSize: '1-1/2"', thickness: 4.25, hubOd: 22.50, ringGasket: "RX-66" },
  { size: '16-3/4"', bore: 16.750, pressure: 10000, od: 38.75, boltCircle: 34.00, numBolts: 20, boltSize: '1-7/8"', thickness: 5.75, hubOd: 24.00, ringGasket: "BX-172" },

  // 21-1/4" flanges
  { size: '21-1/4"', bore: 21.250, pressure: 2000, od: 34.75, boltCircle: 30.50, numBolts: 16, boltSize: '1-3/8"', thickness: 2.88, hubOd: 25.50, ringGasket: "RX-73" },
  { size: '21-1/4"', bore: 21.250, pressure: 3000, od: 36.75, boltCircle: 32.50, numBolts: 16, boltSize: '1-1/2"', thickness: 3.50, hubOd: 26.00, ringGasket: "RX-73" },
];

const allSizes = Array.from(new Set(flangeData.map((f) => f.size)));

const pressureColors: Record<number, string> = {
  2000: "text-green-400",
  3000: "text-emerald-400",
  5000: "text-yellow-400",
  10000: "text-orange-400",
  15000: "text-red-400",
  20000: "text-red-500",
};

export function ApiFlangeReference() {
  const [selectedSize, setSelectedSize] = useState(allSizes[0]);
  const [selectedPressure, setSelectedPressure] = useState<number | null>(null);

  const availablePressures = useMemo(() => {
    return flangeData
      .filter((f) => f.size === selectedSize)
      .map((f) => f.pressure)
      .sort((a, b) => a - b);
  }, [selectedSize]);

  const currentFlange = useMemo(() => {
    if (!selectedPressure) return null;
    return flangeData.find(
      (f) => f.size === selectedSize && f.pressure === selectedPressure
    ) || null;
  }, [selectedSize, selectedPressure]);

  // Auto-select first pressure when size changes
  const handleSizeChange = (size: string) => {
    setSelectedSize(size);
    const pressures = flangeData.filter((f) => f.size === size).map((f) => f.pressure);
    setSelectedPressure(pressures[0] || null);
  };

  // Initialize first pressure on mount
  if (selectedPressure === null && availablePressures.length > 0) {
    setSelectedPressure(availablePressures[0]);
  }

  return (
    <div className="bg-surface border border-border rounded-2xl overflow-hidden">
      {/* Header */}
      <div className="px-6 py-4 bg-gradient-to-r from-accent/10 to-primary/10 border-b border-border">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center">
            <Ruler className="w-5 h-5 text-accent" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-foreground">API 6A Flange Dimension Reference</h3>
            <p className="text-xs text-steel">Interactive slide rule — select size and pressure rating</p>
          </div>
        </div>
      </div>

      <div className="p-6">
        {/* Size selector - slide rule style */}
        <div className="mb-6">
          <label className="block text-xs font-semibold text-steel uppercase tracking-wider mb-2">
            Nominal Bore Size
          </label>
          <div className="flex gap-2 flex-wrap">
            {allSizes.map((size) => (
              <button
                key={size}
                onClick={() => handleSizeChange(size)}
                className={`px-3 py-2 text-sm font-mono font-medium rounded-lg border transition-all ${
                  selectedSize === size
                    ? "bg-accent text-white border-accent shadow-lg shadow-accent/20"
                    : "bg-background text-steel border-border hover:border-accent hover:text-accent"
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* Pressure slider */}
        <div className="mb-6">
          <label className="block text-xs font-semibold text-steel uppercase tracking-wider mb-2">
            Working Pressure (PSI)
          </label>
          <div className="flex gap-2 flex-wrap">
            {availablePressures.map((p) => (
              <button
                key={p}
                onClick={() => setSelectedPressure(p)}
                className={`px-4 py-2 text-sm font-mono font-bold rounded-lg border transition-all ${
                  selectedPressure === p
                    ? "bg-accent text-white border-accent shadow-lg shadow-accent/20"
                    : `bg-background border-border hover:border-accent ${pressureColors[p] || "text-steel"}`
                }`}
              >
                {p.toLocaleString()}
              </button>
            ))}
          </div>
          {/* Pressure scale bar */}
          <div className="mt-3 h-2 rounded-full bg-gradient-to-r from-green-500/30 via-yellow-500/30 via-orange-500/30 to-red-500/30 relative">
            {selectedPressure && (
              <motion.div
                layout
                className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-accent rounded-full border-2 border-white shadow-lg"
                style={{
                  left: `${((availablePressures.indexOf(selectedPressure)) / Math.max(availablePressures.length - 1, 1)) * 100}%`,
                  marginLeft: "-8px",
                }}
              />
            )}
          </div>
          <div className="flex justify-between mt-1">
            <span className="text-[10px] text-green-400 font-mono">LOW</span>
            <span className="text-[10px] text-red-400 font-mono">HIGH</span>
          </div>
        </div>

        {/* Flange dimension display */}
        <AnimatePresence mode="wait">
          {currentFlange && (
            <motion.div
              key={`${currentFlange.size}-${currentFlange.pressure}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
            >
              {/* Dimension header */}
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-border">
                <div>
                  <span className="text-2xl font-bold text-foreground font-mono">{currentFlange.size}</span>
                  <span className="ml-3 text-lg font-bold font-mono" style={{ color: selectedPressure && selectedPressure >= 10000 ? "#f87171" : selectedPressure && selectedPressure >= 5000 ? "#facc15" : "#4ade80" }}>
                    {currentFlange.pressure.toLocaleString()} PSI
                  </span>
                </div>
                <span className="px-3 py-1 bg-accent/10 text-accent text-xs font-semibold rounded-full border border-accent/20">
                  API 6A
                </span>
              </div>

              {/* SVG Cross-section diagram */}
              <div className="flex flex-col lg:flex-row gap-6">
                <div className="flex-1 bg-background rounded-xl border border-border p-4 flex items-center justify-center min-h-[280px]">
                  <svg viewBox="0 0 300 280" className="w-full max-w-[300px]">
                    {/* Flange cross-section */}
                    <defs>
                      <linearGradient id="flangeGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.3" />
                        <stop offset="100%" stopColor="var(--primary)" stopOpacity="0.2" />
                      </linearGradient>
                    </defs>

                    {/* Flange body - top view representation */}
                    {/* Outer circle */}
                    <circle cx="150" cy="140" r="100" fill="none" stroke="var(--accent)" strokeWidth="2" strokeOpacity="0.5" />
                    <circle cx="150" cy="140" r="100" fill="url(#flangeGrad)" />

                    {/* Bolt circle */}
                    <circle cx="150" cy="140" r="72" fill="none" stroke="var(--steel-light)" strokeWidth="1" strokeDasharray="4 4" strokeOpacity="0.5" />

                    {/* Hub circle */}
                    <circle cx="150" cy="140" r="50" fill="var(--surface)" stroke="var(--steel-light)" strokeWidth="1.5" strokeOpacity="0.4" />

                    {/* Bore */}
                    <circle cx="150" cy="140" r="30" fill="var(--background)" stroke="var(--accent)" strokeWidth="2" strokeOpacity="0.6" />

                    {/* Ring gasket groove */}
                    <circle cx="150" cy="140" r="40" fill="none" stroke="var(--accent)" strokeWidth="3" strokeOpacity="0.3" />

                    {/* Bolt holes */}
                    {Array.from({ length: currentFlange.numBolts }).map((_, i) => {
                      const angle = (i * 360 / currentFlange.numBolts - 90) * Math.PI / 180;
                      const bx = 150 + Math.cos(angle) * 72;
                      const by = 140 + Math.sin(angle) * 72;
                      return (
                        <circle key={i} cx={bx} cy={by} r="5" fill="var(--background)" stroke="var(--steel-light)" strokeWidth="1" strokeOpacity="0.6" />
                      );
                    })}

                    {/* Dimension lines */}
                    {/* OD line */}
                    <line x1="150" y1="28" x2="150" y2="16" stroke="var(--accent)" strokeWidth="1" strokeOpacity="0.8" />
                    <line x1="50" y1="16" x2="250" y2="16" stroke="var(--accent)" strokeWidth="1" strokeOpacity="0.6" />
                    <line x1="50" y1="12" x2="50" y2="20" stroke="var(--accent)" strokeWidth="1" strokeOpacity="0.6" />
                    <line x1="250" y1="12" x2="250" y2="20" stroke="var(--accent)" strokeWidth="1" strokeOpacity="0.6" />
                    <text x="150" y="12" textAnchor="middle" fontSize="9" fill="var(--accent)" fontFamily="monospace" fontWeight="bold">
                      OD: {currentFlange.od}&quot;
                    </text>

                    {/* Bore dimension */}
                    <text x="150" y="144" textAnchor="middle" fontSize="8" fill="var(--accent)" fontFamily="monospace" fontWeight="bold">
                      {currentFlange.bore}&quot;
                    </text>
                    <text x="150" y="154" textAnchor="middle" fontSize="7" fill="var(--steel)" fontFamily="monospace">
                      BORE
                    </text>

                    {/* BC label */}
                    <text x="150" y="262" textAnchor="middle" fontSize="8" fill="var(--steel-light)" fontFamily="monospace">
                      BC: {currentFlange.boltCircle}&quot; | {currentFlange.numBolts} bolts
                    </text>

                    {/* Ring gasket label */}
                    <text x="150" y="275" textAnchor="middle" fontSize="8" fill="var(--accent)" fontFamily="monospace" fontWeight="bold">
                      Ring: {currentFlange.ringGasket}
                    </text>
                  </svg>
                </div>

                {/* Dimension table */}
                <div className="flex-1">
                  <div className="space-y-2">
                    {[
                      { label: "Flange OD", value: `${currentFlange.od}"`, key: "od" },
                      { label: "Bore ID", value: `${currentFlange.bore}"`, key: "bore" },
                      { label: "Bolt Circle", value: `${currentFlange.boltCircle}"`, key: "bc" },
                      { label: "Number of Bolts", value: `${currentFlange.numBolts}`, key: "nb" },
                      { label: "Bolt Size", value: currentFlange.boltSize, key: "bs" },
                      { label: "Flange Thickness", value: `${currentFlange.thickness}"`, key: "th" },
                      { label: "Hub OD", value: `${currentFlange.hubOd}"`, key: "hub" },
                      { label: "Ring Gasket", value: currentFlange.ringGasket, key: "rg" },
                    ].map((dim, i) => (
                      <motion.div
                        key={dim.key}
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.04, duration: 0.2 }}
                        className="flex items-center justify-between px-4 py-2.5 bg-background rounded-lg border border-border hover:border-accent/30 transition-colors"
                      >
                        <span className="text-sm text-steel">{dim.label}</span>
                        <span className="text-sm font-mono font-bold text-foreground">{dim.value}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Reference note */}
              <div className="mt-4 flex items-start gap-2 px-4 py-3 bg-accent/5 border border-accent/10 rounded-lg">
                <Info className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                <p className="text-xs text-steel leading-relaxed">
                  <span className="font-semibold text-foreground">Reference:</span> Dimensions per API Specification 6A
                  (Wellhead and Christmas Tree Equipment) and ASME B16.5. Values shown are typical — always verify
                  against the applicable edition of the standard for your project. Ring gasket types: RX for pressures
                  up to 5,000 PSI; BX for 10,000 PSI and above.
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
