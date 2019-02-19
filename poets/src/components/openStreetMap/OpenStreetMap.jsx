import React from 'react';
import PropTypes from 'prop-types';
import {
  Map,
  TileLayer,
  Marker,
} from 'react-leaflet';
import './openStreetMap.css';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import iconRetinaUrl from 'leaflet/dist/images/marker-icon-2x.png';
import iconUrl from 'leaflet/dist/images/marker-icon.png';
import shadowUrl from 'leaflet/dist/images/marker-shadow.png';

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl,
  iconUrl,
  shadowUrl,
});

const OpenStreetMap = ({ info }) => {
  const lat = info[0].latitude;
  const lng = info[0].longitude;
  const position = [lat, lng];
  return (
    <div className="open-street-map">
      <Map style={{ width: '100%', height: '100%' }} center={position} zoom={11}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position} />
      </Map>
    </div>
  );
};

OpenStreetMap.propTypes = {
  info: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default OpenStreetMap;
