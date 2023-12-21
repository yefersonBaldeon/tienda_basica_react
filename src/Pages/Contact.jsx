import React, { useState } from "react";
import Layout from "../Components/Layout";
import "./Contact.css"

const Contact = () => {
  const [cnt, setcnt] = useState(0);

  const imagenes = [
    "https://www.imf.org/-/media/Images/IMF/home-page/Main-Slider/2023/12/rotator-quota-pr-final-imf-james-mertz-dec2023.ashx",
    "https://www.imf.org/-/media/Images/IMF/home-page/Main-Slider/2023/11/blog-2656x1077-md-climate-cop28-adobe-stock.ashx",
    "https://www.imf.org/-/media/Images/IMF/Publications/REO/WHD/2023/october/HERO-V1/reo-whd-hero-banner.ashx",
  ];

  const textos = [
    "Junta de Gobernadores del FMI aprueba un incremento del 50% de las cuotas de los paises miembros del FMI",
    "Para alcanzar los objetivos climáticos es necesario aumentar la ambición política, los fondos privados y la innovación",
    "Asegurar una inflación baja y fomentar el crecimiento potencial"

  ]

  const aumentar=()=>{
    if(cnt<2){
      setcnt(cnt+1);
    }else{
      setcnt(0);
    }

  }

  const disminuir=()=>{
    if(cnt>0){
      setcnt(cnt-1);
    }else{
      setcnt(2);
    }
  }
  return (
    <Layout>
      <div className="relative one w-full">
        <img className="w-full object-cover h-full" src={imagenes[cnt]} alt="" />
        <button className="absolute bottom-3 text-4xl right-96" onClick={aumentar}>▶</button>

        <div className="absolute bottom-16 w-full">
          <div className="  text-blue-300 text-center text text-2xl">
            {textos[cnt]}
          </div>
        </div>

        <button className="absolute bottom-3 left-96 text-4xl" onClick={disminuir}>◀</button>
      </div>
    </Layout>
  );
};

export default Contact;
