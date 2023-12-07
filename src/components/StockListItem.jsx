import React from 'react'
import Clickable from './interfaces/Clickable';
import Icon from './Icon';

function StockListItem(props) 
{
  const { companyTag, companyName, stockPrice, linkPath} = props;

  return (
    <div>
    {/* // <Clickable> */}
      <h1>Section Test</h1>
      <div className='StockSearchItem'>
        <span className=''>{companyTag}</span>
        <span className=''>{companyName}</span>
        <span className=''>{stockPrice}</span>
        <Icon iconPath={""}/>
      </div>
    {/* // </Clickable> */}
    </div>
  )
}

export default StockListItem
