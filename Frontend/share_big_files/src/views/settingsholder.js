import React from 'react';
import NavHeader from "./navheader";
import LeftMenu from "./leftmenu";
import Settings from "./settings";
import styled from 'styled-components';

const SettingsContainer = styled.div`
    width: 100%;
    height: auto;
    min-height: 100vh;
    margin: 0 auto;
    background-image: url("https://i.pinimg.com/originals/1a/a6/4d/1aa64df2e7a5e7679090cfcf5602c6e9.jpg")
`;
const MenuSettingsHolder = styled.div`
    display: flex;
    
`;

const SettingsHolder = props => {
    return (
        <SettingsContainer>
            <NavHeader {...props}/>
            <MenuSettingsHolder>
            <LeftMenu {...props}/>
            <Settings {...props}/>
            </MenuSettingsHolder>
        </SettingsContainer>
    )
}


export default SettingsHolder;