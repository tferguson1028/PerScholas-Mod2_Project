import React from 'react'
import Icon from './Icon';

function IconButton(props)
{
  const { type = "button", iconPath = "#" } = props;
  return (
    <button className="IconButton" type={type}>
      <Icon iconPath={iconPath} />
    </button>
  )
}

export default IconButton