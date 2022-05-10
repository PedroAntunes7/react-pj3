import LogoNav from "../logo";
import Navbar from "../Navbar"
import ButtonNav from "../ButtonNav";
import Fundo from "../Fundo";
import Footer from "../Footer";
import './layout.css'
import Cards from "../cards"

const Layout = () => {
    return(
     <>
     <div className="container">
            <LogoNav />
            <Navbar />
            <ButtonNav />
       </div>
            <Fundo />
            <Cards />
       <Footer />
     </>
    )
}

export default Layout