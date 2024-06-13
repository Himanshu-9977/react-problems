import React, { useEffect, useState } from 'react'

const Six = () => {
    const [data, setdata] = useState(null)

    useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then((response) => response.json())
    .then((dt) => setdata(dt))

  },[])

  return (
    <div>
        {
            data? (
                <div>
                    <h1>Title: {data.title}</h1>
                    <h3>Body: {data.body}</h3>
                </div>
            ) : (
                <h2> Loading ...</h2>
            )
        }
    </div>
  )
}

export default Six
