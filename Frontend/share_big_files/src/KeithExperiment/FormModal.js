import React, { useState, useEffect} from 'react'
import axios from 'axios'
import styled from 'styled-components';
import "./FormModal.css"

const FormModal = (props) => {
    const [file] = useState(props.file[0])
    //Filename is defaulted or changed by user
    const [filename, setFilename] = useState(props.file[0].name)
    const [recipientEmail, setRecipientEmail] = useState("")
    const [senderEmail, setSenderEmail] = useState("")
    const [emailSubject, setEmailSubject] = useState("")
    const [emailMessage, setEmailMessage] = useState("")
    const [croppedURL, setCroppedURL] = useState("")
    const [fileID, setFileID] = useState("")

    console.log("file on state", file)
    console.log('filename:', filename)
    console.log('recipientEmail:', recipientEmail)
    console.log('senderEmail:', senderEmail)
    console.log('emailSubject:', emailSubject)
    console.log('emailMessage:', emailMessage)
    console.log('croppedURL:', croppedURL)
    console.log('fileID:', fileID)
    
        //submitForm takes the file,senderEmail, and filename from state and creates and object. 
        //Passes the object to createFileRDS.
        function submitForm(e) {
            e.preventDefault();
        
            const sendObject = {
                fk_email: senderEmail,
                filename: filename
            };
            createFileRDS(sendObject)
        }
        
        //createFileRDS takes the object and does an axios call to the BE where a query will create a new file.
        //The query returns the file_id of the newly created file.
        function createFileRDS(sendObject) {
            axios
                .post(`https://api.backendproxy.com/api/s3/files/id`, sendObject)
                .then(response => {
                    console.log("Response from POST to DB", response);
                    processFile();
            })
            .catch(err => console.log(err));
        }
        
        // processFile takes the file from state and does a PUT request to create and place the S3 URL into the DB.
        // Returns the entire S3 URL and the file_id
        function processFile() {
            const formData = new FormData();
            formData.append('fileUpload', file);
            axios.put("https://api.backendproxy.com/api/s3/files", formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
            }).then(response => {
                console.log(response.statusText)
                console.log("Response from PUT to DB", response.data)
                parseURL(response.data)
        
            }).catch(error => {
                console.log("See Error:", error)
            });
        }

        //Takes the res.data from the PUT and parses the string/sets the parsed str and file_id to state
        function parseURL(data) {
            let s3String = data.rows[0].url;
            s3String = s3String.split("/");
            setCroppedURL(s3String[3]);
            setFileID(data.rows[0].file_id);
        }

        //useEffect is needed because parseURL's setState isn't immediately available
        useEffect(() => {
            if (croppedURL && fileID) {
                sendGrid();
            }
        }, [croppedURL, fileID]);

        //sendGrid creates a unique URL and passes
        function sendGrid() {
            console.log("URL and FILEID and Email: ", croppedURL, fileID, recipientEmail);

            const uniqueURL = `https://sfiles.netlify.com/download/?email=${recipientEmail}&url=${croppedURL}&fileid=${fileID}`;
            
            console.log('uniqueURL:', uniqueURL)

            const myDetails = {
                to: recipientEmail,
                from: senderEmail,
                subject: emailSubject,
                text: emailMessage,
                html: emailMessage,
                url: uniqueURL
            };
            
            console.log('myDetails:', myDetails)
            axios
                .post("https://api.backendproxy.com/api/sendgrid/send", myDetails)
                .then(response => {
                    console.log("SendGrid Res.data: ", response.data);
                })
                .catch(error => {
                    console.log("See Error: ", error);
                });
        }


    return (
        <div class="contact1 modal-open">

            <div class="container-contact1">

                <form onSubmit={e => submitForm(e)} class="contact1-form">
    
                    <Label>Filename</Label>
                        <div class="wrap-input1">
                            <input 
                                class="input1" 
                                type="text" 
                                name="something" 
                                value={filename}
                                onChange={e => setFilename(e.target.value)} 
                            /> 
                            <span class="shadow-input1"></span>
                        </div>
    
                    <Label>Recipient Email</Label>
                        <div class="wrap-input1">
                            <input 
                                class="input1" 
                                type="text" 
                                name="email" 
                                value={recipientEmail}
                                placeholder="ToMyFriend@email.com" 
                                onChange={e => setRecipientEmail(e.target.value)} 
                            /> 
                            <span class="shadow-input1"></span>
                        </div>
    
                    <Label>Sender Email</Label>
                        <div class="wrap-input1">
                            <input 
                                class="input1" 
                                type="text" 
                                name="email" 
                                placeholder="FromMe@email.com"
                                value={senderEmail}
                                onChange={e => setSenderEmail(e.target.value)} 
                            />
                            <span class="shadow-input1"></span>
                        </div>

                    <Label>Email Subject</Label>
                        <div class="wrap-input1">
                            <input 
                                class="input1" 
                                type="text" 
                                name="subject" 
                                placeholder="Subject (optional)"
                                value={emailSubject}
                                onChange={e => setEmailSubject(e.target.value)} 
                            />
                            <span class="shadow-input1"></span>
                        </div>
    
                    <Label>Email Message</Label>
                        <div class="wrap-input1">
                            <textarea 
                                class="input1" 
                                name="message" 
                                placeholder="Message (optional)"
                                value={emailMessage}
                                onChange={e => setEmailMessage(e.target.value)} 
                                >
                            </textarea>
                            <span class="shadow-input1"></span>
                        </div>
    
                    <div class="container-contact1-form-btn">
                        <button type="submit" class="contact1-form-btn">
                          Send File                               
                        </button>
                    </div>
                </form>
            </div>
        </div>
    
    )}
export default FormModal

const Label = styled.span`
    color: black;
    font-size: 14px;
    font-weight 600;
`





