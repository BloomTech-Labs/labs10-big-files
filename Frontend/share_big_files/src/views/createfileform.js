import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FaPlusCircle, FaRegEnvelope } from "react-icons/fa";
import "filepond/dist/filepond.min.css";
import axios from "axios";

const CreateEditDiv = styled.div` 
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  height: fit-content;
  width: 35%; 
  min-width: 500px
  margin-left: 4%;
  margin-right: 2%;
  line-height: 3;
  border-radius: 10px;
  background-color: white;
   @media(max-width: 900px){
     width: 90%;
     min-width: 275px;
     margin: 0;
     margin: 0 auto;
   }
  @media(max-width:390px){
    width: 95%;
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

const TitleH2 = styled.h1`
  display: inline;
  margin: 0;
  height: 100% 
  width: fit-content;
  border-left: 1px solid white;
  margin-left: 2.5%;
  padding-left: 2.5%;
  font-size: 3.25rem;
  color: white;
  line-height: 2;
`;

const SendGridDiv = styled.div`
  width: 45%
  min-width: 230px;
  margin: 3% auto;
  background-color: #206db5;
  height: auto; 
  border-radius: 10px
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SendGridH2 = styled.h2`
  color: white;
  font-size: 2rem;
  font-style: Raleway
  font-weight: bold;
  margin: 0;
  margin-left: 4.5%;
  padding-left: 2.5%;
  border-left: 1px solid white;
  width: fit-content;

  `;

const AddFileDiv = styled.div`
  display: flex;
  width: 96%;
  height: auto;
  border-bottom: 1px solid black;
  margin: 0 auto;
  align-items: center;
  padding: 2%;
`;

const FileInput = styled.input`
  font-size: 1.7rem;
  font-weight: 400;
  border-radius: 3px;
  display: none;
  height: 100%
  width: 100%;
  @media (max-width: 390px) {
    width: auto;
  }
`;

const BorderDiv = styled.div`
height: 2px;
border-bottom:1px solid black;
`;
 
const FlexDiv = styled.div`
height: fit-content;
width: fit-content;
min-width: 270px
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0% 2%;
  border-radius: 10px;
  background-color: #206db5;
  margin: 2.5% auto;
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
  const [billing, setBilling] = useState(null);
  const [isPro, setIsPro] = useState(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (file) {
      submitFile();
    }
  }, [file]);

  const fetchData = () => {
    const profile = JSON.parse(localStorage.getItem("profile"));
    axios
      .get(`https://api.backendproxy.com/api/users/${profile.nickname}`)
      .then(response => {
        console.log(response);
        setBilling(response.data[0].paid);
      })
      .catch(err => console.log(err));
  };

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

  function submitThenSend(response, callback) {
    console.log(response);
    callback();
  }

  function handleFileUpload(event) {
    setFile(event.target.files);
  }

  function submitFile() {
    console.log(file);
    if (fileName === null) {
      return alert("File must have filename");
    } else {
      const sendObject = {
        fk_email: senderEmail,
        filename: fileName
      };

      axios
        .post(`https://api.backendproxy.com/api/s3/files/id`, sendObject)
        .then(response => {
          submitThenSend(response, sendFile);
        })
        .catch(err => console.log(err));
    }
  }

  const hiddenStyle = {
    border: "1px solid red",
    height: "7%",
    minHeight: "65px",
    width: "17%",
    display: "block",
    minWidth: "290px",
    /* top: 23%; */
    position: "absolute",
    opacity: "0"
  };

  const sendFile = () => {
    const formData = new FormData();
    formData.append("fileUpload", file[0]);

    // if (billing)
    // {
    axios
      .put("https://api.backendproxy.com/api/s3/paidfiles/", formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      })
      .then(response => {
        console.log(response);
        setFileId(response.data.rows[0].file_id);
        let urlString = response.data.rows[0].url;
        urlString = urlString.split("/");
        setUrl(urlString[3]);
      })
      .catch(error => console.log(error));
    // } else {
    //   axios
    //     .put("https://api.backendproxy.com/api/s3/files/", formData, {
    //       headers: {
    //         "Content-Type": "multipart/form-data"
    //       }
    //     })
    //     .then(response => {
    //       setFileId(response.data.rows[0].file_id);
    //       let urlString = response.data.rows[0].url;
    //       urlString = urlString.split("/");
    //       setUrl(urlString[3]);
    //     })
    //     .catch(error => console.log(error));
    // }
  };

  function sendGrid(event) {
    console.log("URL and FILEID and Email: ", url, fileId, recipientEmail);
    // console.log("Magical URL!", `http://localhost:3000/download/?email=${recipientEmail}&url=${url}&fileid=${fileId}`)

    const uniqueURL = `https://sfiles.netlify.com/download/?email=${recipientEmail}&url=${url}&fileid=${fileId}`;

    const myDetails = {
      to: recipientEmail,
      from: senderEmail,
      subject: emailSubject,
      text: message,
      html: message,
      url: uniqueURL
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
        {/* <form onSubmit={submitFile}> */}
        <FlexDiv>
          <FileInput
            type="file"
            onChange={handleFileUpload}
            style={hiddenStyle}
          />
          <FaPlusCircle size={50} color="#ffffff" />
          <TitleH2>Add Your File</TitleH2>
        </FlexDiv>

        {/* //<UploadButton type="submit">Upload To server</UploadButton> */}
        {/* </form> */}
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
      <BorderDiv></BorderDiv>
      <SendGridDiv onClick={sendGrid}>

      <FaRegEnvelope size={40} color="#ffffff" /> 
        <SendGridH2 >Share Via Email</SendGridH2>
      </SendGridDiv>
    </CreateEditDiv>
  );
};

export default CreateFileForm;
