import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'
import './Soloboat.css'

const SoloJet = () =>{
    const {jetId} = useParams()
    const [jet, setJet] = useState();

    useEffect(() =>{
        fetch("http://localhost/boat-api/api/jet/select-by-id/?id="+jetId)
        .then((response) => response.json())
        .then((data) => 
        setJet(data)
      )

    }, [jetId])    

    return(
        <>
        {jet && (
              <>
              <div key={jet.id}>
          <div className="d-flex justify-content-center my-3 ">
           <h1 className='title'>{jet.name}</h1> 
           </div>
              <div className='img'>
                <img src={jet.img} className="w-50 adjust-img"/>
                </div>

                <div className='row card flex-row'>


                <div className="col-6 price d-flex align-items-center py-1">
                <h3>Preço: </h3>
                <h5 className='adjust'>{jet.price}</h5>
                </div>

                <div className='col-6 type d-flex align-items-center py-1'>
                <h3>Tipo: </h3>
                <h5 className='adjust'>{jet.tipo}</h5>
                </div>


                <div className='col-6 state d-flex align-items-center py-1'>
                <h3>Estado: </h3>
                <h5 className='adjust'>{jet.estado}</h5>
                </div>

                <div className='col-6 fab d-flex align-items-center py-1'>
                <h3>Ano De Fabricação: </h3>
                <h5 className='adjust'>{jet.ano_fab}</h5>
                </div>

                <div className='col-6 loc d-flex align-items-center py-1'>
                <h3>Local: </h3>
                <h5 className='adjust'>{jet.local}</h5>
                </div>

                <div className='col-6 comb d-flex align-items-center py-1'>
                <h3>Combustivel: </h3>
                <h5 className='adjust'>{jet.comb}</h5>
                </div>
                </div>

              </div>
                </>
           )})
        </>
      )
  }
          
  
  
            export default SoloJet;
