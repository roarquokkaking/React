import React from 'react';

const CatItem = ({item}) => {
    const {id,img,title} = item
    return (
        <li>
            <a>
                <div>
                    <img src={img}/>
                    <h3>{title}</h3>
                </div> 
            </a>
        </li>
    );
};

export default CatItem;