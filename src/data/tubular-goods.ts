/*
  API Tubular Goods Reference Data
  ---------------------------------
  Sources:
    - API Specification 5CT (Casing and Tubing)
    - API Specification 5B  (Threading, Gauging of Casing/Tubing Threads)
    - API Specification 5L  (Line Pipe)
    - API Specification 5DP / API 7-1 (Drill Pipe & Drill Collars)
    - API Spec 7-2 (Rotary Shouldered Thread Connections)
    - API RP 7G / API RP 7G-2 (Recommended Practice for Drill Stem Design)

  NOTES:
    • All dimensions are in inches, weights in lb/ft, torques in ft-lbs.
    • Make-up torques per API RP 7G with API modified thread compound
      (friction factor 1.0). Min = 80% of optimum; Max = optimum + 10%.
    • Values are typical reference dimensions — for fabrication or
      procurement always verify against the current edition of the
      applicable API specification and the mill certificate.
    • Drift diameter is calculated per API 5CT Table C.4 (standard drift).
*/

// ----------------------------------------------------------------------
// API 5CT Casing (OD 4-1/2" through 20")
// ----------------------------------------------------------------------

export interface CasingData {
  od: number;           // nominal OD (in)
  weight: number;       // nominal weight (lb/ft)
  wall: number;         // wall thickness (in)
  id: number;           // inside diameter (in)
  drift: number;        // drift diameter (in)
  grades: string[];     // available API 5CT grades
}

