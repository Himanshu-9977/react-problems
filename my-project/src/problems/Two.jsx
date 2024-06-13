import React, { useState } from 'react'

const Two = () => {
    const [count, setCount] = useState(0)
  return (
    <>
    <h1 className='text-2xl text-center'>{count}</h1>
    <div className="flex justify-center mt-6 gap-6">
        <button onClick={()=>setCount(count+1)} className='bg-green-500 text-lg font-semibold px-4 py-2'>Increase</button>
        <button onClick={()=>setCount(count-1)} className='bg-red-500 text-lg font-semibold px-4 py-2'>Decrease</button>
    </div>
    </>
  )
}

export default Two