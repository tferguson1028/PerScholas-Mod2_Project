import React, {useContext, useEffect, useState} from 'react'
import SearchBar from '../SearchBar'
import { APIRequestContext } from '../../contexts/APIRequestContext';

function StockSearch() 
{
  const APIData = useContext(APIRequestContext);
  const [ searchTerm, setSearchTerm ] = useState("");
  useEffect(() => 
  {
    if(searchTerm === "")
      console.log(`searchTerm is empty. Fetching default list using term`);
    else
      console.log(`searchTerm set to "${searchTerm}". Fetching list using term`);
  }
  , [searchTerm]);
  
  function getListContent()
  {
    if (searchTerm !== "") 
    {
      return (
        <>
          <span>Search List</span>
          { /* Fetch the data from the search API request */ }
        </>
      )
    }else 
    {
      return (
        <>
          <span>Default List</span>
          { /* Fetch the data from the listings API request */}
        </>
      )
    }
  }
  
  return (
    <>
      <div className='PageHeader'>
        <h1>Search Tradable Stocks</h1>
        <SearchBar dispatch={setSearchTerm}/>
      </div>
      <div className='StockSearchList'>
        {getListContent()}
      </div>
    </>
  )
}

export default StockSearch