import * as React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

/**
 * Steam well icon — a wellhead with a vertical casing pipe emitting
 * three curling steam plumes, representing a geothermal well.
 */
export const SteamWellIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ size, className, ...rest }, ref) => (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      {...rest}
    >
      {/* Steam plume 1 (left) */}
      <path d="M7 9c0-1 1-1 1-2s-1-1-1-2" />
      {/* Steam plume 2 (center, taller) */}
      <path d="M12 8c0-1.2 1-1.2 1-2.4S12 4.4 12 3" />
      {/* Steam plume 3 (right) */}
      <path d="M17 9c0-1 1-1 1-2s-1-1-1-2" />
      {/* Top flange of the wellhead */}
      <path d="M7 11h10" />
      {/* Vertical casing / riser */}
      <path d="M9 11v4" />
      <path d="M15 11v4" />
      {/* Base flange at ground level */}
      <path d="M6 15h12" />
      {/* Ground line */}
      <path d="M3 20h18" />
      {/* Ground hatch marks (soil) */}
      <path d="M5 20v1" />
      <path d="M9 20v1" />
      <path d="M13 20v1" />
      <path d="M17 20v1" />
    </svg>
  )
);
SteamWellIcon.displayName = "SteamWellIcon";
