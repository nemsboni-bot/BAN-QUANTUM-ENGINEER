/*
  API 6A Flange Reference Data
  -----------------------------
  Sources:
    - API Specification 6A (Wellhead and Christmas Tree Equipment)
    - API 6A / ISO 10423

  NOTES:
    • All dimensions in inches, pressures in PSI working pressure.
    • Type 6B flanges use R/RX ring gaskets (2,000–5,000 psi).
    • Type 6BX flanges use BX ring gaskets (5,000–20,000 psi).
    • Values are reference only — always verify against the current
      edition of API 6A for procurement and fabrication.
*/

export interface FlangeData {
  size: string;         // nominal bore size designation
  bore: number;         // actual bore diameter (in)
  pressure: number;     // rated working pressure (psi)
  flangeType: string;   // 6B or 6BX
  od: number;           // flange OD (in)
  boltCircle: number;   // bolt circle diameter (in)
  numBolts: number;     // number of bolts
  boltSize: string;     // bolt diameter
  thickness: number;    // minimum flange thickness (in)
  hubOd: number;        // hub OD (in)
  ringGasket: string;   // ring gasket number
  ringType: string;     // R, RX, or BX
}

export const flangeData: FlangeData[] = [
  // ---- 1-13/16" ----
  { size: '1-13/16"', bore: 1.813, pressure: 2000,  flangeType: "6B",  od: 8.500,  boltCircle: 6.750,  numBolts: 4,  boltSize: '3/4"',   thickness: 0.94, hubOd: 3.50,  ringGasket: "R-20",   ringType: "R"  },
  { size: '1-13/16"', bore: 1.813, pressure: 3000,  flangeType: "6B",  od: 8.500,  boltCircle: 6.750,  numBolts: 4,  boltSize: '3/4"',   thickness: 1.06, hubOd: 3.50,  ringGasket: "RX-20",  ringType: "RX" },
  { size: '1-13/16"', bore: 1.813, pressure: 5000,  flangeType: "6B",  od: 8.500,  boltCircle: 6.750,  numBolts: 4,  boltSize: '7/8"',   thickness: 1.19, hubOd: 3.75,  ringGasket: "RX-20",  ringType: "RX" },
  { size: '1-13/16"', bore: 1.813, pressure: 10000, flangeType: "6BX", od: 10.000, boltCircle: 7.750,  numBolts: 8,  boltSize: '7/8"',   thickness: 1.69, hubOd: 4.25,  ringGasket: "BX-150", ringType: "BX" },
  { size: '1-13/16"', bore: 1.813, pressure: 15000, flangeType: "6BX", od: 10.500, boltCircle: 8.250,  numBolts: 8,  boltSize: '1"',     thickness: 2.19, hubOd: 4.50,  ringGasket: "BX-150", ringType: "BX" },

  // ---- 2-1/16" ----
  { size: '2-1/16"',  bore: 2.063, pressure: 2000,  flangeType: "6B",  od: 9.625,  boltCircle: 7.500,  numBolts: 8,  boltSize: '3/4"',   thickness: 1.19, hubOd: 4.13,  ringGasket: "R-23",   ringType: "R"  },
  { size: '2-1/16"',  bore: 2.063, pressure: 3000,  flangeType: "6B",  od: 9.625,  boltCircle: 7.500,  numBolts: 8,  boltSize: '3/4"',   thickness: 1.31, hubOd: 4.13,  ringGasket: "RX-23",  ringType: "RX" },
  { size: '2-1/16"',  bore: 2.063, pressure: 5000,  flangeType: "6B",  od: 9.625,  boltCircle: 7.500,  numBolts: 8,  boltSize: '7/8"',   thickness: 1.50, hubOd: 4.25,  ringGasket: "RX-24",  ringType: "RX" },
  { size: '2-1/16"',  bore: 2.063, pressure: 10000, flangeType: "6BX", od: 11.000, boltCircle: 8.500,  numBolts: 8,  boltSize: '1"',     thickness: 2.00, hubOd: 4.75,  ringGasket: "BX-151", ringType: "BX" },
  { size: '2-1/16"',  bore: 2.063, pressure: 15000, flangeType: "6BX", od: 11.500, boltCircle: 9.000,  numBolts: 8,  boltSize: '1-1/8"', thickness: 2.50, hubOd: 5.00,  ringGasket: "BX-152", ringType: "BX" },
  { size: '2-1/16"',  bore: 2.063, pressure: 20000, flangeType: "6BX", od: 12.250, boltCircle: 9.500,  numBolts: 8,  boltSize: '1-1/4"', thickness: 3.06, hubOd: 5.25,  ringGasket: "BX-152", ringType: "BX" },

  // ---- 2-9/16" ----
  { size: '2-9/16"',  bore: 2.563, pressure: 2000,  flangeType: "6B",  od: 10.625, boltCircle: 8.500,  numBolts: 8,  boltSize: '3/4"',   thickness: 1.25, hubOd: 4.88,  ringGasket: "R-26",   ringType: "R"  },
  { size: '2-9/16"',  bore: 2.563, pressure: 3000,  flangeType: "6B",  od: 10.625, boltCircle: 8.500,  numBolts: 8,  boltSize: '7/8"',   thickness: 1.38, hubOd: 4.88,  ringGasket: "RX-27",  ringType: "RX" },
  { size: '2-9/16"',  bore: 2.563, pressure: 5000,  flangeType: "6B",  od: 10.625, boltCircle: 8.500,  numBolts: 8,  boltSize: '7/8"',   thickness: 1.63, hubOd: 5.00,  ringGasket: "RX-27",  ringType: "RX" },
  { size: '2-9/16"',  bore: 2.563, pressure: 10000, flangeType: "6BX", od: 12.250, boltCircle: 9.500,  numBolts: 8,  boltSize: '1-1/8"', thickness: 2.19, hubOd: 5.50,  ringGasket: "BX-153", ringType: "BX" },
  { size: '2-9/16"',  bore: 2.563, pressure: 15000, flangeType: "6BX", od: 13.000, boltCircle: 10.250, numBolts: 8,  boltSize: '1-1/4"', thickness: 2.75, hubOd: 5.75,  ringGasket: "BX-154", ringType: "BX" },
  { size: '2-9/16"',  bore: 2.563, pressure: 20000, flangeType: "6BX", od: 13.750, boltCircle: 10.750, numBolts: 8,  boltSize: '1-3/8"', thickness: 3.31, hubOd: 6.00,  ringGasket: "BX-154", ringType: "BX" },

  // ---- 3-1/8" ----
  { size: '3-1/8"',   bore: 3.125, pressure: 2000,  flangeType: "6B",  od: 11.500, boltCircle: 9.250,  numBolts: 8,  boltSize: '7/8"',   thickness: 1.38, hubOd: 5.63,  ringGasket: "R-31",   ringType: "R"  },
  { size: '3-1/8"',   bore: 3.125, pressure: 3000,  flangeType: "6B",  od: 11.500, boltCircle: 9.250,  numBolts: 8,  boltSize: '7/8"',   thickness: 1.50, hubOd: 5.63,  ringGasket: "RX-35",  ringType: "RX" },
  { size: '3-1/8"',   bore: 3.125, pressure: 5000,  flangeType: "6B",  od: 11.500, boltCircle: 9.250,  numBolts: 8,  boltSize: '1"',     thickness: 1.75, hubOd: 5.75,  ringGasket: "RX-35",  ringType: "RX" },
  { size: '3-1/8"',   bore: 3.125, pressure: 10000, flangeType: "6BX", od: 13.750, boltCircle: 10.750, numBolts: 8,  boltSize: '1-1/4"', thickness: 2.50, hubOd: 6.25,  ringGasket: "BX-155", ringType: "BX" },
  { size: '3-1/8"',   bore: 3.125, pressure: 15000, flangeType: "6BX", od: 14.500, boltCircle: 11.500, numBolts: 8,  boltSize: '1-3/8"', thickness: 3.13, hubOd: 6.75,  ringGasket: "BX-156", ringType: "BX" },
  { size: '3-1/8"',   bore: 3.125, pressure: 20000, flangeType: "6BX", od: 15.250, boltCircle: 12.000, numBolts: 12, boltSize: '1-1/4"', thickness: 3.69, hubOd: 7.00,  ringGasket: "BX-156", ringType: "BX" },

  // ---- 4-1/16" ----
  { size: '4-1/16"',  bore: 4.063, pressure: 2000,  flangeType: "6B",  od: 12.750, boltCircle: 10.750, numBolts: 8,  boltSize: '7/8"',   thickness: 1.44, hubOd: 6.63,  ringGasket: "R-37",   ringType: "R"  },
  { size: '4-1/16"',  bore: 4.063, pressure: 3000,  flangeType: "6B",  od: 12.750, boltCircle: 10.750, numBolts: 8,  boltSize: '7/8"',   thickness: 1.63, hubOd: 6.63,  ringGasket: "RX-39",  ringType: "RX" },
  { size: '4-1/16"',  bore: 4.063, pressure: 5000,  flangeType: "6B",  od: 13.750, boltCircle: 11.000, numBolts: 8,  boltSize: '1-1/8"', thickness: 2.00, hubOd: 7.00,  ringGasket: "RX-39",  ringType: "RX" },
  { size: '4-1/16"',  bore: 4.063, pressure: 10000, flangeType: "6BX", od: 15.500, boltCircle: 12.500, numBolts: 8,  boltSize: '1-3/8"', thickness: 2.88, hubOd: 7.75,  ringGasket: "BX-157", ringType: "BX" },
  { size: '4-1/16"',  bore: 4.063, pressure: 15000, flangeType: "6BX", od: 16.500, boltCircle: 13.250, numBolts: 12, boltSize: '1-1/4"', thickness: 3.50, hubOd: 8.00,  ringGasket: "BX-158", ringType: "BX" },
  { size: '4-1/16"',  bore: 4.063, pressure: 20000, flangeType: "6BX", od: 17.500, boltCircle: 14.000, numBolts: 12, boltSize: '1-3/8"', thickness: 4.13, hubOd: 8.50,  ringGasket: "BX-158", ringType: "BX" },

  // ---- 5-1/8" ----
  { size: '5-1/8"',   bore: 5.125, pressure: 2000,  flangeType: "6B",  od: 14.000, boltCircle: 11.500, numBolts: 8,  boltSize: '1"',     thickness: 1.50, hubOd: 7.75,  ringGasket: "R-41",   ringType: "R"  },
  { size: '5-1/8"',   bore: 5.125, pressure: 3000,  flangeType: "6B",  od: 14.000, boltCircle: 11.500, numBolts: 8,  boltSize: '1"',     thickness: 1.75, hubOd: 7.75,  ringGasket: "RX-41",  ringType: "RX" },
  { size: '5-1/8"',   bore: 5.125, pressure: 5000,  flangeType: "6B",  od: 16.000, boltCircle: 13.000, numBolts: 8,  boltSize: '1-1/4"', thickness: 2.25, hubOd: 8.50,  ringGasket: "RX-41",  ringType: "RX" },
  { size: '5-1/8"',   bore: 5.125, pressure: 10000, flangeType: "6BX", od: 18.000, boltCircle: 14.750, numBolts: 12, boltSize: '1-3/8"', thickness: 3.25, hubOd: 9.50,  ringGasket: "BX-160", ringType: "BX" },
  { size: '5-1/8"',   bore: 5.125, pressure: 15000, flangeType: "6BX", od: 19.500, boltCircle: 15.500, numBolts: 12, boltSize: '1-1/2"', thickness: 4.00, hubOd: 10.00, ringGasket: "BX-161", ringType: "BX" },

  // ---- 7-1/16" ----
  { size: '7-1/16"',  bore: 7.063, pressure: 2000,  flangeType: "6B",  od: 17.500, boltCircle: 14.500, numBolts: 12, boltSize: '1"',     thickness: 1.75, hubOd: 10.00, ringGasket: "R-44",   ringType: "R"  },
  { size: '7-1/16"',  bore: 7.063, pressure: 3000,  flangeType: "6B",  od: 17.500, boltCircle: 14.500, numBolts: 12, boltSize: '1-1/8"', thickness: 2.06, hubOd: 10.25, ringGasket: "RX-45",  ringType: "RX" },
  { size: '7-1/16"',  bore: 7.063, pressure: 5000,  flangeType: "6B",  od: 20.000, boltCircle: 16.500, numBolts: 12, boltSize: '1-1/4"', thickness: 2.75, hubOd: 11.00, ringGasket: "RX-46",  ringType: "RX" },
  { size: '7-1/16"',  bore: 7.063, pressure: 10000, flangeType: "6BX", od: 23.000, boltCircle: 19.250, numBolts: 12, boltSize: '1-5/8"', thickness: 3.75, hubOd: 12.50, ringGasket: "BX-164", ringType: "BX" },
  { size: '7-1/16"',  bore: 7.063, pressure: 15000, flangeType: "6BX", od: 25.250, boltCircle: 21.000, numBolts: 12, boltSize: '1-7/8"', thickness: 4.63, hubOd: 13.25, ringGasket: "BX-165", ringType: "BX" },

  // ---- 9" ----
  { size: '9"',       bore: 9.000, pressure: 2000,  flangeType: "6B",  od: 21.000, boltCircle: 17.750, numBolts: 12, boltSize: '1-1/8"', thickness: 2.00, hubOd: 12.50, ringGasket: "R-49",   ringType: "R"  },
  { size: '9"',       bore: 9.000, pressure: 3000,  flangeType: "6B",  od: 21.000, boltCircle: 17.750, numBolts: 12, boltSize: '1-1/4"', thickness: 2.38, hubOd: 12.75, ringGasket: "RX-50",  ringType: "RX" },
  { size: '9"',       bore: 9.000, pressure: 5000,  flangeType: "6B",  od: 23.250, boltCircle: 19.500, numBolts: 12, boltSize: '1-3/8"', thickness: 3.13, hubOd: 13.50, ringGasket: "RX-50",  ringType: "RX" },
  { size: '9"',       bore: 9.000, pressure: 10000, flangeType: "6BX", od: 27.250, boltCircle: 23.000, numBolts: 16, boltSize: '1-5/8"', thickness: 4.25, hubOd: 15.00, ringGasket: "BX-168", ringType: "BX" },

  // ---- 11" ----
  { size: '11"',      bore: 11.000, pressure: 2000,  flangeType: "6B",  od: 22.750, boltCircle: 19.500, numBolts: 12, boltSize: '1-1/8"', thickness: 2.13, hubOd: 14.50, ringGasket: "R-53",   ringType: "R"  },
  { size: '11"',      bore: 11.000, pressure: 3000,  flangeType: "6B",  od: 24.000, boltCircle: 20.500, numBolts: 12, boltSize: '1-1/4"', thickness: 2.63, hubOd: 15.00, ringGasket: "RX-54",  ringType: "RX" },
  { size: '11"',      bore: 11.000, pressure: 5000,  flangeType: "6B",  od: 26.750, boltCircle: 22.500, numBolts: 12, boltSize: '1-1/2"', thickness: 3.50, hubOd: 16.00, ringGasket: "RX-54",  ringType: "RX" },
  { size: '11"',      bore: 11.000, pressure: 10000, flangeType: "6BX", od: 31.000, boltCircle: 26.500, numBolts: 16, boltSize: '1-3/4"', thickness: 4.75, hubOd: 17.50, ringGasket: "BX-169", ringType: "BX" },

  // ---- 13-5/8" ----
  { size: '13-5/8"',  bore: 13.625, pressure: 2000,  flangeType: "6B",  od: 26.500, boltCircle: 22.750, numBolts: 12, boltSize: '1-1/4"', thickness: 2.38, hubOd: 17.25, ringGasket: "R-57",   ringType: "R"  },
  { size: '13-5/8"',  bore: 13.625, pressure: 3000,  flangeType: "6B",  od: 27.750, boltCircle: 24.000, numBolts: 12, boltSize: '1-3/8"', thickness: 2.88, hubOd: 17.75, ringGasket: "RX-57",  ringType: "RX" },
  { size: '13-5/8"',  bore: 13.625, pressure: 5000,  flangeType: "6B",  od: 30.500, boltCircle: 26.000, numBolts: 16, boltSize: '1-3/8"', thickness: 3.88, hubOd: 19.00, ringGasket: "RX-57",  ringType: "RX" },
  { size: '13-5/8"',  bore: 13.625, pressure: 10000, flangeType: "6BX", od: 35.000, boltCircle: 30.500, numBolts: 16, boltSize: '1-7/8"', thickness: 5.25, hubOd: 20.50, ringGasket: "BX-170", ringType: "BX" },

  // ---- 16-3/4" ----
  { size: '16-3/4"',  bore: 16.750, pressure: 2000,  flangeType: "6B",  od: 29.500, boltCircle: 25.750, numBolts: 16, boltSize: '1-1/4"', thickness: 2.63, hubOd: 20.50, ringGasket: "R-66",   ringType: "R"  },
  { size: '16-3/4"',  bore: 16.750, pressure: 3000,  flangeType: "6B",  od: 31.000, boltCircle: 27.000, numBolts: 16, boltSize: '1-3/8"', thickness: 3.13, hubOd: 21.00, ringGasket: "RX-66",  ringType: "RX" },
  { size: '16-3/4"',  bore: 16.750, pressure: 5000,  flangeType: "6B",  od: 34.000, boltCircle: 29.500, numBolts: 16, boltSize: '1-1/2"', thickness: 4.25, hubOd: 22.50, ringGasket: "RX-66",  ringType: "RX" },
  { size: '16-3/4"',  bore: 16.750, pressure: 10000, flangeType: "6BX", od: 38.750, boltCircle: 34.000, numBolts: 20, boltSize: '1-7/8"', thickness: 5.75, hubOd: 24.00, ringGasket: "BX-172", ringType: "BX" },

  // ---- 20-3/4" ----
  { size: '20-3/4"',  bore: 20.750, pressure: 3000,  flangeType: "6B",  od: 36.000, boltCircle: 32.000, numBolts: 16, boltSize: '1-1/2"', thickness: 3.38, hubOd: 25.25, ringGasket: "RX-70",  ringType: "RX" },

  // ---- 21-1/4" ----
  { size: '21-1/4"',  bore: 21.250, pressure: 2000,  flangeType: "6B",  od: 34.750, boltCircle: 30.500, numBolts: 16, boltSize: '1-3/8"', thickness: 2.88, hubOd: 25.50, ringGasket: "R-73",   ringType: "R"  },
  { size: '21-1/4"',  bore: 21.250, pressure: 3000,  flangeType: "6B",  od: 36.750, boltCircle: 32.500, numBolts: 16, boltSize: '1-1/2"', thickness: 3.50, hubOd: 26.00, ringGasket: "RX-73",  ringType: "RX" },

  // ---- 26-3/4" ----
  { size: '26-3/4"',  bore: 26.750, pressure: 2000,  flangeType: "6B",  od: 38.750, boltCircle: 34.500, numBolts: 16, boltSize: '1-1/2"', thickness: 3.00, hubOd: 31.00, ringGasket: "R-74",   ringType: "R"  },
  { size: '26-3/4"',  bore: 26.750, pressure: 3000,  flangeType: "6B",  od: 41.000, boltCircle: 36.500, numBolts: 20, boltSize: '1-1/2"', thickness: 3.75, hubOd: 32.00, ringGasket: "RX-74",  ringType: "RX" },
];

export const allFlangeSizes = Array.from(new Set(flangeData.map((f) => f.size)));

export const pressureColors: Record<number, string> = {
  2000:  "text-green-400",
  3000:  "text-emerald-400",
  5000:  "text-yellow-400",
  10000: "text-orange-400",
  15000: "text-red-400",
  20000: "text-red-500",
};
