import React, {useContext} from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import {InputContext} from "../../../context/InputContext";

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '55%',
        },
        '& .MuiInputBase-root': {
            backgroundColor: "white",
        },

    },
    button: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));

export default function Form(props) {
    const classes = useStyles();
    const {url,setUrl,fetchUrl} = useContext(InputContext);

    return (
        <form className={classes.root} noValidate autoComplete="off">
            <div>
                <TextField
                    required
                    id="outlined-required"
                    placeholder="Enter URL with http(s) protocol"
                    variant="outlined"
                    value={url}
                    onChange={e =>setUrl(e.target.value)}
                />
            </div>
            <div className={classes.button}>
                <Button variant="contained"
                        color="secondary"
                        onClick={fetchUrl}
                >
                    SUBMIT
                </Button>
            </div>
        </form>
    );
}
