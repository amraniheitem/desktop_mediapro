import { Routes, Route } from 'react-router-dom';
import Login from './components/login/login';
import Dashboard from './components/dashboard/dashboard';
import Ajoutez from './components/ajoutez-animater/ajoutez-animateur';
import Animateurs from './components/animateurs/animateurs';
import Animateur from './components/animateurs/animateur';

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/ajoutez" element={<Ajoutez />} />
        <Route path="/animateurs" element={<Animateurs />} />
        <Route path="/animateur" element={<Animateur />} />

      </Routes>
    </>
  );
}