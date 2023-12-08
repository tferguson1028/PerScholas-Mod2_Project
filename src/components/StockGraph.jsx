import React, {useContext, useEffect, useState} from 'react';
import {APIRequestContext} from '../contexts/APIRequestContext';
import {apiURLFunctions} from '../models/apiVariables';
import {generateGraph as generateGraphURL} from '../models/graphAPIVariables';

function StockGraph(props) 
{
  const historyLimit = 100;
  const historyInterval = 5;
  const { companySymbol = "" } = props;
  const [ stockGraph, setStockGraph ] = useState();
  const [ stockData, setStockData ] = useState();
  const { fetchAPIData } = useContext(APIRequestContext);
  
  useEffect(() => { fetchGraphData(); }, []);
  useEffect(() => { generateGraphData(); }, [stockData]);
  
  async function fetchGraphData()
  {
    setStockData(await fetchAPIData(apiURLFunctions.companyStockHistory(companySymbol)));
  }
  
  async function generateGraphData()
  {
    const stockHistoryArr = stockData["historical"];
    const data = [];
    for(let i = 0; i < historyLimit; i++)
    {
      let time = stockHistoryArr[i*historyInterval]["label"];
      let price = stockHistoryArr[i*historyInterval]["close"];
      
      data.push({ label: time, point: price });
    }
    console.log(data);
    setStockGraph(generateGraphURL(data));
  }
  
  function loaded()
  {
    console.log(stockGraph);
    return  (
      <div className='StockGraph'>
        <img src={stockGraph} alt="" />  
      </div>
    )
  }
  
  function loading()
  {
    return  (
      <div className='StockGraph'>Loading</div>
    )
  }
  
  return stockGraph ? loaded() : loading();
}

export default StockGraph;
