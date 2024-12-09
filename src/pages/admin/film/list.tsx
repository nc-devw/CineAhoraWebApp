import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { PATHS } from "@/routes";
import { ModalConfirmation, Table, Loading, Item } from "@/components";
import { FilmsService } from "@/services";

export const FilmListAdmin: React.FC = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [items, setItems] = useState<Item[]>([]);
  const [itemToDeleteId, setItemToDeleteId] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    FilmsService.getAllFilms()
      .then((results) => {
        const items = results.map((item) => ({
          value: item.title,
          id: item.film_id,
        }));
        setItems(items);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  const handleOpenModal = (id: number): void => {
    setItemToDeleteId(id);
    setIsOpen(true);
  };

  const handleDelete = () => {
    if (itemToDeleteId !== null) {
      setItems(items.filter((item) => item.id !== itemToDeleteId));
      setItemToDeleteId(null);
      setIsOpen(false);
    }
  };

  if (isLoading) {
    return <Loading />;
  }

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
