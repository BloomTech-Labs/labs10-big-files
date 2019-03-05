import React from "react";
import styled from "styled-components";
import history from "../history";


function signOutHandler(){
console.log('Sign out handler fired')
localStorage.clear('accessToken');
localStorage.clear('expiresAt');
history.push("/");
window.location.reload();

}


const SignOutButton = styled.div`
font-size: 2rem;
position: absolute;
top: 90%;
right: 47%;
color: blue;
cursor: pointer;
@media (max-width: 768px) {
  right: 45%;
}
@media (max-width: 390px) {
  right: 40%;
}
// &:hover {
//   color: #ff7518;
// }
`;



const SignOut = props => {
  return <SignOutButton onClick={signOutHandler}>Sign Out</SignOutButton>;
};

export default SignOut;
