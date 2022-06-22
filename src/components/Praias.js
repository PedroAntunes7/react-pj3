import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Cardhome.css";


const Praias = () => {
  const [praia, setPraia] = useState(null);

useEffect(() => {
    fetch("http://localhost/boat-api/api/praia/select-all")
        .then((response) => response.json())
        .then((data) => setPraia(data));
}, []);

return(
<>
<div className="d-flex justify-content-center my-3">
           <h1 className='title'>Praias</h1> 
         </div>
  <div className="lista col-12 d-flex">
    {praia &&
      praia.map((praia) => {
        return (
          <div key={praia.id } className="card mx-3">
           <Link to={"/solopraia/"+praia.id}>
            <img className="Praia" src={praia.foto} alt={praia.nome}/>
            <h1 className="name namepraia">{praia.nome}</h1>
           </Link>
            <p className="local">{praia.local}</p>
          </div>
        )
      })
    }
    </div>
    </>
)
  }

  
  export default Praias














         
    