import * as React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

/**
 * Oil droplet icon — filled teardrop shape with a subtle highlight,
 * representing crude oil for the Oil & Gas Drilling service.
 */
export const OilDropletIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, className, ...rest }, ref) => (
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
      {...rest}
    >
      {/* Teardrop body — filled */}
      <path
        d="M12 2.5c0 0 6.5 7.2 6.5 12a6.5 6.5 0 1 1 -13 0c0 -4.8 6.5 -12 6.5 -12z"
        fill="currentColor"
        fillOpacity="0.9"
      />
      {/* Shine highlight */}
      <path
        d="M9.2 13.5c-.2 1.1 .1 2.2 .9 3"
        stroke="#ffffff"
        strokeOpacity="0.7"
        strokeWidth={1.5}
        fill="none"
      />
    </svg>
  )
);
OilDropletIcon.displayName = "OilDropletIcon";

/**
 * Steam well icon — a wellhead (horizontal base with a vertical riser)
 * emitting curling steam, representing a geothermal well.
 */
export const SteamWellIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, className, ...rest }, ref) => (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...rest}
    >
      {/* Ground line */}
      <path d="M3 20h18" />
      {/* Wellhead base (flange on the ground) */}
      <path d="M8 20v-2h8v2" />
      {/* Vertical riser / casing */}
      <path d="M10 18v-5h4v5" />
      {/* Top flange of riser */}
      <path d="M9 13h6" />
      {/* Steam plumes rising from the well */}
      <path d="M10 10c-1 -1 -1 -2 0 -3s1 -2 0 -3" />
      <path d="M12 10c-1 -1 -1 -2 0 -3s1 -2 0 -3" />
      <path d="M14 10c-1 -1 -1 -2 0 -3s1 -2 0 -3" />
    </svg>
  )
);
SteamWellIcon.displayName = "SteamWellIcon";
