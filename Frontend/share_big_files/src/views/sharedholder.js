import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaShareSquare } from "react-icons/fa";


const SharedBoxHolder = styled.div`
  width: 25rem;
  height: 22rem;
  border: 1px solid black;
  margin-left: 4%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-radius: 10%;
  @media(max-width: 390px) {
      width: 95%;
      height: 40rem;
      margin: 0 auto;
  }
`;
const FileText = styled.h3`
@media(max-width: 390px) {
   font-size: 2.5rem;
}
`;



const SharedHolder = () => {

    return (
        <SharedBoxHolder>
            <div>
                
                <FileText>File Title:</FileText>
                <FileText>Shared With:</FileText>
               
                <input type="text"></input>
                <Link to="/">
                <br/>
                <br/>
                <FileText>
                Share <FaShareSquare size={20} />
                </FileText>
                
                
                </Link>
            </div>
        </SharedBoxHolder>
    )
};

export default SharedHolder;


