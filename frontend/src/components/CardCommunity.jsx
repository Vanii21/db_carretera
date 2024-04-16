import PropTypes from 'prop-types';

const CardCommunity = ({nombre_comunidad, poblacion, nombre_carretera}) => {
  return (
    <div className="item">
        <div className="content">
        <span className="category">Comunidad / Carretera</span>
            <h2 className="title">{nombre_comunidad} / {nombre_carretera}</h2>
            <p className="description">Poblacion: {poblacion}</p>
        </div>
    </div>
  );
}

CardCommunity.propTypes = {
    nombre_comunidad: PropTypes.string.isRequired,
    poblacion: PropTypes.string.isRequired,
    nombre_carretera: PropTypes.string.isRequired
}

export default CardCommunity
