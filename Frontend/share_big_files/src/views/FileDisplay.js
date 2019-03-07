import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import ReactModal from "react-modal";
import NavHeader from './navheader';
import { FaAutoprefixer } from "react-icons/fa";

const SharedBoxHolder = styled.div`
  width: 45%;
  min-width: 150px;
  height: auto; 
  min-height: 160px;
  display: flex;
  flex-direction: column;
  align-items: center; 
  background-color: white;
  border-radius: 5px;
  margin: 0 1.5% 3% 1.5%;
 
  @media (max-width: 390px) {
    width: 100%;
    height: 10rem;
    margin: 3% auto;
    text-align: none;
    min-height: 110px
 
  @media (max-width: 500px) {
    width: 95%;
    padding: 2% 0;
 
  }
  // @media (max-width: 390px) {
  //   // width: 43%;
  //   height: 15rem;
  //   margin: 1% auto;
  //   text-align: none;
  // }
`;

const Sharedh4 = styled.h4` 
overflow: hidden;
white-space: nowrap;
text-overflow: ellipsis;
padding: 0; 
  margin: 0;
  margin-left: 5%;
  width: auto;
  height: 20px;
@media(max-width: 390px){ 
  
`;

const Sharedh3 = styled.h3` 
overflow: hidden;
white-space: nowrap;
text-overflow: ellipsis;
padding: 0; 
  margin: 0;
  margin-left: 5%;
  width: auto;
  height: 20px;
@media(max-width: 390px){ 
  
`;


const DesperateDiv = styled.div`
height: 100%;
  display: flex; 
  flex-wrap: wrap;
  margin-right: 4%;
  justify-content: space-around;
  margin-left: 2%;
 
  @media(max-width: 390px){
    margin: 0 auto;
    width: 95%;
 
  @media(max-width: 900px) {
    width: 610px;
    margin: 0 auto;
  }
  @media(max-width: 700px) {
    width: 450px;
    margin: 0 auto;
  }
  @media(max-width: 500px) {
    width: auto;
    margin: 0 auto;
 
  }
`;

const HistoryDiv = styled.div`
margin: 0% 4%;
padding: 2% 0%

`;

const InnerTileDiv = styled.div` 
height: 100%;
width: 100%;
display: flex;
flex-direction: column;
justify-content: space-around;
`;


const HistoryButton = styled.button`
width: 44%;
border-radius: 4px;
margin-left: 5%
@media(max-width: 1000px) {
  width: 55%;
  margin: 0 auto;
}
// @media(max-width: 390px) {
//   width: 55%;
//   margin: 0 auto;
// }
`;

const ReturnButton = styled.button`

border-radius 4px
`;

const FileDisplay = () => {
  const [email, setEmail] = useState(null);
  const [userData, setUserData] = useState(null);
  const [selectedFile, setSelectedFile] = useState({
    filename: null,
    file_size: null,
    url: "https://s3lambdafiles123.s3.amazonaws.com/Pipfile-1551309371443",
    upload_date: "2019-02-27T23:16:11.204Z",
    file_id: "106"
  });
  const [viewedHistory, setViewedHistory] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [modalBoolean, setModalBoolean] = useState(false);
  const [targetTile, setTargetTile] = useState(null);
  //const [userExists, setUserExists] = useState(null);
  const profile = JSON.parse(localStorage.getItem("profile"));
  useEffect(() => {
    console.log(selectedFile);
  });

  const ModalSwitchOn = (event, index) => {
    // setTargetTile(event.target)

    var target = event.target.getAttribute("value");
    console.log(target);
    var filteredObject = userData.filter(obj => {
      return obj.file_id === target;
    });
    console.log("************************");
    console.log(filteredObject);
    setSelectedFile(filteredObject[0]);
    axios

      .get(`https://api.backendproxy.com/api/downloads/${target}`)
      .then(response => {
        console.log("in request to get history");
        console.log(response);
        setViewedHistory(Array.from(response.data));
      })
      .catch(err => console.log(err));

    setTimeout(modalSwitch, 1000);
  };

  const modalSwitch = () => {
    setModalBoolean(!modalBoolean);
  };

  const ModalSwitchOff = event => {
    setModalBoolean(!modalBoolean);
  };

  const HistoryView = () => {};

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
  if (loaded && !modalBoolean) {
    return (
      <DesperateDiv>
        {userData[0]
          ? userData.map((file, index) => {
              return (
                <SharedBoxHolder key={index}>
                <InnerTileDiv>
                    <Sharedh3>{file.filename}</Sharedh3>
                    <Sharedh4>Date Uploaded: {file.upload_date.slice(0, 10)}</Sharedh4>
                    <Sharedh4>Time Uploaded: {file.upload_date.slice(11, -5)}</Sharedh4>
                    <HistoryButton value={file.file_id} onClick={ModalSwitchOn}>
                    Download History
                    </HistoryButton>
                    </InnerTileDiv>
                </SharedBoxHolder>
              );
            })
          : null}
      </DesperateDiv>
    );
  } else {
    return (
      <ReactModal
        isOpen={modalBoolean}
        contentLabel="onRequestClose Example"
        onRequestClose={ModalSwitchOff}
        className="modal"
        style={{
          overlay: {
            backgroundColor: "rgb(234,231,220, 1)",
          },
          content:{
            margin: "0 auto",
            marginTop: "20px",
          }
        }}
      >
  
        <HistoryDiv>
          <h2>File Name: {selectedFile.filename}</h2>
          <h3>Total Downloads: {viewedHistory.length} </h3>
          {viewedHistory.map((file, index) => {
            return (
              <div key={index}>
                <h3>
                  {file.download_date} Download Email: {file.email}
                </h3>
              </div>
            );
          })}
       
        <ReturnButton onClick={ModalSwitchOff}>Return</ReturnButton>
        
        </HistoryDiv>
      </ReactModal>
    );
  }
};
export default FileDisplay;
