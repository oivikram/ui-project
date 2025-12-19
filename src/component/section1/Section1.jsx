import React from 'react'
import Navbar from './Navbar'
import Pagecontent from './Pagecontent'

const Section1 = (props) => {
  return (
    <div className='h-screen w-full bg-white text-2xl'>
      <Navbar />
      <Pagecontent user={props.user} />
    </div>
  )
}

export default Section1
