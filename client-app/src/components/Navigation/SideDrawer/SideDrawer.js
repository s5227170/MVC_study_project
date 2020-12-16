import React from 'react';

import NavigationItemsUser from '../NavigationItems/NavigationItems';
import classes from './SideDrawer.module.css';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Auxiliary/Auxiliary';

const sideDrawer = (props) => {
    let attachedClasses = [classes.SideDrawer, classes.Close]
    if(props.open){
        attachedClasses = [classes.SideDrawer, classes.Open];
    }
    return (
        <Aux>
        <Backdrop show ={props.open} clicked={props.closed}/>
        <div className={attachedClasses.join(' ')}>
            <nav>
                <NavigationItemsUser />
            </nav>            
        </div>
        </Aux>
    );
};

export default sideDrawer;