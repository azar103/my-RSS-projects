import React from 'react';

import './EnemyPart.css';

const EnemyPart = ({ name, partUrl = '' }) => {
    return (
        <i
            className={`part ${name}`}
            style={{
                background: `url(${partUrl.default}) no-repeat center center`
            }}
        />
    );
};

export default EnemyPart;
