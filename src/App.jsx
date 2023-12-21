import { BrowserRouter, Routes } from "react-router-dom";
import { useRoutes } from "react-router-dom";

import React from "react";
// import Layout from "./Pages/Layout";
import Home from "./Pages/Home";
import Blog from "./Pages/Blog";
import Contact from "./Pages/Contact";
import NoPage from "./Pages/NoPage";
import Navbar from "./Components/Navbar";
import Sidebar from "./Pages/Sidebar";
import Novedades from "./Pages/Novedades";
import Categorias from "./Pages/Categorias";
import { Ofertas } from "./Pages/Ofertas";
import Listas from "./Pages/Listas";

const App = () => {
  function Route() {
    let element = useRoutes([
      { path: "", element: <Home /> },
      { path: "/home", element: <Home /> },
      { path: "/blog", element: <Blog /> },
      { path: "/contact", element: <Contact /> },
      { path: "/*", element: <NoPage /> },
      { path: "/sidebar", element: <Sidebar /> },
      { path: "/categoria", element: <Categorias /> },
      { path: "/novedades", element: <Novedades /> },
      { path: "/ofertas", element: <Ofertas /> },
      { path: "/listas", element: <Listas /> },

    ]);

    return element;
  }

  return (
    <BrowserRouter>
      <Route></Route>
      <Navbar></Navbar>
    </BrowserRouter>
  );
};

export default App;
