import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';


const MemberDetail = () => {
    const {memberId} = useParams()
    const css={
        border: '1px solid cyan',
        margin: 20,
        padding:'20px'
    }
    const [memberDTO,setMemberDTO] =useState({})

    const navigate = useNavigate()
    const onBack=()=>{
        navigate(-1)    
        // navigate('/')    
    }
    useEffect(()=>{
        axios.get(`https://koreanjson.com/users/${memberId}`)
            .then(res => setMemberDTO(res.data))
    },[])
    
    return (
      
        <div style={css}>
            <h2>MemberDetail Page :{memberDTO.id} </h2>
            <h4>{memberDTO.name} / {memberDTO.email} </h4>
            <button onClick={onBack}>뒤로</button>
        </div>
    
    );
};

export default MemberDetail;