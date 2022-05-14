import React, {useState} from 'react';


const useCustomHook = (initialValue) =>{
    const [value, setValue] = useState(initialValue);

    return {
        [
            value,
            onChange:(e)=>{setValue(e.target.value)}
        ],
        ()=>{setValue(initialValue)}
    }

}

export default useCustomHook