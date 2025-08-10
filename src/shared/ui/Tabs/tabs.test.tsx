import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { Tabs } from "./Tabs";
import { Tab } from "./Tab";
import React from "react";

describe("Tabs component", () => {
  it("рендерит все заголовки и показывает первую вкладку по умолчанию", () => {
    render(
      <Tabs>
        <Tab title="Вкладка 1">Контент 1</Tab>
        <Tab title="Вкладка 2">Контент 2</Tab>
      </Tabs>
    );

    expect(screen.getByText("Вкладка 1")).toBeInTheDocument();
    expect(screen.getByText("Вкладка 2")).toBeInTheDocument();

    expect(screen.getByText("Контент 1")).toBeInTheDocument();
  });

  it("переключает вкладку по клику", () => {
    render(
      <Tabs>
        <Tab title="Вкладка 1">Контент 1</Tab>
        <Tab title="Вкладка 2">Контент 2</Tab>
      </Tabs>
    );

    fireEvent.click(screen.getByText("Вкладка 2"));

    expect(screen.getByText("Контент 2")).toBeInTheDocument();
  });

  it("инициализируется с выбранной вкладкой через проп selectedTab", () => {
    render(
      <Tabs selectedTab={1}>
        <Tab title="Вкладка 1">Контент 1</Tab>
        <Tab title="Вкладка 2">Контент 2</Tab>
      </Tabs>
    );

    expect(screen.getByText("Контент 2")).toBeInTheDocument();
  });
});
