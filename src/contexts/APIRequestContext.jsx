import React, { createContext, useState } from 'react';
import { appendApiKey } from '../models/apiVariables';
import { apiKey } from '../models/apiKey';

export const APIRequestContext = createContext();

function ApiContextProvider(props) 
{
  const [ APIData, setAPIData ] = useState();
  
  async function fetchAPIData(request) 
  {
    try
    {
      request = appendApiKey(apiKey, request);
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
        fetchAPIData
      }}
    >
      {props.children}
    </APIRequestContext.Provider>
  )
}

export default ApiContextProvider;
