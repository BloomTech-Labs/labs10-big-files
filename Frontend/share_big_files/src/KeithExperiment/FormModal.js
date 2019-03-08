import React, { useState, useEffect} from 'react'
import axios from 'axios'
import styled from 'styled-components';
import "./FormModal.css"

const FormModal = (props) => {
    const [file] = useState(props.file[0])
    //Filename is set by default or changed by user.
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

        //sendGrid creates a unique URL and passes it to the BE for sendgrid to send out.
        function sendGrid() {
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

            <Container>

                <Form onSubmit={e => submitForm(e)}>
    
                    <Label>Filename</Label>
                        <InputDiv>
                            <Input 
                                type="text" 
                                name="something" 
                                value={filename}
                                onChange={e => setFilename(e.target.value)} 
                            /> 
                            <Span></Span>
                        </InputDiv>
    
                    <Label>Recipient Email</Label>
                        <InputDiv>
                            <Input 
                                type="text" 
                                name="email" 
                                value={recipientEmail}
                                placeholder="ToMyFriend@email.com" 
                                onChange={e => setRecipientEmail(e.target.value)} 
                            /> 
                            <Span></Span>
                        </InputDiv>
    
                    <Label>Sender Email</Label>
                        <InputDiv>
                            <Input 
                                type="text" 
                                name="email" 
                                placeholder="FromMe@email.com"
                                value={senderEmail}
                                onChange={e => setSenderEmail(e.target.value)} 
                            />
                            <Span></Span>
                        </InputDiv>

                    <Label>Email Subject</Label>
                        <InputDiv>
                            <Input 
                                type="text" 
                                name="subject" 
                                placeholder="Subject (optional)"
                                value={emailSubject}
                                onChange={e => setEmailSubject(e.target.value)} 
                            />
                            <Span></Span>
                        </InputDiv>
    
                    <Label>Email Message</Label>
                        <InputDiv>
                            <TextArea 
                                name="message" 
                                placeholder="Message (optional)"
                                value={emailMessage}
                                onChange={e => setEmailMessage(e.target.value)} 
                                >
                            </TextArea>
                            <Span></Span>
                        </InputDiv>
    
                    <ButtonContainer>
                        <Button type="submit" class="contact1-form-btn">
                          Send File                               
                        </Button>
                    </ButtonContainer>
                </Form>
            </Container>
        </div>
    
    )}
export default FormModal

const Label = styled.span`
    color: black;
    font-size: 14px;
    font-weight 600;
`

const Container = styled.div`
    width: 85%;
    background: #fff;
    border-radius: 10px;
    overflow: hidden;

    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;
    align-items: center;

    padding: 4% 10% 4% 10%;
}
`

const ButtonContainer = styled.div`
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`

const Button = styled.button`
    min-width: 200px;
    height: 50px;
    border-radius: 25px;
    background: var(--primaryColor);
    font-family: Montserrat-Bold;
    font-size: 15px;
    line-height: 1.5;
    color: #fff;
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 25px;
  
    -webkit-transition: all 0.4s;
    -o-transition: all 0.4s;
    -moz-transition: all 0.4s;
    transition: all 0.4s;
  
    &:i {
    margin-left: 7px;
  
    -webkit-transition: all 0.4s;
    -o-transition: all 0.4s;
    -moz-transition: all 0.4s;
    transition: all 0.4s;
  }
  
  &:hover {
    background: #333333;
  }
  
  &:hover i {
    -webkit-transform: translateX(10px);
    -moz-transform: translateX(10px);
    -ms-transform: translateX(10px);
    -o-transform: translateX(10px);
    transform: translateX(10px);
  }
`

const Form = styled.form`
    width: 500px;  
`

const InputDiv = styled.div`
    position: relative;
    width: 100%;
    z-index: 1;
    margin-bottom: 20px;

`

const TextArea = styled.textarea`
    display: block;
    width: 100%;
    background: #e6e6e6;
    font-family: Montserrat-Bold;
    font-size: 15px;
    line-height: 1.5;
    color: #666666;

    min-height: 150px;
    border-radius: 25px;
    padding: 12px 30px;

   &:focus{
    -webkit-animation: anim-shadow 0.5s ease-in-out forwards;
    animation: anim-shadow 0.5s ease-in-out forwards;
  }
  
  
  textarea.input1 + .shadow-input1 {
    border-radius: 25px;
  }
`

const Input = styled.input`
    display: block;
    width: 100%;
    background: #e6e6e6;
    font-family: Montserrat-Bold;
    font-size: 15px;
    line-height: 1.5;
    color: rgb(63, 178, 255);

    height: 50px;
    border-radius: 25px;
    padding: 0 30px;
      

//     &:focus {
//     -webkit-animation: anim-shadow 0.5s ease-in-out forwards;
//     animation: anim-shadow 0.5s ease-in-out forwards;
// }
`


const Span = styled.span`
    content: '';
    display: block;
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: -1;
    width: 100%;
    height: 100%;
    box-shadow: 0px 0px 0px 0px;
    color: rgb(63, 178, 255);

`