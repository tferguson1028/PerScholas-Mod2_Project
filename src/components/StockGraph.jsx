import React, {useState} from 'react';

function StockGraph(props) {

  const { companySymbol = "" } = props;
  const [ stockGraph, setStockGraph ] = useState();
  
  function loaded()
  {
    return  (
      <div>StockGraph</div>
    )
  }
  
  function loading()
  {
    return  (
      <div>Loading</div>
    )
  }
  
  return stockGraph ? loaded() : loading();
}

export default StockGraph;