export const casingSizes: CasingData[] = [
  // 4-1/2"
  { od: 4.500, weight: 9.50,  wall: 0.205, id: 4.090, drift: 3.965, grades: ["H-40", "J-55", "K-55"] },
  { od: 4.500, weight: 10.50, wall: 0.224, id: 4.052, drift: 3.927, grades: ["J-55", "K-55"] },
  { od: 4.500, weight: 11.60, wall: 0.250, id: 4.000, drift: 3.875, grades: ["J-55", "K-55", "L-80", "N-80", "C-90", "T-95", "P-110"] },
  { od: 4.500, weight: 13.50, wall: 0.290, id: 3.920, drift: 3.795, grades: ["L-80", "N-80", "C-90", "T-95", "P-110", "Q-125"] },
  { od: 4.500, weight: 15.10, wall: 0.337, id: 3.826, drift: 3.701, grades: ["L-80", "N-80", "C-90", "T-95", "P-110", "Q-125"] },

  // 5"
  { od: 5.000, weight: 11.50, wall: 0.220, id: 4.560, drift: 4.435, grades: ["J-55", "K-55"] },
  { od: 5.000, weight: 13.00, wall: 0.253, id: 4.494, drift: 4.369, grades: ["J-55", "K-55", "L-80", "N-80", "C-90", "T-95", "P-110"] },
  { od: 5.000, weight: 15.00, wall: 0.296, id: 4.408, drift: 4.283, grades: ["J-55", "K-55", "L-80", "N-80", "C-90", "T-95", "P-110"] },
  { od: 5.000, weight: 18.00, wall: 0.362, id: 4.276, drift: 4.151, grades: ["L-80", "N-80", "C-90", "T-95", "P-110", "Q-125"] },
  { od: 5.000, weight: 21.40, wall: 0.437, id: 4.126, drift: 4.001, grades: ["P-110", "Q-125"] },

  // 5-1/2"
  { od: 5.500, weight: 14.00, wall: 0.244, id: 5.012, drift: 4.887, grades: ["H-40", "J-55", "K-55"] },
  { od: 5.500, weight: 15.50, wall: 0.275, id: 4.950, drift: 4.825, grades: ["J-55", "K-55", "L-80", "N-80", "C-90", "T-95", "P-110"] },
  { od: 5.500, weight: 17.00, wall: 0.304, id: 4.892, drift: 4.767, grades: ["J-55", "K-55", "L-80", "N-80", "C-90", "T-95", "P-110"] },
  { od: 5.500, weight: 20.00, wall: 0.361, id: 4.778, drift: 4.653, grades: ["L-80", "N-80", "C-90", "T-95", "P-110", "Q-125"] },
  { od: 5.500, weight: 23.00, wall: 0.415, id: 4.670, drift: 4.545, grades: ["L-80", "N-80", "C-90", "T-95", "P-110", "Q-125"] },

  // 6-5/8"
  { od: 6.625, weight: 20.00, wall: 0.288, id: 6.049, drift: 5.924, grades: ["H-40", "J-55", "K-55"] },
  { od: 6.625, weight: 24.00, wall: 0.352, id: 5.921, drift: 5.796, grades: ["J-55", "K-55", "L-80", "N-80", "C-90", "T-95", "P-110"] },
  { od: 6.625, weight: 28.00, wall: 0.417, id: 5.791, drift: 5.666, grades: ["L-80", "N-80", "C-90", "T-95", "P-110", "Q-125"] },
  { od: 6.625, weight: 32.00, wall: 0.475, id: 5.675, drift: 5.550, grades: ["L-80", "N-80", "C-90", "T-95", "P-110", "Q-125"] },

  // 7"
  { od: 7.000, weight: 17.00, wall: 0.231, id: 6.538, drift: 6.413, grades: ["H-40"] },
  { od: 7.000, weight: 20.00, wall: 0.272, id: 6.456, drift: 6.331, grades: ["H-40", "J-55", "K-55"] },
  { od: 7.000, weight: 23.00, wall: 0.317, id: 6.366, drift: 6.241, grades: ["J-55", "K-55", "L-80", "N-80", "C-90", "T-95", "P-110"] },
  { od: 7.000, weight: 26.00, wall: 0.362, id: 6.276, drift: 6.151, grades: ["J-55", "K-55", "L-80", "N-80", "C-90", "T-95", "P-110"] },
  { od: 7.000, weight: 29.00, wall: 0.408, id: 6.184, drift: 6.059, grades: ["L-80", "N-80", "C-90", "T-95", "P-110", "Q-125"] },
  { od: 7.000, weight: 32.00, wall: 0.453, id: 6.094, drift: 5.969, grades: ["L-80", "N-80", "C-90", "T-95", "P-110", "Q-125"] },
  { od: 7.000, weight: 35.00, wall: 0.498, id: 6.004, drift: 5.879, grades: ["L-80", "N-80", "C-90", "T-95", "P-110", "Q-125"] },
  { od: 7.000, weight: 38.00, wall: 0.540, id: 5.920, drift: 5.795, grades: ["L-80", "N-80", "C-90", "T-95", "P-110", "Q-125"] },

  // 7-5/8"
  { od: 7.625, weight: 24.00, wall: 0.300, id: 7.025, drift: 6.900, grades: ["H-40", "J-55", "K-55"] },
  { od: 7.625, weight: 26.40, wall: 0.328, id: 6.969, drift: 6.844, grades: ["J-55", "K-55", "L-80", "N-80", "C-90", "T-95", "P-110"] },
  { od: 7.625, weight: 29.70, wall: 0.375, id: 6.875, drift: 6.750, grades: ["L-80", "N-80", "C-90", "T-95", "P-110"] },
  { od: 7.625, weight: 33.70, wall: 0.430, id: 6.765, drift: 6.640, grades: ["L-80", "N-80", "C-90", "T-95", "P-110", "Q-125"] },
  { od: 7.625, weight: 39.00, wall: 0.500, id: 6.625, drift: 6.500, grades: ["L-80", "N-80", "C-90", "T-95", "P-110", "Q-125"] },

  // 8-5/8"
  { od: 8.625, weight: 24.00, wall: 0.264, id: 8.097, drift: 7.972, grades: ["H-40"] },
  { od: 8.625, weight: 32.00, wall: 0.352, id: 7.921, drift: 7.796, grades: ["H-40", "J-55", "K-55", "L-80", "N-80"] },
  { od: 8.625, weight: 36.00, wall: 0.400, id: 7.825, drift: 7.700, grades: ["J-55", "K-55", "L-80", "N-80", "C-90", "T-95", "P-110"] },
  { od: 8.625, weight: 40.00, wall: 0.450, id: 7.725, drift: 7.600, grades: ["L-80", "N-80", "C-90", "T-95", "P-110"] },
  { od: 8.625, weight: 44.00, wall: 0.500, id: 7.625, drift: 7.500, grades: ["L-80", "N-80", "C-90", "T-95", "P-110"] },
  { od: 8.625, weight: 49.00, wall: 0.557, id: 7.511, drift: 7.386, grades: ["L-80", "N-80", "C-90", "T-95", "P-110", "Q-125"] },

  // 9-5/8"
  { od: 9.625, weight: 32.30, wall: 0.312, id: 9.001, drift: 8.845, grades: ["H-40"] },
  { od: 9.625, weight: 36.00, wall: 0.352, id: 8.921, drift: 8.765, grades: ["H-40", "J-55", "K-55"] },
  { od: 9.625, weight: 40.00, wall: 0.395, id: 8.835, drift: 8.679, grades: ["J-55", "K-55", "L-80", "N-80"] },
  { od: 9.625, weight: 43.50, wall: 0.435, id: 8.755, drift: 8.599, grades: ["J-55", "K-55", "L-80", "N-80", "C-90", "T-95", "P-110"] },
  { od: 9.625, weight: 47.00, wall: 0.472, id: 8.681, drift: 8.525, grades: ["L-80", "N-80", "C-90", "T-95", "P-110"] },
  { od: 9.625, weight: 53.50, wall: 0.545, id: 8.535, drift: 8.379, grades: ["L-80", "N-80", "C-90", "T-95", "P-110", "Q-125"] },
  { od: 9.625, weight: 58.40, wall: 0.595, id: 8.435, drift: 8.279, grades: ["P-110", "Q-125"] },

  // 10-3/4"
  { od: 10.750, weight: 32.75, wall: 0.279, id: 10.192, drift: 10.036, grades: ["H-40"] },
  { od: 10.750, weight: 40.50, wall: 0.350, id: 10.050, drift: 9.894,  grades: ["H-40", "J-55", "K-55"] },
  { od: 10.750, weight: 45.50, wall: 0.400, id: 9.950,  drift: 9.794,  grades: ["J-55", "K-55", "L-80", "N-80"] },
  { od: 10.750, weight: 51.00, wall: 0.450, id: 9.850,  drift: 9.694,  grades: ["J-55", "K-55", "L-80", "N-80", "C-90", "T-95", "P-110"] },
  { od: 10.750, weight: 55.50, wall: 0.495, id: 9.760,  drift: 9.604,  grades: ["L-80", "N-80", "C-90", "T-95", "P-110"] },
  { od: 10.750, weight: 60.70, wall: 0.545, id: 9.660,  drift: 9.504,  grades: ["L-80", "N-80", "C-90", "T-95", "P-110", "Q-125"] },
  { od: 10.750, weight: 65.70, wall: 0.595, id: 9.560,  drift: 9.404,  grades: ["L-80", "N-80", "C-90", "T-95", "P-110", "Q-125"] },

  // 11-3/4"
  { od: 11.750, weight: 42.00, wall: 0.333, id: 11.084, drift: 10.928, grades: ["H-40", "J-55", "K-55"] },
  { od: 11.750, weight: 47.00, wall: 0.375, id: 11.000, drift: 10.844, grades: ["J-55", "K-55", "L-80", "N-80"] },
  { od: 11.750, weight: 54.00, wall: 0.435, id: 10.880, drift: 10.724, grades: ["J-55", "K-55", "L-80", "N-80", "C-90", "T-95", "P-110"] },
  { od: 11.750, weight: 60.00, wall: 0.489, id: 10.772, drift: 10.616, grades: ["L-80", "N-80", "C-90", "T-95", "P-110", "Q-125"] },
  { od: 11.750, weight: 65.00, wall: 0.534, id: 10.682, drift: 10.526, grades: ["L-80", "N-80", "C-90", "T-95", "P-110", "Q-125"] },

  // 13-3/8"
  { od: 13.375, weight: 48.00,  wall: 0.330, id: 12.715, drift: 12.559, grades: ["H-40", "J-55", "K-55"] },
  { od: 13.375, weight: 54.50,  wall: 0.380, id: 12.615, drift: 12.459, grades: ["J-55", "K-55", "L-80", "N-80"] },
  { od: 13.375, weight: 61.00,  wall: 0.430, id: 12.515, drift: 12.359, grades: ["J-55", "K-55", "L-80", "N-80", "C-90", "T-95", "P-110"] },
  { od: 13.375, weight: 68.00,  wall: 0.480, id: 12.415, drift: 12.259, grades: ["J-55", "K-55", "L-80", "N-80", "C-90", "T-95", "P-110", "Q-125"] },
  { od: 13.375, weight: 72.00,  wall: 0.514, id: 12.347, drift: 12.191, grades: ["L-80", "N-80", "C-90", "T-95", "P-110", "Q-125"] },

  // 16"
  { od: 16.000, weight: 65.00,  wall: 0.375, id: 15.250, drift: 15.062, grades: ["H-40", "J-55", "K-55"] },
  { od: 16.000, weight: 75.00,  wall: 0.438, id: 15.124, drift: 14.936, grades: ["J-55", "K-55", "L-80", "N-80"] },
  { od: 16.000, weight: 84.00,  wall: 0.495, id: 15.010, drift: 14.822, grades: ["L-80", "N-80", "C-90", "T-95", "P-110"] },
  { od: 16.000, weight: 109.00, wall: 0.656, id: 14.688, drift: 14.500, grades: ["L-80", "N-80", "P-110"] },

  // 18-5/8"
  { od: 18.625, weight: 87.50,  wall: 0.435, id: 17.755, drift: 17.567, grades: ["H-40", "J-55", "K-55"] },

  // 20"
  { od: 20.000, weight: 94.00,  wall: 0.438, id: 19.124, drift: 18.936, grades: ["H-40", "J-55", "K-55"] },
  { od: 20.000, weight: 106.50, wall: 0.500, id: 19.000, drift: 18.812, grades: ["J-55", "K-55"] },
  { od: 20.000, weight: 133.00, wall: 0.635, id: 18.730, drift: 18.542, grades: ["J-55", "K-55"] },
];

