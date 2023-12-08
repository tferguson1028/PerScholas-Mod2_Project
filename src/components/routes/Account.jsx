import React, {useContext, useEffect, useState} from 'react';
import { AccountContext } from '../../contexts/AccountContext';

function Account() {
  const { accountLoggedIn, setAccountLoggedIn } = useContext(AccountContext);
  
  // const [ loginStatus, setLoginStatus ] = useState();
  useEffect(() => {}, [accountLoggedIn]);
  
  function loggedIn()
  {
    return (
      <>
        <div className='AccountHeader'>
          <span className='TextTitle'>Account Name</span>
        </div>
        <div className='AccountDetails'>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <button onClick={() => {setAccountLoggedIn(false)}}>Log Out</button>
      </>
    );
  }
  
  function loggedOut()
  {
    return (
      <>
        <a href="/account/signup"><button>Sign Up</button></a>
        <a href="/account/login"><button>Log In</button></a>
      </>
    );
  }
  
  console.log(accountLoggedIn);
  return accountLoggedIn ? loggedIn() : loggedOut();
}

export default Account
