import { useRef, useEffect} from 'react'
import { useAuth } from '../providers/authProvider';

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
    <h1>Cadastra Praia</h1>
    <form onSubmit={(event) => handleSubmit(event)}>
      <label>Imagem:</label><input ref={fotoRef} type="text" name="img"/>
      <label>Nome:</label><input ref={nomeRef } type="text" name="name"/>
      <label>Local:</label><input ref={localRef} type="text" name="price"/>
      <label>Descrição:</label><input ref={descricaoRef} type="text" name="tipo"/>
      <input type="submit" value="Cadastrar" />
    </form>
    </>

  )
}

export default CadastraPraia