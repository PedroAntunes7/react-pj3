const UsandoChildren = ({value, children}) => {  
    return (
        <>
        <div className="d-flex justify-content-center my-3">
           <h1 className='title'>Praias</h1> 
         </div>
        <div style={{background: "#345345"}}>
            {children}
            <p>Valor = {value}</p>
        </div>
        </>
    );
  }
  
export default UsandoChildren;