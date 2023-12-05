import React, { createContext, useState } from 'react';
import { uri, path, requestMethod, header, body } from '../models/apiVariables';

export const APIRequestContext = createContext();

function ApiContextProvider(props) 
{
  const request = new Request(
    `${uri}${path}`,
    {
      method: requestMethod,
      headers: header,
      body: body
    }
  );
  const { apiRequest, setAPIRequest } = useState(null);
  
  async function fetchAPI(request) 
  {
    console.log(request);
    console.log((await fetch(request)).json()); 
  }
  
  fetchAPI(request);
  return (
    <APIRequestContext.Provider 
      value = {""}
    >
      {props.children}
    </APIRequestContext.Provider>
  )
}

export default ApiContextProvider;