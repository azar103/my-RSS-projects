import React from 'react';
import PropTypes from 'prop-types';
import { withNamespaces } from 'react-i18next';
import i18n from './i18n';
import './language.css';

class Language extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 'en',
    };
    this.changeLanguageHandler = this.changeLanguageHandler.bind(this);
    this.isLanguageSelected = this.isLanguageSelected.bind(this);
  }

  changeLanguageHandler(language) {
    const { onLanguageChangeHanler } = this.props;
    this.i18n = i18n;
    i18n.changeLanguage(language);
    this.setState({ current: language });
    onLanguageChangeHanler(language);
  }

  isLanguageSelected(language) {
    const { current } = this.state;
    return current === language;
  }

  render() {
    return (
      <div className="lang">
        <LanguageButtonWrapped
          language="en"
          isActive={this.isLanguageSelected}
          onClick={this.changeLanguageHandler}
        />
        <LanguageButtonWrapped
          language="ru"
          isActive={this.isLanguageSelected}
          onClick={this.changeLanguageHandler}
        />
        <LanguageButtonWrapped
          language="by"
          isActive={this.isLanguageSelected}
          onClick={this.changeLanguageHandler}
        />
      </div>
    );
  }
}

function LanguageButton({
  language,
  onClick,
  t,
  isActive,
}) {
  return (
    <button
      className={isActive(language) ? 'active' : 'default'}
      key={language}
      type="button"
      onClick={() => onClick(language)}
    >
      {t(language)}
    </button>
  );
}

LanguageButton.propTypes = {
  language: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  t: PropTypes.func,
  isActive: PropTypes.func,
};

LanguageButton.defaultProps = {
  t: value => value,
  isActive: () => false,
};

Language.propTypes = {
  onLanguageChangeHanler: PropTypes.func.isRequired,
};

const LanguageButtonWrapped = withNamespaces()(LanguageButton);

export default withNamespaces()(Language);
