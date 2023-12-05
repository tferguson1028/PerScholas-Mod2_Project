import React from 'react'

function NavigationBar(props) {
  return ( 
    <div className="NavigationBar">
      { props.pages.map((page, index) => { return (<span key={index}>{page}</span>);})}
    </div>
  )
}

export default NavigationBar