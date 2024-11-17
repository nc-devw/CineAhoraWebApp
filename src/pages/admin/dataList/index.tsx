import { AdminSidebar } from "@/components/AdminSidebar";

export const DataListAdmin: React.FC = () => {
  return (
    <>
      <div className="flex">
        <div>
          <AdminSidebar />
        </div>
        <div className="w-full h-screen overflow-y-auto" >
         <h1>Poner listado</h1>
        </div>
      </div>
    </>
  );
};
