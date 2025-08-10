import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Input } from "./Input";

describe("Input component", () => {
  it("рендерит label и required-звёздочку", () => {
    render(<Input label="Телефон" required id="phone" />);
    expect(screen.getByText("Телефон")).toBeInTheDocument();
    expect(screen.getByText("*")).toBeInTheDocument();
  });

  it("показывает ошибку и иконку ошибки", () => {
    render(<Input error="Неверный формат" id="test" />);
    expect(screen.getByText("Неверный формат")).toBeInTheDocument();
    const errorIcon = screen.getByTestId("input-error-icon"); // Ищем через data-testid
    expect(errorIcon).toBeInTheDocument();
  });

  it("работает с маской ввода", () => {
    render(
      <Input
        mask="+7 (___) ___-__-__"
        showMask
        id="phone"
        aria-label="phone"
      />
    );
    const input = screen.getByLabelText("phone") as HTMLInputElement;
    fireEvent.change(input, { target: { value: "+7 (999) 123-45-67" } });
    expect(input.value).toBe("+7 (999) 123-45-67");
  });
});
