import { useState } from 'react';
import Pagination from '../../../components/Pagination';
import CardRoads from '../../../components/CardRoads';
import { useFetchRoads } from '../../../hooks/useFetchRoads';
import './road.css';
import ButtonAdd from '../../../components/ButtonAdd';

const Road = () => {

  //Custom Hook
  const roads = useFetchRoads();

  //Pagination
  const [dataQt] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);

  const indexFin = currentPage * dataQt;
  const indexIni = indexFin - dataQt;

  const currentRoads = roads.slice(indexIni, indexFin);
  const nPages = Math.ceil(roads.length / dataQt);

  return (
    <section className="road section">
      
      <ButtonAdd />
      
      <h1 className="road__title section__title">CARRETERAS</h1>
      <div className="sections-container">
        {currentRoads.map(({ id_carretera, nombre_carretera, longitud_total, fecha_construccion, estado, nombre, asfaltada, km_asfaltado, km_sin_asfaltar, nombre_cat}) => (
          <CardRoads
            key={id_carretera}
            id_carretera={id_carretera}
            nombre_carretera={nombre_carretera}
            longitud_total={longitud_total}
            fecha_construccion={fecha_construccion}
            estado={estado}
            nombre={nombre}
            asfaltada={asfaltada}
            km_asfaltado={km_asfaltado}
            km_sin_asfaltar={km_sin_asfaltar}
            nombre_cat={nombre_cat}
          />
        ))}
      </div>
      <Pagination setCurrentPage={setCurrentPage} currentPage={currentPage} nPages={nPages}/>
    </section>
  )
}

export default Road;
