import { useState, useEffect } from 'react'
import FilhoContexto from "./FilhoContexto";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import headConfig from '../helpers/headConfig';
import Cardhome from '../components/Cardhome'
import './excontexto.css'
import Imgmain from "../assets/img/imgmain.png"



const ExemploContexto = () => { 

  useEffect(() => {
    headConfig({
      title: 'Home - Exemplo Contexto',
      description: 'Novo description exemplo contexto',
      keywords: 'Context, Hook, useContext',
      canonical: 'https://renancavichi.com/'
    });
  }, [])    
  
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    return (
      <>
      <img src={Imgmain}></img>
      <div  className='textocards'>
      <h1>Ofertas Semanais</h1>
      </div>
      <Cardhome />
        <Button variant="success" onClick={handleShow}>Open Modal</Button>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Login</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>Preencha os dados para logar:</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="success" onClick={handleClose}>
              Ok
            </Button>
          </Modal.Footer>
        </Modal>
        <FilhoContexto />
      </>
    );
  }
  
export default ExemploContexto;