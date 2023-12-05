import React from 'react'
import pages from '../models/pages';

function NavigationBar() {
  return ( 
    <div className="NavigationBar">
      { 
        Object.keys(pages).map(function(page, index) 
        { 
          return (<a key={index} href={pages[page].path}>{ pages[page].textContent }</a>);
        })
      }
    </div>
  )
}

export default NavigationBar