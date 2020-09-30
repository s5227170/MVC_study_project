import React from 'react';

import teaLogo from '../../assets/images/logo.png';
import classes from './Logo.module.css';

const logo = (props) => (
    <div className={classes.Logo}>
        <img src={teaLogo} alt="teaTime"/>
    </div>
);

export default logo;