import React, {useState, useEffect, useContext} from 'react';

const context = React.createContext();

function AppProvider ({children}) {

  return (
    <context.Provider value={'hello'}>
        {children}
    </context.Provider>
  )
}

export default AppProvider