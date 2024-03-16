import About from 'src/common/module/About'
import React from 'react'



export const metadata = {
  title: 'About Us - Teaser',
  description: 'About Us',
  
}

const page = () => {
  return (
    <div className='mt-20 flex justify-center'>
      <About />
    </div>
  )
}

export default page
