import React, { createContext, useState } from 'react';

export const ChangeColorContext=createContext()
const ChangeColorProvider = ({children}) => {
    const [color,setColor]=useState('hotpink')
    const onColor=(val)=>{
        setColor(val)
    }
    return (
        <ChangeColorContext.Provider value={{color,onColor}}>
            {children}
        </ChangeColorContext.Provider>
    );
};

export default ChangeColorProvider;