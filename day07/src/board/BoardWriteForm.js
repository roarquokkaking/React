import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';

const BoardWriteForm = () => {
    const [boardDTO,setBoardDTO]=useState({
        title:'',
        content:''
    })
    const navigate = useNavigate()
    const [data,setData]=useState(JSON.parse(localStorage.getItem('boardData')) || [])
    const [boardData,setBoardData]=useState('')
    const onBoardWrite=()=>{

        setBoardData([...data,boardDTO])
        
    }
    useEffect(()=>{
        if(boardData.length>0){
            localStorage.setItem('boardData',JSON.stringify(boardData))
            alert('글 등록 완료~')
            navigate('/')
        }
    },[boardData])
    
    return (
        <div>
            <img src='https://cdn.pixabay.com/photo/2024/03/14/08/52/pug-8632718_1280.jpg' width={30} height={30} onClick={()=>navigate('/')}/>
            <table border="1">
		<tr>
			<th>제목</th>
			<td><input type="text" value={boardDTO.title} size="35" onChange={(e)=>setBoardDTO({...boardDTO,title:e.target.value})}/></td>
		</tr>
		<tr>
			<td colspan="2">
				<textarea name="imageContent" rows="10" cols="50" onChange={(e)=>setBoardDTO({...boardDTO,content:e.target.value})}>{boardDTO.content}</textarea>
			</td>
		</tr>
        <tr>
			<td colspan="2" align="center">
				<button onClick={onBoardWrite}>글쓰기</button>
			</td>
		</tr>
        </table>
        </div>
    );
};

export default BoardWriteForm;