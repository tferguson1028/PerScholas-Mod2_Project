import React, {useEffect, useState} from 'react'
import Icon from '../Icon'

function Carousel(props) 
{
  const [ currentChild, setCurrentChild ] = useState(0);
  useEffect(() => {}, [currentChild]);
  
  function handleClick(forward)
  {
    let val = (currentChild + (forward ? 1 : -1) + props.children.length)%props.children.length || 0;
    setCurrentChild(val);
  }
  
  return (
    <div className='Carousel'>
      <div className='CarouselItem'>{props.children[currentChild]}</div>
      <button className='' onClick={() => handleClick(false)}><Icon iconPath = {"#"} alt="Cycle Left"/></button>
      <button className='' onClick={() => handleClick(true)}><Icon iconPath = {"#"} alt="Cycle Right"/></button>
    </div>
  )
}

export default Carousel
