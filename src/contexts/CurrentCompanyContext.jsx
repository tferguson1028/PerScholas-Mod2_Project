import React, { createContext, useState } from 'react';

const CurrentCompanyContext = createContext();

function CurrentCompanyContextProvider(props) {
  const { currentCompany, setCurrentCompany } = useState(null);
  return (
    <CurrentCompanyContext.Provider 
      value = {{ currentCompany, setCurrentCompany }}
    >
      {props.children}
    </CurrentCompanyContext.Provider>
  )
}

export default CurrentCompanyContextProvider