// ----------------------------------------------------------------------
// API 5CT Tubing (EU / NU ends)
// ----------------------------------------------------------------------

export interface TubingData {
  od: number;
  weight: number;
  wall: number;
  id: number;
  drift: number;
  end: "NU" | "EUE" | "IJ";  // Non-upset, External upset, Integral joint
  grades: string[];
}

export const tubingSizes: TubingData[] = [
  // 1.050"
  { od: 1.050, weight: 1.14, wall: 0.113, id: 0.824, drift: 0.730, end: "NU",  grades: ["H-40", "J-55", "L-80", "N-80"] },
  { od: 1.050, weight: 1.48, wall: 0.154, id: 0.742, drift: 0.648, end: "EUE", grades: ["H-40", "J-55", "L-80", "N-80", "C-90", "T-95", "P-110"] },
  // 1.315"
  { od: 1.315, weight: 1.70, wall: 0.133, id: 1.049, drift: 0.955, end: "NU",  grades: ["H-40", "J-55", "L-80", "N-80"] },
  { od: 1.315, weight: 1.80, wall: 0.133, id: 1.049, drift: 0.955, end: "EUE", grades: ["H-40", "J-55", "L-80", "N-80", "C-90", "T-95", "P-110"] },
  // 1.660"
  { od: 1.660, weight: 2.09, wall: 0.125, id: 1.410, drift: 1.286, end: "IJ",  grades: ["H-40", "J-55", "L-80", "N-80"] },
  { od: 1.660, weight: 2.30, wall: 0.140, id: 1.380, drift: 1.286, end: "NU",  grades: ["H-40", "J-55", "L-80", "N-80"] },
  { od: 1.660, weight: 2.40, wall: 0.140, id: 1.380, drift: 1.286, end: "EUE", grades: ["H-40", "J-55", "L-80", "N-80", "C-90", "T-95", "P-110"] },
  // 1.900"
  { od: 1.900, weight: 2.75, wall: 0.145, id: 1.610, drift: 1.516, end: "IJ",  grades: ["H-40", "J-55", "L-80", "N-80"] },
  { od: 1.900, weight: 2.76, wall: 0.145, id: 1.610, drift: 1.516, end: "NU",  grades: ["H-40", "J-55", "L-80", "N-80"] },
  { od: 1.900, weight: 2.90, wall: 0.145, id: 1.610, drift: 1.516, end: "EUE", grades: ["H-40", "J-55", "L-80", "N-80", "C-90", "T-95", "P-110"] },
  // 2-3/8"
  { od: 2.375, weight: 4.00, wall: 0.167, id: 2.041, drift: 1.947, end: "NU",  grades: ["H-40", "J-55", "L-80", "N-80", "C-90", "T-95", "P-110"] },
  { od: 2.375, weight: 4.70, wall: 0.190, id: 1.995, drift: 1.901, end: "EUE", grades: ["H-40", "J-55", "L-80", "N-80", "C-90", "T-95", "P-110"] },
  { od: 2.375, weight: 5.80, wall: 0.254, id: 1.867, drift: 1.773, end: "EUE", grades: ["L-80", "N-80", "C-90", "T-95", "P-110"] },
  { od: 2.375, weight: 6.60, wall: 0.295, id: 1.785, drift: 1.691, end: "EUE", grades: ["L-80", "N-80", "C-90", "T-95", "P-110"] },
  // 2-7/8"
  { od: 2.875, weight: 6.40, wall: 0.217, id: 2.441, drift: 2.347, end: "NU",  grades: ["H-40", "J-55", "L-80", "N-80", "C-90", "T-95", "P-110"] },
  { od: 2.875, weight: 6.50, wall: 0.217, id: 2.441, drift: 2.347, end: "EUE", grades: ["H-40", "J-55", "L-80", "N-80", "C-90", "T-95", "P-110"] },
  { od: 2.875, weight: 7.90, wall: 0.276, id: 2.323, drift: 2.229, end: "EUE", grades: ["L-80", "N-80", "C-90", "T-95", "P-110"] },
  { od: 2.875, weight: 8.60, wall: 0.308, id: 2.259, drift: 2.165, end: "EUE", grades: ["L-80", "N-80", "C-90", "T-95", "P-110"] },
  { od: 2.875, weight: 9.35, wall: 0.340, id: 2.195, drift: 2.101, end: "EUE", grades: ["L-80", "N-80", "C-90", "T-95", "P-110"] },
  // 3-1/2"
  { od: 3.500, weight: 7.70,  wall: 0.216, id: 3.068, drift: 2.943, end: "NU",  grades: ["H-40", "J-55", "L-80", "N-80"] },
  { od: 3.500, weight: 9.20,  wall: 0.254, id: 2.992, drift: 2.867, end: "NU",  grades: ["H-40", "J-55", "L-80", "N-80", "C-90", "T-95", "P-110"] },
  { od: 3.500, weight: 9.30,  wall: 0.254, id: 2.992, drift: 2.867, end: "EUE", grades: ["H-40", "J-55", "L-80", "N-80", "C-90", "T-95", "P-110"] },
  { od: 3.500, weight: 10.20, wall: 0.289, id: 2.922, drift: 2.797, end: "EUE", grades: ["L-80", "N-80", "C-90", "T-95", "P-110"] },
  { od: 3.500, weight: 12.70, wall: 0.375, id: 2.750, drift: 2.625, end: "EUE", grades: ["L-80", "N-80", "C-90", "T-95", "P-110"] },
  // 4"
  { od: 4.000, weight: 9.50,  wall: 0.226, id: 3.548, drift: 3.423, end: "NU",  grades: ["H-40", "J-55", "L-80", "N-80"] },
  { od: 4.000, weight: 11.00, wall: 0.262, id: 3.476, drift: 3.351, end: "EUE", grades: ["H-40", "J-55", "L-80", "N-80"] },
  // 4-1/2"
  { od: 4.500, weight: 12.60, wall: 0.271, id: 3.958, drift: 3.833, end: "NU",  grades: ["H-40", "J-55", "L-80", "N-80"] },
  { od: 4.500, weight: 12.75, wall: 0.271, id: 3.958, drift: 3.833, end: "EUE", grades: ["H-40", "J-55", "L-80", "N-80", "C-90", "T-95", "P-110"] },
];

