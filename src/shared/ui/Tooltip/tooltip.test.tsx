import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { Tooltip } from "./Tooltip";
import React from "react";

describe("Tooltip component", () => {
  it("рендерит детей и тултип-элемент", () => {
    render(
      <Tooltip text="Подсказка">
        <button>Наведи</button>
      </Tooltip>
    );

    expect(screen.getByRole("button", { name: "Наведи" })).toBeInTheDocument();

    expect(screen.getByText("Подсказка")).toBeInTheDocument();
  });

  it("тултип по умолчанию скрыт", () => {
    render(
      <Tooltip text="Подсказка">
        <span>Текст</span>
      </Tooltip>
    );

    const tooltip = screen.getByText("Подсказка");
    expect(tooltip).toHaveClass("invisible");
  });

  it("при наведении тултип становится видимым", () => {
    render(
      <Tooltip text="Подсказка">
        <span>Текст</span>
      </Tooltip>
    );

    const wrapper = screen.getByText("Текст");
    const tooltip = screen.getByText("Подсказка");

    fireEvent.mouseOver(wrapper);
    expect(tooltip).toBeVisible();
  });
});
