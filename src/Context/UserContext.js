import React, { createContext, useState } from 'react';

export const UserContext = createContext();

export function UserContextProvider(props) {
    const [userToken, setUserToken] = useState(null);
    const [userData, setUserData] = useState(null);
    return (
        <UserContext.Provider value={{ userToken, setUserToken, setUserData, userData }}>
            {props.children}
        </UserContext.Provider>
    );
}
