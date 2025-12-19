import React from 'react'
import Rightcard from './Rightcard'

const Rightcontent = (props) => {
  return (
    <div className='h-full flex flex-nowrap gap-4 w-3/5 p-4'>
      <Rightcard 
        img={props.user[0]?.img} 
        tag={props.user[0]?.tag}
        color={props.user[0]?.color}
        num={props.user[0]?.num}
      />
      <Rightcard 
        img={props.user[1]?.img} 
        tag={props.user[1]?.tag}
        color={props.user[1]?.color}
        num={props.user[1]?.num}
      />
      <Rightcard 
        img={props.user[2]?.img} 
        tag={props.user[2]?.tag}
        color={props.user[2]?.color}
        num={props.user[2]?.num}
      />
    </div>
  )
}

export default Rightcontent
