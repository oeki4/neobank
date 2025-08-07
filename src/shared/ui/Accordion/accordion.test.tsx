import { describe, test, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { Accordion } from "./Accordion";

vi.mock("@/shared/ui/Icons/ArrowIcon", () => ({
  ArrowIcon: ({ className }: { className?: string }) => <svg className={className} data-testid="arrow-icon" />,
}));

describe("Accordion component", () => {
  const mockItems = [
    { title: "Title 1", text: "Content 1" },
    { title: "Title 2", text: "Content 2" },
  ];

  test("renders all accordion items with titles", () => {
    render(<Accordion items={mockItems} />);

    mockItems.forEach((item) => {
      expect(screen.getByText(item.title)).toBeInTheDocument();
    });
  });

  test("applies custom className to the root element", () => {
    const customClass = "custom-accordion-class";
    render(<Accordion items={mockItems} className={customClass} />);

    const accordionElement = screen.getByTestId("accordion-root");
    expect(accordionElement).toHaveClass(customClass);
  });

  test("only one item can be opened at a time", () => {
    render(<Accordion items={mockItems} />);

    // Открываем первый элемент
    fireEvent.click(screen.getByText("Title 1"));
    expect(screen.getByText("Content 1")).toBeInTheDocument();
    expect(screen.queryByText("Content 2")).not.toBeInTheDocument();

    // Открываем второй элемент
    fireEvent.click(screen.getByText("Title 2"));

    // Проверяем что первый закрылся, а второй открылся
    expect(screen.queryByText("Content 1")).not.toBeInTheDocument();
    expect(screen.getByText("Content 2")).toBeInTheDocument();
  });
});
