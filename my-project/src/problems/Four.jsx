import React from 'react'

const Four = () => {
    const arr = ['Item1','Item2','Item3','Item4','Item5']
  return (
    <div>
        <ul>
            {arr.map((item,index) => {
                return <li key={index}>{item}</li>
            })}
        </ul>
    </div>
  )
}

export default Four