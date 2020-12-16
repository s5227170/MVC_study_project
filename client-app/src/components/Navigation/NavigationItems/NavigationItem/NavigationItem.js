import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './NavigationItem.module.css';

const navigationItem = (props) => (
    <li className={classes.NavigationItem}>
        <NavLink 
        to={props.link}
        exact={props.exact}
        activeClassName={classes.active}><b>{props.children}</b></NavLink>
    </li>
);

export default navigationItem;