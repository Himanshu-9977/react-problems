import React, { useState } from 'react'
import { MdDelete } from "react-icons/md";

const Eight = () => {
    const [task, settask] = useState('')
    const [todos, settodos] = useState([])

    const addTodo = (e) => {
        if(task.trim()!== ''){
            settodos([...todos, task])
            settask('')
        }
    }

    const removeTodo = (idx) => {
        const updatedTodos = todos.filter((_,i) => i !== idx)
        settodos(updatedTodos)
    }

  return (
    <div>
        <div className='flex flex-col items-center justify-center gap-12'>
            <input className='bg-zinc-100 text-lg text-black w-[400px] h-[60px] rounded-[100rem] placeholder:text-black placeholder:text-lg px-6 py-2' type="text" placeholder='Enter Task' value={task} onChange={(e)=>settask(e.target.value)} />
            <div className='flex justify-center gap-6'>
                <button onClick={addTodo} className='bg-green-500 text-lg px-6 py-3 rounded-[100rem]'>Add task</button>
            </div>
            <ul className='flex flex-col items-center justify-center gap-4'>

                {
                    todos.map((item, idx)=>{
                        return <li className='flex w-[50vw] px-4 justify-between items-center' key={idx}>{item} <button className='bg-red-500 text-lg p-4 rounded-full' onClick={()=>removeTodo(idx)}><MdDelete /></button></li>
                    })
                }
                

            </ul>
        </div>
    </div>
  )
}

export default Eight