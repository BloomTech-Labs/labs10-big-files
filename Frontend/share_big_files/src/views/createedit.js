import React from "react";
import styled from "styled-components";
// import { Link } from "react-router-dom";

import { FaArrowLeft, FaArrowRight } from "react-icons/fa";


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
  return (
    <CreateEditDiv>

      <CreateFileHolder>
        <span>File Name: </span>
        <FileName type="text" placeholder="Name" />
        <br />
        <span>Share with:</span>
        <FileName type="text" placeholder="Comma separate emails" />
        <br />

        <span>Shared with history:</span>

        <SharedWithBox />
      </CreateFileHolder>
      <UploadButtonHolder>
        <br />
        <input type="file" id="myFile" />
        <br />
      </UploadButtonHolder>
      <ShareLinkHolder>
        <h3>Share Link:</h3>
      </ShareLinkHolder>
      <VersionBrowserHolder>
        <span>Version Browser: </span>
        <FaArrowLeft size={15} class="fontAwesome" />
        <FaArrowRight size={15} class="fontAwesome" />
      </VersionBrowserHolder>
      <ConfirmButtons>
        <button>Cancel</button>
        <button>Save</button>
      </ConfirmButtons>
    </CreateEditDiv>
  );
};

export default CreateFile;
