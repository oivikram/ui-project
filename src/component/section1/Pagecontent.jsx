import React from 'react'
import Leftcontent from './Leftcontent'
import Rightcontent from './Rightcontent'

const Pagecontent = (props) => {
  return (
    <div className='flex items-center py-4 px-4 h-4/5 justify-between mt-15'>
      <Leftcontent />
      <Rightcontent user={props.user}/>
    </div>
  )
}

export default Pagecontent
