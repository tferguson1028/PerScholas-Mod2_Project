import React, {useContext} from 'react'
import { AccountContext } from '../../contexts/AccountContext';

function SignUp() 
{
  // No longer using.
  
  const { loginDispatch } = useContext(AccountContext);
  
  function handleClick(event)
  {
    event.preventDefault();
    let userName = event.target.userName.value;
    let password = event.target.password.value;
    
    console.log("Logging in with credentials");
    
    loginDispatch(
      event.target.userName.value,
      event.target.password.value
    );
  }
  
  return (
    <>
      <header>
        <h1>Sign Up</h1>
        <span>This is for demonstration purposes only. Account details are not saved.</span>
      </header>
      <form onSubmit={handleClick}>
        <label htmlFor="userName">User Name</label>
        <input type="text" name="userName" id='userName'/>
        <label htmlFor="password">Password</label>
        <input type="text" name="password" />
        <button type='submit'>Sign Up</button>
      </form>
    </>
  )
}

export default SignUp;
