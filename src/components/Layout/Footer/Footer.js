import React from "react";

import classes from "./Footer.module.css";

const Footer = (props) => {
    return(
        <div className={classes.footer}>
            <p className={classes.p}>Made with <i className="fas fa-heart"></i> by Abhishek Kansal</p>
        </div>
    )
}

export default Footer;