// ----------------------------------------------------------------------
// API 5DP / 7-1 Drill Pipe
// ----------------------------------------------------------------------

export interface DrillPipeData {
  od: number;           // pipe OD
  weight: number;       // nominal weight (lb/ft)
  wall: number;         // wall thickness (in)
  id: number;           // ID (in)
  connection: string;   // tool joint connection type
  torqueMin: number;    // min make-up torque (ft-lbs) per API RP 7G
  torqueMax: number;    // max make-up torque (ft-lbs) per API RP 7G
  grades: string[];     // available grades
}

export const drillPipeSizes: DrillPipeData[] = [
  // 2-3/8"
  { od: 2.375, weight: 4.85,  wall: 0.190, id: 1.995, connection: "NC26 (2-3/8 IF)", torqueMin: 4200,  torqueMax: 5700,  grades: ["E-75", "X-95", "G-105", "S-135"] },
  { od: 2.375, weight: 6.65,  wall: 0.280, id: 1.815, connection: "NC26 (2-3/8 IF)", torqueMin: 4600,  torqueMax: 6400,  grades: ["E-75", "X-95", "G-105", "S-135"] },
  // 2-7/8"
  { od: 2.875, weight: 6.85,  wall: 0.217, id: 2.441, connection: "NC31 (2-7/8 IF)", torqueMin: 6200,  torqueMax: 8600,  grades: ["E-75", "X-95", "G-105", "S-135"] },
  { od: 2.875, weight: 10.40, wall: 0.362, id: 2.151, connection: "NC31 (2-7/8 IF)", torqueMin: 7400,  torqueMax: 10300, grades: ["E-75", "X-95", "G-105", "S-135"] },
  // 3-1/2"
  { od: 3.500, weight: 9.50,  wall: 0.254, id: 2.992, connection: "NC38 (3-1/2 IF)", torqueMin: 11500, torqueMax: 15900, grades: ["E-75", "X-95", "G-105", "S-135"] },
  { od: 3.500, weight: 13.30, wall: 0.368, id: 2.764, connection: "NC38 (3-1/2 IF)", torqueMin: 13600, torqueMax: 18800, grades: ["E-75", "X-95", "G-105", "S-135"] },
  { od: 3.500, weight: 15.50, wall: 0.449, id: 2.602, connection: "NC38 (3-1/2 IF)", torqueMin: 16300, torqueMax: 22600, grades: ["E-75", "X-95", "G-105", "S-135"] },
  // 4"
  { od: 4.000, weight: 11.85, wall: 0.262, id: 3.476, connection: "NC40 (4 FH)",     torqueMin: 13800, torqueMax: 19100, grades: ["E-75", "X-95", "G-105", "S-135"] },
  { od: 4.000, weight: 14.00, wall: 0.330, id: 3.340, connection: "NC40 (4 FH)",     torqueMin: 16100, torqueMax: 22300, grades: ["E-75", "X-95", "G-105", "S-135"] },
  // 4-1/2"
  { od: 4.500, weight: 13.75, wall: 0.271, id: 3.958, connection: "NC46 (4 IF)",     torqueMin: 20100, torqueMax: 27900, grades: ["E-75", "X-95", "G-105", "S-135"] },
  { od: 4.500, weight: 16.60, wall: 0.337, id: 3.826, connection: "NC46 (4 IF)",     torqueMin: 23900, torqueMax: 33100, grades: ["E-75", "X-95", "G-105", "S-135", "Z-140", "V-150"] },
  { od: 4.500, weight: 20.00, wall: 0.430, id: 3.640, connection: "NC46 (4 IF)",     torqueMin: 27100, torqueMax: 37600, grades: ["E-75", "X-95", "G-105", "S-135", "Z-140", "V-150"] },
  // 5"
  { od: 5.000, weight: 19.50, wall: 0.362, id: 4.276, connection: "NC50 (4-1/2 IF)", torqueMin: 28400, torqueMax: 39400, grades: ["E-75", "X-95", "G-105", "S-135", "Z-140", "V-150"] },
  { od: 5.000, weight: 25.60, wall: 0.500, id: 4.000, connection: "NC50 (4-1/2 IF)", torqueMin: 35100, torqueMax: 48700, grades: ["E-75", "X-95", "G-105", "S-135", "Z-140", "V-150"] },
  // 5-1/2"
  { od: 5.500, weight: 21.90, wall: 0.361, id: 4.778, connection: "5-1/2 FH",        torqueMin: 31800, torqueMax: 44100, grades: ["E-75", "X-95", "G-105", "S-135", "Z-140", "V-150"] },
  { od: 5.500, weight: 24.70, wall: 0.415, id: 4.670, connection: "5-1/2 FH",        torqueMin: 36100, torqueMax: 50100, grades: ["E-75", "X-95", "G-105", "S-135", "Z-140", "V-150"] },
  // 5-7/8"
  { od: 5.875, weight: 23.40, wall: 0.361, id: 5.153, connection: "5-1/2 FH",        torqueMin: 33600, torqueMax: 46600, grades: ["E-75", "X-95", "G-105", "S-135", "Z-140", "V-150"] },
  { od: 5.875, weight: 26.30, wall: 0.415, id: 5.045, connection: "5-1/2 FH",        torqueMin: 38600, torqueMax: 53500, grades: ["E-75", "X-95", "G-105", "S-135", "Z-140", "V-150"] },
  // 6-5/8"
  { od: 6.625, weight: 25.20, wall: 0.330, id: 5.965, connection: "6-5/8 REG",       torqueMin: 42700, torqueMax: 59200, grades: ["E-75", "X-95", "G-105", "S-135", "Z-140", "V-150"] },
  { od: 6.625, weight: 27.70, wall: 0.362, id: 5.901, connection: "6-5/8 REG",       torqueMin: 47600, torqueMax: 66000, grades: ["E-75", "X-95", "G-105", "S-135", "Z-140", "V-150"] },
];

