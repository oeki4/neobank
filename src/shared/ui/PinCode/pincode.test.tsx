import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { PinInput } from "./PinCode";

describe("PinInput component", () => {
  it("рендерит поля ввода с заданной длиной", () => {
    render(<PinInput length={4} />);

    const inputs = screen.getAllByRole("textbox");
    expect(inputs).toHaveLength(4);
  });

  it("автоматически переходит к следующему полю при вводе цифры", () => {
    render(<PinInput length={4} />);

    const inputs = screen.getAllByRole("textbox");

    fireEvent.change(inputs[0], { target: { value: "1" } });
    fireEvent.change(inputs[1], { target: { value: "2" } });

    expect(inputs[0].value).toBe("1");
    expect(inputs[1].value).toBe("2");

    expect(inputs[2]).toHaveFocus();
  });

  it("удаляет значение из предыдущего поля при нажатии Backspace на пустом поле", () => {
    render(<PinInput length={4} />);

    const inputs = screen.getAllByRole("textbox");

    fireEvent.change(inputs[0], { target: { value: "1" } });
    fireEvent.change(inputs[1], { target: { value: "2" } });

    fireEvent.change(inputs[1], { target: { value: "" } });

    fireEvent.keyDown(inputs[1], { key: "Backspace" });

    expect(inputs[0].value).toBe("");
    expect(inputs[0]).toHaveFocus();
  });

});
