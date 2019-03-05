import React, { useEffect, useState } from "react";
import axios from "axios";

// http://localhost:3000/download/?email=tjkisner%40gmail%2Ecom&url=bg%2D01%2D1551388077230%2Ejpg&fileid=30
// http://localhost:3000/download/?email=tjkisner@gmail.com&url=bg-01-1551388077230.jpg

const Downlaod = () => {
    const [email, setEmail] = useState(null)
    const [url, setUrl] = useState(null)
    const [fileid, setFileid] = useState(null)
    const [string, setString] = useState(null)
    
 
    function getUrlVars() {
        var vars = {};
        var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, 
            function(m,key,value) { vars[key] = value })
        console.log("VARS", vars);
            
        setEmail(vars.email)
        setUrl(vars.url)
        setFileid(vars.fileid)
        console.log("Is Email on State?", email)
        
        let urlString = `2;url=http://s3lambdafiles123.s3.amazonaws.com/${vars.url}`
        // console.log('urlString:', urlString)
        setString(urlString)

        // sendPost()

    }

    useEffect(() => {
        if (email) {
            console.log('useEffect Email:', email)
            sendPost();
        }
    }, [email]);

    const sendPost = () => {
        console.log("EMAIL on state:", email)
        
        const body = {
            fk_file_id: 29,
            email: "Kyle"
        };

        axios
            .post(`http://localhost:5000/api/downloads/`, body)
            .then(response => {
            console.log(response);
            })
            .catch(err => console.log(err));
    }
    
    
    return(
        <div>
        Hello
            <button onClick={() => getUrlVars()}> DOWNLOAD ME </button>
            {/* {window.onload} */}
            <h1>
                {email}
            </h1>
            <h1>
                {url} {fileid}
            </h1>
            <h1>
                {string}
            </h1>
            <h1> THANK YOU FOR DOWNLOADING</h1>
            <meta http-equiv="refresh" content={string} />

        </div>

    )
}

export default Downlaod