// ----------------------------------------------------------------------
// API 7-1 Heavy Weight Drill Pipe (HWDP)
// ----------------------------------------------------------------------

export interface HwdpData {
  od: number;            // pipe body OD (in)
  id: number;            // pipe body ID (in)
  wall: number;          // wall thickness (in)
  weight: number;        // adjusted weight incl. upsets & TJ (lb/ft)
  plainEndWeight: number; // calculated plain-end weight (lb/ft)
  centerUpsetOd: number; // center upset OD (in)
  centerUpsetLen: number; // center upset length (in)
  connection: string;    // tool joint connection type
  tjOd: number;          // tool joint OD (in)
  tjId: number;          // tool joint ID (in)
  pinLength: number;     // pin tool joint OD length (in)
  boxLength: number;     // box tool joint OD length (in)
  drift: number;         // drift diameter (in)
  torqueMin: number;     // min recommended make-up torque (ft-lbs)
  torqueRec: number;     // recommended make-up torque (ft-lbs)
  torqueMax: number;     // max recommended make-up torque (ft-lbs)
  oal: number;           // overall length (ft)
  tensileBody: number;   // pipe body tensile strength (lbs)
  torsionalBody: number; // pipe body torsional strength (ft-lbs)
  tensileTj: number;     // tool joint tensile strength (lbs)
  torsionalTj: number;   // tool joint torsional strength (ft-lbs)
  tjPipeRatio: number;   // TJ / pipe torsional ratio
  internalPressure: number; // internal pressure capacity (psi)
  collapsePressure: number; // collapse pressure capacity (psi)
}

