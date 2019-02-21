import React from "react";
import styled from "styled-components";

function signOutHandler(){
console.log('Sign out handler fired')
localStorage.clear('accessToken');
localStorage.clear('expiresAt');
window.location.reload();
}

const SignOutButton = styled.div`
font-size: 2rem;
color: white;

`;



const SignOut = props => {
    return (
    <SignOutButton onClick={signOutHandler}>
        Sign Out
    </SignOutButton>
    )
}

export default SignOut;
