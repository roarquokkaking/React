import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';

const WriteForm = () => {
    const [memberDTO,setMemberDTO] = useState({
        name:'',
        id:'',
        pwd:''
    })
    const [data,setData]=useState(JSON.parse(localStorage.getItem('memberData')) || [])
    const [memberData,setMemberData]=useState('')
    const navigate=useNavigate()
    const onWrite=()=>{

        document.getElementById('nameDiv').innerText=''
        document.getElementById('idDiv').innerText=''
        document.getElementById('pwdDiv').innerText=''

        if(memberDTO.name===''){
            document.getElementById('nameDiv').innerText='이름을 입력하세요'
        }else if(memberDTO.id===''){
            document.getElementById('idDiv').innerText='아이디을 입력하세요'
        }else if(memberDTO.pwd===''){
            document.getElementById('pwdDiv').innerText='비번을 입력하세요'
        }else{
            setMemberData([...data,memberDTO])
        }

    }
    useEffect(()=>{
        if(memberData.length>0){
        localStorage.setItem('memberData',JSON.stringify(memberData))
        alert('회원가입이 완료되었습니다.')
            navigate('/')
        }
    },[memberData])
    

    
    return (
        <div>
            <img src='https://cdn.pixabay.com/photo/2024/03/14/08/52/pug-8632718_1280.jpg' width={30} height={30} onClick={()=>navigate('/')}/>
            <table border="1">
		<tr>
			<th>이름</th>
			<td>
				<input type="text" value={memberDTO.name} onChange={(e)=>setMemberDTO({...memberDTO,name:e.target.value})}/>
				<div id="nameDiv"></div>
			</td>
		</tr>
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
				<button onClick={onWrite}>회원가입</button>
			</td>
		</tr>
	        </table>
        </div>
    );
};

export default WriteForm;