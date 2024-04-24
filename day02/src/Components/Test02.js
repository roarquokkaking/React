import React from 'react';

const Test02 = () => {

    const title='신상명세서'
    const arr = ['홍길동','코난','둘리','라이언','네오']
    const data = [
        {id:1, name:'홍길동'},
        {id:2, name:'코난'},
        {id:3, name:'둘리'},
        {id:4, name:'라이언'},
        {id:5, name:'네오'}
    ]
    return (
        <div>
            <h2>{title}</h2>
            <ul style={{border: '1px solid red'}}>
                { //map 을 사용할때는 반드시 key 작성해야한다 .
                    arr.map((item,index)=>{
                        return <li key={index}>{index}:{item}</li>
                    })
                }
            </ul>
            <hr/>
            <ul style={{border: '1px solid red'}}>
                {
                    data.map(item =>
                         <li key={item.id}>{item.id}:{item.name}</li>
                    )
                }
            </ul>
        </div>
    );
};

export default Test02;