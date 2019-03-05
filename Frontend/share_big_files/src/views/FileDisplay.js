import React, { useState, useEffect } from "react";
import styled from "styled-components"; 
import axios from "axios";
 
const SharedBoxHolder = styled.div`
  width: 45%;
  min-width: 150px;
  height: 10%; 
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  border-radius: 5px;
  margin: 0 1.5% 3% 1.5%;
  @media (max-width: 390px) {
    // width: 43%;
    height: 15rem;
    margin: 1% auto;
    text-align: none;
  }
`;
 
const Sharedh4 = styled.h4` 
overflow: hidden;
white-space: nowrap;
text-overflow: ellipsis;
padding: 0;
  margin: 0;
  width: 20rem;
  height: 20px;
@media(max-width: 390px){ 
  
`;
const InnerSharedDiv = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-left: 13%;
`;

 
const DesperateDiv = styled.div`
display: flex;
flex-wrap: wrap;
margin-right: 4%;
justify-content: space-around;
margin-left: 2%;
`;

const FileDisplay = () => {
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
   <></>
 )} return(
    <DesperateDiv>
      {userData[0]? userData.map((file, index) => {
                return( 
        <SharedBoxHolder key={index}>
          <InnerSharedDiv>
            <Sharedh4>File Title: {file.filename}</Sharedh4>
{/* 
            <Sharedh3>URL: {file.url}</Sharedh3>
            <SharedInput type="text" />
            <CenterShareDiv>
              <Link to="/">
                <br />
                <br />
                <ShareDiv>
                {/* <FaShareSquare size={40} url={file.url} /> */}
                {/* Share
                </ShareDiv>
              </Link>
            </CenterShareDiv> */}

            <Sharedh4>Date Uploaded: </Sharedh4>
            <Sharedh4>Viewed: </Sharedh4>
            <Sharedh4>Downloaded: </Sharedh4> 

          </InnerSharedDiv>
        </SharedBoxHolder>
      )}): null}
    </DesperateDiv>
  );
};

export default FileDisplay;
