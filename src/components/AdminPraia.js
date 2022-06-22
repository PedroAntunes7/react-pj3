import './Barcos.css'
import "./Cardhome.css"
import { useEffect, useState } from "react";
import { Link, useHref } from "react-router-dom"
import { BsFillTrashFill } from "react-icons/bs"
import { AiFillEdit } from "react-icons/ai"
                    



const AdminPraia = () => {
  const [praia, setPraia] = useState(null);

useEffect(() => {
    fetch("http://localhost/boat-api/api/praia/select-All")
        .then((response) => response.json())
        .then((data) => setPraia(data));
}, []);

return(
  <>
  
  <div className="lista row d-flex justify-content-center titulo" >
    {praia &&
      praia.map((praia) => {
        return (
          <div key={praia.id} className="col-3 card m-2">
           <Link to={"/solopraia/"+praia.id}>
            <img className="barco" src={praia.foto} alt={praia.nome} className="w-100"/>
            <h1 className="name nameboats">{praia.nome}</h1>
           </Link>
            <p className="local">{praia.local}</p>
            <div>
              <Link className='btn btn-primary' to={"/editpraia/"+praia.id}> 
              Editar
              </Link>
            </div>
            <div>
            <Link className='btn btn-primary' to={"/deletepraia/"+praia.id}> 
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

  
 export default AdminPraia