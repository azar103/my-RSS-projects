import React from 'react';
import PropTypes from 'prop-types';
import './developer.css';

const Developer = ({ avatar, name, nickname }) => (
  <li className="developer">
    <a href={`https://github.com/${nickname}`} target="_blank" rel="noopener noreferrer">
      <div className="col">
        <img src={avatar} alt={name} width={200} height={200} />
        <span className="developer-name">{name}</span>
      </div>
    </a>
  </li>
);

Developer.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  nickname: PropTypes.string,
};

Developer.defaultProps = {
  avatar: 'https://avatars2.githubusercontent.com/u/31645920?s=400&v=4',
  name: 'Developer',
  nickname: '',
};

export default Developer;
