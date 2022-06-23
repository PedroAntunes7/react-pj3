import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useAuth } from '../providers/authProvider';
import { Row, Col, Button } from 'react-bootstrap';

const DeletePraia = () => {
    console.log('DeletePraia')
    const { userLogged } = useAuth();

    const { praiaId } = useParams();
    const [praia, setPraia] = useState();
    const navigate = useNavigate();

    useEffect(() => {
        fetch("http://localhost/boat-api/api/praia/select-by-id/?id="+praiaId)
            .then((response) => response.json())
            .then((data) => setPraia(data));
    }, [praiaId]);
  
    const apagar = () => {
        const formData = new FormData()
        formData.append('id', praiaId)
        fetch(
            "http://localhost/boat-api/api/praia/delete",
            {method: 'POST', body: formData,
            headers: {
              "Access-Token": userLogged.token
            }}
            )
            .then(() => {
                navigate('/adminpraia');
            })
    }

    const voltar = () => {
      navigate('/adminpraia');
    }
      
    return (
        <>
        {praia ? (
            <Row className="justify-content-center my-3">
              <Col xs={12}>
                <img src={praia.foto} className="w-50"/>
                <h1 className='title'>{praia.nome}</h1> 
              </Col>
              <Col xs="auto">
                <Button variant="primary" onClick={voltar}>Voltar</Button>
              </Col>
              <Col xs="auto">
                <Button variant="danger" onClick={apagar}>Apagar</Button>
              </Col>
            </Row>
            )
        : 
            (<p>Praia não encontrada!</p>)
        }
        </>
    )
}

export default DeletePraia