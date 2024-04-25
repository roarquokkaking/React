import React,{useState} from 'react';
import Test07Input from './Test07Input';
import '../css/Test07.css';
import Test07Print from './Test07Print';
import Test07Ouput from './Test07Ouput';
const Test07Main = () => {

    const [dto,setDto]=useState({
        name:'',
        age:'',
        addr:'',
        phone:''
    })
    const [count,setCount]=useState(1)
    const onInput=(e)=>{
        const {name,value}=e.target
        setDto({
            ...dto,
            [name]:value
        })
    }
    const onNext=()=>{
        setCount(count+1)
    }
    const onPrevious=()=>{
        setCount(count-1)
    }
    return (
        <div className='wrap'>
            {
                count ===1 && <Test07Input dto={dto} onInput={onInput} onNext={onNext}/>
                
            }
            {
                count ===2 && <Test07Print dto={dto} onNext={onNext} onPrevious={onPrevious}/>

            }
            {
                count ===3 && <Test07Ouput dto={dto} onPrevious={onPrevious} />
            }
        </div>
    );
};

export default Test07Main;