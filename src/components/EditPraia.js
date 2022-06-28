import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useRef } from 'react'
import { useAuth } from '../providers/authProvider';
import { Row, Col } from "react-bootstrap";

const EditPraia = () => {
    const { userLogged } = useAuth();

    const fotoRef = useRef();
    const nomeRef = useRef();
    const localRef = useRef();
    const descricaoRef = useRef();

    const { praiaId } = useParams();
    const [praia, setPraia] = useState();
    const navigate = useNavigate();

    useEffect(() => {
        fetch("http://localhost/boat-api/api/praia/select-by-id/?id="+praiaId)
            .then((response) => response.json())
            .then((data) => setPraia(data));
    }, [praiaId]);
  
    const handleSubmit = (event) => {
        event.preventDefault()
        const formData = new FormData()
        formData.append('id', praiaId)
        formData.append('foto', event.target[0].value)
        formData.append('nome', event.target[1].value)
        formData.append('local', event.target[2].value);
        formData.append('descricao', event.target[3].value);
        fetch(
            "http://localhost/boat-api/api/praia/update",
            {method: 'POST', body: formData,
            headers: {
              "Access-Token": userLogged.token
            }}
            )
            .then((response) => response.json())
            .then((data) => {
                if(data?.praia?.id){
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
        {praia ? (
            <Col className='d-flex'>
            <form onSubmit={(event) => handleSubmit(event)}>
                <Col className='col-1'>
                <label>descricao:</label><input ref={descricaoRef} type="text" name="descricao"/><br />
                </Col>
                <Col className='col-1'>
                <label>Local:</label><input ref={localRef} type="text" name="local"/><br />   
                </Col>
                <Col className='col-1'>    
                <label>Nome:  </label><input ref={nomeRef } type="text" name="nome"/><br />
                </Col>
                <Col className='col-1'>   
                <label>Imagem:</label><input ref={fotoRef} type="text" name="foto"/><br />
                </Col>
                <Col className='col-1'>   
                <input type="submit" value="Editar" />
                </Col>

            </form>
            </Col>
            )
        : 
            (<p>Praia não encontrada!</p>)
        }
        </>
    )
}

export default EditPraia