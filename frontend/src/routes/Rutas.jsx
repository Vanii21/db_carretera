import { Routes, Route } from 'react-router-dom';
import Home from '../pages/home/Home.jsx';
import Login from '../pages/login/Login.jsx';

const Rutas = () => {
  return (
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/home/*' element={<Home />} />
    </Routes>
  );
}

export default Rutas;
