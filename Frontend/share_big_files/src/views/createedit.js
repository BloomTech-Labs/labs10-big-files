import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';


const FileName = styled.div`
    width: 60%;
    height: 40px;
`;
const SharedWithBox = styled.div`
    width: 100%;
    height: 200px;
`;
const UploadButtonHolder = styled.div`


`;
const ShareLinkHolder = styled.div`


`;
const VersionBrowserHolder = styled.div`


`;
const ConfirmButtons = styled.div`


`;
const CreateFileHolder = styled.div`

`;


const CreateFile = () => {


    return (
        <>
        <CreateFileHolder>
            <FileName type="text" placeholder="Name"></FileName>
            <SharedWithBox/>
        </CreateFileHolder>
        <UploadButtonHolder>
            <button></button>
            <Link to="/files">Upload File</Link>
        </UploadButtonHolder>
        <ShareLinkHolder>
            <h3>Share Link:</h3>

        </ShareLinkHolder>
        <VersionBrowserHolder>
            <h3>Version Browser</h3>
            <button></button>
            <button></button>
        </VersionBrowserHolder>
        <ConfirmButtons>
            <button>Cancel</button>
            <button>Save</button>
        </ConfirmButtons>
        </>
    )
}


export default CreateFile;