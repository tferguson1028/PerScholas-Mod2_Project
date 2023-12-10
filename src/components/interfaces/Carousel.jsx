import React, {useEffect, useState} from 'react'
import {images} from '../../models/assetPaths';
import Icon from '../Icon'

function Carousel(props) 
{
  const numChildren = props.children.length;
  const [ rootElement, setRootElement ] = useState();
  const [ currentChild, setCurrentChild ] = useState(0);
  
  // useEffect(() => {}, [currentChild]);
  
  function loopNumber(number, max)
  {
    return (number + max)%max;
  }
  
  function handleClick(forward)
  {
    let val = loopNumber(currentChild + (forward ? 1 : -1), numChildren) || 0;
    setCurrentChild(val);
    
    console.log(rootElement);
    let carouselItems = rootElement.children[0];
    let rootWidth = rootElement.getBoundingClientRect().width;

    carouselItems.style.transform = `translate(${(forward ? 1 : -1)*rootWidth}px, 0)`;
    carouselItems.style.transition = `0s`;
       
    setTimeout(() => {
      carouselItems.style.transform = `translate(0, 0)`;
      carouselItems.style.transition = `0.7s`;
    }, 100);
  }
  
  return (
    <section className='Carousel Carousel_Selection_0' onLoad={(event) => { 
      console.log("LAODED"); 
      setRootElement(event.currentTarget); 
      event.currentTarget.style.height = `${event.currentTarget.children[0].children[1].getBoundingClientRect().height}px`;
      }}
    >
      <div className='CarouselItems'>
        <div className='CarouselItem_Left'>{props.children[loopNumber(currentChild-1, numChildren)]}</div>
        <div className='CarouselItem_Center'>{props.children[currentChild]}</div>
        <div className='CarouselItem_Right'>{props.children[loopNumber(currentChild+1, numChildren)]}</div>
      </div>
      <div className='CarouselButtons'>
        <button className='' onClick={() => handleClick(false)}><Icon iconPath = {"#"} alt="Cycle Left"/></button>
        <button className='' onClick={() => handleClick(true)}><Icon iconPath = {"#"} alt="Cycle Right"/></button>
      </div>
      {/* This is needed so onLoad fires https://www.reddit.com/r/learnreactjs/comments/gv24ae/onload_event_not_firing_on_conditional_render/*/}
      <img src={images.stocks0} alt="" style={{display: "none"}}/> 
    </section>
  )
}

export default Carousel
