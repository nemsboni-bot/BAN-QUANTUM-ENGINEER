"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Ruler, Info, BookOpen } from "lucide-react";
import {
  flangeData,
  allFlangeSizes,
  pressureColors,
} from "@/data/flange-data";

export function ApiFlangeReference() {
  const [selectedSize, setSelectedSize] = useState(allFlangeSizes[0]);
  const [selectedPressure, setSelectedPressure] = useState<number | null>(null);

  const availablePressures = useMemo(() => {
    return flangeData
      .filter((f) => f.size === selectedSize)
      .map((f) => f.pressure)
      .sort((a, b) => a - b);
  }, [selectedSize]);

  const currentFlange = useMemo(() => {
    if (!selectedPressure) return null;
    return (
      flangeData.find(
        (f) => f.size === selectedSize && f.pressure === selectedPressure
      ) || null
    );
  }, [selectedSize, selectedPressure]);

  const handleSizeChange = (size: string) => {
    setSelectedSize(size);
    const pressures = flangeData
      .filter((f) => f.size === size)
      .map((f) => f.pressure);
    setSelectedPressure(pressures[0] || null);
  };

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
            <h3 className="text-lg font-bold text-foreground">
              API 6A Flange Slide Rule
            </h3>
            <p className="text-xs text-steel">
              Wellhead flange dimensions — select size and pressure rating
            </p>
          </div>
        </div>
      </div>

      <div className="p-6">
        {/* Size selector */}
        <div className="mb-6">
          <label className="block text-xs font-semibold text-steel uppercase tracking-wider mb-2">
            Nominal Bore Size
          </label>
          <div className="flex gap-2 flex-wrap">
            {allFlangeSizes.map((size) => (
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

        {/* Pressure selector */}
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
                  left: `${
                    (availablePressures.indexOf(selectedPressure) /
                      Math.max(availablePressures.length - 1, 1)) *
                    100
                  }%`,
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
              {/* Summary bar */}
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-border">
                <div>
                  <span className="text-2xl font-bold text-foreground font-mono">
                    {currentFlange.size}
                  </span>
                  <span
                    className="ml-3 text-lg font-bold font-mono"
                    style={{
                      color:
                        currentFlange.pressure >= 10000
                          ? "#f87171"
                          : currentFlange.pressure >= 5000
                          ? "#facc15"
                          : "#4ade80",
                    }}
                  >
                    {currentFlange.pressure.toLocaleString()} PSI
                  </span>
                </div>
                <div className="flex gap-2">
                  <span className="px-3 py-1 bg-accent/10 text-accent text-xs font-semibold rounded-full border border-accent/20">
                    API 6A
                  </span>
                  <span className="px-3 py-1 bg-primary/10 text-primary-light text-xs font-semibold rounded-full border border-primary/20">
                    Type {currentFlange.flangeType}
                  </span>
                </div>
              </div>

              {/* Drawing + dimensions */}
              <div className="flex flex-col lg:flex-row gap-6">
                {/* SVG top-view flange drawing */}
                <div className="flex-1 bg-background rounded-xl border border-border p-4 flex items-center justify-center min-h-[300px]">
                  <svg
                    viewBox="0 0 300 300"
                    className="w-full max-w-[300px]"
                  >
                    <defs>
                      <linearGradient
                        id="flangeGrad"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                      >
                        <stop
                          offset="0%"
                          stopColor="var(--accent)"
                          stopOpacity="0.3"
                        />
                        <stop
                          offset="100%"
                          stopColor="var(--primary)"
                          stopOpacity="0.2"
                        />
                      </linearGradient>
                    </defs>

                    {/* Outer circle (OD) */}
                    <circle
                      cx="150"
                      cy="150"
                      r="105"
                      fill="url(#flangeGrad)"
                      stroke="var(--accent)"
                      strokeWidth="2"
                      strokeOpacity="0.5"
                    />

                    {/* Bolt circle (dashed) */}
                    <circle
                      cx="150"
                      cy="150"
                      r="76"
                      fill="none"
                      stroke="var(--steel-light)"
                      strokeWidth="1"
                      strokeDasharray="4 4"
                      strokeOpacity="0.5"
                    />

                    {/* Hub circle */}
                    <circle
                      cx="150"
                      cy="150"
                      r="52"
                      fill="var(--surface)"
                      stroke="var(--steel-light)"
                      strokeWidth="1.5"
                      strokeOpacity="0.4"
                    />

                    {/* Ring gasket groove */}
                    <circle
                      cx="150"
                      cy="150"
                      r="42"
                      fill="none"
                      stroke="var(--accent)"
                      strokeWidth="3"
                      strokeOpacity="0.3"
                    />

                    {/* Bore */}
                    <circle
                      cx="150"
                      cy="150"
                      r="30"
                      fill="var(--background)"
                      stroke="var(--accent)"
                      strokeWidth="2"
                      strokeOpacity="0.6"
                    />

                    {/* Bolt holes */}
                    {Array.from({ length: currentFlange.numBolts }).map(
                      (_, i) => {
                        const angle =
                          ((i * 360) / currentFlange.numBolts - 90) *
                          (Math.PI / 180);
                        const bx = 150 + Math.cos(angle) * 76;
                        const by = 150 + Math.sin(angle) * 76;
                        return (
                          <circle
                            key={i}
                            cx={bx}
                            cy={by}
                            r="5"
                            fill="var(--background)"
                            stroke="var(--steel-light)"
                            strokeWidth="1"
                            strokeOpacity="0.6"
                          />
                        );
                      }
                    )}

                    {/* OD dimension line */}
                    <line
                      x1="45"
                      y1="20"
                      x2="255"
                      y2="20"
                      stroke="var(--accent)"
                      strokeWidth="1"
                      strokeOpacity="0.6"
                    />
                    <line
                      x1="45"
                      y1="16"
                      x2="45"
                      y2="24"
                      stroke="var(--accent)"
                      strokeWidth="1"
                      strokeOpacity="0.6"
                    />
                    <line
                      x1="255"
                      y1="16"
                      x2="255"
                      y2="24"
                      stroke="var(--accent)"
                      strokeWidth="1"
                      strokeOpacity="0.6"
                    />
                    <text
                      x="150"
                      y="14"
                      textAnchor="middle"
                      fontSize="9"
                      fill="var(--accent)"
                      fontFamily="monospace"
                      fontWeight="bold"
                    >
                      OD: {currentFlange.od}&quot;
                    </text>

                    {/* Bore label */}
                    <text
                      x="150"
                      y="148"
                      textAnchor="middle"
                      fontSize="8"
                      fill="var(--accent)"
                      fontFamily="monospace"
                      fontWeight="bold"
                    >
                      {currentFlange.bore}&quot;
                    </text>
                    <text
                      x="150"
                      y="158"
                      textAnchor="middle"
                      fontSize="7"
                      fill="var(--steel)"
                      fontFamily="monospace"
                    >
                      BORE
                    </text>

                    {/* BC + bolts label */}
                    <text
                      x="150"
                      y="272"
                      textAnchor="middle"
                      fontSize="8"
                      fill="var(--steel-light)"
                      fontFamily="monospace"
                    >
                      BC: {currentFlange.boltCircle}&quot; |{" "}
                      {currentFlange.numBolts}× {currentFlange.boltSize} bolts
                    </text>

                    {/* Ring gasket label */}
                    <text
                      x="150"
                      y="286"
                      textAnchor="middle"
                      fontSize="8"
                      fill="var(--accent)"
                      fontFamily="monospace"
                      fontWeight="bold"
                    >
                      Ring: {currentFlange.ringGasket} (
                      {currentFlange.ringType})
                    </text>
                  </svg>
                </div>

                {/* Dimension table */}
                <div className="flex-1 space-y-2">
                  {[
                    { label: "Nominal Bore", value: `${currentFlange.bore}"` },
                    { label: "Flange OD", value: `${currentFlange.od}"` },
                    {
                      label: "Working Pressure",
                      value: `${currentFlange.pressure.toLocaleString()} psi`,
                    },
                    {
                      label: "Flange Type",
                      value: `Type ${currentFlange.flangeType}`,
                    },
                    {
                      label: "Bolt Circle",
                      value: `${currentFlange.boltCircle}"`,
                    },
                    {
                      label: "Number of Bolts",
                      value: `${currentFlange.numBolts}`,
                    },
                    { label: "Bolt Size", value: currentFlange.boltSize },
                    {
                      label: "Min Thickness",
                      value: `${currentFlange.thickness}"`,
                    },
                    { label: "Hub OD", value: `${currentFlange.hubOd}"` },
                    {
                      label: "Ring Gasket",
                      value: `${currentFlange.ringGasket}`,
                    },
                    {
                      label: "Ring Type",
                      value: currentFlange.ringType,
                    },
                  ].map((dim, i) => (
                    <motion.div
                      key={dim.label}
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.03, duration: 0.2 }}
                      className="flex items-center justify-between px-4 py-2.5 bg-background rounded-lg border border-border hover:border-accent/30 transition-colors"
                    >
                      <span className="text-sm text-steel">{dim.label}</span>
                      <span className="text-sm font-mono font-bold text-foreground">
                        {dim.value}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Reference notes */}
              <div className="mt-6 flex items-start gap-2 px-4 py-3 bg-accent/5 border border-accent/10 rounded-lg">
                <Info className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                <p className="text-xs text-steel leading-relaxed">
                  <span className="font-semibold text-foreground">
                    Reference:
                  </span>{" "}
                  Dimensions per API Specification 6A / ISO 10423 (Wellhead and
                  Christmas Tree Equipment). Type 6B flanges use R or RX ring
                  gaskets for pressures up to 5,000 PSI. Type 6BX flanges use BX
                  ring gaskets for 5,000 PSI and above. All bolting is ASTM
                  A193-B7 / A194-2H unless otherwise specified. Values shown are
                  typical — always verify against the applicable edition.
                </p>
              </div>

              <div className="mt-3 flex items-start gap-2 px-4 py-3 bg-surface border border-border rounded-lg">
                <BookOpen className="w-4 h-4 text-primary-light mt-0.5 shrink-0" />
                <p className="text-xs text-steel leading-relaxed">
                  <span className="font-semibold text-foreground">
                    Applicable Standards:
                  </span>{" "}
                  API Spec 6A · ISO 10423 · API 6A1 (Reconditioning) · API
                  6FA (Fire Testing) · ASME B16.5 · ASTM A105 (Forgings) ·
                  NACE MR0175 / ISO 15156 (Sour Service)
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
