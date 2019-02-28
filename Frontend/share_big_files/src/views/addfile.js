import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaPlusCircle } from "react-icons/fa";
import axios from "axios";
 

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
  @media (max-width: 390px) {
    width: 95%;
    height: 40rem;
    margin: 0 auto;
    margin-bottom: 2%;
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

const AddFile = () => {
  const [email, setEmail] = useState(null);
  //const [userExists, setUserExists] = useState(null);
  const profile = JSON.parse(localStorage.getItem("profile")); 

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
       email: profile.email
    };

    const userJSON = JSON.stringify(userEmailObject)

    // userEmailObject = JSON.stringify(userEmailObject);
    console.log(userJSON);

    axios
      .get("https://api.backendproxy.com/api/s3/files/fk_email", userJSON)
      .then(response => {
        console.log(response);
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
  return (
    <>
      <AddFileHolder>
        <NewFileText>New File</NewFileText>
        <Link to="/create">
          <FaPlusCircle size={50} color="black" />
        </Link>
      </AddFileHolder>
    </>
  );
};

export default AddFile;
