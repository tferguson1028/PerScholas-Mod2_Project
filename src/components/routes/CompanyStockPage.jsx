import React, {useContext, useEffect, useState} from 'react'
import {AccountContext} from '../../contexts/AccountContext';
import {APIRequestContext} from '../../contexts/APIRequestContext';
import {apiURLFunctions} from '../../models/apiVariables';
import pages from '../../models/pages';
import StockGraph from '../StockGraph';

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
    const data = companyData[0]; // API returns array of length 1.
    if (Array(companyData).length == 0)
      return noCompanyError();
    else
      return (
        <>
          <div className='TextTitle'>{data.companyName}</div>
          <header className='StockHeader'>
            <div className='CompanyHead'>
              <div className="CompanyLogo">
                <img src={data.image} alt="#" />
              </div>
              <h2 className='CompanySymbol'>{data.symbol}</h2>
              <h2 className='CompanyName'>{data.companyName}</h2>
            </div>
            <div className='WebsiteLink'><a href={data.website}>{data.website}</a></div>
            <div className='StockSummary'>
              <span className='CurrentPrice'>
                <span className='title'>Current Price:</span>
                <span className='content'>{data.price} {data.currency}</span>
              </span>
              <span className='Changes'>
                <span className='title'>Recent Price Change:</span>
                <span className='content'>{data.changes}</span>
              </span>
            </div>
          </header>
          
          <StockGraph companySymbol={data.symbol} />
          
          <section className='FinancialInfo'>
            <h1>Financial Information</h1>
            <span className='CurrentPrice'>
              <span className='title'>Current Price</span>
              <span className='content'>{data.price} {data.currency}</span>
            </span>
            <span className='Range'>
              <span className='title'>Price Range</span>
              <span className='content'>{data.range}</span>
            </span>
            <span className='Changes'>
              <span className='title'>Recent Price Change</span>
              <span className='content'>{data.changes}</span>
            </span>
            <span className='Market Cap'>
              <span className='title'>Market Cap</span>
              <span className='content'>{data.mktCap} {data.currency}</span>
            </span>
          </section>
          <button onClick={addDataToStorage}>Add for analysis</button>
          
          <section className='CompanyInfo'>
            <h1>Company Information</h1>
            <span className='Industry'>
              <span className='title'>Industry</span>
              <span className='content'>{data.industry}</span>
            </span>
            <span className='Location'>
              <span className='title'>Location</span>
              <span className='content'>{data.city}, {data.state}. {data.country}</span>
            </span>
            <span className=''>
              <span className='title'>Employees</span>
              <span className='content'>{data.fullTimeEmployees}</span>
            </span>
            <span className=''>
              <span className='title'>Initial Public Offering Data</span>
              <span className='content'>{data.ipodate}</span>
            </span>
            <p className='Description'>{data.description}</p>
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
        <span className='TextTitle'>Loading Company Information...</span>
      </>
    )
  }
  
  return companyData ? loaded() : loading();
}

export default CompanyStockPage
