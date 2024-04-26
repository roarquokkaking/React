// import axios from 'axios';
// import React, { useEffect, useState } from 'react';

// const Movies = () => {
//     const [date,setDate] = useState('20240201')
//     const [list,setList] = useState({})
//     const [search,setSearch] =useState('')

//     const onSearch=(date)=>{
//         setSearch(date)
//     }

//     useEffect(()=>{
//         axios.get('https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt='+date)
//         .then(res=>setList(res.data))
//     },[search])
//     return (
//         <div>
//             <h1>날짜입력 (yyyymmdd) : </h1>
//             <input type='text' value={date} onChange={(e)=>setDate(e.target.value)}/>
//             <button onClick={()=>onSearch(date)}>검색</button>
//             <hr/>
//             <div>
//              {
                
//                 list.boxOfficeResult?.dailyBoxOfficeList?.map(item => <p key={item.rnum}>&emsp;{item.rnum}. {item.openDt} / {item.movieNm} </p>)
                
//             }  
//             </div>
            
//         </div>
//     );
// };

// export default Movies;



import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Movies = () => {
    const [date,setDate] = useState('20240201')
    const [list,setList] = useState([])
    const [search,setSearch] =useState('')

    const onSearch=(date)=>{
        setSearch(date)
    }

    useEffect(()=>{
        axios.get('https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt='+date)
        .then(res=>setList(res.data.boxOfficeResult.dailyBoxOfficeList))
    },[search])
    return (
        <div>
            <h1>날짜입력 (yyyymmdd) : </h1>
            <input type='text' value={date} onChange={(e)=>setDate(e.target.value)}/>
            <button onClick={()=>onSearch(date)}>검색</button>
            <hr/>
            <div>
             {
                
                list.map(item => <p key={item.rnum}>&emsp;{item.rnum}. {item.openDt} / {item.movieNm} </p>)
                
            }  
            </div>
            
        </div>
    );
};

export default Movies;

