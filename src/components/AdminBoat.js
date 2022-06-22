import './Barcos.css'
import "./Cardhome.css"
import { useEffect, useState } from "react";
import { Link, useHref } from "react-router-dom"
import { BsFillTrashFill } from "react-icons/bs"
import { AiFillEdit } from "react-icons/ai"
                    



const AdminBoat = () => {
  const [boat, setBoats] = useState(null);

useEffect(() => {
    fetch("http://localhost/boat-api/api/boat/select-All")
        .then((response) => response.json())
        .then((data) => setBoats(data));
}, []);

return(
  <>
  
  <div className="lista row d-flex justify-content-center titulo" >
    {boat &&
      boat.map((boat) => {
        return (
          <div key={boat.id} className="col-3 card m-2">
           <Link to={"/soloboat/"+boat.id}>
            <img className="barco" src={boat.img} alt={boat.name} className="w-100"/>
            <h1 className="name nameboats">{boat.name}</h1>
           </Link>
            <p className="price">({boat.price})</p>
            <div>
              <Link className='btn btn-primary' to={"/editboat/"+boat.id}> 
              Editar
              </Link>
            </div>
            <div>
            <Link className='btn btn-primary' to={"/deleteboat/"+boat.id}> 
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

  
 export default AdminBoat