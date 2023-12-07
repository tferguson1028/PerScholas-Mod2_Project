import React from 'react'

function Icon(props) 
{
  const { iconPath = "#" } = props;
  return (
    <div className='Icon'>
      <img src={ iconPath } alt="Start Search"/>
    </div>
  )
}

export default Icon