import React, {useContext} from 'react';
import {InputContext} from "../../../context/InputContext";
import classes from "./Form.module.css";

export default function Form(props) {
    const {url,setUrl,button,reset,fetchUrl} = useContext(InputContext);
    // const textAreaRef = useRef(null);

    function copyToClipboard(e) {
        e.preventDefault();
        // textAreaRef.current.select();
        // document.execCommand('copy');
        // This is just personal preference.
        // I prefer to not show the the whole text area selected.
        fetchUrl();
        console.log(url);
        e.target.focus();
    };

    return (
        <form>
            <div>
                <input
                    id="input"
                    type="text"
                    className={classes.input}
                    // ref={textAreaRef}
                    required
                    placeholder="Enter URL with http(s) protocol"
                    value={url}
                    onChange={e =>setUrl(e.target.value)}
                />
            </div>
            <div >
                <button
                    type="submit"
                    className={classes.button}
                    onClick={copyToClipboard}
                >
                    {button}
                </button>
            </div>
            <p className={classes.reset} onClick={reset}>Reset</p>
        </form>
    );
}
