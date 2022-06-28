import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'
import './Soloboat.css'

const SoloBoat = () =>{
    const {boatId} = useParams()
    const [boat, setBoat] = useState();

    useEffect(() =>{
        fetch("http://localhost/boat-api/api/boat/select-by-id/?id="+boatId)
        .then((response) => response.json())
        .then((data) => 
        setBoat(data)
      )

    }, [boatId])    


  

    return(
        <>
        {boat && (
              <>
              <div key={boat.id}>
          <div className="d-flex justify-content-center my-3 ">
            <div className='linha'>
           <h1 className='title'>{boat.name}</h1> 
            </div>
           </div>
              <div className='img d-flex'>
                <img src={boat.img} className="w-50 adjust-img"/>
                </div>

                <div className='row card flex-row'>


                <div className="col-6 price d-flex align-items-center py-1">
                <h3>Preço: </h3>
                <h5 className='adjust'>{boat.price}</h5>
                </div>

                <div className='col-6 type d-flex align-items-center py-1'>
                <h3>Tipo: </h3>
                <h5 className='adjust'>{boat.tipo}</h5>
                </div>


                <div className='col-6 state d-flex align-items-center py-1'>
                <h3>Estado: </h3>
                <h5 className='adjust'>{boat.estado}</h5>
                </div>

                <div className='col-6 fab d-flex align-items-center py-1'>
                <h3>Ano De Fabricação: </h3>
                <h5 className='adjust'>{boat.ano_fab}</h5>
                </div>

                <div className='col-6 tam d-flex align-items-center py-1'>
                <h3>Tamanho: </h3>
                <h5 className='adjust'>{boat.tamanho}</h5>
                </div>

                <div className='col-6 trip d-flex align-items-center py-1'>
                <h3>Tripulação: </h3>
                <h5 className='adjust'>{boat.trip}</h5>
                </div>

                <div className='col-6 loc d-flex align-items-center py-1'>
                <h3>Local: </h3>
                <h5 className='adjust'>{boat.local}</h5>
                </div>

                <div className='col-6 comb d-flex align-items-center py-1'>
                <h3>Combustivel: </h3>
                <h5 className='adjust'>{boat.comb}</h5>
                </div>
                </div>

              </div>
                </>
           )})
        </>
      )
  }
          
  
  
            export default SoloBoat;
