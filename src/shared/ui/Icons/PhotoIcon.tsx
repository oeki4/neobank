import type { SVGProps } from "react";

export const PhotoIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M5 14C5 12.1144 5 11.1716 5.58579 10.5858C6.17157 10 7.11438 10 9 10H31C32.8856 10 33.8284 10 34.4142 10.5858C35 11.1716 35 12.1144 35 14V26C35 27.8856 35 28.8284 34.4142 29.4142C33.8284 30 32.8856 30 31 30H9C7.11438 30 6.17157 30 5.58579 29.4142C5 28.8284 5 27.8856 5 26V14Z"
        fill="#2A4157"
        fillOpacity="0.24"
      />
      <ellipse cx="20.3333" cy="20.3333" rx="3.33333" ry="3.33333" fill="#222222" />
      <rect x="8" y="13" width="3" height="1" rx="0.5" fill="#222222" />
      <rect x="29" y="26" width="3" height="1" rx="0.5" fill="#222222" />
    </svg>
  );
};
