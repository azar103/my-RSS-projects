import React from 'react';

import './Health.css';

const Health = ({ className, health }) => (
    <article className={'health ' + className}>
        <div
            className={'current-health' + className}
            style={{ width: `${health}%` }}
        />
    </article>
);

export default Health;
