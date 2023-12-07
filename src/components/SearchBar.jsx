import React, {useState} from 'react';
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
    <div className="SearchBar" >
      <form action="submit" onSubmit={handleSubmit}>
        <input type="text" name="searchBar" onChange={handleChange}/>
        <IconButton type="submit" iconPath="#" />
      </form>
    </div>
  )
}

export default SearchBar;