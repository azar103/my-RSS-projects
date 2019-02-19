import React from 'react';
import PropTypes from 'prop-types';
import TimeLine from '../timeLine/TimeLine';
import AuthorCutaway from '../authorCutaway/AuthorCutaway';
import AuthorWorks from '../authorWorks/AuthorWorks';
import './authorPage.css';
import PhotoGallery from '../photoGallery/PhotoGallery';
import VideoOverlay from '../videoOverlay/VideoOverlay';
import GoogleMapComponent from '../googleMaps/GoogleMapComponent';
import OpenStreetMap from '../openStreetMap/OpenStreetMap';

const AuthorPage = ({ info, t }) => (
  <div className="author-page">
    <AuthorCutaway firstName={info.firstName} lastName={info.lastName} avatar={info.titleImage} />
    <AuthorWorks works={info.works} t={t} />
    <TimeLine className="timeline" info={info.timeline} t={t} />
    <h2 className="section-title">{t('photos')}</h2>
    <PhotoGallery photos={info.images} />
    {info.videos && (
      <React.Fragment>
        <h2 className="section-title">{t('author-video')}</h2>
        <VideoOverlay video={info.videos} videosnap={info.videosnap} />
      </React.Fragment>
    )}
    <h2 className="section-title">{t('hometown')}</h2>
    <div className="map-component">
      <GoogleMapComponent info={info.locations} />
      <OpenStreetMap info={info.locations} />
    </div>
  </div>
);

AuthorPage.propTypes = {
  info: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    titleImage: PropTypes.string,
  }),
  t: PropTypes.func,
};

AuthorPage.defaultProps = {
  info: {},
  t: value => value,
};

export default AuthorPage;
