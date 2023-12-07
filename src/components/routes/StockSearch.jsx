import React, {useContext, useEffect, useState} from 'react'
import SearchBar from '../SearchBar'
import { APIRequestContext } from '../../contexts/APIRequestContext';
import { apiURLFunctions } from '../../models/apiVariables';
import StocksList from '../StocksList';

function StockSearch() 
{
  const pageLimit = 10;
  const { APIData, setAPIData, fetchAPIData } = useContext(APIRequestContext);
  
  useEffect(() => { console.log("Initial List"); doSearch(""); }, []);
  useEffect(() => { console.log(`Attempting to populate data`)}, [APIData]);
  
  async function doSearch(searchTerm)
  {
    let data;
    let retData = [];
    if(searchTerm === "" || typeof searchTerm === "undefined")
    {
      console.log(`searchTerm is empty. Fetching default list using term`);
      data = await fetchAPIData(apiURLFunctions.list(pageLimit))
      
      let index = Math.max(0, Math.floor(Math.random(data.length)-pageLimit), pageLimit);
      retData = [...data].splice(index, pageLimit);
    }else
    {
      console.log(`searchTerm set to "${searchTerm}". Fetching list using term`);
      data = await fetchAPIData(apiURLFunctions.nameSearch(searchTerm, pageLimit));
      retData = [...data].splice(0, pageLimit);
    }
    
    setAPIData(retData);
  }
  
  return (
    <>
      <div className='PageHeader'>
        <h1>Search Tradable Stocks</h1>
        <SearchBar dispatch={doSearch} />
      </div>
      <StocksList data={APIData} />
    </>
  )
}

export default StockSearch