export const hwdpSizes: HwdpData[] = [
  // 3-1/2" HWDP per API Spec 7-1
  {
    od: 3.500,
    id: 2.063,
    wall: 0.719,
    weight: 25.31,
    plainEndWeight: 21.35,
    centerUpsetOd: 4.000,
    centerUpsetLen: 26.50,
    connection: "NC38 (3-1/2 IF)",
    tjOd: 4.750,
    tjId: 2.063,
    pinLength: 20.0,
    boxLength: 16.0,
    drift: 1.813,
    torqueMin: 11400,
    torqueRec: 14200,
    torqueMax: 17100,
    oal: 30.00,
    tensileBody: 345400,
    torsionalBody: 19500,
    tensileTj: 542700,
    torsionalTj: 22400,
    tjPipeRatio: 1.149,
    internalPressure: 11270,
    collapsePressure: 10940,
  },
  // 5" HWDP (welded construction)
  {
    od: 5.000,
    id: 3.000,
    wall: 1.000,
    weight: 54.89,
    plainEndWeight: 44.20,
    centerUpsetOd: 5.500,
    centerUpsetLen: 26.50,
    connection: "NC50 (4-1/2 IF)",
    tjOd: 6.625,
    tjId: 3.000,
    pinLength: 36.0,
    boxLength: 30.0,
    drift: 2.750,
    torqueMin: 28900,
    torqueRec: 34700,
    torqueMax: 40500,
    oal: 31.00,
    tensileBody: 691150,
    torsionalBody: 56496,
    tensileTj: 1397017,
    torsionalTj: 57800,
    tjPipeRatio: 1.023,
    internalPressure: 22647,
    collapsePressure: 17600,
  },
];

