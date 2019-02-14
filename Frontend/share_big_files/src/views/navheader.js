import React from "react";
import styled from "styled-components";
import SignOut from "../components/signOut.js";

const NavHeader = props => {
  return (
    <div>
      <p>Home</p> 
      <SignOut />
    </div>
  );
};
export default NavHeader;

{
  /* //going to have to use useEffect to get params for 2nd thing */
}
