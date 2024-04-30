import React from 'react';
import data from './data';
import {  useNavigate } from 'react-router';
const ProductList = () => {

    const navigate =useNavigate()

    return (
        <div className='products'>
            <h2>토심이의 일상리스트</h2>
            <div>
                {
                    data.map(item=><article key={item.id}>
                        <h3>{item.name}</h3>
                        <p>
                            <img src={item.url} alt={item.name} onClick={()=>navigate('/productList/'+item.id)}/>
                        </p>
                    </article>)
                }
            </div>
        </div>
    );
};

export default ProductList;