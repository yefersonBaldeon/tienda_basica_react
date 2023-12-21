import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { faShieldHalved } from "@fortawesome/free-solid-svg-icons";
import { faDragon } from "@fortawesome/free-solid-svg-icons";
import { faGamepad } from "@fortawesome/free-solid-svg-icons";
import { faChess } from "@fortawesome/free-solid-svg-icons";


const Header = () => {
  return (
    <div className="flex justify-center items-center ">
      <div className="m-10">
        <FontAwesomeIcon
          className="text-3xl text-blue-700 px-3"
          icon={faCoffee}
        ></FontAwesomeIcon>
        <FontAwesomeIcon
          className="text-3xl text-blue-700  px-3"
          icon={faShieldHalved}
        ></FontAwesomeIcon>
        <FontAwesomeIcon
          className="text-3xl text-blue-700  px-3"
          icon={faDragon}
        ></FontAwesomeIcon>
        <FontAwesomeIcon
          className="text-3xl text-blue-700  px-3"
          icon={faGamepad}
        ></FontAwesomeIcon>
        <FontAwesomeIcon
          className="text-3xl text-blue-700  px-3"
          icon={faChess}
        ></FontAwesomeIcon>
      </div>
    <div className="m-10 text-3xl text-blue-700 font-light">Fondo Monetario Internacional</div>
      <div>
        <img src="https://www.imf.org/-/media/Images/IMF/News/twitter-seal.ashx" alt="" />
      </div>
    </div>
  );
};

export default Header;
