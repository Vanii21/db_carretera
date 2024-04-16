import { Routes, Route } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Layaut from '../../components/Layaut';
import Inicio from './inicio/Inicio.jsx';
import Sections from './tramos/Sections.jsx';
import Road from './Carreteras/Road.jsx';
import Communities from './Comunidades/Communities.jsx';
import './home.css';

const Home = () => {
  return (
    <div className="home__container">
      <Navbar/>
      <Layaut>
          <Routes>
            <Route path='/inicio' element={<Inicio />} />
            <Route path='/tramos' element={<Sections />} />
            <Route path='/carreteras' element={<Road />} />
            <Route path='/comunidades' element={<Communities />} />
          </Routes>
      </Layaut>
    </div>
  );
}

export default Home;
