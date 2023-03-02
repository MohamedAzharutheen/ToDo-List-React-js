import React from 'react'
import {AiTwotoneDelete} from "react-icons/ai"

function TodoItems(props) {
  return (
    <div className='flex mt-2 ml-10 '>
      <li className='mt-1 font-bold tracking-wider list-disc first-letter:uppercase'>{props.text}</li>
      <button className='ml-auto'onClick={()=>props.deleteitem(props.id)} ><AiTwotoneDelete className='fill-red-600' /></button>
     
    </div>
  )
}

export default TodoItems
