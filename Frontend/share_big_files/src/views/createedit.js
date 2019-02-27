import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FilePond } from "react-filepond";
import "filepond/dist/filepond.min.css";
// import { Link } from "react-router-dom";

import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Axios from "axios";
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
  @media(max-width: 390px) {
    width: 90%;
    margin: 0 auto;
  }
`;


const CreateFileHolder = styled.div`

`;

const FileName = styled.input`
  margin-left: 1%;
`;
const SharedWithBox = styled.div`
  width: 100%;
  height: 7rem;
  border: 1px solid #a8a8a8;
`;

const UploadButtonHolder = styled.div``;
const ShareLinkHolder = styled.div``;
const VersionBrowserHolder = styled.div``;
const ConfirmButtons = styled.div``;

const CreateFile = () => {
  const handleInit = () => {
    console.log("FilePond instance has initialised", this.pond);
  };
  // const handleUploadImage = (ev)=> {
  //   ev.preventDefault();

  //   const data = new FormData();
  //   data.append('file', this.uploadInput.files[0]);
  //   data.append('filename', this.fileName.value);

  //   axios
  //   .post('http://localhost:8000/upload', data)
  //     .then(function (response) {
  //   this.setState({ imageURL: `http://localhost:8000/${body.file}`, uploadStatus: true });
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  // }
  let myForm = document.getElementById('myForm');
  let formData = new FormData(myForm);
  const handleSubmit = (value) => {
console.log(formData);
    
    Axios
    .post('http://localhost:5000/api/s3/files/', formData)
    .then(response=> {
      console.log(response)
    })
    .catch(err=> console.log(err))
  }
;
 
  return (
    <div>
<form id="myForm" name="myForm"> 
    <input type="file" id="userfile" name="userfile" />
    <button onClick={e => handleSubmit(e.target.value)}>submit</button>
</form>
    </div>
  );
};

export default CreateFile;
