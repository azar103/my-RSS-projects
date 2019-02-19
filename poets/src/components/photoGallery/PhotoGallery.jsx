import React from 'react';
import PropTypes from 'prop-types';
import './photoGallery.css';

const PhotoGallery = ({ photos }) => {
  const makeGallery = photoList => photoList.map((elem, index) => {
    const src = elem;
    const alt = `pic${index + 1}`;
    return <img key={src} className="gallery-item" src={src} alt={alt} />;
  });
  return (
    <div className="gallery-container">{makeGallery(photos)}</div>
  );
};

PhotoGallery.propTypes = {
  photos: PropTypes.arrayOf(PropTypes.string),
};

PhotoGallery.defaultProps = {
  photos: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/No_image_3x4.svg/1024px-No_image_3x4.svg.png',
};

export default PhotoGallery;
