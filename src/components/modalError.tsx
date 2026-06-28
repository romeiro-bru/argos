import { useEffect } from "react";
import { CloseIcon } from "../assets/closeIcon";
import { ErrorIconCircle } from "../assets/errorIconCircle";

type SuccessModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  message?: string;
  actionLabel?: string;
  onAction?: () => void;
};

export function ErrorModal({
  isOpen,
  onClose,
  title = "Algo deu errado",
  message = "Não foi possível concluir sua solicitação. Tente novamente.",
  actionLabel,
  onAction,
}: SuccessModalProps) {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="success-modal-title"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-[var(--card-bg)] shadow-[var(--shadow)] shadow-md rounded-lg p-6 max-w-sm w-full relative"
      >
        <div className="flex justify-between items-center mb-4">
          <h2 id="success-modal-title" className="font-semibold text-lg">
            {title}
          </h2>

          <button
            onClick={onClose}
            type="button"
            className="cursor-pointer text-gray-400 hover:text-gray-600"
            aria-label="Fechar"
          >
            <CloseIcon />
          </button>
        </div>

        <div className="flex flex-col items-center text-center gap-3">
          <ErrorIconCircle />

          <p className="text-sm text-[var(--text)]">{message}</p>

          <button
            onClick={onAction ?? onClose}
            type="button"
            className="cursor-pointer bg-[var(--primary-color)] shadow-md font-semibold text-white rounded-lg py-2 px-6 mt-2 w-full"
          >
            {actionLabel ?? "Continuar"}
          </button>
        </div>
      </div>
    </div>
  );
}
