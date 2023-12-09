import React from 'react'

function Banner(props) 
{
  const { className = "", backgroundImage = ""} = props;
  return (
    <div 
      className={`Banner ${className ? className : ""}`.trim()}
      style={{backgroundImage: `url(${backgroundImage}`}}
    >  
      {props.children}
    </div>
  )
}

export default Banner
