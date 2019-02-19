import React from 'react';
import { PropTypes } from 'prop-types';
import './videoOverlay.css';

const VideoOverlay = ({ video, videosnap }) => {
  function click(event) {
    const videoList = event.target.closest('.video-list');
    if (videoList) {
      const overlay = videoList.querySelector('.video-overlay');
      const videoContainer = videoList.querySelector('.video');
      if (overlay.style.display) {
        overlay.style.display = '';
        videoContainer.style.display = '';
        document.querySelector('iframe')
          .contentWindow.postMessage('{"event":"command","func":"stopVideo","args":""}', '*');
      } else {
        overlay.style.display = 'block';
        videoContainer.style.display = 'block';
      }
    }
  }
  if (video && videosnap) {
    return (
      <div className="video-list" role="button" tabIndex="0" onKeyPress={click} onClick={click}>
        <img className="videosnap" alt={video} src={videosnap} />
        <div className="video-overlay" />
        <div className="video">
          <iframe title={video} src={video} allowFullScreen />
        </div>
      </div>
    );
  }
  return null;
};

VideoOverlay.propTypes = {
  video: PropTypes.string,
  videosnap: PropTypes.string,
};

VideoOverlay.defaultProps = {
  video: 'https://www.youtube.com/',
  videosnap: '',
};

export default VideoOverlay;
