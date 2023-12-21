import React from "react";

import { useContext } from "react";
import { UserContext } from "../Pages/Home";

const Card = ({ data }) => {

    const { one, setone ,chance} = useContext(UserContext);

  return (
    <div className="w-56 h-60 bg-red-400 rounded-lg cursor-pointer">
      <figure className="relative w-full h-4/5">
        <span className="absolute bottom-0 bg-yellow-300 rounded-lg m-2 px-3 py-0.5">
          {data.category}
        </span>
        <img
          className="w-full h-full object-cover rounded-lg"
          src={data.image}
          alt=""
        />
        <div
          className="absolute top-0 right-0 bg-green-400 rounded-full w-6 h-6 flex justify-center items-center m-2 font-bold"
            onClick={chance}
        >
          +
        </div>
      </figure>
      <p className="flex justify-between mt-1">
        <span className="text-sm font-light">{data.title}</span>
        <span className="text-lg font-bold">${data.price}</span>
      </p>
    </div>
  );
};

export default Card;
