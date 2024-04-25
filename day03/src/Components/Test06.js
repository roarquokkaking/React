import React,{useState,useRef} from 'react';

const Test06 = () => {
    // const [name,setName]=useState('홍길동')
    // const [id,setId]=useState('hong')
    // const [pwd,setPwd]=useState('111')
    const [dto,setDto]=useState({
        name:'홍길동',
        id:'hong',
        pwd:'111'
    })
    const { name , id,pwd} =dto
    const onInput=(e)=>{
        const {name,value} = e.target

        setDto({//먼저 객체를 복사하고 원하는 값만 수정한다 .
            ...dto,[name]:value
        })


    }

    const onReset=()=>{
        setDto({
            name:'',
            id:'',
            pwd:''
        })
        nameRef.current.focus()
    }
    const nameRef =useRef()

    return (
        <div>
            <table border='1' cellPadding='5' cellSpacing='0'>
                <tr>
                    <th width='100'>이름</th>
                    <td>
                        <input type='text' name='name' value={name} onChange={onInput} ref={nameRef}/>
                    </td>
                </tr>
                <tr>
                    <th width='100'>아이디</th>
                    <td>
                        <input type='text' name='id' value={id} onChange={onInput} />
                    </td>
                </tr>
                <tr>
                    <th width='100'>패스워드</th>
                    <td>
                        <input type='password' name='pwd' value={pwd} onChange={onInput} />
                    </td>
                </tr>
                <tr>
                    <td colSpan='2' align='center'>
                        <button onClick={onReset}>초기화</button>
                    </td>
                </tr>
            </table>
            <hr/>
            <h3>이름:{name}</h3>
            <h3>아이디:{id}</h3>
            <h3>비밀번호:{pwd}</h3>
        </div>
    );
};

export default Test06;