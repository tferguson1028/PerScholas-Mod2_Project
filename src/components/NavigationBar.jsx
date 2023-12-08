import React from 'react'
import pages from '../models/pages';

function NavigationBar() {
  return ( 
    <div className="NavigationBar">
      <h1>Page Title</h1>
      <span>
      { 
        Object.keys(pages).map(function(page, index) 
        { 
          return (<a key={index} href={"/"+pages[page].path}>{ pages[page].textContent }</a>);
        })
      }
      </span>
    </div>
  )
}

export default NavigationBar
