import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import ReactModal from "react-modal";

const SharedBoxHolder = styled.div`
  width: 45%;
  min-width: 150px;
  height: 10%;
  max-height: 260px;
  min-height: 255px;
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
min-height: 800px;
 
`;

// <<<<<<< HEAD
// //<<<<<<< HEAD:Frontend/share_big_files/src/views/addfile.js

// //const AddFile = () => {
// //=======
// const FileDisplay = () => {
// //>>>>>>> 1f8454a45ab2dade413359118bb2dd797c1028be:Frontend/share_big_files/src/views/FileDisplay.js
// =======
const FileDisplay = () => {
//>>>>>>> 571002d58f0c678a6db0394f038a40e54201ef45
  const [email, setEmail] = useState(null);
  const [userData, setUserData] = useState(null);
  const [selectedFile, setSelectedFile] = useState({
    filename: null,
    file_size: null,
    url: "https://s3lambdafiles123.s3.amazonaws.com/Pipfile-1551309371443",
    upload_date: "2019-02-27T23:16:11.204Z",
    file_id: "106"
  });
  const [loaded, setLoaded] = useState(false);
  const [modalBoolean, setModalBoolean] = useState(false);
  const [targetTile, setTargetTile] = useState(null);
  //const [userExists, setUserExists] = useState(null);
  const profile = JSON.parse(localStorage.getItem("profile"));
  useEffect(() => {
    console.log(selectedFile);
    console.log(userData);
  });

  const ModalSwitchOn = (event, index) => {
    // setTargetTile(event.target)

    var target = event.target.getAttribute("value");
    // console.log(target);
    // var filteredObject = userData.filter(obj => {
    //   return (obj.file_id === target);
    // });
    // console.log('************************')
    // console.log(filteredObject);
    // setSelectedFile(filteredObject[0]);
    axios
   
    .get(`https://api.backendproxy.com/api/downloads/106`)
    .then(response=> {
      console.log("in request to get history")
      console.log(response)
    })
    .catch(err => console.log(err))

    setModalBoolean(!modalBoolean);
  };

  const ModalSwitchOff = event => {
    setModalBoolean(!modalBoolean);
  };

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
  if (!loaded) {
    return <></>;
  }
  return (
    <DesperateDiv>
      <ReactModal
        isOpen={modalBoolean}
        contentLabel="onRequestClose Example"
        onRequestClose={ModalSwitchOff}
      >
        <p>{selectedFile.file_id}</p>
        <button onClick={ModalSwitchOff}>Close Modal</button>
      </ReactModal>
      {userData[0]
        ? userData.map((file, index) => {
            return (
              <SharedBoxHolder key={index}>
                <InnerSharedDiv>
                  <Sharedh4>File Title: {file.filename}</Sharedh4>
                  <Sharedh4>Date Uploaded: </Sharedh4>
                  <Sharedh4 value={file.file_id} onClick={ModalSwitchOn}>
                    File Sharing History{" "}
                  </Sharedh4>
                </InnerSharedDiv>
              </SharedBoxHolder>
            );
          })
        : null}
    </DesperateDiv>
  );
};

export default FileDisplay;
