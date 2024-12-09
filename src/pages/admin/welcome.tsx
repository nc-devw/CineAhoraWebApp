import { useBooking } from "@/hooks";

export const Admin: React.FC = () => {
  const { userSession } = useBooking();

  return (
    <div className="w-full h-screen overflow-y-auto">
      <div className="flex justify-center items-center h-full">
        <h1 className="text-2xl font-bold text-[#4F46E5]">
          Bienvenido al panel de administración {userSession?.name}
        </h1>
      </div>
    </div>
  );
};
