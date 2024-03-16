import ServicePage from 'src/common/module/Service/component/ServicePage'
import React from 'react'


export const metadata = {
  title: 'Services - Teaser',
  description: 'Services',
  
}

const page = () => {
  return (
    <div className='mt-20 flex justify-center'>
      <ServicePage />
    </div>
  )
}

export default page
