import React from 'react';

const Name = ({name,onName}) => {
    return (
        <div>
            이름을 입력하시오.
            <input type='text' value={name} onChange={onName}/>
        </div>
    );
};

export default Name;