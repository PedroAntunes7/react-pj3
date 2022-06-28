import { useRef, useEffect} from 'react'
import { useAuth } from '../providers/authProvider';
import { Row, Col } from "react-bootstrap";

const CadastraPraia = () => {

  const fotoRef = useRef();
  const nomeRef = useRef();
  const localRef = useRef();
  const descricaoRef = useRef();
  const { userLogged } = useAuth();

  useEffect(() => {
    nomeRef.current.focus()
  },[])

  const handleSubmit = (event) => {
    event.preventDefault()
    const formData = new FormData();
    formData.append('foto', event.target[0].value);
    formData.append('nome', event.target[1].value);
    formData.append('local', event.target[2].value);
    formData.append('descricao', event.target[3].value);
    
    fetch("http://localhost/boat-api/api/praia/create", {
        method: 'POST',
        body: formData,
        headers: {
          "Access-Token": userLogged.token
        }
      })
      .then((response) => response.json())
      .then((data) => {
        fotoRef.current.value = ''
        nomeRef.current.value = ''
        localRef.current.value = ''
        descricaoRef.current.value = ''
        console.log(data)
        alert(data.message)
      });
  } 

  return (
    <>
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
                <Col className='col-1 py-2'>   
                <input type="submit" value="Editar"  className='bg-primary' />
                </Col>

            </form>
            </Col>
    </>

  )
}

export default CadastraPraia