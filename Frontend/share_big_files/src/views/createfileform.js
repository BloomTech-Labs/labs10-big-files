import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import { FaPlusCircle, FaRegEnvelope } from "react-icons/fa";
import "filepond/dist/filepond.min.css";
import axios from "axios";
import "./FloatingLabel.css"
import "./ValidationStyle.css"




const CreateFileForm = () => {
  const [file, setFile] = useState(null);
  const [recipientEmail, setRecipientEmail] = useState("");
  const [uploadedFile, setUploadedFile] = useState("");
  const [emailSubject, setEmailSubject] = useState(null);
  const [message, setMessage] = useState(null);
  const [fileName, setFileName] = useState("");
  const [url, setUrl] = useState(null);
  const [fileId, setFileId] = useState(null);
  const profile = JSON.parse(localStorage.getItem("profile"));
  const senderEmail = profile.email;
  const [sendGridClicked, setSendGridClicked] = useState(false);
  const [touched, setTouched] = useState({
      fileName: false,
      recipientEmail: false
  })
  
  /* *********************** Functions *********************** */ 
 
  /* -------------Use Effect--------------- */
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
  
  
  /* -------------Error Handling--------------- */
  const errors = validate(fileName, recipientEmail);
  const isDisabled = Object.keys(errors).some(x => errors[x]);
  
  function validate(fileName, recipientEmail) {
    return {
      fileName: fileName.length === 0,
      recipientEmail: recipientEmail.length === 0
    };
  }

  function handleBlur(field) {
    setTouched({ ...touched, [field]: true })
  };

  function canBeSubmitted() {
    const errors = validate(fileName, recipientEmail);
    const isDisabled = Object.keys(errors).some(x => errors[x]);
    return !isDisabled;
  }

  function shouldMarkError(field) {
    const hasError = errors[field];
    const shouldShow = touched[field];
    return hasError ? shouldShow : false;
  };

  function sendGridToggle(e) {
    if (!canBeSubmitted()) {
      e.preventDefault();
      return;
    }
    setSendGridClicked(true);
    alert(`Your file ${fileName} has been sent to ${recipientEmail}`);
  };


/* -------------File Upload--------------- */
function handleFileUpload(event) {
  setFile(event.target.files);
  setUploadedFile(event.target.files[0].name)
  if (file === "") {
    setFileName(event.target.files[0].name);
  }
}


/* -------------File Upload--------------- */



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

 



  function submitFile() {

      const sendObject = {
        fk_email: senderEmail,
        filename: fileName,
        file_size: file[0].size,
        file_type: file[0].type
      };
      
      axios
        .post(`https://api.backendproxy.com/api/s3/files/id`, sendObject)
        .then(response => {
          submitThenSend(response, sendFile);
        })
        .catch(err => console.log(err));
  }



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


    


  function sendGrid(callback) {
    setSendGridClicked(true);
    console.log("URL and FILEID and Email: ", url, fileId, recipientEmail);

    const uniqueURL = `https://sfiles.netlify.com/download/?email=${recipientEmail}&url=${url}&fileid=${fileId}`;
 
    const myDetails = {
      to: recipientEmail,
      from: senderEmail,
      subject: emailSubject,
      text: message,
      html: message,
      url: uniqueURL
    };
 
    if (fileName === null || recipientEmail === null) {
      return alert("Filename and recipient email are required to send file");
    } else {
      axios
        .post("https://api.backendproxy.com/api/sendgrid/send", myDetails)
        .then(response => {
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
        <FlexDiv>
          <FileInput
            type="file"
            onChange={handleFileUpload}
            style={hiddenStyle}
          />
          <FaPlusCircle size={50} color="#ffffff" style={faHover}/>
          <TitleH2>Add Your File</TitleH2>
        </FlexDiv>
        <CustomH3>{uploadedFile}</CustomH3>

      </AddFileDiv>
      <InnerDiv>
        <div className="field">
          <input
            className={shouldMarkError("fileName") ? "error" : ""}
            onBlur={() => handleBlur("fileName")}
            type="text"
            placeholder="MyFamilyPicture.jpg"
            id="Filename"
            name="setFileName"
            value={fileName}
            onChange={handleNameInput}
            />
            <label for="Filename">Filename</label> 
        </div>

        <div class="field">
          <input
            className={shouldMarkError("recipientEmail") ? "error" : ""}
            onBlur={() => handleBlur("recipientEmail")}
            type="text"
            id="Recipient"
            placeholder="JaneDoe@example.com"
            onChange={handleEmailInput}
            />
            <label for="Recipient">Recipient Email</label> 
        </div>

        <div className="field">
          <input
            type="email"
            id="subject"
            placeholder="Family Picture"
            onChange={handleEmailSubjectInput}
            />
            <label for="subject">Email Subject (optional)</label> 
        </div>

        <div className="field">
          <textarea
            type="text"
            id="message"
            placeholder="Here's our most recent family picture."
            onChange={handleMessage}
            />
            <label for="message">Email Message (optional)</label> 
        </div>

      </InnerDiv>
      <BorderDiv />
      <SendGridDiv onClick={sendGridToggle} disabled={isDisabled}>
        <FaRegEnvelope size={40} color="#ffffff" />
        <WhiteBorder></WhiteBorder>
        <SendGridH2>Share Via Email</SendGridH2>
      </SendGridDiv>
    </CreateEditDiv>
  );
};

export default CreateFileForm;


const hiddenStyle = { 
  height: "7%",
  minHeight: "65px",
  width: "17%",
  display: "block",
  minWidth: "290px",
  /* top: 23%; */
  position: "absolute",
  opacity: "0",
  cursor: "pointer",
  zIndex: 9999,
};

const faHover = {
  cursor: "pointer",
}


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
  border-radius: 5px;
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
  font-size: 3rem;
  color: white;
  line-height: 2;
  &:hover{
    cursor: pointer;
`;

const SendGridDiv = styled.button`
  width: 220px;
  height: 49px;
  border-radius: 5px;
  margin: 3% auto;
  background-color: #206db5;
 
 
  padding: 1.3%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  }

`;

const SendGridH2 = styled.h2`
line-height: 2;
  color: white;
  font-size: 2rem;
  font-style: Raleway
  font-weight: bold;
  margin: 0; 
  padding-left: 2.5%;
  width: fit-content;
  height: fit-content; 
  `;

const AddFileDiv = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 100%;
  height: auto;
  border-bottom: 1px solid black;
  margin: 0 auto;
  align-items: center; 
`;

const CustomH3 = styled.h4`
  margin: 0 auto;
  line-height: 1;

` 
const FileInput = styled.input`
  font-size: 1.7rem;
  font-weight: 400;
  border-radius: 5px;
 
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
min-width: 270px;
  padding: 1.3%;
  display: flex;
  align-items: center; 
  justify-content: center; 
  border-radius: 5px;
 
  background-color: #206db5;
  margin: 2.5% auto;
  &:hover{
    cursor: pointer; 
  }
`;

const WhiteBorder = styled.div`
height:100%;
width: 1px;
border-right: 1px solid white;
padding-left: 3.5%;
`;



