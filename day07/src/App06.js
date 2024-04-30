import React from 'react';
import { Route, Routes } from 'react-router';
import Main from './user/Main';
import { BrowserRouter, Link } from 'react-router-dom';
import WriteForm from './user/WriteForm';
import Login from './user/Login';
import BoardWriteForm from './board/BoardWriteForm';
import BoardList from './board/BoardList';

const App06 = () => {
    return (
        
            <BrowserRouter>

             <>
             
                    <Routes>
                        <Route path='/' element={<Main/>}></Route>
                        <Route path='/writeform' element={<WriteForm/>}></Route>
                        <Route path='/login' element={<Login/>}></Route>
                        <Route path='/boardwriteform' element={<BoardWriteForm/>}></Route>
                        <Route path='/boardlist' element={<BoardList/>}></Route>
                    </Routes>
             </>

            </BrowserRouter>
            
        
    );
};

export default App06;