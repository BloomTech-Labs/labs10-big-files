import react from 'react';



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
        <AddFileHolder>
            <NewFileText>
                New File
            </NewFileText>
            <AddFileButton>
                <Link to="/create">+</Link>
            </AddFileButton>
        </AddFileHolder>

    )
};

export default AddFile;