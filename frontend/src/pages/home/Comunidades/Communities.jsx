import { useState } from 'react';
import CardCommunity from '../../../components/CardCommunity';
import Pagination from '../../../components/Pagination';
import ButtonAdd from '../../../components/ButtonAdd';
import { useFetchCommunities } from '../../../hooks/useFetchCommunities';
import './communities.css';

const Communities = () => {

  //Custom Hook
  const communities = useFetchCommunities();

  //Pagination
  const [dataQt] = useState(3);
  const [currentPage, setCurrentPage] = useState(1);

  const indexFin = currentPage * dataQt;
  const indexIni = indexFin - dataQt;

  const currentCommunities = communities.slice(indexIni, indexFin);
  const nPages = Math.ceil(communities.length / dataQt);


  return (
    <section className="community section">
      <div className="community__container">

        <ButtonAdd />

        <div className="community__divider">
          {currentCommunities.map( ({id_comunidad, nombre_comunidad, poblacion, nombre_carretera}) => (
            <CardCommunity 
              key={id_comunidad} 
              id_comunidad={id_comunidad}
              nombre_comunidad={nombre_comunidad}
              poblacion={poblacion}
              nombre_carretera={nombre_carretera}
            />
          ))}
        </div>
        <div className="Community__pagination">
          <Pagination setCurrentPage={setCurrentPage} currentPage={currentPage} nPages={nPages}/>
        </div>
      </div>
    </section>
  )
}

export default Communities;
