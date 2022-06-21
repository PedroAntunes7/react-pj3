import './Barcos.css'
import "./Cardhome.css"
import { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import { BsFillTrashFill } from "react-icons/bs"
import { AiFillEdit } from "react-icons/ai"
                    



const Admin = () => {
  const [boat, setBoats] = useState(null);

useEffect(() => {
    fetch("http://localhost/boat-api/api/boat/select-All")
        .then((response) => response.json())
        .then((data) => setBoats(data));
}, []);

const handleTrashClick = (boatId) => {
    const formData = new FormData();
    formData.append('id', boatId);
    const urlDelete = "http://localhost/boat-api/api/boat/delete";
    fetch(urlDelete, {
      method: 'POST',
      body: formData
    })
      .then((response) => response.json())
      .then((data) => {
        alert(data.message)
        const boatFiltered = boat.filter((boat) => { return boat.id !== boatId });
        setBoats(boatFiltered)
      });
  }

return(
  <>
  
  <div className="lista row d-flex justify-content-center titulo" >
    {boat &&
      boat.map((boat) => {
        return (
          <div key={boat.id} className="col-3 card m-2">
           <Link to={"/SoloBoat/"+boat.id}>
            <img className="barco" src={boat.img} alt={boat.name} className="w-100"/>
            <h1 className="name nameboats">{boat.name}</h1>
           </Link>
            <p className="price">({boat.price})</p>
          </div>
        )
      })
    }
    </div>
    <>
    <FormUser setBoats={setBoats} boat={boat}/>
    {boat &&
      boat.map((boat) => {
        return (
          <div key={boat.id}>
            <h1>{boat.name}</h1>
            <p>{boat.email}</p>
            <BsFillTrashFill
              onClick={() => handleTrashClick(boat.id)}
              style={{cursor: 'pointer'}}
            />
            <AiFillEdit 
              onClick={() => navigate('edit/'+boat.id)} 
              style={{cursor: 'pointer'}}
            />
          </div>
        )
      })
    }
    </>
  </>
)
  }

  
 export default Admin