import React from 'react';
import {navheader} from "./navheader";
import {leftmenus} from "./leftmenus";
import {settings} from "./settings";

const settingsHolder = props => {
    return (
        <div>
            <navheader {...props}/>
            <leftmenus {...props}/>
            <settings {...props}/>
        </div>
    )
}