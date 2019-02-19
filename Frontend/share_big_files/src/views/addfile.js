import React, { Component, useState, useEffect } from "react"; 
import styled from "styled-components";
import { Link } from "react-router-dom";
import {FaPlusCircle} from 'react-icons/fa';

const AddFileHolder = styled.div`
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
`;
const NewFileText = styled.div`
  margin-bottom: 2rem;
  margin-top: -2rem;
  font-size: 3rem;
`;
// const AddFileButton = styled.div`
//   height: 50px;
//   width: 50px;
//   background-color: black;
//   color: white;
//   border-radius: 50%;
//   display: flex;
//   justify-content: center;
//   align-items: center;

// `;
// const PlusText = styled.h1`
//   color: white;
//   text-decoration: none;
//   margin-top: 2.8rem;
//   font-size: 5rem;
// `;

const AddFile = () => {
  const [email, setEmail] = useState(null);
  useEffect(()=>{
    const profile = JSON.parse(localStorage.getItem('profile')); 
    const profileEmail = profile.email; 
    setEmail(profileEmail)
    console.log('Email on state is: '+email);
  })
  return (
    <>
      <AddFileHolder>
        <NewFileText>New File</NewFileText>
        <Link to="/create"> 
            <FaPlusCircle size={50} color="black"/>
          
        </Link>
      </AddFileHolder>
    </>
  );

};

export default AddFile;
