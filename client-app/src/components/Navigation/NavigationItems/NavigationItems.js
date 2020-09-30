import React from 'react';

import NavigationItem from './NavigationItem/NavigationItem';
import classes from './NavigationItems.module.css';

const navigationItems = () => (
    <ul className={classes.NavigationItems}>
        <h1>MENU</h1>
        <NavigationItem>Browse Tea</NavigationItem>
        <NavigationItem>My Account</NavigationItem>
        <NavigationItem>About Us</NavigationItem>
        <NavigationItem>Contacts</NavigationItem>
        <NavigationItem>Logout</NavigationItem>
    </ul>
);

export default navigationItems;