import React,{useState} from 'react';
import '../css/Test03.css';
import Test03Modal from './Test03Modal';

const Test03 = () => {
    const [open,isOpen]= useState(false)
    const onOpen=()=>{
        isOpen(true)
    }
    const onClose=()=>{
        isOpen(false)
    } //상태변수와 함수는 같은 곳에 위치하여야 한다.

    return (
        <div>
            <button className='button' onClick={onOpen}>팝업창</button>
            {
                open&&<Test03Modal onClose={onClose}/>
            }
            
        </div>
    );
};

export default Test03;