import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FaPlusCircle, FaRegEnvelope } from "react-icons/fa";
import "filepond/dist/filepond.min.css";
import axios from "axios";

const CreateEditDiv = styled.div` 
  display: flex;
  position: relative;
  flex-direction: column;
  flex-wrap: wrap;
  height: fit-content;
  width: 35%; 
  min-width: 500px
  margin-left: 4%; 
  line-height: 3;
  border-radius: 10px;
  background-color: white;
  z-index: 0;
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

  display: block;
  border: none;
  background: #e6e6e6;
  font-size: 15px;
  line-height: 1.5;

  height: 50px;
  border-radius: 25px;
  padding: 0 0 0 3%;
`;

const FileNameMessage = styled.textarea`
  width: 100%;
  height: 9rem;
  margin: 3% 0;
  border: none;
  &:placeholder: {
    color: blue;
  }

  display: block;
  border: none;
  background: #e6e6e6;
  font-size: 15px;
  line-height: 1.5;

  border-radius: 25px;
  padding: 2% 0 0 3%;
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
  cursor: pointer;
  }

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
 
 
`;

const BorderDiv = styled.div`
  height: 2px;
  border-bottom: 1px solid black;
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
  const [displayName, setDisplayName] = useState(null);
  const [sendGridClicked, setSendGridClicked] = useState(false);
  // const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (url && fileId) {
      sendGrid(sendGridCallBack);
    }
  }, [url, fileId]);

  useEffect(() => {
    if (file && sendGridClicked) {
      submitFile();
    }
  }, [file, sendGridClicked]);

  useEffect(() => {
    console.log(sendGridClicked, url, fileId, recipientEmail);
  });

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
  function displayNameCallback() {
    setDisplayName(file.fileName);
  }

  function handleFileUpload(event) {
    setFile(event.target.files);
  }

  function submitFile() {
    const sendObject = {
      fk_email: senderEmail,
      filename: fileName,
      file_size: file[0].size,
      file_type: file[0].type
    };

    console.log("sendObject:", sendObject);

    axios
      .post(`https://api.backendproxy.com/api/s3/files/id`, sendObject)
      .then(response => {
        submitThenSend(response, sendFile);
      })
      .catch(err => console.log(err));
  }

  const hiddenStyle = { 
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
    console.log(file);

    // if (billing)
    // {
    axios
      .put("https://api.backendproxy.com/api/s3/paidfiles/", formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      })
      .then(response => {
        setFileId(response.data.rows[0].file_id);
        let urlString = response.data.rows[0].url;
        urlString = urlString.split("/");
        setUrl(urlString[3]);
        console.log(response);
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

  function sendGridCallBack() {
    window.location.reload();
  }

  function sendGridToggle() {
    if (file === null) {
      return alert(
        "A file, filename, and recipient email are required to send file"
      );
    } else {
      setSendGridClicked(true);
    }
  }

  function sendGrid(callback) {
    setSendGridClicked(true);
    console.log("URL and FILEID and Email: ", url, fileId, recipientEmail);
    // console.log("Magical URL!", `http://localhost:3000/download/?email=${recipientEmail}&url=${url}&fileid=${fileId}`)

    const uniqueURL = `https://sfiles.netlify.com/download/?email=${recipientEmail}&url=${url}&fileid=${fileId}`;
    console.log("**********************************");
    console.log(uniqueURL);
    const myDetails = {
      to: recipientEmail,
      from: senderEmail,
      subject: emailSubject,
      text: message,
      html: message,
      url: uniqueURL
    };

    console.log(myDetails);
    if (fileName === null || recipientEmail === null) {
      return alert("Filename and recipient email are required to send file");
    } else {
      axios
        .post("https://api.backendproxy.com/api/sendgrid/send", myDetails)
        .then(response => {
          console.log("Response DATA HERE!", response.data);
          alert(`Thank you. Your file has been sent to ${recipientEmail}`);
          callback();
        })
        .catch(error => {
          console.log("Error! RIGHT HERE", error);
        });
    }
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
        {/* <h2>Uploaded File: {displayName}</h2> */}
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
          type="email"
          placeholder="Email subject text"
          onChange={handleEmailSubjectInput}
        />
        <FileNameMessage
          type="text"
          placeholder="Email message"
          onChange={handleMessage}
        />
      </InnerDiv>
      <BorderDiv />
      <SendGridDiv onClick={sendGridToggle}>
        <FaRegEnvelope size={40} color="#ffffff" />
        <SendGridH2>Share Via Email</SendGridH2>
      </SendGridDiv>
    </CreateEditDiv>
  );
};

export default CreateFileForm;

// onClick={sendGrid}
