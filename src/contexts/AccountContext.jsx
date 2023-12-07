import React, { createContext, useState } from 'react';

export const AccountContext = createContext();

function AccountContextProvider(props) 
{
  const [ accountLoggedIn, setAccountLoggedIn ] = useState(false);
  
  function loginDispatch(username, password)
  {
    setAccountLoggedIn(true);
  }
  
  return (
    <AccountContext.Provider 
      value = {{ accountLoggedIn, loginDispatch }}
    >
      {props.children}
    </AccountContext.Provider>
  )
}

export default AccountContextProvider;