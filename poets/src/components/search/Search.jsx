import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './search.css';

const renderCard = data => (
  <section className="search-result col">
    <ul>
      {data.map(({ firstName, lastName, titleImage }) => {
        const address = `/authorPage/${firstName}/${lastName}`;
        return (
          <li key={address} className="card row">
            <img alt="img" src={titleImage} />
            <div className="row">
              <Link className="author-name" key={firstName + lastName} to={address}>
                {firstName}
                {' '}
                {lastName}
              </Link>
            </div>
          </li>
        );
      })}
    </ul>
  </section>
);

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = { searchRequest: [] };
  }

  handleChange(event) {
    const inputValue = event.target.value.toLowerCase();
    const { authorsInfo } = this.props;
    if (inputValue) {
      const arr = authorsInfo.filter(({ firstName, lastName, locations }) => (
        firstName.toLowerCase().includes(inputValue)
          || lastName.toLowerCase().includes(inputValue)
          || locations[0].name.toLowerCase().includes(inputValue)
      ));
      this.authorsByName = arr;
      this.setState({ searchRequest: arr });
    } else {
      this.setState({ searchRequest: [] });
    }
  }

  render() {
    const { searchRequest } = this.state;
    const { t } = this.props;
    return (
      <div className="container">
        <div className="col">
          <section className="search-shape">
            <input
              type="text"
              placeholder={t('search-placeholder')}
              onChange={this.handleChange.bind(this)}
            />
          </section>
          {renderCard(searchRequest)}
        </div>
      </div>
    );
  }
}

Search.propTypes = {
  authorsInfo: PropTypes.arrayOf(PropTypes.object),
  t: PropTypes.func,
};
Search.defaultProps = {
  authorsInfo: [],
  t: value => value,
};
export default Search;
