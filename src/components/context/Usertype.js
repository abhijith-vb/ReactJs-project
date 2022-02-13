import React,{createContext} from 'react';


const UserTypeContext = createContext();
export const UserTypeProvider = UserTypeContext.Provider;
export default UserTypeContext;