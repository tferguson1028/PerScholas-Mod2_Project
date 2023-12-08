import React, {useContext, useEffect, useState} from 'react'
import {AccountContext} from '../../contexts/AccountContext';
import {APIRequestContext} from '../../contexts/APIRequestContext';
import {apiURLFunctions} from '../../models/apiVariables';
import pages from '../../models/pages';

function CompanyStockPage() 
{
  const [ companySymbol, setCompanySymbol ] = useState();
  const [ companyData, setCompanyData ] = useState();
  const { fetchAPIData } = useContext(APIRequestContext);
  const { accountLoggedIn } = useContext(AccountContext);
  
  useEffect(() => {getCompanyPageRef();}, []);
  useEffect(() => {}, [companyData]);
  
  async function getCompanyPageRef()
  {
    let url = window.location.href;
    let refIndex = window.location.href.lastIndexOf("/");
    let currentCompany = url.substring(refIndex+1);
    
    console.log(currentCompany);
    
    setCompanySymbol(currentCompany);
    setCompanyData(await fetchAPIData(apiURLFunctions.companyProfile(currentCompany)));
    return currentCompany;
  }
  
  function addDataToStorage()
  {
    if(accountLoggedIn)
    {
      let stack = localStorage.getItem("accountCompanyStack");
      stack.push(companyData);
      localStorage.setItem("accountCompanyStack", [...stack]);
    }      
    else
    {
      // https://stackoverflow.com/questions/52229901/navigate-to-route-on-button-click
      //https://stackoverflow.com/questions/1368264/how-to-extract-the-hostname-portion-of-a-url-in-javascript
      let root = window.location.protocol + "//" + window.location.host;
      window.location.assign(`${root}/${pages.accountPage.path}`)
    }
  }
  
  function loaded()
  {
    if (Array(companyData).length == 0)
      return noCompanyError();
    else
      return (
        <>
          <div className='TextTitle'>Company Title</div>
          <header>
            <div className="CompanyLogo">Logo</div>
            <h2 className='CompanySymbol'>SYBL</h2>
            <h2 className='CompanyName'>Symbol</h2>
            <div className='WebsiteLink'>Website</div>
          </header>
          
          <div className='Graph'>Stock Graph</div>
          <section className='FinancialInfo'>
            <h1>Financial Information</h1>
            <span className='CurrentPrice'>Price w/ Currency</span>
            <span className='Range'>Range</span>
            <span className='Changes'>Recent Changes</span>
            <span className='Market Cap'>Market Cap</span>
          </section>
          <button onClick={addDataToStorage}>Add for analysis</button>
          
          <section className='CompanyInfo'>
            <h1>Company Information</h1>
            <span className='Industry'>Industry</span>
            <span className='Location'>Location</span>
            <span className=''></span>
            <span className=''></span>
            <p className='Description'>Description</p>
          </section>
        </>
    )
  }
  
  function noCompanyError()
  {
    return (
      <span className='TextTitle'>Company with symbol "{companySymbol}" not found.</span>
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
