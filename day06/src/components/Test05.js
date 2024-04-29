import React, { useEffect, useReducer, useState } from 'react';
import axios from 'axios'
const initialState={
    dto:{},
    error:null,
    loading:true
}

const reducer=(state,action)=>{
    switch(action.type){
        case 'SUCCESS': return{
            dto:action.payload,
            error:null,
            loading:false
        }
        case 'ERROR':return{
            dto:{},
            error:'404에러 데이터를 가져오지 못했습니ㅏㄷ. ',
            loading:true
        }
        default : return state
    }
}
const Test05 = () => {
    const [text,setText]=useState('')
    const [search,setSearch]=useState('')

    const onSearch=()=>{
        setSearch(text)
    }
    
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/photos/'+text)
        .then(res=>dispatch({type:'SUCCESS',payload:res.data}))
        .catch(err=>dispatch({type:'ERROR'}))
    },[search])
    
    const [state,dispatch]=useReducer(reducer,initialState)
    return (
        <div>
            <h3>
                ID 입력 (1~5000) :<input type='text' value={text} onChange={(e)=>setText(e.target.value)}/>
                <button onClick={onSearch}>검색</button>
                
                
            </h3>
            <h2>
                {
                    state.dto && state.loading ? '로딩중':<img src={state.dto.thumbnailUrl}/>
                }
                </h2>
                <p>
                {
                    state.error ? state.error : null
                }
                </p>
        </div>
    );
};

export default Test05;