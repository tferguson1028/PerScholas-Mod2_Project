import React from 'react'

function SignUp() {
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

export default SignUp