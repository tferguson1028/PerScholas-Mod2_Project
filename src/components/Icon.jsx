import React from 'react'

function Icon({ iconPath }) {
  return (
    <div className='Icon'>
      <img src={ iconPath } alt="Start Search"/>
    </div>
  )
}

export default Icon