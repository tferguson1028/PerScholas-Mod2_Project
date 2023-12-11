import React, {useState} from 'react';
import {icons} from '../models/assetPaths';
import Icon from './Icon';
import IconButton from './IconButton';

function SearchBar(props) 
{
  const { dispatch = () => {} } = props;
  const [ searchTerm, setSearchTerm ] = useState("");
  
  function handleChange(event)
  {
    setSearchTerm(event.target.value);
  }
  
  function handleSubmit(event)
  {
    event.preventDefault();
    console.log(`Initiating search with param: "${searchTerm}"`);
    dispatch(searchTerm);
  }
  
  return (
      <form className="SearchBar" action="submit" onSubmit={handleSubmit}>
        <input type="text" name="searchBar" onChange={handleChange}/>
        <IconButton type="submit" iconPath={icons.search} />
      </form>
  )
}

export default SearchBar;
