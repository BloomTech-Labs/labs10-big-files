import React, { useEffect, useState } from "react";
import styled from "styled-components";

// import { FilePond } from "react-filepond";
import "filepond/dist/filepond.min.css";

import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import axios from "axios";

const CreateEditDiv = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  height: 48rem;
  width: 34rem;
  margin-left: 4%;
  border: 2px solid red;
  line-height: 3;
  background-color: white;
  @media (max-width: 390px) {
    width: 90%;
    margin: 0 auto;
  }
`;

const CreateFileHolder = styled.div`
  height: auto;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

const FileName = styled.input`
  width: 100%;
  height: 3rem;
  margin: 3% 0;
`;

const FileNameMessage = styled.textarea`
  width: 100%;
  height: 9rem;
  margin: 3% 0;
  &:placeholder: {
    color: blue;;
  }
`;
const SharedWithBox = styled.div`
  width: 100%;
  height: 7rem;
  border: 1px solid #a8a8a8;
`;

const InnerDiv = styled.div`
  display: flex;
  flex-direction: column;

  width: 90%;
  margin: 0 auto;
`;
const UploadButtonHolder = styled.div`
  height: 5 rem;
  width: 100%;
  margin: 0 auto;
  border: 1px solid blue;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const TitleH2 = styled.h2`
  margin: 0;
  boorder: 1px solid red;
`;

const SendGridButton = styled.button`
  height: 5rem;
  margin-top: 1rem;
`;



const CreateFile = () => {
  //const [link, setLink] = useState(null)
  const [file, setFile] = useState(null);
  const [recipientEmail, setRecipientEmail] = useState(null);
  const [emailSubject, setEmailSubject] = useState(null);
  const [message, setMessage] = useState(null);
  const [fileName, setFileName] = useState(null);
  const profile = JSON.parse(localStorage.getItem("profile"));
  const senderEmail = profile.email;

  useEffect(() => {
    console.log(fileName);
  }, []);

  function submitFile(event) {
    event.preventDefault();
    const sendObject = {
      fk_email: senderEmail,
      filename: fileName
    };

    axios
      .post(`https://api.backendproxy.com/api/s3/files/id`, sendObject)
      .then(response => {
        console.log(response);
        sendFile();
      })
      .catch(err => console.log(err));
  }

  const sendFile = () => {
    const formData = new FormData();
    formData.append("fileUpload", file[0]);
    axios
      .put("https://api.backendproxy.com/api/s3/files/", formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      })
      .then(response => {
        console.log(response);
        getURL();
      })
      .catch(error => console.log(error));
  };

  const getURL = () => {
    console.log("in getURL");
    axios
      .get("https://api.backendproxy.com/api/s3/files/latest/")
      .then(response => {
        console.log(response);
      })
      .catch(error => console.log(error));
  };

  function handleFileUpload(event) {
    setFile(event.target.files);
  }

  function handleNameInput(event) {
    setFileName(event.target.value);
    console.log("File Name: " + fileName);
  }

  function handleEmailInput(event) {
    setRecipientEmail(event.target.value);
    console.log("Recipient Email: " + recipientEmail);
  }

  function handleEmailSubjectInput(event) {
    setEmailSubject(event.target.value);
    console.log("Email Subject: " + emailSubject);
  }

  function handleMessage(event) {
    setMessage(event.target.value);
    console.log("Message: " + message);
  }

  function sendGrid(event) {
    const myDetails = {
      to: recipientEmail,
      from: senderEmail,
      subject: emailSubject,
      text: "URL I THINK",
      html: "Another url? Not sure"
    };
    console.log(myDetails);
    axios
      .post("https://api.backendproxy.com/api/sendgrid/send", myDetails)
      .then(response => {
        console.log("Response DATA HERE!", response.data);
      })
      .catch(error => {
        console.log("Error! RIGHT HERE", error);
      });
  }

  return (
    <CreateEditDiv>
      <InnerDiv>
        <TitleH2>Upload and Share Form</TitleH2>
 
          <FileName
            type="text"
            placeholder="...Input file name"
            name="setFileName"
            onChange={handleNameInput}
          />
          <FileName
            type="text"
            placeholder="...Recipient email address"
            onChange={handleEmailInput}
          />
          <FileName
            type="text"
            placeholder="...Download email subject line"
            onChange={handleEmailSubjectInput}
          />
          <FileNameMessage
            type="text"
            placeholder="...Message to include with download link email"
            onChange={handleMessage}
          />
      
          <form onSubmit={submitFile}>
            <input
              label="upload file"
              type="file"
              onChange={handleFileUpload}
            />
         
            <button type="submit">Upload to server</button>
           
          </form>

          <SendGridButton onClick={sendGrid}>Share Via Email</SendGridButton>
    
      </InnerDiv>
    </CreateEditDiv>
  );
};

export default CreateFile;

//<ShareLinkHolder>
//{/* <h3>Share Link:</h3> */}
//</ShareLinkHolder>
// <VersionBrowserHolder>
//   <span>Version Browser: </span>
//   <FaArrowLeft size={15} className="fontAwesome" />
//   <FaArrowRight size={15} className="fontAwesome" />
// </VersionBrowserHolder>
