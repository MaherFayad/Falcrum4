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
      <div className='my-48'><p> </p></div>
      <Service />
      {/* <Solution />
      <Pricing/>
      <Faq /> */}
      <div className='my-48'><p> </p></div>
      <Blog/>
      <div className='my-48'><p> </p></div>
      <Solution />
      <div className='my-48'><p> </p></div>
      <Feedback/>
      <Interest />
    </div>
  )
}

export default Homepage
