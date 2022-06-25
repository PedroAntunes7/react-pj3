import { useEffect } from "react";
import headConfig from "../helpers/headConfig";
// import Cardhome from '../components/Cardhome'
import "./excontexto.css";
import Imgmain from "../assets/img/imgmain.png";

const ExemploContexto = () => {
  useEffect(() => {
    headConfig({
      title: "Home - Exemplo Contexto",
      description: "Novo description exemplo contexto",
      keywords: "Context, Hook, useContext"
    });
  }, []);
  return (
    <>
      <img className="backgroundimage" src={Imgmain} />
      <div className=" d-flex justify-content-center">
        <h1>Ofertas Semanais</h1>
      </div>
      {/* <Cardhome /> */}
    </>
  );
};

export default ExemploContexto;
