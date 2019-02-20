import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

const SettingsDiv = styled.div`
  margin-left: 2%;
`;

///going to need hooks for input state
const Settings = props => {
    function SetPassword() {
        const [name, setName] = useState(null);
        const [oldPassword, setOldPassword] = useState(oldPassword);
        const [newPassword, setNewPassword] = useState(newPassword);
        // const [newPassword, setNewPassword] = useState(null);
      }
    
      useEffect(() => {
          console.log('in useEffect');
        axios
          .get(
            `http://lambdafiles.us-east-2.elasticbeanstalk.com/api/users/users/609`
          )
          .then(response => {
            console.log(response);
          })
          .catch(err => {
            console.log(err);
          });
    
      });  
  return (
    <SettingsDiv>
      <p>name</p>{" "}
      <input type="text" value={props.name} onChange={props.useEffect} />
      <p>Old Password</p>{" "}
      <input type="text" value={props.oldPassword} onChange={props.useEffect} />
      <p>New Password</p>{" "}
      <input type="text" value={props.newPassword} onChange={props.useEffect} />
      <p>New Password</p>{" "}
      <input type="text" value={props.newPassword} onChange={props.useEffect} />
      <button onClick={() => SetPassword()}>Save</button>
    </SettingsDiv>
  );
};

export default Settings;
