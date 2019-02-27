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



const SharedHolder = () => {

    return (
        <SharedBoxHolder>
            <div>
                <h3>File Title:</h3>
                <h3>Shared With:</h3>
                <input type="text"></input>
                <Link to="/">
                <br/>
                <br/>
                <FaShareSquare size={20} />
                Share
                </Link>
            </div>
        </SharedBoxHolder>
    )
};

export default SharedHolder;


