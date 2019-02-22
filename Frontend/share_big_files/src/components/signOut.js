import React from "react";
import styled from "styled-components";
import history from "../history";

function signOutHandler() {
  var signoutPromise = new Promise(function(resolve, error) {
    console.log("Sign out handler fired");
    localStorage.clear("accessToken");
    localStorage.clear("expiresAt");
    history.push("/");
  });
  signoutPromise.then(window.location.reload());
}

const SignOutButton = styled.button`
  height: 2rem;
`;

const SignOut = props => {
  return <SignOutButton onClick={signOutHandler}>Sign Out</SignOutButton>;
};

export default SignOut;
