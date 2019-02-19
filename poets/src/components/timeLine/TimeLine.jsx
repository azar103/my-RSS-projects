import React from 'react';
import PropTypes from 'prop-types';
import { Timeline, TimelineItem } from 'vertical-timeline-component-for-react';
import './timeLine.css';

const TimeLine = ({ info, t }) => {
  const generateItems = data => data.map((elem, index) => {
    const { activity, date } = elem;
    const key = activity.slice(0, 2) + date.slice(2) + index;
    return (
      <TimelineItem
        key={key}
        dateText={date}
        style={{ color: '#e86971' }}
        bodyContainerStyle={{
          background: '#ddd',
          padding: '20px',
          borderRadius: '8px',
          boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
        }}
      >
        <p>{activity}</p>
      </TimelineItem>
    );
  });

  return (
    <div className="timeline-block">
      <h2>{t('authors-activities')}</h2>
      <Timeline lineColor="#ddd" className="timeline">
        {generateItems(info)}
      </Timeline>
    </div>
  );
};

TimeLine.propTypes = {
  info: PropTypes.arrayOf(PropTypes.object),
  t: PropTypes.func,
};

TimeLine.defaultProps = {
  info: [],
  t: value => value,
};

export default TimeLine;
