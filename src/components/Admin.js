import { Row, Col } from "react-bootstrap"
import { Link } from "react-router-dom"
import './Admin.css'

const Admin = () => {
  return(
    <>
    <Row>
       <Col className="col-4 d-flex flex-column align-items-center">
   <Link className="" to={"/adminboat/"}> 
   <div className="ajuste">
   <img src="https://images.tcdn.com.br/img/img_prod/747051/passeio_de_barco_tradicional_7_1_20200323183146.jpg" />
   </div>
</Link>
<h1>Admin Barcos</h1>
       </Col>

       <Col className="col-4 d-flex flex-column align-items-center">
<Link className="Card" to={"/adminjet/"}> 
   <div className="ajuste">
   <img src="https://cdn.paytour.com.br/assets/images/passeios-1000345/9ec50c71792c304bbb8d68b7838fa17c/jet1.png" />
   </div>
</Link>
<h1>Admin JetSki</h1>
       </Col>

       <Col className="col-4 d-flex flex-column align-items-center">
<Link className="Card" to={"/adminpraia/"}> 
   <div className="ajuste">
   <img src="https://bostonmais.com/wp-content/uploads/2021/02/Melhores-praias-de-Massachusetts.jpg" />
   </div>
</Link>
<h1>Admin Praia</h1>
       </Col>
       <Col className="col-4 d-flex flex-column align-items-center">
<Link className="Card" to={"/cadastrabarco/"}> 
   <div className="ajuste">
<h1>Cadastra Barco</h1>
   </div>
</Link>
       </Col>
       <Col className="col-4 d-flex flex-column align-items-center">
<Link className="Card" to={"/cadastrajet/"}> 
   <div className="ajuste">
<h1>Cadastra Jet</h1>
   </div>
</Link>
       </Col>
       <Col className="col-4 d-flex flex-column align-items-center">
<Link className="Card" to={"/cadastrapraia/"}> 
   <div className="ajuste">
<h1>Cadastra Praia</h1>
   </div>
</Link>
       </Col>
    </Row>
    </>
  )}
   
   export default Admin