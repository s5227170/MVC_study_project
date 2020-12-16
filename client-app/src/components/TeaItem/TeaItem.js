import React from "react";

import classes from "./TeaItem.module.css";

const teaItem = (props) => (
  <div className={classes.TeaItem} onClick={props.clicked}>
    <div className={classes.ImgHolder}>
        <img className={classes.Img} src={props.img} alt="img"></img>
    </div>
    <div className={classes.NameAndPrice}>
      <div className={classes.Name}>
        <p>Name: {props.name}</p>
      </div>
      <div className={classes.Price}>
        <p>Price: {props.price}</p>
      </div>
    </div>
  </div >
);

export default teaItem;
