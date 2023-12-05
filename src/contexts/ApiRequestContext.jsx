import React, { createContext, useState } from 'react';
import { uri, path, requestMethod, header, body } from '../models/apiVariables';

export const APIRequestContext = createContext();

function ApiContextProvider(props) 
{
  const [ APIRequest, setAPIRequest ] = useState(createAPIRequest());
  const [ APIData, setAPIData ] = useState(fetchAPIData());
  
  function createAPIRequest()
  {
    return new Request(
      `${uri}${path}`,
      {
        method: requestMethod,
        headers: header,
        body: body
      }
    );
  }
  
  async function fetchAPIData() 
  {
    const result = await fetch(APIRequest);
    const data = result.json();
    return data;
  }
  
  return (
    <APIRequestContext.Provider 
      value = {{
        APIData,
        setAPIData,
        fetchAPIData,
      }}
    >
      {props.children}
    </APIRequestContext.Provider>
  )
}

export default ApiContextProvider;