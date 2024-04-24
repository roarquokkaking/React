import React from 'react';
import '../../css/style.css';
import CatItem from './CatItem';

const CatList = ({data}) => {
    return (
        <div>
            <ul className='list2'>
                {
                    data.map(item=>
                        <CatItem item={item}/> 
                    )
                }
            </ul>
        </div>
    );
};

export default CatList;