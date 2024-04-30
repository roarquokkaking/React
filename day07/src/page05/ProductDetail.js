import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import data from './data';
const ProductDetail = () => {
    const {id} =useParams()

    const navigate=useNavigate()
    
    return (
        <>
            {
                data.filter(item=>item.id===id).map(item=>{
                return (<div className='item'>
                    <h2>토심이의 상세페이지</h2>
                    <h3>제품명:{item.name} / 가격:{item.price}</h3>
                    <p><img src={item.url} /></p>
                    <p>제품 설명 :{item.description} </p>
                    <button onClick={()=>navigate('/')}>Home</button>
                    <button onClick={()=>navigate(-1)}>ProductList</button>
                    </div>)})
            }
            
        </>
    );
};

export default ProductDetail;