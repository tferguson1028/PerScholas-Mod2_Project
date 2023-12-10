import React from 'react'
import pages from '../models/pages';
import { icons } from '../models/assetPaths';
import Icon from './Icon';

function NavigationBar() {
  return ( 
    <div className="NavigationBar">
      <h1>Page Title</h1>
      <span className='NavButtonGroup'>
      { 
        Object.keys(pages).map(function(page, index) 
        { 
          return (
            <a className='NavButton' key={index} href={"/"+pages[page].path}>
              <div>
                <span className='Invert'>
                  <Icon iconPath={icons[pages[page].icon]} />
                </span>
                <span>
                  { pages[page].textContent }
                </span>
              </div>
              <div className='Underline'>
              </div>
            </a>);
        })
      }
      </span>
    </div>
  )
}

export default NavigationBar
