import React, { useState } from 'react';

const Nine = () => {
    const [backgroundColor, setBackgroundColor] = useState('white');
    const [index, setIndex] = useState(0);
    const arr = ['white', 'blue', 'green', 'red', 'gray'];

    const handleClick = () => {
        setBackgroundColor(arr[index]);
        setIndex(index === arr.length - 1 ? 0 : index + 1);
    };

    return (
        <div className='w-full h-screen absolute top-0 left-0' style={{ backgroundColor }}>
            <button
                className='px-6 py-2 rounded-[100rem] bg-zinc-600 text-white absolute bottom-10 left-1/2 -translate-x-1/2'
                onClick={handleClick}
            >
                Change color
            </button>
        </div>
    );
};

export default Nine;
