import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

const Itemnav = ({ icon, title, link }) => {

  return (
    <li className={title === 'Home' ? "active" : ""}>
        <i className={icon}></i>
        <Link to={link}>{title}</Link>
    </li>
  );
}

Itemnav.propTypes = {
    icon: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired
}

export default Itemnav;
