import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

const SettingsDiv = styled.div`
  margin-left: 2%;
`;

const Settings = () => {
  const [name, setName] = useState(null);
  const [oldPassword, setOldPassword] = useState(null);
  const [newPassword, setNewPassword] = useState(null);
  const [newPassword2, setNewPassword2] = useState(null);
  console.log("INSIDE SETTINGS", name, oldPassword, newPassword);

  useEffect(() => {
    console.log("inside use effect");
    axios
      .get(
        `http://lambdafiles.us-east-2.elasticbeanstalk.com/api/users/users/609`
      )
      .then(response => {
        console.log(response);
      })
      .catch(err => console.log(err));
  });

  function handleChange(e) {
    if (e.target.name === "name") {
      setName(e.target.value);
      console.log("NAME" + name);
    } else if (e.target.name === "oldPassword") {
      setOldPassword(e.target.value);
      console.log("OLDP" + oldPassword);
    } else if (e.target.name === "newPassword") {
      setNewPassword(e.target.value);
      console.log("NEWP" + newPassword);
    } else if (e.target.name === "newPassword2") {
      setNewPassword2(e.target.value);
      console.log("NEWP2" + newPassword2);
    }
  }
  return (
    <SettingsDiv>
      <p>name</p>{" "}
      <input
        type="text"
        name="name"
        placeholder={name}
        onChange={handleChange}
      />
      <p>Old Password</p>{" "}
      <input
        type="text"
        name="oldPassword"
        placeholder={oldPassword}
        onChange={handleChange}
      />
      <p>New Password</p>{" "}
      <input
        type="text"
        name="newPassword"
        placeholder={newPassword}
        onChange={handleChange}
      />
      <p>New Password</p>{" "}
      <input
        type="text"
        name="newPassword2"
        placeholder={newPassword2}
        onChange={handleChange}
      />
      <button onClick={() => handleChange()}>Save</button>
    </SettingsDiv>
  );
};

export default Settings;
