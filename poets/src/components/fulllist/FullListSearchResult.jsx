import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const FullListSearchResult = ({ authors, language }) => (
  <div className="search-results">
    <ul>
      {
        authors.map((author) => {
          const address = `/authorPage/${author.firstName}/${author.lastName}`;
          const text = `${author.translation[language].firstName} ${author.translation[language].lastName}`;
          return (
            <li key={address}>
              <Link
                className="search-results__link"
                key={author.firstName + author.lastName}
                to={address}
              >
                {text}
              </Link>
            </li>
          );
        })
      }
    </ul>
  </div>
);

FullListSearchResult.propTypes = {
  authors: PropTypes.arrayOf(PropTypes.object).isRequired,
  language: PropTypes.string,
};

FullListSearchResult.defaultProps = {
  language: 'en',
};

export default FullListSearchResult;
