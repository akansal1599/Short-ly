import React, {createContext, useState} from "react";
import axios from "axios";

export const InputContext = createContext();

const InputContextProvider = (props) => {
    const[url, setUrl] = useState("");

    const fetchUrl = () => {
        // event.preventDefault();
        let str = `http://localhost:5000/api/url/shorten`;
        axios.post(str,{
            longUrl: url
        })
            .then(response => {
                setUrl(response.data.shortUrl);

            })
            .catch(err => {
                console.log(err);
            });
    };

    return (
        <InputContext.Provider value={{url,setUrl,fetchUrl}}>
            {props.children}
        </InputContext.Provider>
    );
}

export default InputContextProvider;
