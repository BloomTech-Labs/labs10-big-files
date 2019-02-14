
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const CreateEditDiv = styled.div`
display: flex;
flex-direction: column;
height: 500px;
border: 2px solid red;

`;

const CreateFileHolder = styled.div``;

const FileName = styled.input`
`;
const SharedWithBox = styled.div`
  width: 100%;
  height: 200px;
`;

const UploadButtonHolder = styled.div``;
const ShareLinkHolder = styled.div``;
const VersionBrowserHolder = styled.div``;
const ConfirmButtons = styled.div``;

const CreateFile = () => {
  return (
    <CreateEditDiv>
      <CreateFileHolder> 
        <FileName type="text" placeholder="Name" ></FileName>
        <SharedWithBox />
      </CreateFileHolder>
      <UploadButtonHolder>
        <button />
        <Link to="/files">Upload File</Link>
      </UploadButtonHolder>
      <ShareLinkHolder>
        <h3>Share Link:</h3>
      </ShareLinkHolder>
      <VersionBrowserHolder>
        <h3>Version Browser</h3>
        <button />
        <button />
      </VersionBrowserHolder>
      <ConfirmButtons>
        <button>Cancel</button>
        <button>Save</button>
      </ConfirmButtons>
    </CreateEditDiv> 
  );
};

export default CreateFile;

