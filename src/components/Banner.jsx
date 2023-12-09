import React from 'react'

function Banner(props) {
  return (
    <div className={`Banner ${props.className ? props.className : ""}`.trim()}>{props.children}</div>
  )
}

export default Banner
