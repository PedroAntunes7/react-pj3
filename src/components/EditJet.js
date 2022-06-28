import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useRef } from 'react'
import { useAuth } from '../providers/authProvider';
import { Row, Col } from "react-bootstrap";
import { Navigate } from 'react-router-dom';

const EditJet = () => {
    const { userLogged } = useAuth();

    const imgRef = useRef();
    const nameRef = useRef();
    const priceRef = useRef();
    const tipoRef = useRef();
    const estadoRef = useRef();
    const ano_fabRef = useRef();
    const localRef = useRef();
    const combRef = useRef();

    const { jetId } = useParams();
    const [jet, setJet] = useState();
    const navigate = useNavigate();

    useEffect(() => {
        fetch("http://localhost/boat-api/api/jet/select-by-id/?id="+jetId)
            .then((response) => response.json())
            .then((data) => setJet(data));
    }, [jetId]);
  
    const handleSubmit = (event) => {
        event.preventDefault()
        const formData = new FormData()
        formData.append('id', jetId)
        formData.append('img', event.target[0].value)
        formData.append('name', event.target[1].value)
        formData.append('price', event.target[2].value)
        formData.append('tipo', event.target[3].value);
        formData.append('estado', event.target[4].value);
        formData.append('ano_fab', event.target[5].value);
        formData.append('local', event.target[6].value);
        formData.append('comb', event.target[7].value);
        fetch(
            "http://localhost/boat-api/api/jet/update",
            {method: 'POST', body: formData,
            headers: {
              "Access-Token": userLogged.token
            }}
            )
            .then((response) => response.json())
            .then((data) => {
                if(data?.jet?.id){
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
        {jet ? (
            <Row>
            <Col className='d-flex'>
            <form onSubmit={(event) => handleSubmit(event)}>
                <Col className='col-1'><label>Imagem:</label><input ref={imgRef} type="text" name="img"/></Col>
                <Col className='col-1'><label>Nome:  </label><input ref={nameRef } type="text" name="name"/></Col>
                <Col className='col-1'><label>Preço: </label><input ref={priceRef} type="text" name="price"/></Col>
                <Col className='col-1'><label>Tipo:  </label><input ref={tipoRef} type="text" name="tipo"/></Col>
                <Col className='col-1'><label>Estado:</label><input ref={estadoRef} type="text" name="estado"/></Col>
                <Col className='col-1'><label>Ano De Fabricação:</label><input ref={ano_fabRef} type="text" name="ano_fab"/></Col>
                <Col className='col-1'><label>Local:</label><input ref={localRef} type="text" name="local"/></Col>
                <Col className='col-1'><label>Combustivel:</label><input ref={combRef} type="text" name="comb"/></Col>
                <Col className='col-1 py-2'><input type="submit" value="Editar" className='bg-danger' /></Col>  
            </form>
            </Col>
            </Row>
            )
            : 
            (<p>Barco não encontrado!</p>)
        }
        </>
    )
}
<Navigate to="/adminjet/" replace={true} />

export default EditJet