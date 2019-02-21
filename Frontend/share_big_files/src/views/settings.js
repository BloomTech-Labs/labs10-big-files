import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { userInfo } from 'os';

const SettingsDiv = styled.div`
    margin-left: 2%;
`;

///going to need hooks for input state
const Settings = () =>{
    const [user, setUser] = useState(null);
    useEffect(()=>{
      const profile = JSON.parse(localStorage.getItem('profile')); 
    //   const userId = user.id; 
      setUser(profile)
    //   console.log('Email on state is: '+email);

    } ,[])
        const [name, setName] = useState(user.name);
        const [oldPassword, setOldPassword] = useState(null);
        const [newPassword, setNewPassword] = useState(null);
        const [newPassword2, setNewPassword2] = useState(null);
        
        console.log("INSIDE SETTINGS", name, oldPassword, newPassword);
    
        function handleChange(e) {
            if ( e.target.name === "name") {
                setName(e.target.value)
                console.log("NAME" + name)
            } else if  ( e.target.name === "oldPassword") {
            setOldPassword(e.target.value)
            console.log("OLDP" + oldPassword)
            } else if ( e.target.name === "newPassword") {
            setNewPassword(e.target.value)
            console.log("NEWP" + newPassword)
            } else if ( e.target.name === "newPassword2") {
            setNewPassword2(e.target.value)
            console.log("NEWP2" + newPassword2)

            }
        }

        

        function handleConfirmPassword() {
           
            const [user, setUser] = useState(null);
            useEffect(()=>{
              const profile = JSON.parse(localStorage.getItem('profile')); 
            //   const userId = user.id; 
              setUser(profile)
            //   console.log('Email on state is: '+email);

            } ,[])

            if ( newPassword !== newPassword2 ) {
                alert("New passwords must match");
                } else {
                    const updatedUser = {
                        ...user,
                        password: newPassword
                    }

                    axios
                        .put(`http://lambdafiles.us-east-2.elasticbeanstalk.com/api/users/users/${user.id}`, updatedUser)
                        .then(response => {
                            console.log(response);
                            setNewPassword(response.handleConfirmPassword)
                        })
                        .catch(e => console.log(e));
                }
           
            
        }
        
    return(
        <SettingsDiv>
            <p>name</p> <input type="text" name="name" placeholder={name} onChange={handleChange}/>
            <p>Old Password</p> <input type="text" name="oldPassword" placeholder={oldPassword} onChange={handleChange}/>
            <p>New Password</p> <input type="password" name="newPassword" placeholder={newPassword} onChange={handleChange}/>
            <p>New Password</p> <input type="password" name="newPassword2" placeholder={newPassword2} onChange={handleChange}/>
            <button onClick={() => handleConfirmPassword()}>Save</button>
        </SettingsDiv>
    )

    
}

export default Settings;