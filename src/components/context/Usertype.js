import React from 'react';


const userTypeContext = React.createContext();
export const userTypeProvider = userTypeContext.Provider;
export default userTypeContext;