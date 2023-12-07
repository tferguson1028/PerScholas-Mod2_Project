import React, { createContext, useState } from 'react';
import { uri, path, requestMethod, header, body, apiURLFunctions } from '../models/apiVariables';

export const APIRequestContext = createContext();

function ApiContextProvider(props) 
{
  const [ APIRequest, setAPIRequest ] = useState(createAPIRequest());
  const [ APIData, setAPIData ] = useState();
  
  function createAPIRequest()
  {
    return apiURLFunctions.list(10);
  }
  
  async function fetchAPIData(request) 
  {
    try
    {
      console.log(request);
      const result = await fetch(String(request));
      const data = await result.json();
      console.log(data);
      return data;
    }catch(exception)
    {
      console.error("Unable to fetch!\n" + exception);
    }
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