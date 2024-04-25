import React from 'react';
import img01 from '../img/1.jpg';
import img02 from '../img/2.webp';
import img03 from '../img/3.webp';
import img04 from '../img/4.webp';
import img05 from '../img/5.webp';
import img06 from '../img/6.webp';


const Test09 = () => {
    return (
        <div>
            <img src={img01} alt='1' style={{width:'200px', height:'200px'}}/> &emsp;
            <img src={img02} alt='1' style={{width:'200px', height:'200px'}}/> &emsp;
            <img src={img03} alt='1' style={{width:'200px', height:'200px'}}/> &emsp;
            <img src={img04} alt='1' style={{width:'200px', height:'200px'}}/> &emsp;
        </div>
    );
};

export default Test09;
/*
src 안에 있는 이미지 파일 처리는 참조변수를 사용한다.
import 참조변수 from '이미지경로';
*/