import React from 'react'
import Banner from '../Banner'
import Carousel from '../interfaces/Carousel'
import { images } from '../../models/assetPaths'

function HomePage() {
  return (
    <>
      <Banner className="quop">
        <div className='Header'>HomePage</div>
        HomeBanner
      </Banner>
      <Carousel>
        <Banner backgroundImage={images.stocks0}>
          <span className='Spacer'></span>
          <h1>Stock Project</h1>
          <span className='Spacer'></span>
          {/* <span className='Spacer'></span> */}
          {/* <span className='Spacer'></span> */}
          <p>Check out stock prices</p>
          <p>Practice investing</p>
          <p>Evaluate historical past gains and losses</p>
          {/* <span className='Spacer'></span> */}
          <button style={{gridRow: "4 / 6", gridColumn: "1 / 3"}}>Start Now</button>
        </Banner>
        <Banner backgroundImage={images.stocks1}>
          <h3>GridTest1_0</h3>
          <h3>GridTest1_1</h3>
          <h3>GridTest1_2</h3>
          <h3>GridTest1_3</h3>
          <h3>GridTest1_4</h3>
          <h3>GridTest1_5</h3>
        </Banner>
        <Banner>t3</Banner>
        <Banner>t4</Banner>
      </Carousel>
    </>
  )
}

export default HomePage
