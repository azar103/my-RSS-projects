import React from 'react';
import PropTypes from 'prop-types';
import './difficulties.css';

function Difficulties({ t }) {
  return (
    <div className="difficulties">
      <h2>{t('difficulties_title')}</h2>
      <ul>
        {
          t('difficulties:difficulty', { returnObjects: true }).map(difficulty => (
            <li key={difficulty}>{difficulty}</li>
          ))
        }
      </ul>
    </div>
  );
}

Difficulties.propTypes = {
  t: PropTypes.func,
};

Difficulties.defaultProps = {
  t: value => value,
};


export default Difficulties;
