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
  <div className="lista col-12 d-flex">
    {boats &&
      boats.map((boat) => {
        return (
          <div key={boat.id } className=" card col-3 mx-3 d-flex flex-wrap text-center">
            <Link to={"/SoloBoat/"+boat.id}>
            <img className="barco" src={boat.img} alt={boat.name}/>
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