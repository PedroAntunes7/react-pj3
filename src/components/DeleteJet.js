import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useAuth } from '../providers/authProvider';
import { Row, Col, Button } from 'react-bootstrap';

const DeleteJet = () => {
    console.log('DeleteJet')
    const { userLogged } = useAuth();

    const { jetId } = useParams();
    const [jet, setJet] = useState();
    const navigate = useNavigate();

    useEffect(() => {
        fetch("http://localhost/boat-api/api/jet/select-by-id/?id="+jetId)
            .then((response) => response.json())
            .then((data) => setJet(data));
    }, [jetId]);
  
    const apagar = () => {
        const formData = new FormData()
        formData.append('id', jetId)
        fetch(
            "http://localhost/boat-api/api/jet/delete",
            {method: 'POST', body: formData,
            headers: {
              "Access-Token": userLogged.token
            }}
            )
            .then(() => {
                navigate('/adminjet');
            })
    }

    const voltar = () => {
      navigate('/adminjet');
    }
      
    return (
        <>
        {jet ? (
            <Row className="justify-content-center my-3">
              <Col xs={12}>
                <img src={jet.img} className="w-50"/>
                <h1 className='title'>{jet.name}</h1> 
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
            (<p>Jet não encontrado!</p>)
        }
        </>
    )
}

export default DeleteJet