import React from 'react';
import styled from 'styled-components';

///going to need hooks for input state
const Settings = props =>{
    return(
        <div>
            <p>Name</p> <input type="text"></input>
            <p>Old Password</p> <input type="text"></input>
            <p>New Password</p> <input type="text"></input>
            <p>New Password</p> <input type="text"></input>
            <button>Save</button>
        </div>
    )
}


export default Settings;