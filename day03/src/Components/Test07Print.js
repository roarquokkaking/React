import React from 'react';

const Test07Print = ({dto,onNext,onPrevious}) => {
    const {name,age,addr,phone}=dto
    return (
        <>
            <ul>
                <li>이름:<em>{name}</em></li>
                <li>나이:<em>{age}</em></li>
                <li>주소:<em>{addr}</em></li>
                <li>핸드폰:<em>{phone}</em></li>
                <p>
                    <button onClick={onPrevious}>이전</button>
                    <button onClick={onNext}>다음</button>
                </p>
            </ul>
        </>
    );
};

export default Test07Print;