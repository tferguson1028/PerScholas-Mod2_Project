import React from 'react'
import Banner from '../Banner'
import Carousel from '../interfaces/Carousel'
import { images } from '../../models/assetPaths'

function HomePage() {
  return (
    <>
      <Carousel>
        <Banner backgroundImage={images.stocks0}>
          <h1 style={{gridRow: "1 / 2", gridColumn: "1 / 3"}}>Stock History Analysis</h1>
          {/* <span className='Spacer'></span> */}
          {/* <span className='Spacer'></span> */}
          {/* <span className='Spacer'></span> */}
          <p style={{gridColumn: "1 / 4"}}>Check out stock prices</p>
          <p style={{gridColumn: "1 / 4"}}>Practice investing</p>
          <p style={{gridColumn: "1 / 4"}}>Evaluate historical past gains and losses</p>
          {/* <span className='Spacer'></span> */}
          <button style={{gridRow: "5 / 6", gridColumn: "2 / 4"}}>Start Now</button>
        </Banner>
        <Banner backgroundImage={images.stocks1}>
          <h3>GridTest1_0</h3>
          <h3>GridTest1_1</h3>
          <h3>GridTest1_2</h3>
          <h3>GridTest1_3</h3>
          <h3>GridTest1_4</h3>
          <h3>GridTest1_5</h3>
        </Banner>
        <Banner backgroundImage={images.stocks2}>t3</Banner>
        <Banner backgroundImage={images.stocks3}>t4</Banner>
      </Carousel>
      <div>
        <h3>Service Info</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil reiciendis nulla dolorum dolores ex impedit, animi eligendi voluptatem at asperiores sit voluptate? Nulla ducimus ullam molestiae consequatur, aperiam beatae eum.</p>
      </div>
      <Banner>
        <div className='Header'>Banner 2</div>
        Banner Content
      </Banner>
      <div>
        <h3>News</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil reiciendis nulla dolorum dolores ex impedit, animi eligendi voluptatem at asperiores sit voluptate? Nulla ducimus ullam molestiae consequatur, aperiam beatae eum.</p>
      </div>
    </>
  )
}

export default HomePage
