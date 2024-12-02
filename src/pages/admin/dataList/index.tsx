import { Table } from "./Table";

export const DataListAdmin: React.FC = () => {
  return (
    <div className="w-full h-screen overflow-y-auto">
      <div className="mt-5 ml-5">
        <div className="flex flex-wrap">
          <div className="w-full">
            <h1 className="text-2xl font-bold text-[#4F46E5]">
              Listado de funciones
            </h1>
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
