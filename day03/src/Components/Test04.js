import React,{useState} from 'react';
import Animal from './Animal';
import Display from './Display';

const Test04 = () => {
    const [name, setName]=useState('')
    const onInputName =(e) =>{
        const {value} = e.target
        setName(value)
    }
    return (
        <div>
           <Animal name={name} onInputName={onInputName}/> 
           <br/><br/>
           <Display name={name}/>
        </div>
    );
};

export default Test04;