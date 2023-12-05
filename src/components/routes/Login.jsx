import React from 'react'

function Login() {
  return (
    <>
      <label htmlFor="userName">User Name</label>
      <input type="text" name="userName" />
      <label htmlFor="password">Password</label>
      <input type="text" name="password" />
      <button>Log In</button>
    </>
  )
}

export default Login