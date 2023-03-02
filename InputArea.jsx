import React, { useState } from 'react'



const InputArea = (props) => {

    const[inputText,setInputText]=useState("")

    const handle =(e)=>{
     
    setInputText(e.target.value)
    

    }
const value =()=>{


  if(inputText !== ""){
    // props.addItems(inputText)

    // setInputText("")

  }

  props.addItems(inputText)

  setInputText("")

}

  return (
    <div className=''>
    
    <div  className='mt-2 ml-10'>
        <input className='px-1 border border-gray-700 rounded outline-none' type={"text"} value={inputText}  onChange={handle}/>
        <button disabled={inputText !== "" ?false:true}  className='px-3 ml-2 font-bold text-white bg-blue-700 rounded disabled:bg-blue-200' onClick={value}>Add</button>
        
    </div></div>
  )
}

export default InputArea
