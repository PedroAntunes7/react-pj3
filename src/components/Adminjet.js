import './Barcos.css'
import "./Cardhome.css"
import { useEffect, useState } from "react";
import { Link, useHref } from "react-router-dom"
import { BsFillTrashFill } from "react-icons/bs"
import { AiFillEdit } from "react-icons/ai"
                    



const AdminJet = () => {
  const [jet, setJet] = useState(null);

useEffect(() => {
    fetch("http://localhost/boat-api/api/jet/select-All")
        .then((response) => response.json())
        .then((data) => setJet(data));
}, []);

return(
  <>
  
  <div className="lista row d-flex justify-content-center titulo" >
    {jet &&
      jet.map((jet) => {
        return (
          <div key={jet.id} className="col-3 card m-2">
           <Link to={"/solojet/"+jet.id}>
            <img className="barco" src={jet.img} alt={jet.name} className="w-100"/>
            <h1 className="name nameboats">{jet.name}</h1>
           </Link>
            <p className="price">{jet.price}</p>
            <div>
              <Link className='btn btn-primary' to={"/editjet/"+jet.id}> 
              Editar
              </Link>
            </div>
            <div>
            <Link className='btn btn-primary' to={"/deletejet/"+jet.id}> 
              Deletar
            </Link>
            </div>
          </div>
        )
      })
    }
    </div>
  </>
)
  }

  
 export default AdminJet