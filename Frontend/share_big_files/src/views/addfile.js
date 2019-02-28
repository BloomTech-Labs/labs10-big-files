import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaPlusCircle } from "react-icons/fa";
import axios from "axios";
import SharedHolder from "./sharedholder";
import { FaShareSquare } from "react-icons/fa";

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
  text-align: center;
  margin: 1% auto;
  @media (max-width: 390px) {
    width: 43%;
    height: 15rem;
    margin: 1% auto;
    text-align: center;
  }
`;
const NewFileText = styled.div`
  margin-bottom: 2rem;
  margin-top: -2rem;
  font-size: 3rem;
  @media(max-width: 390px) {
    font-size: 4rem;
  }
`;

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
  margin: 1% auto;
  @media (max-width: 390px) {
    width: 43%;
    height: 15rem;
    margin: 1% auto;
    text-align: none;
  }
`;

const SharedInput = styled.div`
  @media (max-width: 390px) {
    width: 90%;
    padding: 0;
    margin: 0px auto;
  }
`;

const Sharedh3 = styled.h3`
@media(max-width: 390px){ 
    padding: 0;
    margin: 0
`;
const InnerSharedDiv = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-left: 13%;
`;

const CenterShareDiv = styled.div`
  margin: 0 auto;
`;

const DesperateDiv = styled.div`
display: flex;
flex-wrap: wrap;
`;

const AddFile = () => {
  const [email, setEmail] = useState(null);
  const [userData, setUserData] = useState(null);
  const [loaded, setLoaded] = useState(false);
  //const [userExists, setUserExists] = useState(null);
  const profile = JSON.parse(localStorage.getItem("profile"));
  useEffect(() => {
    console.log(userData);
  });

  const fetchData = () => {
    console.log("in fetch data");
    console.log(profile.nickname);

    axios
      .get(`https://api.backendproxy.com/api/users/${profile.nickname}`)
      .then(response => {
        console.log(response);
        //if response from db based on username is zero, user is not in db.
        //conditionalAddUser puts them in db.
        if (Object.keys(response.data).length === 0) {
          conditionalAddUser();
        } else {
          getUserData();
        }
      })
      .catch(err => console.log(err));
  };

  const getUserData = () => {
    const userEmailObject = {
      fk_email: profile.email
    };

    axios
      .post(
        "https://api.backendproxy.com/api/s3/files/fk_email",
        userEmailObject
      )
      .then(response => {
        setUserData(response.data);
        setLoaded(true);
      })
      .catch(err => console.log(err));
  };

  useEffect(() => {
    const profile = JSON.parse(localStorage.getItem("profile"));
    const profileEmail = profile.email;
    setEmail(profileEmail);
    console.log("Email on state is: " + email);
    fetchData();
  }, []);

  //Function to add user to database
  const conditionalAddUser = () => {
    console.log("In conditionalAddUser");

    let newUser = {
      username: profile.nickname,
      paid: false,
      email: profile.email
    };

    axios
      .post(`https://api.backendproxy.com/api/users/users`, newUser)
      .then(response => {
        console.log(response);
      })
      .catch(err => console.log(err));
  };
  if(!loaded){
  return (
    <AddFileHolder>
    <NewFileText>New File</NewFileText>
    <Link to="/create">
      <FaPlusCircle size={50} color="black" />
    </Link>
  </AddFileHolder>)} return(
    <DesperateDiv>
      <AddFileHolder>
    <NewFileText>New File</NewFileText>
    <Link to="/create">
      <FaPlusCircle size={50} color="black" />
    </Link>
  </AddFileHolder>
   
      {userData[0]? userData.map((file) => {
                return( 

                  
        <SharedBoxHolder>
          <InnerSharedDiv>
            <Sharedh3>File Title: {file.filename}</Sharedh3>
            <Sharedh3>URL: {file.url}</Sharedh3>
            <SharedInput type="text" />
            <CenterShareDiv>
              <Link to="/">
                <br />
                <br />
                <FaShareSquare size={40} url={file.url} />
                Share
              </Link>
            </CenterShareDiv>
          </InnerSharedDiv>
        </SharedBoxHolder>
      )}): null}
    </DesperateDiv>
  );
};

export default AddFile;
