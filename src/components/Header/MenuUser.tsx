import { useState } from "react";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { UserIcon } from "@/assets";
import { Link } from "react-router-dom";
import { PATHS } from "@/routes";
import { useBooking } from "@/hooks";
import { SessionService } from "@/services";
import { Modal } from "@/components";

export default function MenuUser() {
  const { userSession, resetUserSession } = useBooking();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const openModal = (): void => setIsOpen(true);
  const closeModal = (): void => setIsOpen(false);

  const logout = () => {
    SessionService.deleteSession();
    resetUserSession();
    openModal();
  };

  return (
    <Menu as="div" className="relative inline-block text-left">
      <Modal
        title={"INFO"}
        message={"Ha cerrado sesión"}
        isOpen={isOpen}
        closeModal={() => {
          closeModal();
        }}
      />
      <div>
        <MenuButton className="text-white border border-white-700 hover:bg-gray-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-gray-500 dark:text-gray-500 dark:hover:text-white dark:focus:ring-gray-800 dark:hover:bg-gray-500">
          {userSession && userSession.isLogged && userSession.name && (
            <div className="mr-1">{`Hola ${userSession.name}!`}</div>
          )}
          <UserIcon />
        </MenuButton>
      </div>

      <MenuItems
        transition
        className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
      >
        <div className="py-1">
          {userSession && !userSession.isLogged && (
            <MenuItem>
              <Link
                to={PATHS.LOGIN}
                className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
              >
                Login
              </Link>
            </MenuItem>
          )}

          {userSession && userSession.isLogged && (
            <MenuItem>
              <Link
                to={PATHS.MY_TICKETS}
                className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
              >
                Mi cuenta
              </Link>
            </MenuItem>
          )}
          {userSession && userSession.isLogged && userSession.isAdmin && (
            <MenuItem>
              <Link
                to={PATHS.ADMIN}
                className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
              >
                Administración
              </Link>
            </MenuItem>
          )}
          {userSession && userSession.isLogged && (
            <MenuItem>
              <Link to={PATHS.HOME}>
                <button
                  onClick={logout}
                  type="button"
                  className="block w-full px-4 py-2 text-left text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                >
                  Cerrar sesión
                </button>
              </Link>
            </MenuItem>
          )}
        </div>
      </MenuItems>
    </Menu>
  );
}
