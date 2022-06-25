import React from "react";
import "./Footer.css";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import { Row, Col } from "react-bootstrap";
import Experiente from "../assets/img/imgexperiente.svg";
import Qualidade from "../assets/img/imgqualidade.svg";
import Assistencia from "../assets/img/imgassistencia.svg";

const Footer = () => {
  return (
    <>
      <Row>
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

      <MDBFooter color="blue" className="font-small pt-4 mt-4 colorfooter">
        <MDBContainer fluid className="text-center text-md-left">
          <MDBRow>
            <MDBCol md="6">
              <h5 className="title">Footer Content</h5>
              <p>
                Here you can use rows and columns here to organize your footer
                content.
              </p>
            </MDBCol>
            <MDBCol md="6">
              <h5 className="title">Atalhos</h5>
              <ul>
                <li className="list-unstyled a">
                  <a href="#">Quem Somos</a>
                </li>
                <li className="list-unstyled a">
                  <a href="#!">Link 2</a>
                </li>
                <li className="list-unstyled a">
                  <a href="#!">Link 3</a>
                </li>
                <li className="list-unstyled a">
                  <a href="#!">Link 4</a>
                </li>
              </ul>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        <div className="footer-copyright text-center py-3">
          <MDBContainer fluid>
            &copy; {new Date().getFullYear()} Copyright:{" "}
            <a href="#"> Pedro Antunes </a>
          </MDBContainer>
        </div>
      </MDBFooter>
    </>
  );
};

export default Footer;
