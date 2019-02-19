import React from 'react';
import PropTypes from 'prop-types';
import Developer from '../developer/Developer';
import DEVELOPERS from '../../constants/constants';
import './aboutUs.css';

const AboutUs = ({ t }) => {
  const generateDevelopers = devInfo => devInfo.map((dev, index) => {
    const { avatar, name, nickname } = dev;
    const key = name.slice(2) + nickname.slice(3) + index;
    return <Developer avatar={avatar} name={name} nickname={nickname} key={key} />;
  });

  return (
    <section className="about-us">
      <div className="center-content">
        <h2>{t('team_title')}</h2>
        <ul className="our-developers">{generateDevelopers(DEVELOPERS)}</ul>
      </div>
    </section>
  );
};

AboutUs.propTypes = {
  t: PropTypes.func,
};

AboutUs.defaultProps = {
  t: value => value,
};

export default AboutUs;
