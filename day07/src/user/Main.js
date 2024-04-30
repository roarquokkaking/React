import React from 'react';
import { Link } from 'react-router-dom';


const Main = () => {
    return (
        <div>
            <h1>React 프로젝트</h1>
            <nav className='menunav'>
                    <ul>
                        <li><Link to='/writeform'>회원가입</Link></li>
                        <li><Link to='/login'>로그인</Link></li>
                        <li><Link to='/boardwriteform'>글쓰기</Link></li>
                        <li><Link to='/boardlist'>목록</Link></li>
                        
                    </ul>
                </nav>

        </div>
    );
};

export default Main;