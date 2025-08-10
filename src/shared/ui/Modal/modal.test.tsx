import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { Modal } from "./Modal";

describe("Modal component", () => {
  it("не рендерит модальное окно, если isOpen = false", () => {
    render(
      <Modal isOpen={false} onClose={vi.fn()}>
        <div>Тест</div>
      </Modal>
    );
    expect(screen.queryByText("Тест")).not.toBeInTheDocument();
  });

  it("рендерит модальное окно, если isOpen = true", () => {
    render(
      <Modal isOpen={true} onClose={vi.fn()}>
        <div>Тест</div>
      </Modal>
    );
    expect(screen.getByText("Тест")).toBeInTheDocument();
  });

  it("закрывает модальное окно при клике на кнопку Close", () => {
    const onCloseMock = vi.fn();
    render(
      <Modal isOpen={true} onClose={onCloseMock}>
        <div>Тест</div>
      </Modal>
    );

    const closeButton = screen.getByRole("button");
    fireEvent.click(closeButton);

    expect(onCloseMock).toHaveBeenCalled();
  });

  it("закрывает модальное окно при клике на фон", () => {
    const onCloseMock = vi.fn();
    render(
      <Modal isOpen={true} onClose={onCloseMock}>
        <div>Тест</div>
      </Modal>
    );

    const backdrop = screen.getByTestId("modal-backdrop");
    fireEvent.click(backdrop);

    expect(onCloseMock).toHaveBeenCalled();
  });
});
