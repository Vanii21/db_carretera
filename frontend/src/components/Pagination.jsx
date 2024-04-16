import PropTypes from 'prop-types';

const Pagination = ({ setCurrentPage, currentPage, nPages }) => {
    
  const next = () => {
    if (currentPage !== nPages) setCurrentPage(currentPage + 1);
  }

  const prev = () => {
    if (currentPage !== 1) setCurrentPage(currentPage - 1);
  }

    return (
      <div className="pagination__content">
        <h2 onClick={prev}><i className="uil uil-arrow-left"></i></h2>
        <h3>{currentPage} / {nPages}</h3> 
        <h2 onClick={next}><i className="uil uil-arrow-right"></i></h2>
      </div>
    );
}

Pagination.propTypes = {
  setCurrentPage: PropTypes.any.isRequired,
  currentPage: PropTypes.number.isRequired,
  nPages: PropTypes.number.isRequired,
}

export default Pagination;
