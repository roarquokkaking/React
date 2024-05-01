import React, { useContext } from 'react';
import { CountContext } from '../contexts/CountContext';

const Count = () => {
    // return (
    //     <CountContext.Consumer>
    //         {
    //             ({count,increment,decrement})=>(
    //                 <>
    //                     <h1>카운트 : {count}</h1>
    //                     <p>
    //                         <button onClick={()=>increment()}>증가</button>
    //                         <button onClick={()=>decrement()}>감소</button>
    //                     </p>
    //                 </>
    //                 )
    //         }
    //     </CountContext.Consumer>
    // );

        // consumer 를 쓰니까 코드가 복잡해서 useContext 로 바꾼다 .

        const {count,increment,decrement}=useContext(CountContext)
        return (
            <>
                <h1>카운트 : {count}</h1>
                    <p>
                        <button onClick={()=>increment()}>증가</button>
                        <button onClick={()=>decrement()}>감소</button>
                    </p>
            </>
        );

};

export default Count;