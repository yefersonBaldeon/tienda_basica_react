import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const color = "bg-lime-300";

  return (
    <nav className="flex justify-between fixed w-full top-0 py-5 px-8 text-sm font-light bg-white">
      <ul className="flex items-center gap-3">
        <li className="font-bold text-lg">
          <NavLink to="/">Shopi</NavLink>
        </li>
        <li>
          <NavLink to="/" className={({ isActive }) => (isActive ? color : "")}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/blog"
            className={({ isActive }) => (isActive ? color : "")}
          >
            Blog
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? color : "")}
          >
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/sidebar"
            className={({ isActive }) => (isActive ? color : "")}
          >
            SideBar
          </NavLink>
        </li>
      </ul>

      <ul className="flex items-center gap-3">
        <li>yeferson@gmail.com</li>
        <li>
          <NavLink
            to="/categoria"
            className={({ isActive }) => (isActive ? color : "")}
          >
            Categoria
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/novedades"
            className={({ isActive }) => (isActive ? color : "")}
          >
            Novedades
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/ofertas"
            className={({ isActive }) => (isActive ? color : "")}
          >
            Ofertas Oh
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/listas"
            className={({ isActive }) => (isActive ? color : "")}
          >
            Listas Vea
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/Catalogo"
            className={({ isActive }) => (isActive ? color : "")}
          >
            Catalogo Vea
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/ayudanos"
            className={({ isActive }) => (isActive ? color : "")}
          >
            Ayudanos
          </NavLink>
        </li>
        <li>🛒{0}</li>
      </ul>
    </nav>
  );
};

export default Navbar;
