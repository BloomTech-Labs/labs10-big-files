import React, { useEffect, useState } from "react";
import styled from "styled-components";

// import { FilePond } from "react-filepond";
import "filepond/dist/filepond.min.css";

import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import axios from "axios";
const CreateEditDiv = styled.div`
  padding-left: 2%;
  padding-right: 2%;
  display: flex;
  flex-direction: column;
  height: 40rem;
  width: 31rem;
  margin-left: 4%;
  border: 2px solid red;
  line-height: 3;
  background-color: white;
  border-radius: 10%;
  @media (max-width: 390px) {
    width: 90%;
    margin: 0 auto;
  }
`;

const CreateFileHolder = styled.div``;

const FileName = styled.input`
  margin-left: 1%;
`;
const SharedWithBox = styled.div`
  width: 100%;
  height: 7rem;
  border: 1px solid #a8a8a8;
`;

const ShareLinkHolder = styled.div``;
const VersionBrowserHolder = styled.div``;
const UploadButtonHolder = styled.div``;

const CreateFile = () => {
  //const [link, setLink] = useState(null)
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState(null);
  const profile = JSON.parse(localStorage.getItem("profile"));
  const profileEmail = profile.email;

  useEffect(() => {
    console.log(fileName);
  }, []);

  function submitFile(event) {
    event.preventDefault();
    const sendObject = {
      fk_email: profileEmail,
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
      })
      .catch(error => {});
  };

  function handleFileUpload(event) {
    setFile(event.target.files);
  }

  function handleInput(event) {
    setFileName(event.target.value);
    console.log("File Name: " + fileName);
  }
  return (
    <CreateEditDiv>
      <CreateFileHolder>
        <span>File Name: </span>
        <FileName type="text" placeholder="Name" onChange={handleInput} />
        <br />
        <span>Share with:</span>
        <FileName type="text" placeholder="Comma separate emails" />
        <br />

        <span>Shared with history:</span>

        <SharedWithBox />
      </CreateFileHolder>
      <UploadButtonHolder>
        <br />
        <form onSubmit={submitFile}>
          <input label="upload file" type="file" onChange={handleFileUpload} />
          <button type="submit">Send</button>
        </form>
        <br />
      </UploadButtonHolder>
      <ShareLinkHolder>
        <h3>Share Link:</h3>
      </ShareLinkHolder>
      <VersionBrowserHolder>
        <span>Version Browser: </span>
        <FaArrowLeft size={15} className="fontAwesome" />
        <FaArrowRight size={15} className="fontAwesome" />
      </VersionBrowserHolder>

      <button>Save</button>
    </CreateEditDiv>
  );
};

export default CreateFile;
