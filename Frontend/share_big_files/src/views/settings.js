import React, { useState } from 'react';
import styled from 'styled-components';

const SettingsDiv = styled.div`
    margin-left: 2%;
`;

<<<<<<< HEAD
=======
 
// function SetPassword() {
//     const [name, setName] = useState("Tony");
//     const [oldPassword, setOldPassword] = useState("asdf");
//     const [newPassword, setNewPassword] = useState("fdsa");
//     // const [newPassword, setNewPassword] = useState(null);
//     console.log(name, oldPassword, newPassword);
//     function handleChange(e) {
//         setName(e.target.name)
//         setOldPassword(e.target.oldPassword)
//         setNewPassword(e.target.newPassword)
//         console.log(name, oldPassword, newPassword);

//     }
    
// }

// useEffect(() => {
//     localStorage.name = name
// })

>>>>>>> 68261bcb62084f821ff33374e1c398f32f05d403
///going to need hooks for input state
const Settings = () =>{
  
        const [name, setName] = useState(null);
        const [oldPassword, setOldPassword] = useState(null);
        const [newPassword, setNewPassword] = useState(null);
        const [newPassword2, setNewPassword2] = useState(null);
        console.log("INSIDE SETTINGS", name, oldPassword, newPassword);
    
        function handleChange(e) {
            if ( e.target.name === "name") {
                setName(e.target.value)
                console.log("NAME" + name)
            } else if  ( e.target.name === "oldPassword") {
            setOldPassword(e.target.value)
            console.log("OLDP" + oldPassword)
            } else if ( e.target.name === "newPassword") {
            setNewPassword(e.target.value)
            console.log("NEWP" + newPassword)
            } else if ( e.target.name === "newPassword2") {
            setNewPassword2(e.target.value)
            console.log("NEWP2" + newPassword2)
            }
        }
    return(
        <SettingsDiv>
            <p>name</p> <input type="text" name="name" placeholder={name} onChange={handleChange}/>
            <p>Old Password</p> <input type="text" name="oldPassword" placeholder={oldPassword} onChange={handleChange}/>
            <p>New Password</p> <input type="text" name="newPassword" placeholder={newPassword} onChange={handleChange}/>
            <p>New Password</p> <input type="text" name="newPassword2" placeholder={newPassword2} onChange={handleChange}/>
            <button onClick={() => handleChange()}>Save</button>
        </SettingsDiv>
    )

    
}
<<<<<<< HEAD
=======
 
>>>>>>> 68261bcb62084f821ff33374e1c398f32f05d403

export default Settings;