import React, { MouseEvent } from "react";

interface ModalProps {
  isOpen: boolean;
  closeModal: () => void;
  title: string;
  message: string;
  onConfirm: () => void;
  onCancel: () => void;
}

export const ModalConfirmation: React.FC<ModalProps> = ({
  isOpen,
  closeModal,
  title,
  message,
  onConfirm,
  onCancel,
}) => {
  const stopPropagation = (e: MouseEvent<HTMLDivElement>): void => {
    e.stopPropagation();
  };

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 transition-opacity duration-300 ease-out"
          onClick={closeModal}
        >
          <div
            className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full transition-transform transform scale-95 opacity-0 animate-fadeIn"
            onClick={stopPropagation} // Evitar cerrar al hacer clic dentro del modal
          >
            <h2 className="text-2xl font-bold mb-4">{title}</h2>
            <p className="mb-4">{message}</p>
            <div className="flex justify-end">
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded"
                onClick={onConfirm}
              >
                Confirmar
              </button>
              <button
                className="ml-2 bg-red-500 text-white px-4 py-2 rounded"
                onClick={onCancel}
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
