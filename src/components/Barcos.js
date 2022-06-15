import './Barcos.css'
import "./Cardhome.css"
import { useEffect, useState } from "react";
import { Link } from "react-router-dom"


const Barcos = () => {
  const [boats, setBoats] = useState(null);

useEffect(() => {
    fetch("http://localhost/boat-api/api/boat/select-All")
        .then((response) => response.json())
        .then((data) => setBoats(data));
}, []);

return(
  <>
  <div className="d-flex justify-content-center my-3">
           <h1 className='title'>Barcos à Venda</h1> 
  </div>
  <div className="lista row d-flex justify-content-center titulo" >
    {boats &&
      boats.map((boat) => {
        return (
          <div key={boat.id} className="col-3 card m-2">
           <Link to={"/Barco/"+boat.id}>
            <img className="barco" src={boat.img} alt={boat.name} className="w-100"/>
            <h1 className="name nameboats">{boat.name}</h1>
           </Link>
            <p className="price">({boat.price})</p>
          </div>
        )
      })
    }
    </div>
  </>
)
  }

  
 export default Barcos