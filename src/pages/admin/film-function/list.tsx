import { useNavigate } from "react-router-dom";
import { PATHS } from "@/routes";
import { Table } from "./table";

export const DataListAdmin: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full h-screen overflow-y-auto">
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
            <Table />
          </div>
        </div>
      </div>
    </div>
  );
};
