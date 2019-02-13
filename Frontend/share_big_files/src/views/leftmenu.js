import React from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom';

const LeftMenuHolder = styled.div`

`;
const LeftMenuOptions = styled.div`

`;

const LeftMenu = () => {


    return (
        <LeftMenuHolder>
            <LeftMenuOptions>
                <Link to="/files">Files</Link>
                <br></br>
                <Link to="/billing">Billing</Link>
                <br></br>
                <Link to="/settings">Settings</Link>
            </LeftMenuOptions>
            
        </LeftMenuHolder>
    )


};

export default LeftMenu;