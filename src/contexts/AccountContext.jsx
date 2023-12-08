import React, { createContext, useState } from 'react';

export const AccountContext = createContext();

function AccountContextProvider(props) 
{
  const [ accountLoggedIn, setAccountLoggedIn ] = useState();
  
  async function loginDispatch(username, password)
  {
    await setAccountLoggedIn(true);
    setTimeout(() => {
      // https://stackoverflow.com/questions/52229901/navigate-to-route-on-button-click
      // https://stackoverflow.com/questions/1368264/how-to-extract-the-hostname-portion-of-a-url-in-javascript
      let root = window.location.protocol + "//" + window.location.host;
      window.location.assign(`${root}/account`);
    }, 1000);    
    
    // localStorage.setItem("loginStatus", accountLoggedIn);
    // console.log(accountLoggedIn);
  }
  
  return (
    <AccountContext.Provider 
      value = {{ 
        accountLoggedIn, 
        setAccountLoggedIn, 
        loginDispatch }}
    >
      {props.children}
    </AccountContext.Provider>
  )
}

export default AccountContextProvider;
