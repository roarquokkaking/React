import React, { useMemo, useState } from 'react';

const user = [
    {id:1,name:'홍길동'},
    {id:2,name:'김수혁'},
    {id:3,name:'cat'},
    {id:4,name:'DAUM'},
    {id:5,name:'김수혁'},
    {id:6,name:'daum'},
    {id:7,name:'마동석'},
    {id:8,name:'naver'},
    {id:9,name:'이제훈'},
    {id:10,name:'NAVER'}
]

const Test05 = () => {
    const [data,setDdata]=useState(user)
    const [text,setText]=useState('')
    const [search,setSearch]=useState('')
    const onSearch=()=>{
        setSearch(text)
    }

    // const onSearch=()=>{
    //     setDdata(user.filter(item=>item.name.toLowerCase().indexOf(text.toLowerCase())!==-1)
    //     )
    // }

    //검색버튼 -useMemo

    useMemo(()=>{
        return setDdata(user.filter(item=>item.name.toLowerCase().indexOf(text.toLowerCase())!==-1))
    },[search])
    
    return (
        <div>
            <input type='text' value={text} onChange={(e)=>setText(e.target.value)}/>
            <button onClick={onSearch}>검색</button>
            <ul>
                {
                    data.map(item=> <li key={item.id}> {item.id} / {item.name}</li>)
                }
            </ul>
        </div>
    );
};

export default Test05;