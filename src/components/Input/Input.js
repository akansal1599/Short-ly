import React from 'react';
import Form from "./Form/Form";

import classes from './Input.module.css';

const Input = (props) => {

    return(
        <div className={classes.input}>
            <h2>Paste the URL to be shortened</h2>
            <Form />
        </div>
    )
}

export default Input;
