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
  
  function handleSubmit()
  {
    dispatch(searchTerm);
  }
  
  return (
    <div className="SearchBar" >
      <form action="submit" onSubmit={handleSubmit}>
        <input type="text" name="searchBar" onChange={handleChange}/>
        <input type="submit" value="">
          <Icon iconPath=""/>
        </input>
      </form>
    </div>
  )
}

export default SearchBar;