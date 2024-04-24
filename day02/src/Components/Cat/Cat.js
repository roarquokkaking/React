import React,{useState} from 'react';
import '../../css/reset.css';
import '../../css/style.css';
import CatList from './CatList';
import dataList from './CatData';


const Cat = () => {
    const [data,setData]= useState(dataList)
    return (
        <>
            <section className='business'>
                <div className='inner'>
                    <h2>최교슌</h2>
                    <p>교슌교</p>
                    <CatList data={data}/>
                </div>
            </section>   
        </>
    );
};

export default Cat;