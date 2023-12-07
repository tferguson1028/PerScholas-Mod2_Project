import React from 'react'

function Icon(props) 
{
  const { iconPath = "#", alt = "icon"} = props;
  return (
    <span className='Icon'>
      <img src={ iconPath } alt={alt} />
    </span>
  )
}

export default Icon
