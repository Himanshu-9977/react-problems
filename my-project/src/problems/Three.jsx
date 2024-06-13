import React, { useState } from 'react'

const Three = () => {
    const [input, setInput] = useState('')
  return (
    <>
    <div>
         <input className='text-black w-[300px] h-[50px] px-6 text-lg' type="text" value={input} onChange={(e)=>{
        setInput(e.target.value)
      }} />
    </div>
    </>
  )
}

export default Three