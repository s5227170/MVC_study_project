import React from "react";

import classes from "./UploadProductButton.module.css";

const uploadProductButton = (props) => (
    <div className={classes.UploadProductButton} onClick={props.clicked}>
        <span className="material-icons">add_circle_outline</span>
        <p>Upload Product</p>
    </div>
);

export default uploadProductButton;