// ----------------------------------------------------------------------
// API 7-1 Drill Collars
// ----------------------------------------------------------------------

export interface DrillCollarData {
  od: number;           // OD (in)
  weight: number;       // nominal weight (lb/ft)
  wall: number;         // wall thickness (in)
  id: number;           // bore / ID (in)
  connection: string;   // API connection type
  torqueMin: number;    // min make-up torque (ft-lbs) per API RP 7G
  torqueMax: number;    // max make-up torque (ft-lbs) per API RP 7G
  material: string;     // material class
}

export const drillCollarSizes: DrillCollarData[] = [
  // 3-1/8"
  { od: 3.125, weight: 21.9,  wall: 0.938, id: 1.250, connection: "NC26 (2-3/8 IF)",  torqueMin: 3800,  torqueMax: 5700,  material: "AISI 4145H Mod" },
  // 3-1/2"
  { od: 3.500, weight: 26.7,  wall: 1.000, id: 1.500, connection: "NC26 (2-3/8 IF)",  torqueMin: 4600,  torqueMax: 6400,  material: "AISI 4145H Mod" },
  // 4-1/8"
  { od: 4.125, weight: 34.7,  wall: 1.063, id: 2.000, connection: "NC31 (2-7/8 IF)",  torqueMin: 6900,  torqueMax: 9500,  material: "AISI 4145H Mod" },
  // 4-3/4"
  { od: 4.750, weight: 46.7,  wall: 1.250, id: 2.250, connection: "NC38 (3-1/2 IF)",  torqueMin: 12700, torqueMax: 17600, material: "AISI 4145H Mod" },
  // 5"
  { od: 5.000, weight: 53.2,  wall: 1.375, id: 2.250, connection: "NC38 (3-1/2 IF)",  torqueMin: 12700, torqueMax: 17600, material: "AISI 4145H Mod" },
  // 6"
  { od: 6.000, weight: 82.6,  wall: 1.875, id: 2.250, connection: "NC46 (4 IF)",      torqueMin: 22100, torqueMax: 30600, material: "AISI 4145H Mod" },
  // 6-1/4"
  { od: 6.250, weight: 83.3,  wall: 1.719, id: 2.813, connection: "NC46 (4 IF)",      torqueMin: 22100, torqueMax: 30600, material: "AISI 4145H Mod" },
  // 6-1/2"
  { od: 6.500, weight: 91.7,  wall: 1.844, id: 2.813, connection: "NC46 (4 IF)",      torqueMin: 22100, torqueMax: 30600, material: "AISI 4145H Mod" },
  // 6-3/4"
  { od: 6.750, weight: 100.5, wall: 1.969, id: 2.813, connection: "NC50 (4-1/2 IF)",  torqueMin: 28900, torqueMax: 40100, material: "AISI 4145H Mod" },
  // 7"
  { od: 7.000, weight: 109.7, wall: 2.094, id: 2.813, connection: "NC50 (4-1/2 IF)",  torqueMin: 28900, torqueMax: 40100, material: "AISI 4145H Mod" },
  // 7-1/4"
  { od: 7.250, weight: 119.2, wall: 2.219, id: 2.813, connection: "NC50 (4-1/2 IF)",  torqueMin: 28900, torqueMax: 40100, material: "AISI 4145H Mod" },
  // 8"
  { od: 8.000, weight: 147.0, wall: 2.500, id: 3.000, connection: "NC56 (5 IF)",      torqueMin: 40100, torqueMax: 55600, material: "AISI 4145H Mod" },
  // 9"
  { od: 9.000, weight: 192.3, wall: 3.000, id: 3.000, connection: "NC61 (5-1/2 IF)",  torqueMin: 54600, torqueMax: 75600, material: "AISI 4145H Mod" },
  // 9-1/2"
  { od: 9.500, weight: 217.0, wall: 3.250, id: 3.000, connection: "NC70 (6-5/8 REG)", torqueMin: 65200, torqueMax: 90400, material: "AISI 4145H Mod" },
  // 10"
  { od: 10.000, weight: 243.0, wall: 3.500, id: 3.000, connection: "NC70 (6-5/8 REG)", torqueMin: 65200, torqueMax: 90400, material: "AISI 4145H Mod" },
  // 11"
  { od: 11.000, weight: 299.1, wall: 4.000, id: 3.000, connection: "NC77 (7-5/8 REG)", torqueMin: 80600, torqueMax: 111700, material: "AISI 4145H Mod" },
  // 12"
  { od: 12.000, weight: 360.5, wall: 4.500, id: 3.000, connection: "7-5/8 REG",        torqueMin: 89200, torqueMax: 123600, material: "AISI 4145H Mod" },
];

