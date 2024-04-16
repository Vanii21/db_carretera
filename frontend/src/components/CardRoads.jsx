import { useState } from 'react';
import PropTypes from 'prop-types';
import { useFetchDeleteRoads } from '../hooks/useFetchRoads';

const CardRoads = ({ id_carretera, nombre_carretera, longitud_total, fecha_construccion, nombre, asfaltada, km_asfaltado, km_sin_asfaltar, nombre_cat }) => {

  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
  }

  const deleteRoad = () => {
    useFetchDeleteRoads(id_carretera, localStorage.getItem('id'));
  }

  return (
    <div className="cardroads__container">
      <div className="flex flex-wrap">
        <div className="card">
          <div className="card-content">
            <h2 className="category">Localidad {nombre}</h2>
            <h1 className="cardroads__title">{nombre_carretera}</h1>
            <p className="description"><span>Fecha de Construcion:</span> {new Date(fecha_construccion).toLocaleDateString('es-ES', { weekday: 'long', year: 'numeric', month: 'long', day: '2-digit' })}</p>
            <div className="cardroads__icons">
              <a onClick={() => toggleTab(1)}>Mas detalles</a>
              <a onClick={deleteRoad} className="cardroads__trash"><i className="uil uil-trash-alt"></i></a>
            </div>
            <div className={ toggleState === 1 ? "services__modal active-modal" : "services__modal" }>
            <div className="services__modal-content">
                <i className="uil uil-times services__modal-close" onClick={() => toggleTab(0)}></i>

                <h1 className="cardroads__title-content">{nombre_carretera}</h1>
                <h2 className="category">Detalles:</h2>
                <p className="description">Categoria: {nombre_cat}</p>
                <p className="description">Longitud: {parseFloat(longitud_total).toFixed(2)} Km</p>
                <p className="description">Estado: {asfaltada === "1" ? "Asfaltada": "Sin Asfaltar"}</p>
                <p className="description">Km asfaltados: {parseFloat(km_asfaltado).toFixed(2)} km</p>
                <p className="description">km sin asfaltar: {parseFloat(km_sin_asfaltar).toFixed(2)} km</p>

            </div>
        </div>
          </div>
        </div>
      </div>
    </div>
  )
}

CardRoads.propTypes = {
  id_carretera: PropTypes.number.isRequired,
  nombre_carretera: PropTypes.string.isRequired,
  longitud_total: PropTypes.string.isRequired,
  fecha_construccion: PropTypes.string.isRequired,
  nombre: PropTypes.string.isRequired,
  asfaltada: PropTypes.string.isRequired,
  km_asfaltado: PropTypes.string.isRequired,
  km_sin_asfaltar: PropTypes.string.isRequired,
  nombre_cat: PropTypes.string.isRequired
}

export default CardRoads
