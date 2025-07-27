import { type ReactNode, useEffect } from "react";
import { createPortal } from "react-dom";
import { CloseIcon } from "@/shared/ui/Icons/CloseIcon.tsx";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

export const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden"; // Блокируем прокрутку
      window.addEventListener("keydown", handleEsc);
    }
    return () => {
      document.body.style.overflow = ""; // Восстанавливаем прокрутку
      window.removeEventListener("keydown", handleEsc);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50" onClick={onClose}>
      <div className="bg-white p-4 shadow-xl max-w-lg w-full relative" onClick={(e) => e.stopPropagation()}>
        <button
          onClick={onClose}
          className="absolute cursor-pointer top-4 right-4 text-gray-500 hover:text-black text-xl"
        >
          <CloseIcon />
        </button>
        {children}
      </div>
    </div>,
    document.body
  );
};
