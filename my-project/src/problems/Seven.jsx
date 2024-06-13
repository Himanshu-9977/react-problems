import React, { useEffect, useState } from 'react'

const Seven = () => {
    const [time, settime] = useState(60)
    useEffect(()=>{
        if(time>0){
            const timer = setTimeout(()=>settime(time-1), 1000)
            return ()=> clearTimeout(timer)
        }
    },[time])
  return (
    <div>
        <h1>Time Left: {time}</h1>
    </div>
  )
}

export default Seven