import type { SVGProps } from "react";

export const ArrowIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M18 15L12 9L6 15" stroke-width="2" />
    </svg>
  );
};
