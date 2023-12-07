import React from 'react'
import Clickable from './interfaces/Clickable';
import Icon from './Icon';

function StockSearchItem(props) 
{
  const { companyTag, companyName, stockPrice, linkDispatch} = props;

  return (
    <Clickable dispatch={linkDispatch}>
      <div className='StockSearchItem'>
        <span className=''>{companyTag}</span>
        <span className=''>{companyName}</span>
        <span className=''>{stockPrice}</span>
        <Icon iconPath={""}/>
      </div>
    </Clickable>
  )
}

export default StockSearchItem