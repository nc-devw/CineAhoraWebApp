import { AdminSidebar } from "@/components/AdminSidebar";
import { PanelAdmin } from "./PanelAdmin";

export const Admin: React.FC = () => {
  return (
    <>
      <div className="flex">
        <div>
          <AdminSidebar />
        </div>
        <div className="w-full h-screen overflow-y-auto" >
          <PanelAdmin />
        </div>
      </div>
    </>
  );
};
