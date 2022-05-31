import barco from "../assets/img/barco.jpg"
import "./Cardhome.css"

const Cardhome = () => {
    return (
      <>
      <section className="todoscards">

      <div className="cards">
      <img src={barco} alt="Logo React" width="90%" height="90%"/>
      <p>SeaDoo</p>
      <p>30.000.00</p>
      </div> 

      <div className="cards">
      <img src={barco} alt="Logo React" width="90%" height="90%"/>
      <p>SeaDoo</p>
      <p>30.000.00</p>
      </div>  
      <div className="cards">
      <img src={barco} alt="Logo React" width="90%" height="90%"/>
      <p>SeaDoo</p>
      <p>30.000.00</p>
      </div>
      </section>
      </>
    )
  }
  
  export default Cardhome