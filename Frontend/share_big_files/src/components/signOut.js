import React from "react";
import styled from "styled-components";

function signOutHandler(){
console.log('Sign out handler fired')
localStorage.clear('token');
window.location.reload();
}

const SignOutButton = styled.button`
height:2rem;
`;

const SignOut = props => {
    return (
    <SignOutButton onClick={signOutHandler}>
        Sign Out
    </SignOutButton>
    )
}

export default SignOut;
