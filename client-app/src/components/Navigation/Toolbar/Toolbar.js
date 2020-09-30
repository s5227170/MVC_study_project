import React from 'react';

import classes from './Toolbar.module.css';
import Logo from '../../Logo/Logo';
import TextLogo from '../../textLogo/TextLogo';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';

const toolbar = (props) => (
    <header className={classes.Toolbar}>
        <Logo/>
        <TextLogo/>
        <DrawerToggle clicked={props.drawerToggleClicked}/>
    </header>
);

export default toolbar;