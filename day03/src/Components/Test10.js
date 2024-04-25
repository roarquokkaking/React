import React,{useState,useRef} from 'react';

const Test10 = () => {
    const [data,setData]= useState([])
    const nameRef =useRef()
    const [dto,setDto]= useState({
        name:'',
        age:''
    })
    const { name ,age}=dto

    const onInput=(e)=>{
        const{name,value}=e.target

        setDto({
            ...dto,
            [name]:value
        })
    }
    
    const onAdd=(e)=>{
        //브라우저의 고유의 동작을 중단시키는 역할
        e.preventDefault()
        if(!name ||!age) return
        setData([...data,
            {
                name:name,
                age:age
            }
        ]) 
        setDto({
            name:'',
            age:''
        })    
        nameRef.current.focus()
     }
    return (
        <div>
            <form onSubmit={onAdd}>
                이름 : <input type='text' name='name' value={name} onChange={onInput} ref={nameRef}/>
                <br/>
                나이 : <input type='text' name='age' value={age} onChange={onInput}/>
                <br/>
                <button type='submit'>추가</button>
            </form>
            <hr/>
            <ul>
            {
                data.map((item,index)=>
                    <li key={index} > {item.name}/{item.age}</li> 
                )
            }
            </ul>
        </div>
    );
};

export default Test10;