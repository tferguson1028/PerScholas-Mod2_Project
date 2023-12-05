import React, {useContext} from 'react';
import AccountContext from '../../contexts/AccountContext';

function Account() {
  const accountLoggedIn = useContext(AccountContext);
  const setAccountLoggedIn = useContext(AccountContext);

  function loggedIn()
  {
    return (
      <>
        <div className='AccountHeader'>
          <span>Account Name</span>
        </div>
        <div>
        </div>
      </>
    );
  }
  
  function loggedOut()
  {
    return (
      <>
        <a href="account/signup"><button>Sign Up</button></a>
        <a href="account/login"><button>Log In</button></a>
      </>
    );
  }

  return accountLoggedIn ? loggedIn() : loggedOut();
}

export default Account