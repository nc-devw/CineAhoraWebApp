import React from "react";
import { logo, UserIcon } from "@/assets";
import { Link } from "react-router-dom";
import { PATHS } from "@/routes";
import { Sidebar } from "@/components";
import MenuUser from "./MenuUser"


const getRoutes = () => {
  return (
    <>
      <Link to={PATHS.HOME}>
        <span>Peliculas</span>
      </Link>
      <Link to={PATHS.OFFERS}>
        <span>Promociones</span>
      </Link>
      <Link to={PATHS.ABOUT_US}>
        <span>Sobre nosotros</span>
      </Link>
    </>
  );
};

const Header: React.FC = () => {
  //return <MenuUser />

  return (
    <nav className="flex bg-black px-2 py-4 items-center">
      <Sidebar routes={getRoutes()} />
      <Link
        to={PATHS.HOME}
        className="flex font-bold items-center justify-center gap-x-2  flex-1 sm:flex-initial"
      >
        <img src={logo} className="h-8" />
        <div className="text-xl">
          <span className="text-primary">Cine</span>
          <span className="text-white">Ahora</span>
        </div>
      </Link>
      <div className="flex flex-row justify-center text-white font-bold gap-x-4 hidden sm:flex sm:flex-1">
        {getRoutes()}
      </div>
      <MenuUser />
    </nav>
  );
};

Header.displayName = "Header";

export { Header };
