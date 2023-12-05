import React, {useContext} from 'react'
import AccountContext from '../../contexts/AccountContext';

function SignUp() 
{
  const loginDispatch = useContext(AccountContext);

  return (
    <>
      <label htmlFor="userName">User Name</label>
      <input type="text" name="userName" />
      <label htmlFor="password">Password</label>
      <input type="text" name="password" />
      <button>Sign Up</button>
    </>
  )
}

export default SignUp;