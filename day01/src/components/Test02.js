import React from 'react';

const Test02 = () => {
    //함수 영역 - 조건문, 제어문등 사용가능
    let title='신상명세서'
    const name='홍길동'
    const age=25
    const addr='서울'

    const css1={
        color: 'red',
        backgroundColor :'yellow',
        fontSize:'30pt',
        padding:20,
        margin: 10,
        border : '3px solid #000'
    }
    const css2={
        width:'400px',
        color:'white',
        backgroundColor:'hotpink',
        fontSize:'20pt',
        padding:15,
        margin:30
    }
    return (
        <>
            <h2>JSX 영역</h2>
            <h2 style={css1}>{title}</h2>
            <ul>
                <li style={css2}>이름:{name}</li>
                <li style={{backgroundColor:'greenyellow',padding:15,margin:'auto'}}>
                    나이:{age} {age>=19?'성인':'청소년'}
                </li>
                <li style={css2}>주소:{addr}</li>
            </ul>
        </>
    );
    
};

export default Test02;