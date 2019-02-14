import React from 'react';
import LeftMenu from './leftmenu';
import styled from 'styled-components';



const AddFileHolder = styled.div`

`;
const NewFileText = styled.div`

`;
const AddFileButton = styled.div`
    background-color: black;
    color: white;
    border-radius: 50%;
`;


const AddFile = () => {

    return (
        <>
        <LeftMenu/>
        <AddFileHolder>
            <NewFileText>
                New File
            </NewFileText>
            <AddFileButton>
                <Link to="/create">+</Link>
            </AddFileButton>
        </AddFileHolder>
        </>

    )
};

export default AddFile;