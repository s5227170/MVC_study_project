import React from "react";

import classes from "./TeaItem.module.css";

const teaItem = (props) => (
  <div className={classes.TeaItem}>
    <a href={"/"}>
      <img src={props.img} alt="img" />
    </a>
    <div className={classes.NameAndPrice}>
        <p>Name: {props.name}</p>
        <p>Price: {props.price}</p>  
    </div>
  </div>
);

export default teaItem;
