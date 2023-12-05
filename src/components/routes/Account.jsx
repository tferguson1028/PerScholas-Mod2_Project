import React, {useContext} from 'react'

function Account() {
  const { accountLoggedIn } = useContext(AccountContext);

  function loggedIn()
  {
    return (
      <>
        <span>Account Name</span>
      </>
    );
  }
  
  function loggedOut()
  {
    return (
      <>
        <button>Sign Up</button>
        <button>Log In</button>
      </>
    );
  }

  return accountLoggedIn ? loggedIn() : loggedOut();
}

export default Account