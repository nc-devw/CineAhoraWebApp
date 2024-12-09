import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { PATHS } from "@/routes";
import { Table, Loading, Item, Modal } from "@/components";
import { FilmsService } from "@/services";
import { ModalConfirmation } from "@/components/modalConfirmation/modalConfirmation";
import { enqueueSnackbar } from "notistack";

export const FilmListAdmin: React.FC = () => {
  const navigate = useNavigate();
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const [items, setItems] = useState<Item[]>([]);
  const [itemToDeleteId, setItemToDeleteId] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [modalTitle, setModalTitle] = useState<string>("");
  const [modalMsg, setModalMsg] = useState<string>("");
  const [isOpenConfirmModal, setIsOpenConfirmModal] = useState<boolean>(false);

  const openModal = (): void => setIsOpenModal(true);
  const closeModal = (): void => setIsOpenModal(false);

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

  const handleDelete = () => {
    setIsLoading(true);
    if (itemToDeleteId !== null) {
      FilmsService.deleteFilm(itemToDeleteId)
        .then(() => {
          setItems(items.filter((item) => item.id !== itemToDeleteId));
          setItemToDeleteId(null);
          setIsOpenModal(false);
          enqueueSnackbar("¡Su pelicula se eliminó con éxito!", {
            variant: "success",
          });
        })
        .catch(() => {
          setModalMsg("Ha ocurrido un error al eliminar la película");
          setModalTitle("Error");
          openModal();
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  };

  const handleDeleteConfirmation = (itemId: number) => {
    setItemToDeleteId(itemId);
    setIsOpenConfirmModal(true);
  };

  const handleConfirmDelete = () => {
    handleDelete();
    setIsOpenConfirmModal(false);
  };

  const handleCancelDelete = () => {
    setItemToDeleteId(null);
    setIsOpenConfirmModal(false);
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="w-full h-screen overflow-y-auto">
      <Modal
        title={modalTitle}
        message={modalMsg}
        isOpen={isOpenModal}
        closeModal={closeModal}
      />
      <ModalConfirmation
        isOpen={isOpenConfirmModal}
        title="Confirmar eliminación"
        message="¿Estás seguro que deseas eliminar esta película? Se borraran todas las funciones asociadas a esta película."
        closeModal={handleCancelDelete}
        onConfirm={handleConfirmDelete}
        onCancel={handleCancelDelete}
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
            <Table items={items} onDelete={handleDeleteConfirmation} />
          </div>
        </div>
      </div>
    </div>
  );
};
