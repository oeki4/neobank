import cls from "./amount-range-input.module.scss";
import { type HTMLAttributes, useRef } from "react";

interface AmountRangeInputProps extends HTMLAttributes<HTMLInputElement> {
  className?: string;
  min?: number;
  max?: number;
  step?: number;
  value?: number;
}

export const AmountRangeInput = (props: AmountRangeInputProps) => {
  const { className, min = 0, max = 100, step = 10, value, ...otherProps } = props;
  const inputRef = useRef<HTMLInputElement | null>(null);

  return (
    <div className={className}>
      <input
        ref={inputRef}
        min={min}
        max={max}
        step={step}
        type="range"
        className={cls.rangeInput}
        value={value}
        style={{
          backgroundSize:
            value && value >= 15000 && value <= 600000
              ? (((value || 0) - min) / (max - min)) * 100 + "% 100%"
              : "0% 100%",
        }}
        {...otherProps}
      />
      <div className="flex justify-between gap-4 mt-2">
        <p className="font-ubuntu font-medium text-base text-[#786D6D]">{min}</p>
        <p className="font-ubuntu font-medium text-base text-[#786D6D]">{max}</p>
      </div>
    </div>
  );
};
