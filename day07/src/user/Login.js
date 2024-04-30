import React, { useState } from 'react';
import { Navigate, useNavigate } from 'react-router';

const Login = () => {
    const [memberDTO,setMemberDTO] = useState({
        name:'',
        id:'',
        pwd:''
    })

    const [data,setData]=useState(JSON.parse(localStorage.getItem('memberData'))||[])
    const navigate = useNavigate()
    const onLogin=()=>{
        document.getElementById('idDiv').innerText=''
        document.getElementById('pwdDiv').innerText=''

         if(memberDTO.id===''){
            document.getElementById('idDiv').innerText='아이디을 입력하세요'
        }else if(memberDTO.pwd===''){
            document.getElementById('pwdDiv').innerText='비번을 입력하세요'
        }else{
            const userData=data.find(item=>item.id===memberDTO.id)
            memberDTO.pwd===userData.pwd?loginsuccess(userData.name):alert('아이디 또는 비밀번호가 맞지않습니다.')
        }
    }
    const loginsuccess=(name)=>{
        alert(`${name}님 반가워요`)
        navigate('/')
    }
    return (
        <div>
            <img src='https://cdn.pixabay.com/photo/2024/03/14/08/52/pug-8632718_1280.jpg' width={30} height={30} onClick={()=>navigate('/')}/>
             <table border="1">
		<tr>
			<th>아이디</th>
			<td>
				<input type="text" value={memberDTO.id} onChange={(e)=>setMemberDTO({...memberDTO,id:e.target.value})}/>
				<div id="idDiv"></div>
			</td>
		</tr>
		<tr>
			<th>비밀번호</th>
			<td>
				<input type="password" value={memberDTO.pwd} onChange={(e)=>setMemberDTO({...memberDTO,pwd:e.target.value})}/>
				<div id="pwdDiv"></div>
			</td>
		</tr>
		<tr>
			<td colspan="2" align="center">
				<button onClick={onLogin}>로그인</button>
			</td>
		</tr>
	        </table>
        </div>
    );
};

export default Login;