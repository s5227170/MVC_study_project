import React from 'react';

import teaLogo from '../../assets/images/textLogo.png';
import classes from './TextLogo.module.css';

const logo = (props) => (
    <div className={classes.TextLogo}>
        <img src={teaLogo} alt="teaTime"/>
    </div>
);

export default logo;