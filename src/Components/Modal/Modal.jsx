import { useState } from "react";
import "./style.css";
import { useContext } from "react";

import { UserContext } from "../../Pages/Home";
// import OrderCard from "../OrderCard";
import { Link } from "react-router-dom";

function Modal() {
  const { one, setone, chance } = useContext(UserContext);
  const [two, settwo] = useState(true);

  const closeCheckoutSideMenu = () => {
    chance();
  };

  return (
    <aside
      className={`${one ? "" : "hidden"}
      } checkout-side-menu flex-col bg-white fixed right-0 border border-black rounded-xl fixed `}
    >
      <div className="flex justify-between p-6 cursor-pointer ">
        <h2 className="font-medium text-xl">Sé un expert@ del ahorro</h2>
        <div
          onClick={() => {
            closeCheckoutSideMenu();
          }}
        >
          x
        </div>
      </div>
      <p className="mx-4">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore
        molestiae possimus obcaecati? Nostrum a error aperiam! Ut numquam, optio
        aspernatur nulla ex vitae incidunt rerum iste quasi odit praesentium
        nostrum!
      </p>
      <div className="m-4">
        <input
          type="text"
          className="border-black border w-full text-center py-2 my-3 rounded-xl"
          placeholder="Correo electronico"
        />
        <input type="checkbox" />     Aceptar terminos y condiciones</div>
      <div className="px-6 overflow-y-scroll flex-1"></div>

      <div className="flex">
        <Link to="/" className="w-full m-3">
          <button
            className="w-full  bg-red-500 hover:bg-purple-800 p-3  text-white rounded-lg"
            // onClick={handleCheckout}
          >
            Suscribete
          </button>
        </Link>
      </div>
    </aside>
  );
}

export default Modal;

// <div className='fixed inset-0 bg-black bg-opacity-25'>Modal</div>
