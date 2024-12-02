import { AdminSidebar } from "@/components/AdminSidebar";
import { NewFunctionAdmin } from "./new-function";

export const Admin: React.FC = () => {
  return (
    <>
      <div className="flex">
        <div>
          <AdminSidebar />
        </div>
        <div className="w-full h-screen overflow-y-auto">
          <NewFunctionAdmin />
        </div>
      </div>
    </>
  );
};
