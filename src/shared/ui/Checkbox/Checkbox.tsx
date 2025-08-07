import type { HTMLProps } from "react";
import cls from "./checkbox.module.scss";

export interface CheckboxProps extends HTMLProps<HTMLInputElement> {
  label?: string;
}

export const Checkbox = (props: CheckboxProps) => {
  const { label } = props;
  return (
    <label className={cls.container} htmlFor={props.id}>
      <input {...props} className={cls.checkboxInput} type="checkbox" />
      <span className={cls.checkmark}></span>
      <span className={cls.label}>{label}</span>
    </label>
  );
};
