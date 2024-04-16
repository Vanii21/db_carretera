import { useState } from 'react';
import CardSections from '../../../components/CardSections';
import Pagination from '../../../components/Pagination';
import { useFetchSections } from '../../../hooks/useFetchSections';
import './sections.css';
import ButtonAdd from '../../../components/ButtonAdd';

const Sections = () => {

  //Custom Hook
  const sections = useFetchSections();

  //Pagination
  const [dataQt] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);

  const indexFin = currentPage * dataQt;
  const indexIni = indexFin - dataQt;

  const currentSections = sections.slice(indexIni, indexFin);
  const nPages = Math.ceil(sections.length / dataQt);

  return (
    <section className="sectio section">
      
      <ButtonAdd />

      <h1 className="road__title section__title">TRAMOS</h1>

      <div className="sections-container">
        {currentSections.map(({ id_tramo, kilometro, inicio_com, fin_com, nombre }) => (
          <CardSections
            key={id_tramo}
            id_tramo={id_tramo}
            kilometro={kilometro}
            inicio_com={inicio_com}
            fin_com={fin_com}
            nombre={nombre}
          />
        ))}
      </div>
      <Pagination setCurrentPage={setCurrentPage} currentPage={currentPage} nPages={nPages}/>
    </section>
  )
}

export default Sections;
