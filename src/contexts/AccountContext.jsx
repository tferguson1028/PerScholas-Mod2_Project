import React, { createContext, useState } from 'react';

const AccountContext = createContext();

function AccountContextProvider(props) 
{
  const [ accountLoggedIn, setAccountLoggedIn ] = useState(false);
  return (
    <AccountContext.Provider 
      value = {{ accountLoggedIn, setAccountLoggedIn }}
    >
      {props.children}
    </AccountContext.Provider>
  )
}

export default AccountContextProvider;