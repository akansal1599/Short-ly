import React, {createContext, useState} from "react";
import axios from "axios";

export const InputContext = createContext();

const InputContextProvider = (props) => {
    const[url, setUrl] = useState("");
    const[button,setButton] = useState("SUBMIT")

    const fetchUrl = () => {
        // event.preventDefault();
        if(button==="SUBMIT"){
            let str = `https://short-lyy.herokuapp.com/api/url/shorten`;
            console.log(url);
            axios.post(str,{
                longUrl: url
            })
                .then(response => {
                    setUrl(response.data.shortUrl);
                    setButton("COPY URL");
                })
                .catch(err => {
                    console.log(err);
                });
        }
        else{
            var copyText = document.getElementById("input");

            /* Select the text field */
            copyText.select();
            copyText.setSelectionRange(0, 99999); /*For mobile devices*/

            /* Copy the text inside the text field */
            document.execCommand("copy");

            /* Alert the copied text */
            alert("Copied the text: " + copyText.value);
        }

    };

    const reset = () => {
        setUrl("");
        setButton("SUBMIT");
    }

    return (
        <InputContext.Provider value={{url,setUrl,button,reset,fetchUrl}}>
            {props.children}
        </InputContext.Provider>
    );
}

export default InputContextProvider;
