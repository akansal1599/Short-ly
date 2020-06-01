import React from "react";

import classes from './Toolbar.module.css';

const Toolbar = (props) => {
    return(
        <div className={classes.toolbar}>
            <div className={classes.p}>
                <p className={classes.name}><span className={classes.logo}>S</span>hort<span>-</span>ly</p>
            </div>
        </div>
    )
}

export default Toolbar;
