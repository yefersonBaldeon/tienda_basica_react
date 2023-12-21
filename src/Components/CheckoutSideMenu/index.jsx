import { useState } from "react";
import "./style.css";

// import OrderCard from "../OrderCard";
import { Link } from "react-router-dom";

function CheckoutSideMenu() {
  const [one, setone] = useState(true);

  const closeCheckoutSideMenu = () => {
    setone(false);
  };

  return (
    <aside
      className={`${one ? "" : "hidden"}
      } checkout-side-menu flex-col bg-white fixed left-0 border border-black rounded-xl`}
    >
      <div className="flex justify-between p-6 cursor-pointer ">
        <h2 className="font-medium text-xl">Menu</h2>
        <div
          onClick={() => {
            closeCheckoutSideMenu();
          }}
        >
          x
        </div>
      </div>

      <div className="px-6 overflow-y-scroll flex-1"></div>

      <div className="flex">
        <Link to="/" className="w-full m-3">
          <button
            className="w-full  bg-blue-500 hover:bg-purple-800 p-3  text-white rounded-lg"
            // onClick={handleCheckout}
          >
            🏠 Home
          </button>
        </Link>
      </div>
      <div className="flex">
        <Link to="/blog" className="w-full m-3">
          <button
            className="w-full bg-blue-500 hover:bg-purple-800 p-3  text-white rounded-lg"
            // onClick={handleCheckout}
          >
            📝 Blog
          </button>
        </Link>
      </div>
      <div className="flex">
        <Link to="/contact" className="w-full m-3">
          <button
            className="w-full bg-blue-500 hover:bg-purple-800 p-3  text-white rounded-lg"
            // onClick={handleCheckout}
          >
            😎 Contact
          </button>
        </Link>
      </div>
      <div className="flex">
        <Link to="/categoria" className="w-full m-3">
          <button
            className="w-full bg-blue-500 hover:bg-purple-800 p-3  text-white rounded-lg"
            onClick={closeCheckoutSideMenu}
          >
            Categoria
          </button>
        </Link>
      </div>
      <div className="flex">
        <Link to="/novedades" className="w-full m-3">
          <button
            className="w-full bg-blue-500 hover:bg-purple-800 p-3  text-white rounded-lg"
            onClick={closeCheckoutSideMenu}
          >
            Novedades
          </button>
        </Link>
      </div>
      <div className="flex">
        <Link to="/ofertas" className="w-full m-3">
          <button
            className="w-full bg-blue-500 hover:bg-purple-800 p-3  text-white rounded-lg"
            onClick={closeCheckoutSideMenu}
          >
            Ofertas
          </button>
        </Link>
      </div>
    </aside>
  );
}

export default CheckoutSideMenu;
