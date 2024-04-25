import React from 'react';

const Fruit = ({fruit,onFruit}) => {
    return (
        <div>
            과일명을 입력하시오.
            <input type='text' value={fruit} onChange={onFruit}/>
        </div>
    );
};

export default Fruit;