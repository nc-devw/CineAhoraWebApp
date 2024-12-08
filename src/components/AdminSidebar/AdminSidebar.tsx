import { Link, useNavigate } from "react-router-dom";
import { PATHS } from "@/routes";
import { useCallback, useState } from "react";
import { useBooking } from "@/hooks";
import { SessionService } from "@/services";
import { Modal } from "../modal";
import { FilmFunctionIcon, FilmIcon } from "@/assets";

export const AdminSidebar: React.FC = () => {
  const navigate = useNavigate();
  const { resetUserSession } = useBooking();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const openModal = (): void => setIsOpen(true);
  const closeModal = (): void => setIsOpen(false);

  const logout = useCallback(() => {
    SessionService.deleteSession();
    resetUserSession();
    openModal();
  }, [resetUserSession]);

  return (
    <>
      <Modal
        title={"INFO"}
        message={"Ha cerrado sesión"}
        isOpen={isOpen}
        closeModal={() => {
          navigate(PATHS.HOME);
          closeModal();
        }}
      />
      <div className="h-screen relative flex flex-col bg-clip-border  bg-[#121212] text-gray-700 h-[calc(100vh-2rem)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5">
        <div className="mb-2 p-4">
          <h5 className="block antialiased tracking-normal font-sans text-xl font-semibold leading-snug text-white">
            Administración
          </h5>
        </div>
        <nav className="flex flex-col gap-1 min-w-[240px] p-2 font-sans text-base font-normal text-gray-700 h-full justify-between">
          <div className="flex flex-col gap-1">
            <Link to={PATHS.ADMIN_NEW_FILM}>
              <div
                role="button"
                className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-gray-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none text-white"
              >
                <div className="grid place-items-center mr-4">
                  <FilmIcon />
                </div>
                <span>Peliculas</span>
              </div>
            </Link>
            <Link to={PATHS.ADMIN_FUNCTION_LIST}>
              <div
                role="button"
                tabIndex={0}
                className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-blue-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none text-white"
              >
                <div className="grid place-items-center mr-4">
                  <FilmFunctionIcon />
                </div>
                <span>Funciones</span>
              </div>
            </Link>
          </div>
          <div
            onClick={logout}
            role="button"
            tabIndex={0}
            className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-blue-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none text-white"
          >
            <div className="grid place-items-center mr-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
                className="h-5 w-5 text-white"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2.25a.75.75 0 01.75.75v9a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM6.166 5.106a.75.75 0 010 1.06 8.25 8.25 0 1011.668 0 .75.75 0 111.06-1.06c3.808 3.807 3.808 9.98 0 13.788-3.807 3.808-9.98 3.808-13.788 0-3.808-3.807-3.808-9.98 0-13.788a.75.75 0 011.06 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
            <span>Cerrar sesión</span>
          </div>
        </nav>
      </div>
    </>
  );
};
