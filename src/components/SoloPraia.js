import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'
import './Soloboat.css'

const SoloPraia = () =>{
    const {praiaId} = useParams()
    const [praia, setPraia] = useState();

    useEffect(() =>{
        fetch("http://localhost/boat-api/api/praia/select-by-id/?id="+praiaId)
        .then((response) => response.json())
        .then((data) => 
        setPraia(data)
      )

    }, [praiaId])    

    return(
        <>
        {praia && (
              <div key={praia.id}>
          <div className="d-flex justify-content-center my-3 ">
           <h1 className='title'>{praia.nome}</h1> 
           </div>

              <div className='foto'>
                <img src={praia.foto} className="w-50 adjust-img"/>
                </div>

                <div className='row card flex-row'>

                <div className="col-6 price d-flex align-items-center py-1">
                <h3>Local: </h3>
                <h5 className='local'>{praia.local}</h5>
                </div>

                <div className="col-6 price d-flex align-items-center py-1">
                <h3>Descrição: </h3>
                <h5 className='local'>{praia.descricao}</h5>
                </div>

                </div>

              </div>
           )})
        </>
      )
  }
          
  
  
            export default SoloPraia;
