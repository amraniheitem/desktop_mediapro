import { Routes, Route } from 'react-router-dom';
import Login from './components/login/login';
import Dashboard from './components/dashboard/dashboard';
import Ajoutez from './components/ajoutez-animater/ajoutez-animateur';
import Animateurs from './components/animateurs/animateurs';
import Animateur from './components/animateurs/animateur';
import Voix from './components/voice-over/voix';
import Voi from './components/voice-over/voi';
import Commande from './components/Commande/commande';
import Detaille from './components/Commande/detaille-commande';

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/ajoutez" element={<Ajoutez />} />
        <Route path="/animateurs" element={<Animateurs />} />
        <Route path="/animateur" element={<Animateur />} />
        <Route path="/voix" element={<Voix />} />
        <Route path="/voi" element={<Voi />} />
        <Route path="/commande" element={<Commande />} />
        <Route path="/detaille" element={<Detaille />} />

      </Routes>
    </>
  );
}