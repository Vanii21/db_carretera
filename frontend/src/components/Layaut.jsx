import PropTypes from 'prop-types';

const Layaut = ({ children }) => {
  return (
    <section>
       {children}
    </section>
  );
}

Layaut.propTypes = {
  children: PropTypes.any.isRequired
}

export default Layaut
