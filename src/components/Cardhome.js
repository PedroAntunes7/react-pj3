// import barco from "../assets/img/barco.jpg"
import "./Cardhome.css"
import { useEffect, useState } from "react";
import { Link } from "react-router-dom"


const Cardhome = () => {
  const [boats, setBoats] = useState(null);

useEffect(() => {
    fetch("http://localhost/boat-api/api/boat/destaques")
        .then((response) => response.json())
        .then((data) => setBoats(data));
}, []);

return(
  <div className="lista row d-flex justify-content-center titulo text-center">
    {boats &&
      boats.map((boat) => {
        return (
          <div key={boat.id } className=" col-3 card m-2 cor">
            <Link to={"/SoloBoat/"+boat.id}>
            <img className="barco" src={boat.img} alt={boat.name} className="w-100 p-2"></img>
            <h1 className="name nameboats">{boat.name}</h1>
            <p className="price">{boat.price}</p>
           </Link>
          </div>
        )
      })
    }
    </div>
)
  }

  
  export default Cardhome