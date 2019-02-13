import React from "react";
import styled from "styled-components";
import {signOut} from '../components/signOut';
const navHeader = props => {
    return (
        <div>
            <p>Home</p>
            {/* //going to have to use useEffect to get params for 2nd thing */}
        {signOut}
        </div>
    )
}

export default navHeader;