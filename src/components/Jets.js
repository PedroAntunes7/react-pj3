import "./Cardhome.css"
import { useEffect, useState } from "react";
import { Link } from "react-router-dom"


const Jets = () => {
  const [jet, setJet] = useState(null);

useEffect(() => {
    fetch("http://localhost/boat-api/api/jet/select-all")
        .then((response) => response.json())
        .then((data) => setJet(data));
}, []);

return(
  <>
  <div className="d-flex justify-content-center my-3">
           <h1 className='title'>JetSkis à Venda</h1> 
  </div>
  <div className="lista row d-flex justify-content-center titulo" >
    {jet &&
      jet.map((jet) => {
        return (
          <div key={jet.id} className="col-3 card m-2">
           <Link to={"/SoloJet/"+jet.id}>
            <img className="jet" src={jet.img} alt={jet.name} className="w-100"/>
            <h1 className="name nameboats">{jet.name}</h1>
           </Link>
            <p className="price">({jet.price})</p>
          </div>
        )
      })
    }
    </div>
  </>
)
  }

  
 export default Jets