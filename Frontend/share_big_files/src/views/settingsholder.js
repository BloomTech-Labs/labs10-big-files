import React from 'react';
import NavHeader from "./navheader";
import LeftMenu from "./leftmenu";
import Settings from "./settings";

const SettingsHolder = props => {
    return (
        <div>
            <NavHeader {...props}/>
            <LeftMenu {...props}/>
            <Settings {...props}/>
        </div>
    )
}


export default SettingsHolder;