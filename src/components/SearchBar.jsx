import React, {useState} from 'react';
import Icon from './Icon';

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
    <div className="SearchBar" >
      <form action="submit" onSubmit={handleSubmit}>
        <input type="text" name="searchBar" onChange={handleChange}/>
        <button type="submit">
          <Icon iconPath=""/>
        </button>
      </form>
    </div>
  )
}

export default SearchBar;