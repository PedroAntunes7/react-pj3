import 'bootstrap/dist/css/bootstrap.min.css';
import ExemploContexto from './components/ExemploContexto';
import Barcos from './components/Barcos'
import Praias from './components/Praias';
import Contatos from './components/Contatos';
import APIIntegration from './components/APIIntegration';
import { Routes, Route } from "react-router-dom";
import NotFound from './pages/NotFound'
import EditUserOnChange from './components/EditUserOnChange'
import LayoutDefault from './pages/LayoutDefault';
import LayoutDashboard from './pages/LayoutDashboard';
import AuthProvider from './providers/authProvider'
import Login from './components/Login';
import Jets from './components/Jets'
import SoloBoat from './components/SoloBoat';



function App() {
  return (
      <div className="App">
       <AuthProvider>
            <Routes>
              <Route path="/" element={<LayoutDefault />}>
                <Route index element={<ExemploContexto/>} />
                <Route path="Barcos" element={<Barcos />} />
                <Route path="Jets" element={<Jets />} />
                <Route path="Praia" element={<Praias />} />
                <Route path="Contatos" element={<Contatos />} />
                <Route path="SoloBoat/:boatId" element={<SoloBoat />} />
              </Route>

              <Route path='admin/login' element={<Login />} />
              <Route path='admin/' element={<LayoutDashboard />}>
                    <Route index element={<APIIntegration />}/>
                    <Route path="edit/:userId" element={<EditUserOnChange />} />
              </Route>

              <Route path="*" element={<NotFound />} />
            </Routes>
        </AuthProvider>
      </div>
  );
}

export default App;
