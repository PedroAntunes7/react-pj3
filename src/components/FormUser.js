import { useRef, useEffect} from 'react'

const FormUser = ({boats, setBoats}) => {

  const nameRef = useRef();
  const priceRef = useRef();
  const imgRef = useRef();

  useEffect(() => {
    nameRef.current.focus()
  },[])

  const handleSubmit = (event) => {
    event.preventDefault()
    const formData = new FormData();
    formData.append('name', event.target[0].value);
    formData.append('price', event.target[1].value);
    formData.append('img', event.target[2].value);
    fetch(
      "http://localhost/lp2/api/boat/create",
      {method: 'POST', body: formData}
      )
      .then((response) => response.json())
      .then((data) => {
        nameRef.current.value = ''
        priceRef.current.value = ''
        imgRef.current.value = ''
        nameRef.current.focus()
        //alert(data.message)
        setBoats([data.boat, ...boats])
      });
  } 

  return (
    <form onSubmit={(event) => handleSubmit(event)}>
      <label>Nome:</label><input ref={nameRef} type="text" name="name"/>
      <label>Preço:</label><input ref={priceRef} type="email" name="price"/>
      <label>img:</label><input ref={imgRef} type="text" name="img"/>
      <input type="submit" value="Cadastrar" />
    </form>
  )
}

export default FormUser