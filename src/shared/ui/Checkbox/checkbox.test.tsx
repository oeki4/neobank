import { describe, test, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { Checkbox } from "./Checkbox";
import type { CheckboxProps } from "./Checkbox";

describe("Checkbox component", () => {
  const defaultProps: CheckboxProps = {
    id: "test-checkbox",
    label: "Test Label",
    checked: true,
    onChange: vi.fn(),
  };

  test("renders with label and basic props", () => {
    render(<Checkbox {...defaultProps} />);

    const checkbox = screen.getByRole("checkbox") as HTMLInputElement;
    expect(checkbox).toBeInTheDocument();
    expect(checkbox.checked).toBe(true);
    expect(checkbox.id).toBe(defaultProps.id);

    const label = screen.getByText(defaultProps.label!);
    expect(label).toBeInTheDocument();
  });

  test("renders without label when not provided", () => {
    const props = {
      id: "no-label-checkbox",
      onChange: vi.fn(),
    };

    render(<Checkbox {...props} />);

    const checkbox = screen.getByRole("checkbox");
    expect(checkbox).toBeInTheDocument();

    const labels = screen.queryAllByTestId("label");
    expect(labels.length).toBe(0);
  });

  test("calls onChange handler when clicked", () => {
    const handleChange = vi.fn();
    const props = {
      id: "test-checkbox",
      label: "Test Label",
      onChange: handleChange,
    };

    render(<Checkbox {...props} />);

    const checkbox = screen.getByRole("checkbox") as HTMLInputElement;
    fireEvent.click(checkbox);

    expect(handleChange).toHaveBeenCalledTimes(1);
  });
});
