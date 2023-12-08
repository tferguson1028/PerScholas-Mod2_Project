import React from 'react'
import Banner from '../Banner'
import Carousel from '../interfaces/Carousel'

function HomePage() {
  return (
    <>
      <Banner />
      <div className='Header'>HomePage</div>
      <Carousel>
        <Banner>t1</Banner>
        <Banner>t2</Banner>
        <Banner>t3</Banner>
        <Banner>t4</Banner>
      </Carousel>
    </>
  )
}

export default HomePage
