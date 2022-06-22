import { Link } from "react-router-dom"
import './Admin.css'

const Admin = () => {
  return(
    <>
   <Link className="Card" to={"/adminboat/"}> 
   <div className="ajuste">
   <img src="https://images.tcdn.com.br/img/img_prod/747051/passeio_de_barco_tradicional_7_1_20200323183146.jpg" />
   </div>
</Link>

<Link className="Card" to={"/adminjet/"}> 
   <div className="ajuste">
   <img src="https://cdn.paytour.com.br/assets/images/passeios-1000345/9ec50c71792c304bbb8d68b7838fa17c/jet1.png" />
   </div>
</Link>

<Link className="Card" to={"/adminpraia/"}> 
   <div className="ajuste">
   <img src="https://bostonmais.com/wp-content/uploads/2021/02/Melhores-praias-de-Massachusetts.jpg" />
   </div>
</Link>
    </>
  )}
   
   export default Admin