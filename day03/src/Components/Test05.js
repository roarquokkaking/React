import React,{useState} from 'react';
import Name from './Name';
import Fruit from './Fruit';
import Output from './Output';

const Test05 = () => {
    const [name,setName]=useState('')
    const [fruit,setFruit]=useState('')

    const onName=(e)=>{
        const {value}=e.target
        setName(value)
    }
    
    const onFruit=(e)=>{
        const {value}=e.target
        setFruit(value)
    }
    return (
        <div>
            <Name name={name} onName={onName}/>
            <Fruit fruit={fruit} onFruit={onFruit}/>
            <Output name={name} fruit={fruit}/>
        </div>
    );
};

export default Test05;