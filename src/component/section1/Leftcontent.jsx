import React from 'react'
import Lefthead from './Lefthead'
import Togg from "./Togg";

const Leftcontent = () => {
  return (
    <div className='h-full flex flex-col justify-between w-1/3 text-black bg-white leading-relaxed'>
      <Lefthead />   
      <Togg />      
    </div>
  )
}

export default Leftcontent
