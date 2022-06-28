import React from "react";
import "./Footer.css";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";



const Footer = () => {
  return (
    <>
  
      <MDBFooter color="blue" className="font-small pt-4 mt-4 colorfooter">
        <MDBContainer fluid className="text-center text-md-left">
          <MDBRow>
            <MDBCol md="6">
              <h5 className="title">Quem Somos</h5>
              <p>
              A Melhor Seleção de Barcos, Lanchas e Iates Novos e Seminovos. Compra e Venda de Lanchas, Barcos e Iates Novos e Seminovos. Entre em Contato. Acesse e Confira.
              </p>
            </MDBCol>
            <MDBCol md="6">
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
