import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';


const SharedBoxHolder = styled.div`
  width: 25rem;
  height: 22rem;
  border: 1px solid black;
  margin-left: 4%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;



const SharedHolder = () => {

    return (
        <SharedBoxHolder>
            <div>
                <h3>File Title:</h3>
                <h3>Shared With:</h3>
                <input type="text"></input>
                <Link to="/">Share</Link>
            </div>
        </SharedBoxHolder>
    )
}

export default SharedHolder;


