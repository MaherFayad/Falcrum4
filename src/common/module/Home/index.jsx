import React from 'react'
import Hero from '../Hero'
import Service from '../Service'
import Solution from '../Solution'
import Faq from '../Faq'
import Blog from '../Blog'
import Feedback from '../Feedback'
import Feature from '../Feature/Feature'
import Pricing from '../Pricing/Pricing'
import Interest from '../EndSection/Interest'

const Homepage = () => {
  return (
    <div>
      <Hero />
      <div className='my-48'><p> </p></div>
      <Feature />
      <div className='lg:my-48 md:my-30 sm:my-20 my-10'><p> </p></div>
      <Service className='!pb-0' />
      {/* <Solution />
      <Pricing/>
    <Faq /> */}
      <div className='lg:my-48 md:my-28 sm:my-18 my-8'><p> </p></div>
      <Blog className='!pb-0' />
      <div className='lg:my-48 md:my-28 sm:my-18 my-8'><p> </p></div>
      <Solution />
      <div className='lg:my-48 md:my-30 sm:my-20 my-10'><p> </p></div>
      <Feedback />
      <Interest />
    </div>
  )
}

export default Homepage
