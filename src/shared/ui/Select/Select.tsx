import { ArrowIcon } from "@/shared/ui/Icons/ArrowIcon.tsx";
import type { HTMLAttributes } from "react";
import type { SelectValueType } from "@/shared/types/SelectValueType.ts";

interface SelectProps extends Omit<HTMLAttributes<HTMLSelectElement>, "defaultValue"> {
  items: Array<SelectValueType<string>>;
  label?: string;
  required?: boolean;
  defaultValue?: SelectValueType<string>;
  error?: string;
}

export const Select = (props: SelectProps) => {
  const { items, required, label, defaultValue, error, ...otherProps } = props;

  return (
    <div className="w-full">
      {label && (
        <label htmlFor={otherProps?.id} className="font-ubuntu font-medium max-md:text-sm text-base text-[#1A202C]">
          {label}
          {required && <span className="text-[#FF0000]">&nbsp;*</span>}
        </label>
      )}
      <div
        className={[
          "relative bg-[#F9F5E3] border border-[#80808033] mt-2 h-10 rounded-md w-full",
          error ? "border-2 border-[#FF5631]" : "border border-[#80808033]",
        ].join(" ")}
      >
        <select
          {...otherProps}
          defaultValue={defaultValue?.value ?? ""}
          className="block w-full h-full pl-4 pr-12 font-ubuntu text-sm text-black bg-transparent appearance-none focus:outline-none focus:ring-1 focus:ring-blue-500 rounded-md focus:border-blue-500"
        >
          {!defaultValue && <option value="" disabled hidden></option>}
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
      <p className="mt-0.5 font-ubuntu font-medium text-base text-[#FF5631]">{error}</p>
    </div>
  );
};
