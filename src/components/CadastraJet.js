import { useRef, useEffect} from 'react'
import { useAuth } from '../providers/authProvider';

const CadastraJet = () => {

  const imgRef = useRef();
  const nameRef = useRef();
  const priceRef = useRef();
  const tipoRef = useRef();
  const estadoRef = useRef();
  const ano_fabRef = useRef();
  const localRef = useRef();
  const combRef = useRef();
  const { userLogged } = useAuth();

  useEffect(() => {
    nameRef.current.focus()
  },[])

  const handleSubmit = (event) => {
    event.preventDefault()
    const formData = new FormData();
    formData.append('img', event.target[0].value);
    formData.append('name', event.target[1].value);
    formData.append('price', event.target[2].value);
    formData.append('tipo', event.target[3].value);
    formData.append('estado', event.target[4].value);
    formData.append('ano_fab', event.target[5].value);
    formData.append('local', event.target[6].value);
    formData.append('comb', event.target[7].value);
    
    fetch("http://localhost/boat-api/api/jet/create", {
        method: 'POST',
        body: formData,
        headers: {
          "Access-Token": userLogged.token
        }
      })
      .then((response) => response.json())
      .then((data) => {
        imgRef.current.value = ''
        nameRef.current.value = ''
        priceRef.current.value = ''
        tipoRef.current.value = ''
        estadoRef.current.value = ''
        ano_fabRef.current.value = ''
        localRef.current.value = ''
        combRef.current.value = ''
        console.log(data)
        alert(data.message)
      });
  } 


  return (
    <>
    <h1>Cadastra Jet</h1>
    <form onSubmit={(event) => handleSubmit(event)}>
      <label>Imagem:</label><input ref={imgRef} type="text" name="img"/>
      <label>Nome:</label><input ref={nameRef } type="text" name="name"/>
      <label>Preço:</label><input ref={priceRef} type="text" name="price"/>
      <label>Tipo:</label><input ref={tipoRef} type="text" name="tipo"/>
      <label>Estado:</label><input ref={estadoRef} type="text" name="estado"/>
      <label>Ano De Fabricação:</label><input ref={ano_fabRef} type="text" name="ano_fab"/>
      <label>Local:</label><input ref={localRef} type="text" name="local"/>
      <label>Combustivel:</label><input ref={combRef} type="text" name="comb"/>
      
      <input type="submit" value="Cadastrar" />
    </form>
    </>

  )
}

export default CadastraJet