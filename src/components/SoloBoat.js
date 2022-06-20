import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'

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
              <div className='card'>
              <div className='cardinfo'>
                <div className='name'>
                <h1>{boat.name}</h1>
                </div>
                <div className="price">
                <h3>Preço:</h3>
                <p>{boat.Price}</p>
                </div>
                </div>
                <div className='type'>
                <h3>Tipo:</h3>
                <p>{boat.tipo}</p>
                </div>
                <div className='state'>
                <h3>Estado:</h3>
                <p>{boat.estado}</p>
                </div>
                <div className='queriratela'>
                          <h3>Quer ir até lá?</h3>
                          <div className='Sim'>
                          <a href='https://www.decolar.com/pacotes/rio/pacotes-para-rio+de+janeiro?package_id=be8e62e9a1e10324e912bc3b3c22f49988055599591348c7598521b487e110fd&clickedPrice=BRL_1137&priceDate=1655724010474&searchId=d5036125d93c4692a56a44c822aeabe4'> <p>Quero!</p></a>
                          </div>
                </div>
                <div className='comentariosss'>
                  <h1>Comentarios</h1>
                </div>

                </div>
                </div>
                </>
           )})
        </>
      )
  }
          
  
  
            export default SoloBoat;
