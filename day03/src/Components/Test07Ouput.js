import React from 'react';

const Test07Ouput = ({dto,onPrevious}) => {
    const {name,age,addr,phone}=dto
    return (
        <div>
            <h1>{name}님 설문조사 감사합니다.</h1>
            <p><button onClick={onPrevious}>이전</button></p>
        </div>
    );
};

export default Test07Ouput;