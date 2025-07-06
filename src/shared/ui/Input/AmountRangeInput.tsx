import cls from "./amount-range-input.module.scss";
import { type HTMLAttributes, useEffect, useRef } from "react";

interface AmountRangeInputProps extends HTMLAttributes<HTMLInputElement> {
  customProp?: string;
}

export const AmountRangeInput = (props: AmountRangeInputProps) => {
  const { customProp, ...otherProps } = props;
  const inputRef = useRef<HTMLInputElement | null>(null);
  const handleInput = () => {
    if (inputRef.current) {
      const min = +inputRef.current?.min || 0;
      const max = +inputRef.current?.max || 100;
      const currentVal = +inputRef.current?.value || 0;
      inputRef.current.style.backgroundSize = ((currentVal - min) / (max - min)) * 100 + "% 100%";
    }
  };

  useEffect(() => {
    if (inputRef.current) {
      const inputElement = inputRef.current;
      inputElement.addEventListener("input", handleInput);
      const min = +inputElement?.min || 0;
      const max = +inputElement?.max || 100;
      const defaultValue = +inputElement?.defaultValue || 0;
      inputElement.style.backgroundSize = ((defaultValue - min) / (max - min)) * 100 + "% 100%";

      return () => {
        inputElement.removeEventListener("input", handleInput);
      };
    }
  }, []);
  return <input ref={inputRef} className={cls.rangeInput} type="range" {...otherProps} />;
};
