import { useRef } from "react";
import { InputMask } from "@react-input/mask";
import type { HTMLAttributes } from "react";
import { InputErrorIcon } from "@/shared/ui/Icons/InputErrorIcon.tsx";
import { SuccessInputIcon } from "@/shared/ui/Icons/SuccessInputIcon.tsx";

interface InputProps extends HTMLAttributes<HTMLInputElement> {
  error?: string;
  required?: boolean;
  label?: string;
  placeholder?: string;
  success?: boolean;
  mask?: string;
  replacement?: { [key: string]: RegExp };
  showMask?: boolean;
  separate?: boolean;
}

export const Input = (props: InputProps) => {
  const {
    error,
    success,
    placeholder,
    required,
    label,
    mask,
    replacement,
    showMask = false, // Добавляем проп с дефолтным значением false
    separate = false, // Для разделителей в маске
    ...otherProps
  } = props;

  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div className="w-full">
      <label htmlFor={otherProps?.id} className="font-ubuntu font-medium text-base text-[#1A202C]">
        {label ? label : null}
        {required ? <span className="text-[#FF0000]">&nbsp;*</span> : null}
      </label>
      <div
        className={[
          "relative w-full bg-[#F9F5E3] h-10 rounded-md mt-2",
          error ? "border-2 border-[#FF5631]" : "border border-[#80808033]",
        ].join(" ")}
      >
        {mask ? (
          <InputMask
            ref={inputRef}
            mask={mask}
            replacement={replacement}
            showMask={showMask} // Показывать маску при вводе
            separate={separate} // Разделители в маске
            placeholder={showMask ? undefined : placeholder} // Убираем placeholder если показываем маску
            {...otherProps}
            className="placeholder:font-ubuntu placeholder:text-[#808080] focus:outline-none focus:ring-1 focus:ring-blue-500 rounded-md placeholder:text-sm text-sm h-full w-full pl-4 pr-12 focus:outline-none"
          />
        ) : (
          <input
            placeholder={placeholder}
            {...otherProps}
            className="placeholder:font-ubuntu placeholder:text-[#808080] focus:outline-none focus:ring-1 focus:ring-blue-500 rounded-md placeholder:text-sm text-sm h-full w-full pl-4 pr-12 focus:outline-none"
          />
        )}
        {error && <InputErrorIcon className="absolute w-6 h-6 right-4 top-1/2 -translate-y-1/2" />}
        {success && <SuccessInputIcon className="absolute w-6 h-6 right-4 top-1/2 -translate-y-1/2" />}
      </div>
      <p className="mt-0.5 font-ubuntu font-medium text-base text-[#FF5631]">{error}</p>
    </div>
  );
};
