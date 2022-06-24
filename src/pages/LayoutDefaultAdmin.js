import Menu from '../components/Menu'
import Footer from '../components/Footer'
import { Outlet } from "react-router-dom";
import MenuAdmin from '../components/MenuAdmin';

const LayoutDefaultAdmin = () => {
  return (
    <>
      <MenuAdmin />
      <Outlet />
      <Footer />  
    </>
  )
}

export default LayoutDefaultAdmin