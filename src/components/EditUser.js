import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

const EditUser = () => {

    const { boatId } = useParams();
    const [boat, setBoat] = useState();
    const navigate = useNavigate();

    useEffect(() => {
        fetch("http://localhost/lp2/api/boat/select-by-id/?id="+boatId)
            .then((response) => response.json())
            .then((data) => setBoat(data));
    }, [boatId]);
  
    const handleSubmit = (event) => {
        event.preventDefault()
        const formData = new FormData()
        formData.append('id', boatId)
        formData.append('img', event.target[0].value)
        formData.append('name', event.target[1].value)
        formData.append('price', event.target[2].value)
        fetch(
            "http://localhost/lp2/api/boat/update",
            {method: 'POST', body: formData}
            )
            .then((response) => response.json())
            .then((data) => {
                if(data?.boat?.id){
                    navigate('../');
                } else if(data?.message){
                    alert(data.message)
                } else {
                    console.log(data)
                }
            })
    } 
  
    return (
        <>
        {boat ? (
            <form onSubmit={(event) => handleSubmit(event)}>
                <label>Nome:</label><input type="text" name="name" defaultValue={boat.name} />
                <label>Preço:</label><input type="email" name="email"  defaultValue={boat.price} />
                <label>Image:</label><input type="text" name="img"  defaultValue={boat.img} />
                <input type="submit" value="Editar" />
            </form>
            )
        : 
            (<p>Barco não encontrado!</p>)
        }
        </>
    )
}

export default EditBoat