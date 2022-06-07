import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

const EditUserOnChange = () => {

    const { boatId } = useParams()
    const [boat, setBoat] = useState()
    const navigate = useNavigate()

    // const clearUserValue = {
    //     name: '',
    //     email: '',
    //     pass: ''
    // }

    useEffect(() => {
        fetch(`http://localhost/lp2/api/boat/select-by-id/?id=${boatId}`)
            .then((response) => {
                if (response.ok) {
                  return response.json();
                }
                throw new Error(response.statusText);
            })
            .then((data) => setBoat(data))
            .catch((error) => {
                console.log(error);
            })
    }, [boatId]);
  
    const handleSubmit = (event) => {
        event.preventDefault()
        const formData = new FormData()
        formData.append('id', boatId)
        formData.append('name', event.target[0].value)
        formData.append('price', event.target[1].value)
        formData.append('img', event.target[2].value)
        fetch(
            "http://localhost/lp2/api/user/update",
            {method: 'POST', body: formData}
            )
            .then((response) => response.json())
            .then((data) => {
                if(data?.boat?.id){
                    navigate('../');
                    //setUser(clearUserValue)
                } else if(data?.message){
                    alert(data.message)
                } else {
                    console.log(data)
                }
            })
    }
    
    const handleChange = (event) => {
        const {name, value} = event.target
        setBoat({...boat, [name]: value})
    } 
  
    return (
        <>
        {boat ? (
            <form onSubmit={(event) => handleSubmit(event)}>
                <label>Nome:</label><input type="text" name="name" value={boat.name} onChange={handleChange} />
                <label>Preço:</label><input type="email" name="email"  value={boat.email} onChange={handleChange} />
                <label>Imagem:</label><input type="text" name="img"  value={boat.img} onChange={handleChange} />
                <input type="submit" value="Editar" />
            </form>
            )
        : 
            (<p>Barco não encontrado!</p>)
        }
        </>
    )
}

export default EditUserOnChange