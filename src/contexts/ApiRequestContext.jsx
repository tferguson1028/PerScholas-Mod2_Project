import React, { createContext } from 'react'


export const requestContext = createContext();

function ApiRequestContext() {
  const httpRequest = new Request();
  httpRequest.

  return (
    <ApiRequestContext.Provider>
      {props.children}
    </ApiRequestContext.Provider>
  )
}

export default ApiRequestContext;