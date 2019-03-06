import React, { useEffect, useState } from "react";
import axios from "axios";

// THESE TWO URLS ARE IDENTICAL o.O
// http://localhost:3000/download/?email=tjkisner%40gmail%2Ecom&url=bg%2D01%2D1551388077230%2Ejpg&fileid=30
// http://localhost:3000/download/?email=tjkisner@gmail.com&url=bg-01-1551388077230.jpg&fileid=30

const Downlaod = () => {
    //This is the RECIPIENT email (the address of the person downloading) From unique URL
    const [email, setEmail] = useState(null)

    //This is the last bit of the S3 BUCKET URL. From unique URL
    const [url, setUrl] = useState(null)

    //This is the file_id from the FILES TABLE (The FK associated with this download). From the unique URL
    const [fileid, setFileid] = useState(null)

    //This is the final S3 BUCKET STRING needed to download the file. 
    const [finalS3URL, setFinalS3URL] = useState(null)
    
 
    function getUrlVars() {
        var vars = {};
        var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, 
            function(m,key,value) { vars[key] = value })
        console.log("VARS", vars);
            
        let magicString = `2;url=http://s3lambdafiles123.s3.amazonaws.com/${vars.url}`
        setFinalS3URL(magicString)
        setEmail(vars.email)
        setUrl(vars.url)
        setFileid(vars.fileid)
    }

    useEffect(() => {
        if (email && fileid) {
            console.log('useEffect Email + FileID:', email, fileid)
            sendPost();
        }
    }, [email]);

    const sendPost = () => {        
        const body = {
            fk_file_id: fileid,
            email: email
        };

        axios.post(`https://api.backendproxy.com/api/downloads/`, body)
            .then(response => { console.log(response) })
            .catch(err => console.log(err))
    }
    
    
    return(
        <div>
            <h1>Hello Download Testing Page</h1>
            <br/><br/>
                <button onClick={() => getUrlVars()}> CLICK HERE TO DOWNLOAD </button>
                <h1> EMAIL: {email}</h1>
                <h1> Partial URL: {url}</h1>
                <h1> ID: {fileid}</h1>
                <h1> S3 STRING: {finalS3URL}</h1>

                <meta http-equiv="refresh" content={finalS3URL} />

        </div>

    )
}

export default Downlaod
