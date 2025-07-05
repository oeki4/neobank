import type { ReactNode } from "react";

interface TooltipProps {
  children: ReactNode;
  text: string;
}

export const Tooltip = (props: TooltipProps) => {
  const { text, children } = props;
  return (
    <div className="relative group inline-block">
      {children}
      <span className="invisible top-8 absolute group-hover:visible w-[170px] whitespace-normal bg-[#3D3D3D] text-xs font-ubuntu font-medium text-white px-1.5 py-2">
        {text}
      </span>
    </div>
  );
};
