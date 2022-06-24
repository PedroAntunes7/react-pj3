import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useAuth } from '../providers/authProvider';
import { Row, Col, Button } from 'react-bootstrap';

const DeleteBoat = () => {
    console.log('DeleteBoat')
    const { userLogged } = useAuth();

    const { boatId } = useParams();
    const [boat, setBoat] = useState();
    const navigate = useNavigate();

    useEffect(() => {
        fetch("http://localhost/boat-api/api/boat/select-by-id/?id="+boatId)
            .then((response) => response.json())
            .then((data) => setBoat(data));
    }, [boatId]);
  
    const apagar = () => {
        const formData = new FormData()
        formData.append('id', boatId)
        fetch(
            "http://localhost/boat-api/api/boat/delete",
            {method: 'POST', body: formData,
            headers: {
              "Access-Token": userLogged.token
            }}
            )
            .then(() => {
                navigate('/adminboat');
            })
    }

    const voltar = () => {
      navigate('/adminboat');
    }
      
    return (
        <>
        {boat ? (
            <Row className="justify-content-center my-3">
              <Col xs={12}>
                <img src={boat.img} className="w-50"/>
                
                <h1 className='title'>{boat.name}</h1> 
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
            (<p>Barco não encontrado!</p>)
        }
        </>
    )
}

export default DeleteBoat