import { useNavigate } from "react-router-dom";
import { PATHS } from "@/routes";
import { ModalConfirmation, Table } from "@/components";
import { useState } from "react";

export const FilmListAdmin: React.FC = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [items, setItems] = useState([
    "Superman",
    "Batman",
    "Los Vengadores",
    "Barby",
  ]);
  const [itemToDeleteId, setItemToDeleteId] = useState<number | null>(null);

  const handleOpenModal = (id: number): void => {
    setItemToDeleteId(id);
    setIsOpen(true);
  };

  const handleDelete = () => {
    if (itemToDeleteId !== null) {
      setItems(items.filter((_, index) => index !== itemToDeleteId - 1));
      setItemToDeleteId(null);
      setIsOpen(false);
    }
  };

  return (
    <div className="w-full h-screen overflow-y-auto">
      <ModalConfirmation
        title={"ATENCIÓN"}
        message={"¿Está seguro que desea eliminar la función?"}
        isOpen={isOpen}
        closeModal={handleDelete}
      />
      <div className="mt-5 ml-5">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-auto">
            <h1 className="text-2xl font-bold text-[#4F46E5]">
              Listado de películas
            </h1>
          </div>
          <div className="w-auto mr-5">
            <button
              className="bg-[#4F46E5] text-white px-4 py-2 rounded-md hover:bg-[#4338CA]"
              onClick={() => {
                navigate(PATHS.ADMIN_NEW_FILM);
              }}
            >
              Agregar Película
            </button>
          </div>
        </div>
        <div className="flex flex-wrap">
          <div className="w-3/4 mt-5">
            <Table items={items} onDelete={handleOpenModal} />
          </div>
        </div>
      </div>
    </div>
  );
};
