import { ArrowIcon } from "@/shared/ui/Icons/ArrowIcon.tsx";
import type { HTMLAttributes } from "react";

interface SelectProps extends HTMLAttributes<HTMLSelectElement> {
  items: Array<{ label: string; value: string }>;
  label?: string;
  required?: boolean;
}

export const Select = (props: SelectProps) => {
  const { items, required, label, ...otherProps } = props;
  return (
    <div className="w-full">
      <label htmlFor={otherProps?.id} className="font-ubuntu font-medium text-base text-[#1A202C]">
        {label ? label : null}
        {required ? <span className="text-[#FF0000]">&nbsp;*</span> : null}
      </label>
      <div className="relative bg-[#F9F5E3] border border-[#80808033] mt-2 h-10 rounded-md w-full">
        <select
          {...otherProps}
          className="block w-full h-full pl-4 pr-12 font-ubuntu text-sm text-black bg-transparent appearance-none focus:outline-none focus:ring-1 focus:ring-blue-500 rounded-md focus:border-blue-500"
        >
          {items.map((item, index) => (
            <option key={index} value={item.value}>
              {item.label}
            </option>
          ))}
        </select>
        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
          <ArrowIcon className="stroke-[#33363F] w-6 h-6 rotate-180" />
        </div>
      </div>
    </div>
  );
};
