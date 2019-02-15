import React from 'react';
import LeftMenu from './leftmenu';
import styled from 'styled-components';
import { Link } from 'react-router-dom';



const AddFileBox = styled.div`
    width: 20%;
    height: 300 rem;
    background-color: gray;

`;
const NewFileText = styled.div`

`;
const AddFileButton = styled.div`
    background-color: white;
    color: white;
    border-radius: 50%;
    height: 100 px;
`;
const Button = styled.button`
    height: 20rem;
`;



const AddFile = () => {

    return (
        
        
        <AddFileBox>
            <NewFileText>
                New File
            </NewFileText>
            <AddFileButton>
                <Button>+</Button>
            </AddFileButton>
        </AddFileBox>
       

    )
};

export default AddFile;