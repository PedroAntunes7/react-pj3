import {FaApple} from 'react-icons/fa'
import { HiOutlineTrash } from "react-icons/hi";

const UsandoIcons = ({valor, children}) => {  
    return (
        <>
        <div className="d-flex justify-content-center my-3">
           <h1 className='title'>Contatos</h1> 
        </div>
            <FaApple style={{
                color: "#000",
                width: '100px',
                height: '100px'
            }}/>
            <HiOutlineTrash style={{
                color: "#000",
                width: '100px',
                height: '100px'
            }}/>
        </>
    );
  }
  
export default UsandoIcons;