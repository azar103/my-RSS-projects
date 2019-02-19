import React from 'react';
import PropTypes from 'prop-types';
import './authorWorks.css';

const AuthorWorks = ({ works, t }) => {
  const generateWorksList = authorWorks => authorWorks.map((elem, index) => {
    const work = elem.name;
    const date = elem.dateOfPublication;
    const key = work.slice(0, 2) + work.slice(2) + index;
    return (
      <li key={key}>
        <i className="fa fa-book fa-2x" aria-hidden="true" />
        <span>{work}</span>
        {date}
      </li>
    );
  });

  return (
    <div className="author-works">
      <h2>{t('author-works')}</h2>
      <ul className="works-list">{generateWorksList(works)}</ul>
    </div>
  );
};

AuthorWorks.propTypes = {
  works: PropTypes.arrayOf(PropTypes.object),
  t: PropTypes.func,
};

AuthorWorks.defaultProps = {
  works: {},
  t: value => value,
};

export default AuthorWorks;
