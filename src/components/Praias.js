import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Cardhome.css";


const Praias = () => {
  const [praias, setPraias] = useState(null);

useEffect(() => {
    fetch("http://localhost/boat-api/api/praia/select-all")
        .then((response) => response.json())
        .then((data) => setPraias(data));
}, []);

return(
<>
<div className="d-flex justify-content-center my-3">
           <h1 className='title'>Praias</h1> 
         </div>
  <div className="lista col-12 d-flex">
    {praias &&
      praias.map((praias) => {
        return (
          <div key={praias.id } className="card mx-3">
           <Link to={"/Barco/"+praias.id}>
            <img className="barco" src={praias.foto} alt={praias.nome}/>
            <h1 className="name nameboats">{praias.nome}</h1>
           </Link>
            <p className="price">({praias.local})</p>
          </div>
        )
      })
    }
    </div>
    </>
)
  }

  
  export default Praias














         
    