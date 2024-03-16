import SolutionPage from 'src/common/module/Solution/component/SolutionPage'
import React from 'react'

export const metadata = {
  title: 'Solution - Teaser',
  description: 'Solution',
  
}

const page = () => {
  return (
    <div className='mt-20 flex justify-center'>
      <SolutionPage />
    </div>
  )
}

export default page
