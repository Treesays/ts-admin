import React, { createContext } from 'react';
export const UserNameContext = createContext();
export const UserName = (props) => <UserNameContext.Provider value={props.username} >{ props.children }</UserNameContext.Provider>