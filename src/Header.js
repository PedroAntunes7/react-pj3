import LogoNav from "./logo"
import Navbar from "./Navbar"
import './header.css'
import ButtonNav from "./ButtonNav"




const Header = () => {
    return(
     <>
     <div className="pasa">
      <div>
            <LogoNav />
            <Navbar />
            
            <ButtonNav />
     </div>
     </div>
     </>
    )
}

export default Header