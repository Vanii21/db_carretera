import PropTypes from 'prop-types';
import imgTramo from '../assets/tramo.png';

const CardSections = ({ id_tramo, kilometro, inicio_com, fin_com, nombre }) => {

  return (
    <div className="cardsections-item">
        <a className="cardsections-image">
            <img alt="tramo" className="cardsections-img" src={imgTramo} />
        </a>
        <div className="cardsections-details">
            <h3 className="cardsections-category">Tramos</h3>
            <h2 className="cardsections-title">{nombre}</h2>
            <p className="cardsections-price">{inicio_com} - {fin_com}</p>
            <p className="cardsections-price">{parseFloat(kilometro).toFixed(2)} Km</p>
        </div>
        <div className="cardroads__icons">
          <a className="cardroads__trash"><i className="uil uil-trash-alt"></i></a>
        </div>
    </div>
  )
}

CardSections.propTypes = {
    id_tramo: PropTypes.string.isRequired,
    kilometro: PropTypes.string.isRequired,
    inicio_com: PropTypes.string.isRequired,
    fin_com: PropTypes.string.isRequired,
    nombre: PropTypes.string.isRequired
}


export default CardSections;
