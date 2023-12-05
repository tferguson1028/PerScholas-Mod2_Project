import React, { createContext, useState } from 'react';
import { uri, path, requestMethod, header, body } from '../models/apiVariables';

export const APIRequestContext = createContext();

function ApiContextProvider(props) 
{
  // const httpRequest = new Request(
  //   `${uri}${path}`,
  //   {
  //     method: requestMethod,
  //     headers: header
  //   }
  // );
  
  // async function fetchAPI() { console.log(await fetch(httpRequest)); }
  
  // fetchAPI();
  return (
    <APIRequestContext.Provider 
      value = {{
        fetchRequest: "https://example.com/"
      }}
    >
      {props.children}
    </APIRequestContext.Provider>
  )
}

export default ApiContextProvider;