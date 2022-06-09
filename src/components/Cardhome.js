import barco from "../assets/img/barco.jpg"
import "./Cardhome.css"
import { useEffect, useState } from "react";
import { Link } from "react-router-dom"


const Cardhome = () => {
  const [boats, setBoats] = useState(null);

useEffect(() => {
    fetch("http://localhost/boat-api/api/boat/select-all")
        .then((response) => response.json())
        .then((data) => setBoats(data));
}, []);

return(
  <div className="lista col-12 d-flex">
    {boats &&
      boats.map((boat) => {
        return (
          <div key={boat.id} className="card mx-3">
           <Link to={"/Barco/"+boat.id}>
            <img className="barco" src={boat.img} alt={boat.name}/>
            <h1 className="name nameboats">{boat.name}</h1>
           </Link>
            <p className="price">({boat.price})</p>
          </div>
        )
      })
    }
    </div>
)
  }

  
  export default Cardhome