import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FaPlusCircle } from "react-icons/fa";
import "filepond/dist/filepond.min.css";
import axios from "axios";

const CreateEditDiv = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  height: auto;
  width: 25%;
  min-width: 459px;
  max-height: 490px;
  margin-left: 4%;
  margin-right: 2%;
  line-height: 3;
  border-radius: 10px;
  background-color: white;
  @media (max-width: 390px) {
    width: 90%;
    margin: 0 auto;
  }
`;

const FileName = styled.input`
  width: 100%;
  height: 3rem;
  margin: 3% 0;
  border: none;
  box-shadow: 0 0 0;
  border-bottom: 1px solid black;
  &:placeholder:
  color: black;
`;

const FileNameMessage = styled.textarea`
  width: 100%;
  height: 9rem;
  margin: 3% 0;
  border: none;
  &:placeholder: {
    color: blue;
  }
`;

const InnerDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: 0 auto;
`;

const TitleH2 = styled.h2`
  display: inline;
  margin: 0;
  height: 100% 
  width: auto;
  padding-left: 5%;
`;

const SendGridDiv = styled.div`
  width: 100%;
  height: auto;
  border-top: 1px solid black;
  display: flex;
  justify-content: center;
`;

const SendGridButton = styled.button`
 text-align: center;
  height: 5rem;
  width: 60%
  margin: 6% auto;
  border-radius: 10px;
      font-size: 1.75rem;
    font-weight: 400;
`;

const AddFileDiv = styled.div`
  display: flex;
  width: 90%;
  height: auto;
  border-bottom: 1px solid black;
  align-items: center;
  padding: 5%;
`;

const LabelDiv = styled.label`
  display: flex;
  align-items: center;
  margin: 2% 0 0 0;
`;

const FileInput = styled.input`
font-size: 1.7rem;
    font-weight: 400;
    border-radius: 3px;
    width: 65%;
`;

const UploadButton = styled.button`
font-size: 1.7rem;
    font-weight: 400;
    border-radius 3px;

`;

const CreateFileForm = () => {
  //const [link, setLink] = useState(null)
  const [file, setFile] = useState(null);
  const [recipientEmail, setRecipientEmail] = useState(null);
  const [emailSubject, setEmailSubject] = useState(null);
  const [message, setMessage] = useState(null);
  const [fileName, setFileName] = useState(null);
  const [url, setUrl] = useState(null);
  const [fileId, setFileId] = useState(null);
  const profile = JSON.parse(localStorage.getItem("profile"));
  const senderEmail = profile.email;

  useEffect(() => {
    console.log(fileId);
    console.log(url);
  });

  function handleFileUpload(event) {
    setFile(event.target.files);
    console.log(file);
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

  function submitFile(event) {
    event.preventDefault();

    setFile(event.target.files);
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
    console.log("*****************");
    const formData = new FormData();
    formData.append("fileUpload", file[0]);
    // formData["fileUpload"] = file[0];

    axios
      .put("https://api.backendproxy.com/api/s3/files/", formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      })
      .then(response => {
        setFileId(response.data.rows[0].file_id);
        
        let urlString = response.data.rows[0].url
        urlString = urlString.split('/')
        setUrl(urlString[3])
      })
      .catch(error => console.log(error));
    };

  function sendGrid(event) {
    console.log("URL and FILEID and Email: ", url, fileId, recipientEmail)
    // console.log("Magical URL!", `http://localhost:3000/download/?email=${recipientEmail}&url=${url}&fileid=${fileId}`)
    
    
    const uniqueURL = `https://sfiles.netlify.com/download/?email=${recipientEmail}&url=${url}&fileid=${fileId}`
    
    const myDetails = {
      to: recipientEmail,
      from: senderEmail,
      subject: emailSubject,
      text: message,
      html: uniqueURL
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
      <AddFileDiv>
        <LabelDiv className="hideInput">
          <form onSubmit={submitFile}>
            <FileInput type="file" onChange={handleFileUpload} />
            <UploadButton type="submit">Upload to server</UploadButton>
          </form>

          {/* <FaPlusCircle size={40} color="#fffff" />
          <TitleH2>Add Your File</TitleH2> */}
        </LabelDiv>
      </AddFileDiv>
      <InnerDiv>
        <FileName
          type="text"
          placeholder="File name"
          name="setFileName"
          onChange={handleNameInput}
        />
        <FileName
          type="text"
          placeholder="Recipient email address"
          onChange={handleEmailInput}
        />
        <FileName
          type="text"
          placeholder="Email subject text"
          onChange={handleEmailSubjectInput}
        />
        <FileNameMessage
          type="text"
          placeholder="Email message"
          onChange={handleMessage}
        />
      </InnerDiv>
      <SendGridDiv>
        <SendGridButton onClick={sendGrid}>Share Via Email</SendGridButton>
      </SendGridDiv>
    </CreateEditDiv>
  );
};

export default CreateFileForm;
