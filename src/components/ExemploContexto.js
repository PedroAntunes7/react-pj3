import { useEffect } from "react";
import headConfig from "../helpers/headConfig";
import Cardhome from '../components/Cardhome'
import "./excontexto.css";
import Imgmain from "../assets/img/imgmain.png";
import Experiente from "../assets/img/imgexperiente.svg";
import Qualidade from "../assets/img/imgqualidade.svg";
import Assistencia from "../assets/img/imgassistencia.svg";
import { Row, Col } from "react-bootstrap";

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
      <Cardhome /> 

      <section className="bg-primary py-3">
      <Row >
        <Col className=" col-3 card ">
          <div className="d-flex align-items-center py-2">
            <img src={Experiente} className="w-50" />
            <h4>EQUIPE EXPERIENTE</h4>
          </div>
          <p>
            Profissionais experientes e capacitados, com conhecimento voltado a
            compra e venda náutica, acompanham o cliente desde o primeiro
            contato até o fechamento, oferecendo sempre o melhor opção de
            negocio, com o foco único e exclusivo no desejo do cliente.
          </p>
        </Col>
        <Col className=" col-3 card ">
          <div className="d-flex align-items-center py-2">
            <img src={Qualidade} className="w-50" />
            <h4>PRODUTOS DE QUALIDADE</h4>
          </div>
          <p>
            Representamos alguns dos maiores e melhores estaleiros Nacionais,
            oferecendo assim um produto novo de qualidade, bem como os nossos
            seminovos com procedência, garantindo assim a satisfação plena dos
            nossos clientes.
          </p>
        </Col>
        <Col className=" col-3 card ">
          <div className="d-flex align-items-center py-2">
            <img src={Assistencia} className="w-50" />
            <h4>ASSISTÊNCIA TÉCNICA</h4>
          </div>
          <p>
            Para oferecer uma manutenção de qualidade para nossos clientes, a
            equipe de assistência técnica da Fast Boats é formada por
            profissionais especializados em motores das marcas: Yamaha®,
            Evinrude® e Mercury®.
          </p>
        </Col>
      </Row>
      </section>
    </>
  );
};

export default ExemploContexto;
