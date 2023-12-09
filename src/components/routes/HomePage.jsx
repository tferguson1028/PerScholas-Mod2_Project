import React from 'react'
import Banner from '../Banner'
import Carousel from '../interfaces/Carousel'

function HomePage() {
  return (
    <>
      <Banner className="quop">
        <div className='Header'>HomePage</div>
        HomeBanner
      </Banner>
      <Carousel>
        <Banner>
          <h2>GridTest0_0</h2>
          <h2>GridTest0_1</h2>
          <h2>GridTest0_2</h2>
          <h2>GridTest0_3</h2>
          <h2>GridTest0_4</h2>
          <h2>GridTest0_5</h2>
        </Banner>
        <Banner>
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
