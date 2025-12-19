import React from 'react'

const Rightcard = ({ img, tag, color, num }) => {
  return (
    <div className='h-full w-70 bg-black rounded-2xl relative overflow-hidden text-white'>
      <img className='h-full w-full object-cover' src={img} alt='none' />
      <div className="top-0 left-0 h-full w-full p-8  absolute flex flex-col justify-between">
        <h2 style={{ backgroundColor: color }} className='font-bold rounded-full h-12 w-12 justify-center items-center flex'>{num}</h2>
        <p className='mt-28 font-bold '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque delectus mollitia excepturi?</p>
        <div className='flex justify-between items-center'>
          <button className='bg-blue-500 px-4 py-2 rounded-full font-normal'>{tag}</button>
          <button><i className="bg-blue-500 px-4 py-2 rounded-full font-normal text-3xl ri-arrow-right-fill"></i></button>
        </div>
      </div>
    </div>
    
  )
}

export default Rightcard