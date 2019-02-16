import React from 'react';
import styled from 'styled-components';

const SettingsDiv = styled.div`
    margin-left: 2%;
`;



///going to need hooks for input state
const Settings = props =>{
    return(
        <SettingsDiv>
            <p>Name</p> <input type="text"></input>
            <p>Old Password</p> <input type="text"></input>
            <p>New Password</p> <input type="text"></input>
            <p>New Password</p> <input type="text"></input>
            <button>Save</button>
        </SettingsDiv>
    )
}


export default Settings;