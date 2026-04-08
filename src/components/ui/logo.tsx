"use client";

export function Logo({ size = 40, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Outer hexagon shape - represents engineering precision */}
      <path
        d="M60 6 L108 30 L108 78 L60 114 L12 78 L12 30 Z"
        fill="url(#logoGrad)"
        stroke="url(#logoStroke)"
        strokeWidth="2"
      />

      {/* Inner ring - represents drilling / rotary */}
      <circle cx="60" cy="58" r="32" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="2" />
      <circle cx="60" cy="58" r="26" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />

      {/* Derrick / drill tower silhouette */}
      <path
        d="M54 28 L60 18 L66 28"
        fill="none"
        stroke="rgba(255,255,255,0.9)"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <line x1="57" y1="23" x2="55" y2="44" stroke="rgba(255,255,255,0.7)" strokeWidth="1.5" />
      <line x1="63" y1="23" x2="65" y2="44" stroke="rgba(255,255,255,0.7)" strokeWidth="1.5" />
      {/* Cross braces */}
      <line x1="56" y1="30" x2="64" y2="30" stroke="rgba(255,255,255,0.4)" strokeWidth="1" />
      <line x1="55.5" y1="36" x2="64.5" y2="36" stroke="rgba(255,255,255,0.4)" strokeWidth="1" />
      <line x1="55" y1="42" x2="65" y2="42" stroke="rgba(255,255,255,0.4)" strokeWidth="1" />

      {/* Drill string going down */}
      <line x1="60" y1="44" x2="60" y2="72" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" />

      {/* Gear teeth around the drill - mechanical engineering */}
      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => {
        const rad = (angle * Math.PI) / 180;
        const x1 = 60 + Math.cos(rad) * 29;
        const y1 = 58 + Math.sin(rad) * 29;
        const x2 = 60 + Math.cos(rad) * 34;
        const y2 = 58 + Math.sin(rad) * 34;
        return (
          <line
            key={angle}
            x1={x1} y1={y1} x2={x2} y2={y2}
            stroke="rgba(255,255,255,0.3)"
            strokeWidth="3"
            strokeLinecap="round"
          />
        );
      })}

      {/* BQ letters */}
      <text
        x="60"
        y="68"
        textAnchor="middle"
        fontFamily="system-ui, sans-serif"
        fontSize="22"
        fontWeight="800"
        fill="white"
        letterSpacing="2"
      >
        BQ
      </text>

      {/* Bottom arc text area */}
      <text
        x="60"
        y="82"
        textAnchor="middle"
        fontFamily="system-ui, sans-serif"
        fontSize="6.5"
        fontWeight="600"
        fill="rgba(255,255,255,0.7)"
        letterSpacing="3"
      >
        ENGINEERING
      </text>

      {/* Quantum dots - three orbital dots */}
      <circle cx="40" cy="45" r="2.5" fill="rgba(0,180,216,0.8)" />
      <circle cx="80" cy="45" r="2.5" fill="rgba(0,180,216,0.8)" />
      <circle cx="60" cy="90" r="2.5" fill="rgba(0,180,216,0.8)" />

      <defs>
        <linearGradient id="logoGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#0f4c75" />
          <stop offset="50%" stopColor="#0a3d62" />
          <stop offset="100%" stopColor="#00b4d8" />
        </linearGradient>
        <linearGradient id="logoStroke" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#3282b8" />
          <stop offset="100%" stopColor="#00b4d8" />
        </linearGradient>
      </defs>
    </svg>
  );
}
