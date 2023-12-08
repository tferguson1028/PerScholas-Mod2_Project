import React, {useContext} from 'react'
import {AccountContext} from '../../contexts/AccountContext';

function Login(props) 
{
  const { pageText } = props;
  const { setAccountLoggedIn, loginDispatch } = useContext(AccountContext);
  
  function handleSubmit(event)
  {
    event.preventDefault();
    let userName = event.target.userName.value;
    let password = event.target.password.value;
    
    console.log("Logging in with credentials");
    console.log(`Username: ${userName}`);
    // https://stackoverflow.com/questions/13825829/replace-all-letters-in-a-word-to-in-js
    console.log(`Password: ${String(password).replace(/./g, "*")}`);
    setAccountLoggedIn(true);
    loginDispatch();
  }
  
  return (
    <>
      <header>
        <h1>{pageText}</h1>
        <span>This is for demonstration purposes only. Account details are not saved.</span>
      </header>
      <form onSubmit={handleSubmit}>
        <label htmlFor="userName">User Name</label>
        <input type="text" name="userName" id='userName'/>
        <label htmlFor="password">Password</label>
        <input type="text" name="password" />
        <button type='submit'>{pageText}</button>
      </form>
    </>
  )
}

export default Login;
