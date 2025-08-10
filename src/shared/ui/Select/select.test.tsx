import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { Select } from "./Select";

describe("Select component", () => {
  const items = [
    { value: "option1", label: "Опция 1" },
    { value: "option2", label: "Опция 2" },
  ];

  it("рендерит label и звёздочку, если required", () => {
    render(<Select items={items} label="Выберите опцию" required id="test-select" />);

    const label = screen.getByText(/Выберите опцию/i);
    expect(label).toBeInTheDocument();

    const star = screen.getByText("*");
    expect(star).toBeInTheDocument();
  });

  it("отображает список опций и выбирает defaultValue", () => {
    render(<Select items={items} defaultValue={items[1]} id="select" />);

    const select = screen.getByRole("combobox") as HTMLSelectElement;
    expect(select.value).toBe("option2");

    const options = screen.getAllByRole("option");
    expect(options).toHaveLength(items.length);
    expect(options[0]).toHaveTextContent("Опция 1");
    expect(options[1]).toHaveTextContent("Опция 2");
  });

  it("показывает ошибку и красную рамку", () => {
    render(<Select items={items} error="Ошибка выбора" id="select" />);

    expect(screen.getByText("Ошибка выбора")).toBeInTheDocument();

    const selectWrapper = screen.getByRole("combobox").parentElement;
    expect(selectWrapper?.className).toContain("border-[#FF5631]");
  });


  it("вызывает onChange при выборе опции", () => {
    const handleChange = vi.fn();
    render(<Select items={items} onChange={handleChange} id="select" />);

    const select = screen.getByRole("combobox");
    fireEvent.change(select, { target: { value: "option1" } });

    expect(handleChange).toHaveBeenCalledTimes(1);
    expect((select as HTMLSelectElement).value).toBe("option1");
  });
});
