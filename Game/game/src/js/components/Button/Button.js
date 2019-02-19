import React from 'react';

import './Button.css';

const Button = ({ className = '', content = '', makeСhanges }) => (
    <button className={className} onClick={makeСhanges}>
        {content}
    </button>
);

export default Button;
