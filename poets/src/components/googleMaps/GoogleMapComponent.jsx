import React from 'react';
import PropTypes from 'prop-types';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from 'react-google-maps';

const CONSTANTS = {
  url: 'https://maps.googleapis.com/maps/api/js?key=AIzaSyBd3PjUqq81lIOfBPYXrQGWwK5T4ystZjA',
};

const GoogleMapInternalComponent = withScriptjs(withGoogleMap(({ lat, lng }) => (
  <GoogleMap
    defaultZoom={11}
    defaultCenter={{ lat, lng }}
  >
    <Marker position={{ lat, lng }} />
  </GoogleMap>
)));

GoogleMapInternalComponent.propTypes = {
  info: PropTypes.arrayOf(PropTypes.object).isRequired,
};

function GoogleMapComponent({ info }) {
  const wrapper = (<div style={{ height: '40vh', width: '100%' }} />);
  return (
    <GoogleMapInternalComponent
      info={info}
      lat={info[0].latitude}
      lng={info[0].longitude}
      googleMapURL={CONSTANTS.url}
      loadingElement={wrapper}
      containerElement={wrapper}
      mapElement={wrapper}
    />
  );
}

GoogleMapComponent.propTypes = {
  info: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default GoogleMapComponent;
