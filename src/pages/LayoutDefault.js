import Menu from '../components/Menu'
import Footer from '../components/Footer'
import { Outlet } from "react-router-dom";
import Imgmain from '../components/ImgMain';

const LayoutDefault = () => {
  return (
    <>
      <Menu />
      <Outlet />
      <Footer />  
    </>
  )
}

export default LayoutDefault