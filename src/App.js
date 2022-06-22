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
import SoloPraia from './components/SoloPraia';
import SoloJet from './components/SoloJet';
import Admin from './components/Admin';
import EditBoat from './components/EditBoat';
import DeleteBoat from './components/DeleteBoat';
import AdminBoat from './components/AdminBoat'
import AdminJet from './components/Adminjet';
import AdminPraia from './components/AdminPraia';
import EditJet from './components/EditJet';




function App() {
  return (
      <div className="App">
       <AuthProvider>
            <Routes>
              <Route path="/" element={<LayoutDefault />}>
                <Route index element={<ExemploContexto/>} />
                <Route path="barcos" element={<Barcos />} />
                <Route path="jets" element={<Jets />} />
                <Route path="praia" element={<Praias />} />
                <Route path="contatos" element={<Contatos />} />
                <Route path="soloboat/:boatId" element={<SoloBoat />} />
                <Route path="solopraia/:praiaId" element={<SoloPraia />} />
                <Route path="solojet/:jetId" element={<SoloJet />} />
                <Route path="admin/" element={<Admin/>} />
                <Route path="adminboat/" element={<AdminBoat />} />
                <Route path="adminjet/" element={<AdminJet />} />
                <Route path="adminpraia/" element={<AdminPraia />} />
                <Route path="/editboat/:boatId" element={<EditBoat />} />
                <Route path="/editjet/:jetId" element={<EditJet />} />
                <Route path="/deleteboat/:boatId" element={<DeleteBoat />} />
              </Route>

              {/* { <Route path='admin/login' element={<Login />} />
              <Route path='admin/' element={<LayoutDashboard />}> }
                    <Route index element={<APIIntegration />}/>
                    <Route path="edit/:userId" element={<EditUserOnChange />} /> */}

              <Route path="*" element={<NotFound />} />
            </Routes>
        </AuthProvider>
      </div>
  );
}

export default App;
