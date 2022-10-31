import React, { useState } from 'react';

const useContador = () => {
    const [count, setCount] = useState(0);

    const up = () =>{
        setCount(count+1)
    }
    const up10 = () =>{
        setCount(count+10)
    }

    const down = () =>{
        setCount(count-1)
    }

    const reset = () =>{
        setCount(0)
    }

    return [count, up, up10, down, reset]
    
}

export default useContador