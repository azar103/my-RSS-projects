import React from 'react';
import PropTypes from 'prop-types';
import './fulllist.css';

import FullListSearchResult from './FullListSearchResult';

class FullList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      searchResult: props.authorsInfo,
    };
    this.searchForData = this.searchForData.bind(this);
  }

  searchForData(event) {
    const searchValue = event.target.value;
    this.setState({
      search: searchValue,
    });
    this.filterData(searchValue);
  }

  filterData(search) {
    const { authorsInfo, language } = this.props;
    let match = [...authorsInfo];
    if (search) {
      const searchLowerCase = search.toLowerCase();
      match = authorsInfo.filter((author) => {
        const data = author.translation[language];
        return data.firstName.toLowerCase().includes(searchLowerCase)
          || data.lastName.toLowerCase().includes(searchLowerCase)
          || data.locations.toLowerCase().includes(searchLowerCase);
      });
    }
    this.setState({ searchResult: match });
  }

  render() {
    const { search, searchResult } = this.state;
    const { t, language } = this.props;
    return (
      <div className="search">
        <label htmlFor="search__value" className="search__title">{t('search')}</label>
        <input
          id="search__value"
          type="text"
          className="search__value"
          value={search}
          onChange={this.searchForData}
        />
        <FullListSearchResult authors={searchResult} language={language} />
      </div>
    );
  }
}

FullList.propTypes = {
  t: PropTypes.func,
  authorsInfo: PropTypes.arrayOf(PropTypes.object).isRequired,
  language: PropTypes.string,
};

FullList.defaultProps = {
  t: value => value,
};

FullList.defaultProps = {
  language: 'en',
};

export default FullList;
