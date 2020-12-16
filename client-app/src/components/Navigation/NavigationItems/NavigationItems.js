import React from 'react';

import NavigationItem from './NavigationItem/NavigationItem';
import classes from './NavigationItems.module.css';

const navigationItemsUser = () => (
    <div className={classes.NavigationItems}>
    <h1>MENU</h1>
    <ul>
        <NavigationItem link="/" exact>Browse Tea</NavigationItem>
        <NavigationItem link=" ">My Account</NavigationItem>
        <NavigationItem link=" ">About Us</NavigationItem>
        <NavigationItem link=" ">Contacts</NavigationItem>
        <NavigationItem link=" ">Logout</NavigationItem>
    </ul>
    </div>
);

export default navigationItemsUser;