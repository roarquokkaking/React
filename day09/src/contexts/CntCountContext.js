import React, { createContext, useState } from 'react';

export const CntCountContext=createContext()
const CntCountProvider = ({children}) => {
    const [count,setCount]=useState(0)

    const increment = (val) => {

        setCount(count+val)

    }
    const decrement = (val) => {

        setCount(count-val)

    }
    return (
        <CntCountContext.Provider value={{count,increment,decrement}}>
            {children}
        </CntCountContext.Provider>
    );
};

export default CntCountProvider;