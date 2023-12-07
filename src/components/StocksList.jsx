import React from 'react'
import pages from '../models/pages';
import StockListItem from './StockListItem';

function StocksList(props) 
{
  const { data } = props;
  
  function loaded(data)
  {
    console.log("Populating new list with data");
    console.log(data);
    return (
      <div className='StockList'>
        { 
          data.map((item, index) => 
          { 
            return (
              <StockListItem 
                key={index} 
                companyTag={item.symbol}
                companyName={item.name} 
                stockPrice={item.price} 
                linkPath={pages.stockSearchPage.path+`/${item.symbol}`}
              />
            ) 
          }) 
        }
      </div>
    )
  }
  
  function loading()
  {
    return (
      <span>Loading...</span>
    )
  }
  
  return (typeof data !== "undefined" || Array(data).length === 0) ? loaded(data) : loading(); 
}

export default StocksList
