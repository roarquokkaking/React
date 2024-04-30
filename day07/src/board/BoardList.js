import React, { useState } from 'react';
import { useNavigate } from 'react-router';

const BoardList = () => {
    const [data,setData]=useState(JSON.parse(localStorage.getItem('boardData'))||[])
    const navigate=useNavigate()
    return (
        <div>
            <img src='https://cdn.pixabay.com/photo/2024/03/14/08/52/pug-8632718_1280.jpg' width={30} height={30} onClick={()=>navigate('/')}/>
            <table border="1" frame="hsides" role="rows" >
		<tr>
			<th>제목</th>
			<th>내용</th>
		</tr>
        {
            data.map((item,index)=><tr key={index}>
                <th>{item.title}</th>
            <th>{item.content}</th>
            </tr>)
        }
        
		
	</table>
        </div>
    );
};

export default BoardList;