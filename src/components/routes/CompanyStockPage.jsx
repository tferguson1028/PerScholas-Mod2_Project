import React, {useContext, useEffect, useState} from 'react'
import {APIRequestContext} from '../../contexts/APIRequestContext';
import {apiURLFunctions} from '../../models/apiVariables';

function CompanyStockPage() 
{
  const [ companySymbol, setCompanySymbol ] = useState();
  const [ companyData, setCompanyData ] = useState();
  const { fetchAPIData } = useContext(APIRequestContext);
  
  useEffect(() => {getCompanyPageRef();}, []);
  useEffect(() => {}, [companyData]);
  
  async function getCompanyPageRef()
  {
    let url = window.location.href;
    let refIndex = window.location.href.lastIndexOf("/");
    let currentCompany = url.substring(refIndex+1);
    
    console.log(currentCompany);
    
    setCompanySymbol(currentCompany);
    setCompanyData(await fetchAPIData(apiURLFunctions.companyProfile(currentCompany)))
    return currentCompany;
  }
  
  function loaded()
  {
    if (companyData.length == 0)
      return noCompanyError();
    else
      return (
        <>
          <span className='TextTitle'>Company Title</span>
          <span className='Graph'>Stock Graph</span>
          <span className=''></span>
        </>
    )
  }
  
  function noCompanyError()
  {
    return (
      <>
        <span className='TextTitle'>Company with symbol "{companySymbol}" not found.</span>
      </>
    )
  }
  
  function loading()
  {
    return (
      <>
        <span className='TextTitle'>Loading Company Information</span>
      </>
    )
  }
  
  return companyData ? loaded() : loading();
}

export default CompanyStockPage
