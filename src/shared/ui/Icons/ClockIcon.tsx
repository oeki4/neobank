import type { SVGProps } from "react";

export const ClockIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <circle cx="20" cy="20" r="15" fill="#2A4157" fillOpacity="0.24" />
      <path d="M8.33325 4.67308C6.81306 5.55076 5.55068 6.81314 4.673 8.33333" stroke="#222222" strokeLinecap="round" />
      <path
        d="M31.6667 4.67308C33.1869 5.55076 34.4493 6.81314 35.327 8.33333"
        stroke="#222222"
        strokeLinecap="round"
      />
      <path d="M20 10.8333V19.75C20 19.8881 20.1119 20 20.25 20H27.5" stroke="#222222" strokeLinecap="round" />
    </svg>
  );
};
