import LogoNav from "./logo"
import Navbar from "./Navbar"
import './header.css'
import ButtonNav from "./ButtonNav"
import Fundo from "./Fundo"
import Footer from "./Footer"




const Header = () => {
    return(
     <>
     <div className="container">
            <LogoNav />
            <Navbar />
            <ButtonNav />
       </div>
            <Fundo />
       <Footer />
     </>
    )
}

export default Header