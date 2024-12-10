import { useNavigate } from "react-router-dom";
import { PATHS } from "@/routes";
import { Item, Loading, Modal, ModalConfirmation, Table } from "@/components";
import { useEffect, useState } from "react";
import { FilmFunctionService } from "@/services/filmFunctionService";
import { enqueueSnackbar } from "notistack";

export const DataListAdmin: React.FC = () => {
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
    FilmFunctionService.getAllFilmFunctions()
      .then((results) => {
        const items = results.map((item) => ({
          value: `${item.film?.title} - ${item.function_date} - ${item.start_time}`,
          id: item.function_id,
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
      FilmFunctionService.deleteFilmFunction(itemToDeleteId)
        .then(() => {
          setItems(items.filter((item) => item.id !== itemToDeleteId));
          setItemToDeleteId(null);
          setIsOpenModal(false);
          enqueueSnackbar("¡Su función se eliminó con éxito!", {
            variant: "success",
          });
        })
        .catch(() => {
          setModalMsg("Ha ocurrido un error al eliminar la función");
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
        message="¿Estás seguro que deseas eliminar esta función?"
        closeModal={handleCancelDelete}
        onConfirm={handleConfirmDelete}
        onCancel={handleCancelDelete}
      />
      <div className="mt-5 ml-5">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-auto">
            <h1 className="text-2xl font-bold text-[#4F46E5]">
              Listado de funciones
            </h1>
          </div>
          <div className="w-auto mr-5">
            <button
              className="bg-[#4F46E5] text-white px-4 py-2 rounded-md hover:bg-[#4338CA]"
              onClick={() => {
                navigate(PATHS.ADMIN_NEW_FUNCTION);
              }}
            >
              Agregar Función
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
