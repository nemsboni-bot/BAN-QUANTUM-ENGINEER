"use client";

import { motion } from "framer-motion";

export function DrillingRigSVG({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 800 900"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Sky / Background gradient */}
      <defs>
        <linearGradient id="skyGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.05" />
          <stop offset="100%" stopColor="var(--primary)" stopOpacity="0.1" />
        </linearGradient>
        <linearGradient id="steelGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--steel-light)" stopOpacity="0.6" />
          <stop offset="100%" stopColor="var(--steel)" stopOpacity="0.4" />
        </linearGradient>
        <linearGradient id="derrickGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.7" />
          <stop offset="100%" stopColor="var(--primary)" stopOpacity="0.5" />
        </linearGradient>
        <linearGradient id="groundGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--steel)" stopOpacity="0.3" />
          <stop offset="100%" stopColor="var(--steel)" stopOpacity="0.1" />
        </linearGradient>
      </defs>

      {/* Ground */}
      <rect x="0" y="720" width="800" height="180" fill="url(#groundGrad)" rx="4" />
      <line x1="0" y1="720" x2="800" y2="720" stroke="var(--steel-light)" strokeWidth="2" strokeOpacity="0.3" />

      {/* Substructure / Base platform */}
      <rect x="280" y="680" width="240" height="40" rx="4" fill="var(--steel)" fillOpacity="0.35" stroke="var(--steel-light)" strokeWidth="1.5" strokeOpacity="0.4" />
      {/* Platform legs */}
      <rect x="290" y="710" width="16" height="30" fill="var(--steel)" fillOpacity="0.3" />
      <rect x="494" y="710" width="16" height="30" fill="var(--steel)" fillOpacity="0.3" />
      <rect x="390" y="710" width="16" height="30" fill="var(--steel)" fillOpacity="0.25" />

      {/* Derrick / Mast - main tower */}
      {/* Left leg */}
      <motion.line
        x1="320" y1="680" x2="370" y2="140"
        stroke="url(#derrickGrad)" strokeWidth="4"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      />
      {/* Right leg */}
      <motion.line
        x1="480" y1="680" x2="430" y2="140"
        stroke="url(#derrickGrad)" strokeWidth="4"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.5, ease: "easeOut", delay: 0.1 }}
      />

      {/* Derrick cross braces */}
      {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((i) => {
        const y = 680 - i * 60;
        const spread = 80 - i * 6.2;
        const cx = 400;
        return (
          <motion.g
            key={`brace-${i}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 + i * 0.1, duration: 0.4 }}
          >
            {/* Horizontal */}
            <line
              x1={cx - spread} y1={y} x2={cx + spread} y2={y}
              stroke="var(--accent)" strokeWidth="1.5" strokeOpacity="0.4"
            />
            {/* X braces */}
            {i < 8 && (
              <>
                <line
                  x1={cx - spread} y1={y}
                  x2={cx + spread - 6.2} y2={y - 60}
                  stroke="var(--steel-light)" strokeWidth="1" strokeOpacity="0.25"
                />
                <line
                  x1={cx + spread} y1={y}
                  x2={cx - spread + 6.2} y2={y - 60}
                  stroke="var(--steel-light)" strokeWidth="1" strokeOpacity="0.25"
                />
              </>
            )}
          </motion.g>
        );
      })}

      {/* Crown block at top */}
      <motion.g
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        <rect x="375" y="120" width="50" height="30" rx="3" fill="var(--accent)" fillOpacity="0.5" stroke="var(--accent)" strokeWidth="1.5" strokeOpacity="0.6" />
        {/* Sheaves */}
        <circle cx="390" cy="135" r="6" fill="none" stroke="var(--steel-light)" strokeWidth="1.5" strokeOpacity="0.5" />
        <circle cx="410" cy="135" r="6" fill="none" stroke="var(--steel-light)" strokeWidth="1.5" strokeOpacity="0.5" />
      </motion.g>

      {/* Traveling block / Hook - animated up and down */}
      <motion.g
        animate={{ y: [0, 30, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        {/* Drill line */}
        <line x1="400" y1="150" x2="400" y2="280" stroke="var(--steel-light)" strokeWidth="2" strokeOpacity="0.5" />
        {/* Block */}
        <rect x="385" y="280" width="30" height="25" rx="3" fill="var(--accent)" fillOpacity="0.4" stroke="var(--accent)" strokeWidth="1.5" strokeOpacity="0.5" />
        {/* Hook */}
        <line x1="400" y1="305" x2="400" y2="330" stroke="var(--steel-light)" strokeWidth="2" strokeOpacity="0.4" />
        <path d="M392 330 Q392 340 400 340 Q408 340 408 330" fill="none" stroke="var(--accent)" strokeWidth="2" strokeOpacity="0.5" />
      </motion.g>

      {/* Drill string going into ground */}
      <motion.line
        x1="400" y1="340" x2="400" y2="720"
        stroke="var(--steel-light)" strokeWidth="3" strokeOpacity="0.2"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      />

      {/* Kelly / Rotary table area */}
      <motion.g
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.5 }}
      >
        <rect x="375" y="670" width="50" height="16" rx="3" fill="var(--accent)" fillOpacity="0.3" stroke="var(--accent)" strokeWidth="1" strokeOpacity="0.4" />
        {/* Rotary animation */}
        <motion.circle
          cx="400" cy="678" r="12"
          fill="none" stroke="var(--accent)" strokeWidth="1.5" strokeOpacity="0.4"
          strokeDasharray="4 4"
          animate={{ rotate: 360 }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        />
      </motion.g>

      {/* Mud tanks - left side */}
      <motion.g
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 2, duration: 0.6 }}
      >
        <rect x="100" y="690" width="120" height="40" rx="4" fill="var(--steel)" fillOpacity="0.2" stroke="var(--steel-light)" strokeWidth="1.5" strokeOpacity="0.3" />
        <rect x="100" y="690" width="120" height="10" rx="2" fill="var(--primary)" fillOpacity="0.15" />
        <text x="160" y="718" textAnchor="middle" fontSize="10" fill="var(--steel-light)" fillOpacity="0.5" fontFamily="monospace">MUD TANK</text>
        {/* Pipe to rig */}
        <line x1="220" y1="700" x2="280" y2="700" stroke="var(--steel-light)" strokeWidth="2" strokeOpacity="0.2" strokeDasharray="6 3" />
      </motion.g>

      {/* Generator / Power unit - right side */}
      <motion.g
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 2.2, duration: 0.6 }}
      >
        <rect x="560" y="695" width="100" height="35" rx="4" fill="var(--steel)" fillOpacity="0.2" stroke="var(--steel-light)" strokeWidth="1.5" strokeOpacity="0.3" />
        <text x="610" y="718" textAnchor="middle" fontSize="10" fill="var(--steel-light)" fillOpacity="0.5" fontFamily="monospace">GENERATOR</text>
        {/* Exhaust stack */}
        <rect x="640" y="670" width="8" height="25" rx="2" fill="var(--steel)" fillOpacity="0.25" />
        {/* Smoke animation */}
        <motion.circle
          cx="644" cy="660" r="5"
          fill="var(--steel-light)" fillOpacity="0.15"
          animate={{ y: [-5, -25], opacity: [0.15, 0], scale: [1, 2] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
        />
        <motion.circle
          cx="648" cy="655" r="4"
          fill="var(--steel-light)" fillOpacity="0.1"
          animate={{ y: [-5, -30], opacity: [0.1, 0], scale: [1, 2.5] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeOut", delay: 0.5 }}
        />
      </motion.g>

      {/* BOP Stack below rotary */}
      <motion.g
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.5 }}
      >
        <rect x="385" y="730" width="30" height="20" rx="2" fill="var(--accent)" fillOpacity="0.2" stroke="var(--accent)" strokeWidth="1" strokeOpacity="0.3" />
        <rect x="382" y="740" width="36" height="8" rx="2" fill="var(--accent)" fillOpacity="0.15" stroke="var(--accent)" strokeWidth="1" strokeOpacity="0.25" />
        <text x="400" y="770" textAnchor="middle" fontSize="8" fill="var(--steel-light)" fillOpacity="0.4" fontFamily="monospace">BOP</text>
      </motion.g>

      {/* Drilling particles / debris animation */}
      {[0, 1, 2, 3, 4].map((i) => (
        <motion.circle
          key={`particle-${i}`}
          cx={395 + i * 4}
          cy="720"
          r="2"
          fill="var(--accent)"
          fillOpacity="0.3"
          animate={{
            y: [0, -15 - i * 5, 0],
            x: [0, (i % 2 === 0 ? 1 : -1) * (8 + i * 3), 0],
            opacity: [0, 0.4, 0],
          }}
          transition={{
            duration: 1.5 + i * 0.3,
            repeat: Infinity,
            delay: i * 0.4,
            ease: "easeOut",
          }}
        />
      ))}

      {/* Flare / Warning light on top */}
      <motion.circle
        cx="400" cy="115"
        r="4"
        fill="var(--accent)"
        animate={{ opacity: [0.3, 1, 0.3], scale: [1, 1.3, 1] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Pipe rack */}
      <motion.g
        initial={{ opacity: 0, x: -15 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 2.4, duration: 0.5 }}
      >
        {[0, 1, 2, 3].map((i) => (
          <rect
            key={`pipe-${i}`}
            x="110"
            y={740 + i * 10}
            width="80"
            height="6"
            rx="3"
            fill="var(--steel-light)"
            fillOpacity={0.15 + i * 0.03}
          />
        ))}
      </motion.g>
    </svg>
  );
}
