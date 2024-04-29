import React, { useMemo } from 'react';

const getColor =(color)=>{
    console.log('getColor')

    switch(color){
        case 'hotpink' :
            return '진분홍'
        case 'magenta' :
            return '보라'
        case 'skyblue' :
            return '히늘'
        case 'tomato' :
            return '토마토'
    }
}
const getFood =(food)=>{
    console.log('getFood')

    switch(food){
        case '햄버거' :
            return '인스턴트'
        case '피자' :
            return '밀가루'
        case '라면' :
            return '면'
        case '고기' :
            return '소고기'
    }
}
const Test04Sub = ({color,food}) => {
    //실행하자마자 또는 color 의 값을 바꾸거나 food 의 값을 바꾸면 log 가 모두 찍힌다 .
    // const colorInfo = getColor(color)
    // const foodInfo = getFood(food)
        const colorInfo = useMemo(()=>{return getColor(color)},[color])
        const foodInfo = useMemo(()=>{return getFood(food)},[food])
    //해결방법
    //useMemo를 사용하면
    //color를 바꾸면 getColor 로그만 찍히고 food 를 바꾸면 getFood만 찍힌다 . 
    return (
        <div>
            <h3>선택한 색 : {color}</h3>
            <h4>당신은 { colorInfo }을 좋아하는군요 ㅎ ㅎ !</h4>
            <h3>선택한 음식 : {food}</h3>
            <h4>당신은 { foodInfo }을 좋아하는군요 ㅎ ㅎ !</h4>
        </div>
    );
};

export default Test04Sub;