import React, {useEffect, useState} from 'react'

function EndSummary() 
{
  const [ savedStocks, setSavedStocks ] = useState();
  
  useEffect(() => { 
    const l = localStorage.getItem("accountCompanyStack");
    console.log(l);
    setSavedStocks(localStorage.getItem("accountCompanyStack"));
  }, [])
  
  function loading() { return <>Loading account details</> }
  
  function loaded()
  {
    return (
      <>
        <h1>Account Name</h1>
        <label>Initial Balance</label>
        <input type="text" name="initBalance" id="" />   
      </>
    )
  }  

  return savedStocks ? loaded() : loading();
}

export default EndSummary
