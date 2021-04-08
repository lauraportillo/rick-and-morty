import React from 'react';
import PropTypes from 'prop-types';
import '../stylesheets/ChangePage.scss';

const ChangePage = (props) => {
  const { page, handleLess, handleMore } = props;

  return (
    <nav className="nav">
      <ul className="arrows">
        <li key="left" className="arrows__left" onClick={handleLess}>
          <i className="fas fa-angle-double-left arrows__prev"></i>
        </li>
        <li>
          <p className="arrows__text"> Previous</p>
        </li>
        <span className="arrows__counter">| Page {page} |</span>
        <li>
          <p className="arrows__text"> Next</p>
        </li>
        <li key="right" className="arrows__right" onClick={handleMore}>
          <i className="fas fa-angle-double-right arrows__next"></i>
        </li>
      </ul>
    </nav>
  );
};

ChangePage.propTypes = {
  page: PropTypes.number,
  handleMore: PropTypes.func,
  handleLess: PropTypes.func,
};

export default ChangePage;
