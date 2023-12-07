import React from 'react'
import Icon from './Icon';

function StockListItem(props) 
{
  const { companyTag, companyName, stockPrice, linkPath} = props;
  
  return (
    <a className='StockListItem' href={linkPath}>
      <button className='StockSearchItem' >
        <span className=''>{companyTag}</span>
        <span className=''>{companyName}</span>
        <span className=''>{stockPrice}</span>
        <Icon iconPath={""}/>
      </button>
    </a>
  )
}

export default StockListItem
