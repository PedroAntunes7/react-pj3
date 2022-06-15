import 'bootstrap/dist/css/bootstrap.min.css';
import AddImage from './components/AddImage';
import ExemploContexto from './components/ExemploContexto';
import Barcos from './components/Barcos'
import LangProvider from './lang/LangProvider'
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



function App() {
  return (
      <div className="App">
       <AuthProvider>
          <LangProvider>
            <Routes>
              <Route path="/" element={<LayoutDefault />}>
                <Route index element={<ExemploContexto/>} />
                <Route path="Barcos" element={<Barcos />} />
                <Route path="Jets" element={<Jets />} />
                <Route path="Praia" element={<Praias />} />
                <Route path="Contatos"> <Route index element={<Contatos />} />
                  <Route path="Contatos" element={<Contatos />} />
                </Route>
              </Route>

              <Route path='admin/login' element={<Login />} />
              <Route path='admin/' element={<LayoutDashboard />}>
                    <Route index element={<APIIntegration />}/>
                    <Route path="edit/:userId" element={<EditUserOnChange />} />
              </Route>

              <Route path="*" element={<NotFound />} />
            </Routes>
          </LangProvider>
        </AuthProvider>
      </div>
  );
}

export default App;
