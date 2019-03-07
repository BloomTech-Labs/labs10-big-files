import React from 'react'
import axios from 'axios'
import styled from 'styled-components';
import "./FormModal.css"

function submitFile(event) {

    const formData = new FormData();
    formData.append('fileUpload', event.file[0]);
    axios.post("https://api.backendproxy.com/api/s3/files", formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }).then(response => {
        console.log(response.statusText)
        console.log("Let's check it out", response.data)
    }).catch(error => {
        console.log("See Error:", error)
    });
  }


const FromModal = (props) => {
console.log('props:', props.file[0])

    return (
        <div class="contact1 modal-open">

            <div class="container-contact1">

                <form onSubmit={() => submitFile(props)} class="contact1-form">
                    {/* <span className="contact1-form-title"> Send Files Fast </span> */}
    
                    <Label>Filename</Label>
                    <div class="wrap-input1" data-validate = "Name is required">
                        <input class="input1" type="text" name="name" placeholder={`${props.file[0].name}`} />
                        <span class="shadow-input1"></span>
                    </div>
    
                    <Label>Recipient Email</Label>
                    <div class="wrap-input1" data-validate = "Valid email is required: ex@abc.xyz">
                        <input class="input1" type="text" name="email" placeholder="ToMyFriend@email.com" />
                        <span class="shadow-input1"></span>
                    </div>
    
                    <Label>Sender Email</Label>
                    <div class="wrap-input1" data-validate = "Subject is required">
                        <input class="input1" type="text" name="email" placeholder="FromMe@email.com"/>
                        <span class="shadow-input1"></span>
                    </div>

                    <Label>Email Subject</Label>
                    <div class="wrap-input1" data-validate = "Subject is required">
                        <input class="input1" type="text" name="subject" placeholder="Subject (optional)"/>
                        <span class="shadow-input1"></span>
                    </div>
    
                    <Label>Email Message</Label>
                    <div class="wrap-input1" data-validate = "Message is required">
                        <textarea class="input1" name="message" placeholder="Message (optional)"></textarea>
                        <span class="shadow-input1"></span>
                    </div>
    
                    <div class="container-contact1-form-btn">
                        <button type="submit" class="contact1-form-btn">
                            <span>
                                Send File
                                <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
                            </span>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    
    )}
export default FromModal

const Label = styled.span`
    color: black;
    font-size: 14px;
    font-weight 600;
    
`