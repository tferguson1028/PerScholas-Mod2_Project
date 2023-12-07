import React, {useContext, useEffect, useState} from 'react'
import SearchBar from '../SearchBar'
import { APIRequestContext } from '../../contexts/APIRequestContext';

function StockSearch() 
{
  const APIData = useContext(APIRequestContext);
  const [ searchTerm, setSearchTerm ] = useState("");
  useEffect(() => 
  {
    
  }
  , [searchTerm]);

  return (
    <>
      <div className='PageHeader'>
        <h1>Search Tradable Stocks</h1>
        <SearchBar dispatch={setSearchTerm}/>
      </div>
      <div className='SearchList'>
        {
          
        }
      </div>
    </>
  )
}

export default StockSearch