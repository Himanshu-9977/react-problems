import React, { useState } from 'react'

const Five = () => {
    const [isToggled, setIsToggled] = useState(false)
  return (
    <div>
        <input className='w-10 h-10' type="checkbox" onChange={()=>{setIsToggled(curr => !curr)}} />
        <p className='mt-6 text-3xl font-bold'>{isToggled? "ON" : "OFF"}</p>
        
    </div>
  )
}

export default Five