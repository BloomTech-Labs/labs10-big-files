import React from "react";
import styled from "styled-components";

function signOutHandler(){
console.log('Sign out handler fired')
localStorage.clear('token');
window.location.reload();
}

const signOut = props => {
    return (
    <button onClick={signOutHandler}>
        Sign Out
    </button>
    )
}

export default signOut;
