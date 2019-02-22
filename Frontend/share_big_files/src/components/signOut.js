import React from "react";
import styled from "styled-components";
import history from "../history";

function signOutHandler(){
console.log('Sign out handler fired')
localStorage.clear('accessToken');
localStorage.clear('expiresAt');
history.push("/add");
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
