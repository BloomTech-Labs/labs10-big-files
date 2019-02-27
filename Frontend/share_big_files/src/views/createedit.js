import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FilePond } from "react-filepond";
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

// const CreateFileHolder = styled.div``;

// const FileName = styled.input`
//   margin-left: 1%;
// `;
// const SharedWithBox = styled.div`
//   width: 100%;
//   height: 7rem;
//   border: 1px solid #a8a8a8;
// `;

const ShareLinkHolder = styled.div``;
const VersionBrowserHolder = styled.div``;
const SaveDiv = styled.button``;
const UploadButtonHolder =styled.div``;

const CreateFile = () => {
  const [link, setLink] = useState(null)
  const [file, setFile] = useState(null);
  function submitFile(event) {
    event.preventDefault();
    const formData = new FormData();
    formData.append("fileUpload", file[0]);
    axios
      .put("https://api.backendproxy.com/api/s3/files", formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      })
      .then(response => {
        console.log(response);
      })
      .catch(error => {});
  }

  const getLink = (event)=> {
    event.preventDefault();
    
    axios
    .get("https://api.backendproxy.com/api/s3/files/:id")
    .then(response => {
      console.log(response)
    })
    .catch(err=> console.log(err))
  }

  function handleFileUpload(event) {
    setFile(event.target.files);
  }
  return (
    <CreateEditDiv>
      <CreateFileHolder>
        <span>File Name: </span>
        <FileName type="text" placeholder="Name" />
        <br />
        <span>Share with:</span>
        <FileName type="text" placeholder="Comma separate emails" />
        <br />

//         <span>Shared with history:</span>

        <SharedWithBox />
      </CreateFileHolder>
      <UploadButtonHolder>
        <br />
        <form onSubmit={submitFile}>
          <input label="upload file" type="file" onChange={handleFileUpload} />
          <button type="submit">Send</button>
        </form>

<<<<<<< HEAD
//         <br />
//       </UploadButtonHolder>
//       <ShareLinkHolder>
//         <h3>Share Link:</h3>
//       </ShareLinkHolder>
//       <VersionBrowserHolder>
//         <span>Version Browser: </span>
//         <FaArrowLeft size={15} className="fontAwesome" />
//         <FaArrowRight size={15} className="fontAwesome" />
//       </VersionBrowserHolder>
//       <ConfirmButtons>
//         <button>Cancel</button>
//         <button>Save</button>
//       </ConfirmButtons>
//     </CreateEditDiv>
//   );
// };
=======
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
>>>>>>> ded836ed0343665171f4afe617f14affdafc478f

// export default CreateFile;
