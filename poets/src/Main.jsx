import React from 'react';
import { Route, HashRouter } from 'react-router-dom';
import { withNamespaces } from 'react-i18next';
import PropTypes from 'prop-types';
import {
  Home,
  AboutUs,
  AuthorOfTheDay,
  Search,
  OpenAuthorComponent,
  Language,
  Header,
  FullList,
  Footer,
  Difficulties,
} from './components';
import './styles/style.css';
import data from './data/authors.json';

const FullListWrapped = withNamespaces()(FullList);
const OpenAuthorComponentWrapped = withNamespaces()(OpenAuthorComponent);
const DifficultiesWrapped = withNamespaces()(Difficulties);

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      language: 'en',
    };
    this.onLanguageChangeHanler = this.onLanguageChangeHanler.bind(this);
  }

  onLanguageChangeHanler(lang) {
    this.setState({
      language: lang,
    });
  }

  render() {
    const { t } = this.props;
    const { language } = this.state;
    return (
      <HashRouter>
        <React.Fragment>
          <div className="main">
            <Header translate={t} />
            <div className="content">
              <Route
                exact
                path="/"
                component={props => <Home {...props} t={t} authorsInfo={data} />}
              />
              <Route
                path="/authorOfTheDay"
                component={props => (
                  <div className="wrap">
                    <AuthorOfTheDay {...props} t={t} authorsInfo={data} />
                  </div>
                )}
              />
              <Route
                path="/search"
                component={props => (
                  <Search {...props} language={language} authorsInfo={data} t={t} />
                )}
              />
              <Route path="/aboutus" component={withNamespaces()(AboutUs)} />
              <Route
                path="/fulllist"
                component={props => (
                  <FullListWrapped {...props} language={language} authorsInfo={data} />
                )}
              />
              <Route
                path="/authorPage/:firstName/:lastName"
                component={params => (
                  <OpenAuthorComponentWrapped
                    authors={data}
                    firstName={params.match.params.firstName}
                    lastName={params.match.params.lastName}
                  />
                )}
              />
              <Route
                path="/difficulties"
                component={DifficultiesWrapped}
              />
            </div>
          </div>
          <Language onLanguageChangeHanler={this.onLanguageChangeHanler} />
          <Footer />
        </React.Fragment>
      </HashRouter>
    );
  }
}

Main.propTypes = {
  t: PropTypes.func,
};

Main.defaultProps = {
  t: value => value,
};

export default withNamespaces()(Main);