// ----------------------------------------------------------------------
// API 5CT Grade strength properties (PSI)
// ----------------------------------------------------------------------

export interface GradeProperties {
  grade: string;
  minYield: number;    // minimum yield strength (psi)
  maxYield: number;    // maximum yield strength (psi)
  minTensile: number;  // minimum tensile strength (psi)
  group: string;       // API 5CT group
  notes?: string;
}

export const gradeProperties: GradeProperties[] = [
  { grade: "H-40",  minYield: 40000,  maxYield: 80000,  minTensile: 60000,  group: "1",        notes: "General purpose, low-pressure service" },
  { grade: "J-55",  minYield: 55000,  maxYield: 80000,  minTensile: 75000,  group: "1",        notes: "Standard casing/tubing, moderate pressure" },
  { grade: "K-55",  minYield: 55000,  maxYield: 80000,  minTensile: 95000,  group: "1",        notes: "Higher tensile than J-55" },
  { grade: "N-80",  minYield: 80000,  maxYield: 110000, minTensile: 100000, group: "1/2",      notes: "Intermediate strength, non-sour" },
  { grade: "L-80",  minYield: 80000,  maxYield: 95000,  minTensile: 95000,  group: "2",        notes: "Sour service per NACE MR0175" },
  { grade: "C-90",  minYield: 90000,  maxYield: 105000, minTensile: 100000, group: "2",        notes: "Sour service" },
  { grade: "T-95",  minYield: 95000,  maxYield: 110000, minTensile: 105000, group: "2",        notes: "Sour service, HPHT" },
  { grade: "C-110", minYield: 110000, maxYield: 120000, minTensile: 115000, group: "2",        notes: "Sour service, high strength" },
  { grade: "P-110", minYield: 110000, maxYield: 140000, minTensile: 125000, group: "3",        notes: "High strength, non-sour" },
  { grade: "Q-125", minYield: 125000, maxYield: 150000, minTensile: 135000, group: "4",        notes: "Highest strength, non-sour" },
];

// ----------------------------------------------------------------------
// API 5DP drill-pipe grade properties
// ----------------------------------------------------------------------

export const drillPipeGradeProperties: GradeProperties[] = [
  { grade: "E-75",  minYield: 75000,  maxYield: 105000, minTensile: 100000, group: "API 5DP", notes: "Standard drill pipe" },
  { grade: "X-95",  minYield: 95000,  maxYield: 125000, minTensile: 105000, group: "API 5DP", notes: "Higher strength drill pipe" },
  { grade: "G-105", minYield: 105000, maxYield: 135000, minTensile: 115000, group: "API 5DP", notes: "High strength drill pipe" },
  { grade: "S-135", minYield: 135000, maxYield: 165000, minTensile: 145000, group: "API 5DP", notes: "Very high strength drill pipe" },
  { grade: "Z-140", minYield: 140000, maxYield: 165000, minTensile: 150000, group: "API 5DP", notes: "Ultra-high strength (proprietary)" },
  { grade: "V-150", minYield: 150000, maxYield: 180000, minTensile: 160000, group: "API 5DP", notes: "Ultra-high strength (proprietary)" },
];
