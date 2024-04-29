import React, { useState } from 'react';
import Test04Sub from './Test04Sub';

const Test04 = () => {
    const [color,setColor]=useState('')
    const [food,setFood]=useState('')

    const onFood=(e)=>{
        setFood(e.target.value)
    }
    return (
        <div style={{margin:30}}>
            <h2>당신이 좋아하는 색은?</h2>
            <select size='5' style={{width:120}} onChange={(e)=>setColor(e.target.value)}>
                <option value='hotpink'>hotpink</option>
                <option value='magenta'>magenta</option>
                <option value='skyblue'>skyblue</option>
                <option value='tomato'>tomato</option>
            </select>
            <hr/>
            <h2>당신이 좋아하는 음식은 ?</h2>
            <div>
                <p>
                    <input type='radio' name='food' value='햄버거' onChange={onFood}/>
                    <label>햄버거</label>
                </p>
                <p>
                    <input type='radio' name='food' value='피자' onChange={onFood}/>
                    <label>피자</label>
                </p>
                <p>
                    <input type='radio' name='food' value='라면' onChange={onFood}/>
                    <label>라면</label>
                </p>
                <p>
                    <input type='radio' name='food' value='고기' onChange={onFood}/>
                    <label>고기</label>
                </p>
            </div>
            <Test04Sub color={color} food={food}/>
        </div>
    );
};

export default Test04;