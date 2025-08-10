import { describe, it, expect } from "vitest";
import { render, screen, fireEvent, within, waitFor } from "@testing-library/react";
import { Table } from "./Table";

const head = [
  { label: "Дата", key: "date", type: "date" },
  { label: "Имя", key: "name", type: "string" },
  { label: "Счёт", key: "score", type: "number" },
];

const body = [
  { date: "2025-08-10", name: "Анна", score: 50 },
  { date: "2023-01-15", name: "Борис", score: 70 },
  { date: "2024-05-20", name: "Вера", score: 60 },
];

describe("Table component", () => {
  it("рендерит заголовки и строки", () => {
    render(<Table head={head} body={body} />);

    head.forEach((col) => {
      expect(screen.getByRole("button", { name: col.label })).toBeInTheDocument();
    });

    body.forEach((row) => {
      expect(screen.getByText(row.name)).toBeInTheDocument();
      expect(screen.getByText(row.score.toString())).toBeInTheDocument();
    });
  });

  it("сортирует по числам (score)", () => {
    render(<Table head={head} body={body} />);

    const scoreButton = screen.getByRole("button", { name: /счёт/i });
    fireEvent.click(scoreButton);

    const rows = screen.getAllByRole("row").slice(1);
    const scores = rows.map((row) => {
      const cells = within(row).getAllByRole("cell");
      return Number(cells[2].textContent);
    });

    expect(scores).toEqual([70, 60, 50]);
  });

  it("сортирует по строкам (name) и меняет направление стрелки", async () => {
    render(<Table head={head} body={body} />);

    const nameButton = screen.getByRole("button", { name: /имя/i });
    fireEvent.click(nameButton);

    await waitFor(() => {
      const arrowIcon = nameButton.querySelector("svg");
      const arrowClass = arrowIcon?.getAttribute("class") || "";
      expect(arrowClass).toContain("rotate-0");
    });
  });

  it("сортирует по датам (date)", () => {
    render(<Table head={head} body={body} />);

    const dateButton = screen.getByRole("button", { name: /дата/i });
    fireEvent.click(dateButton);

    const rows = screen.getAllByRole("row").slice(1);
    const dates = rows.map((row) => {
      const cells = within(row).getAllByRole("cell");
      return cells[0].textContent; // первая колонка — date
    });

    expect(dates).toEqual(["2025-08-10", "2024-05-20", "2023-01-15"]);
  });
});
