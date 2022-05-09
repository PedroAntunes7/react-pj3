import ImgFundo from "./assets/img/Fundo.png";
import "./fundo.css"

const Fundo = () => {
    return(
        <>
        <div ClassName="linearimg"></div>    
            <div className="imgfundo">
        <img src={ImgFundo}/>
            </div>
        </>

    )
}

export default Fundo