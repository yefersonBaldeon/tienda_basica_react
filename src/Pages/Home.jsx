import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Layout from "./../Components/Layout";
import Card from "../Components/Card";
import Modal from "../Components/Modal/Modal";

export const UserContext = React.createContext();

const Home = () => {
  const [one, setone] = useState(false);

  const [Items, setItems] = useState([]);

  const chance = () => {
    setone(!one);
  };

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        setItems([...json]);
        console.log(json);
      });
  }, []);

  return (
    <UserContext.Provider value={{ one, setone ,chance}}>
      <div className={`${one ? "inset-0 bg-black bg-opacity-25 backdrop:backdrop-blur-sm" : ""}`}>
        <Layout className="bg-orange-400">
          <h1 className="font-bold text-lg"> MyOrder </h1>

          <input
            type="text"
            className="rounded-lg border w-80 p-3 border-black m-3"
            placeholder="Search a product"
          />

          <div className="grid grid-cols-4 gap-10">
            {Items.map((data) => {
              return <Card key={data.id} data={data}></Card>;
            })}
          </div>
          <Modal></Modal>
        </Layout>
      </div>
    </UserContext.Provider>
  );
};

export default Home;
