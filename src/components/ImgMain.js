import "./AddImage.css"
// importar imagens svg como componentes
import { ReactComponent as Imgmain } from "../assets/img/imgmain.svg"

const AddImage = () => {
  return (
    <div className="imgmain">
        {/* Usando imagens svg como componentes */} 
        <Imgmain alt="Logo React" width="" height="" />
    </div>
  );
}

export default Imgmain;